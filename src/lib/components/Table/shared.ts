import type { FilterOptionsEnum } from '$models/Enums';
import type { Columns, Filter, ServerColumn } from '$models/Models';

// Function to determine minWidth for a column to simplify the logic in the HTML
export const minWidth = (id: string, columns: Columns | undefined) => {
	if (columns && id in columns) {
		return columns[id].minWidth ?? 0;
	}
	return 0;
};
// Function to determine fixedWidth for a column to simplify the logic in the HTML
export const fixedWidth = (id: string, columns: Columns | undefined) => {
	if (columns && id in columns) {
		return columns[id].fixedWidth ?? 0;
	}
	return 0;
};
// Function to create custom styles for the columns to simplify the logic in the HTML
export const cellStyle = (id: string, columns: Columns | undefined) => {
	const minW = minWidth(id, columns);
	const fixedW = fixedWidth(id, columns);
	const styles: string[] = [];

	// If minWidth is provided, add to styles
	minW && styles.push(`min-width: ${minW}px`);
	// If fixedWidth is provided, add to styles
	fixedW && styles.push(`width: ${fixedW}px`);
	// Create and return styles separated by ';'
	return styles.join(';');
};
// Function to normalize the filters for back-end
export const normalizeFilters = (filters: {
	[key: string]: { [key in FilterOptionsEnum]?: number | string | Date };
}) => {
	let filter: Filter[] = [];

	// Add filters to the request
	Object.keys(filters).forEach((key) => {
		Object.keys(filters[key])
			.filter((k) => filters[key][k] !== undefined)
			.forEach((k) => {
				filter.push({
					column: key,
					filterBy: k as FilterOptionsEnum,
					value: filters[key][k]
				});
			});
	});

	return filter;
};

export const exportAsCsv = (tableId: string, exportedData: string) => {
	// Creating a hidden anchor element to download the CSV file
	const anchor = document.createElement('a');
	anchor.style.display = 'none';
	anchor.href = `data:text/csv;charset=utf-8,${encodeURIComponent(exportedData)}`;
	anchor.download = `${tableId}.csv`;
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
};

// Resetting the resized columns and/or rows
export const resetResize = (
	headerRows: any,
	pageRows: any,
	tableId: string,
	columns: Columns | undefined,
	resizable: 'none' | 'rows' | 'columns' | 'both'
) => {
	// Run only if resizable is not none
	if (resizable === 'columns' || resizable === 'both') {
		headerRows.forEach((row) => {
			row.cells.forEach((cell) => {
				const minW = minWidth(cell.id, columns);
				const fixedW = fixedWidth(cell.id, columns);
				// If a fixedWidth is provided for a column, then reset the width to that value
				fixedW &&
					document
						.getElementById(`th-${tableId}-${cell.id}`)
						?.style.setProperty('width', `${fixedW}px`);
				// If a minWidth is provided for a column, then reset the width to that value
				minW &&
					document
						.getElementById(`th-${tableId}-${cell.id}`)
						?.style.setProperty('width', `${minW}px`);
				// If neither minWidth nor fixedWidth provided for a column, then reset the width to auto
				!minW &&
					!fixedW &&
					document.getElementById(`th-${tableId}-${cell.id}`)?.style.setProperty('width', 'auto');
			});
		});
	}

	if (resizable === 'rows' || resizable === 'both') {
		pageRows.forEach((row) => {
			row.cells.forEach((cell) => {
				// Reset all row heights to auto
				document
					.getElementById(`${tableId}-${cell.id}-${row.id}`)
					?.style.setProperty('height', 'auto');
			});
		});
	}
};

export const missingValuesFn = (key: number, missingValues: { [key: string | number]: string }) => {
	return key in missingValues ? missingValues[key] : key.toString();
};

export const convertServerColumns = (columns: ServerColumn[]) => {
	const columnsConfig: Columns = {};

	columns.forEach((col) => {
		let instructions = {};

		// if (col.instructions?.displayPattern) {
		// 	instructions = {
		// 		toStringFn: (date: Date) =>
		// 			date.toLocaleString('en-US', col.instructions?.displayPattern || {}),
		// 		toSortableValueFn: (date: Date) => date.getTime(),
		// 		toFilterableValueFn: (date: Date) => date
		// 	};
		// }

		if (col.instructions?.missingValues) {
			instructions = {
				...instructions,
				toStringFn: (key) => missingValuesFn(key, col.instructions?.missingValues || {})
			};
		}

		columnsConfig[col.column] = {
			exclude: col.exclude,
			instructions
		};
	});

	return columnsConfig;
};
