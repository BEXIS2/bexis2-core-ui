<script lang="ts">
	import InputContainer from './InputContainer.svelte';
	import { helpStore } from '$store/pageStores';

	export let id: string = '';
	export let label: string = '';
	export let value: string = '';

	export let valid: boolean = false;
	export let invalid: boolean = false;
	export let required: boolean = false;
	export let feedback: string[] = [''];
	export let placeholder: string = '';
	export let help: boolean = false;
	export let disabled: boolean = false;
</script>

<InputContainer {id} {label} {feedback} {required} {help}>
	<input
		{id}
		class="input variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400"
		type="number"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value
		on:input
		on:change
		{placeholder}
		{disabled}
	/>
</InputContainer>
