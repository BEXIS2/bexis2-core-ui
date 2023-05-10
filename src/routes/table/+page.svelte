<script lang="ts">
    import "$lib/css/themes/theme-bexis2.css";

	import Table from '$lib/components/Table/Table.svelte';
	import { userGroups, users } from '$lib/components/Table/data';
	import TableOptions from '$lib/components/Table/TableOptions.svelte';
</script>

<div class="grid gap-10 p-10 relative">
	<h1>Groups</h1>
	<Table data={userGroups} component={TableOptions} />

	<h1>Users <span class="text-xl">IDs excluded</span></h1>
	<Table data={users} component={TableOptions} excluded={['id']} />
</div>
