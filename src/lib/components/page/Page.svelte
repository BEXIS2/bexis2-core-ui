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
	import { errorStore } from '$store/apiStores';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

// icons
import type { helpItemType, helpStoreType } from '$models/Models';


	import Docs from './Docs.svelte';
	import GoToTop from './GoToTop.svelte';

	export let title = '';
	export let note = '';
	export let links: linkType[] = [];

	// active or hide menu
	export let menu: boolean = true;
	export let footer: boolean = true;
	export let help: boolean = false;
	export let contentLayoutType: pageContentLayoutType = pageContentLayoutType.center;
	export let fixLeft: boolean = true;

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
					<Breadcrumb bind:title />
					<Docs {links} {note} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot name="description" />

	<div class="flex flex-initial space-x-5">
		{#if $$slots.left}
			<div class="p-5 flex-shrink-0 w-96 w-min-96 border-y border-solid border-surface-500">
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
			<div class=" p-5 fixed flex-shrink-0 w-96 border-y border-solid border-surface-500">
				<slot name="right" />
			</div>
		{/if}
	</div>



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

