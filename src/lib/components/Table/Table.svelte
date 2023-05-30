<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addExpandedRows,
		addColumnFilters,
		addTableFilter
	} from 'svelte-headless-table/plugins';

	import TableFilter from './TableFilter.svelte';
	import TablePagination from './TablePagination.svelte';
	import { columnFilter, searchFilter } from './filter';
	import type { TableConfig } from '$lib/models/Models';

	export let config: TableConfig<any>;
	let {
		id: tableId,
		data,
		columns,
		optionsComponent,
		defaultPageSize = 10,
		pageSizes = [5, 10, 15, 20]
	} = config;

	type AccessorType = keyof (typeof $data)[0];

	const dispatch = createEventDispatcher();
	const actionDispatcher = (obj) => dispatch('action', obj);

	const table = createTable(data, {
		colFilter: addColumnFilters(),
		tableFilter: addTableFilter({
			fn: searchFilter
		}),
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination({ initialPageSize: defaultPageSize }),
		expand: addExpandedRows()
	});

	const accessors: AccessorType[] = Object.keys($data[0]) as AccessorType[];

	const tableColumns = [
		...accessors
			.filter((accessor) => {
				const key = accessor as string;
				if (columns !== undefined && key in columns && columns[key].exclude === true) {
					return false;
				}
				return true;
			})
			.map((accessor) => {
				const key = accessor as string;
				if (columns !== undefined && key in columns) {
					const { header, colFilterFn, colFilterComponent, instructions } = columns[key];

					const {
						toSortableValueFn,
						filterable = true,
						sortable = true,
						toFilterableValueFn,
						toStringFn
					} = instructions ?? {};

					return table.column({
						header: header ?? key,
						accessor: accessor,
						cell: ({ value }) => {
							return toStringFn ? toStringFn(value) : value;
						},
						plugins: {
							sort: {
								disable: sortable !== true ?? false,
								invert: true,
								getSortValue: (row) => {
									return sortable && toSortableValueFn ? toSortableValueFn(row) : row;
								}
							},
							colFilter: filterable
								? {
										fn: ({ filterValue, value }) => {
											const val = toFilterableValueFn ? toFilterableValueFn(value) : value;

											return colFilterFn
												? colFilterFn({ filterValue, value: val })
												: columnFilter({ filterValue, value: val });
										},
										render: ({ filterValue, values, id }) => {
											return createRender(colFilterComponent ?? TableFilter, {
												filterValue,
												id,
												tableId,
												values
											});
										}
								  }
								: undefined,
							tableFilter: {
								getFilterValue: (row) => {
									return toStringFn ? toStringFn(row) : row;
								}
							}
						}
					});
				} else {
					return table.column({
						header: key,
						accessor: accessor,
						plugins: {
							sort: {
								invert: true
							},
							colFilter: {
								fn: columnFilter,
								render: ({ filterValue, values, id }) =>
									createRender(TableFilter, {
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

	if (optionsComponent !== undefined) {
		tableColumns.push(
			table.display({
				id: 'options',
				header: '',
				cell: ({ row }, _) => {
					return createRender(optionsComponent!, {
						row: row.isData() ? row.original : null,
						dispatchFn: actionDispatcher
					});
				}
			}) as any
		);
	}

	const createdTableColumns = table.createColumns(tableColumns);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(createdTableColumns);
	const { filterValue } = pluginStates.tableFilter;
</script>

<div class="grid gap-2">
	<div class="table-container">
		<input
			class="input p-2 mb-2 border border-primary-500"
			type="text"
			bind:value={$filterValue}
			placeholder="Search rows..."
		/>
		<table {...$tableAttrs} class="table table-compact bg-tertiary-200">
			<thead>
				{#each $headerRows as headerRow (headerRow.id)}
					<Subscribe
						rowAttrs={headerRow.attrs()}
						let:rowAttrs
						rowProps={headerRow.props()}
						let:rowProps
					>
						<tr {...rowAttrs} class="bg-primary-300">
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} props={cell.props()} let:props let:attrs>
									<th scope="col" class="!p-2" {...attrs}>
										<div class="flex w-full justify-between items-center">
											<div class="flex gap-1">
												<span
													class:underline={props.sort.order}
													class:normal-case={cell.id !== cell.label}
													on:click={props.sort.toggle}
													on:keydown={props.sort.toggle}
												>
													{cell.render()}
												</span>
												<div class="w-2">
													{#if props.sort.order === 'asc'}
														▾
													{:else if props.sort.order === 'desc'}
														▴
													{/if}
												</div>
											</div>
											{#if cell.isData()}
												{#if props.colFilter?.render}
													<div>
														<Render of={props.colFilter.render} />
													</div>
												{/if}
											{/if}
										</div>
									</th>
								</Subscribe>
							{/each}
						</tr>
					</Subscribe>
				{/each}
			</thead>

			<tbody class="" {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<tr {...rowAttrs}>
							{#each row.cells as cell (cell?.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<td {...attrs} class="!p-2">
										<div class="flex items-center w-full h-full table-cell-fit">
											<Render of={cell.render()} />
										</div>
									</td>
								</Subscribe>
							{/each}
						</tr>
					</Subscribe>
				{/each}
			</tbody>
		</table>
	</div>

	<TablePagination pageConfig={pluginStates.page} {pageSizes} />
</div>
