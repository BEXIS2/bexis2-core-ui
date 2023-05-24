<script lang="ts">

	import { AppShell, TableOfContents } from '@skeletonlabs/skeleton';

</script>

<AppShell
	slotSidebarLeft="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto"
>

	<svelte:fragment slot="sidebarRight">
		<TableOfContents target="#toc-target" />
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />

</AppShell>
