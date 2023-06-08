import type { ColumnFilterFn } from 'svelte-headless-table/lib/plugins';
import type { TableFilterFn } from 'svelte-headless-table/lib/plugins/addTableFilter';

const textFilter = (filterOption, filterValue, value) => {
	switch (filterOption) {
		case 'isequal':
			return value.toLowerCase() === filterValue.toLowerCase();
		case 'isnotequal':
			return value.toLowerCase() !== filterValue.toLowerCase();
		case 'starts':
			return value.toLowerCase().startsWith(filterValue.toLowerCase());
		case 'ends':
			return value.toLowerCase().endsWith(filterValue.toLowerCase());
		case 'contains':
			return value.toLowerCase().includes(filterValue.toLowerCase());
		case 'notcontains':
			return !value.toLowerCase().includes(filterValue.toLowerCase());
		default:
			return false;
	}
};

const numberFilter = (filterOption, filterValue, value) => {
	switch (filterOption) {
		case 'isequal':
			return value === filterValue;
		case 'isnotequal':
			return value !== filterValue;
		case 'isgreater':
			return value > filterValue;
		case 'isless':
			return value < filterValue;
		case 'isgreaterorequal':
			return value >= filterValue;
		case 'islessorequal':
			return value <= filterValue;
		default:
			return false;
	}
};

const dateFilter = (filterOption, filterValue, value) => {
	const filter = new Date(filterValue);

	switch (filterOption) {
		case 'ison':
			return value === filter;
		case 'isstartingfrom':
			return value >= filter;
		case 'isafter':
			return value > filter;
		case 'isuntil':
			return value <= filter;
		case 'isbefore':
			return value < filter;
		case 'isnoton':
			return value !== filter;
		default:
			return false;
	}
};

const numericFilter: ColumnFilterFn = ({ filterValue, value }) => {
	const [firstFilterOption, firstFilterValue, secondFilterOption, secondFilterValue] = filterValue;
	if (firstFilterValue == null && secondFilterValue == null) {
		return true;
	} else if (
		(firstFilterOption == null || firstFilterValue == null) &&
		secondFilterOption != null &&
		secondFilterValue != null
	) {
		return numberFilter(secondFilterOption, secondFilterValue, value);
	} else if (
		(secondFilterOption == null || secondFilterValue == null) &&
		firstFilterOption != null &&
		firstFilterValue != null
	) {
		return numberFilter(firstFilterOption, firstFilterValue, value);
	}
	return (
		numberFilter(firstFilterOption, firstFilterValue, value) &&
		numberFilter(secondFilterOption, secondFilterValue, value)
	);
};

const stringFilter: ColumnFilterFn = ({ filterValue, value }) => {
	const [firstFilterOption, firstFilterValue, secondFilterOption, secondFilterValue] = filterValue;
	if (!firstFilterValue?.length && !secondFilterValue?.length) {
		return true;
	} else if (
		(!firstFilterOption || !firstFilterValue) &&
		secondFilterOption &&
		secondFilterValue?.length
	) {
		return textFilter(secondFilterOption, secondFilterValue, value);
	} else if (
		(!secondFilterOption || !secondFilterValue?.length) &&
		firstFilterOption &&
		firstFilterValue?.length
	) {
		return textFilter(firstFilterOption, firstFilterValue, value);
	}
	return (
		textFilter(firstFilterOption, firstFilterValue, value) &&
		textFilter(secondFilterOption, secondFilterValue, value)
	);
};

const dateTypeFilter: ColumnFilterFn = ({ filterValue, value }) => {
	const [firstFilterOption, firstFilterValue, secondFilterOption, secondFilterValue] = filterValue;
	if (!firstFilterValue && !secondFilterValue) {
		return true;
	} else if ((!firstFilterOption || !firstFilterValue) && secondFilterOption && secondFilterValue) {
		return dateFilter(secondFilterOption, secondFilterValue, value);
	} else if ((!secondFilterOption || !secondFilterValue) && firstFilterOption && firstFilterValue) {
		return dateFilter(firstFilterOption, firstFilterValue, value);
	}

	return (
		dateFilter(firstFilterOption, firstFilterValue, value) &&
		dateFilter(secondFilterOption, secondFilterValue, value)
	);
};

export const columnFilter: ColumnFilterFn = ({ filterValue, value }) => {
	if (typeof value === 'string') {
		return stringFilter({ filterValue, value });
	} else if (typeof value === 'number') {
		return numericFilter({ filterValue, value });
	} else if (typeof value === 'object' && value instanceof Date) {
		return dateTypeFilter({ filterValue, value });
	}
	return false;
};

export const searchFilter: TableFilterFn = ({ filterValue, value }) => {
	if (value.toLowerCase().includes(filterValue.toLowerCase())) {
		return true;
	}
	return false;
};
