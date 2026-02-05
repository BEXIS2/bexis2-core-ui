import { writable, type Writable } from 'svelte/store';

// Very small approximation of Skeleton's localStorageStore helper
export function localStorageStore<T>(key: string, initial: T): Writable<T> {
	let startValue = initial;
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem(key);
		if (stored != null) {
			try {
				startValue = JSON.parse(stored) as T;
			} catch {
				// ignore parse errors, fall back to initial
			}
		}
	}

	const store = writable<T>(startValue);

	store.subscribe((value) => {
		if (typeof localStorage === 'undefined') return;
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch {
			// ignore quota or access errors
		}
	});

	return store;
}
