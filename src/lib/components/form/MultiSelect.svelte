<script>
	import InputContainer from './InputContainer.svelte';

	import Select from 'svelte-select';
	import { onMount } from 'svelte';

	export let source;
	export let target;
	export let title;
	export let itemId = 'value';
	export let itemLabel = 'label';
	export let isMulti = true;
	export let complexSource = false;
	export let complexTarget = false;
	export let required = false;
	export let feedback = [];

	let isLoaded = false;

	$: value = null;
	$: updateTarget(value);

	let container;

	function updateTarget(selection) {
		//diffrent cases
		//console.log('------');
		//console.log('isComplex',complexSource);
		//console.log('complexTarget',complexTarget);
		//console.log('selection',selection);

		//a) source is complex model is simple
		if (complexSource && !complexTarget && isLoaded) {
			//console.log('a) source is complex model is simple');

			target = [];
			for (let i in selection) {
				let item = selection[i];
				target.push(item[itemId]);
			}
		}

		if (!complexSource && !complexTarget && isLoaded) {
			target = [];
			for (let i in selection) {
				target.push(selection[i].value);
			}
		}

		if (complexSource && complexTarget && isLoaded)
		{
			 //console.log("both complex",selection);
			 target = selection;
			
		}

		// //console.log('selection ' + title, selection);
		// //console.log('target ' + title, target);
	}

	onMount(async () => {
		////console.log("on mount multiselect");
		////console.log(source);

		//a) source is complex model is simple
		if (complexSource && !complexTarget) {
			let items = [];
			// event.detail will be null unless isMulti is true and user has removed a single item
			for (let i in target) {
				let t = target[i];
				items.push(source.find((item) => item[itemId] === t));
			}

			isLoaded = true;
			if (items.length > 0) {
				value = items;
			}
			////console.log(value);
		}

		if (complexSource && complexTarget)
		{
				value = target
				isLoaded = true;
		}

		//b) simple liust and simple model
		if (!complexSource && !complexTarget) {
			////console.log("source", source);
			////console.log("target",target);
			isLoaded = true;
			//set target only if its nit empty
			if (target != null && target !== undefined && target != '') {
				value = target;
			}
		}
	});
</script>


<InputContainer label={title} {feedback} {required}>
	<Select
	 id={title}
		items={source}
		{itemId}
		label = {itemLabel}
		multiple={isMulti}
		bind:value
		placeholder="-- Please select --"
	/>
</InputContainer>

<span class="svelte-select-list"/>

<style>
 .svelte-select-list{color:green}
</style>
