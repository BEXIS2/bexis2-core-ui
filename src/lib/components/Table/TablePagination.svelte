<script lang="ts">
	import Fa from 'svelte-fa';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	import { ListBox, ListBoxItem, Paginator, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let itemCount;
	export let pageConfig;
	export let pageSizes;
	export let id;

	let indexInformation = '';

	const { pageIndex, pageCount, pageSize } = pageConfig;

	let pageSizeDropdownValue: string = $pageSize;

	const pageSizePopup: PopupSettings = {
		event: 'click',
		target: `#${id}-pageSizeDropdown`,
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	const getIndexInfomationString = () => {
		return itemCount === 0
			? 'No items'
			: `Displaying items ${$pageIndex * $pageSize + 1} - ${Math.min(
					($pageIndex + 1) * $pageSize,
					itemCount
			  )} of ${Math.min($pageCount * $pageSize, itemCount)}`;
	};

	$: paginationSettings = {
		size: itemCount,
		limit: $pageSize,
		page: $pageIndex,
		amounts: pageSizes
	};
	$: $pageSize = pageSizeDropdownValue;
	$: $pageCount, $pageIndex, $pageSize, itemCount, (indexInformation = getIndexInfomationString());
</script>

<div class="grid grid-cols-3 w-full items-stretch gap-10">
	<div class="flex justify-start">
		<button
			aria-label="Open menu to select number of items to display per page"
			class="btn variant-filled-primary w-20 !px-3 !py-1.5 justify-between"
			use:popup={pageSizePopup}
		>
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
	<div class="flex justify-center">
		<Paginator
			on:page={(page) => ($pageIndex = page.detail)}
			settings={paginationSettings}
			select="hidden"
			buttonClasses="disabled:!variant-filled-surface !px-3 !py-1.5 !fill-current !variant-filled-primary"
			active="!variant-filled-secondary"
			maxNumerals={1}
			showNumerals
		/>
	</div>
	<div class="flex justify-end items-center">
		<span class="text-xs text-gray-500">{indexInformation}</span>
	</div>
</div>
