<script lang="ts">
	import { CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

	export let svelte = '';
	export let csharp = '';
	export let model = '';
	export let json = '';
	export let xml = '';
	export let javascript = '';
	export let typescript = '';
	export let data = '';

	export let title;

	let tabSet: number = 0;
</script>
<div>
<div class="py-5">
	{#if title}
		<h3>{title}</h3>
	{/if}
	<div>
		<slot name="info" />
	</div>
</div>

<div>
	<slot name="external" />
</div>

<div>

<div class="card flex p-5 gap-10">
	<div class="w-1/2">
		<slot />
	</div>

	<div class="w-1/2">
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
				<Tab bind:group={tabSet} name="javascript" value={6}>(json)</Tab>
			{/if}
			{#if data}
				<Tab bind:group={tabSet} name="javascript" value={7}>(data)</Tab>
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
				{:else if tabSet === 7}
					<CodeBlock language="javascript" code={data} />
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
</div>
</div>
