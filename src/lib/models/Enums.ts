export enum positionType {
	start = 'start',
	end = 'end',
	center = 'center'
}

export enum pageContentLayoutType {
	full = 'full',
	center = 'center'
}

export enum decimalCharacterType {
	point,
	comma
}

export enum orientationType {
	columnwise,
	rowwise
}

export enum textSeperatorType {
	tab = 9,
	comma = 44,
	semicolon = 59,
	space = 32
}

export enum textMarkerType {
	quotes,
	doubleQuotes
}

//types for the notification styling
export enum notificationType {
	success,
	warning,
	error,
	surface
}

// Server-side table fitler types
export enum FilterOptionsEnum {
	'ie' = 'isequal', // Is equal to
	'ne' = 'notequal', // Is not equal to
	'gt' = 'greaterthan', // Greater than
	'lt' = 'lessthan', // Less than
	'gte' = 'greaterthanequal', // Greater than or equal to
	'lte' = 'lessthanequal', // Less than or equal to
	'c' = 'contains', // Contains
	'nc' = 'notcontains', // Does not contain
	'sw' = 'startswith', // Starts with
	'ew' = 'endswith', // Ends with,
	'o' = 'on', // On (date)
	'sf' = 'startingfrom', // Starting from (date)
	'a' = 'after', // After (date)
	'u' = 'until', // Until (date)
	'b' = 'before', // Before (date)
	'no' = 'noton' // Not on (date)
}
