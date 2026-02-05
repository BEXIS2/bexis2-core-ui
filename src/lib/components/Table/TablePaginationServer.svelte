<script lang="ts">
	import Fa from 'svelte-fa';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	import { ListBox, ListBoxItem, Paginator } from '@skeletonlabs/skeleton';

	export let itemCount;
	export let pageConfig;
	export let pageSizes;
	export let id;
	export let updateTable; // Function to update table

	let indexInformation = '';
	let showPageSizeDropdown = false;

	const { pageIndex, pageCount, pageSize } = pageConfig;

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
	$: $pageCount, $pageIndex, $pageSize, itemCount, (indexInformation = getIndexInfomationString());

</script>

<div class="grid grid-cols-3 w-full items-stretch gap-10">
	<div class="flex justify-start">
		<!-- replace default select from Paginator below to be able to style properly -->
		<div class="relative inline-block z-40">
			<button
				aria-label="Open menu to select number of items to display per page"
				class="btn variant-filled-primary w-20 !px-3 !py-1.5 justify-between"
				type="button"
				on:click={() => (showPageSizeDropdown = !showPageSizeDropdown)}
			>
				<span class="capitalize font-semibold">{$pageSize}</span>
				<Fa icon={faChevronDown} size="xs" />
			</button>
			{#if showPageSizeDropdown}
				<div class="absolute left-0 mt-1 card w-20 shadow-xl py-2 z-50">
					<ListBox rounded="rounded-none">
						{#each pageSizes as size}
							<ListBoxItem
								name="medium"
								value={size}
								on:click={() => {
									$pageSize = size;
									showPageSizeDropdown = false;
									updateTable();
								}}
							>
								{size}
							</ListBoxItem>
						{/each}
					</ListBox>
					<div class="arrow bg-surface-100-800-token" />
				</div>
			{/if}
		</div>
	</div>
	<div class="flex justify-center">
		<Paginator
			on:page={(page) => {$pageIndex = page.detail; updateTable(); }}
			settings={paginationSettings}
			select="hidden"
			active="!variant-filled-secondary !text-on-secondary-token"
			controlVariant="!text-on-primary-token"
			buttonClasses="!rounded-none !px-3 !py-1.5 fill-current bg-primary-500 hover:!bg-primary-600 !text-on-primary-token disabled:grayscale disabled:!opacity-30"
			regionControl="btn-group"
			maxNumerals={1}
			showNumerals
		/>
	</div>
	<div class="flex justify-end items-center text-on-primary-token">
		<span class="text-xs text-gray-500">{indexInformation}</span>
	</div>
</div>
