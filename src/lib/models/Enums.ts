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
export enum FilterByEnum {
	'ie', // Is equal to
	'ne', // Is not equal to
	'gt', // Greater than
	'lt', // Less than
	'gte', // Greater than or equal to
	'lte', // Less than or equal to
	'c', // Contains
	'nc', // Does not contain
	'sw', // Starts with
	'ew' // Ends with
}