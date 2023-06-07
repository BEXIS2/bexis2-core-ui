import{S as Vt,i as St,s as Ut,k as a,q as c,a as p,y as Q,l as o,m as n,r as u,h as s,c as f,z as X,n as r,b as Pe,D as e,A as Z,ab as Zt,W as Te,g as ee,d as te,B as se,M as us,a5 as ps,V as fs,U as ms,u as ls}from"../chunks/index.bfb1ec04.js";/* empty css                             */import{p as es}from"../chunks/floating-ui.dom.browser.min.830ca273.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.b137eeed.js";import{a as ts,C as it,T as Ft,c as vs,b as gs}from"../chunks/CodeContainer.4b141b69.js";import{w as Lt}from"../chunks/index.7a9a3408.js";const hs=`
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
</div>`,bs=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
<\/script>

<Table config={groupConfig} />`,$s=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,_s=`
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

<Table config={usersConfig} />`,ss=`
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
				
export const usersStore = writable<User[]>(users);`,Ds=`
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
/>`,ws=`
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

<Table config={usersBDConfig} />`,Es=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Cs=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,Is=`
export interface Columns {
	[key: string]: Column;
}`,Ts=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,xs=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,ys=`
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

<Table config={usersMissingIDsConfig} />`,Vs=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,Ss=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

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
					toStringFn: (url: URL) => url.toString(),
					toFilterableValueFn: (url: URL) => url.toString()
				},
				disableSorting: true
			}
		}
	};
<\/script>

<Table config={websitesConfig} />
`,Us=`
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
`,Fs=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { usersAndAdminsStore } from './data';
	import type { UserOrAdmin } from './data';

	const usersAndAdminsConfig: TableConfig<UserOrAdmin> = {
		id: 'usersAndAdmins',
		data: usersAndAdminsStore,
		columns: {
			role: {
				header: 'Admin',
				instructions: {
					toStringFn: (isAdmin: boolean) => (isAdmin ? '✓' : '')
				},
				disableFiltering: true
			}
		}
	};
