<script lang="ts">
	export let rounded: string | undefined = undefined;
// accept arbitrary class attribute from parent usages
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { class: className, ...rest } = ($$props as any) ?? {};
</script>

<div class={`listbox ${rounded ?? ''} ${className ?? ''}`} {...rest}>
	<slot />
</div>
