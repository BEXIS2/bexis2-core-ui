<script lang="ts">
	import { CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

	import { writable } from 'svelte/store';
	import Table from '$lib/components/Table/Table.svelte';
	import type { TableConfig } from '$lib/models/Models';

	interface link {
		label: string;
		url: string;
	}

	interface prop {
		name: string;
		description: string;
	}

	export let svelte = '';
	export let csharp = '';
	export let model = '';
	export let json = '';
	export let xml = '';
	export let javascript = '';
	export let typescript = '';
	export let data = '';
	export let codeOnly = false;
	export let activetab = 0;

	export let external: link[] = [];
	export let properties: prop[] = [];
	export let events: prop[] = [];

	export let title;

	let tabSet: number = activetab;

	const propertiesStore = writable<prop[]>(properties);
	const propertiesTableConfig: TableConfig<prop> = {
		id: 'properties',
		data: propertiesStore
	};

	const eventsStore = writable<prop[]>(events);
	const eventsTableConfig: TableConfig<prop> = {
		id: 'events',
		data: eventsStore
	};

	let codeClass = 'w-1/2';
	if (codeOnly) {
		codeClass = 'w-full';
	}
</script>

<div>
	<div class="py-5">
		{#if title}
			<h3 class="h3">{title}</h3>
		{/if}
		<div>
			<slot name="info" />
		</div>
	</div>

	{#if external.length > 0}
		<div class="py-5">
			{#each external as link}
				<a class="chip variant-ringed" href={link.url}>{link.label}</a>
			{/each}
		</div>
	{/if}

	{#if properties.length > 0}
		<div class="py-5 grid gap-5">
			<h4 class="h4">Properties</h4>
			<Table config={propertiesTableConfig} />
		</div>
	{/if}

	{#if events.length > 0}
		<div class="py-5 grid gap-5">
			<h4 class="h4">Events</h4>
			<Table config={eventsTableConfig} />
		</div>
	{/if}

	<div>
		<div class="card flex p-5 gap-10">
			{#if codeOnly == false}
				<div class="w-1/2">
					<slot />
				</div>
			{/if}

			<div class={codeClass}>
				<TabGroup>
					{#if svelte}
						<Tab bind:group={tabSet} name="html" value={0}>Svelte</Tab>
					{/if}
					{#if typescript}
						<Tab bind:group={tabSet} name="typescript" value={1}>Typescript</Tab>
					{/if}
					{#if csharp}
						<Tab bind:group={tabSet} name="csharp" value={2}>CSharp</Tab>
					{/if}
					{#if model}
						<Tab bind:group={tabSet} name="model" value={3}>Model</Tab>
					{/if}
					{#if xml}
						<Tab bind:group={tabSet} name="xml" value={4}>Xml</Tab>
					{/if}
					{#if javascript}
						<Tab bind:group={tabSet} name="javascript" value={5}>Javascript</Tab>
					{/if}
					{#if json}
						<Tab bind:group={tabSet} name="javascript" value={6}>Json</Tab>
					{/if}
					{#if data}
						<Tab bind:group={tabSet} name="javascript" value={7}>Data</Tab>
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
							<CodeBlock language="xml" code={xml} />
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
