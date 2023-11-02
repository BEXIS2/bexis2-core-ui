import{S as be,i as _e,s as $e,k as o,q as m,a as g,y as N,l as i,m as c,r as h,h as a,c as b,z as j,n,b as Y,D as t,A as H,a6 as dr,W as se,g as G,d as O,B as W,v as ur,f as fr,U as Us,M as cr,a1 as fl,u as as,a5 as or,O as vl,C as gl,E as bl,F as _l,G as $l,e as Vs,w as Dl,a0 as El,a2 as wl,V as pl}from"../chunks/index.a4c6af49.js";/* empty css                             */import{p as pr}from"../chunks/floating-ui.dom.06a5fcc9.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6b6ffce1.js";import{C as Gs}from"../chunks/store.3a6ec3b2.js";import{m as ir,M as Tl}from"../chunks/Modal.5a03f7ea.js";import{F as Cl,e as yl,g as Il,d as xl,c as Vl}from"../chunks/index.939af9e7.js";import{w as Ss}from"../chunks/index.8e4ddf86.js";import{a as Ul,b as Sl,T as ds,c as Al,d as Rl,C as Bs}from"../chunks/CodeContainer.bab836a8.js";const Fl=`
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
</div>`,kl=`
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

<Table config={groupConfig} />`,ml=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Gl=`
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

<Table config={usersConfig} />`,mr=`
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
				
export const usersStore = writable<User[]>(users);`,Bl=`
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
/>`,Ol=`
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

<Table config={usersBDConfig} />`,Ll=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Ml=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	toggle?: boolean;
	fitToScreen?: boolean;
	height?: null | number;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,Pl=`
export interface Columns {
	[key: string]: Column;
}`,Nl=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,jl=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,Hl=`
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

<Table config={usersMissingIDsConfig} />`,Wl=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,zl=`
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
`,Jl=`
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
`,ql=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Yl=`
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
<\/script>`,Kl=`
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
`,Ql=`
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
`,Xl=`
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
`,Zl=`
<script lang="ts">
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
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
<Modal />`,ea=`
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
`,ta=`
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
`,sa=`
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
`,ra=`
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
`,la=`
<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
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
`;function aa(f){let e,r,s,l="TableConfig <T>",u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z,q,X,K,J,re,B,L,P,Q="Writable <T[]>",ue,le,ee,Me,He,De,rt,oe,ie,ae,Ve,ke,Ee,fe,lt,We,Z,pe,Ce,ze,it,ye,Be,we,Oe,me,Ue,ce,ct,dt,he,Te,Se,Ie,Ae,Re,Je,Xe,ut,ft,pt,mt,Ze,Fe,ve,Le,ht,vt,gt,bt,qe,et,kt,Ye,qt,Ke,de,ge,Pe,Et,Yt,at,nt,Kt,wt,Tt,Gt,Qe,Ge,Ne,Ct,Bt,ot,yt,Xt="SvelteComponent",It,Ot,je,Qt,Lt,xe,te,xt,_t,tt,Mt,Vt,Ut,Pt,ns="number[]",Zt,St,st,es,ts,$t,At,Nt,vs,gs,jt,As="number",os,is,ss,bs,_s,Rt,Ft,rs,$s,Ds,Ht,us="Columns",Es,ws,Wt,cs,zt,Ts,Cs,fs,ys,ps;return _=new Gs({props:{language:"ts",code:Ml}}),{c(){e=o("div"),r=o("div"),s=o("h3"),u=m(l),d=g(),v=o("button"),p=m("Show type details"),$=g(),D=o("div"),I=m("Underlined attributes are "),T=o("strong"),C=m("required"),U=m("."),A=g(),V=o("div"),N(_.$$.fragment),y=g(),w=o("div"),E=o("div"),x=o("div"),M=m("id:"),R=g(),F=o("div"),S=m("string"),k=g(),z=o("p"),q=m("Unique identifier for the table to generate unique IDs for the filters."),X=g(),K=o("div"),J=o("div"),re=o("div"),B=m("data:"),L=g(),P=o("div"),ue=m(Q),le=g(),ee=o("p"),Me=m("A writable store of the type "),He=o("code"),De=m("T[]"),rt=m(". Any changes in the store will be reflected in the table."),oe=g(),ie=o("div"),ae=o("div"),Ve=o("div"),ke=m("toggle:"),Ee=g(),fe=o("div"),lt=m("boolean"),We=g(),Z=o("p"),pe=m("Whether the "),Ce=o("code"),ze=m("fitToScreen"),it=m(`
			toggle should be visible.
			`),ye=o("code"),Be=m("false"),we=m(" by default."),Oe=g(),me=o("div"),Ue=o("div"),ce=o("div"),ct=m("resizable:"),dt=g(),he=o("div"),Te=o("i"),Se=m('"rows"'),Ie=m(", "),Ae=o("i"),Re=m('"columns"'),Je=m(" or "),Xe=o("i"),ut=m('"both"'),ft=g(),pt=o("p"),mt=m("Whether rows, columns or both should be resizable. Not resizable by default."),Ze=g(),Fe=o("div"),ve=o("div"),Le=o("div"),ht=m("fitToScreen:"),vt=g(),gt=o("div"),bt=m("boolean"),qe=g(),et=o("p"),kt=m("Whether the table takes the whole width. "),Ye=o("code"),qt=m("true"),Ke=m(" by default."),de=g(),ge=o("div"),Pe=o("div"),Et=o("div"),Yt=m("height:"),at=g(),nt=o("div"),Kt=m("number"),wt=g(),Tt=o("p"),Gt=m("Custom height for the table in pixels."),Qe=g(),Ge=o("div"),Ne=o("div"),Ct=o("div"),Bt=m("optionsComponent:"),ot=g(),yt=o("div"),It=m(Xt),Ot=g(),je=o("p"),Qt=m(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Lt=o("code"),xe=m("optionsComponent"),te=m(" was provided."),xt=g(),_t=o("div"),tt=o("div"),Mt=o("div"),Vt=m("pageSizes:"),Ut=g(),Pt=o("div"),Zt=m(ns),St=g(),st=o("p"),es=m("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),ts=g(),$t=o("div"),At=o("div"),Nt=o("div"),vs=m("defaultPageSize:"),gs=g(),jt=o("div"),os=m(As),is=g(),ss=o("p"),bs=m(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),_s=g(),Rt=o("div"),Ft=o("div"),rs=o("div"),$s=m("columns:"),Ds=g(),Ht=o("div"),Es=m(us),ws=g(),Wt=o("p"),cs=m("An object with configuration for specific columns. "),zt=o("code"),Ts=m("Columns"),Cs=m(`
			object is described below.`),this.h()},l(Dt){e=i(Dt,"DIV",{class:!0});var ne=c(e);r=i(ne,"DIV",{class:!0,id:!0});var Jt=c(r);s=i(Jt,"H3",{class:!0});var Rs=c(s);u=h(Rs,l),Rs.forEach(a),d=b(Jt),v=i(Jt,"BUTTON",{class:!0});var ms=c(v);p=h(ms,"Show type details"),ms.forEach(a),$=b(Jt),D=i(Jt,"DIV",{class:!0});var ls=c(D);I=h(ls,"Underlined attributes are "),T=i(ls,"STRONG",{});var Fs=c(T);C=h(Fs,"required"),Fs.forEach(a),U=h(ls,"."),ls.forEach(a),A=b(Jt),V=i(Jt,"DIV",{class:!0,"data-popup":!0});var ks=c(V);j(_.$$.fragment,ks),ks.forEach(a),Jt.forEach(a),y=b(ne),w=i(ne,"DIV",{class:!0});var hs=c(w);E=i(hs,"DIV",{class:!0});var Os=c(E);x=i(Os,"DIV",{class:!0});var gr=c(x);M=h(gr,"id:"),gr.forEach(a),R=b(Os),F=i(Os,"DIV",{class:!0});var br=c(F);S=h(br,"string"),br.forEach(a),Os.forEach(a),k=b(hs),z=i(hs,"P",{class:!0});var _r=c(z);q=h(_r,"Unique identifier for the table to generate unique IDs for the filters."),_r.forEach(a),hs.forEach(a),X=b(ne),K=i(ne,"DIV",{class:!0});var Ls=c(K);J=i(Ls,"DIV",{class:!0});var Ms=c(J);re=i(Ms,"DIV",{class:!0});var $r=c(re);B=h($r,"data:"),$r.forEach(a),L=b(Ms),P=i(Ms,"DIV",{class:!0});var Dr=c(P);ue=h(Dr,Q),Dr.forEach(a),Ms.forEach(a),le=b(Ls),ee=i(Ls,"P",{class:!0});var Ps=c(ee);Me=h(Ps,"A writable store of the type "),He=i(Ps,"CODE",{class:!0});var Er=c(He);De=h(Er,"T[]"),Er.forEach(a),rt=h(Ps,". Any changes in the store will be reflected in the table."),Ps.forEach(a),Ls.forEach(a),oe=b(ne),ie=i(ne,"DIV",{class:!0});var Ns=c(ie);ae=i(Ns,"DIV",{class:!0});var js=c(ae);Ve=i(js,"DIV",{class:!0});var wr=c(Ve);ke=h(wr,"toggle:"),wr.forEach(a),Ee=b(js),fe=i(js,"DIV",{class:!0});var Tr=c(fe);lt=h(Tr,"boolean"),Tr.forEach(a),js.forEach(a),We=b(Ns),Z=i(Ns,"P",{class:!0});var Is=c(Z);pe=h(Is,"Whether the "),Ce=i(Is,"CODE",{class:!0});var Cr=c(Ce);ze=h(Cr,"fitToScreen"),Cr.forEach(a),it=h(Is,`
			toggle should be visible.
			`),ye=i(Is,"CODE",{class:!0});var yr=c(ye);Be=h(yr,"false"),yr.forEach(a),we=h(Is," by default."),Is.forEach(a),Ns.forEach(a),Oe=b(ne),me=i(ne,"DIV",{class:!0});var Hs=c(me);Ue=i(Hs,"DIV",{class:!0});var Ws=c(Ue);ce=i(Ws,"DIV",{class:!0});var Ir=c(ce);ct=h(Ir,"resizable:"),Ir.forEach(a),dt=b(Ws),he=i(Ws,"DIV",{class:!0});var xs=c(he);Te=i(xs,"I",{});var xr=c(Te);Se=h(xr,'"rows"'),xr.forEach(a),Ie=h(xs,", "),Ae=i(xs,"I",{});var Vr=c(Ae);Re=h(Vr,'"columns"'),Vr.forEach(a),Je=h(xs," or "),Xe=i(xs,"I",{});var Ur=c(Xe);ut=h(Ur,'"both"'),Ur.forEach(a),xs.forEach(a),Ws.forEach(a),ft=b(Hs),pt=i(Hs,"P",{class:!0});var Sr=c(pt);mt=h(Sr,"Whether rows, columns or both should be resizable. Not resizable by default."),Sr.forEach(a),Hs.forEach(a),Ze=b(ne),Fe=i(ne,"DIV",{class:!0});var zs=c(Fe);ve=i(zs,"DIV",{class:!0});var Js=c(ve);Le=i(Js,"DIV",{class:!0});var Ar=c(Le);ht=h(Ar,"fitToScreen:"),Ar.forEach(a),vt=b(Js),gt=i(Js,"DIV",{class:!0});var Rr=c(gt);bt=h(Rr,"boolean"),Rr.forEach(a),Js.forEach(a),qe=b(zs),et=i(zs,"P",{class:!0});var qs=c(et);kt=h(qs,"Whether the table takes the whole width. "),Ye=i(qs,"CODE",{class:!0});var Fr=c(Ye);qt=h(Fr,"true"),Fr.forEach(a),Ke=h(qs," by default."),qs.forEach(a),zs.forEach(a),de=b(ne),ge=i(ne,"DIV",{class:!0});var Ys=c(ge);Pe=i(Ys,"DIV",{class:!0});var Ks=c(Pe);Et=i(Ks,"DIV",{class:!0});var kr=c(Et);Yt=h(kr,"height:"),kr.forEach(a),at=b(Ks),nt=i(Ks,"DIV",{class:!0});var Gr=c(nt);Kt=h(Gr,"number"),Gr.forEach(a),Ks.forEach(a),wt=b(Ys),Tt=i(Ys,"P",{class:!0});var Br=c(Tt);Gt=h(Br,"Custom height for the table in pixels."),Br.forEach(a),Ys.forEach(a),Qe=b(ne),Ge=i(ne,"DIV",{class:!0});var Qs=c(Ge);Ne=i(Qs,"DIV",{class:!0});var Xs=c(Ne);Ct=i(Xs,"DIV",{class:!0});var Or=c(Ct);Bt=h(Or,"optionsComponent:"),Or.forEach(a),ot=b(Xs),yt=i(Xs,"DIV",{class:!0});var Lr=c(yt);It=h(Lr,Xt),Lr.forEach(a),Xs.forEach(a),Ot=b(Qs),je=i(Qs,"P",{class:!0});var Zs=c(je);Qt=h(Zs,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Lt=i(Zs,"CODE",{class:!0});var Mr=c(Lt);xe=h(Mr,"optionsComponent"),Mr.forEach(a),te=h(Zs," was provided."),Zs.forEach(a),Qs.forEach(a),xt=b(ne),_t=i(ne,"DIV",{class:!0});var er=c(_t);tt=i(er,"DIV",{class:!0});var tr=c(tt);Mt=i(tr,"DIV",{class:!0});var Pr=c(Mt);Vt=h(Pr,"pageSizes:"),Pr.forEach(a),Ut=b(tr),Pt=i(tr,"DIV",{class:!0});var Nr=c(Pt);Zt=h(Nr,ns),Nr.forEach(a),tr.forEach(a),St=b(er),st=i(er,"P",{class:!0});var jr=c(st);es=h(jr,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),jr.forEach(a),er.forEach(a),ts=b(ne),$t=i(ne,"DIV",{class:!0});var sr=c($t);At=i(sr,"DIV",{class:!0});var rr=c(At);Nt=i(rr,"DIV",{class:!0});var Hr=c(Nt);vs=h(Hr,"defaultPageSize:"),Hr.forEach(a),gs=b(rr),jt=i(rr,"DIV",{class:!0});var Wr=c(jt);os=h(Wr,As),Wr.forEach(a),rr.forEach(a),is=b(sr),ss=i(sr,"P",{class:!0});var zr=c(ss);bs=h(zr,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),zr.forEach(a),sr.forEach(a),_s=b(ne),Rt=i(ne,"DIV",{class:!0});var lr=c(Rt);Ft=i(lr,"DIV",{class:!0});var ar=c(Ft);rs=i(ar,"DIV",{class:!0});var Jr=c(rs);$s=h(Jr,"columns:"),Jr.forEach(a),Ds=b(ar),Ht=i(ar,"DIV",{class:!0});var qr=c(Ht);Es=h(qr,us),qr.forEach(a),ar.forEach(a),ws=b(lr),Wt=i(lr,"P",{class:!0});var nr=c(Wt);cs=h(nr,"An object with configuration for specific columns. "),zt=i(nr,"CODE",{class:!0});var Yr=c(zt);Ts=h(Yr,"Columns"),Yr.forEach(a),Cs=h(nr,`
			object is described below.`),nr.forEach(a),lr.forEach(a),ne.forEach(a),this.h()},h(){n(s,"class","font-semibold relative w-max h3"),n(v,"class","btn variant-ghost-primary w-min"),n(D,"class","italic div"),n(V,"class","variant-filled-secondary"),n(V,"data-popup","popupClickTableConfig"),n(r,"class","grid gap-2"),n(r,"id","tableConfig"),n(x,"class","italic"),n(F,"class","font-bold"),n(E,"class","flex gap-2 underline"),n(z,"class","text-xl pl-10"),n(w,"class","items-center"),n(re,"class","italic"),n(P,"class","font-bold"),n(J,"class","flex gap-2 underline"),n(He,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(ee,"class","text-xl pl-10"),n(K,"class","items-center"),n(Ve,"class","italic"),n(fe,"class","font-bold"),n(ae,"class","flex gap-2"),n(Ce,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(ye,"class","!text-xl bg-red-100 rounded-md p-0.5 text-red-500"),n(Z,"class","text-xl pl-10"),n(ie,"class","items-center"),n(ce,"class","italic"),n(he,"class","font-bold"),n(Ue,"class","flex gap-2"),n(pt,"class","text-xl pl-10"),n(me,"class","items-center"),n(Le,"class","italic"),n(gt,"class","font-bold"),n(ve,"class","flex gap-2"),n(Ye,"class","!text-xl bg-blue-100 rounded-md p-0.5 text-blue-500"),n(et,"class","text-xl pl-10"),n(Fe,"class","items-center"),n(Et,"class","italic"),n(nt,"class","font-bold"),n(Pe,"class","flex gap-2"),n(Tt,"class","text-xl pl-10"),n(ge,"class","items-center"),n(Ct,"class","italic"),n(yt,"class","font-bold"),n(Ne,"class","flex gap-2"),n(Lt,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(je,"class","text-xl pl-10"),n(Ge,"class","items-center"),n(Mt,"class","italic"),n(Pt,"class","font-bold"),n(tt,"class","flex gap-2"),n(st,"class","text-xl pl-10"),n(_t,"class","items-center"),n(Nt,"class","italic"),n(jt,"class","font-bold"),n(At,"class","flex gap-2"),n(ss,"class","text-xl pl-10"),n($t,"class","items-center"),n(rs,"class","italic"),n(Ht,"class","font-bold"),n(Ft,"class","flex gap-2"),n(zt,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(Wt,"class","text-xl pl-10"),n(Rt,"class","items-center"),n(e,"class","grid gap-5")},m(Dt,ne){Y(Dt,e,ne),t(e,r),t(r,s),t(s,u),t(r,d),t(r,v),t(v,p),t(r,$),t(r,D),t(D,I),t(D,T),t(T,C),t(D,U),t(r,A),t(r,V),H(_,V,null),t(e,y),t(e,w),t(w,E),t(E,x),t(x,M),t(E,R),t(E,F),t(F,S),t(w,k),t(w,z),t(z,q),t(e,X),t(e,K),t(K,J),t(J,re),t(re,B),t(J,L),t(J,P),t(P,ue),t(K,le),t(K,ee),t(ee,Me),t(ee,He),t(He,De),t(ee,rt),t(e,oe),t(e,ie),t(ie,ae),t(ae,Ve),t(Ve,ke),t(ae,Ee),t(ae,fe),t(fe,lt),t(ie,We),t(ie,Z),t(Z,pe),t(Z,Ce),t(Ce,ze),t(Z,it),t(Z,ye),t(ye,Be),t(Z,we),t(e,Oe),t(e,me),t(me,Ue),t(Ue,ce),t(ce,ct),t(Ue,dt),t(Ue,he),t(he,Te),t(Te,Se),t(he,Ie),t(he,Ae),t(Ae,Re),t(he,Je),t(he,Xe),t(Xe,ut),t(me,ft),t(me,pt),t(pt,mt),t(e,Ze),t(e,Fe),t(Fe,ve),t(ve,Le),t(Le,ht),t(ve,vt),t(ve,gt),t(gt,bt),t(Fe,qe),t(Fe,et),t(et,kt),t(et,Ye),t(Ye,qt),t(et,Ke),t(e,de),t(e,ge),t(ge,Pe),t(Pe,Et),t(Et,Yt),t(Pe,at),t(Pe,nt),t(nt,Kt),t(ge,wt),t(ge,Tt),t(Tt,Gt),t(e,Qe),t(e,Ge),t(Ge,Ne),t(Ne,Ct),t(Ct,Bt),t(Ne,ot),t(Ne,yt),t(yt,It),t(Ge,Ot),t(Ge,je),t(je,Qt),t(je,Lt),t(Lt,xe),t(je,te),t(e,xt),t(e,_t),t(_t,tt),t(tt,Mt),t(Mt,Vt),t(tt,Ut),t(tt,Pt),t(Pt,Zt),t(_t,St),t(_t,st),t(st,es),t(e,ts),t(e,$t),t($t,At),t(At,Nt),t(Nt,vs),t(At,gs),t(At,jt),t(jt,os),t($t,is),t($t,ss),t(ss,bs),t(e,_s),t(e,Rt),t(Rt,Ft),t(Ft,rs),t(rs,$s),t(Ft,Ds),t(Ft,Ht),t(Ht,Es),t(Rt,ws),t(Rt,Wt),t(Wt,cs),t(Wt,zt),t(zt,Ts),t(Wt,Cs),fs=!0,ys||(ps=dr(pr.call(null,v,f[0])),ys=!0)},p:se,i(Dt){fs||(G(_.$$.fragment,Dt),fs=!0)},o(Dt){O(_.$$.fragment,Dt),fs=!1},d(Dt){Dt&&a(e),W(_),ys=!1,ps()}}}function na(f){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class oa extends be{constructor(e){super(),_e(this,e,na,aa,$e,{})}}function ia(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z;return D=new Gs({props:{language:"ts",code:Pl}}),{c(){e=o("div"),r=o("div"),s=o("h3"),l=m("Columns"),u=g(),d=o("button"),v=m("Show type details"),p=g(),$=o("div"),N(D.$$.fragment),I=g(),T=o("div"),C=o("div"),U=o("div"),A=m("[key: "),V=o("strong"),_=m("string"),y=m("]:"),w=g(),E=o("div"),x=m("Column"),M=g(),R=o("p"),F=m(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(q){e=i(q,"DIV",{class:!0});var X=c(e);r=i(X,"DIV",{class:!0,id:!0});var K=c(r);s=i(K,"H3",{class:!0});var J=c(s);l=h(J,"Columns"),J.forEach(a),u=b(K),d=i(K,"BUTTON",{class:!0});var re=c(d);v=h(re,"Show type details"),re.forEach(a),p=b(K),$=i(K,"DIV",{"data-popup":!0});var B=c($);j(D.$$.fragment,B),B.forEach(a),K.forEach(a),I=b(X),T=i(X,"DIV",{class:!0});var L=c(T);C=i(L,"DIV",{class:!0});var P=c(C);U=i(P,"DIV",{class:!0});var Q=c(U);A=h(Q,"[key: "),V=i(Q,"STRONG",{});var ue=c(V);_=h(ue,"string"),ue.forEach(a),y=h(Q,"]:"),Q.forEach(a),w=b(P),E=i(P,"DIV",{class:!0});var le=c(E);x=h(le,"Column"),le.forEach(a),P.forEach(a),M=b(L),R=i(L,"P",{class:!0});var ee=c(R);F=h(ee,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),ee.forEach(a),L.forEach(a),X.forEach(a),this.h()},h(){n(s,"class","font-semibold items-center w-max h3"),n(d,"class","btn variant-ghost-primary w-min"),n($,"data-popup","popupClickColumns"),n(r,"class","grid gap-2"),n(r,"id","columns"),n(U,"class","italic"),n(E,"class","font-bold"),n(C,"class","flex gap-2"),n(R,"class","text-xl pl-10"),n(T,"class","items-center"),n(e,"class","grid gap-5")},m(q,X){Y(q,e,X),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,p),t(r,$),H(D,$,null),t(e,I),t(e,T),t(T,C),t(C,U),t(U,A),t(U,V),t(V,_),t(U,y),t(C,w),t(C,E),t(E,x),t(T,M),t(T,R),t(R,F),S=!0,k||(z=dr(pr.call(null,d,f[0])),k=!0)},p:se,i(q){S||(G(D.$$.fragment,q),S=!0)},o(q){O(D.$$.fragment,q),S=!1},d(q){q&&a(e),W(D),k=!1,z()}}}function ca(f){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class da extends be{constructor(e){super(),_e(this,e,ca,ia,$e,{})}}function ua(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z,q,X,K,J,re,B,L,P,Q,ue,le,ee,Me,He,De,rt,oe,ie,ae,Ve,ke,Ee,fe,lt,We,Z,pe,Ce,ze,it,ye,Be,we,Oe,me,Ue,ce,ct,dt,he,Te,Se,Ie,Ae,Re,Je,Xe,ut,ft,pt,mt,Ze,Fe,ve,Le,ht,vt,gt,bt,qe,et,kt,Ye,qt,Ke,de,ge,Pe,Et,Yt,at,nt,Kt,wt,Tt,Gt,Qe,Ge,Ne,Ct,Bt,ot,yt,Xt,It,Ot,je,Qt,Lt;return D=new Gs({props:{language:"ts",code:Nl}}),{c(){e=o("div"),r=o("div"),s=o("h3"),l=m("Column"),u=g(),d=o("button"),v=m("Show type details"),p=g(),$=o("div"),N(D.$$.fragment),I=g(),T=o("div"),C=o("div"),U=o("div"),A=m("header:"),V=g(),_=o("div"),y=m("string"),w=g(),E=o("p"),x=m(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),M=g(),R=o("div"),F=o("div"),S=o("div"),k=m("minWidth:"),z=g(),q=o("div"),X=m("number"),K=g(),J=o("p"),re=m("Minimum width in pixels for the column. By default, the column will be as wide as the content."),B=g(),L=o("div"),P=o("div"),Q=o("div"),ue=m("fixedWidth:"),le=g(),ee=o("div"),Me=m("number"),He=g(),De=o("p"),rt=m(`Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the `),oe=o("code"),ie=m("resizable"),ae=m(" property for the column."),Ve=g(),ke=o("div"),Ee=o("div"),fe=o("div"),lt=m("exclude:"),We=g(),Z=o("div"),pe=m("boolean"),Ce=g(),ze=o("p"),it=m(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),ye=g(),Be=o("div"),we=o("div"),Oe=o("div"),me=m("disableFiltering:"),Ue=g(),ce=o("div"),ct=m("boolean"),dt=g(),he=o("p"),Te=m("Whether to disable filtering for the column or not. By default, filtering is enabled."),Se=g(),Ie=o("div"),Ae=o("div"),Re=o("div"),Je=m("disableSorting:"),Xe=g(),ut=o("div"),ft=m("boolean"),pt=g(),mt=o("p"),Ze=m("Whether to disable sorting for the column or not. By default, sorting is enabled."),Fe=g(),ve=o("div"),Le=o("div"),ht=o("div"),vt=m("colFitlerFn:"),gt=g(),bt=o("div"),qe=o("a"),et=m("ColumnFilterFn"),kt=g(),Ye=o("p"),qt=m(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Ke=g(),de=o("div"),ge=o("div"),Pe=o("div"),Et=m("colFilterComponent:"),Yt=g(),at=o("div"),nt=m("SvelteComponent"),Kt=g(),wt=o("p"),Tt=m(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Gt=g(),Qe=o("div"),Ge=o("div"),Ne=o("div"),Ct=m("instructions:"),Bt=g(),ot=o("div"),yt=m("ColumnInstructions"),Xt=g(),It=o("p"),Ot=m("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(xe){e=i(xe,"DIV",{class:!0});var te=c(e);r=i(te,"DIV",{class:!0,id:!0});var xt=c(r);s=i(xt,"H3",{class:!0});var _t=c(s);l=h(_t,"Column"),_t.forEach(a),u=b(xt),d=i(xt,"BUTTON",{class:!0});var tt=c(d);v=h(tt,"Show type details"),tt.forEach(a),p=b(xt),$=i(xt,"DIV",{"data-popup":!0});var Mt=c($);j(D.$$.fragment,Mt),Mt.forEach(a),xt.forEach(a),I=b(te),T=i(te,"DIV",{class:!0});var Vt=c(T);C=i(Vt,"DIV",{class:!0});var Ut=c(C);U=i(Ut,"DIV",{class:!0});var Pt=c(U);A=h(Pt,"header:"),Pt.forEach(a),V=b(Ut),_=i(Ut,"DIV",{class:!0});var ns=c(_);y=h(ns,"string"),ns.forEach(a),Ut.forEach(a),w=b(Vt),E=i(Vt,"P",{class:!0});var Zt=c(E);x=h(Zt,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),Zt.forEach(a),Vt.forEach(a),M=b(te),R=i(te,"DIV",{class:!0});var St=c(R);F=i(St,"DIV",{class:!0});var st=c(F);S=i(st,"DIV",{class:!0});var es=c(S);k=h(es,"minWidth:"),es.forEach(a),z=b(st),q=i(st,"DIV",{class:!0});var ts=c(q);X=h(ts,"number"),ts.forEach(a),st.forEach(a),K=b(St),J=i(St,"P",{class:!0});var $t=c(J);re=h($t,"Minimum width in pixels for the column. By default, the column will be as wide as the content."),$t.forEach(a),St.forEach(a),B=b(te),L=i(te,"DIV",{class:!0});var At=c(L);P=i(At,"DIV",{class:!0});var Nt=c(P);Q=i(Nt,"DIV",{class:!0});var vs=c(Q);ue=h(vs,"fixedWidth:"),vs.forEach(a),le=b(Nt),ee=i(Nt,"DIV",{class:!0});var gs=c(ee);Me=h(gs,"number"),gs.forEach(a),Nt.forEach(a),He=b(At),De=i(At,"P",{class:!0});var jt=c(De);rt=h(jt,`Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the `),oe=i(jt,"CODE",{class:!0});var As=c(oe);ie=h(As,"resizable"),As.forEach(a),ae=h(jt," property for the column."),jt.forEach(a),At.forEach(a),Ve=b(te),ke=i(te,"DIV",{class:!0});var os=c(ke);Ee=i(os,"DIV",{class:!0});var is=c(Ee);fe=i(is,"DIV",{class:!0});var ss=c(fe);lt=h(ss,"exclude:"),ss.forEach(a),We=b(is),Z=i(is,"DIV",{class:!0});var bs=c(Z);pe=h(bs,"boolean"),bs.forEach(a),is.forEach(a),Ce=b(os),ze=i(os,"P",{class:!0});var _s=c(ze);it=h(_s,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),_s.forEach(a),os.forEach(a),ye=b(te),Be=i(te,"DIV",{class:!0});var Rt=c(Be);we=i(Rt,"DIV",{class:!0});var Ft=c(we);Oe=i(Ft,"DIV",{class:!0});var rs=c(Oe);me=h(rs,"disableFiltering:"),rs.forEach(a),Ue=b(Ft),ce=i(Ft,"DIV",{class:!0});var $s=c(ce);ct=h($s,"boolean"),$s.forEach(a),Ft.forEach(a),dt=b(Rt),he=i(Rt,"P",{class:!0});var Ds=c(he);Te=h(Ds,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Ds.forEach(a),Rt.forEach(a),Se=b(te),Ie=i(te,"DIV",{class:!0});var Ht=c(Ie);Ae=i(Ht,"DIV",{class:!0});var us=c(Ae);Re=i(us,"DIV",{class:!0});var Es=c(Re);Je=h(Es,"disableSorting:"),Es.forEach(a),Xe=b(us),ut=i(us,"DIV",{class:!0});var ws=c(ut);ft=h(ws,"boolean"),ws.forEach(a),us.forEach(a),pt=b(Ht),mt=i(Ht,"P",{class:!0});var Wt=c(mt);Ze=h(Wt,"Whether to disable sorting for the column or not. By default, sorting is enabled."),Wt.forEach(a),Ht.forEach(a),Fe=b(te),ve=i(te,"DIV",{class:!0});var cs=c(ve);Le=i(cs,"DIV",{class:!0});var zt=c(Le);ht=i(zt,"DIV",{class:!0});var Ts=c(ht);vt=h(Ts,"colFitlerFn:"),Ts.forEach(a),gt=b(zt),bt=i(zt,"DIV",{class:!0});var Cs=c(bt);qe=i(Cs,"A",{href:!0});var fs=c(qe);et=h(fs,"ColumnFilterFn"),fs.forEach(a),Cs.forEach(a),zt.forEach(a),kt=b(cs),Ye=i(cs,"P",{class:!0});var ys=c(Ye);qt=h(ys,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),ys.forEach(a),cs.forEach(a),Ke=b(te),de=i(te,"DIV",{class:!0});var ps=c(de);ge=i(ps,"DIV",{class:!0});var Dt=c(ge);Pe=i(Dt,"DIV",{class:!0});var ne=c(Pe);Et=h(ne,"colFilterComponent:"),ne.forEach(a),Yt=b(Dt),at=i(Dt,"DIV",{class:!0});var Jt=c(at);nt=h(Jt,"SvelteComponent"),Jt.forEach(a),Dt.forEach(a),Kt=b(ps),wt=i(ps,"P",{class:!0});var Rs=c(wt);Tt=h(Rs,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Rs.forEach(a),ps.forEach(a),Gt=b(te),Qe=i(te,"DIV",{class:!0});var ms=c(Qe);Ge=i(ms,"DIV",{class:!0});var ls=c(Ge);Ne=i(ls,"DIV",{class:!0});var Fs=c(Ne);Ct=h(Fs,"instructions:"),Fs.forEach(a),Bt=b(ls),ot=i(ls,"DIV",{class:!0});var ks=c(ot);yt=h(ks,"ColumnInstructions"),ks.forEach(a),ls.forEach(a),Xt=b(ms),It=i(ms,"P",{class:!0});var hs=c(It);Ot=h(hs,"Configuration for the column's appearance, sorting and filtering functionalities."),hs.forEach(a),ms.forEach(a),te.forEach(a),this.h()},h(){n(s,"class","font-semibold items-center w-max h3"),n(d,"class","btn variant-ghost-primary w-min"),n($,"data-popup","popupClickColumn"),n(r,"class","grid gap-2"),n(r,"id","column"),n(U,"class","italic"),n(_,"class","font-bold"),n(C,"class","flex gap-2"),n(E,"class","text-xl pl-10"),n(T,"class","items-center"),n(S,"class","italic"),n(q,"class","font-bold"),n(F,"class","flex gap-2"),n(J,"class","text-xl pl-10"),n(R,"class","items-center"),n(Q,"class","italic"),n(ee,"class","font-bold"),n(P,"class","flex gap-2"),n(oe,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(De,"class","text-xl pl-10"),n(L,"class","items-center"),n(fe,"class","italic"),n(Z,"class","font-bold"),n(Ee,"class","flex gap-2"),n(ze,"class","text-xl pl-10"),n(ke,"class","items-center"),n(Oe,"class","italic"),n(ce,"class","font-bold"),n(we,"class","flex gap-2"),n(he,"class","text-xl pl-10"),n(Be,"class","items-center"),n(Re,"class","italic"),n(ut,"class","font-bold"),n(Ae,"class","flex gap-2"),n(mt,"class","text-xl pl-10"),n(Ie,"class","items-center"),n(ht,"class","italic"),n(qe,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),n(bt,"class","font-bold"),n(Le,"class","flex gap-2"),n(Ye,"class","text-xl pl-10"),n(ve,"class","items-center"),n(Pe,"class","italic"),n(at,"class","font-bold"),n(ge,"class","flex gap-2"),n(wt,"class","text-xl pl-10"),n(de,"class","items-center"),n(Ne,"class","italic"),n(ot,"class","font-bold"),n(Ge,"class","flex gap-2"),n(It,"class","text-xl pl-10"),n(Qe,"class","items-center"),n(e,"class","grid gap-5")},m(xe,te){Y(xe,e,te),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,p),t(r,$),H(D,$,null),t(e,I),t(e,T),t(T,C),t(C,U),t(U,A),t(C,V),t(C,_),t(_,y),t(T,w),t(T,E),t(E,x),t(e,M),t(e,R),t(R,F),t(F,S),t(S,k),t(F,z),t(F,q),t(q,X),t(R,K),t(R,J),t(J,re),t(e,B),t(e,L),t(L,P),t(P,Q),t(Q,ue),t(P,le),t(P,ee),t(ee,Me),t(L,He),t(L,De),t(De,rt),t(De,oe),t(oe,ie),t(De,ae),t(e,Ve),t(e,ke),t(ke,Ee),t(Ee,fe),t(fe,lt),t(Ee,We),t(Ee,Z),t(Z,pe),t(ke,Ce),t(ke,ze),t(ze,it),t(e,ye),t(e,Be),t(Be,we),t(we,Oe),t(Oe,me),t(we,Ue),t(we,ce),t(ce,ct),t(Be,dt),t(Be,he),t(he,Te),t(e,Se),t(e,Ie),t(Ie,Ae),t(Ae,Re),t(Re,Je),t(Ae,Xe),t(Ae,ut),t(ut,ft),t(Ie,pt),t(Ie,mt),t(mt,Ze),t(e,Fe),t(e,ve),t(ve,Le),t(Le,ht),t(ht,vt),t(Le,gt),t(Le,bt),t(bt,qe),t(qe,et),t(ve,kt),t(ve,Ye),t(Ye,qt),t(e,Ke),t(e,de),t(de,ge),t(ge,Pe),t(Pe,Et),t(ge,Yt),t(ge,at),t(at,nt),t(de,Kt),t(de,wt),t(wt,Tt),t(e,Gt),t(e,Qe),t(Qe,Ge),t(Ge,Ne),t(Ne,Ct),t(Ge,Bt),t(Ge,ot),t(ot,yt),t(Qe,Xt),t(Qe,It),t(It,Ot),je=!0,Qt||(Lt=dr(pr.call(null,d,f[0])),Qt=!0)},p:se,i(xe){je||(G(D.$$.fragment,xe),je=!0)},o(xe){O(D.$$.fragment,xe),je=!1},d(xe){xe&&a(e),W(D),Qt=!1,Lt()}}}function fa(f){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class pa extends be{constructor(e){super(),_e(this,e,fa,ua,$e,{})}}function ma(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z,q,X,K,J,re,B,L,P,Q,ue,le,ee,Me,He,De,rt,oe,ie,ae,Ve,ke,Ee,fe,lt,We,Z,pe,Ce,ze,it,ye,Be,we,Oe,me,Ue,ce,ct,dt,he,Te,Se,Ie,Ae,Re,Je,Xe,ut,ft,pt,mt,Ze,Fe,ve,Le,ht,vt,gt,bt,qe,et,kt,Ye,qt;return D=new Gs({props:{language:"ts",code:jl}}),{c(){e=o("div"),r=o("div"),s=o("h3"),l=m("ColumnInstructions"),u=g(),d=o("button"),v=m("Show type details"),p=g(),$=o("div"),N(D.$$.fragment),I=g(),T=o("div"),C=o("div"),U=o("div"),A=m("toStringFn:"),V=g(),_=o("div"),y=m("(value: any) => string"),w=g(),E=o("p"),x=m("Custom toString function to be applied on the column."),M=g(),R=o("div"),F=o("div"),S=o("div"),k=m("toSortableValueFn:"),z=g(),q=o("div"),X=m("(value: any) => string | number"),K=g(),J=o("p"),re=m("Custom function to return either a string or a number value to have a sortable column."),B=g(),L=o("div"),P=o("div"),Q=o("div"),ue=m("toFilterableValueFn:"),le=g(),ee=o("div"),Me=m("(value: any) => string | number | Date"),He=g(),De=o("p"),rt=m(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),oe=g(),ie=o("div"),ae=o("div"),Ve=o("div"),ke=m("renderComponent:"),Ee=g(),fe=o("div"),lt=m("SvelteComponent"),We=g(),Z=o("div"),pe=o("p"),Ce=o("code"),ze=m("renderComponent"),it=m(" overrides "),ye=o("code"),Be=m("toStringFn"),we=m("."),Oe=g(),me=o("p"),Ue=m("Every "),ce=o("code"),ct=m("renderComponent"),dt=m(" will get 2 props:"),he=g(),Te=o("div"),Se=o("div"),Ie=o("div"),Ae=m("row:"),Re=g(),Je=o("div"),Xe=m("Object"),ut=g(),ft=o("p"),pt=m("The current row in the table. In other words, a single object from the data store."),mt=g(),Ze=o("div"),Fe=o("div"),ve=o("div"),Le=m("value:"),ht=g(),vt=o("div"),gt=m("any"),bt=g(),qe=o("p"),et=m("The value of the current cell."),this.h()},l(Ke){e=i(Ke,"DIV",{class:!0});var de=c(e);r=i(de,"DIV",{class:!0,id:!0});var ge=c(r);s=i(ge,"H3",{class:!0});var Pe=c(s);l=h(Pe,"ColumnInstructions"),Pe.forEach(a),u=b(ge),d=i(ge,"BUTTON",{class:!0});var Et=c(d);v=h(Et,"Show type details"),Et.forEach(a),p=b(ge),$=i(ge,"DIV",{"data-popup":!0});var Yt=c($);j(D.$$.fragment,Yt),Yt.forEach(a),ge.forEach(a),I=b(de),T=i(de,"DIV",{class:!0});var at=c(T);C=i(at,"DIV",{class:!0});var nt=c(C);U=i(nt,"DIV",{class:!0});var Kt=c(U);A=h(Kt,"toStringFn:"),Kt.forEach(a),V=b(nt),_=i(nt,"DIV",{class:!0});var wt=c(_);y=h(wt,"(value: any) => string"),wt.forEach(a),nt.forEach(a),w=b(at),E=i(at,"P",{class:!0});var Tt=c(E);x=h(Tt,"Custom toString function to be applied on the column."),Tt.forEach(a),at.forEach(a),M=b(de),R=i(de,"DIV",{class:!0});var Gt=c(R);F=i(Gt,"DIV",{class:!0});var Qe=c(F);S=i(Qe,"DIV",{class:!0});var Ge=c(S);k=h(Ge,"toSortableValueFn:"),Ge.forEach(a),z=b(Qe),q=i(Qe,"DIV",{class:!0});var Ne=c(q);X=h(Ne,"(value: any) => string | number"),Ne.forEach(a),Qe.forEach(a),K=b(Gt),J=i(Gt,"P",{class:!0});var Ct=c(J);re=h(Ct,"Custom function to return either a string or a number value to have a sortable column."),Ct.forEach(a),Gt.forEach(a),B=b(de),L=i(de,"DIV",{class:!0});var Bt=c(L);P=i(Bt,"DIV",{class:!0});var ot=c(P);Q=i(ot,"DIV",{class:!0});var yt=c(Q);ue=h(yt,"toFilterableValueFn:"),yt.forEach(a),le=b(ot),ee=i(ot,"DIV",{class:!0});var Xt=c(ee);Me=h(Xt,"(value: any) => string | number | Date"),Xt.forEach(a),ot.forEach(a),He=b(Bt),De=i(Bt,"P",{class:!0});var It=c(De);rt=h(It,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),It.forEach(a),Bt.forEach(a),oe=b(de),ie=i(de,"DIV",{class:!0});var Ot=c(ie);ae=i(Ot,"DIV",{class:!0});var je=c(ae);Ve=i(je,"DIV",{class:!0});var Qt=c(Ve);ke=h(Qt,"renderComponent:"),Qt.forEach(a),Ee=b(je),fe=i(je,"DIV",{class:!0});var Lt=c(fe);lt=h(Lt,"SvelteComponent"),Lt.forEach(a),je.forEach(a),We=b(Ot),Z=i(Ot,"DIV",{class:!0});var xe=c(Z);pe=i(xe,"P",{class:!0});var te=c(pe);Ce=i(te,"CODE",{class:!0});var xt=c(Ce);ze=h(xt,"renderComponent"),xt.forEach(a),it=h(te," overrides "),ye=i(te,"CODE",{class:!0});var _t=c(ye);Be=h(_t,"toStringFn"),_t.forEach(a),we=h(te,"."),te.forEach(a),Oe=b(xe),me=i(xe,"P",{class:!0});var tt=c(me);Ue=h(tt,"Every "),ce=i(tt,"CODE",{class:!0});var Mt=c(ce);ct=h(Mt,"renderComponent"),Mt.forEach(a),dt=h(tt," will get 2 props:"),tt.forEach(a),he=b(xe),Te=i(xe,"DIV",{class:!0});var Vt=c(Te);Se=i(Vt,"DIV",{class:!0});var Ut=c(Se);Ie=i(Ut,"DIV",{class:!0});var Pt=c(Ie);Ae=h(Pt,"row:"),Pt.forEach(a),Re=b(Ut),Je=i(Ut,"DIV",{class:!0});var ns=c(Je);Xe=h(ns,"Object"),ns.forEach(a),Ut.forEach(a),ut=b(Vt),ft=i(Vt,"P",{class:!0});var Zt=c(ft);pt=h(Zt,"The current row in the table. In other words, a single object from the data store."),Zt.forEach(a),Vt.forEach(a),mt=b(xe),Ze=i(xe,"DIV",{class:!0});var St=c(Ze);Fe=i(St,"DIV",{class:!0});var st=c(Fe);ve=i(st,"DIV",{class:!0});var es=c(ve);Le=h(es,"value:"),es.forEach(a),ht=b(st),vt=i(st,"DIV",{class:!0});var ts=c(vt);gt=h(ts,"any"),ts.forEach(a),st.forEach(a),bt=b(St),qe=i(St,"P",{class:!0});var $t=c(qe);et=h($t,"The value of the current cell."),$t.forEach(a),St.forEach(a),xe.forEach(a),Ot.forEach(a),de.forEach(a),this.h()},h(){n(s,"class","font-semibold items-center w-max h3"),n(d,"class","btn variant-ghost-primary w-min"),n($,"data-popup","popupClickColumnInstructions"),n(r,"class","grid gap-2"),n(r,"id","columnInstructions"),n(U,"class","italic"),n(_,"class","font-bold"),n(C,"class","flex gap-2"),n(E,"class","text-xl pl-10"),n(T,"class","items-center"),n(S,"class","italic"),n(q,"class","font-bold"),n(F,"class","flex gap-2"),n(J,"class","text-xl pl-10"),n(R,"class","items-center"),n(Q,"class","italic"),n(ee,"class","font-bold"),n(P,"class","flex gap-2"),n(De,"class","text-xl pl-10"),n(L,"class","items-center"),n(Ve,"class","italic"),n(fe,"class","font-bold"),n(ae,"class","flex gap-2"),n(Ce,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(ye,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(pe,"class","underline"),n(ce,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(me,"class",""),n(Ie,"class","italic"),n(Je,"class","font-bold"),n(Se,"class","flex gap-2"),n(ft,"class","text-xl pl-10"),n(Te,"class","items-center mt-2"),n(ve,"class","italic"),n(vt,"class","font-bold"),n(Fe,"class","flex gap-2"),n(qe,"class","text-xl pl-10"),n(Ze,"class","items-center mt-2"),n(Z,"class","ml-5"),n(ie,"class","items-center mt-5"),n(e,"class","grid gap-5")},m(Ke,de){Y(Ke,e,de),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,p),t(r,$),H(D,$,null),t(e,I),t(e,T),t(T,C),t(C,U),t(U,A),t(C,V),t(C,_),t(_,y),t(T,w),t(T,E),t(E,x),t(e,M),t(e,R),t(R,F),t(F,S),t(S,k),t(F,z),t(F,q),t(q,X),t(R,K),t(R,J),t(J,re),t(e,B),t(e,L),t(L,P),t(P,Q),t(Q,ue),t(P,le),t(P,ee),t(ee,Me),t(L,He),t(L,De),t(De,rt),t(e,oe),t(e,ie),t(ie,ae),t(ae,Ve),t(Ve,ke),t(ae,Ee),t(ae,fe),t(fe,lt),t(ie,We),t(ie,Z),t(Z,pe),t(pe,Ce),t(Ce,ze),t(pe,it),t(pe,ye),t(ye,Be),t(pe,we),t(Z,Oe),t(Z,me),t(me,Ue),t(me,ce),t(ce,ct),t(me,dt),t(Z,he),t(Z,Te),t(Te,Se),t(Se,Ie),t(Ie,Ae),t(Se,Re),t(Se,Je),t(Je,Xe),t(Te,ut),t(Te,ft),t(ft,pt),t(Z,mt),t(Z,Ze),t(Ze,Fe),t(Fe,ve),t(ve,Le),t(Fe,ht),t(Fe,vt),t(vt,gt),t(Ze,bt),t(Ze,qe),t(qe,et),kt=!0,Ye||(qt=dr(pr.call(null,d,f[0])),Ye=!0)},p:se,i(Ke){kt||(G(D.$$.fragment,Ke),kt=!0)},o(Ke){O(D.$$.fragment,Ke),kt=!1},d(Ke){Ke&&a(e),W(D),Ye=!1,qt()}}}function ha(f){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class va extends be{constructor(e){super(),_e(this,e,ha,ma,$e,{})}}function Kr(f,e,r){const s=f.slice();return s[5]=e[r],s}function Qr(f){let e,r,s,l,u,d;r=new Cl({props:{icon:f[5].icon}});function v(){return f[4](f[5])}return{c(){e=o("button"),N(r.$$.fragment),s=g(),this.h()},l(p){e=i(p,"BUTTON",{class:!0});var $=c(e);j(r.$$.fragment,$),s=b($),$.forEach(a),this.h()},h(){n(e,"class",`btn btn-sm btn-icon rounded-md ${f[5].color}`)},m(p,$){Y(p,e,$),H(r,e,null),t(e,s),l=!0,u||(d=cr(e,"click",fl(v)),u=!0)},p(p,$){f=p},i(p){l||(G(r.$$.fragment,p),l=!0)},o(p){O(r.$$.fragment,p),l=!1},d(p){p&&a(e),W(r),u=!1,d()}}}function ga(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=Qr(Kr(f,s,d));const u=d=>O(l[d],1,1,()=>{l[d]=null});return{c(){e=o("div");for(let d=0;d<l.length;d+=1)l[d].c();this.h()},l(d){e=i(d,"DIV",{class:!0});var v=c(e);for(let p=0;p<l.length;p+=1)l[p].l(v);v.forEach(a),this.h()},h(){n(e,"class","flex gap-2 w-min")},m(d,v){Y(d,e,v);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(e,null);r=!0},p(d,[v]){if(v&3){s=d[1];let p;for(p=0;p<s.length;p+=1){const $=Kr(d,s,p);l[p]?(l[p].p($,v),G(l[p],1)):(l[p]=Qr($),l[p].c(),G(l[p],1),l[p].m(e,null))}for(ur(),p=s.length;p<l.length;p+=1)u(p);fr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)O(l[v]);r=!1},d(d){d&&a(e),Us(l,d)}}}function ba(f,e,r){let{row:s}=e,{dispatchFn:l}=e;const u=p=>l({type:p,row:s}),d=[{icon:yl,color:"variant-filled-primary",type:"CREATE"},{icon:Il,color:"variant-filled-secondary",type:"READ"},{icon:xl,color:"variant-filled-warning",type:"UPDATE"},{icon:Vl,color:"variant-filled-error",type:"DELETE"}],v=p=>u(p.type);return f.$$set=p=>{"row"in p&&r(2,s=p.row),"dispatchFn"in p&&r(3,l=p.dispatchFn)},[u,d,s,l,v]}class _a extends be{constructor(e){super(),_e(this,e,ba,ga,$e,{row:2,dispatchFn:3})}}function Xr(f,e,r){const s=f.slice();return s[2]=e[r],s}function Zr(f){let e,r=f[2].name+"",s,l;return{c(){e=o("option"),s=m(r),this.h()},l(u){e=i(u,"OPTION",{});var d=c(e);s=h(d,r),d.forEach(a),this.h()},h(){e.__value=l=f[2].id,e.value=e.__value},m(u,d){Y(u,e,d),t(e,s)},p(u,d){d&1&&r!==(r=u[2].name+"")&&as(s,r),d&1&&l!==(l=u[2].id)&&(e.__value=l,e.value=e.__value)},d(u){u&&a(e)}}}function $a(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V=f[0],_=[];for(let y=0;y<V.length;y+=1)_[y]=Zr(Xr(f,V,y));return{c(){e=o("div"),r=o("label"),s=m("Select the users you would like to add to the "),l=o("strong"),u=m(f[1]),d=m("."),v=g(),p=o("select");for(let y=0;y<_.length;y+=1)_[y].c();$=g(),D=o("div"),I=o("button"),T=m("Cancel"),C=g(),U=o("button"),A=m("Done"),this.h()},l(y){e=i(y,"DIV",{class:!0});var w=c(e);r=i(w,"LABEL",{for:!0});var E=c(r);s=h(E,"Select the users you would like to add to the "),l=i(E,"STRONG",{});var x=c(l);u=h(x,f[1]),x.forEach(a),d=h(E,"."),E.forEach(a),v=b(w),p=i(w,"SELECT",{name:!0,class:!0,id:!0});var M=c(p);for(let k=0;k<_.length;k+=1)_[k].l(M);M.forEach(a),$=b(w),D=i(w,"DIV",{class:!0});var R=c(D);I=i(R,"BUTTON",{class:!0});var F=c(I);T=h(F,"Cancel"),F.forEach(a),C=b(R),U=i(R,"BUTTON",{class:!0});var S=c(U);A=h(S,"Done"),S.forEach(a),R.forEach(a),w.forEach(a),this.h()},h(){n(r,"for","users"),p.multiple=!0,n(p,"name","users"),n(p,"class","select"),n(p,"id",""),n(I,"class","btn variant-filled-error"),n(U,"class","btn variant-filled-success"),n(D,"class","flex gap-2 justify-end"),n(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(y,w){Y(y,e,w),t(e,r),t(r,s),t(r,l),t(l,u),t(r,d),t(e,v),t(e,p);for(let E=0;E<_.length;E+=1)_[E]&&_[E].m(p,null);t(e,$),t(e,D),t(D,I),t(I,T),t(D,C),t(D,U),t(U,A)},p(y,[w]){if(w&2&&as(u,y[1]),w&1){V=y[0];let E;for(E=0;E<V.length;E+=1){const x=Xr(y,V,E);_[E]?_[E].p(x,w):(_[E]=Zr(x),_[E].c(),_[E].m(p,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=V.length}},i:se,o:se,d(y){y&&a(e),Us(_,y)}}}function Da(f,e,r){let{users:s}=e,{group:l}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,l=u.group)},[s,l]}class Ea extends be{constructor(e){super(),_e(this,e,Da,$a,$e,{users:0,group:1})}}function el(f,e,r){const s=f.slice();return s[2]=e[r],s}function tl(f){let e,r;return{c(){e=o("p"),r=m("No users in this group"),this.h()},l(s){e=i(s,"P",{class:!0});var l=c(e);r=h(l,"No users in this group"),l.forEach(a),this.h()},h(){n(e,"class","italic")},m(s,l){Y(s,e,l),t(e,r)},p:se,d(s){s&&a(e)}}}function sl(f){let e,r,s=f[2].name+"",l,u;return{c(){e=o("li"),r=m("- "),l=m(s),this.h()},l(d){e=i(d,"LI",{class:!0});var v=c(e);r=h(v,"- "),l=h(v,s),v.forEach(a),this.h()},h(){n(e,"class","font-semibold"),e.value=u=f[2].id},m(d,v){Y(d,e,v),t(e,r),t(e,l)},p(d,v){v&1&&s!==(s=d[2].name+"")&&as(l,s),v&1&&u!==(u=d[2].id)&&(e.value=u)},d(d){d&&a(e)}}}function wa(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V=f[0],_=[];for(let w=0;w<V.length;w+=1)_[w]=sl(el(f,V,w));let y=null;return V.length||(y=tl()),{c(){e=o("div"),r=o("label"),s=m("Users in "),l=o("strong"),u=m(f[1]),d=m("."),v=g(),p=o("ul");for(let w=0;w<_.length;w+=1)_[w].c();y&&y.c(),$=g(),D=o("div"),I=o("button"),T=m("Cancel"),C=g(),U=o("button"),A=m("Done"),this.h()},l(w){e=i(w,"DIV",{class:!0});var E=c(e);r=i(E,"LABEL",{for:!0});var x=c(r);s=h(x,"Users in "),l=i(x,"STRONG",{});var M=c(l);u=h(M,f[1]),M.forEach(a),d=h(x,"."),x.forEach(a),v=b(E),p=i(E,"UL",{});var R=c(p);for(let z=0;z<_.length;z+=1)_[z].l(R);y&&y.l(R),R.forEach(a),$=b(E),D=i(E,"DIV",{class:!0});var F=c(D);I=i(F,"BUTTON",{class:!0});var S=c(I);T=h(S,"Cancel"),S.forEach(a),C=b(F),U=i(F,"BUTTON",{class:!0});var k=c(U);A=h(k,"Done"),k.forEach(a),F.forEach(a),E.forEach(a),this.h()},h(){n(r,"for","users"),n(I,"class","btn variant-filled-error"),n(U,"class","btn variant-filled-success"),n(D,"class","flex gap-2 justify-end"),n(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,E){Y(w,e,E),t(e,r),t(r,s),t(r,l),t(l,u),t(r,d),t(e,v),t(e,p);for(let x=0;x<_.length;x+=1)_[x]&&_[x].m(p,null);y&&y.m(p,null),t(e,$),t(e,D),t(D,I),t(I,T),t(D,C),t(D,U),t(U,A)},p(w,[E]){if(E&2&&as(u,w[1]),E&1){V=w[0];let x;for(x=0;x<V.length;x+=1){const M=el(w,V,x);_[x]?_[x].p(M,E):(_[x]=sl(M),_[x].c(),_[x].m(p,null))}for(;x<_.length;x+=1)_[x].d(1);_.length=V.length,!V.length&&y?y.p(w,E):V.length?y&&(y.d(1),y=null):(y=tl(),y.c(),y.m(p,null))}},i:se,o:se,d(w){w&&a(e),Us(_,w),y&&y.d()}}}function Ta(f,e,r){let{users:s}=e,{group:l}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,l=u.group)},[s,l]}class Ca extends be{constructor(e){super(),_e(this,e,Ta,wa,$e,{users:0,group:1})}}function ya(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w;return{c(){e=o("div"),r=o("label"),s=m("Group name"),l=g(),u=o("input"),d=g(),v=o("label"),p=m("Group description"),$=g(),D=o("input"),I=g(),T=o("div"),C=o("button"),U=m("Cancel"),A=g(),V=o("button"),_=m("Done"),this.h()},l(E){e=i(E,"DIV",{class:!0});var x=c(e);r=i(x,"LABEL",{for:!0});var M=c(r);s=h(M,"Group name"),M.forEach(a),l=b(x),u=i(x,"INPUT",{type:!0,id:!0,class:!0}),d=b(x),v=i(x,"LABEL",{for:!0});var R=c(v);p=h(R,"Group description"),R.forEach(a),$=b(x),D=i(x,"INPUT",{type:!0,id:!0,class:!0}),I=b(x),T=i(x,"DIV",{class:!0});var F=c(T);C=i(F,"BUTTON",{class:!0});var S=c(C);U=h(S,"Cancel"),S.forEach(a),A=b(F),V=i(F,"BUTTON",{class:!0});var k=c(V);_=h(k,"Done"),k.forEach(a),F.forEach(a),x.forEach(a),this.h()},h(){n(r,"for","groupName"),n(u,"type","text"),n(u,"id","groupName"),n(u,"class","input input-primary"),n(v,"for","groupDescription"),n(D,"type","text"),n(D,"id","groupDescription"),n(D,"class","input input-primary"),n(C,"class","btn variant-filled-error"),n(V,"class","btn variant-filled-success"),n(T,"class","flex gap-2 justify-end"),n(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(E,x){Y(E,e,x),t(e,r),t(r,s),t(e,l),t(e,u),or(u,f[0].name),t(e,d),t(e,v),t(v,p),t(e,$),t(e,D),or(D,f[0].description),t(e,I),t(e,T),t(T,C),t(C,U),t(T,A),t(T,V),t(V,_),y||(w=[cr(u,"input",f[1]),cr(D,"input",f[2])],y=!0)},p(E,[x]){x&1&&u.value!==E[0].name&&or(u,E[0].name),x&1&&D.value!==E[0].description&&or(D,E[0].description)},i:se,o:se,d(E){E&&a(e),y=!1,vl(w)}}}function Ia(f,e,r){let{group:s}=e;function l(){s.name=this.value,r(0,s)}function u(){s.description=this.value,r(0,s)}return f.$$set=d=>{"group"in d&&r(0,s=d.group)},[s,l,u]}class xa extends be{constructor(e){super(),_e(this,e,Ia,ya,$e,{group:0})}}const Va=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Ua=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Sa=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Aa=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Ra=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Fa=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],hl=Ss(Va),hr=Ss(Ua),ka=Ss(Sa),Ga=Ss(Fa),Ba=Ss(Ra),rl={32655:"NA",32654:"NM",32653:"ND"},Oa=Ss(Aa);function ll(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function al(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function nl(f){let e,r;return{c(){e=o("h3"),r=m(f[0]),this.h()},l(s){e=i(s,"H3",{class:!0});var l=c(e);r=h(l,f[0]),l.forEach(a),this.h()},h(){n(e,"class","h3")},m(s,l){Y(s,e,l),t(e,r)},p(s,l){l&1&&as(r,s[0])},d(s){s&&a(e)}}}function La(f){let e=f[6].name+"",r;return{c(){r=m(e)},l(s){r=h(s,e)},m(s,l){Y(s,r,l)},p(s,l){l&2&&e!==(e=s[6].name+"")&&as(r,e)},d(s){s&&a(r)}}}function ol(f){let e,r,s;function l(d){f[4](d)}let u={name:`tab${f[8]}`,value:f[8],$$slots:{default:[La]},$$scope:{ctx:f}};return f[2]!==void 0&&(u.group=f[2]),e=new Sl({props:u}),Dl.push(()=>El(e,"group",l)),{c(){N(e.$$.fragment)},l(d){j(e.$$.fragment,d)},m(d,v){H(e,d,v),s=!0},p(d,v){const p={};v&34&&(p.$$scope={dirty:v,ctx:d}),!r&&v&4&&(r=!0,p.group=d[2],wl(()=>r=!1)),e.$set(p)},i(d){s||(G(e.$$.fragment,d),s=!0)},o(d){O(e.$$.fragment,d),s=!1},d(d){W(e,d)}}}function Ma(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=ol(ll(f,s,d));const u=d=>O(l[d],1,1,()=>{l[d]=null});return{c(){for(let d=0;d<l.length;d+=1)l[d].c();e=Vs()},l(d){for(let v=0;v<l.length;v+=1)l[v].l(d);e=Vs()},m(d,v){for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(d,v);Y(d,e,v),r=!0},p(d,v){if(v&6){s=d[1];let p;for(p=0;p<s.length;p+=1){const $=ll(d,s,p);l[p]?(l[p].p($,v),G(l[p],1)):(l[p]=ol($),l[p].c(),G(l[p],1),l[p].m(e.parentNode,e))}for(ur(),p=s.length;p<l.length;p+=1)u(p);fr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)O(l[v]);r=!1},d(d){Us(l,d),d&&a(e)}}}function il(f){let e,r;return e=new Gs({props:{language:f[6].language,code:f[6].code}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p(s,l){const u={};l&2&&(u.language=s[6].language),l&2&&(u.code=s[6].code),e.$set(u)},i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function cl(f){let e,r,s=f[2]===f[8]&&il(f);return{c(){s&&s.c(),e=Vs()},l(l){s&&s.l(l),e=Vs()},m(l,u){s&&s.m(l,u),Y(l,e,u),r=!0},p(l,u){l[2]===l[8]?s?(s.p(l,u),u&4&&G(s,1)):(s=il(l),s.c(),G(s,1),s.m(e.parentNode,e)):s&&(ur(),O(s,1,1,()=>{s=null}),fr())},i(l){r||(G(s),r=!0)},o(l){O(s),r=!1},d(l){s&&s.d(l),l&&a(e)}}}function Pa(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=cl(al(f,s,d));const u=d=>O(l[d],1,1,()=>{l[d]=null});return{c(){for(let d=0;d<l.length;d+=1)l[d].c();e=Vs()},l(d){for(let v=0;v<l.length;v+=1)l[v].l(d);e=Vs()},m(d,v){for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(d,v);Y(d,e,v),r=!0},p(d,v){if(v&6){s=d[1];let p;for(p=0;p<s.length;p+=1){const $=al(d,s,p);l[p]?(l[p].p($,v),G(l[p],1)):(l[p]=cl($),l[p].c(),G(l[p],1),l[p].m(e.parentNode,e))}for(ur(),p=s.length;p<l.length;p+=1)u(p);fr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)O(l[v]);r=!1},d(d){Us(l,d),d&&a(e)}}}function Na(f){let e,r,s,l,u,d,v,p,$,D=f[0]&&nl(f);const I=f[3].default,T=gl(I,f,f[5],null);return p=new Ul({props:{$$slots:{panel:[Pa],default:[Ma]},$$scope:{ctx:f}}}),{c(){e=o("div"),r=o("div"),D&&D.c(),s=g(),l=o("div"),u=o("div"),T&&T.c(),d=g(),v=o("div"),N(p.$$.fragment),this.h()},l(C){e=i(C,"DIV",{class:!0});var U=c(e);r=i(U,"DIV",{class:!0});var A=c(r);D&&D.l(A),A.forEach(a),s=b(U),l=i(U,"DIV",{class:!0});var V=c(l);u=i(V,"DIV",{class:!0});var _=c(u);T&&T.l(_),_.forEach(a),d=b(V),v=i(V,"DIV",{class:!0});var y=c(v);j(p.$$.fragment,y),y.forEach(a),V.forEach(a),U.forEach(a),this.h()},h(){n(r,"class","py-5"),n(u,"class","flex-1"),n(v,"class","flex-1"),n(l,"class","flex card p-5 gap-10"),n(e,"class","")},m(C,U){Y(C,e,U),t(e,r),D&&D.m(r,null),t(e,s),t(e,l),t(l,u),T&&T.m(u,null),t(l,d),t(l,v),H(p,v,null),$=!0},p(C,[U]){C[0]?D?D.p(C,U):(D=nl(C),D.c(),D.m(r,null)):D&&(D.d(1),D=null),T&&T.p&&(!$||U&32)&&bl(T,I,C,C[5],$?$l(I,C[5],U,null):_l(C[5]),null);const A={};U&38&&(A.$$scope={dirty:U,ctx:C}),p.$set(A)},i(C){$||(G(T,C),G(p.$$.fragment,C),$=!0)},o(C){O(T,C),O(p.$$.fragment,C),$=!1},d(C){C&&a(e),D&&D.d(),T&&T.d(C),W(p)}}}function ja(f,e,r){let{$$slots:s={},$$scope:l}=e,{title:u}=e,{tabs:d=[]}=e,v=0;function p($){v=$,r(2,v)}return f.$$set=$=>{"title"in $&&r(0,u=$.title),"tabs"in $&&r(1,d=$.tabs),"$$scope"in $&&r(5,l=$.$$scope)},[u,d,v,s,p,l]}class vr extends be{constructor(e){super(),_e(this,e,ja,Na,$e,{title:0,tabs:1})}}function Ha(f){let e,r;return e=new ds({props:{config:f[0]}}),e.$on("action",f[1]),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Wa(f){let e,r,s;return r=new vr({props:{title:"CRUD",tabs:f[2],$$slots:{default:[Ha]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"class","grid gap-5"),n(e,"id","CRUD")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&16&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function za(f,e,r){let s;pl(f,hr,v=>r(3,s=v));const l={id:"userGroupCRUD",toggle:!0,data:hl,resizable:"both",columns:{name:{minWidth:200}},optionsComponent:_a},u=v=>{const{type:p,row:$}=v.detail;switch(p){case"CREATE":ir.trigger({type:"component",title:`Add user to Group ${$.id}`,component:{ref:Ea,props:{users:s.filter(D=>D.group!==$.name),group:$.name}}});break;case"READ":ir.trigger({type:"component",title:`Users in Group ${$.id}`,component:{ref:Ca,props:{users:s.filter(D=>D.group===$.name),group:$.name}}});break;case"UPDATE":ir.trigger({type:"component",title:`Edit Group ${$.id}`,component:{ref:xa,props:{group:$}}});break;case"DELETE":ir.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${$.name}</strong>?`,response:D=>console.log("response:",D)});break}},d=[{name:"Svelte",language:"html",code:Zl},{name:"tableCRUDActions",language:"typescript",code:ea},{name:"optionsComponent",language:"html",code:la},{name:"data",language:"typescript",code:mr+`
`+ml},{name:"AddUser.svelte",language:"html",code:ta},{name:"ShowUsers.svelte",language:"html",code:sa},{name:"EditGroup.svelte",language:"html",code:ra}];return[l,u,d]}class Ja extends be{constructor(e){super(),_e(this,e,za,Wa,$e,{})}}function qa(f){let e,r,s,l;return{c(){e=o("button"),r=m("Odd or even"),this.h()},l(u){e=i(u,"BUTTON",{class:!0});var d=c(e);r=h(d,"Odd or even"),d.forEach(a),this.h()},h(){n(e,"class","btn btn-sm variant-filled-secondary")},m(u,d){Y(u,e,d),t(e,r),s||(l=cr(e,"click",fl(f[0])),s=!0)},p:se,i:se,o:se,d(u){u&&a(e),s=!1,l()}}}function Ya(f,e,r){let{row:s}=e,{dispatchFn:l}=e;const u=()=>{const d=s.id%2===0?"even":"odd";return l({type:d})};return f.$$set=d=>{"row"in d&&r(1,s=d.row),"dispatchFn"in d&&r(2,l=d.dispatchFn)},[u,s,l]}class Ka extends be{constructor(e){super(),_e(this,e,Ya,qa,$e,{row:1,dispatchFn:2})}}function Qa(f){let e,r;return e=new ds({props:{config:f[1]}}),e.$on("action",f[2]),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Xa(f){let e,r,s;return r=new vr({props:{title:"Odd or even",tabs:f[0],$$slots:{default:[Qa]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"class","grid gap-5"),n(e,"id","usersNoRoles")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&8&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function Za(f){return[[{name:"Svelte",language:"html",code:Bl},{name:"Data",language:"typescript",code:mr},{name:"TableOptions.svelte",language:"html",code:Xl}],{id:"usersNoRoles",data:hr,optionsComponent:Ka,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:Al,colFilterComponent:Rl},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},l=>{alert(l.detail.type)}]}class en extends be{constructor(e){super(),_e(this,e,Za,Xa,$e,{})}}function tn(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function sn(f){let e,r,s;return r=new Bs({props:{title:"Minimal configuration",svelte:Gl,data:mr,$$slots:{default:[tn]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"class","grid gap-5"),n(e,"id","users")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function rn(f){return[{id:"users",data:hr}]}class ln extends be{constructor(e){super(),_e(this,e,rn,sn,$e,{})}}function an(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function nn(f){let e,r,s;return r=new Bs({props:{title:"Date",svelte:Ol,data:Ll,$$slots:{default:[an]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","usersBD")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function on(f){return[{id:"usersBD",data:ka,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:r=>r.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:r=>r.getTime(),toFilterableValueFn:r=>r}}}}]}class cn extends be{constructor(e){super(),_e(this,e,on,nn,$e,{})}}function dn(f){let e,r;return{c(){e=o("input"),this.h()},l(s){e=i(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){n(e,"type","checkbox"),n(e,"name","isAdmin"),n(e,"id",r=f[1].id),e.checked=f[0],e.disabled=!0},m(s,l){Y(s,e,l)},p(s,[l]){l&2&&r!==(r=s[1].id)&&n(e,"id",r),l&1&&(e.checked=s[0])},i:se,o:se,d(s){s&&a(e)}}}function un(f,e,r){let{value:s}=e,{row:l}=e;return f.$$set=u=>{"value"in u&&r(0,s=u.value),"row"in u&&r(1,l=u.row)},[s,l]}class fn extends be{constructor(e){super(),_e(this,e,un,dn,$e,{value:0,row:1})}}function pn(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function mn(f){let e,r,s;return r=new vr({props:{title:"Boolean",tabs:f[1],$$slots:{default:[pn]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","boolean")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function hn(f){return[{id:"usersAndAdmins",data:Ga,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:fn},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Yl},{name:"Data",language:"typescript",code:Kl},{name:"IsAdmin.svelte",language:"html",code:Ql}]]}class vn extends be{constructor(e){super(),_e(this,e,hn,mn,$e,{})}}function gn(f){let e,r;return{c(){e=o("a"),r=m(f[0]),this.h()},l(s){e=i(s,"A",{href:!0});var l=c(e);r=h(l,f[0]),l.forEach(a),this.h()},h(){n(e,"href",f[0])},m(s,l){Y(s,e,l),t(e,r)},p(s,[l]){l&1&&as(r,s[0]),l&1&&n(e,"href",s[0])},i:se,o:se,d(s){s&&a(e)}}}function bn(f,e,r){let{value:s}=e;return f.$$set=l=>{"value"in l&&r(0,s=l.value)},[s]}class _n extends be{constructor(e){super(),_e(this,e,bn,gn,$e,{value:0})}}function $n(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Dn(f){let e,r,s;return r=new vr({props:{title:"URLs",tabs:f[1],$$slots:{default:[$n]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","URLs")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function En(f){return[{id:"websites",data:Ba,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:_n,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:zl},{name:"Data",language:"typescript",code:Jl},{name:"URLCell.svelte",language:"html",code:ql}]]}class wn extends be{constructor(e){super(),_e(this,e,En,Dn,$e,{})}}function Tn(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Cn(f){let e,r,s;return r=new Bs({props:{title:"Missing values",svelte:Hl,data:Wl,$$slots:{default:[Tn]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","combination")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function yn(f){return[{id:"usersMissingIDs",data:Oa,columns:{id:{header:"ID",instructions:{toStringFn:r=>r in rl?rl[r]:r.toString()}}}}]}class In extends be{constructor(e){super(),_e(this,e,yn,Cn,$e,{})}}function xn(f){let e,r;return e=new ds({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:se,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Vn(f){let e,r,s;return r=new Bs({props:{title:"Table component",svelte:kl,data:ml,$$slots:{default:[xn]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","groups")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function Un(f){return[{id:"userGroups",data:hl,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class Sn extends be{constructor(e){super(),_e(this,e,Un,Vn,$e,{})}}function dl(f,e,r){const s=f.slice();return s[1]=e[r],s}function ul(f){let e,r,s=f[1].name+"",l,u,d,v,p=f[1].group+"",$,D;return{c(){e=o("tr"),r=o("td"),l=m(s),u=g(),d=o("td"),v=o("div"),$=m(p),D=g()},l(I){e=i(I,"TR",{});var T=c(e);r=i(T,"TD",{});var C=c(r);l=h(C,s),C.forEach(a),u=b(T),d=i(T,"TD",{});var U=c(d);v=i(U,"DIV",{});var A=c(v);$=h(A,p),A.forEach(a),U.forEach(a),D=b(T),T.forEach(a)},m(I,T){Y(I,e,T),t(e,r),t(r,l),t(e,u),t(e,d),t(d,v),t(v,$),t(e,D)},p(I,T){T&1&&s!==(s=I[1].name+"")&&as(l,s),T&1&&p!==(p=I[1].group+"")&&as($,p)},d(I){I&&a(e)}}}function An(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A=f[0],V=[];for(let _=0;_<A.length;_+=1)V[_]=ul(dl(f,A,_));return{c(){e=o("div"),r=m("Used classes are important to include for the table to have a uniform look."),s=g(),l=o("div"),u=o("table"),d=o("thead"),v=o("tr"),p=o("th"),$=m("Group"),D=g(),I=o("th"),T=m("Description"),C=g(),U=o("tbody");for(let _=0;_<V.length;_+=1)V[_].c();this.h()},l(_){e=i(_,"DIV",{class:!0});var y=c(e);r=h(y,"Used classes are important to include for the table to have a uniform look."),y.forEach(a),s=b(_),l=i(_,"DIV",{class:!0});var w=c(l);u=i(w,"TABLE",{class:!0});var E=c(u);d=i(E,"THEAD",{});var x=c(d);v=i(x,"TR",{class:!0});var M=c(v);p=i(M,"TH",{class:!0});var R=c(p);$=h(R,"Group"),R.forEach(a),D=b(M),I=i(M,"TH",{class:!0});var F=c(I);T=h(F,"Description"),F.forEach(a),M.forEach(a),x.forEach(a),C=b(E),U=i(E,"TBODY",{});var S=c(U);for(let k=0;k<V.length;k+=1)V[k].l(S);S.forEach(a),E.forEach(a),w.forEach(a),this.h()},h(){n(e,"class","pb-2"),n(p,"class","!p-2"),n(I,"class","!p-2"),n(v,"class","bg-primary-300"),n(u,"class","table table-compact bg-tertiary-200"),n(l,"class","table-container")},m(_,y){Y(_,e,y),t(e,r),Y(_,s,y),Y(_,l,y),t(l,u),t(u,d),t(d,v),t(v,p),t(p,$),t(v,D),t(v,I),t(I,T),t(u,C),t(u,U);for(let w=0;w<V.length;w+=1)V[w]&&V[w].m(U,null)},p(_,y){if(y&1){A=_[0];let w;for(w=0;w<A.length;w+=1){const E=dl(_,A,w);V[w]?V[w].p(E,y):(V[w]=ul(E),V[w].c(),V[w].m(U,null))}for(;w<V.length;w+=1)V[w].d(1);V.length=A.length}},d(_){_&&a(e),_&&a(s),_&&a(l),Us(V,_)}}}function Rn(f){let e,r,s;return r=new Bs({props:{title:"Simple table without Table component",svelte:Fl,data:mr,$$slots:{default:[An]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(a),this.h()},h(){n(e,"id","simpleTable")},m(l,u){Y(l,e,u),H(r,e,null),s=!0},p(l,[u]){const d={};u&17&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){O(r.$$.fragment,l),s=!1},d(l){l&&a(e),W(r)}}}function Fn(f,e,r){let s;return pl(f,hr,l=>r(0,s=l)),[s]}class kn extends be{constructor(e){super(),_e(this,e,Fn,Rn,$e,{})}}function Gn(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z,q,X,K,J,re;return u=new kn({}),v=new Sn({}),$=new ln({}),A=new en({}),_=new Ja({}),R=new cn({}),S=new In({}),z=new wn({}),X=new vn({}),J=new Tl({}),{c(){e=o("div"),r=o("h2"),s=m("Examples"),l=g(),N(u.$$.fragment),d=g(),N(v.$$.fragment),p=g(),N($.$$.fragment),D=g(),I=o("div"),T=o("h2"),C=m("Dispatching Actions"),U=g(),N(A.$$.fragment),V=g(),N(_.$$.fragment),y=g(),w=o("div"),E=o("h2"),x=m("Complex data types"),M=g(),N(R.$$.fragment),F=g(),N(S.$$.fragment),k=g(),N(z.$$.fragment),q=g(),N(X.$$.fragment),K=g(),N(J.$$.fragment),this.h()},l(B){e=i(B,"DIV",{class:!0});var L=c(e);r=i(L,"H2",{class:!0});var P=c(r);s=h(P,"Examples"),P.forEach(a),l=b(L),j(u.$$.fragment,L),d=b(L),j(v.$$.fragment,L),p=b(L),j($.$$.fragment,L),D=b(L),I=i(L,"DIV",{id:!0,class:!0});var Q=c(I);T=i(Q,"H2",{class:!0});var ue=c(T);C=h(ue,"Dispatching Actions"),ue.forEach(a),U=b(Q),j(A.$$.fragment,Q),V=b(Q),j(_.$$.fragment,Q),Q.forEach(a),y=b(L),w=i(L,"DIV",{id:!0});var le=c(w);E=i(le,"H2",{class:!0});var ee=c(E);x=h(ee,"Complex data types"),ee.forEach(a),M=b(le),j(R.$$.fragment,le),F=b(le),j(S.$$.fragment,le),k=b(le),j(z.$$.fragment,le),q=b(le),j(X.$$.fragment,le),le.forEach(a),L.forEach(a),K=b(B),j(J.$$.fragment,B),this.h()},h(){n(r,"class","h2"),n(T,"class","h2"),n(I,"id","actionDispatchersExamples"),n(I,"class","my-20"),n(E,"class","h2"),n(w,"id","complexTypes"),n(e,"class","grid gap-1")},m(B,L){Y(B,e,L),t(e,r),t(r,s),t(e,l),H(u,e,null),t(e,d),H(v,e,null),t(e,p),H($,e,null),t(e,D),t(e,I),t(I,T),t(T,C),t(I,U),H(A,I,null),t(I,V),H(_,I,null),t(e,y),t(e,w),t(w,E),t(E,x),t(w,M),H(R,w,null),t(w,F),H(S,w,null),t(w,k),H(z,w,null),t(w,q),H(X,w,null),Y(B,K,L),H(J,B,L),re=!0},p:se,i(B){re||(G(u.$$.fragment,B),G(v.$$.fragment,B),G($.$$.fragment,B),G(A.$$.fragment,B),G(_.$$.fragment,B),G(R.$$.fragment,B),G(S.$$.fragment,B),G(z.$$.fragment,B),G(X.$$.fragment,B),G(J.$$.fragment,B),re=!0)},o(B){O(u.$$.fragment,B),O(v.$$.fragment,B),O($.$$.fragment,B),O(A.$$.fragment,B),O(_.$$.fragment,B),O(R.$$.fragment,B),O(S.$$.fragment,B),O(z.$$.fragment,B),O(X.$$.fragment,B),O(J.$$.fragment,B),re=!1},d(B){B&&a(e),W(u),W(v),W($),W(A),W(_),W(R),W(S),W(z),W(X),B&&a(K),W(J,B)}}}class Bn extends be{constructor(e){super(),_e(this,e,null,Gn,$e,{})}}function On(f){let e,r,s,l,u,d,v,p="(action: CustomEvent<any>) => {}",$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F,S,k,z,q,X,K,J,re,B,L,P,Q,ue,le,ee,Me,He="(obj: any) => dispatch('action', obj)",De,rt,oe,ie,ae,Ve,ke,Ee,fe,lt;return{c(){e=o("div"),r=o("div"),s=o("div"),l=o("h3"),u=m("on:action"),d=g(),v=o("h3"),$=m(p),D=g(),I=o("p"),T=m("To dispatch actions and listen to dispatchers you need to create a table with your own "),C=o("code"),U=m("optionsComponent"),A=m(" component."),V=g(),_=o("div"),y=o("p"),w=m("Every "),E=o("code"),x=m("optionsComponent"),M=m(" will get 2 props:"),R=g(),F=o("div"),S=o("div"),k=o("div"),z=m("row:"),q=g(),X=o("div"),K=m("Object"),J=g(),re=o("p"),B=m("The current row in the table. In other words, a single object from the data store."),L=g(),P=o("div"),Q=o("div"),ue=o("div"),le=m("dispatchFn:"),ee=g(),Me=o("div"),De=m(He),rt=g(),oe=o("p"),ie=m("A function that takes an object and dispatches an action with the name "),ae=o("code"),Ve=m("action"),ke=m(`. The passed object is accessible by the parent component through the
					`),Ee=o("code"),fe=m("action.detail"),lt=m(" property."),this.h()},l(We){e=i(We,"DIV",{class:!0});var Z=c(e);r=i(Z,"DIV",{class:!0,id:!0});var pe=c(r);s=i(pe,"DIV",{class:!0});var Ce=c(s);l=i(Ce,"H3",{class:!0});var ze=c(l);u=h(ze,"on:action"),ze.forEach(a),d=b(Ce),v=i(Ce,"H3",{class:!0});var it=c(v);$=h(it,p),it.forEach(a),Ce.forEach(a),D=b(pe),I=i(pe,"P",{class:!0});var ye=c(I);T=h(ye,"To dispatch actions and listen to dispatchers you need to create a table with your own "),C=i(ye,"CODE",{class:!0});var Be=c(C);U=h(Be,"optionsComponent"),Be.forEach(a),A=h(ye," component."),ye.forEach(a),V=b(pe),_=i(pe,"DIV",{class:!0});var we=c(_);y=i(we,"P",{class:!0});var Oe=c(y);w=h(Oe,"Every "),E=i(Oe,"CODE",{class:!0});var me=c(E);x=h(me,"optionsComponent"),me.forEach(a),M=h(Oe," will get 2 props:"),Oe.forEach(a),R=b(we),F=i(we,"DIV",{class:!0});var Ue=c(F);S=i(Ue,"DIV",{class:!0});var ce=c(S);k=i(ce,"DIV",{class:!0});var ct=c(k);z=h(ct,"row:"),ct.forEach(a),q=b(ce),X=i(ce,"DIV",{class:!0});var dt=c(X);K=h(dt,"Object"),dt.forEach(a),ce.forEach(a),J=b(Ue),re=i(Ue,"P",{class:!0});var he=c(re);B=h(he,"The current row in the table. In other words, a single object from the data store."),he.forEach(a),Ue.forEach(a),L=b(we),P=i(we,"DIV",{class:!0});var Te=c(P);Q=i(Te,"DIV",{class:!0});var Se=c(Q);ue=i(Se,"DIV",{class:!0});var Ie=c(ue);le=h(Ie,"dispatchFn:"),Ie.forEach(a),ee=b(Se),Me=i(Se,"DIV",{class:!0});var Ae=c(Me);De=h(Ae,He),Ae.forEach(a),Se.forEach(a),rt=b(Te),oe=i(Te,"P",{class:!0});var Re=c(oe);ie=h(Re,"A function that takes an object and dispatches an action with the name "),ae=i(Re,"CODE",{class:!0});var Je=c(ae);Ve=h(Je,"action"),Je.forEach(a),ke=h(Re,`. The passed object is accessible by the parent component through the
					`),Ee=i(Re,"CODE",{class:!0});var Xe=c(Ee);fe=h(Xe,"action.detail"),Xe.forEach(a),lt=h(Re," property."),Re.forEach(a),Te.forEach(a),we.forEach(a),pe.forEach(a),Z.forEach(a),this.h()},h(){n(l,"class","italic font-semibold"),n(v,"class","font-semibold"),n(s,"class","flex gap-3 h3"),n(C,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(I,"class","text-xl underline"),n(E,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(y,"class","text-xl"),n(k,"class","italic"),n(X,"class","font-bold"),n(S,"class","flex gap-2"),n(re,"class","text-xl pl-10"),n(F,"class","items-center mt-2"),n(ue,"class","italic"),n(Me,"class","font-bold"),n(Q,"class","flex gap-2"),n(ae,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(Ee,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),n(oe,"class","text-xl pl-10"),n(P,"class","items-center mt-2"),n(_,"class","mt-5"),n(r,"class","grid gap-2"),n(r,"id","actionDispatchersDocs"),n(e,"class","grid gap-5")},m(We,Z){Y(We,e,Z),t(e,r),t(r,s),t(s,l),t(l,u),t(s,d),t(s,v),t(v,$),t(r,D),t(r,I),t(I,T),t(I,C),t(C,U),t(I,A),t(r,V),t(r,_),t(_,y),t(y,w),t(y,E),t(E,x),t(y,M),t(_,R),t(_,F),t(F,S),t(S,k),t(k,z),t(S,q),t(S,X),t(X,K),t(F,J),t(F,re),t(re,B),t(_,L),t(_,P),t(P,Q),t(Q,ue),t(ue,le),t(Q,ee),t(Q,Me),t(Me,De),t(P,rt),t(P,oe),t(oe,ie),t(oe,ae),t(ae,Ve),t(oe,ke),t(oe,Ee),t(Ee,fe),t(oe,lt)},p:se,i:se,o:se,d(We){We&&a(e)}}}class Ln extends be{constructor(e){super(),_e(this,e,null,On,$e,{})}}function Mn(f){let e,r,s,l,u,d,v,p,$,D,I,T,C,U,A,V,_,y,w,E,x,M,R,F;return $=new oa({}),I=new da({}),C=new pa({}),A=new va({}),x=new Ln({}),R=new Bn({}),{c(){e=o("div"),r=o("div"),s=o("h1"),l=m("Table"),u=g(),d=o("h2"),v=m("Types"),p=g(),N($.$$.fragment),D=g(),N(I.$$.fragment),T=g(),N(C.$$.fragment),U=g(),N(A.$$.fragment),V=g(),_=o("div"),y=o("h2"),w=m("Action Dispatchers"),E=g(),N(x.$$.fragment),M=g(),N(R.$$.fragment),this.h()},l(S){e=i(S,"DIV",{class:!0,id:!0});var k=c(e);r=i(k,"DIV",{class:!0});var z=c(r);s=i(z,"H1",{class:!0});var q=c(s);l=h(q,"Table"),q.forEach(a),u=b(z),d=i(z,"H2",{class:!0});var X=c(d);v=h(X,"Types"),X.forEach(a),p=b(z),j($.$$.fragment,z),z.forEach(a),D=b(k),j(I.$$.fragment,k),T=b(k),j(C.$$.fragment,k),U=b(k),j(A.$$.fragment,k),V=b(k),_=i(k,"DIV",{class:!0});var K=c(_);y=i(K,"H2",{class:!0});var J=c(y);w=h(J,"Action Dispatchers"),J.forEach(a),E=b(K),j(x.$$.fragment,K),K.forEach(a),M=b(k),j(R.$$.fragment,k),k.forEach(a),this.h()},h(){n(s,"class","font-bold !text-6xl"),n(d,"class","h2"),n(r,"class","grid gap-5"),n(y,"class","h2"),n(_,"class","grid gap-5"),n(e,"class","grid gap-20 p-10"),n(e,"id","toc-target-table")},m(S,k){Y(S,e,k),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,p),H($,r,null),t(e,D),H(I,e,null),t(e,T),H(C,e,null),t(e,U),H(A,e,null),t(e,V),t(e,_),t(_,y),t(y,w),t(_,E),H(x,_,null),t(e,M),H(R,e,null),F=!0},p:se,i(S){F||(G($.$$.fragment,S),G(I.$$.fragment,S),G(C.$$.fragment,S),G(A.$$.fragment,S),G(x.$$.fragment,S),G(R.$$.fragment,S),F=!0)},o(S){O($.$$.fragment,S),O(I.$$.fragment,S),O(C.$$.fragment,S),O(A.$$.fragment,S),O(x.$$.fragment,S),O(R.$$.fragment,S),F=!1},d(S){S&&a(e),W($),W(I),W(C),W(A),W(x),W(R)}}}class Kn extends be{constructor(e){super(),_e(this,e,null,Mn,$e,{})}}export{Kn as component};
