<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

	export let row;
	export let dispatchFn;

	const eventDispatchFn = (type: string) => {
		return dispatchFn({ type, row });
	};

	const buttons = [
		{
			icon: faPlus,
			color: 'preset-filled-primary-500',
			type: 'CREATE'
		},
		{
			icon: faEye,
			color: 'preset-filled-secondary-500',
			type: 'READ'
		},
		{
			icon: faPen,
			color: 'preset-filled-warning-500',
			type: 'UPDATE'
		},
		{
			icon: faTrash,
			color: 'preset-filled-error-500',
			type: 'DELETE'
		}
	];
</script>

<div class="flex gap-2 w-min">
	{#each buttons as button}
		<button
			title="{button.type}"
			class={`btn btn-sm btn-icon rounded-md ${button.color}`}
			on:click|preventDefault={() => eventDispatchFn(button.type)}
		>
			<Fa icon={button.icon} />
		</button>
	{/each}
</div>
