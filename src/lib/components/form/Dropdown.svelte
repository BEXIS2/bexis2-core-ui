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
	export let help = false;
	export	let description = '';

	$: selected = null;

	$: updatedSelectedValue(target);
	$: updatedTarget(selected);

	function updatedSelectedValue(selection) {
		if (selection != null) {
				selected = selection;
		}
	}

	function updatedTarget(value) {
			target = value;		
	}
</script>

<InputContainer {id} label={title} {feedback} {required} {help} {description}>
	<select
		{id}
		class="select variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value={selected}
		on:change
		on:select
	>
		<option value={null}>-- Please select --</option>
		{#each source as v}
			<option value={v}>{v}</option>
		{/each}
	</select>
</InputContainer>
