<script lang="ts">
	import Table from '$lib/components/Table/TableContent.svelte';
	import type { TableConfig } from '$models/Models';

	export let config: TableConfig<any>;
	const data = config.data;
</script>

{#key $data.length && true}
	<Table {config} on:action />
{/key}
