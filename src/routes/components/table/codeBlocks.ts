export const tableImportCode = `
import { Table } from 'bexis2-core-ui;`;

export const groupTypeCode = `
type Group = {
	id: number;
	name: string;
	description: string
};`;

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

export const usersTableConfigCode = `
const usersConfig: TableConfig<User> = {
	id: 'users',
	data: usersStore
};`;

export const usersNoIDTableConfigCode = `
const usersNoIDConfig: TableConfig<User> = {
	id: 'usersNoID',
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
