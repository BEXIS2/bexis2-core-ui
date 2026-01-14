<script lang="ts">
	import type { SelectedFacetGroup } from '$models/Models';

	export let group: SelectedFacetGroup;
	export let handleApply: (group: SelectedFacetGroup) => {};
	export let handleCancel: (groupName: string) => {};

	let selected = Object.keys(group.children)
		.sort((a, b) => group.children[a].displayName.localeCompare(group.children[b].displayName))
		.map((key) => ({ [key]: { ...group.children[key] } }))
		.reduce((acc, val) => ({ ...acc, ...val }), {});

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
		selected = structuredClone(group.children);
		handleCancel(group.name);
	};
</script>

<div class="w-full flex justify-center max-w-[800px]">
	<div class="grow max-h-[500px]">
		<div
			class="p-5 rounded-md w-full bg-surface-50 dark:bg-surface-800 border-primary-500 border-2"
		>
			<!-- Header -->
			<h2 class="text-xl font-semibold">{group.displayName}</h2>

			<!-- Items -->
			<div class="gap-x-10 space-y-2 py-6 px-[2px] max-h-[500px] columns-[192px] overflow-auto min-h">
				{#each Object.keys(selected) as key}
					<label class="flex gap-3 items-center">
						<input type="checkbox" class="checkbox" bind:checked={selected[key].selected} />
						<span
							title={selected[key].displayName}
							class=""
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
	</div>
</div>
