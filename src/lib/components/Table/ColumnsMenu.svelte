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
	class="btn btn-sm variant-filled-primary rounded-full order-last"
	aria-label="Open menu to hide/show columns"
	use:popup={popupCombobox}>Columns</button
>

<div
	class="bg-white dark:bg-surface-500 p-4 rounded-md shadow-md z-10"
	data-popup="{tableId}-columns-menu"
>
	{#each columns as column}
		<div class="flex gap-3 items-center">
			<input
				aria-label="Toggle column visibility for column {column.label}"
				type="checkbox"
				bind:checked={column.visible}
				disabled={columns.filter((c) => c.visible).length === 1 && column.visible}
			/>
			<span>{column.label}</span>
		</div>
	{/each}

	<div class="arrow bg-white dark:bg-surface-500" />
</div>
