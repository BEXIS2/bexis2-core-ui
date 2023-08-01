<script lang="ts">
	import { onMount } from 'svelte';
	import { getMenuItems } from './MenuDataCaller';
	import { menuStore } from '$store/pageStores';

	import MenuBar from './MenuBar.svelte';
	import SettingsBar from './SettingsBar.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { Accordion } from '@skeletonlabs/skeleton';

	onMount(async () => {
		let m = await getMenuItems();
		menuStore.set(m);
	});

	let hamburger = true;
</script>

{#if $menuStore !== undefined}
	<div
		class="sm:flex h-min flex-row w-full justify-between items-center md:flex px-3 py-2 bg-tertiary-50 text-surface-800 z-50 shadow-md"
	>
		<div class="flex justify-between gap-5">
			<div class="basis-8">
				{#if $menuStore.Logo}
					<img
						src="data:{$menuStore.Logo.Mime};charset=utf-8;base64, {$menuStore.Logo.Data}"
						alt={$menuStore.Logo.Name}
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
						<MenuBar menuBar={$menuStore.MenuBar} />
						<MenuBar menuBar={$menuStore.Extended} />
						<!-- </div> -->
						<!-- <div class="sm:flex items-center sm:gap-5 px-1 text-lg justify-end gap-2"> -->
						<div class="grid w-full sm:flex gap-2 justify-auto sm:justify-end">
							<MenuBar menuBar={$menuStore.AccountBar} />
							<MenuBar menuBar={$menuStore.LaunchBar} />
							<SettingsBar menuBar={$menuStore.Settings} />
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
