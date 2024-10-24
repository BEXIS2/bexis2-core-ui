<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id: string = '';
	export let label: string = '';
	export let checked: boolean = false;

	export let valid: boolean;
	export let invalid: boolean;
	export let required: boolean;
	export let feedback: [];
</script>

<InputContainer {label} {feedback} {required}>
	<input
		{id}
		class="input variant-form-material bg-zinc-50 dark:bg-zinc-50"
		type="checkbox"
		class:input-success={valid}
		class:input-error={invalid}
		bind:checked
		on:input
		on:change
	/>
</InputContainer>
