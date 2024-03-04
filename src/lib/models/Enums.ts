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
	'e' = 'e', // Equal to
	'ne' = 'ne', // Not equal to
	'gt' = 'gt', // Greater than
	'lt' = 'lt', // Less than
	'gte' = 'gte', // Greater than or equal to
	'lte' = 'lte', // Less than or equal to

	'c' = 'c', // Contains
	'nc' = 'nc', // Does not contain
	'sw' = 'sw', // Starts with
	'ew' = 'ew', // Ends with,

	'o' = 'o', // On (date)
	'sf' = 'sf', // Starting from (date)
	'a' = 'a', // After (date)
	'u' = 'u', // Until (date)
	'b' = 'b', // Before (date)
	'no' = 'no' // Not on (date)
}
