<script lang="ts">
	export let row;
</script>

<button class="btn variant-filled" on:click={() => alert(JSON.stringify(row))}>See row info</button>
