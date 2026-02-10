<script lang="ts">
	// Simple layout shell that just renders its slots.
	export let slotSidebarLeft: string | undefined = undefined;
</script>

<div class="min-h-screen flex flex-row bg-surface-50-950">
	{#if slotSidebarLeft}
		<aside class={slotSidebarLeft}>
			<slot name="sidebarLeft" />
		</aside>
	{/if}
	<main class="flex-1 flex flex-col">
		<header>
			<slot name="header" />
		</header>
		<section class="flex-1">
			<slot />
		</section>
		<footer>
			<slot name="footer" />
		</footer>
	</main>
</div>
