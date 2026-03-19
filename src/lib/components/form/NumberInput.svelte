<script lang="ts">
	import InputContainer from './InputContainer.svelte';
	import { helpStore } from '$store/pageStores';
	import { convertServerColumns } from '../Table/utils';

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
	export let description	: string = '';
	export let min	: number | undefined = undefined;
	export	let max	: number | undefined = undefined;

	// Diese Zeile wird jedes Mal ausgeführt, wenn sich "menge" ändert
  $: if (max!=undefined && (parseInt(value) > max)) {
    value = max.toString();
  }

		$: if (min!=undefined && (parseInt(value) < min)) {
    value = min.toString();
  }


</script>

<InputContainer {id} {label} {feedback} {required} {help} 	{description}>
	<input
		{id}
		class="input variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400"
		type="number"
		class:input-success={valid}
		class:input-error={invalid}
		bind:value
		{min}
		{max}
		on:input
		on:change
		{placeholder}
		{disabled}
		
	/>
</InputContainer>
