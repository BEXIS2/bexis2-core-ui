<script>
	import InputContainer from './InputContainer.svelte';

	import Select from 'svelte-select';
	import { onMount } from 'svelte';

	export let source;
	export let target;
	export let id;
	export let title;
	export let itemId = 'value';
	export let itemLabel = 'label';
	export let itemGroup = 'group';
	export let isMulti = true;
	export let complexSource = false;
	export let complexTarget = false;
	export let required = false;
	export let feedback = [''];
	export let placeholder = '-- Please select --';
	export let invalid = false;
	export let loading = false;
	export let help = false;
	export let clearable = true;

	let isLoaded = false;

	$: value = null;
	$: updateTarget(value);
	$: target, setValue(target);

	let groupBy;
	$: groupBy;

	function updateTarget(selection) {
		//console.log("UPDATE target",selection);
		//different cases
		//a) source is complex model is simple return array
		if (complexSource && !complexTarget && isLoaded && isMulti) {
			//console.log('a) source is complex model is simple');

			target = [];
			for (let i in selection) {
				let item = selection[i];
				target.push(item[itemId]);
			}
		}

		if (!complexSource && !complexTarget && isLoaded && isMulti) {
			target = [];

			for (let i in selection) {
				target.push(selection[i].value);
			}
		}

		if (complexSource && complexTarget && isLoaded && isMulti) {
			//console.log("both complex",selection);
			target = selection;
		}

		if (complexSource && complexTarget && isLoaded && !isMulti) {
			target = selection;
		}

		if (!complexSource && !complexTarget && isLoaded && !isMulti) {
			target = selection.value;
		}

		if (complexSource && !complexTarget && isLoaded && !isMulti) {
			target = selection[itemLabel];
			//console.log('selection', selection);
		}

		//console.log('selection ' + title, selection);
		//console.log('target ' + title, target);
	}

	onMount(async () => {
		 //console.log("OnMount", target)
			if(complexSource && complexTarget) // after on mount a setValue is needed when data is complex
			{
					setValue(target);
			}
	});

	function setValue(t) {
		//console.log("Set Value",t);
		//a) source is complex model is simple
		if (complexSource && !complexTarget && isMulti) {
			let items = [];
			// event.detail will be null unless isMulti is true and user has removed a single item
			for (let i in t) {
				let t = target[i];
				items.push(source.find((item) => item[itemId] === t));
			}

			isLoaded = true;
			if (items.length > 0) {
				value = items;
			}
			////console.log(value);
			groupBy = (item) => item[itemGroup];
		}

		if (complexSource && complexTarget && isMulti) {
			value = t;
			isLoaded = true;
			groupBy = (item) => item[itemGroup];
		}

		//b) simple liust and simple model
		if (!complexSource && !complexTarget && isMulti) {
			//console.log('b) simple liust and simple model');
			//console.log('source', source);
			//console.log("target",t);
			isLoaded = true;
			//set target only if its nit empty
			if (t != null && t !== undefined && t != '') {
				//console.log('target', t);
				value = t;
			}
		}

		if (!isMulti) {
			//console.log("onmount",complexSource,complexTarget,value,target)
			if (!complexSource && !complexTarget) {
				value = {
					value: t,
					label: t
				};
			}

			if (complexSource && complexTarget) {
				value = t;
				groupBy = (item) => item[itemGroup];
			}

			if (complexSource && !complexTarget) {
				//value = target
				console.log(
					'this case is currently not supported (complexSource,complexTarget,isMulti)',
					complexSource,
					complexTarget,
					isMulti
				);
			}

			isLoaded = true;
		}

		//console.log(t,value)
	}
</script>

<InputContainer {id} label={title} {feedback} {required} {help}>
	<Select
		{id}
		items={source}
		{groupBy}
		{itemId}
		label={itemLabel}
		multiple={isMulti}
		bind:value
		{placeholder}
		hasError={invalid}
		{loading}
		{clearable}
		on:change
		on:input
		on:focus
		on:blur
		on:clear
		on:loaded
		on:error
		on:filter
		on:hoverItem
	/>
</InputContainer>
