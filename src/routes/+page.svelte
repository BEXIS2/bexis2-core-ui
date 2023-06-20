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

<Page title="BEXIS2 Core UI Documentation">


</Page>



