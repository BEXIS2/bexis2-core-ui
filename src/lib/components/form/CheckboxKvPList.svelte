<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id;
	export let source;
	export let target;
	export let title;
	export let label
	export let description = '';
	export let key;
	export let help = false;
	export let vertical = false;

	$: {
	if ((!label || label.trim() === '') && title && title.trim() !== '') {
		label = title;
	} else if ((!title || title.trim() === '') && label && label.trim() !== '') {
		title = label;
	}
}

	let required = false;
	export let feedback: [];
</script>

<InputContainer {id} {label} {feedback} {required} {help} {description}>
	<div class="flex gap-2" class:flex-col={vertical}>
		{#each source as item}
			<label class="flex items-center space-x-2" for={item.key}>
				<input
				 {title}
					class="checkbox"
					type="checkbox"
					bind:group={target}
					checked={item.key}
					value={item.key}
					id={item.key}
				/>
				<p>{item.value}</p>
			</label>
		{/each}
	</div>
</InputContainer>
