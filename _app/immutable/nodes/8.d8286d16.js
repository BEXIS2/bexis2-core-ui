import{S as Ma,i as Wa,s as La,k as o,q as i,l as a,m as l,r as n,h as s,n as t,b as Ja,D as e,M as Ka,a6 as Qa,W as nt,a as d,y as x,c,z as y,A as V,ac as Ro,g as w,d as G,B as S,O as Xa}from"../chunks/index.cff9c354.js";/* empty css                             */import{w as Ha}from"../chunks/index.628372e4.js";import{p as Bo}from"../chunks/popup.eb15a4ce.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.c3128c81.js";import{a as Oo,C as No,T as Ao,i as Ya,j as Za}from"../chunks/CodeContainer.b7046c61.js";function el(m){let r,p,u,h;return{c(){r=o("button"),p=i("See row info"),this.h()},l(_){r=a(_,"BUTTON",{class:!0});var $=l(r);p=n($,"See row info"),$.forEach(s),this.h()},h(){t(r,"class","btn btn-sm variant-filled-secondary")},m(_,$){Ja(_,r,$),e(r,p),u||(h=Ka(r,"click",Qa(m[1])),u=!0)},p:nt,i:nt,o:nt,d(_){_&&s(r),u=!1,h()}}}function tl(m,r,p){let{row:u}=r;const h=()=>alert(JSON.stringify(u));return m.$$set=_=>{"row"in _&&p(0,u=_.row)},[u,h]}class sl extends Ma{constructor(r){super(),Wa(this,r,tl,el,La,{row:0})}}const ol=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3"},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],al=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],ll=`
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';

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

<Table config={groupConfig} />`,rl=`			
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
				
const groupsStore = writable<Group[]>(userGroups);`,il=`
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';
	
	import { usersStore } from './data';
	import type { User } from './data';

	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
<\/script>

<Table config={usersConfig} />`,qa=`
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
				
export const usersStore = writable<User[]>(users);`,nl=`
<script lang="ts">
	import { Table } from 'bexis2-core-ui';
	import type { TableConfig } from 'bexis2-core-ui';

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

