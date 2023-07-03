import{s as de,P as fe,H as $e,h as le}from"../chunks/Page.53e571f3.js";import{S as Q,i as Y,s as Z,y as P,z as T,A as k,g as H,d as V,B,k as g,q as D,l as v,m as _,r as y,h as a,b,D as o,W as j,n as w,a as I,c as C,M as ae,O as me,u as he}from"../chunks/index.0dcca97d.js";import{C as se}from"../chunks/CodeContainer.6b85f4e0.js";import{A as K}from"../chunks/Alert.894afb98.js";import{F as pe,f as ge,a as ve}from"../chunks/index.07643780.js";import{T as _e}from"../chunks/TextInput.b073d03a.js";import{T as be}from"../chunks/TextArea.6d83e5c7.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.40c5fd1c.js";function we(){return console.log("load and set apiconfig"),console.log("PROD"),de("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const pt=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function xe(f){let e,n;return{c(){e=g("div"),n=D("My Content HERE")},l(t){e=v(t,"DIV",{});var s=_(e);n=y(s,"My Content HERE"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Ee(f){let e,n,t;return{c(){e=g("div"),n=g("p"),t=D("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=v(s,"DIV",{slot:!0});var i=_(e);n=v(i,"P",{});var c=_(n);t=y(c,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),c.forEach(a),i.forEach(a),this.h()},h(){w(e,"slot","description")},m(s,i){b(s,e,i),o(e,n),o(n,t)},p:j,d(s){s&&a(e)}}}function Ie(f){let e,n;return e=new fe({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:f[0],menu:!1,help:!0,$$slots:{description:[Ee],default:[xe]},$$scope:{ctx:f}}}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ce(f){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class De extends Q{constructor(e){super(),Y(this,e,Ce,Ie,Z,{})}}const ye=`<script lang="ts">
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
`;function Ae(f){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Se(f){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Pe(f){let e,n;return{c(){e=g("b"),n=D("test")},l(t){e=v(t,"B",{});var s=_(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Te(f){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,U;return{c(){e=g("h3"),n=D("Alert with a complex message"),t=I(),s=g("p"),i=D("inside the Alert messsage everthing goes to the slot in the message block"),c=I(),m=g("ul"),d=g("li"),r=D("note 1"),l=I(),$=g("li"),u=D("note 2"),h=I(),x=g("li"),U=D("note 3"),this.h()},l(E){e=v(E,"H3",{class:!0});var A=_(e);n=y(A,"Alert with a complex message"),A.forEach(a),t=C(E),s=v(E,"P",{});var L=_(s);i=y(L,"inside the Alert messsage everthing goes to the slot in the message block"),L.forEach(a),c=C(E),m=v(E,"UL",{class:!0});var N=_(m);d=v(N,"LI",{});var M=_(d);r=y(M,"note 1"),M.forEach(a),l=C(N),$=v(N,"LI",{});var O=_($);u=y(O,"note 2"),O.forEach(a),h=C(N),x=v(N,"LI",{});var R=_(x);U=y(R,"note 3"),R.forEach(a),N.forEach(a),this.h()},h(){w(e,"class","h3"),w(m,"class","list-disc pl-5")},m(E,A){b(E,e,A),o(e,n),b(E,t,A),b(E,s,A),o(s,i),b(E,c,A),b(E,m,A),o(m,d),o(d,r),o(m,l),o(m,$),o($,u),o(m,h),o(m,x),o(x,U)},p:j,d(E){E&&a(e),E&&a(t),E&&a(s),E&&a(c),E&&a(m)}}}function ke(f){let e,n,t,s,i,c,m,d,r;return t=new pe({props:{icon:ge}}),c=new pe({props:{icon:ve}}),{c(){e=g("div"),n=g("button"),P(t.$$.fragment),s=I(),i=g("button"),P(c.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0,slot:!0});var $=_(e);n=v($,"BUTTON",{class:!0});var u=_(n);T(t.$$.fragment,u),u.forEach(a),s=C($),i=v($,"BUTTON",{class:!0});var h=_(i);T(c.$$.fragment,h),h.forEach(a),$.forEach(a),this.h()},h(){w(n,"class","btn hover:text-primary-100"),w(i,"class","btn hover:text-primary-100"),w(e,"class","flex gap-2"),w(e,"slot","actions")},m(l,$){b(l,e,$),o(e,n),k(t,n,null),o(e,s),o(e,i),k(c,i,null),m=!0,d||(r=[ae(n,"click",f[0]),ae(i,"click",f[1])],d=!0)},p:j,i(l){m||(H(t.$$.fragment,l),H(c.$$.fragment,l),m=!0)},o(l){V(t.$$.fragment,l),V(c.$$.fragment,l),m=!1},d(l){l&&a(e),B(t),B(c),d=!1,me(r)}}}function He(f){let e,n,t,s,i,c,m,d,r,l,$;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ae]},$$scope:{ctx:f}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Se]},$$scope:{ctx:f}}}),c=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Pe]},$$scope:{ctx:f}}}),d=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[Te]},$$scope:{ctx:f}}}),l=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[ke]},$$scope:{ctx:f}}}),{c(){e=g("div"),P(n.$$.fragment),t=I(),P(s.$$.fragment),i=I(),P(c.$$.fragment),m=I(),P(d.$$.fragment),r=I(),P(l.$$.fragment),this.h()},l(u){e=v(u,"DIV",{class:!0});var h=_(e);T(n.$$.fragment,h),t=C(h),T(s.$$.fragment,h),i=C(h),T(c.$$.fragment,h),m=C(h),T(d.$$.fragment,h),r=C(h),T(l.$$.fragment,h),h.forEach(a),this.h()},h(){w(e,"class","grid grid-cols-1 gap-2")},m(u,h){b(u,e,h),k(n,e,null),o(e,t),k(s,e,null),o(e,i),k(c,e,null),o(e,m),k(d,e,null),o(e,r),k(l,e,null),$=!0},p(u,[h]){const x={};h&4&&(x.$$scope={dirty:h,ctx:u}),n.$set(x);const U={};h&4&&(U.$$scope={dirty:h,ctx:u}),s.$set(U);const E={};h&4&&(E.$$scope={dirty:h,ctx:u}),c.$set(E);const A={};h&4&&(A.$$scope={dirty:h,ctx:u}),d.$set(A);const L={};h&4&&(L.$$scope={dirty:h,ctx:u}),l.$set(L)},i(u){$||(H(n.$$.fragment,u),H(s.$$.fragment,u),H(c.$$.fragment,u),H(d.$$.fragment,u),H(l.$$.fragment,u),$=!0)},o(u){V(n.$$.fragment,u),V(s.$$.fragment,u),V(c.$$.fragment,u),V(d.$$.fragment,u),V(l.$$.fragment,u),$=!1},d(u){u&&a(e),B(n),B(s),B(c),B(d),B(l)}}}function Ve(f){return[()=>alert("edit"),()=>alert("something else")]}class Be extends Q{constructor(e){super(),Y(this,e,Ve,He,Z,{})}}const Le=`<script>
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
`;var oe=(f=>(f.start="start",f.end="end",f.center="center",f))(oe||{});function Me(f){let e,n,t,s,i,c,m,d,r;return{c(){e=g("div"),n=g("div"),t=g("span"),s=D("Loading..."),c=I(),m=g("span"),d=D(f[1]),this.h()},l(l){e=v(l,"DIV",{class:!0});var $=_(e);n=v($,"DIV",{class:!0,role:!0});var u=_(n);t=v(u,"SPAN",{class:!0});var h=_(t);s=y(h,"Loading..."),h.forEach(a),u.forEach(a),c=C($),m=v($,"SPAN",{});var x=_(m);d=y(x,f[1]),x.forEach(a),$.forEach(a),this.h()},h(){w(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),w(n,"class",i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+f[0]),w(n,"role","status"),w(e,"class",r="flex justify-"+f[2]+" items-"+f[2]+" h-full w-full gap-5 pt-2")},m(l,$){b(l,e,$),o(e,n),o(n,t),o(t,s),o(e,c),o(e,m),o(m,d)},p(l,[$]){$&1&&i!==(i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+l[0])&&w(n,"class",i),$&2&&he(d,l[1]),$&4&&r!==(r="flex justify-"+l[2]+" items-"+l[2]+" h-full w-full gap-5 pt-2")&&w(e,"class",r)},i:j,o:j,d(l){l&&a(e)}}}function Ue(f,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:i=oe.start}=e;return f.$$set=c=>{"textCss"in c&&n(0,t=c.textCss),"label"in c&&n(1,s=c.label),"position"in c&&n(2,i=c.position)},[t,s,i]}class re extends Q{constructor(e){super(),Y(this,e,Ue,Me,Z,{textCss:0,label:1,position:2})}}function je(f){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,U,E,A,L,N,M,O,R,W,z,q;return c=new re({}),u=new re({props:{textCss:"text-primary-500"}}),L=new re({props:{textCss:"text-secondary-500",position:oe.center}}),z=new re({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=g("div"),n=g("div"),t=g("h4"),s=D("default"),i=I(),P(c.$$.fragment),m=I(),d=g("div"),r=g("h4"),l=D("change color"),$=I(),P(u.$$.fragment),h=I(),x=g("div"),U=g("h4"),E=D("change position"),A=I(),P(L.$$.fragment),N=I(),M=g("div"),O=g("h4"),R=D("add text"),W=I(),P(z.$$.fragment),this.h()},l(p){e=v(p,"DIV",{class:!0});var S=_(e);n=v(S,"DIV",{});var F=_(n);t=v(F,"H4",{class:!0});var ee=_(t);s=y(ee,"default"),ee.forEach(a),i=C(F),T(c.$$.fragment,F),F.forEach(a),m=C(S),d=v(S,"DIV",{});var X=_(d);r=v(X,"H4",{class:!0});var te=_(r);l=y(te,"change color"),te.forEach(a),$=C(X),T(u.$$.fragment,X),X.forEach(a),h=C(S),x=v(S,"DIV",{});var J=_(x);U=v(J,"H4",{class:!0});var G=_(U);E=y(G,"change position"),G.forEach(a),A=C(J),T(L.$$.fragment,J),J.forEach(a),N=C(S),M=v(S,"DIV",{});var ne=_(M);O=v(ne,"H4",{class:!0});var ce=_(O);R=y(ce,"add text"),ce.forEach(a),W=C(ne),T(z.$$.fragment,ne),ne.forEach(a),S.forEach(a),this.h()},h(){w(t,"class","h4"),w(r,"class","h4"),w(U,"class","h4"),w(O,"class","h4"),w(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(p,S){b(p,e,S),o(e,n),o(n,t),o(t,s),o(n,i),k(c,n,null),o(e,m),o(e,d),o(d,r),o(r,l),o(d,$),k(u,d,null),o(e,h),o(e,x),o(x,U),o(U,E),o(x,A),k(L,x,null),o(e,N),o(e,M),o(M,O),o(O,R),o(M,W),k(z,M,null),q=!0},p:j,i(p){q||(H(c.$$.fragment,p),H(u.$$.fragment,p),H(L.$$.fragment,p),H(z.$$.fragment,p),q=!0)},o(p){V(c.$$.fragment,p),V(u.$$.fragment,p),V(L.$$.fragment,p),V(z.$$.fragment,p),q=!1},d(p){p&&a(e),B(c),B(u),B(L),B(z)}}}class Ne extends Q{constructor(e){super(),Y(this,e,null,je,Z,{})}}const Oe=`<script>
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

</div>`,ue={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function Re(f){let e,n,t,s,i,c,m,d,r,l,$,u,h,x,U,E,A,L,N,M,O,R,W,z,q;return L=new _e({props:{id:"name",label:"Name of something important",help:ie}}),M=new be({props:{id:"description",label:"Description to understand what happen in the world",help:ie}}),R=new $e({props:{active:ie}}),{c(){e=g("h3"),n=D("Basic Useage"),t=I(),s=g("div"),i=g("p"),c=D("Name"),m=I(),d=g("p"),r=D("Description"),l=I(),$=g("h3"),u=D("Use with Inputs"),h=I(),x=g("p"),U=D("Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),E=I(),A=g("div"),P(L.$$.fragment),N=I(),P(M.$$.fragment),O=I(),P(R.$$.fragment),this.h()},l(p){e=v(p,"H3",{class:!0});var S=_(e);n=y(S,"Basic Useage"),S.forEach(a),t=C(p),s=v(p,"DIV",{class:!0});var F=_(s);i=v(F,"P",{class:!0,id:!0});var ee=_(i);c=y(ee,"Name"),ee.forEach(a),m=C(F),d=v(F,"P",{class:!0,id:!0});var X=_(d);r=y(X,"Description"),X.forEach(a),F.forEach(a),l=C(p),$=v(p,"H3",{class:!0});var te=_($);u=y(te,"Use with Inputs"),te.forEach(a),h=C(p),x=v(p,"P",{});var J=_(x);U=y(J,"Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),J.forEach(a),E=C(p),A=v(p,"DIV",{class:!0});var G=_(A);T(L.$$.fragment,G),N=C(G),T(M.$$.fragment,G),G.forEach(a),O=C(p),T(R.$$.fragment,p),this.h()},h(){w(e,"class","h3"),w(i,"class","p-5"),w(i,"id","name"),w(d,"class","p-5"),w(d,"id","description"),w(s,"class","p-5"),w($,"class","h3"),w(A,"class","p-5")},m(p,S){b(p,e,S),o(e,n),b(p,t,S),b(p,s,S),o(s,i),o(i,c),o(s,m),o(s,d),o(d,r),b(p,l,S),b(p,$,S),o($,u),b(p,h,S),b(p,x,S),o(x,U),b(p,E,S),b(p,A,S),k(L,A,null),o(A,N),k(M,A,null),b(p,O,S),k(R,p,S),W=!0,z||(q=[ae(i,"mouseover",f[0]),ae(d,"mouseover",f[1])],z=!0)},p:j,i(p){W||(H(L.$$.fragment,p),H(M.$$.fragment,p),H(R.$$.fragment,p),W=!0)},o(p){V(L.$$.fragment,p),V(M.$$.fragment,p),V(R.$$.fragment,p),W=!1},d(p){p&&a(e),p&&a(t),p&&a(s),p&&a(l),p&&a($),p&&a(h),p&&a(x),p&&a(E),p&&a(A),B(L),B(M),p&&a(O),B(R,p),z=!1,me(q)}}}let ie=!0;function ze(f){let e=ue.helpItems;return le.setHelpItemList(e),[()=>{le.show("name")},()=>{le.show("description")}]}class Fe extends Q{constructor(e){super(),Y(this,e,ze,Re,Z,{})}}const We=`<script lang=ts>
import { helpStore } from '$store/pageStores.js'
import type { helpItemType, helpStoreType } from "$models/Models";

import HelpPopUp from "$lib/components/page/HelpPopUp.svelte";
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

<HelpPopUp active={help} />`;function qe(f){let e,n;return e=new De({}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Xe(f){let e,n;return{c(){e=g("div"),n=D("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Je(f){let e,n;return e=new Fe({}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ge(f){let e,n;return{c(){e=g("div"),n=D("This example shows how to setup the help for your page"),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"This example shows how to setup the help for your page"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Ke(f){let e,n;return e=new Be({}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Qe(f){let e,n;return{c(){e=g("div"),n=D("The alerts are used to pass on messages to the user."),this.h()},l(t){e=v(t,"DIV",{slot:!0});var s=_(e);n=y(s,"The alerts are used to pass on messages to the user."),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),o(e,n)},p:j,d(t){t&&a(e)}}}function Ye(f){let e,n;return e=new Ne({}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ze(f){let e,n,t,s,i,c,m,d;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=g("div"),n=g("p"),t=D("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=g("b"),i=D("color, size and position."),c=I(),P(m.$$.fragment),this.h()},l(r){e=v(r,"DIV",{slot:!0});var l=_(e);n=v(l,"P",{});var $=_(n);t=y($,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=v($,"B",{});var u=_(s);i=y(u,"color, size and position."),u.forEach(a),$.forEach(a),c=C(l),T(m.$$.fragment,l),l.forEach(a),this.h()},h(){w(e,"slot","info")},m(r,l){b(r,e,l),o(e,n),o(n,t),o(n,s),o(s,i),o(e,c),k(m,e,null),d=!0},p:j,i(r){d||(H(m.$$.fragment,r),d=!0)},o(r){V(m.$$.fragment,r),d=!1},d(r){r&&a(e),B(m)}}}function et(f){let e,n,t,s,i,c,m,d;return e=new se({props:{title:"Page",svelte:ye,codeOnly:!0,$$slots:{info:[Xe],default:[qe]},$$scope:{ctx:f}}}),t=new se({props:{title:"Help",svelte:We,json:JSON.stringify(ue,void 0,2),$$slots:{info:[Ge],default:[Je]},$$scope:{ctx:f}}}),i=new se({props:{title:"Alert",svelte:Le,$$slots:{info:[Qe],default:[Ke]},$$scope:{ctx:f}}}),m=new se({props:{title:"Spinner",svelte:Oe,$$slots:{info:[Ze],default:[Ye]},$$scope:{ctx:f}}}),{c(){P(e.$$.fragment),n=I(),P(t.$$.fragment),s=I(),P(i.$$.fragment),c=I(),P(m.$$.fragment)},l(r){T(e.$$.fragment,r),n=C(r),T(t.$$.fragment,r),s=C(r),T(i.$$.fragment,r),c=C(r),T(m.$$.fragment,r)},m(r,l){k(e,r,l),b(r,n,l),k(t,r,l),b(r,s,l),k(i,r,l),b(r,c,l),k(m,r,l),d=!0},p(r,l){const $={};l&1&&($.$$scope={dirty:l,ctx:r}),e.$set($);const u={};l&1&&(u.$$scope={dirty:l,ctx:r}),t.$set(u);const h={};l&1&&(h.$$scope={dirty:l,ctx:r}),i.$set(h);const x={};l&1&&(x.$$scope={dirty:l,ctx:r}),m.$set(x)},i(r){d||(H(e.$$.fragment,r),H(t.$$.fragment,r),H(i.$$.fragment,r),H(m.$$.fragment,r),d=!0)},o(r){V(e.$$.fragment,r),V(t.$$.fragment,r),V(i.$$.fragment,r),V(m.$$.fragment,r),d=!1},d(r){B(e,r),r&&a(n),B(t,r),r&&a(s),B(i,r),r&&a(c),B(m,r)}}}function tt(f){let e,n,t;return n=new fe({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[et]},$$scope:{ctx:f}}}),{c(){e=g("div"),P(n.$$.fragment),this.h()},l(s){e=v(s,"DIV",{id:!0});var i=_(e);T(n.$$.fragment,i),i.forEach(a),this.h()},h(){w(e,"id","toc-target")},m(s,i){b(s,e,i),k(n,e,null),t=!0},p(s,[i]){const c={};i&1&&(c.$$scope={dirty:i,ctx:s}),n.$set(c)},i(s){t||(H(n.$$.fragment,s),t=!0)},o(s){V(n.$$.fragment,s),t=!1},d(s){s&&a(e),B(n)}}}class ft extends Q{constructor(e){super(),Y(this,e,null,tt,Z,{})}}export{ft as component,pt as universal};
