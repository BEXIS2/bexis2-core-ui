<script lang="ts">
	export let row;
	export let dispatchFn;
</script>

<button
	class="btn btn-sm variant-filled-secondary"
	on:click|preventDefault={() =>
		dispatchFn({
			type: row.id % 2 === 0 ? 'even' : 'odd'
		})}>Odd or even</button
>
