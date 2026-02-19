<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Writable } from 'svelte/store';

	import ShowMore from './ShowMore.svelte';
	import { TreeView, createTreeViewCollection } from '@skeletonlabs/skeleton-svelte';
	import { getModalStore, Dialog as Modal } from '$lib/shims/skeleton';
	import type { FacetGroup, SelectedFacetGroup } from '$models/Models';

	export let groupSelection = false;
	export let groups: Writable<FacetGroup[]>;
	export let showAll = false;
	export let open = false;
	export let selected: { [key: string]: string[] } = {};
	export let selectedGroups: { [key: string]: boolean } = {};

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

	let internalSelected: { [key: string]: SelectedFacetGroup };
	let selectedItems: {
		[key: string]: {
			[key: string]: boolean;
		};
	} = {};

	type FacetNode = {
		id: string;
		name: string;
		children?: FacetNode[];
		groupName?: string;
		itemName?: string;
		isGroup?: boolean;
		isMore?: boolean;
		count?: number;
	};

	let collection: any;

	const dispatch = createEventDispatcher();

	const modalStore = getModalStore();

	const syncBindingsFromState = () => {
		const newSelected: { [key: string]: string[] } = {};
		const newSelectedGroups: { [key: string]: boolean } = {};

		Object.keys(internalSelected || {}).forEach((groupName) => {
			const group = internalSelected[groupName];
			newSelected[groupName] = Object.values(group.children)
				.filter((item) => item.selected)
				.map((item) => item.name);
			newSelectedGroups[groupName] = group.selected || false;
		});

		selected = newSelected;
		selectedGroups = newSelectedGroups;
	};

	const applyIncomingBindings = () => {
		if (!internalSelected) return;

		// Apply incoming group selection booleans
		if (selectedGroups && Object.keys(selectedGroups).length > 0) {
			Object.entries(selectedGroups).forEach(([groupName, isSelected]) => {
				const group = internalSelected[groupName];
				if (!group) return;
				internalSelected[groupName] = {
					...group,
					selected: isSelected
				};
			});
		}

		// Apply incoming item selections
		if (selected && Object.keys(selected).length > 0) {
			Object.entries(selected).forEach(([groupName, items]) => {
				const group = internalSelected[groupName];
				if (!group) return;
				const valueSet = new Set(items);
				const updatedChildren = Object.fromEntries(
					Object.entries(group.children).map(([itemName, item]) => [
						itemName,
						{
							...item,
							selected: valueSet.has(itemName)
						}
					])
				);
				internalSelected[groupName] = {
					...group,
					children: updatedChildren
				};
			});
		}
	};

	const handleApply = (group: SelectedFacetGroup) => {
		const { name: groupName, children } = group;

		dispatch('showMoreOpenChange', {
			group: groupName,
			open: false
		});

		const currentGroupItems = selectedItems[groupName] ?? {};
		const updatedGroupItems: { [key: string]: boolean } = { ...currentGroupItems };
		const currentGroup = internalSelected[groupName];
		const updatedChildren = { ...currentGroup.children };
		const changed: any[] = [];

		for (const key in children) {
			const selectedValue = children[key].selected || false;
			const prev = currentGroup.children[key].selected || false;
			updatedGroupItems[key] = selectedValue;
			if (prev !== selectedValue) {
				updatedChildren[key] = {
					...updatedChildren[key],
					selected: selectedValue
				};
				changed.push({ parent: groupName, selectedItem: key });
			}
		}

		selectedItems = { ...selectedItems, [groupName]: updatedGroupItems };
		internalSelected = {
			...internalSelected,
			[groupName]: {
				...currentGroup,
				children: updatedChildren
			}
		};
		syncBindingsFromState();

		dispatch('showMoreSelect', [
			{
				parent: groupName,
				selected: Object.keys(children).map((key) => children[key].selected)
			}
		]);

		changed.length && dispatch('facetSelect', changed);
		sortOptions();

		modalStore.close();
	};

	const handleCancel = (groupName: string) => {
		dispatch('showMoreOpenChange', {
			group: groupName,
			open: false
		});
		modalStore.close();
	};

	const sortOptions = () => {
		// Sort facets in a descending order if count exits
		Object.keys(internalSelected).forEach((group) => {
			const checked = Object.keys(internalSelected[group].children)
				.filter((item) => internalSelected[group].children[item].selected)
				.map((item) => internalSelected[group].children[item])
				.sort((a, b) => {
					if (a.count != undefined && b.count != undefined) {
						return b.count - a.count;
					}
					return 0;
				})
				.map((item) => item.name);

			const unchecked = Object.keys(internalSelected[group].children)
				.filter((item) => !checked.includes(item))
				.map((item) => internalSelected[group].children[item])
				.sort((a, b) => {
					if (a.count != undefined && b.count != undefined) {
						return b.count - a.count;
					}
					return 0;
				})
				.map((item) => item.name);

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
		internalSelected = data.reduce((acc, g) => {
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

		Object.keys(internalSelected).forEach((groupName) => {
			selectedItems[groupName] = {};
			Object.keys(internalSelected[groupName].children).forEach((itemName) => {
				selectedItems[groupName][itemName] =
					internalSelected[groupName].children[itemName].selected || false;
			});
		});
		applyIncomingBindings();
		syncBindingsFromState();
	});

	const handleItemToggle = (groupName: string, itemName: string, checked: boolean) => {
		const currentGroupItems = selectedItems[groupName] ?? {};
		const prev = internalSelected[groupName].children[itemName].selected || false;
		const updatedGroupItems = { ...currentGroupItems, [itemName]: checked };

		selectedItems = { ...selectedItems, [groupName]: updatedGroupItems };

		if (prev !== checked) {
			const currentGroup = internalSelected[groupName];
			const updatedChildren = {
				...currentGroup.children,
				[itemName]: {
					...currentGroup.children[itemName],
					selected: checked
				}
			};
			internalSelected = {
				...internalSelected,
				[groupName]: {
					...currentGroup,
					children: updatedChildren
				}
			};
			sortOptions();
			syncBindingsFromState();
			dispatch('facetSelect', [
				{
					parent: groupName,
					selectedItem: itemName
				}
			]);
		}
	};

	const handleGroupToggle = (groupName: string, checked: boolean) => {
		const prev = internalSelected[groupName].selected || false;

		if (prev !== checked) {
			const currentGroup = internalSelected[groupName];
			internalSelected = {
				...internalSelected,
				[groupName]: {
					...currentGroup,
					selected: checked
				}
			};
			syncBindingsFromState();
			dispatch('facetSelect', [
				{
					parent: null,
					selectedItem: groupName
				}
			]);
		}
	};

	$: displayedGroups = structuredClone($groups);

	$: collection = createTreeViewCollection<FacetNode>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		rootNode: {
			id: 'root',
			name: '',
			children: displayedGroups.map((group) => {
				const visibleChildren = showAll ? group.children : group.children.slice(0, 5);

				const childrenNodes: FacetNode[] = visibleChildren.map((item) => ({
					id: `${group.name}:${item.name}`,
					name: item.displayName ?? item.name,
					groupName: group.name,
					itemName: item.name,
					count: item.count,
					isGroup: false
				}));

				if (!showAll && group.children.length > 5) {
					childrenNodes.push({
						id: `${group.name}:__more__`,
						name: 'more',
						groupName: group.name,
						isMore: true
					});
				}

				return {
					id: group.name,
					name: group.displayName ?? group.name,
					groupName: group.name,
					count: group.count,
					isGroup: true,
					children: childrenNodes
				};
			})
		}
	});
</script>

<TreeView
	{collection}
	selectionMode={groupSelection ? 'multiple' : 'single'}
	defaultExpandedValue={open && collection?.rootNode?.children
		? collection.rootNode.children.map((node) => node.id)
		: []}
>
	<TreeView.Tree>
		{#each collection.rootNode.children || [] as groupNode, groupIndex (groupNode)}
			<TreeView.NodeProvider value={{ node: groupNode, indexPath: [groupIndex] }}>
				<TreeView.Branch>
					<TreeView.BranchControl>
						<TreeView.BranchIndicator />
						<TreeView.BranchText>
							<div class="grid grid-flow-col gap-2 items-center">
								{#if groupSelection}
									<input
										type="checkbox"
										checked={selectedGroups[groupNode.groupName!]}
										on:change={(e) =>
											handleGroupToggle(
												groupNode.groupName!,
												(e.currentTarget as HTMLInputElement).checked
											)
										}
										class="checkbox checkbox-sm"
									/>
								{/if}
								<p class="font-semibold whitespace-nowrap truncate" title={groupNode.name}>
									{groupNode.name}
								</p>
								{#if groupNode.count !== undefined}
									<span>({groupNode.count})</span>
								{/if}
							</div>
						</TreeView.BranchText>
					</TreeView.BranchControl>
					<TreeView.BranchContent>
						<TreeView.BranchIndentGuide />
						{#each groupNode.children || [] as itemNode, itemIndex (itemNode)}
							<TreeView.NodeProvider
								value={{ node: itemNode, indexPath: [groupIndex, itemIndex] }}
							>
								{#if itemNode.isMore}
									<TreeView.Item>
										<button
											class="anchor"
											on:click={() => showMore(itemNode.groupName!)}
										>
											more
										</button>
									</TreeView.Item>
								{:else}
									<TreeView.Item>
										<div class="grid grid-flow-col gap-2 items-center">
											<input
												type="checkbox"
												checked={selectedItems[itemNode.groupName!]?.[itemNode.itemName!]}
												on:click|stopPropagation|preventDefault={() => {
													const groupName = itemNode.groupName!;
													const itemName = itemNode.itemName!;
													const current = selectedItems[groupName]?.[itemName] ?? false;
													handleItemToggle(groupName, itemName, !current);
												}}
												class="checkbox checkbox-sm"
											/>
											<p class="truncate">
												<span title={itemNode.name}>{itemNode.name}</span>
											</p>
											{#if itemNode.count !== undefined}
												<span>({itemNode.count})</span>
											{/if}
										</div>
									</TreeView.Item>
								{/if}
							</TreeView.NodeProvider>
						{/each}
					</TreeView.BranchContent>
				</TreeView.Branch>
			</TreeView.NodeProvider>
		{/each}
	</TreeView.Tree>
</TreeView>

<Modal />
