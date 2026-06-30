<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getMenuItems } from './MenuDataCaller';
	import { menuStore } from '../../../stores/pageStores';

	import MenuBar from './MenuBar.svelte';
	import MenuAccountBar from './MenuAccountBar.svelte';
	import SettingsBar from './SettingsBar.svelte';
	import Fa from 'svelte-fa';
	import { faBars, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
	import { Accordion } from '@skeletonlabs/skeleton';

	onMount(async () => {
		let m = await getMenuItems();
		menuStore.set(m);

		console.log('🚀 ~ onMount ~ menuStore:', $menuStore);
		// set the font size to the value stored in local storage
		const storedFontSize = localStorage.getItem('fontSize');
		if (storedFontSize) {
			document.documentElement.style.fontSize = storedFontSize;
			// set CSS variable --font-size to the new font size
			document.documentElement.style.setProperty('--font-size', storedFontSize);
		}
	});

	let hamburger = true;
	const theme = writable('light');

	// function to increase the current font size by 1 step; set in local storage so it is remembered on page reload
	function increaseFontSize() {
		const currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
		document.documentElement.style.fontSize = currentFontSize + 1 + 'px';
		// set CSS variable --font-size to the new font size
		document.documentElement.style.setProperty('--font-size', document.documentElement.style.fontSize);
		localStorage.setItem('fontSize', document.documentElement.style.fontSize);
	}
	// function to decrease the current font size by 1 step
	function decreaseFontSize() {
		const currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
		document.documentElement.style.fontSize = currentFontSize - 1 + 'px';
		// set CSS variable --font-size to the new font size
		document.documentElement.style.setProperty('--font-size', document.documentElement.style.fontSize);
		localStorage.setItem('fontSize', document.documentElement.style.fontSize);
	}

	// function to toggle dark mode
	function toggleDarkMode() {
		if ($theme === 'dark') {
			theme.set('light');
			document.documentElement.classList.remove('dark');
		} else {
			theme.set('dark');
			document.documentElement.classList.add('dark');
		}
	}

	let showMode = false; // set to false to hide the dark mode toggle button
	// only show dark mode button in dev mode
	if (import.meta.env.DEV) {
		showMode = true;
	}
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
						style="height:40px; max-width: none;"
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
						
						<!-- </div> -->
						<!-- <div class="sm:flex items-center sm:gap-5 px-1 text-lg justify-end gap-2"> -->
						<div class="grid w-full sm:flex gap-2 justify-auto sm:justify-end">
							<MenuAccountBar menuBar={$menuStore.AccountBar} />
							<MenuBar menuBar={$menuStore.LaunchBar} />
							<!-- Add change font size buttons -->
							<button
								class="btn btn-ghost pl-1 pr-1"
								on:click={decreaseFontSize}
								title="Decrease font size"
							>
								<span class="capitalize text-lg whitespace-nowrap hover:text-secondary-500">A-</span>
							</button>
							<button
								class="btn btn-ghost pl-1 pr-1"
								on:click={increaseFontSize}
								title="Increase font size"
							>
								<span class="capitalize text-lg whitespace-nowrap hover:text-secondary-500">A+</span>
							</button>

							<button
								class="btn btn-ghost pl-1 pr-1"
								on:click={toggleDarkMode}
								title="Toggle dark mode"
							>	
								{#if showMode}
									{#if $theme === 'dark'}
										<!-- sun icon (white via currentColor) -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											aria-hidden="true"
											focusable="false"
											class="inline-block"
										>
											<g
												stroke="currentColor"
												stroke-width="1.6"
												stroke-linecap="round"
												stroke-linejoin="round"
												fill="none"
											>
												<circle cx="12" cy="12" r="4" stroke="currentColor" fill="currentColor" />
												<path
													d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
													stroke="currentColor"
												/>
											</g>
										</svg>
									{:else}
										<!-- moon icon (white via currentColor) -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
											focusable="false"
											class="inline-block"
										>
											<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
										</svg>
									{/if}
								{/if}
							</button>
								<MenuBar menuBar={$menuStore.MenuBar} />
								<MenuBar menuBar={$menuStore.Extended} />
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
