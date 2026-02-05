<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let value: boolean = false;
	let label = 'toggle till the end of time';
</script>

<SlideToggle name={label} bind:checked={value} label={label} on:change>{label}</SlideToggle>
<div class="pt-3"><b>Value:</b> {value}</div>
