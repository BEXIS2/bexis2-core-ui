<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { CodeBlock } from '$lib/shims/skeleton';

	type CodeTab = {
		name: string;
		language: string;
		code: string;
	};

	export let title: string;
	export let tabs: CodeTab[] = [];

	let tabsValue = '0';
</script>

<div class="">
	<div class="py-5">
		{#if title}
			<h3 class="h3">{title}</h3>
		{/if}
	</div>

	<div class="flex card p-5 gap-10">
		<div class="flex-1">
			<slot />
		</div>

		<div class="flex-1">
			<Tabs {tabsValue} onValueChange={(details) => (tabsValue = details.value)}>
				<Tabs.List>
					{#each tabs as tab, index}
						<Tabs.Trigger value={String(index)}>{tab.name}</Tabs.Trigger>
					{/each}
				</Tabs.List>
				{#each tabs as tab, index}
					<Tabs.Content value={String(index)}>
						<CodeBlock language={tab.language} code={tab.code} />
					</Tabs.Content>
				{/each}
			</Tabs>
		</div>
	</div>
</div>
