<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { setApiConfig } from '$lib';
	import { serverSideTableHTML } from '../data/codeBlocks';
	import type { TableConfig } from '$lib/models/Models';

	type ServerTableType = {
		id: number;
		name: string;
	};

	let serverTableConfig: TableConfig<ServerTableType>;

	onMount(async () => {
		setApiConfig('http://localhost:44345', 'admin', '123456');
		const tableStore = writable<ServerTableType[]>([]);

		serverTableConfig = {
			id: 'serverTable', // a unique id for the table
			data: tableStore, // store to hold and retrieve data
			server: {
				// URL for the table to be fetched from
				baseUrl: 'http://localhost:44345/api/datatable/',
				entityId: 1, // dataset ID
				versionId: -1 // version ID
			}
		};
	});
</script>

<div id="serverTableExample">
	<CodeContainer title="Server-side table" svelte={serverSideTableHTML}>
		{#if serverTableConfig}
			<Table config={serverTableConfig} />
		{/if}
	</CodeContainer>
</div>
