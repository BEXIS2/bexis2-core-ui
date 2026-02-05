<script lang="ts">
	export let settings: any;
	export let select: any;
	export let active: any;
	export let controlVariant: any;
	export let buttonClasses: any;
	export let regionControl: any;
	export let maxNumerals: any;
	export let showNumerals: any;
</script>

<div class="paginator flex gap-1 items-center">
	<button type="button">Prev</button>
	<span>{settings?.page ?? 1} / {settings ? Math.ceil(settings.size / settings.limit) : 1}</span>
	<button type="button">Next</button>
</div>
