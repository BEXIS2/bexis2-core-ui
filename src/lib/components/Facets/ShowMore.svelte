<script lang="ts">
	import type { SelectedFacetGroup } from '$models/Models';

	export let group: SelectedFacetGroup;
	export let handleApply: (group: SelectedFacetGroup) => {};
	export let handleCancel: (groupName: string) => {};

	let selected = structuredClone(group.children);

	const selectAll = () => {
		Object.keys(selected).forEach((key) => (selected[key].selected = true));
	};

	const selectNone = () => {
		Object.keys(selected).forEach((key) => (selected[key].selected = false));
	};

	const onApply = () => {
		handleApply({
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
		const ceil = Math.ceil(Math.sqrt(items.length));
		const max = Math.max(ceil, Math.floor(items.length / 3));

		const classes = [
			'grid-rows-1',
			'grid-rows-2',
			'grid-rows-3',
			'grid-rows-4',
			'grid-rows-5',
			'grid-rows-6',
			'grid-rows-7',
			'grid-rows-8',
			'grid-rows-9',
			'grid-rows-10',
			'grid-rows-11',
			'grid-rows-12'
		];

		if (max > 12) {
			return 'grid-rows-12';
		} else return classes[max - 1 || 1];
	};
</script>

<div class="p-5 rounded-md max-w-6xl bg-surface-50 dark:bg-surface-800 border-primary-500 border-2">
	<!-- Header -->
	<h2 class="text-xl font-semibold">{group.displayName}</h2>

	<!-- Items -->
	<div
		class="{gridClass(
			Object.keys(selected)
		)} grid grid-flow-col gap-x-10 gap-y-2 py-10 px-2 h-full overflow-x-auto"
	>
		{#each Object.keys(selected) as key}
			<label class="flex gap-3 items-center w-48">
				<input type="checkbox" class="checkbox" bind:checked={selected[key].selected} />
				<span
					title={selected[key].displayName}
					class="whitespace-nowrap break-before-avoid break-after-avoid truncate"
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
			<button class="btn btn-sm variant-filled-primary" on:click={onApply}>Apply</button>
			<button class="btn btn-sm variant-filled-secondary" on:click={onCancel}>Cancel</button>
		</div>
	</div>
</div>
