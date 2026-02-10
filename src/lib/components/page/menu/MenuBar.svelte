<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import type { menuItemType } from '../../../models/Page';
	import Item from './MenuItem.svelte';

	export let menuBar: menuItemType[];

	let comboboxValue: string | undefined = undefined;
</script>

{#if menuBar}
	<div class="h-full place-self-center sm:flex gap-2 w-full sm:w-auto">
		{#each menuBar as menubarItem}
			<Item {menubarItem} {comboboxValue} />
		{/each}
	</div>
{/if}
