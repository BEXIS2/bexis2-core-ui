<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faAnglesRight,
		faAngleRight,
		faAnglesLeft,
		faAngleLeft
	} from '@fortawesome/free-solid-svg-icons';

	export let id; // Unique table ID
	export let pageIndex;
	export let pageSize;
	export let pageSizes; // Available page sizes
	export let serverItemCount; // Total number of items expected from the server. `serverSide` must be true on table config.
	export let updateTable; // Function to update table

	// Flags for disabling buttons
	let goToFirstPageDisabled = true;
	let goToLastPageDisabled = true;
	let goToNextPageDisabled = true;
	let goToPreviousPageDisabled = true;

	// Handles the input change event
	const handleChange = (e) => {
		const value = e.target.value;

		if (value > pageCount) {
			$pageIndex = pageCount - 1;
		} else if (value < 1) {
			$pageIndex = 0;
		} else {
			$pageIndex = value - 1;
		}

		updateTable();
	};

	// Main navigation function
	const goTo = (dst: string) => {
		switch (dst) {
			case 'first':
				$pageIndex = 0;
				break;
			case 'last':
				$pageIndex = pageCount - 1;
				break;
			case 'next':
				$pageIndex += 1;
				break;
			case 'previous':
				$pageIndex -= 1;
				break;
			default:
				break;
		}

		// Fetch data for new parameters
		updateTable();
	};

	$: pageCount = Math.ceil($serverItemCount / $pageSize);
	$: goToFirstPageDisabled = !$pageIndex;
	$: goToLastPageDisabled = $pageIndex == pageCount - 1;
	$: goToNextPageDisabled = $pageIndex == pageCount - 1;
	$: goToPreviousPageDisabled = !$pageIndex;
	$: $pageSize && updateTable(); // Update query when page size changes

	updateTable();
</script>

<div class="flex justify-between w-full items-stretch gap-10">
	<div class="flex justify-start">
		<select
			name="pageSize"
			id="{id}-pageSize"
			class="select variant-filled-primary w-min font-bold"
			bind:value={$pageSize}
		>
			{#each pageSizes as size}
				<option value={size} class="!bg-primary-700">{size}</option>
			{/each}
		</select>
	</div>
	<div class="flex justify-center gap-1">
		<button
			class="btn btn-sm variant-filled-primary"
			title="Go to first page"
			on:click|preventDefault={() => goTo('first')}
			disabled={goToFirstPageDisabled}
			id="{id}-first"
		>
			<Fa icon={faAnglesLeft} /></button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			title="Go to previous page"
			id="{id}-previous"
			on:click|preventDefault={() => goTo('previous')}
			disabled={goToPreviousPageDisabled}><Fa icon={faAngleLeft} /></button
		>
		<input
			type="number"
			class="input border border-primary-500 rounded flex w-24"
			title="Go to page"
			value={$pageIndex + 1}
			max={pageCount}
			min={1}
			on:change={handleChange}
		/>
		<button
			class="btn btn-sm variant-filled-primary"
			title="Go to next page"
			id="{id}-next"
			on:click|preventDefault={() => goTo('next')}
			disabled={goToNextPageDisabled}><Fa icon={faAngleRight} /></button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			title="Go to last page"
			id="{id}-last"
			on:click|preventDefault={() => goTo('last')}
			disabled={goToLastPageDisabled}><Fa icon={faAnglesRight} /></button
		>
	</div>
	<div class="flex justify-end items-center">
		<span class="text-sm text-gray-500">
			{#if pageCount > 0}
				{#if pageCount == 1}
					1 page
				{:else}
					{pageCount} pages
				{/if}
			{:else}
				No pages
			{/if}
		</span>
	</div>
</div>
