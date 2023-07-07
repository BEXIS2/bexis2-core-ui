<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { MenuItem } from './menu';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCog } from '@fortawesome/free-solid-svg-icons';

	import { goTo } from '$services/BaseCaller';

	export let menuBar: MenuItem[];
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
	<button class="flex items-center gap-x-1 text-sm text-surface-800" use:popup={popupCombobox}>
		<span class="capitalize"><Fa icon={faCog} /></span>
	</button>

	<MenuSublist id="settings" items={menuBar} />
{/if}
