<script lang="ts">
	export let group: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: any = undefined;
// accept arbitrary class/attrs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { class: className, ...rest } = ($$props as any) ?? {};
</script>

<div class={`listbox-item ${className ?? ''}`} role="option" aria-selected="false" {...rest}>
	<slot />
</div>
