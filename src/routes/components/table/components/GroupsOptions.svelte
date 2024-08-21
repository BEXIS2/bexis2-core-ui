<script lang="ts">
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { faPen, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	import EditGroupForm from './EditGroupForm.svelte';
	import EditGroups from './EditGroups.svelte';

	export let row: any;
	export let dispatchFn: any;

	type User = {
		member: boolean;
		id: number;
		name: string;
		email: string;
	};

	const userStore = writable<User[]>([]);

	const modalStore = getModalStore();

	const editModal: ModalSettings = {
		type: 'component',
		title: `Edit Group: ${row.name}`,
		component: { ref: EditGroupForm, props: { row: row } }
	};

	const userGroupsModal: ModalSettings = {
		type: 'component',
		title: 'User Groups',
		component: { ref: EditGroups, props: { data: userStore, groupName: row.name } }
	};

	const deleteConfirm: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: `Are you sure you want to delete this group (Id:${row.id})?`,
		response: (r: boolean) => dispatchFn({type: 'delete', id: row.id})
	};

	onMount(async () => {
		const response = await fetch('https://dev.bexis2.uni-jena.de/api/users/');
		const data = await response.json();
		userStore.set(
			data.map((user: any) => ({
				member: false,
				id: user.id,
				name: user.userName,
				email: user.email
			}))
		);
	});
</script>

<div class="gap-2">
	<button
		type="button"
		class="btn variant-filled-primary w-10 h-10"
		on:click={() => modalStore.trigger(editModal)}><Fa class="p-0 m-0" icon={faPen} /></button
	>
	<button
		type="button"
		class="btn variant-filled-primary w-10 h-10"
		on:click={() => modalStore.trigger(userGroupsModal)}><Fa class="" icon={faUserGroup} /></button
	>
	<button
		type="button"
		class="btn variant-filled-primary w-10 h-10"
		on:click={() => modalStore.trigger(deleteConfirm)}><Fa class="" icon={faTrash} /></button
	>
</div>
