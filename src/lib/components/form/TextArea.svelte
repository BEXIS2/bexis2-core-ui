<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id: string = '';
	export let label: string = '';
	export let value: string = '';

	export let valid: boolean = false;
	export let invalid: boolean = false;
	export let required: boolean = false;
	export let feedback: string[] = [''];
	export let placeholder: string = '';
	export let help: boolean = false;
</script>

<InputContainer {id} {label} {feedback} {required} {help}>
	<textarea
		{id}
		class="textarea variant-form-material"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value
		on:input
		{placeholder}
	/>
</InputContainer>
