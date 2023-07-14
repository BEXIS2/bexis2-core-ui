<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import type { MenuItem } from './menu';
	import Item from './MenuItem.svelte';

	export let menuBar: MenuItem[];

	let comboboxValue: string;
</script>

{#if menuBar}
	<div class="h-full place-self-center sm:flex gap-2 w-full sm:w-auto">
		{#each menuBar as menubarItem}
			<Item {menubarItem} {comboboxValue} />
		{/each}
	</div>
{/if}
