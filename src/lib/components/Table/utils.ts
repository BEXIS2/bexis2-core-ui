import dateFormat from 'dateformat';
import type { Writable } from 'svelte/store';

import { Send, Receive } from '$models/Models';
import type { FilterOptionsEnum } from '$models/Enums';
import type { Columns, Filter, OrderBy, ServerColumn, ServerConfig } from '$models/Models';

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
// Styles for resizing the cells
export const getResizeStyles = (
	rowHeights: { [key: number]: { max: number; min: number } },
	id: string | number,
	index: number
) => {
	return `
	min-height: ${rowHeights && rowHeights[+id] ? `${rowHeights[+id].min}px` : 'auto'};
	max-height: ${index !== 0 && rowHeights && rowHeights[+id]
			? `${rowHeights[+id].max}px`
			: 'auto'
		};
	height: ${rowHeights && rowHeights[+id] ? `${rowHeights[+id].min}px` : 'auto'};
	`;
}
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
					column: key.replaceAll('%%%', '.'),
					filterBy: k as FilterOptionsEnum,
					value: filters[key][k]
				});
			});
	});

	return filter;
};
// Creates a CSV file and downloads it
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
// Function to convert JSON data to CSV format
export const jsonToCsv = (data: string): string => {
	const json = JSON.parse(data);

	if (json.length === 0) return '';

	// Extract headers (keys)
	const headers = Object.keys(json[0]);

	// Escape and format a single cell
	const escapeCsvCell = (value: any): string => {
		if (value === null || value === undefined) return '';
		let cell = String(value);
		// Escape quotes by doubling them, and wrap the value in quotes if it contains special characters
		if (/[",\n]/.test(cell)) {
			cell = `"${cell.replace(/"/g, '""')}"`;
		}
		return cell;
	};

	// Create CSV rows
	const rows = [
		headers.join(','), // Header row
		...json.map((row) =>
			headers.map(header => escapeCsvCell(row[header])).join(',')
		) // Data rows
	];

	// Join rows with newlines
	return rows.join('\n');
}
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
// Finds the mapping for missing values
export const missingValuesFn = (
	key: number | string,
	missingValues: { [key: string | number]: string }
) => {
	const foundKey =
		typeof key === 'number' && key.toString().includes('e')
			? Object.keys(missingValues).find((item) => {
				return (item as string).toLowerCase() === key.toString().toLowerCase();
			})
			: typeof key === 'string' && parseInt(key).toString().length !== key.length && new Date(key)
				? Object.keys(missingValues).find(
					(item) => new Date(item).getTime() === new Date(key).getTime()
				)
				: key in missingValues
					? key
					: undefined;

	return foundKey ? missingValues[foundKey] : key;
};
// Function to update the server-side table data
export const updateTable = async (
	pageSize: number,
	pageIndex: number,
	server: ServerConfig | undefined,
	filters: {
		[key: string]: { [key in FilterOptionsEnum]?: number | string | Date }
	},
	data: Writable<any[]>,
	serverItems: Writable<number> | undefined,
	columns: Columns | undefined,
	dispatch: any,
	order: OrderBy[] = [],
) => {
	const { baseUrl, entityId, versionId, sendModel = new Send() } = server ?? {};

	if (!sendModel) throw new Error('Server-side configuration is missing');

	sendModel.limit = pageSize;
	sendModel.offset = pageSize * pageIndex;
	sendModel.version = versionId || -1;
	sendModel.id = entityId || -1;
	sendModel.filter = normalizeFilters(filters);
	sendModel.order = order;

	// remove %%% from the columns object
	if (sendModel.order) {
		sendModel.order.forEach((order) => {
			if (order.column.includes("%%%")) {
				const newKey = order.column.replaceAll('%%%', '.');
				order.column = newKey;
			}
		});
	}

	let fetchData;

	try {
		fetchData = await fetch(baseUrl || '', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(sendModel)
		});
	} catch (error) {
		throw new Error(`Network error: ${(error as Error).message}`);
	}

	if (!fetchData.ok) {
		throw new Error('Failed to fetch data');
	}

	const response: Receive = await fetchData.json();

	// Format server columns to the client columns
	if (response.columns !== undefined) {
		console.log('Server columns', response.columns);
		columns = convertServerColumns(response.columns, columns);

		const clientCols = response.columns.reduce((acc, col) => {
			console.log(col.key, col.column);
			// replace the . with empty string
			//const key = col.key.replaceAll('.' ,'');
			///console.log(key, col.column);
			// set the key to the columns object
			col.column = col.column.replaceAll('.', "%%%");
			col.key = col.key.replaceAll('.', "%%%");
			acc[col.key] = col.column
			//acc[col.column] = col.column;

			return acc;
		}, {});

		const tmpArr: any[] = [];
		// tmp[clientCols["['" + key.replaceAll('.', ",") +"']"]] = row[key];
		response.data.forEach((row, index) => {
			const tmp: { [key: string]: any } = {};
			Object.keys(row).forEach((key) => {
				tmp[clientCols[key.replaceAll('.', "%%%") ]] = row[key]
			});
			tmpArr.push(tmp);
		});
		dispatch('fetch', columns);
		data.set(tmpArr);
		console.log('Server data', tmpArr);
		return data;
	}

	serverItems?.set(response.count);
	console.log('Server data updated');


	// log the columns object
	console.log(response);
	return response;
};
// Function to convert server data to client data
export const convertServerColumns = (
	serverColumns: ServerColumn[],
	columns: Columns | undefined
) => {
	const columnsConfig: Columns = {};

	serverColumns.forEach((col) => {
		let instructions = {};

		if (col.instructions?.displayPattern) {
			let dp = col.instructions.displayPattern;

			// Swap 'm' and 'M' to match the backend date format
			for (let i = 0; i < col.instructions.displayPattern.length; i++) {
				if (col.instructions.displayPattern[i] === 'm') {
					dp = `${dp.slice(0, i)}M${dp.slice(i + 1)}`;
				} else if (col.instructions.displayPattern[i] === 'M') {
					dp = `${dp.slice(0, i)}m${dp.slice(i + 1)}`;
				}
			}

			instructions = {
				toStringFn: (date: string) => {
					if (col.instructions?.missingValues) {
						const missingValue = missingValuesFn(date, col.instructions?.missingValues || {});
						if (missingValue === date) {
							return dateFormat(new Date(date), dp);
						}
						return missingValue;
					} else {
						return dateFormat(new Date(date), dp);
					}
				},
				toSortableValueFn: (date: string) => new Date(date).getTime(),
				toFilterableValueFn: (date: string) => new Date(date)
			};
		} else if (col.instructions?.missingValues) {
			instructions = {
				...instructions,
				toStringFn: (key) => missingValuesFn(key, col.instructions?.missingValues || {})
			};
		}

		if (columns && col.column in columns) {
			columnsConfig[col.column.replaceAll('.', "%%%")] = {
				...columns[col.column.replaceAll('.', "%%%")],
				instructions
			};
		} else {
			columnsConfig[col.column.replaceAll('.', "%%%") ] = {
				instructions
			};
		}
	});
	console.log('Columns config', columnsConfig);
	return columnsConfig;
};
// Calculates the maximum height of the cells in each row
export const getMaxCellHeightInRow = (
	tableRef: HTMLTableElement,
	resizable: 'columns' | 'rows' | 'none' | 'both',
	// optionsComponent is only used as a boolean flag; avoid depending on SvelteComponent type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	optionsComponent: any,
	rowHeights: Writable<{ [key: number]: { max: number; min: number } }>,
	tableId: string,
	rowHeight: number | null
) => {
	if (!tableRef || resizable === 'columns' || resizable === 'none') return;

	tableRef.querySelectorAll('tbody tr').forEach((row, index) => {
		const cells = row.querySelectorAll('td');

		let maxHeight = optionsComponent ? 56 : 44;
		let minHeight = optionsComponent ? 56 : 44;

		cells.forEach((cell) => {
			const cellHeight = cell.getBoundingClientRect().height;
			// + 2 pixels for rendering borders correctly
			if (cellHeight > maxHeight) {
				maxHeight = cellHeight + 2;
			}
			if (cellHeight < minHeight) {
				minHeight = cellHeight + 2;
			}
		});

		rowHeights.update((rh) => {
			const id = +row.id.split(`${tableId}-row-`)[1];
			return {
				...rh,
				[id]: {
					max: maxHeight - 24,
					min: Math.max(minHeight - 24, rowHeight ?? 20)
				}
			};
		});
	});
};
// Calculates the minimum width of the cells in each column
export const getMinCellWidthInColumn = (
	tableRef: HTMLTableElement,
	colWidths: Writable<number[]>,
	headerRowsLength: number,
	resizable: 'columns' | 'rows' | 'none' | 'both'
) => {
	if (!tableRef || resizable === 'rows' || resizable === 'none') return;

	// Initialize the column widths if they are not already initialized
	colWidths.update((cw) => {
		if (cw.length === 0) {
			return Array.from({ length: headerRowsLength }, () => 100);
		}
		return cw;
	});

	colWidths.update((cw) => {
		tableRef?.querySelectorAll('thead tr th span').forEach((cell, index) => {
			// + 12 pixels for padding and + 32 pixels for filter icon
			// If the column width is 100, which means it has not been initialized, then calculate the width
			cw[index] = cw[index] === 100 ? cell.getBoundingClientRect().width + 12 + 32 : cw[index];
		});
		return cw;
	});
};