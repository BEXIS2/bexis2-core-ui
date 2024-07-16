<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faAnglesRight,
		faAngleRight,
		faAnglesLeft,
		faAngleLeft
	} from '@fortawesome/free-solid-svg-icons';

	export let pageConfig;
	export let pageSizes;
	export let id;

	const { pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage } = pageConfig;

	const goToFirstPage = () => ($pageIndex = 0);
	const goToLastPage = () => ($pageIndex = $pageCount - 1);
	const goToNextPage = () => ($pageIndex += 1);
	const goToPreviousPage = () => ($pageIndex -= 1);

	// Handles the input change event
	const handleChange = (e) => {
		const value = e.target.value;

		if (value > $pageCount) {
			$pageIndex = $pageCount - 1;
		} else if (value < 1) {
			$pageIndex = 0;
		} else {
			$pageIndex = value - 1;
		}
	};

	$: goToFirstPageDisabled = !$pageIndex;
	$: goToLastPageDisabled = $pageIndex == $pageCount - 1;
	$: goToNextPageDisabled = !$hasNextPage;
	$: goToPreviousPageDisabled = !$hasPreviousPage;
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
			on:click|preventDefault={goToFirstPage}
			disabled={goToFirstPageDisabled}
			id="{id}-first"
		>
			<Fa icon={faAnglesLeft} /></button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			id="{id}-previous"
			on:click|preventDefault={goToPreviousPage}
			disabled={goToPreviousPageDisabled}><Fa icon={faAngleLeft} /></button
		>
		<input
			type="number"
			class="input border border-primary-500 rounded flex w-24"
			value={$pageIndex + 1}
			max={$pageCount}
			min={1}
			on:change={handleChange}
		/>
		<button
			class="btn btn-sm variant-filled-primary"
			id="{id}-next"
			on:click|preventDefault={goToNextPage}
			disabled={goToNextPageDisabled}><Fa icon={faAngleRight} /></button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			id="{id}-last"
			on:click|preventDefault={goToLastPage}
			disabled={goToLastPageDisabled}><Fa icon={faAnglesRight} /></button
		>
	</div>
	<div class="flex justify-end items-center">
		<span class="text-sm text-gray-500">
			{#if $pageCount > 0}
				{#if $pageCount == 1}
					1 page
				{:else}
					{$pageCount} pages
				{/if}
			{:else}
				No pages
			{/if}
		</span>
	</div>
</div>
