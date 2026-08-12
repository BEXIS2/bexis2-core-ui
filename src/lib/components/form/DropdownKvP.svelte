<script>
	import InputContainer from './InputContainer.svelte';

	export let id;
	export let source;
	export let target;
	export let title;
	export let label;
	export let valid = false;
	export let invalid = false;
	export let feedback = [''];
	export let required = false;
	export let complexTarget = false;
	export let help = false;
	export let description = '';
	export let showDescription = false;
	export let showIcon = false;
	$: selected = null;

	$: updatedSelectedValue(target);
	$: updatedTarget(selected);

	function updatedSelectedValue(selection) {
		if (selection != null) {
			if (complexTarget) {
				selected = selection.id;
			} else {
				selected = selection;
			}
		}
	}

	function updatedTarget(id) {
		if (complexTarget) {
			target = source.find((opt) => opt.id === id);
		} else {
			target = id;
		}
	}

	$: {
	if ((!label || label.trim() === '') && title && title.trim() !== '') {
		label = title;
	} else if ((!title || title.trim() === '') && label && label.trim() !== '') {
		title = label;
	}
}

</script>

<InputContainer
	{id}
	{label}
	{feedback}
	{required}
	{help}
	{description}
	{showDescription}
	{showIcon}
	on:showDescription
	on:hideDescription
>
	<select
		{id}
		{title}
		class="select variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value={selected}
		on:change
		on:select
	>
		<option value={null}>-- Please select --</option>
		{#each source as e}
			<option value={e.id}>{e.text}</option>
		{/each}
	</select>
</InputContainer>
