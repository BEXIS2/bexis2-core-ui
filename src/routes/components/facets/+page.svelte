<script lang="ts">
	import FacetsNoGroupSelection from './examples/FacetsNoGroupSelection.svelte';
	import FacetsGroupSelection from './examples/FacetsGroupSelection.svelte';
	import FacetsProps from './docs/FacetsProps.svelte';
	import FacetsTypes from './docs/FacetsTypes.svelte';
</script>

<div class="grid gap-20 p-10 dark:bg-surface-800">
	<div class="grid gap-5">
		<h1 class="font-bold !text-6xl">Facets</h1>
		<h2 class="h2">Props</h2>
		<FacetsProps />
	</div>
	<div class="grid gap-5">
		<h2 class="h2">Types</h2>
		<FacetsTypes />
	</div>
	<div class="grid gap-5">
		<FacetsNoGroupSelection />
		<FacetsGroupSelection />
	</div>
</div>
