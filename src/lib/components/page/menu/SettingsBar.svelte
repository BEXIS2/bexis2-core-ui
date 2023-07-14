<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';

	import { AccordionItem, type PopupSettings } from '@skeletonlabs/skeleton';
	import type { menuItemType } from '$models/Page';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCog } from '@fortawesome/free-solid-svg-icons';

	export let menuBar: menuItemType[];
	//uicomponents
	import MenuSublist from './MenuSublist.svelte';

	let popupCombobox: PopupSettings = {
		event: 'click',
		target: 'settings',
		placement: 'bottom',
		// Close the popup when the item is clicked
		closeQuery: '.listbox-item'
	};
</script>

{#if menuBar}
	<div class="sm:hidden">
		<AccordionItem padding="p-2">
			<svelte:fragment slot="summary"
				><button class="flex items-center gap-x-1 text-sm text-surface-800 w-5 h-full">
					<span class="capitalize"><Fa icon={faCog} /></span>
				</button></svelte:fragment
			>
			<svelte:fragment slot="content"><MenuSublist items={menuBar} /></svelte:fragment>
		</AccordionItem>
	</div>
	<div class="hidden sm:block place-self-center" use:popup={popupCombobox}>
		<button class="flex items-center gap-x-1">
			<div class="hidden sm:block" />
			<span class="capitalize"><Fa icon={faCog} /></span>
		</button>
		<div class="z-50 w-max" data-popup="settings">
			<MenuSublist items={menuBar} />
		</div>
	</div>
{/if}
