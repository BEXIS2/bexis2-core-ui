<script lang="ts">
	import Fa from 'svelte-fa';
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let columns: { id: string; label: string; visible: boolean }[] = [];
	export let tableId: string;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: `${tableId}-columns-menu`,
		placement: 'bottom',
		closeQuery: ''
	};

	const selectAll = () => {
		columns = columns.map((column) => ({ ...column, visible: true }));
	};

	const deselectAll = () => {
		columns = columns.map((column) => ({ ...column, visible: false }));
		columns[0].visible = true;
	};
</script>

<button
	type="button"
	class="btn btn-sm variant-filled-primary rounded-full order-last gap-2"
	aria-label="Open menu to hide/show columns"
	use:popup={popupCombobox}><Fa icon={faEye} /> Columns</button
>
<div
	class="bg-white dark:bg-surface-500 p-4 px-5 rounded-md shadow-md z-10 border border-primary-500"
	data-popup="{tableId}-columns-menu"
>
	<div class="flex items-center gap-4 pb-5 grow justify-between">
		<button
			on:click|preventDefault={selectAll}
			type="button"
			class="btn p-0 text-sm grow underline text-primary-500"
		>
			Select All
		</button>
		<div class="border border-r border-neutral-200 h-6" />
		<button
			on:click|preventDefault={deselectAll}
			type="button"
			class="btn p-0 text-sm grow underline text-neutral-500"
		>
			Deselect All
		</button>
	</div>
	{#each columns as column}
		<div class="flex gap-3 items-center">
			<input
				aria-label={`${column.visible ? 'Hide' : 'Show'} ${column.label} column`}
				type="checkbox"
				class="checkbox"
				bind:checked={column.visible}
				title={`${column.visible ? 'Hide' : 'Show'} ${column.label} column`}
				disabled={columns.filter((c) => c.visible).length === 1 && column.visible}
			/>
			<span>{column.label}</span>
		</div>
	{/each}

	<div class="arrow bg-white dark:bg-surface-500 border-l border-t border-primary-500" />
</div>
