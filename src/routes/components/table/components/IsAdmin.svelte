<script lang="ts">
	export let value;
	export let row;
</script>

<input type="checkbox" name="isAdmin" id={row.id} checked={value} disabled />
