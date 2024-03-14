<script lang="ts">
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { serverSideTableHTML } from '../data/codeBlocks';
	import type { TableConfig } from '$lib/models/Models';

	type ServerTableType = {
		id: number;
		name: string;
	};

	const tableStore = writable<ServerTableType[]>([]);

	const serverTableConfig: TableConfig<ServerTableType> = {
		id: 'serverTable', // a unique id for the table
		entityId: 3, // dataset ID
		versionId: -1, // vesion ID
		data: tableStore, // store to hold and retrieve data
		serverSide: true, // serverSide needs to be set to true
		// URL for the table to be fetched from
		URL: 'https://dev.bexis2.uni-jena.de/api/datatable/',
		token: '<your_token>' // API token to access the datasets
	};
</script>

<div id="serverTableExample">
	<CodeContainer title="Server-side table" svelte={serverSideTableHTML}>
		<Table config={serverTableConfig} />
	</CodeContainer>
</div>
