<script lang="ts">
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';

	import Table from '$lib/components/Table/Table.svelte';
	import type { TableConfig } from '$lib/models/Models';
	import EditUsersCheckbox from './EditUsersCheckbox.svelte';

	type UserGroup = {
		member: boolean;
		id: number;
		name: string;
		description: string;
	};

	export let data: Writable<UserGroup[]>;
	export let userName: string;

	const modalStore = getModalStore();

	const config: TableConfig<UserGroup> = {
		id: 'usersGroupsEdit',
		data,
		search: false,
		columns: {
			member: {
				disableFiltering: true,
				instructions: {
					renderComponent: EditUsersCheckbox
				}
			}
		}
	};

	const actionHandler = (data: any) => {
		console.log(data.detail);

		if (data.detail.type === 'MembershipChange') {
			alert(
				`User ${userName} ${
					data.detail.value ? 'added to' : 'removed from'
				} group ${data.detail.row.original.name}`
			);
		}
	};
</script>

<div class="rounded-lg">
	<div class="flex justify-between items-center variant-filled-primary p-2 px-5">
		<span class="text-xl font-bold">Edit Membership(s): {userName}</span>
		<button
			type="button"
			class="btn variant-ghost-primary w-5 h-5 !p-0"
			on:click={() => modalStore.close()}
		>
			<Fa size="xs" class="!p-0" icon={faX} />
		</button>
	</div>
	<div class="w-max p-4 bg-surface-50">
		<Table {config} on:action={actionHandler} />
	</div>
</div>
