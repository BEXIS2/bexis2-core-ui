<script lang="ts">
	import { onMount } from 'svelte';

	import type { errorType, linkType } from '$lib/models/Models';
	import { pageContentLayoutType, notificationType } from '$lib/models/Enums';

	// ui components
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Menu from './menu/Menu.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import HelpPopUp from './HelpPopUp.svelte';
	import Breadcrumb from './breadcrumb/Breadcrumb.svelte';
	import Notification from './Notification.svelte';

	//popup
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { breadcrumbStore,notificationStore } from '$store/pageStores';
	import { errorStore,csrfTokenStore } from '$store/apiStores';


	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

// icons
import type { helpItemType, helpStoreType } from '$models/Models';


	import Docs from './Docs.svelte';
	import GoToTop from './GoToTop.svelte';
	import { getAntiForgeryToken } from './PageCaller';
	import { get } from 'svelte/store';
	import { getApplicationName } from './breadcrumb/BreadcrumbDataCaller';


	export let title = '';
	let applicationName = '';
	export let note = '';
	export let links: linkType[] = [];

	// active or hide menu
	export let menu: boolean = true;
	export let footer: boolean = true;
	export let help: boolean = false;
	export let contentLayoutType: pageContentLayoutType = pageContentLayoutType.center;
	export let fixLeft: boolean = true;

	let aftIsReady = false;

	errorStore.subscribe((error:errorType) => {
			console.log("🚀 ~ errorStore.subscribe ~ value:", error.error)
			notificationStore.showNotification({
				notificationType: notificationType.error,
				message: error.error
			})
		})

	onMount(async () => {
		console.log('page');
		breadcrumbStore.clean();
		breadcrumbStore.addItem({ label: title, link: window.location.pathname });

		var token = get(csrfTokenStore);
		
		console.log("🚀 ~ token:", token)
	
		if (!token || token.length === 0) {
			// check if csrf token exist as hidden field
			const tokenContainer =
				document.getElementsByName('__RequestVerificationToken')[0] as HTMLInputElement | undefined;
			if (tokenContainer) {
				const csrfToken = tokenContainer.value;
				csrfTokenStore.set(csrfToken);
			} else
			{
				try {
					const data = await getAntiForgeryToken();
					if (data && typeof data.csrfToken === 'string') {
						csrfTokenStore.set(data.csrfToken);
					}
				} catch (error) {
					console.error('Failed to fetch anti-forgery token', error);
				}
			}

		applicationName = await getApplicationName();
		//alert(title);

		}
});

	csrfTokenStore.subscribe((value) => {
		if (value.length > 0) {
			aftIsReady = true;
		}
	});


 let app;
	function scrollToTop() {
		app.scrollIntoView();
	}

</script>

<div class="app" bind:this={app}>
<AppShell>
	<!--header-->
	<svelte:fragment slot="header">
		<AppBar padding="0" spacing="space-y-0" background="white">
			<svelte:fragment slot="headline">
				<Header />
				{#if true}
					<Menu />
				{/if}

				<div class="grid grid-cols-2">
					<Breadcrumb bind:title bind:applicationName />
					<Docs {links} {note} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot name="description" />

	{#if aftIsReady}

	<div class="flex flex-initial space-x-5">
		{#if $$slots.left}
			<div class="p-5 shrink-0 w-96 w-min-96 border-y border-solid border-surface-500">
				<slot name="left" />
			</div>
		{/if}

		{#if contentLayoutType === pageContentLayoutType.center}
			<div class="flex justify-center w-screen">
				<div class="w-full max-w-7xl p-5 space-y-5 border-y border-solid border-surface-500">
					<slot />
				</div>
			</div>
		{/if}

		{#if contentLayoutType === pageContentLayoutType.full}
			<div class="p-5 space-y-5 border-y border-solid border-surface-500 w-screen">
				<slot />
			</div>
		{/if}

		{#if $$slots.right}
			<div class=" p-5 fixed shrink-0 w-96 border-y border-solid border-surface-500">
				<slot name="right" />
			</div>
		{/if}
	</div>

	{/if}

	<GoToTop/>
	<HelpPopUp active={help} />
	<Notification />

	
	<svelte:fragment slot="footer">
		{#if footer}
			<Footer />
		{/if}

	</svelte:fragment>

</AppShell>
</div>

