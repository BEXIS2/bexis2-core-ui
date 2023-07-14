import{s as ut,P as ct,p as $t,H as dt,h as lt}from"../chunks/Page.4b3af84f.js";import{S as Z,i as tt,s as et,y as A,z as S,A as T,g as P,d as H,B as k,k as h,q as V,l as g,m as v,r as B,h as a,b,D as o,W as R,n as y,a as w,c as E,M as at,O as ft}from"../chunks/index.049e93f8.js";import{C as st}from"../chunks/CodeContainer.7139fe33.js";import{A as K}from"../chunks/Alert.d827d5be.js";import{F as pt,h as ht,i as gt}from"../chunks/index.56bed8f1.js";import{S as rt}from"../chunks/Spinner.8d1aa3f9.js";import{T as vt}from"../chunks/TextInput.cd4cd1d4.js";import{T as _t}from"../chunks/TextArea.75143517.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.8eb44e16.js";function bt(){return console.log("load and set apiconfig"),console.log("PROD"),ut("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ie=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"}));function xt($){let t,n;return{c(){t=h("div"),n=V("My Content HERE")},l(e){t=g(e,"DIV",{});var s=v(t);n=B(s,"My Content HERE"),s.forEach(a)},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function wt($){let t,n,e;return{c(){t=h("div"),n=h("p"),e=V("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){t=g(s,"DIV",{slot:!0});var i=v(t);n=g(i,"P",{});var c=v(n);e=B(c,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),c.forEach(a),i.forEach(a),this.h()},h(){y(t,"slot","description")},m(s,i){b(s,t,i),o(t,n),o(n,e)},p:R,d(s){s&&a(t)}}}function Et($){let t,n;return t=new ct({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:$[0],menu:!1,help:!0,$$slots:{description:[wt],default:[xt]},$$scope:{ctx:$}}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function It($){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class yt extends Z{constructor(t){super(),tt(this,t,It,Et,et,{})}}const Ct=`<script lang="ts">
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
`;function Dt($){let t,n;return{c(){t=h("b"),n=V("test")},l(e){t=g(e,"B",{});var s=v(t);n=B(s,"test"),s.forEach(a)},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function At($){let t,n;return{c(){t=h("b"),n=V("test")},l(e){t=g(e,"B",{});var s=v(t);n=B(s,"test"),s.forEach(a)},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function St($){let t,n;return{c(){t=h("b"),n=V("test")},l(e){t=g(e,"B",{});var s=v(t);n=B(s,"test"),s.forEach(a)},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function Tt($){let t,n,e,s,i,c,m,u,r,p,_,f,d,I,L;return{c(){t=h("h3"),n=V("Alert with a complex message"),e=w(),s=h("p"),i=V("inside the Alert messsage everthing goes to the slot in the message block"),c=w(),m=h("ul"),u=h("li"),r=V("note 1"),p=w(),_=h("li"),f=V("note 2"),d=w(),I=h("li"),L=V("note 3"),this.h()},l(x){t=g(x,"H3",{class:!0});var C=v(t);n=B(C,"Alert with a complex message"),C.forEach(a),e=E(x),s=g(x,"P",{});var M=v(s);i=B(M,"inside the Alert messsage everthing goes to the slot in the message block"),M.forEach(a),c=E(x),m=g(x,"UL",{class:!0});var O=v(m);u=g(O,"LI",{});var U=v(u);r=B(U,"note 1"),U.forEach(a),p=E(O),_=g(O,"LI",{});var j=v(_);f=B(j,"note 2"),j.forEach(a),d=E(O),I=g(O,"LI",{});var N=v(I);L=B(N,"note 3"),N.forEach(a),O.forEach(a),this.h()},h(){y(t,"class","h3"),y(m,"class","list-disc pl-5")},m(x,C){b(x,t,C),o(t,n),b(x,e,C),b(x,s,C),o(s,i),b(x,c,C),b(x,m,C),o(m,u),o(u,r),o(m,p),o(m,_),o(_,f),o(m,d),o(m,I),o(I,L)},p:R,d(x){x&&a(t),x&&a(e),x&&a(s),x&&a(c),x&&a(m)}}}function Pt($){let t,n,e,s,i,c,m,u,r;return e=new pt({props:{icon:ht}}),c=new pt({props:{icon:gt}}),{c(){t=h("div"),n=h("button"),A(e.$$.fragment),s=w(),i=h("button"),A(c.$$.fragment),this.h()},l(p){t=g(p,"DIV",{class:!0,slot:!0});var _=v(t);n=g(_,"BUTTON",{class:!0});var f=v(n);S(e.$$.fragment,f),f.forEach(a),s=E(_),i=g(_,"BUTTON",{class:!0});var d=v(i);S(c.$$.fragment,d),d.forEach(a),_.forEach(a),this.h()},h(){y(n,"class","btn hover:text-primary-100"),y(i,"class","btn hover:text-primary-100"),y(t,"class","flex gap-2"),y(t,"slot","actions")},m(p,_){b(p,t,_),o(t,n),T(e,n,null),o(t,s),o(t,i),T(c,i,null),m=!0,u||(r=[at(n,"click",$[0]),at(i,"click",$[1])],u=!0)},p:R,i(p){m||(P(e.$$.fragment,p),P(c.$$.fragment,p),m=!0)},o(p){H(e.$$.fragment,p),H(c.$$.fragment,p),m=!1},d(p){p&&a(t),k(e),k(c),u=!1,ft(r)}}}function Ht($){let t,n,e,s,i,c,m,u,r,p,_;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Dt]},$$scope:{ctx:$}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[At]},$$scope:{ctx:$}}}),c=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[St]},$$scope:{ctx:$}}}),u=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[Tt]},$$scope:{ctx:$}}}),p=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[Pt]},$$scope:{ctx:$}}}),{c(){t=h("div"),A(n.$$.fragment),e=w(),A(s.$$.fragment),i=w(),A(c.$$.fragment),m=w(),A(u.$$.fragment),r=w(),A(p.$$.fragment),this.h()},l(f){t=g(f,"DIV",{class:!0});var d=v(t);S(n.$$.fragment,d),e=E(d),S(s.$$.fragment,d),i=E(d),S(c.$$.fragment,d),m=E(d),S(u.$$.fragment,d),r=E(d),S(p.$$.fragment,d),d.forEach(a),this.h()},h(){y(t,"class","grid grid-cols-1 gap-2")},m(f,d){b(f,t,d),T(n,t,null),o(t,e),T(s,t,null),o(t,i),T(c,t,null),o(t,m),T(u,t,null),o(t,r),T(p,t,null),_=!0},p(f,[d]){const I={};d&4&&(I.$$scope={dirty:d,ctx:f}),n.$set(I);const L={};d&4&&(L.$$scope={dirty:d,ctx:f}),s.$set(L);const x={};d&4&&(x.$$scope={dirty:d,ctx:f}),c.$set(x);const C={};d&4&&(C.$$scope={dirty:d,ctx:f}),u.$set(C);const M={};d&4&&(M.$$scope={dirty:d,ctx:f}),p.$set(M)},i(f){_||(P(n.$$.fragment,f),P(s.$$.fragment,f),P(c.$$.fragment,f),P(u.$$.fragment,f),P(p.$$.fragment,f),_=!0)},o(f){H(n.$$.fragment,f),H(s.$$.fragment,f),H(c.$$.fragment,f),H(u.$$.fragment,f),H(p.$$.fragment,f),_=!1},d(f){f&&a(t),k(n),k(s),k(c),k(u),k(p)}}}function kt($){return[()=>alert("edit"),()=>alert("something else")]}class Vt extends Z{constructor(t){super(),tt(this,t,kt,Ht,et,{})}}const Bt=`<script>
	import Alert from '$lib/components/page/Alert.svelte';
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
		<h3 class="h3">Alert with a complex message</h3>
		<p>inside the Alert messsage everthing goes to the slot in the message block</p>
		<ul class="list-disc pl-5">
			<li>note 1</li>
			<li>note 2</li>
			<li>note 3</li>
		</ul>
	</Alert>

	<Alert
		title="Alert with extra button"
		message="in the slot actions you can create your own container with different acions"
		cssClass="variant-ringed-success"
	>
		<div class="flex gap-2" slot="actions">
			<button class="btn hover:text-primary-100" on:click={() => alert('edit')}>
				<Fa icon={faEdit} />
			</button>
			<button class="btn hover:text-primary-100" on:click={() => alert('something else')}>
				<Fa icon={faCableCar} />
			</button>
		</div>
	</Alert>
</div>
`;function Mt($){let t,n,e,s,i,c,m,u,r,p,_,f,d,I,L,x,C,M,O,U,j,N,W,z,q;return c=new rt({}),f=new rt({props:{textCss:"text-primary-500"}}),M=new rt({props:{textCss:"text-secondary-500",position:$t.center}}),z=new rt({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=h("div"),n=h("div"),e=h("h4"),s=V("default"),i=w(),A(c.$$.fragment),m=w(),u=h("div"),r=h("h4"),p=V("change color"),_=w(),A(f.$$.fragment),d=w(),I=h("div"),L=h("h4"),x=V("change position"),C=w(),A(M.$$.fragment),O=w(),U=h("div"),j=h("h4"),N=V("add text"),W=w(),A(z.$$.fragment),this.h()},l(l){t=g(l,"DIV",{class:!0});var D=v(t);n=g(D,"DIV",{});var F=v(n);e=g(F,"H4",{class:!0});var Q=v(e);s=B(Q,"default"),Q.forEach(a),i=E(F),S(c.$$.fragment,F),F.forEach(a),m=E(D),u=g(D,"DIV",{});var X=v(u);r=g(X,"H4",{class:!0});var Y=v(r);p=B(Y,"change color"),Y.forEach(a),_=E(X),S(f.$$.fragment,X),X.forEach(a),d=E(D),I=g(D,"DIV",{});var J=v(I);L=g(J,"H4",{class:!0});var G=v(L);x=B(G,"change position"),G.forEach(a),C=E(J),S(M.$$.fragment,J),J.forEach(a),O=E(D),U=g(D,"DIV",{});var nt=v(U);j=g(nt,"H4",{class:!0});var it=v(j);N=B(it,"add text"),it.forEach(a),W=E(nt),S(z.$$.fragment,nt),nt.forEach(a),D.forEach(a),this.h()},h(){y(e,"class","h4"),y(r,"class","h4"),y(L,"class","h4"),y(j,"class","h4"),y(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(l,D){b(l,t,D),o(t,n),o(n,e),o(e,s),o(n,i),T(c,n,null),o(t,m),o(t,u),o(u,r),o(r,p),o(u,_),T(f,u,null),o(t,d),o(t,I),o(I,L),o(L,x),o(I,C),T(M,I,null),o(t,O),o(t,U),o(U,j),o(j,N),o(U,W),T(z,U,null),q=!0},p:R,i(l){q||(P(c.$$.fragment,l),P(f.$$.fragment,l),P(M.$$.fragment,l),P(z.$$.fragment,l),q=!0)},o(l){H(c.$$.fragment,l),H(f.$$.fragment,l),H(M.$$.fragment,l),H(z.$$.fragment,l),q=!1},d(l){l&&a(t),k(c),k(f),k(M),k(z)}}}class Ut extends Z{constructor(t){super(),tt(this,t,null,Mt,et,{})}}const Lt=`<script>
	import Spinner from '$lib/components/page/Spinner.svelte';
	import { positionType } from '$lib/models/Enums';
<\/script>

<div class="grid grid-cols-1 space-y-10 divide-y-2">
	<div>
		<h4 class="h4">default</h4>
		<Spinner />
	</div>

	<div>
		<h4 class="h4">change color</h4>
		<Spinner textCss="text-primary-500" />
	</div>

	<div>
		<h4 class="h4">change position</h4>
		<Spinner textCss="text-secondary-500" position={positionType.center} />
	</div>

	<div>
		<h4 class="h4">add text</h4>
		<Spinner textCss="text-surface-500" label="validation is running, please waiting until dead" />
	</div>
</div>
`,mt={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function Ot($){let t,n,e,s,i,c,m,u,r,p,_,f,d,I,L,x,C,M,O,U,j,N,W,z,q;return M=new vt({props:{id:"name",label:"Name of something important",help:ot}}),U=new _t({props:{id:"description",label:"Description to understand what happen in the world",help:ot}}),N=new dt({props:{active:ot}}),{c(){t=h("h3"),n=V("Basic Useage"),e=w(),s=h("div"),i=h("p"),c=V("Name"),m=w(),u=h("p"),r=V("Description"),p=w(),_=h("h3"),f=V("Use with Inputs"),d=w(),I=h("p"),L=V(`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),x=w(),C=h("div"),A(M.$$.fragment),O=w(),A(U.$$.fragment),j=w(),A(N.$$.fragment),this.h()},l(l){t=g(l,"H3",{class:!0});var D=v(t);n=B(D,"Basic Useage"),D.forEach(a),e=E(l),s=g(l,"DIV",{class:!0});var F=v(s);i=g(F,"P",{class:!0,id:!0});var Q=v(i);c=B(Q,"Name"),Q.forEach(a),m=E(F),u=g(F,"P",{class:!0,id:!0});var X=v(u);r=B(X,"Description"),X.forEach(a),F.forEach(a),p=E(l),_=g(l,"H3",{class:!0});var Y=v(_);f=B(Y,"Use with Inputs"),Y.forEach(a),d=E(l),I=g(l,"P",{});var J=v(I);L=B(J,`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),J.forEach(a),x=E(l),C=g(l,"DIV",{class:!0});var G=v(C);S(M.$$.fragment,G),O=E(G),S(U.$$.fragment,G),G.forEach(a),j=E(l),S(N.$$.fragment,l),this.h()},h(){y(t,"class","h3"),y(i,"class","p-5"),y(i,"id","name"),y(u,"class","p-5"),y(u,"id","description"),y(s,"class","p-5"),y(_,"class","h3"),y(C,"class","p-5")},m(l,D){b(l,t,D),o(t,n),b(l,e,D),b(l,s,D),o(s,i),o(i,c),o(s,m),o(s,u),o(u,r),b(l,p,D),b(l,_,D),o(_,f),b(l,d,D),b(l,I,D),o(I,L),b(l,x,D),b(l,C,D),T(M,C,null),o(C,O),T(U,C,null),b(l,j,D),T(N,l,D),W=!0,z||(q=[at(i,"mouseover",$[0]),at(u,"mouseover",$[1])],z=!0)},p:R,i(l){W||(P(M.$$.fragment,l),P(U.$$.fragment,l),P(N.$$.fragment,l),W=!0)},o(l){H(M.$$.fragment,l),H(U.$$.fragment,l),H(N.$$.fragment,l),W=!1},d(l){l&&a(t),l&&a(e),l&&a(s),l&&a(p),l&&a(_),l&&a(d),l&&a(I),l&&a(x),l&&a(C),k(M),k(U),l&&a(j),k(N,l),z=!1,ft(q)}}}let ot=!0;function jt($){let t=mt.helpItems;return lt.setHelpItemList(t),[()=>{lt.show("name")},()=>{lt.show("description")}]}class Nt extends Z{constructor(t){super(),tt(this,t,jt,Ot,et,{})}}const Rt=`<script lang="ts">
	import { helpStore } from '$store/pageStores.js';
	import type { helpItemType, helpStoreType } from '$models/Models';

	import HelpPopUp from '$lib/components/page/HelpPopUp.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import TextArea from '$lib/components/form/TextArea.svelte';

	//Import the list of help items from a file
	import { HelpExampleData } from './data/help.js';
	import Page from '$lib/components/page/Page.svelte';
	let helpItems: helpItemType[] = HelpExampleData.helpItems;

	//Set list of help items and clear selection
	helpStore.setHelpItemList(helpItems);

	let help = true;
<\/script>

<h3 class="h3">Basic Useage</h3>

<div class="p-5">
	<p
		class="p-5"
		id="name"
		on:mouseover={() => {
			helpStore.show('name');
		}}
	>
		Name
	</p>

	<p
		class="p-5"
		id="description"
		on:mouseover={() => {
			helpStore.show('description');
		}}
	>
		Description
	</p>
</div>

<h3 class="h3">Use with Inputs</h3>
<p>
	Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.
</p>

<div class="p-5">
	<TextInput id="name" label="Name of something important" {help} />

	<TextArea id="description" label="Description to understand what happen in the world" {help} />
</div>

<HelpPopUp active={help} />
`;function zt($){let t,n;return t=new yt({}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ft($){let t,n;return{c(){t=h("div"),n=V(`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),this.h()},l(e){t=g(e,"DIV",{slot:!0});var s=v(t);n=B(s,`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),s.forEach(a),this.h()},h(){y(t,"slot","info")},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function Wt($){let t,n;return t=new Nt({}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function qt($){let t,n;return{c(){t=h("div"),n=V("This example shows how to setup the help for your page"),this.h()},l(e){t=g(e,"DIV",{slot:!0});var s=v(t);n=B(s,"This example shows how to setup the help for your page"),s.forEach(a),this.h()},h(){y(t,"slot","info")},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function Xt($){let t,n;return t=new Vt({}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Jt($){let t,n;return{c(){t=h("div"),n=V("The alerts are used to pass on messages to the user."),this.h()},l(e){t=g(e,"DIV",{slot:!0});var s=v(t);n=B(s,"The alerts are used to pass on messages to the user."),s.forEach(a),this.h()},h(){y(t,"slot","info")},m(e,s){b(e,t,s),o(t,n)},p:R,d(e){e&&a(t)}}}function Gt($){let t,n;return t=new Ut({}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Kt($){let t,n,e,s,i,c,m,u;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=h("div"),n=h("p"),e=V(`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=h("b"),i=V("color, size and position."),c=w(),A(m.$$.fragment),this.h()},l(r){t=g(r,"DIV",{slot:!0});var p=v(t);n=g(p,"P",{});var _=v(n);e=B(_,`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=g(_,"B",{});var f=v(s);i=B(f,"color, size and position."),f.forEach(a),_.forEach(a),c=E(p),S(m.$$.fragment,p),p.forEach(a),this.h()},h(){y(t,"slot","info")},m(r,p){b(r,t,p),o(t,n),o(n,e),o(n,s),o(s,i),o(t,c),T(m,t,null),u=!0},p:R,i(r){u||(P(m.$$.fragment,r),u=!0)},o(r){H(m.$$.fragment,r),u=!1},d(r){r&&a(t),k(m)}}}function Qt($){let t,n,e,s,i,c,m,u;return t=new st({props:{title:"Page",svelte:Ct,codeOnly:!0,$$slots:{info:[Ft],default:[zt]},$$scope:{ctx:$}}}),e=new st({props:{title:"Help",svelte:Rt,json:JSON.stringify(mt,void 0,2),$$slots:{info:[qt],default:[Wt]},$$scope:{ctx:$}}}),i=new st({props:{title:"Alert",svelte:Bt,$$slots:{info:[Jt],default:[Xt]},$$scope:{ctx:$}}}),m=new st({props:{title:"Spinner",svelte:Lt,$$slots:{info:[Kt],default:[Gt]},$$scope:{ctx:$}}}),{c(){A(t.$$.fragment),n=w(),A(e.$$.fragment),s=w(),A(i.$$.fragment),c=w(),A(m.$$.fragment)},l(r){S(t.$$.fragment,r),n=E(r),S(e.$$.fragment,r),s=E(r),S(i.$$.fragment,r),c=E(r),S(m.$$.fragment,r)},m(r,p){T(t,r,p),b(r,n,p),T(e,r,p),b(r,s,p),T(i,r,p),b(r,c,p),T(m,r,p),u=!0},p(r,p){const _={};p&1&&(_.$$scope={dirty:p,ctx:r}),t.$set(_);const f={};p&1&&(f.$$scope={dirty:p,ctx:r}),e.$set(f);const d={};p&1&&(d.$$scope={dirty:p,ctx:r}),i.$set(d);const I={};p&1&&(I.$$scope={dirty:p,ctx:r}),m.$set(I)},i(r){u||(P(t.$$.fragment,r),P(e.$$.fragment,r),P(i.$$.fragment,r),P(m.$$.fragment,r),u=!0)},o(r){H(t.$$.fragment,r),H(e.$$.fragment,r),H(i.$$.fragment,r),H(m.$$.fragment,r),u=!1},d(r){k(t,r),r&&a(n),k(e,r),r&&a(s),k(i,r),r&&a(c),k(m,r)}}}function Yt($){let t,n,e;return n=new ct({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[Qt]},$$scope:{ctx:$}}}),{c(){t=h("div"),A(n.$$.fragment),this.h()},l(s){t=g(s,"DIV",{id:!0});var i=v(t);S(n.$$.fragment,i),i.forEach(a),this.h()},h(){y(t,"id","toc-target")},m(s,i){b(s,t,i),T(n,t,null),e=!0},p(s,[i]){const c={};i&1&&(c.$$scope={dirty:i,ctx:s}),n.$set(c)},i(s){e||(P(n.$$.fragment,s),e=!0)},o(s){H(n.$$.fragment,s),e=!1},d(s){s&&a(t),k(n)}}}class pe extends Z{constructor(t){super(),tt(this,t,null,Yt,et,{})}}export{pe as component,ie as universal};
