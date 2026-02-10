<script lang="ts">
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let value: number = 0;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="text-sm">best of</label>
<SegmentedControl>
	<Segment.Item bind:group={value} name="justify" title="music" label="music" value={0}>(music)</Segment.Item>
	<Segment.Item bind:group={value} name="justify" title="movies" label="movies" value={1}>(movies)</Segment.Item>
	<Segment.Item bind:group={value} name="justify" title="series" label="series" value={2}>(series)</Segment.Item>
</SegmentedControl>
<div class="pt-3"><b>Value:</b> {value}</div>
