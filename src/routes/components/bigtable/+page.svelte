<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
    import type { TableConfig } from '$lib/models/Models';

    import { testStore } from './data';
    import type { ResultRow } from './data';


    let loaded: boolean = false;
    let building: boolean = false;
    let synthRows: ResultRow[] = [];
    type BigTableConfig = TableConfig<ResultRow> & {
        clientDb?: boolean;
        clientDbSeedData?: ResultRow[];
        __initialServerCount?: number;
    };

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




</script>
<button class="btn variant-filled-success" on:click={synthLotsOfData} disabled={building}>
    {building ? 'building data...' : 'test'}
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
        <Table config={testConfig}/>
    </div>
{/if}