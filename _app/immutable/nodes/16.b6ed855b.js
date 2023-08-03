import{S as $e,i as _e,s as De,k as a,q as h,a as b,y as P,l,m as d,r as g,h as o,c as $,z as j,n as c,b as Y,D as t,A as H,a6 as ps,W as re,g as k,d as O,B as z,v as ms,f as hs,U as Yt,M as fs,a1 as Ks,u as Mt,a5 as ds,O as er,C as tr,E as sr,F as rr,G as nr,e as qt,w as or,a0 as ar,a2 as lr,V as Qs}from"../chunks/index.2c64a3f2.js";/* empty css                             */import{p as gs}from"../chunks/floating-ui.dom.7e1fdaf9.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.2223e758.js";import{C as Xt}from"../chunks/CodeBlock.357f61a8.js";import{m as us,M as ir}from"../chunks/Modal.061e2282.js";import{F as cr,e as dr,g as ur,d as fr,c as pr}from"../chunks/index.422f451d.js";import{w as Kt}from"../chunks/index.66b7299f.js";import{a as mr,b as hr,T as Jt,c as gr,d as vr,C as Zt}from"../chunks/CodeContainer.3fb2c41b.js";const br=`
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
</div>`,$r=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,
		height: 300,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
<\/script>

<Table config={groupConfig} />`,Xs=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,_r=`
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

<Table config={usersConfig} />`,vs=`
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
				
export const usersStore = writable<User[]>(users);`,Dr=`
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
/>`,Er=`
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

<Table config={usersBDConfig} />`,wr=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Cr=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	height?: null | number;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,Tr=`
export interface Columns {
	[key: string]: Column;
}`,Ir=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,yr=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,xr=`
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

<Table config={usersMissingIDsConfig} />`,Vr=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,Ur=`
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
`,Sr=`
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
`,Ar=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Rr=`
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
<\/script>`,Fr=`
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
`,Gr=`
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
`,kr=`
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
`,Br=`
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
		optionsComponent: TableCrud
	};

	const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
		// See tableCRUDActions tab for more details
	};
<\/script>

