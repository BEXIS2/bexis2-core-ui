<script lang="ts">
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	let target = "Canada";
	let targetB={code:"",name:""};
	$:target;
	$:targetB;

	import { CountrieNames, Countries } from './exampleData';
</script>

<div class="grid gap-10">
	<MultiSelect id="title" title="Target is a single value" source={CountrieNames} bind:target isMulti={false} />

	<CodeBlock language="ts" code={JSON.stringify(target, undefined, 2)} />
</div>


<div class="grid gap-10 pt-5">
	<MultiSelect id="title" 
				title="Source  & target is complex and return is a single complex value" 
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
