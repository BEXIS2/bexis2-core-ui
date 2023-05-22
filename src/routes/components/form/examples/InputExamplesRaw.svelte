<script lang="ts">
	import { TextInput, TextArea, NumberInput, DateInput } from '@bexis2/bexis2-core-ui';
	import type { Input } from '$lib/models/Models';

	let textInputData: Input = {
		id: 'name',
		label: 'Name',
		feedback: [''],
		invalid: false,
		valid: false,
		required: false
	};

	$: textInputValue = 'David';
</script>

<div class="pb-10">
	<TextInput id="name" label="Name" required={false} bind:value={textInputValue} />
	<div class="pt-3"><b>Value:</b> {textInputValue}</div>
</div>

<TextArea id="description" label="Description" required={true} />

<NumberInput id="numberOf" label="NumberOf" required={true} />

<DateInput id="date" label="Creation date" required={true} />