<Table config={usersNoRolesConfig} />`,dl=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,cl=`
export interface Columns {
	[key: string]: Column;
}`,ul=`
export interface Column {
	header?: string;
	exclude?: boolean;
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`;function pl(m){let r,p;return r=new Ao({props:{config:m[0]}}),{c(){x(r.$$.fragment)},l(u){y(r.$$.fragment,u)},m(u,h){V(r,u,h),p=!0},p:nt,i(u){p||(w(r.$$.fragment,u),p=!0)},o(u){G(r.$$.fragment,u),p=!1},d(u){S(r,u)}}}function fl(m){let r,p;return r=new Ao({props:{config:m[1]}}),{c(){x(r.$$.fragment)},l(u){y(r.$$.fragment,u)},m(u,h){V(r,u,h),p=!0},p:nt,i(u){p||(w(r.$$.fragment,u),p=!0)},o(u){G(r.$$.fragment,u),p=!1},d(u){S(r,u)}}}function vl(m){let r,p;return r=new Ao({props:{config:m[2]}}),{c(){x(r.$$.fragment)},l(u){y(r.$$.fragment,u)},m(u,h){V(r,u,h),p=!0},p:nt,i(u){p||(w(r.$$.fragment,u),p=!0)},o(u){G(r.$$.fragment,u),p=!1},d(u){S(r,u)}}}function ml(m){let r,p,u,h,_,$,vt,mt,C,$e,jo="TableConfig <T>",Wt,Lt,ue,Jt,Kt,F,Qt,dt,Xt,Yt,Zt,pe,fe,es,k,U,Ee,ts,ss,Te,os,as,De,ls,rs,z,P,Ie,is,ns,xe,Ho="Writable <T[]>",ds,cs,R,us,ye,ps,fs,vs,B,O,Ve,ms,gs,we,qo="SvelteComponent",hs,bs,N,_s,Ge,Cs,$s,Es,A,j,Se,Ts,Ds,Fe,Mo="number[]",Is,xs,ke,ys,Vs,H,q,Ue,ws,Gs,ze,Wo="number",Ss,Fs,Pe,ks,Us,M,W,Re,zs,Ps,Be,Lo="Columns",Rs,Bs,L,Os,Oe,Ns,As,js,J,E,Ne,Hs,qs,ve,Ms,Ws,Ae,me,Ls,K,Q,X,Js,ct,Ks,Qs,Xs,je,Ys,Zs,He,eo,to,b,T,qe,so,oo,ge,ao,lo,Me,he,ro,Y,Z,We,io,no,Le,co,uo,Je,po,fo,ee,te,Ke,vo,mo,Qe,go,ho,Xe,bo,_o,se,oe,Ye,Co,$o,Ze,et,Eo,To,tt,Do,Io,ae,le,st,xo,yo,ot,Vo,wo,at,Go,So,re,ut,Fo,ko,D,be,ie,Uo,_e,ne,zo,Ce,de,gt,Po,Jo;return fe=new Oo({props:{language:"ts",code:dl}}),me=new Oo({props:{language:"ts",code:cl}}),he=new Oo({props:{language:"ts",code:ul}}),ie=new No({props:{title:"Simple table",svelte:ll,data:rl,$$slots:{default:[pl]},$$scope:{ctx:m}}}),ne=new No({props:{title:"Minimal configuration",svelte:il,data:qa,$$slots:{default:[fl]},$$scope:{ctx:m}}}),de=new No({props:{title:"Full configuration",svelte:nl,data:qa,$$slots:{default:[vl]},$$scope:{ctx:m}}}),{c(){r=o("div"),p=o("div"),u=o("h1"),h=i("Table"),_=d(),$=o("h2"),vt=i("Types"),mt=d(),C=o("div"),$e=o("h3"),Wt=i(jo),Lt=d(),ue=o("button"),Jt=i("Show type details"),Kt=d(),F=o("div"),Qt=i("Underlined attributes are "),dt=o("strong"),Xt=i("required"),Yt=i("."),Zt=d(),pe=o("div"),x(fe.$$.fragment),es=d(),k=o("div"),U=o("div"),Ee=o("div"),ts=i("id:"),ss=d(),Te=o("div"),os=i("string"),as=d(),De=o("p"),ls=i("Unique identifier for the table to generate unique IDs for the filters."),rs=d(),z=o("div"),P=o("div"),Ie=o("div"),is=i("data:"),ns=d(),xe=o("div"),ds=i(Ho),cs=d(),R=o("p"),us=i("A writable store of the type "),ye=o("code"),ps=i("T[]"),fs=i(`. Any changes in the store
				will be reflected in the table.`),vs=d(),B=o("div"),O=o("div"),Ve=o("div"),ms=i("optionsComponent:"),gs=d(),we=o("div"),hs=i(qo),bs=d(),N=o("p"),_s=i(`Custom Svelte component to apply actions on a specific row. Table will not have an options
				column if no `),Ge=o("code"),Cs=i("optionsComponent"),$s=i(" was provided."),Es=d(),A=o("div"),j=o("div"),Se=o("div"),Ts=i("pageSizes:"),Ds=d(),Fe=o("div"),Is=i(Mo),xs=d(),ke=o("p"),ys=i("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Vs=d(),H=o("div"),q=o("div"),Ue=o("div"),ws=i("defaultPageSize:"),Gs=d(),ze=o("div"),Ss=i(Wo),Fs=d(),Pe=o("p"),ks=i(`Default page size to be used for the table upon rendering. By default, default page size is
				10.`),Us=d(),M=o("div"),W=o("div"),Re=o("div"),zs=i("columns:"),Ps=d(),Be=o("div"),Rs=i(Lo),Bs=d(),L=o("p"),Os=i("An object with configuration for specific columns. "),Oe=o("code"),Ns=i("Columns"),As=i(`
				object is described below.`),js=d(),J=o("div"),E=o("div"),Ne=o("h3"),Hs=i("Columns"),qs=d(),ve=o("button"),Ms=i("Show type details"),Ws=d(),Ae=o("div"),x(me.$$.fragment),Ls=d(),K=o("div"),Q=o("div"),X=o("div"),Js=i("[key: "),ct=o("strong"),Ks=i("string"),Qs=i("]:"),Xs=d(),je=o("div"),Ys=i("Column"),Zs=d(),He=o("p"),eo=i(`Each key of this object is an accessor in the data object. If a certain key is not present,
				defaults will be applied for that accessor/column. If a key is present, defaults will be
				replaced with provided data.`),to=d(),b=o("div"),T=o("div"),qe=o("h3"),so=i("Column"),oo=d(),ge=o("button"),ao=i("Show type details"),lo=d(),Me=o("div"),x(he.$$.fragment),ro=d(),Y=o("div"),Z=o("div"),We=o("div"),io=i("header:"),no=d(),Le=o("div"),co=i("string"),uo=d(),Je=o("p"),po=i(`Custom header to be displayed for the column. If not provided, header will be the same as
				the accessor.`),fo=d(),ee=o("div"),te=o("div"),Ke=o("div"),vo=i("exclude:"),mo=d(),Qe=o("div"),go=i("boolean"),ho=d(),Xe=o("p"),bo=i(`Whether to exclude the column from the table or not. By default, columns are not excluded.
				An excluded column will still be available in the data object to apply actions.`),_o=d(),se=o("div"),oe=o("div"),Ye=o("div"),Co=i("colFitlerFn:"),$o=d(),Ze=o("div"),et=o("a"),Eo=i("ColumnFilterFn"),To=d(),tt=o("p"),Do=i(`Filtering function to be applied on the column. By default, basic number/string filter is
				applied.`),Io=d(),ae=o("div"),le=o("div"),st=o("div"),xo=i("colFilterComponent:"),yo=d(),ot=o("div"),Vo=i("SvelteComponent"),wo=d(),at=o("p"),Go=i(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
				component is rendered for the filters.`),So=d(),re=o("div"),ut=o("h2"),Fo=i("Examples"),ko=d(),D=o("div"),be=o("div"),x(ie.$$.fragment),Uo=d(),_e=o("div"),x(ne.$$.fragment),zo=d(),Ce=o("div"),x(de.$$.fragment),this.h()},l(f){r=a(f,"DIV",{class:!0,id:!0});var g=l(r);p=a(g,"DIV",{class:!0});var v=l(p);u=a(v,"H1",{class:!0});var pt=l(u);h=n(pt,"Table"),pt.forEach(s),_=c(v),$=a(v,"H2",{});var ft=l($);vt=n(ft,"Types"),ft.forEach(s),mt=c(v),C=a(v,"DIV",{class:!0,id:!0});var ce=l(C);$e=a(ce,"H3",{class:!0});var Ko=l($e);Wt=n(Ko,jo),Ko.forEach(s),Lt=c(ce),ue=a(ce,"BUTTON",{class:!0});var Qo=l(ue);Jt=n(Qo,"Show type details"),Qo.forEach(s),Kt=c(ce),F=a(ce,"DIV",{class:!0});var ht=l(F);Qt=n(ht,"Underlined attributes are "),dt=a(ht,"STRONG",{});var Xo=l(dt);Xt=n(Xo,"required"),Xo.forEach(s),Yt=n(ht,"."),ht.forEach(s),Zt=c(ce),pe=a(ce,"DIV",{class:!0,"data-popup":!0});var Yo=l(pe);y(fe.$$.fragment,Yo),Yo.forEach(s),ce.forEach(s),es=c(v),k=a(v,"DIV",{class:!0});var bt=l(k);U=a(bt,"DIV",{class:!0});var _t=l(U);Ee=a(_t,"DIV",{class:!0});var Zo=l(Ee);ts=n(Zo,"id:"),Zo.forEach(s),ss=c(_t),Te=a(_t,"DIV",{class:!0});var ea=l(Te);os=n(ea,"string"),ea.forEach(s),_t.forEach(s),as=c(bt),De=a(bt,"P",{class:!0});var ta=l(De);ls=n(ta,"Unique identifier for the table to generate unique IDs for the filters."),ta.forEach(s),bt.forEach(s),rs=c(v),z=a(v,"DIV",{class:!0});var Ct=l(z);P=a(Ct,"DIV",{class:!0});var $t=l(P);Ie=a($t,"DIV",{class:!0});var sa=l(Ie);is=n(sa,"data:"),sa.forEach(s),ns=c($t),xe=a($t,"DIV",{class:!0});var oa=l(xe);ds=n(oa,Ho),oa.forEach(s),$t.forEach(s),cs=c(Ct),R=a(Ct,"P",{class:!0});var Et=l(R);us=n(Et,"A writable store of the type "),ye=a(Et,"CODE",{class:!0});var aa=l(ye);ps=n(aa,"T[]"),aa.forEach(s),fs=n(Et,`. Any changes in the store
				will be reflected in the table.`),Et.forEach(s),Ct.forEach(s),vs=c(v),B=a(v,"DIV",{class:!0});var Tt=l(B);O=a(Tt,"DIV",{class:!0});var Dt=l(O);Ve=a(Dt,"DIV",{class:!0});var la=l(Ve);ms=n(la,"optionsComponent:"),la.forEach(s),gs=c(Dt),we=a(Dt,"DIV",{class:!0});var ra=l(we);hs=n(ra,qo),ra.forEach(s),Dt.forEach(s),bs=c(Tt),N=a(Tt,"P",{class:!0});var It=l(N);_s=n(It,`Custom Svelte component to apply actions on a specific row. Table will not have an options
				column if no `),Ge=a(It,"CODE",{class:!0});var ia=l(Ge);Cs=n(ia,"optionsComponent"),ia.forEach(s),$s=n(It," was provided."),It.forEach(s),Tt.forEach(s),Es=c(v),A=a(v,"DIV",{class:!0});var xt=l(A);j=a(xt,"DIV",{class:!0});var yt=l(j);Se=a(yt,"DIV",{class:!0});var na=l(Se);Ts=n(na,"pageSizes:"),na.forEach(s),Ds=c(yt),Fe=a(yt,"DIV",{class:!0});var da=l(Fe);Is=n(da,Mo),da.forEach(s),yt.forEach(s),xs=c(xt),ke=a(xt,"P",{class:!0});var ca=l(ke);ys=n(ca,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),ca.forEach(s),xt.forEach(s),Vs=c(v),H=a(v,"DIV",{class:!0});var Vt=l(H);q=a(Vt,"DIV",{class:!0});var wt=l(q);Ue=a(wt,"DIV",{class:!0});var ua=l(Ue);ws=n(ua,"defaultPageSize:"),ua.forEach(s),Gs=c(wt),ze=a(wt,"DIV",{class:!0});var pa=l(ze);Ss=n(pa,Wo),pa.forEach(s),wt.forEach(s),Fs=c(Vt),Pe=a(Vt,"P",{class:!0});var fa=l(Pe);ks=n(fa,`Default page size to be used for the table upon rendering. By default, default page size is
				10.`),fa.forEach(s),Vt.forEach(s),Us=c(v),M=a(v,"DIV",{class:!0});var Gt=l(M);W=a(Gt,"DIV",{class:!0});var St=l(W);Re=a(St,"DIV",{class:!0});var va=l(Re);zs=n(va,"columns:"),va.forEach(s),Ps=c(St),Be=a(St,"DIV",{class:!0});var ma=l(Be);Rs=n(ma,Lo),ma.forEach(s),St.forEach(s),Bs=c(Gt),L=a(Gt,"P",{class:!0});var Ft=l(L);Os=n(Ft,"An object with configuration for specific columns. "),Oe=a(Ft,"CODE",{class:!0});var ga=l(Oe);Ns=n(ga,"Columns"),ga.forEach(s),As=n(Ft,`
				object is described below.`),Ft.forEach(s),Gt.forEach(s),v.forEach(s),js=c(g),J=a(g,"DIV",{class:!0});var kt=l(J);E=a(kt,"DIV",{class:!0,id:!0});var lt=l(E);Ne=a(lt,"H3",{class:!0});var ha=l(Ne);Hs=n(ha,"Columns"),ha.forEach(s),qs=c(lt),ve=a(lt,"BUTTON",{class:!0});var ba=l(ve);Ms=n(ba,"Show type details"),ba.forEach(s),Ws=c(lt),Ae=a(lt,"DIV",{"data-popup":!0});var _a=l(Ae);y(me.$$.fragment,_a),_a.forEach(s),lt.forEach(s),Ls=c(kt),K=a(kt,"DIV",{class:!0});var Ut=l(K);Q=a(Ut,"DIV",{class:!0});var zt=l(Q);X=a(zt,"DIV",{class:!0});var Pt=l(X);Js=n(Pt,"[key: "),ct=a(Pt,"STRONG",{});var Ca=l(ct);Ks=n(Ca,"string"),Ca.forEach(s),Qs=n(Pt,"]:"),Pt.forEach(s),Xs=c(zt),je=a(zt,"DIV",{class:!0});var $a=l(je);Ys=n($a,"Column"),$a.forEach(s),zt.forEach(s),Zs=c(Ut),He=a(Ut,"P",{class:!0});var Ea=l(He);eo=n(Ea,`Each key of this object is an accessor in the data object. If a certain key is not present,
				defaults will be applied for that accessor/column. If a key is present, defaults will be
				replaced with provided data.`),Ea.forEach(s),Ut.forEach(s),kt.forEach(s),to=c(g),b=a(g,"DIV",{class:!0});var I=l(b);T=a(I,"DIV",{class:!0,id:!0});var rt=l(T);qe=a(rt,"H3",{class:!0});var Ta=l(qe);so=n(Ta,"Column"),Ta.forEach(s),oo=c(rt),ge=a(rt,"BUTTON",{class:!0});var Da=l(ge);ao=n(Da,"Show type details"),Da.forEach(s),lo=c(rt),Me=a(rt,"DIV",{"data-popup":!0});var Ia=l(Me);y(he.$$.fragment,Ia),Ia.forEach(s),rt.forEach(s),ro=c(I),Y=a(I,"DIV",{class:!0});var Rt=l(Y);Z=a(Rt,"DIV",{class:!0});var Bt=l(Z);We=a(Bt,"DIV",{class:!0});var xa=l(We);io=n(xa,"header:"),xa.forEach(s),no=c(Bt),Le=a(Bt,"DIV",{class:!0});var ya=l(Le);co=n(ya,"string"),ya.forEach(s),Bt.forEach(s),uo=c(Rt),Je=a(Rt,"P",{class:!0});var Va=l(Je);po=n(Va,`Custom header to be displayed for the column. If not provided, header will be the same as
				the accessor.`),Va.forEach(s),Rt.forEach(s),fo=c(I),ee=a(I,"DIV",{class:!0});var Ot=l(ee);te=a(Ot,"DIV",{class:!0});var Nt=l(te);Ke=a(Nt,"DIV",{class:!0});var wa=l(Ke);vo=n(wa,"exclude:"),wa.forEach(s),mo=c(Nt),Qe=a(Nt,"DIV",{class:!0});var Ga=l(Qe);go=n(Ga,"boolean"),Ga.forEach(s),Nt.forEach(s),ho=c(Ot),Xe=a(Ot,"P",{class:!0});var Sa=l(Xe);bo=n(Sa,`Whether to exclude the column from the table or not. By default, columns are not excluded.
				An excluded column will still be available in the data object to apply actions.`),Sa.forEach(s),Ot.forEach(s),_o=c(I),se=a(I,"DIV",{class:!0});var At=l(se);oe=a(At,"DIV",{class:!0});var jt=l(oe);Ye=a(jt,"DIV",{class:!0});var Fa=l(Ye);Co=n(Fa,"colFitlerFn:"),Fa.forEach(s),$o=c(jt),Ze=a(jt,"DIV",{class:!0});var ka=l(Ze);et=a(ka,"A",{href:!0});var Ua=l(et);Eo=n(Ua,"ColumnFilterFn"),Ua.forEach(s),ka.forEach(s),jt.forEach(s),To=c(At),tt=a(At,"P",{class:!0});var za=l(tt);Do=n(za,`Filtering function to be applied on the column. By default, basic number/string filter is
				applied.`),za.forEach(s),At.forEach(s),Io=c(I),ae=a(I,"DIV",{class:!0});var Ht=l(ae);le=a(Ht,"DIV",{class:!0});var qt=l(le);st=a(qt,"DIV",{class:!0});var Pa=l(st);xo=n(Pa,"colFilterComponent:"),Pa.forEach(s),yo=c(qt),ot=a(qt,"DIV",{class:!0});var Ra=l(ot);Vo=n(Ra,"SvelteComponent"),Ra.forEach(s),qt.forEach(s),wo=c(Ht),at=a(Ht,"P",{class:!0});var Ba=l(at);Go=n(Ba,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
				component is rendered for the filters.`),Ba.forEach(s),Ht.forEach(s),I.forEach(s),So=c(g),re=a(g,"DIV",{class:!0});var Mt=l(re);ut=a(Mt,"H2",{});var Oa=l(ut);Fo=n(Oa,"Examples"),Oa.forEach(s),ko=c(Mt),D=a(Mt,"DIV",{class:!0});var it=l(D);be=a(it,"DIV",{class:!0,id:!0});var Na=l(be);y(ie.$$.fragment,Na),Na.forEach(s),Uo=c(it),_e=a(it,"DIV",{class:!0,id:!0});var Aa=l(_e);y(ne.$$.fragment,Aa),Aa.forEach(s),zo=c(it),Ce=a(it,"DIV",{class:!0,id:!0});var ja=l(Ce);y(de.$$.fragment,ja),ja.forEach(s),it.forEach(s),Mt.forEach(s),g.forEach(s),this.h()},h(){t(u,"class","font-bold !text-6xl"),t($e,"class","font-semibold relative w-max"),t(ue,"class","btn variant-ghost-primary w-min"),t(F,"class","italic div"),t(pe,"class","variant-filled-secondary"),t(pe,"data-popup","popupClickTableConfig"),t(C,"class","grid gap-2"),t(C,"id","tableConfig"),t(Ee,"class","italic"),t(Te,"class","font-bold"),t(U,"class","flex gap-2 underline"),t(De,"class","text-xl pl-10"),t(k,"class","items-center"),t(Ie,"class","italic"),t(xe,"class","font-bold"),t(P,"class","flex gap-2 underline"),t(ye,"class","!text-xl"),t(R,"class","text-xl pl-10"),t(z,"class","items-center"),t(Ve,"class","italic"),t(we,"class","font-bold"),t(O,"class","flex gap-2"),t(Ge,"class","!text-xl"),t(N,"class","text-xl pl-10"),t(B,"class","items-center"),t(Se,"class","italic"),t(Fe,"class","font-bold"),t(j,"class","flex gap-2"),t(ke,"class","text-xl pl-10"),t(A,"class","items-center"),t(Ue,"class","italic"),t(ze,"class","font-bold"),t(q,"class","flex gap-2"),t(Pe,"class","text-xl pl-10"),t(H,"class","items-center"),t(Re,"class","italic"),t(Be,"class","font-bold"),t(W,"class","flex gap-2"),t(Oe,"class","!text-xl"),t(L,"class","text-xl pl-10"),t(M,"class","items-center"),t(p,"class","grid gap-5"),t(Ne,"class","font-semibold items-center w-max"),t(ve,"class","btn variant-ghost-primary w-min"),t(Ae,"data-popup","popupClickColumns"),t(E,"class","grid gap-2"),t(E,"id","columns"),t(X,"class","italic"),t(je,"class","font-bold"),t(Q,"class","flex gap-2"),t(He,"class","text-xl pl-10"),t(K,"class","items-center"),t(J,"class","grid gap-5"),t(qe,"class","font-semibold items-center w-max"),t(ge,"class","btn variant-ghost-primary w-min"),t(Me,"data-popup","popupClickColumn"),t(T,"class","grid gap-2"),t(T,"id","column"),t(We,"class","italic"),t(Le,"class","font-bold"),t(Z,"class","flex gap-2"),t(Je,"class","text-xl pl-10"),t(Y,"class","items-center"),t(Ke,"class","italic"),t(Qe,"class","font-bold"),t(te,"class","flex gap-2"),t(Xe,"class","text-xl pl-10"),t(ee,"class","items-center"),t(Ye,"class","italic"),t(et,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),t(Ze,"class","font-bold"),t(oe,"class","flex gap-2"),t(tt,"class","text-xl pl-10"),t(se,"class","items-center"),t(st,"class","italic"),t(ot,"class","font-bold"),t(le,"class","flex gap-2"),t(at,"class","text-xl pl-10"),t(ae,"class","items-center"),t(b,"class","grid gap-5"),t(be,"class","grid gap-5"),t(be,"id","groups"),t(_e,"class","grid gap-5"),t(_e,"id","users"),t(Ce,"class","grid gap-5"),t(Ce,"id","users"),t(D,"class","grid gap-20"),t(re,"class","grid gap-1"),t(r,"class","grid gap-20 p-10"),t(r,"id","toc-target")},m(f,g){Ja(f,r,g),e(r,p),e(p,u),e(u,h),e(p,_),e(p,$),e($,vt),e(p,mt),e(p,C),e(C,$e),e($e,Wt),e(C,Lt),e(C,ue),e(ue,Jt),e(C,Kt),e(C,F),e(F,Qt),e(F,dt),e(dt,Xt),e(F,Yt),e(C,Zt),e(C,pe),V(fe,pe,null),e(p,es),e(p,k),e(k,U),e(U,Ee),e(Ee,ts),e(U,ss),e(U,Te),e(Te,os),e(k,as),e(k,De),e(De,ls),e(p,rs),e(p,z),e(z,P),e(P,Ie),e(Ie,is),e(P,ns),e(P,xe),e(xe,ds),e(z,cs),e(z,R),e(R,us),e(R,ye),e(ye,ps),e(R,fs),e(p,vs),e(p,B),e(B,O),e(O,Ve),e(Ve,ms),e(O,gs),e(O,we),e(we,hs),e(B,bs),e(B,N),e(N,_s),e(N,Ge),e(Ge,Cs),e(N,$s),e(p,Es),e(p,A),e(A,j),e(j,Se),e(Se,Ts),e(j,Ds),e(j,Fe),e(Fe,Is),e(A,xs),e(A,ke),e(ke,ys),e(p,Vs),e(p,H),e(H,q),e(q,Ue),e(Ue,ws),e(q,Gs),e(q,ze),e(ze,Ss),e(H,Fs),e(H,Pe),e(Pe,ks),e(p,Us),e(p,M),e(M,W),e(W,Re),e(Re,zs),e(W,Ps),e(W,Be),e(Be,Rs),e(M,Bs),e(M,L),e(L,Os),e(L,Oe),e(Oe,Ns),e(L,As),e(r,js),e(r,J),e(J,E),e(E,Ne),e(Ne,Hs),e(E,qs),e(E,ve),e(ve,Ms),e(E,Ws),e(E,Ae),V(me,Ae,null),e(J,Ls),e(J,K),e(K,Q),e(Q,X),e(X,Js),e(X,ct),e(ct,Ks),e(X,Qs),e(Q,Xs),e(Q,je),e(je,Ys),e(K,Zs),e(K,He),e(He,eo),e(r,to),e(r,b),e(b,T),e(T,qe),e(qe,so),e(T,oo),e(T,ge),e(ge,ao),e(T,lo),e(T,Me),V(he,Me,null),e(b,ro),e(b,Y),e(Y,Z),e(Z,We),e(We,io),e(Z,no),e(Z,Le),e(Le,co),e(Y,uo),e(Y,Je),e(Je,po),e(b,fo),e(b,ee),e(ee,te),e(te,Ke),e(Ke,vo),e(te,mo),e(te,Qe),e(Qe,go),e(ee,ho),e(ee,Xe),e(Xe,bo),e(b,_o),e(b,se),e(se,oe),e(oe,Ye),e(Ye,Co),e(oe,$o),e(oe,Ze),e(Ze,et),e(et,Eo),e(se,To),e(se,tt),e(tt,Do),e(b,Io),e(b,ae),e(ae,le),e(le,st),e(st,xo),e(le,yo),e(le,ot),e(ot,Vo),e(ae,wo),e(ae,at),e(at,Go),e(r,So),e(r,re),e(re,ut),e(ut,Fo),e(re,ko),e(re,D),e(D,be),V(ie,be,null),e(D,Uo),e(D,_e),V(ne,_e,null),e(D,zo),e(D,Ce),V(de,Ce,null),gt=!0,Po||(Jo=[Ro(Bo.call(null,ue,m[3])),Ro(Bo.call(null,ve,m[4])),Ro(Bo.call(null,ge,m[5]))],Po=!0)},p(f,[g]){const v={};g&256&&(v.$$scope={dirty:g,ctx:f}),ie.$set(v);const pt={};g&256&&(pt.$$scope={dirty:g,ctx:f}),ne.$set(pt);const ft={};g&256&&(ft.$$scope={dirty:g,ctx:f}),de.$set(ft)},i(f){gt||(w(fe.$$.fragment,f),w(me.$$.fragment,f),w(he.$$.fragment,f),w(ie.$$.fragment,f),w(ne.$$.fragment,f),w(de.$$.fragment,f),gt=!0)},o(f){G(fe.$$.fragment,f),G(me.$$.fragment,f),G(he.$$.fragment,f),G(ie.$$.fragment,f),G(ne.$$.fragment,f),G(de.$$.fragment,f),gt=!1},d(f){f&&s(r),S(fe),S(me),S(he),S(ie),S(ne),S(de),Po=!1,Xa(Jo)}}}function gl(m){const p={id:"userGroups",data:Ha(ol),columns:{id:{header:"ID"}}},u=Ha(al);return[p,{id:"users",data:u},{id:"usersNoRoles",data:u,optionsComponent:sl,columns:{id:{colFilterFn:Ya,colFilterComponent:Za},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},{event:"click",target:"popupClickTableConfig",placement:"right"},{event:"click",target:"popupClickColumns",placement:"right"},{event:"click",target:"popupClickColumn",placement:"right"}]}class Tl extends Ma{constructor(r){super(),Wa(this,r,gl,ml,La,{})}}export{Tl as component};
