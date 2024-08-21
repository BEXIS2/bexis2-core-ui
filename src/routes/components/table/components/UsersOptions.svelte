<script lang="ts">
	import Fa from 'svelte-fa';
	import { writable } from 'svelte/store';
	import { faPen, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore, Modal } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	import EditForm from './EditUserForm.svelte';

	import EditUserGroup from './EditUserGroup.svelte';
	import { onMount } from 'svelte';

	export let row: any;
	export let dispatchFn: any;

	type UserGroup = {
		member: boolean;
		id: number;
		name: string;
		description: string;
	};

	const userGroupStore = writable<UserGroup[]>([]);

	const modalStore = getModalStore();

	const editModal: ModalSettings = {
		type: 'component',
		component: { ref: EditForm, props: { row: row } }
	};

	const userGroupsModal: ModalSettings = {
		type: 'component',
		title: 'User Groups',
		component: { ref: EditUserGroup, props: { data: userGroupStore, userName: row.userName } }
	};

	const deleteConfirm: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: `Are you sure you want to delete this user (Id:${row.id})?`,
		response: (r: boolean) => console.log('response:', r)
	};

	onMount(async () => {
		const response = await fetch('https://dev.bexis2.uni-jena.de/api/groups/');
		const data = await response.json();
		userGroupStore.set(
			data.map((group: any) => ({
				member: false,
				id: group.id,
				name: group.name,
				description: group.description
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
