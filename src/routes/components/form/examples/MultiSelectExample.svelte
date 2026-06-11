<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	let target = ['Canada', 'Armenia'];
	$: target;

	let singletarget = 'Canada';
	$: singletarget;

	import { CountrieNames } from './exampleData';
	import Select from 'svelte-select';


	let items = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];

</script>

<div class="grid gap-10">
	<MultiSelect id="multi_select_example" title="Required input fields" source={CountrieNames} bind:target />
	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>

<hr/>
<div class="py-5">
<Select

		items={items}

		label="water"
		bind:value={singletarge}
		clearFilterTextOnBlur={false}
	/>

	{singletarget["value"]} - {singletarget["label"]}

	</div>