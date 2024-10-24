import{s as ie,e as d,a as $,t as ce,c as u,b as D,A as y,g as x,d as de,f as g,m as o,i as F,h as r,n as J,N as st,z as Xe,r as ht,ag as vs,j as Ce,T as Qe,H as xs,l as _s,u as Cs,o as Ts,p as ws,v as Ve,O as Ds,U as ys,k as hs,M as Is}from"../chunks/scheduler.sMk536BX.js";import{S as ae,i as oe,c as V,a as A,m as H,t as E,b as U,d as R,g as nt,e as rt,k as Es}from"../chunks/index.DVMqOFlj.js";/* empty css                             */import{p as bt}from"../chunks/floating-ui.dom.C682Ai4A.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.D1WdMqql.js";import{C as lt}from"../chunks/CodeBlock.DFq04sMv.js";import{M as Ls}from"../chunks/Modal.DoMucQCz.js";import{g as Ss}from"../chunks/stores.taRYlLc5.js";import{e as be}from"../chunks/each.BRKTvA7D.js";import{F as Us,e as Ms,g as ks,d as Vs,c as As}from"../chunks/index.0wZ_3tUm.js";import{w as qe}from"../chunks/index.60cKgXHc.js";import{a as Hs,b as Rs,T as Te,c as Gs,d as Fs,C as et}from"../chunks/CodeContainer.IEMch1TS.js";/* empty css                                                       */import"../chunks/pageStores.D5X99AVs.js";import{s as Bs}from"../chunks/apiStores.CuS3miPC.js";/* empty css                                                     */import"../chunks/eslint4b.es.DLCfYLl9.js";import{a as js,t as Os}from"../chunks/stores.IDOT280b.js";function zs(a,e){var h;let s="h2, h3, h4, h5, h6",t="body",n,i=[];function l(){e!=null&&e.queryElements&&(s=e.queryElements),e!=null&&e.scrollTarget&&(t=e.scrollTarget),n=a.querySelectorAll(s),i=[],f()}function f(){n==null||n.forEach(m=>{var C,v,b,p;if(!m.hasAttribute("data-toc-ignore")){if((e==null?void 0:e.mode)==="generate"&&!m.id){const _=(v=(C=m.firstChild)==null?void 0:C.textContent)==null?void 0:v.trim().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase(),T=e.prefix?`${e.prefix}-`:"",w=e.suffix?`-${e.suffix}`:"";m.id=T+_+w}i.push({element:m.nodeName.toLowerCase(),id:m.id,text:((p=(b=m.firstChild)==null?void 0:b.textContent)==null?void 0:p.trim())||""})}}),js.set(i)}function c(m){if(!(n!=null&&n.length))return;const C=m.target;if(!(C instanceof HTMLElement))throw new Error("scrollTarget is not an HTMLElement");const v=C.getBoundingClientRect().top||0,b=40;for(const p of n)if(p.getBoundingClientRect().top-v+b>=0)return Os.set(p.id)}return l(),t&&((h=document.querySelector(t))==null||h.addEventListener("scroll",c)),{update(m){e=m,l()},destroy(){var m;t&&((m=document.querySelector(t))==null||m.removeEventListener("scroll",c))}}}function qs(a){let e,s,t='<div class="italic div">Underlined attributes are <strong>required</strong>.</div>',n,i,l,f,c="config:",h,m,C="TableConfig <T>",v,b,p,_="Configuration for the table.";return{c(){e=d("div"),s=d("div"),s.innerHTML=t,n=$(),i=d("div"),l=d("div"),f=d("div"),f.textContent=c,h=$(),m=d("div"),v=ce(C),b=$(),p=d("p"),p.textContent=_,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);s=u(w,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),y(s)!=="svelte-14ey4fv"&&(s.innerHTML=t),n=x(w),i=u(w,"DIV",{class:!0});var I=D(i);l=u(I,"DIV",{class:!0});var L=D(l);f=u(L,"DIV",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-w02qqp"&&(f.textContent=c),h=x(L),m=u(L,"DIV",{class:!0});var k=D(m);v=de(k,C),k.forEach(g),L.forEach(g),b=x(I),p=u(I,"P",{class:!0,"data-svelte-h":!0}),y(p)!=="svelte-x8qv5l"&&(p.textContent=_),I.forEach(g),w.forEach(g),this.h()},h(){o(s,"class","grid gap-2"),o(s,"id","tableProps"),o(f,"class","italic underline"),o(m,"class","font-bold"),o(l,"class","flex gap-2"),o(p,"class","text-xl pl-10"),o(i,"class","items-center"),o(e,"class","grid gap-5")},m(T,w){F(T,e,w),r(e,s),r(e,n),r(e,i),r(i,l),r(l,f),r(l,h),r(l,m),r(m,v),r(i,b),r(i,p)},p:J,i:J,o:J,d(T){T&&g(e)}}}class Ns extends ae{constructor(e){super(),oe(this,e,null,qs,ie,{})}}const Ps=`
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
</div>`,Ws=`
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

<Table config={groupConfig} />`,bs=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Js=`
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
				
export const usersStore = writable<User[]>(users);`,Ys=`
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
/>`,Zs=`
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

<Table config={usersBDConfig} />`,Ks=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Qs=`
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
}`,Xs=`
export interface Columns {
	[key: string]: Column;
}`,en=`
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
}`,tn=`
export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}`,sn=`
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

