<script lang="ts">
	import type { FacetOption } from '$models/Models';

	export let group: string; // Group name
	export let items: FacetOption[]; // All possible choices
	export let selected: FacetOption[]; // Initially selected items
	export let handleSave: (group: string, selectedItems: FacetOption[]) => {};
	export let handleCancel: () => {};

	// This local variable is needed for resetting the Modal when the user cancels selection.
	let selectedItems = selected; // Selected items in the Modal.

	const handleCheck = (e, index: number) => {
		const target = e.target as HTMLInputElement;
		if (target.checked) {
			selectedItems = [...selectedItems, items[index]];
		} else {
			selectedItems = selectedItems.filter((item) => item !== items[index]);
		}
	};

	const selectAll = () => {
		selectedItems = items;
	};

	const selectNone = () => {
		selectedItems = [];
	};

	const onSave = () => {
		handleSave(group, selectedItems);
	};

	const onCancel = () => {
		selectedItems = selected;
		handleCancel();
	};

	const gridClass = (items: FacetOption[]) => {
		if (items.length >= 50) {
			return 'grid-cols-5';
		} else if (items.length >= 30) {
			return 'grid-cols-4';
		} else if (items.length >= 20) {
			return 'grid-cols-3';
		}

		return 'grid-cols-2';
	};
</script>

<div class="p-5 rounded-md bg-surface-50 dark:bg-surface-800 border-primary-500 border-2">
	<!-- Header -->
	<h2 class="text-xl font-semibold">{group}</h2>

	<!-- Items -->
	<div
		class="grid {gridClass(
			items
		)} !gap-x-20 gap-y-2 py-10 px-2 max-h-[1000px] overflow-x-auto max-w-6xl"
	>
		{#each items as item, index}
			<label class="flex gap-3 items-center">
				<input
					type="checkbox"
					class="checkbox"
					value={item.value}
					on:click={(e) => handleCheck(e, index)}
					checked={selectedItems.includes(item)}
				/>
				<span class="whitespace-nowrap break-before-avoid break-after-avoid">{item.value}</span>
			</label>
		{/each}
	</div>

	<!-- Footer -->
	<div class="flex w-full justify-between gap-5">
		<div class="flex gap-3">
			<button class="btn btn-sm variant-filled-tertiary" on:click={selectNone}>None</button>
			<button class="btn btn-sm variant-filled-tertiary" on:click={selectAll}>All</button>
		</div>
		<div class="flex gap-3">
			<button class="btn btn-sm variant-filled-primary" on:click={onSave}>Save</button>
			<button class="btn btn-sm variant-filled-secondary" on:click={onCancel}>Cancel</button>
		</div>
	</div>
</div>
