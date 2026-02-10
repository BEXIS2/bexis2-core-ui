<script lang="ts">

	import Page from '$lib/components/page/Page.svelte';
	import Toggle from '$lib/components/toggle/Toggle.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let target;
	$: target;
	let value: boolean = false;
	let label = 'toggle till the end of time';

</script>

<Page title="Toggle">

<Toggle />

<Switch name="slide" bind:checked={value} label={label}>

</Switch>

</Page>
