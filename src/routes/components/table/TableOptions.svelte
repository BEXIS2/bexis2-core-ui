<script lang="ts">
	export let row;
</script>

<button
	class="btn btn-sm variant-filled-secondary"
	on:click|preventDefault={() => alert(JSON.stringify(row))}>See row info</button
>
