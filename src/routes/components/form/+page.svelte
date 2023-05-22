<script lang="ts">


	import TextInputExample from './TextInputExample.svelte';
	import TextInputExampleRaw from './TextInputExample.svelte?raw';

	import TextArea from '../../../lib/components/form/TextArea.svelte';
	import NumberInput from '../../../lib/components/form/NumberInput.svelte';
	import Date from '../../../lib/components/form/DateInput.svelte';

 import type {Input} from '../../../lib/models/Models'

	import CodeContainer from '../../../docs/components/CodeContainer.svelte';
	
	// interface input {
	// 		id:string,
	// 		label:string,
	// 		feedback:string[],
	// 		invalid: boolean,
	// 		valid: boolean,
	// 		required: boolean
	// }
	

	let textAreaData:Input = {
			id:"description",
			label:"Description",
			feedback:["error"],
			invalid: true,
			valid: false,
			required: false
	}

	let numberData:Input = {
			id:"number",
			label:"number",
			feedback:["error"],
			invalid: true,
			valid: false,
			required: false
	}

	let dateData:Input = {
			id:"dateInput",
			label:"dateInput",
			feedback:[],
			invalid: false,
			valid: true,
			required: false
	}


	</script>
	
	<div class="p-5 grid gap-5">

<CodeContainer title={"Test"} 
		svelte={TextInputExampleRaw}
		json={"testdata{ id:'1'}"}>
	<TextInputExample/>
</CodeContainer>
	

 <TextArea  {...textAreaData} />
 <NumberInput  {...numberData} />
 <Date  {...dateData} />

</div>
