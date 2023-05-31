import type { SvelteComponent } from 'svelte';
import type { ColumnFilterFn } from 'svelte-headless-table/lib/plugins';
import type { Writable } from 'svelte/store';

// page
export interface Link
{
	label:string,
	url:string
}

// Form
export interface Input {
	id: string;
	label: string;
	feedback: string[];
	invalid: boolean;
	valid: boolean;
	required: boolean;
}

export interface FileInfo {
	name: string;
	type: string;
	length: number;
	description: string;
	validationHash: string;
}

export interface FileUploaderModel {
	accept: string[];
	existingFiles: FileInfo[];
	descriptionType: number;
	multiple: boolean;
	maxSize: number;
	lastModification: Date;
}

export interface Files {
	accepted: Blob[];
	rejected: Blob[];
}

export type user = {
	name: string;
};

export interface FileObj {
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
