import { writable } from 'svelte/store';

export type PopupSettings = { [key: string]: any };

// Simple global popup config store, used via storePopup.set(...)
export const storePopup = writable<any>(null);

// Minimal Svelte action used as `use:popup={settings}`; does nothing but keeps types happy.
export function popup(node: HTMLElement, _settings: PopupSettings) {
	return {
		update(_new: PopupSettings) {
			// ignore
		},
		destroy() {
			// ignore
		}
	};
}
