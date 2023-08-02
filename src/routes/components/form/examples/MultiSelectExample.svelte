<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	let target = ["Canada","Armenia"];
	$: target ;

	import { CountrieNames } from './exampleData';
</script>



<div class="grid gap-10">
	<MultiSelect title="Required input fields" source={CountrieNames} bind:target={target} />
	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
