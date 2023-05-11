<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';

	import Table from '$lib/components/Table/Table.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import TableOptions from '$lib/components/Table/TableOptions.svelte';
	import { userGroups, users } from '$lib/components/Table/data';
</script>

<div class="grid gap-5 p-10 relative">
	<h1>Groups</h1>
	<Table data={userGroups} optionsComponent={TableOptions} filterComponent={TableFilter} />

	<h1>Users <span class="text-xl">IDs excluded</span></h1>
	<Table
		data={users}
		optionsComponent={TableOptions}
		filterComponent={TableFilter}
		excluded={['id']}
		pageSizes={[1, 2, 3]}
		defaultPageSize={2}
	/>
</div>
