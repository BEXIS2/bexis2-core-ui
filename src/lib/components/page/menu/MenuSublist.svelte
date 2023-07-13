<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { MenuItem } from './menu';
	import { goTo } from '$services/BaseCaller';

	export let id;
	export let items: MenuItem[];

	let lastModule = '';
	let first = true;

	// store last module
	function isNewModule(module) {
		if (module === lastModule) {
			return false;
		} else {
			lastModule = module;
			if (first) {
				first = false;
				return false;
			}

			return true;
		}
	}
</script>

<ListBox class="sm:bg-white sm:border">
	{#each items as item}
		{#if isNewModule(item.Module)}<hr class="text-surface-800" />{/if}
		<ListBoxItem
			class="text-md sm:text-sm text-surface-800 py-1 hover:text-secondary-500 bg-transparent"
			bind:group={item.Title}
			name="medium"
			value={item.Title}
			on:click={() => goTo(item.Url)}
		>
			{item.Title}
		</ListBoxItem>
	{/each}
</ListBox>
