<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';
	let target = ['Canada', 'Armenia'];
	$: target;

	import { CountrieNames } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect id="multi_select_example" title="Required input fields" source={CountrieNames} bind:target />
	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>
