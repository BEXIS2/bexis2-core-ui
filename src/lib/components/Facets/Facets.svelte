<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getModalStore, Modal, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';

	import ShowMore from './ShowMore.svelte';
	import type { FacetGroup, SelectedFacetGroup } from '$models/Models';

	export let groupSelection = false;
	export let groups: Writable<FacetGroup[]>;
	export let showAll = false;
	export let open = false;

	export const showMore = (groupName: string) => {
		const group: SelectedFacetGroup = selected[groupName];

		dispatch('showMoreOpenChange', {
			group: group.name,
			open: true
		});

		modalStore.trigger({
			type: 'component',
			title: `${group.displayName}`,
			component: {
				ref: ShowMore,
				props: {
					group,
					handleApply,
					handleCancel
				}
			}
		});
	};

	let selected: { [key: string]: SelectedFacetGroup };
	let selectedItems: {
		[key: string]: {
			[key: string]: boolean;
		};
	} = {};
	let selectedGroups: { [key: string]: boolean } = {};

	const dispatch = createEventDispatcher();

	const modalStore = getModalStore();

	const handleApply = (group: SelectedFacetGroup) => {
		const { name: groupName, children } = group;

		dispatch('showMoreOpenChange', {
			group: groupName,
			open: false
		});

		for (const key in children) {
			const selectedValue = children[key].selected || false;
			selectedItems[groupName][key] = selectedValue;

			if (selected[groupName].children[key].selected !== selectedValue) {
				selected[groupName].children[key].selected = selectedValue;
			}
		}

		dispatch('showMoreSelect', [
			{
				parent: groupName,
				selected: Object.keys(children).map((key) => children[key].selected)
			}
		]);

		modalStore.close();
	};

	const handleCancel = (groupName: string) => {
		dispatch('showMoreOpenChange', {
			group: groupName,
			open: false
		});
		modalStore.close();
	};

	const mapSelected = (type: 'items' | 'groups') => {
		const changed: any = [];

		if (type === 'items') {
			Object.keys(selectedItems).forEach((group) => {
				Object.keys(selectedItems[group]).forEach((item) => {
					if (selectedItems[group][item] !== selected[group].children[item].selected) {
						changed.push({
							parent: group,
							selectedItem: item
						});
						selected[group].children[item].selected = selectedItems[group][item];
					}
				});
			});
		} else {
			Object.keys(selectedGroups).forEach((group) => {
				if (selectedGroups[group] !== selected[group].selected) {
					changed.push({
						parent: null,
						selectedItem: group
					});
					selected[group].selected = selectedGroups[group];
				}
			});
		}

		changed.length && dispatch('facetSelect', changed);
	};

	// Keeping the sorting function, but stays unused for now
	const sortOptions = () => {
		// Sort facets in a descending order if count exits, or sort alphabetically
		Object.keys(selected).forEach((group) => {
			const checked = Object.keys(selected[group].children)
				.filter((item) => selected[group].children[item].selected)
				.map((item) => selected[group].children[item])
				.sort((a, b) => {
					if (a.count != undefined && b.count != undefined) {
						return b.count - a.count;
					}
					return a.displayName.localeCompare(b.displayName);
				})
				.map((item) => item.name);

			const unchecked = Object.keys(selected[group].children).filter(
				(item) => !checked.includes(item)
			);

			const groupIndex = displayedGroups.findIndex((g) => g.name === group);

			displayedGroups[groupIndex].children = [
				...checked.map(
					(item) => displayedGroups[groupIndex].children.find((i) => i.name === item)!
				),
				...unchecked.map(
					(item) => displayedGroups[groupIndex].children.find((i) => i.name === item)!
				)
			];
		});
	};

	groups.subscribe((data) => {
		selected = data.reduce((acc, g) => {
			const children = g.children.reduce((acc, c) => {
				acc[c.name] = {
					...c,
					selected: c.selected || false
				};
				return acc;
			}, {});

			acc[g.name] = {
				...g,
				children,
				selected: g.selected || false
			};

			return acc;
		}, {});

		Object.keys(selected).forEach((groupName) => {
			selectedItems[groupName] = {};
			Object.keys(selected[groupName].children).forEach((itemName) => {
				selectedItems[groupName][itemName] =
					selected[groupName].children[itemName].selected || false;
			});
			selectedGroups[groupName] = selected[groupName].selected || false;
		});
	});

	$: displayedGroups = structuredClone($groups);
	$: selectedItems, mapSelected('items'); // sortOptions(); // Sorting is not used for now
	$: selectedGroups, mapSelected('groups');
</script>

<TreeView selection={groupSelection} multiple={groupSelection} padding="p-1" hover="">
	{#each displayedGroups as group}
		<TreeViewItem
			name={group.name}
			value={group.name}
			{open}
			hyphenOpacity="opacity-0"
			bind:checked={selectedGroups[group.name]}
			bind:group={selectedGroups}
		>
			<p class="font-semibold">
				{group.displayName}{group.count !== undefined ? ` (${group.count})` : ''}
			</p>

			<svelte:fragment slot="children">
				<!-- If more than 5 choices, show the remaining in the Modal -->
				{#if !showAll}
					{#each group.children.slice(0, 5) as item}
						<TreeViewItem
							bind:group={selectedItems[group.name]}
							name={item.name}
							value={item.displayName}
							hyphenOpacity="opacity-0"
							bind:checked={selectedItems[group.name][item.name]}
							spacing="space-x-3"
							selection
							multiple
						>
							<p>{item.displayName} ({item.count})</p>
						</TreeViewItem>
					{/each}
					<!-- Trigger for the Modal to view all options -->
					{#if group.children.length > 5}
						<TreeViewItem hyphenOpacity="opacity-0">
							<button class="anchor" on:click={() => showMore(group.name)}>more</button
							></TreeViewItem
						>
					{/if}
				{:else}
					{#each group.children as item}
						<TreeViewItem
							bind:group={selectedItems[group.name]}
							bind:checked={selectedItems[group.name][item.name]}
							name={item.name}
							value={item.displayName}
							hyphenOpacity="opacity-0"
							spacing="space-x-3"
							selection
							multiple
						>
							<p>{item.displayName} ({item.count})</p>
						</TreeViewItem>
					{/each}
				{/if}
			</svelte:fragment>
		</TreeViewItem>
	{/each}
</TreeView>

<Modal />
