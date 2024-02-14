<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { readable, writable } from 'svelte/store';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addExpandedRows,
		addColumnFilters,
		addTableFilter,
		addDataExport
	} from 'svelte-headless-table/plugins';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { SlideToggle, storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import TableFilter from './TableFilter.svelte';
	import TableFilterServer from './TableFilterServer.svelte';
	import TablePagination from './TablePagination.svelte';
	import TablePaginationServer from './TablePaginationServer.svelte';
	import { columnFilter, searchFilter } from './filter';
	import { Receive, Send, type TableConfig } from '$lib/models/Models';
	import type { PaginationConfig } from 'svelte-headless-table/lib/plugins/addPagination';

	export let config: TableConfig<any>;

	// Destructuring the config object and setting default values
	let {
		id: tableId, // Unique table ID
		data, // Data store
		columns, // Column configuration
		resizable = 'none', // Resizability config
		height = null, // Table height
		rowHeight = null, // Row height
		optionsComponent, // Custom component to render in the last column
		defaultPageSize = 10, // Default page size - number of rows to display per page
		toggle = false, // Whether to display the fitToScreen toggle
		pageSizes = [5, 10, 15, 20], // Page sizes to display in the pagination component
		fitToScreen = true, // Whether to fit the table to the screen,
		exportable = false, // Whether to display the export button and enable export functionality
		serverSide = false, // Whether the table is client or server-side
		URL = '' // URL to fetch data from
	} = config;

	const request = new Send();

	// Creatign a type to access keys of the objects in the data store
	type AccessorType = keyof (typeof $data)[number];

	// Creating a dispatcher to dispatch actions to the parent component
	const dispatch = createEventDispatcher();
	const actionDispatcher = (obj) => dispatch('action', obj);

	const serverItems = serverSide ? writable<Number>(0) : undefined;
	const serverItemCount = serverSide
		? readable<Number>(0, (set) => {
				serverItems!.subscribe((val) => set(val));
		  })
		: undefined;

	// Initializing the table
	const table = createTable(data, {
		colFilter: addColumnFilters(),
		tableFilter: addTableFilter({
			fn: searchFilter,
			serverSide
		}),
		sort: addSortBy({
			disableMultiSort: true,
			serverSide
		}),
		page: addPagination({
			initialPageSize: defaultPageSize,
			serverSide,
			serverItemCount
		} as PaginationConfig),
		expand: addExpandedRows(),
		export: addDataExport({ format: 'csv' })
	});

	// A variable to hold all the keys
	const allCols: { [key: string]: any } = {};
	// Iterating over each item to get all the possible keys
	$data.forEach((item) => {
		Object.keys(item).forEach((key) => {
			if (!allCols[key]) {
				allCols[key] = {};
			}
		});
	});
	// Creating an array of all the keys
	const accessors: AccessorType[] = Object.keys(allCols) as AccessorType[];
	// Configuring every table column with the provided options
	const tableColumns = [
		...accessors
			.filter((accessor) => {
				// Filtering only unexcluded columns
				const key = accessor as string;
				if (columns !== undefined && key in columns && columns[key].exclude === true) {
					return false;
				}
				return true;
			})
			.map((accessor) => {
				const key = accessor as string;
				// Applying configuration options for configured columns
				if (columns !== undefined && key in columns) {
					const {
						header, // Custom header to display
						colFilterFn, // Custom column filter function
						colFilterComponent, // Custom column filter component
						instructions, // Custom instructions for the column cells (sorting, filtering, searching, rendering)
						disableFiltering = false, // Whether to disable filtering for the column
						disableSorting = false // Whether to disable sorting for the column
					} = columns[key];

					const { toSortableValueFn, toFilterableValueFn, toStringFn, renderComponent } =
						instructions ?? {};

					return table.column({
						// If header is not provided, use the key as the header
						header: header ?? key,
						accessor: accessor,
						// Render the cell with the provided component, or use the toStringFn if provided, or just use the value
						cell: ({ value, row }) => {
							return renderComponent
								? createRender(renderComponent, { value, row })
								: toStringFn
								? toStringFn(value)
								: value;
						},
						plugins: {
							// Sorting config
							sort: {
								disable: disableSorting,
								getSortValue: (row) => {
									// If provided, use the custom sorting function toSortableValueFn(), or just use the value
									return toSortableValueFn ? toSortableValueFn(row) : row;
								}
							},
							colFilter: !disableFiltering
								? {
										fn: ({ filterValue, value }) => {
											// If provided, use the custom filtering function toFilterableValueFn(), or just use the value
											const val = toFilterableValueFn ? toFilterableValueFn(value) : value;
											// If provided, use the custom filtering function colFilterFn(), or just use the default columnFilter()
											return colFilterFn
												? colFilterFn({ filterValue, value: val })
												: columnFilter({ filterValue, value: val });
										},
										render: ({ filterValue, values, id }) =>
											serverSide
												? createRender(TableFilterServer, {
														id,
														tableId,
														values,
														request,
														updateTable,
														pageIndex,
														toFilterableValueFn
												  })
												: createRender(colFilterComponent ?? TableFilter, {
														filterValue,
														id,
														tableId,
														values,
														toFilterableValueFn
												  })
								  }
								: undefined,
							tableFilter: {
								// Search filter config
								getFilterValue: (row) => {
									// If provided, use the custom toString function toStringFn(), or just use the value
									return toStringFn ? toStringFn(row) : row;
								}
							}
						}
					});
				} else {
					return table.column({
						header: key,
						accessor: accessor,
						cell: ({ value }) => {
							// If null or undefined, return an empty string
							return value ? value : '';
						},
						plugins: {
							// Sorting enabled by default
							sort: {},
							// Filtering enabled by default
							colFilter: {
								fn: columnFilter,
								render: ({ filterValue, values, id }) =>
									serverSide
										? createRender(TableFilterServer, {
												id,
												tableId,
												values,
												request,
												updateTable,
												pageIndex
										  })
										: createRender(TableFilter, {
												filterValue,
												id,
												tableId,
												values
										  })
							}
						}
					});
				}
			})
	];

	// If optionsComponent is provided, add a column for it at the end
	if (optionsComponent !== undefined) {
		tableColumns.push(
			table.display({
				id: 'optionsColumn',
				header: '',
				plugins: {
					export: {
						exclude: true
					}
				},
				cell: ({ row }, _) => {
					return createRender(optionsComponent!, {
						row: row.isData() ? row.original : null,
						dispatchFn: actionDispatcher
					});
				}
			}) as any
		);
	}

	// Creating the table columns
	const createdTableColumns = table.createColumns(tableColumns);
	// Creating the table view model
	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(createdTableColumns);
	// Extracting filterValue to bind it for the search input and search immediately on input
	const { filterValue } = pluginStates.tableFilter;
	// CSV content to be exported. If unexportable, then null
	const { exportedData } = pluginStates.export;
	// Page configuration
	const { pageIndex, pageSize } = pluginStates.page;

	// Function to determine minWidth for a column to simplify the logic in the HTML
	const minWidth = (id: string) => {
		if (columns && id in columns) {
			return columns[id].minWidth ?? 0;
		}
		return 0;
	};
	// Function to determine fixedWidth for a column to simplify the logic in the HTML
	const fixedWidth = (id: string) => {
		if (columns && id in columns) {
			return columns[id].fixedWidth ?? 0;
		}
		return 0;
	};
	// Function to create custom styles for the columns to simplify the logic in the HTML
	const cellStyle = (id: string) => {
		const minW = minWidth(id);
		const fixedW = fixedWidth(id);
		const styles: string[] = [];

		// If minWidth is provided, add to styles
		minW && styles.push(`min-width: ${minW}px`);
		// If fixedWidth is provided, add to styles
		fixedW && styles.push(`width: ${fixedW}px`);
		// Create and return styles separated by ';'
		return styles.join(';');
	};

	// Resetting the resized columns and/or rows
	const resetResize = () => {
		// Run only if resizable is not none
		if (resizable === 'columns' || resizable === 'both') {
			$headerRows.forEach((row) => {
				row.cells.forEach((cell) => {
					const minW = minWidth(cell.id);
					const fixedW = fixedWidth(cell.id);
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
			$pageRows.forEach((row) => {
				row.cells.forEach((cell) => {
					// Reset all row heights to auto
					document
						.getElementById(`${tableId}-${cell.id}-${row.id}`)
						?.style.setProperty('height', 'auto');
				});
			});
		}
	};

	const exportAsCsv = () => {
		// Creating a hidden anchor element to download the CSV file
		const anchor = document.createElement('a');
		anchor.style.display = 'none';
		anchor.href = `data:text/csv;charset=utf-8,${encodeURIComponent($exportedData)}`;
		anchor.download = `${tableId}.csv`;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	};

	const updateTable = async () => {
		request.limit = $pageSize;
		request.offset = $pageSize * $pageIndex;

		const fetchData = await fetch(URL, {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		});
		const response: Receive = await fetchData.json();

		// Update data store
		$data = response.data;
		$serverItems = response.count;

		return response;
	};

	const sortServer = (order: 'asc' | 'desc' | undefined, id: string) => {
		// Set parameter for sorting
		if (order === undefined) {
			request.orderBy = [];
		} else {
			request.orderBy = [{ column: id, direction: order}];
		}

		// Reset pagination
		$pageIndex = 0;

		updateTable();
	};

	$: sortKeys = pluginStates.sort.sortKeys;
	$: serverSide && updateTable();
	$: serverSide && sortServer($sortKeys[0]?.order, $sortKeys[0]?.id);
</script>

<div class="grid gap-2 overflow-auto" class:w-fit={!fitToScreen} class:w-full={fitToScreen}>
	<div class="table-container">
		<!-- Enable the search filter if table is not empty -->
		{#if $data.length > 0}
			<input
				class="input p-2 border border-primary-500"
				type="text"
				bind:value={$filterValue}
				placeholder="Search rows..."
				id="{tableId}-search"
			/>
			<div class="flex justify-between items-center py-2 w-full">
				<div>
					<!-- Enable the fitToScreen toggle if toggle === true -->
					{#if toggle}
						<SlideToggle
							name="slider-label"
							active="bg-primary-500"
							size="sm"
							checked={fitToScreen}
							id="{tableId}-toggle"
							on:change={() => (fitToScreen = !fitToScreen)}>Fit to screen</SlideToggle
						>
					{/if}
				</div>
				<div class="flex gap-2">
					<!-- Enable the resetResize button if resizable !== 'none' -->
					{#if resizable !== 'none'}
						<button
							type="button"
							class="btn btn-sm variant-filled-primary rounded-full order-last"
							on:click|preventDefault={resetResize}>Reset sizing</button
						>
					{/if}
					{#if exportable}
						<button
							type="button"
							class="btn btn-sm variant-filled-primary rounded-full order-last"
							on:click|preventDefault={exportAsCsv}>Export as CSV</button
						>
					{/if}
				</div>
			</div>
		{/if}

		<div class="overflow-auto" style="height: {height}px">
			<table
				{...$tableAttrs}
				class="table table-auto table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10 overflow-clip"
				id="{tableId}-table"
			>
				<!-- If table height is provided, making the top row sticky -->
				<thead class=" {height != null ? `sticky top-0` : ''}">
					{#if $data.length > 0}
						{#each $headerRows as headerRow (headerRow.id)}
							<Subscribe
								rowAttrs={headerRow.attrs()}
								let:rowAttrs
								rowProps={headerRow.props()}
								let:rowProps
							>
								<tr {...rowAttrs} class="bg-primary-300 dark:bg-primary-500">
									{#each headerRow.cells as cell (cell.id)}
										<Subscribe attrs={cell.attrs()} props={cell.props()} let:props let:attrs>
											<th scope="col" class="!p-2" {...attrs} style={cellStyle(cell.id)}>
												<div
													class="overflow-auto"
													class:resize-x={(resizable === 'columns' || resizable === 'both') &&
														!fixedWidth(cell.id)}
													id="th-{tableId}-{cell.id}"
												>
													<div class="flex justify-between items-center">
														<div class="flex gap-1 whitespace-pre-wrap">
															<!-- Adding sorting config and styling -->
															<span
																class:underline={props.sort.order}
																class:normal-case={cell.id !== cell.label}
																class:cursor-pointer={!props.sort.disabled}
																on:click={props.sort.toggle}
																on:keydown={props.sort.toggle}
															>
																{cell.render()}
															</span>
															<div class="w-2">
																{#if props.sort.order === 'asc'}
																	▴
																{:else if props.sort.order === 'desc'}
																	▾
																{/if}
															</div>
														</div>
														<!-- Adding column filter config -->
														{#if cell.isData()}
															{#if props.colFilter?.render}
																<div class="">
																	<Render of={props.colFilter.render} />
																</div>
															{/if}
														{/if}
													</div>
												</div>
											</th>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					{:else}
						<!-- Table is empty -->
						<p class="items-center justify-center flex w-full p-10 italic">Nothing to show here.</p>
					{/if}
				</thead>

				<tbody class="overflow-auto" {...$tableBodyAttrs}>
					{#if $data.length > 0}
						{#each $pageRows as row (row.id)}
							<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
								<tr {...rowAttrs} id="{tableId}-row-{row.id}" class="">
									{#each row.cells as cell, index (cell?.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<td {...attrs} class="!p-2">
												<div
													class=" overflow-auto h-max {index === 0 &&
													(resizable === 'rows' || resizable === 'both')
														? 'resize-y'
														: ''}"
													id="{tableId}-{cell.id}-{row.id}"
												>
													<!-- Adding config for initial rowHeight, if provided -->
													<div
														class="flex items-center overflow-auto"
														style="height: {rowHeight ? `${rowHeight}px` : 'auto'};"
													>
														<div class="grow h-full"><Render of={cell.render()} /></div>
													</div>
												</div>
											</td>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
	{#if $data.length > 0}
		<!-- Adding pagination, if table is not empty -->
		{#if serverSide}
			<TablePaginationServer
				{pageIndex}
				{pageSize}
				{serverItemCount}
				{updateTable}
				{pageSizes}
				id={tableId}
			/>
		{:else}
			<TablePagination pageConfig={pluginStates.page} {pageSizes} id={tableId} />
		{/if}
	{/if}
</div>
