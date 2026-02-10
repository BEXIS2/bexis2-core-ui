import { notificationType } from '$models/Enums';
import type {
	helpItemType,
	helpStoreType,
	notificationItemType,
	notificationStoreType
} from '$models/Models';
import type { MenuModel, breadcrumbItemType } from '$models/Page';
import { BreadcrumbModel } from '$models/Page';

import { writable } from 'svelte/store';

function createHelpStore() {
	// initialize store with an empty help list
	const initial: helpStoreType = { itemId: undefined, helpItems: [] };
	const { subscribe, set, update } = writable<helpStoreType>(initial);

	return {
		// pass Store default functions
		subscribe,
		set,
		update,
		// set the list of help items to show
		setHelpItemList: (helpItems: helpItemType[]) => {
			set({ itemId: undefined, helpItems });
		},
		// set the ID of the help item and display it
		setItemId: (itemId: string) => {
			update((value) => {
				const helpItems = value?.helpItems ?? [];
				return { itemId, helpItems };
			});
		},
		// reset the ID of the help item and hide it
		resetItemId: () => {
			update((value) => {
				const helpItems = value?.helpItems ?? [];
				return { itemId: undefined, helpItems };
			});
		},
		// set the ID of the help item and display it
		show: (itemId: string) => {
			helpStore.setItemId(itemId);
		},
		// set a help item and display it
		showHelpItem: (helpItem: helpItemType) => {
			const id = helpItem.id ?? 'default';
			set({ itemId: id, helpItems: [{ ...helpItem, id }] });
		},
		// reset the ID of the help item and hide it
		hide: () => {
			helpStore.resetItemId();
		},
		// toggle the active help item id (used to show/hide help)
		toggle: (itemId: string) => {
			update((value) => {
				const helpItems = value?.helpItems ?? [];
				return { itemId, helpItems };
			});
		},
		reset: () => {
			set(initial);
		},
		clear: () => {
			helpStore.reset();
		}
	};
}

//crate and export the instance of the store
export const helpStore = createHelpStore();

// store for menu
export const menuStore = writable<MenuModel>();

function createBreadcrumbStore() {
	// set Store Type
	const { subscribe, set, update } = writable<BreadcrumbModel>(new BreadcrumbModel());

	return {
		//pass Store default functions
		subscribe,
		set,
		update,

		//set the ID of the help item and display it
		addItem: (item: breadcrumbItemType) => {
			update((value) => {
				const current = value ?? new BreadcrumbModel();
				if (!current.items.find((i) => i.label === item.label)) {
					current.items = [...current.items, item];
				}
				return current;
			});
		},

		updateItem: (item: breadcrumbItemType) => {
			update((value) => {
				const current = value ?? new BreadcrumbModel();
				const existing = current.items.find((i) => i.link === item.link);
				if (existing) {
					const index = current.items.indexOf(existing);
					current.items[index] = item;
				}
				return current;
			});
		},

		clean: () => {
			breadcrumbStore.set(new BreadcrumbModel());

			//update((s) => (s = b));
		}
	};
}

// store for breadcrumb navigation
export const breadcrumbStore = createBreadcrumbStore();

// store for notification (toasts)
function createNotificationStore() {
	// set Store Type
	const { subscribe, set, update } = writable<notificationStoreType>();

	return {
		//pass Store default functions
		subscribe,
		set,
		update,
		// set notification store, notificationType, message and button style
		setNotification: (notificationItem: notificationItemType) => {
			const type =
				notificationItem.notificationType === undefined
					? notificationType.surface
					: notificationItem.notificationType;
			let btnStyle: string;

			switch (type) {
				case notificationType.success:
					btnStyle = 'btn-icon btn-icon-sm preset-filled-success-500 shadow-md';
					break;
				case notificationType.warning:
					btnStyle = 'btn-icon btn-icon-sm preset-filled-warning-500 shadow-md';
					break;
				case notificationType.error:
					btnStyle = 'btn-icon btn-icon-sm preset-filled-error-500 shadow-md';
					break;
				case notificationType.surface:
				default:
					btnStyle = 'btn-icon btn-icon-sm preset-filled-surface-500 shadow-md';
					break;
			}

			set({
				notificationType: type,
				message: notificationItem.message,
				btnStyle
			});
		},

		// cleans, sets, and schows the notification (all you need ;))
		showNotification: (notificationItem: notificationItemType) => {
			//notificationStore.clear();
			notificationStore.setNotification({
				notificationType: notificationItem.notificationType,
				message: notificationItem.message
			});
			// if the store is changing, the notification componend will be updated
		},

		// gets the dismiss Button style
		getBtnStyle: () => {
			let current: notificationStoreType | undefined;
			const unsubscribe = subscribe((value) => {
				current = value;
			});
			unsubscribe();

			if (current && current.btnStyle) {
				return current.btnStyle;
			}

			// fallback to the default surface style used by the UI
			return 'btn-icon btn-icon-sm preset-filled-surface-500 shadow-md';
		}
	};
}

//crate and export the instance of the store
export const notificationStore = createNotificationStore();


