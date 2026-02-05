<script lang="ts">
	export let group: any = undefined;
	export let name: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let value: any = undefined;
</script>

<label class="inline-flex items-center gap-1 cursor-pointer">
	<input type="radio" name={name} bind:group={group} value={value} />
	<span>{label ?? title ?? ''}<slot /></span>
</label>
