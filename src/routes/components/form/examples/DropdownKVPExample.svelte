<script lang="ts">
	import DropdownKVP from '$lib/components/form/DropdownKVP.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import type { Input } from '$lib/models/Models';

	$: target = { id: 2, text: 'gbif' };

	import {Metadatastructures} from './exampleData'

	function onChangeHandler() {
		console.log(target);
	}
</script>

<div class="grid gap-10">
	<DropdownKVP
		id="metadataStructure"
		title="Structure"
		bind:target
		source={Metadatastructures}
		on:change={onChangeHandler}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
