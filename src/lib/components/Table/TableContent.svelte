<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { readable, writable } from 'svelte/store';

	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addExpandedRows,
		addColumnFilters,
		addTableFilter,
		addDataExport,
		addHiddenColumns
	} from 'svelte-headless-table/plugins';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { SlideToggle, storePopup } from '@skeletonlabs/skeleton';
	import type { PaginationConfig } from 'svelte-headless-table/lib/plugins/addPagination';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import Spinner from '../page/Spinner.svelte';
	import TableFilter from './TableFilter.svelte';
	import TableFilterServer from './TableFilterServer.svelte';
	import TablePagination from './TablePagination.svelte';
	import TablePaginationServer from './TablePaginationServer.svelte';
	import ColumnsMenu from './ColumnsMenu.svelte';
	import { columnFilter, searchFilter } from './filter';
	import {
		cellStyle,
		exportAsCsv,
		jsonToCsv,
		fixedWidth,
		normalizeFilters,
		resetResize,
		convertServerColumns,
		minWidth
	} from './shared';
	import { Receive, Send } from '$models/Models';
	import type { TableConfig } from '$models/Models';
	import type { FilterOptionsEnum } from '$models/Enums';

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
		search = true, // Whether to display the search input
		pageSizes = [5, 10, 20, 50, 100], // Page sizes to display in the pagination component
		fitToScreen = true, // Whether to fit the table to the screen,
		exportable = false, // Whether to display the export button and enable export functionality
		server
	} = config;

	let searchValue = '';
	let isFetching = false;
	let tableRef: HTMLTableElement;

	const serverSide = server !== undefined;
	const { baseUrl, entityId, versionId, sendModel = new Send() } = server ?? {};

	const filters = writable<{
		[key: string]: { [key in FilterOptionsEnum]?: number | string | Date };
	}>({});

	// Creatign a type to access keys of the objects in the data store
	type AccessorType = keyof (typeof $data)[number];

	// Creating a dispatcher to dispatch actions to the parent component
	const dispatch = createEventDispatcher();
	const actionDispatcher = (obj) => dispatch('action', obj);

	// Stores to hold the width and height information for resizing
	const rowHeights = writable<
		{
			max: number;
			min: number;
		}[]
	>([]);
	const colWidths = writable<number[]>([]);

	// Server-side variables
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
		hideColumns: addHiddenColumns(),
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
		export: addDataExport({ format: 'json' })
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

	Object.keys(allCols).forEach((key) => {
		$filters = { ...$filters, [key]: {} };
	});

	// Creating an array of all the keys
	const accessors: AccessorType[] = Object.keys(allCols) as AccessorType[];

	// Filtering out the excluded columns
	const unexcludedColumns = accessors.filter((accessor) => {
		// Filtering only unexcluded columns
		const key = accessor as string;
		if (columns !== undefined && key in columns && columns[key].exclude === true) {
			return false;
		}
		return true;
	});

	// To control the visibility of columns in menu
	let shownColumns = unexcludedColumns.map((c) => {
		const key = c as string;
		const label = key.charAt(0).toUpperCase() + key.slice(1);
		return {
			id: c as string,
			label: columns && columns[key] && columns[key].header ? columns[key].header : label,
			visible: true
		};
	});

	// Configuring every table column with the provided options
	const tableColumns = [
		...unexcludedColumns.map((accessor) => {
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
					cell: ({ value, row, column }) => {
						return renderComponent
							? createRender(renderComponent, { value, row, column, dispatchFn: actionDispatcher })
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
									render: ({ filterValue, values, id }) => {
										filterValue.set($filters[key]);
										return serverSide
											? createRender(TableFilterServer, {
													id,
													tableId,
													values,
													updateTable,
													pageIndex,
													toFilterableValueFn,
													filters,
													toStringFn
											  })
											: createRender(colFilterComponent ?? TableFilter, {
													filterValue,
													id,
													tableId,
													values,
													toFilterableValueFn,
													filters,
													toStringFn,
													pageIndex
											  });
									}
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
							render: ({ filterValue, values, id }) => {
								return serverSide
									? createRender(TableFilterServer, {
											id,
											tableId,
											values,
											updateTable,
											pageIndex,
											filters
									  })
									: createRender(TableFilter, {
											filterValue,
											id,
											tableId,
											values,
											filters,
											pageIndex
									  });
							}
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
	// Column visibility configuration
	const { hiddenColumnIds } = pluginStates.hideColumns;

	const updateTable = async () => {
		if (!sendModel) throw new Error('Server-side configuration is missing');

		sendModel.limit = $pageSize;
		sendModel.offset = $pageSize * $pageIndex;
		sendModel.version = versionId || -1;
		sendModel.id = entityId || -1;
		sendModel.filter = normalizeFilters($filters);

		let fetchData;

		try {
			isFetching = true;
			fetchData = await fetch(baseUrl || '', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(sendModel)
			});
		} catch (error) {
			throw new Error(`Network error: ${(error as Error).message}`);
		} finally {
			isFetching = false;
		}

		if (!fetchData.ok) {
			throw new Error('Failed to fetch data');
		}

		const response: Receive = await fetchData.json();

		// Format server columns to the client columns
		if (response.columns !== undefined) {
			columns = convertServerColumns(response.columns, columns);

			const clientCols = response.columns.reduce((acc, col) => {
				acc[col.key] = col.column;
				return acc;
			}, {});

			const tmpArr: any[] = [];

			response.data.forEach((row, index) => {
				const tmp: { [key: string]: any } = {};
				Object.keys(row).forEach((key) => {
					tmp[clientCols[key]] = row[key];
				});
				tmpArr.push(tmp);
			});
			dispatch('fetch', columns);
			$data = tmpArr;
		}

		$serverItems = response.count;

		return response;
	};

	const sortServer = (order: 'asc' | 'desc' | undefined, id: string) => {
		if (!sendModel) throw new Error('Server-side configuration is missing');
		// Set parameter for sorting
		if (order === undefined) {
			sendModel.order = [];
		} else {
			sendModel.order = [{ column: id, direction: order }];
		}

		// Reset pagination
		$pageIndex = 0;

		updateTable();
	};

	const getMaxCellHeightInRow = () => {
		if (!tableRef || resizable === 'columns' || resizable === 'none') return;

		// Initialize the rowHeights array if it is empty
		if ($rowHeights.length === 0) {
			$rowHeights = Array.from({ length: $pageRows.length }, () => ({ max: 44, min: 20 }));
		}

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
				rh[index].max = maxHeight - 24;
				rh[index].min = Math.max(minHeight - 24, rowHeight ?? 20);
				return rh;
			});
		});
	};

	const getMinCellWidthInColumn = () => {
		if (!tableRef || resizable === 'rows' || resizable === 'none') return;

		// Initialize the colWidths array if it is empty
		if ($colWidths.length === 0) {
			$colWidths = Array.from({ length: $headerRows[0].cells.length }, () => 100);
		}

		colWidths.update((cw) => {
			tableRef.querySelectorAll('thead tr th span').forEach((cell, index) => {
				// + 12 pixels for padding and + 32 pixels for filter icon
				// If the column width is 100, which means it has not been initialized, then calculate the width
				cw[index] = cw[index] === 100 ? cell.getBoundingClientRect().width + 12 + 32 : cw[index];
			});
			return cw;
		});
	};

	const resizeObserver = new ResizeObserver(() => {
		getMaxCellHeightInRow();
		getMinCellWidthInColumn();
	});

	const observeFirstCells = () => {
		if (!tableRef) return;

		tableRef.querySelectorAll('tbody tr td:first-child').forEach((cell) => {
			resizeObserver.observe(cell);
		});
	};

	const observeHeaderColumns = () => {
		if (!tableRef) return;

		tableRef.querySelectorAll('thead tr th').forEach((cell) => {
			resizeObserver.observe(cell);
		});
	};

	const getDimensions = () => {
		if (resizable === 'none') return;
		else if (resizable === 'columns') {
			observeHeaderColumns();
		} else if (resizable === 'rows') {
			observeFirstCells();
		} else {
			observeHeaderColumns();
			observeFirstCells();
		}
	};

	$: sortKeys = pluginStates.sort.sortKeys;
	$: serverSide && updateTable();
	$: serverSide && sortServer($sortKeys[0]?.order, $sortKeys[0]?.id);
	$: $hiddenColumnIds = shownColumns.filter((col) => !col.visible).map((col) => col.id);
	$: tableRef && getDimensions();
	$: $headerRows.length > 0 && getMinCellWidthInColumn();
	$: $pageRows.length > 0 && getMaxCellHeightInRow();
