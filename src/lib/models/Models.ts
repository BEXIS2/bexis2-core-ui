import type { SvelteComponent } from 'svelte';
import type { ColumnFilterFn } from 'svelte-headless-table/lib/plugins';
import type { Writable } from 'svelte/store';

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

export interface fileUploaderModel {
	accept: string[];
	existingFiles: fileInfoType[];
	descriptionType: number;
	multiple: boolean;
	maxSize: number;
	lastModification: Date;
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
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
	renderComponent?: typeof SvelteComponent;
}

// Table column type
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}

export interface Columns {
	[key: string]: Column;
}

// Table config type
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
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
