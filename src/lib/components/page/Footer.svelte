<script lang="ts">
	import { onMount } from 'svelte';
	import { getFooter } from './PageCaller';

	let content: string = '';
	$: content;

	onMount(async () => {
		content = await getFooter();
	});
</script>

{#if content != undefined}
	{@html content}
{/if}
