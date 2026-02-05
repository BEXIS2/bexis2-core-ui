import { writable, type Writable } from 'svelte/store';

// Generic modal store
export type ModalSettings = { [key: string]: any };

const modalStoreInternal = writable<ModalSettings | null>(null);

export function getModalStore() {
	return {
		subscribe: modalStoreInternal.subscribe,
		trigger: (settings: ModalSettings) => modalStoreInternal.set(settings),
		close: () => modalStoreInternal.set(null)
	};
}

// Generic toast store
export type ToastSettings = { [key: string]: any };

const toastStoreInternal = writable<ToastSettings | null>(null);

export function getToastStore() {
	return {
		subscribe: toastStoreInternal.subscribe,
		trigger: (settings: ToastSettings) => toastStoreInternal.set(settings),
		clear: () => toastStoreInternal.set(null)
	};
}

// Highlight.js store used in +layout.svelte
export const storeHighlightJs: Writable<any> = writable(null);

// Initialize any global stores; here it's a no-op shim
export function initializeStores() {
	// no-op for compatibility
}
