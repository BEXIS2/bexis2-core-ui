export const groupHTML = `
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
</script>

<Table config={groupConfig} />`;
export const groupStoreCode = `			
export type Group = {
	id: number;
	name: string;
	description: string
};

const userGroups: Group[] = [					
	{id: 1, name: 'Group 1', description: 'Testing 1'},					
	{id: 2, name: 'Group 2', description: 'Testing 2'},					
	{id: 3, name: 'Group 3', description: 'Testing 3'},					
	...
];					
				
const groupsStore = writable<Group[]>(userGroups);`;

export const usersHTML = `
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';
	
	import { usersStore } from './data';
	import type { User } from './data';

	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
</script>

<Table config={usersConfig} />`;
export const usersStoreCode = `
export type User = { 
	id: number; 
	name: string; 
	group: string; 
	role: string 
};

const users: User[] = [
	{id: 1, name: 'User 1', group: 'Group 1', role: 'Role 1'},
	{id: 2, name: 'User 2', group: 'Group 2', role: 'Role 2'},
	{id: 3, name: 'User 3', group: 'Group 3', role: 'Role 3'},
	...
];				
				
export const usersStore = writable<User[]>(users);`;
export const usersNoRolesHTML = `
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';

	import TableFilter from './TableFilter.svelte';
	import TableOptions from './TableOptions.svelte';
	import { columnFilter } from './filters';
	import { usersStore } from './data';
	import type { User } from './data';

	const usersNoRolesConfig: TableConfig<User> = {
		id: 'usersNoRoles',
		data: usersStore,
		optionsComponent: TableOptions,
		columns: {
			id: {
				colFilterFn: columnFilter,
				colFilterComponent: TableFilter
			},
			role: {
				exclude: true
			},
			group: {
				header: 'Group name'
			}
		},
		pageSizes: [1, 3, 5],
		defaultPageSize: 5
	};
</script>

<Table config={usersNoRolesConfig} />`;

export const tableOptionsHTML = `
<script lang="ts">
	export let row;
</script>

<button 
	class="btn btn-sm variant-filled-secondary" 
	on:click|preventDefault={() => alert(JSON.stringify(row))}
>
	See row info
</button>
`;

export const tableConfigTypeCode = `
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`;

export const columnsTypeCode = `
export interface Columns {
	[key: string]: Column;
}`;

export const columnTypeCode = `
export interface Column {
	header?: string;
	exclude?: boolean;
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`;
