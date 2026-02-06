<script lang="ts">
	export let value: number | undefined = undefined;
</script>

<div class="progress-bar w-full bg-surface-200 h-2 rounded-sm">
	<div
		class="bg-primary-500 h-2 rounded-sm"
		style={`width: ${value !== undefined ? Math.min(Math.max(value, 0), 100) : 100}%`}
	/>
</div>
