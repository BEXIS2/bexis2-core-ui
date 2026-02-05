<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let value: string | number | undefined = 0;
	export let label: string | undefined = undefined;
	// Whether this tab is currently active (controls styling)
	export let active: boolean = false;

	function handleClick() {
		dispatch('select', value);
	}
</script>

<button
	type="button"
	class={`px-3 py-2 rounded-t border-b-2 ${active ? 'border-primary-500 font-semibold' : 'border-transparent'}`}
	on:click={handleClick}
>
	{#if label}{label}{:else}<slot />{/if}
</button>
