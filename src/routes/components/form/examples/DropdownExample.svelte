<script lang="ts">
	import Dropdown from '$lib/components/form/Dropdown.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';


	$: simpleTarget = undefined;

	import { CountrieNames } from './exampleData';

	function onChangeHandler() {
		console.log(target);
	}
</script>

<div class="grid gap-10">
	<h4 class="h4">Simple example</h4>
	<Dropdown
		id="metadataStructure"
		title="Metadata Structure"
		bind:target={simpleTarget}
		source={CountrieNames}
		on:change={onChangeHandler}
	/>

	<CodeBlock language="ts" code={JSON.stringify(simpleTarget, undefined, 2)} />

</div>
