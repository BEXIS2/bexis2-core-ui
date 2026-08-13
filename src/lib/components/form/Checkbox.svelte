<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id: string = '';
	export let label: string = '';
	export let title: string = '';
	export let checked: boolean = false;

	export let valid: boolean;
	export let invalid: boolean;
	export let required: boolean;
	export let feedback: [];
	export let description: string = '';

$: {
	if ((!label || label.trim() === '') && title && title.trim() !== '') {
		label = title;
	} else if ((!title || title.trim() === '') && label && label.trim() !== '') {
		title = label;
	}
}



</script>


<InputContainer {label} {feedback} {required} {description}>
	<input
		{id}
		{title}
		class="checkbox"
		type="checkbox"
		class:input-success={valid}
		class:input-error={invalid}
		bind:checked
		on:input
		on:change
	/>
</InputContainer>
