<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let value: boolean = false;
	let label = 'toggle till the end of time';
</script>

<Switch name={label} bind:checked={value} label={label} on:change>{label}</Switch>
<div class="pt-3"><b>Value:</b> {value}</div>
