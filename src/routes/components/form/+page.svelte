<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';
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
	import { Metadatastructures } from './examples/exampleData';
	import DropdownKVPExampleRaw from './examples/DropdownKVPExample.svelte?raw';
	import DropdownKvpExample from './examples/MultiSelectKVPExample.svelte';

	// example 5 - checkboxlist
	import CheckboxKVPExample from './examples/CheckboxKVPExample.svelte';
	import CheckboxKVPExampleRaw from './examples/CheckboxKVPExample.svelte?raw';

	// example 6 - multiselect
	import MultiSelectExample from './examples/MultiSelectExample.svelte';
	import MultiSelectExampleRaw from './examples/MultiSelectExample.svelte?raw';

	// example 6 - multiselect kvp
	import MultiSelectKVPExample from './examples/MultiSelectKVPExample.svelte';
	import MultiSelectKVPExampleRaw from './examples/MultiSelectKVPExample.svelte?raw';
	import { Datastructures } from './examples/exampleData';
	import { v } from './examples/properties';
</script>

<div id="toc-target" class="p-5 grid gap-5">
	<h2>Inputs</h2>

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

	<h2>Selections</h2>

	<!-- Dropdown KVP Example -->

	<CodeContainer
		title={'Dropdown with KeyValuePair'}
		svelte={DropdownKVPExampleRaw}
		data={JSON.stringify(Metadatastructures, undefined, 2)}
	>
		<div slot="info">
			This example shows a dropdown with a list of key value pairs. the data list must always have
			an id and a text.
		</div>
		<DropdownKvpExample />
	</CodeContainer>

	<!-- checkbox KVP Example -->

	<CodeContainer title={'Checkbox with KeyValuePair'} svelte={CheckboxKVPExampleRaw}>
		<div slot="info">
			This example shows a dropdown with a list of key value pairs. the data list must always have
			an id and a text.
		</div>
		<CheckboxKVPExample />
	</CodeContainer>

	<!-- Multiselect Examples -->

	<CodeContainer title={'Multiselect'} svelte={MultiSelectExampleRaw}>
		<div slot="info">
			This example shows a simple multi select. the <b>source</b> is a json array with simple
			content like strings.<br />
			Source needs the assignment of the data to be selected and target is the array containing the selected
			values.
		</div>
		<MultiSelectExample />
	</CodeContainer>

	<CodeContainer title={'Multiselect with KeyValuePair'} svelte={MultiSelectKVPExampleRaw}>
		<div slot="info">
			This example shows a multi select where the source is a list of complex objects. the <b
				>source</b
			>
			is a json array with complex content like key value pairs.<br />
			Source needs the assignment of the data to be selected and target is the array containing the selected
			values.<br />

			<div class="py-5">
				<b>Data example</b>
				<br />
				If the source is complex, it is necessary to set isComplex,itemId and the label.
				<ul class="list-disc p-5">
					<li>isComplex={true}</li>
					<li>itemId="key"</li>
					<li>label="value"</li>
				</ul>

				<b class="text-warning-500">currently the target is only the list of itemIds</b>
				<CodeBlock language="javascript" code={JSON.stringify(Datastructures, undefined, 2)} />
			</div>
		</div>
		<MultiSelectKVPExample />
	</CodeContainer>

	<!-- Validation Example -->

	<h2>Validation</h2>

	<CodeContainer title={'Example'} 
		svelte={InputValidationRaw} 
		javascript={InputValidationJsRaw}
		external={[
			{label:"vestjs",url:"https://vestjs.dev/docs/get_started"},
			{label:"List of Enforce rules",url:"https://vestjs.dev/docs/enforce/enforce_rules"}
			]}
			properties={v}>
		<div slot="info">
			In this example, a small form is shown. <br />
			Validation rules are set on the input fields and the selected input field is validated again after
			each input. The defined rules are stored in a separate javascript file for a better overview.<br
			/>
		</div>
		<InputValidation />
	</CodeContainer>
</div>
