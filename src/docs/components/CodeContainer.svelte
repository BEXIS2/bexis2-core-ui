<script lang="ts">
	import { CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

	export let svelte = '';
	export let csharp = '';
	export let model = '';
	export let json = '';
	export let xml = '';
	export let javascript = '';
	export let typescript = '';

	export let title;

	let tabSet: number = 0;
</script>

<div class="py-3">
	{#if title}
		<h2>{title}</h2>
	{/if}
	<div class="p-5">
		<slot name="info" />
	</div>
</div>

<div>
	<slot name="external" />
</div>

<div class="flex">
	<div class="w-1/2 px-5">
		<slot />
	</div>

	<div class="w-1/2 px-5">
		<TabGroup>
			{#if svelte}
				<Tab bind:group={tabSet} name="html" value={0}>(Svelte)</Tab>
			{/if}
			{#if typescript}
				<Tab bind:group={tabSet} name="typescript" value={1}>(Typescript)</Tab>
			{/if}
			{#if csharp}
				<Tab bind:group={tabSet} name="csharp" value={2}>(csharp)</Tab>
			{/if}
			{#if model}
				<Tab bind:group={tabSet} name="model" value={3}>(model)</Tab>
			{/if}
			{#if xml}
				<Tab bind:group={tabSet} name="xml" value={4}>(xml)</Tab>
			{/if}
			{#if javascript}
				<Tab bind:group={tabSet} name="javascript" value={5}>(javascript)</Tab>
			{/if}
			{#if json}
				<Tab bind:group={tabSet} name="javascript" value={5}>(json)</Tab>
			{/if}

			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<CodeBlock language="html" code={svelte} />
				{:else if tabSet === 1}
					<CodeBlock language="typescript" code={typescript} />
				{:else if tabSet === 2}
					<CodeBlock language="csharp" code={csharp} />
				{:else if tabSet === 3}
					<CodeBlock language="csharp" code={model} />
				{:else if tabSet === 4}
					<CodeBlock language="xml" code={model} />
				{:else if tabSet === 5}
					<CodeBlock language="javascript" code={javascript} />
				{:else if tabSet === 6}
					<CodeBlock language="javascript" code={json} />
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
