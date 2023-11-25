<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let value: number = 0;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="text-sm">best of</label>
<RadioGroup>
	<RadioItem bind:group={value} name="justify" value={0}>(music)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>(movies)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={2}>(series)</RadioItem>
</RadioGroup>
<div class="pt-3"><b>Value:</b> {value}</div>