<Table config={usersMissingIDsConfig} />`,nn=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,rn=`
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
`,ln=`
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
`,an=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,on=`
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
<\/script>`,cn=`
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
`,dn=`
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
`,un=`
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
`,fn=`
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
<Modal />`,pn=`
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
`,mn=`
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
`,gn=`
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
`,vn=`
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
`,hn=`
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
`,bn=`
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
`;function $n(a){let e,s,t,n="TableConfig <T>",i,l,f,c="Show type details",h,m,C="Underlined attributes are <strong>required</strong>.",v,b,p,_,T,w='<div class="flex gap-2 underline"><div class="italic">id:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Unique identifier for the table to generate unique IDs for the filters.</p>',I,L,k,B,N="data:",P,ne,z="Writable <T[]>",W,ee,K,Z='A writable store of the type <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">T[]</code>. Any changes in the store will be reflected in the table.',Q,te,M='<div class="flex gap-2"><div class="italic">search:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should have a search bar. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',O,q,Y='<div class="flex gap-2"><div class="italic">exportable:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should be exportable to CSV. <code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>',ue,se,re=`<div class="flex gap-2"><div class="italic">toggle:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">fitToScreen</code>
			toggle should be visible.
			<code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>`,S,j,fe='<div class="flex gap-2"><div class="italic">resizable:</div> <div class="font-bold"><i>&quot;rows&quot;</i>, <i>&quot;columns&quot;</i> or <i>&quot;both&quot;</i></div></div> <p class="text-xl pl-10">Whether rows, columns or both should be resizable. Not resizable by default.</p>',G,le,we='<div class="flex gap-2"><div class="italic">rowHeight:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Sets height for the rows in pixels. If <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> is set to &quot;both&quot; or &quot;rows&quot;, this value can be interpreted as minimum height for the rows.</p>',Ae,$e,xe='<div class="flex gap-2"><div class="italic">fitToScreen:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table takes the whole width. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',Ne,he,Pe='<div class="flex gap-2"><div class="italic">height:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Custom height for the table in pixels.</p>',We,me,pe,ve,tt="optionsComponent:",De,ge,He="SvelteComponent",ye,Je,Re,At=`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> was provided.`,Ct,Ie,Ee,Ge,Ht="pageSizes:",Tt,Ye,Rt="number[]",wt,Dt,Fe,Gt="An array of page sizes to be used for the table. By default, page sizes are 5, 10, 20, 50, 100.",yt,Le,Se,Be,Ft="defaultPageSize:",It,Ze,Bt="number",Et,Lt,je,jt=`Default page size to be used for the table upon rendering. By default, default page size is
			10.`,St,Ue,Me,Oe,Ot="columns:",Ut,Ke,zt="Columns",Mt,kt,ze,qt=`An object with configuration for specific columns. <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">Columns</code>
			object is described below.`,it,Vt,Nt;return p=new lt({props:{language:"ts",code:Qs}}),{c(){e=d("div"),s=d("div"),t=d("h3"),i=ce(n),l=$(),f=d("button"),f.textContent=c,h=$(),m=d("div"),m.innerHTML=C,v=$(),b=d("div"),V(p.$$.fragment),_=$(),T=d("div"),T.innerHTML=w,I=$(),L=d("div"),k=d("div"),B=d("div"),B.textContent=N,P=$(),ne=d("div"),W=ce(z),ee=$(),K=d("p"),K.innerHTML=Z,Q=$(),te=d("div"),te.innerHTML=M,O=$(),q=d("div"),q.innerHTML=Y,ue=$(),se=d("div"),se.innerHTML=re,S=$(),j=d("div"),j.innerHTML=fe,G=$(),le=d("div"),le.innerHTML=we,Ae=$(),$e=d("div"),$e.innerHTML=xe,Ne=$(),he=d("div"),he.innerHTML=Pe,We=$(),me=d("div"),pe=d("div"),ve=d("div"),ve.textContent=tt,De=$(),ge=d("div"),ye=ce(He),Je=$(),Re=d("p"),Re.innerHTML=At,Ct=$(),Ie=d("div"),Ee=d("div"),Ge=d("div"),Ge.textContent=Ht,Tt=$(),Ye=d("div"),wt=ce(Rt),Dt=$(),Fe=d("p"),Fe.textContent=Gt,yt=$(),Le=d("div"),Se=d("div"),Be=d("div"),Be.textContent=Ft,It=$(),Ze=d("div"),Et=ce(Bt),Lt=$(),je=d("p"),je.textContent=jt,St=$(),Ue=d("div"),Me=d("div"),Oe=d("div"),Oe.textContent=Ot,Ut=$(),Ke=d("div"),Mt=ce(zt),kt=$(),ze=d("p"),ze.innerHTML=qt,this.h()},l(_e){e=u(_e,"DIV",{class:!0});var X=D(e);s=u(X,"DIV",{class:!0,id:!0});var ke=D(s);t=u(ke,"H3",{class:!0});var Pt=D(t);i=de(Pt,n),Pt.forEach(g),l=x(ke),f=u(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-8jx6w5"&&(f.textContent=c),h=x(ke),m=u(ke,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-pow2wl"&&(m.innerHTML=C),v=x(ke),b=u(ke,"DIV",{"data-popup":!0});var Wt=D(b);A(p.$$.fragment,Wt),Wt.forEach(g),ke.forEach(g),_=x(X),T=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(T)!=="svelte-1gw1p6o"&&(T.innerHTML=w),I=x(X),L=u(X,"DIV",{class:!0});var at=D(L);k=u(at,"DIV",{class:!0});var ot=D(k);B=u(ot,"DIV",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-1nos06z"&&(B.textContent=N),P=x(ot),ne=u(ot,"DIV",{class:!0});var Jt=D(ne);W=de(Jt,z),Jt.forEach(g),ot.forEach(g),ee=x(at),K=u(at,"P",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-12kv8ew"&&(K.innerHTML=Z),at.forEach(g),Q=x(X),te=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(te)!=="svelte-1atdxi3"&&(te.innerHTML=M),O=x(X),q=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(q)!=="svelte-1lqyjpj"&&(q.innerHTML=Y),ue=x(X),se=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(se)!=="svelte-i5wouq"&&(se.innerHTML=re),S=x(X),j=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-okxdta"&&(j.innerHTML=fe),G=x(X),le=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(le)!=="svelte-38f3nw"&&(le.innerHTML=we),Ae=x(X),$e=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y($e)!=="svelte-wrmk9w"&&($e.innerHTML=xe),Ne=x(X),he=u(X,"DIV",{class:!0,"data-svelte-h":!0}),y(he)!=="svelte-mswvp"&&(he.innerHTML=Pe),We=x(X),me=u(X,"DIV",{class:!0});var ct=D(me);pe=u(ct,"DIV",{class:!0});var dt=D(pe);ve=u(dt,"DIV",{class:!0,"data-svelte-h":!0}),y(ve)!=="svelte-k4lnpy"&&(ve.textContent=tt),De=x(dt),ge=u(dt,"DIV",{class:!0});var Yt=D(ge);ye=de(Yt,He),Yt.forEach(g),dt.forEach(g),Je=x(ct),Re=u(ct,"P",{class:!0,"data-svelte-h":!0}),y(Re)!=="svelte-1stbrjy"&&(Re.innerHTML=At),ct.forEach(g),Ct=x(X),Ie=u(X,"DIV",{class:!0});var ut=D(Ie);Ee=u(ut,"DIV",{class:!0});var ft=D(Ee);Ge=u(ft,"DIV",{class:!0,"data-svelte-h":!0}),y(Ge)!=="svelte-1vi8og4"&&(Ge.textContent=Ht),Tt=x(ft),Ye=u(ft,"DIV",{class:!0});var Zt=D(Ye);wt=de(Zt,Rt),Zt.forEach(g),ft.forEach(g),Dt=x(ut),Fe=u(ut,"P",{class:!0,"data-svelte-h":!0}),y(Fe)!=="svelte-1lldeuo"&&(Fe.textContent=Gt),ut.forEach(g),yt=x(X),Le=u(X,"DIV",{class:!0});var pt=D(Le);Se=u(pt,"DIV",{class:!0});var mt=D(Se);Be=u(mt,"DIV",{class:!0,"data-svelte-h":!0}),y(Be)!=="svelte-6pyrz4"&&(Be.textContent=Ft),It=x(mt),Ze=u(mt,"DIV",{class:!0});var Kt=D(Ze);Et=de(Kt,Bt),Kt.forEach(g),mt.forEach(g),Lt=x(pt),je=u(pt,"P",{class:!0,"data-svelte-h":!0}),y(je)!=="svelte-qswi2h"&&(je.textContent=jt),pt.forEach(g),St=x(X),Ue=u(X,"DIV",{class:!0});var gt=D(Ue);Me=u(gt,"DIV",{class:!0});var vt=D(Me);Oe=u(vt,"DIV",{class:!0,"data-svelte-h":!0}),y(Oe)!=="svelte-1rr4g9w"&&(Oe.textContent=Ot),Ut=x(vt),Ke=u(vt,"DIV",{class:!0});var Qt=D(Ke);Mt=de(Qt,zt),Qt.forEach(g),vt.forEach(g),kt=x(gt),ze=u(gt,"P",{class:!0,"data-svelte-h":!0}),y(ze)!=="svelte-1cm9l0i"&&(ze.innerHTML=qt),gt.forEach(g),X.forEach(g),this.h()},h(){o(t,"class","font-semibold relative w-max h3"),o(f,"class","btn variant-ghost-primary w-min"),o(m,"class","italic div"),o(b,"data-popup","popupClickTableConfig"),o(s,"class","grid gap-2"),o(s,"id","tableConfig"),o(T,"class","items-center"),o(B,"class","italic"),o(ne,"class","font-bold"),o(k,"class","flex gap-2 underline"),o(K,"class","text-xl pl-10"),o(L,"class","items-center"),o(te,"class","items-center"),o(q,"class","items-center"),o(se,"class","items-center"),o(j,"class","items-center"),o(le,"class","items-center"),o($e,"class","items-center"),o(he,"class","items-center"),o(ve,"class","italic"),o(ge,"class","font-bold"),o(pe,"class","flex gap-2"),o(Re,"class","text-xl pl-10"),o(me,"class","items-center"),o(Ge,"class","italic"),o(Ye,"class","font-bold"),o(Ee,"class","flex gap-2"),o(Fe,"class","text-xl pl-10"),o(Ie,"class","items-center"),o(Be,"class","italic"),o(Ze,"class","font-bold"),o(Se,"class","flex gap-2"),o(je,"class","text-xl pl-10"),o(Le,"class","items-center"),o(Oe,"class","italic"),o(Ke,"class","font-bold"),o(Me,"class","flex gap-2"),o(ze,"class","text-xl pl-10"),o(Ue,"class","items-center"),o(e,"class","grid gap-5")},m(_e,X){F(_e,e,X),r(e,s),r(s,t),r(t,i),r(s,l),r(s,f),r(s,h),r(s,m),r(s,v),r(s,b),H(p,b,null),r(e,_),r(e,T),r(e,I),r(e,L),r(L,k),r(k,B),r(k,P),r(k,ne),r(ne,W),r(L,ee),r(L,K),r(e,Q),r(e,te),r(e,O),r(e,q),r(e,ue),r(e,se),r(e,S),r(e,j),r(e,G),r(e,le),r(e,Ae),r(e,$e),r(e,Ne),r(e,he),r(e,We),r(e,me),r(me,pe),r(pe,ve),r(pe,De),r(pe,ge),r(ge,ye),r(me,Je),r(me,Re),r(e,Ct),r(e,Ie),r(Ie,Ee),r(Ee,Ge),r(Ee,Tt),r(Ee,Ye),r(Ye,wt),r(Ie,Dt),r(Ie,Fe),r(e,yt),r(e,Le),r(Le,Se),r(Se,Be),r(Se,It),r(Se,Ze),r(Ze,Et),r(Le,Lt),r(Le,je),r(e,St),r(e,Ue),r(Ue,Me),r(Me,Oe),r(Me,Ut),r(Me,Ke),r(Ke,Mt),r(Ue,kt),r(Ue,ze),it=!0,Vt||(Nt=st(bt.call(null,f,a[0])),Vt=!0)},p:J,i(_e){it||(E(p.$$.fragment,_e),it=!0)},o(_e){U(p.$$.fragment,_e),it=!1},d(_e){_e&&g(e),R(p),Vt=!1,Nt()}}}function xn(a){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class _n extends ae{constructor(e){super(),oe(this,e,xn,$n,ie,{})}}function Cn(a){let e,s,t,n="Columns",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">[key: <strong>string</strong>]:</div> <div class="font-bold">Column</div></div> <p class="text-xl pl-10">Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.</p>`,p,_,T;return m=new lt({props:{language:"ts",code:Xs}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,this.h()},l(w){e=u(w,"DIV",{class:!0});var I=D(e);s=u(I,"DIV",{class:!0,id:!0});var L=D(s);t=u(L,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-16hos7w"&&(t.textContent=n),i=x(L),l=u(L,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-7ff0g6"&&(l.textContent=f),c=x(L),h=u(L,"DIV",{"data-popup":!0});var k=D(h);A(m.$$.fragment,k),k.forEach(g),L.forEach(g),C=x(I),v=u(I,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-z913vv"&&(v.innerHTML=b),I.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumns"),o(s,"class","grid gap-2"),o(s,"id","columns"),o(v,"class","items-center"),o(e,"class","grid gap-5")},m(w,I){F(w,e,I),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),p=!0,_||(T=st(bt.call(null,l,a[0])),_=!0)},p:J,i(w){p||(E(m.$$.fragment,w),p=!0)},o(w){U(m.$$.fragment,w),p=!1},d(w){w&&g(e),R(m),_=!1,T()}}}function Tn(a){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class wn extends ae{constructor(e){super(),oe(this,e,Tn,Cn,ie,{})}}function Dn(a){let e,s,t,n="Column",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">header:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.</p>`,p,_,T='<div class="flex gap-2"><div class="italic">minWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Minimum width in pixels for the column. By default, the column will be as wide as the content.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">fixedWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> property for the column.</p>`,k,B,N=`<div class="flex gap-2"><div class="italic">exclude:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.</p>`,P,ne,z='<div class="flex gap-2"><div class="italic">disableFiltering:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable filtering for the column or not. By default, filtering is enabled.</p>',W,ee,K='<div class="flex gap-2"><div class="italic">disableSorting:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable sorting for the column or not. By default, sorting is enabled.</p>',Z,Q,te=`<div class="flex gap-2"><div class="italic">colFitlerFn:</div> <div class="font-bold"><a href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean">ColumnFilterFn</a></div></div> <p class="text-xl pl-10">Filtering function to be applied on the column. By default, basic number/string filter is
			applied.</p>`,M,O,q=`<div class="flex gap-2"><div class="italic">colFilterComponent:</div> <div class="font-bold">SvelteComponent</div></div> <p class="text-xl pl-10">Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.</p>`,Y,ue,se='<div class="flex gap-2"><div class="italic">instructions:</div> <div class="font-bold">ColumnInstructions</div></div> <p class="text-xl pl-10">Configuration for the column&#39;s appearance, sorting and filtering functionalities.</p>',re,S,j;return m=new lt({props:{language:"ts",code:en}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,p=$(),_=d("div"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),B.innerHTML=N,P=$(),ne=d("div"),ne.innerHTML=z,W=$(),ee=d("div"),ee.innerHTML=K,Z=$(),Q=d("div"),Q.innerHTML=te,M=$(),O=d("div"),O.innerHTML=q,Y=$(),ue=d("div"),ue.innerHTML=se,this.h()},l(fe){e=u(fe,"DIV",{class:!0});var G=D(e);s=u(G,"DIV",{class:!0,id:!0});var le=D(s);t=u(le,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1hrzfml"&&(t.textContent=n),i=x(le),l=u(le,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-xegi0l"&&(l.textContent=f),c=x(le),h=u(le,"DIV",{"data-popup":!0});var we=D(h);A(m.$$.fragment,we),we.forEach(g),le.forEach(g),C=x(G),v=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-b4nczs"&&(v.innerHTML=b),p=x(G),_=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-1mnwd5o"&&(_.innerHTML=T),w=x(G),I=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-aq5rqb"&&(I.innerHTML=L),k=x(G),B=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-hqd23"&&(B.innerHTML=N),P=x(G),ne=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ne)!=="svelte-1ukzcx7"&&(ne.innerHTML=z),W=x(G),ee=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ee)!=="svelte-1xushnp"&&(ee.innerHTML=K),Z=x(G),Q=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(Q)!=="svelte-1sidkmm"&&(Q.innerHTML=te),M=x(G),O=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-jctk25"&&(O.innerHTML=q),Y=x(G),ue=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ue)!=="svelte-mix6fy"&&(ue.innerHTML=se),G.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumn"),o(s,"class","grid gap-2"),o(s,"id","column"),o(v,"class","items-center"),o(_,"class","items-center"),o(I,"class","items-center"),o(B,"class","items-center"),o(ne,"class","items-center"),o(ee,"class","items-center"),o(Q,"class","items-center"),o(O,"class","items-center"),o(ue,"class","items-center"),o(e,"class","grid gap-5")},m(fe,G){F(fe,e,G),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,_),r(e,w),r(e,I),r(e,k),r(e,B),r(e,P),r(e,ne),r(e,W),r(e,ee),r(e,Z),r(e,Q),r(e,M),r(e,O),r(e,Y),r(e,ue),re=!0,S||(j=st(bt.call(null,l,a[0])),S=!0)},p:J,i(fe){re||(E(m.$$.fragment,fe),re=!0)},o(fe){U(m.$$.fragment,fe),re=!1},d(fe){fe&&g(e),R(m),S=!1,j()}}}function yn(a){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class In extends ae{constructor(e){super(),oe(this,e,yn,Dn,ie,{})}}function En(a){let e,s,t,n="ColumnInstructions",i,l,f="Show type details",c,h,m,C,v,b='<div class="flex gap-2"><div class="italic">toStringFn:</div> <div class="font-bold">(value: any) =&gt; string</div></div> <p class="text-xl pl-10">Custom toString function to be applied on the column.</p>',p,_,T='<div class="flex gap-2"><div class="italic">toSortableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number</div></div> <p class="text-xl pl-10">Custom function to return either a string or a number value to have a sortable column.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">toFilterableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number | Date</div></div> <p class="text-xl pl-10">Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.</p>`,k,B,N,P='<div class="italic">renderComponent:</div> <div class="font-bold">SvelteComponent</div>',ne,z,W,ee=`<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code>
				overrides
				<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">toStringFn</code>.`,K,Z,Q='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code> will get 3 props:',te,M,O='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',q,Y,ue='<div class="flex gap-2"><div class="italic">value:</div> <div class="font-bold">any</div></div> <p class="text-xl pl-10">The value of the current cell.</p>',se,re,S,j,fe="dispatchFn:",G,le,we="(obj: any) => dispatch('action', obj)",Ae,$e,xe,Ne=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`,he,Pe,We;return m=new lt({props:{language:"ts",code:tn}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,p=$(),_=d("div"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),N=d("div"),N.innerHTML=P,ne=$(),z=d("div"),W=d("p"),W.innerHTML=ee,K=$(),Z=d("p"),Z.innerHTML=Q,te=$(),M=d("div"),M.innerHTML=O,q=$(),Y=d("div"),Y.innerHTML=ue,se=$(),re=d("div"),S=d("div"),j=d("div"),j.textContent=fe,G=$(),le=d("div"),Ae=ce(we),$e=$(),xe=d("p"),xe.innerHTML=Ne,this.h()},l(me){e=u(me,"DIV",{class:!0});var pe=D(e);s=u(pe,"DIV",{class:!0,id:!0});var ve=D(s);t=u(ve,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-jn2qek"&&(t.textContent=n),i=x(ve),l=u(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1pqc3g6"&&(l.textContent=f),c=x(ve),h=u(ve,"DIV",{"data-popup":!0});var tt=D(h);A(m.$$.fragment,tt),tt.forEach(g),ve.forEach(g),C=x(pe),v=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-gq1s8p"&&(v.innerHTML=b),p=x(pe),_=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-1wjzpok"&&(_.innerHTML=T),w=x(pe),I=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-cnej3m"&&(I.innerHTML=L),k=x(pe),B=u(pe,"DIV",{class:!0});var De=D(B);N=u(De,"DIV",{class:!0,"data-svelte-h":!0}),y(N)!=="svelte-1b798op"&&(N.innerHTML=P),ne=x(De),z=u(De,"DIV",{class:!0});var ge=D(z);W=u(ge,"P",{class:!0,"data-svelte-h":!0}),y(W)!=="svelte-1lchchu"&&(W.innerHTML=ee),K=x(ge),Z=u(ge,"P",{class:!0,"data-svelte-h":!0}),y(Z)!=="svelte-1wsaj1z"&&(Z.innerHTML=Q),te=x(ge),M=u(ge,"DIV",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-6bma7r"&&(M.innerHTML=O),q=x(ge),Y=u(ge,"DIV",{class:!0,"data-svelte-h":!0}),y(Y)!=="svelte-zvgq5h"&&(Y.innerHTML=ue),se=x(ge),re=u(ge,"DIV",{class:!0});var He=D(re);S=u(He,"DIV",{class:!0});var ye=D(S);j=u(ye,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-efz5t5"&&(j.textContent=fe),G=x(ye),le=u(ye,"DIV",{class:!0});var Je=D(le);Ae=de(Je,we),Je.forEach(g),ye.forEach(g),$e=x(He),xe=u(He,"P",{class:!0,"data-svelte-h":!0}),y(xe)!=="svelte-vssxsw"&&(xe.innerHTML=Ne),He.forEach(g),ge.forEach(g),De.forEach(g),pe.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumnInstructions"),o(s,"class","grid gap-2"),o(s,"id","columnInstructions"),o(v,"class","items-center"),o(_,"class","items-center"),o(I,"class","items-center"),o(N,"class","flex gap-2"),o(W,"class","underline"),o(Z,"class",""),o(M,"class","items-center mt-2"),o(Y,"class","items-center mt-2"),o(j,"class","italic"),o(le,"class","font-bold"),o(S,"class","flex gap-2"),o(xe,"class","text-xl pl-10"),o(re,"class","items-center mt-2"),o(z,"class","ml-5"),o(B,"class","items-center mt-5"),o(e,"class","grid gap-5")},m(me,pe){F(me,e,pe),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,_),r(e,w),r(e,I),r(e,k),r(e,B),r(B,N),r(B,ne),r(B,z),r(z,W),r(z,K),r(z,Z),r(z,te),r(z,M),r(z,q),r(z,Y),r(z,se),r(z,re),r(re,S),r(S,j),r(S,G),r(S,le),r(le,Ae),r(re,$e),r(re,xe),he=!0,Pe||(We=st(bt.call(null,l,a[0])),Pe=!0)},p:J,i(me){he||(E(m.$$.fragment,me),he=!0)},o(me){U(m.$$.fragment,me),he=!1},d(me){me&&g(e),R(m),Pe=!1,We()}}}function Ln(a){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Sn extends ae{constructor(e){super(),oe(this,e,Ln,En,ie,{})}}function Xt(a,e,s){const t=a.slice();return t[5]=e[s],t}function es(a){let e,s,t,n,i,l;s=new Us({props:{icon:a[5].icon}});function f(){return a[4](a[5])}return{c(){e=d("button"),V(s.$$.fragment),t=$(),this.h()},l(c){e=u(c,"BUTTON",{title:!0,class:!0});var h=D(e);A(s.$$.fragment,h),t=x(h),h.forEach(g),this.h()},h(){o(e,"title",a[5].type),o(e,"class",`btn btn-sm btn-icon rounded-md ${a[5].color}`)},m(c,h){F(c,e,h),H(s,e,null),r(e,t),n=!0,i||(l=ht(e,"click",vs(f)),i=!0)},p(c,h){a=c},i(c){n||(E(s.$$.fragment,c),n=!0)},o(c){U(s.$$.fragment,c),n=!1},d(c){c&&g(e),R(s),i=!1,l()}}}function Un(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=es(Xt(a,t,l));const i=l=>U(n[l],1,1,()=>{n[l]=null});return{c(){e=d("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=u(l,"DIV",{class:!0});var f=D(e);for(let c=0;c<n.length;c+=1)n[c].l(f);f.forEach(g),this.h()},h(){o(e,"class","flex gap-2 w-min")},m(l,f){F(l,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);s=!0},p(l,[f]){if(f&3){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=Xt(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=es(h),n[c].c(),E(n[c],1),n[c].m(e,null))}for(nt(),c=t.length;c<n.length;c+=1)i(c);rt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)U(n[f]);s=!1},d(l){l&&g(e),Xe(n,l)}}}function Mn(a,e,s){let{row:t}=e,{dispatchFn:n}=e;const i=c=>n({type:c,row:t}),l=[{icon:Ms,color:"variant-filled-primary",type:"CREATE"},{icon:ks,color:"variant-filled-secondary",type:"READ"},{icon:Vs,color:"variant-filled-warning",type:"UPDATE"},{icon:As,color:"variant-filled-error",type:"DELETE"}],f=c=>i(c.type);return a.$$set=c=>{"row"in c&&s(2,t=c.row),"dispatchFn"in c&&s(3,n=c.dispatchFn)},[i,l,t,n,f]}class kn extends ae{constructor(e){super(),oe(this,e,Mn,Un,ie,{row:2,dispatchFn:3})}}function ts(a,e,s){const t=a.slice();return t[2]=e[s],t}function ss(a){let e,s=a[2].name+"",t,n;return{c(){e=d("option"),t=ce(s),this.h()},l(i){e=u(i,"OPTION",{});var l=D(e);t=de(l,s),l.forEach(g),this.h()},h(){e.__value=n=a[2].id,Qe(e,e.__value)},m(i,l){F(i,e,l),r(e,t)},p(i,l){l&1&&s!==(s=i[2].name+"")&&Ce(t,s),l&1&&n!==(n=i[2].id)&&(e.__value=n,Qe(e,e.__value))},d(i){i&&g(e)}}}function Vn(a){let e,s,t,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let p=0;p<v.length;p+=1)b[p]=ss(ts(a,v,p));return{c(){e=d("div"),s=d("label"),t=ce("Select the users you would like to add to the "),n=d("strong"),i=ce(a[1]),l=ce("."),f=$(),c=d("select");for(let p=0;p<b.length;p+=1)b[p].c();h=$(),m=d("div"),m.innerHTML=C,this.h()},l(p){e=u(p,"DIV",{class:!0});var _=D(e);s=u(_,"LABEL",{for:!0});var T=D(s);t=de(T,"Select the users you would like to add to the "),n=u(T,"STRONG",{});var w=D(n);i=de(w,a[1]),w.forEach(g),l=de(T,"."),T.forEach(g),f=x(_),c=u(_,"SELECT",{name:!0,class:!0,id:!0});var I=D(c);for(let L=0;L<b.length;L+=1)b[L].l(I);I.forEach(g),h=x(_),m=u(_,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),_.forEach(g),this.h()},h(){o(s,"for","users"),c.multiple=!0,o(c,"name","users"),o(c,"class","select"),o(c,"id",""),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(p,_){F(p,e,_),r(e,s),r(s,t),r(s,n),r(n,i),r(s,l),r(e,f),r(e,c);for(let T=0;T<b.length;T+=1)b[T]&&b[T].m(c,null);r(e,h),r(e,m)},p(p,[_]){if(_&2&&Ce(i,p[1]),_&1){v=be(p[0]);let T;for(T=0;T<v.length;T+=1){const w=ts(p,v,T);b[T]?b[T].p(w,_):(b[T]=ss(w),b[T].c(),b[T].m(c,null))}for(;T<b.length;T+=1)b[T].d(1);b.length=v.length}},i:J,o:J,d(p){p&&g(e),Xe(b,p)}}}function An(a,e,s){let{users:t}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&s(0,t=i.users),"group"in i&&s(1,n=i.group)},[t,n]}class Hn extends ae{constructor(e){super(),oe(this,e,An,Vn,ie,{users:0,group:1})}}function ns(a,e,s){const t=a.slice();return t[2]=e[s],t}function rs(a){let e,s="No users in this group";return{c(){e=d("p"),e.textContent=s,this.h()},l(t){e=u(t,"P",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-39f32w"&&(e.textContent=s),this.h()},h(){o(e,"class","italic")},m(t,n){F(t,e,n)},p:J,d(t){t&&g(e)}}}function ls(a){let e,s,t=a[2].name+"",n,i;return{c(){e=d("li"),s=ce("- "),n=ce(t),this.h()},l(l){e=u(l,"LI",{class:!0});var f=D(e);s=de(f,"- "),n=de(f,t),f.forEach(g),this.h()},h(){o(e,"class","font-semibold"),e.value=i=a[2].id},m(l,f){F(l,e,f),r(e,s),r(e,n)},p(l,f){f&1&&t!==(t=l[2].name+"")&&Ce(n,t),f&1&&i!==(i=l[2].id)&&(e.value=i)},d(l){l&&g(e)}}}function Rn(a){let e,s,t,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let _=0;_<v.length;_+=1)b[_]=ls(ns(a,v,_));let p=null;return v.length||(p=rs()),{c(){e=d("div"),s=d("label"),t=ce("Users in "),n=d("strong"),i=ce(a[1]),l=ce("."),f=$(),c=d("ul");for(let _=0;_<b.length;_+=1)b[_].c();p&&p.c(),h=$(),m=d("div"),m.innerHTML=C,this.h()},l(_){e=u(_,"DIV",{class:!0});var T=D(e);s=u(T,"LABEL",{for:!0});var w=D(s);t=de(w,"Users in "),n=u(w,"STRONG",{});var I=D(n);i=de(I,a[1]),I.forEach(g),l=de(w,"."),w.forEach(g),f=x(T),c=u(T,"UL",{});var L=D(c);for(let k=0;k<b.length;k+=1)b[k].l(L);p&&p.l(L),L.forEach(g),h=x(T),m=u(T,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),T.forEach(g),this.h()},h(){o(s,"for","users"),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(_,T){F(_,e,T),r(e,s),r(s,t),r(s,n),r(n,i),r(s,l),r(e,f),r(e,c);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(c,null);p&&p.m(c,null),r(e,h),r(e,m)},p(_,[T]){if(T&2&&Ce(i,_[1]),T&1){v=be(_[0]);let w;for(w=0;w<v.length;w+=1){const I=ns(_,v,w);b[w]?b[w].p(I,T):(b[w]=ls(I),b[w].c(),b[w].m(c,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=v.length,!v.length&&p?p.p(_,T):v.length?p&&(p.d(1),p=null):(p=rs(),p.c(),p.m(c,null))}},i:J,o:J,d(_){_&&g(e),Xe(b,_),p&&p.d()}}}function Gn(a,e,s){let{users:t}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&s(0,t=i.users),"group"in i&&s(1,n=i.group)},[t,n]}class Fn extends ae{constructor(e){super(),oe(this,e,Gn,Rn,ie,{users:0,group:1})}}function Bn(a){let e,s,t="Group name",n,i,l,f,c="Group description",h,m,C,v,b='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',p,_;return{c(){e=d("div"),s=d("label"),s.textContent=t,n=$(),i=d("input"),l=$(),f=d("label"),f.textContent=c,h=$(),m=d("input"),C=$(),v=d("div"),v.innerHTML=b,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);s=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(s)!=="svelte-47izbw"&&(s.textContent=t),n=x(w),i=u(w,"INPUT",{type:!0,id:!0,class:!0}),l=x(w),f=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(f)!=="svelte-f6w4je"&&(f.textContent=c),h=x(w),m=u(w,"INPUT",{type:!0,id:!0,class:!0}),C=x(w),v=u(w,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-tp3ijt"&&(v.innerHTML=b),w.forEach(g),this.h()},h(){o(s,"for","groupName"),o(i,"type","text"),o(i,"id","groupName"),o(i,"class","input input-primary"),o(f,"for","groupDescription"),o(m,"type","text"),o(m,"id","groupDescription"),o(m,"class","input input-primary"),o(v,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(T,w){F(T,e,w),r(e,s),r(e,n),r(e,i),Qe(i,a[0].name),r(e,l),r(e,f),r(e,h),r(e,m),Qe(m,a[0].description),r(e,C),r(e,v),p||(_=[ht(i,"input",a[1]),ht(m,"input",a[2])],p=!0)},p(T,[w]){w&1&&i.value!==T[0].name&&Qe(i,T[0].name),w&1&&m.value!==T[0].description&&Qe(m,T[0].description)},i:J,o:J,d(T){T&&g(e),p=!1,xs(_)}}}function jn(a,e,s){let{group:t}=e;function n(){t.name=this.value,s(0,t)}function i(){t.description=this.value,s(0,t)}return a.$$set=l=>{"group"in l&&s(0,t=l.group)},[t,n,i]}class On extends ae{constructor(e){super(),oe(this,e,jn,Bn,ie,{group:0})}}const zn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],qn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Nn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Pn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Wn=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Jn=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],$s=qe(zn),xt=qe(qn),Yn=qe(Nn),Zn=qe(Jn),Kn=qe(Wn),is={32655:"NA",32654:"NM",32653:"ND"},Qn=qe(Pn);function as(a,e,s){const t=a.slice();return t[6]=e[s],t[8]=s,t}function os(a,e,s){const t=a.slice();return t[6]=e[s],t[8]=s,t}function cs(a){let e,s;return{c(){e=d("h3"),s=ce(a[0]),this.h()},l(t){e=u(t,"H3",{class:!0});var n=D(e);s=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"class","h3")},m(t,n){F(t,e,n),r(e,s)},p(t,n){n&1&&Ce(s,t[0])},d(t){t&&g(e)}}}function Xn(a){let e=a[6].name+"",s;return{c(){s=ce(e)},l(t){s=de(t,e)},m(t,n){F(t,s,n)},p(t,n){n&2&&e!==(e=t[6].name+"")&&Ce(s,e)},d(t){t&&g(s)}}}function ds(a){let e,s,t;function n(l){a[4](l)}let i={name:`tab${a[8]}`,value:a[8],$$slots:{default:[Xn]},$$scope:{ctx:a}};return a[2]!==void 0&&(i.group=a[2]),e=new Rs({props:i}),Ds.push(()=>Es(e,"group",n)),{c(){V(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,f){H(e,l,f),t=!0},p(l,f){const c={};f&34&&(c.$$scope={dirty:f,ctx:l}),!s&&f&4&&(s=!0,c.group=l[2],ys(()=>s=!1)),e.$set(c)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}function er(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=ds(as(a,t,l));const i=l=>U(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ve()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Ve()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);F(l,e,f),s=!0},p(l,f){if(f&6){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=as(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=ds(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(nt(),c=t.length;c<n.length;c+=1)i(c);rt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)U(n[f]);s=!1},d(l){l&&g(e),Xe(n,l)}}}function us(a){let e,s;return e=new lt({props:{language:a[6].language,code:a[6].code}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p(t,n){const i={};n&2&&(i.language=t[6].language),n&2&&(i.code=t[6].code),e.$set(i)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function fs(a){let e,s,t=a[2]===a[8]&&us(a);return{c(){t&&t.c(),e=Ve()},l(n){t&&t.l(n),e=Ve()},m(n,i){t&&t.m(n,i),F(n,e,i),s=!0},p(n,i){n[2]===n[8]?t?(t.p(n,i),i&4&&E(t,1)):(t=us(n),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(nt(),U(t,1,1,()=>{t=null}),rt())},i(n){s||(E(t),s=!0)},o(n){U(t),s=!1},d(n){n&&g(e),t&&t.d(n)}}}function tr(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=fs(os(a,t,l));const i=l=>U(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ve()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Ve()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);F(l,e,f),s=!0},p(l,f){if(f&6){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=os(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=fs(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(nt(),c=t.length;c<n.length;c+=1)i(c);rt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)U(n[f]);s=!1},d(l){l&&g(e),Xe(n,l)}}}function sr(a){let e,s,t,n,i,l,f,c,h,m=a[0]&&cs(a);const C=a[3].default,v=_s(C,a,a[5],null);return c=new Hs({props:{$$slots:{panel:[tr],default:[er]},$$scope:{ctx:a}}}),{c(){e=d("div"),s=d("div"),m&&m.c(),t=$(),n=d("div"),i=d("div"),v&&v.c(),l=$(),f=d("div"),V(c.$$.fragment),this.h()},l(b){e=u(b,"DIV",{class:!0});var p=D(e);s=u(p,"DIV",{class:!0});var _=D(s);m&&m.l(_),_.forEach(g),t=x(p),n=u(p,"DIV",{class:!0});var T=D(n);i=u(T,"DIV",{class:!0});var w=D(i);v&&v.l(w),w.forEach(g),l=x(T),f=u(T,"DIV",{class:!0});var I=D(f);A(c.$$.fragment,I),I.forEach(g),T.forEach(g),p.forEach(g),this.h()},h(){o(s,"class","py-5"),o(i,"class","flex-1"),o(f,"class","flex-1"),o(n,"class","flex card p-5 gap-10"),o(e,"class","")},m(b,p){F(b,e,p),r(e,s),m&&m.m(s,null),r(e,t),r(e,n),r(n,i),v&&v.m(i,null),r(n,l),r(n,f),H(c,f,null),h=!0},p(b,[p]){b[0]?m?m.p(b,p):(m=cs(b),m.c(),m.m(s,null)):m&&(m.d(1),m=null),v&&v.p&&(!h||p&32)&&Cs(v,C,b,b[5],h?ws(C,b[5],p,null):Ts(b[5]),null);const _={};p&38&&(_.$$scope={dirty:p,ctx:b}),c.$set(_)},i(b){h||(E(v,b),E(c.$$.fragment,b),h=!0)},o(b){U(v,b),U(c.$$.fragment,b),h=!1},d(b){b&&g(e),m&&m.d(),v&&v.d(b),R(c)}}}function nr(a,e,s){let{$$slots:t={},$$scope:n}=e,{title:i}=e,{tabs:l=[]}=e,f=0;function c(h){f=h,s(2,f)}return a.$$set=h=>{"title"in h&&s(0,i=h.title),"tabs"in h&&s(1,l=h.tabs),"$$scope"in h&&s(5,n=h.$$scope)},[i,l,f,t,c,n]}class _t extends ae{constructor(e){super(),oe(this,e,nr,sr,ie,{title:0,tabs:1})}}function rr(a){let e,s;return e=new Te({props:{config:a[0]}}),e.$on("action",a[1]),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function lr(a){let e,s,t;return s=new _t({props:{title:"CRUD",tabs:a[2],$$slots:{default:[rr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","CRUD")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&32&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function ir(a,e,s){let t;hs(a,xt,c=>s(3,t=c));const n=Ss(),i={id:"userGroupCRUD",toggle:!0,data:$s,resizable:"both",rowHeight:40,exportable:!0,columns:{name:{minWidth:200}},optionsComponent:kn},l=c=>{const{type:h,row:m}=c.detail;switch(h){case"CREATE":n.trigger({type:"component",title:`Add user to Group ${m.id}`,component:{ref:Hn,props:{users:t.filter(C=>C.group!==m.name),group:m.name}}});break;case"READ":n.trigger({type:"component",title:`Users in Group ${m.id}`,component:{ref:Fn,props:{users:t.filter(C=>C.group===m.name),group:m.name}}});break;case"UPDATE":n.trigger({type:"component",title:`Edit Group ${m.id}`,component:{ref:On,props:{group:m}}});break;case"DELETE":n.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${m.name}</strong>?`,response:C=>console.log("response:",C)});break}},f=[{name:"Svelte",language:"html",code:fn},{name:"tableCRUDActions",language:"typescript",code:pn},{name:"optionsComponent",language:"html",code:hn},{name:"data",language:"typescript",code:$t+`
`+bs},{name:"AddUser.svelte",language:"html",code:mn},{name:"ShowUsers.svelte",language:"html",code:gn},{name:"EditGroup.svelte",language:"html",code:vn}];return[i,l,f]}class ar extends ae{constructor(e){super(),oe(this,e,ir,lr,ie,{})}}function or(a){let e,s="Odd or even",t,n;return{c(){e=d("button"),e.textContent=s,this.h()},l(i){e=u(i,"BUTTON",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uztya3"&&(e.textContent=s),this.h()},h(){o(e,"class","btn btn-sm variant-filled-secondary")},m(i,l){F(i,e,l),t||(n=ht(e,"click",vs(a[0])),t=!0)},p:J,i:J,o:J,d(i){i&&g(e),t=!1,n()}}}function cr(a,e,s){let{row:t}=e,{dispatchFn:n}=e;const i=()=>{const l=t.id%2===0?"even":"odd";return n({type:l})};return a.$$set=l=>{"row"in l&&s(1,t=l.row),"dispatchFn"in l&&s(2,n=l.dispatchFn)},[i,t,n]}class dr extends ae{constructor(e){super(),oe(this,e,cr,or,ie,{row:1,dispatchFn:2})}}function ur(a){let e,s;return e=new Te({props:{config:a[1]}}),e.$on("action",a[2]),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function fr(a){let e,s,t;return s=new _t({props:{title:"Odd or even",tabs:a[0],$$slots:{default:[ur]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","usersNoRoles")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&8&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function pr(a){return[[{name:"Svelte",language:"html",code:Ys},{name:"Data",language:"typescript",code:$t},{name:"TableOptions.svelte",language:"html",code:un}],{id:"usersNoRoles",data:xt,optionsComponent:dr,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:Gs,colFilterComponent:Fs},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},n=>{alert(n.detail.type)}]}class mr extends ae{constructor(e){super(),oe(this,e,pr,fr,ie,{})}}function gr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function vr(a){let e,s,t;return s=new et({props:{title:"Minimal configuration",svelte:Js,data:$t,$$slots:{default:[gr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","users")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function hr(a){return[{id:"users",data:xt}]}class br extends ae{constructor(e){super(),oe(this,e,hr,vr,ie,{})}}function $r(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function xr(a){let e,s,t;return s=new et({props:{title:"Date",svelte:Zs,data:Ks,$$slots:{default:[$r]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","usersBD")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function _r(a){return[{id:"usersBD",data:Yn,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:s=>s.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:s=>s.getTime(),toFilterableValueFn:s=>s}}}}]}class Cr extends ae{constructor(e){super(),oe(this,e,_r,xr,ie,{})}}function Tr(a){let e,s;return{c(){e=d("input"),this.h()},l(t){e=u(t,"INPUT",{type:!0,name:!0,title:!0,id:!0}),this.h()},h(){o(e,"type","checkbox"),o(e,"name","isAdmin"),o(e,"title",a[0]),o(e,"id",s=a[1].id),e.checked=a[0],e.disabled=!0},m(t,n){F(t,e,n)},p(t,[n]){n&1&&o(e,"title",t[0]),n&2&&s!==(s=t[1].id)&&o(e,"id",s),n&1&&(e.checked=t[0])},i:J,o:J,d(t){t&&g(e)}}}function wr(a,e,s){let{value:t}=e,{row:n}=e;return a.$$set=i=>{"value"in i&&s(0,t=i.value),"row"in i&&s(1,n=i.row)},[t,n]}class Dr extends ae{constructor(e){super(),oe(this,e,wr,Tr,ie,{value:0,row:1})}}function yr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Ir(a){let e,s,t;return s=new _t({props:{title:"Boolean",tabs:a[1],$$slots:{default:[yr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","boolean")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Er(a){return[{id:"usersAndAdmins",data:Zn,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Dr},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:on},{name:"Data",language:"typescript",code:cn},{name:"IsAdmin.svelte",language:"html",code:dn}]]}class Lr extends ae{constructor(e){super(),oe(this,e,Er,Ir,ie,{})}}function Sr(a){let e,s;return{c(){e=d("a"),s=ce(a[0]),this.h()},l(t){e=u(t,"A",{href:!0});var n=D(e);s=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"href",a[0])},m(t,n){F(t,e,n),r(e,s)},p(t,[n]){n&1&&Ce(s,t[0]),n&1&&o(e,"href",t[0])},i:J,o:J,d(t){t&&g(e)}}}function Ur(a,e,s){let{value:t}=e;return a.$$set=n=>{"value"in n&&s(0,t=n.value)},[t]}class Mr extends ae{constructor(e){super(),oe(this,e,Ur,Sr,ie,{value:0})}}function kr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Vr(a){let e,s,t;return s=new _t({props:{title:"URLs",tabs:a[1],$$slots:{default:[kr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","URLs")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Ar(a){return[{id:"websites",data:Kn,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:Mr,toFilterableValueFn:t=>t.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:rn},{name:"Data",language:"typescript",code:ln},{name:"URLCell.svelte",language:"html",code:an}]]}class Hr extends ae{constructor(e){super(),oe(this,e,Ar,Vr,ie,{})}}function Rr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Gr(a){let e,s,t;return s=new et({props:{title:"Missing values",svelte:sn,data:nn,$$slots:{default:[Rr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","combination")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Fr(a){return[{id:"usersMissingIDs",data:Qn,columns:{id:{header:"ID",instructions:{toStringFn:s=>s in is?is[s]:s.toString()}}}}]}class Br extends ae{constructor(e){super(),oe(this,e,Fr,Gr,ie,{})}}function jr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Or(a){let e,s,t;return s=new et({props:{title:"Table component",svelte:Ws,data:bs,$$slots:{default:[jr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","groups")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function zr(a){return[{id:"userGroups",data:$s,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class qr extends ae{constructor(e){super(),oe(this,e,zr,Or,ie,{})}}function ps(a,e,s){const t=a.slice();return t[1]=e[s],t}function ms(a){let e,s,t=a[1].name+"",n,i,l,f,c=a[1].group+"",h,m;return{c(){e=d("tr"),s=d("td"),n=ce(t),i=$(),l=d("td"),f=d("div"),h=ce(c),m=$()},l(C){e=u(C,"TR",{});var v=D(e);s=u(v,"TD",{});var b=D(s);n=de(b,t),b.forEach(g),i=x(v),l=u(v,"TD",{});var p=D(l);f=u(p,"DIV",{});var _=D(f);h=de(_,c),_.forEach(g),p.forEach(g),m=x(v),v.forEach(g)},m(C,v){F(C,e,v),r(e,s),r(s,n),r(e,i),r(e,l),r(l,f),r(f,h),r(e,m)},p(C,v){v&1&&t!==(t=C[1].name+"")&&Ce(n,t),v&1&&c!==(c=C[1].group+"")&&Ce(h,c)},d(C){C&&g(e)}}}function Nr(a){let e,s="Used classes are important to include for the table to have a uniform look.",t,n,i,l,f='<tr class="bg-primary-300 dark:bg-primary-500"><th class="!p-2">Group</th> <th class="!p-2">Description</th></tr>',c,h,m=be(a[0]),C=[];for(let v=0;v<m.length;v+=1)C[v]=ms(ps(a,m,v));return{c(){e=d("div"),e.textContent=s,t=$(),n=d("div"),i=d("table"),l=d("thead"),l.innerHTML=f,c=$(),h=d("tbody");for(let v=0;v<C.length;v+=1)C[v].c();this.h()},l(v){e=u(v,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-13bu6yg"&&(e.textContent=s),t=x(v),n=u(v,"DIV",{class:!0});var b=D(n);i=u(b,"TABLE",{class:!0});var p=D(i);l=u(p,"THEAD",{"data-svelte-h":!0}),y(l)!=="svelte-1c1p3f3"&&(l.innerHTML=f),c=x(p),h=u(p,"TBODY",{});var _=D(h);for(let T=0;T<C.length;T+=1)C[T].l(_);_.forEach(g),p.forEach(g),b.forEach(g),this.h()},h(){o(e,"class","pb-2"),o(i,"class","table table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10"),o(n,"class","table-container")},m(v,b){F(v,e,b),F(v,t,b),F(v,n,b),r(n,i),r(i,l),r(i,c),r(i,h);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(h,null)},p(v,b){if(b&1){m=be(v[0]);let p;for(p=0;p<m.length;p+=1){const _=ps(v,m,p);C[p]?C[p].p(_,b):(C[p]=ms(_),C[p].c(),C[p].m(h,null))}for(;p<C.length;p+=1)C[p].d(1);C.length=m.length}},d(v){v&&(g(e),g(t),g(n)),Xe(C,v)}}}function Pr(a){let e,s,t;return s=new et({props:{title:"Simple table without Table component",svelte:Ps,data:$t,$$slots:{default:[Nr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","simpleTable")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&17&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Wr(a,e,s){let t;return hs(a,xt,n=>s(0,t=n)),[t]}class Jr extends ae{constructor(e){super(),oe(this,e,Wr,Pr,ie,{})}}function gs(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p(t,n){const i={};n&1&&(i.config=t[0]),e.$set(i)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Yr(a){let e,s,t=a[0]&&gs(a);return{c(){t&&t.c(),e=Ve()},l(n){t&&t.l(n),e=Ve()},m(n,i){t&&t.m(n,i),F(n,e,i),s=!0},p(n,i){n[0]?t?(t.p(n,i),i&1&&E(t,1)):(t=gs(n),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(nt(),U(t,1,1,()=>{t=null}),rt())},i(n){s||(E(t),s=!0)},o(n){U(t),s=!1},d(n){n&&g(e),t&&t.d(n)}}}function Zr(a){let e,s,t;return s=new et({props:{title:"Server-side table",svelte:bn,$$slots:{default:[Yr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","serverTableExample")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&3&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){U(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Kr(a,e,s){let t;return Is(async()=>{Bs("https://dev.bexis2.uni-jena.de/","admin","123456");const n=qe([]);s(0,t={id:"serverTable",data:n,pageSizes:[10,25,50,100],server:{baseUrl:"https://dev.bexis2.uni-jena.de/api/datatable/",entityId:1,versionId:-1}})}),[t]}class Qr extends ae{constructor(e){super(),oe(this,e,Kr,Zr,ie,{})}}function Xr(a){let e,s,t="Examples",n,i,l,f,c,h,m,C,v,b="Dispatching Actions",p,_,T,w,I,L,k,B="Complex data types",N,P,ne,z,W,ee,K,Z,Q,te,M,O="Server-side tables",q,Y,ue,se,re;return i=new Jr({}),f=new qr({}),h=new br({}),_=new mr({}),w=new ar({}),P=new Cr({}),z=new Br({}),ee=new Hr({}),Z=new Lr({}),Y=new Qr({}),se=new Ls({}),{c(){e=d("div"),s=d("h2"),s.textContent=t,n=$(),V(i.$$.fragment),l=$(),V(f.$$.fragment),c=$(),V(h.$$.fragment),m=$(),C=d("div"),v=d("h2"),v.textContent=b,p=$(),V(_.$$.fragment),T=$(),V(w.$$.fragment),I=$(),L=d("div"),k=d("h2"),k.textContent=B,N=$(),V(P.$$.fragment),ne=$(),V(z.$$.fragment),W=$(),V(ee.$$.fragment),K=$(),V(Z.$$.fragment),Q=$(),te=d("div"),M=d("h2"),M.textContent=O,q=$(),V(Y.$$.fragment),ue=$(),V(se.$$.fragment),this.h()},l(S){e=u(S,"DIV",{class:!0});var j=D(e);s=u(j,"H2",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-cjx2zy"&&(s.textContent=t),n=x(j),A(i.$$.fragment,j),l=x(j),A(f.$$.fragment,j),c=x(j),A(h.$$.fragment,j),m=x(j),C=u(j,"DIV",{id:!0,class:!0});var fe=D(C);v=u(fe,"H2",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-1k9ieh2"&&(v.textContent=b),p=x(fe),A(_.$$.fragment,fe),T=x(fe),A(w.$$.fragment,fe),fe.forEach(g),I=x(j),L=u(j,"DIV",{id:!0});var G=D(L);k=u(G,"H2",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-1jb1d8k"&&(k.textContent=B),N=x(G),A(P.$$.fragment,G),ne=x(G),A(z.$$.fragment,G),W=x(G),A(ee.$$.fragment,G),K=x(G),A(Z.$$.fragment,G),G.forEach(g),Q=x(j),te=u(j,"DIV",{id:!0});var le=D(te);M=u(le,"H2",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-1q6xzmp"&&(M.textContent=O),q=x(le),A(Y.$$.fragment,le),le.forEach(g),j.forEach(g),ue=x(S),A(se.$$.fragment,S),this.h()},h(){o(s,"class","h2"),o(v,"class","h2"),o(C,"id","actionDispatchersExamples"),o(C,"class","my-20"),o(k,"class","h2"),o(L,"id","complexTypes"),o(M,"class","h2"),o(te,"id","Server-side"),o(e,"class","grid gap-1 w-full overflow-auto")},m(S,j){F(S,e,j),r(e,s),r(e,n),H(i,e,null),r(e,l),H(f,e,null),r(e,c),H(h,e,null),r(e,m),r(e,C),r(C,v),r(C,p),H(_,C,null),r(C,T),H(w,C,null),r(e,I),r(e,L),r(L,k),r(L,N),H(P,L,null),r(L,ne),H(z,L,null),r(L,W),H(ee,L,null),r(L,K),H(Z,L,null),r(e,Q),r(e,te),r(te,M),r(te,q),H(Y,te,null),F(S,ue,j),H(se,S,j),re=!0},p:J,i(S){re||(E(i.$$.fragment,S),E(f.$$.fragment,S),E(h.$$.fragment,S),E(_.$$.fragment,S),E(w.$$.fragment,S),E(P.$$.fragment,S),E(z.$$.fragment,S),E(ee.$$.fragment,S),E(Z.$$.fragment,S),E(Y.$$.fragment,S),E(se.$$.fragment,S),re=!0)},o(S){U(i.$$.fragment,S),U(f.$$.fragment,S),U(h.$$.fragment,S),U(_.$$.fragment,S),U(w.$$.fragment,S),U(P.$$.fragment,S),U(z.$$.fragment,S),U(ee.$$.fragment,S),U(Z.$$.fragment,S),U(Y.$$.fragment,S),U(se.$$.fragment,S),re=!1},d(S){S&&(g(e),g(ue)),R(i),R(f),R(h),R(_),R(w),R(P),R(z),R(ee),R(Z),R(Y),R(se,S)}}}class el extends ae{constructor(e){super(),oe(this,e,null,Xr,ie,{})}}function tl(a){let e,s,t,n,i="on:action",l,f,c="(action: CustomEvent<any>) => {}",h,m,C,v='To dispatch actions and listen to dispatchers you need to create a table with your own <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> component.',b,p,_,T='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> will get 2 props:',w,I,L='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',k,B,N,P,ne="dispatchFn:",z,W,ee="(obj: any) => dispatch('action', obj)",K,Z,Q,te=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`;return{c(){e=d("div"),s=d("div"),t=d("div"),n=d("h3"),n.textContent=i,l=$(),f=d("h3"),h=ce(c),m=$(),C=d("p"),C.innerHTML=v,b=$(),p=d("div"),_=d("p"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),N=d("div"),P=d("div"),P.textContent=ne,z=$(),W=d("div"),K=ce(ee),Z=$(),Q=d("p"),Q.innerHTML=te,this.h()},l(M){e=u(M,"DIV",{class:!0});var O=D(e);s=u(O,"DIV",{class:!0,id:!0});var q=D(s);t=u(q,"DIV",{class:!0});var Y=D(t);n=u(Y,"H3",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-gluzn7"&&(n.textContent=i),l=x(Y),f=u(Y,"H3",{class:!0});var ue=D(f);h=de(ue,c),ue.forEach(g),Y.forEach(g),m=x(q),C=u(q,"P",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-jcdyxg"&&(C.innerHTML=v),b=x(q),p=u(q,"DIV",{class:!0});var se=D(p);_=u(se,"P",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-f80bs7"&&(_.innerHTML=T),w=x(se),I=u(se,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-6bma7r"&&(I.innerHTML=L),k=x(se),B=u(se,"DIV",{class:!0});var re=D(B);N=u(re,"DIV",{class:!0});var S=D(N);P=u(S,"DIV",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-efz5t5"&&(P.textContent=ne),z=x(S),W=u(S,"DIV",{class:!0});var j=D(W);K=de(j,ee),j.forEach(g),S.forEach(g),Z=x(re),Q=u(re,"P",{class:!0,"data-svelte-h":!0}),y(Q)!=="svelte-2ll7ks"&&(Q.innerHTML=te),re.forEach(g),se.forEach(g),q.forEach(g),O.forEach(g),this.h()},h(){o(n,"class","italic font-semibold"),o(f,"class","font-semibold"),o(t,"class","flex gap-3 h3"),o(C,"class","text-xl underline"),o(_,"class","text-xl"),o(I,"class","items-center mt-2"),o(P,"class","italic"),o(W,"class","font-bold"),o(N,"class","flex gap-2"),o(Q,"class","text-xl pl-10"),o(B,"class","items-center mt-2"),o(p,"class","mt-5"),o(s,"class","grid gap-2"),o(s,"id","actionDispatchersDocs"),o(e,"class","grid gap-5")},m(M,O){F(M,e,O),r(e,s),r(s,t),r(t,n),r(t,l),r(t,f),r(f,h),r(s,m),r(s,C),r(s,b),r(s,p),r(p,_),r(p,w),r(p,I),r(p,k),r(p,B),r(B,N),r(N,P),r(N,z),r(N,W),r(W,K),r(B,Z),r(B,Q)},p:J,i:J,o:J,d(M){M&&g(e)}}}class sl extends ae{constructor(e){super(),oe(this,e,null,tl,ie,{})}}function nl(a){let e,s,t,n="Table",i,l,f="Props",c,h,m,C,v="Types",b,p,_,T,w,I,L,k,B,N,P,ne="Action Dispatchers",z,W,ee,K,Z,Q,te;return h=new Ns({}),p=new _n({}),T=new wn({}),I=new In({}),k=new Sn({}),W=new sl({}),K=new el({}),{c(){e=d("div"),s=d("div"),t=d("h1"),t.textContent=n,i=$(),l=d("h2"),l.textContent=f,c=$(),V(h.$$.fragment),m=$(),C=d("h2"),C.textContent=v,b=$(),V(p.$$.fragment),_=$(),V(T.$$.fragment),w=$(),V(I.$$.fragment),L=$(),V(k.$$.fragment),B=$(),N=d("div"),P=d("h2"),P.textContent=ne,z=$(),V(W.$$.fragment),ee=$(),V(K.$$.fragment),this.h()},l(M){e=u(M,"DIV",{class:!0});var O=D(e);s=u(O,"DIV",{class:!0});var q=D(s);t=u(q,"H1",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1iqv81h"&&(t.textContent=n),i=x(q),l=u(q,"H2",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-qeq1bp"&&(l.textContent=f),c=x(q),A(h.$$.fragment,q),m=x(q),C=u(q,"H2",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-uxqqy2"&&(C.textContent=v),b=x(q),A(p.$$.fragment,q),q.forEach(g),_=x(O),A(T.$$.fragment,O),w=x(O),A(I.$$.fragment,O),L=x(O),A(k.$$.fragment,O),B=x(O),N=u(O,"DIV",{class:!0});var Y=D(N);P=u(Y,"H2",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-5p51xv"&&(P.textContent=ne),z=x(Y),A(W.$$.fragment,Y),Y.forEach(g),ee=x(O),A(K.$$.fragment,O),O.forEach(g),this.h()},h(){o(t,"class","font-bold !text-6xl"),o(l,"class","h2"),o(C,"class","h2"),o(s,"class","grid gap-5"),o(P,"class","h2"),o(N,"class","grid gap-5"),o(e,"class","grid gap-20 p-10 dark:bg-surface-800")},m(M,O){F(M,e,O),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),H(h,s,null),r(s,m),r(s,C),r(s,b),H(p,s,null),r(e,_),H(T,e,null),r(e,w),H(I,e,null),r(e,L),H(k,e,null),r(e,B),r(e,N),r(N,P),r(N,z),H(W,N,null),r(e,ee),H(K,e,null),Z=!0,Q||(te=st(zs.call(null,e,{mode:"generate",scrollTarget:"#page-content"})),Q=!0)},p:J,i(M){Z||(E(h.$$.fragment,M),E(p.$$.fragment,M),E(T.$$.fragment,M),E(I.$$.fragment,M),E(k.$$.fragment,M),E(W.$$.fragment,M),E(K.$$.fragment,M),Z=!0)},o(M){U(h.$$.fragment,M),U(p.$$.fragment,M),U(T.$$.fragment,M),U(I.$$.fragment,M),U(k.$$.fragment,M),U(W.$$.fragment,M),U(K.$$.fragment,M),Z=!1},d(M){M&&g(e),R(h),R(p),R(T),R(I),R(k),R(W),R(K),Q=!1,te()}}}class Cl extends ae{constructor(e){super(),oe(this,e,null,nl,ie,{})}}export{Cl as component};
