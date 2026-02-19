<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { CodeBlock } from '$lib/shims/skeleton';

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

let tabsValue = `${activetab}`;
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
				<Tabs {tabsValue} onValueChange={(details) => (tabsValue = details.value)}>
					<Tabs.List>
						{#if svelte}
							<Tabs.Trigger value="0">Svelte</Tabs.Trigger>
						{/if}
						{#if typescript}
							<Tabs.Trigger value="1">Typescript</Tabs.Trigger>
						{/if}
						{#if csharp}
							<Tabs.Trigger value="2">CSharp</Tabs.Trigger>
						{/if}
						{#if model}
							<Tabs.Trigger value="3">Model</Tabs.Trigger>
						{/if}
						{#if xml}
							<Tabs.Trigger value="4">Xml</Tabs.Trigger>
						{/if}
						{#if javascript}
							<Tabs.Trigger value="5">Javascript</Tabs.Trigger>
						{/if}
						{#if json}
							<Tabs.Trigger value="6">Json</Tabs.Trigger>
						{/if}
						{#if data}
							<Tabs.Trigger value="7">Data</Tabs.Trigger>
						{/if}
					</Tabs.List>

					{#if svelte}
						<Tabs.Content value="0">
							<CodeBlock language="html" code={svelte} />
						</Tabs.Content>
					{/if}
					{#if typescript}
						<Tabs.Content value="1">
							<CodeBlock language="typescript" code={typescript} />
						</Tabs.Content>
					{/if}
					{#if csharp}
						<Tabs.Content value="2">
							<CodeBlock language="csharp" code={csharp} />
						</Tabs.Content>
					{/if}
					{#if model}
						<Tabs.Content value="3">
							<CodeBlock language="csharp" code={model} />
						</Tabs.Content>
					{/if}
					{#if xml}
						<Tabs.Content value="4">
							<CodeBlock language="xml" code={xml} />
						</Tabs.Content>
					{/if}
					{#if javascript}
						<Tabs.Content value="5">
							<CodeBlock language="javascript" code={javascript} />
						</Tabs.Content>
					{/if}
					{#if json}
						<Tabs.Content value="6">
							<CodeBlock language="json" code={json} />
						</Tabs.Content>
					{/if}
					{#if data}
						<Tabs.Content value="7">
							<CodeBlock language="javascript" code={data} />
						</Tabs.Content>
					{/if}
				</Tabs>
			</div>
		</div>
	</div>
</div>
