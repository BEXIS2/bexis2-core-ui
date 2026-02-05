<script lang="ts">
	export let position: string | undefined;
	export let buttonDismiss: string | undefined;
</script>

<div class={`toast-container ${position ?? ''}`}>
	<slot />
</div>
