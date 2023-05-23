<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';

	// example 1
	import InputExamples from './examples/InputExamples.svelte';
	import InputExamplesRaw from './examples/InputExamples.svelte?raw';

	// example 2
	import InputExampleWithType from './examples/InputExampleWithType.svelte';
	import InputExampleWithTypeRaw from './examples/InputExampleWithType.svelte?raw';
	import InputRaw from './Input?raw';

	// example 3 - validation
	import InputValidation from './examples/InputValidation.svelte';
	import InputValidationRaw from './examples/InputValidation.svelte?raw';
	import InputValidationJsRaw from './examples/inputvalidation?raw';

	// example 4 - validation
	import {Metadatastructures} from './examples/exampleData';
	import DropdownKVPExampleRaw from './examples/DropdownKVPExample.svelte?raw';
	import DropdownKvpExample from './examples/DropdownKVPExample.svelte';

		// example 5 - checkboxlist
		import CheckboxKVPExample from './examples/CheckboxKVPExample.svelte';
	 import CheckboxKVPExampleRaw from './examples/CheckboxKVPExample.svelte?raw';
	
</script>

<div id="toc-target" class="p-5 grid gap-5">

	<h1>Inputs</h1>
	
	<!-- Simple Input Examples -->

	<CodeContainer title={'Simple input types overview'} svelte={InputExamplesRaw}>
		<div slot="info">
			we start with an overview of the simple input types and the easiest set up.
		</div>
		<InputExamples />
	</CodeContainer>

	

	<!-- Input with Type Example -->

	<CodeContainer
		title={'Input with Typescript'}
		svelte={InputExampleWithTypeRaw}
		typescript={InputRaw}
	>
		<div slot="info">
			In this example, the different input fields are shown. All fields use the same typescript type
			input
		</div>
		<InputExampleWithType />
	</CodeContainer>


	<h1>Selections</h1>

	<!-- Dropndown KVP Example -->

	<CodeContainer title={'DropdownKVP Example'} svelte={DropdownKVPExampleRaw} data={JSON.stringify(Metadatastructures, undefined, 2)}>
		<div slot="info">
			This example shows a dropdown with a list of key value pairs. the data list must always have an id and a text.
		</div>
		<DropdownKvpExample />
	</CodeContainer>

		<!-- checkbox KVP Example -->

		<CodeContainer title={'CheckboxKVP Example'} svelte={CheckboxKVPExampleRaw}>
			<div slot="info">
				This example shows a dropdown with a list of key value pairs. the data list must always have an id and a text.
			</div>
			<CheckboxKVPExample />
		</CodeContainer>

	<!-- Validation Example -->

	<CodeContainer title={'Validation'} svelte={InputValidationRaw} javascript={InputValidationJsRaw}>
		<div slot="info">
			In this example, a small form is shown. <br />
			Validation rules are set on the input fields and the selected input field is validated again after
			each input. The defined rules are stored in a separate javascript file for a better overview.<br
			/>
		</div>
		<div slot="external" class="px-5">
			<h3>For the validation rules we use the npm <b>Vest</b> library</h3>
			<ul>
				<li>
					<a href="https://vestjs.dev/docs/get_started" target="_blank"> vestjs </a>
				</li>
				<li>
					<a href="https://vestjs.dev/docs/enforce/enforce_rules" target="_blank">
						List of Enforce rules</a
					>
				</li>
			</ul>
		</div>
		<InputValidation />
	</CodeContainer>


</div>
