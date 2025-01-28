import{s as ie,e as d,a as $,t as ce,c as u,b as D,A as y,g as x,d as de,f as g,m as o,i as F,h as r,n as J,N as nt,z as et,r as bt,ag as $s,j as Ce,T as Xe,H as Ts,l as ws,u as Ds,o as ys,p as Is,v as Ve,O as Es,U as Ls,k as xs,M as Ss}from"../chunks/BTIOtzD0.js";import{S as ae,i as oe,c as V,a as A,m as H,t as E,b as M,d as R,g as rt,e as lt,k as Ms}from"../chunks/BPNg9miD.js";/* empty css                */import{p as $t}from"../chunks/DVFoBJNg.js";import"../chunks/vD00CEsX.js";import{C as it}from"../chunks/BVv2z89T.js";import{M as Us}from"../chunks/BaomiQbX.js";import{g as ks}from"../chunks/DmZ7KeEg.js";import{e as be}from"../chunks/n4quD-S8.js";import{F as Vs,e as As,g as Hs,d as Rs,c as Gs}from"../chunks/D4Jc3Dep.js";import{w as Ne}from"../chunks/CRqwLWrN.js";import{a as Fs,b as Bs,T as Te,c as js,d as Os,C as tt}from"../chunks/TvzYIx80.js";/* empty css                */import"../chunks/B6cYaIRn.js";import{s as qs}from"../chunks/B0-lfgLd.js";/* empty css                */import"../chunks/BokZKB0-.js";import"../chunks/CcWcT8Dc.js";import{a as zs,t as Ns}from"../chunks/B6ATC20P.js";function Ps(a,e){var h;let s="h2, h3, h4, h5, h6",t="body",n,i=[];function l(){e!=null&&e.queryElements&&(s=e.queryElements),e!=null&&e.scrollTarget&&(t=e.scrollTarget),n=a.querySelectorAll(s),i=[],f()}function f(){n==null||n.forEach(m=>{var C,v,b,p;if(!m.hasAttribute("data-toc-ignore")){if((e==null?void 0:e.mode)==="generate"&&!m.id){const _=(v=(C=m.firstChild)==null?void 0:C.textContent)==null?void 0:v.trim().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase(),T=e.prefix?`${e.prefix}-`:"",w=e.suffix?`-${e.suffix}`:"";m.id=T+_+w}i.push({element:m.nodeName.toLowerCase(),id:m.id,text:((p=(b=m.firstChild)==null?void 0:b.textContent)==null?void 0:p.trim())||""})}}),zs.set(i)}function c(m){if(!(n!=null&&n.length))return;const C=m.target;if(!(C instanceof HTMLElement))throw new Error("scrollTarget is not an HTMLElement");const v=C.getBoundingClientRect().top||0,b=40;for(const p of n)if(p.getBoundingClientRect().top-v+b>=0)return Ns.set(p.id)}return l(),t&&((h=document.querySelector(t))==null||h.addEventListener("scroll",c)),{update(m){e=m,l()},destroy(){var m;t&&((m=document.querySelector(t))==null||m.removeEventListener("scroll",c))}}}function Ws(a){let e,s,t='<div class="italic div">Underlined attributes are <strong>required</strong>.</div>',n,i,l,f,c="config:",h,m,C="TableConfig <T>",v,b,p,_="Configuration for the table.";return{c(){e=d("div"),s=d("div"),s.innerHTML=t,n=$(),i=d("div"),l=d("div"),f=d("div"),f.textContent=c,h=$(),m=d("div"),v=ce(C),b=$(),p=d("p"),p.textContent=_,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);s=u(w,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),y(s)!=="svelte-14ey4fv"&&(s.innerHTML=t),n=x(w),i=u(w,"DIV",{class:!0});var I=D(i);l=u(I,"DIV",{class:!0});var L=D(l);f=u(L,"DIV",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-w02qqp"&&(f.textContent=c),h=x(L),m=u(L,"DIV",{class:!0});var k=D(m);v=de(k,C),k.forEach(g),L.forEach(g),b=x(I),p=u(I,"P",{class:!0,"data-svelte-h":!0}),y(p)!=="svelte-x8qv5l"&&(p.textContent=_),I.forEach(g),w.forEach(g),this.h()},h(){o(s,"class","grid gap-2"),o(s,"id","tableProps"),o(f,"class","italic underline"),o(m,"class","font-bold"),o(l,"class","flex gap-2"),o(p,"class","text-xl pl-10"),o(i,"class","items-center"),o(e,"class","grid gap-5")},m(T,w){F(T,e,w),r(e,s),r(e,n),r(e,i),r(i,l),r(l,f),r(l,h),r(l,m),r(m,v),r(i,b),r(i,p)},p:J,i:J,o:J,d(T){T&&g(e)}}}class Js extends ae{constructor(e){super(),oe(this,e,null,Ws,ie,{})}}const Ys=`
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
</div>`,Zs=`
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

<Table config={groupConfig} />`,_s=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Ks=`
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

<Table config={usersConfig} />`,xt=`
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
				
export const usersStore = writable<User[]>(users);`,Qs=`
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
/>`,Xs=`
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

<Table config={usersBDConfig} />`,en=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,tn=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	resizable?: 'rows' | 'columns' | 'both'; // none by default
	showColumnsMenu?: boolean; // false by default
	toggle?: boolean; // false by default
	search?: boolean; // true by default
	fitToScreen?: boolean; // true by default
	height?: null | number; // null by default
	rowHeight?: number; // auto by default
	columns?: Columns;
	exportable?: boolean; // false by default
	pageSizes?: number[]; // [5, 10, 20, 50, 100] by default
	defaultPageSize?: number; // 10 by default
	optionsComponent?: typeof SvelteComponent;

	server?: ServerConfig;
}`,sn=`
export interface Columns {
	[key: string]: Column;
}`,nn=`
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
}`,rn=`
export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}`,ln=`
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

<Table config={usersMissingIDsConfig} />`,an=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,on=`
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
		showColumnsMenu: true,
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
`,cn=`
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
`,dn=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,un=`
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
<\/script>`,fn=`
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
`,pn=`
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
`,mn=`
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
`,gn=`
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
<Modal />`,vn=`
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
`,hn=`
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
`,bn=`
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
`,$n=`
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
`,xn=`
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
`,_n=`
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
		data: tableStore, // store to hold and retrieve data
		server: {
			// URL for the table to be fetched from
			baseUrl: 'https://dev.bexis2.uni-jena.de/api/datatable/',
			entityId: 1, // dataset ID
			versionId: -1, // version ID
		}
	};
<\/script>

<Table config={serverTableConfig} />
`;function Cn(a){let e,s,t,n="TableConfig <T>",i,l,f,c="Show type details",h,m,C="Underlined attributes are <strong>required</strong>.",v,b,p,_,T,w='<div class="flex gap-2 underline"><div class="italic">id:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Unique identifier for the table to generate unique IDs for the filters.</p>',I,L,k,B,N="data:",P,ne,q="Writable <T[]>",W,ee,Q,K='A writable store of the type <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">T[]</code>. Any changes in the store will be reflected in the table.',X,te,U='<div class="flex gap-2"><div class="italic">resizable:</div> <div class="font-bold"><i>&quot;rows&quot;</i>, <i>&quot;columns&quot;</i> or <i>&quot;both&quot;</i></div></div> <p class="text-xl pl-10">Whether rows, columns or both should be resizable. Not resizable by default.</p>',O,z,Y='<div class="flex gap-2"><div class="italic">showColumnsMenu:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the show/hide columns menu should be visible. <code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>',ue,se,re=`<div class="flex gap-2"><div class="italic">toggle:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">fitToScreen</code>
			toggle should be visible.
			<code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>`,S,j,fe='<div class="flex gap-2"><div class="italic">search:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should have a search bar. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',G,le,we='<div class="flex gap-2"><div class="italic">fitToScreen:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table takes the whole width. <code class="!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500">true</code> by default.</p>',Ae,$e,xe='<div class="flex gap-2"><div class="italic">height:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Custom height for the table in pixels.</p>',Pe,he,We='<div class="flex gap-2"><div class="italic">rowHeight:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Sets height for the rows in pixels. If <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> is set to &quot;both&quot; or &quot;rows&quot;, this value can be interpreted as minimum height for the rows.</p>',Je,me,pe,ve,st="columns:",De,ge,He="Columns",ye,Ye,Re,Rt=`An object with configuration for specific columns. <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">Columns</code>
			object is described below.`,Tt,Ge,Gt='<div class="flex gap-2"><div class="italic">exportable:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether the table should be exportable to CSV. <code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code> by default.</p>',wt,Ie,Ee,Fe,Ft="pageSizes:",Dt,Ze,Bt="number[]",yt,It,Be,jt=`An array of page sizes to be used for the table. By default, page sizes are 5, 10, 20, 50,
			100.`,Et,Le,Se,je,Ot="defaultPageSize:",Lt,Ke,qt="number",St,Mt,Oe,zt=`Default page size to be used for the table upon rendering. By default, default page size is
			10.`,Ut,Me,Ue,qe,Nt="optionsComponent:",kt,Qe,Pt="SvelteComponent",Vt,At,ze,Wt=`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> was provided.`,at,Ht,Jt;return p=new it({props:{language:"ts",code:tn}}),{c(){e=d("div"),s=d("div"),t=d("h3"),i=ce(n),l=$(),f=d("button"),f.textContent=c,h=$(),m=d("div"),m.innerHTML=C,v=$(),b=d("div"),V(p.$$.fragment),_=$(),T=d("div"),T.innerHTML=w,I=$(),L=d("div"),k=d("div"),B=d("div"),B.textContent=N,P=$(),ne=d("div"),W=ce(q),ee=$(),Q=d("p"),Q.innerHTML=K,X=$(),te=d("div"),te.innerHTML=U,O=$(),z=d("div"),z.innerHTML=Y,ue=$(),se=d("div"),se.innerHTML=re,S=$(),j=d("div"),j.innerHTML=fe,G=$(),le=d("div"),le.innerHTML=we,Ae=$(),$e=d("div"),$e.innerHTML=xe,Pe=$(),he=d("div"),he.innerHTML=We,Je=$(),me=d("div"),pe=d("div"),ve=d("div"),ve.textContent=st,De=$(),ge=d("div"),ye=ce(He),Ye=$(),Re=d("p"),Re.innerHTML=Rt,Tt=$(),Ge=d("div"),Ge.innerHTML=Gt,wt=$(),Ie=d("div"),Ee=d("div"),Fe=d("div"),Fe.textContent=Ft,Dt=$(),Ze=d("div"),yt=ce(Bt),It=$(),Be=d("p"),Be.textContent=jt,Et=$(),Le=d("div"),Se=d("div"),je=d("div"),je.textContent=Ot,Lt=$(),Ke=d("div"),St=ce(qt),Mt=$(),Oe=d("p"),Oe.textContent=zt,Ut=$(),Me=d("div"),Ue=d("div"),qe=d("div"),qe.textContent=Nt,kt=$(),Qe=d("div"),Vt=ce(Pt),At=$(),ze=d("p"),ze.innerHTML=Wt,this.h()},l(_e){e=u(_e,"DIV",{class:!0});var Z=D(e);s=u(Z,"DIV",{class:!0,id:!0});var ke=D(s);t=u(ke,"H3",{class:!0});var Yt=D(t);i=de(Yt,n),Yt.forEach(g),l=x(ke),f=u(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),y(f)!=="svelte-8jx6w5"&&(f.textContent=c),h=x(ke),m=u(ke,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-pow2wl"&&(m.innerHTML=C),v=x(ke),b=u(ke,"DIV",{"data-popup":!0});var Zt=D(b);A(p.$$.fragment,Zt),Zt.forEach(g),ke.forEach(g),_=x(Z),T=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(T)!=="svelte-1gw1p6o"&&(T.innerHTML=w),I=x(Z),L=u(Z,"DIV",{class:!0});var ot=D(L);k=u(ot,"DIV",{class:!0});var ct=D(k);B=u(ct,"DIV",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-1nos06z"&&(B.textContent=N),P=x(ct),ne=u(ct,"DIV",{class:!0});var Kt=D(ne);W=de(Kt,q),Kt.forEach(g),ct.forEach(g),ee=x(ot),Q=u(ot,"P",{class:!0,"data-svelte-h":!0}),y(Q)!=="svelte-1c6igtm"&&(Q.innerHTML=K),ot.forEach(g),X=x(Z),te=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(te)!=="svelte-okxdta"&&(te.innerHTML=U),O=x(Z),z=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(z)!=="svelte-20vmk1"&&(z.innerHTML=Y),ue=x(Z),se=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(se)!=="svelte-10v9e21"&&(se.innerHTML=re),S=x(Z),j=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-1vcf6xb"&&(j.innerHTML=fe),G=x(Z),le=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(le)!=="svelte-wrmk9w"&&(le.innerHTML=we),Ae=x(Z),$e=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y($e)!=="svelte-mswvp"&&($e.innerHTML=xe),Pe=x(Z),he=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(he)!=="svelte-1d6cyak"&&(he.innerHTML=We),Je=x(Z),me=u(Z,"DIV",{class:!0});var dt=D(me);pe=u(dt,"DIV",{class:!0});var ut=D(pe);ve=u(ut,"DIV",{class:!0,"data-svelte-h":!0}),y(ve)!=="svelte-1rr4g9w"&&(ve.textContent=st),De=x(ut),ge=u(ut,"DIV",{class:!0});var Qt=D(ge);ye=de(Qt,He),Qt.forEach(g),ut.forEach(g),Ye=x(dt),Re=u(dt,"P",{class:!0,"data-svelte-h":!0}),y(Re)!=="svelte-1rn1eyk"&&(Re.innerHTML=Rt),dt.forEach(g),Tt=x(Z),Ge=u(Z,"DIV",{class:!0,"data-svelte-h":!0}),y(Ge)!=="svelte-1lqyjpj"&&(Ge.innerHTML=Gt),wt=x(Z),Ie=u(Z,"DIV",{class:!0});var ft=D(Ie);Ee=u(ft,"DIV",{class:!0});var pt=D(Ee);Fe=u(pt,"DIV",{class:!0,"data-svelte-h":!0}),y(Fe)!=="svelte-1vi8og4"&&(Fe.textContent=Ft),Dt=x(pt),Ze=u(pt,"DIV",{class:!0});var Xt=D(Ze);yt=de(Xt,Bt),Xt.forEach(g),pt.forEach(g),It=x(ft),Be=u(ft,"P",{class:!0,"data-svelte-h":!0}),y(Be)!=="svelte-6kwyqj"&&(Be.textContent=jt),ft.forEach(g),Et=x(Z),Le=u(Z,"DIV",{class:!0});var mt=D(Le);Se=u(mt,"DIV",{class:!0});var gt=D(Se);je=u(gt,"DIV",{class:!0,"data-svelte-h":!0}),y(je)!=="svelte-6pyrz4"&&(je.textContent=Ot),Lt=x(gt),Ke=u(gt,"DIV",{class:!0});var es=D(Ke);St=de(es,qt),es.forEach(g),gt.forEach(g),Mt=x(mt),Oe=u(mt,"P",{class:!0,"data-svelte-h":!0}),y(Oe)!=="svelte-qswi2h"&&(Oe.textContent=zt),mt.forEach(g),Ut=x(Z),Me=u(Z,"DIV",{class:!0});var vt=D(Me);Ue=u(vt,"DIV",{class:!0});var ht=D(Ue);qe=u(ht,"DIV",{class:!0,"data-svelte-h":!0}),y(qe)!=="svelte-k4lnpy"&&(qe.textContent=Nt),kt=x(ht),Qe=u(ht,"DIV",{class:!0});var ts=D(Qe);Vt=de(ts,Pt),ts.forEach(g),ht.forEach(g),At=x(vt),ze=u(vt,"P",{class:!0,"data-svelte-h":!0}),y(ze)!=="svelte-1wwqj0k"&&(ze.innerHTML=Wt),vt.forEach(g),Z.forEach(g),this.h()},h(){o(t,"class","font-semibold relative w-max h3"),o(f,"class","btn variant-ghost-primary w-min"),o(m,"class","italic div"),o(b,"data-popup","popupClickTableConfig"),o(s,"class","grid gap-2"),o(s,"id","tableConfig"),o(T,"class","items-center"),o(B,"class","italic"),o(ne,"class","font-bold"),o(k,"class","flex gap-2 underline"),o(Q,"class","text-xl pl-10"),o(L,"class","items-center"),o(te,"class","items-center"),o(z,"class","items-center"),o(se,"class","items-center"),o(j,"class","items-center"),o(le,"class","items-center"),o($e,"class","items-center"),o(he,"class","items-center"),o(ve,"class","italic"),o(ge,"class","font-bold"),o(pe,"class","flex gap-2"),o(Re,"class","text-xl pl-10"),o(me,"class","items-center"),o(Ge,"class","items-center"),o(Fe,"class","italic"),o(Ze,"class","font-bold"),o(Ee,"class","flex gap-2"),o(Be,"class","text-xl pl-10"),o(Ie,"class","items-center"),o(je,"class","italic"),o(Ke,"class","font-bold"),o(Se,"class","flex gap-2"),o(Oe,"class","text-xl pl-10"),o(Le,"class","items-center"),o(qe,"class","italic"),o(Qe,"class","font-bold"),o(Ue,"class","flex gap-2"),o(ze,"class","text-xl pl-10"),o(Me,"class","items-center"),o(e,"class","grid gap-5")},m(_e,Z){F(_e,e,Z),r(e,s),r(s,t),r(t,i),r(s,l),r(s,f),r(s,h),r(s,m),r(s,v),r(s,b),H(p,b,null),r(e,_),r(e,T),r(e,I),r(e,L),r(L,k),r(k,B),r(k,P),r(k,ne),r(ne,W),r(L,ee),r(L,Q),r(e,X),r(e,te),r(e,O),r(e,z),r(e,ue),r(e,se),r(e,S),r(e,j),r(e,G),r(e,le),r(e,Ae),r(e,$e),r(e,Pe),r(e,he),r(e,Je),r(e,me),r(me,pe),r(pe,ve),r(pe,De),r(pe,ge),r(ge,ye),r(me,Ye),r(me,Re),r(e,Tt),r(e,Ge),r(e,wt),r(e,Ie),r(Ie,Ee),r(Ee,Fe),r(Ee,Dt),r(Ee,Ze),r(Ze,yt),r(Ie,It),r(Ie,Be),r(e,Et),r(e,Le),r(Le,Se),r(Se,je),r(Se,Lt),r(Se,Ke),r(Ke,St),r(Le,Mt),r(Le,Oe),r(e,Ut),r(e,Me),r(Me,Ue),r(Ue,qe),r(Ue,kt),r(Ue,Qe),r(Qe,Vt),r(Me,At),r(Me,ze),at=!0,Ht||(Jt=nt($t.call(null,f,a[0])),Ht=!0)},p:J,i(_e){at||(E(p.$$.fragment,_e),at=!0)},o(_e){M(p.$$.fragment,_e),at=!1},d(_e){_e&&g(e),R(p),Ht=!1,Jt()}}}function Tn(a){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class wn extends ae{constructor(e){super(),oe(this,e,Tn,Cn,ie,{})}}function Dn(a){let e,s,t,n="Columns",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">[key: <strong>string</strong>]:</div> <div class="font-bold">Column</div></div> <p class="text-xl pl-10">Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.</p>`,p,_,T;return m=new it({props:{language:"ts",code:sn}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,this.h()},l(w){e=u(w,"DIV",{class:!0});var I=D(e);s=u(I,"DIV",{class:!0,id:!0});var L=D(s);t=u(L,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-16hos7w"&&(t.textContent=n),i=x(L),l=u(L,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-7ff0g6"&&(l.textContent=f),c=x(L),h=u(L,"DIV",{"data-popup":!0});var k=D(h);A(m.$$.fragment,k),k.forEach(g),L.forEach(g),C=x(I),v=u(I,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-z913vv"&&(v.innerHTML=b),I.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumns"),o(s,"class","grid gap-2"),o(s,"id","columns"),o(v,"class","items-center"),o(e,"class","grid gap-5")},m(w,I){F(w,e,I),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),p=!0,_||(T=nt($t.call(null,l,a[0])),_=!0)},p:J,i(w){p||(E(m.$$.fragment,w),p=!0)},o(w){M(m.$$.fragment,w),p=!1},d(w){w&&g(e),R(m),_=!1,T()}}}function yn(a){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class In extends ae{constructor(e){super(),oe(this,e,yn,Dn,ie,{})}}function En(a){let e,s,t,n="Column",i,l,f="Show type details",c,h,m,C,v,b=`<div class="flex gap-2"><div class="italic">header:</div> <div class="font-bold">string</div></div> <p class="text-xl pl-10">Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.</p>`,p,_,T='<div class="flex gap-2"><div class="italic">minWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Minimum width in pixels for the column. By default, the column will be as wide as the content.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">fixedWidth:</div> <div class="font-bold">number</div></div> <p class="text-xl pl-10">Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">resizable</code> property for the column.</p>`,k,B,N=`<div class="flex gap-2"><div class="italic">exclude:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.</p>`,P,ne,q='<div class="flex gap-2"><div class="italic">disableFiltering:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable filtering for the column or not. By default, filtering is enabled.</p>',W,ee,Q='<div class="flex gap-2"><div class="italic">disableSorting:</div> <div class="font-bold">boolean</div></div> <p class="text-xl pl-10">Whether to disable sorting for the column or not. By default, sorting is enabled.</p>',K,X,te=`<div class="flex gap-2"><div class="italic">colFitlerFn:</div> <div class="font-bold"><a href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean">ColumnFilterFn</a></div></div> <p class="text-xl pl-10">Filtering function to be applied on the column. By default, basic number/string filter is
			applied.</p>`,U,O,z=`<div class="flex gap-2"><div class="italic">colFilterComponent:</div> <div class="font-bold">SvelteComponent</div></div> <p class="text-xl pl-10">Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.</p>`,Y,ue,se='<div class="flex gap-2"><div class="italic">instructions:</div> <div class="font-bold">ColumnInstructions</div></div> <p class="text-xl pl-10">Configuration for the column&#39;s appearance, sorting and filtering functionalities.</p>',re,S,j;return m=new it({props:{language:"ts",code:nn}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,p=$(),_=d("div"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),B.innerHTML=N,P=$(),ne=d("div"),ne.innerHTML=q,W=$(),ee=d("div"),ee.innerHTML=Q,K=$(),X=d("div"),X.innerHTML=te,U=$(),O=d("div"),O.innerHTML=z,Y=$(),ue=d("div"),ue.innerHTML=se,this.h()},l(fe){e=u(fe,"DIV",{class:!0});var G=D(e);s=u(G,"DIV",{class:!0,id:!0});var le=D(s);t=u(le,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1hrzfml"&&(t.textContent=n),i=x(le),l=u(le,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-xegi0l"&&(l.textContent=f),c=x(le),h=u(le,"DIV",{"data-popup":!0});var we=D(h);A(m.$$.fragment,we),we.forEach(g),le.forEach(g),C=x(G),v=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-b4nczs"&&(v.innerHTML=b),p=x(G),_=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-1mnwd5o"&&(_.innerHTML=T),w=x(G),I=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-aq5rqb"&&(I.innerHTML=L),k=x(G),B=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(B)!=="svelte-hqd23"&&(B.innerHTML=N),P=x(G),ne=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ne)!=="svelte-1ukzcx7"&&(ne.innerHTML=q),W=x(G),ee=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ee)!=="svelte-1xushnp"&&(ee.innerHTML=Q),K=x(G),X=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(X)!=="svelte-1sidkmm"&&(X.innerHTML=te),U=x(G),O=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-jctk25"&&(O.innerHTML=z),Y=x(G),ue=u(G,"DIV",{class:!0,"data-svelte-h":!0}),y(ue)!=="svelte-mix6fy"&&(ue.innerHTML=se),G.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumn"),o(s,"class","grid gap-2"),o(s,"id","column"),o(v,"class","items-center"),o(_,"class","items-center"),o(I,"class","items-center"),o(B,"class","items-center"),o(ne,"class","items-center"),o(ee,"class","items-center"),o(X,"class","items-center"),o(O,"class","items-center"),o(ue,"class","items-center"),o(e,"class","grid gap-5")},m(fe,G){F(fe,e,G),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,_),r(e,w),r(e,I),r(e,k),r(e,B),r(e,P),r(e,ne),r(e,W),r(e,ee),r(e,K),r(e,X),r(e,U),r(e,O),r(e,Y),r(e,ue),re=!0,S||(j=nt($t.call(null,l,a[0])),S=!0)},p:J,i(fe){re||(E(m.$$.fragment,fe),re=!0)},o(fe){M(m.$$.fragment,fe),re=!1},d(fe){fe&&g(e),R(m),S=!1,j()}}}function Ln(a){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Sn extends ae{constructor(e){super(),oe(this,e,Ln,En,ie,{})}}function Mn(a){let e,s,t,n="ColumnInstructions",i,l,f="Show type details",c,h,m,C,v,b='<div class="flex gap-2"><div class="italic">toStringFn:</div> <div class="font-bold">(value: any) =&gt; string</div></div> <p class="text-xl pl-10">Custom toString function to be applied on the column.</p>',p,_,T='<div class="flex gap-2"><div class="italic">toSortableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number</div></div> <p class="text-xl pl-10">Custom function to return either a string or a number value to have a sortable column.</p>',w,I,L=`<div class="flex gap-2"><div class="italic">toFilterableValueFn:</div> <div class="font-bold">(value: any) =&gt; string | number | Date</div></div> <p class="text-xl pl-10">Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.</p>`,k,B,N,P='<div class="italic">renderComponent:</div> <div class="font-bold">SvelteComponent</div>',ne,q,W,ee=`<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code>
				overrides
				<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">toStringFn</code>.`,Q,K,X='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">renderComponent</code> will get 3 props:',te,U,O='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',z,Y,ue='<div class="flex gap-2"><div class="italic">value:</div> <div class="font-bold">any</div></div> <p class="text-xl pl-10">The value of the current cell.</p>',se,re,S,j,fe="dispatchFn:",G,le,we="(obj: any) => dispatch('action', obj)",Ae,$e,xe,Pe=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`,he,We,Je;return m=new it({props:{language:"ts",code:rn}}),{c(){e=d("div"),s=d("div"),t=d("h3"),t.textContent=n,i=$(),l=d("button"),l.textContent=f,c=$(),h=d("div"),V(m.$$.fragment),C=$(),v=d("div"),v.innerHTML=b,p=$(),_=d("div"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),N=d("div"),N.innerHTML=P,ne=$(),q=d("div"),W=d("p"),W.innerHTML=ee,Q=$(),K=d("p"),K.innerHTML=X,te=$(),U=d("div"),U.innerHTML=O,z=$(),Y=d("div"),Y.innerHTML=ue,se=$(),re=d("div"),S=d("div"),j=d("div"),j.textContent=fe,G=$(),le=d("div"),Ae=ce(we),$e=$(),xe=d("p"),xe.innerHTML=Pe,this.h()},l(me){e=u(me,"DIV",{class:!0});var pe=D(e);s=u(pe,"DIV",{class:!0,id:!0});var ve=D(s);t=u(ve,"H3",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-jn2qek"&&(t.textContent=n),i=x(ve),l=u(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1pqc3g6"&&(l.textContent=f),c=x(ve),h=u(ve,"DIV",{"data-popup":!0});var st=D(h);A(m.$$.fragment,st),st.forEach(g),ve.forEach(g),C=x(pe),v=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-gq1s8p"&&(v.innerHTML=b),p=x(pe),_=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-1wjzpok"&&(_.innerHTML=T),w=x(pe),I=u(pe,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-cnej3m"&&(I.innerHTML=L),k=x(pe),B=u(pe,"DIV",{class:!0});var De=D(B);N=u(De,"DIV",{class:!0,"data-svelte-h":!0}),y(N)!=="svelte-1b798op"&&(N.innerHTML=P),ne=x(De),q=u(De,"DIV",{class:!0});var ge=D(q);W=u(ge,"P",{class:!0,"data-svelte-h":!0}),y(W)!=="svelte-1lchchu"&&(W.innerHTML=ee),Q=x(ge),K=u(ge,"P",{class:!0,"data-svelte-h":!0}),y(K)!=="svelte-1wsaj1z"&&(K.innerHTML=X),te=x(ge),U=u(ge,"DIV",{class:!0,"data-svelte-h":!0}),y(U)!=="svelte-6bma7r"&&(U.innerHTML=O),z=x(ge),Y=u(ge,"DIV",{class:!0,"data-svelte-h":!0}),y(Y)!=="svelte-zvgq5h"&&(Y.innerHTML=ue),se=x(ge),re=u(ge,"DIV",{class:!0});var He=D(re);S=u(He,"DIV",{class:!0});var ye=D(S);j=u(ye,"DIV",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-efz5t5"&&(j.textContent=fe),G=x(ye),le=u(ye,"DIV",{class:!0});var Ye=D(le);Ae=de(Ye,we),Ye.forEach(g),ye.forEach(g),$e=x(He),xe=u(He,"P",{class:!0,"data-svelte-h":!0}),y(xe)!=="svelte-vssxsw"&&(xe.innerHTML=Pe),He.forEach(g),ge.forEach(g),De.forEach(g),pe.forEach(g),this.h()},h(){o(t,"class","font-semibold items-center w-max h3"),o(l,"class","btn variant-ghost-primary w-min"),o(h,"data-popup","popupClickColumnInstructions"),o(s,"class","grid gap-2"),o(s,"id","columnInstructions"),o(v,"class","items-center"),o(_,"class","items-center"),o(I,"class","items-center"),o(N,"class","flex gap-2"),o(W,"class","underline"),o(K,"class",""),o(U,"class","items-center mt-2"),o(Y,"class","items-center mt-2"),o(j,"class","italic"),o(le,"class","font-bold"),o(S,"class","flex gap-2"),o(xe,"class","text-xl pl-10"),o(re,"class","items-center mt-2"),o(q,"class","ml-5"),o(B,"class","items-center mt-5"),o(e,"class","grid gap-5")},m(me,pe){F(me,e,pe),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),r(s,h),H(m,h,null),r(e,C),r(e,v),r(e,p),r(e,_),r(e,w),r(e,I),r(e,k),r(e,B),r(B,N),r(B,ne),r(B,q),r(q,W),r(q,Q),r(q,K),r(q,te),r(q,U),r(q,z),r(q,Y),r(q,se),r(q,re),r(re,S),r(S,j),r(S,G),r(S,le),r(le,Ae),r(re,$e),r(re,xe),he=!0,We||(Je=nt($t.call(null,l,a[0])),We=!0)},p:J,i(me){he||(E(m.$$.fragment,me),he=!0)},o(me){M(m.$$.fragment,me),he=!1},d(me){me&&g(e),R(m),We=!1,Je()}}}function Un(a){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class kn extends ae{constructor(e){super(),oe(this,e,Un,Mn,ie,{})}}function ss(a,e,s){const t=a.slice();return t[5]=e[s],t}function ns(a){let e,s,t,n,i,l;s=new Vs({props:{icon:a[5].icon}});function f(){return a[4](a[5])}return{c(){e=d("button"),V(s.$$.fragment),t=$(),this.h()},l(c){e=u(c,"BUTTON",{title:!0,class:!0});var h=D(e);A(s.$$.fragment,h),t=x(h),h.forEach(g),this.h()},h(){o(e,"title",a[5].type),o(e,"class",`btn btn-sm btn-icon rounded-md ${a[5].color}`)},m(c,h){F(c,e,h),H(s,e,null),r(e,t),n=!0,i||(l=bt(e,"click",$s(f)),i=!0)},p(c,h){a=c},i(c){n||(E(s.$$.fragment,c),n=!0)},o(c){M(s.$$.fragment,c),n=!1},d(c){c&&g(e),R(s),i=!1,l()}}}function Vn(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=ns(ss(a,t,l));const i=l=>M(n[l],1,1,()=>{n[l]=null});return{c(){e=d("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=u(l,"DIV",{class:!0});var f=D(e);for(let c=0;c<n.length;c+=1)n[c].l(f);f.forEach(g),this.h()},h(){o(e,"class","flex gap-2 w-min")},m(l,f){F(l,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);s=!0},p(l,[f]){if(f&3){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=ss(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=ns(h),n[c].c(),E(n[c],1),n[c].m(e,null))}for(rt(),c=t.length;c<n.length;c+=1)i(c);lt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)M(n[f]);s=!1},d(l){l&&g(e),et(n,l)}}}function An(a,e,s){let{row:t}=e,{dispatchFn:n}=e;const i=c=>n({type:c,row:t}),l=[{icon:As,color:"variant-filled-primary",type:"CREATE"},{icon:Hs,color:"variant-filled-secondary",type:"READ"},{icon:Rs,color:"variant-filled-warning",type:"UPDATE"},{icon:Gs,color:"variant-filled-error",type:"DELETE"}],f=c=>i(c.type);return a.$$set=c=>{"row"in c&&s(2,t=c.row),"dispatchFn"in c&&s(3,n=c.dispatchFn)},[i,l,t,n,f]}class Hn extends ae{constructor(e){super(),oe(this,e,An,Vn,ie,{row:2,dispatchFn:3})}}function rs(a,e,s){const t=a.slice();return t[2]=e[s],t}function ls(a){let e,s=a[2].name+"",t,n;return{c(){e=d("option"),t=ce(s),this.h()},l(i){e=u(i,"OPTION",{});var l=D(e);t=de(l,s),l.forEach(g),this.h()},h(){e.__value=n=a[2].id,Xe(e,e.__value)},m(i,l){F(i,e,l),r(e,t)},p(i,l){l&1&&s!==(s=i[2].name+"")&&Ce(t,s),l&1&&n!==(n=i[2].id)&&(e.__value=n,Xe(e,e.__value))},d(i){i&&g(e)}}}function Rn(a){let e,s,t,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let p=0;p<v.length;p+=1)b[p]=ls(rs(a,v,p));return{c(){e=d("div"),s=d("label"),t=ce("Select the users you would like to add to the "),n=d("strong"),i=ce(a[1]),l=ce("."),f=$(),c=d("select");for(let p=0;p<b.length;p+=1)b[p].c();h=$(),m=d("div"),m.innerHTML=C,this.h()},l(p){e=u(p,"DIV",{class:!0});var _=D(e);s=u(_,"LABEL",{for:!0});var T=D(s);t=de(T,"Select the users you would like to add to the "),n=u(T,"STRONG",{});var w=D(n);i=de(w,a[1]),w.forEach(g),l=de(T,"."),T.forEach(g),f=x(_),c=u(_,"SELECT",{name:!0,class:!0,id:!0});var I=D(c);for(let L=0;L<b.length;L+=1)b[L].l(I);I.forEach(g),h=x(_),m=u(_,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),_.forEach(g),this.h()},h(){o(s,"for","users"),c.multiple=!0,o(c,"name","users"),o(c,"class","select"),o(c,"id",""),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(p,_){F(p,e,_),r(e,s),r(s,t),r(s,n),r(n,i),r(s,l),r(e,f),r(e,c);for(let T=0;T<b.length;T+=1)b[T]&&b[T].m(c,null);r(e,h),r(e,m)},p(p,[_]){if(_&2&&Ce(i,p[1]),_&1){v=be(p[0]);let T;for(T=0;T<v.length;T+=1){const w=rs(p,v,T);b[T]?b[T].p(w,_):(b[T]=ls(w),b[T].c(),b[T].m(c,null))}for(;T<b.length;T+=1)b[T].d(1);b.length=v.length}},i:J,o:J,d(p){p&&g(e),et(b,p)}}}function Gn(a,e,s){let{users:t}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&s(0,t=i.users),"group"in i&&s(1,n=i.group)},[t,n]}class Fn extends ae{constructor(e){super(),oe(this,e,Gn,Rn,ie,{users:0,group:1})}}function is(a,e,s){const t=a.slice();return t[2]=e[s],t}function as(a){let e,s="No users in this group";return{c(){e=d("p"),e.textContent=s,this.h()},l(t){e=u(t,"P",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-39f32w"&&(e.textContent=s),this.h()},h(){o(e,"class","italic")},m(t,n){F(t,e,n)},p:J,d(t){t&&g(e)}}}function os(a){let e,s,t=a[2].name+"",n,i;return{c(){e=d("li"),s=ce("- "),n=ce(t),this.h()},l(l){e=u(l,"LI",{class:!0});var f=D(e);s=de(f,"- "),n=de(f,t),f.forEach(g),this.h()},h(){o(e,"class","font-semibold"),e.value=i=a[2].id},m(l,f){F(l,e,f),r(e,s),r(e,n)},p(l,f){f&1&&t!==(t=l[2].name+"")&&Ce(n,t),f&1&&i!==(i=l[2].id)&&(e.value=i)},d(l){l&&g(e)}}}function Bn(a){let e,s,t,n,i,l,f,c,h,m,C='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',v=be(a[0]),b=[];for(let _=0;_<v.length;_+=1)b[_]=os(is(a,v,_));let p=null;return v.length||(p=as()),{c(){e=d("div"),s=d("label"),t=ce("Users in "),n=d("strong"),i=ce(a[1]),l=ce("."),f=$(),c=d("ul");for(let _=0;_<b.length;_+=1)b[_].c();p&&p.c(),h=$(),m=d("div"),m.innerHTML=C,this.h()},l(_){e=u(_,"DIV",{class:!0});var T=D(e);s=u(T,"LABEL",{for:!0});var w=D(s);t=de(w,"Users in "),n=u(w,"STRONG",{});var I=D(n);i=de(I,a[1]),I.forEach(g),l=de(w,"."),w.forEach(g),f=x(T),c=u(T,"UL",{});var L=D(c);for(let k=0;k<b.length;k+=1)b[k].l(L);p&&p.l(L),L.forEach(g),h=x(T),m=u(T,"DIV",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-tp3ijt"&&(m.innerHTML=C),T.forEach(g),this.h()},h(){o(s,"for","users"),o(m,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(_,T){F(_,e,T),r(e,s),r(s,t),r(s,n),r(n,i),r(s,l),r(e,f),r(e,c);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(c,null);p&&p.m(c,null),r(e,h),r(e,m)},p(_,[T]){if(T&2&&Ce(i,_[1]),T&1){v=be(_[0]);let w;for(w=0;w<v.length;w+=1){const I=is(_,v,w);b[w]?b[w].p(I,T):(b[w]=os(I),b[w].c(),b[w].m(c,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=v.length,!v.length&&p?p.p(_,T):v.length?p&&(p.d(1),p=null):(p=as(),p.c(),p.m(c,null))}},i:J,o:J,d(_){_&&g(e),et(b,_),p&&p.d()}}}function jn(a,e,s){let{users:t}=e,{group:n}=e;return a.$$set=i=>{"users"in i&&s(0,t=i.users),"group"in i&&s(1,n=i.group)},[t,n]}class On extends ae{constructor(e){super(),oe(this,e,jn,Bn,ie,{users:0,group:1})}}function qn(a){let e,s,t="Group name",n,i,l,f,c="Group description",h,m,C,v,b='<button class="btn variant-filled-error">Cancel</button> <button class="btn variant-filled-success">Done</button>',p,_;return{c(){e=d("div"),s=d("label"),s.textContent=t,n=$(),i=d("input"),l=$(),f=d("label"),f.textContent=c,h=$(),m=d("input"),C=$(),v=d("div"),v.innerHTML=b,this.h()},l(T){e=u(T,"DIV",{class:!0});var w=D(e);s=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(s)!=="svelte-47izbw"&&(s.textContent=t),n=x(w),i=u(w,"INPUT",{type:!0,id:!0,class:!0}),l=x(w),f=u(w,"LABEL",{for:!0,"data-svelte-h":!0}),y(f)!=="svelte-f6w4je"&&(f.textContent=c),h=x(w),m=u(w,"INPUT",{type:!0,id:!0,class:!0}),C=x(w),v=u(w,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-tp3ijt"&&(v.innerHTML=b),w.forEach(g),this.h()},h(){o(s,"for","groupName"),o(i,"type","text"),o(i,"id","groupName"),o(i,"class","input input-primary"),o(f,"for","groupDescription"),o(m,"type","text"),o(m,"id","groupDescription"),o(m,"class","input input-primary"),o(v,"class","flex gap-2 justify-end"),o(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(T,w){F(T,e,w),r(e,s),r(e,n),r(e,i),Xe(i,a[0].name),r(e,l),r(e,f),r(e,h),r(e,m),Xe(m,a[0].description),r(e,C),r(e,v),p||(_=[bt(i,"input",a[1]),bt(m,"input",a[2])],p=!0)},p(T,[w]){w&1&&i.value!==T[0].name&&Xe(i,T[0].name),w&1&&m.value!==T[0].description&&Xe(m,T[0].description)},i:J,o:J,d(T){T&&g(e),p=!1,Ts(_)}}}function zn(a,e,s){let{group:t}=e;function n(){t.name=this.value,s(0,t)}function i(){t.description=this.value,s(0,t)}return a.$$set=l=>{"group"in l&&s(0,t=l.group)},[t,n,i]}class Nn extends ae{constructor(e){super(),oe(this,e,zn,qn,ie,{group:0})}}const Pn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Wn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Jn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Yn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Zn=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Kn=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],Cs=Ne(Pn),_t=Ne(Wn),Qn=Ne(Jn),Xn=Ne(Kn),er=Ne(Zn),cs={32655:"NA",32654:"NM",32653:"ND"},tr=Ne(Yn);function ds(a,e,s){const t=a.slice();return t[6]=e[s],t[8]=s,t}function us(a,e,s){const t=a.slice();return t[6]=e[s],t[8]=s,t}function fs(a){let e,s;return{c(){e=d("h3"),s=ce(a[0]),this.h()},l(t){e=u(t,"H3",{class:!0});var n=D(e);s=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"class","h3")},m(t,n){F(t,e,n),r(e,s)},p(t,n){n&1&&Ce(s,t[0])},d(t){t&&g(e)}}}function sr(a){let e=a[6].name+"",s;return{c(){s=ce(e)},l(t){s=de(t,e)},m(t,n){F(t,s,n)},p(t,n){n&2&&e!==(e=t[6].name+"")&&Ce(s,e)},d(t){t&&g(s)}}}function ps(a){let e,s,t;function n(l){a[4](l)}let i={name:`tab${a[8]}`,value:a[8],$$slots:{default:[sr]},$$scope:{ctx:a}};return a[2]!==void 0&&(i.group=a[2]),e=new Bs({props:i}),Es.push(()=>Ms(e,"group",n)),{c(){V(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,f){H(e,l,f),t=!0},p(l,f){const c={};f&34&&(c.$$scope={dirty:f,ctx:l}),!s&&f&4&&(s=!0,c.group=l[2],Ls(()=>s=!1)),e.$set(c)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}function nr(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=ps(ds(a,t,l));const i=l=>M(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ve()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Ve()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);F(l,e,f),s=!0},p(l,f){if(f&6){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=ds(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=ps(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(rt(),c=t.length;c<n.length;c+=1)i(c);lt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)M(n[f]);s=!1},d(l){l&&g(e),et(n,l)}}}function ms(a){let e,s;return e=new it({props:{language:a[6].language,code:a[6].code}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p(t,n){const i={};n&2&&(i.language=t[6].language),n&2&&(i.code=t[6].code),e.$set(i)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function gs(a){let e,s,t=a[2]===a[8]&&ms(a);return{c(){t&&t.c(),e=Ve()},l(n){t&&t.l(n),e=Ve()},m(n,i){t&&t.m(n,i),F(n,e,i),s=!0},p(n,i){n[2]===n[8]?t?(t.p(n,i),i&4&&E(t,1)):(t=ms(n),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(rt(),M(t,1,1,()=>{t=null}),lt())},i(n){s||(E(t),s=!0)},o(n){M(t),s=!1},d(n){n&&g(e),t&&t.d(n)}}}function rr(a){let e,s,t=be(a[1]),n=[];for(let l=0;l<t.length;l+=1)n[l]=gs(us(a,t,l));const i=l=>M(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Ve()},l(l){for(let f=0;f<n.length;f+=1)n[f].l(l);e=Ve()},m(l,f){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,f);F(l,e,f),s=!0},p(l,f){if(f&6){t=be(l[1]);let c;for(c=0;c<t.length;c+=1){const h=us(l,t,c);n[c]?(n[c].p(h,f),E(n[c],1)):(n[c]=gs(h),n[c].c(),E(n[c],1),n[c].m(e.parentNode,e))}for(rt(),c=t.length;c<n.length;c+=1)i(c);lt()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)E(n[f]);s=!0}},o(l){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)M(n[f]);s=!1},d(l){l&&g(e),et(n,l)}}}function lr(a){let e,s,t,n,i,l,f,c,h,m=a[0]&&fs(a);const C=a[3].default,v=ws(C,a,a[5],null);return c=new Fs({props:{$$slots:{panel:[rr],default:[nr]},$$scope:{ctx:a}}}),{c(){e=d("div"),s=d("div"),m&&m.c(),t=$(),n=d("div"),i=d("div"),v&&v.c(),l=$(),f=d("div"),V(c.$$.fragment),this.h()},l(b){e=u(b,"DIV",{class:!0});var p=D(e);s=u(p,"DIV",{class:!0});var _=D(s);m&&m.l(_),_.forEach(g),t=x(p),n=u(p,"DIV",{class:!0});var T=D(n);i=u(T,"DIV",{class:!0});var w=D(i);v&&v.l(w),w.forEach(g),l=x(T),f=u(T,"DIV",{class:!0});var I=D(f);A(c.$$.fragment,I),I.forEach(g),T.forEach(g),p.forEach(g),this.h()},h(){o(s,"class","py-5"),o(i,"class","flex-1"),o(f,"class","flex-1"),o(n,"class","flex card p-5 gap-10"),o(e,"class","")},m(b,p){F(b,e,p),r(e,s),m&&m.m(s,null),r(e,t),r(e,n),r(n,i),v&&v.m(i,null),r(n,l),r(n,f),H(c,f,null),h=!0},p(b,[p]){b[0]?m?m.p(b,p):(m=fs(b),m.c(),m.m(s,null)):m&&(m.d(1),m=null),v&&v.p&&(!h||p&32)&&Ds(v,C,b,b[5],h?Is(C,b[5],p,null):ys(b[5]),null);const _={};p&38&&(_.$$scope={dirty:p,ctx:b}),c.$set(_)},i(b){h||(E(v,b),E(c.$$.fragment,b),h=!0)},o(b){M(v,b),M(c.$$.fragment,b),h=!1},d(b){b&&g(e),m&&m.d(),v&&v.d(b),R(c)}}}function ir(a,e,s){let{$$slots:t={},$$scope:n}=e,{title:i}=e,{tabs:l=[]}=e,f=0;function c(h){f=h,s(2,f)}return a.$$set=h=>{"title"in h&&s(0,i=h.title),"tabs"in h&&s(1,l=h.tabs),"$$scope"in h&&s(5,n=h.$$scope)},[i,l,f,t,c,n]}class Ct extends ae{constructor(e){super(),oe(this,e,ir,lr,ie,{title:0,tabs:1})}}function ar(a){let e,s;return e=new Te({props:{config:a[0]}}),e.$on("action",a[1]),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function or(a){let e,s,t;return s=new Ct({props:{title:"CRUD",tabs:a[2],$$slots:{default:[ar]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","CRUD")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&32&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function cr(a,e,s){let t;xs(a,_t,c=>s(3,t=c));const n=ks(),i={id:"userGroupCRUD",toggle:!0,data:Cs,resizable:"both",rowHeight:40,exportable:!0,columns:{name:{minWidth:200}},optionsComponent:Hn},l=c=>{const{type:h,row:m}=c.detail;switch(h){case"CREATE":n.trigger({type:"component",title:`Add user to Group ${m.id}`,component:{ref:Fn,props:{users:t.filter(C=>C.group!==m.name),group:m.name}}});break;case"READ":n.trigger({type:"component",title:`Users in Group ${m.id}`,component:{ref:On,props:{users:t.filter(C=>C.group===m.name),group:m.name}}});break;case"UPDATE":n.trigger({type:"component",title:`Edit Group ${m.id}`,component:{ref:Nn,props:{group:m}}});break;case"DELETE":n.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${m.name}</strong>?`,response:C=>console.log("response:",C)});break}},f=[{name:"Svelte",language:"html",code:gn},{name:"tableCRUDActions",language:"typescript",code:vn},{name:"optionsComponent",language:"html",code:xn},{name:"data",language:"typescript",code:xt+`
`+_s},{name:"AddUser.svelte",language:"html",code:hn},{name:"ShowUsers.svelte",language:"html",code:bn},{name:"EditGroup.svelte",language:"html",code:$n}];return[i,l,f]}class dr extends ae{constructor(e){super(),oe(this,e,cr,or,ie,{})}}function ur(a){let e,s="Odd or even",t,n;return{c(){e=d("button"),e.textContent=s,this.h()},l(i){e=u(i,"BUTTON",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uztya3"&&(e.textContent=s),this.h()},h(){o(e,"class","btn btn-sm variant-filled-secondary")},m(i,l){F(i,e,l),t||(n=bt(e,"click",$s(a[0])),t=!0)},p:J,i:J,o:J,d(i){i&&g(e),t=!1,n()}}}function fr(a,e,s){let{row:t}=e,{dispatchFn:n}=e;const i=()=>{const l=t.id%2===0?"even":"odd";return n({type:l})};return a.$$set=l=>{"row"in l&&s(1,t=l.row),"dispatchFn"in l&&s(2,n=l.dispatchFn)},[i,t,n]}class pr extends ae{constructor(e){super(),oe(this,e,fr,ur,ie,{row:1,dispatchFn:2})}}function mr(a){let e,s;return e=new Te({props:{config:a[1]}}),e.$on("action",a[2]),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function gr(a){let e,s,t;return s=new Ct({props:{title:"Odd or even",tabs:a[0],$$slots:{default:[mr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","usersNoRoles")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&8&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function vr(a){return[[{name:"Svelte",language:"html",code:Qs},{name:"Data",language:"typescript",code:xt},{name:"TableOptions.svelte",language:"html",code:mn}],{id:"usersNoRoles",data:_t,optionsComponent:pr,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:js,colFilterComponent:Os},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},n=>{alert(n.detail.type)}]}class hr extends ae{constructor(e){super(),oe(this,e,vr,gr,ie,{})}}function br(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function $r(a){let e,s,t;return s=new tt({props:{title:"Minimal configuration",svelte:Ks,data:xt,$$slots:{default:[br]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0,id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"class","grid gap-5"),o(e,"id","users")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function xr(a){return[{id:"users",data:_t}]}class _r extends ae{constructor(e){super(),oe(this,e,xr,$r,ie,{})}}function Cr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Tr(a){let e,s,t;return s=new tt({props:{title:"Date",svelte:Xs,data:en,$$slots:{default:[Cr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","usersBD")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function wr(a){return[{id:"usersBD",data:Qn,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:s=>s.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:s=>s.getTime(),toFilterableValueFn:s=>s}}}}]}class Dr extends ae{constructor(e){super(),oe(this,e,wr,Tr,ie,{})}}function yr(a){let e,s;return{c(){e=d("input"),this.h()},l(t){e=u(t,"INPUT",{type:!0,name:!0,title:!0,id:!0}),this.h()},h(){o(e,"type","checkbox"),o(e,"name","isAdmin"),o(e,"title",a[0]),o(e,"id",s=a[1].id),e.checked=a[0],e.disabled=!0},m(t,n){F(t,e,n)},p(t,[n]){n&1&&o(e,"title",t[0]),n&2&&s!==(s=t[1].id)&&o(e,"id",s),n&1&&(e.checked=t[0])},i:J,o:J,d(t){t&&g(e)}}}function Ir(a,e,s){let{value:t}=e,{row:n}=e;return a.$$set=i=>{"value"in i&&s(0,t=i.value),"row"in i&&s(1,n=i.row)},[t,n]}class Er extends ae{constructor(e){super(),oe(this,e,Ir,yr,ie,{value:0,row:1})}}function Lr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Sr(a){let e,s,t;return s=new Ct({props:{title:"Boolean",tabs:a[1],$$slots:{default:[Lr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","boolean")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Mr(a){return[{id:"usersAndAdmins",data:Xn,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Er},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:un},{name:"Data",language:"typescript",code:fn},{name:"IsAdmin.svelte",language:"html",code:pn}]]}class Ur extends ae{constructor(e){super(),oe(this,e,Mr,Sr,ie,{})}}function kr(a){let e,s;return{c(){e=d("a"),s=ce(a[0]),this.h()},l(t){e=u(t,"A",{href:!0});var n=D(e);s=de(n,a[0]),n.forEach(g),this.h()},h(){o(e,"href",a[0])},m(t,n){F(t,e,n),r(e,s)},p(t,[n]){n&1&&Ce(s,t[0]),n&1&&o(e,"href",t[0])},i:J,o:J,d(t){t&&g(e)}}}function Vr(a,e,s){let{value:t}=e;return a.$$set=n=>{"value"in n&&s(0,t=n.value)},[t]}class Ar extends ae{constructor(e){super(),oe(this,e,Vr,kr,ie,{value:0})}}function Hr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Rr(a){let e,s,t;return s=new Ct({props:{title:"URLs (+ show columns menu)",tabs:a[1],$$slots:{default:[Hr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","URLs")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&4&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Gr(a){return[{id:"websites",data:er,showColumnsMenu:!0,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:Ar,toFilterableValueFn:t=>t.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:on},{name:"Data",language:"typescript",code:cn},{name:"URLCell.svelte",language:"html",code:dn}]]}class Fr extends ae{constructor(e){super(),oe(this,e,Gr,Rr,ie,{})}}function Br(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function jr(a){let e,s,t;return s=new tt({props:{title:"Missing values",svelte:ln,data:an,$$slots:{default:[Br]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","combination")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Or(a){return[{id:"usersMissingIDs",data:tr,columns:{id:{header:"ID",instructions:{toStringFn:s=>s in cs?cs[s]:s.toString()}}}}]}class qr extends ae{constructor(e){super(),oe(this,e,Or,jr,ie,{})}}function zr(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p:J,i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Nr(a){let e,s,t;return s=new tt({props:{title:"Table component",svelte:Zs,data:_s,$$slots:{default:[zr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","groups")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Pr(a){return[{id:"userGroups",data:Cs,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class Wr extends ae{constructor(e){super(),oe(this,e,Pr,Nr,ie,{})}}function vs(a,e,s){const t=a.slice();return t[1]=e[s],t}function hs(a){let e,s,t=a[1].name+"",n,i,l,f,c=a[1].group+"",h,m;return{c(){e=d("tr"),s=d("td"),n=ce(t),i=$(),l=d("td"),f=d("div"),h=ce(c),m=$()},l(C){e=u(C,"TR",{});var v=D(e);s=u(v,"TD",{});var b=D(s);n=de(b,t),b.forEach(g),i=x(v),l=u(v,"TD",{});var p=D(l);f=u(p,"DIV",{});var _=D(f);h=de(_,c),_.forEach(g),p.forEach(g),m=x(v),v.forEach(g)},m(C,v){F(C,e,v),r(e,s),r(s,n),r(e,i),r(e,l),r(l,f),r(f,h),r(e,m)},p(C,v){v&1&&t!==(t=C[1].name+"")&&Ce(n,t),v&1&&c!==(c=C[1].group+"")&&Ce(h,c)},d(C){C&&g(e)}}}function Jr(a){let e,s="Used classes are important to include for the table to have a uniform look.",t,n,i,l,f='<tr class="bg-primary-300 dark:bg-primary-500"><th class="!p-2">Group</th> <th class="!p-2">Description</th></tr>',c,h,m=be(a[0]),C=[];for(let v=0;v<m.length;v+=1)C[v]=hs(vs(a,m,v));return{c(){e=d("div"),e.textContent=s,t=$(),n=d("div"),i=d("table"),l=d("thead"),l.innerHTML=f,c=$(),h=d("tbody");for(let v=0;v<C.length;v+=1)C[v].c();this.h()},l(v){e=u(v,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-13bu6yg"&&(e.textContent=s),t=x(v),n=u(v,"DIV",{class:!0});var b=D(n);i=u(b,"TABLE",{class:!0});var p=D(i);l=u(p,"THEAD",{"data-svelte-h":!0}),y(l)!=="svelte-1c1p3f3"&&(l.innerHTML=f),c=x(p),h=u(p,"TBODY",{});var _=D(h);for(let T=0;T<C.length;T+=1)C[T].l(_);_.forEach(g),p.forEach(g),b.forEach(g),this.h()},h(){o(e,"class","pb-2"),o(i,"class","table table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10"),o(n,"class","table-container")},m(v,b){F(v,e,b),F(v,t,b),F(v,n,b),r(n,i),r(i,l),r(i,c),r(i,h);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(h,null)},p(v,b){if(b&1){m=be(v[0]);let p;for(p=0;p<m.length;p+=1){const _=vs(v,m,p);C[p]?C[p].p(_,b):(C[p]=hs(_),C[p].c(),C[p].m(h,null))}for(;p<C.length;p+=1)C[p].d(1);C.length=m.length}},d(v){v&&(g(e),g(t),g(n)),et(C,v)}}}function Yr(a){let e,s,t;return s=new tt({props:{title:"Simple table without Table component",svelte:Ys,data:xt,$$slots:{default:[Jr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","simpleTable")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&17&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function Zr(a,e,s){let t;return xs(a,_t,n=>s(0,t=n)),[t]}class Kr extends ae{constructor(e){super(),oe(this,e,Zr,Yr,ie,{})}}function bs(a){let e,s;return e=new Te({props:{config:a[0]}}),{c(){V(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),s=!0},p(t,n){const i={};n&1&&(i.config=t[0]),e.$set(i)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Qr(a){let e,s,t=a[0]&&bs(a);return{c(){t&&t.c(),e=Ve()},l(n){t&&t.l(n),e=Ve()},m(n,i){t&&t.m(n,i),F(n,e,i),s=!0},p(n,i){n[0]?t?(t.p(n,i),i&1&&E(t,1)):(t=bs(n),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(rt(),M(t,1,1,()=>{t=null}),lt())},i(n){s||(E(t),s=!0)},o(n){M(t),s=!1},d(n){n&&g(e),t&&t.d(n)}}}function Xr(a){let e,s,t;return s=new tt({props:{title:"Server-side table",svelte:_n,$$slots:{default:[Qr]},$$scope:{ctx:a}}}),{c(){e=d("div"),V(s.$$.fragment),this.h()},l(n){e=u(n,"DIV",{id:!0});var i=D(e);A(s.$$.fragment,i),i.forEach(g),this.h()},h(){o(e,"id","serverTableExample")},m(n,i){F(n,e,i),H(s,e,null),t=!0},p(n,[i]){const l={};i&3&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){t||(E(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){n&&g(e),R(s)}}}function el(a,e,s){let t;return Ss(async()=>{qs("https://dev.bexis2.uni-jena.de/","admin","123456");const n=Ne([]);s(0,t={id:"serverTable",data:n,server:{baseUrl:"https://dev.bexis2.uni-jena.de/api/datatable/",entityId:1,versionId:-1}})}),[t]}class tl extends ae{constructor(e){super(),oe(this,e,el,Xr,ie,{})}}function sl(a){let e,s,t="Examples",n,i,l,f,c,h,m,C,v,b="Dispatching Actions",p,_,T,w,I,L,k,B="Complex data types",N,P,ne,q,W,ee,Q,K,X,te,U,O="Server-side tables",z,Y,ue,se,re;return i=new Kr({}),f=new Wr({}),h=new _r({}),_=new hr({}),w=new dr({}),P=new Dr({}),q=new qr({}),ee=new Fr({}),K=new Ur({}),Y=new tl({}),se=new Us({}),{c(){e=d("div"),s=d("h2"),s.textContent=t,n=$(),V(i.$$.fragment),l=$(),V(f.$$.fragment),c=$(),V(h.$$.fragment),m=$(),C=d("div"),v=d("h2"),v.textContent=b,p=$(),V(_.$$.fragment),T=$(),V(w.$$.fragment),I=$(),L=d("div"),k=d("h2"),k.textContent=B,N=$(),V(P.$$.fragment),ne=$(),V(q.$$.fragment),W=$(),V(ee.$$.fragment),Q=$(),V(K.$$.fragment),X=$(),te=d("div"),U=d("h2"),U.textContent=O,z=$(),V(Y.$$.fragment),ue=$(),V(se.$$.fragment),this.h()},l(S){e=u(S,"DIV",{class:!0});var j=D(e);s=u(j,"H2",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-cjx2zy"&&(s.textContent=t),n=x(j),A(i.$$.fragment,j),l=x(j),A(f.$$.fragment,j),c=x(j),A(h.$$.fragment,j),m=x(j),C=u(j,"DIV",{id:!0,class:!0});var fe=D(C);v=u(fe,"H2",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-1k9ieh2"&&(v.textContent=b),p=x(fe),A(_.$$.fragment,fe),T=x(fe),A(w.$$.fragment,fe),fe.forEach(g),I=x(j),L=u(j,"DIV",{id:!0});var G=D(L);k=u(G,"H2",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-1jb1d8k"&&(k.textContent=B),N=x(G),A(P.$$.fragment,G),ne=x(G),A(q.$$.fragment,G),W=x(G),A(ee.$$.fragment,G),Q=x(G),A(K.$$.fragment,G),G.forEach(g),X=x(j),te=u(j,"DIV",{id:!0});var le=D(te);U=u(le,"H2",{class:!0,"data-svelte-h":!0}),y(U)!=="svelte-1q6xzmp"&&(U.textContent=O),z=x(le),A(Y.$$.fragment,le),le.forEach(g),j.forEach(g),ue=x(S),A(se.$$.fragment,S),this.h()},h(){o(s,"class","h2"),o(v,"class","h2"),o(C,"id","actionDispatchersExamples"),o(C,"class","my-20"),o(k,"class","h2"),o(L,"id","complexTypes"),o(U,"class","h2"),o(te,"id","Server-side"),o(e,"class","grid gap-1 w-full overflow-auto")},m(S,j){F(S,e,j),r(e,s),r(e,n),H(i,e,null),r(e,l),H(f,e,null),r(e,c),H(h,e,null),r(e,m),r(e,C),r(C,v),r(C,p),H(_,C,null),r(C,T),H(w,C,null),r(e,I),r(e,L),r(L,k),r(L,N),H(P,L,null),r(L,ne),H(q,L,null),r(L,W),H(ee,L,null),r(L,Q),H(K,L,null),r(e,X),r(e,te),r(te,U),r(te,z),H(Y,te,null),F(S,ue,j),H(se,S,j),re=!0},p:J,i(S){re||(E(i.$$.fragment,S),E(f.$$.fragment,S),E(h.$$.fragment,S),E(_.$$.fragment,S),E(w.$$.fragment,S),E(P.$$.fragment,S),E(q.$$.fragment,S),E(ee.$$.fragment,S),E(K.$$.fragment,S),E(Y.$$.fragment,S),E(se.$$.fragment,S),re=!0)},o(S){M(i.$$.fragment,S),M(f.$$.fragment,S),M(h.$$.fragment,S),M(_.$$.fragment,S),M(w.$$.fragment,S),M(P.$$.fragment,S),M(q.$$.fragment,S),M(ee.$$.fragment,S),M(K.$$.fragment,S),M(Y.$$.fragment,S),M(se.$$.fragment,S),re=!1},d(S){S&&(g(e),g(ue)),R(i),R(f),R(h),R(_),R(w),R(P),R(q),R(ee),R(K),R(Y),R(se,S)}}}class nl extends ae{constructor(e){super(),oe(this,e,null,sl,ie,{})}}function rl(a){let e,s,t,n,i="on:action",l,f,c="(action: CustomEvent<any>) => {}",h,m,C,v='To dispatch actions and listen to dispatchers you need to create a table with your own <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> component.',b,p,_,T='Every <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">optionsComponent</code> will get 2 props:',w,I,L='<div class="flex gap-2"><div class="italic">row:</div> <div class="font-bold">Object</div></div> <p class="text-xl pl-10">The current row in the table. In other words, a single object from the data store.</p>',k,B,N,P,ne="dispatchFn:",q,W,ee="(obj: any) => dispatch('action', obj)",Q,K,X,te=`A function that takes an object and dispatches an action with the name <code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action</code>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500">action.detail</code> property.`;return{c(){e=d("div"),s=d("div"),t=d("div"),n=d("h3"),n.textContent=i,l=$(),f=d("h3"),h=ce(c),m=$(),C=d("p"),C.innerHTML=v,b=$(),p=d("div"),_=d("p"),_.innerHTML=T,w=$(),I=d("div"),I.innerHTML=L,k=$(),B=d("div"),N=d("div"),P=d("div"),P.textContent=ne,q=$(),W=d("div"),Q=ce(ee),K=$(),X=d("p"),X.innerHTML=te,this.h()},l(U){e=u(U,"DIV",{class:!0});var O=D(e);s=u(O,"DIV",{class:!0,id:!0});var z=D(s);t=u(z,"DIV",{class:!0});var Y=D(t);n=u(Y,"H3",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-gluzn7"&&(n.textContent=i),l=x(Y),f=u(Y,"H3",{class:!0});var ue=D(f);h=de(ue,c),ue.forEach(g),Y.forEach(g),m=x(z),C=u(z,"P",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-jcdyxg"&&(C.innerHTML=v),b=x(z),p=u(z,"DIV",{class:!0});var se=D(p);_=u(se,"P",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-f80bs7"&&(_.innerHTML=T),w=x(se),I=u(se,"DIV",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-6bma7r"&&(I.innerHTML=L),k=x(se),B=u(se,"DIV",{class:!0});var re=D(B);N=u(re,"DIV",{class:!0});var S=D(N);P=u(S,"DIV",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-efz5t5"&&(P.textContent=ne),q=x(S),W=u(S,"DIV",{class:!0});var j=D(W);Q=de(j,ee),j.forEach(g),S.forEach(g),K=x(re),X=u(re,"P",{class:!0,"data-svelte-h":!0}),y(X)!=="svelte-2ll7ks"&&(X.innerHTML=te),re.forEach(g),se.forEach(g),z.forEach(g),O.forEach(g),this.h()},h(){o(n,"class","italic font-semibold"),o(f,"class","font-semibold"),o(t,"class","flex gap-3 h3"),o(C,"class","text-xl underline"),o(_,"class","text-xl"),o(I,"class","items-center mt-2"),o(P,"class","italic"),o(W,"class","font-bold"),o(N,"class","flex gap-2"),o(X,"class","text-xl pl-10"),o(B,"class","items-center mt-2"),o(p,"class","mt-5"),o(s,"class","grid gap-2"),o(s,"id","actionDispatchersDocs"),o(e,"class","grid gap-5")},m(U,O){F(U,e,O),r(e,s),r(s,t),r(t,n),r(t,l),r(t,f),r(f,h),r(s,m),r(s,C),r(s,b),r(s,p),r(p,_),r(p,w),r(p,I),r(p,k),r(p,B),r(B,N),r(N,P),r(N,q),r(N,W),r(W,Q),r(B,K),r(B,X)},p:J,i:J,o:J,d(U){U&&g(e)}}}class ll extends ae{constructor(e){super(),oe(this,e,null,rl,ie,{})}}function il(a){let e,s,t,n="Table",i,l,f="Props",c,h,m,C,v="Types",b,p,_,T,w,I,L,k,B,N,P,ne="Action Dispatchers",q,W,ee,Q,K,X,te;return h=new Js({}),p=new wn({}),T=new In({}),I=new Sn({}),k=new kn({}),W=new ll({}),Q=new nl({}),{c(){e=d("div"),s=d("div"),t=d("h1"),t.textContent=n,i=$(),l=d("h2"),l.textContent=f,c=$(),V(h.$$.fragment),m=$(),C=d("h2"),C.textContent=v,b=$(),V(p.$$.fragment),_=$(),V(T.$$.fragment),w=$(),V(I.$$.fragment),L=$(),V(k.$$.fragment),B=$(),N=d("div"),P=d("h2"),P.textContent=ne,q=$(),V(W.$$.fragment),ee=$(),V(Q.$$.fragment),this.h()},l(U){e=u(U,"DIV",{class:!0});var O=D(e);s=u(O,"DIV",{class:!0});var z=D(s);t=u(z,"H1",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1iqv81h"&&(t.textContent=n),i=x(z),l=u(z,"H2",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-qeq1bp"&&(l.textContent=f),c=x(z),A(h.$$.fragment,z),m=x(z),C=u(z,"H2",{class:!0,"data-svelte-h":!0}),y(C)!=="svelte-uxqqy2"&&(C.textContent=v),b=x(z),A(p.$$.fragment,z),z.forEach(g),_=x(O),A(T.$$.fragment,O),w=x(O),A(I.$$.fragment,O),L=x(O),A(k.$$.fragment,O),B=x(O),N=u(O,"DIV",{class:!0});var Y=D(N);P=u(Y,"H2",{class:!0,"data-svelte-h":!0}),y(P)!=="svelte-5p51xv"&&(P.textContent=ne),q=x(Y),A(W.$$.fragment,Y),Y.forEach(g),ee=x(O),A(Q.$$.fragment,O),O.forEach(g),this.h()},h(){o(t,"class","font-bold !text-6xl"),o(l,"class","h2"),o(C,"class","h2"),o(s,"class","grid gap-5"),o(P,"class","h2"),o(N,"class","grid gap-5"),o(e,"class","grid gap-20 p-10 dark:bg-surface-800")},m(U,O){F(U,e,O),r(e,s),r(s,t),r(s,i),r(s,l),r(s,c),H(h,s,null),r(s,m),r(s,C),r(s,b),H(p,s,null),r(e,_),H(T,e,null),r(e,w),H(I,e,null),r(e,L),H(k,e,null),r(e,B),r(e,N),r(N,P),r(N,q),H(W,N,null),r(e,ee),H(Q,e,null),K=!0,X||(te=nt(Ps.call(null,e,{mode:"generate",scrollTarget:"#page-content"})),X=!0)},p:J,i(U){K||(E(h.$$.fragment,U),E(p.$$.fragment,U),E(T.$$.fragment,U),E(I.$$.fragment,U),E(k.$$.fragment,U),E(W.$$.fragment,U),E(Q.$$.fragment,U),K=!0)},o(U){M(h.$$.fragment,U),M(p.$$.fragment,U),M(T.$$.fragment,U),M(I.$$.fragment,U),M(k.$$.fragment,U),M(W.$$.fragment,U),M(Q.$$.fragment,U),K=!1},d(U){U&&g(e),R(h),R(p),R(T),R(I),R(k),R(W),R(Q),X=!1,te()}}}class yl extends ae{constructor(e){super(),oe(this,e,null,il,ie,{})}}export{yl as component};
