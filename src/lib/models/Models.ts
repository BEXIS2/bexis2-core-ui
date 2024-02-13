import type { SvelteComponent } from 'svelte';
import type { ColumnFilterFn } from 'svelte-headless-table/lib/plugins';
import type { Writable } from 'svelte/store';

import type {
	FilterByEnum,
	decimalCharacterType,
	notificationType,
	orientationType,
	textMarkerType,
	textSeperatorType
} from './Enums';

// page
export interface linkType {
	label: string;
	url: string;
}

// Form
export interface inputType {
	id: string;
	label: string;
	feedback: string[];
	invalid: boolean;
	valid: boolean;
	required: boolean;
	placeholder: string;
}

export interface fileInfoType {
	name: string;
	type: string;
	length: number;
	description: string;
	validationHash: string;
}

export interface fileUploaderType {
	accept: string[];
	existingFiles: fileInfoType[];
	descriptionType: number;
	multiple: boolean;
	maxSize: number;
}

export interface asciiFileReaderInfoType extends fileReaderInfoType {
	cells: boolean[];
	seperator: textSeperatorType;
	textMarker: textMarkerType;
}

export interface fileReaderInfoType {
	decimal: decimalCharacterType;
	orientation: orientationType;
	offset: number;
	variables: number;
	data: number;
	unit: number;
	description: number;
	dateformat: string;
}

export interface filesType {
	accepted: Blob[];
	rejected: Blob[];
}

export type userType = {
	name: string;
};

export interface fileObjType {
	path: string;
	lastModified: number;
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	webkitRelativePath: string;
}

export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}

// Table column type
export interface Column {
	header?: string; // key by default
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
	minWidth?: number; // auto by default
	fixedWidth?: number; // auto by default
}

export interface Columns {
	[key: string]: Column;
}

// Table config type
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	resizable?: 'rows' | 'columns' | 'both'; // none by default
	toggle?: boolean; // false by default
	fitToScreen?: boolean; // true by default
	height?: null | number; // null by default
	rowHeight?: number; // auto by default
	columns?: Columns;
	exportable?: boolean; // false by default
	pageSizes?: number[]; // [5, 10, 15, 20] by default
	defaultPageSize?: number; // 10 by default
	optionsComponent?: typeof SvelteComponent;
	serverSide?: boolean; // false by default
	URL?: string; // Base URL for server-side table
}

// lists
export interface keyValuePairType {
	id: number;
	text: string;
}

export interface listItemType {
	id: number;
	text: string;
	group: string;
	description: string;
}

//help
export interface helpItemType {
	id?: string;
	name: string;
	description: string;
	link?: string;
}

export interface helpStoreType {
	itemId?: string;
	helpItems: helpItemType[];
}

// notifications (toasts)
export interface notificationItemType {
	notificationType?: notificationType;
	message: string;
}

export interface notificationStoreType {
	notificationType: notificationType;
	message: string;
	btnStyle: string;
}

export type Filter = {
	filterBy: FilterByEnum;
	filterValue: string;
};

export type OrderBy = {
	orderBy: string;
	direction: 'asc' | 'desc';
};

// Table column type for server-side table
export type ServerColumn = {
	header?: string; // key by default
	exclude?: boolean; // false by default
	instructions?: {
		missingValues?: { [key: string | number]: string };
		displayPattern?: string;
	};
};

export class Send {
	limit: number;
	offset: number;
	filter: Filter[];
	orderBy: OrderBy[];

	constructor() {
		this.limit = 10;
		this.offset = 0;
		this.filter = [];
		this.orderBy = [];
	}
}

export class Receive {
	count: number;
	data: any[];
	columns: ServerColumn[];
	sendModel: Send;

	constructor() {
		this.count = 0;
		this.data = [];
		this.columns = [];
		this.sendModel = new Send();
	}
}
