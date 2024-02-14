<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faFilter } from '@fortawesome/free-solid-svg-icons';
	import { popup } from '@skeletonlabs/skeleton';
	import { FilterOptionsEnum } from '$models/Enums';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { Send } from '$models/Models';

	export let values;
	export let id;
	export let tableId;
	export let toFilterableValueFn: undefined | ((value: any) => any) = undefined;
	export let request: Send;
	export let updateTable; // Function to update the table
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
				value: FilterOptionsEnum.ie,
				label: 'Is equal to'
			},
			{
				value: FilterOptionsEnum.gte,
				label: 'Is greater than or equal to'
			},
			{
				value: FilterOptionsEnum.gt,
				label: 'Is greater than'
			},
			{
				value: FilterOptionsEnum.lte,
				label: 'Is less than or equal to'
			},
			{
				value: FilterOptionsEnum.lt,
				label: 'Is less than'
			},
			{
				value: FilterOptionsEnum.ne,
				label: 'Is not equal to'
			}
		],
		string: [
			{
				value: FilterOptionsEnum.c,
				label: 'Contains'
			},
			{
				value: FilterOptionsEnum.nc,
				label: 'Does not contain'
			},
			{
				value: FilterOptionsEnum.ie,
				label: 'Is equal to'
			},
			{
				value: FilterOptionsEnum.ne,
				label: 'Is not equal to'
			},
			{
				value: FilterOptionsEnum.sw,
				label: 'Starts with'
			},
			{
				value: FilterOptionsEnum.ew,
				label: 'Ends with'
			}
		],
		date: [
			{
				value: FilterOptionsEnum.o,
				label: 'Is on'
			},
			{
				value: FilterOptionsEnum.sf,
				label: 'Is starting from'
			},
			{
				value: FilterOptionsEnum.a,
				label: 'Is after'
			},
			{
				value: FilterOptionsEnum.u,
				label: 'Is until'
			},
			{
				value: FilterOptionsEnum.b,
				label: 'Is before'
			},
			{
				value: FilterOptionsEnum.no,
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

	const addFilter = (column, option, value) => {
		const columnFilters = request.filter.filter((f) => f.column === column);

		if (columnFilters) {
			// If the filter is already applied, remove it first
			removeFilter(column, option);
			columnFilters[0].filters.filter((f) => f.option !== option);

			request.filter = [
				...request.filter.filter((f) => f.column !== column),
				{ column, filters: [...columnFilters[0].filters, { option, value }] }
			];
		} else {
			request.filter = [...request.filter, { column, filters: [{ option, value }] }];
		}
	};

	const removeFilter = (column, option) => {
		const columnFilters = request.filter.filter((f) => f.column === column);
		if (columnFilters) {
			request.filter = [
				...request.filter.filter((f) => f.column !== column),
				{
					column,
					filters: columnFilters[0].filters.filter((f) => f.option !== option)
				}
			];
		}
	};

	const clearFilters = (column) => {
		request.filter = request.filter.filter((f) => f.column !== column);
	};

	// Update data store with fetched data
	const fetchFiltered = async () => {
		// Set paging to first page
		$pageIndex = 0;
		// Fetch data from the server
		updateTable();
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

					clearFilters(id);
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
					on:click={() => addFilter(id, firstOption, '')}
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
						on:change={(e) => addFilter(id, firstOption, e.target.value)}
					/>
				{:else if type === 'string'}
					<input
						type="text"
						class="input p-1 border border-primary-500"
						bind:value={firstValue}
						on:change={() => addFilter(id, firstOption, firstValue)}
					/>
				{:else}
					<input
						type="date"
						class="input p-1 border border-primary-500"
						bind:value={firstValue}
						on:change={() => addFilter(id, firstOption, firstValue)}
					/>
				{/if}
			</div>
			<!-- <label for="" class="label normal-case">And</label>
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
			</div> -->\
			<button
				class="btn variant-outline-primary btn-sm"
				type="button"
				on:click|preventDefault={() => {}}>Add another filter</button
			>
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
