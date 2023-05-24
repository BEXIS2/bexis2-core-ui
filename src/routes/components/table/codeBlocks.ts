export const tableImportCode = `
import { Table } from 'bexis2-core-ui;`;

export const groupTypeCode = `
type Group = {
	id: number;
	name: string;
	description: string
};`;

export const groupHTML = `<Table config={groupConfig} />`;
export const groupStoreCode = `				
const userGroups: Group[] = [{					
	id: 1, name: 'Group 1', description: 'Testing 1',					
	id: 2, name: 'Group 2', description: 'Testing 2',					
	id: 3, name: 'Group 3', description: 'Testing 3',					
}, ...];					
				
const groupsStore = writable<Group[]>(userGroups);`;
export const groupsTableConfigCode = `			
const groupConfig: TableConfig<Group> = {						
	id: 'userGroups',						
	data: groupsStore,						
	columns: {							
		id: {								
			header: 'ID',						
		}						
	}					
};`;

export const userTypeCode = `
type User = { 
	id: number; 
	name: string; 
	group: string; 
	role: string 
};`;
export const usersHTML = `<Table config={usersConfig} />`;
export const usersStoreCode = `				
const users: User[] = [
	{
		id: 1,
		name: 'User 1',
		group: 'Group 1',
		role: 'Role 1'
	},
	{
		id: 2,
		name: 'User 2',
		group: 'Group 2',
		role: 'Role 2'
	},
	{
		id: 3,
		name: 'User 3',
		group: 'Group 3',
		role: 'Role 3'
	},
	...
];				
				
const usersStore = writable<User[]>(users);`;
export const usersTableConfigCode = `
const usersConfig: TableConfig<User> = {
	id: 'users',
	data: usersStore
};`;

export const usersNoRolesHTML = `<Table config={usersNoRolesConfig} />`;
export const usersNoRolesTableConfigCode = `
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
};`;

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
