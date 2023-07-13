<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { getMenuItems } from './MenuDataCaller';
	import { menuStore } from '$store/pageStores';

	import type { MenuModel } from '$models/Page';

	import MenuBar from './MenuBar.svelte';
	import SettingsBar from './SettingsBar.svelte';

	onMount(async () => {
		let m = await getMenuItems();
		menuStore.set(m);
	});
</script>

{#if $menuStore !== undefined}
	<div class="flex flex-row md:flex px-3 py-2 bg-tertiary-50 text-surface-800 z-50 shadow-md">
		<div class="basis-8">
			{#if $menuStore.Logo}
				<img
					src="data:{$menuStore.Logo.Mime};charset=utf-8;base64, {$menuStore.Logo.Data}"
					alt={$menuStore.Logo.Name}
					style="height:40px;"
				/>
			{/if}
		</div>

		<div class="flex items-center md:space-x-5 px-3 text-lg justify-start">
			<MenuBar menuBar={$menuStore.MenuBar} />
			<MenuBar menuBar={$menuStore.Extended} />
		</div>
		<div class="flex-auto w-64 flex items-left md:space-x-3 justify-end">
			<MenuBar menuBar={$menuStore.AccountBar} />
			<MenuBar menuBar={$menuStore.LaunchBar} />
			<SettingsBar menuBar={$menuStore.Settings} />
		</div>
	</div>
{/if}
