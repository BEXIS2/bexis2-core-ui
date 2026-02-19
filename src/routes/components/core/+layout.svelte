<script lang="ts">
	import { TableOfContents } from '$lib/shims/skeleton';

	let closed = false;
</script>

<div class="w-full">
	<div class="" >
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
	</div>
	<slot />
</div>
