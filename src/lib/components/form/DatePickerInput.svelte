<script lang="ts">
	import InputContainer from './InputContainer.svelte';
	import SveltyPicker from 'svelty-picker';

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
	export let description: string = '';
	export let showDescription: boolean = false;
	export let showIcon: boolean = false;
	export let mode: 'date' | 'time' | 'datetime' = 'date';
	export let initialDate: string = '';
	export let format: string = 'yyyy-mm-dd';
	export let displayFormat: string = 'yyyy-mm-dd';
	export let onChangeHandler: (event: CustomEvent) => void = () => {};

	let width = 'w-32';

	if (mode !== 'date' && mode !== 'time' && mode !== 'datetime') {
		throw new Error(`Invalid mode: ${mode}. Valid modes are 'date', 'time', and 'datetime'.`);
	}

	if (mode === 'datetime' && (format === 'yyyy-mm-dd' || displayFormat === 'yyyy-mm-dd')) {
		throw new Error(
			`Invalid format for datetime mode. Please use a format that includes both date and time.`
		);
	}

	if (mode === 'datetime') {
		width = 'w-64';
	}
</script>

<InputContainer {id} {label} {feedback} {required} {help} {description} {showDescription} {showIcon} on:showDescription on:hideDescription>
	<SveltyPicker
		{mode}
		name={label}
		{format}
		{displayFormat}
		{initialDate}
		bind:value
		inputClasses="input variant-form-material dark:bg-zinc-700 bg-zinc-50 placeholder:text-gray-400 {width}"
		on:change={onChangeHandler}
		{disabled}
		{placeholder}
	/>
</InputContainer>
