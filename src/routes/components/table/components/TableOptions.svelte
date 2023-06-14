<script lang="ts">
	export let row;
	export let dispatchFn;

	const eventDispatchFn = () => {
		const type = row.id % 2 === 0 ? 'even' : 'odd';
		return dispatchFn({ type });
	};
</script>

<button class="btn btn-sm variant-filled-secondary" on:click|preventDefault={eventDispatchFn}>
	Odd or even
</button>
