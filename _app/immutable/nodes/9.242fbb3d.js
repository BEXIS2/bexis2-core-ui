import{s as Le,P as we,h as ne,H as Me}from"../chunks/Page.de1d883c.js";import{S as oe,i as ie,s as ce,y as k,z as S,A,g as T,d as P,B as H,k as h,q as I,l as $,m as g,r as y,h as r,b,D as l,W as U,n as w,a as E,c as x,M as Z,O as je,u as Ne}from"../chunks/index.b962fd9a.js";import{C as $e}from"../chunks/CodeContainer.392e0a34.js";import{A as le}from"../chunks/Alert.36b6f8a4.js";import{F as Ve,f as Ue,a as Re}from"../chunks/index.cd3197d8.js";import{T as ze}from"../chunks/TextInput.2626dd70.js";import{T as Fe}from"../chunks/TextArea.7de9ffae.js";function We(){return console.log("load and set apiconfig"),console.log("PROD"),Le("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const Vt=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"}));function qe(p){let e,n;return{c(){e=h("div"),n=I("My Content HERE")},l(t){e=$(t,"DIV",{});var s=g(e);n=y(s,"My Content HERE"),s.forEach(r)},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function Xe(p){let e,n,t;return{c(){e=h("div"),n=h("p"),t=I("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=$(s,"DIV",{slot:!0});var i=g(e);n=$(i,"P",{});var f=g(n);t=y(f,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),f.forEach(r),i.forEach(r),this.h()},h(){w(e,"slot","description")},m(s,i){b(s,e,i),l(e,n),l(n,t)},p:U,d(s){s&&r(e)}}}function Je(p){let e,n;return e=new we({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:p[0],menu:!1,help:!0,$$slots:{description:[Xe],default:[qe]},$$scope:{ctx:p}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ge(p){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class Ke extends oe{constructor(e){super(),ie(this,e,Ge,Je,ce,{})}}const Qe=`<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import type { linkType } from '$lib/models/Models';


 import TextInput from '$lib/components/form/TextInput.svelte';


	let links: linkType[] = [
		{
			label: 'manual',
			url: 'https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md'
		}
	];


<\/script>

<Page
	title="Create a Dataset"
	note="On this page you can create a dataset based on a template. please select on template and fill out the form."
	{links}
	menu={false}
 help={true}
>
	<div slot="description">
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
	</div>


	<!-- your Page content -->
	<div>My Content HERE</div>
</Page>
`;function Ye(p){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(r)},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function Ze(p){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(r)},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function et(p){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(r)},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function tt(p){let e,n,t,s,i,f,u,m,a,c,v,d,_,C,M;return{c(){e=h("h3"),n=I("Alert with a complex message"),t=E(),s=h("p"),i=I("inside the Alert messsage everthing goes to the slot in the message block"),f=E(),u=h("ul"),m=h("li"),a=I("note 1"),c=E(),v=h("li"),d=I("note 2"),_=E(),C=h("li"),M=I("note 3"),this.h()},l(D){e=$(D,"H3",{class:!0});var V=g(e);n=y(V,"Alert with a complex message"),V.forEach(r),t=x(D),s=$(D,"P",{});var j=g(s);i=y(j,"inside the Alert messsage everthing goes to the slot in the message block"),j.forEach(r),f=x(D),u=$(D,"UL",{class:!0});var R=g(u);m=$(R,"LI",{});var L=g(m);a=y(L,"note 1"),L.forEach(r),c=x(R),v=$(R,"LI",{});var z=g(v);d=y(z,"note 2"),z.forEach(r),_=x(R),C=$(R,"LI",{});var F=g(C);M=y(F,"note 3"),F.forEach(r),R.forEach(r),this.h()},h(){w(e,"class","h3"),w(u,"class","list-disc pl-5")},m(D,V){b(D,e,V),l(e,n),b(D,t,V),b(D,s,V),l(s,i),b(D,f,V),b(D,u,V),l(u,m),l(m,a),l(u,c),l(u,v),l(v,d),l(u,_),l(u,C),l(C,M)},p:U,d(D){D&&r(e),D&&r(t),D&&r(s),D&&r(f),D&&r(u)}}}function nt(p){let e,n,t,s,i,f,u,m,a;return t=new Ve({props:{icon:Ue}}),f=new Ve({props:{icon:Re}}),{c(){e=h("div"),n=h("button"),k(t.$$.fragment),s=E(),i=h("button"),k(f.$$.fragment),this.h()},l(c){e=$(c,"DIV",{class:!0,slot:!0});var v=g(e);n=$(v,"BUTTON",{class:!0});var d=g(n);S(t.$$.fragment,d),d.forEach(r),s=x(v),i=$(v,"BUTTON",{class:!0});var _=g(i);S(f.$$.fragment,_),_.forEach(r),v.forEach(r),this.h()},h(){w(n,"class","btn hover:text-primary-100"),w(i,"class","btn hover:text-primary-100"),w(e,"class","flex gap-2"),w(e,"slot","actions")},m(c,v){b(c,e,v),l(e,n),A(t,n,null),l(e,s),l(e,i),A(f,i,null),u=!0,m||(a=[Z(n,"click",p[0]),Z(i,"click",p[1])],m=!0)},p:U,i(c){u||(T(t.$$.fragment,c),T(f.$$.fragment,c),u=!0)},o(c){P(t.$$.fragment,c),P(f.$$.fragment,c),u=!1},d(c){c&&r(e),H(t),H(f),m=!1,je(a)}}}function st(p){let e,n,t,s,i,f,u,m,a,c,v;return n=new le({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ye]},$$scope:{ctx:p}}}),s=new le({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ze]},$$scope:{ctx:p}}}),f=new le({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[et]},$$scope:{ctx:p}}}),m=new le({props:{cssClass:"variant-ringed-success",$$slots:{default:[tt]},$$scope:{ctx:p}}}),c=new le({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[nt]},$$scope:{ctx:p}}}),{c(){e=h("div"),k(n.$$.fragment),t=E(),k(s.$$.fragment),i=E(),k(f.$$.fragment),u=E(),k(m.$$.fragment),a=E(),k(c.$$.fragment),this.h()},l(d){e=$(d,"DIV",{class:!0});var _=g(e);S(n.$$.fragment,_),t=x(_),S(s.$$.fragment,_),i=x(_),S(f.$$.fragment,_),u=x(_),S(m.$$.fragment,_),a=x(_),S(c.$$.fragment,_),_.forEach(r),this.h()},h(){w(e,"class","grid grid-cols-1 gap-2")},m(d,_){b(d,e,_),A(n,e,null),l(e,t),A(s,e,null),l(e,i),A(f,e,null),l(e,u),A(m,e,null),l(e,a),A(c,e,null),v=!0},p(d,[_]){const C={};_&4&&(C.$$scope={dirty:_,ctx:d}),n.$set(C);const M={};_&4&&(M.$$scope={dirty:_,ctx:d}),s.$set(M);const D={};_&4&&(D.$$scope={dirty:_,ctx:d}),f.$set(D);const V={};_&4&&(V.$$scope={dirty:_,ctx:d}),m.$set(V);const j={};_&4&&(j.$$scope={dirty:_,ctx:d}),c.$set(j)},i(d){v||(T(n.$$.fragment,d),T(s.$$.fragment,d),T(f.$$.fragment,d),T(m.$$.fragment,d),T(c.$$.fragment,d),v=!0)},o(d){P(n.$$.fragment,d),P(s.$$.fragment,d),P(f.$$.fragment,d),P(m.$$.fragment,d),P(c.$$.fragment,d),v=!1},d(d){d&&r(e),H(n),H(s),H(f),H(m),H(c)}}}function rt(p){return[()=>alert("edit"),()=>alert("something else")]}class at extends oe{constructor(e){super(),ie(this,e,rt,st,ce,{})}}const lt=`<script>
 import Alert from "$lib/components/page/Alert.svelte";
 import Fa from 'svelte-fa';

	import { faEdit, faCableCar } from '@fortawesome/free-solid-svg-icons';


<\/script>

<div class="grid grid-cols-1 gap-2">
<Alert title="Errors" message="validation faild" cssClass="variant-filled-error">
 <b>test</b>
</Alert>

<Alert title="Warning" message="validation faild" cssClass="variant-filled-warning">
 <b>test</b>
</Alert>

<Alert message="validation success" cssClass="variant-filled-success">
 <b>test</b>
</Alert>

<Alert cssClass="variant-ringed-success">
 <h3 class="h3"> Alert with a complex message</h3>
 <p>inside the Alert messsage everthing goes to the slot in the message block</p>
 <ul class="list-disc pl-5">
  <li>note 1</li>
  <li>note 2</li>
  <li>note 3</li>
 </ul>
</Alert>

<Alert title="Alert with extra button" message="in the slot actions you can create your own container with different acions" cssClass="variant-ringed-success">
 <div class="flex gap-2" slot="actions">
  <button class="btn hover:text-primary-100" on:click={()=>alert("edit")}>
   <Fa icon={faEdit} />
  </button> 
  <button class="btn hover:text-primary-100" on:click={()=>alert("something else")}>
   <Fa icon={faCableCar} />
  </button> 
 </div>
</Alert>

</div>
`;var Ee=(p=>(p.start="start",p.end="end",p.center="center",p))(Ee||{});function ot(p){let e,n,t,s,i,f,u,m,a;return{c(){e=h("div"),n=h("div"),t=h("span"),s=I("Loading..."),f=E(),u=h("span"),m=I(p[1]),this.h()},l(c){e=$(c,"DIV",{class:!0});var v=g(e);n=$(v,"DIV",{class:!0,role:!0});var d=g(n);t=$(d,"SPAN",{class:!0});var _=g(t);s=y(_,"Loading..."),_.forEach(r),d.forEach(r),f=x(v),u=$(v,"SPAN",{});var C=g(u);m=y(C,p[1]),C.forEach(r),v.forEach(r),this.h()},h(){w(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),w(n,"class",i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+p[0]),w(n,"role","status"),w(e,"class",a="flex justify-"+p[2]+" items-"+p[2]+" h-full w-full gap-5 pt-2")},m(c,v){b(c,e,v),l(e,n),l(n,t),l(t,s),l(e,f),l(e,u),l(u,m)},p(c,[v]){v&1&&i!==(i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+c[0])&&w(n,"class",i),v&2&&Ne(m,c[1]),v&4&&a!==(a="flex justify-"+c[2]+" items-"+c[2]+" h-full w-full gap-5 pt-2")&&w(e,"class",a)},i:U,o:U,d(c){c&&r(e)}}}function it(p,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:i=Ee.start}=e;return p.$$set=f=>{"textCss"in f&&n(0,t=f.textCss),"label"in f&&n(1,s=f.label),"position"in f&&n(2,i=f.position)},[t,s,i]}class ge extends oe{constructor(e){super(),ie(this,e,it,ot,ce,{textCss:0,label:1,position:2})}}function ct(p){let e,n,t,s,i,f,u,m,a,c,v,d,_,C,M,D,V,j,R,L,z,F,ee,X,J;return f=new ge({}),d=new ge({props:{textCss:"text-primary-500"}}),j=new ge({props:{textCss:"text-secondary-500",position:Ee.center}}),X=new ge({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=h("div"),n=h("div"),t=h("h4"),s=I("default"),i=E(),k(f.$$.fragment),u=E(),m=h("div"),a=h("h4"),c=I("change color"),v=E(),k(d.$$.fragment),_=E(),C=h("div"),M=h("h4"),D=I("change position"),V=E(),k(j.$$.fragment),R=E(),L=h("div"),z=h("h4"),F=I("add text"),ee=E(),k(X.$$.fragment),this.h()},l(O){e=$(O,"DIV",{class:!0});var N=g(e);n=$(N,"DIV",{});var W=g(n);t=$(W,"H4",{class:!0});var G=g(t);s=y(G,"default"),G.forEach(r),i=x(W),S(f.$$.fragment,W),W.forEach(r),u=x(N),m=$(N,"DIV",{});var Y=g(m);a=$(Y,"H4",{class:!0});var se=g(a);c=y(se,"change color"),se.forEach(r),v=x(Y),S(d.$$.fragment,Y),Y.forEach(r),_=x(N),C=$(N,"DIV",{});var q=g(C);M=$(q,"H4",{class:!0});var re=g(M);D=y(re,"change position"),re.forEach(r),V=x(q),S(j.$$.fragment,q),q.forEach(r),R=x(N),L=$(N,"DIV",{});var Q=g(L);z=$(Q,"H4",{class:!0});var K=g(z);F=y(K,"add text"),K.forEach(r),ee=x(Q),S(X.$$.fragment,Q),Q.forEach(r),N.forEach(r),this.h()},h(){w(t,"class","h4"),w(a,"class","h4"),w(M,"class","h4"),w(z,"class","h4"),w(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(O,N){b(O,e,N),l(e,n),l(n,t),l(t,s),l(n,i),A(f,n,null),l(e,u),l(e,m),l(m,a),l(a,c),l(m,v),A(d,m,null),l(e,_),l(e,C),l(C,M),l(M,D),l(C,V),A(j,C,null),l(e,R),l(e,L),l(L,z),l(z,F),l(L,ee),A(X,L,null),J=!0},p:U,i(O){J||(T(f.$$.fragment,O),T(d.$$.fragment,O),T(j.$$.fragment,O),T(X.$$.fragment,O),J=!0)},o(O){P(f.$$.fragment,O),P(d.$$.fragment,O),P(j.$$.fragment,O),P(X.$$.fragment,O),J=!1},d(O){O&&r(e),H(f),H(d),H(j),H(X)}}}class pt extends oe{constructor(e){super(),ie(this,e,null,ct,ce,{})}}const ft=`<script>
 import Spinner from "$lib/components/page/Spinner.svelte";
 import { positionType } from "$lib/models/Enums";

<\/script>

<div class="grid grid-cols-1 space-y-10 divide-y-2" > 
<div>
 <h4 class="h4">default</h4>
 <Spinner />
</div>

<div>
 <h4 class="h4">change color</h4>
 <Spinner textCss="text-primary-500"/>
</div>

<div>
 <h4 class="h4">change position</h4>
 <Spinner textCss="text-secondary-500" position={positionType.center} />
</div>


<div>
 <h4 class="h4">add text</h4>
 <Spinner textCss="text-surface-500" label="validation is running, please waiting until dead"/>
</div>

</div>`,Oe={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function ut(p){let e,n,t,s,i,f,u,m,a,c,v,d,_,C,M,D,V,j,R,L,z,F,ee,X,J,O,N,W,G,Y,se,q,re,Q,K,ve,pe,ae,_e,fe,te,ue,be,xe;return j=new ze({props:{id:"name",label:"Name of something important",help:Be}}),L=new Fe({props:{id:"description",label:"Description to understand what happen in the world",help:Be}}),te=new Me({}),{c(){e=h("h3"),n=I("Basic Useage"),t=E(),s=h("div"),i=h("p"),f=I("Name"),u=E(),m=h("p"),a=I("Description"),c=E(),v=h("h3"),d=I("Use with Inputs"),_=E(),C=h("p"),M=I("Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),D=E(),V=h("div"),k(j.$$.fragment),R=E(),k(L.$$.fragment),z=E(),F=h("h3"),ee=I("Toggle"),X=E(),J=h("p"),O=I("If you need the help to show on a click event, you can toggle it"),N=E(),W=h("div"),G=h("button"),Y=I("name"),se=E(),q=h("button"),re=I("description"),Q=E(),K=h("h3"),ve=I("Output"),pe=E(),ae=h("p"),_e=I("this is just for demo the output is part of the page component"),fe=E(),k(te.$$.fragment),this.h()},l(o){e=$(o,"H3",{class:!0});var B=g(e);n=y(B,"Basic Useage"),B.forEach(r),t=x(o),s=$(o,"DIV",{class:!0});var me=g(s);i=$(me,"P",{class:!0,id:!0});var Ie=g(i);f=y(Ie,"Name"),Ie.forEach(r),u=x(me),m=$(me,"P",{class:!0,id:!0});var ye=g(m);a=y(ye,"Description"),ye.forEach(r),me.forEach(r),c=x(o),v=$(o,"H3",{class:!0});var Ce=g(v);d=y(Ce,"Use with Inputs"),Ce.forEach(r),_=x(o),C=$(o,"P",{});var De=g(C);M=y(De,"Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),De.forEach(r),D=x(o),V=$(o,"DIV",{class:!0});var de=g(V);S(j.$$.fragment,de),R=x(de),S(L.$$.fragment,de),de.forEach(r),z=x(o),F=$(o,"H3",{class:!0});var ke=g(F);ee=y(ke,"Toggle"),ke.forEach(r),X=x(o),J=$(o,"P",{});var Se=g(J);O=y(Se,"If you need the help to show on a click event, you can toggle it"),Se.forEach(r),N=x(o),W=$(o,"DIV",{class:!0});var he=g(W);G=$(he,"BUTTON",{type:!0,class:!0});var Ae=g(G);Y=y(Ae,"name"),Ae.forEach(r),se=x(he),q=$(he,"BUTTON",{type:!0,class:!0});var Te=g(q);re=y(Te,"description"),Te.forEach(r),he.forEach(r),Q=x(o),K=$(o,"H3",{class:!0});var Pe=g(K);ve=y(Pe,"Output"),Pe.forEach(r),pe=x(o),ae=$(o,"P",{});var He=g(ae);_e=y(He,"this is just for demo the output is part of the page component"),He.forEach(r),fe=x(o),S(te.$$.fragment,o),this.h()},h(){w(e,"class","h3"),w(i,"class","p-5"),w(i,"id","name"),w(m,"class","p-5"),w(m,"id","description"),w(s,"class","p-5"),w(v,"class","h3"),w(V,"class","p-5"),w(F,"class","h3"),w(G,"type","button"),w(G,"class","btn variant-filled-warning"),w(q,"type","button"),w(q,"class","btn variant-filled-warning"),w(W,"class","p-5"),w(K,"class","h3")},m(o,B){b(o,e,B),l(e,n),b(o,t,B),b(o,s,B),l(s,i),l(i,f),l(s,u),l(s,m),l(m,a),b(o,c,B),b(o,v,B),l(v,d),b(o,_,B),b(o,C,B),l(C,M),b(o,D,B),b(o,V,B),A(j,V,null),l(V,R),A(L,V,null),b(o,z,B),b(o,F,B),l(F,ee),b(o,X,B),b(o,J,B),l(J,O),b(o,N,B),b(o,W,B),l(W,G),l(G,Y),l(W,se),l(W,q),l(q,re),b(o,Q,B),b(o,K,B),l(K,ve),b(o,pe,B),b(o,ae,B),l(ae,_e),b(o,fe,B),A(te,o,B),ue=!0,be||(xe=[Z(i,"mouseover",p[0]),Z(i,"mouseout",p[1]),Z(m,"mouseover",p[2]),Z(m,"mouseout",p[3]),Z(G,"click",p[4]),Z(q,"click",p[5])],be=!0)},p:U,i(o){ue||(T(j.$$.fragment,o),T(L.$$.fragment,o),T(te.$$.fragment,o),ue=!0)},o(o){P(j.$$.fragment,o),P(L.$$.fragment,o),P(te.$$.fragment,o),ue=!1},d(o){o&&r(e),o&&r(t),o&&r(s),o&&r(c),o&&r(v),o&&r(_),o&&r(C),o&&r(D),o&&r(V),H(j),H(L),o&&r(z),o&&r(F),o&&r(X),o&&r(J),o&&r(N),o&&r(W),o&&r(Q),o&&r(K),o&&r(pe),o&&r(ae),o&&r(fe),H(te,o),be=!1,je(xe)}}}function mt(p){let e,n;return e=new we({props:{help:!0,$$slots:{default:[ut]},$$scope:{ctx:p}}}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const i={};s&128&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}let Be=!0;function dt(p){let e=Oe.helpItems;return ne.setHelpItemList(e),[()=>{ne.show("name")},()=>{ne.hide()},()=>{ne.show("description")},()=>{ne.hide()},()=>{ne.toggle("name")},()=>{ne.toggle("description")}]}class ht extends oe{constructor(e){super(),ie(this,e,dt,mt,ce,{})}}const $t=`<script lang=ts>
import { helpStore } from '$store/pageStores.js'
import type { helpItemType, helpStoreType } from "$models/Models";

import Help from "$lib/components/page/Help.svelte";
import TextInput from '$lib/components/form/TextInput.svelte';
import TextArea from '$lib/components/form/TextArea.svelte'; 

//Import the list of help items from a file 
import { HelpExampleData } from './data/help.js'
	import Page from '$lib/components/page/Page.svelte';
let helpItems:helpItemType[] = HelpExampleData.helpItems;

//Set list of help items and clear selection
helpStore.setHelpItemList(helpItems);

let help=true;

<\/script>
<Page help={true}>
<h3 class="h3">Basic Useage</h3>

    <div class="p-5">     
        <p class="p-5" id="name" on:mouseover={() => {helpStore.show('name')}} on:mouseout={() => {helpStore.hide()}}>Name</p>

        <p class="p-5" id="description" on:mouseover={() => {helpStore.show('description')}} on:mouseout={() => {helpStore.hide()}}>Description</p>
    </div>

<h3 class="h3">Use with Inputs</h3>
<p>Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them.</p>

    <div class="p-5">     
        <TextInput  id="name" label="Name of something important" {help}/>

        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
    </div>

<h3 class="h3">Toggle</h3>
<p>If you need the help to show on a click event, you can toggle it</p>

    <div class="p-5">
        <button  type="button" class="btn variant-filled-warning" on:click={() => {helpStore.toggle('name')}}>name</button>

        <button  type="button" class="btn variant-filled-warning" on:click={() => {helpStore.toggle('description')}}>description</button>
    </div>
    
<h3 class="h3">Output</h3>
<p>this is just for demo the output is part of the page component</p>

    <Help/>
</Page>`;function gt(p){let e,n;return e=new Ke({}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function vt(p){let e,n;return{c(){e=h("div"),n=I("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(r),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function _t(p){let e,n;return e=new ht({}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function bt(p){let e,n;return{c(){e=h("div"),n=I("This example shows how to setup the help for your page"),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"This example shows how to setup the help for your page"),s.forEach(r),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function wt(p){let e,n;return e=new at({}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Et(p){let e,n;return{c(){e=h("div"),n=I("The alerts are used to pass on messages to the user."),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"The alerts are used to pass on messages to the user."),s.forEach(r),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),l(e,n)},p:U,d(t){t&&r(e)}}}function xt(p){let e,n;return e=new pt({}),{c(){k(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function It(p){let e,n,t,s,i,f,u,m;return u=new le({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=h("div"),n=h("p"),t=I("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=h("b"),i=I("color, size and position."),f=E(),k(u.$$.fragment),this.h()},l(a){e=$(a,"DIV",{slot:!0});var c=g(e);n=$(c,"P",{});var v=g(n);t=y(v,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=$(v,"B",{});var d=g(s);i=y(d,"color, size and position."),d.forEach(r),v.forEach(r),f=x(c),S(u.$$.fragment,c),c.forEach(r),this.h()},h(){w(e,"slot","info")},m(a,c){b(a,e,c),l(e,n),l(n,t),l(n,s),l(s,i),l(e,f),A(u,e,null),m=!0},p:U,i(a){m||(T(u.$$.fragment,a),m=!0)},o(a){P(u.$$.fragment,a),m=!1},d(a){a&&r(e),H(u)}}}function yt(p){let e,n,t,s,i,f,u,m;return e=new $e({props:{title:"Page",svelte:Qe,$$slots:{info:[vt],default:[gt]},$$scope:{ctx:p}}}),t=new $e({props:{title:"Help",svelte:$t,json:JSON.stringify(Oe,void 0,2),$$slots:{info:[bt],default:[_t]},$$scope:{ctx:p}}}),i=new $e({props:{title:"Alert",svelte:lt,$$slots:{info:[Et],default:[wt]},$$scope:{ctx:p}}}),u=new $e({props:{title:"Spinner",svelte:ft,$$slots:{info:[It],default:[xt]},$$scope:{ctx:p}}}),{c(){k(e.$$.fragment),n=E(),k(t.$$.fragment),s=E(),k(i.$$.fragment),f=E(),k(u.$$.fragment)},l(a){S(e.$$.fragment,a),n=x(a),S(t.$$.fragment,a),s=x(a),S(i.$$.fragment,a),f=x(a),S(u.$$.fragment,a)},m(a,c){A(e,a,c),b(a,n,c),A(t,a,c),b(a,s,c),A(i,a,c),b(a,f,c),A(u,a,c),m=!0},p(a,c){const v={};c&1&&(v.$$scope={dirty:c,ctx:a}),e.$set(v);const d={};c&1&&(d.$$scope={dirty:c,ctx:a}),t.$set(d);const _={};c&1&&(_.$$scope={dirty:c,ctx:a}),i.$set(_);const C={};c&1&&(C.$$scope={dirty:c,ctx:a}),u.$set(C)},i(a){m||(T(e.$$.fragment,a),T(t.$$.fragment,a),T(i.$$.fragment,a),T(u.$$.fragment,a),m=!0)},o(a){P(e.$$.fragment,a),P(t.$$.fragment,a),P(i.$$.fragment,a),P(u.$$.fragment,a),m=!1},d(a){H(e,a),a&&r(n),H(t,a),a&&r(s),H(i,a),a&&r(f),H(u,a)}}}function Ct(p){let e,n,t;return n=new we({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[yt]},$$scope:{ctx:p}}}),{c(){e=h("div"),k(n.$$.fragment),this.h()},l(s){e=$(s,"DIV",{id:!0});var i=g(e);S(n.$$.fragment,i),i.forEach(r),this.h()},h(){w(e,"id","toc-target")},m(s,i){b(s,e,i),A(n,e,null),t=!0},p(s,[i]){const f={};i&1&&(f.$$scope={dirty:i,ctx:s}),n.$set(f)},i(s){t||(T(n.$$.fragment,s),t=!0)},o(s){P(n.$$.fragment,s),t=!1},d(s){s&&r(e),H(n)}}}class Bt extends oe{constructor(e){super(),ie(this,e,null,Ct,ce,{})}}export{Bt as component,Vt as universal};
