import type { ColumnFilterFn } from 'svelte-headless-table/lib/plugins';
import type { TableFilterFn } from 'svelte-headless-table/lib/plugins/addTableFilter';

import { FilterOptionsEnum } from '$models/Enums';

const textFilter = (filterOption, filterValue, value) => {
	switch (filterOption) {
		case FilterOptionsEnum.e:
			return value.toLowerCase() === filterValue.toLowerCase();
		case FilterOptionsEnum.ne:
			return value.toLowerCase() !== filterValue.toLowerCase();
		case FilterOptionsEnum.sw:
			return value.toLowerCase().startsWith(filterValue.toLowerCase());
		case FilterOptionsEnum.ew:
			return value.toLowerCase().endsWith(filterValue.toLowerCase());
		case FilterOptionsEnum.c:
			return value.toLowerCase().includes(filterValue.toLowerCase());
		case FilterOptionsEnum.nc:
			return !value.toLowerCase().includes(filterValue.toLowerCase());
		default:
			return false;
	}
};

const numberFilter = (filterOption, filterValue, value) => {
	switch (filterOption) {
		case FilterOptionsEnum.e:
			return value === filterValue;
		case FilterOptionsEnum.ne:
			return value !== filterValue;
		case FilterOptionsEnum.gt:
			return value > filterValue;
		case FilterOptionsEnum.lt:
			return value < filterValue;
		case FilterOptionsEnum.gte:
			return value >= filterValue;
		case FilterOptionsEnum.lte:
			return value <= filterValue;
		default:
			return false;
	}
};

const dateFilter = (filterOption, filterValue, value) => {
	const filter = new Date(filterValue);

	switch (filterOption) {
		case FilterOptionsEnum.o:
			return value.getTime() === filter.getTime();
		case FilterOptionsEnum.sf:
			return value.getTime() >= filter.getTime();
		case FilterOptionsEnum.a:
			return value.getTime() > filter.getTime();
		case FilterOptionsEnum.u:
			return value.getTime() <= filter.getTime();
		case FilterOptionsEnum.b:
			return value.getTime() < filter.getTime();
		case FilterOptionsEnum.no:
			return value.getTime() !== filter.getTime();
		default:
			return false;
	}
};

const applyFilter = (filterValue, value, filterFn) => {
	let result: boolean = true;

	const filters = Object.keys(filterValue).map((key) => ({
		option: key,
		value: filterValue[key]
	}));

	filters.forEach((filter) => {
		result = result && (filter.value ? filterFn(filter.option, filter.value, value) : true);
	});

	return result;
};

export const columnFilter: ColumnFilterFn = ({ filterValue, value }) => {
	if (typeof value === 'object' && value instanceof Date) {
		return applyFilter(filterValue, value, dateFilter);
	} else if (typeof value === 'number') {
		return applyFilter(filterValue, value, numberFilter);
	} else if (typeof value === 'string') {
		return applyFilter(filterValue, value, textFilter);
	}

	return false;
};

export const searchFilter: TableFilterFn = ({ filterValue, value }) => {
	if (value.toLowerCase().includes(filterValue.toLowerCase())) {
		return true;
	}
	return false;
};
