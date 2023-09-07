<script lang="ts">
	import { Accordion, AccordionItem, popup } from '@skeletonlabs/skeleton';

	//uicomponents
	import MenuSublist from './MenuSublist.svelte';

	//types
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { menuItemType } from '$models/Page';

	import { goTo } from '$services/BaseCaller';

	export let menubarItem: menuItemType;
	export let comboboxValue;

	let id = Math.floor(Math.random() * 100).toString();

	let popupCombobox: PopupSettings = {
		event: 'click',
		target: id,
		placement: 'bottom-start',
		// Close the popup when the item is clicked
		closeQuery: '.listbox-item'
	};
</script>

{#if menubarItem.Items.length < 1}
	<div class="p-2">
		<button class="grid" use:popup={popupCombobox} on:click={() => goTo(menubarItem.Url)}>
			<span class="capitalize whitespace-nowrap">{comboboxValue ?? menubarItem.Title}</span>
		</button>
	</div>
{:else}
	<div class="sm:hidden block">
		<AccordionItem padding="p-2">
			<svelte:fragment slot="summary"
				><button class="flex items-center gap-x-1">
					<span class="capitalize">{menubarItem.Title}</span>
				</button></svelte:fragment
			>
			<svelte:fragment slot="content"
				><MenuSublist {id} items={menubarItem.Items} /></svelte:fragment
			></AccordionItem
		>
	</div>
	<div class="hidden sm:block place-self-center" use:popup={popupCombobox}>
		<button class="flex items-center gap-x-1 px-2">
			<span class="capitalize">{menubarItem.Title}▾</span>
		</button>

		<div class="z-50 w-max" data-popup={id}>
			<MenuSublist {id} items={menubarItem.Items} />
		</div>
	</div>
{/if}
