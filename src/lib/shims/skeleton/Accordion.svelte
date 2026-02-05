<script lang="ts">
	export let padding: string | undefined = undefined;
	export let open: boolean | undefined = undefined;
</script>

<div class={`accordion ${padding ?? ''}`}>
	<slot />
</div>
