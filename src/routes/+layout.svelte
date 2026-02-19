<script lang="ts">
	import './layout.css';
	import Navigation from '$docs/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" /></svelte:head>

<div class="min-h-screen flex">
	<!-- Left navigation -->
	<aside class="hidden lg:block w-[360px] border-r border-surface-500/30 bg-surface-50-950">
		<Navigation embedded={true} />
	</aside>

	<!-- Main content -->
	<main class="flex-1 min-w-0">
		{@render children()}
	</main>
</div>
