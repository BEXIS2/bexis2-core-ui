<script lang="ts">
	import Table from '$lib/components/Table/TableContent.svelte';
	import type { TableConfig } from '$models/Models';

	export let config: TableConfig<any>;

	let fetched = false;
	const data = config.data;

	$: if ($data.length > 0) fetched = true;
</script>

{#key fetched}
	<Table
		{config}
		on:fetch={(columns) => (config = { ...config, columns: columns.detail })}
		on:action
	/>
{/key}
