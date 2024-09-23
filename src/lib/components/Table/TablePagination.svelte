<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faAnglesRight,
		faAngleRight,
		faAnglesLeft,
		faAngleLeft,
		faChevronDown
	} from '@fortawesome/free-solid-svg-icons';
	import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';

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

	let pageSizeDropdownValue: string = $pageSize;

	const pageSizePopup: PopupSettings = {
		event: 'click',
		target: `#${id}-pageSizeDropdown`,
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	$: goToFirstPageDisabled = !$pageIndex;
	$: goToLastPageDisabled = $pageIndex == $pageCount - 1;
	$: goToNextPageDisabled = !$hasNextPage;
	$: goToPreviousPageDisabled = !$hasPreviousPage;
	$: $pageSize = pageSizeDropdownValue;
</script>

<div class="flex justify-between w-full items-stretch gap-10 z-50">
	<div class="flex justify-start">
		<!-- <select
			name="pageSize"
			id="{id}-pageSize"
			class="select variant-filled-primary w-min font-bold"
			bind:value={$pageSize}
		>
			{#each pageSizes as size}
				<option value={size} class="">{size}</option>
			{/each}
		</select> -->

		<button class="btn variant-filled-primary w-20 justify-between" use:popup={pageSizePopup}>
			<span class="capitalize font-semibold">{pageSizeDropdownValue}</span>
			<Fa icon={faChevronDown} size="xs" />
		</button>

		<div class="card w-20 shadow-xl py-2" data-popup={`#${id}-pageSizeDropdown`}>
			<ListBox rounded="rounded-none">
				{#each pageSizes as size}
					<ListBoxItem bind:group={pageSizeDropdownValue} name="medium" value={size}
						>{size}</ListBoxItem
					>
				{/each}
			</ListBox>
			<div class="arrow bg-surface-100-800-token" />
		</div>
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
				Page {$pageIndex + 1} of {$pageCount}
			{:else}
				No pages
			{/if}
		</span>
	</div>
</div>
