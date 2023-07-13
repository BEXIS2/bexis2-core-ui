<script lang="ts">
	import DropdownKvP from '$lib/components/form/DropdownKvP.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = { id: 2, text: 'gbif' };
	$: simpleTarget = 2;

	import { Metadatastructures } from './exampleData';

	function onChangeHandler() {
		console.log(target);
	}
</script>

<div class="grid gap-10">
	<h4 class="h4">Target is simple</h4>
	<DropdownKvP
		id="metadataStructure"
		title="Metadata Structure"
		bind:target={simpleTarget}
		source={Metadatastructures}
		on:change={onChangeHandler}
	/>

	<CodeBlock language="ts" code={JSON.stringify(simpleTarget, undefined, 2)} />

	<h4 class="h4">Target is complex</h4>
	<DropdownKvP
		id="metadataStructure"
		title="Structure"
		bind:target
		source={Metadatastructures}
		on:change={onChangeHandler}
		complexTarget={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
