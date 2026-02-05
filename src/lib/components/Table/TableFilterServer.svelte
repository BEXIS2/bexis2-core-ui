<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFilter, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import { FilterOptionsEnum } from '$models/Enums';

	export let values;
	export let id;
	export let tableId;
	export let toFilterableValueFn: undefined | ((value: any) => any) = undefined;
	export let filters;
	export let updateTable;
	export let pageIndex;
	export let toStringFn: undefined | ((value: any) => string) = undefined;

	// If the filter is applied and the displayed values are filtered
	let active = false;
	let type: string = 'string';
	let isDate = false;
	let dropdowns: {
		option: FilterOptionsEnum;
		value: string | number | Date | undefined;
		formValue: string | number | undefined;
	}[] = [];

	// Check the type of the column
	$values.forEach((item) => {
		if (item) {
			type = typeof (toFilterableValueFn ? toFilterableValueFn(item) : item);

			if (type === 'object') {
				if ((toFilterableValueFn ? toFilterableValueFn(item) : item) instanceof Date) {
					isDate = true;
				}
			}
		}
	});

	// Options for different types of values
	const options = {
		number: [
			{
				value: FilterOptionsEnum.e,
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
				value: FilterOptionsEnum.e,
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
			}
			// TODO: 'Not on' filter should be fixed on the server side
			// {
			// 	value: FilterOptionsEnum.no,
			// 	label: 'Is not on'
			// }
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

	const stringValues = $values.map((item) => (toStringFn ? toStringFn(item) : item));

	const missingValues = stringValues.reduce((acc, item, index) => {
		acc[typeof item === 'string' ? item.toLowerCase() : item] = $values[index];
		return acc;
	}, {});

	const getMissingValue = (value: string) => {
		return Object.keys(missingValues).includes(value.toLowerCase())
			? missingValues[value.toLowerCase()]
			: value;
	};

	const optionChangeHandler = (e, index) => {
		delete $filters[id][dropdowns[index].option];
		$filters[id] = {
			...$filters[id],
			[e.target.value]: getMissingValue(dropdowns[index].value as string)
		};
		$filters = $filters;

		dropdowns[index] = {
			...dropdowns[index],
			option: e.target.value
		};
	};

	const valueChangeHandler = (e, index) => {
		dropdowns[index] = {
			...dropdowns[index],
			value: type === 'date' ? new Date(e.target.value) : e.target.value,
			formValue: e.target.value
		};

		$filters = {
			...$filters,
			[id]: {
				...$filters[id],
				[dropdowns[index].option]:
					type === 'number'
						? parseFloat(getMissingValue(e.target.value)) || undefined
						: getMissingValue(e.target.value)
			}
		};
	};

	const addFilter = (option, value) => {
		$filters = { ...$filters, [id]: { ...$filters[id], [option]: value } };

		dropdowns = [
			...dropdowns,
			{
				option: option,
				value: undefined,
				formValue: undefined
			}
		];
	};

	const removeFilter = (option) => {
		dropdowns = dropdowns.filter((dropdown) => dropdown.option !== option);
		delete $filters[id][option];
		$filters = $filters;
	};

	const clearFilters = () => {
		dropdowns = [];
		$filters[id] = {};

		$pageIndex = 0;
		updateTable().then(() => {
			active = false;
		});
	};

	const applyFilters = () => {
		$pageIndex = 0;
		updateTable().then(() => {
			active = true;
		});
	};

	// Determine if the type is date
	$: type = isDate ? 'date' : type;

	// Filter the unapplied filters
	$: remainingFilters = options[type].filter(
		(option) => !Object.keys($filters[id]).includes(option.value)
	);

	// Start by adding the default filter
	$: addFilter(options[type][0].value, undefined);

	$: console.log($filters);
</script>

<form class="">
	<button
		class:variant-filled-primary={active}
		class="btn w-max p-2"
		type="button"
		use:popup={popupFeatured}
		id="{popupId}-button"
		aria-label="Open filter menu for column {id}"
	>
		<Fa icon={faFilter} size="sm" />
	</button>

	<div data-popup={`${popupId}`} id={popupId} class="z-50">
		<div class="card p-3 grid gap-2 shadow-lg w-max bg-base-100">
			<button
				class="btn variant-filled-primary btn-sm"
				type="button"
				aria-label="Clear Filters"
				on:click|preventDefault={() => {
					// Set the defaults when cleared
					clearFilters();
					addFilter(options[type][0].value, undefined);
					active = false;
				}}>Clear Filters</button
			>

			<label for="" class="label normal-case text-sm">Show rows with value that</label>
			<div class="grid gap-2 overflow-auto">
				{#each dropdowns as dropdown, index (index)}
					<div class="grid gap-2 w-full">
						<div class="flex gap-1 items-center">
							<select
								class="select border border-primary-500 text-sm p-1"
								aria-label="Show rows with value that"
								on:change={(e) => optionChangeHandler(e, index)}
								bind:value={dropdown.option}
							>
								{#each options[type] as option (option)}
									<option
										value={option.value}
										aria-label={option.label}
										selected={dropdown.option === option.value}
										disabled={Object.keys($filters[id]).includes(option.value) &&
											dropdown.option !== option.value}>{option.label}</option
									>
								{/each}
							</select>
							{#if dropdowns.length > 1}
								<div
									role="button"
									tabindex="0"
									class="btn variant-filled-warning btn-sm h-full"
									on:click|preventDefault={() => removeFilter(dropdown.option)}
									on:keydown|preventDefault={() => removeFilter(dropdown.option)}
									aria-label="Remove filter"
									>
									<Fa icon={faXmark} />
								</div>
							{/if}
						</div>

						<!-- {#if type === 'number'}
							<input
								type="number"
								class="input p-1 border border-primary-500"
								on:input={(e) => valueChangeHandler(e, index)}
								bind:value={dropdown.value}
							/> -->
						{#if type === 'number' || type === 'string'}
							<input
								type="text"
								class="input p-1 border border-primary-500"
								on:input={(e) => valueChangeHandler(e, index)}
								bind:value={dropdown.value}
								aria-label="Filter value"
							/>
						{:else}
							<input
								type="date"
								class="input p-1 border border-primary-500"
								on:input={(e) => valueChangeHandler(e, index)}
								bind:value={dropdown.value}
								aria-label="Filter value"
							/>
						{/if}
					</div>
					{#if index !== dropdowns.length - 1 && dropdowns.length > 1}
						<label for="" class="label normal-case">And</label>
					{/if}
				{/each}
			</div>

			{#if remainingFilters.length}
				<div
					class="btn variant-filled-secondary btn-sm cursor-pointer"
					aria-label="Add filter"
					role="button"
					tabindex="0"
					on:click|stopPropagation={() => {
						addFilter(remainingFilters[0].value, undefined);
					}}
					on:keydown|stopPropagation={() => {
						addFilter(remainingFilters[0].value, undefined);
					}}
				>
					<div class="flex gap-1 items-center"><Fa icon={faPlus} />Add Filter</div>
				</div>
			{/if}
			<button
				class="btn variant-filled-primary btn-sm"
				type="button"
				aria-label="Apply filters"
				on:click|preventDefault={applyFilters}>Apply</button
			>
		</div>
	</div>
</form>
