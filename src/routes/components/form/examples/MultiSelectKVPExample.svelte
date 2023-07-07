<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = [];
	$: selectedtarget = ['AF'];
	$: selectedComplextarget = [{ name: 'Dominican Republic', code: 'DO' }];

	$: targetGroup = [];

	import { Countries, MetadatastructuresGrouped } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect
		title="Return target as array"
		source={Countries}
		bind:target
		itemId="code"
		itemLabel="name"
		complexSource={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>

<div class="grid gap-10 mt-10">
	<MultiSelect
		title="Return complex object"
		source={Countries}
		bind:target={selectedComplextarget}
		itemId="code"
		itemLabel="name"
		complexSource={true}
		complexTarget={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(selectedComplextarget, undefined, 2)} />
</div>

<div class="grid gap-10 mt-10">
	<MultiSelect
		id="Group List"
		title="Group List"
		source={MetadatastructuresGrouped}
		bind:target={targetGroup}
		itemId="id"
		itemLabel="text"
		complexSource={true}
		complexTarget={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(targetGroup, undefined, 2)} />
</div>
