<script lang="ts">
	import CheckboxKVPList from '../../../../lib/components/form/CheckboxKvPList.svelte';

	import { Datastructures } from './exampleData';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: target = [1];

	function onChangeHandler() {
		console.log(target);
	}
</script>

{#if Datastructures}
	<div class="grid gap-10">
		<CheckboxKVPList
			key="datastructures"
			title="Datastructures"
			source={Datastructures}
			bind:target
		/>

		<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
	</div>
{/if}
