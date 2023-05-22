<script lang="ts">
	import TextInput from '$lib/components/form/TextInput.svelte';

	import type { Input } from '$lib/models/Models';

	let textInputData: Input = {
		id: 'name',
		label: 'Name',
		feedback: [''],
		invalid: false,
		valid: false,
		required: false
	};
</script>

<TextInput {...textInputData} />
