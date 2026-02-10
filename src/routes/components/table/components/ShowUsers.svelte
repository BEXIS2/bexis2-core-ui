<script lang="ts">
	export let users;
	export let group;
</script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Users in <strong>{group}</strong>.</label>
	<ul>
		{#each users as user}
			<li class="font-semibold" value={user.id}>- {user.name}</li>
		{:else}
			<p class="italic">No users in this group</p>
		{/each}
	</ul>

	<div class="flex gap-2 justify-end">
		<button class="btn preset-filled-error-500">Cancel</button>
		<button class="btn preset-filled-success-500">Done</button>
	</div>
</div>
