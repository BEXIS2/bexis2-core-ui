export const MultiSelectProperties = [
	{
		name: 'id',
		description: 'Set up a unique identifier'
	},
	{
		name: 'title',
		description: 'Label of the Selection Component on Top'
	},
	{
		name: 'placeholder',
		description: 'Set up a info text, when nothing is selected'
	},
	{
		name: 'source',
		description: 'Data provided for selection'
	},
	{
		name: 'target',
		description: 'Selected elements'
	},
	{
		name: 'itemId',
		description: 'For complex object a unique identifier is needed'
	},
	{
		name: 'itemLabel',
		description: 'Display value from the complex object'
	},
	{
		name: 'itemGroup',
		description: 'Set the value to true, when the outgoing data so the target complex is'
	},
	{
		name: 'complexSource',
		description: 'Set the value to true, when the incoming data so the source complex is'
	},
	{
		name: 'complexTarget',
		description: 'Set the value to true, when the outgoing data so the target complex is'
	}
];

export const MultiSelectEvents = [
	{
		name: 'change',
		description: 'fires when the user selects an option'
	},
	{
		name: 'input',
		description: 'fires when the value has been changed'
	},
	{
		name: 'focus',
		description: 'fires when select > input on:focus'
	},
	{
		name: 'blur',
		description: 'fires when select > input on:blur'
	},
	{
		name: 'clear',
		description: 'fires when clear is invoked or item is removed (by user) from multi select'
	},
	{
		name: 'loaded',
		description: 'fires when loadOptions resolves'
	},
	{
		name: 'error',
		description: 'fires when error is caught'
	},
	{
		name: 'filter',
		description: 'fires when listOpen: true and items are filtered'
	},
	{
		name: 'hoverItem',
		description: 'fires when hoverItemIndex changes'
	},
	{
		name: 'loading',
		description: 'actived/deactivate spinner inside the selection field'
	},
	{
		name: 'isValid',
		description: 'add flag to mark selection with errors'
	}
];
