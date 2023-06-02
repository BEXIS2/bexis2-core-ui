import{S as yt,i as wt,s as St,k as a,q as d,a as u,y as te,l as o,m as l,r as c,h as s,c as p,z as se,n as r,b as Ne,D as e,A as re,ab as Zt,W as we,g as ae,d as oe,B as le,M as us,a5 as ps,V as fs,U as vs,u as is}from"../chunks/index.05f6e2c5.js";/* empty css                             */import{p as es}from"../chunks/popup.1ab4297a.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.3138e239.js";import{a as ts,C as Ot,T as Jt,c as ms,b as gs}from"../chunks/CodeContainer.5f6520ac.js";import{w as Xt}from"../chunks/index.be26ac05.js";const hs=`
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
				
const groupsStore = writable<Group[]>(userGroups);`,_s=`
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
/>`,Es=`
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

<Table config={usersBDConfig} />`,Is=`
type UserBD = { 
	id: number; 
	name: string; 
	dateOfBirth: Date 
};

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
	...
];

const usersBDStore = writable<UserBD[]>(usersBD);`,Cs=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,Ts=`
export interface Columns {
	[key: string]: Column;
}`,Vs=`
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

<Table config={usersMissingIDsConfig} />`,ws=`
type UserMissingID = { 
	id: number;
	name: string; 
	group: string; 
	role: string 
};
	
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

const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`;function Ss(C){let t,i,n,E="TableConfig <T>",b,f,x,U,T,$,w,g,h,S,_,I,m,F,v,D,M,P,B,G,z,j,W,k,q,V,y,J,L,R,O,A="Writable <T[]>",X,K,N,Ie,ue,Z,Ce,Se,Q,ee,Y,ie,Te,fe,Xe="SvelteComponent",Ae,ge,pe,He,de,he,be,Be,$e,ce,ve,Fe,Ge,me,Ze="number[]",je,Ue,_e,Le,nt,ke,De,We,it,qe,Je,Bt="number",Oe,Me,Ve,dt,ct,Ee,Re,Ye,Ke,ut,ze,Ft="Columns",Gt,xe,H,Qe,et,Ut,kt,tt,lt,Mt;return m=new ts({props:{language:"ts",code:Cs}}),{c(){t=a("div"),i=a("div"),n=a("h3"),b=d(E),f=u(),x=a("button"),U=d("Show type details"),T=u(),$=a("div"),w=d("Underlined attributes are "),g=a("strong"),h=d("required"),S=d("."),_=u(),I=a("div"),te(m.$$.fragment),F=u(),v=a("div"),D=a("div"),M=a("div"),P=d("id:"),B=u(),G=a("div"),z=d("string"),j=u(),W=a("p"),k=d("Unique identifier for the table to generate unique IDs for the filters."),q=u(),V=a("div"),y=a("div"),J=a("div"),L=d("data:"),R=u(),O=a("div"),X=d(A),K=u(),N=a("p"),Ie=d("A writable store of the type "),ue=a("code"),Z=d("T[]"),Ce=d(`. Any changes in the store will
			be reflected in the table.`),Se=u(),Q=a("div"),ee=a("div"),Y=a("div"),ie=d("optionsComponent:"),Te=u(),fe=a("div"),Ae=d(Xe),ge=u(),pe=a("p"),He=d(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),de=a("code"),he=d("optionsComponent"),be=d(" was provided."),Be=u(),$e=a("div"),ce=a("div"),ve=a("div"),Fe=d("pageSizes:"),Ge=u(),me=a("div"),je=d(Ze),Ue=u(),_e=a("p"),Le=d("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),nt=u(),ke=a("div"),De=a("div"),We=a("div"),it=d("defaultPageSize:"),qe=u(),Je=a("div"),Oe=d(Bt),Me=u(),Ve=a("p"),dt=d(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),ct=u(),Ee=a("div"),Re=a("div"),Ye=a("div"),Ke=d("columns:"),ut=u(),ze=a("div"),Gt=d(Ft),xe=u(),H=a("p"),Qe=d("An object with configuration for specific columns. "),et=a("code"),Ut=d("Columns"),kt=d(`
			object is described below.`),this.h()},l(Pe){t=o(Pe,"DIV",{class:!0});var ne=l(t);i=o(ne,"DIV",{class:!0,id:!0});var ye=l(i);n=o(ye,"H3",{class:!0});var pt=l(n);b=c(pt,E),pt.forEach(s),f=p(ye),x=o(ye,"BUTTON",{class:!0});var Rt=l(x);U=c(Rt,"Show type details"),Rt.forEach(s),T=p(ye),$=o(ye,"DIV",{class:!0});var ft=l($);w=c(ft,"Underlined attributes are "),g=o(ft,"STRONG",{});var Pt=l(g);h=c(Pt,"required"),Pt.forEach(s),S=c(ft,"."),ft.forEach(s),_=p(ye),I=o(ye,"DIV",{class:!0,"data-popup":!0});var vt=l(I);se(m.$$.fragment,vt),vt.forEach(s),ye.forEach(s),F=p(ne),v=o(ne,"DIV",{class:!0});var st=l(v);D=o(st,"DIV",{class:!0});var mt=l(D);M=o(mt,"DIV",{class:!0});var zt=l(M);P=c(zt,"id:"),zt.forEach(s),B=p(mt),G=o(mt,"DIV",{class:!0});var Nt=l(G);z=c(Nt,"string"),Nt.forEach(s),mt.forEach(s),j=p(st),W=o(st,"P",{class:!0});var gt=l(W);k=c(gt,"Unique identifier for the table to generate unique IDs for the filters."),gt.forEach(s),st.forEach(s),q=p(ne),V=o(ne,"DIV",{class:!0});var rt=l(V);y=o(rt,"DIV",{class:!0});var ht=l(y);J=o(ht,"DIV",{class:!0});var At=l(J);L=c(At,"data:"),At.forEach(s),R=p(ht),O=o(ht,"DIV",{class:!0});var Ht=l(O);X=c(Ht,A),Ht.forEach(s),ht.forEach(s),K=p(rt),N=o(rt,"P",{class:!0});var at=l(N);Ie=c(at,"A writable store of the type "),ue=o(at,"CODE",{class:!0});var bt=l(ue);Z=c(bt,"T[]"),bt.forEach(s),Ce=c(at,`. Any changes in the store will
			be reflected in the table.`),at.forEach(s),rt.forEach(s),Se=p(ne),Q=o(ne,"DIV",{class:!0});var $t=l(Q);ee=o($t,"DIV",{class:!0});var _t=l(ee);Y=o(_t,"DIV",{class:!0});var jt=l(Y);ie=c(jt,"optionsComponent:"),jt.forEach(s),Te=p(_t),fe=o(_t,"DIV",{class:!0});var Lt=l(fe);Ae=c(Lt,Xe),Lt.forEach(s),_t.forEach(s),ge=p($t),pe=o($t,"P",{class:!0});var ot=l(pe);He=c(ot,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),de=o(ot,"CODE",{class:!0});var Dt=l(de);he=c(Dt,"optionsComponent"),Dt.forEach(s),be=c(ot," was provided."),ot.forEach(s),$t.forEach(s),Be=p(ne),$e=o(ne,"DIV",{class:!0});var Et=l($e);ce=o(Et,"DIV",{class:!0});var It=l(ce);ve=o(It,"DIV",{class:!0});var Wt=l(ve);Fe=c(Wt,"pageSizes:"),Wt.forEach(s),Ge=p(It),me=o(It,"DIV",{class:!0});var Ct=l(me);je=c(Ct,Ze),Ct.forEach(s),It.forEach(s),Ue=p(Et),_e=o(Et,"P",{class:!0});var Tt=l(_e);Le=c(Tt,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Tt.forEach(s),Et.forEach(s),nt=p(ne),ke=o(ne,"DIV",{class:!0});var Vt=l(ke);De=o(Vt,"DIV",{class:!0});var xt=l(De);We=o(xt,"DIV",{class:!0});var qt=l(We);it=c(qt,"defaultPageSize:"),qt.forEach(s),qe=p(xt),Je=o(xt,"DIV",{class:!0});var rs=l(Je);Oe=c(rs,Bt),rs.forEach(s),xt.forEach(s),Me=p(Vt),Ve=o(Vt,"P",{class:!0});var as=l(Ve);dt=c(as,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),as.forEach(s),Vt.forEach(s),ct=p(ne),Ee=o(ne,"DIV",{class:!0});var Yt=l(Ee);Re=o(Yt,"DIV",{class:!0});var Kt=l(Re);Ye=o(Kt,"DIV",{class:!0});var os=l(Ye);Ke=c(os,"columns:"),os.forEach(s),ut=p(Kt),ze=o(Kt,"DIV",{class:!0});var ls=l(ze);Gt=c(ls,Ft),ls.forEach(s),Kt.forEach(s),xe=p(Yt),H=o(Yt,"P",{class:!0});var Qt=l(H);Qe=c(Qt,"An object with configuration for specific columns. "),et=o(Qt,"CODE",{class:!0});var ns=l(et);Ut=c(ns,"Columns"),ns.forEach(s),kt=c(Qt,`
			object is described below.`),Qt.forEach(s),Yt.forEach(s),ne.forEach(s),this.h()},h(){r(n,"class","font-semibold relative w-max"),r(x,"class","btn variant-ghost-primary w-min"),r($,"class","italic div"),r(I,"class","variant-filled-secondary"),r(I,"data-popup","popupClickTableConfig"),r(i,"class","grid gap-2"),r(i,"id","tableConfig"),r(M,"class","italic"),r(G,"class","font-bold"),r(D,"class","flex gap-2 underline"),r(W,"class","text-xl pl-10"),r(v,"class","items-center"),r(J,"class","italic"),r(O,"class","font-bold"),r(y,"class","flex gap-2 underline"),r(ue,"class","!text-xl"),r(N,"class","text-xl pl-10"),r(V,"class","items-center"),r(Y,"class","italic"),r(fe,"class","font-bold"),r(ee,"class","flex gap-2"),r(de,"class","!text-xl"),r(pe,"class","text-xl pl-10"),r(Q,"class","items-center"),r(ve,"class","italic"),r(me,"class","font-bold"),r(ce,"class","flex gap-2"),r(_e,"class","text-xl pl-10"),r($e,"class","items-center"),r(We,"class","italic"),r(Je,"class","font-bold"),r(De,"class","flex gap-2"),r(Ve,"class","text-xl pl-10"),r(ke,"class","items-center"),r(Ye,"class","italic"),r(ze,"class","font-bold"),r(Re,"class","flex gap-2"),r(et,"class","!text-xl"),r(H,"class","text-xl pl-10"),r(Ee,"class","items-center"),r(t,"class","grid gap-5")},m(Pe,ne){Ne(Pe,t,ne),e(t,i),e(i,n),e(n,b),e(i,f),e(i,x),e(x,U),e(i,T),e(i,$),e($,w),e($,g),e(g,h),e($,S),e(i,_),e(i,I),re(m,I,null),e(t,F),e(t,v),e(v,D),e(D,M),e(M,P),e(D,B),e(D,G),e(G,z),e(v,j),e(v,W),e(W,k),e(t,q),e(t,V),e(V,y),e(y,J),e(J,L),e(y,R),e(y,O),e(O,X),e(V,K),e(V,N),e(N,Ie),e(N,ue),e(ue,Z),e(N,Ce),e(t,Se),e(t,Q),e(Q,ee),e(ee,Y),e(Y,ie),e(ee,Te),e(ee,fe),e(fe,Ae),e(Q,ge),e(Q,pe),e(pe,He),e(pe,de),e(de,he),e(pe,be),e(t,Be),e(t,$e),e($e,ce),e(ce,ve),e(ve,Fe),e(ce,Ge),e(ce,me),e(me,je),e($e,Ue),e($e,_e),e(_e,Le),e(t,nt),e(t,ke),e(ke,De),e(De,We),e(We,it),e(De,qe),e(De,Je),e(Je,Oe),e(ke,Me),e(ke,Ve),e(Ve,dt),e(t,ct),e(t,Ee),e(Ee,Re),e(Re,Ye),e(Ye,Ke),e(Re,ut),e(Re,ze),e(ze,Gt),e(Ee,xe),e(Ee,H),e(H,Qe),e(H,et),e(et,Ut),e(H,kt),tt=!0,lt||(Mt=Zt(es.call(null,x,C[0])),lt=!0)},p:we,i(Pe){tt||(ae(m.$$.fragment,Pe),tt=!0)},o(Pe){oe(m.$$.fragment,Pe),tt=!1},d(Pe){Pe&&s(t),le(m),lt=!1,Mt()}}}function Bs(C){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class Fs extends yt{constructor(t){super(),wt(this,t,Bs,Ss,St,{})}}function Gs(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_,I,m,F,v,D,M,P,B,G,z,j,W;return $=new ts({props:{language:"ts",code:Ts}}),{c(){t=a("div"),i=a("div"),n=a("h3"),E=d("Columns"),b=u(),f=a("button"),x=d("Show type details"),U=u(),T=a("div"),te($.$$.fragment),w=u(),g=a("div"),h=a("div"),S=a("div"),_=d("[key: "),I=a("strong"),m=d("string"),F=d("]:"),v=u(),D=a("div"),M=d("Column"),P=u(),B=a("p"),G=d(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(k){t=o(k,"DIV",{class:!0});var q=l(t);i=o(q,"DIV",{class:!0,id:!0});var V=l(i);n=o(V,"H3",{class:!0});var y=l(n);E=c(y,"Columns"),y.forEach(s),b=p(V),f=o(V,"BUTTON",{class:!0});var J=l(f);x=c(J,"Show type details"),J.forEach(s),U=p(V),T=o(V,"DIV",{"data-popup":!0});var L=l(T);se($.$$.fragment,L),L.forEach(s),V.forEach(s),w=p(q),g=o(q,"DIV",{class:!0});var R=l(g);h=o(R,"DIV",{class:!0});var O=l(h);S=o(O,"DIV",{class:!0});var A=l(S);_=c(A,"[key: "),I=o(A,"STRONG",{});var X=l(I);m=c(X,"string"),X.forEach(s),F=c(A,"]:"),A.forEach(s),v=p(O),D=o(O,"DIV",{class:!0});var K=l(D);M=c(K,"Column"),K.forEach(s),O.forEach(s),P=p(R),B=o(R,"P",{class:!0});var N=l(B);G=c(N,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),N.forEach(s),R.forEach(s),q.forEach(s),this.h()},h(){r(n,"class","font-semibold items-center w-max"),r(f,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumns"),r(i,"class","grid gap-2"),r(i,"id","columns"),r(S,"class","italic"),r(D,"class","font-bold"),r(h,"class","flex gap-2"),r(B,"class","text-xl pl-10"),r(g,"class","items-center"),r(t,"class","grid gap-5")},m(k,q){Ne(k,t,q),e(t,i),e(i,n),e(n,E),e(i,b),e(i,f),e(f,x),e(i,U),e(i,T),re($,T,null),e(t,w),e(t,g),e(g,h),e(h,S),e(S,_),e(S,I),e(I,m),e(S,F),e(h,v),e(h,D),e(D,M),e(g,P),e(g,B),e(B,G),z=!0,j||(W=Zt(es.call(null,f,C[0])),j=!0)},p:we,i(k){z||(ae($.$$.fragment,k),z=!0)},o(k){oe($.$$.fragment,k),z=!1},d(k){k&&s(t),le($),j=!1,W()}}}function Us(C){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class ks extends yt{constructor(t){super(),wt(this,t,Us,Gs,St,{})}}function Os(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_,I,m,F,v,D,M,P,B,G,z,j,W,k,q,V,y,J,L,R,O,A,X,K,N,Ie,ue,Z,Ce,Se,Q,ee,Y,ie,Te,fe,Xe,Ae,ge,pe,He,de,he,be,Be,$e,ce,ve,Fe,Ge,me,Ze,je,Ue,_e,Le,nt,ke,De,We,it,qe,Je,Bt,Oe,Me,Ve,dt,ct,Ee,Re,Ye,Ke,ut,ze,Ft,Gt;return $=new ts({props:{language:"ts",code:Vs}}),{c(){t=a("div"),i=a("div"),n=a("h3"),E=d("Column"),b=u(),f=a("button"),x=d("Show type details"),U=u(),T=a("div"),te($.$$.fragment),w=u(),g=a("div"),h=a("div"),S=a("div"),_=d("header:"),I=u(),m=a("div"),F=d("string"),v=u(),D=a("p"),M=d(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),P=u(),B=a("div"),G=a("div"),z=a("div"),j=d("exclude:"),W=u(),k=a("div"),q=d("boolean"),V=u(),y=a("p"),J=d(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),L=u(),R=a("div"),O=a("div"),A=a("div"),X=d("disableFiltering:"),K=u(),N=a("div"),Ie=d("boolean"),ue=u(),Z=a("p"),Ce=d("Whether to disable filtering for the column or not. By default, filtering is enabled."),Se=u(),Q=a("div"),ee=a("div"),Y=a("div"),ie=d("disableSorting:"),Te=u(),fe=a("div"),Xe=d("boolean"),Ae=u(),ge=a("p"),pe=d("Whether to disable sorting for the column or not. By default, sorting is enabled."),He=u(),de=a("div"),he=a("div"),be=a("div"),Be=d("colFitlerFn:"),$e=u(),ce=a("div"),ve=a("a"),Fe=d("ColumnFilterFn"),Ge=u(),me=a("p"),Ze=d(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),je=u(),Ue=a("div"),_e=a("div"),Le=a("div"),nt=d("colFilterComponent:"),ke=u(),De=a("div"),We=d("SvelteComponent"),it=u(),qe=a("p"),Je=d(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Bt=u(),Oe=a("div"),Me=a("div"),Ve=a("div"),dt=d("instructions:"),ct=u(),Ee=a("div"),Re=d("ColumnInstructions"),Ye=u(),Ke=a("p"),ut=d("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(xe){t=o(xe,"DIV",{class:!0});var H=l(t);i=o(H,"DIV",{class:!0,id:!0});var Qe=l(i);n=o(Qe,"H3",{class:!0});var et=l(n);E=c(et,"Column"),et.forEach(s),b=p(Qe),f=o(Qe,"BUTTON",{class:!0});var Ut=l(f);x=c(Ut,"Show type details"),Ut.forEach(s),U=p(Qe),T=o(Qe,"DIV",{"data-popup":!0});var kt=l(T);se($.$$.fragment,kt),kt.forEach(s),Qe.forEach(s),w=p(H),g=o(H,"DIV",{class:!0});var tt=l(g);h=o(tt,"DIV",{class:!0});var lt=l(h);S=o(lt,"DIV",{class:!0});var Mt=l(S);_=c(Mt,"header:"),Mt.forEach(s),I=p(lt),m=o(lt,"DIV",{class:!0});var Pe=l(m);F=c(Pe,"string"),Pe.forEach(s),lt.forEach(s),v=p(tt),D=o(tt,"P",{class:!0});var ne=l(D);M=c(ne,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),ne.forEach(s),tt.forEach(s),P=p(H),B=o(H,"DIV",{class:!0});var ye=l(B);G=o(ye,"DIV",{class:!0});var pt=l(G);z=o(pt,"DIV",{class:!0});var Rt=l(z);j=c(Rt,"exclude:"),Rt.forEach(s),W=p(pt),k=o(pt,"DIV",{class:!0});var ft=l(k);q=c(ft,"boolean"),ft.forEach(s),pt.forEach(s),V=p(ye),y=o(ye,"P",{class:!0});var Pt=l(y);J=c(Pt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Pt.forEach(s),ye.forEach(s),L=p(H),R=o(H,"DIV",{class:!0});var vt=l(R);O=o(vt,"DIV",{class:!0});var st=l(O);A=o(st,"DIV",{class:!0});var mt=l(A);X=c(mt,"disableFiltering:"),mt.forEach(s),K=p(st),N=o(st,"DIV",{class:!0});var zt=l(N);Ie=c(zt,"boolean"),zt.forEach(s),st.forEach(s),ue=p(vt),Z=o(vt,"P",{class:!0});var Nt=l(Z);Ce=c(Nt,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Nt.forEach(s),vt.forEach(s),Se=p(H),Q=o(H,"DIV",{class:!0});var gt=l(Q);ee=o(gt,"DIV",{class:!0});var rt=l(ee);Y=o(rt,"DIV",{class:!0});var ht=l(Y);ie=c(ht,"disableSorting:"),ht.forEach(s),Te=p(rt),fe=o(rt,"DIV",{class:!0});var At=l(fe);Xe=c(At,"boolean"),At.forEach(s),rt.forEach(s),Ae=p(gt),ge=o(gt,"P",{class:!0});var Ht=l(ge);pe=c(Ht,"Whether to disable sorting for the column or not. By default, sorting is enabled."),Ht.forEach(s),gt.forEach(s),He=p(H),de=o(H,"DIV",{class:!0});var at=l(de);he=o(at,"DIV",{class:!0});var bt=l(he);be=o(bt,"DIV",{class:!0});var $t=l(be);Be=c($t,"colFitlerFn:"),$t.forEach(s),$e=p(bt),ce=o(bt,"DIV",{class:!0});var _t=l(ce);ve=o(_t,"A",{href:!0});var jt=l(ve);Fe=c(jt,"ColumnFilterFn"),jt.forEach(s),_t.forEach(s),bt.forEach(s),Ge=p(at),me=o(at,"P",{class:!0});var Lt=l(me);Ze=c(Lt,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),Lt.forEach(s),at.forEach(s),je=p(H),Ue=o(H,"DIV",{class:!0});var ot=l(Ue);_e=o(ot,"DIV",{class:!0});var Dt=l(_e);Le=o(Dt,"DIV",{class:!0});var Et=l(Le);nt=c(Et,"colFilterComponent:"),Et.forEach(s),ke=p(Dt),De=o(Dt,"DIV",{class:!0});var It=l(De);We=c(It,"SvelteComponent"),It.forEach(s),Dt.forEach(s),it=p(ot),qe=o(ot,"P",{class:!0});var Wt=l(qe);Je=c(Wt,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Wt.forEach(s),ot.forEach(s),Bt=p(H),Oe=o(H,"DIV",{class:!0});var Ct=l(Oe);Me=o(Ct,"DIV",{class:!0});var Tt=l(Me);Ve=o(Tt,"DIV",{class:!0});var Vt=l(Ve);dt=c(Vt,"instructions:"),Vt.forEach(s),ct=p(Tt),Ee=o(Tt,"DIV",{class:!0});var xt=l(Ee);Re=c(xt,"ColumnInstructions"),xt.forEach(s),Tt.forEach(s),Ye=p(Ct),Ke=o(Ct,"P",{class:!0});var qt=l(Ke);ut=c(qt,"Configuration for the column's appearance, sorting and filtering functionalities."),qt.forEach(s),Ct.forEach(s),H.forEach(s),this.h()},h(){r(n,"class","font-semibold items-center w-max"),r(f,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumn"),r(i,"class","grid gap-2"),r(i,"id","column"),r(S,"class","italic"),r(m,"class","font-bold"),r(h,"class","flex gap-2"),r(D,"class","text-xl pl-10"),r(g,"class","items-center"),r(z,"class","italic"),r(k,"class","font-bold"),r(G,"class","flex gap-2"),r(y,"class","text-xl pl-10"),r(B,"class","items-center"),r(A,"class","italic"),r(N,"class","font-bold"),r(O,"class","flex gap-2"),r(Z,"class","text-xl pl-10"),r(R,"class","items-center"),r(Y,"class","italic"),r(fe,"class","font-bold"),r(ee,"class","flex gap-2"),r(ge,"class","text-xl pl-10"),r(Q,"class","items-center"),r(be,"class","italic"),r(ve,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),r(ce,"class","font-bold"),r(he,"class","flex gap-2"),r(me,"class","text-xl pl-10"),r(de,"class","items-center"),r(Le,"class","italic"),r(De,"class","font-bold"),r(_e,"class","flex gap-2"),r(qe,"class","text-xl pl-10"),r(Ue,"class","items-center"),r(Ve,"class","italic"),r(Ee,"class","font-bold"),r(Me,"class","flex gap-2"),r(Ke,"class","text-xl pl-10"),r(Oe,"class","items-center"),r(t,"class","grid gap-5")},m(xe,H){Ne(xe,t,H),e(t,i),e(i,n),e(n,E),e(i,b),e(i,f),e(f,x),e(i,U),e(i,T),re($,T,null),e(t,w),e(t,g),e(g,h),e(h,S),e(S,_),e(h,I),e(h,m),e(m,F),e(g,v),e(g,D),e(D,M),e(t,P),e(t,B),e(B,G),e(G,z),e(z,j),e(G,W),e(G,k),e(k,q),e(B,V),e(B,y),e(y,J),e(t,L),e(t,R),e(R,O),e(O,A),e(A,X),e(O,K),e(O,N),e(N,Ie),e(R,ue),e(R,Z),e(Z,Ce),e(t,Se),e(t,Q),e(Q,ee),e(ee,Y),e(Y,ie),e(ee,Te),e(ee,fe),e(fe,Xe),e(Q,Ae),e(Q,ge),e(ge,pe),e(t,He),e(t,de),e(de,he),e(he,be),e(be,Be),e(he,$e),e(he,ce),e(ce,ve),e(ve,Fe),e(de,Ge),e(de,me),e(me,Ze),e(t,je),e(t,Ue),e(Ue,_e),e(_e,Le),e(Le,nt),e(_e,ke),e(_e,De),e(De,We),e(Ue,it),e(Ue,qe),e(qe,Je),e(t,Bt),e(t,Oe),e(Oe,Me),e(Me,Ve),e(Ve,dt),e(Me,ct),e(Me,Ee),e(Ee,Re),e(Oe,Ye),e(Oe,Ke),e(Ke,ut),ze=!0,Ft||(Gt=Zt(es.call(null,f,C[0])),Ft=!0)},p:we,i(xe){ze||(ae($.$$.fragment,xe),ze=!0)},o(xe){oe($.$$.fragment,xe),ze=!1},d(xe){xe&&s(t),le($),Ft=!1,Gt()}}}function Ms(C){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Rs extends yt{constructor(t){super(),wt(this,t,Ms,Os,St,{})}}function Ps(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_,I,m,F,v,D,M,P,B,G,z,j,W,k,q,V,y,J,L,R,O,A,X,K,N,Ie,ue,Z,Ce,Se,Q,ee;return $=new ts({props:{language:"ts",code:xs}}),{c(){t=a("div"),i=a("div"),n=a("h3"),E=d("ColumnInstructions"),b=u(),f=a("button"),x=d("Show type details"),U=u(),T=a("div"),te($.$$.fragment),w=u(),g=a("div"),h=a("div"),S=a("div"),_=d("toStringFn:"),I=u(),m=a("div"),F=d("(value: any) => string"),v=u(),D=a("p"),M=d("Custom toString function to be applied on the column."),P=u(),B=a("div"),G=a("div"),z=a("div"),j=d("toSortableValueFn:"),W=u(),k=a("div"),q=d("(value: any) => string | number"),V=u(),y=a("p"),J=d("Custom function to return either a string or a number value to have a sortable column."),L=u(),R=a("div"),O=a("div"),A=a("div"),X=d("toFilterableValueFn:"),K=u(),N=a("div"),Ie=d("(value: any) => string | number | Date"),ue=u(),Z=a("p"),Ce=d(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),this.h()},l(Y){t=o(Y,"DIV",{class:!0});var ie=l(t);i=o(ie,"DIV",{class:!0,id:!0});var Te=l(i);n=o(Te,"H3",{class:!0});var fe=l(n);E=c(fe,"ColumnInstructions"),fe.forEach(s),b=p(Te),f=o(Te,"BUTTON",{class:!0});var Xe=l(f);x=c(Xe,"Show type details"),Xe.forEach(s),U=p(Te),T=o(Te,"DIV",{"data-popup":!0});var Ae=l(T);se($.$$.fragment,Ae),Ae.forEach(s),Te.forEach(s),w=p(ie),g=o(ie,"DIV",{class:!0});var ge=l(g);h=o(ge,"DIV",{class:!0});var pe=l(h);S=o(pe,"DIV",{class:!0});var He=l(S);_=c(He,"toStringFn:"),He.forEach(s),I=p(pe),m=o(pe,"DIV",{class:!0});var de=l(m);F=c(de,"(value: any) => string"),de.forEach(s),pe.forEach(s),v=p(ge),D=o(ge,"P",{class:!0});var he=l(D);M=c(he,"Custom toString function to be applied on the column."),he.forEach(s),ge.forEach(s),P=p(ie),B=o(ie,"DIV",{class:!0});var be=l(B);G=o(be,"DIV",{class:!0});var Be=l(G);z=o(Be,"DIV",{class:!0});var $e=l(z);j=c($e,"toSortableValueFn:"),$e.forEach(s),W=p(Be),k=o(Be,"DIV",{class:!0});var ce=l(k);q=c(ce,"(value: any) => string | number"),ce.forEach(s),Be.forEach(s),V=p(be),y=o(be,"P",{class:!0});var ve=l(y);J=c(ve,"Custom function to return either a string or a number value to have a sortable column."),ve.forEach(s),be.forEach(s),L=p(ie),R=o(ie,"DIV",{class:!0});var Fe=l(R);O=o(Fe,"DIV",{class:!0});var Ge=l(O);A=o(Ge,"DIV",{class:!0});var me=l(A);X=c(me,"toFilterableValueFn:"),me.forEach(s),K=p(Ge),N=o(Ge,"DIV",{class:!0});var Ze=l(N);Ie=c(Ze,"(value: any) => string | number | Date"),Ze.forEach(s),Ge.forEach(s),ue=p(Fe),Z=o(Fe,"P",{class:!0});var je=l(Z);Ce=c(je,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),je.forEach(s),Fe.forEach(s),ie.forEach(s),this.h()},h(){r(n,"class","font-semibold items-center w-max"),r(f,"class","btn variant-ghost-primary w-min"),r(T,"data-popup","popupClickColumnInstructions"),r(i,"class","grid gap-2"),r(i,"id","columnInstructions"),r(S,"class","italic"),r(m,"class","font-bold"),r(h,"class","flex gap-2"),r(D,"class","text-xl pl-10"),r(g,"class","items-center"),r(z,"class","italic"),r(k,"class","font-bold"),r(G,"class","flex gap-2"),r(y,"class","text-xl pl-10"),r(B,"class","items-center"),r(A,"class","italic"),r(N,"class","font-bold"),r(O,"class","flex gap-2"),r(Z,"class","text-xl pl-10"),r(R,"class","items-center"),r(t,"class","grid gap-5")},m(Y,ie){Ne(Y,t,ie),e(t,i),e(i,n),e(n,E),e(i,b),e(i,f),e(f,x),e(i,U),e(i,T),re($,T,null),e(t,w),e(t,g),e(g,h),e(h,S),e(S,_),e(h,I),e(h,m),e(m,F),e(g,v),e(g,D),e(D,M),e(t,P),e(t,B),e(B,G),e(G,z),e(z,j),e(G,W),e(G,k),e(k,q),e(B,V),e(B,y),e(y,J),e(t,L),e(t,R),e(R,O),e(O,A),e(A,X),e(O,K),e(O,N),e(N,Ie),e(R,ue),e(R,Z),e(Z,Ce),Se=!0,Q||(ee=Zt(es.call(null,f,C[0])),Q=!0)},p:we,i(Y){Se||(ae($.$$.fragment,Y),Se=!0)},o(Y){oe($.$$.fragment,Y),Se=!1},d(Y){Y&&s(t),le($),Q=!1,ee()}}}function zs(C){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Ns extends yt{constructor(t){super(),wt(this,t,zs,Ps,St,{})}}function As(C){let t,i,n,E;return{c(){t=a("button"),i=d("Odd or even"),this.h()},l(b){t=o(b,"BUTTON",{class:!0});var f=l(t);i=c(f,"Odd or even"),f.forEach(s),this.h()},h(){r(t,"class","btn btn-sm variant-filled-secondary")},m(b,f){Ne(b,t,f),e(t,i),n||(E=us(t,"click",ps(C[2])),n=!0)},p:we,i:we,o:we,d(b){b&&s(t),n=!1,E()}}}function Hs(C,t,i){let{row:n}=t,{dispatchFn:E}=t;const b=()=>E({type:n.id%2===0?"even":"odd"});return C.$$set=f=>{"row"in f&&i(0,n=f.row),"dispatchFn"in f&&i(1,E=f.dispatchFn)},[n,E,b]}class js extends yt{constructor(t){super(),wt(this,t,Hs,As,St,{row:0,dispatchFn:1})}}const Ls=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3"},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Ws=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],qs=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Js=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}];function ds(C,t,i){const n=C.slice();return n[12]=t[i],n}function cs(C){let t,i,n=C[12].name+"",E,b,f,x,U=C[12].group+"",T,$;return{c(){t=a("tr"),i=a("td"),E=d(n),b=u(),f=a("td"),x=a("div"),T=d(U),$=u()},l(w){t=o(w,"TR",{});var g=l(t);i=o(g,"TD",{});var h=l(i);E=c(h,n),h.forEach(s),b=p(g),f=o(g,"TD",{});var S=l(f);x=o(S,"DIV",{});var _=l(x);T=c(_,U),_.forEach(s),S.forEach(s),$=p(g),g.forEach(s)},m(w,g){Ne(w,t,g),e(t,i),e(i,E),e(t,b),e(t,f),e(f,x),e(x,T),e(t,$)},p(w,g){g&1&&n!==(n=w[12].name+"")&&is(E,n),g&1&&U!==(U=w[12].group+"")&&is(T,U)},d(w){w&&s(t)}}}function Ys(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_=C[0],I=[];for(let m=0;m<_.length;m+=1)I[m]=cs(ds(C,_,m));return{c(){t=a("div"),i=d("Used classes are important to include for the table to have a uniform look."),n=u(),E=a("div"),b=a("table"),f=a("thead"),x=a("tr"),U=a("th"),T=d("Group"),$=u(),w=a("th"),g=d("Description"),h=u(),S=a("tbody");for(let m=0;m<I.length;m+=1)I[m].c();this.h()},l(m){t=o(m,"DIV",{class:!0});var F=l(t);i=c(F,"Used classes are important to include for the table to have a uniform look."),F.forEach(s),n=p(m),E=o(m,"DIV",{class:!0});var v=l(E);b=o(v,"TABLE",{class:!0});var D=l(b);f=o(D,"THEAD",{});var M=l(f);x=o(M,"TR",{class:!0});var P=l(x);U=o(P,"TH",{class:!0});var B=l(U);T=c(B,"Group"),B.forEach(s),$=p(P),w=o(P,"TH",{class:!0});var G=l(w);g=c(G,"Description"),G.forEach(s),P.forEach(s),M.forEach(s),h=p(D),S=o(D,"TBODY",{});var z=l(S);for(let j=0;j<I.length;j+=1)I[j].l(z);z.forEach(s),D.forEach(s),v.forEach(s),this.h()},h(){r(t,"class","pb-2"),r(U,"class","!p-2"),r(w,"class","!p-2"),r(x,"class","bg-primary-300"),r(b,"class","table table-compact bg-tertiary-200"),r(E,"class","table-container")},m(m,F){Ne(m,t,F),e(t,i),Ne(m,n,F),Ne(m,E,F),e(E,b),e(b,f),e(f,x),e(x,U),e(U,T),e(x,$),e(x,w),e(w,g),e(b,h),e(b,S);for(let v=0;v<I.length;v+=1)I[v]&&I[v].m(S,null)},p(m,F){if(F&1){_=m[0];let v;for(v=0;v<_.length;v+=1){const D=ds(m,_,v);I[v]?I[v].p(D,F):(I[v]=cs(D),I[v].c(),I[v].m(S,null))}for(;v<I.length;v+=1)I[v].d(1);I.length=_.length}},d(m){m&&s(t),m&&s(n),m&&s(E),vs(I,m)}}}function Ks(C){let t,i;return t=new Jt({props:{config:C[1]}}),{c(){te(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,E){re(t,n,E),i=!0},p:we,i(n){i||(ae(t.$$.fragment,n),i=!0)},o(n){oe(t.$$.fragment,n),i=!1},d(n){le(t,n)}}}function Qs(C){let t,i;return t=new Jt({props:{config:C[3]}}),{c(){te(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,E){re(t,n,E),i=!0},p:we,i(n){i||(ae(t.$$.fragment,n),i=!0)},o(n){oe(t.$$.fragment,n),i=!1},d(n){le(t,n)}}}function Xs(C){let t,i;return t=new Jt({props:{config:C[4]}}),t.$on("action",C[7]),{c(){te(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,E){re(t,n,E),i=!0},p:we,i(n){i||(ae(t.$$.fragment,n),i=!0)},o(n){oe(t.$$.fragment,n),i=!1},d(n){le(t,n)}}}function Zs(C){let t,i;return t=new Jt({props:{config:C[5]}}),{c(){te(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,E){re(t,n,E),i=!0},p:we,i(n){i||(ae(t.$$.fragment,n),i=!0)},o(n){oe(t.$$.fragment,n),i=!1},d(n){le(t,n)}}}function er(C){let t,i;return t=new Jt({props:{config:C[6]}}),{c(){te(t.$$.fragment)},l(n){se(t.$$.fragment,n)},m(n,E){re(t,n,E),i=!0},p:we,i(n){i||(ae(t.$$.fragment,n),i=!0)},o(n){oe(t.$$.fragment,n),i=!1},d(n){le(t,n)}}}function tr(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_,I,m,F,v,D,M,P,B,G,z,j,W,k,q;return x=new Ot({props:{title:"Simple table without Table component",svelte:hs,data:ss,$$slots:{default:[Ys]},$$scope:{ctx:C}}}),$=new Ot({props:{title:"Table component",svelte:bs,data:$s,$$slots:{default:[Ks]},$$scope:{ctx:C}}}),h=new Ot({props:{title:"Minimal configuration",svelte:_s,data:ss,$$slots:{default:[Qs]},$$scope:{ctx:C}}}),I=new Ot({props:{title:"Full configuration",svelte:Ds,data:ss,$$slots:{default:[Xs]},$$scope:{ctx:C}}}),G=new Ot({props:{title:"Date",svelte:Es,data:Is,$$slots:{default:[Zs]},$$scope:{ctx:C}}}),k=new Ot({props:{title:"Missing values",svelte:ys,data:ws,$$slots:{default:[er]},$$scope:{ctx:C}}}),{c(){t=a("div"),i=a("h2"),n=d("Examples"),E=u(),b=a("div"),f=a("div"),te(x.$$.fragment),U=u(),T=a("div"),te($.$$.fragment),w=u(),g=a("div"),te(h.$$.fragment),S=u(),_=a("div"),te(I.$$.fragment),m=u(),F=a("div"),v=a("h2"),D=d("Complex data types"),M=u(),P=a("div"),B=a("div"),te(G.$$.fragment),z=u(),j=a("div"),W=a("div"),te(k.$$.fragment),this.h()},l(V){t=o(V,"DIV",{class:!0});var y=l(t);i=o(y,"H2",{});var J=l(i);n=c(J,"Examples"),J.forEach(s),E=p(y),b=o(y,"DIV",{class:!0});var L=l(b);f=o(L,"DIV",{class:!0,id:!0});var R=l(f);se(x.$$.fragment,R),R.forEach(s),U=p(L),T=o(L,"DIV",{class:!0,id:!0});var O=l(T);se($.$$.fragment,O),O.forEach(s),w=p(L),g=o(L,"DIV",{class:!0,id:!0});var A=l(g);se(h.$$.fragment,A),A.forEach(s),S=p(L),_=o(L,"DIV",{class:!0,id:!0});var X=l(_);se(I.$$.fragment,X),X.forEach(s),L.forEach(s),m=p(y),F=o(y,"DIV",{class:!0});var K=l(F);v=o(K,"H2",{});var N=l(v);D=c(N,"Complex data types"),N.forEach(s),M=p(K),P=o(K,"DIV",{class:!0});var Ie=l(P);B=o(Ie,"DIV",{class:!0,id:!0});var ue=l(B);se(G.$$.fragment,ue),ue.forEach(s),Ie.forEach(s),z=p(K),j=o(K,"DIV",{class:!0});var Z=l(j);W=o(Z,"DIV",{class:!0,id:!0});var Ce=l(W);se(k.$$.fragment,Ce),Ce.forEach(s),Z.forEach(s),K.forEach(s),y.forEach(s),this.h()},h(){r(f,"class","grid gap-5"),r(f,"id","simpleTable"),r(T,"class","grid gap-5"),r(T,"id","groups"),r(g,"class","grid gap-5"),r(g,"id","users"),r(_,"class","grid gap-5"),r(_,"id","usersNoRoles"),r(b,"class","grid gap-20"),r(B,"class","grid gap-5"),r(B,"id","usersBD"),r(P,"class","grid gap-20"),r(W,"class","grid gap-5"),r(W,"id","combination"),r(j,"class","grid gap-20"),r(F,"class","grid gap-1"),r(t,"class","grid gap-1")},m(V,y){Ne(V,t,y),e(t,i),e(i,n),e(t,E),e(t,b),e(b,f),re(x,f,null),e(b,U),e(b,T),re($,T,null),e(b,w),e(b,g),re(h,g,null),e(b,S),e(b,_),re(I,_,null),e(t,m),e(t,F),e(F,v),e(v,D),e(F,M),e(F,P),e(P,B),re(G,B,null),e(F,z),e(F,j),e(j,W),re(k,W,null),q=!0},p(V,[y]){const J={};y&32769&&(J.$$scope={dirty:y,ctx:V}),x.$set(J);const L={};y&32768&&(L.$$scope={dirty:y,ctx:V}),$.$set(L);const R={};y&32768&&(R.$$scope={dirty:y,ctx:V}),h.$set(R);const O={};y&32768&&(O.$$scope={dirty:y,ctx:V}),I.$set(O);const A={};y&32768&&(A.$$scope={dirty:y,ctx:V}),G.$set(A);const X={};y&32768&&(X.$$scope={dirty:y,ctx:V}),k.$set(X)},i(V){q||(ae(x.$$.fragment,V),ae($.$$.fragment,V),ae(h.$$.fragment,V),ae(I.$$.fragment,V),ae(G.$$.fragment,V),ae(k.$$.fragment,V),q=!0)},o(V){oe(x.$$.fragment,V),oe($.$$.fragment,V),oe(h.$$.fragment,V),oe(I.$$.fragment,V),oe(G.$$.fragment,V),oe(k.$$.fragment,V),q=!1},d(V){V&&s(t),le(x),le($),le(h),le(I),le(G),le(k)}}}function sr(C,t,i){let n;const b={id:"userGroups",data:Xt(Ls),columns:{id:{header:"ID"}}},f=Xt(Ws);fs(C,f,_=>i(0,n=_));const x={id:"users",data:f},U={id:"usersNoRoles",data:f,optionsComponent:js,columns:{id:{colFilterFn:ms,colFilterComponent:gs},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},$={id:"usersBD",data:Xt(qs),columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:_=>_.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:_=>_.getTime(),toFilterableValueFn:_=>_}}}},w={32655:"NA",32654:"NM",32653:"ND"},h={id:"usersMissingIDs",data:Xt(Js),columns:{id:{header:"ID",instructions:{toStringFn:_=>_ in w?w[_]:_.toString()}}}};return[n,b,f,x,U,$,h,_=>alert(_.detail.type)]}class rr extends yt{constructor(t){super(),wt(this,t,sr,tr,St,{})}}function ar(C){let t,i,n,E,b,f,x,U,T,$,w,g,h,S,_,I,m,F;return T=new Fs({}),w=new ks({}),h=new Rs({}),_=new Ns({}),m=new rr({}),{c(){t=a("div"),i=a("div"),n=a("h1"),E=d("Table"),b=u(),f=a("h2"),x=d("Types"),U=u(),te(T.$$.fragment),$=u(),te(w.$$.fragment),g=u(),te(h.$$.fragment),S=u(),te(_.$$.fragment),I=u(),te(m.$$.fragment),this.h()},l(v){t=o(v,"DIV",{class:!0,id:!0});var D=l(t);i=o(D,"DIV",{class:!0});var M=l(i);n=o(M,"H1",{class:!0});var P=l(n);E=c(P,"Table"),P.forEach(s),b=p(M),f=o(M,"H2",{});var B=l(f);x=c(B,"Types"),B.forEach(s),U=p(M),se(T.$$.fragment,M),M.forEach(s),$=p(D),se(w.$$.fragment,D),g=p(D),se(h.$$.fragment,D),S=p(D),se(_.$$.fragment,D),I=p(D),se(m.$$.fragment,D),D.forEach(s),this.h()},h(){r(n,"class","font-bold !text-6xl"),r(i,"class","grid gap-5"),r(t,"class","grid gap-20 p-10"),r(t,"id","toc-target")},m(v,D){Ne(v,t,D),e(t,i),e(i,n),e(n,E),e(i,b),e(i,f),e(f,x),e(i,U),re(T,i,null),e(t,$),re(w,t,null),e(t,g),re(h,t,null),e(t,S),re(_,t,null),e(t,I),re(m,t,null),F=!0},p:we,i(v){F||(ae(T.$$.fragment,v),ae(w.$$.fragment,v),ae(h.$$.fragment,v),ae(_.$$.fragment,v),ae(m.$$.fragment,v),F=!0)},o(v){oe(T.$$.fragment,v),oe(w.$$.fragment,v),oe(h.$$.fragment,v),oe(_.$$.fragment,v),oe(m.$$.fragment,v),F=!1},d(v){v&&s(t),le(T),le(w),le(h),le(_),le(m)}}}class ur extends yt{constructor(t){super(),wt(this,t,null,ar,St,{})}}export{ur as component};
