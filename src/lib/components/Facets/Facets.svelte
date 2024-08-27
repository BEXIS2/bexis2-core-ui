<script lang="ts">
	import { getModalStore, Modal, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';

	import ShowMore from './ShowMore.svelte';
	import type { FacetOption, FacetGroup } from '$models/Models';

	export let groupSelection = false;
	export let groups: FacetGroup;
	export let selected: FacetGroup;
	export let selectedGroups: { [key: string]: boolean } = {};
	export let showAll = false;
	export let open = false;

	const modalStore = getModalStore();
	const showMore = (group: string) => {
		modalStore.trigger({
			type: 'component',
			title: `${group}`,
			component: {
				ref: ShowMore,
				props: {
					group,
					handleSave,
					handleCancel,
					selected: selected[group],
					items: groups[group].sort((a, b) => a.value.localeCompare(b.value))
				}
			}
		});
	};

	const handleSave = (group: string, selectedItems: FacetOption[]) => {
		selected[group] = selectedItems;
		modalStore.close();
	};

	const handleCancel = () => {
		modalStore.close();
	};

	const sortOptions = () => {
		// Sort facets in a descending order if count exits, or sort alphabetically
		Object.keys(groups).forEach((group) => {
			groups[group] = [
				...selected[group].sort((a, b) => {
					if (a.count != undefined && b.count != undefined) {
						return b.count - a.count;
					}
					return a.value.localeCompare(b.value);
				}),
				...groups[group]
					.filter((item) => !selected[group].includes(item))
					.sort((a, b) => {
						if (a.count != undefined && b.count != undefined) {
							return b.count - a.count;
						}
						return a.value.localeCompare(b.value);
					})
			];
		});
	};

	$: selected, sortOptions();
</script>

<TreeView selection={groupSelection} multiple={groupSelection} padding="p-1" hover="">
	{#each Object.keys(groups) as group}
		<TreeViewItem
			name="groups"
			value={group}
			{open}
			hyphenOpacity="opacity-0"
			bind:group={selectedGroups}
			bind:checked={selectedGroups[group]}
		>
			<p class="font-semibold">{group}</p>

			<svelte:fragment slot="children">
				<!-- If more than 5 choices, show the remaining in the Modal -->
				{#if !showAll}
					{#each groups[group].slice(0, 5) as item}
						<TreeViewItem
							bind:group={selected[group]}
							name={group}
							value={item}
							hyphenOpacity="opacity-0"
							spacing="space-x-3"
							selection
							multiple
						>
							<p>{item.value} ({item.count})</p>
						</TreeViewItem>
					{/each}
					<!-- Trigger for the Modal to view all options -->
					{#if groups[group].length > 5}
						<TreeViewItem hyphenOpacity="opacity-0">
							<button class="anchor" on:click={() => showMore(group)}>more</button></TreeViewItem
						>
					{/if}
				{:else}
					{#each groups[group] as item}
						<TreeViewItem
							bind:group={selected[group]}
							name={group}
							value={item}
							hyphenOpacity="opacity-0"
							spacing="space-x-3"
							selection
							multiple
						>
							<p>{item.value} ({item.count})</p>
						</TreeViewItem>
					{/each}
				{/if}
			</svelte:fragment>
		</TreeViewItem>
	{/each}
</TreeView>

<Modal />
