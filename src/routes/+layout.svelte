<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// Highlight.js for syntax highlighting in code blocks
	//import {hljs} from 'highlight.js';

	//import 'highlight.js/styles/github-dark.css';

	//import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import { AppShell, TableOfContents } from '@skeletonlabs/skeleton';
	import Navigation from '$docs/Navigation.svelte';

	import '$lib/css/themes/theme-bexis2.css';

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// Config for the syntax highlighting
	//storeHighlightJs.set(hljs);

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<AppShell
	slotSidebarLeft="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto"
>
	<!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
