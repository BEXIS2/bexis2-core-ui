<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { getMenuItems } from './MenuDataCaller';
	import { menuStore } from '$store/pageStores';

	import type { MenuModel } from '$models/Page';

	import MenuBar from './MenuBar.svelte';
	import SettingsBar from './SettingsBar.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { Accordion } from '@skeletonlabs/skeleton';

	let menu: MenuModel;

	onMount(async () => {
		console.log('menu');

		//menu = get(menuStore);

		menu = await getMenuItems();
		menuStore.set(menu);
	});

	let hamburger = true;
</script>

{#if menu}
	<div
		class="sm:flex h-min flex-row w-full justify-between items-center md:flex px-3 py-2 bg-tertiary-50 text-surface-800 z-50 shadow-md"
	>
		<div class="flex justify-between gap-5">
			<div class="basis-8">
				{#if menu.Logo}
					<img
						src="data:{menu.Logo.Mime};charset=utf-8;base64, {menu.Logo.Data}"
						alt={menu.Logo.Name}
						style="height:40px;"
					/>
				{/if}
			</div>
			<button
				class="w-min h-min variant-ghost-surface aspect-square p-3 rounded-lg sm:hidden justify-end btn"
				on:click|preventDefault={() => (hamburger = !hamburger)}
			>
				<Fa icon={faBars} />
			</button>
		</div>

		<div class="sm:flex w-full h-full sm:h-10" class:hidden={hamburger}>
			<div class="sm:flex justify-between w-full">
				<Accordion>
					<div class="sm:flex w-full justify-between">
						<!-- <div class="sm:flex items-center sm:gap-5 px-1 text-lg justify-start gap-2 py-0"> -->
						<MenuBar menuBar={menu.MenuBar} />
						<MenuBar menuBar={menu.Extended} />
						<!-- </div> -->
						<!-- <div class="sm:flex items-center sm:gap-5 px-1 text-lg justify-end gap-2"> -->
						<div class="grid w-full sm:flex gap-2 justify-auto sm:justify-end">
							<MenuBar menuBar={menu.AccountBar} />
							<MenuBar menuBar={menu.LaunchBar} />
							<SettingsBar menuBar={menu.Settings} />
							<!-- </div> -->
						</div>
					</div>
				</Accordion>
			</div>
		</div>
	</div>
{:else}
	<div class="placeholder h-14 bg-tertiary-50 shadow-md" />
{/if}
