<script lang="ts">
	import DropdownKvP from '$lib/components/form/DropdownKvP.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = { id: 2, text: 'gbif' };

	import { Metadatastructures } from './exampleData';

	function onChangeHandler() {
		console.log(target);
	}
</script>

<div class="grid gap-10">
	<DropdownKvP
		id="metadataStructure"
		title="Structure"
		bind:target
		source={Metadatastructures}
		on:change={onChangeHandler}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
