<script lang="ts">
	import { Tab, Tabs } from '@skeletonlabs/skeleton-svelte';

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
				<a class="chip preset-outlined" href={link.url}>{link.label}</a>
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
				<Tabs>
					{#if svelte}
						<Tab active={tabSet === 0} value={0} label="Svelte" on:select={(e) => (tabSet = e.detail)}>
							Svelte
						</Tab>
					{/if}
					{#if typescript}
						<Tab active={tabSet === 1} value={1} label="Typescript" on:select={(e) => (tabSet = e.detail)}>
							Typescript
						</Tab>
					{/if}
					{#if csharp}
						<Tab active={tabSet === 2} value={2} label="CSharp" on:select={(e) => (tabSet = e.detail)}>
							CSharp
						</Tab>
					{/if}
					{#if model}
						<Tab active={tabSet === 3} value={3} label="Model" on:select={(e) => (tabSet = e.detail)}>
							Model
						</Tab>
					{/if}
					{#if xml}
						<Tab active={tabSet === 4} value={4} label="Xml" on:select={(e) => (tabSet = e.detail)}>
							Xml
						</Tab>
					{/if}
					{#if javascript}
						<Tab active={tabSet === 5} value={5} label="Javascript" on:select={(e) => (tabSet = e.detail)}>
							Javascript
						</Tab>
					{/if}
					{#if json}
						<Tab active={tabSet === 6} value={6} label="Json" on:select={(e) => (tabSet = e.detail)}>
							Json
						</Tab>
					{/if}
					{#if data}
						<Tab active={tabSet === 7} value={7} label="Data" on:select={(e) => (tabSet = e.detail)}>
							Data
						</Tab>
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
							<CodeBlock language="json" code={json} />
						{:else if tabSet === 7}
							<CodeBlock language="javascript" code={data} />
						{/if}
					</svelte:fragment>
					</Tabs>
			</div>
		</div>
	</div>
</div>
