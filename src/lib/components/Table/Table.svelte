<script lang="ts">
	import { writable } from 'svelte/store';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addExpandedRows,
		addColumnFilters,
		addTableFilter,
		textPrefixFilter
	} from 'svelte-headless-table/plugins';

	import filter from './filter';
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
		filter: addColumnFilters(),
		tableFilter: addTableFilter({
			includeHiddenColumns: true
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
</script>

<div class="table-container">
	<table {...$tableAttrs} class="table table-hover">
		<thead>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe
					rowAttrs={headerRow.attrs()}
					let:rowAttrs
					rowProps={headerRow.props()}
					let:rowProps
				>
					<tr {...rowAttrs}>
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

<div class="flex justify-center gap-1 mt-5">
	<button class="btn btn-sm variant-filled" on:click={() => ($pageIndex = 0)} disabled={!$pageIndex}
		>{'<<'}</button
	>
	<button
		class="btn btn-sm variant-filled"
		on:click={() => $pageIndex--}
		disabled={!$hasPreviousPage}>{'<'}</button
	>
	<!-- TODO: Add page size dropdown -->
	<button class="btn btn-sm variant-filled" on:click={() => $pageIndex++} disabled={!$hasNextPage}
		>{'>'}</button
	>
	<button
		class="btn btn-sm variant-filled"
		on:click={() => ($pageIndex = $pageCount - 1)}
		disabled={$pageIndex == $pageCount - 1}>{'>>'}</button
	>
</div>
