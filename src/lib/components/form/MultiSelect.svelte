<script>
	import InputContainer from './InputContainer.svelte';

	import Select from 'svelte-select';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

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
	export let disabled = false;

	let isLoaded = false;

	$: value = null;
	$: updateTarget(value);
	$: target, setValue(target);

	let groupBy;
	$: groupBy;

	const dispatch = createEventDispatcher();

	function updateTarget(selection) {
		//console.log('updateTarget', target, selection, isMulti);
		if (selection == undefined) {
			//console.log('no update');

			return;
		}

		

		//console.log('update');
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
			//console.log('🚀 ~ updateTarget ~ selection:', selection);
			if (selection) {
				target = selection.value;
			}
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
		if (complexSource && complexTarget) {
			// after on mount a setValue is needed when data is complex
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

	function filterItemStartFn(label, filterText, option) {
		// console.log(label, filterText, option);
		let itemFilter = label.toLowerCase().startsWith(filterText.toLowerCase());

		return itemFilter;
	}

	function filterItemExactFn(label, filterText, option) {
		// console.log(label, filterText, option);
		let itemFilter = label.toLowerCase() == filterText.toLowerCase();

		return itemFilter;
	}

	function filterItemIncludesFn(label, filterText, option) {
		// console.log(label, filterText, option);
		let itemFilter = label.toLowerCase().includes(filterText.toLowerCase());

		return itemFilter;
	}

	function filterFn({
		loadOptions,
		filterText,
		items,
		multiple,
		value,
		itemId,
		groupBy,
		filterSelectedItems,
		itemFilter,
		convertStringItemsToObjects,
		filterGroupedItems,
		label
	}) {
		if (items && loadOptions) return items;
		if (!items) return [];

		if (items && items.length > 0 && typeof items[0] !== 'object') {
			items = convertStringItemsToObjects(items);
		}

		let filterResults = filterListFn(
			items,
			label,
			filterText,
			multiple,
			value,
			filterSelectedItems,
			itemId
		);

		if (groupBy) {
			filterResults = filterGroupedItems(filterResults, label, filterText);
		}

		return filterResults;
	}

	// filter checks 3 types, exact, starts, includes
	function filterListFn(items, label, filterText, multiple, value, filterSelectedItems, itemId) {
		if (!items) return [];

		let exact = items.filter((item) => {
			let matchesFilter = filterItemExactFn(item[label], filterText, item);
			if (matchesFilter && multiple && value?.length) {
				matchesFilter = !value.some((x) => {
					return filterSelectedItems ? x[itemId] === item[itemId] : false;
				});
			}

			return matchesFilter;
		});

		let starts = items.filter((item) => {
			let matchesFilter = filterItemStartFn(item[label], filterText, item);
			if (matchesFilter && multiple && value?.length) {
				matchesFilter = !value.some((x) => {
					return filterSelectedItems ? x[itemId] === item[itemId] : false;
				});
			}

			return matchesFilter;
		});

		let includes = items.filter((item) => {
			let matchesFilter = filterItemIncludesFn(item[label], filterText, item);
			if (matchesFilter && multiple && value?.length) {
				matchesFilter = !value.some((x) => {
					return filterSelectedItems ? x[itemId] === item[itemId] : false;
				});
			}

			return matchesFilter;
		});

		let result = [...exact, ...starts, ...includes];
		return [...new Set(result)];
	}

	function clearFn(e) {
		console.log('clear', target, e);
		if (isMulti) {
			target = [];
		} else {
			target = '';
		}

		dispatch('clear', e)

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
		{disabled}
		filter={filterFn}
		on:change
		on:input
		on:focus
		on:blur
		on:loaded
		on:filter
		on:error
		on:hoverItem
		on:clear={clearFn}
	/>
</InputContainer>
