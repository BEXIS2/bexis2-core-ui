<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';

	// example 1
	import InputExamples from './examples/InputExamples.svelte';
	import InputExamplesRaw from './examples/InputExamplesRaw.svelte?raw';

	// example 2
	import InputExampleWithType from './examples/InputExampleWithType.svelte';
	import InputExampleWithTypeRaw from './examples/InputExampleWithTypeRaw.svelte?raw';
	import InputRaw from './Input?raw';

	// example 3 - validation
	import InputValidation from './examples/InputValidation.svelte';
	import InputValidationRaw from './examples/InputValidation.svelte?raw';
	import InputValidationJsRaw from './examples/inputvalidation?raw';
</script>

<div id="toc-target" class="p-5 grid gap-5">
	<CodeContainer title={'Simple input types overview'} svelte={InputExamplesRaw}>
		<div slot="info">
			we start with an overview of the simple input types and the easiest set up.
		</div>
		<InputExamples />
	</CodeContainer>

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
