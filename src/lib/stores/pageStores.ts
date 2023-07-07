import type { helpItemType, helpStoreType } from '$models/Models';
import type { Menu, breadcrumbItemType } from '$models/Page';
import { BreadcrumbModel } from '$models/Page';

import { writable } from 'svelte/store';

function createHelpStore() {
	// set Store Type
	const { subscribe, set, update } = writable<helpStoreType>();

	const h: helpItemType[] = [];
	let v: helpStoreType;

	set({ itemId: undefined, helpItems: h });

	return {
		//pass Store default functions
		subscribe,
		set,
		update,
		//set the list of help items to show
		setHelpItemList: (helpItems: helpItemType[]) => {
			helpStore.set({ itemId: undefined, helpItems: helpItems });
		},
		//set the ID of the help item and display it
		setItemId: (itemId: string) => {
			helpStore.subscribe((value) => {
				value = value === undefined ? { itemId: undefined, helpItems: h } : value;
				value.helpItems = value.helpItems === undefined ? h : value.helpItems;
				v = { itemId: itemId, helpItems: value.helpItems };
			});
			update((u) => (u = v));
		},
		//reset the ID of the help item and hide it
		resetItemId: () => {
			helpStore.subscribe((value) => {
				value = value === undefined ? { itemId: undefined, helpItems: h } : value;
				value.helpItems = value.helpItems === undefined ? h : value.helpItems;
				v = { itemId: undefined, helpItems: value.helpItems };
			});
			update((u) => (u = v));
		},
		//set the ID of the help item and display it
		show: (itemId: string) => {
			helpStore.setItemId(itemId);
		},
		//set a help item and display it
		showHelpItem: (helpItem: helpItemType) => {
			helpItem.id = helpItem.id === undefined ? 'default' : helpItem.id;
			helpStore.set({ itemId: helpItem.id, helpItems: [helpItem] });
		},
		//reset the ID of the help item and hide it
		hide: () => {
			helpStore.resetItemId();
		},
		//reset the ID of the help item and hide it
		toggle: (itemId: string) => {
			helpStore.subscribe((value) => {
				value = value === undefined ? { itemId: undefined, helpItems: h } : value;
				value.helpItems = value.helpItems === undefined ? h : value.helpItems;
				v = { itemId: itemId, helpItems: value.helpItems };
			});
			update((u) => (u = v));
		},
		reset: () => {
			helpStore.set({ itemId: undefined, helpItems: h });
		},
		clear: () => {
			helpStore.reset();
		}
	};
}

//crate and export the instance of the store
export const helpStore = createHelpStore();

// store for menu
export const menuStore = writable<Menu>();

function createBreadcrumbStore() {
	// set Store Type
	const { subscribe, set, update } = writable<BreadcrumbModel>();

	set(new BreadcrumbModel());

	return {
		//pass Store default functions
		subscribe,
		set,
		update,

		//set the ID of the help item and display it
		addItem: (item: breadcrumbItemType) => {
			let b: BreadcrumbModel;
			breadcrumbStore.subscribe((value) => {
				value = value === undefined ? new BreadcrumbModel() : value;
				// value.items = (value.items === undefined) ? b:value.items
				if (!value.items.find((i) => i.label === item.label)) {
					value.items = [...value.items, item];
				}

				b = value;
			});

			update((s) => (s = b));
		},

		clean: () => {
			let b: BreadcrumbModel;
			breadcrumbStore.subscribe((value) => {
				value = new BreadcrumbModel();
				b = value;
			});

			update((s) => (s = b));
		}
	};
}

// store for breadcrumb navigation
export const breadcrumbStore = createBreadcrumbStore();
