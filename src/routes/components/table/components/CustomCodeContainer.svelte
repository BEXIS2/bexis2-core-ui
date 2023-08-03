<script lang="ts">
	import { CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';

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
			<TabGroup>
				{#each tabs as tab, index}
					<Tab bind:group={tabSet} name={`tab${index}`} value={index}>{tab.name}</Tab>
				{/each}
				<svelte:fragment slot="panel">
					{#each tabs as tab, index}
						{#if tabSet === index}
							<CodeBlock language={tab.language} code={tab.code} />
						{/if}
					{/each}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
