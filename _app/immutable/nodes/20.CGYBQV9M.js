import{s as le,e as d,a as x,t as ce,c as u,b as D,A as y,g as _,d as de,f as g,m as o,i as O,h as r,n as N,N as st,z as Xe,r as gt,ag as gs,j as Ce,T as Ke,H as $s,l as xs,u as _s,o as Cs,p as Ts,v as Qe,O as ws,U as Ds,k as vs}from"../chunks/scheduler.sMk536BX.js";import{S as ie,i as ae,c as V,a as A,m as H,t as E,b as S,d as R,g as vt,e as ht,k as ys}from"../chunks/index.DVMqOFlj.js";/* empty css                             */import{p as bt}from"../chunks/floating-ui.dom.BMU1ov8c.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.C2OQd1oi.js";import{C as nt}from"../chunks/CodeBlock.DFq04sMv.js";import{M as Is}from"../chunks/Modal.7QgmMMqz.js";import{g as Es}from"../chunks/stores.taRYlLc5.js";import{e as be}from"../chunks/each.BRKTvA7D.js";import{F as Ls,e as Ss,g as Us,d as Ms,c as ks}from"../chunks/index.CYxUxrp_.js";import{w as ze}from"../chunks/index.60cKgXHc.js";import{a as Vs,b as As,T as Te,c as Hs,d as Rs,C as et}from"../chunks/CodeContainer.CHnS73Ym.js";import{a as Gs,t as Fs}from"../chunks/stores.IDOT280b.js";function Bs(a,e){var h;let t="h2, h3, h4, h5, h6",s="body",n,i=[];function l(){e!=null&&e.queryElements&&(t=e.queryElements),e!=null&&e.scrollTarget&&(s=e.scrollTarget),n=a.querySelectorAll(t),i=[],f()}function f(){n==null||n.forEach(m=>{var C,v,b,p;if(!m.hasAttribute("data-toc-ignore")){if((e==null?void 0:e.mode)==="generate"&&!m.id){const $=(v=(C=m.firstChild)==null?void 0:C.textContent)==null?void 0:v.trim().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase(),T=e.prefix?`${e.prefix}-`:"",w=e.suffix?`-${e.suffix}`:"";m.id=T+$+w}i.push({element:m.nodeName.toLowerCase(),id:m.id,text:((p=(b=m.firstChild)==null?void 0:b.textContent)==null?void 0:p.trim())||""})}}),Gs.set(i)}function c(m){if(!(n!=null&&n.length))return;const C=m.target;if(!(C instanceof HTMLElement))throw new Error("scrollTarget is not an HTMLElement");const v=C.getBoundingClientRect().top||0,b=40;for(const p of n)if(p.getBoundingClientRect().top-v+b>=0)return Fs.set(p.id)}return l(),s&&((h=document.querySelector(s))==null||h.addEventListener("scroll",c)),{update(m){e=m,l()},destroy(){var m;s&&((m=document.querySelector(s))==null||m.removeEventListener("scroll",c))}}}function Os(a){let e,t,s='<div class="italic div">Underlined attributes are <strong>required</strong>.</div>',n,i,l,f,c="config:",h,m,C="TableConfig <T>",v,b,p,$="Configuration for the table.";return{c(){e=d("div"),t=d("div"),t.innerHTML=s,n=x(),i=d("div"),l=d("div"),f=d("div"),f.textContent=c,h=x(),m=d("div"),v=ce(C),b=x(),p=d("p"),p.textContent=$,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);t=u(w,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),y(t)!=="svelte-14ey4fv"&&(t.innerHTML=s),n=_(w),i=u(w,"DIV",{class:!0});var I=D(i);l=u(I,"DIV",{class:!0});var L=D(l);f=u(L,"DIV",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-w02qqp"&&(f.textContent=c),h=_(L),m=u(L,"DIV",{class:!0});var k=D(m);v=de(k,C),k.forEach(g),L.forEach(g),b=_(I),p=u(I,"P",{class:!0,"data-svelte-h":!0}),y(p)!=="svelte-x8qv5l"&&(p.textContent=$),I.forEach(g),w.forEach(g),this.h()},h(){o(t,"class","grid gap-2"),o(t,"id","tableProps"),o(f,"class","italic underline"),o(m,"class","font-bold"),o(l,"class","flex gap-2"),o(p,"class","text-xl pl-10"),o(i,"class","items-center"),o(e,"class","grid gap-5")},m(T,w){O(T,e,w),r(e,t),r(e,n),r(e,i),r(i,l),r(l,f),r(l,h),r(l,m),r(m,v),r(i,b),r(i,p)},p:N,i:N,o:N,d(T){T&&g(e)}}}class js extends ie{constructor(e){super(),ae(this,e,null,Os,le,{})}}const zs=`
<script lang="ts">
	import { usersStore } from './data';
<\/script>

<div class="table-container">
	<table class="table table-compact bg-tertiary-200">
		<thead>
			<tr class="bg-primary-300">
				<th class="!p-2">Group</th>
				<th class="!p-2">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each $usersStore as user}
				<tr>
					<td>{user.name}</td>
					<td>
						<div>{user.group}</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>`,qs=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,
		toggle: true,
		height: 300,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
<\/script>

<Table config={groupConfig} />`,hs=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Ns=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';
	
	import { usersStore } from './data';
	import type { User } from './data';

	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
<\/script>

<Table config={usersConfig} />`,$t=`
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
				
export const usersStore = writable<User[]>(users);`,Ps=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import TableFilter from './TableFilter.svelte';
	import TableOptions from './TableOptions.svelte';
	import { columnFilter } from './filters';
	import { usersStore } from './data';
	import type { User } from './data';

	const usersNoRolesConfig: TableConfig<User> = {
		id: 'usersNoRoles',
		data: usersStore,
		optionsComponent: TableOptions,
		resizable: 'columns',
		toggle: true,
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
			},
			optionsColumn: {
				fixedWidth: 120
			}
		},
		pageSizes: [1, 3, 5],
		defaultPageSize: 5
	};
<\/script>

<Table 
	config={usersNoRolesConfig} 
	on:action={(obj) => alert(obj.detail.type)} 
/>`,Ws=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { usersBDStore } from './data';
	import type { UserBD } from './data';

	const usersBDConfig: TableConfig<UserBD> = {
		id: 'usersBD',
		data: usersBDStore,
		columns: {
			dateOfBirth: {
				header: 'Date of birth',
				instructions: {
					toStringFn: 
						(date: Date) =>
							date.toLocaleString('en-US', { 
								month: 'short', 
								day: 'numeric', 
								year: 'numeric' 
							}
						),
					toSortableValueFn: 
						(date: Date) => date.getTime(),
					toFilterableValueFn: 
						(date: Date) => date
				}
			}
		}
	};
<\/script>

<Table config={usersBDConfig} />`,Js=`
export type UserBD = { 
	id: number; 
	name: string; 
	dateOfBirth: Date 
};

const usersBD = [
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
	...
];

export const usersBDStore = writable<UserBD[]>(usersBD);`,Ys=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	resizable?: 'rows' | 'columns' | 'both'; // none by default
	toggle?: boolean; // false by default
	fitToScreen?: boolean; // true by default
	height?: null | number; // null by default
	rowHeight?: number; // auto by default
	columns?: Columns;
	exportable?: boolean; // false by default
	pageSizes?: number[]; // [5, 10, 15, 20] by default
	defaultPageSize?: number; // 10 by default
	optionsComponent?: typeof SvelteComponent;
}`,Zs=`
export interface Columns {
	[key: string]: Column;
}`,Ks=`
export interface Column {
	header?: string; // key by default
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
	minWidth?: number; // auto by default
	fixedWidth?: number; // auto by default
}`,Qs=`
export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}`,Xs=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { usersMissingIDsStore } from './data';
	import type { UserMissingID } from './data';

	const missingValues: { [key: number]: string } = {
		32655: 'NA',
		32654: 'NM',
		32653: 'ND'
	};

	const usersMissingIDsConfig: TableConfig<UserMissingID> = {
		id: 'usersMissingIDs',
		data: usersMissingIDsStore,
		columns: {
			id: {
				header: 'ID',
				instructions: {
					toStringFn: (key: number) => {
						if (key in missingValues) {
							return missingValues[key];
						}
						return key.toString();
					}
				}
			}
		}
	};
<\/script>

<Table config={usersMissingIDsConfig} />`,en=`
type UserMissingID = { 
	id: number;
	name: string; 
	group: string; 
	role: string 
};
	
const usersMissingIDs = [
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,tn=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import UrlCell from './URLCell.svelte';
	import { websitesStore } from './data';
	import type { Website } from './data';

	type Website = { label: string; URL: URL };
	const websitesStore = writable<Website[]>(websites);
	const websitesConfig: TableConfig<Website> = {
		id: 'websites',
		data: websitesStore,
		toggle: true,
		fitToScreen: false,
		columns: {
			URL: {
				header: 'URL',
				instructions: {
					renderComponent: UrlCell,
					toFilterableValueFn: (url: URL) => url.toString()
				},
				disableSorting: true
			}
		}
	};
<\/script>

<Table config={websitesConfig} />
`,sn=`
export type Website = { label: string; URL: URL };

const websites: Website[] = [
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

export const websitesStore = writable<Website[]>(websites);
`,nn=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,rn=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import IsAdmin from './IsAdmin.svelte';
	import { usersAndAdminsStore } from './data';
	import type { UserOrAdmin } from './data';

	const usersAndAdminsConfig: TableConfig<data.UserOrAdmin> = {
		id: 'usersAndAdmins',
		data: usersAndAdminsStore,
		columns: {
			isAdmin: {
				header: 'Admin',
				instructions: {
					renderComponent: IsAdmin
				},
				disableFiltering: true
			}
		}
	};
<\/script>`,ln=`
export type UserOrAdmin = {
	name: string;
	username: string;
	isAdmin: boolean;
};

const usersAndAdmins: UserOrAdmin[] = [
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

export const usersAndAdminsStore = writable<UserOrAdmin[]>(usersAndAdmins);
`,an=`
<script lang="ts">
	export let value;
	export let row;
<\/script>

<input 
	type="checkbox" 
	name="isAdmin" 
	id={row.id} 
	checked={value} 
	disabled 
/>
`,on=`
<script lang="ts">
	export let row;
	export let dispatchFn;

	const eventDispatchFn = () => {
		const type = row.id % 2 === 0 ? 'even' : 'odd';
		return dispatchFn({ type });
	};
<\/script>

<button 
	class="btn btn-sm variant-filled-secondary" 
	on:click|preventDefault={eventDispatchFn}>
	Odd or even
</button>
`,cn=`
<script lang="ts">
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore()
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	// Modals' contents
	import AddUser from './AddUser.svelte';
	import ShowUsers from './ShowUsers.svelte';
	import EditGroup from './EditGroup.svelte';
	// Table data
	import TableCrud from './TableCRUD.svelte';
	import { groupsStore, usersStore } from './data';
	import type { Group } from './data';

	export let row;
	export let dispatchFn;

	const tableCRUDConfig: TableConfig<Group> = {
		id: 'userGroupCRUD',
		toggle: true,
		data: groupsStore,
		resizable: 'both',
		rowHeight: 40,
		exportable: true,
		columns: {
			name: {
				minWidth: 200,
			}
		},
		optionsComponent: TableCrud
	};

	const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
		// See tableCRUDActions tab for more details
	};
<\/script>

<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
<Modal />`,dn=`
const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
	const { type, row } = action.detail;
	switch (type) {
		case 'CREATE':
			modalStore.trigger({
				type: 'component',
				title: \`Add user to Group \${row.id}\`,
				component: {
					ref: AddUser,
					props: { 
						users: $usersStore.filter((user) => user.group !== row.name), 
						group: row.name 
					}
				}
			});
			break;
		case 'READ':
			modalStore.trigger({
				type: 'component',
				title: \`Users in Group \${row.id}\`,
				component: {
					ref: ShowUsers,
					props: { 
						users: $usersStore.filter((user) => user.group === row.name), 
						group: row.name 
					}
				}
			});
			break;
		case 'UPDATE':
			modalStore.trigger({
				type: 'component',
				title: \`Edit Group \${row.id}\`,
				component: {
					ref: EditGroup,
					props: { group: row }
				}
			});
			break;
		case 'DELETE':
			modalStore.trigger({
				type: 'confirm',
				title: 'Group deletion',
				body: \`Are you sure you want to delete <strong>\${row.name}</strong>?\`,
				response: (r: boolean) => console.log('response:', r)
			});
			break;

		default:
			break;
	}
};
`,un=`
<script lang="ts">
	export let users;
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Select the users you would like to add to the <strong>{group}</strong>.</label>
	<select multiple name="users" class="select" id="">
		{#each users as user}
			<option value={user.id}>{user.name}</option>
		{/each}
	</select>
	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,fn=`
<script lang="ts">
	export let users;
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Users in <strong>{group}</strong>.</label>
	<ul>
		{#each users as user}
			<li class="font-semibold" value={user.id}>- {user.name}</li>
		{:else}
			<p class="italic">No users in this group</p>
		{/each}
	</ul>

	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,pn=`
<script lang="ts">
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="groupName">Group name</label>
	<input type="text" id="groupName" class="input input-primary" bind:value={group.name} />
	<label for="groupDescription">Group description</label>
	<input
		type="text"
		id="groupDescription"
		class="input input-primary"
		bind:value={group.description}
	/>
	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,mn=`
<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

	export let row;
	export let dispatchFn;

	const eventDispatchFn = (type: string) => {
		return dispatchFn({ type, row });
	};

	const buttons = [
		{
			icon: faPlus,
			color: 'variant-filled-primary',
			type: 'CREATE'
		},
		{
			icon: faEye,
			color: 'variant-filled-secondary',
			type: 'READ'
		},
		{
			icon: faPen,
			color: 'variant-filled-warning',
			type: 'UPDATE'
		},
		{
			icon: faTrash,
			color: 'variant-filled-error',
			type: 'DELETE'
		}
	];
<\/script>

<div class="flex gap-2 w-min">
	{#each buttons as button}
		<button
			class={\`btn btn-sm btn-icon rounded-md \${button.color}\`}
			on:click|preventDefault={() => eventDispatchFn(button.type)}
		>
			<Fa icon={button.icon} />
		</button>
	{/each}
</div>
`,gn=`
<script lang="ts">
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import type { TableConfig } from '$lib/models/Models';

	type ServerTableType = {
		id: number;
		name: string;
	};

	const tableStore = writable<ServerTableType[]>([]);

	const serverTableConfig: TableConfig<ServerTableType> = {
		id: 'serverTable', // a unique id for the table
		entityId: 3, // dataset ID
		versionId: -1, // vesion ID
		data: tableStore, // store to hold and retrieve data
		serverSide: true, // serverSide needs to be set to true
		// URL for the table to be fetched from
		URL: 'https://dev.bexis2.uni-jena.de/api/datatable/',
		token: '<your_token>' // API token to access the datasets
	};
<\/script>

<Table config={serverTableConfig} />
`;function vn(a){let e,t,s,n="TableConfig <T>",i,l,f,c="Show type details",h,m,C="Underlined attributes are <strong>required</strong>.",v,b,p,$,T,w='<div class="flex gap-2 underline"><div class="italic">id:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Unique identifier for the table to generate unique IDs for the filters.</p>',I,L,k,G,q="data:",P,se,z="Writable <T[]>",W,ee,Z,Y='A writable store of the type <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">T[]</code>. Any changes in the store will be reflected in the table.',K,re,M='<div class="flex gap-2"><div class="italic">search:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should have a search bar. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',j,F,te='<div class="flex gap-2"><div class="italic">exportable:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should be exportable to CSV. <code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>',U,B,ne=`<div class="flex gap-2"><div class="italic">toggle:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">fitToScreen</code>
			toggle should be visible.
			<code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>`,J,oe,ge='<div class="flex gap-2"><div class="italic">resizable:</div> <div class="font-bold"><i>&quot;rows&quot;</i>, <i>&quot;columns&quot;</i> or <i>&quot;both&quot;</i></div></div> <p class="text-xl pl-10">Whether rows, columns or both should be resizable. Not resizable by default.</p>',Q,ue,we='<div class="flex gap-2"><div class="italic">rowHeight:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Sets height for the rows in pixels. If <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> is set to &quot;both&quot; or &quot;rows&quot;, this value can be interpreted as minimum height for the rows.</p>',Ve,$e,xe='<div class="flex gap-2"><div class="italic">fitToScreen:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table takes the whole width. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',qe,he,Ne='<div class="flex gap-2"><div class="italic">height:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Custom height for the table in pixels.</p>',Pe,pe,fe,ve,tt="optionsComponent:",De,me,Ae="SvelteComponent",ye,We,He,At=`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> was provided.`,Ct,Ie,Ee,Re,Ht="pageSizes:",Tt,Je,Rt="number[]",wt,Dt,Ge,Gt="An array of page sizes to be used for the table. By default, page sizes are 5, 10, 20, 50, 100.",yt,Le,Se,Fe,Ft="defaultPageSize:",It,Ye,Bt="number",Et,Lt,Be,Ot=`Default page size to be used for the table upon rendering. By default, default page size is
			10.`,St,Ue,Me,Oe,jt="columns:",Ut,Ze,zt="Columns",Mt,kt,je,qt=`An object with configuration for specific columns. <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">Columns</code>
			object is described below.`,rt,Vt,Nt;return p=new nt({props:{language:"ts",code:Ys}}),{c(){e=d("div"),t=d("div"),s=d("h3"),i=ce(n),l=x(),f=d("button"),f.textContent=c,h=x(),m=d("div"),m.innerHTML=C,v=x(),b=d("div"),V(p.$$.fragment),$=x(),T=d("div"),T.innerHTML=w,I=x(),L=d("div"),k=d("div"),G=d("div"),G.textContent=q,P=x(),se=d("div"),W=ce(z),ee=x(),Z=d("p"),Z.innerHTML=Y,K=x(),re=d("div"),re.innerHTML=M,j=x(),F=d("div"),F.innerHTML=te,U=x(),B=d("div"),B.innerHTML=ne,J=x(),oe=d("div"),oe.innerHTML=ge,Q=x(),ue=d("div"),ue.innerHTML=we,Ve=x(),$e=d("div"),$e.innerHTML=xe,qe=x(),he=d("div"),he.innerHTML=Ne,Pe=x(),pe=d("div"),fe=d("div"),ve=d("div"),ve.textContent=tt,De=x(),me=d("div"),ye=ce(Ae),We=x(),He=d("p"),He.innerHTML=At,Ct=x(),Ie=d("div"),Ee=d("div"),Re=d("div"),Re.textContent=Ht,Tt=x(),Je=d("div"),wt=ce(Rt),Dt=x(),Ge=d("p"),Ge.textContent=Gt,yt=x(),Le=d("div"),Se=d("div"),Fe=d("div"),Fe.textContent=Ft,It=x(),Ye=d("div"),Et=ce(Bt),Lt=x(),Be=d("p"),Be.textContent=Ot,St=x(),Ue=d("div"),Me=d("div"),Oe=d("div"),Oe.textContent=jt,Ut=x(),Ze=d("div"),Mt=ce(zt),kt=x(),je=d("p"),je.innerHTML=qt,this.h()},l(_e){e=u(_e,"DIV",{class:!0});var X=D(e);t=u(X,"DIV",{class:!0,id:!0});var ke=D(t);s=u(ke,"H3",{class:!0});var Pt=D(s);i=de(Pt,n),Pt.forEach(g),l=_(ke),f=u(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-8jx6w5"&&(f.textContent=c),h=_(ke),m=u(ke,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-pow2wl"&&(m.innerHTML=C),v=_(ke),b=u(ke,"DIV",{"data-popup":!0});var Wt=D(b);A(p.$$.fragment,Wt),Wt.forEach(g),ke.forEach(g),$=_(X),T=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(T)!=="svelte-1gw1p6o"&&(T.innerHTML=w),I=_(X),L=u(X,"DIV",{class:!0});var lt=D(L);k=u(lt,"DIV",{class:!0});var it=D(k);G=u(it,"DIV",{class:!0,"data-svelte-h":!0}),y(G)!=="svelte-1nos06z"&&(G.textContent=q),P=_(it),se=u(it,"DIV",{class:!0});var Jt=D(se);W=de(Jt,z),Jt.forEach(g),it.forEach(g),ee=_(lt),Z=u(lt,"P",{class:!0,"data-svelte-h":!0}),y(Z)!=="svelte-12kv8ew"&&(Z.innerHTML=Y),lt.forEach(g),K=_(X),re=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(re)!=="svelte-1atdxi3"&&(re.innerHTML=M),j=_(X),F=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(F)!=="svelte-1lqyjpj"&&(F.innerHTML=te),U=_(X),B=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-i5wouq"&&(B.innerHTML=ne),J=_(X),oe=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(oe)!=="svelte-okxdta"&&(oe.innerHTML=ge),Q=_(X),ue=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(ue)!=="svelte-38f3nw"&&(ue.innerHTML=we),Ve=_(X),$e=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y($e)!=="svelte-wrmk9w"&&($e.innerHTML=xe),qe=_(X),he=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(he)!=="svelte-mswvp"&&(he.innerHTML=Ne),Pe=_(X),pe=u(X,"DIV",{class:!0});var at=D(pe);fe=u(at,"DIV",{class:!0});var ot=D(fe);ve=u(ot,"DIV",{class:!0,"data-svelte-h":!0}),y(ve)!=="svelte-k4lnpy"&&(ve.textContent=tt),De=_(ot),me=u(ot,"DIV",{class:!0});var Yt=D(me);ye=de(Yt,Ae),Yt.forEach(g),ot.forEach(g),We=_(at),He=u(at,"P",{class:!0,"data-svelte-h":!0}),y(He)!=="svelte-1stbrjy"&&(He.innerHTML=At),at.forEach(g),Ct=_(X),Ie=u(X,"DIV",{class:!0});var ct=D(Ie);Ee=u(ct,"DIV",{class:!0});var dt=D(Ee);Re=u(dt,"DIV",{class:!0,"data-svelte-h":!0}),y(Re)!=="svelte-1vi8og4"&&(Re.textContent=Ht),Tt=_(dt),Je=u(dt,"DIV",{class:!0});var Zt=D(Je);wt=de(Zt,Rt),Zt.forEach(g),dt.forEach(g),Dt=_(ct),Ge=u(ct,"P",{class:!0,"data-svelte-h":!0}),y(Ge)!=="svelte-1lldeuo"&&(Ge.textContent=Gt),ct.forEach(g),yt=_(X),Le=u(X,"DIV",{class:!0});var ut=D(Le);Se=u(ut,"DIV",{class:!0});var ft=D(Se);Fe=u(ft,"DIV",{class:!0,"data-svelte-h":!0}),y(Fe)!=="svelte-6pyrz4"&&(Fe.textContent=Ft),It=_(ft),Ye=u(ft,"DIV",{class:!0});var Kt=D(Ye);Et=de(Kt,Bt),Kt.forEach(g),ft.forEach(g),Lt=_(ut),Be=u(ut,"P",{class:!0,"data-svelte-h":!0}),y(Be)!=="svelte-qswi2h"&&(Be.textContent=Ot),ut.forEach(g),St=_(X),Ue=u(X,"DIV",{class:!0});var pt=D(Ue);Me=u(pt,"DIV",{class:!0});var mt=D(Me);Oe=u(mt,"DIV",{class:!0,"data-svelte-h":!0}),y(Oe)!=="svelte-1rr4g9w"&&(Oe.textContent=jt),Ut=_(mt),Ze=u(mt,"DIV",{class:!0});var Qt=D(Ze);Mt=de(Qt,zt),Qt.forEach(g),mt.forEach(g),kt=_(pt),je=u(pt,"P",{class:!0,"data-svelte-h":!0}),y(je)!=="svelte-1cm9l0i"&&(je.innerHTML=qt),pt.forEach(g),X.forEach(g),this.h()},h(){o(s,"class","font-semibold relative w-max h3"),o(f,"class","btn variant-ghost-primary w-min"),o(m,"class","italic div"),o(b,"data-popup","popupClickTableConfig"),o(t,"class","grid gap-2"),o(t,"id","tableConfig"),o(T,"class","items-center"),o(G,"class","italic"),o(se,"class","font-bold"),o(k,"class","flex gap-2 underline"),o(Z,"class","text-xl pl-10"),o(L,"class","items-center"),o(re,"class","items-center"),o(F,"class","items-center"),o(B,"class","items-center"),o(oe,"class","items-center"),o(ue,"class","items-center"),o($e,"class","items-center"),o(he,"class","items-center"),o(ve,"class","italic"),o(me,"class","font-bold"),o(fe,"class","flex gap-2"),o(He,"class","text-xl pl-10"),o(pe,"class","items-center"),o(Re,"class","italic"),o(Je,"class","font-bold"),o(Ee,"class","flex gap-2"),o(Ge,"class","text-xl pl-10"),o(Ie,"class","items-center"),o(Fe,"class","italic"),o(Ye,"class","font-bold"),o(Se,"class","flex gap-2"),o(Be,"class","text-xl pl-10"),o(Le,"class","items-center"),o(Oe,"class","italic"),o(Ze,"class","font-bold"),o(Me,"class","flex gap-2"),o(je,"class","text-xl pl-10"),o(Ue,"class","items-center"),o(e,"class","grid gap-5")},m(_e,X){O(_e,e,X),r(e,t),r(t,s),r(s,i),r(t,l),r(t,f),r(t,h),r(t,m),r(t,v),r(t,b),H(p,b,null),r(e,$),r(e,T),r(e,I),r(e,L),r(L,k),r(k,G),r(k,P),r(k,se),r(se,W),r(L,ee),r(L,Z),r(e,K),r(e,re),r(e,j),r(e,F),r(e,U),r(e,B),r(e,J),r(e,oe),r(e,Q),r(e,ue),r(e,Ve),r(e,$e),r(e,qe),r(e,he),r(e,Pe),r(e,pe),r(pe,fe),r(fe,ve),r(fe,De),r(fe,me),r(me,ye),r(pe,We),r(pe,He),r(e,Ct),r(e,Ie),r(Ie,Ee),r(Ee,Re),r(Ee,Tt),r(Ee,Je),r(Je,wt),r(Ie,Dt),r(Ie,Ge),r(e,yt),r(e,Le),r(Le,Se),r(Se,Fe),r(Se,It),r(Se,Ye),r(Ye,Et),r(Le,Lt),r(Le,Be),r(e,St),r(e,Ue),r(Ue,Me),r(Me,Oe),r(Me,Ut),r(Me,Ze),r(Ze,Mt),r(Ue,kt),r(Ue,je),rt=!0,Vt||(Nt=st(bt.call(null,f,a[0])),Vt=!0)},p:N,i(_e){rt||(E(p.$$.fragment,_e),rt=!0)},o(_e){S(p.$$.fragment,_e),rt=!1},d(_e){_e&&g(e),R(p),Vt=!1,Nt()}}}function hn(a){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class bn extends ie{constructor(e){super(),ae(this,e,hn,vn,le,{})}}function $n(a){let e,t,s,n="Columns",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">[key: <strong>string</strong>]:</div> <div class="font-bold">Column</div></div> <p class="text-xl pl-10">Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.</p>`,p,$,T;return m=new nt({props:{language:"ts",code:Zs}}),{c(){e=d("div"),t=d("div"),s=d("h3"),s.textContent=n,i=x(),l=d("button"),l.textContent=f,c=x(),h=d("div"),V(m.$$.fragment),C=x(),v=d("div"),v.innerHTML=b,this.h()},l(w){e=u(w,"DIV",{class:!0});var I=D(e);t=u(I,"DIV",{class:!0,id:!0});var L=D(t);s=u(L,"H3",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-16hos7w"&&(s.textContent=n),i=_(L),l=u(L,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-7ff0g6"&&(l.textContent=f),c=_(L),h=u(L,"DIV",{"data-popup":!0});var k=D(h);A(m.$$.fragment,k),k.forEach(g),L.forEach(g),C=_(I),v=u(I,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-z913vv"&&(v.innerHTML=b),I.forEach(g),this.h()},h(){o(s,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumns"),o(t,"class","grid gap-2"),o(t,"id","columns"),o(v,"class","items-center"),o(e,"class","grid gap-5")},m(w,I){O(w,e,I),r(e,t),r(t,s),r(t,i),r(t,l),r(t,c),r(t,h),H(m,h,null),r(e,C),r(e,v),p=!0,$||(T=st(bt.call(null,l,a[0])),$=!0)},p:N,i(w){p||(E(m.$$.fragment,w),p=!0)},o(w){S(m.$$.fragment,w),p=!1},d(w){w&&g(e),R(m),$=!1,T()}}}function xn(a){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class _n extends ie{constructor(e){super(),ae(this,e,xn,$n,le,{})}}function Cn(a){let e,t,s,n="Column",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">header:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.</p>`,p,$,T='<div class="flex gap-2"><div class="italic">minWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Minimum width in pixels for the column. By default, the column will be as wide as the content.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">fixedWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> property for the column.</p>`,k,G,q=`<div class="flex gap-2"><div class="italic">exclude:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.</p>`,P,se,z='<div class="flex gap-2"><div class="italic">disableFiltering:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable filtering for the column or not. By default, filtering is enabled.</p>',W,ee,Z='<div class="flex gap-2"><div class="italic">disableSorting:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable sorting for the column or not. By default, sorting is enabled.</p>',Y,K,re=`<div class="flex gap-2"><div class="italic">colFitlerFn:</div> <div class="font-bold"><a href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean">ColumnFilterFn</a></div></div> <p class="text-xl pl-10">Filtering function to be applied on the column. By default, basic number/string filter is
			applied.</p>`,M,j,F=`<div class="flex gap-2"><div class="italic">colFilterComponent:</div> <div class="font-bold">SvelteComponent</div></div> <p class="text-xl pl-10">Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.</p>`,te,U,B='<div class="flex gap-2"><div class="italic">instructions:</div> <div class="font-bold">ColumnInstructions</div></div> <p class="text-xl pl-10">Configuration for the column&#39;s appearance, sorting and filtering functionalities.</p>',ne,J,oe;return m=new nt({props:{language:"ts",code:Ks}}),{c(){e=d("div"),t=d("div"),s=d("h3"),s.textContent=n,i=x(),l=d("button"),l.textContent=f,c=x(),h=d("div"),V(m.$$.fragment),C=x(),v=d("div"),v.innerHTML=b,p=x(),$=d("div"),$.innerHTML=T,w=x(),I=d("div"),I.innerHTML=L,k=x(),G=d("div"),G.innerHTML=q,P=x(),se=d("div"),se.innerHTML=z,W=x(),ee=d("div"),ee.innerHTML=Z,Y=x(),K=d("div"),K.innerHTML=re,M=x(),j=d("div"),j.innerHTML=F,te=x(),U=d("div"),U.innerHTML=B,this.h()},l(ge){e=u(ge,"DIV",{class:!0});var Q=D(e);t=u(Q,"DIV",{class:!0,id:!0});var ue=D(t);s=u(ue,"H3",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-1hrzfml"&&(s.textContent=n),i=_(ue),l=u(ue,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-xegi0l"&&(l.textContent=f),c=_(ue),h=u(ue,"DIV",{"data-popup":!0});var we=D(h);A(m.$$.fragment,we),we.forEach(g),ue.forEach(g),C=_(Q),v=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-b4nczs"&&(v.innerHTML=b),p=_(Q),$=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-1mnwd5o"&&($.innerHTML=T),w=_(Q),I=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-aq5rqb"&&(I.innerHTML=L),k=_(Q),G=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(G)!=="svelte-hqd23"&&(G.innerHTML=q),P=_(Q),se=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(se)!=="svelte-1ukzcx7"&&(se.innerHTML=z),W=_(Q),ee=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(ee)!=="svelte-1xushnp"&&(ee.innerHTML=Z),Y=_(Q),K=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-1sidkmm"&&(K.innerHTML=re),M=_(Q),j=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-jctk25"&&(j.innerHTML=F),te=_(Q),U=u(Q,"DIV",{class:!0,"data-svelte-h":!0}),y(U)!=="svelte-mix6fy"&&(U.innerHTML=B),Q.forEach(g),this.h()},h(){o(s,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumn"),o(t,"class","grid gap-2"),o(t,"id","column"),o(v,"class","items-center"),o($,"class","items-center"),o(I,"class","items-center"),o(G,"class","items-center"),o(se,"class","items-center"),o(ee,"class","items-center"),o(K,"class","items-center"),o(j,"class","items-center"),o(U,"class","items-center"),o(e,"class","grid gap-5")},m(ge,Q){O(ge,e,Q),r(e,t),r(t,s),r(t,i),r(t,l),r(t,c),r(t,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,$),r(e,w),r(e,I),r(e,k),r(e,G),r(e,P),r(e,se),r(e,W),r(e,ee),r(e,Y),r(e,K),r(e,M),r(e,j),r(e,te),r(e,U),ne=!0,J||(oe=st(bt.call(null,l,a[0])),J=!0)},p:N,i(ge){ne||(E(m.$$.fragment,ge),ne=!0)},o(ge){S(m.$$.fragment,ge),ne=!1},d(ge){ge&&g(e),R(m),J=!1,oe()}}}function Tn(a){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class wn extends ie{constructor(e){super(),ae(this,e,Tn,Cn,le,{})}}function Dn(a){let e,t,s,n="ColumnInstructions",i,l,f="Show type details",c,h,m,C,v,b='<div class="flex gap-2"><div class="italic">toStringFn:</div> <div class="font-bold">(value: any) =&gt; string</div></div> <p class="text-xl pl-10">Custom toString function to be applied on the column.</p>',p,$,T='<div class="flex gap-2"><div class="italic">toSortableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number</div></div> <p class="text-xl pl-10">Custom function to return either a string or a number value to have a sortable column.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">toFilterableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number | Date</div></div> <p class="text-xl pl-10">Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.</p>`,k,G,q,P='<div class="italic">renderComponent:</div> <div class="font-bold">SvelteComponent</div>',se,z,W,ee=`<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code>
				overrides
				<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">toStringFn</code>.`,Z,Y,K='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code> will get 3 props:',re,M,j='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',F,te,U='<div class="flex gap-2"><div class="italic">value:</div> <div class="font-bold">any</div></div> <p class="text-xl pl-10">The value of the current cell.</p>',B,ne,J,oe,ge="dispatchFn:",Q,ue,we="(obj: any) => dispatch('action', obj)",Ve,$e,xe,qe=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`,he,Ne,Pe;return m=new nt({props:{language:"ts",code:Qs}}),{c(){e=d("div"),t=d("div"),s=d("h3"),s.textContent=n,i=x(),l=d("button"),l.textContent=f,c=x(),h=d("div"),V(m.$$.fragment),C=x(),v=d("div"),v.innerHTML=b,p=x(),$=d("div"),$.innerHTML=T,w=x(),I=d("div"),I.innerHTML=L,k=x(),G=d("div"),q=d("div"),q.innerHTML=P,se=x(),z=d("div"),W=d("p"),W.innerHTML=ee,Z=x(),Y=d("p"),Y.innerHTML=K,re=x(),M=d("div"),M.innerHTML=j,F=x(),te=d("div"),te.innerHTML=U,B=x(),ne=d("div"),J=d("div"),oe=d("div"),oe.textContent=ge,Q=x(),ue=d("div"),Ve=ce(we),$e=x(),xe=d("p"),xe.innerHTML=qe,this.h()},l(pe){e=u(pe,"DIV",{class:!0});var fe=D(e);t=u(fe,"DIV",{class:!0,id:!0});var ve=D(t);s=u(ve,"H3",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-jn2qek"&&(s.textContent=n),i=_(ve),l=u(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1pqc3g6"&&(l.textContent=f),c=_(ve),h=u(ve,"DIV",{"data-popup":!0});var tt=D(h);A(m.$$.fragment,tt),tt.forEach(g),ve.forEach(g),C=_(fe),v=u(fe,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-gq1s8p"&&(v.innerHTML=b),p=_(fe),$=u(fe,"DIV",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-1wjzpok"&&($.innerHTML=T),w=_(fe),I=u(fe,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-cnej3m"&&(I.innerHTML=L),k=_(fe),G=u(fe,"DIV",{class:!0});var De=D(G);q=u(De,"DIV",{class:!0,"data-svelte-h":!0}),y(q)!=="svelte-1b798op"&&(q.innerHTML=P),se=_(De),z=u(De,"DIV",{class:!0});var me=D(z);W=u(me,"P",{class:!0,"data-svelte-h":!0}),y(W)!=="svelte-1lchchu"&&(W.innerHTML=ee),Z=_(me),Y=u(me,"P",{class:!0,"data-svelte-h":!0}),y(Y)!=="svelte-1wsaj1z"&&(Y.innerHTML=K),re=_(me),M=u(me,"DIV",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-6bma7r"&&(M.innerHTML=j),F=_(me),te=u(me,"DIV",{class:!0,"data-svelte-h":!0}),y(te)!=="svelte-zvgq5h"&&(te.innerHTML=U),B=_(me),ne=u(me,"DIV",{class:!0});var Ae=D(ne);J=u(Ae,"DIV",{class:!0});var ye=D(J);oe=u(ye,"DIV",{class:!0,"data-svelte-h":!0}),y(oe)!=="svelte-efz5t5"&&(oe.textContent=ge),Q=_(ye),ue=u(ye,"DIV",{class:!0});var We=D(ue);Ve=de(We,we),We.forEach(g),ye.forEach(g),$e=_(Ae),xe=u(Ae,"P",{class:!0,"data-svelte-h":!0}),y(xe)!=="svelte-vssxsw"&&(xe.innerHTML=qe),Ae.forEach(g),me.forEach(g),De.forEach(g),fe.forEach(g),this.h()},h(){o(s,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumnInstructions"),o(t,"class","grid gap-2"),o(t,"id","columnInstructions"),o(v,"class","items-center"),o($,"class","items-center"),o(I,"class","items-center"),o(q,"class","flex gap-2"),o(W,"class","underline"),o(Y,"class",""),o(M,"class","items-center mt-2"),o(te,"class","items-center mt-2"),o(oe,"class","italic"),o(ue,"class","font-bold"),o(J,"class","flex gap-2"),o(xe,"class","text-xl pl-10"),o(ne,"class","items-center mt-2"),o(z,"class","ml-5"),o(G,"class","items-center mt-5"),o(e,"class","grid gap-5")},m(pe,fe){O(pe,e,fe),r(e,t),r(t,s),r(t,i),r(t,l),r(t,c),r(t,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,$),r(e,w),r(e,I),r(e,k),r(e,G),r(G,q),r(G,se),r(G,z),r(z,W),r(z,Z),r(z,Y),r(z,re),r(z,M),r(z,F),r(z,te),r(z,B),r(z,ne),r(ne,J),r(J,oe),r(J,Q),r(J,ue),r(ue,Ve),r(ne,$e),r(ne,xe),he=!0,Ne||(Pe=st(bt.call(null,l,a[0])),Ne=!0)},p:N,i(pe){he||(E(m.$$.fragment,pe),he=!0)},o(pe){S(m.$$.fragment,pe),he=!1},d(pe){pe&&g(e),R(m),Ne=!1,Pe()}}}function yn(a){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class In extends ie{constructor(e){super(),ae(this,e,yn,Dn,le,{})}}function Xt(a,e,t){const s=a.slice();return s[5]=e[t],s}function es(a){let e,t,s,n,i,l;t=new Ls({props:{icon:a[5].icon}});function f(){return a[4](a[5])}return{c(){e=d("button"),V(t.$$.fragment),s=x(),this.h()},l(c){e=u(c,"BUTTON",{class:!0});var h=D(e);A(t.$$.fragment,h),s=_(h),h.forEach(g),this.h()},h(){o(e,"class",`btn btn-sm btn-icon rounded-md ${a[5].color}`)},m(c,h){O(c,e,h),H(t,e,null),r(e,s),n=!0,i||(l=gt(e,"click",gs(f)),i=!0)},p(c,h){a=c},i(c){n||(E(t.$$.fragment,c),n=!0)},o(c){S(t.$$.fragment,c),n=!1},d(c){c&&g(e),R(t),i=!1,l()}}}function En(a){let e,t,s=be(a[1]),n=[];for(let l=0;l<s.length;l+=1)n[l]=es(Xt(a,s,l));const i=l=>S(n[l],1,1,()=>{n[l]=null});return{c(){e=d("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=u(l,"DIV",{class:!0});var f=D(e);for(let c=0;c<n.length;c+=1)n[c].l(f);f.forEach(g),this.h()},h(){o(e,"class","flex gap-2 w-min")},m(l,f){O(l,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);t=!0},p(l,[f]){if(f&3){s=be(l[1]);let c;for(c=0;c<s.length;c+=1){const h=Xt(l,s,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=es(h),n[c].c(),E(n[c],1),n[c].m(e,null))}for(vt(),c=s.length;c<n.length;c+=1)i(c);ht()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)E(n[f]);t=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)S(n[f]);t=!1},d(l){l&&g(e),Xe(n,l)}}}function Ln(a,e,t){let{row:s}=e,{dispatchFn:n}=e;const i=c=>n({type:c,row:s}),l=[{icon:Ss,color:"variant-filled-primary",type:"CREATE"},{icon:Us,color:"variant-filled-secondary",type:"READ"},{icon:Ms,color:"variant-filled-warning",type:"UPDATE"},{icon:ks,color:"variant-filled-error",type:"DELETE"}],f=c=>i(c.type);return a.$$set=c=>{"row"in c&&t(2,s=c.row),"dispatchFn"in c&&t(3,n=c.dispatchFn)},[i,l,s,n,f]}class Sn extends ie{constructor(e){super(),ae(this,e,Ln,En,le,{row:2,dispatchFn:3})}}function ts(a,e,t){const s=a.slice();return s[2]=e[t],s}function ss(a){let e,t=a[2].name+"",s,n;return{c(){e=d("option"),s=ce(t),this.h()},l(i){e=u(i,"OPTION",{});var l=D(e);s=de(l,t),l.forEach(g),this.h()},h(){e.__value=n=a[2].id,Ke(e,e.__value)},m(i,l){O(i,e,l),r(e,s)},p(i,l){l&1&&t!==(t=i[2].name+"")&&Ce(s,t),l&1&&n!==(n=i[2].id)&&(e.__value=n,Ke(e,e.__value))},d(i){i&&g(e)}}}function Un(a){let e,t,s,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let p=0;p<v.length;p+=1)b[p]=ss(ts(a,v,p));return{c(){e=d("div"),t=d("label"),s=ce("Select the users you would like to add to the "),n=d("strong"),i=ce(a[1]),l=ce("."),f=x(),c=d("select");for(let p=0;p<b.length;p+=1)b[p].c();h=x(),m=d("div"),m.innerHTML=C,this.h()},l(p){e=u(p,"DIV",{class:!0});var $=D(e);t=u($,"LABEL",{for:!0});var T=D(t);s=de(T,"Select the users you would like to add to the "),n=u(T,"STRONG",{});var w=D(n);i=de(w,a[1]),w.forEach(g),l=de(T,"."),T.forEach(g),f=_($),c=u($,"SELECT",{name:!0,class:!0,id:!0});var I=D(c);for(let L=0;L<b.length;L+=1)b[L].l(I);I.forEach(g),h=_($),m=u($,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),$.forEach(g),this.h()},h(){o(t,"for","users"),c.multiple=!0,o(c,"name","users"),o(c,"class","select"),o(c,"id",""),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(p,$){O(p,e,$),r(e,t),r(t,s),r(t,n),r(n,i),r(t,l),r(e,f),r(e,c);for(let T=0;T<b.length;T+=1)b[T]&&b[T].m(c,null);r(e,h),r(e,m)},p(p,[$]){if($&2&&Ce(i,p[1]),$&1){v=be(p[0]);let T;for(T=0;T<v.length;T+=1){const w=ts(p,v,T);b[T]?b[T].p(w,$):(b[T]=ss(w),b[T].c(),b[T].m(c,null))}for(;T<b.length;T+=1)b[T].d(1);b.length=v.length}},i:N,o:N,d(p){p&&g(e),Xe(b,p)}}}function Mn(a,e,t){let{users:s}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&t(0,s=i.users),"group"in i&&t(1,n=i.group)},[s,n]}class kn extends ie{constructor(e){super(),ae(this,e,Mn,Un,le,{users:0,group:1})}}function ns(a,e,t){const s=a.slice();return s[2]=e[t],s}function rs(a){let e,t="No users in this group";return{c(){e=d("p"),e.textContent=t,this.h()},l(s){e=u(s,"P",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-39f32w"&&(e.textContent=t),this.h()},h(){o(e,"class","italic")},m(s,n){O(s,e,n)},p:N,d(s){s&&g(e)}}}function ls(a){let e,t,s=a[2].name+"",n,i;return{c(){e=d("li"),t=ce("- "),n=ce(s),this.h()},l(l){e=u(l,"LI",{class:!0});var f=D(e);t=de(f,"- "),n=de(f,s),f.forEach(g),this.h()},h(){o(e,"class","font-semibold"),e.value=i=a[2].id},m(l,f){O(l,e,f),r(e,t),r(e,n)},p(l,f){f&1&&s!==(s=l[2].name+"")&&Ce(n,s),f&1&&i!==(i=l[2].id)&&(e.value=i)},d(l){l&&g(e)}}}function Vn(a){let e,t,s,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let $=0;$<v.length;$+=1)b[$]=ls(ns(a,v,$));let p=null;return v.length||(p=rs()),{c(){e=d("div"),t=d("label"),s=ce("Users in "),n=d("strong"),i=ce(a[1]),l=ce("."),f=x(),c=d("ul");for(let $=0;$<b.length;$+=1)b[$].c();p&&p.c(),h=x(),m=d("div"),m.innerHTML=C,this.h()},l($){e=u($,"DIV",{class:!0});var T=D(e);t=u(T,"LABEL",{for:!0});var w=D(t);s=de(w,"Users in "),n=u(w,"STRONG",{});var I=D(n);i=de(I,a[1]),I.forEach(g),l=de(w,"."),w.forEach(g),f=_(T),c=u(T,"UL",{});var L=D(c);for(let k=0;k<b.length;k+=1)b[k].l(L);p&&p.l(L),L.forEach(g),h=_(T),m=u(T,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),T.forEach(g),this.h()},h(){o(t,"for","users"),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m($,T){O($,e,T),r(e,t),r(t,s),r(t,n),r(n,i),r(t,l),r(e,f),r(e,c);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(c,null);p&&p.m(c,null),r(e,h),r(e,m)},p($,[T]){if(T&2&&Ce(i,$[1]),T&1){v=be($[0]);let w;for(w=0;w<v.length;w+=1){const I=ns($,v,w);b[w]?b[w].p(I,T):(b[w]=ls(I),b[w].c(),b[w].m(c,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=v.length,!v.length&&p?p.p($,T):v.length?p&&(p.d(1),p=null):(p=rs(),p.c(),p.m(c,null))}},i:N,o:N,d($){$&&g(e),Xe(b,$),p&&p.d()}}}function An(a,e,t){let{users:s}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&t(0,s=i.users),"group"in i&&t(1,n=i.group)},[s,n]}class Hn extends ie{constructor(e){super(),ae(this,e,An,Vn,le,{users:0,group:1})}}function Rn(a){let e,t,s="Group name",n,i,l,f,c="Group description",h,m,C,v,b='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',p,$;return{c(){e=d("div"),t=d("label"),t.textContent=s,n=x(),i=d("input"),l=x(),f=d("label"),f.textContent=c,h=x(),m=d("input"),C=x(),v=d("div"),v.innerHTML=b,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);t=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(t)!=="svelte-47izbw"&&(t.textContent=s),n=_(w),i=u(w,"INPUT",{type:!0,id:!0,class:!0}),l=_(w),f=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(f)!=="svelte-f6w4je"&&(f.textContent=c),h=_(w),m=u(w,"INPUT",{type:!0,id:!0,class:!0}),C=_(w),v=u(w,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-tp3ijt"&&(v.innerHTML=b),w.forEach(g),this.h()},h(){o(t,"for","groupName"),o(i,"type","text"),o(i,"id","groupName"),o(i,"class","input input-primary"),o(f,"for","groupDescription"),o(m,"type","text"),o(m,"id","groupDescription"),o(m,"class","input input-primary"),o(v,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(T,w){O(T,e,w),r(e,t),r(e,n),r(e,i),Ke(i,a[0].name),r(e,l),r(e,f),r(e,h),r(e,m),Ke(m,a[0].description),r(e,C),r(e,v),p||($=[gt(i,"input",a[1]),gt(m,"input",a[2])],p=!0)},p(T,[w]){w&1&&i.value!==T[0].name&&Ke(i,T[0].name),w&1&&m.value!==T[0].description&&Ke(m,T[0].description)},i:N,o:N,d(T){T&&g(e),p=!1,$s($)}}}function Gn(a,e,t){let{group:s}=e;function n(){s.name=this.value,t(0,s)}function i(){s.description=this.value,t(0,s)}return a.$$set=l=>{"group"in l&&t(0,s=l.group)},[s,n,i]}class Fn extends ie{constructor(e){super(),ae(this,e,Gn,Rn,le,{group:0})}}const Bn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],On=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],jn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],zn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],qn=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Nn=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],bs=ze(Bn),xt=ze(On),Pn=ze(jn),Wn=ze(Nn),Jn=ze(qn),is={32655:"NA",32654:"NM",32653:"ND"},Yn=ze(zn);function as(a,e,t){const s=a.slice();return s[6]=e[t],s[8]=t,s}function os(a,e,t){const s=a.slice();return s[6]=e[t],s[8]=t,s}function cs(a){let e,t;return{c(){e=d("h3"),t=ce(a[0]),this.h()},l(s){e=u(s,"H3",{class:!0});var n=D(e);t=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"class","h3")},m(s,n){O(s,e,n),r(e,t)},p(s,n){n&1&&Ce(t,s[0])},d(s){s&&g(e)}}}function Zn(a){let e=a[6].name+"",t;return{c(){t=ce(e)},l(s){t=de(s,e)},m(s,n){O(s,t,n)},p(s,n){n&2&&e!==(e=s[6].name+"")&&Ce(t,e)},d(s){s&&g(t)}}}function ds(a){let e,t,s;function n(l){a[4](l)}let i={name:`tab${a[8]}`,value:a[8],$$slots:{default:[Zn]},$$scope:{ctx:a}};return a[2]!==void 0&&(i.group=a[2]),e=new As({props:i}),ws.push(()=>ys(e,"group",n)),{c(){V(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,f){H(e,l,f),s=!0},p(l,f){const c={};f&34&&(c.$$scope={dirty:f,ctx:l}),!t&&f&4&&(t=!0,c.group=l[2],Ds(()=>t=!1)),e.$set(c)},i(l){s||(E(e.$$.fragment,l),s=!0)},o(l){S(e.$$.fragment,l),s=!1},d(l){R(e,l)}}}function Kn(a){let e,t,s=be(a[1]),n=[];for(let l=0;l<s.length;l+=1)n[l]=ds(as(a,s,l));const i=l=>S(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Qe()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Qe()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);O(l,e,f),t=!0},p(l,f){if(f&6){s=be(l[1]);let c;for(c=0;c<s.length;c+=1){const h=as(l,s,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=ds(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(vt(),c=s.length;c<n.length;c+=1)i(c);ht()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)E(n[f]);t=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)S(n[f]);t=!1},d(l){l&&g(e),Xe(n,l)}}}function us(a){let e,t;return e=new nt({props:{language:a[6].language,code:a[6].code}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p(s,n){const i={};n&2&&(i.language=s[6].language),n&2&&(i.code=s[6].code),e.$set(i)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function fs(a){let e,t,s=a[2]===a[8]&&us(a);return{c(){s&&s.c(),e=Qe()},l(n){s&&s.l(n),e=Qe()},m(n,i){s&&s.m(n,i),O(n,e,i),t=!0},p(n,i){n[2]===n[8]?s?(s.p(n,i),i&4&&E(s,1)):(s=us(n),s.c(),E(s,1),s.m(e.parentNode,e)):s&&(vt(),S(s,1,1,()=>{s=null}),ht())},i(n){t||(E(s),t=!0)},o(n){S(s),t=!1},d(n){n&&g(e),s&&s.d(n)}}}function Qn(a){let e,t,s=be(a[1]),n=[];for(let l=0;l<s.length;l+=1)n[l]=fs(os(a,s,l));const i=l=>S(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Qe()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Qe()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);O(l,e,f),t=!0},p(l,f){if(f&6){s=be(l[1]);let c;for(c=0;c<s.length;c+=1){const h=os(l,s,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=fs(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(vt(),c=s.length;c<n.length;c+=1)i(c);ht()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)E(n[f]);t=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)S(n[f]);t=!1},d(l){l&&g(e),Xe(n,l)}}}function Xn(a){let e,t,s,n,i,l,f,c,h,m=a[0]&&cs(a);const C=a[3].default,v=xs(C,a,a[5],null);return c=new Vs({props:{$$slots:{panel:[Qn],default:[Kn]},$$scope:{ctx:a}}}),{c(){e=d("div"),t=d("div"),m&&m.c(),s=x(),n=d("div"),i=d("div"),v&&v.c(),l=x(),f=d("div"),V(c.$$.fragment),this.h()},l(b){e=u(b,"DIV",{class:!0});var p=D(e);t=u(p,"DIV",{class:!0});var $=D(t);m&&m.l($),$.forEach(g),s=_(p),n=u(p,"DIV",{class:!0});var T=D(n);i=u(T,"DIV",{class:!0});var w=D(i);v&&v.l(w),w.forEach(g),l=_(T),f=u(T,"DIV",{class:!0});var I=D(f);A(c.$$.fragment,I),I.forEach(g),T.forEach(g),p.forEach(g),this.h()},h(){o(t,"class","py-5"),o(i,"class","flex-1"),o(f,"class","flex-1"),o(n,"class","flex card p-5 gap-10"),o(e,"class","")},m(b,p){O(b,e,p),r(e,t),m&&m.m(t,null),r(e,s),r(e,n),r(n,i),v&&v.m(i,null),r(n,l),r(n,f),H(c,f,null),h=!0},p(b,[p]){b[0]?m?m.p(b,p):(m=cs(b),m.c(),m.m(t,null)):m&&(m.d(1),m=null),v&&v.p&&(!h||p&32)&&_s(v,C,b,b[5],h?Ts(C,b[5],p,null):Cs(b[5]),null);const $={};p&38&&($.$$scope={dirty:p,ctx:b}),c.$set($)},i(b){h||(E(v,b),E(c.$$.fragment,b),h=!0)},o(b){S(v,b),S(c.$$.fragment,b),h=!1},d(b){b&&g(e),m&&m.d(),v&&v.d(b),R(c)}}}function er(a,e,t){let{$$slots:s={},$$scope:n}=e,{title:i}=e,{tabs:l=[]}=e,f=0;function c(h){f=h,t(2,f)}return a.$$set=h=>{"title"in h&&t(0,i=h.title),"tabs"in h&&t(1,l=h.tabs),"$$scope"in h&&t(5,n=h.$$scope)},[i,l,f,s,c,n]}class _t extends ie{constructor(e){super(),ae(this,e,er,Xn,le,{title:0,tabs:1})}}function tr(a){let e,t;return e=new Te({props:{config:a[0]}}),e.$on("action",a[1]),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function sr(a){let e,t,s;return t=new _t({props:{title:"CRUD",tabs:a[2],$$slots:{default:[tr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","CRUD")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&32&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function nr(a,e,t){let s;vs(a,xt,c=>t(3,s=c));const n=Es(),i={id:"userGroupCRUD",toggle:!0,data:bs,resizable:"both",rowHeight:40,exportable:!0,columns:{name:{minWidth:200}},optionsComponent:Sn},l=c=>{const{type:h,row:m}=c.detail;switch(h){case"CREATE":n.trigger({type:"component",title:`Add user to Group ${m.id}`,component:{ref:kn,props:{users:s.filter(C=>C.group!==m.name),group:m.name}}});break;case"READ":n.trigger({type:"component",title:`Users in Group ${m.id}`,component:{ref:Hn,props:{users:s.filter(C=>C.group===m.name),group:m.name}}});break;case"UPDATE":n.trigger({type:"component",title:`Edit Group ${m.id}`,component:{ref:Fn,props:{group:m}}});break;case"DELETE":n.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${m.name}</strong>?`,response:C=>console.log("response:",C)});break}},f=[{name:"Svelte",language:"html",code:cn},{name:"tableCRUDActions",language:"typescript",code:dn},{name:"optionsComponent",language:"html",code:mn},{name:"data",language:"typescript",code:$t+`
`+hs},{name:"AddUser.svelte",language:"html",code:un},{name:"ShowUsers.svelte",language:"html",code:fn},{name:"EditGroup.svelte",language:"html",code:pn}];return[i,l,f]}class rr extends ie{constructor(e){super(),ae(this,e,nr,sr,le,{})}}function lr(a){let e,t="Odd or even",s,n;return{c(){e=d("button"),e.textContent=t,this.h()},l(i){e=u(i,"BUTTON",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uztya3"&&(e.textContent=t),this.h()},h(){o(e,"class","btn btn-sm variant-filled-secondary")},m(i,l){O(i,e,l),s||(n=gt(e,"click",gs(a[0])),s=!0)},p:N,i:N,o:N,d(i){i&&g(e),s=!1,n()}}}function ir(a,e,t){let{row:s}=e,{dispatchFn:n}=e;const i=()=>{const l=s.id%2===0?"even":"odd";return n({type:l})};return a.$$set=l=>{"row"in l&&t(1,s=l.row),"dispatchFn"in l&&t(2,n=l.dispatchFn)},[i,s,n]}class ar extends ie{constructor(e){super(),ae(this,e,ir,lr,le,{row:1,dispatchFn:2})}}function or(a){let e,t;return e=new Te({props:{config:a[1]}}),e.$on("action",a[2]),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function cr(a){let e,t,s;return t=new _t({props:{title:"Odd or even",tabs:a[0],$$slots:{default:[or]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","usersNoRoles")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&8&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function dr(a){return[[{name:"Svelte",language:"html",code:Ps},{name:"Data",language:"typescript",code:$t},{name:"TableOptions.svelte",language:"html",code:on}],{id:"usersNoRoles",data:xt,optionsComponent:ar,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:Hs,colFilterComponent:Rs},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},n=>{alert(n.detail.type)}]}class ur extends ie{constructor(e){super(),ae(this,e,dr,cr,le,{})}}function fr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function pr(a){let e,t,s;return t=new et({props:{title:"Minimal configuration",svelte:Ns,data:$t,$$slots:{default:[fr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","users")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function mr(a){return[{id:"users",data:xt}]}class gr extends ie{constructor(e){super(),ae(this,e,mr,pr,le,{})}}function vr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function hr(a){let e,t,s;return t=new et({props:{title:"Date",svelte:Ws,data:Js,$$slots:{default:[vr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","usersBD")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function br(a){return[{id:"usersBD",data:Pn,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:t=>t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:t=>t.getTime(),toFilterableValueFn:t=>t}}}}]}class $r extends ie{constructor(e){super(),ae(this,e,br,hr,le,{})}}function xr(a){let e,t;return{c(){e=d("input"),this.h()},l(s){e=u(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){o(e,"type","checkbox"),o(e,"name","isAdmin"),o(e,"id",t=a[1].id),e.checked=a[0],e.disabled=!0},m(s,n){O(s,e,n)},p(s,[n]){n&2&&t!==(t=s[1].id)&&o(e,"id",t),n&1&&(e.checked=s[0])},i:N,o:N,d(s){s&&g(e)}}}function _r(a,e,t){let{value:s}=e,{row:n}=e;return a.$$set=i=>{"value"in i&&t(0,s=i.value),"row"in i&&t(1,n=i.row)},[s,n]}class Cr extends ie{constructor(e){super(),ae(this,e,_r,xr,le,{value:0,row:1})}}function Tr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function wr(a){let e,t,s;return t=new _t({props:{title:"Boolean",tabs:a[1],$$slots:{default:[Tr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","boolean")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function Dr(a){return[{id:"usersAndAdmins",data:Wn,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Cr},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:rn},{name:"Data",language:"typescript",code:ln},{name:"IsAdmin.svelte",language:"html",code:an}]]}class yr extends ie{constructor(e){super(),ae(this,e,Dr,wr,le,{})}}function Ir(a){let e,t;return{c(){e=d("a"),t=ce(a[0]),this.h()},l(s){e=u(s,"A",{href:!0});var n=D(e);t=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"href",a[0])},m(s,n){O(s,e,n),r(e,t)},p(s,[n]){n&1&&Ce(t,s[0]),n&1&&o(e,"href",s[0])},i:N,o:N,d(s){s&&g(e)}}}function Er(a,e,t){let{value:s}=e;return a.$$set=n=>{"value"in n&&t(0,s=n.value)},[s]}class Lr extends ie{constructor(e){super(),ae(this,e,Er,Ir,le,{value:0})}}function Sr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Ur(a){let e,t,s;return t=new _t({props:{title:"URLs",tabs:a[1],$$slots:{default:[Sr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","URLs")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function Mr(a){return[{id:"websites",data:Jn,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:Lr,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:tn},{name:"Data",language:"typescript",code:sn},{name:"URLCell.svelte",language:"html",code:nn}]]}class kr extends ie{constructor(e){super(),ae(this,e,Mr,Ur,le,{})}}function Vr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Ar(a){let e,t,s;return t=new et({props:{title:"Missing values",svelte:Xs,data:en,$$slots:{default:[Vr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","combination")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function Hr(a){return[{id:"usersMissingIDs",data:Yn,columns:{id:{header:"ID",instructions:{toStringFn:t=>t in is?is[t]:t.toString()}}}}]}class Rr extends ie{constructor(e){super(),ae(this,e,Hr,Ar,le,{})}}function Gr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Fr(a){let e,t,s;return t=new et({props:{title:"Table component",svelte:qs,data:hs,$$slots:{default:[Gr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","groups")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function Br(a){return[{id:"userGroups",data:bs,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class Or extends ie{constructor(e){super(),ae(this,e,Br,Fr,le,{})}}function ps(a,e,t){const s=a.slice();return s[1]=e[t],s}function ms(a){let e,t,s=a[1].name+"",n,i,l,f,c=a[1].group+"",h,m;return{c(){e=d("tr"),t=d("td"),n=ce(s),i=x(),l=d("td"),f=d("div"),h=ce(c),m=x()},l(C){e=u(C,"TR",{});var v=D(e);t=u(v,"TD",{});var b=D(t);n=de(b,s),b.forEach(g),i=_(v),l=u(v,"TD",{});var p=D(l);f=u(p,"DIV",{});var $=D(f);h=de($,c),$.forEach(g),p.forEach(g),m=_(v),v.forEach(g)},m(C,v){O(C,e,v),r(e,t),r(t,n),r(e,i),r(e,l),r(l,f),r(f,h),r(e,m)},p(C,v){v&1&&s!==(s=C[1].name+"")&&Ce(n,s),v&1&&c!==(c=C[1].group+"")&&Ce(h,c)},d(C){C&&g(e)}}}function jr(a){let e,t="Used classes are important to include for the table to have a uniform look.",s,n,i,l,f='<tr class="bg-primary-300 dark:bg-primary-500"><th class="!p-2">Group</th> <th class="!p-2">Description</th></tr>',c,h,m=be(a[0]),C=[];for(let v=0;v<m.length;v+=1)C[v]=ms(ps(a,m,v));return{c(){e=d("div"),e.textContent=t,s=x(),n=d("div"),i=d("table"),l=d("thead"),l.innerHTML=f,c=x(),h=d("tbody");for(let v=0;v<C.length;v+=1)C[v].c();this.h()},l(v){e=u(v,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-13bu6yg"&&(e.textContent=t),s=_(v),n=u(v,"DIV",{class:!0});var b=D(n);i=u(b,"TABLE",{class:!0});var p=D(i);l=u(p,"THEAD",{"data-svelte-h":!0}),y(l)!=="svelte-1c1p3f3"&&(l.innerHTML=f),c=_(p),h=u(p,"TBODY",{});var $=D(h);for(let T=0;T<C.length;T+=1)C[T].l($);$.forEach(g),p.forEach(g),b.forEach(g),this.h()},h(){o(e,"class","pb-2"),o(i,"class","table table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10"),o(n,"class","table-container")},m(v,b){O(v,e,b),O(v,s,b),O(v,n,b),r(n,i),r(i,l),r(i,c),r(i,h);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(h,null)},p(v,b){if(b&1){m=be(v[0]);let p;for(p=0;p<m.length;p+=1){const $=ps(v,m,p);C[p]?C[p].p($,b):(C[p]=ms($),C[p].c(),C[p].m(h,null))}for(;p<C.length;p+=1)C[p].d(1);C.length=m.length}},d(v){v&&(g(e),g(s),g(n)),Xe(C,v)}}}function zr(a){let e,t,s;return t=new et({props:{title:"Simple table without Table component",svelte:zs,data:$t,$$slots:{default:[jr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","simpleTable")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&17&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function qr(a,e,t){let s;return vs(a,xt,n=>t(0,s=n)),[s]}class Nr extends ie{constructor(e){super(),ae(this,e,qr,zr,le,{})}}function Pr(a){let e,t;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p:N,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Wr(a){let e,t,s;return t=new et({props:{title:"Server-side table",svelte:gn,$$slots:{default:[Pr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(t.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","serverTableExample")},m(n,i){O(n,e,i),H(t,e,null),s=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){s||(E(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){n&&g(e),R(t)}}}function Jr(a){return[{id:"serverTable",entityId:3,versionId:-1,data:ze([]),serverSide:!0,URL:"https://dev.bexis2.uni-jena.de/api/datatable/",token:"<your_token>"}]}class Yr extends ie{constructor(e){super(),ae(this,e,Jr,Wr,le,{})}}function Zr(a){let e,t,s="Examples",n,i,l,f,c,h,m,C,v,b="Dispatching Actions",p,$,T,w,I,L,k,G="Complex data types",q,P,se,z,W,ee,Z,Y,K,re,M,j,F,te;return i=new Nr({}),f=new Or({}),h=new gr({}),$=new ur({}),w=new rr({}),P=new $r({}),z=new Rr({}),ee=new kr({}),Y=new yr({}),M=new Yr({}),F=new Is({}),{c(){e=d("div"),t=d("h2"),t.textContent=s,n=x(),V(i.$$.fragment),l=x(),V(f.$$.fragment),c=x(),V(h.$$.fragment),m=x(),C=d("div"),v=d("h2"),v.textContent=b,p=x(),V($.$$.fragment),T=x(),V(w.$$.fragment),I=x(),L=d("div"),k=d("h2"),k.textContent=G,q=x(),V(P.$$.fragment),se=x(),V(z.$$.fragment),W=x(),V(ee.$$.fragment),Z=x(),V(Y.$$.fragment),K=x(),re=d("div"),V(M.$$.fragment),j=x(),V(F.$$.fragment),this.h()},l(U){e=u(U,"DIV",{class:!0});var B=D(e);t=u(B,"H2",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-cjx2zy"&&(t.textContent=s),n=_(B),A(i.$$.fragment,B),l=_(B),A(f.$$.fragment,B),c=_(B),A(h.$$.fragment,B),m=_(B),C=u(B,"DIV",{id:!0,class:!0});var ne=D(C);v=u(ne,"H2",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-1k9ieh2"&&(v.textContent=b),p=_(ne),A($.$$.fragment,ne),T=_(ne),A(w.$$.fragment,ne),ne.forEach(g),I=_(B),L=u(B,"DIV",{id:!0});var J=D(L);k=u(J,"H2",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-1jb1d8k"&&(k.textContent=G),q=_(J),A(P.$$.fragment,J),se=_(J),A(z.$$.fragment,J),W=_(J),A(ee.$$.fragment,J),Z=_(J),A(Y.$$.fragment,J),J.forEach(g),K=_(B),re=u(B,"DIV",{id:!0});var oe=D(re);A(M.$$.fragment,oe),oe.forEach(g),B.forEach(g),j=_(U),A(F.$$.fragment,U),this.h()},h(){o(t,"class","h2"),o(v,"class","h2"),o(C,"id","actionDispatchersExamples"),o(C,"class","my-20"),o(k,"class","h2"),o(L,"id","complexTypes"),o(re,"id","Test"),o(e,"class","grid gap-1")},m(U,B){O(U,e,B),r(e,t),r(e,n),H(i,e,null),r(e,l),H(f,e,null),r(e,c),H(h,e,null),r(e,m),r(e,C),r(C,v),r(C,p),H($,C,null),r(C,T),H(w,C,null),r(e,I),r(e,L),r(L,k),r(L,q),H(P,L,null),r(L,se),H(z,L,null),r(L,W),H(ee,L,null),r(L,Z),H(Y,L,null),r(e,K),r(e,re),H(M,re,null),O(U,j,B),H(F,U,B),te=!0},p:N,i(U){te||(E(i.$$.fragment,U),E(f.$$.fragment,U),E(h.$$.fragment,U),E($.$$.fragment,U),E(w.$$.fragment,U),E(P.$$.fragment,U),E(z.$$.fragment,U),E(ee.$$.fragment,U),E(Y.$$.fragment,U),E(M.$$.fragment,U),E(F.$$.fragment,U),te=!0)},o(U){S(i.$$.fragment,U),S(f.$$.fragment,U),S(h.$$.fragment,U),S($.$$.fragment,U),S(w.$$.fragment,U),S(P.$$.fragment,U),S(z.$$.fragment,U),S(ee.$$.fragment,U),S(Y.$$.fragment,U),S(M.$$.fragment,U),S(F.$$.fragment,U),te=!1},d(U){U&&(g(e),g(j)),R(i),R(f),R(h),R($),R(w),R(P),R(z),R(ee),R(Y),R(M),R(F,U)}}}class Kr extends ie{constructor(e){super(),ae(this,e,null,Zr,le,{})}}function Qr(a){let e,t,s,n,i="on:action",l,f,c="(action: CustomEvent<any>) => {}",h,m,C,v='To dispatch actions and listen to dispatchers you need to create a table with your own <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> component.',b,p,$,T='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> will get 2 props:',w,I,L='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',k,G,q,P,se="dispatchFn:",z,W,ee="(obj: any) => dispatch('action', obj)",Z,Y,K,re=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`;return{c(){e=d("div"),t=d("div"),s=d("div"),n=d("h3"),n.textContent=i,l=x(),f=d("h3"),h=ce(c),m=x(),C=d("p"),C.innerHTML=v,b=x(),p=d("div"),$=d("p"),$.innerHTML=T,w=x(),I=d("div"),I.innerHTML=L,k=x(),G=d("div"),q=d("div"),P=d("div"),P.textContent=se,z=x(),W=d("div"),Z=ce(ee),Y=x(),K=d("p"),K.innerHTML=re,this.h()},l(M){e=u(M,"DIV",{class:!0});var j=D(e);t=u(j,"DIV",{class:!0,id:!0});var F=D(t);s=u(F,"DIV",{class:!0});var te=D(s);n=u(te,"H3",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-gluzn7"&&(n.textContent=i),l=_(te),f=u(te,"H3",{class:!0});var U=D(f);h=de(U,c),U.forEach(g),te.forEach(g),m=_(F),C=u(F,"P",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-jcdyxg"&&(C.innerHTML=v),b=_(F),p=u(F,"DIV",{class:!0});var B=D(p);$=u(B,"P",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-f80bs7"&&($.innerHTML=T),w=_(B),I=u(B,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-6bma7r"&&(I.innerHTML=L),k=_(B),G=u(B,"DIV",{class:!0});var ne=D(G);q=u(ne,"DIV",{class:!0});var J=D(q);P=u(J,"DIV",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-efz5t5"&&(P.textContent=se),z=_(J),W=u(J,"DIV",{class:!0});var oe=D(W);Z=de(oe,ee),oe.forEach(g),J.forEach(g),Y=_(ne),K=u(ne,"P",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-2ll7ks"&&(K.innerHTML=re),ne.forEach(g),B.forEach(g),F.forEach(g),j.forEach(g),this.h()},h(){o(n,"class","italic font-semibold"),o(f,"class","font-semibold"),o(s,"class","flex gap-3 h3"),o(C,"class","text-xl underline"),o($,"class","text-xl"),o(I,"class","items-center mt-2"),o(P,"class","italic"),o(W,"class","font-bold"),o(q,"class","flex gap-2"),o(K,"class","text-xl pl-10"),o(G,"class","items-center mt-2"),o(p,"class","mt-5"),o(t,"class","grid gap-2"),o(t,"id","actionDispatchersDocs"),o(e,"class","grid gap-5")},m(M,j){O(M,e,j),r(e,t),r(t,s),r(s,n),r(s,l),r(s,f),r(f,h),r(t,m),r(t,C),r(t,b),r(t,p),r(p,$),r(p,w),r(p,I),r(p,k),r(p,G),r(G,q),r(q,P),r(q,z),r(q,W),r(W,Z),r(G,Y),r(G,K)},p:N,i:N,o:N,d(M){M&&g(e)}}}class Xr extends ie{constructor(e){super(),ae(this,e,null,Qr,le,{})}}function el(a){let e,t,s,n="Table",i,l,f="Props",c,h,m,C,v="Types",b,p,$,T,w,I,L,k,G,q,P,se="Action Dispatchers",z,W,ee,Z,Y,K,re;return h=new js({}),p=new bn({}),T=new _n({}),I=new wn({}),k=new In({}),W=new Xr({}),Z=new Kr({}),{c(){e=d("div"),t=d("div"),s=d("h1"),s.textContent=n,i=x(),l=d("h2"),l.textContent=f,c=x(),V(h.$$.fragment),m=x(),C=d("h2"),C.textContent=v,b=x(),V(p.$$.fragment),$=x(),V(T.$$.fragment),w=x(),V(I.$$.fragment),L=x(),V(k.$$.fragment),G=x(),q=d("div"),P=d("h2"),P.textContent=se,z=x(),V(W.$$.fragment),ee=x(),V(Z.$$.fragment),this.h()},l(M){e=u(M,"DIV",{class:!0});var j=D(e);t=u(j,"DIV",{class:!0});var F=D(t);s=u(F,"H1",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-1iqv81h"&&(s.textContent=n),i=_(F),l=u(F,"H2",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-qeq1bp"&&(l.textContent=f),c=_(F),A(h.$$.fragment,F),m=_(F),C=u(F,"H2",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-uxqqy2"&&(C.textContent=v),b=_(F),A(p.$$.fragment,F),F.forEach(g),$=_(j),A(T.$$.fragment,j),w=_(j),A(I.$$.fragment,j),L=_(j),A(k.$$.fragment,j),G=_(j),q=u(j,"DIV",{class:!0});var te=D(q);P=u(te,"H2",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-5p51xv"&&(P.textContent=se),z=_(te),A(W.$$.fragment,te),te.forEach(g),ee=_(j),A(Z.$$.fragment,j),j.forEach(g),this.h()},h(){o(s,"class","font-bold !text-6xl"),o(l,"class","h2"),o(C,"class","h2"),o(t,"class","grid gap-5"),o(P,"class","h2"),o(q,"class","grid gap-5"),o(e,"class","grid gap-20 p-10 dark:bg-surface-800")},m(M,j){O(M,e,j),r(e,t),r(t,s),r(t,i),r(t,l),r(t,c),H(h,t,null),r(t,m),r(t,C),r(t,b),H(p,t,null),r(e,$),H(T,e,null),r(e,w),H(I,e,null),r(e,L),H(k,e,null),r(e,G),r(e,q),r(q,P),r(q,z),H(W,q,null),r(e,ee),H(Z,e,null),Y=!0,K||(re=st(Bs.call(null,e,{mode:"generate",scrollTarget:"#page-content"})),K=!0)},p:N,i(M){Y||(E(h.$$.fragment,M),E(p.$$.fragment,M),E(T.$$.fragment,M),E(I.$$.fragment,M),E(k.$$.fragment,M),E(W.$$.fragment,M),E(Z.$$.fragment,M),Y=!0)},o(M){S(h.$$.fragment,M),S(p.$$.fragment,M),S(T.$$.fragment,M),S(I.$$.fragment,M),S(k.$$.fragment,M),S(W.$$.fragment,M),S(Z.$$.fragment,M),Y=!1},d(M){M&&g(e),R(h),R(p),R(T),R(I),R(k),R(W),R(Z),K=!1,re()}}}class ml extends ie{constructor(e){super(),ae(this,e,null,el,le,{})}}export{ml as component};