</script>

<div class="grid gap-2 overflow-auto" class:w-fit={!fitToScreen} class:w-full={fitToScreen}>
	{#if $data.length > 0 || (columns && Object.keys(columns).length > 0)}
		<div class="table-container">
			<!-- Enable the search filter if table is not empty -->
			{#if search}
				<form
					class="flex gap-2"
					on:submit|preventDefault={() => {
						if (serverSide && !sendModel) {
							throw new Error('Server-side configuration is missing');
						} else {
							sendModel.q = searchValue;
						}

						$filterValue = searchValue;
					}}
				>
					<div class="relative w-full flex items-center">
						<input
							class="input p-2 border border-primary-500"
							type="text"
							bind:value={searchValue}
							placeholder="Search rows..."
							aria-label="Searchbox for searching rows"
							id="{tableId}-search"
						/><button
							type="reset"
							id="{tableId}-searchReset"
							class="absolute right-3 items-center"
							aria-label="Clear search"
							on:click|preventDefault={() => {
								if (serverSide && !sendModel) {
									throw new Error('Server-side configuration is missing');
								} else {
									sendModel.q = '';
								}

								searchValue = '';
								$filterValue = '';
							}}><Fa icon={faXmark} /></button
						>
					</div>
					<button
						type="submit"
						id="{tableId}-searchSubmit"
						class="btn variant-filled-primary"
						aria-label="Search"
						on:click|preventDefault={() => {
							if (serverSide && !sendModel) {
								throw new Error('Server-side configuration is missing');
							} else {
								sendModel.q = searchValue;
							}

							$filterValue = searchValue;
						}}>Search</button
					>
				</form>
			{/if}

			<div
				class="flex justify-between items-center w-full {search && 'py-2'} {!search &&
					(shownColumns.length > 0 || toggle || resizable !== 'none' || exportable) &&
					'pb-2'}"
			>
				<div>
					<!-- Enable the fitToScreen toggle if toggle === true -->
					{#if toggle}
						<SlideToggle
							name="slider-label"
							active="bg-primary-500"
							size="sm"
							checked={fitToScreen}
							id="{tableId}-toggle"
							title={fitToScreen ? 'Fit table data to screen' : `Don't fit table data to screen`}
							aria-label={fitToScreen
								? 'Fit table data to screen'
								: `Don't fit table data to screen`}
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
							aria-label="Reset sizing of columns and rows"
							on:click|preventDefault={() =>
								resetResize($headerRows, $pageRows, tableId, columns, resizable)}
							>Reset sizing</button
						>
					{/if}
					{#if exportable}
						<button
							type="button"
							class="btn btn-sm variant-filled-primary rounded-full order-last"
							aria-label="Export table data as CSV"
							on:click|preventDefault={() => exportAsCsv(tableId, jsonToCsv($exportedData))}
							>Export as CSV</button
						>
					{/if}
					{#if shownColumns.length > 0}
						<ColumnsMenu bind:columns={shownColumns} {tableId} />
					{/if}
				</div>
			</div>

			<div class="overflow-auto" style="height: {height}px">
				<table
					bind:this={tableRef}
					{...$tableAttrs}
					class="table table-auto table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10 overflow-clip"
					id="{tableId}-table"
				>
					<!-- If table height is provided, making the top row sticky -->
					<thead class={height != null && $pageRows.length > 0 ? `sticky top-0` : ''}>
						<!-- {#if $data.length > 0} -->
						{#each $headerRows as headerRow (headerRow.id)}
							<Subscribe
								rowAttrs={headerRow.attrs()}
								let:rowAttrs
								rowProps={headerRow.props()}
								let:rowProps
							>
								<tr {...rowAttrs} class="bg-primary-300 dark:bg-primary-800">
									{#each headerRow.cells as cell, index (cell.id)}
										<Subscribe attrs={cell.attrs()} props={cell.props()} let:props let:attrs>
											<th
												scope="col"
												class="!p-2"
												{...attrs}
												style={`
													width: ${cell.isData() ? 'auto' : '0'};
													${cellStyle(cell.id, columns)}
												`}
											>
												<div
													class="overflow-auto"
													class:resize-x={(resizable === 'columns' || resizable === 'both') &&
														!fixedWidth(cell.id, columns)}
													id="th-{tableId}-{cell.id}"
													style={`
														min-width: ${minWidth(cell.id, columns) ? minWidth(cell.id, columns) : $colWidths[index]}px;
													`}
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
																title={props.sort.order === 'asc'
																	? `Sort by ${cell.label} column in descending order`
																	: props.sort.order === 'desc'
																	? `Remove sorting by ${cell.label} column`
																	: `Sort by ${cell.label} column in ascending order`}
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
																<Render of={props.colFilter.render} />
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
					</thead>

					<tbody class="overflow-auto" {...$tableBodyAttrs}>
						{#each $pageRows as row (row.id)}
							<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
								<tr {...rowAttrs} id="{tableId}-row-{row.id}" class="">
									{#each row.cells as cell, index (cell?.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<td {...attrs} class="">
												<div
													class=" h-full {index === 0 &&
													(resizable === 'rows' || resizable === 'both')
														? 'resize-y overflow-auto'
														: ''}"
													id="{tableId}-{cell.id}-{row.id}"
													style={`
														min-height: ${$rowHeights && $rowHeights[row.id] ? `${$rowHeights[row.id].min}px` : 'auto'};
														max-height: ${
															index !== 0 && $rowHeights && $rowHeights[row.id]
																? `${$rowHeights[row.id].max}px`
																: 'auto'
														};
														height: ${$rowHeights && $rowHeights[+row.id] ? `${$rowHeights[+row.id].min}px` : 'auto'};
													`}
												>
													<!-- Adding config for initial rowHeight, if provided -->
													<div
														class="flex items-start overflow-auto"
														style={`
															max-height: ${$rowHeights && $rowHeights[row.id] ? `${$rowHeights[row.id].max}px` : 'auto'};
														`}
													>
														<div
															class="grow overflow-auto"
															style={cell.isData()
																? `width: ${
																		minWidth(cell.id, columns)
																			? minWidth(cell.id, columns)
																			: $colWidths[index]
																  }px;`
																: 'max-width: min-content;'}
														>
															<Render of={cell.render()} />
														</div>
													</div>
												</div>
											</td>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					</tbody>
				</table>
				{#if $pageRows.length === 0}
					<div
						class="p-8 flex items-center justify-center bg-tertiary-500/30 dark:bg-tertiary-900/10"
					>
						No rows available
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<div class="p-10 w-full h-full flex justify-center items-center bg-neutral-200 rounded">
			<p>No data available</p>
		</div>
	{/if}

	{#if isFetching}
		<div class="p-10 w-full h-full flex justify-center items-center"><Spinner /></div>
	{/if}

	<!-- Adding pagination, if table is not empty -->
	{#if $data.length > 0 || (columns && Object.keys(columns).length > 0)}
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

<div id="{tableId}-popups" />
