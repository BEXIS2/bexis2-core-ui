<script lang="ts">
	import type { SelectedFacetGroup } from '$models/Models';

	export let group: SelectedFacetGroup;
	export let handleSave: (group: SelectedFacetGroup) => {};
	export let handleCancel: (groupName: string) => {};

	let selected = structuredClone(group.children);

	const selectAll = () => {
		Object.keys(selected).forEach((key) => (selected[key].selected = true));
	};

	const selectNone = () => {
		Object.keys(selected).forEach((key) => (selected[key].selected = false));
	};

	const onSave = () => {
		handleSave({
			...group,
			children: selected
		});
	};

	const onCancel = () => {
		console.log(selected, group.children);
		selected = structuredClone(group.children);
		handleCancel(group.name);
	};

	const gridClass = (items: any[]) => {
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
	<h2 class="text-xl font-semibold">{group.displayName}</h2>

	<!-- Items -->
	<div
		class="grid {gridClass(
			Object.keys(selected)
		)} !gap-x-20 gap-y-2 py-10 px-2 max-h-[1000px] overflow-x-auto max-w-6xl"
	>
		{#each Object.keys(selected) as key}
			<label class="flex gap-3 items-center">
				<input type="checkbox" class="checkbox" bind:checked={selected[key].selected} />
				<span class="whitespace-nowrap break-before-avoid break-after-avoid"
					>{selected[key].displayName}</span
				>
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
