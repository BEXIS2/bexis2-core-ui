<script lang="ts">
	import { writable } from 'svelte/store';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addExpandedRows,
		addColumnFilters,
		addTableFilter
	} from 'svelte-headless-table/plugins';

	import filter, {searchFilter} from './filter';
	import TableFilter from './TableFilter.svelte';

	export let data;
	export let component;
	export let excluded: AccessorType[] = [];

	type AccessorType = keyof (typeof data)[0];

	const types = {
		id: 'numeric',
		name: 'text',
		description: 'text'
	};
	const filteredData = writable(data);

	const handleFiltering = (e) => {
		const { column, firstFilter, secondFilter } = e.detail;
		const firstFiltered = filter(firstFilter, column, data);
		const secondFiltered = filter(secondFilter, column, firstFiltered);
		filteredData.set(secondFiltered);
	};

	const table = createTable(filteredData, {
		colFilter: addColumnFilters(),
		tableFilter: addTableFilter({
            fn: searchFilter
        }),
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination({ initialPageSize: 10 }),
		expand: addExpandedRows()
	});

	const accessors: AccessorType[] = Object.keys(data[0]) as AccessorType[];

	const columns = table.createColumns([
		...accessors
			.filter((key) => !excluded.includes(key as string))
			.map((item) => {
				return table.column({
					header: item,
					accessor: item,
					plugins: {
						sort: { invert: true }
					}
				} as any);
			}),
		table.display({
			id: 'options',
			header: '',
			cell: ({ row }, _) => {
				return createRender(component, {
					row: row.isData() ? row.original : null
				});
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);
	const { pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage } = pluginStates.page;
	const { filterValue } = pluginStates.tableFilter;
</script>

<div class="grid gap-5">
	<div class="table-container">
		<input
			class="input p-2 mb-2 border border-primary-500"
			type="text"
			bind:value={$filterValue}
			placeholder="Search rows..."
		/>
		<table {...$tableAttrs} class="table table-hover bg-primary-50">
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
									<th scope="col" {...attrs} class="">
										<div class="flex w-full justify-between items-center">
											<div class="flex gap-1">
												<span
													class:underline={props.sort.order}
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
												<TableFilter
													column={cell.id}
													type={types[cell.id]}
													on:submit={handleFiltering}
												/>
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
									<td {...attrs}>
										<div class="flex items-center w-full h-full">
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

	<div class="flex justify-center gap-1">
		<button
			class="btn btn-sm variant-filled-primary"
			on:click={() => ($pageIndex = 0)}
			disabled={!$pageIndex}>{'<<'}</button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			on:click={() => $pageIndex--}
			disabled={!$hasPreviousPage}>{'<'}</button
		>

		<select
			name=""
			id=""
			class="select btn variant-filled-primary w-min px-2 font-bold"
			bind:value={$pageSize}
		>
			<option value={5}>5</option>
			<option value={10}>10</option>
			<option value={15}>15</option>
			<option value={20}>20</option>
		</select>

		<button
			class="btn btn-sm variant-filled-primary"
			on:click={() => $pageIndex++}
			disabled={!$hasNextPage}>{'>'}</button
		>
		<button
			class="btn btn-sm variant-filled-primary"
			on:click={() => ($pageIndex = $pageCount - 1)}
			disabled={$pageIndex == $pageCount - 1}>{'>>'}</button
		>
	</div>
</div>
