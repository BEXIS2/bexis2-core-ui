<script lang="ts">
	export let selected: any = undefined;
	export let background: string | undefined = undefined;
	export let border: string | undefined = undefined;
	export let width: string | undefined = undefined;
</script>

<aside class={`app-rail ${background ?? ''} ${border ?? ''} ${width ?? ''}`}>
	<slot name="lead" />
	<slot />
	<slot name="trail" />
</aside>
