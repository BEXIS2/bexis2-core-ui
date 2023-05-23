<script lang="ts">
	import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
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
		storeCategory.set(c);
		// prettier-ignore
		switch($storeCategory) {
			case('general'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'general'); break;
			case('theme'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'theme'); break;
			case('components'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'components'); break;
		}
	}
	// Lifecycle
	page.subscribe((p) => {
		let pathMatch: string = p.url.pathname.split('/')[1];
		if (!pathMatch) return;
		if (['components', 'actions'].includes(pathMatch)) pathMatch = 'svelte';
		setNavCategory(pathMatch);
	});
	storeCategory.subscribe((c: string) => setNavCategory(c));
	// Reactive
	$: classesActive = (href: string) =>
		$storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '';
</script>

<div
	class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 hidden lg:grid w-[360px] overflow-hidden"
>
	<AppRail
		selected={storeCategory}
		background="bg-transparent"
		border="border-r border-surface-500/30"
		width="w-[70px]"
	>
		<svelte:fragment slot="lead">
			<AppRailTile label="General" title="Tile" value={'general'} on:click={onListItemClick}
				><i class="fa-solid fa-screwdriver-wrench text-2xl" /></AppRailTile
			>
			<AppRailTile label="Theme" title="Tile" value={'theme'} on:click={onListItemClick}
				><i class="fa-solid fa-code-compare text-2xl" /></AppRailTile
			>
			<AppRailTile label="Components" title="Tile" value={'components'} on:click={onListItemClick}
				><i class="fa-solid fa-list-check text-2xl" /></AppRailTile
			>
		</svelte:fragment>

		<svelte:fragment slot="trail" />
	</AppRail>

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
							<li on:click={onListItemClick} on:keypress>
								<a {href} class={classesActive(href)} data-sveltekit-preload-data="hover">
									<span class="flex-auto">{@html label}</span>
									{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
