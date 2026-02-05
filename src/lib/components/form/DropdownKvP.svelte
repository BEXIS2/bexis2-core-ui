<script>
	import InputContainer from './InputContainer.svelte';

	export let id;
	export let source;
	export let target;
	export let title;
	export let valid = false;
	export let invalid = false;
	export let feedback = [''];
	export let required = false;
	export let complexTarget = false;
	export let help = false;

	let selected = null;

	$: updatedSelectedValue(target);

	function updatedSelectedValue(selection) {
		if (selection != null) {
			if (complexTarget) {
				selected = selection.id;
			} else {
				selected = selection;
			}
		}
	}

	function handleChange(event) {
		const id = selected;
		if (complexTarget) {
			target = source.find((opt) => opt.id === id);
		} else {
			target = id;
		}
	}
</script>

<InputContainer {id} label={title} {feedback} {required} {help}>
	<select
		{id}
		class="select variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value={selected}
		on:change={handleChange}
	>
		<option value={null}>-- Please select --</option>
		{#each source as e}
			<option value={e.id}>{e.text}</option>
		{/each}
	</select>
</InputContainer>
