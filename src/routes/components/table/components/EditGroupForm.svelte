<script lang="ts">
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let row: any;

	const modalStore = getModalStore();
</script>

<form class="gap-0 w-max">
	<div class="flex justify-between items-center variant-filled-primary p-2 px-5">
		<span class="text-xl font-bold">Edit Group: {row.name}</span>
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
		<div class="font-bold">Name</div>
		<input type="text" name="name" id="name" value={row.name} class="input col-span-2" />
		<div class="font-bold">Description</div>
		<input
			type="text"
			name="description"
			id="description"
			value={row.description}
			class="input col-span-2"
		/>
		<div class="flex gap-5 justify-end col-span-3">
			<button class="btn variant-filled-primary">Save</button>
			<button class="btn variant-soft-secondary">Cancel</button>
		</div>
	</div>
</form>
