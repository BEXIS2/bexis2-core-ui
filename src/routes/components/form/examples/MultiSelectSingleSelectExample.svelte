<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	let target = 'Canada';
	let targetB = { code: '', name: '' };
	let targetC = {};
	$: target;
	$: targetB;
	$: targetC;

	import { CountrieNames, Countries, MetadatastructuresGrouped } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect
		id="title"
		title="Target is a single value"
		source={CountrieNames}
		bind:target
		isMulti={false}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>

<div class="grid gap-10 pt-5">
	<MultiSelect
		id="title"
		title="Source  & target is complex and return  a single complex value"
		source={Countries}
		bind:target={targetB}
		itemId="code"
		itemLabel="name"
		complexSource={true}
		complexTarget={true}
		isMulti={false}
	/>

	<CodeBlock language="ts" code={JSON.stringify(targetB, undefined, 2)} />
</div>

<div class="grid gap-10 pt-5">
	<MultiSelect
		id="title"
		title="Grouped complex source single complex value"
		source={MetadatastructuresGrouped}
		bind:target={targetC}
		itemId="id"
		itemLabel="text"
		itemGroup="group"
		complexSource={true}
		complexTarget={true}
		isMulti={false}
	/>

	<CodeBlock language="ts" code={JSON.stringify(targetC, undefined, 2)} />
</div>
