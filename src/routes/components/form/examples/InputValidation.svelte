<script lang="ts">
	// icons
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons/index';
	import { onMount } from 'svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import TextInput from '$lib/components/form/TextInput.svelte';
	import TextArea from '$lib/components/form/TextArea.svelte';

	// test form data
	$: formData = { name: '', description: '' };

	// validation
	import suite from './inputvalidation';

	// load form result object
	let res = suite.get();

	// reset validation result when page is releoaded
	suite.reset();

	// use to actived save if form is valid
	$: disabled = !res.isValid();

	onMount(async () => {
		// init siute with form data object
		res = suite(formData);
	});

	suite.reset();
	//change event: if input change check also validation only on the field
	// e.target.id is the id of the input component
	function onChangeHandler(e) {
		//console.log("input changed", e)
		// add some delay so the entityTemplate is updated
		// otherwise the values are old
		setTimeout(async () => {
			// check changed field
			res = suite(formData, e.target.id);
		}, 10);
	}

	async function handleSubmit() {
		console.log('before submit');
	}

	function clear() {
		formData.name = '';
		formData.description = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<TextInput
		id="name"
		label="Name"
		required={true}
		bind:value={formData.name}
		on:input={onChangeHandler}
		valid={res.isValid('name')}
		invalid={res.hasErrors('name')}
		feedback={res.getErrors('name')}
	/>

	<TextArea
		id="description"
		label="Description"
		required={true}
		bind:value={formData.description}
		on:input={onChangeHandler}
		valid={res.isValid('description')}
		invalid={res.hasErrors('description')}
		feedback={res.getErrors('description')}
	/>

	<div class="py-5">
		<button type="submit" class="btn bg-slate-500" {disabled} on:click={() => alert('save')}
			><Fa icon={faSave} /></button
		>
		<button type="button" class="btn bg-warning-500" on:click={() => clear}
			><Fa icon={faTrashAlt} /></button
		>
	</div>
</form>

<CodeBlock language="ts" code={JSON.stringify(formData, undefined, 2)} />
