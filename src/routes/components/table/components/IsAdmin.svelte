<script lang="ts">
	export let value;
	export let row;
</script>

<input type="checkbox" name="isAdmin" title={value} id={row.id} checked={value} disabled />
