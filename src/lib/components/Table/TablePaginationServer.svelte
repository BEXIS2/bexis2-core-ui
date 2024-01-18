<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faAnglesRight,
		faAngleRight,
		faAnglesLeft,
		faAngleLeft
	} from '@fortawesome/free-solid-svg-icons';

	export let id; // Unique table ID
	export let data; // Data store for the table
	export let URL; // URL for fetching
	export let pageConfig; // Page configuration
	export let pageSizes; // Available page sizes
	export let serverItemCount; // Total number of items expected from the server. `serverSide` must be true on table config.

	// Flags for disabling buttons
	let goToFirstPageDisabled = true;
	let goToLastPageDisabled = true;
	let goToNextPageDisabled = true;
	let goToPreviousPageDisabled = true;

	// Table pagination configuration variables
	const { pageIndex, pageSize } = pageConfig;

	// Main navigation function
	const goTo = (dst: string) => {
		switch (dst) {
			case 'first':
				$pageIndex = 0;
			case 'last':
				$pageIndex = Math.ceil(serverItemCount / $pageSize) - 1;
			case 'next':
				$pageIndex += 1;
			case 'previous':
				$pageIndex -= 1;
			default:
				break;
		}

		// Fetch data for new parameters
		updateQuery();
	};

	// Table pagination handler
	async function updateQuery() {
		const q = new URLSearchParams();

		// Set query parameters for pagination and items
		q.set('limit', String($pageSize));
		q.set('offset', String($pageSize * $pageIndex));

		// Fetch data from the server
		const fetchData = await fetch(`${URL}?${q}`);
		const response = await fetchData.json();
		const results = response.results;

		// Update expected items count
		serverItemCount = response.count;

		// Update pagination flags
		goToFirstPageDisabled = !$pageIndex;
		goToLastPageDisabled = $pageIndex == Math.ceil(serverItemCount / $pageSize) - 1;
		goToNextPageDisabled = response.next ? false : true;
		goToPreviousPageDisabled = response.previous ? false : true;

		// Update data store
		$data = results;
	}

	updateQuery();
</script>

<div class="flex justify-center gap-1">
	<button
		class="btn btn-sm variant-filled-primary"
		on:click|preventDefault={() => goTo('first')}
		disabled={goToFirstPageDisabled}
		id="{id}-first"
	>
		<Fa icon={faAnglesLeft} /></button
	>
	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-previous"
		on:click|preventDefault={() => goTo('previous')}
		disabled={goToPreviousPageDisabled}><Fa icon={faAngleLeft} /></button
	>

	<select
		name="pageSize"
		id="{id}-pageSize"
		class="select variant-filled-primary w-min font-bold"
		bind:value={$pageSize}
	>
		{#each pageSizes as size}
			<option value={size}>{size}</option>
		{/each}
	</select>

	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-next"
		on:click|preventDefault={() => goTo('next')}
		disabled={goToNextPageDisabled}><Fa icon={faAngleRight} /></button
	>
	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-last"
		on:click|preventDefault={() => goTo('last')}
		disabled={goToLastPageDisabled}><Fa icon={faAnglesRight} /></button
	>
</div>
