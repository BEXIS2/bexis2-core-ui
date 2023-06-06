<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = [];
	$: selectedtarget = ["AF"];
	$: selectedComplextarget = [{ name: 'Dominican Republic', code: 'DO' }];

	import { Countries } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect
		title="Return code as array"
		source={Countries}
		bind:target
		itemId="code"
		label="name"
		isComplex={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>


<div class="grid gap-10 mt-10">
	<MultiSelect
		title="Return complex object"
		source={Countries}
		bind:target={selectedComplextarget}
		itemId="code"
		label="name"
		isComplex={true}
		isTargetComplex={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(selectedComplextarget, undefined, 2)} />
</div>