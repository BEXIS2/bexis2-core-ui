// Simple client-side DB wrapper using IndexedDB directly (no worker)
const DB_PREFIX = 'table-db-';

export function openDB(name) {
  const dbName = DB_PREFIX + name;
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('rows')) {
        db.createObjectStore('rows', { keyPath: '__id', autoIncrement: true });
      }
    };
    req.onsuccess = () => {
      const db = req.result;

      db.onversionchange = () => {
        db.close();
      };

      if (!db.objectStoreNames.contains('rows')) {
        const currentVersion = db.version;
        db.close();
        const upgradeReq = indexedDB.open(dbName, currentVersion + 1);
        upgradeReq.onupgradeneeded = () => {
          const upgradeDb = upgradeReq.result;
          if (!upgradeDb.objectStoreNames.contains('rows')) {
            upgradeDb.createObjectStore('rows', { keyPath: '__id', autoIncrement: true });
          }
        };
        upgradeReq.onsuccess = () => {
          const result = upgradeReq.result;
          result.onversionchange = () => {
            result.close();
          };
          resolve(result);
        };
        upgradeReq.onerror = () => reject(upgradeReq.error);
        upgradeReq.onblocked = () => reject(new Error(`IndexedDB upgrade blocked for "${dbName}" — close other tabs using this database`));
      } else {
        resolve(db);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

function clearStore(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('rows', 'readwrite');
    const store = tx.objectStore('rows');
    const req = store.clear();
    req.onsuccess = () => resolve(undefined);
    req.onerror = () => reject(req.error);
  });
}

function bulkInsert(db, rows) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('rows', 'readwrite');
    const store = tx.objectStore('rows');
    for (let i = 0; i < rows.length; i++) {
      store.add({ __r: rows[i] });
    }
    tx.oncomplete = () => resolve(undefined);
    tx.onerror = () => reject(tx.error);
  });
}

function matches(rowObj, q, filters) {
  const row = rowObj.__r || rowObj;

  if (q && q.length > 0) {
    const ql = String(q).toLowerCase();
    let found = false;
    for (const k in row) {
      const v = row[k];
      if (v == null) continue;
      if (typeof v === 'string' && v.toLowerCase().includes(ql)) {
        found = true;
        break;
      }
      if (typeof v === 'number' && String(v).includes(ql)) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }

  const normalizeKey = (k) => String(k || '').replaceAll('%%%', '.');
  const getValue = (column) => {
    const dot = normalizeKey(column);
    return row[dot] ?? row[column] ?? row[dot.replaceAll('.', '%%%')];
  };

  const asComparableNumber = (v) => {
    if (typeof v === 'number') return v;
    if (typeof v === 'bigint') return Number(v);
    const n = Number(v);
    return Number.isNaN(n) ? null : n;
  };

  const asTime = (v) => {
    if (v instanceof Date) return v.getTime();
    const d = new Date(v);
    const t = d.getTime();
    return Number.isNaN(t) ? null : t;
  };

  if (filters && filters.length > 0) {
    for (const f of filters) {
      const op = f.filterBy;
      const val = f.value;
      const actual = getValue(f.column);
      if (val == null) continue;

      const aStr = String(actual ?? '').toLowerCase();
      const vStr = String(val ?? '').toLowerCase();
      const aNum = asComparableNumber(actual);
      const vNum = asComparableNumber(val);
      const aDate = asTime(actual);
      const vDate = asTime(val);

      if (op === 'c' && !aStr.includes(vStr)) return false;
      if (op === 'nc' && aStr.includes(vStr)) return false;
      if (op === 'sw' && !aStr.startsWith(vStr)) return false;
      if (op === 'ew' && !aStr.endsWith(vStr)) return false;

      if (op === 'e' && actual != val) return false;
      if (op === 'ne' && actual == val) return false;

      if (op === 'gt') {
        if (aNum == null || vNum == null || !(aNum > vNum)) return false;
      }
      if (op === 'lt') {
        if (aNum == null || vNum == null || !(aNum < vNum)) return false;
      }
      if (op === 'gte') {
        if (aNum == null || vNum == null || !(aNum >= vNum)) return false;
      }
      if (op === 'lte') {
        if (aNum == null || vNum == null || !(aNum <= vNum)) return false;
      }

      if (op === 'o') {
        if (aDate == null || vDate == null || aDate !== vDate) return false;
      }
      if (op === 'sf' || op === 'a') {
        if (aDate == null || vDate == null || !(aDate > vDate || aDate === vDate)) return false;
      }
      if (op === 'u' || op === 'b') {
        if (aDate == null || vDate == null || !(aDate < vDate || aDate === vDate)) return false;
      }
      if (op === 'no') {
        if (aDate == null || vDate == null || aDate === vDate) return false;
      }
    }
  }

  return true;
}

export default class ClientDB {
  constructor(tableId) {
    this.tableId = tableId;
    this.db = null;
  }

  async _ensureDB() {
    if (this.db) {
      return this.db;
    }
    this.db = await openDB(this.tableId);
    const dbInstance = this.db;
    dbInstance.onversionchange = () => {
      dbInstance.close();
      this.db = null;
    };
    return this.db;
  }

  async init(rows) {
    await this._ensureDB();
    await clearStore(this.db);

    const CHUNK = 1000;
    for (let i = 0; i < rows.length; i += CHUNK) {
      const chunk = rows.slice(i, i + CHUNK);
      await bulkInsert(this.db, chunk);
      // Yield to keep the UI responsive while importing
      await new Promise((r) => setTimeout(r, 0));
    }

    return { tableId: this.tableId, count: rows.length };
  }

  async query({ q = '', filters = [], order = [], offset = 0, limit = 100 } = {}) {
    await this._ensureDB();

    const tx = this.db.transaction('rows', 'readonly');
    const store = tx.objectStore('rows');
    const req = store.openCursor();

    const matched = [];

    await new Promise((resolve, reject) => {
      req.onsuccess = (evt) => {
        const cursor = evt.target.result;
        if (!cursor) {
          resolve(undefined);
          return;
        }

        const rec = cursor.value;
        if (matches(rec, q, filters)) {
          matched.push(rec.__r || rec);
        }

        cursor.continue();
      };
      req.onerror = () => reject(req.error);
    });

    const getValue = (row, column) => {
      const dot = String(column || '').replaceAll('%%%', '.');
      return row[dot] ?? row[column] ?? row[dot.replaceAll('.', '%%%')];
    };

    if (order && order.length > 0) {
      const { column, direction } = order[0];
      const dir = direction === 'desc' ? -1 : 1;
      matched.sort((a, b) => {
        const av = getValue(a, column);
        const bv = getValue(b, column);

        if (av == null && bv == null) return 0;
        if (av == null) return -1 * dir;
        if (bv == null) return 1 * dir;

        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * dir;
        }

        if (typeof av === 'bigint' || typeof bv === 'bigint') {
          const ai = BigInt(av);
          const bi = BigInt(bv);
          if (ai === bi) return 0;
          return ai > bi ? dir : -dir;
        }

        const ad = new Date(av).getTime();
        const bd = new Date(bv).getTime();
        if (!Number.isNaN(ad) && !Number.isNaN(bd)) {
          return (ad - bd) * dir;
        }

        return String(av).localeCompare(String(bv)) * dir;
      });
    }

    const total = matched.length;
    const rows = matched.slice(offset, offset + limit);

    return { tableId: this.tableId, rows, total };
  }

  async clear() {
    await this._ensureDB();
    await clearStore(this.db);
  }

  destroy() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
