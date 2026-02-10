<script lang="ts">
		let closed = false;
</script>

<AppShell
	slotSidebarLeft="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-950 lg:w-auto relative"
>
	<svelte:fragment slot="sidebarRight">
		<div class="fixed right-0 top-0 overflow-auto h-full" class:w-10={closed} class:w-max={!closed}>
			<div class="px-10 pt-10 text-primary-500 overflow-auto h-max preset-tonal-surface">
				<button
					class="fixed top-0 left-0 btn btn-sm preset-filled-primary-500 m-1"
					on:click={() => (closed = !closed)}
					>{closed ? `<` : '>'}
				</button>
				<TableOfContents target="#toc-target" text="text-primary-500" />
			</div>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
