const filter = (filter, column, items) => {
	if (!filter.value.length) return items;

	switch (filter.option) {
		case 'isequal':
			return items.filter((item) => item[column] == filter.value);
		case 'isnotequal':
			return items.filter((item) => item[column] != filter.value);
		case 'isgreater':
			return items.filter((item) => item[column] > filter.value);
		case 'isless':
			return items.filter((item) => item[column] < filter.value);
		case 'isgreaterorequal':
			return items.filter((item) => item[column] >= filter.value);
		case 'islessorequal':
			return items.filter((item) => item[column] <= filter.value);
		case 'starts':
			return items.filter((item) => item.name.startsWith(filter.value));
		case 'ends':
			return items.filter((item) => item[column].endsWith(filter.value));
		case 'contains':
			return items.filter((item) => item[column].includes(filter.value));
		case 'notcontains':
			return items.filter((item) => !item[column].includes(filter.value));
		default:
			return items;
	}
};

export default filter;
