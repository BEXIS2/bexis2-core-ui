// @ts-nocheck
// Lightweight web worker that stores rows in IndexedDB and answers simple queries
const DB_PREFIX = 'table-db-';

function openDB(name) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_PREFIX + name, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('rows')) {
        db.createObjectStore('rows', { keyPath: '__id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function clearStore(db) {
  return new Promise((res, rej) => {
    const tx = db.transaction('rows', 'readwrite');
    const store = tx.objectStore('rows');
    const r = store.clear();
    r.onsuccess = () => res(undefined);
    r.onerror = () => rej(r.error);
  });
}

async function bulkInsert(db, rows) {
  return new Promise((res, rej) => {
    const tx = db.transaction('rows', 'readwrite');
    const store = tx.objectStore('rows');
    for (let i = 0; i < rows.length; i++) {
      // wrap row to avoid clashes with internal __id
      const toPut = { __r: rows[i] };
      store.add(toPut);
    }
    tx.oncomplete = () => res(undefined);
    tx.onerror = () => rej(tx.error);
  });
}

function matches(rowObj, q, filters) {
  const row = rowObj.__r || rowObj;
  // full text query
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

  // simple equality filters: filters is array of {column, filterBy, value}
  if (filters && filters.length > 0) {
    for (const f of filters) {
      const col = (f.column || '').replaceAll('%%%', '.');
      const val = f.value;
      const actual = row[col] ?? row[f.column] ?? row[col.replaceAll('.', '%%%')];
      if (val == null) continue;
      if (typeof actual === 'string') {
        if (!String(actual).toLowerCase().includes(String(val).toLowerCase())) return false;
      } else if (typeof actual === 'number') {
        if (Number(val) !== actual) return false;
      } else {
        if (actual !== val) return false;
      }
    }
  }

  return true;
}

// handle messages
let dbs = {};
let initCounts = {};
self.addEventListener('message', async (e) => {
  const { type, payload } = e.data;
  try {
    if (type === 'init-start') {
      const { tableId } = payload;
      const db = await openDB(tableId);
      await clearStore(db);
      dbs[tableId] = db;
      initCounts[tableId] = 0;
      postMessage({ type: 'init-ack', payload: { tableId } });
      return;
    }

    if (type === 'init-chunk') {
      const { tableId, rows } = payload;
      const db = dbs[tableId] || (await openDB(tableId));
      await bulkInsert(db, rows);
      initCounts[tableId] = (initCounts[tableId] || 0) + rows.length;
      postMessage({ type: 'init-progress', payload: { tableId, inserted: initCounts[tableId] } });
      return;
    }

    if (type === 'init-done') {
      const { tableId } = payload;
      const total = initCounts[tableId] || 0;
      postMessage({ type: 'inited', payload: { tableId, count: total } });
      delete initCounts[tableId];
      return;
    }

    if (type === 'init') {
      const { tableId, rows } = payload;
      const db = await openDB(tableId);
      await clearStore(db);
      // insert in chunks to avoid blocking
      const CHUNK = 1000;
      for (let i = 0; i < rows.length; i += CHUNK) {
        const chunk = rows.slice(i, i + CHUNK);
        await bulkInsert(db, chunk);
      }
      dbs[tableId] = db;
      postMessage({ type: 'inited', payload: { tableId, count: rows.length } });
    }

    if (type === 'query') {
      const { tableId, q, filters = [], offset = 0, limit = 100 } = payload;
      const db = dbs[tableId] || (await openDB(tableId));
      dbs[tableId] = db;

      const tx = db.transaction('rows', 'readonly');
      const store = tx.objectStore('rows');
      const req = store.openCursor();

      const results = [];
      let total = 0;
      let skipped = 0;

      await new Promise((res, rej) => {
        req.onsuccess = (evt) => {
          const cursor = evt.target.result;
          if (!cursor) {
            res();
            return;
          }
          const rec = cursor.value;
          if (matches(rec, q, filters)) {
            total++;
            if (skipped < offset) {
              skipped++;
            } else if (results.length < limit) {
              results.push(rec.__r || rec);
            }
          }
          cursor.continue();
        };
        req.onerror = () => rej(req.error);
      });

      postMessage({ type: 'result', payload: { tableId, rows: results, total } });
    }

    if (type === 'clear') {
      const { tableId } = payload;
      const db = dbs[tableId] || (await openDB(tableId));
      await clearStore(db);
      postMessage({ type: 'cleared', payload: { tableId } });
    }
  } catch (err) {
    postMessage({ type: 'error', payload: { message: err?.message ?? String(err) } });
  }
});

export {};
