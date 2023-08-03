import { notificationType } from '$models/Enums';
import type {
	helpItemType,
	helpStoreType,
	notificationItemType,
	notificationStoreType
} from '$models/Models';
import type { MenuModel, breadcrumbItemType } from '$models/Page';
import { BreadcrumbModel } from '$models/Page';
import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
import { writable, type Writable } from 'svelte/store';

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
export const menuStore = writable<MenuModel>();

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

		updateItem: (item: breadcrumbItemType) => {

			let b: BreadcrumbModel;
			breadcrumbStore.subscribe((value) => {
				value = value === undefined ? new BreadcrumbModel() : value;
				
				let v = value.items.find((i) => i.link === item.link)
				console.log(value.items,v);
				
				if (v) {
					const i = value.items.indexOf(v);
				 value.items[i]=item
					v = item;
				}

				b = value;
			});

			update((s) => (s = b));
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
		// set notificationStroe, notificationType, message and button style
		setNotification: (notificationItem: notificationItemType) => {
			notificationItem.notificationType =
				notificationItem.notificationType === undefined
					? notificationType.surface
					: notificationItem.notificationType;
			let btnStyle: string;

			switch (notificationItem.notificationType) {
				case notificationType.success:
					btnStyle = 'btn-icon btn-icon-sm variant-filled-success shadow-md';
					break;
				case notificationType.warning:
					btnStyle = 'btn-icon btn-icon-sm variant-filled-warning shadow-md';
					break;
				case notificationType.error:
					btnStyle = 'btn-icon btn-icon-sm variant-filled-error shadow-md';
					break;
				case notificationType.surface:
					btnStyle = 'btn-icon btn-icon-sm variant-filled-surface shadow-md';
					break;
			}

			notificationStore.set({
				notificationType: notificationItem.notificationType,
				message: notificationItem.message,
				btnStyle: btnStyle
			});
			notificationStore.subscribe((value) => {});
		},

		// triggers the notification to show
		triggerNotification: () => {
			let timeout: number = 30000;
			let classes: string = '';
			let message: string = '';
			notificationStore.subscribe((value) => {
				switch (value.notificationType) {
					case notificationType.success:
						classes =
							'bg-success-300 border-solid border-2 border-success-500 shadow-md text-surface-900';
						break;
					case notificationType.warning:
						classes =
							'bg-warning-300 border-solid border-2 border-warning-500 shadow-md text-surface-900';
						break;
					case notificationType.error:
						classes =
							'bg-error-300 border-solid border-2 border-error-500 shadow-md text-surface-900';
						break;
					case notificationType.surface:
						classes =
							'bg-surface-300 border-solid border-2 border-surface-500 shadow-md text-surface-900';
						break;
				}

				message = value.message;
			});
			if (classes != '' && message != '') {
				const notificationToast: ToastSettings = {
					classes: classes,
					message: message,
					timeout: timeout
				};
				toastStore.trigger(notificationToast);
			}
		},

		// cleans the toastStore
		clear: () => {
			toastStore.clear();
		},

		// cleans, sets, and schows the notification (all you need ;))
		showNotification: (notificationItem: notificationItemType) => {
			notificationStore.clear();
			notificationStore.setNotification({
				notificationType: notificationItem.notificationType,
				message: notificationItem.message
			});
			notificationStore.triggerNotification();
		},

		// gets the dissmiss Button style
		getBtnStyle: () => {
			let btnStyle: string = '';
			notificationStore.subscribe((value) => {
				do {
					if (value === undefined || value.btnStyle === undefined) {
						notificationStore.setNotification({ message: '' });
					} else {
						btnStyle = value.btnStyle;
					}
				} while (btnStyle === '');
			});
			return btnStyle;
		}
	};
}

//crate and export the instance of the store
export const notificationStore = createNotificationStore();
