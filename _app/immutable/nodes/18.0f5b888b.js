import{S as Ee,i as De,s as we,k as n,q as p,a as g,y as H,l as i,m as c,r as h,h as o,c as b,z,n as a,b as Z,F as t,A as W,ab as zs,Z as re,g as G,d as L,B as q,v as Ir,f as Vr,a0 as js,N as xr,a7 as Kl,u as ds,aa as Cr,P as to,E as so,G as ro,H as lo,I as oo,e as Ns,w as ao,a6 as no,a8 as io,_ as Ql}from"../chunks/index.9ace2197.js";/* empty css                             */import{p as Sr}from"../chunks/floating-ui.dom.eb617284.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.29c4a86c.js";import{C as Ws}from"../chunks/CodeBlock.ee03171b.js";import{M as co}from"../chunks/Modal.05c673d2.js";import{g as uo}from"../chunks/stores.41ea8166.js";import{F as fo,e as po,g as ho,d as mo,c as vo}from"../chunks/index.119b27a0.js";import{w as Hs}from"../chunks/index.7dd750f8.js";import{a as go,b as bo,T as _s,c as _o,d as $o,C as qs}from"../chunks/CodeContainer.22fc0abd.js";import{a as Eo,t as Do}from"../chunks/stores.c4039bb7.js";function wo(f,e){var D;let r="h2, h3, h4, h5, h6",s="body",l,u=[];function d(){e!=null&&e.queryElements&&(r=e.queryElements),e!=null&&e.scrollTarget&&(s=e.scrollTarget),l=f.querySelectorAll(r),u=[],v()}function v(){l==null||l.forEach(_=>{var C,y,T,I;if(!_.hasAttribute("data-toc-ignore")){if((e==null?void 0:e.mode)==="generate"&&!_.id){const U=(y=(C=_.firstChild)==null?void 0:C.textContent)==null?void 0:y.trim().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase(),V=e.prefix?`${e.prefix}-`:"",$=e.suffix?`-${e.suffix}`:"";_.id=V+U+$}u.push({element:_.nodeName.toLowerCase(),id:_.id,text:((I=(T=_.firstChild)==null?void 0:T.textContent)==null?void 0:I.trim())||""})}}),Eo.set(u)}function m(_){if(!(l!=null&&l.length))return;const C=_.target;if(!(C instanceof HTMLElement))throw new Error("scrollTarget is not an HTMLElement");const y=C.getBoundingClientRect().top||0,T=40;for(const I of l)if(I.getBoundingClientRect().top-y+T>=0)return Do.set(I.id)}return d(),s&&((D=document.querySelector(s))==null||D.addEventListener("scroll",m)),{update(_){e=_,d()},destroy(){var _;s&&((_=document.querySelector(s))==null||_.removeEventListener("scroll",m))}}}const yo=`
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
</div>`,To=`
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

<Table config={groupConfig} />`,Xl=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Co=`
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

<Table config={usersConfig} />`,Ur=`
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
				
export const usersStore = writable<User[]>(users);`,xo=`
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
/>`,Io=`
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

<Table config={usersBDConfig} />`,Vo=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,So=`
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
}`,Uo=`
export interface Columns {
	[key: string]: Column;
}`,Ao=`
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
}`,ko=`
export interface ColumnInstructions {
	toStringFn?: (any) => string; // value by default
	toSortableValueFn?: (any) => string | number; // value by default
	toFilterableValueFn?: (any) => string | number | Date; // value by default
	renderComponent?: typeof SvelteComponent; // null by default
}`,Ro=`
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

<Table config={usersMissingIDsConfig} />`,Fo=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,Go=`
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
`,Bo=`
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
`,Oo=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Lo=`
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
<\/script>`,Mo=`
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
`,Po=`
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
`,No=`
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
`,jo=`
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
<Modal />`,Ho=`
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
`,zo=`
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
`,Wo=`
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
`,qo=`
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
`,Jo=`
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
`;function Yo(f){let e,r,s,l="TableConfig <T>",u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B,O,J,Q,Y,ee,F,M,j,K="Writable <T[]>",pe,le,se,Le,je,ye,st,ce,de,oe,Se,Ae,Te,he,rt,He,te,me,Ce,ze,ct,Fe,ve,ae,xe,Ge,Ke,ue,dt,ut,ge,Ue,be,Ie,Be,_e,We,ft,pt,Oe,Qe,qe,Xe,et,ie,Me,ht,mt,$t,vt,Je,Et,Bt,gt,Dt,Ye,fe,$e,Pe,wt,qt,lt,ot,Jt,yt,at,Ot,ke,nt,Tt,Yt,Ze,Re,Ct,Zt,xt,it,It,Kt,bt,Ve,X,Vt,Qt,Pt,_t,Ne,tt,Xt,es,Lt,St,Ut,Mt,ts,ss,At,kt,rs,ws,us,ls,$s="SvelteComponent",fs,ys,Nt,Ts,jt,ps,Cs,xs,Ht,Rt,zt,Is,Vs,os,Es="number[]",hs,Ss,as,Us,As,Ft,Gt,ns,ks,Rs,Wt,Ds="number",Fs,Gs,is,Rr,Fr,ms,vs,Bs,Gr,Br,Os,Hr="Columns",Or,Lr,gs,Mr,Ls,Pr,Nr,Js,jr,zr;return $=new Ws({props:{language:"ts",code:So}}),{c(){e=n("div"),r=n("div"),s=n("h3"),u=p(l),d=g(),v=n("button"),m=p("Show type details"),D=g(),_=n("div"),C=p("Underlined attributes are "),y=n("strong"),T=p("required"),I=p("."),U=g(),V=n("div"),H($.$$.fragment),x=g(),w=n("div"),E=n("div"),S=n("div"),P=p("id:"),A=g(),k=n("div"),R=p("string"),N=g(),B=n("p"),O=p("Unique identifier for the table to generate unique IDs for the filters."),J=g(),Q=n("div"),Y=n("div"),ee=n("div"),F=p("data:"),M=g(),j=n("div"),pe=p(K),le=g(),se=n("p"),Le=p("A writable store of the type "),je=n("code"),ye=p("T[]"),st=p(". Any changes in the store will be reflected in the table."),ce=g(),de=n("div"),oe=n("div"),Se=n("div"),Ae=p("exportable:"),Te=g(),he=n("div"),rt=p("boolean"),He=g(),te=n("p"),me=p("Whether the table should be exportable to CSV. "),Ce=n("code"),ze=p("false"),ct=p(" by default."),Fe=g(),ve=n("div"),ae=n("div"),xe=n("div"),Ge=p("toggle:"),Ke=g(),ue=n("div"),dt=p("boolean"),ut=g(),ge=n("p"),Ue=p("Whether the "),be=n("code"),Ie=p("fitToScreen"),Be=p(`
			toggle should be visible.
			`),_e=n("code"),We=p("false"),ft=p(" by default."),pt=g(),Oe=n("div"),Qe=n("div"),qe=n("div"),Xe=p("resizable:"),et=g(),ie=n("div"),Me=n("i"),ht=p('"rows"'),mt=p(", "),$t=n("i"),vt=p('"columns"'),Je=p(" or "),Et=n("i"),Bt=p('"both"'),gt=g(),Dt=n("p"),Ye=p("Whether rows, columns or both should be resizable. Not resizable by default."),fe=g(),$e=n("div"),Pe=n("div"),wt=n("div"),qt=p("rowHeight:"),lt=g(),ot=n("div"),Jt=p("number"),yt=g(),at=n("p"),Ot=p("Sets height for the rows in pixels. If "),ke=n("code"),nt=p("resizable"),Tt=p(' is set to "both" or "rows", this value can be interpreted as minimum height for the rows.'),Yt=g(),Ze=n("div"),Re=n("div"),Ct=n("div"),Zt=p("fitToScreen:"),xt=g(),it=n("div"),It=p("boolean"),Kt=g(),bt=n("p"),Ve=p("Whether the table takes the whole width. "),X=n("code"),Vt=p("true"),Qt=p(" by default."),Pt=g(),_t=n("div"),Ne=n("div"),tt=n("div"),Xt=p("height:"),es=g(),Lt=n("div"),St=p("number"),Ut=g(),Mt=n("p"),ts=p("Custom height for the table in pixels."),ss=g(),At=n("div"),kt=n("div"),rs=n("div"),ws=p("optionsComponent:"),us=g(),ls=n("div"),fs=p($s),ys=g(),Nt=n("p"),Ts=p(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),jt=n("code"),ps=p("optionsComponent"),Cs=p(" was provided."),xs=g(),Ht=n("div"),Rt=n("div"),zt=n("div"),Is=p("pageSizes:"),Vs=g(),os=n("div"),hs=p(Es),Ss=g(),as=n("p"),Us=p("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),As=g(),Ft=n("div"),Gt=n("div"),ns=n("div"),ks=p("defaultPageSize:"),Rs=g(),Wt=n("div"),Fs=p(Ds),Gs=g(),is=n("p"),Rr=p(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Fr=g(),ms=n("div"),vs=n("div"),Bs=n("div"),Gr=p("columns:"),Br=g(),Os=n("div"),Or=p(Hr),Lr=g(),gs=n("p"),Mr=p("An object with configuration for specific columns. "),Ls=n("code"),Pr=p("Columns"),Nr=p(`
			object is described below.`),this.h()},l(cs){e=i(cs,"DIV",{class:!0});var ne=c(e);r=i(ne,"DIV",{class:!0,id:!0});var bs=c(r);s=i(bs,"H3",{class:!0});var Wr=c(s);u=h(Wr,l),Wr.forEach(o),d=b(bs),v=i(bs,"BUTTON",{class:!0});var qr=c(v);m=h(qr,"Show type details"),qr.forEach(o),D=b(bs),_=i(bs,"DIV",{class:!0});var Ys=c(_);C=h(Ys,"Underlined attributes are "),y=i(Ys,"STRONG",{});var Jr=c(y);T=h(Jr,"required"),Jr.forEach(o),I=h(Ys,"."),Ys.forEach(o),U=b(bs),V=i(bs,"DIV",{"data-popup":!0});var Yr=c(V);z($.$$.fragment,Yr),Yr.forEach(o),bs.forEach(o),x=b(ne),w=i(ne,"DIV",{class:!0});var Zs=c(w);E=i(Zs,"DIV",{class:!0});var Ks=c(E);S=i(Ks,"DIV",{class:!0});var Zr=c(S);P=h(Zr,"id:"),Zr.forEach(o),A=b(Ks),k=i(Ks,"DIV",{class:!0});var Kr=c(k);R=h(Kr,"string"),Kr.forEach(o),Ks.forEach(o),N=b(Zs),B=i(Zs,"P",{class:!0});var Qr=c(B);O=h(Qr,"Unique identifier for the table to generate unique IDs for the filters."),Qr.forEach(o),Zs.forEach(o),J=b(ne),Q=i(ne,"DIV",{class:!0});var Qs=c(Q);Y=i(Qs,"DIV",{class:!0});var Xs=c(Y);ee=i(Xs,"DIV",{class:!0});var Xr=c(ee);F=h(Xr,"data:"),Xr.forEach(o),M=b(Xs),j=i(Xs,"DIV",{class:!0});var el=c(j);pe=h(el,K),el.forEach(o),Xs.forEach(o),le=b(Qs),se=i(Qs,"P",{class:!0});var er=c(se);Le=h(er,"A writable store of the type "),je=i(er,"CODE",{class:!0});var tl=c(je);ye=h(tl,"T[]"),tl.forEach(o),st=h(er,". Any changes in the store will be reflected in the table."),er.forEach(o),Qs.forEach(o),ce=b(ne),de=i(ne,"DIV",{class:!0});var tr=c(de);oe=i(tr,"DIV",{class:!0});var sr=c(oe);Se=i(sr,"DIV",{class:!0});var sl=c(Se);Ae=h(sl,"exportable:"),sl.forEach(o),Te=b(sr),he=i(sr,"DIV",{class:!0});var rl=c(he);rt=h(rl,"boolean"),rl.forEach(o),sr.forEach(o),He=b(tr),te=i(tr,"P",{class:!0});var rr=c(te);me=h(rr,"Whether the table should be exportable to CSV. "),Ce=i(rr,"CODE",{class:!0});var ll=c(Ce);ze=h(ll,"false"),ll.forEach(o),ct=h(rr," by default."),rr.forEach(o),tr.forEach(o),Fe=b(ne),ve=i(ne,"DIV",{class:!0});var lr=c(ve);ae=i(lr,"DIV",{class:!0});var or=c(ae);xe=i(or,"DIV",{class:!0});var ol=c(xe);Ge=h(ol,"toggle:"),ol.forEach(o),Ke=b(or),ue=i(or,"DIV",{class:!0});var al=c(ue);dt=h(al,"boolean"),al.forEach(o),or.forEach(o),ut=b(lr),ge=i(lr,"P",{class:!0});var Ms=c(ge);Ue=h(Ms,"Whether the "),be=i(Ms,"CODE",{class:!0});var nl=c(be);Ie=h(nl,"fitToScreen"),nl.forEach(o),Be=h(Ms,`
			toggle should be visible.
			`),_e=i(Ms,"CODE",{class:!0});var il=c(_e);We=h(il,"false"),il.forEach(o),ft=h(Ms," by default."),Ms.forEach(o),lr.forEach(o),pt=b(ne),Oe=i(ne,"DIV",{class:!0});var ar=c(Oe);Qe=i(ar,"DIV",{class:!0});var nr=c(Qe);qe=i(nr,"DIV",{class:!0});var cl=c(qe);Xe=h(cl,"resizable:"),cl.forEach(o),et=b(nr),ie=i(nr,"DIV",{class:!0});var Ps=c(ie);Me=i(Ps,"I",{});var dl=c(Me);ht=h(dl,'"rows"'),dl.forEach(o),mt=h(Ps,", "),$t=i(Ps,"I",{});var ul=c($t);vt=h(ul,'"columns"'),ul.forEach(o),Je=h(Ps," or "),Et=i(Ps,"I",{});var fl=c(Et);Bt=h(fl,'"both"'),fl.forEach(o),Ps.forEach(o),nr.forEach(o),gt=b(ar),Dt=i(ar,"P",{class:!0});var pl=c(Dt);Ye=h(pl,"Whether rows, columns or both should be resizable. Not resizable by default."),pl.forEach(o),ar.forEach(o),fe=b(ne),$e=i(ne,"DIV",{class:!0});var ir=c($e);Pe=i(ir,"DIV",{class:!0});var cr=c(Pe);wt=i(cr,"DIV",{class:!0});var hl=c(wt);qt=h(hl,"rowHeight:"),hl.forEach(o),lt=b(cr),ot=i(cr,"DIV",{class:!0});var ml=c(ot);Jt=h(ml,"number"),ml.forEach(o),cr.forEach(o),yt=b(ir),at=i(ir,"P",{class:!0});var dr=c(at);Ot=h(dr,"Sets height for the rows in pixels. If "),ke=i(dr,"CODE",{class:!0});var vl=c(ke);nt=h(vl,"resizable"),vl.forEach(o),Tt=h(dr,' is set to "both" or "rows", this value can be interpreted as minimum height for the rows.'),dr.forEach(o),ir.forEach(o),Yt=b(ne),Ze=i(ne,"DIV",{class:!0});var ur=c(Ze);Re=i(ur,"DIV",{class:!0});var fr=c(Re);Ct=i(fr,"DIV",{class:!0});var gl=c(Ct);Zt=h(gl,"fitToScreen:"),gl.forEach(o),xt=b(fr),it=i(fr,"DIV",{class:!0});var bl=c(it);It=h(bl,"boolean"),bl.forEach(o),fr.forEach(o),Kt=b(ur),bt=i(ur,"P",{class:!0});var pr=c(bt);Ve=h(pr,"Whether the table takes the whole width. "),X=i(pr,"CODE",{class:!0});var _l=c(X);Vt=h(_l,"true"),_l.forEach(o),Qt=h(pr," by default."),pr.forEach(o),ur.forEach(o),Pt=b(ne),_t=i(ne,"DIV",{class:!0});var hr=c(_t);Ne=i(hr,"DIV",{class:!0});var mr=c(Ne);tt=i(mr,"DIV",{class:!0});var $l=c(tt);Xt=h($l,"height:"),$l.forEach(o),es=b(mr),Lt=i(mr,"DIV",{class:!0});var El=c(Lt);St=h(El,"number"),El.forEach(o),mr.forEach(o),Ut=b(hr),Mt=i(hr,"P",{class:!0});var Dl=c(Mt);ts=h(Dl,"Custom height for the table in pixels."),Dl.forEach(o),hr.forEach(o),ss=b(ne),At=i(ne,"DIV",{class:!0});var vr=c(At);kt=i(vr,"DIV",{class:!0});var gr=c(kt);rs=i(gr,"DIV",{class:!0});var wl=c(rs);ws=h(wl,"optionsComponent:"),wl.forEach(o),us=b(gr),ls=i(gr,"DIV",{class:!0});var yl=c(ls);fs=h(yl,$s),yl.forEach(o),gr.forEach(o),ys=b(vr),Nt=i(vr,"P",{class:!0});var br=c(Nt);Ts=h(br,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),jt=i(br,"CODE",{class:!0});var Tl=c(jt);ps=h(Tl,"optionsComponent"),Tl.forEach(o),Cs=h(br," was provided."),br.forEach(o),vr.forEach(o),xs=b(ne),Ht=i(ne,"DIV",{class:!0});var _r=c(Ht);Rt=i(_r,"DIV",{class:!0});var $r=c(Rt);zt=i($r,"DIV",{class:!0});var Cl=c(zt);Is=h(Cl,"pageSizes:"),Cl.forEach(o),Vs=b($r),os=i($r,"DIV",{class:!0});var xl=c(os);hs=h(xl,Es),xl.forEach(o),$r.forEach(o),Ss=b(_r),as=i(_r,"P",{class:!0});var Il=c(as);Us=h(Il,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Il.forEach(o),_r.forEach(o),As=b(ne),Ft=i(ne,"DIV",{class:!0});var Er=c(Ft);Gt=i(Er,"DIV",{class:!0});var Dr=c(Gt);ns=i(Dr,"DIV",{class:!0});var Vl=c(ns);ks=h(Vl,"defaultPageSize:"),Vl.forEach(o),Rs=b(Dr),Wt=i(Dr,"DIV",{class:!0});var Sl=c(Wt);Fs=h(Sl,Ds),Sl.forEach(o),Dr.forEach(o),Gs=b(Er),is=i(Er,"P",{class:!0});var Ul=c(is);Rr=h(Ul,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Ul.forEach(o),Er.forEach(o),Fr=b(ne),ms=i(ne,"DIV",{class:!0});var wr=c(ms);vs=i(wr,"DIV",{class:!0});var yr=c(vs);Bs=i(yr,"DIV",{class:!0});var Al=c(Bs);Gr=h(Al,"columns:"),Al.forEach(o),Br=b(yr),Os=i(yr,"DIV",{class:!0});var kl=c(Os);Or=h(kl,Hr),kl.forEach(o),yr.forEach(o),Lr=b(wr),gs=i(wr,"P",{class:!0});var Tr=c(gs);Mr=h(Tr,"An object with configuration for specific columns. "),Ls=i(Tr,"CODE",{class:!0});var Rl=c(Ls);Pr=h(Rl,"Columns"),Rl.forEach(o),Nr=h(Tr,`
			object is described below.`),Tr.forEach(o),wr.forEach(o),ne.forEach(o),this.h()},h(){a(s,"class","font-semibold relative w-max h3"),a(v,"class","btn variant-ghost-primary w-min"),a(_,"class","italic div"),a(V,"data-popup","popupClickTableConfig"),a(r,"class","grid gap-2"),a(r,"id","tableConfig"),a(S,"class","italic"),a(k,"class","font-bold"),a(E,"class","flex gap-2 underline"),a(B,"class","text-xl pl-10"),a(w,"class","items-center"),a(ee,"class","italic"),a(j,"class","font-bold"),a(Y,"class","flex gap-2 underline"),a(je,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(se,"class","text-xl pl-10"),a(Q,"class","items-center"),a(Se,"class","italic"),a(he,"class","font-bold"),a(oe,"class","flex gap-2"),a(Ce,"class","!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500"),a(te,"class","text-xl pl-10"),a(de,"class","items-center"),a(xe,"class","italic"),a(ue,"class","font-bold"),a(ae,"class","flex gap-2"),a(be,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(_e,"class","!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500"),a(ge,"class","text-xl pl-10"),a(ve,"class","items-center"),a(qe,"class","italic"),a(ie,"class","font-bold"),a(Qe,"class","flex gap-2"),a(Dt,"class","text-xl pl-10"),a(Oe,"class","items-center"),a(wt,"class","italic"),a(ot,"class","font-bold"),a(Pe,"class","flex gap-2"),a(ke,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(at,"class","text-xl pl-10"),a($e,"class","items-center"),a(Ct,"class","italic"),a(it,"class","font-bold"),a(Re,"class","flex gap-2"),a(X,"class","!text-xl bg-blue-100 dark:bg-blue-600/30 rounded-md p-0.5 text-blue-500"),a(bt,"class","text-xl pl-10"),a(Ze,"class","items-center"),a(tt,"class","italic"),a(Lt,"class","font-bold"),a(Ne,"class","flex gap-2"),a(Mt,"class","text-xl pl-10"),a(_t,"class","items-center"),a(rs,"class","italic"),a(ls,"class","font-bold"),a(kt,"class","flex gap-2"),a(jt,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(Nt,"class","text-xl pl-10"),a(At,"class","items-center"),a(zt,"class","italic"),a(os,"class","font-bold"),a(Rt,"class","flex gap-2"),a(as,"class","text-xl pl-10"),a(Ht,"class","items-center"),a(ns,"class","italic"),a(Wt,"class","font-bold"),a(Gt,"class","flex gap-2"),a(is,"class","text-xl pl-10"),a(Ft,"class","items-center"),a(Bs,"class","italic"),a(Os,"class","font-bold"),a(vs,"class","flex gap-2"),a(Ls,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(gs,"class","text-xl pl-10"),a(ms,"class","items-center"),a(e,"class","grid gap-5")},m(cs,ne){Z(cs,e,ne),t(e,r),t(r,s),t(s,u),t(r,d),t(r,v),t(v,m),t(r,D),t(r,_),t(_,C),t(_,y),t(y,T),t(_,I),t(r,U),t(r,V),W($,V,null),t(e,x),t(e,w),t(w,E),t(E,S),t(S,P),t(E,A),t(E,k),t(k,R),t(w,N),t(w,B),t(B,O),t(e,J),t(e,Q),t(Q,Y),t(Y,ee),t(ee,F),t(Y,M),t(Y,j),t(j,pe),t(Q,le),t(Q,se),t(se,Le),t(se,je),t(je,ye),t(se,st),t(e,ce),t(e,de),t(de,oe),t(oe,Se),t(Se,Ae),t(oe,Te),t(oe,he),t(he,rt),t(de,He),t(de,te),t(te,me),t(te,Ce),t(Ce,ze),t(te,ct),t(e,Fe),t(e,ve),t(ve,ae),t(ae,xe),t(xe,Ge),t(ae,Ke),t(ae,ue),t(ue,dt),t(ve,ut),t(ve,ge),t(ge,Ue),t(ge,be),t(be,Ie),t(ge,Be),t(ge,_e),t(_e,We),t(ge,ft),t(e,pt),t(e,Oe),t(Oe,Qe),t(Qe,qe),t(qe,Xe),t(Qe,et),t(Qe,ie),t(ie,Me),t(Me,ht),t(ie,mt),t(ie,$t),t($t,vt),t(ie,Je),t(ie,Et),t(Et,Bt),t(Oe,gt),t(Oe,Dt),t(Dt,Ye),t(e,fe),t(e,$e),t($e,Pe),t(Pe,wt),t(wt,qt),t(Pe,lt),t(Pe,ot),t(ot,Jt),t($e,yt),t($e,at),t(at,Ot),t(at,ke),t(ke,nt),t(at,Tt),t(e,Yt),t(e,Ze),t(Ze,Re),t(Re,Ct),t(Ct,Zt),t(Re,xt),t(Re,it),t(it,It),t(Ze,Kt),t(Ze,bt),t(bt,Ve),t(bt,X),t(X,Vt),t(bt,Qt),t(e,Pt),t(e,_t),t(_t,Ne),t(Ne,tt),t(tt,Xt),t(Ne,es),t(Ne,Lt),t(Lt,St),t(_t,Ut),t(_t,Mt),t(Mt,ts),t(e,ss),t(e,At),t(At,kt),t(kt,rs),t(rs,ws),t(kt,us),t(kt,ls),t(ls,fs),t(At,ys),t(At,Nt),t(Nt,Ts),t(Nt,jt),t(jt,ps),t(Nt,Cs),t(e,xs),t(e,Ht),t(Ht,Rt),t(Rt,zt),t(zt,Is),t(Rt,Vs),t(Rt,os),t(os,hs),t(Ht,Ss),t(Ht,as),t(as,Us),t(e,As),t(e,Ft),t(Ft,Gt),t(Gt,ns),t(ns,ks),t(Gt,Rs),t(Gt,Wt),t(Wt,Fs),t(Ft,Gs),t(Ft,is),t(is,Rr),t(e,Fr),t(e,ms),t(ms,vs),t(vs,Bs),t(Bs,Gr),t(vs,Br),t(vs,Os),t(Os,Or),t(ms,Lr),t(ms,gs),t(gs,Mr),t(gs,Ls),t(Ls,Pr),t(gs,Nr),Js=!0,jr||(zr=zs(Sr.call(null,v,f[0])),jr=!0)},p:re,i(cs){Js||(G($.$$.fragment,cs),Js=!0)},o(cs){L($.$$.fragment,cs),Js=!1},d(cs){cs&&o(e),q($),jr=!1,zr()}}}function Zo(f){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class Ko extends Ee{constructor(e){super(),De(this,e,Zo,Yo,we,{})}}function Qo(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B;return _=new Ws({props:{language:"ts",code:Uo}}),{c(){e=n("div"),r=n("div"),s=n("h3"),l=p("Columns"),u=g(),d=n("button"),v=p("Show type details"),m=g(),D=n("div"),H(_.$$.fragment),C=g(),y=n("div"),T=n("div"),I=n("div"),U=p("[key: "),V=n("strong"),$=p("string"),x=p("]:"),w=g(),E=n("div"),S=p("Column"),P=g(),A=n("p"),k=p(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(O){e=i(O,"DIV",{class:!0});var J=c(e);r=i(J,"DIV",{class:!0,id:!0});var Q=c(r);s=i(Q,"H3",{class:!0});var Y=c(s);l=h(Y,"Columns"),Y.forEach(o),u=b(Q),d=i(Q,"BUTTON",{class:!0});var ee=c(d);v=h(ee,"Show type details"),ee.forEach(o),m=b(Q),D=i(Q,"DIV",{"data-popup":!0});var F=c(D);z(_.$$.fragment,F),F.forEach(o),Q.forEach(o),C=b(J),y=i(J,"DIV",{class:!0});var M=c(y);T=i(M,"DIV",{class:!0});var j=c(T);I=i(j,"DIV",{class:!0});var K=c(I);U=h(K,"[key: "),V=i(K,"STRONG",{});var pe=c(V);$=h(pe,"string"),pe.forEach(o),x=h(K,"]:"),K.forEach(o),w=b(j),E=i(j,"DIV",{class:!0});var le=c(E);S=h(le,"Column"),le.forEach(o),j.forEach(o),P=b(M),A=i(M,"P",{class:!0});var se=c(A);k=h(se,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),se.forEach(o),M.forEach(o),J.forEach(o),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(D,"data-popup","popupClickColumns"),a(r,"class","grid gap-2"),a(r,"id","columns"),a(I,"class","italic"),a(E,"class","font-bold"),a(T,"class","flex gap-2"),a(A,"class","text-xl pl-10"),a(y,"class","items-center"),a(e,"class","grid gap-5")},m(O,J){Z(O,e,J),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,m),t(r,D),W(_,D,null),t(e,C),t(e,y),t(y,T),t(T,I),t(I,U),t(I,V),t(V,$),t(I,x),t(T,w),t(T,E),t(E,S),t(y,P),t(y,A),t(A,k),R=!0,N||(B=zs(Sr.call(null,d,f[0])),N=!0)},p:re,i(O){R||(G(_.$$.fragment,O),R=!0)},o(O){L(_.$$.fragment,O),R=!1},d(O){O&&o(e),q(_),N=!1,B()}}}function Xo(f){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class ea extends Ee{constructor(e){super(),De(this,e,Xo,Qo,we,{})}}function ta(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B,O,J,Q,Y,ee,F,M,j,K,pe,le,se,Le,je,ye,st,ce,de,oe,Se,Ae,Te,he,rt,He,te,me,Ce,ze,ct,Fe,ve,ae,xe,Ge,Ke,ue,dt,ut,ge,Ue,be,Ie,Be,_e,We,ft,pt,Oe,Qe,qe,Xe,et,ie,Me,ht,mt,$t,vt,Je,Et,Bt,gt,Dt,Ye,fe,$e,Pe,wt,qt,lt,ot,Jt,yt,at,Ot,ke,nt,Tt,Yt,Ze,Re,Ct,Zt,xt,it,It,Kt,bt;return _=new Ws({props:{language:"ts",code:Ao}}),{c(){e=n("div"),r=n("div"),s=n("h3"),l=p("Column"),u=g(),d=n("button"),v=p("Show type details"),m=g(),D=n("div"),H(_.$$.fragment),C=g(),y=n("div"),T=n("div"),I=n("div"),U=p("header:"),V=g(),$=n("div"),x=p("string"),w=g(),E=n("p"),S=p(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),P=g(),A=n("div"),k=n("div"),R=n("div"),N=p("minWidth:"),B=g(),O=n("div"),J=p("number"),Q=g(),Y=n("p"),ee=p("Minimum width in pixels for the column. By default, the column will be as wide as the content."),F=g(),M=n("div"),j=n("div"),K=n("div"),pe=p("fixedWidth:"),le=g(),se=n("div"),Le=p("number"),je=g(),ye=n("p"),st=p(`Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the `),ce=n("code"),de=p("resizable"),oe=p(" property for the column."),Se=g(),Ae=n("div"),Te=n("div"),he=n("div"),rt=p("exclude:"),He=g(),te=n("div"),me=p("boolean"),Ce=g(),ze=n("p"),ct=p(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Fe=g(),ve=n("div"),ae=n("div"),xe=n("div"),Ge=p("disableFiltering:"),Ke=g(),ue=n("div"),dt=p("boolean"),ut=g(),ge=n("p"),Ue=p("Whether to disable filtering for the column or not. By default, filtering is enabled."),be=g(),Ie=n("div"),Be=n("div"),_e=n("div"),We=p("disableSorting:"),ft=g(),pt=n("div"),Oe=p("boolean"),Qe=g(),qe=n("p"),Xe=p("Whether to disable sorting for the column or not. By default, sorting is enabled."),et=g(),ie=n("div"),Me=n("div"),ht=n("div"),mt=p("colFitlerFn:"),$t=g(),vt=n("div"),Je=n("a"),Et=p("ColumnFilterFn"),Bt=g(),gt=n("p"),Dt=p(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Ye=g(),fe=n("div"),$e=n("div"),Pe=n("div"),wt=p("colFilterComponent:"),qt=g(),lt=n("div"),ot=p("SvelteComponent"),Jt=g(),yt=n("p"),at=p(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Ot=g(),ke=n("div"),nt=n("div"),Tt=n("div"),Yt=p("instructions:"),Ze=g(),Re=n("div"),Ct=p("ColumnInstructions"),Zt=g(),xt=n("p"),it=p("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(Ve){e=i(Ve,"DIV",{class:!0});var X=c(e);r=i(X,"DIV",{class:!0,id:!0});var Vt=c(r);s=i(Vt,"H3",{class:!0});var Qt=c(s);l=h(Qt,"Column"),Qt.forEach(o),u=b(Vt),d=i(Vt,"BUTTON",{class:!0});var Pt=c(d);v=h(Pt,"Show type details"),Pt.forEach(o),m=b(Vt),D=i(Vt,"DIV",{"data-popup":!0});var _t=c(D);z(_.$$.fragment,_t),_t.forEach(o),Vt.forEach(o),C=b(X),y=i(X,"DIV",{class:!0});var Ne=c(y);T=i(Ne,"DIV",{class:!0});var tt=c(T);I=i(tt,"DIV",{class:!0});var Xt=c(I);U=h(Xt,"header:"),Xt.forEach(o),V=b(tt),$=i(tt,"DIV",{class:!0});var es=c($);x=h(es,"string"),es.forEach(o),tt.forEach(o),w=b(Ne),E=i(Ne,"P",{class:!0});var Lt=c(E);S=h(Lt,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),Lt.forEach(o),Ne.forEach(o),P=b(X),A=i(X,"DIV",{class:!0});var St=c(A);k=i(St,"DIV",{class:!0});var Ut=c(k);R=i(Ut,"DIV",{class:!0});var Mt=c(R);N=h(Mt,"minWidth:"),Mt.forEach(o),B=b(Ut),O=i(Ut,"DIV",{class:!0});var ts=c(O);J=h(ts,"number"),ts.forEach(o),Ut.forEach(o),Q=b(St),Y=i(St,"P",{class:!0});var ss=c(Y);ee=h(ss,"Minimum width in pixels for the column. By default, the column will be as wide as the content."),ss.forEach(o),St.forEach(o),F=b(X),M=i(X,"DIV",{class:!0});var At=c(M);j=i(At,"DIV",{class:!0});var kt=c(j);K=i(kt,"DIV",{class:!0});var rs=c(K);pe=h(rs,"fixedWidth:"),rs.forEach(o),le=b(kt),se=i(kt,"DIV",{class:!0});var ws=c(se);Le=h(ws,"number"),ws.forEach(o),kt.forEach(o),je=b(At),ye=i(At,"P",{class:!0});var us=c(ye);st=h(us,`Fixed width in pixels for the column. By default, the column will be as wide as the content.
			Setting this will override the `),ce=i(us,"CODE",{class:!0});var ls=c(ce);de=h(ls,"resizable"),ls.forEach(o),oe=h(us," property for the column."),us.forEach(o),At.forEach(o),Se=b(X),Ae=i(X,"DIV",{class:!0});var $s=c(Ae);Te=i($s,"DIV",{class:!0});var fs=c(Te);he=i(fs,"DIV",{class:!0});var ys=c(he);rt=h(ys,"exclude:"),ys.forEach(o),He=b(fs),te=i(fs,"DIV",{class:!0});var Nt=c(te);me=h(Nt,"boolean"),Nt.forEach(o),fs.forEach(o),Ce=b($s),ze=i($s,"P",{class:!0});var Ts=c(ze);ct=h(Ts,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Ts.forEach(o),$s.forEach(o),Fe=b(X),ve=i(X,"DIV",{class:!0});var jt=c(ve);ae=i(jt,"DIV",{class:!0});var ps=c(ae);xe=i(ps,"DIV",{class:!0});var Cs=c(xe);Ge=h(Cs,"disableFiltering:"),Cs.forEach(o),Ke=b(ps),ue=i(ps,"DIV",{class:!0});var xs=c(ue);dt=h(xs,"boolean"),xs.forEach(o),ps.forEach(o),ut=b(jt),ge=i(jt,"P",{class:!0});var Ht=c(ge);Ue=h(Ht,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Ht.forEach(o),jt.forEach(o),be=b(X),Ie=i(X,"DIV",{class:!0});var Rt=c(Ie);Be=i(Rt,"DIV",{class:!0});var zt=c(Be);_e=i(zt,"DIV",{class:!0});var Is=c(_e);We=h(Is,"disableSorting:"),Is.forEach(o),ft=b(zt),pt=i(zt,"DIV",{class:!0});var Vs=c(pt);Oe=h(Vs,"boolean"),Vs.forEach(o),zt.forEach(o),Qe=b(Rt),qe=i(Rt,"P",{class:!0});var os=c(qe);Xe=h(os,"Whether to disable sorting for the column or not. By default, sorting is enabled."),os.forEach(o),Rt.forEach(o),et=b(X),ie=i(X,"DIV",{class:!0});var Es=c(ie);Me=i(Es,"DIV",{class:!0});var hs=c(Me);ht=i(hs,"DIV",{class:!0});var Ss=c(ht);mt=h(Ss,"colFitlerFn:"),Ss.forEach(o),$t=b(hs),vt=i(hs,"DIV",{class:!0});var as=c(vt);Je=i(as,"A",{href:!0});var Us=c(Je);Et=h(Us,"ColumnFilterFn"),Us.forEach(o),as.forEach(o),hs.forEach(o),Bt=b(Es),gt=i(Es,"P",{class:!0});var As=c(gt);Dt=h(As,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),As.forEach(o),Es.forEach(o),Ye=b(X),fe=i(X,"DIV",{class:!0});var Ft=c(fe);$e=i(Ft,"DIV",{class:!0});var Gt=c($e);Pe=i(Gt,"DIV",{class:!0});var ns=c(Pe);wt=h(ns,"colFilterComponent:"),ns.forEach(o),qt=b(Gt),lt=i(Gt,"DIV",{class:!0});var ks=c(lt);ot=h(ks,"SvelteComponent"),ks.forEach(o),Gt.forEach(o),Jt=b(Ft),yt=i(Ft,"P",{class:!0});var Rs=c(yt);at=h(Rs,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Rs.forEach(o),Ft.forEach(o),Ot=b(X),ke=i(X,"DIV",{class:!0});var Wt=c(ke);nt=i(Wt,"DIV",{class:!0});var Ds=c(nt);Tt=i(Ds,"DIV",{class:!0});var Fs=c(Tt);Yt=h(Fs,"instructions:"),Fs.forEach(o),Ze=b(Ds),Re=i(Ds,"DIV",{class:!0});var Gs=c(Re);Ct=h(Gs,"ColumnInstructions"),Gs.forEach(o),Ds.forEach(o),Zt=b(Wt),xt=i(Wt,"P",{class:!0});var is=c(xt);it=h(is,"Configuration for the column's appearance, sorting and filtering functionalities."),is.forEach(o),Wt.forEach(o),X.forEach(o),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(D,"data-popup","popupClickColumn"),a(r,"class","grid gap-2"),a(r,"id","column"),a(I,"class","italic"),a($,"class","font-bold"),a(T,"class","flex gap-2"),a(E,"class","text-xl pl-10"),a(y,"class","items-center"),a(R,"class","italic"),a(O,"class","font-bold"),a(k,"class","flex gap-2"),a(Y,"class","text-xl pl-10"),a(A,"class","items-center"),a(K,"class","italic"),a(se,"class","font-bold"),a(j,"class","flex gap-2"),a(ce,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(ye,"class","text-xl pl-10"),a(M,"class","items-center"),a(he,"class","italic"),a(te,"class","font-bold"),a(Te,"class","flex gap-2"),a(ze,"class","text-xl pl-10"),a(Ae,"class","items-center"),a(xe,"class","italic"),a(ue,"class","font-bold"),a(ae,"class","flex gap-2"),a(ge,"class","text-xl pl-10"),a(ve,"class","items-center"),a(_e,"class","italic"),a(pt,"class","font-bold"),a(Be,"class","flex gap-2"),a(qe,"class","text-xl pl-10"),a(Ie,"class","items-center"),a(ht,"class","italic"),a(Je,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),a(vt,"class","font-bold"),a(Me,"class","flex gap-2"),a(gt,"class","text-xl pl-10"),a(ie,"class","items-center"),a(Pe,"class","italic"),a(lt,"class","font-bold"),a($e,"class","flex gap-2"),a(yt,"class","text-xl pl-10"),a(fe,"class","items-center"),a(Tt,"class","italic"),a(Re,"class","font-bold"),a(nt,"class","flex gap-2"),a(xt,"class","text-xl pl-10"),a(ke,"class","items-center"),a(e,"class","grid gap-5")},m(Ve,X){Z(Ve,e,X),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,m),t(r,D),W(_,D,null),t(e,C),t(e,y),t(y,T),t(T,I),t(I,U),t(T,V),t(T,$),t($,x),t(y,w),t(y,E),t(E,S),t(e,P),t(e,A),t(A,k),t(k,R),t(R,N),t(k,B),t(k,O),t(O,J),t(A,Q),t(A,Y),t(Y,ee),t(e,F),t(e,M),t(M,j),t(j,K),t(K,pe),t(j,le),t(j,se),t(se,Le),t(M,je),t(M,ye),t(ye,st),t(ye,ce),t(ce,de),t(ye,oe),t(e,Se),t(e,Ae),t(Ae,Te),t(Te,he),t(he,rt),t(Te,He),t(Te,te),t(te,me),t(Ae,Ce),t(Ae,ze),t(ze,ct),t(e,Fe),t(e,ve),t(ve,ae),t(ae,xe),t(xe,Ge),t(ae,Ke),t(ae,ue),t(ue,dt),t(ve,ut),t(ve,ge),t(ge,Ue),t(e,be),t(e,Ie),t(Ie,Be),t(Be,_e),t(_e,We),t(Be,ft),t(Be,pt),t(pt,Oe),t(Ie,Qe),t(Ie,qe),t(qe,Xe),t(e,et),t(e,ie),t(ie,Me),t(Me,ht),t(ht,mt),t(Me,$t),t(Me,vt),t(vt,Je),t(Je,Et),t(ie,Bt),t(ie,gt),t(gt,Dt),t(e,Ye),t(e,fe),t(fe,$e),t($e,Pe),t(Pe,wt),t($e,qt),t($e,lt),t(lt,ot),t(fe,Jt),t(fe,yt),t(yt,at),t(e,Ot),t(e,ke),t(ke,nt),t(nt,Tt),t(Tt,Yt),t(nt,Ze),t(nt,Re),t(Re,Ct),t(ke,Zt),t(ke,xt),t(xt,it),It=!0,Kt||(bt=zs(Sr.call(null,d,f[0])),Kt=!0)},p:re,i(Ve){It||(G(_.$$.fragment,Ve),It=!0)},o(Ve){L(_.$$.fragment,Ve),It=!1},d(Ve){Ve&&o(e),q(_),Kt=!1,bt()}}}function sa(f){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class ra extends Ee{constructor(e){super(),De(this,e,sa,ta,we,{})}}function la(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B,O,J,Q,Y,ee,F,M,j,K,pe,le,se,Le,je,ye,st,ce,de,oe,Se,Ae,Te,he,rt,He,te,me,Ce,ze,ct,Fe,ve,ae,xe,Ge,Ke,ue,dt,ut,ge,Ue,be,Ie,Be,_e,We,ft,pt,Oe,Qe,qe,Xe,et,ie,Me,ht,mt,$t,vt,Je,Et,Bt,gt,Dt;return _=new Ws({props:{language:"ts",code:ko}}),{c(){e=n("div"),r=n("div"),s=n("h3"),l=p("ColumnInstructions"),u=g(),d=n("button"),v=p("Show type details"),m=g(),D=n("div"),H(_.$$.fragment),C=g(),y=n("div"),T=n("div"),I=n("div"),U=p("toStringFn:"),V=g(),$=n("div"),x=p("(value: any) => string"),w=g(),E=n("p"),S=p("Custom toString function to be applied on the column."),P=g(),A=n("div"),k=n("div"),R=n("div"),N=p("toSortableValueFn:"),B=g(),O=n("div"),J=p("(value: any) => string | number"),Q=g(),Y=n("p"),ee=p("Custom function to return either a string or a number value to have a sortable column."),F=g(),M=n("div"),j=n("div"),K=n("div"),pe=p("toFilterableValueFn:"),le=g(),se=n("div"),Le=p("(value: any) => string | number | Date"),je=g(),ye=n("p"),st=p(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),ce=g(),de=n("div"),oe=n("div"),Se=n("div"),Ae=p("renderComponent:"),Te=g(),he=n("div"),rt=p("SvelteComponent"),He=g(),te=n("div"),me=n("p"),Ce=n("code"),ze=p("renderComponent"),ct=p(`
				overrides
				`),Fe=n("code"),ve=p("toStringFn"),ae=p("."),xe=g(),Ge=n("p"),Ke=p("Every "),ue=n("code"),dt=p("renderComponent"),ut=p(" will get 2 props:"),ge=g(),Ue=n("div"),be=n("div"),Ie=n("div"),Be=p("row:"),_e=g(),We=n("div"),ft=p("Object"),pt=g(),Oe=n("p"),Qe=p("The current row in the table. In other words, a single object from the data store."),qe=g(),Xe=n("div"),et=n("div"),ie=n("div"),Me=p("value:"),ht=g(),mt=n("div"),$t=p("any"),vt=g(),Je=n("p"),Et=p("The value of the current cell."),this.h()},l(Ye){e=i(Ye,"DIV",{class:!0});var fe=c(e);r=i(fe,"DIV",{class:!0,id:!0});var $e=c(r);s=i($e,"H3",{class:!0});var Pe=c(s);l=h(Pe,"ColumnInstructions"),Pe.forEach(o),u=b($e),d=i($e,"BUTTON",{class:!0});var wt=c(d);v=h(wt,"Show type details"),wt.forEach(o),m=b($e),D=i($e,"DIV",{"data-popup":!0});var qt=c(D);z(_.$$.fragment,qt),qt.forEach(o),$e.forEach(o),C=b(fe),y=i(fe,"DIV",{class:!0});var lt=c(y);T=i(lt,"DIV",{class:!0});var ot=c(T);I=i(ot,"DIV",{class:!0});var Jt=c(I);U=h(Jt,"toStringFn:"),Jt.forEach(o),V=b(ot),$=i(ot,"DIV",{class:!0});var yt=c($);x=h(yt,"(value: any) => string"),yt.forEach(o),ot.forEach(o),w=b(lt),E=i(lt,"P",{class:!0});var at=c(E);S=h(at,"Custom toString function to be applied on the column."),at.forEach(o),lt.forEach(o),P=b(fe),A=i(fe,"DIV",{class:!0});var Ot=c(A);k=i(Ot,"DIV",{class:!0});var ke=c(k);R=i(ke,"DIV",{class:!0});var nt=c(R);N=h(nt,"toSortableValueFn:"),nt.forEach(o),B=b(ke),O=i(ke,"DIV",{class:!0});var Tt=c(O);J=h(Tt,"(value: any) => string | number"),Tt.forEach(o),ke.forEach(o),Q=b(Ot),Y=i(Ot,"P",{class:!0});var Yt=c(Y);ee=h(Yt,"Custom function to return either a string or a number value to have a sortable column."),Yt.forEach(o),Ot.forEach(o),F=b(fe),M=i(fe,"DIV",{class:!0});var Ze=c(M);j=i(Ze,"DIV",{class:!0});var Re=c(j);K=i(Re,"DIV",{class:!0});var Ct=c(K);pe=h(Ct,"toFilterableValueFn:"),Ct.forEach(o),le=b(Re),se=i(Re,"DIV",{class:!0});var Zt=c(se);Le=h(Zt,"(value: any) => string | number | Date"),Zt.forEach(o),Re.forEach(o),je=b(Ze),ye=i(Ze,"P",{class:!0});var xt=c(ye);st=h(xt,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),xt.forEach(o),Ze.forEach(o),ce=b(fe),de=i(fe,"DIV",{class:!0});var it=c(de);oe=i(it,"DIV",{class:!0});var It=c(oe);Se=i(It,"DIV",{class:!0});var Kt=c(Se);Ae=h(Kt,"renderComponent:"),Kt.forEach(o),Te=b(It),he=i(It,"DIV",{class:!0});var bt=c(he);rt=h(bt,"SvelteComponent"),bt.forEach(o),It.forEach(o),He=b(it),te=i(it,"DIV",{class:!0});var Ve=c(te);me=i(Ve,"P",{class:!0});var X=c(me);Ce=i(X,"CODE",{class:!0});var Vt=c(Ce);ze=h(Vt,"renderComponent"),Vt.forEach(o),ct=h(X,`
				overrides
				`),Fe=i(X,"CODE",{class:!0});var Qt=c(Fe);ve=h(Qt,"toStringFn"),Qt.forEach(o),ae=h(X,"."),X.forEach(o),xe=b(Ve),Ge=i(Ve,"P",{class:!0});var Pt=c(Ge);Ke=h(Pt,"Every "),ue=i(Pt,"CODE",{class:!0});var _t=c(ue);dt=h(_t,"renderComponent"),_t.forEach(o),ut=h(Pt," will get 2 props:"),Pt.forEach(o),ge=b(Ve),Ue=i(Ve,"DIV",{class:!0});var Ne=c(Ue);be=i(Ne,"DIV",{class:!0});var tt=c(be);Ie=i(tt,"DIV",{class:!0});var Xt=c(Ie);Be=h(Xt,"row:"),Xt.forEach(o),_e=b(tt),We=i(tt,"DIV",{class:!0});var es=c(We);ft=h(es,"Object"),es.forEach(o),tt.forEach(o),pt=b(Ne),Oe=i(Ne,"P",{class:!0});var Lt=c(Oe);Qe=h(Lt,"The current row in the table. In other words, a single object from the data store."),Lt.forEach(o),Ne.forEach(o),qe=b(Ve),Xe=i(Ve,"DIV",{class:!0});var St=c(Xe);et=i(St,"DIV",{class:!0});var Ut=c(et);ie=i(Ut,"DIV",{class:!0});var Mt=c(ie);Me=h(Mt,"value:"),Mt.forEach(o),ht=b(Ut),mt=i(Ut,"DIV",{class:!0});var ts=c(mt);$t=h(ts,"any"),ts.forEach(o),Ut.forEach(o),vt=b(St),Je=i(St,"P",{class:!0});var ss=c(Je);Et=h(ss,"The value of the current cell."),ss.forEach(o),St.forEach(o),Ve.forEach(o),it.forEach(o),fe.forEach(o),this.h()},h(){a(s,"class","font-semibold items-center w-max h3"),a(d,"class","btn variant-ghost-primary w-min"),a(D,"data-popup","popupClickColumnInstructions"),a(r,"class","grid gap-2"),a(r,"id","columnInstructions"),a(I,"class","italic"),a($,"class","font-bold"),a(T,"class","flex gap-2"),a(E,"class","text-xl pl-10"),a(y,"class","items-center"),a(R,"class","italic"),a(O,"class","font-bold"),a(k,"class","flex gap-2"),a(Y,"class","text-xl pl-10"),a(A,"class","items-center"),a(K,"class","italic"),a(se,"class","font-bold"),a(j,"class","flex gap-2"),a(ye,"class","text-xl pl-10"),a(M,"class","items-center"),a(Se,"class","italic"),a(he,"class","font-bold"),a(oe,"class","flex gap-2"),a(Ce,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(Fe,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(me,"class","underline"),a(ue,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(Ge,"class",""),a(Ie,"class","italic"),a(We,"class","font-bold"),a(be,"class","flex gap-2"),a(Oe,"class","text-xl pl-10"),a(Ue,"class","items-center mt-2"),a(ie,"class","italic"),a(mt,"class","font-bold"),a(et,"class","flex gap-2"),a(Je,"class","text-xl pl-10"),a(Xe,"class","items-center mt-2"),a(te,"class","ml-5"),a(de,"class","items-center mt-5"),a(e,"class","grid gap-5")},m(Ye,fe){Z(Ye,e,fe),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,m),t(r,D),W(_,D,null),t(e,C),t(e,y),t(y,T),t(T,I),t(I,U),t(T,V),t(T,$),t($,x),t(y,w),t(y,E),t(E,S),t(e,P),t(e,A),t(A,k),t(k,R),t(R,N),t(k,B),t(k,O),t(O,J),t(A,Q),t(A,Y),t(Y,ee),t(e,F),t(e,M),t(M,j),t(j,K),t(K,pe),t(j,le),t(j,se),t(se,Le),t(M,je),t(M,ye),t(ye,st),t(e,ce),t(e,de),t(de,oe),t(oe,Se),t(Se,Ae),t(oe,Te),t(oe,he),t(he,rt),t(de,He),t(de,te),t(te,me),t(me,Ce),t(Ce,ze),t(me,ct),t(me,Fe),t(Fe,ve),t(me,ae),t(te,xe),t(te,Ge),t(Ge,Ke),t(Ge,ue),t(ue,dt),t(Ge,ut),t(te,ge),t(te,Ue),t(Ue,be),t(be,Ie),t(Ie,Be),t(be,_e),t(be,We),t(We,ft),t(Ue,pt),t(Ue,Oe),t(Oe,Qe),t(te,qe),t(te,Xe),t(Xe,et),t(et,ie),t(ie,Me),t(et,ht),t(et,mt),t(mt,$t),t(Xe,vt),t(Xe,Je),t(Je,Et),Bt=!0,gt||(Dt=zs(Sr.call(null,d,f[0])),gt=!0)},p:re,i(Ye){Bt||(G(_.$$.fragment,Ye),Bt=!0)},o(Ye){L(_.$$.fragment,Ye),Bt=!1},d(Ye){Ye&&o(e),q(_),gt=!1,Dt()}}}function oa(f){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class aa extends Ee{constructor(e){super(),De(this,e,oa,la,we,{})}}function Fl(f,e,r){const s=f.slice();return s[5]=e[r],s}function Gl(f){let e,r,s,l,u,d;r=new fo({props:{icon:f[5].icon}});function v(){return f[4](f[5])}return{c(){e=n("button"),H(r.$$.fragment),s=g(),this.h()},l(m){e=i(m,"BUTTON",{class:!0});var D=c(e);z(r.$$.fragment,D),s=b(D),D.forEach(o),this.h()},h(){a(e,"class",`btn btn-sm btn-icon rounded-md ${f[5].color}`)},m(m,D){Z(m,e,D),W(r,e,null),t(e,s),l=!0,u||(d=xr(e,"click",Kl(v)),u=!0)},p(m,D){f=m},i(m){l||(G(r.$$.fragment,m),l=!0)},o(m){L(r.$$.fragment,m),l=!1},d(m){m&&o(e),q(r),u=!1,d()}}}function na(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=Gl(Fl(f,s,d));const u=d=>L(l[d],1,1,()=>{l[d]=null});return{c(){e=n("div");for(let d=0;d<l.length;d+=1)l[d].c();this.h()},l(d){e=i(d,"DIV",{class:!0});var v=c(e);for(let m=0;m<l.length;m+=1)l[m].l(v);v.forEach(o),this.h()},h(){a(e,"class","flex gap-2 w-min")},m(d,v){Z(d,e,v);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);r=!0},p(d,[v]){if(v&3){s=d[1];let m;for(m=0;m<s.length;m+=1){const D=Fl(d,s,m);l[m]?(l[m].p(D,v),G(l[m],1)):(l[m]=Gl(D),l[m].c(),G(l[m],1),l[m].m(e,null))}for(Ir(),m=s.length;m<l.length;m+=1)u(m);Vr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)L(l[v]);r=!1},d(d){d&&o(e),js(l,d)}}}function ia(f,e,r){let{row:s}=e,{dispatchFn:l}=e;const u=m=>l({type:m,row:s}),d=[{icon:po,color:"variant-filled-primary",type:"CREATE"},{icon:ho,color:"variant-filled-secondary",type:"READ"},{icon:mo,color:"variant-filled-warning",type:"UPDATE"},{icon:vo,color:"variant-filled-error",type:"DELETE"}],v=m=>u(m.type);return f.$$set=m=>{"row"in m&&r(2,s=m.row),"dispatchFn"in m&&r(3,l=m.dispatchFn)},[u,d,s,l,v]}class ca extends Ee{constructor(e){super(),De(this,e,ia,na,we,{row:2,dispatchFn:3})}}function Bl(f,e,r){const s=f.slice();return s[2]=e[r],s}function Ol(f){let e,r=f[2].name+"",s,l;return{c(){e=n("option"),s=p(r),this.h()},l(u){e=i(u,"OPTION",{});var d=c(e);s=h(d,r),d.forEach(o),this.h()},h(){e.__value=l=f[2].id,e.value=e.__value},m(u,d){Z(u,e,d),t(e,s)},p(u,d){d&1&&r!==(r=u[2].name+"")&&ds(s,r),d&1&&l!==(l=u[2].id)&&(e.__value=l,e.value=e.__value)},d(u){u&&o(e)}}}function da(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V=f[0],$=[];for(let x=0;x<V.length;x+=1)$[x]=Ol(Bl(f,V,x));return{c(){e=n("div"),r=n("label"),s=p("Select the users you would like to add to the "),l=n("strong"),u=p(f[1]),d=p("."),v=g(),m=n("select");for(let x=0;x<$.length;x+=1)$[x].c();D=g(),_=n("div"),C=n("button"),y=p("Cancel"),T=g(),I=n("button"),U=p("Done"),this.h()},l(x){e=i(x,"DIV",{class:!0});var w=c(e);r=i(w,"LABEL",{for:!0});var E=c(r);s=h(E,"Select the users you would like to add to the "),l=i(E,"STRONG",{});var S=c(l);u=h(S,f[1]),S.forEach(o),d=h(E,"."),E.forEach(o),v=b(w),m=i(w,"SELECT",{name:!0,class:!0,id:!0});var P=c(m);for(let N=0;N<$.length;N+=1)$[N].l(P);P.forEach(o),D=b(w),_=i(w,"DIV",{class:!0});var A=c(_);C=i(A,"BUTTON",{class:!0});var k=c(C);y=h(k,"Cancel"),k.forEach(o),T=b(A),I=i(A,"BUTTON",{class:!0});var R=c(I);U=h(R,"Done"),R.forEach(o),A.forEach(o),w.forEach(o),this.h()},h(){a(r,"for","users"),m.multiple=!0,a(m,"name","users"),a(m,"class","select"),a(m,"id",""),a(C,"class","btn variant-filled-error"),a(I,"class","btn variant-filled-success"),a(_,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(x,w){Z(x,e,w),t(e,r),t(r,s),t(r,l),t(l,u),t(r,d),t(e,v),t(e,m);for(let E=0;E<$.length;E+=1)$[E]&&$[E].m(m,null);t(e,D),t(e,_),t(_,C),t(C,y),t(_,T),t(_,I),t(I,U)},p(x,[w]){if(w&2&&ds(u,x[1]),w&1){V=x[0];let E;for(E=0;E<V.length;E+=1){const S=Bl(x,V,E);$[E]?$[E].p(S,w):($[E]=Ol(S),$[E].c(),$[E].m(m,null))}for(;E<$.length;E+=1)$[E].d(1);$.length=V.length}},i:re,o:re,d(x){x&&o(e),js($,x)}}}function ua(f,e,r){let{users:s}=e,{group:l}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,l=u.group)},[s,l]}class fa extends Ee{constructor(e){super(),De(this,e,ua,da,we,{users:0,group:1})}}function Ll(f,e,r){const s=f.slice();return s[2]=e[r],s}function Ml(f){let e,r;return{c(){e=n("p"),r=p("No users in this group"),this.h()},l(s){e=i(s,"P",{class:!0});var l=c(e);r=h(l,"No users in this group"),l.forEach(o),this.h()},h(){a(e,"class","italic")},m(s,l){Z(s,e,l),t(e,r)},p:re,d(s){s&&o(e)}}}function Pl(f){let e,r,s=f[2].name+"",l,u;return{c(){e=n("li"),r=p("- "),l=p(s),this.h()},l(d){e=i(d,"LI",{class:!0});var v=c(e);r=h(v,"- "),l=h(v,s),v.forEach(o),this.h()},h(){a(e,"class","font-semibold"),e.value=u=f[2].id},m(d,v){Z(d,e,v),t(e,r),t(e,l)},p(d,v){v&1&&s!==(s=d[2].name+"")&&ds(l,s),v&1&&u!==(u=d[2].id)&&(e.value=u)},d(d){d&&o(e)}}}function pa(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V=f[0],$=[];for(let w=0;w<V.length;w+=1)$[w]=Pl(Ll(f,V,w));let x=null;return V.length||(x=Ml()),{c(){e=n("div"),r=n("label"),s=p("Users in "),l=n("strong"),u=p(f[1]),d=p("."),v=g(),m=n("ul");for(let w=0;w<$.length;w+=1)$[w].c();x&&x.c(),D=g(),_=n("div"),C=n("button"),y=p("Cancel"),T=g(),I=n("button"),U=p("Done"),this.h()},l(w){e=i(w,"DIV",{class:!0});var E=c(e);r=i(E,"LABEL",{for:!0});var S=c(r);s=h(S,"Users in "),l=i(S,"STRONG",{});var P=c(l);u=h(P,f[1]),P.forEach(o),d=h(S,"."),S.forEach(o),v=b(E),m=i(E,"UL",{});var A=c(m);for(let B=0;B<$.length;B+=1)$[B].l(A);x&&x.l(A),A.forEach(o),D=b(E),_=i(E,"DIV",{class:!0});var k=c(_);C=i(k,"BUTTON",{class:!0});var R=c(C);y=h(R,"Cancel"),R.forEach(o),T=b(k),I=i(k,"BUTTON",{class:!0});var N=c(I);U=h(N,"Done"),N.forEach(o),k.forEach(o),E.forEach(o),this.h()},h(){a(r,"for","users"),a(C,"class","btn variant-filled-error"),a(I,"class","btn variant-filled-success"),a(_,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,E){Z(w,e,E),t(e,r),t(r,s),t(r,l),t(l,u),t(r,d),t(e,v),t(e,m);for(let S=0;S<$.length;S+=1)$[S]&&$[S].m(m,null);x&&x.m(m,null),t(e,D),t(e,_),t(_,C),t(C,y),t(_,T),t(_,I),t(I,U)},p(w,[E]){if(E&2&&ds(u,w[1]),E&1){V=w[0];let S;for(S=0;S<V.length;S+=1){const P=Ll(w,V,S);$[S]?$[S].p(P,E):($[S]=Pl(P),$[S].c(),$[S].m(m,null))}for(;S<$.length;S+=1)$[S].d(1);$.length=V.length,!V.length&&x?x.p(w,E):V.length?x&&(x.d(1),x=null):(x=Ml(),x.c(),x.m(m,null))}},i:re,o:re,d(w){w&&o(e),js($,w),x&&x.d()}}}function ha(f,e,r){let{users:s}=e,{group:l}=e;return f.$$set=u=>{"users"in u&&r(0,s=u.users),"group"in u&&r(1,l=u.group)},[s,l]}class ma extends Ee{constructor(e){super(),De(this,e,ha,pa,we,{users:0,group:1})}}function va(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w;return{c(){e=n("div"),r=n("label"),s=p("Group name"),l=g(),u=n("input"),d=g(),v=n("label"),m=p("Group description"),D=g(),_=n("input"),C=g(),y=n("div"),T=n("button"),I=p("Cancel"),U=g(),V=n("button"),$=p("Done"),this.h()},l(E){e=i(E,"DIV",{class:!0});var S=c(e);r=i(S,"LABEL",{for:!0});var P=c(r);s=h(P,"Group name"),P.forEach(o),l=b(S),u=i(S,"INPUT",{type:!0,id:!0,class:!0}),d=b(S),v=i(S,"LABEL",{for:!0});var A=c(v);m=h(A,"Group description"),A.forEach(o),D=b(S),_=i(S,"INPUT",{type:!0,id:!0,class:!0}),C=b(S),y=i(S,"DIV",{class:!0});var k=c(y);T=i(k,"BUTTON",{class:!0});var R=c(T);I=h(R,"Cancel"),R.forEach(o),U=b(k),V=i(k,"BUTTON",{class:!0});var N=c(V);$=h(N,"Done"),N.forEach(o),k.forEach(o),S.forEach(o),this.h()},h(){a(r,"for","groupName"),a(u,"type","text"),a(u,"id","groupName"),a(u,"class","input input-primary"),a(v,"for","groupDescription"),a(_,"type","text"),a(_,"id","groupDescription"),a(_,"class","input input-primary"),a(T,"class","btn variant-filled-error"),a(V,"class","btn variant-filled-success"),a(y,"class","flex gap-2 justify-end"),a(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(E,S){Z(E,e,S),t(e,r),t(r,s),t(e,l),t(e,u),Cr(u,f[0].name),t(e,d),t(e,v),t(v,m),t(e,D),t(e,_),Cr(_,f[0].description),t(e,C),t(e,y),t(y,T),t(T,I),t(y,U),t(y,V),t(V,$),x||(w=[xr(u,"input",f[1]),xr(_,"input",f[2])],x=!0)},p(E,[S]){S&1&&u.value!==E[0].name&&Cr(u,E[0].name),S&1&&_.value!==E[0].description&&Cr(_,E[0].description)},i:re,o:re,d(E){E&&o(e),x=!1,to(w)}}}function ga(f,e,r){let{group:s}=e;function l(){s.name=this.value,r(0,s)}function u(){s.description=this.value,r(0,s)}return f.$$set=d=>{"group"in d&&r(0,s=d.group)},[s,l,u]}class ba extends Ee{constructor(e){super(),De(this,e,ga,va,we,{group:0})}}const _a=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],$a=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Ea=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Da=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],wa=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],ya=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],eo=Hs(_a),Ar=Hs($a),Ta=Hs(Ea),Ca=Hs(ya),xa=Hs(wa),Nl={32655:"NA",32654:"NM",32653:"ND"},Ia=Hs(Da);function jl(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function Hl(f,e,r){const s=f.slice();return s[6]=e[r],s[8]=r,s}function zl(f){let e,r;return{c(){e=n("h3"),r=p(f[0]),this.h()},l(s){e=i(s,"H3",{class:!0});var l=c(e);r=h(l,f[0]),l.forEach(o),this.h()},h(){a(e,"class","h3")},m(s,l){Z(s,e,l),t(e,r)},p(s,l){l&1&&ds(r,s[0])},d(s){s&&o(e)}}}function Va(f){let e=f[6].name+"",r;return{c(){r=p(e)},l(s){r=h(s,e)},m(s,l){Z(s,r,l)},p(s,l){l&2&&e!==(e=s[6].name+"")&&ds(r,e)},d(s){s&&o(r)}}}function Wl(f){let e,r,s;function l(d){f[4](d)}let u={name:`tab${f[8]}`,value:f[8],$$slots:{default:[Va]},$$scope:{ctx:f}};return f[2]!==void 0&&(u.group=f[2]),e=new bo({props:u}),ao.push(()=>no(e,"group",l)),{c(){H(e.$$.fragment)},l(d){z(e.$$.fragment,d)},m(d,v){W(e,d,v),s=!0},p(d,v){const m={};v&34&&(m.$$scope={dirty:v,ctx:d}),!r&&v&4&&(r=!0,m.group=d[2],io(()=>r=!1)),e.$set(m)},i(d){s||(G(e.$$.fragment,d),s=!0)},o(d){L(e.$$.fragment,d),s=!1},d(d){q(e,d)}}}function Sa(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=Wl(jl(f,s,d));const u=d=>L(l[d],1,1,()=>{l[d]=null});return{c(){for(let d=0;d<l.length;d+=1)l[d].c();e=Ns()},l(d){for(let v=0;v<l.length;v+=1)l[v].l(d);e=Ns()},m(d,v){for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(d,v);Z(d,e,v),r=!0},p(d,v){if(v&6){s=d[1];let m;for(m=0;m<s.length;m+=1){const D=jl(d,s,m);l[m]?(l[m].p(D,v),G(l[m],1)):(l[m]=Wl(D),l[m].c(),G(l[m],1),l[m].m(e.parentNode,e))}for(Ir(),m=s.length;m<l.length;m+=1)u(m);Vr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)L(l[v]);r=!1},d(d){js(l,d),d&&o(e)}}}function ql(f){let e,r;return e=new Ws({props:{language:f[6].language,code:f[6].code}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p(s,l){const u={};l&2&&(u.language=s[6].language),l&2&&(u.code=s[6].code),e.$set(u)},i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function Jl(f){let e,r,s=f[2]===f[8]&&ql(f);return{c(){s&&s.c(),e=Ns()},l(l){s&&s.l(l),e=Ns()},m(l,u){s&&s.m(l,u),Z(l,e,u),r=!0},p(l,u){l[2]===l[8]?s?(s.p(l,u),u&4&&G(s,1)):(s=ql(l),s.c(),G(s,1),s.m(e.parentNode,e)):s&&(Ir(),L(s,1,1,()=>{s=null}),Vr())},i(l){r||(G(s),r=!0)},o(l){L(s),r=!1},d(l){s&&s.d(l),l&&o(e)}}}function Ua(f){let e,r,s=f[1],l=[];for(let d=0;d<s.length;d+=1)l[d]=Jl(Hl(f,s,d));const u=d=>L(l[d],1,1,()=>{l[d]=null});return{c(){for(let d=0;d<l.length;d+=1)l[d].c();e=Ns()},l(d){for(let v=0;v<l.length;v+=1)l[v].l(d);e=Ns()},m(d,v){for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(d,v);Z(d,e,v),r=!0},p(d,v){if(v&6){s=d[1];let m;for(m=0;m<s.length;m+=1){const D=Hl(d,s,m);l[m]?(l[m].p(D,v),G(l[m],1)):(l[m]=Jl(D),l[m].c(),G(l[m],1),l[m].m(e.parentNode,e))}for(Ir(),m=s.length;m<l.length;m+=1)u(m);Vr()}},i(d){if(!r){for(let v=0;v<s.length;v+=1)G(l[v]);r=!0}},o(d){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)L(l[v]);r=!1},d(d){js(l,d),d&&o(e)}}}function Aa(f){let e,r,s,l,u,d,v,m,D,_=f[0]&&zl(f);const C=f[3].default,y=so(C,f,f[5],null);return m=new go({props:{$$slots:{panel:[Ua],default:[Sa]},$$scope:{ctx:f}}}),{c(){e=n("div"),r=n("div"),_&&_.c(),s=g(),l=n("div"),u=n("div"),y&&y.c(),d=g(),v=n("div"),H(m.$$.fragment),this.h()},l(T){e=i(T,"DIV",{class:!0});var I=c(e);r=i(I,"DIV",{class:!0});var U=c(r);_&&_.l(U),U.forEach(o),s=b(I),l=i(I,"DIV",{class:!0});var V=c(l);u=i(V,"DIV",{class:!0});var $=c(u);y&&y.l($),$.forEach(o),d=b(V),v=i(V,"DIV",{class:!0});var x=c(v);z(m.$$.fragment,x),x.forEach(o),V.forEach(o),I.forEach(o),this.h()},h(){a(r,"class","py-5"),a(u,"class","flex-1"),a(v,"class","flex-1"),a(l,"class","flex card p-5 gap-10"),a(e,"class","")},m(T,I){Z(T,e,I),t(e,r),_&&_.m(r,null),t(e,s),t(e,l),t(l,u),y&&y.m(u,null),t(l,d),t(l,v),W(m,v,null),D=!0},p(T,[I]){T[0]?_?_.p(T,I):(_=zl(T),_.c(),_.m(r,null)):_&&(_.d(1),_=null),y&&y.p&&(!D||I&32)&&ro(y,C,T,T[5],D?oo(C,T[5],I,null):lo(T[5]),null);const U={};I&38&&(U.$$scope={dirty:I,ctx:T}),m.$set(U)},i(T){D||(G(y,T),G(m.$$.fragment,T),D=!0)},o(T){L(y,T),L(m.$$.fragment,T),D=!1},d(T){T&&o(e),_&&_.d(),y&&y.d(T),q(m)}}}function ka(f,e,r){let{$$slots:s={},$$scope:l}=e,{title:u}=e,{tabs:d=[]}=e,v=0;function m(D){v=D,r(2,v)}return f.$$set=D=>{"title"in D&&r(0,u=D.title),"tabs"in D&&r(1,d=D.tabs),"$$scope"in D&&r(5,l=D.$$scope)},[u,d,v,s,m,l]}class kr extends Ee{constructor(e){super(),De(this,e,ka,Aa,we,{title:0,tabs:1})}}function Ra(f){let e,r;return e=new _s({props:{config:f[0]}}),e.$on("action",f[1]),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function Fa(f){let e,r,s;return r=new kr({props:{title:"CRUD",tabs:f[2],$$slots:{default:[Ra]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","CRUD")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&32&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function Ga(f,e,r){let s;Ql(f,Ar,m=>r(3,s=m));const l=uo(),u={id:"userGroupCRUD",toggle:!0,data:eo,resizable:"both",rowHeight:40,exportable:!0,columns:{name:{minWidth:200}},optionsComponent:ca},d=m=>{const{type:D,row:_}=m.detail;switch(D){case"CREATE":l.trigger({type:"component",title:`Add user to Group ${_.id}`,component:{ref:fa,props:{users:s.filter(C=>C.group!==_.name),group:_.name}}});break;case"READ":l.trigger({type:"component",title:`Users in Group ${_.id}`,component:{ref:ma,props:{users:s.filter(C=>C.group===_.name),group:_.name}}});break;case"UPDATE":l.trigger({type:"component",title:`Edit Group ${_.id}`,component:{ref:ba,props:{group:_}}});break;case"DELETE":l.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${_.name}</strong>?`,response:C=>console.log("response:",C)});break}},v=[{name:"Svelte",language:"html",code:jo},{name:"tableCRUDActions",language:"typescript",code:Ho},{name:"optionsComponent",language:"html",code:Jo},{name:"data",language:"typescript",code:Ur+`
`+Xl},{name:"AddUser.svelte",language:"html",code:zo},{name:"ShowUsers.svelte",language:"html",code:Wo},{name:"EditGroup.svelte",language:"html",code:qo}];return[u,d,v]}class Ba extends Ee{constructor(e){super(),De(this,e,Ga,Fa,we,{})}}function Oa(f){let e,r,s,l;return{c(){e=n("button"),r=p("Odd or even"),this.h()},l(u){e=i(u,"BUTTON",{class:!0});var d=c(e);r=h(d,"Odd or even"),d.forEach(o),this.h()},h(){a(e,"class","btn btn-sm variant-filled-secondary")},m(u,d){Z(u,e,d),t(e,r),s||(l=xr(e,"click",Kl(f[0])),s=!0)},p:re,i:re,o:re,d(u){u&&o(e),s=!1,l()}}}function La(f,e,r){let{row:s}=e,{dispatchFn:l}=e;const u=()=>{const d=s.id%2===0?"even":"odd";return l({type:d})};return f.$$set=d=>{"row"in d&&r(1,s=d.row),"dispatchFn"in d&&r(2,l=d.dispatchFn)},[u,s,l]}class Ma extends Ee{constructor(e){super(),De(this,e,La,Oa,we,{row:1,dispatchFn:2})}}function Pa(f){let e,r;return e=new _s({props:{config:f[1]}}),e.$on("action",f[2]),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function Na(f){let e,r,s;return r=new kr({props:{title:"Odd or even",tabs:f[0],$$slots:{default:[Pa]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","usersNoRoles")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&8&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function ja(f){return[[{name:"Svelte",language:"html",code:xo},{name:"Data",language:"typescript",code:Ur},{name:"TableOptions.svelte",language:"html",code:No}],{id:"usersNoRoles",data:Ar,optionsComponent:Ma,resizable:"columns",toggle:!0,columns:{id:{colFilterFn:_o,colFilterComponent:$o},role:{exclude:!0},group:{header:"Group name"},optionsColumn:{fixedWidth:120}},pageSizes:[1,3,5],defaultPageSize:5},l=>{alert(l.detail.type)}]}class Ha extends Ee{constructor(e){super(),De(this,e,ja,Na,we,{})}}function za(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function Wa(f){let e,r,s;return r=new qs({props:{title:"Minimal configuration",svelte:Co,data:Ur,$$slots:{default:[za]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{class:!0,id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"class","grid gap-5"),a(e,"id","users")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function qa(f){return[{id:"users",data:Ar}]}class Ja extends Ee{constructor(e){super(),De(this,e,qa,Wa,we,{})}}function Ya(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function Za(f){let e,r,s;return r=new qs({props:{title:"Date",svelte:Io,data:Vo,$$slots:{default:[Ya]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","usersBD")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function Ka(f){return[{id:"usersBD",data:Ta,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:r=>r.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:r=>r.getTime(),toFilterableValueFn:r=>r}}}}]}class Qa extends Ee{constructor(e){super(),De(this,e,Ka,Za,we,{})}}function Xa(f){let e,r;return{c(){e=n("input"),this.h()},l(s){e=i(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){a(e,"type","checkbox"),a(e,"name","isAdmin"),a(e,"id",r=f[1].id),e.checked=f[0],e.disabled=!0},m(s,l){Z(s,e,l)},p(s,[l]){l&2&&r!==(r=s[1].id)&&a(e,"id",r),l&1&&(e.checked=s[0])},i:re,o:re,d(s){s&&o(e)}}}function en(f,e,r){let{value:s}=e,{row:l}=e;return f.$$set=u=>{"value"in u&&r(0,s=u.value),"row"in u&&r(1,l=u.row)},[s,l]}class tn extends Ee{constructor(e){super(),De(this,e,en,Xa,we,{value:0,row:1})}}function sn(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function rn(f){let e,r,s;return r=new kr({props:{title:"Boolean",tabs:f[1],$$slots:{default:[sn]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","boolean")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function ln(f){return[{id:"usersAndAdmins",data:Ca,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:tn},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Lo},{name:"Data",language:"typescript",code:Mo},{name:"IsAdmin.svelte",language:"html",code:Po}]]}class on extends Ee{constructor(e){super(),De(this,e,ln,rn,we,{})}}function an(f){let e,r;return{c(){e=n("a"),r=p(f[0]),this.h()},l(s){e=i(s,"A",{href:!0});var l=c(e);r=h(l,f[0]),l.forEach(o),this.h()},h(){a(e,"href",f[0])},m(s,l){Z(s,e,l),t(e,r)},p(s,[l]){l&1&&ds(r,s[0]),l&1&&a(e,"href",s[0])},i:re,o:re,d(s){s&&o(e)}}}function nn(f,e,r){let{value:s}=e;return f.$$set=l=>{"value"in l&&r(0,s=l.value)},[s]}class cn extends Ee{constructor(e){super(),De(this,e,nn,an,we,{value:0})}}function dn(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function un(f){let e,r,s;return r=new kr({props:{title:"URLs",tabs:f[1],$$slots:{default:[dn]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","URLs")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&4&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function fn(f){return[{id:"websites",data:xa,toggle:!0,fitToScreen:!1,columns:{URL:{header:"URL",instructions:{renderComponent:cn,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:Go},{name:"Data",language:"typescript",code:Bo},{name:"URLCell.svelte",language:"html",code:Oo}]]}class pn extends Ee{constructor(e){super(),De(this,e,fn,un,we,{})}}function hn(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function mn(f){let e,r,s;return r=new qs({props:{title:"Missing values",svelte:Ro,data:Fo,$$slots:{default:[hn]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","combination")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function vn(f){return[{id:"usersMissingIDs",data:Ia,columns:{id:{header:"ID",instructions:{toStringFn:r=>r in Nl?Nl[r]:r.toString()}}}}]}class gn extends Ee{constructor(e){super(),De(this,e,vn,mn,we,{})}}function bn(f){let e,r;return e=new _s({props:{config:f[0]}}),{c(){H(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,l){W(e,s,l),r=!0},p:re,i(s){r||(G(e.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),r=!1},d(s){q(e,s)}}}function _n(f){let e,r,s;return r=new qs({props:{title:"Table component",svelte:To,data:Xl,$$slots:{default:[bn]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","groups")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function $n(f){return[{id:"userGroups",data:eo,height:300,toggle:!0,columns:{id:{header:"ID"}}}]}class En extends Ee{constructor(e){super(),De(this,e,$n,_n,we,{})}}function Yl(f,e,r){const s=f.slice();return s[1]=e[r],s}function Zl(f){let e,r,s=f[1].name+"",l,u,d,v,m=f[1].group+"",D,_;return{c(){e=n("tr"),r=n("td"),l=p(s),u=g(),d=n("td"),v=n("div"),D=p(m),_=g()},l(C){e=i(C,"TR",{});var y=c(e);r=i(y,"TD",{});var T=c(r);l=h(T,s),T.forEach(o),u=b(y),d=i(y,"TD",{});var I=c(d);v=i(I,"DIV",{});var U=c(v);D=h(U,m),U.forEach(o),I.forEach(o),_=b(y),y.forEach(o)},m(C,y){Z(C,e,y),t(e,r),t(r,l),t(e,u),t(e,d),t(d,v),t(v,D),t(e,_)},p(C,y){y&1&&s!==(s=C[1].name+"")&&ds(l,s),y&1&&m!==(m=C[1].group+"")&&ds(D,m)},d(C){C&&o(e)}}}function Dn(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U=f[0],V=[];for(let $=0;$<U.length;$+=1)V[$]=Zl(Yl(f,U,$));return{c(){e=n("div"),r=p("Used classes are important to include for the table to have a uniform look."),s=g(),l=n("div"),u=n("table"),d=n("thead"),v=n("tr"),m=n("th"),D=p("Group"),_=g(),C=n("th"),y=p("Description"),T=g(),I=n("tbody");for(let $=0;$<V.length;$+=1)V[$].c();this.h()},l($){e=i($,"DIV",{class:!0});var x=c(e);r=h(x,"Used classes are important to include for the table to have a uniform look."),x.forEach(o),s=b($),l=i($,"DIV",{class:!0});var w=c(l);u=i(w,"TABLE",{class:!0});var E=c(u);d=i(E,"THEAD",{});var S=c(d);v=i(S,"TR",{class:!0});var P=c(v);m=i(P,"TH",{class:!0});var A=c(m);D=h(A,"Group"),A.forEach(o),_=b(P),C=i(P,"TH",{class:!0});var k=c(C);y=h(k,"Description"),k.forEach(o),P.forEach(o),S.forEach(o),T=b(E),I=i(E,"TBODY",{});var R=c(I);for(let N=0;N<V.length;N+=1)V[N].l(R);R.forEach(o),E.forEach(o),w.forEach(o),this.h()},h(){a(e,"class","pb-2"),a(m,"class","!p-2"),a(C,"class","!p-2"),a(v,"class","bg-primary-300 dark:bg-primary-500"),a(u,"class","table table-compact bg-tertiary-500/30 dark:bg-tertiary-900/10"),a(l,"class","table-container")},m($,x){Z($,e,x),t(e,r),Z($,s,x),Z($,l,x),t(l,u),t(u,d),t(d,v),t(v,m),t(m,D),t(v,_),t(v,C),t(C,y),t(u,T),t(u,I);for(let w=0;w<V.length;w+=1)V[w]&&V[w].m(I,null)},p($,x){if(x&1){U=$[0];let w;for(w=0;w<U.length;w+=1){const E=Yl($,U,w);V[w]?V[w].p(E,x):(V[w]=Zl(E),V[w].c(),V[w].m(I,null))}for(;w<V.length;w+=1)V[w].d(1);V.length=U.length}},d($){$&&o(e),$&&o(s),$&&o(l),js(V,$)}}}function wn(f){let e,r,s;return r=new qs({props:{title:"Simple table without Table component",svelte:yo,data:Ur,$$slots:{default:[Dn]},$$scope:{ctx:f}}}),{c(){e=n("div"),H(r.$$.fragment),this.h()},l(l){e=i(l,"DIV",{id:!0});var u=c(e);z(r.$$.fragment,u),u.forEach(o),this.h()},h(){a(e,"id","simpleTable")},m(l,u){Z(l,e,u),W(r,e,null),s=!0},p(l,[u]){const d={};u&17&&(d.$$scope={dirty:u,ctx:l}),r.$set(d)},i(l){s||(G(r.$$.fragment,l),s=!0)},o(l){L(r.$$.fragment,l),s=!1},d(l){l&&o(e),q(r)}}}function yn(f,e,r){let s;return Ql(f,Ar,l=>r(0,s=l)),[s]}class Tn extends Ee{constructor(e){super(),De(this,e,yn,wn,we,{})}}function Cn(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B,O,J,Q,Y,ee;return u=new Tn({}),v=new En({}),D=new Ja({}),U=new Ha({}),$=new Ba({}),A=new Qa({}),R=new gn({}),B=new pn({}),J=new on({}),Y=new co({}),{c(){e=n("div"),r=n("h2"),s=p("Examples"),l=g(),H(u.$$.fragment),d=g(),H(v.$$.fragment),m=g(),H(D.$$.fragment),_=g(),C=n("div"),y=n("h2"),T=p("Dispatching Actions"),I=g(),H(U.$$.fragment),V=g(),H($.$$.fragment),x=g(),w=n("div"),E=n("h2"),S=p("Complex data types"),P=g(),H(A.$$.fragment),k=g(),H(R.$$.fragment),N=g(),H(B.$$.fragment),O=g(),H(J.$$.fragment),Q=g(),H(Y.$$.fragment),this.h()},l(F){e=i(F,"DIV",{class:!0});var M=c(e);r=i(M,"H2",{class:!0});var j=c(r);s=h(j,"Examples"),j.forEach(o),l=b(M),z(u.$$.fragment,M),d=b(M),z(v.$$.fragment,M),m=b(M),z(D.$$.fragment,M),_=b(M),C=i(M,"DIV",{id:!0,class:!0});var K=c(C);y=i(K,"H2",{class:!0});var pe=c(y);T=h(pe,"Dispatching Actions"),pe.forEach(o),I=b(K),z(U.$$.fragment,K),V=b(K),z($.$$.fragment,K),K.forEach(o),x=b(M),w=i(M,"DIV",{id:!0});var le=c(w);E=i(le,"H2",{class:!0});var se=c(E);S=h(se,"Complex data types"),se.forEach(o),P=b(le),z(A.$$.fragment,le),k=b(le),z(R.$$.fragment,le),N=b(le),z(B.$$.fragment,le),O=b(le),z(J.$$.fragment,le),le.forEach(o),M.forEach(o),Q=b(F),z(Y.$$.fragment,F),this.h()},h(){a(r,"class","h2"),a(y,"class","h2"),a(C,"id","actionDispatchersExamples"),a(C,"class","my-20"),a(E,"class","h2"),a(w,"id","complexTypes"),a(e,"class","grid gap-1")},m(F,M){Z(F,e,M),t(e,r),t(r,s),t(e,l),W(u,e,null),t(e,d),W(v,e,null),t(e,m),W(D,e,null),t(e,_),t(e,C),t(C,y),t(y,T),t(C,I),W(U,C,null),t(C,V),W($,C,null),t(e,x),t(e,w),t(w,E),t(E,S),t(w,P),W(A,w,null),t(w,k),W(R,w,null),t(w,N),W(B,w,null),t(w,O),W(J,w,null),Z(F,Q,M),W(Y,F,M),ee=!0},p:re,i(F){ee||(G(u.$$.fragment,F),G(v.$$.fragment,F),G(D.$$.fragment,F),G(U.$$.fragment,F),G($.$$.fragment,F),G(A.$$.fragment,F),G(R.$$.fragment,F),G(B.$$.fragment,F),G(J.$$.fragment,F),G(Y.$$.fragment,F),ee=!0)},o(F){L(u.$$.fragment,F),L(v.$$.fragment,F),L(D.$$.fragment,F),L(U.$$.fragment,F),L($.$$.fragment,F),L(A.$$.fragment,F),L(R.$$.fragment,F),L(B.$$.fragment,F),L(J.$$.fragment,F),L(Y.$$.fragment,F),ee=!1},d(F){F&&o(e),q(u),q(v),q(D),q(U),q($),q(A),q(R),q(B),q(J),F&&o(Q),q(Y,F)}}}class xn extends Ee{constructor(e){super(),De(this,e,null,Cn,we,{})}}function In(f){let e,r,s,l,u,d,v,m="(action: CustomEvent<any>) => {}",D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N,B,O,J,Q,Y,ee,F,M,j,K,pe,le,se,Le,je="(obj: any) => dispatch('action', obj)",ye,st,ce,de,oe,Se,Ae,Te,he,rt;return{c(){e=n("div"),r=n("div"),s=n("div"),l=n("h3"),u=p("on:action"),d=g(),v=n("h3"),D=p(m),_=g(),C=n("p"),y=p("To dispatch actions and listen to dispatchers you need to create a table with your own "),T=n("code"),I=p("optionsComponent"),U=p(" component."),V=g(),$=n("div"),x=n("p"),w=p("Every "),E=n("code"),S=p("optionsComponent"),P=p(" will get 2 props:"),A=g(),k=n("div"),R=n("div"),N=n("div"),B=p("row:"),O=g(),J=n("div"),Q=p("Object"),Y=g(),ee=n("p"),F=p("The current row in the table. In other words, a single object from the data store."),M=g(),j=n("div"),K=n("div"),pe=n("div"),le=p("dispatchFn:"),se=g(),Le=n("div"),ye=p(je),st=g(),ce=n("p"),de=p("A function that takes an object and dispatches an action with the name "),oe=n("code"),Se=p("action"),Ae=p(`. The passed object is accessible by the parent component through the
					`),Te=n("code"),he=p("action.detail"),rt=p(" property."),this.h()},l(He){e=i(He,"DIV",{class:!0});var te=c(e);r=i(te,"DIV",{class:!0,id:!0});var me=c(r);s=i(me,"DIV",{class:!0});var Ce=c(s);l=i(Ce,"H3",{class:!0});var ze=c(l);u=h(ze,"on:action"),ze.forEach(o),d=b(Ce),v=i(Ce,"H3",{class:!0});var ct=c(v);D=h(ct,m),ct.forEach(o),Ce.forEach(o),_=b(me),C=i(me,"P",{class:!0});var Fe=c(C);y=h(Fe,"To dispatch actions and listen to dispatchers you need to create a table with your own "),T=i(Fe,"CODE",{class:!0});var ve=c(T);I=h(ve,"optionsComponent"),ve.forEach(o),U=h(Fe," component."),Fe.forEach(o),V=b(me),$=i(me,"DIV",{class:!0});var ae=c($);x=i(ae,"P",{class:!0});var xe=c(x);w=h(xe,"Every "),E=i(xe,"CODE",{class:!0});var Ge=c(E);S=h(Ge,"optionsComponent"),Ge.forEach(o),P=h(xe," will get 2 props:"),xe.forEach(o),A=b(ae),k=i(ae,"DIV",{class:!0});var Ke=c(k);R=i(Ke,"DIV",{class:!0});var ue=c(R);N=i(ue,"DIV",{class:!0});var dt=c(N);B=h(dt,"row:"),dt.forEach(o),O=b(ue),J=i(ue,"DIV",{class:!0});var ut=c(J);Q=h(ut,"Object"),ut.forEach(o),ue.forEach(o),Y=b(Ke),ee=i(Ke,"P",{class:!0});var ge=c(ee);F=h(ge,"The current row in the table. In other words, a single object from the data store."),ge.forEach(o),Ke.forEach(o),M=b(ae),j=i(ae,"DIV",{class:!0});var Ue=c(j);K=i(Ue,"DIV",{class:!0});var be=c(K);pe=i(be,"DIV",{class:!0});var Ie=c(pe);le=h(Ie,"dispatchFn:"),Ie.forEach(o),se=b(be),Le=i(be,"DIV",{class:!0});var Be=c(Le);ye=h(Be,je),Be.forEach(o),be.forEach(o),st=b(Ue),ce=i(Ue,"P",{class:!0});var _e=c(ce);de=h(_e,"A function that takes an object and dispatches an action with the name "),oe=i(_e,"CODE",{class:!0});var We=c(oe);Se=h(We,"action"),We.forEach(o),Ae=h(_e,`. The passed object is accessible by the parent component through the
					`),Te=i(_e,"CODE",{class:!0});var ft=c(Te);he=h(ft,"action.detail"),ft.forEach(o),rt=h(_e," property."),_e.forEach(o),Ue.forEach(o),ae.forEach(o),me.forEach(o),te.forEach(o),this.h()},h(){a(l,"class","italic font-semibold"),a(v,"class","font-semibold"),a(s,"class","flex gap-3 h3"),a(T,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(C,"class","text-xl underline"),a(E,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(x,"class","text-xl"),a(N,"class","italic"),a(J,"class","font-bold"),a(R,"class","flex gap-2"),a(ee,"class","text-xl pl-10"),a(k,"class","items-center mt-2"),a(pe,"class","italic"),a(Le,"class","font-bold"),a(K,"class","flex gap-2"),a(oe,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(Te,"class","!text-xl bg-tertiary-300 dark:bg-tertiary-700/50 rounded-md p-0.5 text-primary-500"),a(ce,"class","text-xl pl-10"),a(j,"class","items-center mt-2"),a($,"class","mt-5"),a(r,"class","grid gap-2"),a(r,"id","actionDispatchersDocs"),a(e,"class","grid gap-5")},m(He,te){Z(He,e,te),t(e,r),t(r,s),t(s,l),t(l,u),t(s,d),t(s,v),t(v,D),t(r,_),t(r,C),t(C,y),t(C,T),t(T,I),t(C,U),t(r,V),t(r,$),t($,x),t(x,w),t(x,E),t(E,S),t(x,P),t($,A),t($,k),t(k,R),t(R,N),t(N,B),t(R,O),t(R,J),t(J,Q),t(k,Y),t(k,ee),t(ee,F),t($,M),t($,j),t(j,K),t(K,pe),t(pe,le),t(K,se),t(K,Le),t(Le,ye),t(j,st),t(j,ce),t(ce,de),t(ce,oe),t(oe,Se),t(ce,Ae),t(ce,Te),t(Te,he),t(ce,rt)},p:re,i:re,o:re,d(He){He&&o(e)}}}class Vn extends Ee{constructor(e){super(),De(this,e,null,In,we,{})}}function Sn(f){let e,r,s,l,u,d,v,m,D,_,C,y,T,I,U,V,$,x,w,E,S,P,A,k,R,N;return D=new Ko({}),C=new ea({}),T=new ra({}),U=new aa({}),S=new Vn({}),A=new xn({}),{c(){e=n("div"),r=n("div"),s=n("h1"),l=p("Table"),u=g(),d=n("h2"),v=p("Types"),m=g(),H(D.$$.fragment),_=g(),H(C.$$.fragment),y=g(),H(T.$$.fragment),I=g(),H(U.$$.fragment),V=g(),$=n("div"),x=n("h2"),w=p("Action Dispatchers"),E=g(),H(S.$$.fragment),P=g(),H(A.$$.fragment),this.h()},l(B){e=i(B,"DIV",{class:!0});var O=c(e);r=i(O,"DIV",{class:!0});var J=c(r);s=i(J,"H1",{class:!0});var Q=c(s);l=h(Q,"Table"),Q.forEach(o),u=b(J),d=i(J,"H2",{class:!0});var Y=c(d);v=h(Y,"Types"),Y.forEach(o),m=b(J),z(D.$$.fragment,J),J.forEach(o),_=b(O),z(C.$$.fragment,O),y=b(O),z(T.$$.fragment,O),I=b(O),z(U.$$.fragment,O),V=b(O),$=i(O,"DIV",{class:!0});var ee=c($);x=i(ee,"H2",{class:!0});var F=c(x);w=h(F,"Action Dispatchers"),F.forEach(o),E=b(ee),z(S.$$.fragment,ee),ee.forEach(o),P=b(O),z(A.$$.fragment,O),O.forEach(o),this.h()},h(){a(s,"class","font-bold !text-6xl"),a(d,"class","h2"),a(r,"class","grid gap-5"),a(x,"class","h2"),a($,"class","grid gap-5"),a(e,"class","grid gap-20 p-10 dark:bg-surface-800")},m(B,O){Z(B,e,O),t(e,r),t(r,s),t(s,l),t(r,u),t(r,d),t(d,v),t(r,m),W(D,r,null),t(e,_),W(C,e,null),t(e,y),W(T,e,null),t(e,I),W(U,e,null),t(e,V),t(e,$),t($,x),t(x,w),t($,E),W(S,$,null),t(e,P),W(A,e,null),k=!0,R||(N=zs(wo.call(null,e,{mode:"generate",scrollTarget:"#page-content"})),R=!0)},p:re,i(B){k||(G(D.$$.fragment,B),G(C.$$.fragment,B),G(T.$$.fragment,B),G(U.$$.fragment,B),G(S.$$.fragment,B),G(A.$$.fragment,B),k=!0)},o(B){L(D.$$.fragment,B),L(C.$$.fragment,B),L(T.$$.fragment,B),L(U.$$.fragment,B),L(S.$$.fragment,B),L(A.$$.fragment,B),k=!1},d(B){B&&o(e),q(D),q(C),q(T),q(U),q(S),q(A),R=!1,N()}}}class Nn extends Ee{constructor(e){super(),De(this,e,null,Sn,we,{})}}export{Nn as component};
