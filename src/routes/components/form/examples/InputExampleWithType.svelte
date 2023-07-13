<script lang="ts">
	import TextInput from '$lib/components/form/TextInput.svelte';

	import type { inputType } from '$lib/models/Models';

	let textInputData: inputType = {
		id: 'name',
		label: 'Name',
		feedback: [''],
		invalid: false,
		valid: false,
		required: false,
		placeholder: 'please enter a name of a very important people'
	};
</script>

<TextInput {...textInputData} />
