// Simple client-side DB wrapper using IndexedDB directly (no worker)
// const DB_PREFIX = 'table-db-';
const DB_NAME = 'bexis-table-db'

export function openDbTable(tablename) {
  // const dbName = DB_PREFIX + name;

  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME);
    
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(tablename)) {
        db.createObjectStore(tablename, { keyPath: '__r.__id', autoIncrement: true });
      }
    };

    req.onsuccess = () => {
      const db = req.result;

      db.onversionchange = () => {
        db.close();
      };

      if (!db.objectStoreNames.contains(tablename)) {
        const currentVersion = db.version;
        db.close();
        const upgradeReq = indexedDB.open(DB_NAME, currentVersion + 1);
        upgradeReq.onupgradeneeded = () => {
          const upgradeDb = upgradeReq.result;
          if (!upgradeDb.objectStoreNames.contains(tablename)) {
            upgradeDb.createObjectStore(tablename, { keyPath: '__r.__id', autoIncrement: true });
          }
        };
        upgradeReq.onsuccess = () => {
          const result = upgradeReq.result;
          result.onversionchange = () => {
            result.close();
          };
          resolve(result);
        };
        upgradeReq.onblocked = () => reject(new Error(`IndexedDB upgrade blocked for "${DB_NAME}" — close other tabs using this database`));
        upgradeReq.onerror = () => reject(upgradeReq.error);
      } else {
        resolve(db);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

function clearStore(db, tablename) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(tablename, 'readwrite');
    const store = tx.objectStore(tablename);
    const req = store.clear(tablename);
    req.onsuccess = () => resolve(undefined);
    req.onerror = () => reject(req.error);
  });
}

function bulkInsert(db, rows, tablename) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(tablename, 'readwrite');
    const store = tx.objectStore(tablename);
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

  async _ensureDB(tablename) {
    // return if instance already exists
    if (this.db) {
      return this.db;
    }

    // new instance
    this.db = await openDbTable(tablename);
    const dbInstance = this.db;

    // trigger connection close on version change
    dbInstance.onversionchange = () => {
      dbInstance.close();
      this.db = null;
    };
    
    return this.db;
  }

  async init(rows) {
    await this._ensureDB(this.tableId);
    await clearStore(this.db, this.tableId);

    const CHUNK = 1000;
    for (let i = 0; i < rows.length; i += CHUNK) {
      const chunk = rows.slice(i, i + CHUNK);
      await bulkInsert(this.db, chunk, this.tableId);
      // Yield to keep the UI responsive while importing
      await new Promise((r) => setTimeout(r, 0));
    }

    return { tableId: this.tableId, count: rows.length };
  }

  async query({ q = '', filters = [], order = [], offset = 0, limit = 100 } = {}) {
    await this._ensureDB(this.tableId);

    const tx = this.db.transaction(this.tableId, 'readonly');
    const store = tx.objectStore(this.tableId);
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

  async clear(tablename) {
    await this._ensureDB(tablename);
    await clearStore(this.db, tablename);
  }

  // async ensureIndex(columnName) {
  //   const indexName = `__r.by${columnName}`;
  //   await this._ensureDB();

  //   const exists = await new Promise((resolve, reject) => {
  //     const tx = this.db.transaction(this.tableId, 'readonly');
  //     const store = tx.objectStore(this.tableId);
  //     resolve(store.indexNames.contains(indexName));
  //     tx.onerror = () => reject(tx.error);
  //   });

  //   if (exists) return;

  //   const dbName = DB_PREFIX + this.tableId;
  //   const currentVersion = this.db.version;
  //   this.db.close();
  //   this.db = null;

  //   await new Promise((resolve, reject) => {
  //     const upgradeReq = indexedDB.open(dbName, currentVersion + 1);
  //     upgradeReq.onupgradeneeded = (event) => {
  //       const upgradeDb = event.target.result;
  //       const store = event.target.transaction.objectStore(this.tableId);
  //       if (!store.indexNames.contains(indexName)) {
  //         store.createIndex(indexName, `__r.${columnName}`);
  //       }
  //     };
  //     upgradeReq.onsuccess = () => {
  //       upgradeReq.result.close();
  //       resolve();
  //     };
  //     upgradeReq.onerror = () => reject(upgradeReq.error);
  //     upgradeReq.onblocked = () =>
  //       reject(new Error(`IndexedDB upgrade blocked for "${dbName}" — close other tabs using this database`));
  //   });

  //   await this._ensureDB();
  // }

  async getByIndex(columnName, value) {
    await this._ensureDB(this.tableId);
    const indexName = `__r.by${columnName}`;

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readonly');
      const store = tx.objectStore(this.tableId);
      if (!store.indexNames.contains(indexName)) {
        resolve(undefined);
        return;
      }
      const req = store.index(indexName).getAll(value);
      req.onsuccess = () => resolve(req.result[0]);
      req.onerror = () => resolve(undefined);
    });
  }

  async get(key) {
    await this._ensureDB(this.tableId);

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readonly');
      const store = tx.objectStore(this.tableId);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    });
  }

  async getAll() {
    await this._ensureDB(this.tableId);

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readonly');
      const store = tx.objectStore(this.tableId);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    });
  }

  async replace(records) {
    await this._ensureDB(this.tableId);
    await new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      
      tx.oncomplete = () => resolve(undefined);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error('Transaction aborted'));

      store.clear(this.tableId);
      const CHUNK = 1000;
      for (let i = 0; i < records.length; i += CHUNK) {
        const chunk = records.slice(i, i + CHUNK);
        
        for (let i = 0; i < chunk.length; i++) {
          store.add({ __r: chunk[i] });
        }
      }
    });
    return { tableId: this.tableId, count: records.length };
  }

  async put(record) {
    await this._ensureDB(this.tableId);
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      const req = store.put(record);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async put(record, key) {
    await this._ensureDB(this.tableId);
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      const req = store.put(record, key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async bulkPut(records) {
    await this._ensureDB(this.tableId);
    const keys = [];
    await new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      for (let i = 0; i < records.length; i++) {
        const req = store.put(records[i]);
        req.onsuccess = () => keys.push(req.result);
      }
      tx.oncomplete = () => resolve(keys);
      tx.onerror = () => reject(tx.error);
    });
    return keys;
  }

  async delete(key) {
    await this._ensureDB(this.tableId);
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      const req = store.delete(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async bulkDelete(keys) {
    await this._ensureDB(this.tableId);
    await new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readwrite');
      const store = tx.objectStore(this.tableId);
      for (let i = 0; i < keys.length; i++) {
        store.delete(keys[i]);
      }
      tx.oncomplete = () => resolve(undefined);
      tx.onerror = () => reject(tx.error);
    });
  }

  async count() {
    await this._ensureDB(this.tableId);
    return await new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.tableId, 'readonly');
      const store = tx.objectStore(this.tableId);
      const countRequest = store.count();

      countRequest.onsuccess = () => resolve(countRequest.result);
      countRequest.onerror = () => resolve(undefined);
    });
  }

  destroy() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
