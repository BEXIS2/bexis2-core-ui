<script lang="ts">
	export let items: any[] | undefined = undefined;
	export let selection: any = undefined;
	export let multiple: boolean | undefined = undefined;
	export let padding: string | undefined = undefined;
	export let hover: string | undefined = undefined;
</script>

<ul class={`tree-view ${padding ?? ''} ${hover ?? ''}`}>
	{#if items}
		{#each items as item}
			<li>
				<span>{item.label}</span>
			</li>
		{/each}
	{:else}
		<slot />
	{/if}
</ul>
