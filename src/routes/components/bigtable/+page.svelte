<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
    import type { TableConfig } from '$lib/models/Models';

    import { testStore } from './data';
    import type { ResultRow } from './data';


    let loaded: boolean = false;
    var synthRows: ResultRow[] = [];

    function synthLotsOfData() {
		
		for (let i = 0; i < 20000; i++) {
			synthRows.push({
				inputID: i,
				status: "accepted",
				inputRank: "testRank",
				inputName: "Peter",
				matchType: "variant",
				id: i*2,
				rank: "testResultRank",
				label: "Professor Johannsen Dieterson Schmidt",
				scientificName: "Im a very sci-fi name",
				authorship: "Author of the year",
			})
		}

		testStore.set(synthRows);
        loaded = true;
	}

  
    const testConfig: TableConfig<ResultRow> = {						
		id: 'resultRows',						
		data: testStore,
		resizable: "columns",
		height: 700,
		fitToScreen: false,
		defaultPageSize: 50,
		pageSizes: [20, 50, 100],
		showColumnsMenu: true,		
		columns: {							
			inputID: {								
				header: 'inputID',
                disableFiltering: true,
                disableSorting: true
			},
            status: {
                disableFiltering: true,
                disableSorting: true
            },
            inputRank: {
                disableFiltering: true,
                disableSorting: true
            },
            inputName: {
                disableFiltering: true,
                disableSorting: true
            },
            matchType: {
                disableFiltering: true,
                disableSorting: true
            },
            id: {
                disableFiltering: true,
                disableSorting: true
            },
            rank: {
                disableFiltering: true,
                disableSorting: true
            },
            label: {
                disableFiltering: true,
                disableSorting: true
            },
            scientificName: {
                disableFiltering: true,
                disableSorting: true
            },
            authorship: {
                disableFiltering: true,
                disableSorting: true
            },
		},
	};




</script>
<button class="btn variant-filled-success" on:click={synthLotsOfData} >test</button>

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