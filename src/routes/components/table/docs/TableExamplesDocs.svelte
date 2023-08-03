<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton';

	import TableCrud from '../examples/TableCRUD.svelte';
	import TableUsersNoRoles from '../examples/TableUsersNoRoles.svelte';
	import TableUsers from '../examples/TableUsers.svelte';
	import TableDate from '../examples/TableDate.svelte';
	import TableUsersAndAdmins from '../examples/TableUsersAndAdmins.svelte';
	import TableUrLs from '../examples/TableURLs.svelte';
	import TableCombination from '../examples/TableCombination.svelte';
	import TableGroups from '../examples/TableGroups.svelte';
	import TableSimple from '../examples/TableSimple.svelte';
</script>

<div class="grid gap-1">
	<h2 class="h2">Examples</h2>
	<TableSimple />
	<TableGroups />
	<TableUsers />
	<div id="actionDispatchersExamples" class="my-20">
		<h2 class="h2">Dispatching Actions</h2>
		<TableUsersNoRoles />
		<TableCrud />
	</div>
	<div id="complexTypes">
		<h2 class="h2">Complex data types</h2>
		<TableDate />
		<TableCombination />
		<TableUrLs />
		<TableUsersAndAdmins />
	</div>
</div>

<Modal />
