<script lang="ts">

	import Page from '$lib/components/page/Page.svelte';
 import Toggle from '$lib/components/toggle/Toggle.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';


	let target;
	$: target;
 let value: boolean = false;

</script>

<Page title="Toggle">

<Toggle/>

<SlideToggle name="slide" bind:checked={value} >
 
</SlideToggle>

</Page>
