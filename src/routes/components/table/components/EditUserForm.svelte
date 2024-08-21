<script lang="ts">
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let row: any;

	const modalStore = getModalStore();
</script>

<form class="gap-0 w-max">
	<div class="flex justify-between items-center variant-filled-primary p-2 px-5">
		<span class="text-xl font-bold">Edit User: {row.userName}</span>
		<button
			type="button"
			class="btn variant-ghost-primary w-5 h-5 !p-0"
			on:click={() => modalStore.close()}
		>
			<Fa size="xs" class="!p-0" icon={faX} />
		</button>
	</div>

	<div class="grid gap-3 bg-tertiary-200 p-5 text-lg grid-cols-3 w-max">
		<div class="font-bold">Id</div>
		<div class="grow col-span-2">{row.id}</div>
		<div class="font-bold">UserName</div>
		<div class="grow col-span-2">{row.userName}</div>
		<div class="font-bold">Email</div>
		<input type="email" name="email" id="email" value={row.email} class="input col-span-2" />
		<div class="flex gap-5 justify-end col-span-3">
			<button class="btn variant-filled-primary">Save</button>
			<button class="btn variant-soft-secondary">Cancel</button>
		</div>
	</div>
</form>
