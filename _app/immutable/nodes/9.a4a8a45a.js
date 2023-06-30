import{s as de,P as pe,H as $e,h as le}from"../chunks/Page.bfded9ae.js";import{S as Q,i as Y,s as Z,y as T,z as k,A as H,g as P,d as V,B,k as g,q as D,l as v,m as _,r as y,h as a,b,D as o,W as N,n as w,a as I,c as C,M as ae,O as me,u as he}from"../chunks/index.b962fd9a.js";import{C as se}from"../chunks/CodeContainer.392e0a34.js";import{A as K}from"../chunks/Alert.36b6f8a4.js";import{F as fe,f as ge,a as ve}from"../chunks/index.cd3197d8.js";import{T as _e}from"../chunks/TextInput.f5535581.js";import{T as be}from"../chunks/TextArea.a80e56a5.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.130073ff.js";function we(){return console.log("load and set apiconfig"),console.log("PROD"),de("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ft=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function xe(p){let e,n;return{c(){e=g("div"),n=D("My Content HERE")},l(t){e=v(t,"DIV",{});var s=_(e);n=y(s,"My Content HERE"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Ee(p){let e,n,t;return{c(){e=g("div"),n=g("p"),t=D("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=v(s,"DIV",{slot:!0});var i=_(e);n=v(i,"P",{});var c=_(n);t=y(c,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),c.forEach(a),i.forEach(a),this.h()},h(){w(e,"slot","description")},m(s,i){b(s,e,i),o(e,n),o(n,t)},p:N,d(s){s&&a(e)}}}function Ie(p){let e,n;return e=new pe({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:p[0],menu:!1,help:!0,$$slots:{description:[Ee],default:[xe]},$$scope:{ctx:p}}}),{c(){T(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ce(p){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class De extends Q{constructor(e){super(),Y(this,e,Ce,Ie,Z,{})}}const ye=`<script lang="ts">
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
`;function Ae(p){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Se(p){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Te(p){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function ke(p){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,j;return{c(){e=g("h3"),n=D("Alert with a complex message"),t=I(),s=g("p"),i=D("inside the Alert messsage everthing goes to the slot in the message block"),c=I(),m=g("ul"),d=g("li"),r=D("note 1"),l=I(),$=g("li"),u=D("note 2"),h=I(),x=g("li"),j=D("note 3"),this.h()},l(E){e=v(E,"H3",{class:!0});var A=_(e);n=y(A,"Alert with a complex message"),A.forEach(a),t=C(E),s=v(E,"P",{});var L=_(s);i=y(L,"inside the Alert messsage everthing goes to the slot in the message block"),L.forEach(a),c=C(E),m=v(E,"UL",{class:!0});var O=_(m);d=v(O,"LI",{});var M=_(d);r=y(M,"note 1"),M.forEach(a),l=C(O),$=v(O,"LI",{});var U=_($);u=y(U,"note 2"),U.forEach(a),h=C(O),x=v(O,"LI",{});var R=_(x);j=y(R,"note 3"),R.forEach(a),O.forEach(a),this.h()},h(){w(e,"class","h3"),w(m,"class","list-disc pl-5")},m(E,A){b(E,e,A),o(e,n),b(E,t,A),b(E,s,A),o(s,i),b(E,c,A),b(E,m,A),o(m,d),o(d,r),o(m,l),o(m,$),o($,u),o(m,h),o(m,x),o(x,j)},p:N,d(E){E&&a(e),E&&a(t),E&&a(s),E&&a(c),E&&a(m)}}}function He(p){let e,n,t,s,i,c,m,d,r;return t=new fe({props:{icon:ge}}),c=new fe({props:{icon:ve}}),{c(){e=g("div"),n=g("button"),T(t.$$.fragment),s=I(),i=g("button"),T(c.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0,slot:!0});var $=_(e);n=v($,"BUTTON",{class:!0});var u=_(n);k(t.$$.fragment,u),u.forEach(a),s=C($),i=v($,"BUTTON",{class:!0});var h=_(i);k(c.$$.fragment,h),h.forEach(a),$.forEach(a),this.h()},h(){w(n,"class","btn hover:text-primary-100"),w(i,"class","btn hover:text-primary-100"),w(e,"class","flex gap-2"),w(e,"slot","actions")},m(l,$){b(l,e,$),o(e,n),H(t,n,null),o(e,s),o(e,i),H(c,i,null),m=!0,d||(r=[ae(n,"click",p[0]),ae(i,"click",p[1])],d=!0)},p:N,i(l){m||(P(t.$$.fragment,l),P(c.$$.fragment,l),m=!0)},o(l){V(t.$$.fragment,l),V(c.$$.fragment,l),m=!1},d(l){l&&a(e),B(t),B(c),d=!1,me(r)}}}function Pe(p){let e,n,t,s,i,c,m,d,r,l,$;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ae]},$$scope:{ctx:p}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Se]},$$scope:{ctx:p}}}),c=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Te]},$$scope:{ctx:p}}}),d=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[ke]},$$scope:{ctx:p}}}),l=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[He]},$$scope:{ctx:p}}}),{c(){e=g("div"),T(n.$$.fragment),t=I(),T(s.$$.fragment),i=I(),T(c.$$.fragment),m=I(),T(d.$$.fragment),r=I(),T(l.$$.fragment),this.h()},l(u){e=v(u,"DIV",{class:!0});var h=_(e);k(n.$$.fragment,h),t=C(h),k(s.$$.fragment,h),i=C(h),k(c.$$.fragment,h),m=C(h),k(d.$$.fragment,h),r=C(h),k(l.$$.fragment,h),h.forEach(a),this.h()},h(){w(e,"class","grid grid-cols-1 gap-2")},m(u,h){b(u,e,h),H(n,e,null),o(e,t),H(s,e,null),o(e,i),H(c,e,null),o(e,m),H(d,e,null),o(e,r),H(l,e,null),$=!0},p(u,[h]){const x={};h&4&&(x.$$scope={dirty:h,ctx:u}),n.$set(x);const j={};h&4&&(j.$$scope={dirty:h,ctx:u}),s.$set(j);const E={};h&4&&(E.$$scope={dirty:h,ctx:u}),c.$set(E);const A={};h&4&&(A.$$scope={dirty:h,ctx:u}),d.$set(A);const L={};h&4&&(L.$$scope={dirty:h,ctx:u}),l.$set(L)},i(u){$||(P(n.$$.fragment,u),P(s.$$.fragment,u),P(c.$$.fragment,u),P(d.$$.fragment,u),P(l.$$.fragment,u),$=!0)},o(u){V(n.$$.fragment,u),V(s.$$.fragment,u),V(c.$$.fragment,u),V(d.$$.fragment,u),V(l.$$.fragment,u),$=!1},d(u){u&&a(e),B(n),B(s),B(c),B(d),B(l)}}}function Ve(p){return[()=>alert("edit"),()=>alert("something else")]}class Be extends Q{constructor(e){super(),Y(this,e,Ve,Pe,Z,{})}}const Le=`<script>
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
`;var oe=(p=>(p.start="start",p.end="end",p.center="center",p))(oe||{});function Me(p){let e,n,t,s,i,c,m,d,r;return{c(){e=g("div"),n=g("div"),t=g("span"),s=D("Loading..."),c=I(),m=g("span"),d=D(p[1]),this.h()},l(l){e=v(l,"DIV",{class:!0});var $=_(e);n=v($,"DIV",{class:!0,role:!0});var u=_(n);t=v(u,"SPAN",{class:!0});var h=_(t);s=y(h,"Loading..."),h.forEach(a),u.forEach(a),c=C($),m=v($,"SPAN",{});var x=_(m);d=y(x,p[1]),x.forEach(a),$.forEach(a),this.h()},h(){w(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),w(n,"class",i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+p[0]),w(n,"role","status"),w(e,"class",r="flex justify-"+p[2]+" items-"+p[2]+" h-full w-full gap-5 pt-2")},m(l,$){b(l,e,$),o(e,n),o(n,t),o(t,s),o(e,c),o(e,m),o(m,d)},p(l,[$]){$&1&&i!==(i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+l[0])&&w(n,"class",i),$&2&&he(d,l[1]),$&4&&r!==(r="flex justify-"+l[2]+" items-"+l[2]+" h-full w-full gap-5 pt-2")&&w(e,"class",r)},i:N,o:N,d(l){l&&a(e)}}}function je(p,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:i=oe.start}=e;return p.$$set=c=>{"textCss"in c&&n(0,t=c.textCss),"label"in c&&n(1,s=c.label),"position"in c&&n(2,i=c.position)},[t,s,i]}class re extends Q{constructor(e){super(),Y(this,e,je,Me,Z,{textCss:0,label:1,position:2})}}function Ne(p){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,j,E,A,L,O,M,U,R,W,z,q;return c=new re({}),u=new re({props:{textCss:"text-primary-500"}}),L=new re({props:{textCss:"text-secondary-500",position:oe.center}}),z=new re({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=g("div"),n=g("div"),t=g("h4"),s=D("default"),i=I(),T(c.$$.fragment),m=I(),d=g("div"),r=g("h4"),l=D("change color"),$=I(),T(u.$$.fragment),h=I(),x=g("div"),j=g("h4"),E=D("change position"),A=I(),T(L.$$.fragment),O=I(),M=g("div"),U=g("h4"),R=D("add text"),W=I(),T(z.$$.fragment),this.h()},l(f){e=v(f,"DIV",{class:!0});var S=_(e);n=v(S,"DIV",{});var F=_(n);t=v(F,"H4",{class:!0});var ee=_(t);s=y(ee,"default"),ee.forEach(a),i=C(F),k(c.$$.fragment,F),F.forEach(a),m=C(S),d=v(S,"DIV",{});var X=_(d);r=v(X,"H4",{class:!0});var te=_(r);l=y(te,"change color"),te.forEach(a),$=C(X),k(u.$$.fragment,X),X.forEach(a),h=C(S),x=v(S,"DIV",{});var J=_(x);j=v(J,"H4",{class:!0});var G=_(j);E=y(G,"change position"),G.forEach(a),A=C(J),k(L.$$.fragment,J),J.forEach(a),O=C(S),M=v(S,"DIV",{});var ne=_(M);U=v(ne,"H4",{class:!0});var ce=_(U);R=y(ce,"add text"),ce.forEach(a),W=C(ne),k(z.$$.fragment,ne),ne.forEach(a),S.forEach(a),this.h()},h(){w(t,"class","h4"),w(r,"class","h4"),w(j,"class","h4"),w(U,"class","h4"),w(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(f,S){b(f,e,S),o(e,n),o(n,t),o(t,s),o(n,i),H(c,n,null),o(e,m),o(e,d),o(d,r),o(r,l),o(d,$),H(u,d,null),o(e,h),o(e,x),o(x,j),o(j,E),o(x,A),H(L,x,null),o(e,O),o(e,M),o(M,U),o(U,R),o(M,W),H(z,M,null),q=!0},p:N,i(f){q||(P(c.$$.fragment,f),P(u.$$.fragment,f),P(L.$$.fragment,f),P(z.$$.fragment,f),q=!0)},o(f){V(c.$$.fragment,f),V(u.$$.fragment,f),V(L.$$.fragment,f),V(z.$$.fragment,f),q=!1},d(f){f&&a(e),B(c),B(u),B(L),B(z)}}}class Oe extends Q{constructor(e){super(),Y(this,e,null,Ne,Z,{})}}const Ue=`<script>
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

</div>`,ue={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function Re(p){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,j,E,A,L,O,M,U,R,W,z,q;return L=new _e({props:{id:"name",label:"Name of something important",help:ie}}),M=new be({props:{id:"description",label:"Description to understand what happen in the world",help:ie}}),R=new $e({props:{active:ie}}),{c(){e=g("h3"),n=D("Basic Useage"),t=I(),s=g("div"),i=g("p"),c=D("Name"),m=I(),d=g("p"),r=D("Description"),l=I(),$=g("h3"),u=D("Use with Inputs"),h=I(),x=g("p"),j=D("Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),E=I(),A=g("div"),T(L.$$.fragment),O=I(),T(M.$$.fragment),U=I(),T(R.$$.fragment),this.h()},l(f){e=v(f,"H3",{class:!0});var S=_(e);n=y(S,"Basic Useage"),S.forEach(a),t=C(f),s=v(f,"DIV",{class:!0});var F=_(s);i=v(F,"P",{class:!0,id:!0});var ee=_(i);c=y(ee,"Name"),ee.forEach(a),m=C(F),d=v(F,"P",{class:!0,id:!0});var X=_(d);r=y(X,"Description"),X.forEach(a),F.forEach(a),l=C(f),$=v(f,"H3",{class:!0});var te=_($);u=y(te,"Use with Inputs"),te.forEach(a),h=C(f),x=v(f,"P",{});var J=_(x);j=y(J,"Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),J.forEach(a),E=C(f),A=v(f,"DIV",{class:!0});var G=_(A);k(L.$$.fragment,G),O=C(G),k(M.$$.fragment,G),G.forEach(a),U=C(f),k(R.$$.fragment,f),this.h()},h(){w(e,"class","h3"),w(i,"class","p-5"),w(i,"id","name"),w(d,"class","p-5"),w(d,"id","description"),w(s,"class","p-5"),w($,"class","h3"),w(A,"class","p-5")},m(f,S){b(f,e,S),o(e,n),b(f,t,S),b(f,s,S),o(s,i),o(i,c),o(s,m),o(s,d),o(d,r),b(f,l,S),b(f,$,S),o($,u),b(f,h,S),b(f,x,S),o(x,j),b(f,E,S),b(f,A,S),H(L,A,null),o(A,O),H(M,A,null),b(f,U,S),H(R,f,S),W=!0,z||(q=[ae(i,"mouseover",p[0]),ae(d,"mouseover",p[1])],z=!0)},p:N,i(f){W||(P(L.$$.fragment,f),P(M.$$.fragment,f),P(R.$$.fragment,f),W=!0)},o(f){V(L.$$.fragment,f),V(M.$$.fragment,f),V(R.$$.fragment,f),W=!1},d(f){f&&a(e),f&&a(t),f&&a(s),f&&a(l),f&&a($),f&&a(h),f&&a(x),f&&a(E),f&&a(A),B(L),B(M),f&&a(U),B(R,f),z=!1,me(q)}}}let ie=!0;function ze(p){let e=ue.helpItems;return le.setHelpItemList(e),[()=>{le.show("name")},()=>{le.show("description")}]}class Fe extends Q{constructor(e){super(),Y(this,e,ze,Re,Z,{})}}const We=`<script lang=ts>
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
<h3 class="h3">Basic Useage</h3>

    <div class="p-5">     
        <p class="p-5" id="name" on:mouseover={() => {helpStore.show('name')}}>Name</p>

        <p class="p-5" id="description" on:mouseover={() => {helpStore.show('description')}}>Description</p>
    </div>

<h3 class="h3">Use with Inputs</h3>
<p>Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them.</p>

    <div class="p-5">     
        <TextInput  id="name" label="Name of something important" {help}/>

        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
    </div>

<Help active={help} />`;function qe(p){let e,n;return e=new De({}),{c(){T(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Xe(p){let e,n;return{c(){e=g("div"),n=D("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Je(p){let e,n;return e=new Fe({}),{c(){T(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ge(p){let e,n;return{c(){e=g("div"),n=D("This example shows how to setup the help for your page"),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"This example shows how to setup the help for your page"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Ke(p){let e,n;return e=new Be({}),{c(){T(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Qe(p){let e,n;return{c(){e=g("div"),n=D("The alerts are used to pass on messages to the user."),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"The alerts are used to pass on messages to the user."),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:N,d(t){t&&a(e)}}}function Ye(p){let e,n;return e=new Oe({}),{c(){T(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){H(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ze(p){let e,n,t,s,i,c,m,d;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=g("div"),n=g("p"),t=D("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=g("b"),i=D("color, size and position."),c=I(),T(m.$$.fragment),this.h()},l(r){e=v(r,"DIV",{slot:!0});var l=_(e);n=v(l,"P",{});var $=_(n);t=y($,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=v($,"B",{});var u=_(s);i=y(u,"color, size and position."),u.forEach(a),$.forEach(a),c=C(l),k(m.$$.fragment,l),l.forEach(a),this.h()},h(){w(e,"slot","info")},m(r,l){b(r,e,l),o(e,n),o(n,t),o(n,s),o(s,i),o(e,c),H(m,e,null),d=!0},p:N,i(r){d||(P(m.$$.fragment,r),d=!0)},o(r){V(m.$$.fragment,r),d=!1},d(r){r&&a(e),B(m)}}}function et(p){let e,n,t,s,i,c,m,d;return e=new se({props:{title:"Page",svelte:ye,codeOnly:!0,$$slots:{info:[Xe],default:[qe]},$$scope:{ctx:p}}}),t=new se({props:{title:"Help",svelte:We,json:JSON.stringify(ue,void 0,2),$$slots:{info:[Ge],default:[Je]},$$scope:{ctx:p}}}),i=new se({props:{title:"Alert",svelte:Le,$$slots:{info:[Qe],default:[Ke]},$$scope:{ctx:p}}}),m=new se({props:{title:"Spinner",svelte:Ue,$$slots:{info:[Ze],default:[Ye]},$$scope:{ctx:p}}}),{c(){T(e.$$.fragment),n=I(),T(t.$$.fragment),s=I(),T(i.$$.fragment),c=I(),T(m.$$.fragment)},l(r){k(e.$$.fragment,r),n=C(r),k(t.$$.fragment,r),s=C(r),k(i.$$.fragment,r),c=C(r),k(m.$$.fragment,r)},m(r,l){H(e,r,l),b(r,n,l),H(t,r,l),b(r,s,l),H(i,r,l),b(r,c,l),H(m,r,l),d=!0},p(r,l){const $={};l&1&&($.$$scope={dirty:l,ctx:r}),e.$set($);const u={};l&1&&(u.$$scope={dirty:l,ctx:r}),t.$set(u);const h={};l&1&&(h.$$scope={dirty:l,ctx:r}),i.$set(h);const x={};l&1&&(x.$$scope={dirty:l,ctx:r}),m.$set(x)},i(r){d||(P(e.$$.fragment,r),P(t.$$.fragment,r),P(i.$$.fragment,r),P(m.$$.fragment,r),d=!0)},o(r){V(e.$$.fragment,r),V(t.$$.fragment,r),V(i.$$.fragment,r),V(m.$$.fragment,r),d=!1},d(r){B(e,r),r&&a(n),B(t,r),r&&a(s),B(i,r),r&&a(c),B(m,r)}}}function tt(p){let e,n,t;return n=new pe({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[et]},$$scope:{ctx:p}}}),{c(){e=g("div"),T(n.$$.fragment),this.h()},l(s){e=v(s,"DIV",{id:!0});var i=_(e);k(n.$$.fragment,i),i.forEach(a),this.h()},h(){w(e,"id","toc-target")},m(s,i){b(s,e,i),H(n,e,null),t=!0},p(s,[i]){const c={};i&1&&(c.$$scope={dirty:i,ctx:s}),n.$set(c)},i(s){t||(P(n.$$.fragment,s),t=!0)},o(s){V(n.$$.fragment,s),t=!1},d(s){s&&a(e),B(n)}}}class pt extends Q{constructor(e){super(),Y(this,e,null,tt,Z,{})}}export{pt as component,ft as universal};
