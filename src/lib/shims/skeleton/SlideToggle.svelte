<script lang="ts">
	export let name: string | undefined;
	export let checked: boolean | undefined;
	export let label: string | undefined = undefined;
	export let active: string | undefined = undefined;
	export let size: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<label class="inline-flex items-center gap-2 cursor-pointer">
	<span>{label ?? ''}<slot /></span>
	<input type="checkbox" {id} name={name} bind:checked class="toggle" {title} />
</label>
