<script lang="ts">
	export let padding: string | undefined;
	export let spacing: string | undefined;
	export let background: string | undefined;
</script>

<header class={`w-full ${padding ?? ''} ${spacing ?? ''} ${background ?? ''}`}>
	<slot name="headline" />
	<slot />
</header>
