<script lang="ts">
	import TextInput from '$lib/components/form/TextInput.svelte';
	import TextArea from '$lib/components/form/TextArea.svelte';
	import NumberInput from '$lib/components/form/NumberInput.svelte';
	import DateInput from '$lib/components/form/DateInput.svelte';

	import type { inputType } from '$lib/models/Models';

	$: textInputValue = 'David';
</script>

<div class="pb-10">
	<TextInput id="name" label="Name" required={false} bind:value={textInputValue} />
	<div class="pt-3"><b>Value:</b> {textInputValue}</div>
</div>
<div class="pb-10">
	<TextArea
		id="description"
		label="Description"
		required={true}
		placeholder="more details here, please"
	/>
</div>
<div class="pb-10">
<span	class="text-sm text-gray-500">NumberInput with min and max values. Try to enter a number smaller than -5 or bigger than 5.</span>
	<NumberInput
		id="numberOf"
		label="NumberOf"
		required={true}
		placeholder="add a random number here"
		min={-5}
		max={5}
	/>


	<NumberInput
		id="numberOf"
		label="NumberOf"
		required={true}
		placeholder="add a random number here"
	/>
</div>
<div class="pb-10">
	<DateInput id="date" label="Creation date" required={true} />
</div>
