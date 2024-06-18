import{s as Q,e as u,t as se,a as C,c as f,b as D,d as re,f as v,g as T,A as y,m as c,i as B,h as i,N as We,n as N,z as Ne,r as lt,af as vn,j as ge,B as Oe,C as xn,l as _n,u as Cn,o as Tn,p as wn,v as je,O as Dn,T as yn,k as hn}from"../chunks/scheduler.D2ilrXRr.js";import{S as X,i as ee,c as M,a as A,m as V,t as E,b as S,d as R,g as it,e as ot,k as In}from"../chunks/index.DzxGtcDL.js";/* empty css                             */import{p as at}from"../chunks/floating-ui.dom.hDssupS2.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.B7oRxnxh.js";import{C as Pe}from"../chunks/CodeBlock.lSve3otE.js";import{M as En}from"../chunks/Modal.Iv7gnKaH.js";import{g as Ln}from"../chunks/stores.DIW7sr_6.js";import{e as pe}from"../chunks/each.C5K1i4eY.js";import{F as Sn,e as Un,g as kn,d as Mn,c as An}from"../chunks/index.DIBgrM1d.js";import{w as Re}from"../chunks/index.CJqQti0J.js";import{a as Vn,b as Rn,T as ve,c as Hn,d as Gn,C as ze}from"../chunks/CodeContainer.VODK4Lmd.js";import{a as Fn,t as Bn}from"../chunks/stores.BmeoNOOn.js";function On(o,e){var b;let n="h2, h3, h4, h5, h6",t="body",s,l=[];function r(){e!=null&&e.queryElements&&(n=e.queryElements),e!=null&&e.scrollTarget&&(t=e.scrollTarget),s=o.querySelectorAll(n),l=[],d()}function d(){s==null||s.forEach(m=>{var x,g,h,p;if(!m.hasAttribute("data-toc-ignore")){if((e==null?void 0:e.mode)==="generate"&&!m.id){const $=(g=(x=m.firstChild)==null?void 0:x.textContent)==null?void 0:g.trim().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase(),w=e.prefix?`${e.prefix}-`:"",_=e.suffix?`-${e.suffix}`:"";m.id=w+$+_}l.push({element:m.nodeName.toLowerCase(),id:m.id,text:((p=(h=m.firstChild)==null?void 0:h.textContent)==null?void 0:p.trim())||""})}}),Fn.set(l)}function a(m){if(!(s!=null&&s.length))return;const x=m.target;if(!(x instanceof HTMLElement))throw new Error("scrollTarget is not an HTMLElement");const g=x.getBoundingClientRect().top||0,h=40;for(const p of s)if(p.getBoundingClientRect().top-g+h>=0)return Bn.set(p.id)}return r(),t&&((b=document.querySelector(t))==null||b.addEventListener("scroll",a)),{update(m){e=m,r()},destroy(){var m;t&&((m=document.querySelector(t))==null||m.removeEventListener("scroll",a))}}}const jn=`
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
</div>`,Nn=`
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

<Table config={groupConfig} />`,bn=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,zn=`
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

<Table config={usersConfig} />`,ct=`
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
				
export const usersStore = writable<User[]>(users);`,qn=`
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
/>`,Wn=`
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

<Table config={usersBDConfig} />`,Pn=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Jn=`
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
}`,Yn=`
export interface Columns {
	[key: string]: Column;
}`,Zn=`
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
}`,Kn=`
export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}`,Qn=`
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

<Table config={usersMissingIDsConfig} />`,Xn=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,es=`
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
`,ts=`
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
`,ns=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,ss=`
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
<\/script>`,rs=`
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
`,ls=`
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
`,is=`
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
`,os=`
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
<Modal />`,as=`
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
`,cs=`
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
`,ds=`
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
`,us=`
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
`,fs=`
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
`,ps=`
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
`;function ms(o){let e,n,t,s="TableConfig <T>",l,r,d,a="Show type details",b,m,x="Underlined attributes are <strong>required</strong>.",g,h,p,$,w,_='<div class="flex gap-2 underline"><div class="italic">id:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Unique identifier for the table to generate unique IDs for the filters.</p>',I,U,F,H,Z="data:",O,q,te="Writable <T[]>",z,L,G,P='A writable store of the type <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">T[]</code>. Any changes in the store will be reflected in the table.',J,ie,oe='<div class="flex gap-2"><div class="italic">search:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should have a search bar. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',le,K,ce='<div class="flex gap-2"><div class="italic">exportable:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should be exportable to CSV. <code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>',k,j,ae=`<div class="flex gap-2"><div class="italic">toggle:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">fitToScreen</code>
			toggle should be visible.
			<code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>`,ne,de,fe='<div class="flex gap-2"><div class="italic">resizable:</div> <div class="font-bold"><i>&quot;rows&quot;</i>, <i>&quot;columns&quot;</i> or <i>&quot;both&quot;</i></div></div> <p class="text-xl pl-10">Whether rows, columns or both should be resizable. Not resizable by default.</p>',Y,ue,qe='<div class="flex gap-2"><div class="italic">rowHeight:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Sets height for the rows in pixels. If <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> is set to &quot;both&quot; or &quot;rows&quot;, this value can be interpreted as minimum height for the rows.</p>',ft,ye,Ut='<div class="flex gap-2"><div class="italic">fitToScreen:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table takes the whole width. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',pt,Ie,kt='<div class="flex gap-2"><div class="italic">height:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Custom height for the table in pixels.</p>',mt,he,be,Ee,Mt="optionsComponent:",gt,He,At="SvelteComponent",vt,ht,Le,Vt=`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> was provided.`,bt,$e,xe,Se,Rt="pageSizes:",$t,Ge,Ht="number[]",xt,_t,Ue,Gt="An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20.",Ct,_e,Ce,ke,Ft="defaultPageSize:",Tt,Fe,Bt="number",wt,Dt,Me,Ot=`Default page size to be used for the table upon rendering. By default, default page size is
			10.`,yt,Te,we,Ae,jt="columns:",It,Be,Nt="Columns",Et,Lt,Ve,zt=`An object with configuration for specific columns. <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">Columns</code>
			object is described below.`,Je,St,qt;return p=new Pe({props:{language:"ts",code:Jn}}),{c(){e=u("div"),n=u("div"),t=u("h3"),l=se(s),r=C(),d=u("button"),d.textContent=a,b=C(),m=u("div"),m.innerHTML=x,g=C(),h=u("div"),M(p.$$.fragment),$=C(),w=u("div"),w.innerHTML=_,I=C(),U=u("div"),F=u("div"),H=u("div"),H.textContent=Z,O=C(),q=u("div"),z=se(te),L=C(),G=u("p"),G.innerHTML=P,J=C(),ie=u("div"),ie.innerHTML=oe,le=C(),K=u("div"),K.innerHTML=ce,k=C(),j=u("div"),j.innerHTML=ae,ne=C(),de=u("div"),de.innerHTML=fe,Y=C(),ue=u("div"),ue.innerHTML=qe,ft=C(),ye=u("div"),ye.innerHTML=Ut,pt=C(),Ie=u("div"),Ie.innerHTML=kt,mt=C(),he=u("div"),be=u("div"),Ee=u("div"),Ee.textContent=Mt,gt=C(),He=u("div"),vt=se(At),ht=C(),Le=u("p"),Le.innerHTML=Vt,bt=C(),$e=u("div"),xe=u("div"),Se=u("div"),Se.textContent=Rt,$t=C(),Ge=u("div"),xt=se(Ht),_t=C(),Ue=u("p"),Ue.textContent=Gt,Ct=C(),_e=u("div"),Ce=u("div"),ke=u("div"),ke.textContent=Ft,Tt=C(),Fe=u("div"),wt=se(Bt),Dt=C(),Me=u("p"),Me.textContent=Ot,yt=C(),Te=u("div"),we=u("div"),Ae=u("div"),Ae.textContent=jt,It=C(),Be=u("div"),Et=se(Nt),Lt=C(),Ve=u("p"),Ve.innerHTML=zt,this.h()},l(me){e=f(me,"DIV",{class:!0});var W=D(e);n=f(W,"DIV",{class:!0,id:!0});var De=D(n);t=f(De,"H3",{class:!0});var Wt=D(t);l=re(Wt,s),Wt.forEach(v),r=T(De),d=f(De,"BUTTON",{class:!0,"data-svelte-h":!0}),y(d)!=="svelte-8jx6w5"&&(d.textContent=a),b=T(De),m=f(De,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-pow2wl"&&(m.innerHTML=x),g=T(De),h=f(De,"DIV",{"data-popup":!0});var Pt=D(h);A(p.$$.fragment,Pt),Pt.forEach(v),De.forEach(v),$=T(W),w=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(w)!=="svelte-1gw1p6o"&&(w.innerHTML=_),I=T(W),U=f(W,"DIV",{class:!0});var Ye=D(U);F=f(Ye,"DIV",{class:!0});var Ze=D(F);H=f(Ze,"DIV",{class:!0,"data-svelte-h":!0}),y(H)!=="svelte-1nos06z"&&(H.textContent=Z),O=T(Ze),q=f(Ze,"DIV",{class:!0});var Jt=D(q);z=re(Jt,te),Jt.forEach(v),Ze.forEach(v),L=T(Ye),G=f(Ye,"P",{class:!0,"data-svelte-h":!0}),y(G)!=="svelte-12kv8ew"&&(G.innerHTML=P),Ye.forEach(v),J=T(W),ie=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(ie)!=="svelte-1atdxi3"&&(ie.innerHTML=oe),le=T(W),K=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-1lqyjpj"&&(K.innerHTML=ce),k=T(W),j=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-i5wouq"&&(j.innerHTML=ae),ne=T(W),de=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(de)!=="svelte-okxdta"&&(de.innerHTML=fe),Y=T(W),ue=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(ue)!=="svelte-38f3nw"&&(ue.innerHTML=qe),ft=T(W),ye=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(ye)!=="svelte-wrmk9w"&&(ye.innerHTML=Ut),pt=T(W),Ie=f(W,"DIV",{class:!0,"data-svelte-h":!0}),y(Ie)!=="svelte-mswvp"&&(Ie.innerHTML=kt),mt=T(W),he=f(W,"DIV",{class:!0});var Ke=D(he);be=f(Ke,"DIV",{class:!0});var Qe=D(be);Ee=f(Qe,"DIV",{class:!0,"data-svelte-h":!0}),y(Ee)!=="svelte-k4lnpy"&&(Ee.textContent=Mt),gt=T(Qe),He=f(Qe,"DIV",{class:!0});var Yt=D(He);vt=re(Yt,At),Yt.forEach(v),Qe.forEach(v),ht=T(Ke),Le=f(Ke,"P",{class:!0,"data-svelte-h":!0}),y(Le)!=="svelte-1stbrjy"&&(Le.innerHTML=Vt),Ke.forEach(v),bt=T(W),$e=f(W,"DIV",{class:!0});var Xe=D($e);xe=f(Xe,"DIV",{class:!0});var et=D(xe);Se=f(et,"DIV",{class:!0,"data-svelte-h":!0}),y(Se)!=="svelte-1vi8og4"&&(Se.textContent=Rt),$t=T(et),Ge=f(et,"DIV",{class:!0});var Zt=D(Ge);xt=re(Zt,Ht),Zt.forEach(v),et.forEach(v),_t=T(Xe),Ue=f(Xe,"P",{class:!0,"data-svelte-h":!0}),y(Ue)!=="svelte-15un3vi"&&(Ue.textContent=Gt),Xe.forEach(v),Ct=T(W),_e=f(W,"DIV",{class:!0});var tt=D(_e);Ce=f(tt,"DIV",{class:!0});var nt=D(Ce);ke=f(nt,"DIV",{class:!0,"data-svelte-h":!0}),y(ke)!=="svelte-6pyrz4"&&(ke.textContent=Ft),Tt=T(nt),Fe=f(nt,"DIV",{class:!0});var Kt=D(Fe);wt=re(Kt,Bt),Kt.forEach(v),nt.forEach(v),Dt=T(tt),Me=f(tt,"P",{class:!0,"data-svelte-h":!0}),y(Me)!=="svelte-qswi2h"&&(Me.textContent=Ot),tt.forEach(v),yt=T(W),Te=f(W,"DIV",{class:!0});var st=D(Te);we=f(st,"DIV",{class:!0});var rt=D(we);Ae=f(rt,"DIV",{class:!0,"data-svelte-h":!0}),y(Ae)!=="svelte-1rr4g9w"&&(Ae.textContent=jt),It=T(rt),Be=f(rt,"DIV",{class:!0});var Qt=D(Be);Et=re(Qt,Nt),Qt.forEach(v),rt.forEach(v),Lt=T(st),Ve=f(st,"P",{class:!0,"data-svelte-h":!0}),y(Ve)!=="svelte-1cm9l0i"&&(Ve.innerHTML=zt),st.forEach(v),W.forEach(v),this.h()},h(){c(t,"class","font-semibold relative w-max h3"),c(d,"class","btn variant-ghost-primary w-min"),c(m,"class","italic div"),c(h,"data-popup","popupClickTableConfig"),c(n,"class","grid gap-2"),c(n,"id","tableConfig"),c(w,"class","items-center"),c(H,"class","italic"),c(q,"class","font-bold"),c(F,"class","flex gap-2 underline"),c(G,"class","text-xl pl-10"),c(U,"class","items-center"),c(ie,"class","items-center"),c(K,"class","items-center"),c(j,"class","items-center"),c(de,"class","items-center"),c(ue,"class","items-center"),c(ye,"class","items-center"),c(Ie,"class","items-center"),c(Ee,"class","italic"),c(He,"class","font-bold"),c(be,"class","flex gap-2"),c(Le,"class","text-xl pl-10"),c(he,"class","items-center"),c(Se,"class","italic"),c(Ge,"class","font-bold"),c(xe,"class","flex gap-2"),c(Ue,"class","text-xl pl-10"),c($e,"class","items-center"),c(ke,"class","italic"),c(Fe,"class","font-bold"),c(Ce,"class","flex gap-2"),c(Me,"class","text-xl pl-10"),c(_e,"class","items-center"),c(Ae,"class","italic"),c(Be,"class","font-bold"),c(we,"class","flex gap-2"),c(Ve,"class","text-xl pl-10"),c(Te,"class","items-center"),c(e,"class","grid gap-5")},m(me,W){B(me,e,W),i(e,n),i(n,t),i(t,l),i(n,r),i(n,d),i(n,b),i(n,m),i(n,g),i(n,h),V(p,h,null),i(e,$),i(e,w),i(e,I),i(e,U),i(U,F),i(F,H),i(F,O),i(F,q),i(q,z),i(U,L),i(U,G),i(e,J),i(e,ie),i(e,le),i(e,K),i(e,k),i(e,j),i(e,ne),i(e,de),i(e,Y),i(e,ue),i(e,ft),i(e,ye),i(e,pt),i(e,Ie),i(e,mt),i(e,he),i(he,be),i(be,Ee),i(be,gt),i(be,He),i(He,vt),i(he,ht),i(he,Le),i(e,bt),i(e,$e),i($e,xe),i(xe,Se),i(xe,$t),i(xe,Ge),i(Ge,xt),i($e,_t),i($e,Ue),i(e,Ct),i(e,_e),i(_e,Ce),i(Ce,ke),i(Ce,Tt),i(Ce,Fe),i(Fe,wt),i(_e,Dt),i(_e,Me),i(e,yt),i(e,Te),i(Te,we),i(we,Ae),i(we,It),i(we,Be),i(Be,Et),i(Te,Lt),i(Te,Ve),Je=!0,St||(qt=We(at.call(null,d,o[0])),St=!0)},p:N,i(me){Je||(E(p.$$.fragment,me),Je=!0)},o(me){S(p.$$.fragment,me),Je=!1},d(me){me&&v(e),R(p),St=!1,qt()}}}function gs(o){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class vs extends X{constructor(e){super(),ee(this,e,gs,ms,Q,{})}}function hs(o){let e,n,t,s="Columns",l,r,d="Show type details",a,b,m,x,g,h=`<div class="flex gap-2"><div class="italic">[key: <strong>string</strong>]:</div> <div class="font-bold">Column</div></div> <p class="text-xl pl-10">Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.</p>`,p,$,w;return m=new Pe({props:{language:"ts",code:Yn}}),{c(){e=u("div"),n=u("div"),t=u("h3"),t.textContent=s,l=C(),r=u("button"),r.textContent=d,a=C(),b=u("div"),M(m.$$.fragment),x=C(),g=u("div"),g.innerHTML=h,this.h()},l(_){e=f(_,"DIV",{class:!0});var I=D(e);n=f(I,"DIV",{class:!0,id:!0});var U=D(n);t=f(U,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-16hos7w"&&(t.textContent=s),l=T(U),r=f(U,"BUTTON",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-7ff0g6"&&(r.textContent=d),a=T(U),b=f(U,"DIV",{"data-popup":!0});var F=D(b);A(m.$$.fragment,F),F.forEach(v),U.forEach(v),x=T(I),g=f(I,"DIV",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-z913vv"&&(g.innerHTML=h),I.forEach(v),this.h()},h(){c(t,"class","font-semibold items-center w-max h3"),c(r,"class","btn variant-ghost-primary w-min"),c(b,"data-popup","popupClickColumns"),c(n,"class","grid gap-2"),c(n,"id","columns"),c(g,"class","items-center"),c(e,"class","grid gap-5")},m(_,I){B(_,e,I),i(e,n),i(n,t),i(n,l),i(n,r),i(n,a),i(n,b),V(m,b,null),i(e,x),i(e,g),p=!0,$||(w=We(at.call(null,r,o[0])),$=!0)},p:N,i(_){p||(E(m.$$.fragment,_),p=!0)},o(_){S(m.$$.fragment,_),p=!1},d(_){_&&v(e),R(m),$=!1,w()}}}function bs(o){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class $s extends X{constructor(e){super(),ee(this,e,bs,hs,Q,{})}}function xs(o){let e,n,t,s="Column",l,r,d="Show type details",a,b,m,x,g,h=`<div class="flex gap-2"><div class="italic">header:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.</p>`,p,$,w='<div class="flex gap-2"><div class="italic">minWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Minimum width in pixels for the column. By default, the column will be as wide as the content.</p>',_,I,U=`<div class="flex gap-2"><div class="italic">fixedWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> property for the column.</p>`,F,H,Z=`<div class="flex gap-2"><div class="italic">exclude:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.</p>`,O,q,te='<div class="flex gap-2"><div class="italic">disableFiltering:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable filtering for the column or not. By default, filtering is enabled.</p>',z,L,G='<div class="flex gap-2"><div class="italic">disableSorting:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable sorting for the column or not. By default, sorting is enabled.</p>',P,J,ie=`<div class="flex gap-2"><div class="italic">colFitlerFn:</div> <div class="font-bold"><a href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean">ColumnFilterFn</a></div></div> <p class="text-xl pl-10">Filtering function to be applied on the column. By default, basic number/string filter is
			applied.</p>`,oe,le,K=`<div class="flex gap-2"><div class="italic">colFilterComponent:</div> <div class="font-bold">SvelteComponent</div></div> <p class="text-xl pl-10">Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.</p>`,ce,k,j='<div class="flex gap-2"><div class="italic">instructions:</div> <div class="font-bold">ColumnInstructions</div></div> <p class="text-xl pl-10">Configuration for the column&#39;s appearance, sorting and filtering functionalities.</p>',ae,ne,de;return m=new Pe({props:{language:"ts",code:Zn}}),{c(){e=u("div"),n=u("div"),t=u("h3"),t.textContent=s,l=C(),r=u("button"),r.textContent=d,a=C(),b=u("div"),M(m.$$.fragment),x=C(),g=u("div"),g.innerHTML=h,p=C(),$=u("div"),$.innerHTML=w,_=C(),I=u("div"),I.innerHTML=U,F=C(),H=u("div"),H.innerHTML=Z,O=C(),q=u("div"),q.innerHTML=te,z=C(),L=u("div"),L.innerHTML=G,P=C(),J=u("div"),J.innerHTML=ie,oe=C(),le=u("div"),le.innerHTML=K,ce=C(),k=u("div"),k.innerHTML=j,this.h()},l(fe){e=f(fe,"DIV",{class:!0});var Y=D(e);n=f(Y,"DIV",{class:!0,id:!0});var ue=D(n);t=f(ue,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1hrzfml"&&(t.textContent=s),l=T(ue),r=f(ue,"BUTTON",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-xegi0l"&&(r.textContent=d),a=T(ue),b=f(ue,"DIV",{"data-popup":!0});var qe=D(b);A(m.$$.fragment,qe),qe.forEach(v),ue.forEach(v),x=T(Y),g=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-b4nczs"&&(g.innerHTML=h),p=T(Y),$=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-1mnwd5o"&&($.innerHTML=w),_=T(Y),I=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-aq5rqb"&&(I.innerHTML=U),F=T(Y),H=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(H)!=="svelte-hqd23"&&(H.innerHTML=Z),O=T(Y),q=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(q)!=="svelte-1ukzcx7"&&(q.innerHTML=te),z=T(Y),L=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(L)!=="svelte-1xushnp"&&(L.innerHTML=G),P=T(Y),J=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(J)!=="svelte-1sidkmm"&&(J.innerHTML=ie),oe=T(Y),le=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(le)!=="svelte-jctk25"&&(le.innerHTML=K),ce=T(Y),k=f(Y,"DIV",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-mix6fy"&&(k.innerHTML=j),Y.forEach(v),this.h()},h(){c(t,"class","font-semibold items-center w-max h3"),c(r,"class","btn variant-ghost-primary w-min"),c(b,"data-popup","popupClickColumn"),c(n,"class","grid gap-2"),c(n,"id","column"),c(g,"class","items-center"),c($,"class","items-center"),c(I,"class","items-center"),c(H,"class","items-center"),c(q,"class","items-center"),c(L,"class","items-center"),c(J,"class","items-center"),c(le,"class","items-center"),c(k,"class","items-center"),c(e,"class","grid gap-5")},m(fe,Y){B(fe,e,Y),i(e,n),i(n,t),i(n,l),i(n,r),i(n,a),i(n,b),V(m,b,null),i(e,x),i(e,g),i(e,p),i(e,$),i(e,_),i(e,I),i(e,F),i(e,H),i(e,O),i(e,q),i(e,z),i(e,L),i(e,P),i(e,J),i(e,oe),i(e,le),i(e,ce),i(e,k),ae=!0,ne||(de=We(at.call(null,r,o[0])),ne=!0)},p:N,i(fe){ae||(E(m.$$.fragment,fe),ae=!0)},o(fe){S(m.$$.fragment,fe),ae=!1},d(fe){fe&&v(e),R(m),ne=!1,de()}}}function _s(o){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Cs extends X{constructor(e){super(),ee(this,e,_s,xs,Q,{})}}function Ts(o){let e,n,t,s="ColumnInstructions",l,r,d="Show type details",a,b,m,x,g,h='<div class="flex gap-2"><div class="italic">toStringFn:</div> <div class="font-bold">(value: any) =&gt; string</div></div> <p class="text-xl pl-10">Custom toString function to be applied on the column.</p>',p,$,w='<div class="flex gap-2"><div class="italic">toSortableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number</div></div> <p class="text-xl pl-10">Custom function to return either a string or a number value to have a sortable column.</p>',_,I,U=`<div class="flex gap-2"><div class="italic">toFilterableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number | Date</div></div> <p class="text-xl pl-10">Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.</p>`,F,H,Z=`<div class="flex gap-2"><div class="italic">renderComponent:</div> <div class="font-bold">SvelteComponent</div></div> <div class="ml-5"><p class="underline"><code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code>
				overrides
				<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">toStringFn</code>.</p> <p class="">Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code> will get 2 props:</p> <div class="items-center mt-2"><div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p></div> <div class="items-center mt-2"><div class="flex gap-2"><div class="italic">value:</div> <div class="font-bold">any</div></div> <p class="text-xl pl-10">The value of the current cell.</p></div></div>`,O,q,te;return m=new Pe({props:{language:"ts",code:Kn}}),{c(){e=u("div"),n=u("div"),t=u("h3"),t.textContent=s,l=C(),r=u("button"),r.textContent=d,a=C(),b=u("div"),M(m.$$.fragment),x=C(),g=u("div"),g.innerHTML=h,p=C(),$=u("div"),$.innerHTML=w,_=C(),I=u("div"),I.innerHTML=U,F=C(),H=u("div"),H.innerHTML=Z,this.h()},l(z){e=f(z,"DIV",{class:!0});var L=D(e);n=f(L,"DIV",{class:!0,id:!0});var G=D(n);t=f(G,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-jn2qek"&&(t.textContent=s),l=T(G),r=f(G,"BUTTON",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-1pqc3g6"&&(r.textContent=d),a=T(G),b=f(G,"DIV",{"data-popup":!0});var P=D(b);A(m.$$.fragment,P),P.forEach(v),G.forEach(v),x=T(L),g=f(L,"DIV",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-gq1s8p"&&(g.innerHTML=h),p=T(L),$=f(L,"DIV",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-1wjzpok"&&($.innerHTML=w),_=T(L),I=f(L,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-cnej3m"&&(I.innerHTML=U),F=T(L),H=f(L,"DIV",{class:!0,"data-svelte-h":!0}),y(H)!=="svelte-11m9how"&&(H.innerHTML=Z),L.forEach(v),this.h()},h(){c(t,"class","font-semibold items-center w-max h3"),c(r,"class","btn variant-ghost-primary w-min"),c(b,"data-popup","popupClickColumnInstructions"),c(n,"class","grid gap-2"),c(n,"id","columnInstructions"),c(g,"class","items-center"),c($,"class","items-center"),c(I,"class","items-center"),c(H,"class","items-center mt-5"),c(e,"class","grid gap-5")},m(z,L){B(z,e,L),i(e,n),i(n,t),i(n,l),i(n,r),i(n,a),i(n,b),V(m,b,null),i(e,x),i(e,g),i(e,p),i(e,$),i(e,_),i(e,I),i(e,F),i(e,H),O=!0,q||(te=We(at.call(null,r,o[0])),q=!0)},p:N,i(z){O||(E(m.$$.fragment,z),O=!0)},o(z){S(m.$$.fragment,z),O=!1},d(z){z&&v(e),R(m),q=!1,te()}}}function ws(o){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Ds extends X{constructor(e){super(),ee(this,e,ws,Ts,Q,{})}}function Xt(o,e,n){const t=o.slice();return t[5]=e[n],t}function en(o){let e,n,t,s,l,r;n=new Sn({props:{icon:o[5].icon}});function d(){return o[4](o[5])}return{c(){e=u("button"),M(n.$$.fragment),t=C(),this.h()},l(a){e=f(a,"BUTTON",{class:!0});var b=D(e);A(n.$$.fragment,b),t=T(b),b.forEach(v),this.h()},h(){c(e,"class",`btn btn-sm btn-icon rounded-md ${o[5].color}`)},m(a,b){B(a,e,b),V(n,e,null),i(e,t),s=!0,l||(r=lt(e,"click",vn(d)),l=!0)},p(a,b){o=a},i(a){s||(E(n.$$.fragment,a),s=!0)},o(a){S(n.$$.fragment,a),s=!1},d(a){a&&v(e),R(n),l=!1,r()}}}function ys(o){let e,n,t=pe(o[1]),s=[];for(let r=0;r<t.length;r+=1)s[r]=en(Xt(o,t,r));const l=r=>S(s[r],1,1,()=>{s[r]=null});return{c(){e=u("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=f(r,"DIV",{class:!0});var d=D(e);for(let a=0;a<s.length;a+=1)s[a].l(d);d.forEach(v),this.h()},h(){c(e,"class","flex gap-2 w-min")},m(r,d){B(r,e,d);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);n=!0},p(r,[d]){if(d&3){t=pe(r[1]);let a;for(a=0;a<t.length;a+=1){const b=Xt(r,t,a);s[a]?(s[a].p(b,d),E(s[a],1)):(s[a]=en(b),s[a].c(),E(s[a],1),s[a].m(e,null))}for(it(),a=t.length;a<s.length;a+=1)l(a);ot()}},i(r){if(!n){for(let d=0;d<t.length;d+=1)E(s[d]);n=!0}},o(r){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)S(s[d]);n=!1},d(r){r&&v(e),Ne(s,r)}}}function Is(o,e,n){let{row:t}=e,{dispatchFn:s}=e;const l=a=>s({type:a,row:t}),r=[{icon:Un,color:"variant-filled-primary",type:"CREATE"},{icon:kn,color:"variant-filled-secondary",type:"READ"},{icon:Mn,color:"variant-filled-warning",type:"UPDATE"},{icon:An,color:"variant-filled-error",type:"DELETE"}],d=a=>l(a.type);return o.$$set=a=>{"row"in a&&n(2,t=a.row),"dispatchFn"in a&&n(3,s=a.dispatchFn)},[l,r,t,s,d]}class Es extends X{constructor(e){super(),ee(this,e,Is,ys,Q,{row:2,dispatchFn:3})}}function tn(o,e,n){const t=o.slice();return t[2]=e[n],t}function nn(o){let e,n=o[2].name+"",t,s;return{c(){e=u("option"),t=se(n),this.h()},l(l){e=f(l,"OPTION",{});var r=D(e);t=re(r,n),r.forEach(v),this.h()},h(){e.__value=s=o[2].id,Oe(e,e.__value)},m(l,r){B(l,e,r),i(e,t)},p(l,r){r&1&&n!==(n=l[2].name+"")&&ge(t,n),r&1&&s!==(s=l[2].id)&&(e.__value=s,Oe(e,e.__value))},d(l){l&&v(e)}}}function Ls(o){let e,n,t,s,l,r,d,a,b,m,x='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',g=pe(o[0]),h=[];for(let p=0;p<g.length;p+=1)h[p]=nn(tn(o,g,p));return{c(){e=u("div"),n=u("label"),t=se("Select the users you would like to add to the "),s=u("strong"),l=se(o[1]),r=se("."),d=C(),a=u("select");for(let p=0;p<h.length;p+=1)h[p].c();b=C(),m=u("div"),m.innerHTML=x,this.h()},l(p){e=f(p,"DIV",{class:!0});var $=D(e);n=f($,"LABEL",{for:!0});var w=D(n);t=re(w,"Select the users you would like to add to the "),s=f(w,"STRONG",{});var _=D(s);l=re(_,o[1]),_.forEach(v),r=re(w,"."),w.forEach(v),d=T($),a=f($,"SELECT",{name:!0,class:!0,id:!0});var I=D(a);for(let U=0;U<h.length;U+=1)h[U].l(I);I.forEach(v),b=T($),m=f($,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=x),$.forEach(v),this.h()},h(){c(n,"for","users"),a.multiple=!0,c(a,"name","users"),c(a,"class","select"),c(a,"id",""),c(m,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(p,$){B(p,e,$),i(e,n),i(n,t),i(n,s),i(s,l),i(n,r),i(e,d),i(e,a);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(a,null);i(e,b),i(e,m)},p(p,[$]){if($&2&&ge(l,p[1]),$&1){g=pe(p[0]);let w;for(w=0;w<g.length;w+=1){const _=tn(p,g,w);h[w]?h[w].p(_,$):(h[w]=nn(_),h[w].c(),h[w].m(a,null))}for(;w<h.length;w+=1)h[w].d(1);h.length=g.length}},i:N,o:N,d(p){p&&v(e),Ne(h,p)}}}function Ss(o,e,n){let{users:t}=e,{group:s}=e;return o.$$set=l=>{"users"in l&&n(0,t=l.users),"group"in l&&n(1,s=l.group)},[t,s]}class Us extends X{constructor(e){super(),ee(this,e,Ss,Ls,Q,{users:0,group:1})}}function sn(o,e,n){const t=o.slice();return t[2]=e[n],t}function rn(o){let e,n="No users in this group";return{c(){e=u("p"),e.textContent=n,this.h()},l(t){e=f(t,"P",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-39f32w"&&(e.textContent=n),this.h()},h(){c(e,"class","italic")},m(t,s){B(t,e,s)},p:N,d(t){t&&v(e)}}}function ln(o){let e,n,t=o[2].name+"",s,l;return{c(){e=u("li"),n=se("- "),s=se(t),this.h()},l(r){e=f(r,"LI",{class:!0});var d=D(e);n=re(d,"- "),s=re(d,t),d.forEach(v),this.h()},h(){c(e,"class","font-semibold"),e.value=l=o[2].id},m(r,d){B(r,e,d),i(e,n),i(e,s)},p(r,d){d&1&&t!==(t=r[2].name+"")&&ge(s,t),d&1&&l!==(l=r[2].id)&&(e.value=l)},d(r){r&&v(e)}}}function ks(o){let e,n,t,s,l,r,d,a,b,m,x='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',g=pe(o[0]),h=[];for(let $=0;$<g.length;$+=1)h[$]=ln(sn(o,g,$));let p=null;return g.length||(p=rn()),{c(){e=u("div"),n=u("label"),t=se("Users in "),s=u("strong"),l=se(o[1]),r=se("."),d=C(),a=u("ul");for(let $=0;$<h.length;$+=1)h[$].c();p&&p.c(),b=C(),m=u("div"),m.innerHTML=x,this.h()},l($){e=f($,"DIV",{class:!0});var w=D(e);n=f(w,"LABEL",{for:!0});var _=D(n);t=re(_,"Users in "),s=f(_,"STRONG",{});var I=D(s);l=re(I,o[1]),I.forEach(v),r=re(_,"."),_.forEach(v),d=T(w),a=f(w,"UL",{});var U=D(a);for(let F=0;F<h.length;F+=1)h[F].l(U);p&&p.l(U),U.forEach(v),b=T(w),m=f(w,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=x),w.forEach(v),this.h()},h(){c(n,"for","users"),c(m,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m($,w){B($,e,w),i(e,n),i(n,t),i(n,s),i(s,l),i(n,r),i(e,d),i(e,a);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(a,null);p&&p.m(a,null),i(e,b),i(e,m)},p($,[w]){if(w&2&&ge(l,$[1]),w&1){g=pe($[0]);let _;for(_=0;_<g.length;_+=1){const I=sn($,g,_);h[_]?h[_].p(I,w):(h[_]=ln(I),h[_].c(),h[_].m(a,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=g.length,!g.length&&p?p.p($,w):g.length?p&&(p.d(1),p=null):(p=rn(),p.c(),p.m(a,null))}},i:N,o:N,d($){$&&v(e),Ne(h,$),p&&p.d()}}}function Ms(o,e,n){let{users:t}=e,{group:s}=e;return o.$$set=l=>{"users"in l&&n(0,t=l.users),"group"in l&&n(1,s=l.group)},[t,s]}class As extends X{constructor(e){super(),ee(this,e,Ms,ks,Q,{users:0,group:1})}}function Vs(o){let e,n,t="Group name",s,l,r,d,a="Group description",b,m,x,g,h='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',p,$;return{c(){e=u("div"),n=u("label"),n.textContent=t,s=C(),l=u("input"),r=C(),d=u("label"),d.textContent=a,b=C(),m=u("input"),x=C(),g=u("div"),g.innerHTML=h,this.h()},l(w){e=f(w,"DIV",{class:!0});var _=D(e);n=f(_,"LABEL",{for:!0,"data-svelte-h":!0}),y(n)!=="svelte-47izbw"&&(n.textContent=t),s=T(_),l=f(_,"INPUT",{type:!0,id:!0,class:!0}),r=T(_),d=f(_,"LABEL",{for:!0,"data-svelte-h":!0}),y(d)!=="svelte-f6w4je"&&(d.textContent=a),b=T(_),m=f(_,"INPUT",{type:!0,id:!0,class:!0}),x=T(_),g=f(_,"DIV",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-tp3ijt"&&(g.innerHTML=h),_.forEach(v),this.h()},h(){c(n,"for","groupName"),c(l,"type","text"),c(l,"id","groupName"),c(l,"class","input input-primary"),c(d,"for","groupDescription"),c(m,"type","text"),c(m,"id","groupDescription"),c(m,"class","input input-primary"),c(g,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,_){B(w,e,_),i(e,n),i(e,s),i(e,l),Oe(l,o[0].name),i(e,r),i(e,d),i(e,b),i(e,m),Oe(m,o[0].description),i(e,x),i(e,g),p||($=[lt(l,"input",o[1]),lt(m,"input",o[2])],p=!0)},p(w,[_]){_&1&&l.value!==w[0].name&&Oe(l,w[0].name),_&1&&m.value!==w[0].description&&Oe(m,w[0].description)},i:N,o:N,d(w){w&&v(e),p=!1,xn($)}}}function Rs(o,e,n){let{group:t}=e;function s(){t.name=this.value,n(0,t)}function l(){t.description=this.value,n(0,t)}return o.$$set=r=>{"group"in r&&n(0,t=r.group)},[t,s,l]}class Hs extends X{constructor(e){super(),ee(this,e,Rs,Vs,Q,{group:0})}}const Gs=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Fs=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Bs=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Os=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],js=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Ns=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],$n=Re(Gs),dt=Re(Fs),zs=Re(Bs),qs=Re(Ns),Ws=Re(js),on={32655:"NA",32654:"NM",32653:"ND"},Ps=Re(Os);function an(o,e,n){const t=o.slice();return t[6]=e[n],t[8]=n,t}function cn(o,e,n){const t=o.slice();return t[6]=e[n],t[8]=n,t}function dn(o){let e,n;return{c(){e=u("h3"),n=se(o[0]),this.h()},l(t){e=f(t,"H3",{class:!0});var s=D(e);n=re(s,o[0]),s.forEach(v),this.h()},h(){c(e,"class","h3")},m(t,s){B(t,e,s),i(e,n)},p(t,s){s&1&&ge(n,t[0])},d(t){t&&v(e)}}}function Js(o){let e=o[6].name+"",n;return{c(){n=se(e)},l(t){n=re(t,e)},m(t,s){B(t,n,s)},p(t,s){s&2&&e!==(e=t[6].name+"")&&ge(n,e)},d(t){t&&v(n)}}}function un(o){let e,n,t;function s(r){o[4](r)}let l={name:`tab${o[8]}`,value:o[8],$$slots:{default:[Js]},$$scope:{ctx:o}};return o[2]!==void 0&&(l.group=o[2]),e=new Rn({props:l}),Dn.push(()=>In(e,"group",s)),{c(){M(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,d){V(e,r,d),t=!0},p(r,d){const a={};d&34&&(a.$$scope={dirty:d,ctx:r}),!n&&d&4&&(n=!0,a.group=r[2],yn(()=>n=!1)),e.$set(a)},i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){S(e.$$.fragment,r),t=!1},d(r){R(e,r)}}}function Ys(o){let e,n,t=pe(o[1]),s=[];for(let r=0;r<t.length;r+=1)s[r]=un(an(o,t,r));const l=r=>S(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=je()},l(r){for(let d=0;d<s.length;d+=1)s[d].l(r);e=je()},m(r,d){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(r,d);B(r,e,d),n=!0},p(r,d){if(d&6){t=pe(r[1]);let a;for(a=0;a<t.length;a+=1){const b=an(r,t,a);s[a]?(s[a].p(b,d),E(s[a],1)):(s[a]=un(b),s[a].c(),E(s[a],1),s[a].m(e.parentNode,e))}for(it(),a=t.length;a<s.length;a+=1)l(a);ot()}},i(r){if(!n){for(let d=0;d<t.length;d+=1)E(s[d]);n=!0}},o(r){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)S(s[d]);n=!1},d(r){r&&v(e),Ne(s,r)}}}function fn(o){let e,n;return e=new Pe({props:{language:o[6].language,code:o[6].code}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,s){const l={};s&2&&(l.language=t[6].language),s&2&&(l.code=t[6].code),e.$set(l)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function pn(o){let e,n,t=o[2]===o[8]&&fn(o);return{c(){t&&t.c(),e=je()},l(s){t&&t.l(s),e=je()},m(s,l){t&&t.m(s,l),B(s,e,l),n=!0},p(s,l){s[2]===s[8]?t?(t.p(s,l),l&4&&E(t,1)):(t=fn(s),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(it(),S(t,1,1,()=>{t=null}),ot())},i(s){n||(E(t),n=!0)},o(s){S(t),n=!1},d(s){s&&v(e),t&&t.d(s)}}}function Zs(o){let e,n,t=pe(o[1]),s=[];for(let r=0;r<t.length;r+=1)s[r]=pn(cn(o,t,r));const l=r=>S(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=je()},l(r){for(let d=0;d<s.length;d+=1)s[d].l(r);e=je()},m(r,d){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(r,d);B(r,e,d),n=!0},p(r,d){if(d&6){t=pe(r[1]);let a;for(a=0;a<t.length;a+=1){const b=cn(r,t,a);s[a]?(s[a].p(b,d),E(s[a],1)):(s[a]=pn(b),s[a].c(),E(s[a],1),s[a].m(e.parentNode,e))}for(it(),a=t.length;a<s.length;a+=1)l(a);ot()}},i(r){if(!n){for(let d=0;d<t.length;d+=1)E(s[d]);n=!0}},o(r){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)S(s[d]);n=!1},d(r){r&&v(e),Ne(s,r)}}}function Ks(o){let e,n,t,s,l,r,d,a,b,m=o[0]&&dn(o);const x=o[3].default,g=_n(x,o,o[5],null);return a=new Vn({props:{$$slots:{panel:[Zs],default:[Ys]},$$scope:{ctx:o}}}),{c(){e=u("div"),n=u("div"),m&&m.c(),t=C(),s=u("div"),l=u("div"),g&&g.c(),r=C(),d=u("div"),M(a.$$.fragment),this.h()},l(h){e=f(h,"DIV",{class:!0});var p=D(e);n=f(p,"DIV",{class:!0});var $=D(n);m&&m.l($),$.forEach(v),t=T(p),s=f(p,"DIV",{class:!0});var w=D(s);l=f(w,"DIV",{class:!0});var _=D(l);g&&g.l(_),_.forEach(v),r=T(w),d=f(w,"DIV",{class:!0});var I=D(d);A(a.$$.fragment,I),I.forEach(v),w.forEach(v),p.forEach(v),this.h()},h(){c(n,"class","py-5"),c(l,"class","flex-1"),c(d,"class","flex-1"),c(s,"class","flex card p-5 gap-10"),c(e,"class","")},m(h,p){B(h,e,p),i(e,n),m&&m.m(n,null),i(e,t),i(e,s),i(s,l),g&&g.m(l,null),i(s,r),i(s,d),V(a,d,null),b=!0},p(h,[p]){h[0]?m?m.p(h,p):(m=dn(h),m.c(),m.m(n,null)):m&&(m.d(1),m=null),g&&g.p&&(!b||p&32)&&Cn(g,x,h,h[5],b?wn(x,h[5],p,null):Tn(h[5]),null);const $={};p&38&&($.$$scope={dirty:p,ctx:h}),a.$set($)},i(h){b||(E(g,h),E(a.$$.fragment,h),b=!0)},o(h){S(g,h),S(a.$$.fragment,h),b=!1},d(h){h&&v(e),m&&m.d(),g&&g.d(h),R(a)}}}function Qs(o,e,n){let{$$slots:t={},$$scope:s}=e,{title:l}=e,{tabs:r=[]}=e,d=0;function a(b){d=b,n(2,d)}return o.$$set=b=>{"title"in b&&n(0,l=b.title),"tabs"in b&&n(1,r=b.tabs),"$$scope"in b&&n(5,s=b.$$scope)},[l,r,d,t,a,s]}class ut extends X{constructor(e){super(),ee(this,e,Qs,Ks,Q,{title:0,tabs:1})}}function Xs(o){let e,n;return e=new ve({props:{config:o[0]}}),e.$on("action",o[1]),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function er(o){let e,n,t;return n=new ut({props:{title:"CRUD",tabs:o[2],$$slots:{default:[Xs]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{class:!0,id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","CRUD")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&32&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function tr(o,e,n){let t;hn(o,dt,a=>n(3,t=a));const s=Ln(),l={id:"userGroupCRUD",toggle:!0,data:$n,resizable:"both",rowHeight:40,exportable:!0,columns:{name:{minWidth:200}},optionsComponent:Es},r=a=>{const{type:b,row:m}=a.detail;switch(b){case"CREATE":s.trigger({type:"component",title:`Add user to Group ${m.id}`,component:{ref:Us,props:{users:t.filter(x=>x.group!==m.name),group:m.name}}});break;case"READ":s.trigger({type:"component",title:`Users in Group ${m.id}`,component:{ref:As,props:{users:t.filter(x=>x.group===m.name),group:m.name}}});break;case"UPDATE":s.trigger({type:"component",title:`Edit Group ${m.id}`,component:{ref:Hs,props:{group:m}}});break;case"DELETE":s.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${m.name}</strong>?`,response:x=>console.log("response:",x)});break}},d=[{name:"Svelte",language:"html",code:os},{name:"tableCRUDActions",language:"typescript",code:as},{name:"optionsComponent",language:"html",code:fs},{name:"data",language:"typescript",code:ct+`
`+bn},{name:"AddUser.svelte",language:"html",code:cs},{name:"ShowUsers.svelte",language:"html",code:ds},{name:"EditGroup.svelte",language:"html",code:us}];return[l,r,d]}class nr extends X{constructor(e){super(),ee(this,e,tr,er,Q,{})}}function sr(o){let e,n="Odd or even",t,s;return{c(){e=u("button"),e.textContent=n,this.h()},l(l){e=f(l,"BUTTON",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uztya3"&&(e.textContent=n),this.h()},h(){c(e,"class","btn btn-sm variant-filled-secondary")},m(l,r){B(l,e,r),t||(s=lt(e,"click",vn(o[0])),t=!0)},p:N,i:N,o:N,d(l){l&&v(e),t=!1,s()}}}function rr(o,e,n){let{row:t}=e,{dispatchFn:s}=e;const l=()=>{const r=t.id%2===0?"even":"odd";return s({type:r})};return o.$$set=r=>{"row"in r&&n(1,t=r.row),"dispatchFn"in r&&n(2,s=r.dispatchFn)},[l,t,s]}class lr extends X{constructor(e){super(),ee(this,e,rr,sr,Q,{row:1,dispatchFn:2})}}function ir(o){let e,n;return e=new ve({props:{config:o[1]}}),e.$on("action",o[2]),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function or(o){let e,n,t;return n=new ut({props:{title:"Odd or even",tabs:o[0],$$slots:{default:[ir]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{class:!0,id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","usersNoRoles")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&8&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function ar(o){return[[{name:"Svelte",language:"html",code:qn},{name:"Data",language:"typescript",code:ct},{name:"TableOptions.svelte",language:"html",code:is}],{id:"usersNoRoles",data:dt,optionsComponent:lr,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:Hn,colFilterComponent:Gn},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},s=>{alert(s.detail.type)}]}class cr extends X{constructor(e){super(),ee(this,e,ar,or,Q,{})}}function dr(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function ur(o){let e,n,t;return n=new ze({props:{title:"Minimal configuration",svelte:zn,data:ct,$$slots:{default:[dr]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{class:!0,id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","users")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function fr(o){return[{id:"users",data:dt}]}class pr extends X{constructor(e){super(),ee(this,e,fr,ur,Q,{})}}function mr(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function gr(o){let e,n,t;return n=new ze({props:{title:"Date",svelte:Wn,data:Pn,$$slots:{default:[mr]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","usersBD")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function vr(o){return[{id:"usersBD",data:zs,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:n=>n.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:n=>n.getTime(),toFilterableValueFn:n=>n}}}}]}class hr extends X{constructor(e){super(),ee(this,e,vr,gr,Q,{})}}function br(o){let e,n;return{c(){e=u("input"),this.h()},l(t){e=f(t,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){c(e,"type","checkbox"),c(e,"name","isAdmin"),c(e,"id",n=o[1].id),e.checked=o[0],e.disabled=!0},m(t,s){B(t,e,s)},p(t,[s]){s&2&&n!==(n=t[1].id)&&c(e,"id",n),s&1&&(e.checked=t[0])},i:N,o:N,d(t){t&&v(e)}}}function $r(o,e,n){let{value:t}=e,{row:s}=e;return o.$$set=l=>{"value"in l&&n(0,t=l.value),"row"in l&&n(1,s=l.row)},[t,s]}class xr extends X{constructor(e){super(),ee(this,e,$r,br,Q,{value:0,row:1})}}function _r(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Cr(o){let e,n,t;return n=new ut({props:{title:"Boolean",tabs:o[1],$$slots:{default:[_r]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","boolean")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&4&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function Tr(o){return[{id:"usersAndAdmins",data:qs,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:xr},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:ss},{name:"Data",language:"typescript",code:rs},{name:"IsAdmin.svelte",language:"html",code:ls}]]}class wr extends X{constructor(e){super(),ee(this,e,Tr,Cr,Q,{})}}function Dr(o){let e,n;return{c(){e=u("a"),n=se(o[0]),this.h()},l(t){e=f(t,"A",{href:!0});var s=D(e);n=re(s,o[0]),s.forEach(v),this.h()},h(){c(e,"href",o[0])},m(t,s){B(t,e,s),i(e,n)},p(t,[s]){s&1&&ge(n,t[0]),s&1&&c(e,"href",t[0])},i:N,o:N,d(t){t&&v(e)}}}function yr(o,e,n){let{value:t}=e;return o.$$set=s=>{"value"in s&&n(0,t=s.value)},[t]}class Ir extends X{constructor(e){super(),ee(this,e,yr,Dr,Q,{value:0})}}function Er(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Lr(o){let e,n,t;return n=new ut({props:{title:"URLs",tabs:o[1],$$slots:{default:[Er]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","URLs")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&4&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function Sr(o){return[{id:"websites",data:Ws,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:Ir,toFilterableValueFn:t=>t.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:es},{name:"Data",language:"typescript",code:ts},{name:"URLCell.svelte",language:"html",code:ns}]]}class Ur extends X{constructor(e){super(),ee(this,e,Sr,Lr,Q,{})}}function kr(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Mr(o){let e,n,t;return n=new ze({props:{title:"Missing values",svelte:Qn,data:Xn,$$slots:{default:[kr]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","combination")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function Ar(o){return[{id:"usersMissingIDs",data:Ps,columns:{id:{header:"ID",instructions:{toStringFn:n=>n in on?on[n]:n.toString()}}}}]}class Vr extends X{constructor(e){super(),ee(this,e,Ar,Mr,Q,{})}}function Rr(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Hr(o){let e,n,t;return n=new ze({props:{title:"Table component",svelte:Nn,data:bn,$$slots:{default:[Rr]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","groups")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function Gr(o){return[{id:"userGroups",data:$n,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class Fr extends X{constructor(e){super(),ee(this,e,Gr,Hr,Q,{})}}function mn(o,e,n){const t=o.slice();return t[1]=e[n],t}function gn(o){let e,n,t=o[1].name+"",s,l,r,d,a=o[1].group+"",b,m;return{c(){e=u("tr"),n=u("td"),s=se(t),l=C(),r=u("td"),d=u("div"),b=se(a),m=C()},l(x){e=f(x,"TR",{});var g=D(e);n=f(g,"TD",{});var h=D(n);s=re(h,t),h.forEach(v),l=T(g),r=f(g,"TD",{});var p=D(r);d=f(p,"DIV",{});var $=D(d);b=re($,a),$.forEach(v),p.forEach(v),m=T(g),g.forEach(v)},m(x,g){B(x,e,g),i(e,n),i(n,s),i(e,l),i(e,r),i(r,d),i(d,b),i(e,m)},p(x,g){g&1&&t!==(t=x[1].name+"")&&ge(s,t),g&1&&a!==(a=x[1].group+"")&&ge(b,a)},d(x){x&&v(e)}}}function Br(o){let e,n="Used classes are important to include for the table to have a uniform look.",t,s,l,r,d='<tr class="bg-primary-300 dark:bg-primary-500"><th class="!p-2">Group</th> <th class="!p-2">Description</th></tr>',a,b,m=pe(o[0]),x=[];for(let g=0;g<m.length;g+=1)x[g]=gn(mn(o,m,g));return{c(){e=u("div"),e.textContent=n,t=C(),s=u("div"),l=u("table"),r=u("thead"),r.innerHTML=d,a=C(),b=u("tbody");for(let g=0;g<x.length;g+=1)x[g].c();this.h()},l(g){e=f(g,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-13bu6yg"&&(e.textContent=n),t=T(g),s=f(g,"DIV",{class:!0});var h=D(s);l=f(h,"TABLE",{class:!0});var p=D(l);r=f(p,"THEAD",{"data-svelte-h":!0}),y(r)!=="svelte-1c1p3f3"&&(r.innerHTML=d),a=T(p),b=f(p,"TBODY",{});var $=D(b);for(let w=0;w<x.length;w+=1)x[w].l($);$.forEach(v),p.forEach(v),h.forEach(v),this.h()},h(){c(e,"class","pb-2"),c(l,"class","table table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10"),c(s,"class","table-container")},m(g,h){B(g,e,h),B(g,t,h),B(g,s,h),i(s,l),i(l,r),i(l,a),i(l,b);for(let p=0;p<x.length;p+=1)x[p]&&x[p].m(b,null)},p(g,h){if(h&1){m=pe(g[0]);let p;for(p=0;p<m.length;p+=1){const $=mn(g,m,p);x[p]?x[p].p($,h):(x[p]=gn($),x[p].c(),x[p].m(b,null))}for(;p<x.length;p+=1)x[p].d(1);x.length=m.length}},d(g){g&&(v(e),v(t),v(s)),Ne(x,g)}}}function Or(o){let e,n,t;return n=new ze({props:{title:"Simple table without Table component",svelte:jn,data:ct,$$slots:{default:[Br]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","simpleTable")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&17&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function jr(o,e,n){let t;return hn(o,dt,s=>n(0,t=s)),[t]}class Nr extends X{constructor(e){super(),ee(this,e,jr,Or,Q,{})}}function zr(o){let e,n;return e=new ve({props:{config:o[0]}}),{c(){M(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:N,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function qr(o){let e,n,t;return n=new ze({props:{title:"Server-side table",svelte:ps,$$slots:{default:[zr]},$$scope:{ctx:o}}}),{c(){e=u("div"),M(n.$$.fragment),this.h()},l(s){e=f(s,"DIV",{id:!0});var l=D(e);A(n.$$.fragment,l),l.forEach(v),this.h()},h(){c(e,"id","serverTableExample")},m(s,l){B(s,e,l),V(n,e,null),t=!0},p(s,[l]){const r={};l&4&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){t||(E(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&v(e),R(n)}}}function Wr(o){return[{id:"serverTable",entityId:3,versionId:-1,data:Re([]),serverSide:!0,URL:"https://dev.bexis2.uni-jena.de/api/datatable/",token:"<your_token>"}]}class Pr extends X{constructor(e){super(),ee(this,e,Wr,qr,Q,{})}}function Jr(o){let e,n,t="Examples",s,l,r,d,a,b,m,x,g,h="Dispatching Actions",p,$,w,_,I,U,F,H="Complex data types",Z,O,q,te,z,L,G,P,J,ie,oe,le,K,ce;return l=new Nr({}),d=new Fr({}),b=new pr({}),$=new cr({}),_=new nr({}),O=new hr({}),te=new Vr({}),L=new Ur({}),P=new wr({}),oe=new Pr({}),K=new En({}),{c(){e=u("div"),n=u("h2"),n.textContent=t,s=C(),M(l.$$.fragment),r=C(),M(d.$$.fragment),a=C(),M(b.$$.fragment),m=C(),x=u("div"),g=u("h2"),g.textContent=h,p=C(),M($.$$.fragment),w=C(),M(_.$$.fragment),I=C(),U=u("div"),F=u("h2"),F.textContent=H,Z=C(),M(O.$$.fragment),q=C(),M(te.$$.fragment),z=C(),M(L.$$.fragment),G=C(),M(P.$$.fragment),J=C(),ie=u("div"),M(oe.$$.fragment),le=C(),M(K.$$.fragment),this.h()},l(k){e=f(k,"DIV",{class:!0});var j=D(e);n=f(j,"H2",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-cjx2zy"&&(n.textContent=t),s=T(j),A(l.$$.fragment,j),r=T(j),A(d.$$.fragment,j),a=T(j),A(b.$$.fragment,j),m=T(j),x=f(j,"DIV",{id:!0,class:!0});var ae=D(x);g=f(ae,"H2",{class:!0,"data-svelte-h":!0}),y(g)!=="svelte-1k9ieh2"&&(g.textContent=h),p=T(ae),A($.$$.fragment,ae),w=T(ae),A(_.$$.fragment,ae),ae.forEach(v),I=T(j),U=f(j,"DIV",{id:!0});var ne=D(U);F=f(ne,"H2",{class:!0,"data-svelte-h":!0}),y(F)!=="svelte-1jb1d8k"&&(F.textContent=H),Z=T(ne),A(O.$$.fragment,ne),q=T(ne),A(te.$$.fragment,ne),z=T(ne),A(L.$$.fragment,ne),G=T(ne),A(P.$$.fragment,ne),ne.forEach(v),J=T(j),ie=f(j,"DIV",{id:!0});var de=D(ie);A(oe.$$.fragment,de),de.forEach(v),j.forEach(v),le=T(k),A(K.$$.fragment,k),this.h()},h(){c(n,"class","h2"),c(g,"class","h2"),c(x,"id","actionDispatchersExamples"),c(x,"class","my-20"),c(F,"class","h2"),c(U,"id","complexTypes"),c(ie,"id","Test"),c(e,"class","grid gap-1")},m(k,j){B(k,e,j),i(e,n),i(e,s),V(l,e,null),i(e,r),V(d,e,null),i(e,a),V(b,e,null),i(e,m),i(e,x),i(x,g),i(x,p),V($,x,null),i(x,w),V(_,x,null),i(e,I),i(e,U),i(U,F),i(U,Z),V(O,U,null),i(U,q),V(te,U,null),i(U,z),V(L,U,null),i(U,G),V(P,U,null),i(e,J),i(e,ie),V(oe,ie,null),B(k,le,j),V(K,k,j),ce=!0},p:N,i(k){ce||(E(l.$$.fragment,k),E(d.$$.fragment,k),E(b.$$.fragment,k),E($.$$.fragment,k),E(_.$$.fragment,k),E(O.$$.fragment,k),E(te.$$.fragment,k),E(L.$$.fragment,k),E(P.$$.fragment,k),E(oe.$$.fragment,k),E(K.$$.fragment,k),ce=!0)},o(k){S(l.$$.fragment,k),S(d.$$.fragment,k),S(b.$$.fragment,k),S($.$$.fragment,k),S(_.$$.fragment,k),S(O.$$.fragment,k),S(te.$$.fragment,k),S(L.$$.fragment,k),S(P.$$.fragment,k),S(oe.$$.fragment,k),S(K.$$.fragment,k),ce=!1},d(k){k&&(v(e),v(le)),R(l),R(d),R(b),R($),R(_),R(O),R(te),R(L),R(P),R(oe),R(K,k)}}}class Yr extends X{constructor(e){super(),ee(this,e,null,Jr,Q,{})}}function Zr(o){let e,n,t,s,l="on:action",r,d,a="(action: CustomEvent<any>) => {}",b,m,x,g='To dispatch actions and listen to dispatchers you need to create a table with your own <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> component.',h,p,$,w='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> will get 2 props:',_,I,U='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',F,H,Z,O,q="dispatchFn:",te,z,L="(obj: any) => dispatch('action', obj)",G,P,J,ie=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`;return{c(){e=u("div"),n=u("div"),t=u("div"),s=u("h3"),s.textContent=l,r=C(),d=u("h3"),b=se(a),m=C(),x=u("p"),x.innerHTML=g,h=C(),p=u("div"),$=u("p"),$.innerHTML=w,_=C(),I=u("div"),I.innerHTML=U,F=C(),H=u("div"),Z=u("div"),O=u("div"),O.textContent=q,te=C(),z=u("div"),G=se(L),P=C(),J=u("p"),J.innerHTML=ie,this.h()},l(oe){e=f(oe,"DIV",{class:!0});var le=D(e);n=f(le,"DIV",{class:!0,id:!0});var K=D(n);t=f(K,"DIV",{class:!0});var ce=D(t);s=f(ce,"H3",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-gluzn7"&&(s.textContent=l),r=T(ce),d=f(ce,"H3",{class:!0});var k=D(d);b=re(k,a),k.forEach(v),ce.forEach(v),m=T(K),x=f(K,"P",{class:!0,"data-svelte-h":!0}),y(x)!=="svelte-jcdyxg"&&(x.innerHTML=g),h=T(K),p=f(K,"DIV",{class:!0});var j=D(p);$=f(j,"P",{class:!0,"data-svelte-h":!0}),y($)!=="svelte-f80bs7"&&($.innerHTML=w),_=T(j),I=f(j,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-6bma7r"&&(I.innerHTML=U),F=T(j),H=f(j,"DIV",{class:!0});var ae=D(H);Z=f(ae,"DIV",{class:!0});var ne=D(Z);O=f(ne,"DIV",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-efz5t5"&&(O.textContent=q),te=T(ne),z=f(ne,"DIV",{class:!0});var de=D(z);G=re(de,L),de.forEach(v),ne.forEach(v),P=T(ae),J=f(ae,"P",{class:!0,"data-svelte-h":!0}),y(J)!=="svelte-2ll7ks"&&(J.innerHTML=ie),ae.forEach(v),j.forEach(v),K.forEach(v),le.forEach(v),this.h()},h(){c(s,"class","italic font-semibold"),c(d,"class","font-semibold"),c(t,"class","flex gap-3 h3"),c(x,"class","text-xl underline"),c($,"class","text-xl"),c(I,"class","items-center mt-2"),c(O,"class","italic"),c(z,"class","font-bold"),c(Z,"class","flex gap-2"),c(J,"class","text-xl pl-10"),c(H,"class","items-center mt-2"),c(p,"class","mt-5"),c(n,"class","grid gap-2"),c(n,"id","actionDispatchersDocs"),c(e,"class","grid gap-5")},m(oe,le){B(oe,e,le),i(e,n),i(n,t),i(t,s),i(t,r),i(t,d),i(d,b),i(n,m),i(n,x),i(n,h),i(n,p),i(p,$),i(p,_),i(p,I),i(p,F),i(p,H),i(H,Z),i(Z,O),i(Z,te),i(Z,z),i(z,G),i(H,P),i(H,J)},p:N,i:N,o:N,d(oe){oe&&v(e)}}}class Kr extends X{constructor(e){super(),ee(this,e,null,Zr,Q,{})}}function Qr(o){let e,n,t,s="Table",l,r,d="Types",a,b,m,x,g,h,p,$,w,_,I,U="Action Dispatchers",F,H,Z,O,q,te,z;return b=new vs({}),x=new $s({}),h=new Cs({}),$=new Ds({}),H=new Kr({}),O=new Yr({}),{c(){e=u("div"),n=u("div"),t=u("h1"),t.textContent=s,l=C(),r=u("h2"),r.textContent=d,a=C(),M(b.$$.fragment),m=C(),M(x.$$.fragment),g=C(),M(h.$$.fragment),p=C(),M($.$$.fragment),w=C(),_=u("div"),I=u("h2"),I.textContent=U,F=C(),M(H.$$.fragment),Z=C(),M(O.$$.fragment),this.h()},l(L){e=f(L,"DIV",{class:!0});var G=D(e);n=f(G,"DIV",{class:!0});var P=D(n);t=f(P,"H1",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1iqv81h"&&(t.textContent=s),l=T(P),r=f(P,"H2",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-uxqqy2"&&(r.textContent=d),a=T(P),A(b.$$.fragment,P),P.forEach(v),m=T(G),A(x.$$.fragment,G),g=T(G),A(h.$$.fragment,G),p=T(G),A($.$$.fragment,G),w=T(G),_=f(G,"DIV",{class:!0});var J=D(_);I=f(J,"H2",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-5p51xv"&&(I.textContent=U),F=T(J),A(H.$$.fragment,J),J.forEach(v),Z=T(G),A(O.$$.fragment,G),G.forEach(v),this.h()},h(){c(t,"class","font-bold !text-6xl"),c(r,"class","h2"),c(n,"class","grid gap-5"),c(I,"class","h2"),c(_,"class","grid gap-5"),c(e,"class","grid gap-20 p-10 dark:bg-surface-800")},m(L,G){B(L,e,G),i(e,n),i(n,t),i(n,l),i(n,r),i(n,a),V(b,n,null),i(e,m),V(x,e,null),i(e,g),V(h,e,null),i(e,p),V($,e,null),i(e,w),i(e,_),i(_,I),i(_,F),V(H,_,null),i(e,Z),V(O,e,null),q=!0,te||(z=We(On.call(null,e,{mode:"generate",scrollTarget:"#page-content"})),te=!0)},p:N,i(L){q||(E(b.$$.fragment,L),E(x.$$.fragment,L),E(h.$$.fragment,L),E($.$$.fragment,L),E(H.$$.fragment,L),E(O.$$.fragment,L),q=!0)},o(L){S(b.$$.fragment,L),S(x.$$.fragment,L),S(h.$$.fragment,L),S($.$$.fragment,L),S(H.$$.fragment,L),S(O.$$.fragment,L),q=!1},d(L){L&&v(e),R(b),R(x),R(h),R($),R(H),R(O),te=!1,z()}}}class fl extends X{constructor(e){super(),ee(this,e,null,Qr,Q,{})}}export{fl as component};