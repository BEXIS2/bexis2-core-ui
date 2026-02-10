<script lang="ts">
	import './layout.css';


	let { children } = $props();
</script>

<svelte:head><link rel="icon"  /></svelte:head>
{@render children()}