<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
<Modal />`,Or=`
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
`,Lr=`
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
`,Mr=`
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
`,Nr=`
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
`,Pr=`
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
`;function jr(f){let e,r,s,n="TableConfig <T>",u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W,q,X,K,J,oe,B,L,N,Q="Writable <T[]>",ue,ae,te,Fe,Ne,xe,Ke,Ce,ne,ee,fe,Qe,Ge,pe,Xe,Pe,se,me,ke,he,ge,ve,et,Be,Te,Ve="SvelteComponent",Je,Oe,Ie,tt,je,ie,ce,Se,Re,Ee,we,st,Dt,Ae,It="number[]",Et,Ue,be,He,wt,qe,ye,rt,Ct,ze,nt,mt="number",Tt,Gt,de,Z,We,ot,at,ht,ct,dt,gt,Nt="Columns",kt,ut,Le,Bt,vt,Ot,ft,lt,Lt,Pt;return v=new Xt({props:{language:"ts",code:Cr}}),{c(){e=a("div"),r=a("div"),s=a("h3"),u=h(n),i=b(),m=a("button"),p=h("Show type details"),_=b(),D=a("div"),y=h("Underlined attributes are "),T=a("strong"),C=h("required"),U=h("."),A=b(),V=a("div"),P(v.$$.fragment),I=b(),w=a("div"),E=a("div"),x=a("div"),M=h("id:"),R=b(),F=a("div"),S=h("string"),G=b(),W=a("p"),q=h("Unique identifier for the table to generate unique IDs for the filters."),X=b(),K=a("div"),J=a("div"),oe=a("div"),B=h("data:"),L=b(),N=a("div"),ue=h(Q),ae=b(),te=a("p"),Fe=h("A writable store of the type "),Ne=a("code"),xe=h("T[]"),Ke=h(`. Any changes in the store will
			be reflected in the table.`),Ce=b(),ne=a("div"),ee=a("div"),fe=a("div"),Qe=h("height:"),Ge=b(),pe=a("div"),Xe=h("number"),Pe=b(),se=a("p"),me=h("Custom height for the table in pixels."),ke=b(),he=a("div"),ge=a("div"),ve=a("div"),et=h("optionsComponent:"),Be=b(),Te=a("div"),Je=h(Ve),Oe=b(),Ie=a("p"),tt=h(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),je=a("code"),ie=h("optionsComponent"),ce=h(" was provided."),Se=b(),Re=a("div"),Ee=a("div"),we=a("div"),st=h("pageSizes:"),Dt=b(),Ae=a("div"),Et=h(It),Ue=b(),be=a("p"),He=h("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),wt=b(),qe=a("div"),ye=a("div"),rt=a("div"),Ct=h("defaultPageSize:"),ze=b(),nt=a("div"),Tt=h(mt),Gt=b(),de=a("p"),Z=h(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),We=b(),ot=a("div"),at=a("div"),ht=a("div"),ct=h("columns:"),dt=b(),gt=a("div"),kt=h(Nt),ut=b(),Le=a("p"),Bt=h("An object with configuration for specific columns. "),vt=a("code"),Ot=h("Columns"),ft=h(`
			object is described below.`),this.h()},l(Ze){e=l(Ze,"DIV",{class:!0});var le=d(e);r=l(le,"DIV",{class:!0,id:!0});var Me=d(r);s=l(Me,"H3",{class:!0});var jt=d(s);u=g(jt,n),jt.forEach(o),i=$(Me),m=l(Me,"BUTTON",{class:!0});var Ht=d(m);p=g(Ht,"Show type details"),Ht.forEach(o),_=$(Me),D=l(Me,"DIV",{class:!0});var Ye=d(D);y=g(Ye,"Underlined attributes are "),T=l(Ye,"STRONG",{});var pt=d(T);C=g(pt,"required"),pt.forEach(o),U=g(Ye,"."),Ye.forEach(o),A=$(Me),V=l(Me,"DIV",{class:!0,"data-popup":!0});var yt=d(V);j(v.$$.fragment,yt),yt.forEach(o),Me.forEach(o),I=$(le),w=l(le,"DIV",{class:!0});var xt=d(w);E=l(xt,"DIV",{class:!0});var bt=d(E);x=l(bt,"DIV",{class:!0});var zt=d(x);M=g(zt,"id:"),zt.forEach(o),R=$(bt),F=l(bt,"DIV",{class:!0});var Vt=d(F);S=g(Vt,"string"),Vt.forEach(o),bt.forEach(o),G=$(xt),W=l(xt,"P",{class:!0});var $t=d(W);q=g($t,"Unique identifier for the table to generate unique IDs for the filters."),$t.forEach(o),xt.forEach(o),X=$(le),K=l(le,"DIV",{class:!0});var _t=d(K);J=l(_t,"DIV",{class:!0});var Ut=d(J);oe=l(Ut,"DIV",{class:!0});var Wt=d(oe);B=g(Wt,"data:"),Wt.forEach(o),L=$(Ut),N=l(Ut,"DIV",{class:!0});var St=d(N);ue=g(St,Q),St.forEach(o),Ut.forEach(o),ae=$(_t),te=l(_t,"P",{class:!0});var it=d(te);Fe=g(it,"A writable store of the type "),Ne=l(it,"CODE",{class:!0});var At=d(Ne);xe=g(At,"T[]"),At.forEach(o),Ke=g(it,`. Any changes in the store will
			be reflected in the table.`),it.forEach(o),_t.forEach(o),Ce=$(le),ne=l(le,"DIV",{class:!0});var Rt=d(ne);ee=l(Rt,"DIV",{class:!0});var Ft=d(ee);fe=l(Ft,"DIV",{class:!0});var Qt=d(fe);Qe=g(Qt,"height:"),Qt.forEach(o),Ge=$(Ft),pe=l(Ft,"DIV",{class:!0});var _s=d(pe);Xe=g(_s,"number"),_s.forEach(o),Ft.forEach(o),Pe=$(Rt),se=l(Rt,"P",{class:!0});var Ds=d(se);me=g(Ds,"Custom height for the table in pixels."),Ds.forEach(o),Rt.forEach(o),ke=$(le),he=l(le,"DIV",{class:!0});var es=d(he);ge=l(es,"DIV",{class:!0});var ts=d(ge);ve=l(ts,"DIV",{class:!0});var Es=d(ve);et=g(Es,"optionsComponent:"),Es.forEach(o),Be=$(ts),Te=l(ts,"DIV",{class:!0});var ws=d(Te);Je=g(ws,Ve),ws.forEach(o),ts.forEach(o),Oe=$(es),Ie=l(es,"P",{class:!0});var ss=d(Ie);tt=g(ss,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),je=l(ss,"CODE",{class:!0});var Cs=d(je);ie=g(Cs,"optionsComponent"),Cs.forEach(o),ce=g(ss," was provided."),ss.forEach(o),es.forEach(o),Se=$(le),Re=l(le,"DIV",{class:!0});var rs=d(Re);Ee=l(rs,"DIV",{class:!0});var ns=d(Ee);we=l(ns,"DIV",{class:!0});var Ts=d(we);st=g(Ts,"pageSizes:"),Ts.forEach(o),Dt=$(ns),Ae=l(ns,"DIV",{class:!0});var Is=d(Ae);Et=g(Is,It),Is.forEach(o),ns.forEach(o),Ue=$(rs),be=l(rs,"P",{class:!0});var ys=d(be);He=g(ys,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),ys.forEach(o),rs.forEach(o),wt=$(le),qe=l(le,"DIV",{class:!0});var os=d(qe);ye=l(os,"DIV",{class:!0});var as=d(ye);rt=l(as,"DIV",{class:!0});var xs=d(rt);Ct=g(xs,"defaultPageSize:"),xs.forEach(o),ze=$(as),nt=l(as,"DIV",{class:!0});var Vs=d(nt);Tt=g(Vs,mt),Vs.forEach(o),as.forEach(o),Gt=$(os),de=l(os,"P",{class:!0});var Us=d(de);Z=g(Us,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Us.forEach(o),os.forEach(o),We=$(le),ot=l(le,"DIV",{class:!0});var ls=d(ot);at=l(ls,"DIV",{class:!0});var is=d(at);ht=l(is,"DIV",{class:!0});var Ss=d(ht);ct=g(Ss,"columns:"),Ss.forEach(o),dt=$(is),gt=l(is,"DIV",{class:!0});var As=d(gt);kt=g(As,Nt),As.forEach(o),is.forEach(o),ut=$(ls),Le=l(ls,"P",{class:!0});var cs=d(Le);Bt=g(cs,"An object with configuration for specific columns. "),vt=l(cs,"CODE",{class:!0});var Rs=d(vt);Ot=g(Rs,"Columns"),Rs.forEach(o),ft=g(cs,`
			object is described below.`),cs.forEach(o),ls.forEach(o),le.forEach(o),this.h()},h(){c(s,"class","font-semibold relative w-max"),c(m,"class","btn variant-ghost-primary w-min"),c(D,"class","italic div"),c(V,"class","variant-filled-secondary"),c(V,"data-popup","popupClickTableConfig"),c(r,"class","grid gap-2"),c(r,"id","tableConfig"),c(x,"class","italic"),c(F,"class","font-bold"),c(E,"class","flex gap-2 underline"),c(W,"class","text-xl pl-10"),c(w,"class","items-center"),c(oe,"class","italic"),c(N,"class","font-bold"),c(J,"class","flex gap-2 underline"),c(Ne,"class","!text-xl"),c(te,"class","text-xl pl-10"),c(K,"class","items-center"),c(fe,"class","italic"),c(pe,"class","font-bold"),c(ee,"class","flex gap-2"),c(se,"class","text-xl pl-10"),c(ne,"class","items-center"),c(ve,"class","italic"),c(Te,"class","font-bold"),c(ge,"class","flex gap-2"),c(je,"class","!text-xl"),c(Ie,"class","text-xl pl-10"),c(he,"class","items-center"),c(we,"class","italic"),c(Ae,"class","font-bold"),c(Ee,"class","flex gap-2"),c(be,"class","text-xl pl-10"),c(Re,"class","items-center"),c(rt,"class","italic"),c(nt,"class","font-bold"),c(ye,"class","flex gap-2"),c(de,"class","text-xl pl-10"),c(qe,"class","items-center"),c(ht,"class","italic"),c(gt,"class","font-bold"),c(at,"class","flex gap-2"),c(vt,"class","!text-xl"),c(Le,"class","text-xl pl-10"),c(ot,"class","items-center"),c(e,"class","grid gap-5")},m(Ze,le){Y(Ze,e,le),t(e,r),t(r,s),t(s,u),t(r,i),t(r,m),t(m,p),t(r,_),t(r,D),t(D,y),t(D,T),t(T,C),t(D,U),t(r,A),t(r,V),H(v,V,null),t(e,I),t(e,w),t(w,E),t(E,x),t(x,M),t(E,R),t(E,F),t(F,S),t(w,G),t(w,W),t(W,q),t(e,X),t(e,K),t(K,J),t(J,oe),t(oe,B),t(J,L),t(J,N),t(N,ue),t(K,ae),t(K,te),t(te,Fe),t(te,Ne),t(Ne,xe),t(te,Ke),t(e,Ce),t(e,ne),t(ne,ee),t(ee,fe),t(fe,Qe),t(ee,Ge),t(ee,pe),t(pe,Xe),t(ne,Pe),t(ne,se),t(se,me),t(e,ke),t(e,he),t(he,ge),t(ge,ve),t(ve,et),t(ge,Be),t(ge,Te),t(Te,Je),t(he,Oe),t(he,Ie),t(Ie,tt),t(Ie,je),t(je,ie),t(Ie,ce),t(e,Se),t(e,Re),t(Re,Ee),t(Ee,we),t(we,st),t(Ee,Dt),t(Ee,Ae),t(Ae,Et),t(Re,Ue),t(Re,be),t(be,He),t(e,wt),t(e,qe),t(qe,ye),t(ye,rt),t(rt,Ct),t(ye,ze),t(ye,nt),t(nt,Tt),t(qe,Gt),t(qe,de),t(de,Z),t(e,We),t(e,ot),t(ot,at),t(at,ht),t(ht,ct),t(at,dt),t(at,gt),t(gt,kt),t(ot,ut),t(ot,Le),t(Le,Bt),t(Le,vt),t(vt,Ot),t(Le,ft),lt=!0,Lt||(Pt=ps(gs.call(null,m,f[0])),Lt=!0)},p:re,i(Ze){lt||(k(v.$$.fragment,Ze),lt=!0)},o(Ze){O(v.$$.fragment,Ze),lt=!1},d(Ze){Ze&&o(e),z(v),Lt=!1,Pt()}}}function Hr(f){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class zr extends $e{constructor(e){super(),_e(this,e,Hr,jr,De,{})}}function Wr(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W;return D=new Xt({props:{language:"ts",code:Tr}}),{c(){e=a("div"),r=a("div"),s=a("h3"),n=h("Columns"),u=b(),i=a("button"),m=h("Show type details"),p=b(),_=a("div"),P(D.$$.fragment),y=b(),T=a("div"),C=a("div"),U=a("div"),A=h("[key: "),V=a("strong"),v=h("string"),I=h("]:"),w=b(),E=a("div"),x=h("Column"),M=b(),R=a("p"),F=h(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(q){e=l(q,"DIV",{class:!0});var X=d(e);r=l(X,"DIV",{class:!0,id:!0});var K=d(r);s=l(K,"H3",{class:!0});var J=d(s);n=g(J,"Columns"),J.forEach(o),u=$(K),i=l(K,"BUTTON",{class:!0});var oe=d(i);m=g(oe,"Show type details"),oe.forEach(o),p=$(K),_=l(K,"DIV",{"data-popup":!0});var B=d(_);j(D.$$.fragment,B),B.forEach(o),K.forEach(o),y=$(X),T=l(X,"DIV",{class:!0});var L=d(T);C=l(L,"DIV",{class:!0});var N=d(C);U=l(N,"DIV",{class:!0});var Q=d(U);A=g(Q,"[key: "),V=l(Q,"STRONG",{});var ue=d(V);v=g(ue,"string"),ue.forEach(o),I=g(Q,"]:"),Q.forEach(o),w=$(N),E=l(N,"DIV",{class:!0});var ae=d(E);x=g(ae,"Column"),ae.forEach(o),N.forEach(o),M=$(L),R=l(L,"P",{class:!0});var te=d(R);F=g(te,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),te.forEach(o),L.forEach(o),X.forEach(o),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(i,"class","btn variant-ghost-primary w-min"),c(_,"data-popup","popupClickColumns"),c(r,"class","grid gap-2"),c(r,"id","columns"),c(U,"class","italic"),c(E,"class","font-bold"),c(C,"class","flex gap-2"),c(R,"class","text-xl pl-10"),c(T,"class","items-center"),c(e,"class","grid gap-5")},m(q,X){Y(q,e,X),t(e,r),t(r,s),t(s,n),t(r,u),t(r,i),t(i,m),t(r,p),t(r,_),H(D,_,null),t(e,y),t(e,T),t(T,C),t(C,U),t(U,A),t(U,V),t(V,v),t(U,I),t(C,w),t(C,E),t(E,x),t(T,M),t(T,R),t(R,F),S=!0,G||(W=ps(gs.call(null,i,f[0])),G=!0)},p:re,i(q){S||(k(D.$$.fragment,q),S=!0)},o(q){O(D.$$.fragment,q),S=!1},d(q){q&&o(e),z(D),G=!1,W()}}}function Jr(f){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class qr extends $e{constructor(e){super(),_e(this,e,Jr,Wr,De,{})}}function Yr(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W,q,X,K,J,oe,B,L,N,Q,ue,ae,te,Fe,Ne,xe,Ke,Ce,ne,ee,fe,Qe,Ge,pe,Xe,Pe,se,me,ke,he,ge,ve,et,Be,Te,Ve,Je,Oe,Ie,tt,je,ie,ce,Se,Re,Ee,we,st,Dt,Ae,It,Et,Ue,be,He,wt,qe,ye,rt,Ct,ze,nt,mt,Tt,Gt;return D=new Xt({props:{language:"ts",code:Ir}}),{c(){e=a("div"),r=a("div"),s=a("h3"),n=h("Column"),u=b(),i=a("button"),m=h("Show type details"),p=b(),_=a("div"),P(D.$$.fragment),y=b(),T=a("div"),C=a("div"),U=a("div"),A=h("header:"),V=b(),v=a("div"),I=h("string"),w=b(),E=a("p"),x=h(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),M=b(),R=a("div"),F=a("div"),S=a("div"),G=h("exclude:"),W=b(),q=a("div"),X=h("boolean"),K=b(),J=a("p"),oe=h(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),B=b(),L=a("div"),N=a("div"),Q=a("div"),ue=h("disableFiltering:"),ae=b(),te=a("div"),Fe=h("boolean"),Ne=b(),xe=a("p"),Ke=h("Whether to disable filtering for the column or not. By default, filtering is enabled."),Ce=b(),ne=a("div"),ee=a("div"),fe=a("div"),Qe=h("disableSorting:"),Ge=b(),pe=a("div"),Xe=h("boolean"),Pe=b(),se=a("p"),me=h("Whether to disable sorting for the column or not. By default, sorting is enabled."),ke=b(),he=a("div"),ge=a("div"),ve=a("div"),et=h("colFitlerFn:"),Be=b(),Te=a("div"),Ve=a("a"),Je=h("ColumnFilterFn"),Oe=b(),Ie=a("p"),tt=h(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),je=b(),ie=a("div"),ce=a("div"),Se=a("div"),Re=h("colFilterComponent:"),Ee=b(),we=a("div"),st=h("SvelteComponent"),Dt=b(),Ae=a("p"),It=h(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Et=b(),Ue=a("div"),be=a("div"),He=a("div"),wt=h("instructions:"),qe=b(),ye=a("div"),rt=h("ColumnInstructions"),Ct=b(),ze=a("p"),nt=h("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(de){e=l(de,"DIV",{class:!0});var Z=d(e);r=l(Z,"DIV",{class:!0,id:!0});var We=d(r);s=l(We,"H3",{class:!0});var ot=d(s);n=g(ot,"Column"),ot.forEach(o),u=$(We),i=l(We,"BUTTON",{class:!0});var at=d(i);m=g(at,"Show type details"),at.forEach(o),p=$(We),_=l(We,"DIV",{"data-popup":!0});var ht=d(_);j(D.$$.fragment,ht),ht.forEach(o),We.forEach(o),y=$(Z),T=l(Z,"DIV",{class:!0});var ct=d(T);C=l(ct,"DIV",{class:!0});var dt=d(C);U=l(dt,"DIV",{class:!0});var gt=d(U);A=g(gt,"header:"),gt.forEach(o),V=$(dt),v=l(dt,"DIV",{class:!0});var Nt=d(v);I=g(Nt,"string"),Nt.forEach(o),dt.forEach(o),w=$(ct),E=l(ct,"P",{class:!0});var kt=d(E);x=g(kt,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),kt.forEach(o),ct.forEach(o),M=$(Z),R=l(Z,"DIV",{class:!0});var ut=d(R);F=l(ut,"DIV",{class:!0});var Le=d(F);S=l(Le,"DIV",{class:!0});var Bt=d(S);G=g(Bt,"exclude:"),Bt.forEach(o),W=$(Le),q=l(Le,"DIV",{class:!0});var vt=d(q);X=g(vt,"boolean"),vt.forEach(o),Le.forEach(o),K=$(ut),J=l(ut,"P",{class:!0});var Ot=d(J);oe=g(Ot,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Ot.forEach(o),ut.forEach(o),B=$(Z),L=l(Z,"DIV",{class:!0});var ft=d(L);N=l(ft,"DIV",{class:!0});var lt=d(N);Q=l(lt,"DIV",{class:!0});var Lt=d(Q);ue=g(Lt,"disableFiltering:"),Lt.forEach(o),ae=$(lt),te=l(lt,"DIV",{class:!0});var Pt=d(te);Fe=g(Pt,"boolean"),Pt.forEach(o),lt.forEach(o),Ne=$(ft),xe=l(ft,"P",{class:!0});var Ze=d(xe);Ke=g(Ze,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Ze.forEach(o),ft.forEach(o),Ce=$(Z),ne=l(Z,"DIV",{class:!0});var le=d(ne);ee=l(le,"DIV",{class:!0});var Me=d(ee);fe=l(Me,"DIV",{class:!0});var jt=d(fe);Qe=g(jt,"disableSorting:"),jt.forEach(o),Ge=$(Me),pe=l(Me,"DIV",{class:!0});var Ht=d(pe);Xe=g(Ht,"boolean"),Ht.forEach(o),Me.forEach(o),Pe=$(le),se=l(le,"P",{class:!0});var Ye=d(se);me=g(Ye,"Whether to disable sorting for the column or not. By default, sorting is enabled."),Ye.forEach(o),le.forEach(o),ke=$(Z),he=l(Z,"DIV",{class:!0});var pt=d(he);ge=l(pt,"DIV",{class:!0});var yt=d(ge);ve=l(yt,"DIV",{class:!0});var xt=d(ve);et=g(xt,"colFitlerFn:"),xt.forEach(o),Be=$(yt),Te=l(yt,"DIV",{class:!0});var bt=d(Te);Ve=l(bt,"A",{href:!0});var zt=d(Ve);Je=g(zt,"ColumnFilterFn"),zt.forEach(o),bt.forEach(o),yt.forEach(o),Oe=$(pt),Ie=l(pt,"P",{class:!0});var Vt=d(Ie);tt=g(Vt,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Vt.forEach(o),pt.forEach(o),je=$(Z),ie=l(Z,"DIV",{class:!0});var $t=d(ie);ce=l($t,"DIV",{class:!0});var _t=d(ce);Se=l(_t,"DIV",{class:!0});var Ut=d(Se);Re=g(Ut,"colFilterComponent:"),Ut.forEach(o),Ee=$(_t),we=l(_t,"DIV",{class:!0});var Wt=d(we);st=g(Wt,"SvelteComponent"),Wt.forEach(o),_t.forEach(o),Dt=$($t),Ae=l($t,"P",{class:!0});var St=d(Ae);It=g(St,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),St.forEach(o),$t.forEach(o),Et=$(Z),Ue=l(Z,"DIV",{class:!0});var it=d(Ue);be=l(it,"DIV",{class:!0});var At=d(be);He=l(At,"DIV",{class:!0});var Rt=d(He);wt=g(Rt,"instructions:"),Rt.forEach(o),qe=$(At),ye=l(At,"DIV",{class:!0});var Ft=d(ye);rt=g(Ft,"ColumnInstructions"),Ft.forEach(o),At.forEach(o),Ct=$(it),ze=l(it,"P",{class:!0});var Qt=d(ze);nt=g(Qt,"Configuration for the column's appearance, sorting and filtering functionalities."),Qt.forEach(o),it.forEach(o),Z.forEach(o),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(i,"class","btn variant-ghost-primary w-min"),c(_,"data-popup","popupClickColumn"),c(r,"class","grid gap-2"),c(r,"id","column"),c(U,"class","italic"),c(v,"class","font-bold"),c(C,"class","flex gap-2"),c(E,"class","text-xl pl-10"),c(T,"class","items-center"),c(S,"class","italic"),c(q,"class","font-bold"),c(F,"class","flex gap-2"),c(J,"class","text-xl pl-10"),c(R,"class","items-center"),c(Q,"class","italic"),c(te,"class","font-bold"),c(N,"class","flex gap-2"),c(xe,"class","text-xl pl-10"),c(L,"class","items-center"),c(fe,"class","italic"),c(pe,"class","font-bold"),c(ee,"class","flex gap-2"),c(se,"class","text-xl pl-10"),c(ne,"class","items-center"),c(ve,"class","italic"),c(Ve,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),c(Te,"class","font-bold"),c(ge,"class","flex gap-2"),c(Ie,"class","text-xl pl-10"),c(he,"class","items-center"),c(Se,"class","italic"),c(we,"class","font-bold"),c(ce,"class","flex gap-2"),c(Ae,"class","text-xl pl-10"),c(ie,"class","items-center"),c(He,"class","italic"),c(ye,"class","font-bold"),c(be,"class","flex gap-2"),c(ze,"class","text-xl pl-10"),c(Ue,"class","items-center"),c(e,"class","grid gap-5")},m(de,Z){Y(de,e,Z),t(e,r),t(r,s),t(s,n),t(r,u),t(r,i),t(i,m),t(r,p),t(r,_),H(D,_,null),t(e,y),t(e,T),t(T,C),t(C,U),t(U,A),t(C,V),t(C,v),t(v,I),t(T,w),t(T,E),t(E,x),t(e,M),t(e,R),t(R,F),t(F,S),t(S,G),t(F,W),t(F,q),t(q,X),t(R,K),t(R,J),t(J,oe),t(e,B),t(e,L),t(L,N),t(N,Q),t(Q,ue),t(N,ae),t(N,te),t(te,Fe),t(L,Ne),t(L,xe),t(xe,Ke),t(e,Ce),t(e,ne),t(ne,ee),t(ee,fe),t(fe,Qe),t(ee,Ge),t(ee,pe),t(pe,Xe),t(ne,Pe),t(ne,se),t(se,me),t(e,ke),t(e,he),t(he,ge),t(ge,ve),t(ve,et),t(ge,Be),t(ge,Te),t(Te,Ve),t(Ve,Je),t(he,Oe),t(he,Ie),t(Ie,tt),t(e,je),t(e,ie),t(ie,ce),t(ce,Se),t(Se,Re),t(ce,Ee),t(ce,we),t(we,st),t(ie,Dt),t(ie,Ae),t(Ae,It),t(e,Et),t(e,Ue),t(Ue,be),t(be,He),t(He,wt),t(be,qe),t(be,ye),t(ye,rt),t(Ue,Ct),t(Ue,ze),t(ze,nt),mt=!0,Tt||(Gt=ps(gs.call(null,i,f[0])),Tt=!0)},p:re,i(de){mt||(k(D.$$.fragment,de),mt=!0)},o(de){O(D.$$.fragment,de),mt=!1},d(de){de&&o(e),z(D),Tt=!1,Gt()}}}function Kr(f){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Qr extends $e{constructor(e){super(),_e(this,e,Kr,Yr,De,{})}}function Xr(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W,q,X,K,J,oe,B,L,N,Q,ue,ae,te,Fe,Ne,xe,Ke,Ce,ne,ee,fe,Qe,Ge,pe,Xe,Pe,se,me,ke,he,ge,ve,et,Be,Te,Ve,Je,Oe,Ie,tt,je,ie,ce,Se,Re,Ee,we,st,Dt,Ae,It,Et,Ue,be,He,wt,qe,ye,rt,Ct,ze,nt,mt,Tt,Gt;return D=new Xt({props:{language:"ts",code:yr}}),{c(){e=a("div"),r=a("div"),s=a("h3"),n=h("ColumnInstructions"),u=b(),i=a("button"),m=h("Show type details"),p=b(),_=a("div"),P(D.$$.fragment),y=b(),T=a("div"),C=a("div"),U=a("div"),A=h("toStringFn:"),V=b(),v=a("div"),I=h("(value: any) => string"),w=b(),E=a("p"),x=h("Custom toString function to be applied on the column."),M=b(),R=a("div"),F=a("div"),S=a("div"),G=h("toSortableValueFn:"),W=b(),q=a("div"),X=h("(value: any) => string | number"),K=b(),J=a("p"),oe=h("Custom function to return either a string or a number value to have a sortable column."),B=b(),L=a("div"),N=a("div"),Q=a("div"),ue=h("toFilterableValueFn:"),ae=b(),te=a("div"),Fe=h("(value: any) => string | number | Date"),Ne=b(),xe=a("p"),Ke=h(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Ce=b(),ne=a("div"),ee=a("div"),fe=a("div"),Qe=h("renderComponent:"),Ge=b(),pe=a("div"),Xe=h("SvelteComponent"),Pe=b(),se=a("div"),me=a("p"),ke=a("code"),he=h("renderComponent"),ge=h(" overrides "),ve=a("code"),et=h("toStringFn"),Be=h("."),Te=b(),Ve=a("p"),Je=h("Every "),Oe=a("code"),Ie=h("renderComponent"),tt=h(" will get 2 props:"),je=b(),ie=a("div"),ce=a("div"),Se=a("div"),Re=h("row:"),Ee=b(),we=a("div"),st=h("Object"),Dt=b(),Ae=a("p"),It=h("The current row in the table. In other words, a single object from the data store."),Et=b(),Ue=a("div"),be=a("div"),He=a("div"),wt=h("value:"),qe=b(),ye=a("div"),rt=h("any"),Ct=b(),ze=a("p"),nt=h("The value of the current cell."),this.h()},l(de){e=l(de,"DIV",{class:!0});var Z=d(e);r=l(Z,"DIV",{class:!0,id:!0});var We=d(r);s=l(We,"H3",{class:!0});var ot=d(s);n=g(ot,"ColumnInstructions"),ot.forEach(o),u=$(We),i=l(We,"BUTTON",{class:!0});var at=d(i);m=g(at,"Show type details"),at.forEach(o),p=$(We),_=l(We,"DIV",{"data-popup":!0});var ht=d(_);j(D.$$.fragment,ht),ht.forEach(o),We.forEach(o),y=$(Z),T=l(Z,"DIV",{class:!0});var ct=d(T);C=l(ct,"DIV",{class:!0});var dt=d(C);U=l(dt,"DIV",{class:!0});var gt=d(U);A=g(gt,"toStringFn:"),gt.forEach(o),V=$(dt),v=l(dt,"DIV",{class:!0});var Nt=d(v);I=g(Nt,"(value: any) => string"),Nt.forEach(o),dt.forEach(o),w=$(ct),E=l(ct,"P",{class:!0});var kt=d(E);x=g(kt,"Custom toString function to be applied on the column."),kt.forEach(o),ct.forEach(o),M=$(Z),R=l(Z,"DIV",{class:!0});var ut=d(R);F=l(ut,"DIV",{class:!0});var Le=d(F);S=l(Le,"DIV",{class:!0});var Bt=d(S);G=g(Bt,"toSortableValueFn:"),Bt.forEach(o),W=$(Le),q=l(Le,"DIV",{class:!0});var vt=d(q);X=g(vt,"(value: any) => string | number"),vt.forEach(o),Le.forEach(o),K=$(ut),J=l(ut,"P",{class:!0});var Ot=d(J);oe=g(Ot,"Custom function to return either a string or a number value to have a sortable column."),Ot.forEach(o),ut.forEach(o),B=$(Z),L=l(Z,"DIV",{class:!0});var ft=d(L);N=l(ft,"DIV",{class:!0});var lt=d(N);Q=l(lt,"DIV",{class:!0});var Lt=d(Q);ue=g(Lt,"toFilterableValueFn:"),Lt.forEach(o),ae=$(lt),te=l(lt,"DIV",{class:!0});var Pt=d(te);Fe=g(Pt,"(value: any) => string | number | Date"),Pt.forEach(o),lt.forEach(o),Ne=$(ft),xe=l(ft,"P",{class:!0});var Ze=d(xe);Ke=g(Ze,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Ze.forEach(o),ft.forEach(o),Ce=$(Z),ne=l(Z,"DIV",{class:!0});var le=d(ne);ee=l(le,"DIV",{class:!0});var Me=d(ee);fe=l(Me,"DIV",{class:!0});var jt=d(fe);Qe=g(jt,"renderComponent:"),jt.forEach(o),Ge=$(Me),pe=l(Me,"DIV",{class:!0});var Ht=d(pe);Xe=g(Ht,"SvelteComponent"),Ht.forEach(o),Me.forEach(o),Pe=$(le),se=l(le,"DIV",{class:!0});var Ye=d(se);me=l(Ye,"P",{class:!0});var pt=d(me);ke=l(pt,"CODE",{});var yt=d(ke);he=g(yt,"renderComponent"),yt.forEach(o),ge=g(pt," overrides "),ve=l(pt,"CODE",{});var xt=d(ve);et=g(xt,"toStringFn"),xt.forEach(o),Be=g(pt,"."),pt.forEach(o),Te=$(Ye),Ve=l(Ye,"P",{class:!0});var bt=d(Ve);Je=g(bt,"Every "),Oe=l(bt,"CODE",{});var zt=d(Oe);Ie=g(zt,"renderComponent"),zt.forEach(o),tt=g(bt," will get 2 props:"),bt.forEach(o),je=$(Ye),ie=l(Ye,"DIV",{class:!0});var Vt=d(ie);ce=l(Vt,"DIV",{class:!0});var $t=d(ce);Se=l($t,"DIV",{class:!0});var _t=d(Se);Re=g(_t,"row:"),_t.forEach(o),Ee=$($t),we=l($t,"DIV",{class:!0});var Ut=d(we);st=g(Ut,"Object"),Ut.forEach(o),$t.forEach(o),Dt=$(Vt),Ae=l(Vt,"P",{class:!0});var Wt=d(Ae);It=g(Wt,"The current row in the table. In other words, a single object from the data store."),Wt.forEach(o),Vt.forEach(o),Et=$(Ye),Ue=l(Ye,"DIV",{class:!0});var St=d(Ue);be=l(St,"DIV",{class:!0});var it=d(be);He=l(it,"DIV",{class:!0});var At=d(He);wt=g(At,"value:"),At.forEach(o),qe=$(it),ye=l(it,"DIV",{class:!0});var Rt=d(ye);rt=g(Rt,"any"),Rt.forEach(o),it.forEach(o),Ct=$(St),ze=l(St,"P",{class:!0});var Ft=d(ze);nt=g(Ft,"The value of the current cell."),Ft.forEach(o),St.forEach(o),Ye.forEach(o),le.forEach(o),Z.forEach(o),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(i,"class","btn variant-ghost-primary w-min"),c(_,"data-popup","popupClickColumnInstructions"),c(r,"class","grid gap-2"),c(r,"id","columnInstructions"),c(U,"class","italic"),c(v,"class","font-bold"),c(C,"class","flex gap-2"),c(E,"class","text-xl pl-10"),c(T,"class","items-center"),c(S,"class","italic"),c(q,"class","font-bold"),c(F,"class","flex gap-2"),c(J,"class","text-xl pl-10"),c(R,"class","items-center"),c(Q,"class","italic"),c(te,"class","font-bold"),c(N,"class","flex gap-2"),c(xe,"class","text-xl pl-10"),c(L,"class","items-center"),c(fe,"class","italic"),c(pe,"class","font-bold"),c(ee,"class","flex gap-2"),c(me,"class","underline"),c(Ve,"class",""),c(Se,"class","italic"),c(we,"class","font-bold"),c(ce,"class","flex gap-2"),c(Ae,"class","text-xl pl-10"),c(ie,"class","items-center mt-2"),c(He,"class","italic"),c(ye,"class","font-bold"),c(be,"class","flex gap-2"),c(ze,"class","text-xl pl-10"),c(Ue,"class","items-center mt-2"),c(se,"class","ml-5"),c(ne,"class","items-center mt-5"),c(e,"class","grid gap-5")},m(de,Z){Y(de,e,Z),t(e,r),t(r,s),t(s,n),t(r,u),t(r,i),t(i,m),t(r,p),t(r,_),H(D,_,null),t(e,y),t(e,T),t(T,C),t(C,U),t(U,A),t(C,V),t(C,v),t(v,I),t(T,w),t(T,E),t(E,x),t(e,M),t(e,R),t(R,F),t(F,S),t(S,G),t(F,W),t(F,q),t(q,X),t(R,K),t(R,J),t(J,oe),t(e,B),t(e,L),t(L,N),t(N,Q),t(Q,ue),t(N,ae),t(N,te),t(te,Fe),t(L,Ne),t(L,xe),t(xe,Ke),t(e,Ce),t(e,ne),t(ne,ee),t(ee,fe),t(fe,Qe),t(ee,Ge),t(ee,pe),t(pe,Xe),t(ne,Pe),t(ne,se),t(se,me),t(me,ke),t(ke,he),t(me,ge),t(me,ve),t(ve,et),t(me,Be),t(se,Te),t(se,Ve),t(Ve,Je),t(Ve,Oe),t(Oe,Ie),t(Ve,tt),t(se,je),t(se,ie),t(ie,ce),t(ce,Se),t(Se,Re),t(ce,Ee),t(ce,we),t(we,st),t(ie,Dt),t(ie,Ae),t(Ae,It),t(se,Et),t(se,Ue),t(Ue,be),t(be,He),t(He,wt),t(be,qe),t(be,ye),t(ye,rt),t(Ue,Ct),t(Ue,ze),t(ze,nt),mt=!0,Tt||(Gt=ps(gs.call(null,i,f[0])),Tt=!0)},p:re,i(de){mt||(k(D.$$.fragment,de),mt=!0)},o(de){O(D.$$.fragment,de),mt=!1},d(de){de&&o(e),z(D),Tt=!1,Gt()}}}function Zr(f){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class en extends $e{constructor(e){super(),_e(this,e,Zr,Xr,De,{})}}function Fs(f,e,r){const s=f.slice();return s[5]=e[r],s}function Gs(f){let e,r,s,n,u,i;r=new cr({props:{icon:f[5].icon}});function m(){return f[4](f[5])}return{c(){e=a("button"),P(r.$$.fragment),s=b(),this.h()},l(p){e=l(p,"BUTTON",{class:!0});var _=d(e);j(r.$$.fragment,_),s=$(_),_.forEach(o),this.h()},h(){c(e,"class",`btn btn-sm btn-icon rounded-md ${f[5].color}`)},m(p,_){Y(p,e,_),H(r,e,null),t(e,s),n=!0,u||(i=fs(e,"click",Ks(m)),u=!0)},p(p,_){f=p},i(p){n||(k(r.$$.fragment,p),n=!0)},o(p){O(r.$$.fragment,p),n=!1},d(p){p&&o(e),z(r),u=!1,i()}}}function tn(f){let e,r,s=f[1],n=[];for(let i=0;i<s.length;i+=1)n[i]=Gs(Fs(f,s,i));const u=i=>O(n[i],1,1,()=>{n[i]=null});return{c(){e=a("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=l(i,"DIV",{class:!0});var m=d(e);for(let p=0;p<n.length;p+=1)n[p].l(m);m.forEach(o),this.h()},h(){c(e,"class","flex gap-2 w-min")},m(i,m){Y(i,e,m);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(e,null);r=!0},p(i,[m]){if(m&3){s=i[1];let p;for(p=0;p<s.length;p+=1){const _=Fs(i,s,p);n[p]?(n[p].p(_,m),k(n[p],1)):(n[p]=Gs(_),n[p].c(),k(n[p],1),n[p].m(e,null))}for(ms(),p=s.length;p<n.length;p+=1)u(p);hs()}},i(i){if(!r){for(let m=0;m<s.length;m+=1)k(n[m]);r=!0}},o(i){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(i){i&&o(e),Yt(n,i)}}}function sn(f,e,r){let{row:s}=e,{dispatchFn:n}=e;const u=p=>n({type:p,row:s}),i=[{icon:dr,color:"variant-filled-primary",type:"CREATE"},{icon:ur,color:"variant-filled-secondary",type:"READ"},{icon:fr,color:"variant-filled-warning",type:"UPDATE"},{icon:pr,color:"variant-filled-error",type:"DELETE"}],m=p=>u(p.type);return f.$$set=p=>{"row"in p&&r(2,s=p.row),"dispatchFn"in p&&r(3,n=p.dispatchFn)},[u,i,s,n,m]}class rn extends $e{constructor(e){super(),_e(this,e,sn,tn,De,{row:2,dispatchFn:3})}}function ks(f,e,r){const s=f.slice();return s[2]=e[r],s}function Bs(f){let e,r=f[2].name+"",s,n;return{c(){e=a("option"),s=h(r),this.h()},l(u){e=l(u,"OPTION",{});var i=d(e);s=g(i,r),i.forEach(o),this.h()},h(){e.__value=n=f[2].id,e.value=e.__value},m(u,i){Y(u,e,i),t(e,s)},p(u,i){i&1&&r!==(r=u[2].name+"")&&Mt(s,r),i&1&&n!==(n=u[2].id)&&(e.__value=n,e.value=e.__value)},d(u){u&&o(e)}}}function nn(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V=f[0],v=[];for(let I=0;I<V.length;I+=1)v[I]=Bs(ks(f,V,I));return{c(){e=a("div"),r=a("label"),s=h("Select the users you would like to add to the "),n=a("strong"),u=h(f[1]),i=h("."),m=b(),p=a("select");for(let I=0;I<v.length;I+=1)v[I].c();_=b(),D=a("div"),y=a("button"),T=h("Cancel"),C=b(),U=a("button"),A=h("Done"),this.h()},l(I){e=l(I,"DIV",{class:!0});var w=d(e);r=l(w,"LABEL",{for:!0});var E=d(r);s=g(E,"Select the users you would like to add to the "),n=l(E,"STRONG",{});var x=d(n);u=g(x,f[1]),x.forEach(o),i=g(E,"."),E.forEach(o),m=$(w),p=l(w,"SELECT",{name:!0,class:!0,id:!0});var M=d(p);for(let G=0;G<v.length;G+=1)v[G].l(M);M.forEach(o),_=$(w),D=l(w,"DIV",{class:!0});var R=d(D);y=l(R,"BUTTON",{class:!0});var F=d(y);T=g(F,"Cancel"),F.forEach(o),C=$(R),U=l(R,"BUTTON",{class:!0});var S=d(U);A=g(S,"Done"),S.forEach(o),R.forEach(o),w.forEach(o),this.h()},h(){c(r,"for","users"),p.multiple=!0,c(p,"name","users"),c(p,"class","select"),c(p,"id",""),c(y,"class","btn variant-filled-error"),c(U,"class","btn variant-filled-success"),c(D,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(I,w){Y(I,e,w),t(e,r),t(r,s),t(r,n),t(n,u),t(r,i),t(e,m),t(e,p);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(p,null);t(e,_),t(e,D),t(D,y),t(y,T),t(D,C),t(D,U),t(U,A)},p(I,[w]){if(w&2&&Mt(u,I[1]),w&1){V=I[0];let E;for(E=0;E<V.length;E+=1){const x=ks(I,V,E);v[E]?v[E].p(x,w):(v[E]=Bs(x),v[E].c(),v[E].m(p,null))}for(;E<v.length;E+=1)v[E].d(1);v.length=V.length}},i:re,o:re,d(I){I&&o(e),Yt(v,I)}}}function on(f,e,r){let{users:s}=e,{group:n}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,n=u.group)},[s,n]}class an extends $e{constructor(e){super(),_e(this,e,on,nn,De,{users:0,group:1})}}function Os(f,e,r){const s=f.slice();return s[2]=e[r],s}function Ls(f){let e,r;return{c(){e=a("p"),r=h("No users in this group"),this.h()},l(s){e=l(s,"P",{class:!0});var n=d(e);r=g(n,"No users in this group"),n.forEach(o),this.h()},h(){c(e,"class","italic")},m(s,n){Y(s,e,n),t(e,r)},p:re,d(s){s&&o(e)}}}function Ms(f){let e,r,s=f[2].name+"",n,u;return{c(){e=a("li"),r=h("- "),n=h(s),this.h()},l(i){e=l(i,"LI",{class:!0});var m=d(e);r=g(m,"- "),n=g(m,s),m.forEach(o),this.h()},h(){c(e,"class","font-semibold"),e.value=u=f[2].id},m(i,m){Y(i,e,m),t(e,r),t(e,n)},p(i,m){m&1&&s!==(s=i[2].name+"")&&Mt(n,s),m&1&&u!==(u=i[2].id)&&(e.value=u)},d(i){i&&o(e)}}}function ln(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V=f[0],v=[];for(let w=0;w<V.length;w+=1)v[w]=Ms(Os(f,V,w));let I=null;return V.length||(I=Ls()),{c(){e=a("div"),r=a("label"),s=h("Users in "),n=a("strong"),u=h(f[1]),i=h("."),m=b(),p=a("ul");for(let w=0;w<v.length;w+=1)v[w].c();I&&I.c(),_=b(),D=a("div"),y=a("button"),T=h("Cancel"),C=b(),U=a("button"),A=h("Done"),this.h()},l(w){e=l(w,"DIV",{class:!0});var E=d(e);r=l(E,"LABEL",{for:!0});var x=d(r);s=g(x,"Users in "),n=l(x,"STRONG",{});var M=d(n);u=g(M,f[1]),M.forEach(o),i=g(x,"."),x.forEach(o),m=$(E),p=l(E,"UL",{});var R=d(p);for(let W=0;W<v.length;W+=1)v[W].l(R);I&&I.l(R),R.forEach(o),_=$(E),D=l(E,"DIV",{class:!0});var F=d(D);y=l(F,"BUTTON",{class:!0});var S=d(y);T=g(S,"Cancel"),S.forEach(o),C=$(F),U=l(F,"BUTTON",{class:!0});var G=d(U);A=g(G,"Done"),G.forEach(o),F.forEach(o),E.forEach(o),this.h()},h(){c(r,"for","users"),c(y,"class","btn variant-filled-error"),c(U,"class","btn variant-filled-success"),c(D,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,E){Y(w,e,E),t(e,r),t(r,s),t(r,n),t(n,u),t(r,i),t(e,m),t(e,p);for(let x=0;x<v.length;x+=1)v[x]&&v[x].m(p,null);I&&I.m(p,null),t(e,_),t(e,D),t(D,y),t(y,T),t(D,C),t(D,U),t(U,A)},p(w,[E]){if(E&2&&Mt(u,w[1]),E&1){V=w[0];let x;for(x=0;x<V.length;x+=1){const M=Os(w,V,x);v[x]?v[x].p(M,E):(v[x]=Ms(M),v[x].c(),v[x].m(p,null))}for(;x<v.length;x+=1)v[x].d(1);v.length=V.length,!V.length&&I?I.p(w,E):V.length?I&&(I.d(1),I=null):(I=Ls(),I.c(),I.m(p,null))}},i:re,o:re,d(w){w&&o(e),Yt(v,w),I&&I.d()}}}function cn(f,e,r){let{users:s}=e,{group:n}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,n=u.group)},[s,n]}class dn extends $e{constructor(e){super(),_e(this,e,cn,ln,De,{users:0,group:1})}}function un(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w;return{c(){e=a("div"),r=a("label"),s=h("Group name"),n=b(),u=a("input"),i=b(),m=a("label"),p=h("Group description"),_=b(),D=a("input"),y=b(),T=a("div"),C=a("button"),U=h("Cancel"),A=b(),V=a("button"),v=h("Done"),this.h()},l(E){e=l(E,"DIV",{class:!0});var x=d(e);r=l(x,"LABEL",{for:!0});var M=d(r);s=g(M,"Group name"),M.forEach(o),n=$(x),u=l(x,"INPUT",{type:!0,id:!0,class:!0}),i=$(x),m=l(x,"LABEL",{for:!0});var R=d(m);p=g(R,"Group description"),R.forEach(o),_=$(x),D=l(x,"INPUT",{type:!0,id:!0,class:!0}),y=$(x),T=l(x,"DIV",{class:!0});var F=d(T);C=l(F,"BUTTON",{class:!0});var S=d(C);U=g(S,"Cancel"),S.forEach(o),A=$(F),V=l(F,"BUTTON",{class:!0});var G=d(V);v=g(G,"Done"),G.forEach(o),F.forEach(o),x.forEach(o),this.h()},h(){c(r,"for","groupName"),c(u,"type","text"),c(u,"id","groupName"),c(u,"class","input input-primary"),c(m,"for","groupDescription"),c(D,"type","text"),c(D,"id","groupDescription"),c(D,"class","input input-primary"),c(C,"class","btn variant-filled-error"),c(V,"class","btn variant-filled-success"),c(T,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(E,x){Y(E,e,x),t(e,r),t(r,s),t(e,n),t(e,u),ds(u,f[0].name),t(e,i),t(e,m),t(m,p),t(e,_),t(e,D),ds(D,f[0].description),t(e,y),t(e,T),t(T,C),t(C,U),t(T,A),t(T,V),t(V,v),I||(w=[fs(u,"input",f[1]),fs(D,"input",f[2])],I=!0)},p(E,[x]){x&1&&u.value!==E[0].name&&ds(u,E[0].name),x&1&&D.value!==E[0].description&&ds(D,E[0].description)},i:re,o:re,d(E){E&&o(e),I=!1,er(w)}}}function fn(f,e,r){let{group:s}=e;function n(){s.name=this.value,r(0,s)}function u(){s.description=this.value,r(0,s)}return f.$$set=i=>{"group"in i&&r(0,s=i.group)},[s,n,u]}class pn extends $e{constructor(e){super(),_e(this,e,fn,un,De,{group:0})}}const mn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],hn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],gn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],vn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],bn=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],$n=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],Zs=Kt(mn),bs=Kt(hn),_n=Kt(gn),Dn=Kt($n),En=Kt(bn),Ns={32655:"NA",32654:"NM",32653:"ND"},wn=Kt(vn);function Ps(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function js(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function Hs(f){let e,r;return{c(){e=a("h3"),r=h(f[0]),this.h()},l(s){e=l(s,"H3",{class:!0});var n=d(e);r=g(n,f[0]),n.forEach(o),this.h()},h(){c(e,"class","h3")},m(s,n){Y(s,e,n),t(e,r)},p(s,n){n&1&&Mt(r,s[0])},d(s){s&&o(e)}}}function Cn(f){let e=f[6].name+"",r;return{c(){r=h(e)},l(s){r=g(s,e)},m(s,n){Y(s,r,n)},p(s,n){n&2&&e!==(e=s[6].name+"")&&Mt(r,e)},d(s){s&&o(r)}}}function zs(f){let e,r,s;function n(i){f[4](i)}let u={name:`tab${f[8]}`,value:f[8],$$slots:{default:[Cn]},$$scope:{ctx:f}};return f[2]!==void 0&&(u.group=f[2]),e=new hr({props:u}),or.push(()=>ar(e,"group",n)),{c(){P(e.$$.fragment)},l(i){j(e.$$.fragment,i)},m(i,m){H(e,i,m),s=!0},p(i,m){const p={};m&34&&(p.$$scope={dirty:m,ctx:i}),!r&&m&4&&(r=!0,p.group=i[2],lr(()=>r=!1)),e.$set(p)},i(i){s||(k(e.$$.fragment,i),s=!0)},o(i){O(e.$$.fragment,i),s=!1},d(i){z(e,i)}}}function Tn(f){let e,r,s=f[1],n=[];for(let i=0;i<s.length;i+=1)n[i]=zs(Ps(f,s,i));const u=i=>O(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=qt()},l(i){for(let m=0;m<n.length;m+=1)n[m].l(i);e=qt()},m(i,m){for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(i,m);Y(i,e,m),r=!0},p(i,m){if(m&6){s=i[1];let p;for(p=0;p<s.length;p+=1){const _=Ps(i,s,p);n[p]?(n[p].p(_,m),k(n[p],1)):(n[p]=zs(_),n[p].c(),k(n[p],1),n[p].m(e.parentNode,e))}for(ms(),p=s.length;p<n.length;p+=1)u(p);hs()}},i(i){if(!r){for(let m=0;m<s.length;m+=1)k(n[m]);r=!0}},o(i){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(i){Yt(n,i),i&&o(e)}}}function Ws(f){let e,r;return e=new Xt({props:{language:f[6].language,code:f[6].code}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p(s,n){const u={};n&2&&(u.language=s[6].language),n&2&&(u.code=s[6].code),e.$set(u)},i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function Js(f){let e,r,s=f[2]===f[8]&&Ws(f);return{c(){s&&s.c(),e=qt()},l(n){s&&s.l(n),e=qt()},m(n,u){s&&s.m(n,u),Y(n,e,u),r=!0},p(n,u){n[2]===n[8]?s?(s.p(n,u),u&4&&k(s,1)):(s=Ws(n),s.c(),k(s,1),s.m(e.parentNode,e)):s&&(ms(),O(s,1,1,()=>{s=null}),hs())},i(n){r||(k(s),r=!0)},o(n){O(s),r=!1},d(n){s&&s.d(n),n&&o(e)}}}function In(f){let e,r,s=f[1],n=[];for(let i=0;i<s.length;i+=1)n[i]=Js(js(f,s,i));const u=i=>O(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=qt()},l(i){for(let m=0;m<n.length;m+=1)n[m].l(i);e=qt()},m(i,m){for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(i,m);Y(i,e,m),r=!0},p(i,m){if(m&6){s=i[1];let p;for(p=0;p<s.length;p+=1){const _=js(i,s,p);n[p]?(n[p].p(_,m),k(n[p],1)):(n[p]=Js(_),n[p].c(),k(n[p],1),n[p].m(e.parentNode,e))}for(ms(),p=s.length;p<n.length;p+=1)u(p);hs()}},i(i){if(!r){for(let m=0;m<s.length;m+=1)k(n[m]);r=!0}},o(i){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)O(n[m]);r=!1},d(i){Yt(n,i),i&&o(e)}}}function yn(f){let e,r,s,n,u,i,m,p,_,D=f[0]&&Hs(f);const y=f[3].default,T=tr(y,f,f[5],null);return p=new mr({props:{$$slots:{panel:[In],default:[Tn]},$$scope:{ctx:f}}}),{c(){e=a("div"),r=a("div"),D&&D.c(),s=b(),n=a("div"),u=a("div"),T&&T.c(),i=b(),m=a("div"),P(p.$$.fragment),this.h()},l(C){e=l(C,"DIV",{});var U=d(e);r=l(U,"DIV",{class:!0});var A=d(r);D&&D.l(A),A.forEach(o),s=$(U),n=l(U,"DIV",{class:!0});var V=d(n);u=l(V,"DIV",{});var v=d(u);T&&T.l(v),v.forEach(o),i=$(V),m=l(V,"DIV",{});var I=d(m);j(p.$$.fragment,I),I.forEach(o),V.forEach(o),U.forEach(o),this.h()},h(){c(r,"class","py-5"),c(n,"class","grid grid-cols-2 card p-5 gap-10")},m(C,U){Y(C,e,U),t(e,r),D&&D.m(r,null),t(e,s),t(e,n),t(n,u),T&&T.m(u,null),t(n,i),t(n,m),H(p,m,null),_=!0},p(C,[U]){C[0]?D?D.p(C,U):(D=Hs(C),D.c(),D.m(r,null)):D&&(D.d(1),D=null),T&&T.p&&(!_||U&32)&&sr(T,y,C,C[5],_?nr(y,C[5],U,null):rr(C[5]),null);const A={};U&38&&(A.$$scope={dirty:U,ctx:C}),p.$set(A)},i(C){_||(k(T,C),k(p.$$.fragment,C),_=!0)},o(C){O(T,C),O(p.$$.fragment,C),_=!1},d(C){C&&o(e),D&&D.d(),T&&T.d(C),z(p)}}}function xn(f,e,r){let{$$slots:s={},$$scope:n}=e,{title:u}=e,{tabs:i=[]}=e,m=0;function p(_){m=_,r(2,m)}return f.$$set=_=>{"title"in _&&r(0,u=_.title),"tabs"in _&&r(1,i=_.tabs),"$$scope"in _&&r(5,n=_.$$scope)},[u,i,m,s,p,n]}class $s extends $e{constructor(e){super(),_e(this,e,xn,yn,De,{title:0,tabs:1})}}function Vn(f){let e,r;return e=new Jt({props:{config:f[0]}}),e.$on("action",f[1]),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function Un(f){let e,r,s;return r=new $s({props:{title:"CRUD",tabs:f[2],$$slots:{default:[Vn]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{class:!0,id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","CRUD")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&16&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function Sn(f,e,r){let s;Qs(f,bs,m=>r(3,s=m));const n={id:"userGroupCRUD",data:Zs,optionsComponent:rn},u=m=>{const{type:p,row:_}=m.detail;switch(p){case"CREATE":us.trigger({type:"component",title:`Add user to Group ${_.id}`,component:{ref:an,props:{users:s.filter(D=>D.group!==_.name),group:_.name}}});break;case"READ":us.trigger({type:"component",title:`Users in Group ${_.id}`,component:{ref:dn,props:{users:s.filter(D=>D.group===_.name),group:_.name}}});break;case"UPDATE":us.trigger({type:"component",title:`Edit Group ${_.id}`,component:{ref:pn,props:{group:_}}});break;case"DELETE":us.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${_.name}</strong>?`,response:D=>console.log("response:",D)});break}},i=[{name:"Svelte",language:"html",code:Br},{name:"tableCRUDActions",language:"typescript",code:Or},{name:"optionsComponent",language:"html",code:Pr},{name:"data",language:"typescript",code:vs+`
`+Xs},{name:"AddUser.svelte",language:"html",code:Lr},{name:"ShowUsers.svelte",language:"html",code:Mr},{name:"EditGroup.svelte",language:"html",code:Nr}];return[n,u,i]}class An extends $e{constructor(e){super(),_e(this,e,Sn,Un,De,{tableCRUDConfig:0,tableCRUDActions:1,tableCRUDtabs:2})}get tableCRUDConfig(){return this.$$.ctx[0]}get tableCRUDActions(){return this.$$.ctx[1]}get tableCRUDtabs(){return this.$$.ctx[2]}}function Rn(f){let e,r,s,n;return{c(){e=a("button"),r=h("Odd or even"),this.h()},l(u){e=l(u,"BUTTON",{class:!0});var i=d(e);r=g(i,"Odd or even"),i.forEach(o),this.h()},h(){c(e,"class","btn btn-sm variant-filled-secondary")},m(u,i){Y(u,e,i),t(e,r),s||(n=fs(e,"click",Ks(f[0])),s=!0)},p:re,i:re,o:re,d(u){u&&o(e),s=!1,n()}}}function Fn(f,e,r){let{row:s}=e,{dispatchFn:n}=e;const u=()=>{const i=s.id%2===0?"even":"odd";return n({type:i})};return f.$$set=i=>{"row"in i&&r(1,s=i.row),"dispatchFn"in i&&r(2,n=i.dispatchFn)},[u,s,n]}class Gn extends $e{constructor(e){super(),_e(this,e,Fn,Rn,De,{row:1,dispatchFn:2})}}function kn(f){let e,r;return e=new Jt({props:{config:f[1]}}),e.$on("action",f[2]),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function Bn(f){let e,r,s;return r=new $s({props:{title:"Odd or even",tabs:f[0],$$slots:{default:[kn]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{class:!0,id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","usersNoRoles")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&8&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function On(f){return[[{name:"Svelte",language:"html",code:Dr},{name:"Data",language:"typescript",code:vs},{name:"TableOptions.svelte",language:"html",code:kr}],{id:"usersNoRoles",data:bs,optionsComponent:Gn,columns:{id:{colFilterFn:gr,colFilterComponent:vr},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},n=>{alert(n.detail.type)}]}class Ln extends $e{constructor(e){super(),_e(this,e,On,Bn,De,{})}}function Mn(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function Nn(f){let e,r,s;return r=new Zt({props:{title:"Minimal configuration",svelte:_r,data:vs,$$slots:{default:[Mn]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{class:!0,id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","users")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&2&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function Pn(f){return[{id:"users",data:bs}]}class jn extends $e{constructor(e){super(),_e(this,e,Pn,Nn,De,{})}}function Hn(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function zn(f){let e,r,s;return r=new Zt({props:{title:"Date",svelte:Er,data:wr,$$slots:{default:[Hn]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","usersBD")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&2&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function Wn(f){return[{id:"usersBD",data:_n,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:r=>r.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:r=>r.getTime(),toFilterableValueFn:r=>r}}}}]}class Jn extends $e{constructor(e){super(),_e(this,e,Wn,zn,De,{})}}function qn(f){let e,r;return{c(){e=a("input"),this.h()},l(s){e=l(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){c(e,"type","checkbox"),c(e,"name","isAdmin"),c(e,"id",r=f[1].id),e.checked=f[0],e.disabled=!0},m(s,n){Y(s,e,n)},p(s,[n]){n&2&&r!==(r=s[1].id)&&c(e,"id",r),n&1&&(e.checked=s[0])},i:re,o:re,d(s){s&&o(e)}}}function Yn(f,e,r){let{value:s}=e,{row:n}=e;return f.$$set=u=>{"value"in u&&r(0,s=u.value),"row"in u&&r(1,n=u.row)},[s,n]}class Kn extends $e{constructor(e){super(),_e(this,e,Yn,qn,De,{value:0,row:1})}}function Qn(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function Xn(f){let e,r,s;return r=new $s({props:{title:"Boolean",tabs:f[1],$$slots:{default:[Qn]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","boolean")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&4&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function Zn(f){return[{id:"usersAndAdmins",data:Dn,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Kn},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Rr},{name:"Data",language:"typescript",code:Fr},{name:"IsAdmin.svelte",language:"html",code:Gr}]]}class eo extends $e{constructor(e){super(),_e(this,e,Zn,Xn,De,{})}}function to(f){let e,r;return{c(){e=a("a"),r=h(f[0]),this.h()},l(s){e=l(s,"A",{href:!0});var n=d(e);r=g(n,f[0]),n.forEach(o),this.h()},h(){c(e,"href",f[0])},m(s,n){Y(s,e,n),t(e,r)},p(s,[n]){n&1&&Mt(r,s[0]),n&1&&c(e,"href",s[0])},i:re,o:re,d(s){s&&o(e)}}}function so(f,e,r){let{value:s}=e;return f.$$set=n=>{"value"in n&&r(0,s=n.value)},[s]}class ro extends $e{constructor(e){super(),_e(this,e,so,to,De,{value:0})}}function no(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function oo(f){let e,r,s;return r=new $s({props:{title:"URLs",tabs:f[1],$$slots:{default:[no]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","URLs")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&4&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function ao(f){return[{id:"websites",data:En,columns:{URL:{header:"URL",instructions:{renderComponent:ro,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:Ur},{name:"Data",language:"typescript",code:Sr},{name:"URLCell.svelte",language:"html",code:Ar}]]}class lo extends $e{constructor(e){super(),_e(this,e,ao,oo,De,{})}}function io(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function co(f){let e,r,s;return r=new Zt({props:{title:"Missing values",svelte:xr,data:Vr,$$slots:{default:[io]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","combination")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&2&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function uo(f){return[{id:"usersMissingIDs",data:wn,columns:{id:{header:"ID",instructions:{toStringFn:r=>r in Ns?Ns[r]:r.toString()}}}}]}class fo extends $e{constructor(e){super(),_e(this,e,uo,co,De,{})}}function po(f){let e,r;return e=new Jt({props:{config:f[0]}}),{c(){P(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,n){H(e,s,n),r=!0},p:re,i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){O(e.$$.fragment,s),r=!1},d(s){z(e,s)}}}function mo(f){let e,r,s;return r=new Zt({props:{title:"Table component",svelte:$r,data:Xs,$$slots:{default:[po]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","groups")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&2&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function ho(f){return[{id:"userGroups",data:Zs,height:300,columns:{id:{header:"ID"}}}]}class go extends $e{constructor(e){super(),_e(this,e,ho,mo,De,{})}}function qs(f,e,r){const s=f.slice();return s[1]=e[r],s}function Ys(f){let e,r,s=f[1].name+"",n,u,i,m,p=f[1].group+"",_,D;return{c(){e=a("tr"),r=a("td"),n=h(s),u=b(),i=a("td"),m=a("div"),_=h(p),D=b()},l(y){e=l(y,"TR",{});var T=d(e);r=l(T,"TD",{});var C=d(r);n=g(C,s),C.forEach(o),u=$(T),i=l(T,"TD",{});var U=d(i);m=l(U,"DIV",{});var A=d(m);_=g(A,p),A.forEach(o),U.forEach(o),D=$(T),T.forEach(o)},m(y,T){Y(y,e,T),t(e,r),t(r,n),t(e,u),t(e,i),t(i,m),t(m,_),t(e,D)},p(y,T){T&1&&s!==(s=y[1].name+"")&&Mt(n,s),T&1&&p!==(p=y[1].group+"")&&Mt(_,p)},d(y){y&&o(e)}}}function vo(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A=f[0],V=[];for(let v=0;v<A.length;v+=1)V[v]=Ys(qs(f,A,v));return{c(){e=a("div"),r=h("Used classes are important to include for the table to have a uniform look."),s=b(),n=a("div"),u=a("table"),i=a("thead"),m=a("tr"),p=a("th"),_=h("Group"),D=b(),y=a("th"),T=h("Description"),C=b(),U=a("tbody");for(let v=0;v<V.length;v+=1)V[v].c();this.h()},l(v){e=l(v,"DIV",{class:!0});var I=d(e);r=g(I,"Used classes are important to include for the table to have a uniform look."),I.forEach(o),s=$(v),n=l(v,"DIV",{class:!0});var w=d(n);u=l(w,"TABLE",{class:!0});var E=d(u);i=l(E,"THEAD",{});var x=d(i);m=l(x,"TR",{class:!0});var M=d(m);p=l(M,"TH",{class:!0});var R=d(p);_=g(R,"Group"),R.forEach(o),D=$(M),y=l(M,"TH",{class:!0});var F=d(y);T=g(F,"Description"),F.forEach(o),M.forEach(o),x.forEach(o),C=$(E),U=l(E,"TBODY",{});var S=d(U);for(let G=0;G<V.length;G+=1)V[G].l(S);S.forEach(o),E.forEach(o),w.forEach(o),this.h()},h(){c(e,"class","pb-2"),c(p,"class","!p-2"),c(y,"class","!p-2"),c(m,"class","bg-primary-300"),c(u,"class","table table-compact bg-tertiary-200"),c(n,"class","table-container")},m(v,I){Y(v,e,I),t(e,r),Y(v,s,I),Y(v,n,I),t(n,u),t(u,i),t(i,m),t(m,p),t(p,_),t(m,D),t(m,y),t(y,T),t(u,C),t(u,U);for(let w=0;w<V.length;w+=1)V[w]&&V[w].m(U,null)},p(v,I){if(I&1){A=v[0];let w;for(w=0;w<A.length;w+=1){const E=qs(v,A,w);V[w]?V[w].p(E,I):(V[w]=Ys(E),V[w].c(),V[w].m(U,null))}for(;w<V.length;w+=1)V[w].d(1);V.length=A.length}},d(v){v&&o(e),v&&o(s),v&&o(n),Yt(V,v)}}}function bo(f){let e,r,s;return r=new Zt({props:{title:"Simple table without Table component",svelte:br,data:vs,$$slots:{default:[vo]},$$scope:{ctx:f}}}),{c(){e=a("div"),P(r.$$.fragment),this.h()},l(n){e=l(n,"DIV",{id:!0});var u=d(e);j(r.$$.fragment,u),u.forEach(o),this.h()},h(){c(e,"id","simpleTable")},m(n,u){Y(n,e,u),H(r,e,null),s=!0},p(n,[u]){const i={};u&17&&(i.$$scope={dirty:u,ctx:n}),r.$set(i)},i(n){s||(k(r.$$.fragment,n),s=!0)},o(n){O(r.$$.fragment,n),s=!1},d(n){n&&o(e),z(r)}}}function $o(f,e,r){let s;return Qs(f,bs,n=>r(0,s=n)),[s]}class _o extends $e{constructor(e){super(),_e(this,e,$o,bo,De,{})}}function Do(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W,q,X,K,J,oe;return u=new _o({}),m=new go({}),_=new jn({}),A=new Ln({}),v=new An({}),R=new Jn({}),S=new fo({}),W=new lo({}),X=new eo({}),J=new ir({}),{c(){e=a("div"),r=a("h2"),s=h("Examples"),n=b(),P(u.$$.fragment),i=b(),P(m.$$.fragment),p=b(),P(_.$$.fragment),D=b(),y=a("div"),T=a("h2"),C=h("Dispatching Actions"),U=b(),P(A.$$.fragment),V=b(),P(v.$$.fragment),I=b(),w=a("div"),E=a("h2"),x=h("Complex data types"),M=b(),P(R.$$.fragment),F=b(),P(S.$$.fragment),G=b(),P(W.$$.fragment),q=b(),P(X.$$.fragment),K=b(),P(J.$$.fragment),this.h()},l(B){e=l(B,"DIV",{class:!0});var L=d(e);r=l(L,"H2",{});var N=d(r);s=g(N,"Examples"),N.forEach(o),n=$(L),j(u.$$.fragment,L),i=$(L),j(m.$$.fragment,L),p=$(L),j(_.$$.fragment,L),D=$(L),y=l(L,"DIV",{id:!0,class:!0});var Q=d(y);T=l(Q,"H2",{});var ue=d(T);C=g(ue,"Dispatching Actions"),ue.forEach(o),U=$(Q),j(A.$$.fragment,Q),V=$(Q),j(v.$$.fragment,Q),Q.forEach(o),I=$(L),w=l(L,"DIV",{id:!0});var ae=d(w);E=l(ae,"H2",{});var te=d(E);x=g(te,"Complex data types"),te.forEach(o),M=$(ae),j(R.$$.fragment,ae),F=$(ae),j(S.$$.fragment,ae),G=$(ae),j(W.$$.fragment,ae),q=$(ae),j(X.$$.fragment,ae),ae.forEach(o),L.forEach(o),K=$(B),j(J.$$.fragment,B),this.h()},h(){c(y,"id","actionDispatchersExamples"),c(y,"class","my-20"),c(w,"id","complexTypes"),c(e,"class","grid gap-1")},m(B,L){Y(B,e,L),t(e,r),t(r,s),t(e,n),H(u,e,null),t(e,i),H(m,e,null),t(e,p),H(_,e,null),t(e,D),t(e,y),t(y,T),t(T,C),t(y,U),H(A,y,null),t(y,V),H(v,y,null),t(e,I),t(e,w),t(w,E),t(E,x),t(w,M),H(R,w,null),t(w,F),H(S,w,null),t(w,G),H(W,w,null),t(w,q),H(X,w,null),Y(B,K,L),H(J,B,L),oe=!0},p:re,i(B){oe||(k(u.$$.fragment,B),k(m.$$.fragment,B),k(_.$$.fragment,B),k(A.$$.fragment,B),k(v.$$.fragment,B),k(R.$$.fragment,B),k(S.$$.fragment,B),k(W.$$.fragment,B),k(X.$$.fragment,B),k(J.$$.fragment,B),oe=!0)},o(B){O(u.$$.fragment,B),O(m.$$.fragment,B),O(_.$$.fragment,B),O(A.$$.fragment,B),O(v.$$.fragment,B),O(R.$$.fragment,B),O(S.$$.fragment,B),O(W.$$.fragment,B),O(X.$$.fragment,B),O(J.$$.fragment,B),oe=!1},d(B){B&&o(e),z(u),z(m),z(_),z(A),z(v),z(R),z(S),z(W),z(X),B&&o(K),z(J,B)}}}class Eo extends $e{constructor(e){super(),_e(this,e,null,Do,De,{})}}function wo(f){let e,r,s,n,u,i,m,p="(action: CustomEvent<any>) => {}",_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F,S,G,W,q,X,K,J,oe,B,L,N,Q,ue,ae,te,Fe,Ne="(obj: any) => dispatch('action', obj)",xe,Ke,Ce,ne,ee,fe,Qe,Ge,pe,Xe;return{c(){e=a("div"),r=a("div"),s=a("div"),n=a("h3"),u=h("on:action"),i=b(),m=a("h3"),_=h(p),D=b(),y=a("p"),T=h("To dispatch actions and listen to dispatchers you need to create a table with your own "),C=a("code"),U=h("optionsComponent"),A=h(" component."),V=b(),v=a("div"),I=a("p"),w=h("Every "),E=a("code"),x=h("optionsComponent"),M=h(" will get 2 props:"),R=b(),F=a("div"),S=a("div"),G=a("div"),W=h("row:"),q=b(),X=a("div"),K=h("Object"),J=b(),oe=a("p"),B=h("The current row in the table. In other words, a single object from the data store."),L=b(),N=a("div"),Q=a("div"),ue=a("div"),ae=h("dispatchFn:"),te=b(),Fe=a("div"),xe=h(Ne),Ke=b(),Ce=a("p"),ne=h("A function that takes an object and dispatches an action with the name "),ee=a("code"),fe=h("action"),Qe=h(`. The passed object is accessible by the parent component through the
					`),Ge=a("code"),pe=h("action.detail"),Xe=h(" property."),this.h()},l(Pe){e=l(Pe,"DIV",{class:!0});var se=d(e);r=l(se,"DIV",{class:!0,id:!0});var me=d(r);s=l(me,"DIV",{class:!0});var ke=d(s);n=l(ke,"H3",{class:!0});var he=d(n);u=g(he,"on:action"),he.forEach(o),i=$(ke),m=l(ke,"H3",{class:!0});var ge=d(m);_=g(ge,p),ge.forEach(o),ke.forEach(o),D=$(me),y=l(me,"P",{class:!0});var ve=d(y);T=g(ve,"To dispatch actions and listen to dispatchers you need to create a table with your own "),C=l(ve,"CODE",{class:!0});var et=d(C);U=g(et,"optionsComponent"),et.forEach(o),A=g(ve," component."),ve.forEach(o),V=$(me),v=l(me,"DIV",{class:!0});var Be=d(v);I=l(Be,"P",{class:!0});var Te=d(I);w=g(Te,"Every "),E=l(Te,"CODE",{class:!0});var Ve=d(E);x=g(Ve,"optionsComponent"),Ve.forEach(o),M=g(Te," will get 2 props:"),Te.forEach(o),R=$(Be),F=l(Be,"DIV",{class:!0});var Je=d(F);S=l(Je,"DIV",{class:!0});var Oe=d(S);G=l(Oe,"DIV",{class:!0});var Ie=d(G);W=g(Ie,"row:"),Ie.forEach(o),q=$(Oe),X=l(Oe,"DIV",{class:!0});var tt=d(X);K=g(tt,"Object"),tt.forEach(o),Oe.forEach(o),J=$(Je),oe=l(Je,"P",{class:!0});var je=d(oe);B=g(je,"The current row in the table. In other words, a single object from the data store."),je.forEach(o),Je.forEach(o),L=$(Be),N=l(Be,"DIV",{class:!0});var ie=d(N);Q=l(ie,"DIV",{class:!0});var ce=d(Q);ue=l(ce,"DIV",{class:!0});var Se=d(ue);ae=g(Se,"dispatchFn:"),Se.forEach(o),te=$(ce),Fe=l(ce,"DIV",{class:!0});var Re=d(Fe);xe=g(Re,Ne),Re.forEach(o),ce.forEach(o),Ke=$(ie),Ce=l(ie,"P",{class:!0});var Ee=d(Ce);ne=g(Ee,"A function that takes an object and dispatches an action with the name "),ee=l(Ee,"CODE",{class:!0});var we=d(ee);fe=g(we,"action"),we.forEach(o),Qe=g(Ee,`. The passed object is accessible by the parent component through the
					`),Ge=l(Ee,"CODE",{class:!0});var st=d(Ge);pe=g(st,"action.detail"),st.forEach(o),Xe=g(Ee," property."),Ee.forEach(o),ie.forEach(o),Be.forEach(o),me.forEach(o),se.forEach(o),this.h()},h(){c(n,"class","italic"),c(m,"class","font-semibold"),c(s,"class","flex gap-3"),c(C,"class","!text-xl"),c(y,"class","text-xl underline"),c(E,"class","!text-xl"),c(I,"class","text-xl"),c(G,"class","italic"),c(X,"class","font-bold"),c(S,"class","flex gap-2"),c(oe,"class","text-xl pl-10"),c(F,"class","items-center mt-2"),c(ue,"class","italic"),c(Fe,"class","font-bold"),c(Q,"class","flex gap-2"),c(ee,"class","!text-xl"),c(Ge,"class","!text-xl"),c(Ce,"class","text-xl pl-10"),c(N,"class","items-center mt-2"),c(v,"class","mt-5"),c(r,"class","grid gap-2"),c(r,"id","actionDispatchersDocs"),c(e,"class","grid gap-5")},m(Pe,se){Y(Pe,e,se),t(e,r),t(r,s),t(s,n),t(n,u),t(s,i),t(s,m),t(m,_),t(r,D),t(r,y),t(y,T),t(y,C),t(C,U),t(y,A),t(r,V),t(r,v),t(v,I),t(I,w),t(I,E),t(E,x),t(I,M),t(v,R),t(v,F),t(F,S),t(S,G),t(G,W),t(S,q),t(S,X),t(X,K),t(F,J),t(F,oe),t(oe,B),t(v,L),t(v,N),t(N,Q),t(Q,ue),t(ue,ae),t(Q,te),t(Q,Fe),t(Fe,xe),t(N,Ke),t(N,Ce),t(Ce,ne),t(Ce,ee),t(ee,fe),t(Ce,Qe),t(Ce,Ge),t(Ge,pe),t(Ce,Xe)},p:re,i:re,o:re,d(Pe){Pe&&o(e)}}}class Co extends $e{constructor(e){super(),_e(this,e,null,wo,De,{})}}function To(f){let e,r,s,n,u,i,m,p,_,D,y,T,C,U,A,V,v,I,w,E,x,M,R,F;return _=new zr({}),y=new qr({}),C=new Qr({}),A=new en({}),x=new Co({}),R=new Eo({}),{c(){e=a("div"),r=a("div"),s=a("h1"),n=h("Table"),u=b(),i=a("h2"),m=h("Types"),p=b(),P(_.$$.fragment),D=b(),P(y.$$.fragment),T=b(),P(C.$$.fragment),U=b(),P(A.$$.fragment),V=b(),v=a("div"),I=a("h2"),w=h("Action Dispatchers"),E=b(),P(x.$$.fragment),M=b(),P(R.$$.fragment),this.h()},l(S){e=l(S,"DIV",{class:!0,id:!0});var G=d(e);r=l(G,"DIV",{class:!0});var W=d(r);s=l(W,"H1",{class:!0});var q=d(s);n=g(q,"Table"),q.forEach(o),u=$(W),i=l(W,"H2",{});var X=d(i);m=g(X,"Types"),X.forEach(o),p=$(W),j(_.$$.fragment,W),W.forEach(o),D=$(G),j(y.$$.fragment,G),T=$(G),j(C.$$.fragment,G),U=$(G),j(A.$$.fragment,G),V=$(G),v=l(G,"DIV",{class:!0});var K=d(v);I=l(K,"H2",{});var J=d(I);w=g(J,"Action Dispatchers"),J.forEach(o),E=$(K),j(x.$$.fragment,K),K.forEach(o),M=$(G),j(R.$$.fragment,G),G.forEach(o),this.h()},h(){c(s,"class","font-bold !text-6xl"),c(r,"class","grid gap-5"),c(v,"class","grid gap-5"),c(e,"class","grid gap-20 p-10"),c(e,"id","toc-target-table")},m(S,G){Y(S,e,G),t(e,r),t(r,s),t(s,n),t(r,u),t(r,i),t(i,m),t(r,p),H(_,r,null),t(e,D),H(y,e,null),t(e,T),H(C,e,null),t(e,U),H(A,e,null),t(e,V),t(e,v),t(v,I),t(I,w),t(v,E),H(x,v,null),t(e,M),H(R,e,null),F=!0},p:re,i(S){F||(k(_.$$.fragment,S),k(y.$$.fragment,S),k(C.$$.fragment,S),k(A.$$.fragment,S),k(x.$$.fragment,S),k(R.$$.fragment,S),F=!0)},o(S){O(_.$$.fragment,S),O(y.$$.fragment,S),O(C.$$.fragment,S),O(A.$$.fragment,S),O(x.$$.fragment,S),O(R.$$.fragment,S),F=!1},d(S){S&&o(e),z(_),z(y),z(C),z(A),z(x),z(R)}}}class Go extends $e{constructor(e){super(),_e(this,e,null,To,De,{})}}export{Go as component};
