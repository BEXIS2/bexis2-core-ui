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
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { SlideToggle, storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import TableFilter from './TableFilter.svelte';
	import TablePagination from './TablePagination.svelte';
	import { columnFilter, searchFilter } from './filter';
	import type { TableConfig } from '$lib/models/Models';

	export let config: TableConfig<any>;

	let {
		id: tableId,
		data,
		columns,
		height = null,
		optionsComponent,
		defaultPageSize = 10,
		toggle = false,
		pageSizes = [5, 10, 15, 20],
		fitToScreen = true
	} = config;

	type AccessorType = keyof (typeof $data)[number];

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

	const accessors: AccessorType[] =
		$data.length > 0 ? (Object.keys($data[0]) as AccessorType[]) : [];

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
					const {
						header,
						colFilterFn,
						colFilterComponent,
						instructions,
						disableFiltering = false,
						disableSorting = false
					} = columns[key];

					const { toSortableValueFn, toFilterableValueFn, toStringFn, renderComponent } =
						instructions ?? {};

					return table.column({
						header: header ?? key,
						accessor: accessor,
						cell: ({ value, row }) => {
							return renderComponent
								? createRender(renderComponent, { value, row })
								: toStringFn
								? toStringFn(value)
								: value;
						},
						plugins: {
							sort: {
								disable: disableSorting,
								invert: true,
								getSortValue: (row) => {
									return toSortableValueFn ? toSortableValueFn(row) : row;
								}
							},
							colFilter: !disableFiltering
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
												values,
												toFilterableValueFn
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
				id: 'actionsColumn',
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

<div class="grid gap-2 overflow-auto" class:w-fit={!fitToScreen} class:w-full={fitToScreen}>
	<div class="table-container">
		{#if $data.length > 0}
			<input
				class="input p-2 mb-2 border border-primary-500"
				type="text"
				bind:value={$filterValue}
				placeholder="Search rows..."
				id="{tableId}-search"
			/>
		{/if}

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

		<div class="overflow-auto" style="height: {height}px">
			<table
				{...$tableAttrs}
				class="table table-compact bg-tertiary-200 overflow-clip"
				id="{tableId}-table"
			>
				<thead class={height != null ? `sticky top-0` : ''}>
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
										<th scope="col" class="!p-2 w-min" {...attrs}>
											<div class="flex w-full justify-between items-center">
												<div class="flex gap-1 whitespace-pre-wrap">
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
															▾
														{:else if props.sort.order === 'desc'}
															▴
														{/if}
													</div>
												</div>
												{#if cell.isData()}
													{#if props.colFilter?.render}
														<div class="">
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
					{:else}
						<p class="items-center justify-center flex w-full p-10 italic">Nothing to show here.</p>
					{/each}
				</thead>

				<tbody class="overflow-auto" {...$tableBodyAttrs}>
					{#each $pageRows as row (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
							<tr {...rowAttrs} id="{tableId}-row-{row.id}">
								{#each row.cells as cell (cell?.id)}
									<Subscribe attrs={cell.attrs()} let:attrs>
										<td {...attrs} class="!p-2 w-max focus:resize" id="{tableId}-{cell.id}-{row.id}">
											<div
												class="flex items-center h-max overflow-x-auto resize-none hover:resize"
												class:max-w-md={!fitToScreen}
											>
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
	</div>
	{#if $data.length > 0}
		<TablePagination pageConfig={pluginStates.page} {pageSizes} id={tableId} />
	{/if}
</div>
