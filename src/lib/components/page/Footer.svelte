<script lang="ts">
	import { onMount } from 'svelte';
	import { getFooter } from './PageCaller';

	let content: string = '';
	$: content;

	onMount(async () => {
		console.log('footer');

		content = await getFooter();
		console.log(content);
	});
</script>

{#if content != undefined}
	{@html content}
{/if}
