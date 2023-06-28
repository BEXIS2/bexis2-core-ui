<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id;
	export let source;
	export let target;
	export let title;
	export let description = '';
	export let key;
	export let help = false;

	let required = false;
	let feedback: [];
</script>

<InputContainer {id} label={title} {feedback} {required} {help}>
	{#each source as item}
		<label class="flex items-center space-x-2" for={key}>
			<input
				class="checkbox"
				type="checkbox"
				bind:group={target}
				checked={item.key}
				value={item.key}
			/>
			<p>{item.value}</p>
		</label>
	{/each}
</InputContainer>
