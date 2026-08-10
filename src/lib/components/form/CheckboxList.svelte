<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let source;
	export let target;
	export let title;
	export let label;
	export let description = '';
	export let key;

	$: {
	if ((!label || label.trim() === '') && title && title.trim() !== '') {
		label = title;
	} else if ((!title || title.trim() === '') && label && label.trim() !== '') {
		title = label;
	}
}


	export let required = false;
	export let feedback: [];
</script>

<InputContainer {label} {feedback} {required} {description}>
	{#each source as item}
		<label class="flex items-center space-x-2" for={item}>
			<input class="checkbox" type="checkbox" bind:group={target} value={item} id={item} />
			<p>{item}</p>
		</label>
	{/each}
</InputContainer>
