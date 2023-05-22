import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const storeCurrentUrl = writable();
