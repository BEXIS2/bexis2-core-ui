<script lang="ts">
	import InputContainer from './InputContainer.svelte';

	export let id: string = '';
	export let label: string = '';
	export let value: string = '';
	export let valid: boolean = false;
	export let invalid: boolean = false;
	export let required: boolean = false;
	export let feedback: string[] = [''];
	export let help = false;
	export let disabled: boolean = false;
</script>

<InputContainer {id} {label} {feedback} {required} {help}>
	<input
		{id}
		class="input variant-form-material bg-zinc-50 dark:bg-zinc-700 placeholder:text-gray-400"
		type="date"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value
		on:input
		on:change
		{disabled}
	/>
</InputContainer>
