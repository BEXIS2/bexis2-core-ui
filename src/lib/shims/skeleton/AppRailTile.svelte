<script lang="ts">
	export let label: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let value: any = undefined;
</script>

<button type="button" class="app-rail-tile" aria-label={title ?? label}>
	<slot />
</button>
