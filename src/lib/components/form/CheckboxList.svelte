<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let source;
	export let target;
	export let title;
	export let description = '';
	export let key;

	let required = false;
	let feedback: string[] = [];
</script>

<InputContainer label={title} {feedback} {required}>
	{#each source as item}
		<label class="flex items-center space-x-2" for={item}>
			<input class="checkbox" type="checkbox" bind:group={target} value={item} id={item}/>
			<p>{item}</p>
		</label>
	{/each}
</InputContainer>
