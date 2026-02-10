<script lang="ts">
	import { Tab, Tabs } from '@skeletonlabs/skeleton-svelte';

	type CodeTab = {
		name: string;
		language: string;
		code: string;
	};

	export let title: string;
	export let tabs: CodeTab[] = [];

	let tabSet: number = 0;
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
			<Tabs>
				{#each tabs as tab, index}
					<Tab
						active={tabSet === index}
						value={index}
						label={tab.name}
						on:select={(e) => (tabSet = e.detail)}
					>
						{tab.name}
					</Tab>
				{/each}
				<svelte:fragment slot="panel">
					{#each tabs as tab, index}
						{#if tabSet === index}
							<CodeBlock language={tab.language} code={tab.code} />
						{/if}
					{/each}
				</svelte:fragment>
			</Tabs>
		</div>
	</div>
</div>
