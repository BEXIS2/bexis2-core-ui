<script lang="ts">
	import { onMount } from 'svelte';
	import { getHeader } from './PageCaller';

	let content: string = '';
	$: content;

	onMount(async () => {
		console.log('header');

		content = await getHeader();
		console.log(content);
	});
</script>

{#if content != undefined}
	{@html content}
{/if}
