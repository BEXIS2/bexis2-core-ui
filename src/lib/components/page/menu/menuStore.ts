import type { Menu} from "./menu";

import { writable } from 'svelte/store';

export const menuStore = writable<Menu>();