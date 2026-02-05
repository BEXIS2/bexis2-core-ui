<script lang="ts">
	export let value: any = undefined;
</script>

<div class="tab-group flex gap-2">
	<slot />
</div>

<div class="tab-panel mt-2">
	<slot name="panel" />
</div>
