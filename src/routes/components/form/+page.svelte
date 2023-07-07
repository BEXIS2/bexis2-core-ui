<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	const c = "import { NameOfUIComp, NameOfUIComp2 } from 'bexis2/bexis2-core-ui' ";
	const t = "import type { NameOfType, NameOfType2 } from 'bexis2/bexis2-core-ui' ";
	let y;
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
	import DropdownKvpExample from './examples/DropdownKVPExample.svelte';
	import DropdownKVPExampleRaw from './examples/DropdownKVPExample.svelte?raw';

	// example 5 - checkboxlist
	import CheckboxKVPExample from './examples/CheckboxKVPExample.svelte';
	import CheckboxKVPExampleRaw from './examples/CheckboxKVPExample.svelte?raw';

	// exmaple - Multiselect single
	import MultiSelectSingleSelectExample from './examples/MultiSelectSingleSelectExample.svelte';
	import MultiSelectSingleSelectExampleRaw from './examples/MultiSelectSingleSelectExample.svelte?raw';

	// example 6 - multiselect
	import MultiSelectExample from './examples/MultiSelectExample.svelte';
	import MultiSelectExampleRaw from './examples/MultiSelectExample.svelte?raw';

	// example 7 - multiselect keyValuePairType
	import MultiSelectKVPExample from './examples/MultiSelectKVPExample.svelte';
	import MultiSelectKVPExampleRaw from './examples/MultiSelectKVPExample.svelte?raw';
	import { Datastructures, Countries, CountrieNames } from './examples/exampleData';
	import { MultiSelectProperties, MultiSelectEvents } from './examples/properties';

	// example 8 - toggle
	import ToggleExample from './examples/ToggleExample.svelte';
	import ToggleExampleRaw from './examples/ToggleExample.svelte?raw';

	// example 9 - radiobutton group
	import RadioGroupExample from './examples/RadioGroupExample.svelte';
	import RadioGroupExampleRaw from './examples/RadioGroupExample.svelte?raw';

	// page components
	import BackToTop from '$lib/components/page/BackToTop.svelte';
	import Page from '$lib/components/page/Page.svelte';
</script>

<div id="toc-target">
	<Page
		title="Form components"
		note="This page lists all the form components and shows how to develop a validation."
		menu={false}
	>
		<div class="p-5 bg-warning-500 text-white gap-5 grid">
			<p>
				Attention all bexis2 ui components are referenced internally in the examples. You would have
				to adjust the import for your use.
			</p>

			<CodeBlock language="javascript" code={c} />
			<CodeBlock language="typescript" code={t} />
		</div>

		<h2 class="h2">Inputs</h2>

		<!-- Simple inputType Examples -->

		<CodeContainer title={'Simple input types overview'} svelte={InputExamplesRaw}>
			<div slot="info">
				we start with an overview of the simple input types and the easiest set up.
			</div>
			<InputExamples />
		</CodeContainer>

		<!-- inputType with Type Example -->

		<CodeContainer
			title={'inputType with Typescript'}
			svelte={InputExampleWithTypeRaw}
			typescript={InputRaw}
		>
			<div slot="info">
				In this example, the different input fields are shown. All fields use the same typescript
				type input
			</div>
			<InputExampleWithType />
		</CodeContainer>

		<h2 class="h2">Selections</h2>

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

		<!-- Toggle Examples -->

		<CodeContainer
			title={'Toggle'}
			svelte={ToggleExampleRaw}
			external={[
				{ label: 'skeleton ui - toggle', url: 'https://www.skeleton.dev/components/slide-toggles' }
			]}
		>
			<div slot="info">This example shows a slide toggle from skeleton ui</div>
			<ToggleExample />
		</CodeContainer>

		<!-- Radiogroup Examples -->

		<CodeContainer
			title={'Radiogroup'}
			svelte={RadioGroupExampleRaw}
			external={[
				{
					label: 'skeleton ui - radio groups',
					url: 'https://www.skeleton.dev/components/radio-groups'
				}
			]}
		>
			<div slot="info">This example shows a radiogroup from skeleton ui</div>
			<RadioGroupExample />
		</CodeContainer>

		<!-- Multiselect Examples -->

		<CodeContainer
			title={'Multiselect'}
			svelte={MultiSelectExampleRaw}
			data={JSON.stringify(CountrieNames, undefined, 2)}
		>
			<div slot="info">
				This example shows a simple multi select. the <b>source</b> is a json array with simple
				content like strings.<br />
				Source needs the assignment of the data to be selected and target is the array containing the
				selected values.
			</div>
			<MultiSelectExample />
		</CodeContainer>

		<CodeContainer
			title={'Multiselect return simple value'}
			svelte={MultiSelectSingleSelectExampleRaw}
			data={JSON.stringify(CountrieNames, undefined, 2)}
		>
			<div slot="info">
				This example shows a simple multi select. the <b>source</b> is a json array with simple
				content like strings.<br />
				Source needs the assignment of the data to be selected and target is the array containing the
				selected values. The target is a simple value.
			</div>
			<MultiSelectSingleSelectExample />
		</CodeContainer>

		<CodeContainer
			title={'Multiselect with KeyValuePair'}
			svelte={MultiSelectKVPExampleRaw}
			data={JSON.stringify(Countries, undefined, 2)}
			properties={MultiSelectProperties}
			events={MultiSelectEvents}
		>
			<div slot="info">
				This example shows a multi select where the source is a list of complex objects. the <b
					>source</b
				>
				is a json array with complex content like key value pairs.<br />
				Source needs the assignment of the data to be selected and target is the array containing the
				selected values.<br />

				<div class="py-5">
					<b>Data example</b>
					<br />
					If the source is complex, it is necessary to set isComplex,itemId and the label.
					<ul class="list-disc p-5">
						<li>isComplex={true}</li>
						<li>itemId="key"</li>
						<li>itemLabel="value"</li>
					</ul>

					<b class="text-warning-500">currently the target is only the list of itemIds</b>
					<CodeBlock language="javascript" code={JSON.stringify(Datastructures, undefined, 2)} />
				</div>
			</div>
			<MultiSelectKVPExample />
		</CodeContainer>

		<!-- Validation Example -->

		<h2 class="h2">Validation</h2>

		<CodeContainer
			title={'Example'}
			svelte={InputValidationRaw}
			javascript={InputValidationJsRaw}
			external={[
				{ label: 'vestjs', url: 'https://vestjs.dev/docs/get_started' },
				{ label: 'List of Enforce rules', url: 'https://vestjs.dev/docs/enforce/enforce_rules' }
			]}
		>
			<div slot="info">
				In this example, a small form is shown. <br />
				Validation rules are set on the input fields and the selected input field is validated again
				after each input. The defined rules are stored in a separate javascript file for a better overview.<br
				/>
			</div>
			<InputValidation />
		</CodeContainer>
		<BackToTop />
	</Page>
</div>
<svelte:window bind:scrollY={y} />
