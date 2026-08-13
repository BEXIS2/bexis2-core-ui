<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
	import { openDB as openClientDB } from '$lib/components/Table/clientDB.js';
	import type { TableConfig } from '$lib/models/Models';
	import { writable } from 'svelte/store';

	import { testStore } from './data';
	import type { ResultRow } from './data';
	import data from './Reference.tsv?raw';

	let loaded: boolean = false;
	let building: boolean = false;
	let synthRows: ResultRow[] = [];
	const refreshTrigger = writable(0);
	type BigTableConfig = TableConfig<ResultRow> & {
		clientDb?: boolean;
		clientDbSeedData?: ResultRow[];
		__initialServerCount?: number;
		clientDbRefresh?: typeof refreshTrigger;
	};

	function readDataToJSON() {
		// read file  behind data/Reference.tsv and convert to JSON
		const rows: ResultRow[] = data
			.split('\n')
			.slice(1)
			.map((line, i) => {
				// ID	alternativeID	sourceID	citation	type	author	title	containerAuthor	containerTitle	issued	volume	issue	page	publisher	publisherPlace	link	remarks
				const [
					ID,
					alternativeID,
					sourceID,
					citation,
					type,
					author,
					title,
					containerAuthor,
					containerTitle,
					issued,
					volume,
					issue,
					page,
					publisher,
					publisherPlace,
					link,
					remarks
				] = line.split('\t');
				// if Nan convert to ""
				return {
					ID: parseInt(ID) || '',
					alternativeID: alternativeID || '',
					sourceID: parseInt(sourceID) || '',
					citation: citation || '',
					type: type || '',
					author: author || '',
					title: title || '',
					containerAuthor: containerAuthor || '',
					containerTitle: containerTitle || '',
					issued: issued || '',
					volume: parseInt(volume) || '',
					issue: parseInt(issue) || '',
					page: parseInt(page) || '',
					publisher: publisher || '',
					publisherPlace: publisherPlace || '',
					link: link || '',
					remarks: remarks || ''
				};
			});
		console.log('rows', rows);
		synthRows = rows;
		synthRows = rows;
		// Keep Svelte headless table light: only first page in the store.
		testStore.set(rows.slice(0, 50));
		testConfigLifeGate = {
			...testConfigLifeGate,
			clientDbSeedData: rows,
			__initialServerCount: rows.length
		};
		loaded = true;
		building = false;
	}
	/*
    async function synthLotsOfData() {
        building = true;
        loaded = false;
        const total = 20000;
        const rows: ResultRow[] = Array.from({ length: total }, (_, i) => ({
            inputID: i,
            status: 'accepted',
            inputRank: 'testRank',
            inputName: 'Peter',
            matchType: 'variant',
            id: i * 2,
            rank: 'testResultRank',
            label: 'Professor Johannsen Dieterson Schmidt',
            scientificName: 'Im a very sci-fi name',
            authorship: 'Author of the year',
            active: true
        }));

        synthRows = rows;
        // Keep Svelte headless table light: only first page in the store.
        testStore.set(rows.slice(0, 50));
        testConfig = {
            ...testConfig,
            clientDbSeedData: rows,
            __initialServerCount: rows.length
        };
        loaded = true;
        building = false;
	}
*/
	let testConfigLifeGate: BigTableConfig = {
		id: 'resultRows',
		data: testStore,
		// Enable client-side DB mode to keep Svelte memory low for large tables
		clientDb: true,
		clientDbSeedData: [],
		clientDbRefresh: refreshTrigger,
		__initialServerCount: 0,
		resizable: 'columns',
		height: 700,
		fitToScreen: false,
		defaultPageSize: 50,
		pageSizes: [20, 50, 100],
		showColumnsMenu: true,
		columns: {
			ID: {
				header: 'ID'
			},
			alternativeID: {
				header: 'alternativeID'
			},
			sourceID: {
				header: 'sourceID'
			}
		}
	};

	// get the row with a certain ID from the indexedDB store and update this row and save in the indexedDB store
	async function updateRowInIndexedDB(record: { __id: number; __r: ResultRow }): Promise<void> {
		const db = await openClientDB('resultRows');
		return new Promise((resolve, reject) => {
			const tx = db.transaction('rows', 'readwrite');
			const store = tx.objectStore('rows');
			const putReq = store.put(record);
			putReq.onsuccess = () => {
				console.log('put() wrote __id:', putReq.result); // should match record.__id
				resolve();
			};
			putReq.onerror = () => {
				console.error('put() failed:', putReq.error);
				reject(putReq.error);
			};
			tx.oncomplete = () => db.close();
		});
	}
	// get by the column alternativeID
	async function getRowFromIndexedDB(
		id: number,
		columnName: string
	): Promise<{ __id: number; __r: ResultRow } | undefined> {
		try {
			const db = await openClientDB('resultRows');
			return await new Promise((resolve) => {
				const tx = db.transaction('rows', 'readonly');
				const store = tx.objectStore('rows');
				const indexName = `__r.by${columnName}`;
				if (!store.indexNames.contains(indexName)) {
					console.warn(`Index "${indexName}" does not exist on store "rows"`);
					resolve(undefined);
					return;
				}
				const getReq = store.index(indexName).getAll(id); // matches keyPath __r.byID
				getReq.onsuccess = () => resolve(getReq.result[0]); // full record: {__id, __r}
				getReq.onerror = () => resolve(undefined);
				tx.oncomplete = () => db.close();
			});
		} catch (e) {
			console.error('getRowFromIndexedDB failed:', e);
			return undefined;
		}
	}

	async function createIndexIfMissing(columnName: string): Promise<void> {
		const dbName = 'table-db-resultRows';
		const indexName = `__r.by${columnName}`;

		const db = await openClientDB('resultRows');
		const tx = db.transaction('rows', 'readonly');
		const store = tx.objectStore('rows');
		const alreadyExists = store.indexNames.contains(indexName);
		console.log(`Index ${indexName} already exists:`, alreadyExists);
		db.close();

		if (alreadyExists) {
			return;
		}

		const currentVersionRequest = await new Promise<IDBDatabase>((resolve, reject) => {
			const req = indexedDB.open(dbName);
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => reject(req.error);
		});
		const currentVersion = currentVersionRequest.version;
		currentVersionRequest.close();

		return new Promise((resolve, reject) => {
			const upgradeRequest = indexedDB.open(dbName, currentVersion + 1);
			upgradeRequest.onupgradeneeded = (event) => {
				const upgradeDb = (event.target as IDBOpenDBRequest).result;
				upgradeDb.onversionchange = () => upgradeDb.close();
				const upgradeStore = (event.target as IDBOpenDBRequest).transaction!.objectStore('rows');
				if (!upgradeStore.indexNames.contains(indexName)) {
					upgradeStore.createIndex(indexName, `__r.${columnName}`); // <-- nested keyPath
					console.log(`Created index ${indexName} on keyPath __r.${columnName}`);
				}
			};
			upgradeRequest.onsuccess = () => {
				upgradeRequest.result.close();
				resolve();
			};
			upgradeRequest.onerror = () => reject(upgradeRequest.error);
			upgradeRequest.onblocked = () =>
				reject(
					new Error(
						`IndexedDB version upgrade blocked for "${dbName}" — close other tabs using this database`
					)
				);
		});
	}

	async function debugStore() {
		const db = await openClientDB('resultRows');
		const tx = db.transaction('rows', 'readonly');
		const store = tx.objectStore('rows');
		const req = store.getAll();
		req.onsuccess = (e) => {
			console.log('Sample row:', JSON.stringify((e.target as IDBRequest).result[0], null, 2));
			db.close();
		};
		req.onerror = () => db.close();
	}

		async function updateRow() {
		await createIndexIfMissing('ID');

		// Confirm the index actually has entries now
		/*const request = indexedDB.open('table-db-resultRows');
  request.onsuccess = () => {
    const db = request.result;
    const tx = db.transaction('rows', 'readonly');
    const store = tx.objectStore('rows');
    console.log('Indexes on store:', Array.from(store.indexNames));
    store.index('__r.byID').count().onsuccess = (e) => {
      console.log('__r.byID count:', (e.target as IDBRequest).result);
    };
    db.close();
  };*/

		const record = await getRowFromIndexedDB(3475613, 'ID');
		console.log('record:', record);

		if (!record) {
			console.warn('No row found with ID 3475613');
			return;
		}

		record.__r.containerAuthor = 'Updated Author';
		await updateRowInIndexedDB(record);

		// re-fetch fresh from DB, not the in-memory object, to prove it actually persisted
		const verify = await getRowFromIndexedDB(3475613, 'ID');
		console.log('After update (re-fetched from DB):', verify?.__r.containerAuthor);

		// Trigger table refresh so the updated row is visible immediately
		refreshTrigger.update((n) => n + 1);
	}
	/*
    let testConfig: BigTableConfig = {						
		id: 'resultRows',						
		data: testStore,
        // Enable client-side DB mode to keep Svelte memory low for large tables
        clientDb: true,
        clientDbSeedData: [],
		__initialServerCount: 0,
		resizable: "columns",
		height: 700,
		fitToScreen: false,
		defaultPageSize: 50,
		pageSizes: [20, 50, 100],
		showColumnsMenu: true,		
		columns: {							
			inputID: {								
				header: 'inputID',
                
			},
            status: {
                
            },
            inputRank: {
              
            },
            inputName: {
               
            },
            matchType: {
               
            },
            id: {
                
            },
            rank: {
                
            },
            label: {
                
            },
            scientificName: {
               
            },
            authorship: {
                
            },
            active: {
                
            }
		},
	};
*/
</script>

<!---<button class="btn variant-filled-success" on:click={synthLotsOfData} disabled={building}>
    {building ? 'building data...' : 'test'}
</button>-->
<!--update button-->
<button class="btn variant-filled-success" on:click={updateRow} disabled={building}>
	{building ? 'building data...' : 'update row with ID 3475613'}
</button>
<button class="btn variant-filled-success" on:click={readDataToJSON} disabled={building}>
	{building ? 'building data...' : 'load Reference.tsv'}
</button>
<button class="btn variant-filled-primary" on:click={() => refreshTrigger.update((n) => n + 1)}>
	Refresh table
</button>


<!-- <table>
    {#each $testStore as row}
        <tr>
            <td>{row.inputID}</td>
            <td>{row.status}</td>
            <td>{row.inputRank}</td>
            <td>{row.inputName}</td>
            <td>{row.matchType}</td>
            <td>{row.id}</td>
            <td>{row.rank}</td>
            <td>{row.label}</td>
            <td>{row.scientificName}</td>
            <td>{row.authorship}</td>
        </tr>
    {/each}
</table> -->

{#if loaded}
	<div class="flex items-center justify-center">
		<Table config={testConfigLifeGate} />
	</div>
{/if}
