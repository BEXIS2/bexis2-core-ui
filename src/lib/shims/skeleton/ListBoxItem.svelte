<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let group: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: any = undefined;

	const dispatch = createEventDispatcher();
	// accept arbitrary non-event attrs/classes
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { class: className, ...rest } = ($$props as any) ?? {};

	const handleClick = (event: MouseEvent) => {
		dispatch('click', event);
	};
</script>

<div
	class={`listbox-item px-2 py-1 cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-700 ${className ?? ''}`}
	role="option"
	aria-selected="false"
	{...rest}
	on:click={handleClick}
>
	<slot />
</div>
