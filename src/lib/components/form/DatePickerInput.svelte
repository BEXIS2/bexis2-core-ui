<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
	import InputContainer from './InputContainer.svelte';
	import SveltyPicker from 'svelty-picker';

	export let id: string = '';
	export let label: string = '';
	export let title: string = '';
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
	<!-- 1. Wrap everything in a relative container so the icon positions against this boundary -->
	<div class="relative w-full">
		<SveltyPicker
			{mode}
			name={label}
			{format}
			{displayFormat}
			{initialDate}
			bind:value
			on:input
			on:change
			{disabled}
			{placeholder}
			manualInput={true}
			inputClasses="input variant-form-material bg-zinc-50 dark:bg-zinc-700 placeholder:text-gray-400 pr-10 {valid
				? 'input-success'
				: ''} {invalid ? 'input-error' : ''}"
		/>
		{#if mode === 'time'}
			<Fa
				icon={faClock}
				class="absolute inset-y-2 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-gray-300"
			/>
		{:else if mode === 'date'}
			<Fa
				icon={faCalendar}
				class="absolute inset-y-2 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-gray-300"
			/>
		{:else if mode === 'datetime'}
			<Fa
				icon={faCalendar}
				class="absolute inset-y-2 right-5 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-gray-300"
			/>
			<Fa
				icon={faClock}
				class="absolute inset-y-2 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-gray-300"
			/>
		{/if}
	</div>
</InputContainer>
