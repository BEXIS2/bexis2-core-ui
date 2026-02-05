<script lang="ts">
	export let items: any[] | undefined = undefined;
	export let target: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let active: string | undefined = undefined;
</script>

<nav aria-label="Table of contents" class={`toc text-sm ${text ?? ''}`}>
	{#if items}
		<ul>
			{#each items as item}
				<li>
					<a href={`#${item.id}`} class={active}>{item.label}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<slot />
	{/if}
</nav>
