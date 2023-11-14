import { writable } from 'svelte/store';

export let host = 'window.location.origin';
export let username = '';
export let password = '';

const hostStore = writable(''); //writable(window.location.origin);
const usernameStore = writable('');
const passwordStore = writable('');

hostStore.subscribe((value) => {
	host = value;
});

usernameStore.subscribe((value) => {
	username = value;
});

passwordStore.subscribe((value) => {
	password = value;
});

export function setApiConfig(_host: string, _user: string, _pw: string) {
	console.log('overwrite api settings');

	hostStore.update((h) => (h = _host));
	usernameStore.update((u) => (u = _user));
	passwordStore.update((p) => (p = _pw));

	//console.log('overwrite host',_host);
}

// import { getToastStore  } from '@skeletonlabs/skeleton';
// const x = getToastStore();
