<script lang="ts">
	export let users;
	export let group;
</script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Select the users you would like to add to the <strong>{group}</strong>.</label>
	<select multiple name="users" class="select" id="">
		{#each users as user}
			<option value={user.id}>{user.name}</option>
		{/each}
	</select>
	<div class="flex gap-2 justify-end">
		<button class="btn preset-filled-error-500">Cancel</button>
		<button class="btn preset-filled-success-500">Done</button>
	</div>
</div>
