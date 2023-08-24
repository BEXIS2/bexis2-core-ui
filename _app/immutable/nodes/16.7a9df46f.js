import{S as ve,i as be,s as $e,k as o,q as h,a as v,y as N,l as i,m as c,r as g,h as l,c as b,z as j,n as a,b as Y,D as t,A as H,a6 as Rs,W as re,g as G,d as O,B as W,v as ks,f as Fs,U as ss,M as As,a1 as Mr,u as zt,a5 as Us,O as Hr,C as Wr,E as zr,F as Jr,G as qr,e as ts,w as Yr,a0 as Kr,a2 as Qr,V as Pr}from"../chunks/index.2c64a3f2.js";/* empty css                             */import{p as Gs}from"../chunks/floating-ui.dom.7e1fdaf9.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.2223e758.js";import{C as ns}from"../chunks/CodeBlock.357f61a8.js";import{m as Ss,M as Xr}from"../chunks/Modal.061e2282.js";import{F as Zr,e as en,g as tn,d as sn,c as rn}from"../chunks/index.422f451d.js";import{w as rs}from"../chunks/index.66b7299f.js";import{a as nn,b as ln,T as Qt,c as an,d as on,C as ls}from"../chunks/CodeContainer.4f69f5d6.js";const cn=`
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
</div>`,dn=`
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

<Table config={groupConfig} />`,Nr=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,un=`
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

<Table config={usersConfig} />`,Bs=`
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
				
export const usersStore = writable<User[]>(users);`,fn=`
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
<\/script>

<Table 
	config={usersNoRolesConfig} 
	on:action={(obj) => alert(obj.detail.type)} 
/>`,pn=`
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

<Table config={usersBDConfig} />`,mn=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,hn=`
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
}`,gn=`
export interface Columns {
	[key: string]: Column;
}`,vn=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,bn=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,$n=`
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

<Table config={usersMissingIDsConfig} />`,_n=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,Dn=`
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
`,En=`
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
`,wn=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Cn=`
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
<\/script>`,Tn=`
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
`,yn=`
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
`,In=`
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
`,xn=`
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
		data: groupsStore,
		toggle: true,
		optionsComponent: TableCrud
	};

	const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
		// See tableCRUDActions tab for more details
	};
<\/script>

<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
<Modal />`,Vn=`
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
`,Un=`
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
`,Sn=`
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
`,An=`
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
`,Rn=`
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
`;function kn(f){let e,r,s,n="TableConfig <T>",u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z,q,X,K,J,le,B,L,P,Q="Writable <T[]>",pe,ae,se,Be,Ne,ye,Xe,_e,ne,te,me,Ze,Oe,he,et,je,Z,ge,De,ke,Fe,ue,st,Le,Ge,oe,Ie,Ee,He,rt,We,ie,ce,fe,nt,xe,Se,lt,yt,we,Je,at,Ve,Ue,Ae,It,xt,Re,Vt,Ut,Ce,qe,Ye,St,Ft,de,ee="SvelteComponent",ze,Gt,ot,Bt,Ke,gt,Ot,Lt,it,Me,Qe,Mt,Pt,Dt,Et="number[]",vt,Nt,wt,jt,bt,Pe,ct,Ct,tt,dt,ut,Jt="number",At,Ht,ft,$t,Rt,pt,mt,ht,_t,kt,Tt,qt="Columns",Xt,Ms,Yt,Ps,Zt,Ns,js,as,Hs,Ws;return $=new ns({props:{language:"ts",code:hn}}),{c(){e=o("div"),r=o("div"),s=o("h3"),u=h(n),d=v(),m=o("button"),p=h("Show type details"),_=v(),D=o("div"),I=h("Underlined attributes are "),C=o("strong"),T=h("required"),U=h("."),A=v(),V=o("div"),N($.$$.fragment),y=v(),w=o("div"),E=o("div"),x=o("div"),M=h("id:"),R=v(),k=o("div"),S=h("string"),F=v(),z=o("p"),q=h("Unique identifier for the table to generate unique IDs for the filters."),X=v(),K=o("div"),J=o("div"),le=o("div"),B=h("data:"),L=v(),P=o("div"),pe=h(Q),ae=v(),se=o("p"),Be=h("A writable store of the type "),Ne=o("code"),ye=h("T[]"),Xe=h(". Any changes in the store will be reflected in the table."),_e=v(),ne=o("div"),te=o("div"),me=o("div"),Ze=h("toggle:"),Oe=v(),he=o("div"),et=h("boolean"),je=v(),Z=o("p"),ge=h("Whether the "),De=o("code"),ke=h("fitToScreen"),Fe=h(`
			toggle should be visible.
			`),ue=o("code"),st=h("false"),Le=h(" by default."),Ge=v(),oe=o("div"),Ie=o("div"),Ee=o("div"),He=h("fitToScreen:"),rt=v(),We=o("div"),ie=h("boolean"),ce=v(),fe=o("p"),nt=h("Whether the table takes the whole width. "),xe=o("code"),Se=h("true"),lt=h(" by default."),yt=v(),we=o("div"),Je=o("div"),at=o("div"),Ve=h("height:"),Ue=v(),Ae=o("div"),It=h("number"),xt=v(),Re=o("p"),Vt=h("Custom height for the table in pixels."),Ut=v(),Ce=o("div"),qe=o("div"),Ye=o("div"),St=h("optionsComponent:"),Ft=v(),de=o("div"),ze=h(ee),Gt=v(),ot=o("p"),Bt=h(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Ke=o("code"),gt=h("optionsComponent"),Ot=h(" was provided."),Lt=v(),it=o("div"),Me=o("div"),Qe=o("div"),Mt=h("pageSizes:"),Pt=v(),Dt=o("div"),vt=h(Et),Nt=v(),wt=o("p"),jt=h("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),bt=v(),Pe=o("div"),ct=o("div"),Ct=o("div"),tt=h("defaultPageSize:"),dt=v(),ut=o("div"),At=h(Jt),Ht=v(),ft=o("p"),$t=h(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Rt=v(),pt=o("div"),mt=o("div"),ht=o("div"),_t=h("columns:"),kt=v(),Tt=o("div"),Xt=h(qt),Ms=v(),Yt=o("p"),Ps=h("An object with configuration for specific columns. "),Zt=o("code"),Ns=h("Columns"),js=h(`
			object is described below.`),this.h()},l(Wt){e=i(Wt,"DIV",{class:!0});var Te=c(e);r=i(Te,"DIV",{class:!0,id:!0});var Kt=c(r);s=i(Kt,"H3",{class:!0});var zs=c(s);u=g(zs,n),zs.forEach(l),d=b(Kt),m=i(Kt,"BUTTON",{class:!0});var Js=c(m);p=g(Js,"Show type details"),Js.forEach(l),_=b(Kt),D=i(Kt,"DIV",{class:!0});var os=c(D);I=g(os,"Underlined attributes are "),C=i(os,"STRONG",{});var qs=c(C);T=g(qs,"required"),qs.forEach(l),U=g(os,"."),os.forEach(l),A=b(Kt),V=i(Kt,"DIV",{class:!0,"data-popup":!0});var Ys=c(V);j($.$$.fragment,Ys),Ys.forEach(l),Kt.forEach(l),y=b(Te),w=i(Te,"DIV",{class:!0});var is=c(w);E=i(is,"DIV",{class:!0});var cs=c(E);x=i(cs,"DIV",{class:!0});var Ks=c(x);M=g(Ks,"id:"),Ks.forEach(l),R=b(cs),k=i(cs,"DIV",{class:!0});var Qs=c(k);S=g(Qs,"string"),Qs.forEach(l),cs.forEach(l),F=b(is),z=i(is,"P",{class:!0});var Xs=c(z);q=g(Xs,"Unique identifier for the table to generate unique IDs for the filters."),Xs.forEach(l),is.forEach(l),X=b(Te),K=i(Te,"DIV",{class:!0});var ds=c(K);J=i(ds,"DIV",{class:!0});var us=c(J);le=i(us,"DIV",{class:!0});var Zs=c(le);B=g(Zs,"data:"),Zs.forEach(l),L=b(us),P=i(us,"DIV",{class:!0});var er=c(P);pe=g(er,Q),er.forEach(l),us.forEach(l),ae=b(ds),se=i(ds,"P",{class:!0});var fs=c(se);Be=g(fs,"A writable store of the type "),Ne=i(fs,"CODE",{class:!0});var tr=c(Ne);ye=g(tr,"T[]"),tr.forEach(l),Xe=g(fs,". Any changes in the store will be reflected in the table."),fs.forEach(l),ds.forEach(l),_e=b(Te),ne=i(Te,"DIV",{class:!0});var ps=c(ne);te=i(ps,"DIV",{class:!0});var ms=c(te);me=i(ms,"DIV",{class:!0});var sr=c(me);Ze=g(sr,"toggle:"),sr.forEach(l),Oe=b(ms),he=i(ms,"DIV",{class:!0});var rr=c(he);et=g(rr,"boolean"),rr.forEach(l),ms.forEach(l),je=b(ps),Z=i(ps,"P",{class:!0});var es=c(Z);ge=g(es,"Whether the "),De=i(es,"CODE",{class:!0});var nr=c(De);ke=g(nr,"fitToScreen"),nr.forEach(l),Fe=g(es,`
			toggle should be visible.
			`),ue=i(es,"CODE",{class:!0});var lr=c(ue);st=g(lr,"false"),lr.forEach(l),Le=g(es," by default."),es.forEach(l),ps.forEach(l),Ge=b(Te),oe=i(Te,"DIV",{class:!0});var hs=c(oe);Ie=i(hs,"DIV",{class:!0});var gs=c(Ie);Ee=i(gs,"DIV",{class:!0});var ar=c(Ee);He=g(ar,"fitToScreen:"),ar.forEach(l),rt=b(gs),We=i(gs,"DIV",{class:!0});var or=c(We);ie=g(or,"boolean"),or.forEach(l),gs.forEach(l),ce=b(hs),fe=i(hs,"P",{class:!0});var vs=c(fe);nt=g(vs,"Whether the table takes the whole width. "),xe=i(vs,"CODE",{class:!0});var ir=c(xe);Se=g(ir,"true"),ir.forEach(l),lt=g(vs," by default."),vs.forEach(l),hs.forEach(l),yt=b(Te),we=i(Te,"DIV",{class:!0});var bs=c(we);Je=i(bs,"DIV",{class:!0});var $s=c(Je);at=i($s,"DIV",{class:!0});var cr=c(at);Ve=g(cr,"height:"),cr.forEach(l),Ue=b($s),Ae=i($s,"DIV",{class:!0});var dr=c(Ae);It=g(dr,"number"),dr.forEach(l),$s.forEach(l),xt=b(bs),Re=i(bs,"P",{class:!0});var ur=c(Re);Vt=g(ur,"Custom height for the table in pixels."),ur.forEach(l),bs.forEach(l),Ut=b(Te),Ce=i(Te,"DIV",{class:!0});var _s=c(Ce);qe=i(_s,"DIV",{class:!0});var Ds=c(qe);Ye=i(Ds,"DIV",{class:!0});var fr=c(Ye);St=g(fr,"optionsComponent:"),fr.forEach(l),Ft=b(Ds),de=i(Ds,"DIV",{class:!0});var pr=c(de);ze=g(pr,ee),pr.forEach(l),Ds.forEach(l),Gt=b(_s),ot=i(_s,"P",{class:!0});var Es=c(ot);Bt=g(Es,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Ke=i(Es,"CODE",{class:!0});var mr=c(Ke);gt=g(mr,"optionsComponent"),mr.forEach(l),Ot=g(Es," was provided."),Es.forEach(l),_s.forEach(l),Lt=b(Te),it=i(Te,"DIV",{class:!0});var ws=c(it);Me=i(ws,"DIV",{class:!0});var Cs=c(Me);Qe=i(Cs,"DIV",{class:!0});var hr=c(Qe);Mt=g(hr,"pageSizes:"),hr.forEach(l),Pt=b(Cs),Dt=i(Cs,"DIV",{class:!0});var gr=c(Dt);vt=g(gr,Et),gr.forEach(l),Cs.forEach(l),Nt=b(ws),wt=i(ws,"P",{class:!0});var vr=c(wt);jt=g(vr,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),vr.forEach(l),ws.forEach(l),bt=b(Te),Pe=i(Te,"DIV",{class:!0});var Ts=c(Pe);ct=i(Ts,"DIV",{class:!0});var ys=c(ct);Ct=i(ys,"DIV",{class:!0});var br=c(Ct);tt=g(br,"defaultPageSize:"),br.forEach(l),dt=b(ys),ut=i(ys,"DIV",{class:!0});var $r=c(ut);At=g($r,Jt),$r.forEach(l),ys.forEach(l),Ht=b(Ts),ft=i(Ts,"P",{class:!0});var _r=c(ft);$t=g(_r,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),_r.forEach(l),Ts.forEach(l),Rt=b(Te),pt=i(Te,"DIV",{class:!0});var Is=c(pt);mt=i(Is,"DIV",{class:!0});var xs=c(mt);ht=i(xs,"DIV",{class:!0});var Dr=c(ht);_t=g(Dr,"columns:"),Dr.forEach(l),kt=b(xs),Tt=i(xs,"DIV",{class:!0});var Er=c(Tt);Xt=g(Er,qt),Er.forEach(l),xs.forEach(l),Ms=b(Is),Yt=i(Is,"P",{class:!0});var Vs=c(Yt);Ps=g(Vs,"An object with configuration for specific columns. "),Zt=i(Vs,"CODE",{class:!0});var wr=c(Zt);Ns=g(wr,"Columns"),wr.forEach(l),js=g(Vs,`
			object is described below.`),Vs.forEach(l),Is.forEach(l),Te.forEach(l),this.h()},h(){a(s,"class","font-semibold relative w-max h3"),a(m,"class","btn variant-ghost-primary w-min"),a(D,"class","italic div"),a(V,"class","variant-filled-secondary"),a(V,"data-popup","popupClickTableConfig"),a(r,"class","grid gap-2"),a(r,"id","tableConfig"),a(x,"class","italic"),a(k,"class","font-bold"),a(E,"class","flex gap-2 underline"),a(z,"class","text-xl pl-10"),a(w,"class","items-center"),a(le,"class","italic"),a(P,"class","font-bold"),a(J,"class","flex gap-2 underline"),a(Ne,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(se,"class","text-xl pl-10"),a(K,"class","items-center"),a(me,"class","italic"),a(he,"class","font-bold"),a(te,"class","flex gap-2"),a(De,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(ue,"class","!text-xl bg-red-100 rounded-md p-0.5 text-red-500"),a(Z,"class","text-xl pl-10"),a(ne,"class","items-center"),a(Ee,"class","italic"),a(We,"class","font-bold"),a(Ie,"class","flex gap-2"),a(xe,"class","!text-xl bg-blue-100 rounded-md p-0.5 text-blue-500"),a(fe,"class","text-xl pl-10"),a(oe,"class","items-center"),a(at,"class","italic"),a(Ae,"class","font-bold"),a(Je,"class","flex gap-2"),a(Re,"class","text-xl pl-10"),a(we,"class","items-center"),a(Ye,"class","italic"),a(de,"class","font-bold"),a(qe,"class","flex gap-2"),a(Ke,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(ot,"class","text-xl pl-10"),a(Ce,"class","items-center"),a(Qe,"class","italic"),a(Dt,"class","font-bold"),a(Me,"class","flex gap-2"),a(wt,"class","text-xl pl-10"),a(it,"class","items-center"),a(Ct,"class","italic"),a(ut,"class","font-bold"),a(ct,"class","flex gap-2"),a(ft,"class","text-xl pl-10"),a(Pe,"class","items-center"),a(ht,"class","italic"),a(Tt,"class","font-bold"),a(mt,"class","flex gap-2"),a(Zt,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(Yt,"class","text-xl pl-10"),a(pt,"class","items-center"),a(e,"class","grid gap-5")},m(Wt,Te){Y(Wt,e,Te),t(e,r),t(r,s),t(s,u),t(r,d),t(r,m),t(m,p),t(r,_),t(r,D),t(D,I),t(D,C),t(C,T),t(D,U),t(r,A),t(r,V),H($,V,null),t(e,y),t(e,w),t(w,E),t(E,x),t(x,M),t(E,R),t(E,k),t(k,S),t(w,F),t(w,z),t(z,q),t(e,X),t(e,K),t(K,J),t(J,le),t(le,B),t(J,L),t(J,P),t(P,pe),t(K,ae),t(K,se),t(se,Be),t(se,Ne),t(Ne,ye),t(se,Xe),t(e,_e),t(e,ne),t(ne,te),t(te,me),t(me,Ze),t(te,Oe),t(te,he),t(he,et),t(ne,je),t(ne,Z),t(Z,ge),t(Z,De),t(De,ke),t(Z,Fe),t(Z,ue),t(ue,st),t(Z,Le),t(e,Ge),t(e,oe),t(oe,Ie),t(Ie,Ee),t(Ee,He),t(Ie,rt),t(Ie,We),t(We,ie),t(oe,ce),t(oe,fe),t(fe,nt),t(fe,xe),t(xe,Se),t(fe,lt),t(e,yt),t(e,we),t(we,Je),t(Je,at),t(at,Ve),t(Je,Ue),t(Je,Ae),t(Ae,It),t(we,xt),t(we,Re),t(Re,Vt),t(e,Ut),t(e,Ce),t(Ce,qe),t(qe,Ye),t(Ye,St),t(qe,Ft),t(qe,de),t(de,ze),t(Ce,Gt),t(Ce,ot),t(ot,Bt),t(ot,Ke),t(Ke,gt),t(ot,Ot),t(e,Lt),t(e,it),t(it,Me),t(Me,Qe),t(Qe,Mt),t(Me,Pt),t(Me,Dt),t(Dt,vt),t(it,Nt),t(it,wt),t(wt,jt),t(e,bt),t(e,Pe),t(Pe,ct),t(ct,Ct),t(Ct,tt),t(ct,dt),t(ct,ut),t(ut,At),t(Pe,Ht),t(Pe,ft),t(ft,$t),t(e,Rt),t(e,pt),t(pt,mt),t(mt,ht),t(ht,_t),t(mt,kt),t(mt,Tt),t(Tt,Xt),t(pt,Ms),t(pt,Yt),t(Yt,Ps),t(Yt,Zt),t(Zt,Ns),t(Yt,js),as=!0,Hs||(Ws=Rs(Gs.call(null,m,f[0])),Hs=!0)},p:re,i(Wt){as||(G($.$$.fragment,Wt),as=!0)},o(Wt){O($.$$.fragment,Wt),as=!1},d(Wt){Wt&&l(e),W($),Hs=!1,Ws()}}}function Fn(f){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class Gn extends ve{constructor(e){super(),be(this,e,Fn,kn,$e,{})}}function Bn(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z;return D=new ns({props:{language:"ts",code:gn}}),{c(){e=o("div"),r=o("div"),s=o("h3"),n=h("Columns"),u=v(),d=o("button"),m=h("Show type details"),p=v(),_=o("div"),N(D.$$.fragment),I=v(),C=o("div"),T=o("div"),U=o("div"),A=h("[key: "),V=o("strong"),$=h("string"),y=h("]:"),w=v(),E=o("div"),x=h("Column"),M=v(),R=o("p"),k=h(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(q){e=i(q,"DIV",{class:!0});var X=c(e);r=i(X,"DIV",{class:!0,id:!0});var K=c(r);s=i(K,"H3",{class:!0});var J=c(s);n=g(J,"Columns"),J.forEach(l),u=b(K),d=i(K,"BUTTON",{class:!0});var le=c(d);m=g(le,"Show type details"),le.forEach(l),p=b(K),_=i(K,"DIV",{"data-popup":!0});var B=c(_);j(D.$$.fragment,B),B.forEach(l),K.forEach(l),I=b(X),C=i(X,"DIV",{class:!0});var L=c(C);T=i(L,"DIV",{class:!0});var P=c(T);U=i(P,"DIV",{class:!0});var Q=c(U);A=g(Q,"[key: "),V=i(Q,"STRONG",{});var pe=c(V);$=g(pe,"string"),pe.forEach(l),y=g(Q,"]:"),Q.forEach(l),w=b(P),E=i(P,"DIV",{class:!0});var ae=c(E);x=g(ae,"Column"),ae.forEach(l),P.forEach(l),M=b(L),R=i(L,"P",{class:!0});var se=c(R);k=g(se,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),se.forEach(l),L.forEach(l),X.forEach(l),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(_,"data-popup","popupClickColumns"),a(r,"class","grid gap-2"),a(r,"id","columns"),a(U,"class","italic"),a(E,"class","font-bold"),a(T,"class","flex gap-2"),a(R,"class","text-xl pl-10"),a(C,"class","items-center"),a(e,"class","grid gap-5")},m(q,X){Y(q,e,X),t(e,r),t(r,s),t(s,n),t(r,u),t(r,d),t(d,m),t(r,p),t(r,_),H(D,_,null),t(e,I),t(e,C),t(C,T),t(T,U),t(U,A),t(U,V),t(V,$),t(U,y),t(T,w),t(T,E),t(E,x),t(C,M),t(C,R),t(R,k),S=!0,F||(z=Rs(Gs.call(null,d,f[0])),F=!0)},p:re,i(q){S||(G(D.$$.fragment,q),S=!0)},o(q){O(D.$$.fragment,q),S=!1},d(q){q&&l(e),W(D),F=!1,z()}}}function On(f){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class Ln extends ve{constructor(e){super(),be(this,e,On,Bn,$e,{})}}function Mn(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z,q,X,K,J,le,B,L,P,Q,pe,ae,se,Be,Ne,ye,Xe,_e,ne,te,me,Ze,Oe,he,et,je,Z,ge,De,ke,Fe,ue,st,Le,Ge,oe,Ie,Ee,He,rt,We,ie,ce,fe,nt,xe,Se,lt,yt,we,Je,at,Ve,Ue,Ae,It,xt,Re,Vt,Ut,Ce,qe,Ye,St,Ft;return D=new ns({props:{language:"ts",code:vn}}),{c(){e=o("div"),r=o("div"),s=o("h3"),n=h("Column"),u=v(),d=o("button"),m=h("Show type details"),p=v(),_=o("div"),N(D.$$.fragment),I=v(),C=o("div"),T=o("div"),U=o("div"),A=h("header:"),V=v(),$=o("div"),y=h("string"),w=v(),E=o("p"),x=h(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),M=v(),R=o("div"),k=o("div"),S=o("div"),F=h("exclude:"),z=v(),q=o("div"),X=h("boolean"),K=v(),J=o("p"),le=h(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),B=v(),L=o("div"),P=o("div"),Q=o("div"),pe=h("disableFiltering:"),ae=v(),se=o("div"),Be=h("boolean"),Ne=v(),ye=o("p"),Xe=h("Whether to disable filtering for the column or not. By default, filtering is enabled."),_e=v(),ne=o("div"),te=o("div"),me=o("div"),Ze=h("disableSorting:"),Oe=v(),he=o("div"),et=h("boolean"),je=v(),Z=o("p"),ge=h("Whether to disable sorting for the column or not. By default, sorting is enabled."),De=v(),ke=o("div"),Fe=o("div"),ue=o("div"),st=h("colFitlerFn:"),Le=v(),Ge=o("div"),oe=o("a"),Ie=h("ColumnFilterFn"),Ee=v(),He=o("p"),rt=h(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),We=v(),ie=o("div"),ce=o("div"),fe=o("div"),nt=h("colFilterComponent:"),xe=v(),Se=o("div"),lt=h("SvelteComponent"),yt=v(),we=o("p"),Je=h(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),at=v(),Ve=o("div"),Ue=o("div"),Ae=o("div"),It=h("instructions:"),xt=v(),Re=o("div"),Vt=h("ColumnInstructions"),Ut=v(),Ce=o("p"),qe=h("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(de){e=i(de,"DIV",{class:!0});var ee=c(e);r=i(ee,"DIV",{class:!0,id:!0});var ze=c(r);s=i(ze,"H3",{class:!0});var Gt=c(s);n=g(Gt,"Column"),Gt.forEach(l),u=b(ze),d=i(ze,"BUTTON",{class:!0});var ot=c(d);m=g(ot,"Show type details"),ot.forEach(l),p=b(ze),_=i(ze,"DIV",{"data-popup":!0});var Bt=c(_);j(D.$$.fragment,Bt),Bt.forEach(l),ze.forEach(l),I=b(ee),C=i(ee,"DIV",{class:!0});var Ke=c(C);T=i(Ke,"DIV",{class:!0});var gt=c(T);U=i(gt,"DIV",{class:!0});var Ot=c(U);A=g(Ot,"header:"),Ot.forEach(l),V=b(gt),$=i(gt,"DIV",{class:!0});var Lt=c($);y=g(Lt,"string"),Lt.forEach(l),gt.forEach(l),w=b(Ke),E=i(Ke,"P",{class:!0});var it=c(E);x=g(it,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),it.forEach(l),Ke.forEach(l),M=b(ee),R=i(ee,"DIV",{class:!0});var Me=c(R);k=i(Me,"DIV",{class:!0});var Qe=c(k);S=i(Qe,"DIV",{class:!0});var Mt=c(S);F=g(Mt,"exclude:"),Mt.forEach(l),z=b(Qe),q=i(Qe,"DIV",{class:!0});var Pt=c(q);X=g(Pt,"boolean"),Pt.forEach(l),Qe.forEach(l),K=b(Me),J=i(Me,"P",{class:!0});var Dt=c(J);le=g(Dt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Dt.forEach(l),Me.forEach(l),B=b(ee),L=i(ee,"DIV",{class:!0});var Et=c(L);P=i(Et,"DIV",{class:!0});var vt=c(P);Q=i(vt,"DIV",{class:!0});var Nt=c(Q);pe=g(Nt,"disableFiltering:"),Nt.forEach(l),ae=b(vt),se=i(vt,"DIV",{class:!0});var wt=c(se);Be=g(wt,"boolean"),wt.forEach(l),vt.forEach(l),Ne=b(Et),ye=i(Et,"P",{class:!0});var jt=c(ye);Xe=g(jt,"Whether to disable filtering for the column or not. By default, filtering is enabled."),jt.forEach(l),Et.forEach(l),_e=b(ee),ne=i(ee,"DIV",{class:!0});var bt=c(ne);te=i(bt,"DIV",{class:!0});var Pe=c(te);me=i(Pe,"DIV",{class:!0});var ct=c(me);Ze=g(ct,"disableSorting:"),ct.forEach(l),Oe=b(Pe),he=i(Pe,"DIV",{class:!0});var Ct=c(he);et=g(Ct,"boolean"),Ct.forEach(l),Pe.forEach(l),je=b(bt),Z=i(bt,"P",{class:!0});var tt=c(Z);ge=g(tt,"Whether to disable sorting for the column or not. By default, sorting is enabled."),tt.forEach(l),bt.forEach(l),De=b(ee),ke=i(ee,"DIV",{class:!0});var dt=c(ke);Fe=i(dt,"DIV",{class:!0});var ut=c(Fe);ue=i(ut,"DIV",{class:!0});var Jt=c(ue);st=g(Jt,"colFitlerFn:"),Jt.forEach(l),Le=b(ut),Ge=i(ut,"DIV",{class:!0});var At=c(Ge);oe=i(At,"A",{href:!0});var Ht=c(oe);Ie=g(Ht,"ColumnFilterFn"),Ht.forEach(l),At.forEach(l),ut.forEach(l),Ee=b(dt),He=i(dt,"P",{class:!0});var ft=c(He);rt=g(ft,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),ft.forEach(l),dt.forEach(l),We=b(ee),ie=i(ee,"DIV",{class:!0});var $t=c(ie);ce=i($t,"DIV",{class:!0});var Rt=c(ce);fe=i(Rt,"DIV",{class:!0});var pt=c(fe);nt=g(pt,"colFilterComponent:"),pt.forEach(l),xe=b(Rt),Se=i(Rt,"DIV",{class:!0});var mt=c(Se);lt=g(mt,"SvelteComponent"),mt.forEach(l),Rt.forEach(l),yt=b($t),we=i($t,"P",{class:!0});var ht=c(we);Je=g(ht,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),ht.forEach(l),$t.forEach(l),at=b(ee),Ve=i(ee,"DIV",{class:!0});var _t=c(Ve);Ue=i(_t,"DIV",{class:!0});var kt=c(Ue);Ae=i(kt,"DIV",{class:!0});var Tt=c(Ae);It=g(Tt,"instructions:"),Tt.forEach(l),xt=b(kt),Re=i(kt,"DIV",{class:!0});var qt=c(Re);Vt=g(qt,"ColumnInstructions"),qt.forEach(l),kt.forEach(l),Ut=b(_t),Ce=i(_t,"P",{class:!0});var Xt=c(Ce);qe=g(Xt,"Configuration for the column's appearance, sorting and filtering functionalities."),Xt.forEach(l),_t.forEach(l),ee.forEach(l),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(_,"data-popup","popupClickColumn"),a(r,"class","grid gap-2"),a(r,"id","column"),a(U,"class","italic"),a($,"class","font-bold"),a(T,"class","flex gap-2"),a(E,"class","text-xl pl-10"),a(C,"class","items-center"),a(S,"class","italic"),a(q,"class","font-bold"),a(k,"class","flex gap-2"),a(J,"class","text-xl pl-10"),a(R,"class","items-center"),a(Q,"class","italic"),a(se,"class","font-bold"),a(P,"class","flex gap-2"),a(ye,"class","text-xl pl-10"),a(L,"class","items-center"),a(me,"class","italic"),a(he,"class","font-bold"),a(te,"class","flex gap-2"),a(Z,"class","text-xl pl-10"),a(ne,"class","items-center"),a(ue,"class","italic"),a(oe,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),a(Ge,"class","font-bold"),a(Fe,"class","flex gap-2"),a(He,"class","text-xl pl-10"),a(ke,"class","items-center"),a(fe,"class","italic"),a(Se,"class","font-bold"),a(ce,"class","flex gap-2"),a(we,"class","text-xl pl-10"),a(ie,"class","items-center"),a(Ae,"class","italic"),a(Re,"class","font-bold"),a(Ue,"class","flex gap-2"),a(Ce,"class","text-xl pl-10"),a(Ve,"class","items-center"),a(e,"class","grid gap-5")},m(de,ee){Y(de,e,ee),t(e,r),t(r,s),t(s,n),t(r,u),t(r,d),t(d,m),t(r,p),t(r,_),H(D,_,null),t(e,I),t(e,C),t(C,T),t(T,U),t(U,A),t(T,V),t(T,$),t($,y),t(C,w),t(C,E),t(E,x),t(e,M),t(e,R),t(R,k),t(k,S),t(S,F),t(k,z),t(k,q),t(q,X),t(R,K),t(R,J),t(J,le),t(e,B),t(e,L),t(L,P),t(P,Q),t(Q,pe),t(P,ae),t(P,se),t(se,Be),t(L,Ne),t(L,ye),t(ye,Xe),t(e,_e),t(e,ne),t(ne,te),t(te,me),t(me,Ze),t(te,Oe),t(te,he),t(he,et),t(ne,je),t(ne,Z),t(Z,ge),t(e,De),t(e,ke),t(ke,Fe),t(Fe,ue),t(ue,st),t(Fe,Le),t(Fe,Ge),t(Ge,oe),t(oe,Ie),t(ke,Ee),t(ke,He),t(He,rt),t(e,We),t(e,ie),t(ie,ce),t(ce,fe),t(fe,nt),t(ce,xe),t(ce,Se),t(Se,lt),t(ie,yt),t(ie,we),t(we,Je),t(e,at),t(e,Ve),t(Ve,Ue),t(Ue,Ae),t(Ae,It),t(Ue,xt),t(Ue,Re),t(Re,Vt),t(Ve,Ut),t(Ve,Ce),t(Ce,qe),Ye=!0,St||(Ft=Rs(Gs.call(null,d,f[0])),St=!0)},p:re,i(de){Ye||(G(D.$$.fragment,de),Ye=!0)},o(de){O(D.$$.fragment,de),Ye=!1},d(de){de&&l(e),W(D),St=!1,Ft()}}}function Pn(f){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Nn extends ve{constructor(e){super(),be(this,e,Pn,Mn,$e,{})}}function jn(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z,q,X,K,J,le,B,L,P,Q,pe,ae,se,Be,Ne,ye,Xe,_e,ne,te,me,Ze,Oe,he,et,je,Z,ge,De,ke,Fe,ue,st,Le,Ge,oe,Ie,Ee,He,rt,We,ie,ce,fe,nt,xe,Se,lt,yt,we,Je,at,Ve,Ue,Ae,It,xt,Re,Vt,Ut,Ce,qe,Ye,St,Ft;return D=new ns({props:{language:"ts",code:bn}}),{c(){e=o("div"),r=o("div"),s=o("h3"),n=h("ColumnInstructions"),u=v(),d=o("button"),m=h("Show type details"),p=v(),_=o("div"),N(D.$$.fragment),I=v(),C=o("div"),T=o("div"),U=o("div"),A=h("toStringFn:"),V=v(),$=o("div"),y=h("(value: any) => string"),w=v(),E=o("p"),x=h("Custom toString function to be applied on the column."),M=v(),R=o("div"),k=o("div"),S=o("div"),F=h("toSortableValueFn:"),z=v(),q=o("div"),X=h("(value: any) => string | number"),K=v(),J=o("p"),le=h("Custom function to return either a string or a number value to have a sortable column."),B=v(),L=o("div"),P=o("div"),Q=o("div"),pe=h("toFilterableValueFn:"),ae=v(),se=o("div"),Be=h("(value: any) => string | number | Date"),Ne=v(),ye=o("p"),Xe=h(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),_e=v(),ne=o("div"),te=o("div"),me=o("div"),Ze=h("renderComponent:"),Oe=v(),he=o("div"),et=h("SvelteComponent"),je=v(),Z=o("div"),ge=o("p"),De=o("code"),ke=h("renderComponent"),Fe=h(" overrides "),ue=o("code"),st=h("toStringFn"),Le=h("."),Ge=v(),oe=o("p"),Ie=h("Every "),Ee=o("code"),He=h("renderComponent"),rt=h(" will get 2 props:"),We=v(),ie=o("div"),ce=o("div"),fe=o("div"),nt=h("row:"),xe=v(),Se=o("div"),lt=h("Object"),yt=v(),we=o("p"),Je=h("The current row in the table. In other words, a single object from the data store."),at=v(),Ve=o("div"),Ue=o("div"),Ae=o("div"),It=h("value:"),xt=v(),Re=o("div"),Vt=h("any"),Ut=v(),Ce=o("p"),qe=h("The value of the current cell."),this.h()},l(de){e=i(de,"DIV",{class:!0});var ee=c(e);r=i(ee,"DIV",{class:!0,id:!0});var ze=c(r);s=i(ze,"H3",{class:!0});var Gt=c(s);n=g(Gt,"ColumnInstructions"),Gt.forEach(l),u=b(ze),d=i(ze,"BUTTON",{class:!0});var ot=c(d);m=g(ot,"Show type details"),ot.forEach(l),p=b(ze),_=i(ze,"DIV",{"data-popup":!0});var Bt=c(_);j(D.$$.fragment,Bt),Bt.forEach(l),ze.forEach(l),I=b(ee),C=i(ee,"DIV",{class:!0});var Ke=c(C);T=i(Ke,"DIV",{class:!0});var gt=c(T);U=i(gt,"DIV",{class:!0});var Ot=c(U);A=g(Ot,"toStringFn:"),Ot.forEach(l),V=b(gt),$=i(gt,"DIV",{class:!0});var Lt=c($);y=g(Lt,"(value: any) => string"),Lt.forEach(l),gt.forEach(l),w=b(Ke),E=i(Ke,"P",{class:!0});var it=c(E);x=g(it,"Custom toString function to be applied on the column."),it.forEach(l),Ke.forEach(l),M=b(ee),R=i(ee,"DIV",{class:!0});var Me=c(R);k=i(Me,"DIV",{class:!0});var Qe=c(k);S=i(Qe,"DIV",{class:!0});var Mt=c(S);F=g(Mt,"toSortableValueFn:"),Mt.forEach(l),z=b(Qe),q=i(Qe,"DIV",{class:!0});var Pt=c(q);X=g(Pt,"(value: any) => string | number"),Pt.forEach(l),Qe.forEach(l),K=b(Me),J=i(Me,"P",{class:!0});var Dt=c(J);le=g(Dt,"Custom function to return either a string or a number value to have a sortable column."),Dt.forEach(l),Me.forEach(l),B=b(ee),L=i(ee,"DIV",{class:!0});var Et=c(L);P=i(Et,"DIV",{class:!0});var vt=c(P);Q=i(vt,"DIV",{class:!0});var Nt=c(Q);pe=g(Nt,"toFilterableValueFn:"),Nt.forEach(l),ae=b(vt),se=i(vt,"DIV",{class:!0});var wt=c(se);Be=g(wt,"(value: any) => string | number | Date"),wt.forEach(l),vt.forEach(l),Ne=b(Et),ye=i(Et,"P",{class:!0});var jt=c(ye);Xe=g(jt,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),jt.forEach(l),Et.forEach(l),_e=b(ee),ne=i(ee,"DIV",{class:!0});var bt=c(ne);te=i(bt,"DIV",{class:!0});var Pe=c(te);me=i(Pe,"DIV",{class:!0});var ct=c(me);Ze=g(ct,"renderComponent:"),ct.forEach(l),Oe=b(Pe),he=i(Pe,"DIV",{class:!0});var Ct=c(he);et=g(Ct,"SvelteComponent"),Ct.forEach(l),Pe.forEach(l),je=b(bt),Z=i(bt,"DIV",{class:!0});var tt=c(Z);ge=i(tt,"P",{class:!0});var dt=c(ge);De=i(dt,"CODE",{class:!0});var ut=c(De);ke=g(ut,"renderComponent"),ut.forEach(l),Fe=g(dt," overrides "),ue=i(dt,"CODE",{class:!0});var Jt=c(ue);st=g(Jt,"toStringFn"),Jt.forEach(l),Le=g(dt,"."),dt.forEach(l),Ge=b(tt),oe=i(tt,"P",{class:!0});var At=c(oe);Ie=g(At,"Every "),Ee=i(At,"CODE",{class:!0});var Ht=c(Ee);He=g(Ht,"renderComponent"),Ht.forEach(l),rt=g(At," will get 2 props:"),At.forEach(l),We=b(tt),ie=i(tt,"DIV",{class:!0});var ft=c(ie);ce=i(ft,"DIV",{class:!0});var $t=c(ce);fe=i($t,"DIV",{class:!0});var Rt=c(fe);nt=g(Rt,"row:"),Rt.forEach(l),xe=b($t),Se=i($t,"DIV",{class:!0});var pt=c(Se);lt=g(pt,"Object"),pt.forEach(l),$t.forEach(l),yt=b(ft),we=i(ft,"P",{class:!0});var mt=c(we);Je=g(mt,"The current row in the table. In other words, a single object from the data store."),mt.forEach(l),ft.forEach(l),at=b(tt),Ve=i(tt,"DIV",{class:!0});var ht=c(Ve);Ue=i(ht,"DIV",{class:!0});var _t=c(Ue);Ae=i(_t,"DIV",{class:!0});var kt=c(Ae);It=g(kt,"value:"),kt.forEach(l),xt=b(_t),Re=i(_t,"DIV",{class:!0});var Tt=c(Re);Vt=g(Tt,"any"),Tt.forEach(l),_t.forEach(l),Ut=b(ht),Ce=i(ht,"P",{class:!0});var qt=c(Ce);qe=g(qt,"The value of the current cell."),qt.forEach(l),ht.forEach(l),tt.forEach(l),bt.forEach(l),ee.forEach(l),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(_,"data-popup","popupClickColumnInstructions"),a(r,"class","grid gap-2"),a(r,"id","columnInstructions"),a(U,"class","italic"),a($,"class","font-bold"),a(T,"class","flex gap-2"),a(E,"class","text-xl pl-10"),a(C,"class","items-center"),a(S,"class","italic"),a(q,"class","font-bold"),a(k,"class","flex gap-2"),a(J,"class","text-xl pl-10"),a(R,"class","items-center"),a(Q,"class","italic"),a(se,"class","font-bold"),a(P,"class","flex gap-2"),a(ye,"class","text-xl pl-10"),a(L,"class","items-center"),a(me,"class","italic"),a(he,"class","font-bold"),a(te,"class","flex gap-2"),a(De,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(ue,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(ge,"class","underline"),a(Ee,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(oe,"class",""),a(fe,"class","italic"),a(Se,"class","font-bold"),a(ce,"class","flex gap-2"),a(we,"class","text-xl pl-10"),a(ie,"class","items-center mt-2"),a(Ae,"class","italic"),a(Re,"class","font-bold"),a(Ue,"class","flex gap-2"),a(Ce,"class","text-xl pl-10"),a(Ve,"class","items-center mt-2"),a(Z,"class","ml-5"),a(ne,"class","items-center mt-5"),a(e,"class","grid gap-5")},m(de,ee){Y(de,e,ee),t(e,r),t(r,s),t(s,n),t(r,u),t(r,d),t(d,m),t(r,p),t(r,_),H(D,_,null),t(e,I),t(e,C),t(C,T),t(T,U),t(U,A),t(T,V),t(T,$),t($,y),t(C,w),t(C,E),t(E,x),t(e,M),t(e,R),t(R,k),t(k,S),t(S,F),t(k,z),t(k,q),t(q,X),t(R,K),t(R,J),t(J,le),t(e,B),t(e,L),t(L,P),t(P,Q),t(Q,pe),t(P,ae),t(P,se),t(se,Be),t(L,Ne),t(L,ye),t(ye,Xe),t(e,_e),t(e,ne),t(ne,te),t(te,me),t(me,Ze),t(te,Oe),t(te,he),t(he,et),t(ne,je),t(ne,Z),t(Z,ge),t(ge,De),t(De,ke),t(ge,Fe),t(ge,ue),t(ue,st),t(ge,Le),t(Z,Ge),t(Z,oe),t(oe,Ie),t(oe,Ee),t(Ee,He),t(oe,rt),t(Z,We),t(Z,ie),t(ie,ce),t(ce,fe),t(fe,nt),t(ce,xe),t(ce,Se),t(Se,lt),t(ie,yt),t(ie,we),t(we,Je),t(Z,at),t(Z,Ve),t(Ve,Ue),t(Ue,Ae),t(Ae,It),t(Ue,xt),t(Ue,Re),t(Re,Vt),t(Ve,Ut),t(Ve,Ce),t(Ce,qe),Ye=!0,St||(Ft=Rs(Gs.call(null,d,f[0])),St=!0)},p:re,i(de){Ye||(G(D.$$.fragment,de),Ye=!0)},o(de){O(D.$$.fragment,de),Ye=!1},d(de){de&&l(e),W(D),St=!1,Ft()}}}function Hn(f){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Wn extends ve{constructor(e){super(),be(this,e,Hn,jn,$e,{})}}function Cr(f,e,r){const s=f.slice();return s[5]=e[r],s}function Tr(f){let e,r,s,n,u,d;r=new Zr({props:{icon:f[5].icon}});function m(){return f[4](f[5])}return{c(){e=o("button"),N(r.$$.fragment),s=v(),this.h()},l(p){e=i(p,"BUTTON",{class:!0});var _=c(e);j(r.$$.fragment,_),s=b(_),_.forEach(l),this.h()},h(){a(e,"class",`btn btn-sm btn-icon rounded-md ${f[5].color}`)},m(p,_){Y(p,e,_),H(r,e,null),t(e,s),n=!0,u||(d=As(e,"click",Mr(m)),u=!0)},p(p,_){f=p},i(p){n||(G(r.$$.fragment,p),n=!0)},o(p){O(r.$$.fragment,p),n=!1},d(p){p&&l(e),W(r),u=!1,d()}}}function zn(f){let e,r,s=f[1],n=[];for(let d=0;d<s.length;d+=1)n[d]=Tr(Cr(f,s,d));const u=d=>O(n[d],1,1,()=>{n[d]=null});return{c(){e=o("div");for(let d=0;d<n.length;d+=1)n[d].c();this.h()},l(d){e=i(d,"DIV",{class:!0});var m=c(e);for(let p=0;p<n.length;p+=1)n[p].l(m);m.forEach(l),this.h()},h(){a(e,"class","flex gap-2 w-min")},m(d,m){Y(d,e,m);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(e,null);r=!0},p(d,[m]){if(m&3){s=d[1];let p;for(p=0;p<s.length;p+=1){const _=Cr(d,s,p);n[p]?(n[p].p(_,m),G(n[p],1)):(n[p]=Tr(_),n[p].c(),G(n[p],1),n[p].m(e,null))}for(ks(),p=s.length;p<n.length;p+=1)u(p);Fs()}},i(d){if(!r){for(let m=0;m<s.length;m+=1)G(n[m]);r=!0}},o(d){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(d){d&&l(e),ss(n,d)}}}function Jn(f,e,r){let{row:s}=e,{dispatchFn:n}=e;const u=p=>n({type:p,row:s}),d=[{icon:en,color:"variant-filled-primary",type:"CREATE"},{icon:tn,color:"variant-filled-secondary",type:"READ"},{icon:sn,color:"variant-filled-warning",type:"UPDATE"},{icon:rn,color:"variant-filled-error",type:"DELETE"}],m=p=>u(p.type);return f.$$set=p=>{"row"in p&&r(2,s=p.row),"dispatchFn"in p&&r(3,n=p.dispatchFn)},[u,d,s,n,m]}class qn extends ve{constructor(e){super(),be(this,e,Jn,zn,$e,{row:2,dispatchFn:3})}}function yr(f,e,r){const s=f.slice();return s[2]=e[r],s}function Ir(f){let e,r=f[2].name+"",s,n;return{c(){e=o("option"),s=h(r),this.h()},l(u){e=i(u,"OPTION",{});var d=c(e);s=g(d,r),d.forEach(l),this.h()},h(){e.__value=n=f[2].id,e.value=e.__value},m(u,d){Y(u,e,d),t(e,s)},p(u,d){d&1&&r!==(r=u[2].name+"")&&zt(s,r),d&1&&n!==(n=u[2].id)&&(e.__value=n,e.value=e.__value)},d(u){u&&l(e)}}}function Yn(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V=f[0],$=[];for(let y=0;y<V.length;y+=1)$[y]=Ir(yr(f,V,y));return{c(){e=o("div"),r=o("label"),s=h("Select the users you would like to add to the "),n=o("strong"),u=h(f[1]),d=h("."),m=v(),p=o("select");for(let y=0;y<$.length;y+=1)$[y].c();_=v(),D=o("div"),I=o("button"),C=h("Cancel"),T=v(),U=o("button"),A=h("Done"),this.h()},l(y){e=i(y,"DIV",{class:!0});var w=c(e);r=i(w,"LABEL",{for:!0});var E=c(r);s=g(E,"Select the users you would like to add to the "),n=i(E,"STRONG",{});var x=c(n);u=g(x,f[1]),x.forEach(l),d=g(E,"."),E.forEach(l),m=b(w),p=i(w,"SELECT",{name:!0,class:!0,id:!0});var M=c(p);for(let F=0;F<$.length;F+=1)$[F].l(M);M.forEach(l),_=b(w),D=i(w,"DIV",{class:!0});var R=c(D);I=i(R,"BUTTON",{class:!0});var k=c(I);C=g(k,"Cancel"),k.forEach(l),T=b(R),U=i(R,"BUTTON",{class:!0});var S=c(U);A=g(S,"Done"),S.forEach(l),R.forEach(l),w.forEach(l),this.h()},h(){a(r,"for","users"),p.multiple=!0,a(p,"name","users"),a(p,"class","select"),a(p,"id",""),a(I,"class","btn variant-filled-error"),a(U,"class","btn variant-filled-success"),a(D,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(y,w){Y(y,e,w),t(e,r),t(r,s),t(r,n),t(n,u),t(r,d),t(e,m),t(e,p);for(let E=0;E<$.length;E+=1)$[E]&&$[E].m(p,null);t(e,_),t(e,D),t(D,I),t(I,C),t(D,T),t(D,U),t(U,A)},p(y,[w]){if(w&2&&zt(u,y[1]),w&1){V=y[0];let E;for(E=0;E<V.length;E+=1){const x=yr(y,V,E);$[E]?$[E].p(x,w):($[E]=Ir(x),$[E].c(),$[E].m(p,null))}for(;E<$.length;E+=1)$[E].d(1);$.length=V.length}},i:re,o:re,d(y){y&&l(e),ss($,y)}}}function Kn(f,e,r){let{users:s}=e,{group:n}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,n=u.group)},[s,n]}class Qn extends ve{constructor(e){super(),be(this,e,Kn,Yn,$e,{users:0,group:1})}}function xr(f,e,r){const s=f.slice();return s[2]=e[r],s}function Vr(f){let e,r;return{c(){e=o("p"),r=h("No users in this group"),this.h()},l(s){e=i(s,"P",{class:!0});var n=c(e);r=g(n,"No users in this group"),n.forEach(l),this.h()},h(){a(e,"class","italic")},m(s,n){Y(s,e,n),t(e,r)},p:re,d(s){s&&l(e)}}}function Ur(f){let e,r,s=f[2].name+"",n,u;return{c(){e=o("li"),r=h("- "),n=h(s),this.h()},l(d){e=i(d,"LI",{class:!0});var m=c(e);r=g(m,"- "),n=g(m,s),m.forEach(l),this.h()},h(){a(e,"class","font-semibold"),e.value=u=f[2].id},m(d,m){Y(d,e,m),t(e,r),t(e,n)},p(d,m){m&1&&s!==(s=d[2].name+"")&&zt(n,s),m&1&&u!==(u=d[2].id)&&(e.value=u)},d(d){d&&l(e)}}}function Xn(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V=f[0],$=[];for(let w=0;w<V.length;w+=1)$[w]=Ur(xr(f,V,w));let y=null;return V.length||(y=Vr()),{c(){e=o("div"),r=o("label"),s=h("Users in "),n=o("strong"),u=h(f[1]),d=h("."),m=v(),p=o("ul");for(let w=0;w<$.length;w+=1)$[w].c();y&&y.c(),_=v(),D=o("div"),I=o("button"),C=h("Cancel"),T=v(),U=o("button"),A=h("Done"),this.h()},l(w){e=i(w,"DIV",{class:!0});var E=c(e);r=i(E,"LABEL",{for:!0});var x=c(r);s=g(x,"Users in "),n=i(x,"STRONG",{});var M=c(n);u=g(M,f[1]),M.forEach(l),d=g(x,"."),x.forEach(l),m=b(E),p=i(E,"UL",{});var R=c(p);for(let z=0;z<$.length;z+=1)$[z].l(R);y&&y.l(R),R.forEach(l),_=b(E),D=i(E,"DIV",{class:!0});var k=c(D);I=i(k,"BUTTON",{class:!0});var S=c(I);C=g(S,"Cancel"),S.forEach(l),T=b(k),U=i(k,"BUTTON",{class:!0});var F=c(U);A=g(F,"Done"),F.forEach(l),k.forEach(l),E.forEach(l),this.h()},h(){a(r,"for","users"),a(I,"class","btn variant-filled-error"),a(U,"class","btn variant-filled-success"),a(D,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,E){Y(w,e,E),t(e,r),t(r,s),t(r,n),t(n,u),t(r,d),t(e,m),t(e,p);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(p,null);y&&y.m(p,null),t(e,_),t(e,D),t(D,I),t(I,C),t(D,T),t(D,U),t(U,A)},p(w,[E]){if(E&2&&zt(u,w[1]),E&1){V=w[0];let x;for(x=0;x<V.length;x+=1){const M=xr(w,V,x);$[x]?$[x].p(M,E):($[x]=Ur(M),$[x].c(),$[x].m(p,null))}for(;x<$.length;x+=1)$[x].d(1);$.length=V.length,!V.length&&y?y.p(w,E):V.length?y&&(y.d(1),y=null):(y=Vr(),y.c(),y.m(p,null))}},i:re,o:re,d(w){w&&l(e),ss($,w),y&&y.d()}}}function Zn(f,e,r){let{users:s}=e,{group:n}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,n=u.group)},[s,n]}class el extends ve{constructor(e){super(),be(this,e,Zn,Xn,$e,{users:0,group:1})}}function tl(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w;return{c(){e=o("div"),r=o("label"),s=h("Group name"),n=v(),u=o("input"),d=v(),m=o("label"),p=h("Group description"),_=v(),D=o("input"),I=v(),C=o("div"),T=o("button"),U=h("Cancel"),A=v(),V=o("button"),$=h("Done"),this.h()},l(E){e=i(E,"DIV",{class:!0});var x=c(e);r=i(x,"LABEL",{for:!0});var M=c(r);s=g(M,"Group name"),M.forEach(l),n=b(x),u=i(x,"INPUT",{type:!0,id:!0,class:!0}),d=b(x),m=i(x,"LABEL",{for:!0});var R=c(m);p=g(R,"Group description"),R.forEach(l),_=b(x),D=i(x,"INPUT",{type:!0,id:!0,class:!0}),I=b(x),C=i(x,"DIV",{class:!0});var k=c(C);T=i(k,"BUTTON",{class:!0});var S=c(T);U=g(S,"Cancel"),S.forEach(l),A=b(k),V=i(k,"BUTTON",{class:!0});var F=c(V);$=g(F,"Done"),F.forEach(l),k.forEach(l),x.forEach(l),this.h()},h(){a(r,"for","groupName"),a(u,"type","text"),a(u,"id","groupName"),a(u,"class","input input-primary"),a(m,"for","groupDescription"),a(D,"type","text"),a(D,"id","groupDescription"),a(D,"class","input input-primary"),a(T,"class","btn variant-filled-error"),a(V,"class","btn variant-filled-success"),a(C,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(E,x){Y(E,e,x),t(e,r),t(r,s),t(e,n),t(e,u),Us(u,f[0].name),t(e,d),t(e,m),t(m,p),t(e,_),t(e,D),Us(D,f[0].description),t(e,I),t(e,C),t(C,T),t(T,U),t(C,A),t(C,V),t(V,$),y||(w=[As(u,"input",f[1]),As(D,"input",f[2])],y=!0)},p(E,[x]){x&1&&u.value!==E[0].name&&Us(u,E[0].name),x&1&&D.value!==E[0].description&&Us(D,E[0].description)},i:re,o:re,d(E){E&&l(e),y=!1,Hr(w)}}}function sl(f,e,r){let{group:s}=e;function n(){s.name=this.value,r(0,s)}function u(){s.description=this.value,r(0,s)}return f.$$set=d=>{"group"in d&&r(0,s=d.group)},[s,n,u]}class rl extends ve{constructor(e){super(),be(this,e,sl,tl,$e,{group:0})}}const nl=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],ll=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],al=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],ol=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],il=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],cl=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],jr=rs(nl),Os=rs(ll),dl=rs(al),ul=rs(cl),fl=rs(il),Sr={32655:"NA",32654:"NM",32653:"ND"},pl=rs(ol);function Ar(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function Rr(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function kr(f){let e,r;return{c(){e=o("h3"),r=h(f[0]),this.h()},l(s){e=i(s,"H3",{class:!0});var n=c(e);r=g(n,f[0]),n.forEach(l),this.h()},h(){a(e,"class","h3")},m(s,n){Y(s,e,n),t(e,r)},p(s,n){n&1&&zt(r,s[0])},d(s){s&&l(e)}}}function ml(f){let e=f[6].name+"",r;return{c(){r=h(e)},l(s){r=g(s,e)},m(s,n){Y(s,r,n)},p(s,n){n&2&&e!==(e=s[6].name+"")&&zt(r,e)},d(s){s&&l(r)}}}function Fr(f){let e,r,s;function n(d){f[4](d)}let u={name:`tab${f[8]}`,value:f[8],$$slots:{default:[ml]},$$scope:{ctx:f}};return f[2]!==void 0&&(u.group=f[2]),e=new ln({props:u}),Yr.push(()=>Kr(e,"group",n)),{c(){N(e.$$.fragment)},l(d){j(e.$$.fragment,d)},m(d,m){H(e,d,m),s=!0},p(d,m){const p={};m&34&&(p.$$scope={dirty:m,ctx:d}),!r&&m&4&&(r=!0,p.group=d[2],Qr(()=>r=!1)),e.$set(p)},i(d){s||(G(e.$$.fragment,d),s=!0)},o(d){O(e.$$.fragment,d),s=!1},d(d){W(e,d)}}}function hl(f){let e,r,s=f[1],n=[];for(let d=0;d<s.length;d+=1)n[d]=Fr(Ar(f,s,d));const u=d=>O(n[d],1,1,()=>{n[d]=null});return{c(){for(let d=0;d<n.length;d+=1)n[d].c();e=ts()},l(d){for(let m=0;m<n.length;m+=1)n[m].l(d);e=ts()},m(d,m){for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(d,m);Y(d,e,m),r=!0},p(d,m){if(m&6){s=d[1];let p;for(p=0;p<s.length;p+=1){const _=Ar(d,s,p);n[p]?(n[p].p(_,m),G(n[p],1)):(n[p]=Fr(_),n[p].c(),G(n[p],1),n[p].m(e.parentNode,e))}for(ks(),p=s.length;p<n.length;p+=1)u(p);Fs()}},i(d){if(!r){for(let m=0;m<s.length;m+=1)G(n[m]);r=!0}},o(d){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(d){ss(n,d),d&&l(e)}}}function Gr(f){let e,r;return e=new ns({props:{language:f[6].language,code:f[6].code}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p(s,n){const u={};n&2&&(u.language=s[6].language),n&2&&(u.code=s[6].code),e.$set(u)},i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Br(f){let e,r,s=f[2]===f[8]&&Gr(f);return{c(){s&&s.c(),e=ts()},l(n){s&&s.l(n),e=ts()},m(n,u){s&&s.m(n,u),Y(n,e,u),r=!0},p(n,u){n[2]===n[8]?s?(s.p(n,u),u&4&&G(s,1)):(s=Gr(n),s.c(),G(s,1),s.m(e.parentNode,e)):s&&(ks(),O(s,1,1,()=>{s=null}),Fs())},i(n){r||(G(s),r=!0)},o(n){O(s),r=!1},d(n){s&&s.d(n),n&&l(e)}}}function gl(f){let e,r,s=f[1],n=[];for(let d=0;d<s.length;d+=1)n[d]=Br(Rr(f,s,d));const u=d=>O(n[d],1,1,()=>{n[d]=null});return{c(){for(let d=0;d<n.length;d+=1)n[d].c();e=ts()},l(d){for(let m=0;m<n.length;m+=1)n[m].l(d);e=ts()},m(d,m){for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(d,m);Y(d,e,m),r=!0},p(d,m){if(m&6){s=d[1];let p;for(p=0;p<s.length;p+=1){const _=Rr(d,s,p);n[p]?(n[p].p(_,m),G(n[p],1)):(n[p]=Br(_),n[p].c(),G(n[p],1),n[p].m(e.parentNode,e))}for(ks(),p=s.length;p<n.length;p+=1)u(p);Fs()}},i(d){if(!r){for(let m=0;m<s.length;m+=1)G(n[m]);r=!0}},o(d){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(d){ss(n,d),d&&l(e)}}}function vl(f){let e,r,s,n,u,d,m,p,_,D=f[0]&&kr(f);const I=f[3].default,C=Wr(I,f,f[5],null);return p=new nn({props:{$$slots:{panel:[gl],default:[hl]},$$scope:{ctx:f}}}),{c(){e=o("div"),r=o("div"),D&&D.c(),s=v(),n=o("div"),u=o("div"),C&&C.c(),d=v(),m=o("div"),N(p.$$.fragment),this.h()},l(T){e=i(T,"DIV",{class:!0});var U=c(e);r=i(U,"DIV",{class:!0});var A=c(r);D&&D.l(A),A.forEach(l),s=b(U),n=i(U,"DIV",{class:!0});var V=c(n);u=i(V,"DIV",{class:!0});var $=c(u);C&&C.l($),$.forEach(l),d=b(V),m=i(V,"DIV",{class:!0});var y=c(m);j(p.$$.fragment,y),y.forEach(l),V.forEach(l),U.forEach(l),this.h()},h(){a(r,"class","py-5"),a(u,"class","flex-1"),a(m,"class","flex-1"),a(n,"class","flex card p-5 gap-10"),a(e,"class","")},m(T,U){Y(T,e,U),t(e,r),D&&D.m(r,null),t(e,s),t(e,n),t(n,u),C&&C.m(u,null),t(n,d),t(n,m),H(p,m,null),_=!0},p(T,[U]){T[0]?D?D.p(T,U):(D=kr(T),D.c(),D.m(r,null)):D&&(D.d(1),D=null),C&&C.p&&(!_||U&32)&&zr(C,I,T,T[5],_?qr(I,T[5],U,null):Jr(T[5]),null);const A={};U&38&&(A.$$scope={dirty:U,ctx:T}),p.$set(A)},i(T){_||(G(C,T),G(p.$$.fragment,T),_=!0)},o(T){O(C,T),O(p.$$.fragment,T),_=!1},d(T){T&&l(e),D&&D.d(),C&&C.d(T),W(p)}}}function bl(f,e,r){let{$$slots:s={},$$scope:n}=e,{title:u}=e,{tabs:d=[]}=e,m=0;function p(_){m=_,r(2,m)}return f.$$set=_=>{"title"in _&&r(0,u=_.title),"tabs"in _&&r(1,d=_.tabs),"$$scope"in _&&r(5,n=_.$$scope)},[u,d,m,s,p,n]}class Ls extends ve{constructor(e){super(),be(this,e,bl,vl,$e,{title:0,tabs:1})}}function $l(f){let e,r;return e=new Qt({props:{config:f[0]}}),e.$on("action",f[1]),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function _l(f){let e,r,s;return r=new Ls({props:{title:"CRUD",tabs:f[2],$$slots:{default:[$l]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","CRUD")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&16&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function Dl(f,e,r){let s;Pr(f,Os,m=>r(3,s=m));const n={id:"userGroupCRUD",toggle:!0,data:jr,optionsComponent:qn},u=m=>{const{type:p,row:_}=m.detail;switch(p){case"CREATE":Ss.trigger({type:"component",title:`Add user to Group ${_.id}`,component:{ref:Qn,props:{users:s.filter(D=>D.group!==_.name),group:_.name}}});break;case"READ":Ss.trigger({type:"component",title:`Users in Group ${_.id}`,component:{ref:el,props:{users:s.filter(D=>D.group===_.name),group:_.name}}});break;case"UPDATE":Ss.trigger({type:"component",title:`Edit Group ${_.id}`,component:{ref:rl,props:{group:_}}});break;case"DELETE":Ss.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${_.name}</strong>?`,response:D=>console.log("response:",D)});break}},d=[{name:"Svelte",language:"html",code:xn},{name:"tableCRUDActions",language:"typescript",code:Vn},{name:"optionsComponent",language:"html",code:Rn},{name:"data",language:"typescript",code:Bs+`
`+Nr},{name:"AddUser.svelte",language:"html",code:Un},{name:"ShowUsers.svelte",language:"html",code:Sn},{name:"EditGroup.svelte",language:"html",code:An}];return[n,u,d]}class El extends ve{constructor(e){super(),be(this,e,Dl,_l,$e,{tableCRUDConfig:0,tableCRUDActions:1,tableCRUDtabs:2})}get tableCRUDConfig(){return this.$$.ctx[0]}get tableCRUDActions(){return this.$$.ctx[1]}get tableCRUDtabs(){return this.$$.ctx[2]}}function wl(f){let e,r,s,n;return{c(){e=o("button"),r=h("Odd or even"),this.h()},l(u){e=i(u,"BUTTON",{class:!0});var d=c(e);r=g(d,"Odd or even"),d.forEach(l),this.h()},h(){a(e,"class","btn btn-sm variant-filled-secondary")},m(u,d){Y(u,e,d),t(e,r),s||(n=As(e,"click",Mr(f[0])),s=!0)},p:re,i:re,o:re,d(u){u&&l(e),s=!1,n()}}}function Cl(f,e,r){let{row:s}=e,{dispatchFn:n}=e;const u=()=>{const d=s.id%2===0?"even":"odd";return n({type:d})};return f.$$set=d=>{"row"in d&&r(1,s=d.row),"dispatchFn"in d&&r(2,n=d.dispatchFn)},[u,s,n]}class Tl extends ve{constructor(e){super(),be(this,e,Cl,wl,$e,{row:1,dispatchFn:2})}}function yl(f){let e,r;return e=new Qt({props:{config:f[1]}}),e.$on("action",f[2]),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Il(f){let e,r,s;return r=new Ls({props:{title:"Odd or even",tabs:f[0],$$slots:{default:[yl]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","usersNoRoles")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&8&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function xl(f){return[[{name:"Svelte",language:"html",code:fn},{name:"Data",language:"typescript",code:Bs},{name:"TableOptions.svelte",language:"html",code:In}],{id:"usersNoRoles",data:Os,optionsComponent:Tl,columns:{id:{colFilterFn:an,colFilterComponent:on},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},n=>{alert(n.detail.type)}]}class Vl extends ve{constructor(e){super(),be(this,e,xl,Il,$e,{})}}function Ul(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Sl(f){let e,r,s;return r=new ls({props:{title:"Minimal configuration",svelte:un,data:Bs,$$slots:{default:[Ul]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{class:!0,id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","users")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function Al(f){return[{id:"users",data:Os}]}class Rl extends ve{constructor(e){super(),be(this,e,Al,Sl,$e,{})}}function kl(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Fl(f){let e,r,s;return r=new ls({props:{title:"Date",svelte:pn,data:mn,$$slots:{default:[kl]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","usersBD")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function Gl(f){return[{id:"usersBD",data:dl,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:r=>r.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:r=>r.getTime(),toFilterableValueFn:r=>r}}}}]}class Bl extends ve{constructor(e){super(),be(this,e,Gl,Fl,$e,{})}}function Ol(f){let e,r;return{c(){e=o("input"),this.h()},l(s){e=i(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){a(e,"type","checkbox"),a(e,"name","isAdmin"),a(e,"id",r=f[1].id),e.checked=f[0],e.disabled=!0},m(s,n){Y(s,e,n)},p(s,[n]){n&2&&r!==(r=s[1].id)&&a(e,"id",r),n&1&&(e.checked=s[0])},i:re,o:re,d(s){s&&l(e)}}}function Ll(f,e,r){let{value:s}=e,{row:n}=e;return f.$$set=u=>{"value"in u&&r(0,s=u.value),"row"in u&&r(1,n=u.row)},[s,n]}class Ml extends ve{constructor(e){super(),be(this,e,Ll,Ol,$e,{value:0,row:1})}}function Pl(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Nl(f){let e,r,s;return r=new Ls({props:{title:"Boolean",tabs:f[1],$$slots:{default:[Pl]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","boolean")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function jl(f){return[{id:"usersAndAdmins",data:ul,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Ml},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Cn},{name:"Data",language:"typescript",code:Tn},{name:"IsAdmin.svelte",language:"html",code:yn}]]}class Hl extends ve{constructor(e){super(),be(this,e,jl,Nl,$e,{})}}function Wl(f){let e,r;return{c(){e=o("a"),r=h(f[0]),this.h()},l(s){e=i(s,"A",{href:!0});var n=c(e);r=g(n,f[0]),n.forEach(l),this.h()},h(){a(e,"href",f[0])},m(s,n){Y(s,e,n),t(e,r)},p(s,[n]){n&1&&zt(r,s[0]),n&1&&a(e,"href",s[0])},i:re,o:re,d(s){s&&l(e)}}}function zl(f,e,r){let{value:s}=e;return f.$$set=n=>{"value"in n&&r(0,s=n.value)},[s]}class Jl extends ve{constructor(e){super(),be(this,e,zl,Wl,$e,{value:0})}}function ql(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Yl(f){let e,r,s;return r=new Ls({props:{title:"URLs",tabs:f[1],$$slots:{default:[ql]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","URLs")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function Kl(f){return[{id:"websites",data:fl,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:Jl,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:Dn},{name:"Data",language:"typescript",code:En},{name:"URLCell.svelte",language:"html",code:wn}]]}class Ql extends ve{constructor(e){super(),be(this,e,Kl,Yl,$e,{})}}function Xl(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function Zl(f){let e,r,s;return r=new ls({props:{title:"Missing values",svelte:$n,data:_n,$$slots:{default:[Xl]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","combination")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function ea(f){return[{id:"usersMissingIDs",data:pl,columns:{id:{header:"ID",instructions:{toStringFn:r=>r in Sr?Sr[r]:r.toString()}}}}]}class ta extends ve{constructor(e){super(),be(this,e,ea,Zl,$e,{})}}function sa(f){let e,r;return e=new Qt({props:{config:f[0]}}),{c(){N(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){W(e,s)}}}function ra(f){let e,r,s;return r=new ls({props:{title:"Table component",svelte:dn,data:Nr,$$slots:{default:[sa]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","groups")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function na(f){return[{id:"userGroups",data:jr,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class la extends ve{constructor(e){super(),be(this,e,na,ra,$e,{})}}function Or(f,e,r){const s=f.slice();return s[1]=e[r],s}function Lr(f){let e,r,s=f[1].name+"",n,u,d,m,p=f[1].group+"",_,D;return{c(){e=o("tr"),r=o("td"),n=h(s),u=v(),d=o("td"),m=o("div"),_=h(p),D=v()},l(I){e=i(I,"TR",{});var C=c(e);r=i(C,"TD",{});var T=c(r);n=g(T,s),T.forEach(l),u=b(C),d=i(C,"TD",{});var U=c(d);m=i(U,"DIV",{});var A=c(m);_=g(A,p),A.forEach(l),U.forEach(l),D=b(C),C.forEach(l)},m(I,C){Y(I,e,C),t(e,r),t(r,n),t(e,u),t(e,d),t(d,m),t(m,_),t(e,D)},p(I,C){C&1&&s!==(s=I[1].name+"")&&zt(n,s),C&1&&p!==(p=I[1].group+"")&&zt(_,p)},d(I){I&&l(e)}}}function aa(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A=f[0],V=[];for(let $=0;$<A.length;$+=1)V[$]=Lr(Or(f,A,$));return{c(){e=o("div"),r=h("Used classes are important to include for the table to have a uniform look."),s=v(),n=o("div"),u=o("table"),d=o("thead"),m=o("tr"),p=o("th"),_=h("Group"),D=v(),I=o("th"),C=h("Description"),T=v(),U=o("tbody");for(let $=0;$<V.length;$+=1)V[$].c();this.h()},l($){e=i($,"DIV",{class:!0});var y=c(e);r=g(y,"Used classes are important to include for the table to have a uniform look."),y.forEach(l),s=b($),n=i($,"DIV",{class:!0});var w=c(n);u=i(w,"TABLE",{class:!0});var E=c(u);d=i(E,"THEAD",{});var x=c(d);m=i(x,"TR",{class:!0});var M=c(m);p=i(M,"TH",{class:!0});var R=c(p);_=g(R,"Group"),R.forEach(l),D=b(M),I=i(M,"TH",{class:!0});var k=c(I);C=g(k,"Description"),k.forEach(l),M.forEach(l),x.forEach(l),T=b(E),U=i(E,"TBODY",{});var S=c(U);for(let F=0;F<V.length;F+=1)V[F].l(S);S.forEach(l),E.forEach(l),w.forEach(l),this.h()},h(){a(e,"class","pb-2"),a(p,"class","!p-2"),a(I,"class","!p-2"),a(m,"class","bg-primary-300"),a(u,"class","table table-compact bg-tertiary-200"),a(n,"class","table-container")},m($,y){Y($,e,y),t(e,r),Y($,s,y),Y($,n,y),t(n,u),t(u,d),t(d,m),t(m,p),t(p,_),t(m,D),t(m,I),t(I,C),t(u,T),t(u,U);for(let w=0;w<V.length;w+=1)V[w]&&V[w].m(U,null)},p($,y){if(y&1){A=$[0];let w;for(w=0;w<A.length;w+=1){const E=Or($,A,w);V[w]?V[w].p(E,y):(V[w]=Lr(E),V[w].c(),V[w].m(U,null))}for(;w<V.length;w+=1)V[w].d(1);V.length=A.length}},d($){$&&l(e),$&&l(s),$&&l(n),ss(V,$)}}}function oa(f){let e,r,s;return r=new ls({props:{title:"Simple table without Table component",svelte:cn,data:Bs,$$slots:{default:[aa]},$$scope:{ctx:f}}}),{c(){e=o("div"),N(r.$$.fragment),this.h()},l(n){e=i(n,"DIV",{id:!0});var u=c(e);j(r.$$.fragment,u),u.forEach(l),this.h()},h(){a(e,"id","simpleTable")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const d={};u&17&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){s||(G(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&l(e),W(r)}}}function ia(f,e,r){let s;return Pr(f,Os,n=>r(0,s=n)),[s]}class ca extends ve{constructor(e){super(),be(this,e,ia,oa,$e,{})}}function da(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z,q,X,K,J,le;return u=new ca({}),m=new la({}),_=new Rl({}),A=new Vl({}),$=new El({}),R=new Bl({}),S=new ta({}),z=new Ql({}),X=new Hl({}),J=new Xr({}),{c(){e=o("div"),r=o("h2"),s=h("Examples"),n=v(),N(u.$$.fragment),d=v(),N(m.$$.fragment),p=v(),N(_.$$.fragment),D=v(),I=o("div"),C=o("h2"),T=h("Dispatching Actions"),U=v(),N(A.$$.fragment),V=v(),N($.$$.fragment),y=v(),w=o("div"),E=o("h2"),x=h("Complex data types"),M=v(),N(R.$$.fragment),k=v(),N(S.$$.fragment),F=v(),N(z.$$.fragment),q=v(),N(X.$$.fragment),K=v(),N(J.$$.fragment),this.h()},l(B){e=i(B,"DIV",{class:!0});var L=c(e);r=i(L,"H2",{class:!0});var P=c(r);s=g(P,"Examples"),P.forEach(l),n=b(L),j(u.$$.fragment,L),d=b(L),j(m.$$.fragment,L),p=b(L),j(_.$$.fragment,L),D=b(L),I=i(L,"DIV",{id:!0,class:!0});var Q=c(I);C=i(Q,"H2",{class:!0});var pe=c(C);T=g(pe,"Dispatching Actions"),pe.forEach(l),U=b(Q),j(A.$$.fragment,Q),V=b(Q),j($.$$.fragment,Q),Q.forEach(l),y=b(L),w=i(L,"DIV",{id:!0});var ae=c(w);E=i(ae,"H2",{class:!0});var se=c(E);x=g(se,"Complex data types"),se.forEach(l),M=b(ae),j(R.$$.fragment,ae),k=b(ae),j(S.$$.fragment,ae),F=b(ae),j(z.$$.fragment,ae),q=b(ae),j(X.$$.fragment,ae),ae.forEach(l),L.forEach(l),K=b(B),j(J.$$.fragment,B),this.h()},h(){a(r,"class","h2"),a(C,"class","h2"),a(I,"id","actionDispatchersExamples"),a(I,"class","my-20"),a(E,"class","h2"),a(w,"id","complexTypes"),a(e,"class","grid gap-1")},m(B,L){Y(B,e,L),t(e,r),t(r,s),t(e,n),H(u,e,null),t(e,d),H(m,e,null),t(e,p),H(_,e,null),t(e,D),t(e,I),t(I,C),t(C,T),t(I,U),H(A,I,null),t(I,V),H($,I,null),t(e,y),t(e,w),t(w,E),t(E,x),t(w,M),H(R,w,null),t(w,k),H(S,w,null),t(w,F),H(z,w,null),t(w,q),H(X,w,null),Y(B,K,L),H(J,B,L),le=!0},p:re,i(B){le||(G(u.$$.fragment,B),G(m.$$.fragment,B),G(_.$$.fragment,B),G(A.$$.fragment,B),G($.$$.fragment,B),G(R.$$.fragment,B),G(S.$$.fragment,B),G(z.$$.fragment,B),G(X.$$.fragment,B),G(J.$$.fragment,B),le=!0)},o(B){O(u.$$.fragment,B),O(m.$$.fragment,B),O(_.$$.fragment,B),O(A.$$.fragment,B),O($.$$.fragment,B),O(R.$$.fragment,B),O(S.$$.fragment,B),O(z.$$.fragment,B),O(X.$$.fragment,B),O(J.$$.fragment,B),le=!1},d(B){B&&l(e),W(u),W(m),W(_),W(A),W($),W(R),W(S),W(z),W(X),B&&l(K),W(J,B)}}}class ua extends ve{constructor(e){super(),be(this,e,null,da,$e,{})}}function fa(f){let e,r,s,n,u,d,m,p="(action: CustomEvent<any>) => {}",_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k,S,F,z,q,X,K,J,le,B,L,P,Q,pe,ae,se,Be,Ne="(obj: any) => dispatch('action', obj)",ye,Xe,_e,ne,te,me,Ze,Oe,he,et;return{c(){e=o("div"),r=o("div"),s=o("div"),n=o("h3"),u=h("on:action"),d=v(),m=o("h3"),_=h(p),D=v(),I=o("p"),C=h("To dispatch actions and listen to dispatchers you need to create a table with your own "),T=o("code"),U=h("optionsComponent"),A=h(" component."),V=v(),$=o("div"),y=o("p"),w=h("Every "),E=o("code"),x=h("optionsComponent"),M=h(" will get 2 props:"),R=v(),k=o("div"),S=o("div"),F=o("div"),z=h("row:"),q=v(),X=o("div"),K=h("Object"),J=v(),le=o("p"),B=h("The current row in the table. In other words, a single object from the data store."),L=v(),P=o("div"),Q=o("div"),pe=o("div"),ae=h("dispatchFn:"),se=v(),Be=o("div"),ye=h(Ne),Xe=v(),_e=o("p"),ne=h("A function that takes an object and dispatches an action with the name "),te=o("code"),me=h("action"),Ze=h(`. The passed object is accessible by the parent component through the
					`),Oe=o("code"),he=h("action.detail"),et=h(" property."),this.h()},l(je){e=i(je,"DIV",{class:!0});var Z=c(e);r=i(Z,"DIV",{class:!0,id:!0});var ge=c(r);s=i(ge,"DIV",{class:!0});var De=c(s);n=i(De,"H3",{class:!0});var ke=c(n);u=g(ke,"on:action"),ke.forEach(l),d=b(De),m=i(De,"H3",{class:!0});var Fe=c(m);_=g(Fe,p),Fe.forEach(l),De.forEach(l),D=b(ge),I=i(ge,"P",{class:!0});var ue=c(I);C=g(ue,"To dispatch actions and listen to dispatchers you need to create a table with your own "),T=i(ue,"CODE",{class:!0});var st=c(T);U=g(st,"optionsComponent"),st.forEach(l),A=g(ue," component."),ue.forEach(l),V=b(ge),$=i(ge,"DIV",{class:!0});var Le=c($);y=i(Le,"P",{class:!0});var Ge=c(y);w=g(Ge,"Every "),E=i(Ge,"CODE",{class:!0});var oe=c(E);x=g(oe,"optionsComponent"),oe.forEach(l),M=g(Ge," will get 2 props:"),Ge.forEach(l),R=b(Le),k=i(Le,"DIV",{class:!0});var Ie=c(k);S=i(Ie,"DIV",{class:!0});var Ee=c(S);F=i(Ee,"DIV",{class:!0});var He=c(F);z=g(He,"row:"),He.forEach(l),q=b(Ee),X=i(Ee,"DIV",{class:!0});var rt=c(X);K=g(rt,"Object"),rt.forEach(l),Ee.forEach(l),J=b(Ie),le=i(Ie,"P",{class:!0});var We=c(le);B=g(We,"The current row in the table. In other words, a single object from the data store."),We.forEach(l),Ie.forEach(l),L=b(Le),P=i(Le,"DIV",{class:!0});var ie=c(P);Q=i(ie,"DIV",{class:!0});var ce=c(Q);pe=i(ce,"DIV",{class:!0});var fe=c(pe);ae=g(fe,"dispatchFn:"),fe.forEach(l),se=b(ce),Be=i(ce,"DIV",{class:!0});var nt=c(Be);ye=g(nt,Ne),nt.forEach(l),ce.forEach(l),Xe=b(ie),_e=i(ie,"P",{class:!0});var xe=c(_e);ne=g(xe,"A function that takes an object and dispatches an action with the name "),te=i(xe,"CODE",{class:!0});var Se=c(te);me=g(Se,"action"),Se.forEach(l),Ze=g(xe,`. The passed object is accessible by the parent component through the
					`),Oe=i(xe,"CODE",{class:!0});var lt=c(Oe);he=g(lt,"action.detail"),lt.forEach(l),et=g(xe," property."),xe.forEach(l),ie.forEach(l),Le.forEach(l),ge.forEach(l),Z.forEach(l),this.h()},h(){a(n,"class","italic font-semibold"),a(m,"class","font-semibold"),a(s,"class","flex gap-3 h3"),a(T,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(I,"class","text-xl underline"),a(E,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(y,"class","text-xl"),a(F,"class","italic"),a(X,"class","font-bold"),a(S,"class","flex gap-2"),a(le,"class","text-xl pl-10"),a(k,"class","items-center mt-2"),a(pe,"class","italic"),a(Be,"class","font-bold"),a(Q,"class","flex gap-2"),a(te,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(Oe,"class","!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"),a(_e,"class","text-xl pl-10"),a(P,"class","items-center mt-2"),a($,"class","mt-5"),a(r,"class","grid gap-2"),a(r,"id","actionDispatchersDocs"),a(e,"class","grid gap-5")},m(je,Z){Y(je,e,Z),t(e,r),t(r,s),t(s,n),t(n,u),t(s,d),t(s,m),t(m,_),t(r,D),t(r,I),t(I,C),t(I,T),t(T,U),t(I,A),t(r,V),t(r,$),t($,y),t(y,w),t(y,E),t(E,x),t(y,M),t($,R),t($,k),t(k,S),t(S,F),t(F,z),t(S,q),t(S,X),t(X,K),t(k,J),t(k,le),t(le,B),t($,L),t($,P),t(P,Q),t(Q,pe),t(pe,ae),t(Q,se),t(Q,Be),t(Be,ye),t(P,Xe),t(P,_e),t(_e,ne),t(_e,te),t(te,me),t(_e,Ze),t(_e,Oe),t(Oe,he),t(_e,et)},p:re,i:re,o:re,d(je){je&&l(e)}}}class pa extends ve{constructor(e){super(),be(this,e,null,fa,$e,{})}}function ma(f){let e,r,s,n,u,d,m,p,_,D,I,C,T,U,A,V,$,y,w,E,x,M,R,k;return _=new Gn({}),I=new Ln({}),T=new Nn({}),A=new Wn({}),x=new pa({}),R=new ua({}),{c(){e=o("div"),r=o("div"),s=o("h1"),n=h("Table"),u=v(),d=o("h2"),m=h("Types"),p=v(),N(_.$$.fragment),D=v(),N(I.$$.fragment),C=v(),N(T.$$.fragment),U=v(),N(A.$$.fragment),V=v(),$=o("div"),y=o("h2"),w=h("Action Dispatchers"),E=v(),N(x.$$.fragment),M=v(),N(R.$$.fragment),this.h()},l(S){e=i(S,"DIV",{class:!0,id:!0});var F=c(e);r=i(F,"DIV",{class:!0});var z=c(r);s=i(z,"H1",{class:!0});var q=c(s);n=g(q,"Table"),q.forEach(l),u=b(z),d=i(z,"H2",{class:!0});var X=c(d);m=g(X,"Types"),X.forEach(l),p=b(z),j(_.$$.fragment,z),z.forEach(l),D=b(F),j(I.$$.fragment,F),C=b(F),j(T.$$.fragment,F),U=b(F),j(A.$$.fragment,F),V=b(F),$=i(F,"DIV",{class:!0});var K=c($);y=i(K,"H2",{class:!0});var J=c(y);w=g(J,"Action Dispatchers"),J.forEach(l),E=b(K),j(x.$$.fragment,K),K.forEach(l),M=b(F),j(R.$$.fragment,F),F.forEach(l),this.h()},h(){a(s,"class","font-bold !text-6xl"),a(d,"class","h2"),a(r,"class","grid gap-5"),a(y,"class","h2"),a($,"class","grid gap-5"),a(e,"class","grid gap-20 p-10"),a(e,"id","toc-target-table")},m(S,F){Y(S,e,F),t(e,r),t(r,s),t(s,n),t(r,u),t(r,d),t(d,m),t(r,p),H(_,r,null),t(e,D),H(I,e,null),t(e,C),H(T,e,null),t(e,U),H(A,e,null),t(e,V),t(e,$),t($,y),t(y,w),t($,E),H(x,$,null),t(e,M),H(R,e,null),k=!0},p:re,i(S){k||(G(_.$$.fragment,S),G(I.$$.fragment,S),G(T.$$.fragment,S),G(A.$$.fragment,S),G(x.$$.fragment,S),G(R.$$.fragment,S),k=!0)},o(S){O(_.$$.fragment,S),O(I.$$.fragment,S),O(T.$$.fragment,S),O(A.$$.fragment,S),O(x.$$.fragment,S),O(R.$$.fragment,S),k=!1},d(S){S&&l(e),W(_),W(I),W(T),W(A),W(x),W(R)}}}class Ca extends ve{constructor(e){super(),be(this,e,null,ma,$e,{})}}export{Ca as component};
