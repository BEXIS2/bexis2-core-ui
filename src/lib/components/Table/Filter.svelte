<script lang="ts">
	export let filterOption = 'isequal';
	export let filterValue = '';
	export let type = 'text';

	const options = {
		numeric: [
			{
				value: 'isequal',
				label: 'Is equal to'
			},
			{
				value: 'isgreaterorequal',
				label: 'Is greater than or equal to'
			},
			{
				value: 'isgreater',
				label: 'Is greater than'
			},
			{
				value: 'islessorequal',
				label: 'Is less than or equal to'
			},
			{
				value: 'isless',
				label: 'Is less than'
			},
			{
				value: 'isnotequal',
				label: 'Is not equal to'
			}
		],
		text: [
			{
				value: 'isequal',
				label: 'Is equal to'
			},
			{
				value: 'isnotequal',
				label: 'Is not equal to'
			},
			{
				value: 'starts',
				label: 'Starts with'
			},
			{
				value: 'contains',
				label: 'Contains'
			},
			{
				value: 'notcontains',
				label: 'Does not contain'
			},
			{
				value: 'ends',
				label: 'Ends with'
			}
		]
	};
</script>

<div class="grid w-max gap-2">
	<select class="select border border-primary-500 text-sm p-1" aria-label="Show rows with value that" bind:value={filterOption}>
		{#each options[type] as option (option)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
	<input type="text" class="input p-1 border border-primary-500" bind:value={filterValue} />
</div>