<\/script>`,Bs=`
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
`;function As(b){let t,l,i,$="TableConfig <T>",D,m,x,B,T,w,y,g,_,S,U,I,v,V,d,C,R,O,F,A,k,H,ae,G,z,N,L,J,ie,h,E,W="Writable <T[]>",q,oe,M,pe,ne,P,fe,be,K,re,Y,de,xe,ve,Xe="SvelteComponent",He,$e,me,ze,ce,_e,De,Ue,we,ue,ge,Fe,Be,he,Ze="number[]",Ne,Ae,Ee,We,lt,Ge,Ce,je,dt,Je,qe,Bt="number",Re,ke,ye,ct,ut,Ie,Le,Ye,Ke,pt,Me,At="Columns",Gt,Ve,j,Qe,et,Rt,kt,tt,nt,Ot;return v=new ts({props:{language:"ts",code:Cs}}),{c(){t=a("div"),l=a("div"),i=a("h3"),D=c($),m=p(),x=a("button"),B=c("Show type details"),T=p(),w=a("div"),y=c("Underlined attributes are "),g=a("strong"),_=c("required"),S=c("."),U=p(),I=a("div"),Q(v.$$.fragment),V=p(),d=a("div"),C=a("div"),R=a("div"),O=c("id:"),F=p(),A=a("div"),k=c("string"),H=p(),ae=a("p"),G=c("Unique identifier for the table to generate unique IDs for the filters."),z=p(),N=a("div"),L=a("div"),J=a("div"),ie=c("data:"),h=p(),E=a("div"),q=c(W),oe=p(),M=a("p"),pe=c("A writable store of the type "),ne=a("code"),P=c("T[]"),fe=c(`. Any changes in the store will
			be reflected in the table.`),be=p(),K=a("div"),re=a("div"),Y=a("div"),de=c("optionsComponent:"),xe=p(),ve=a("div"),He=c(Xe),$e=p(),me=a("p"),ze=c(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),ce=a("code"),_e=c("optionsComponent"),De=c(" was provided."),Ue=p(),we=a("div"),ue=a("div"),ge=a("div"),Fe=c("pageSizes:"),Be=p(),he=a("div"),Ne=c(Ze),Ae=p(),Ee=a("p"),We=c("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),lt=p(),Ge=a("div"),Ce=a("div"),je=a("div"),dt=c("defaultPageSize:"),Je=p(),qe=a("div"),Re=c(Bt),ke=p(),ye=a("p"),ct=c(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),ut=p(),Ie=a("div"),Le=a("div"),Ye=a("div"),Ke=c("columns:"),pt=p(),Me=a("div"),Gt=c(At),Ve=p(),j=a("p"),Qe=c("An object with configuration for specific columns. "),et=a("code"),Rt=c("Columns"),kt=c(`
			object is described below.`),this.h()},l(Oe){t=o(Oe,"DIV",{class:!0});var le=n(t);l=o(le,"DIV",{class:!0,id:!0});var Se=n(l);i=o(Se,"H3",{class:!0});var ft=n(i);D=u(ft,$),ft.forEach(s),m=f(Se),x=o(Se,"BUTTON",{class:!0});var Mt=n(x);B=u(Mt,"Show type details"),Mt.forEach(s),T=f(Se),w=o(Se,"DIV",{class:!0});var mt=n(w);y=u(mt,"Underlined attributes are "),g=o(mt,"STRONG",{});var Pt=n(g);_=u(Pt,"required"),Pt.forEach(s),S=u(mt,"."),mt.forEach(s),U=f(Se),I=o(Se,"DIV",{class:!0,"data-popup":!0});var vt=n(I);X(v.$$.fragment,vt),vt.forEach(s),Se.forEach(s),V=f(le),d=o(le,"DIV",{class:!0});var st=n(d);C=o(st,"DIV",{class:!0});var gt=n(C);R=o(gt,"DIV",{class:!0});var Ht=n(R);O=u(Ht,"id:"),Ht.forEach(s),F=f(gt),A=o(gt,"DIV",{class:!0});var zt=n(A);k=u(zt,"string"),zt.forEach(s),gt.forEach(s),H=f(st),ae=o(st,"P",{class:!0});var ht=n(ae);G=u(ht,"Unique identifier for the table to generate unique IDs for the filters."),ht.forEach(s),st.forEach(s),z=f(le),N=o(le,"DIV",{class:!0});var rt=n(N);L=o(rt,"DIV",{class:!0});var bt=n(L);J=o(bt,"DIV",{class:!0});var Nt=n(J);ie=u(Nt,"data:"),Nt.forEach(s),h=f(bt),E=o(bt,"DIV",{class:!0});var Wt=n(E);q=u(Wt,W),Wt.forEach(s),bt.forEach(s),oe=f(rt),M=o(rt,"P",{class:!0});var at=n(M);pe=u(at,"A writable store of the type "),ne=o(at,"CODE",{class:!0});var $t=n(ne);P=u($t,"T[]"),$t.forEach(s),fe=u(at,`. Any changes in the store will
			be reflected in the table.`),at.forEach(s),rt.forEach(s),be=f(le),K=o(le,"DIV",{class:!0});var _t=n(K);re=o(_t,"DIV",{class:!0});var Dt=n(re);Y=o(Dt,"DIV",{class:!0});var jt=n(Y);de=u(jt,"optionsComponent:"),jt.forEach(s),xe=f(Dt),ve=o(Dt,"DIV",{class:!0});var Jt=n(ve);He=u(Jt,Xe),Jt.forEach(s),Dt.forEach(s),$e=f(_t),me=o(_t,"P",{class:!0});var ot=n(me);ze=u(ot,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),ce=o(ot,"CODE",{class:!0});var wt=n(ce);_e=u(wt,"optionsComponent"),wt.forEach(s),De=u(ot," was provided."),ot.forEach(s),_t.forEach(s),Ue=f(le),we=o(le,"DIV",{class:!0});var Et=n(we);ue=o(Et,"DIV",{class:!0});var Ct=n(ue);ge=o(Ct,"DIV",{class:!0});var qt=n(ge);Fe=u(qt,"pageSizes:"),qt.forEach(s),Be=f(Ct),he=o(Ct,"DIV",{class:!0});var It=n(he);Ne=u(It,Ze),It.forEach(s),Ct.forEach(s),Ae=f(Et),Ee=o(Et,"P",{class:!0});var Tt=n(Ee);We=u(Tt,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Tt.forEach(s),Et.forEach(s),lt=f(le),Ge=o(le,"DIV",{class:!0});var xt=n(Ge);Ce=o(xt,"DIV",{class:!0});var yt=n(Ce);je=o(yt,"DIV",{class:!0});var Yt=n(je);dt=u(Yt,"defaultPageSize:"),Yt.forEach(s),Je=f(yt),qe=o(yt,"DIV",{class:!0});var rs=n(qe);Re=u(rs,Bt),rs.forEach(s),yt.forEach(s),ke=f(xt),ye=o(xt,"P",{class:!0});var as=n(ye);ct=u(as,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),as.forEach(s),xt.forEach(s),ut=f(le),Ie=o(le,"DIV",{class:!0});var Kt=n(Ie);Le=o(Kt,"DIV",{class:!0});var Qt=n(Le);Ye=o(Qt,"DIV",{class:!0});var os=n(Ye);Ke=u(os,"columns:"),os.forEach(s),pt=f(Qt),Me=o(Qt,"DIV",{class:!0});var ns=n(Me);Gt=u(ns,At),ns.forEach(s),Qt.forEach(s),Ve=f(Kt),j=o(Kt,"P",{class:!0});var Xt=n(j);Qe=u(Xt,"An object with configuration for specific columns. "),et=o(Xt,"CODE",{class:!0});var is=n(et);Rt=u(is,"Columns"),is.forEach(s),kt=u(Xt,`
			object is described below.`),Xt.forEach(s),Kt.forEach(s),le.forEach(s),this.h()},h(){r(i,"class","font-semibold relative w-max"),r(x,"class","btn variant-ghost-primary w-min"),r(w,"class","italic div"),r(I,"class","variant-filled-secondary"),r(I,"data-popup","popupClickTableConfig"),r(l,"class","grid gap-2"),r(l,"id","tableConfig"),r(R,"class","italic"),r(A,"class","font-bold"),r(C,"class","flex gap-2 underline"),r(ae,"class","text-xl pl-10"),r(d,"class","items-center"),r(J,"class","italic"),r(E,"class","font-bold"),r(L,"class","flex gap-2 underline"),r(ne,"class","!text-xl"),r(M,"class","text-xl pl-10"),r(N,"class","items-center"),r(Y,"class","italic"),r(ve,"class","font-bold"),r(re,"class","flex gap-2"),r(ce,"class","!text-xl"),r(me,"class","text-xl pl-10"),r(K,"class","items-center"),r(ge,"class","italic"),r(he,"class","font-bold"),r(ue,"class","flex gap-2"),r(Ee,"class","text-xl pl-10"),r(we,"class","items-center"),r(je,"class","italic"),r(qe,"class","font-bold"),r(Ce,"class","flex gap-2"),r(ye,"class","text-xl pl-10"),r(Ge,"class","items-center"),r(Ye,"class","italic"),r(Me,"class","font-bold"),r(Le,"class","flex gap-2"),r(et,"class","!text-xl"),r(j,"class","text-xl pl-10"),r(Ie,"class","items-center"),r(t,"class","grid gap-5")},m(Oe,le){Pe(Oe,t,le),e(t,l),e(l,i),e(i,D),e(l,m),e(l,x),e(x,B),e(l,T),e(l,w),e(w,y),e(w,g),e(g,_),e(w,S),e(l,U),e(l,I),Z(v,I,null),e(t,V),e(t,d),e(d,C),e(C,R),e(R,O),e(C,F),e(C,A),e(A,k),e(d,H),e(d,ae),e(ae,G),e(t,z),e(t,N),e(N,L),e(L,J),e(J,ie),e(L,h),e(L,E),e(E,q),e(N,oe),e(N,M),e(M,pe),e(M,ne),e(ne,P),e(M,fe),e(t,be),e(t,K),e(K,re),e(re,Y),e(Y,de),e(re,xe),e(re,ve),e(ve,He),e(K,$e),e(K,me),e(me,ze),e(me,ce),e(ce,_e),e(me,De),e(t,Ue),e(t,we),e(we,ue),e(ue,ge),e(ge,Fe),e(ue,Be),e(ue,he),e(he,Ne),e(we,Ae),e(we,Ee),e(Ee,We),e(t,lt),e(t,Ge),e(Ge,Ce),e(Ce,je),e(je,dt),e(Ce,Je),e(Ce,qe),e(qe,Re),e(Ge,ke),e(Ge,ye),e(ye,ct),e(t,ut),e(t,Ie),e(Ie,Le),e(Le,Ye),e(Ye,Ke),e(Le,pt),e(Le,Me),e(Me,Gt),e(Ie,Ve),e(Ie,j),e(j,Qe),e(j,et),e(et,Rt),e(j,kt),tt=!0,nt||(Ot=Zt(es.call(null,x,b[0])),nt=!0)},p:Te,i(Oe){tt||(ee(v.$$.fragment,Oe),tt=!0)},o(Oe){te(v.$$.fragment,Oe),tt=!1},d(Oe){Oe&&s(t),se(v),nt=!1,Ot()}}}function Gs(b){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class Rs extends Vt{constructor(t){super(),St(this,t,Gs,As,Ut,{})}}function ks(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U,I,v,V,d,C,R,O,F,A,k,H,ae;return w=new ts({props:{language:"ts",code:Is}}),{c(){t=a("div"),l=a("div"),i=a("h3"),$=c("Columns"),D=p(),m=a("button"),x=c("Show type details"),B=p(),T=a("div"),Q(w.$$.fragment),y=p(),g=a("div"),_=a("div"),S=a("div"),U=c("[key: "),I=a("strong"),v=c("string"),V=c("]:"),d=p(),C=a("div"),R=c("Column"),O=p(),F=a("p"),A=c(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(G){t=o(G,"DIV",{class:!0});var z=n(t);l=o(z,"DIV",{class:!0,id:!0});var N=n(l);i=o(N,"H3",{class:!0});var L=n(i);$=u(L,"Columns"),L.forEach(s),D=f(N),m=o(N,"BUTTON",{class:!0});var J=n(m);x=u(J,"Show type details"),J.forEach(s),B=f(N),T=o(N,"DIV",{"data-popup":!0});var ie=n(T);X(w.$$.fragment,ie),ie.forEach(s),N.forEach(s),y=f(z),g=o(z,"DIV",{class:!0});var h=n(g);_=o(h,"DIV",{class:!0});var E=n(_);S=o(E,"DIV",{class:!0});var W=n(S);U=u(W,"[key: "),I=o(W,"STRONG",{});var q=n(I);v=u(q,"string"),q.forEach(s),V=u(W,"]:"),W.forEach(s),d=f(E),C=o(E,"DIV",{class:!0});var oe=n(C);R=u(oe,"Column"),oe.forEach(s),E.forEach(s),O=f(h),F=o(h,"P",{class:!0});var M=n(F);A=u(M,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),M.forEach(s),h.forEach(s),z.forEach(s),this.h()},h(){r(i,"class","font-semibold items-center w-max"),r(m,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumns"),r(l,"class","grid gap-2"),r(l,"id","columns"),r(S,"class","italic"),r(C,"class","font-bold"),r(_,"class","flex gap-2"),r(F,"class","text-xl pl-10"),r(g,"class","items-center"),r(t,"class","grid gap-5")},m(G,z){Pe(G,t,z),e(t,l),e(l,i),e(i,$),e(l,D),e(l,m),e(m,x),e(l,B),e(l,T),Z(w,T,null),e(t,y),e(t,g),e(g,_),e(_,S),e(S,U),e(S,I),e(I,v),e(S,V),e(_,d),e(_,C),e(C,R),e(g,O),e(g,F),e(F,A),k=!0,H||(ae=Zt(es.call(null,m,b[0])),H=!0)},p:Te,i(G){k||(ee(w.$$.fragment,G),k=!0)},o(G){te(w.$$.fragment,G),k=!1},d(G){G&&s(t),se(w),H=!1,ae()}}}function Ls(b){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class Os extends Vt{constructor(t){super(),St(this,t,Ls,ks,Ut,{})}}function Ms(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U,I,v,V,d,C,R,O,F,A,k,H,ae,G,z,N,L,J,ie,h,E,W,q,oe,M,pe,ne,P,fe,be,K,re,Y,de,xe,ve,Xe,He,$e,me,ze,ce,_e,De,Ue,we,ue,ge,Fe,Be,he,Ze,Ne,Ae,Ee,We,lt,Ge,Ce,je,dt,Je,qe,Bt,Re,ke,ye,ct,ut,Ie,Le,Ye,Ke,pt,Me,At,Gt;return w=new ts({props:{language:"ts",code:Ts}}),{c(){t=a("div"),l=a("div"),i=a("h3"),$=c("Column"),D=p(),m=a("button"),x=c("Show type details"),B=p(),T=a("div"),Q(w.$$.fragment),y=p(),g=a("div"),_=a("div"),S=a("div"),U=c("header:"),I=p(),v=a("div"),V=c("string"),d=p(),C=a("p"),R=c(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),O=p(),F=a("div"),A=a("div"),k=a("div"),H=c("exclude:"),ae=p(),G=a("div"),z=c("boolean"),N=p(),L=a("p"),J=c(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),ie=p(),h=a("div"),E=a("div"),W=a("div"),q=c("disableFiltering:"),oe=p(),M=a("div"),pe=c("boolean"),ne=p(),P=a("p"),fe=c("Whether to disable filtering for the column or not. By default, filtering is enabled."),be=p(),K=a("div"),re=a("div"),Y=a("div"),de=c("disableSorting:"),xe=p(),ve=a("div"),Xe=c("boolean"),He=p(),$e=a("p"),me=c("Whether to disable sorting for the column or not. By default, sorting is enabled."),ze=p(),ce=a("div"),_e=a("div"),De=a("div"),Ue=c("colFitlerFn:"),we=p(),ue=a("div"),ge=a("a"),Fe=c("ColumnFilterFn"),Be=p(),he=a("p"),Ze=c(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Ne=p(),Ae=a("div"),Ee=a("div"),We=a("div"),lt=c("colFilterComponent:"),Ge=p(),Ce=a("div"),je=c("SvelteComponent"),dt=p(),Je=a("p"),qe=c(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Bt=p(),Re=a("div"),ke=a("div"),ye=a("div"),ct=c("instructions:"),ut=p(),Ie=a("div"),Le=c("ColumnInstructions"),Ye=p(),Ke=a("p"),pt=c("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(Ve){t=o(Ve,"DIV",{class:!0});var j=n(t);l=o(j,"DIV",{class:!0,id:!0});var Qe=n(l);i=o(Qe,"H3",{class:!0});var et=n(i);$=u(et,"Column"),et.forEach(s),D=f(Qe),m=o(Qe,"BUTTON",{class:!0});var Rt=n(m);x=u(Rt,"Show type details"),Rt.forEach(s),B=f(Qe),T=o(Qe,"DIV",{"data-popup":!0});var kt=n(T);X(w.$$.fragment,kt),kt.forEach(s),Qe.forEach(s),y=f(j),g=o(j,"DIV",{class:!0});var tt=n(g);_=o(tt,"DIV",{class:!0});var nt=n(_);S=o(nt,"DIV",{class:!0});var Ot=n(S);U=u(Ot,"header:"),Ot.forEach(s),I=f(nt),v=o(nt,"DIV",{class:!0});var Oe=n(v);V=u(Oe,"string"),Oe.forEach(s),nt.forEach(s),d=f(tt),C=o(tt,"P",{class:!0});var le=n(C);R=u(le,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),le.forEach(s),tt.forEach(s),O=f(j),F=o(j,"DIV",{class:!0});var Se=n(F);A=o(Se,"DIV",{class:!0});var ft=n(A);k=o(ft,"DIV",{class:!0});var Mt=n(k);H=u(Mt,"exclude:"),Mt.forEach(s),ae=f(ft),G=o(ft,"DIV",{class:!0});var mt=n(G);z=u(mt,"boolean"),mt.forEach(s),ft.forEach(s),N=f(Se),L=o(Se,"P",{class:!0});var Pt=n(L);J=u(Pt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Pt.forEach(s),Se.forEach(s),ie=f(j),h=o(j,"DIV",{class:!0});var vt=n(h);E=o(vt,"DIV",{class:!0});var st=n(E);W=o(st,"DIV",{class:!0});var gt=n(W);q=u(gt,"disableFiltering:"),gt.forEach(s),oe=f(st),M=o(st,"DIV",{class:!0});var Ht=n(M);pe=u(Ht,"boolean"),Ht.forEach(s),st.forEach(s),ne=f(vt),P=o(vt,"P",{class:!0});var zt=n(P);fe=u(zt,"Whether to disable filtering for the column or not. By default, filtering is enabled."),zt.forEach(s),vt.forEach(s),be=f(j),K=o(j,"DIV",{class:!0});var ht=n(K);re=o(ht,"DIV",{class:!0});var rt=n(re);Y=o(rt,"DIV",{class:!0});var bt=n(Y);de=u(bt,"disableSorting:"),bt.forEach(s),xe=f(rt),ve=o(rt,"DIV",{class:!0});var Nt=n(ve);Xe=u(Nt,"boolean"),Nt.forEach(s),rt.forEach(s),He=f(ht),$e=o(ht,"P",{class:!0});var Wt=n($e);me=u(Wt,"Whether to disable sorting for the column or not. By default, sorting is enabled."),Wt.forEach(s),ht.forEach(s),ze=f(j),ce=o(j,"DIV",{class:!0});var at=n(ce);_e=o(at,"DIV",{class:!0});var $t=n(_e);De=o($t,"DIV",{class:!0});var _t=n(De);Ue=u(_t,"colFitlerFn:"),_t.forEach(s),we=f($t),ue=o($t,"DIV",{class:!0});var Dt=n(ue);ge=o(Dt,"A",{href:!0});var jt=n(ge);Fe=u(jt,"ColumnFilterFn"),jt.forEach(s),Dt.forEach(s),$t.forEach(s),Be=f(at),he=o(at,"P",{class:!0});var Jt=n(he);Ze=u(Jt,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Jt.forEach(s),at.forEach(s),Ne=f(j),Ae=o(j,"DIV",{class:!0});var ot=n(Ae);Ee=o(ot,"DIV",{class:!0});var wt=n(Ee);We=o(wt,"DIV",{class:!0});var Et=n(We);lt=u(Et,"colFilterComponent:"),Et.forEach(s),Ge=f(wt),Ce=o(wt,"DIV",{class:!0});var Ct=n(Ce);je=u(Ct,"SvelteComponent"),Ct.forEach(s),wt.forEach(s),dt=f(ot),Je=o(ot,"P",{class:!0});var qt=n(Je);qe=u(qt,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),qt.forEach(s),ot.forEach(s),Bt=f(j),Re=o(j,"DIV",{class:!0});var It=n(Re);ke=o(It,"DIV",{class:!0});var Tt=n(ke);ye=o(Tt,"DIV",{class:!0});var xt=n(ye);ct=u(xt,"instructions:"),xt.forEach(s),ut=f(Tt),Ie=o(Tt,"DIV",{class:!0});var yt=n(Ie);Le=u(yt,"ColumnInstructions"),yt.forEach(s),Tt.forEach(s),Ye=f(It),Ke=o(It,"P",{class:!0});var Yt=n(Ke);pt=u(Yt,"Configuration for the column's appearance, sorting and filtering functionalities."),Yt.forEach(s),It.forEach(s),j.forEach(s),this.h()},h(){r(i,"class","font-semibold items-center w-max"),r(m,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumn"),r(l,"class","grid gap-2"),r(l,"id","column"),r(S,"class","italic"),r(v,"class","font-bold"),r(_,"class","flex gap-2"),r(C,"class","text-xl pl-10"),r(g,"class","items-center"),r(k,"class","italic"),r(G,"class","font-bold"),r(A,"class","flex gap-2"),r(L,"class","text-xl pl-10"),r(F,"class","items-center"),r(W,"class","italic"),r(M,"class","font-bold"),r(E,"class","flex gap-2"),r(P,"class","text-xl pl-10"),r(h,"class","items-center"),r(Y,"class","italic"),r(ve,"class","font-bold"),r(re,"class","flex gap-2"),r($e,"class","text-xl pl-10"),r(K,"class","items-center"),r(De,"class","italic"),r(ge,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),r(ue,"class","font-bold"),r(_e,"class","flex gap-2"),r(he,"class","text-xl pl-10"),r(ce,"class","items-center"),r(We,"class","italic"),r(Ce,"class","font-bold"),r(Ee,"class","flex gap-2"),r(Je,"class","text-xl pl-10"),r(Ae,"class","items-center"),r(ye,"class","italic"),r(Ie,"class","font-bold"),r(ke,"class","flex gap-2"),r(Ke,"class","text-xl pl-10"),r(Re,"class","items-center"),r(t,"class","grid gap-5")},m(Ve,j){Pe(Ve,t,j),e(t,l),e(l,i),e(i,$),e(l,D),e(l,m),e(m,x),e(l,B),e(l,T),Z(w,T,null),e(t,y),e(t,g),e(g,_),e(_,S),e(S,U),e(_,I),e(_,v),e(v,V),e(g,d),e(g,C),e(C,R),e(t,O),e(t,F),e(F,A),e(A,k),e(k,H),e(A,ae),e(A,G),e(G,z),e(F,N),e(F,L),e(L,J),e(t,ie),e(t,h),e(h,E),e(E,W),e(W,q),e(E,oe),e(E,M),e(M,pe),e(h,ne),e(h,P),e(P,fe),e(t,be),e(t,K),e(K,re),e(re,Y),e(Y,de),e(re,xe),e(re,ve),e(ve,Xe),e(K,He),e(K,$e),e($e,me),e(t,ze),e(t,ce),e(ce,_e),e(_e,De),e(De,Ue),e(_e,we),e(_e,ue),e(ue,ge),e(ge,Fe),e(ce,Be),e(ce,he),e(he,Ze),e(t,Ne),e(t,Ae),e(Ae,Ee),e(Ee,We),e(We,lt),e(Ee,Ge),e(Ee,Ce),e(Ce,je),e(Ae,dt),e(Ae,Je),e(Je,qe),e(t,Bt),e(t,Re),e(Re,ke),e(ke,ye),e(ye,ct),e(ke,ut),e(ke,Ie),e(Ie,Le),e(Re,Ye),e(Re,Ke),e(Ke,pt),Me=!0,At||(Gt=Zt(es.call(null,m,b[0])),At=!0)},p:Te,i(Ve){Me||(ee(w.$$.fragment,Ve),Me=!0)},o(Ve){te(w.$$.fragment,Ve),Me=!1},d(Ve){Ve&&s(t),se(w),At=!1,Gt()}}}function Ps(b){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Hs extends Vt{constructor(t){super(),St(this,t,Ps,Ms,Ut,{})}}function zs(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U,I,v,V,d,C,R,O,F,A,k,H,ae,G,z,N,L,J,ie,h,E,W,q,oe,M,pe,ne,P,fe,be,K,re;return w=new ts({props:{language:"ts",code:xs}}),{c(){t=a("div"),l=a("div"),i=a("h3"),$=c("ColumnInstructions"),D=p(),m=a("button"),x=c("Show type details"),B=p(),T=a("div"),Q(w.$$.fragment),y=p(),g=a("div"),_=a("div"),S=a("div"),U=c("toStringFn:"),I=p(),v=a("div"),V=c("(value: any) => string"),d=p(),C=a("p"),R=c("Custom toString function to be applied on the column."),O=p(),F=a("div"),A=a("div"),k=a("div"),H=c("toSortableValueFn:"),ae=p(),G=a("div"),z=c("(value: any) => string | number"),N=p(),L=a("p"),J=c("Custom function to return either a string or a number value to have a sortable column."),ie=p(),h=a("div"),E=a("div"),W=a("div"),q=c("toFilterableValueFn:"),oe=p(),M=a("div"),pe=c("(value: any) => string | number | Date"),ne=p(),P=a("p"),fe=c(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),this.h()},l(Y){t=o(Y,"DIV",{class:!0});var de=n(t);l=o(de,"DIV",{class:!0,id:!0});var xe=n(l);i=o(xe,"H3",{class:!0});var ve=n(i);$=u(ve,"ColumnInstructions"),ve.forEach(s),D=f(xe),m=o(xe,"BUTTON",{class:!0});var Xe=n(m);x=u(Xe,"Show type details"),Xe.forEach(s),B=f(xe),T=o(xe,"DIV",{"data-popup":!0});var He=n(T);X(w.$$.fragment,He),He.forEach(s),xe.forEach(s),y=f(de),g=o(de,"DIV",{class:!0});var $e=n(g);_=o($e,"DIV",{class:!0});var me=n(_);S=o(me,"DIV",{class:!0});var ze=n(S);U=u(ze,"toStringFn:"),ze.forEach(s),I=f(me),v=o(me,"DIV",{class:!0});var ce=n(v);V=u(ce,"(value: any) => string"),ce.forEach(s),me.forEach(s),d=f($e),C=o($e,"P",{class:!0});var _e=n(C);R=u(_e,"Custom toString function to be applied on the column."),_e.forEach(s),$e.forEach(s),O=f(de),F=o(de,"DIV",{class:!0});var De=n(F);A=o(De,"DIV",{class:!0});var Ue=n(A);k=o(Ue,"DIV",{class:!0});var we=n(k);H=u(we,"toSortableValueFn:"),we.forEach(s),ae=f(Ue),G=o(Ue,"DIV",{class:!0});var ue=n(G);z=u(ue,"(value: any) => string | number"),ue.forEach(s),Ue.forEach(s),N=f(De),L=o(De,"P",{class:!0});var ge=n(L);J=u(ge,"Custom function to return either a string or a number value to have a sortable column."),ge.forEach(s),De.forEach(s),ie=f(de),h=o(de,"DIV",{class:!0});var Fe=n(h);E=o(Fe,"DIV",{class:!0});var Be=n(E);W=o(Be,"DIV",{class:!0});var he=n(W);q=u(he,"toFilterableValueFn:"),he.forEach(s),oe=f(Be),M=o(Be,"DIV",{class:!0});var Ze=n(M);pe=u(Ze,"(value: any) => string | number | Date"),Ze.forEach(s),Be.forEach(s),ne=f(Fe),P=o(Fe,"P",{class:!0});var Ne=n(P);fe=u(Ne,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Ne.forEach(s),Fe.forEach(s),de.forEach(s),this.h()},h(){r(i,"class","font-semibold items-center w-max"),r(m,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumnInstructions"),r(l,"class","grid gap-2"),r(l,"id","columnInstructions"),r(S,"class","italic"),r(v,"class","font-bold"),r(_,"class","flex gap-2"),r(C,"class","text-xl pl-10"),r(g,"class","items-center"),r(k,"class","italic"),r(G,"class","font-bold"),r(A,"class","flex gap-2"),r(L,"class","text-xl pl-10"),r(F,"class","items-center"),r(W,"class","italic"),r(M,"class","font-bold"),r(E,"class","flex gap-2"),r(P,"class","text-xl pl-10"),r(h,"class","items-center"),r(t,"class","grid gap-5")},m(Y,de){Pe(Y,t,de),e(t,l),e(l,i),e(i,$),e(l,D),e(l,m),e(m,x),e(l,B),e(l,T),Z(w,T,null),e(t,y),e(t,g),e(g,_),e(_,S),e(S,U),e(_,I),e(_,v),e(v,V),e(g,d),e(g,C),e(C,R),e(t,O),e(t,F),e(F,A),e(A,k),e(k,H),e(A,ae),e(A,G),e(G,z),e(F,N),e(F,L),e(L,J),e(t,ie),e(t,h),e(h,E),e(E,W),e(W,q),e(E,oe),e(E,M),e(M,pe),e(h,ne),e(h,P),e(P,fe),be=!0,K||(re=Zt(es.call(null,m,b[0])),K=!0)},p:Te,i(Y){be||(ee(w.$$.fragment,Y),be=!0)},o(Y){te(w.$$.fragment,Y),be=!1},d(Y){Y&&s(t),se(w),K=!1,re()}}}function Ns(b){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Ws extends Vt{constructor(t){super(),St(this,t,Ns,zs,Ut,{})}}function js(b){let t,l,i,$;return{c(){t=a("button"),l=c("Odd or even"),this.h()},l(D){t=o(D,"BUTTON",{class:!0});var m=n(t);l=u(m,"Odd or even"),m.forEach(s),this.h()},h(){r(t,"class","btn btn-sm variant-filled-secondary")},m(D,m){Pe(D,t,m),e(t,l),i||($=us(t,"click",ps(b[2])),i=!0)},p:Te,i:Te,o:Te,d(D){D&&s(t),i=!1,$()}}}function Js(b,t,l){let{row:i}=t,{dispatchFn:$}=t;const D=()=>$({type:i.id%2===0?"even":"odd"});return b.$$set=m=>{"row"in m&&l(0,i=m.row),"dispatchFn"in m&&l(1,$=m.dispatchFn)},[i,$,D]}class qs extends Vt{constructor(t){super(),St(this,t,Js,js,Ut,{row:0,dispatchFn:1})}}const Ys=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3"},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Ks=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Qs=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Xs=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Zs=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],er=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}];function ds(b,t,l){const i=b.slice();return i[16]=t[l],i}function cs(b){let t,l,i=b[16].name+"",$,D,m,x,B=b[16].group+"",T,w;return{c(){t=a("tr"),l=a("td"),$=c(i),D=p(),m=a("td"),x=a("div"),T=c(B),w=p()},l(y){t=o(y,"TR",{});var g=n(t);l=o(g,"TD",{});var _=n(l);$=u(_,i),_.forEach(s),D=f(g),m=o(g,"TD",{});var S=n(m);x=o(S,"DIV",{});var U=n(x);T=u(U,B),U.forEach(s),S.forEach(s),w=f(g),g.forEach(s)},m(y,g){Pe(y,t,g),e(t,l),e(l,$),e(t,D),e(t,m),e(m,x),e(x,T),e(t,w)},p(y,g){g&1&&i!==(i=y[16].name+"")&&ls($,i),g&1&&B!==(B=y[16].group+"")&&ls(T,B)},d(y){y&&s(t)}}}function tr(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U=b[0],I=[];for(let v=0;v<U.length;v+=1)I[v]=cs(ds(b,U,v));return{c(){t=a("div"),l=c("Used classes are important to include for the table to have a uniform look."),i=p(),$=a("div"),D=a("table"),m=a("thead"),x=a("tr"),B=a("th"),T=c("Group"),w=p(),y=a("th"),g=c("Description"),_=p(),S=a("tbody");for(let v=0;v<I.length;v+=1)I[v].c();this.h()},l(v){t=o(v,"DIV",{class:!0});var V=n(t);l=u(V,"Used classes are important to include for the table to have a uniform look."),V.forEach(s),i=f(v),$=o(v,"DIV",{class:!0});var d=n($);D=o(d,"TABLE",{class:!0});var C=n(D);m=o(C,"THEAD",{});var R=n(m);x=o(R,"TR",{class:!0});var O=n(x);B=o(O,"TH",{class:!0});var F=n(B);T=u(F,"Group"),F.forEach(s),w=f(O),y=o(O,"TH",{class:!0});var A=n(y);g=u(A,"Description"),A.forEach(s),O.forEach(s),R.forEach(s),_=f(C),S=o(C,"TBODY",{});var k=n(S);for(let H=0;H<I.length;H+=1)I[H].l(k);k.forEach(s),C.forEach(s),d.forEach(s),this.h()},h(){r(t,"class","pb-2"),r(B,"class","!p-2"),r(y,"class","!p-2"),r(x,"class","bg-primary-300"),r(D,"class","table table-compact bg-tertiary-200"),r($,"class","table-container")},m(v,V){Pe(v,t,V),e(t,l),Pe(v,i,V),Pe(v,$,V),e($,D),e(D,m),e(m,x),e(x,B),e(B,T),e(x,w),e(x,y),e(y,g),e(D,_),e(D,S);for(let d=0;d<I.length;d+=1)I[d]&&I[d].m(S,null)},p(v,V){if(V&1){U=v[0];let d;for(d=0;d<U.length;d+=1){const C=ds(v,U,d);I[d]?I[d].p(C,V):(I[d]=cs(C),I[d].c(),I[d].m(S,null))}for(;d<I.length;d+=1)I[d].d(1);I.length=U.length}},d(v){v&&s(t),v&&s(i),v&&s($),ms(I,v)}}}function sr(b){let t,l;return t=new Ft({props:{config:b[1]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function rr(b){let t,l;return t=new Ft({props:{config:b[3]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function ar(b){let t,l;return t=new Ft({props:{config:b[4]}}),t.$on("action",b[9]),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function or(b){let t,l;return t=new Ft({props:{config:b[5]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function nr(b){let t,l;return t=new Ft({props:{config:b[6]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function ir(b){let t,l;return t=new Ft({props:{config:b[7]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function lr(b){let t,l;return t=new Ft({props:{config:b[8]}}),{c(){Q(t.$$.fragment)},l(i){X(t.$$.fragment,i)},m(i,$){Z(t,i,$),l=!0},p:Te,i(i){l||(ee(t.$$.fragment,i),l=!0)},o(i){te(t.$$.fragment,i),l=!1},d(i){se(t,i)}}}function dr(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U,I,v,V,d,C,R,O,F,A,k,H,ae,G,z,N,L,J,ie;return x=new it({props:{title:"Simple table without Table component",svelte:hs,data:ss,$$slots:{default:[tr]},$$scope:{ctx:b}}}),w=new it({props:{title:"Table component",svelte:bs,data:$s,$$slots:{default:[sr]},$$scope:{ctx:b}}}),_=new it({props:{title:"Minimal configuration",svelte:_s,data:ss,$$slots:{default:[rr]},$$scope:{ctx:b}}}),I=new it({props:{title:"Full configuration",svelte:Ds,data:ss,$$slots:{default:[ar]},$$scope:{ctx:b}}}),F=new it({props:{title:"Date",svelte:ws,data:Es,$$slots:{default:[or]},$$scope:{ctx:b}}}),H=new it({props:{title:"Missing values",svelte:ys,data:Vs,$$slots:{default:[nr]},$$scope:{ctx:b}}}),z=new it({props:{title:"URLs",svelte:Ss,data:Us,$$slots:{default:[ir]},$$scope:{ctx:b}}}),J=new it({props:{title:"Boolean",svelte:Fs,data:Bs,$$slots:{default:[lr]},$$scope:{ctx:b}}}),{c(){t=a("div"),l=a("h2"),i=c("Examples"),$=p(),D=a("div"),m=a("div"),Q(x.$$.fragment),B=p(),T=a("div"),Q(w.$$.fragment),y=p(),g=a("div"),Q(_.$$.fragment),S=p(),U=a("div"),Q(I.$$.fragment),v=p(),V=a("div"),d=a("h2"),C=c("Complex data types"),R=p(),O=a("div"),Q(F.$$.fragment),A=p(),k=a("div"),Q(H.$$.fragment),ae=p(),G=a("div"),Q(z.$$.fragment),N=p(),L=a("div"),Q(J.$$.fragment),this.h()},l(h){t=o(h,"DIV",{class:!0});var E=n(t);l=o(E,"H2",{});var W=n(l);i=u(W,"Examples"),W.forEach(s),$=f(E),D=o(E,"DIV",{class:!0});var q=n(D);m=o(q,"DIV",{class:!0,id:!0});var oe=n(m);X(x.$$.fragment,oe),oe.forEach(s),B=f(q),T=o(q,"DIV",{class:!0,id:!0});var M=n(T);X(w.$$.fragment,M),M.forEach(s),y=f(q),g=o(q,"DIV",{class:!0,id:!0});var pe=n(g);X(_.$$.fragment,pe),pe.forEach(s),S=f(q),U=o(q,"DIV",{class:!0,id:!0});var ne=n(U);X(I.$$.fragment,ne),ne.forEach(s),q.forEach(s),v=f(E),V=o(E,"DIV",{id:!0});var P=n(V);d=o(P,"H2",{});var fe=n(d);C=u(fe,"Complex data types"),fe.forEach(s),R=f(P),O=o(P,"DIV",{class:!0,id:!0});var be=n(O);X(F.$$.fragment,be),be.forEach(s),A=f(P),k=o(P,"DIV",{id:!0});var K=n(k);X(H.$$.fragment,K),K.forEach(s),ae=f(P),G=o(P,"DIV",{id:!0});var re=n(G);X(z.$$.fragment,re),re.forEach(s),N=f(P),L=o(P,"DIV",{id:!0});var Y=n(L);X(J.$$.fragment,Y),Y.forEach(s),P.forEach(s),E.forEach(s),this.h()},h(){r(m,"class","grid gap-5"),r(m,"id","simpleTable"),r(T,"class","grid gap-5"),r(T,"id","groups"),r(g,"class","grid gap-5"),r(g,"id","users"),r(U,"class","grid gap-5"),r(U,"id","usersNoRoles"),r(D,"class","grid gap-20"),r(O,"class","grid gap-5"),r(O,"id","usersBD"),r(k,"id","combination"),r(G,"id","URLs"),r(L,"id","boolean"),r(V,"id","complexTypes"),r(t,"class","grid gap-1")},m(h,E){Pe(h,t,E),e(t,l),e(l,i),e(t,$),e(t,D),e(D,m),Z(x,m,null),e(D,B),e(D,T),Z(w,T,null),e(D,y),e(D,g),Z(_,g,null),e(D,S),e(D,U),Z(I,U,null),e(t,v),e(t,V),e(V,d),e(d,C),e(V,R),e(V,O),Z(F,O,null),e(V,A),e(V,k),Z(H,k,null),e(V,ae),e(V,G),Z(z,G,null),e(V,N),e(V,L),Z(J,L,null),ie=!0},p(h,[E]){const W={};E&524289&&(W.$$scope={dirty:E,ctx:h}),x.$set(W);const q={};E&524288&&(q.$$scope={dirty:E,ctx:h}),w.$set(q);const oe={};E&524288&&(oe.$$scope={dirty:E,ctx:h}),_.$set(oe);const M={};E&524288&&(M.$$scope={dirty:E,ctx:h}),I.$set(M);const pe={};E&524288&&(pe.$$scope={dirty:E,ctx:h}),F.$set(pe);const ne={};E&524288&&(ne.$$scope={dirty:E,ctx:h}),H.$set(ne);const P={};E&524288&&(P.$$scope={dirty:E,ctx:h}),z.$set(P);const fe={};E&524288&&(fe.$$scope={dirty:E,ctx:h}),J.$set(fe)},i(h){ie||(ee(x.$$.fragment,h),ee(w.$$.fragment,h),ee(_.$$.fragment,h),ee(I.$$.fragment,h),ee(F.$$.fragment,h),ee(H.$$.fragment,h),ee(z.$$.fragment,h),ee(J.$$.fragment,h),ie=!0)},o(h){te(x.$$.fragment,h),te(w.$$.fragment,h),te(_.$$.fragment,h),te(I.$$.fragment,h),te(F.$$.fragment,h),te(H.$$.fragment,h),te(z.$$.fragment,h),te(J.$$.fragment,h),ie=!1},d(h){h&&s(t),se(x),se(w),se(_),se(I),se(F),se(H),se(z),se(J)}}}function cr(b,t,l){let i;const D={id:"userGroups",data:Lt(Ys),columns:{id:{header:"ID"}}},m=Lt(Ks);fs(b,m,d=>l(0,i=d));const x={id:"users",data:m},B={id:"usersNoRoles",data:m,optionsComponent:qs,columns:{id:{colFilterFn:vs,colFilterComponent:gs},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},w={id:"usersBD",data:Lt(Qs),columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:d=>d.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:d=>d.getTime(),toFilterableValueFn:d=>d}}}},y={32655:"NA",32654:"NM",32653:"ND"},_={id:"usersMissingIDs",data:Lt(Xs),columns:{id:{header:"ID",instructions:{toStringFn:d=>d in y?y[d]:d.toString()}}}},U={id:"websites",data:Lt(Zs),columns:{URL:{header:"URL",instructions:{toStringFn:d=>d.toString(),toFilterableValueFn:d=>d.toString()},disableSorting:!0}}},v={id:"usersAndAdmins",data:Lt(er),columns:{isAdmin:{header:"Admin",instructions:{toStringFn:d=>d?"✓":""},disableFiltering:!0}}};return[i,D,m,x,B,w,_,U,v,d=>alert(d.detail.type)]}class ur extends Vt{constructor(t){super(),St(this,t,cr,dr,Ut,{})}}function pr(b){let t,l,i,$,D,m,x,B,T,w,y,g,_,S,U,I,v,V;return T=new Rs({}),y=new Os({}),_=new Hs({}),U=new Ws({}),v=new ur({}),{c(){t=a("div"),l=a("div"),i=a("h1"),$=c("Table"),D=p(),m=a("h2"),x=c("Types"),B=p(),Q(T.$$.fragment),w=p(),Q(y.$$.fragment),g=p(),Q(_.$$.fragment),S=p(),Q(U.$$.fragment),I=p(),Q(v.$$.fragment),this.h()},l(d){t=o(d,"DIV",{class:!0,id:!0});var C=n(t);l=o(C,"DIV",{class:!0});var R=n(l);i=o(R,"H1",{class:!0});var O=n(i);$=u(O,"Table"),O.forEach(s),D=f(R),m=o(R,"H2",{});var F=n(m);x=u(F,"Types"),F.forEach(s),B=f(R),X(T.$$.fragment,R),R.forEach(s),w=f(C),X(y.$$.fragment,C),g=f(C),X(_.$$.fragment,C),S=f(C),X(U.$$.fragment,C),I=f(C),X(v.$$.fragment,C),C.forEach(s),this.h()},h(){r(i,"class","font-bold !text-6xl"),r(l,"class","grid gap-5"),r(t,"class","grid gap-20 p-10"),r(t,"id","toc-target")},m(d,C){Pe(d,t,C),e(t,l),e(l,i),e(i,$),e(l,D),e(l,m),e(m,x),e(l,B),Z(T,l,null),e(t,w),Z(y,t,null),e(t,g),Z(_,t,null),e(t,S),Z(U,t,null),e(t,I),Z(v,t,null),V=!0},p:Te,i(d){V||(ee(T.$$.fragment,d),ee(y.$$.fragment,d),ee(_.$$.fragment,d),ee(U.$$.fragment,d),ee(v.$$.fragment,d),V=!0)},o(d){te(T.$$.fragment,d),te(y.$$.fragment,d),te(_.$$.fragment,d),te(U.$$.fragment,d),te(v.$$.fragment,d),V=!1},d(d){d&&s(t),se(T),se(y),se(_),se(U),se(v)}}}class $r extends Vt{constructor(t){super(),St(this,t,null,pr,Ut,{})}}export{$r as component};
