<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	//uicomponents
	import MenuSublist from './MenuSublist.svelte';

	//types and popup action shim
	import { popup, type PopupSettings } from '$lib/shims/skeleton/popup';
	import type { menuItemType } from '../../../models/Page';

	import { goTo } from '../../../services/BaseCaller';

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

		<button class="grid" use:popup={popupCombobox} >
			<a class="grid" href={menubarItem.Url} target="{menubarItem.Target}">
				<span class="capitalize whitespace-nowrap text-lg hover:text-secondary-500">{comboboxValue ?? menubarItem.Title}</span>
			</a>
		</button>
	</div>
{:else}
	<div class="sm:hidden block">
		<Accordion.Item padding="p-2">
			<svelte:fragment slot="summary"
				><button class="flex items-center gap-x-1">
					<span class="capitalize text-lg hover:text-secondary-500">{menubarItem.Title}</span>
				</button></svelte:fragment
			>
			<svelte:fragment slot="content"
				><MenuSublist {id} items={menubarItem.Items} /></svelte:fragment
			>
			</Accordion.Item
		>
	</div>
	<div class="hidden sm:block place-self-center" use:popup={popupCombobox}>
		<button class="flex items-center gap-x-1 px-2">
			<span class="capitalize text-lg whitespace-nowrap hover:text-secondary-500">{menubarItem.Title}▾</span>
		</button>

		<div
			class="z-50 w-max mt-1 rounded-md border border-surface-300 bg-surface-50 shadow-lg dark:bg-surface-800 dark:border-surface-600"
			data-popup={id}
		>
			<MenuSublist {id} items={menubarItem.Items} />
		</div>
	</div>
{/if}
