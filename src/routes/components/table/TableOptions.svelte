<script lang="ts">
	export let row;
	export let dispatchFn;
</script>

<button
	class="btn btn-sm variant-filled-secondary"
	on:click|preventDefault={() =>
		dispatchFn({
			type: 'delete',
			payload: row.id
		})}>Delete</button
>
