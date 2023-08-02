import { writable } from 'svelte/store';

export const userGroups = [
	{
		id: 1,
		name: 'Group 1',
		description: 'Testing 1'
	},
	{
		id: 2,
		name: 'Group 2',
		description: 'Testing 2'
	},
	{
		id: 3,
		name: 'Group 3',
		description:
			'Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 '
	},
	{
		id: 4,
		name: 'Group 4',
		description: 'Testing 4'
	},
	{
		id: 5,
		name: 'Group 5',
		description: 'Testing 5'
	},
	{
		id: 6,
		name: 'Group 6',
		description: 'Testing 6'
	},
	{
		id: 7,
		name: 'Group 7',
		description: 'Testing 7'
	},
	{
		id: 8,
		name: 'Group 8',
		description: 'Testing 8'
	},
	{
		id: 9,
		name: 'Group 9',
		description: 'Testing 9'
	},
	{
		id: 10,
		name: 'Group 10',
		description: 'Testing 10'
	},
	{
		id: 11,
		name: 'Group 11',
		description: 'Testing 11'
	},
	{
		id: 12,
		name: 'Group 12',
		description: 'Testing 12'
	},
	{
		id: 13,
		name: 'Group 13',
		description: 'Testing 13'
	},
	{
		id: 14,
		name: 'Group 14',
		description: 'Testing 14'
	},
	{
		id: 15,
		name: 'Group 15',
		description: 'Testing 15'
	},
	{
		id: 16,
		name: 'Group 16',
		description: 'Testing 16'
	},
	{
		id: 17,
		name: 'Group 17',
		description: 'Testing 17'
	},
	{
		id: 18,
		name: 'Group 18',
		description: 'Testing 18'
	},
	{
		id: 19,
		name: 'Group 19',
		description: 'Testing 19'
	},
	{
		id: 20,
		name: 'Group 20',
		description: 'Testing 20'
	},
	{
		id: 21,
		name: 'Group 21',
		description: 'Testing 21'
	},
	{
		id: 22,
		name: 'Group 22',
		description: 'Testing 22'
	}
];

export const users = [
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
	{
		id: 4,
		name: 'User 4',
		group: 'Group 4',
		role: 'Role 4'
	},
	{
		id: 5,
		name: 'User 5',
		group: 'Group 5',
		role: 'Role 5'
	}
];

export const usersBD = [
	{
		id: 1,
		name: 'John Doe',
		dateOfBirth: new Date('1990-05-10')
	},
	{
		id: 2,
		name: 'Jane Smith',
		dateOfBirth: new Date('1985-12-15')
	},
	{
		id: 3,
		name: 'David Johnson',
		dateOfBirth: new Date('1992-07-22')
	},
	{
		id: 4,
		name: 'Emily Brown',
		dateOfBirth: new Date('1998-03-05')
	},
	{
		id: 5,
		name: 'Michael Davis',
		dateOfBirth: new Date('1987-09-18')
	},
	{
		id: 6,
		name: 'Olivia Wilson',
		dateOfBirth: new Date('1994-11-30')
	},
	{
		id: 7,
		name: 'James Taylor',
		dateOfBirth: new Date('1996-01-25')
	},
	{
		id: 8,
		name: 'Sophia Martinez',
		dateOfBirth: new Date('1991-08-14')
	},
	{
		id: 9,
		name: 'Daniel Anderson',
		dateOfBirth: new Date('1993-06-07')
	},
	{
		id: 10,
		name: 'Ava Thomas',
		dateOfBirth: new Date('1989-04-01')
	},
	{
		id: 11,
		name: 'William Clark',
		dateOfBirth: new Date('1997-02-12')
	},
	{
		id: 12,
		name: 'Mia Rodriguez',
		dateOfBirth: new Date('1999-10-20')
	},
	{
		id: 13,
		name: 'Benjamin Lewis',
		dateOfBirth: new Date('1988-07-08')
	},
	{
		id: 14,
		name: 'Charlotte Lee',
		dateOfBirth: new Date('1995-09-28')
	},
	{
		id: 15,
		name: 'Henry Turner',
		dateOfBirth: new Date('1992-12-03')
	}
];

export const usersMissingIDs = [
	{
		id: 1,
		name: 'User 1',
		group: 'Group 1',
		role: 'Role 1'
	},
	{
		id: 32655,
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
	{
		id: 32653,
		name: 'User 4',
		group: 'Group 4',
		role: 'Role 4'
	},
	{
		id: 5,
		name: 'User 5',
		group: 'Group 5',
		role: 'Role 5'
	}
];

export const websites: { label: string; URL: URL }[] = [
	{
		label: 'Google',
		URL: new URL('https://www.google.com')
	},
	{
		label: 'GitHub',
		URL: new URL('https://www.github.com')
	},
	{
		label: 'YouTube',
		URL: new URL('https://www.youtube.com')
	},
	{
		label: 'Yahoo',
		URL: new URL('https://www.yahoo.com')
	},
	{
		label: 'Bing',
		URL: new URL('https://www.bing.com')
	}
];

export type UserOrAdmin = {
	name: string;
	username: string;
	isAdmin: boolean;
};
export const usersAndAdmins: UserOrAdmin[] = [
	{
		name: 'John Doe',
		username: 'johndoe',
		isAdmin: true
	},
	{
		name: 'Jane Smith',
		username: 'janesmith',
		isAdmin: false
	},
	{
		name: 'Robert Johnson',
		username: 'robertjohnson',
		isAdmin: false
	},
	{
		name: 'Emily Davis',
		username: 'emilydavis',
		isAdmin: true
	},
	{
		name: 'Michael Wilson',
		username: 'michaelwilson',
		isAdmin: false
	}
];

export type Group = { id: number; name: string; description: string };
export const groupsStore = writable<Group[]>(userGroups);

export type User = { id: number; name: string; group: string; role: string };
export const usersStore = writable<User[]>(users);

export type UserBD = { id: number; name: string; dateOfBirth: Date };
export const usersBDStore = writable<UserBD[]>(usersBD);

export const usersAndAdminsStore = writable<UserOrAdmin[]>(usersAndAdmins);

export type Website = { label: string; URL: URL };
export const websitesStore = writable<Website[]>(websites);

export const missingValues: { [key: number]: string } = {
	32655: 'NA',
	32654: 'NM',
	32653: 'ND'
};

export type UserMissingID = { id: number | undefined; name: string; group: string; role: string };
export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);
