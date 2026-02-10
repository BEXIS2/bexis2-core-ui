<script lang="ts">
	import {
		Navigation } from '@skeletonlabs/skeleton-svelte';
	const drawerStore = getDrawerStore();
	import { writable, type Writable } from 'svelte/store';
	import { page } from '$app/stores';

	import { storeCurrentUrl } from './store/store';
	import { menuNavLinks } from './navigation_link';

	const storeValue: Writable<number> = writable(1);
	export let embedded = false;
	const storeCategory: Writable<string> = writable('compare');
	let filteredMenuNavLinks: any[] = menuNavLinks;
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		drawerStore.close();
	}
	function setNavCategory(c: string): void {
		// Update the filtered navigation list based on the provided category
		switch (c) {
			case 'general':
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'general');
				break;
			case 'theme':
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'theme');
				break;
			case 'components':
				filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'components');
				break;
			default:
				filteredMenuNavLinks = menuNavLinks;
				break;
		}
	}
	// Lifecycle
	page.subscribe((p) => {
		let pathMatch: string = p.url.pathname.split('/')[1];
		if (!pathMatch) return;
		if (['components', 'actions'].includes(pathMatch)) pathMatch = 'svelte';
		storeCategory.set(pathMatch);
	});
	storeCategory.subscribe((c: string) => setNavCategory(c));
	// Reactive
	$: classesActive = (href: string) =>
		$storeCurrentUrl?.includes(href) ? 'preset-filled-primary-500' : '';

	// Fix for theme switcher
	setInitialClassState();
</script>

<div
	class="grid grid-cols-[auto_1fr] h-full bg-surface-50-950 border-r border-surface-500/30 hidden lg:grid w-[360px] overflow-hidden"
>
	<Navigation
		selected={storeCategory}
		background="bg-transparent"
		border="border-r border-surface-500/30"
		width="w-[70px]"
	>
		<svelte:fragment slot="lead"
			><div class="flex justify-center py-2">
				<LightSwitch />
			</div>
			<Navigation.Tile label="General" title="General" value={'general'} on:click={onListItemClick}
				><i class="fa-solid fa-screwdriver-wrench text-2xl" /></Navigation.Tile
			>
			<Navigation.Tile label="Theme" title="Theme" value={'theme'} on:click={onListItemClick}
				><i class="fa-solid fa-code-compare text-2xl" /></Navigation.Tile
			>
			<Navigation.Tile label="Components" title="Components" value={'components'} on:click={onListItemClick}
				><i class="fa-solid fa-list-check text-2xl" /></Navigation.Tile
			>
		</svelte:fragment>

		<svelte:fragment slot="trail" />
	</Navigation>

	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each filteredMenuNavLinks as { id, title, list }, i}
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">
					{title}
				</div>
				<!-- Navigation List -->
				<nav class="list-nav">
					<ul>
						{#each list as { href, label, badge }}
							<li>
								<a {href} class={classesActive(href)} data-sveltekit-preload-data="hover" on:click={onListItemClick} on:keypress>
									<span class="flex-auto">{@html label}</span>
									{#if badge}<span class="badge preset-filled-secondary-500">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="my-6! opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
