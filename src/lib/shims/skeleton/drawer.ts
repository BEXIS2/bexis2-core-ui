import { writable } from 'svelte/store';

export type DrawerState = {
	open: boolean;
};

const drawerStoreInternal = writable<DrawerState>({ open: false });

export function getDrawerStore() {
	return {
		subscribe: drawerStoreInternal.subscribe,
		open: () => drawerStoreInternal.set({ open: true }),
		close: () => drawerStoreInternal.set({ open: false })
	};
}
