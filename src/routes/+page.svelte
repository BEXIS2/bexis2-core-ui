<script lang="ts">
 import Page from "$lib/components/page/Page.svelte";
 import MultiSelect from "$lib/components/form/MultiSelect.svelte";
	import { CountrieNames } from '../routes/components/form/examples/exampleData';

	import { SlideToggle } from "@skeletonlabs/skeleton";

	let target;
	$: target;

let value: boolean = false;
let label="toggle till the end of time";


import Select from 'svelte-select';

	const items = [
		{value: 'chocolate', label: '🍫 Chocolate', group: 'Sweet'},
    {value: 'pizza', label: '🍕 Pizza', group: 'Savory'},
    {value: 'cake', label: '🎂 Cake', group: 'Sweet'},
    {value: 'cookies', label: '🍪 Cookies', group: 'Savory'},
    {value: 'ice-cream', label: '🍦 Ice Cream', group: 'Sweet'}
	];
	
	let selectedValue = undefined;

</script>

<Page title="BEXIS2 Core UI Documentation" note="test">


	
<br/>
<input type="text" class="input variant-form-material">

<SlideToggle name="{label}" bind:checked={value} on:change>{label}</SlideToggle>


<MultiSelect title="Required input fields" source={CountrieNames} bind:target />

<MultiSelect title="Required input fields2" source={CountrieNames} bind:target />

<SlideToggle name="{label}" bind:checked={value} on:change>{label}</SlideToggle>

<div class="pt-3"><b>Value:</b> {value}</div>





<div class="z">
	🦓	🦓	🦓	🦓	🦓	🦓	🦓	🦓	🦓	🦓
</div>


</Page>

<style>
	.z { position: absolute; top: 55px; background: white; z-index:9; padding: 10px; }
	.select { background: white; width: 300px; position: relative; z-index: 11; }
</style>


