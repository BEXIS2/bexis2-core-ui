<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let columns: { id: string; label: string; visible: boolean }[] = [];
	export let tableId: string;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: `${tableId}-columns-menu`,
		placement: 'bottom'
	};
</script>

<button
	type="button"
	title="Hide or show columns"
	class="btn btn-sm variant-filled-primary rounded-full order-last"
	aria-label="Open menu to hide/show columns"
	title="Open menu to hide/show columns"
	use:popup={popupCombobox}>Columns</button
>

<div
	class="bg-white dark:bg-surface-500 p-4 rounded-md shadow-md z-10"
	data-popup="{tableId}-columns-menu"
>
	{#each columns as column}
		<div class="flex gap-3 items-center">
			<label for={column.id} class="cursor-pointer" title={column.label}></label>
			<input
				aria-label={`${column.visible ? 'Hide' : 'Show'} ${column.label} column`}
				type="checkbox"
				id = {column.id}
				bind:checked={column.visible}
				title={`${column.visible ? 'Hide' : 'Show'} ${column.label} column`}
				disabled={columns.filter((c) => c.visible).length === 1 && column.visible}
			/>
			<span>{column.label}</span>
		</div>
	{/each}

	<div class="arrow bg-white dark:bg-surface-500" />
</div>
