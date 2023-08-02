<script lang="ts">
	import { AppShell, TableOfContents } from '@skeletonlabs/skeleton';

	let closed = true;
</script>

<AppShell slotSidebarLeft="flex-none bg-surface-50-900-token lg:w-auto relative">
	<svelte:fragment slot="sidebarRight">
		<div
			class="fixed right-0 top-0 overflow-y-auto h-full"
			class:w-10={closed}
			class:w-max={!closed}
		>
			<div class="px-10 pt-10 text-primary-500 h-max overflow-x-hidden bg-white/95">
				<button
					class="fixed z-30 top-0 right-0 btn btn-sm variant-filled-primary m-1"
					on:click={() => (closed = !closed)}
					>{closed ? `<` : '>'}
				</button>
				<TableOfContents target="#toc-target-table" text="text-primary-500" />
			</div>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
