<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';
	import TableProps from './docs/TableProps.svelte';
	import TableConfigDocs from './docs/TableConfigDocs.svelte';
	import ColumnsDocs from './docs/ColumnsDocs.svelte';
	import ColumnDocs from './docs/ColumnDocs.svelte';
	import ColumnInstructionsDocs from './docs/ColumnInstructionsDocs.svelte';
	import TableExamplesDocs from './docs/TableExamplesDocs.svelte';
	import ActionDispatchersDocs from './docs/ActionDispatchersDocs.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
</script>

<div
	class="grid gap-20 p-10 dark:bg-surface-800"
	use:tocCrawler={{ mode: 'generate', scrollTarget: '#page-content' }}
>
	<div class="grid gap-5">
		<h1 class="font-bold !text-6xl">Table</h1>
		<h2 class="h2">Props</h2>
		<TableProps />
		<h2 class="h2">Types</h2>
		<TableConfigDocs />
	</div>
	<ColumnsDocs />
	<ColumnDocs />
	<ColumnInstructionsDocs />
	<div class="grid gap-5">
		<h2 class="h2">Action Dispatchers</h2>
		<ActionDispatchersDocs />
	</div>
	<TableExamplesDocs />
</div>
