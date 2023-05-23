<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = [];

	import { Countries } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect
		title="Required input fields"
		source={Countries}
		bind:target
		itemId="code"
		label="name"
		isComplex={true}
	/>

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
