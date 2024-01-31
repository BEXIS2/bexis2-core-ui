<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faFilter } from '@fortawesome/free-solid-svg-icons';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let values;
	export let id;
	export let tableId;
	export let toFilterableValueFn: undefined | ((value: any) => any) = undefined;
	export let q; // Query parameters
	export let updateQuery; // Function to update the query parameters
	export let pageIndex; // Current page index

	let firstOption;
	let firstValue;
	let secondOption;
	let secondValue;
	// If the filter is applied and the displayed values are filtered
	let active = false;

	// Options for different types of values
	const options = {
		number: [
			{
				value: 'isequal',
				label: 'Is equal to'
			},
			{
				value: 'isgreaterorequal',
				label: 'Is greater than or equal to'
			},
			{
				value: 'isgreater',
				label: 'Is greater than'
			},
			{
				value: 'islessorequal',
				label: 'Is less than or equal to'
			},
			{
				value: 'isless',
				label: 'Is less than'
			},
			{
				value: 'isnotequal',
				label: 'Is not equal to'
			}
		],
		string: [
			{
				value: 'contains',
				label: 'Contains'
			},
			{
				value: 'notcontains',
				label: 'Does not contain'
			},
			{
				value: 'isequal',
				label: 'Is equal to'
			},
			{
				value: 'isnotequal',
				label: 'Is not equal to'
			},
			{
				value: 'starts',
				label: 'Starts with'
			},
			{
				value: 'ends',
				label: 'Ends with'
			}
		],
		date: [
			{
				value: 'ison',
				label: 'Is on'
			},
			{
				value: 'isstartingfrom',
				label: 'Is starting from'
			},
			{
				value: 'isafter',
				label: 'Is after'
			},
			{
				value: 'isuntil',
				label: 'Is until'
			},
			{
				value: 'isbefore',
				label: 'Is before'
			},
			{
				value: 'isnoton',
				label: 'Is not on'
			}
		]
	};

	// Unique ID for the column filter popup
	const popupId = `${tableId}-${id}`;
	// Popup config
	const popupFeatured: PopupSettings = {
		event: 'click',
		target: popupId,
		placement: 'bottom-start'
	};

	let type: string = 'string';
	let isDate = false;
	// Check the type of the column
	$values.forEach((item) => {
		if (item) {
			type = typeof (toFilterableValueFn ? toFilterableValueFn(item) : item);

			if (type === 'object') {
				if (item instanceof Date) {
					isDate = true;
				}
			}
		}
	});
	// Determine if the type is date
	type = isDate ? 'date' : type;

	// Update data store with fetched data
	const fetchFiltered = async () => {
		// Set query parameters for filtering
		$q.set('filter', '....');
		// Set paging to first page
		$pageIndex = 0;
		// Fetch data from the server
		updateQuery();
	};
</script>

<form class="">
	<button
		class:variant-filled-primary={active}
		class="btn w-max p-2"
		type="button"
		use:popup={popupFeatured}
		id="{popupId}-button"
	>
		<Fa icon={faFilter} size="12" />
	</button>

	<div data-popup={`${popupId}`} id={popupId} class="z-50">
		<div class="card p-3 grid gap-2 shadow-lg w-min bg-base-100">
			<button
				class="btn variant-filled-primary btn-sm"
				type="button"
				on:click|preventDefault={() => {
					// Set the defaults when cleared
					firstOption = 'isequal';
					firstValue = undefined;
					secondOption = 'isequal';
					secondValue = undefined;
					fetchFiltered();

					active = false;
				}}>Clear Filter</button
			>

			<label for="" class="label normal-case text-sm">Show rows with value that</label>
			<div class="grid gap-2 w-full">
				<select
					class="select border border-primary-500 text-sm p-1"
					aria-label="Show rows with value that"
					bind:value={firstOption}
					on:click|stopPropagation
				>
					{#each options[type] as option (option)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
				{#if type === 'number'}
					<input
						type="number"
						class="input p-1 border border-primary-500"
						bind:value={firstValue}
						on:click|stopPropagation
					/>
				{:else if type === 'string'}
					<input
						type="text"
						class="input p-1 border border-primary-500"
						bind:value={firstValue}
						on:click|stopPropagation
					/>
				{:else}
					<input
						type="date"
						class="input p-1 border border-primary-500"
						bind:value={firstValue}
						on:click|stopPropagation
					/>
				{/if}
			</div>
			<label for="" class="label normal-case">And</label>
			<div class="grid gap-2 w-max">
				<select
					class="select border border-primary-500 text-sm p-1"
					aria-label="Show rows with value that"
					bind:value={secondOption}
					on:click|stopPropagation
				>
					{#each options[type] as option (option)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
				{#if type === 'number'}
					<input
						type="number"
						class="input p-1 border border-primary-500"
						bind:value={secondValue}
						on:click|stopPropagation
					/>
				{:else if type === 'string'}
					<input
						type="text"
						class="input p-1 border border-primary-500"
						bind:value={secondValue}
						on:click|stopPropagation
					/>
				{:else}
					<input
						type="date"
						class="input p-1 border border-primary-500"
						bind:value={secondValue}
						on:click|stopPropagation
					/>
				{/if}
			</div>
			<button
				class="btn variant-filled-primary btn-sm"
				type="button"
				on:click|preventDefault={() => {
					active = firstValue?.toString().length > 0 || secondValue?.toString().length > 0;
					fetchFiltered();
				}}>Apply</button
			>
		</div>
	</div>
</form>
