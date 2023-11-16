<script lang="ts">
	import { AppShell, TableOfContents } from '@skeletonlabs/skeleton';

	let closed = true;
</script>

<AppShell slotSidebarLeft="flex-none bg-surface-50-900-token lg:w-auto relative">
	<svelte:fragment slot="sidebarRight">
		<div
			class="fixed right-0 top-0 overflow-y-auto h-full overflow-x-hidden"
			class:w-10={closed}
			class:w-max={!closed}
		>
			<div
				class="px-10 pt-10 text-primary-500 dark:text-primary-400 h-max transition-all duration-100 ease-out {closed
					? ''
					: 'bg-white/95 dark:bg-surface-900'}"
			>
				<button
					class="fixed z-30 top-0 right-0 btn btn-sm variant-filled-primary m-1"
					on:click={() => (closed = !closed)}
					>{closed ? `<` : '>'}
				</button>
				<TableOfContents active="text-primary-500 font-bold" />
			</div>
		</div>
	</svelte:fragment>
	<slot id="pageSlot" />
</AppShell>
