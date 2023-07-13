<script lang="ts">
	export let error: Error;
</script>

<div class="card bg-error-300 border-solid border-2 border-error-500 shadow-md max-w-md">
	<div class="p-5 space-y-4">
		<h3 class="h3">{error.name}</h3>
		<p>{error.message}</p>
	</div>
</div>
