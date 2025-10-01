import{S as J,i as K,s as Q,m as E,o as S,p as D,q as I,r as H,u as N,n as V,d as c,b as x,e as g,K as M,j as v,z as u,c as _,f as O,h as b,k as C,Q as lt,B as R}from"../chunks/Cxos4rAu.js";import"../chunks/IHki7fMi.js";import{C as G}from"../chunks/DHNHqIRL.js";import{P as rt,H as ft}from"../chunks/i9b9yOc3.js";import{A as X}from"../chunks/BYatlvd2.js";import{h as Y,n as Z}from"../chunks/D9emG2eX.js";import{F as ot,l as ut,m as pt}from"../chunks/CnNGhmnU.js";import{S as st}from"../chunks/COaldc9w.js";import{p as mt,n as it}from"../chunks/2CYK9ZqT.js";import{T as dt,a as ht}from"../chunks/BKKX3wUC.js";import"../chunks/DZYx5rdj.js";import"../chunks/BeRmbXES.js";function $t(r){let t,n="My Content HERE";return{c(){t=v("div"),t.textContent=n},l(e){t=g(e,"DIV",{"data-svelte-h":!0}),M(t)!=="svelte-1gk5f1x"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function gt(r){let t,n="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>";return{c(){t=v("div"),t.innerHTML=n,this.h()},l(e){t=g(e,"DIV",{slot:!0,"data-svelte-h":!0}),M(t)!=="svelte-wpqpf6"&&(t.innerHTML=n),this.h()},h(){u(t,"slot","description")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function vt(r){let t,n;return t=new rt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:r[0],menu:!1,help:!0,$$slots:{description:[gt],default:[$t]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},p(e,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function _t(r){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class xt extends J{constructor(t){super(),K(this,t,_t,vt,Q,{})}}const bt=`<script lang="ts">
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
`;function Ct(r){let t,n="test";return{c(){t=v("b"),t.textContent=n},l(e){t=g(e,"B",{"data-svelte-h":!0}),M(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function wt(r){let t,n="test";return{c(){t=v("b"),t.textContent=n},l(e){t=g(e,"B",{"data-svelte-h":!0}),M(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Tt(r){let t,n="test";return{c(){t=v("b"),t.textContent=n},l(e){t=g(e,"B",{"data-svelte-h":!0}),M(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function yt(r){let t,n="Alert with a complex message",e,s,a="inside the Alert messsage everthing goes to the slot in the message block",p,m,o="<li>note 1</li> <li>note 2</li> <li>note 3</li>";return{c(){t=v("h3"),t.textContent=n,e=C(),s=v("p"),s.textContent=a,p=C(),m=v("ul"),m.innerHTML=o,this.h()},l(d){t=g(d,"H3",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-pocvfg"&&(t.textContent=n),e=b(d),s=g(d,"P",{"data-svelte-h":!0}),M(s)!=="svelte-koj35t"&&(s.textContent=a),p=b(d),m=g(d,"UL",{class:!0,"data-svelte-h":!0}),M(m)!=="svelte-10ocnod"&&(m.innerHTML=o),this.h()},h(){u(t,"class","h3"),u(m,"class","list-disc pl-5")},m(d,h){x(d,t,h),x(d,e,h),x(d,s,h),x(d,p,h),x(d,m,h)},p:V,d(d){d&&(c(t),c(e),c(s),c(p),c(m))}}}function kt(r){let t,n,e,s,a,p,m,o,d;return e=new ot({props:{icon:ut}}),p=new ot({props:{icon:pt}}),{c(){t=v("div"),n=v("button"),N(e.$$.fragment),s=C(),a=v("button"),N(p.$$.fragment),this.h()},l(h){t=g(h,"DIV",{class:!0,slot:!0});var i=O(t);n=g(i,"BUTTON",{class:!0});var l=O(n);H(e.$$.fragment,l),l.forEach(c),s=b(i),a=g(i,"BUTTON",{class:!0});var $=O(a);H(p.$$.fragment,$),$.forEach(c),i.forEach(c),this.h()},h(){u(n,"class","btn hover:text-primary-100"),u(a,"class","btn hover:text-primary-100"),u(t,"class","flex gap-2"),u(t,"slot","actions")},m(h,i){x(h,t,i),_(t,n),I(e,n,null),_(t,s),_(t,a),I(p,a,null),m=!0,o||(d=[R(n,"click",r[0]),R(a,"click",r[1])],o=!0)},p:V,i(h){m||(D(e.$$.fragment,h),D(p.$$.fragment,h),m=!0)},o(h){S(e.$$.fragment,h),S(p.$$.fragment,h),m=!1},d(h){h&&c(t),E(e),E(p),o=!1,lt(d)}}}function Et(r){let t,n,e,s,a,p,m,o,d,h,i;return n=new X({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),s=new X({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[wt]},$$scope:{ctx:r}}}),p=new X({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),o=new X({props:{cssClass:"variant-ringed-success",$$slots:{default:[yt]},$$scope:{ctx:r}}}),h=new X({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[kt]},$$scope:{ctx:r}}}),{c(){t=v("div"),N(n.$$.fragment),e=C(),N(s.$$.fragment),a=C(),N(p.$$.fragment),m=C(),N(o.$$.fragment),d=C(),N(h.$$.fragment),this.h()},l(l){t=g(l,"DIV",{class:!0});var $=O(t);H(n.$$.fragment,$),e=b($),H(s.$$.fragment,$),a=b($),H(p.$$.fragment,$),m=b($),H(o.$$.fragment,$),d=b($),H(h.$$.fragment,$),$.forEach(c),this.h()},h(){u(t,"class","grid grid-cols-1 gap-2")},m(l,$){x(l,t,$),I(n,t,null),_(t,e),I(s,t,null),_(t,a),I(p,t,null),_(t,m),I(o,t,null),_(t,d),I(h,t,null),i=!0},p(l,[$]){const w={};$&4&&(w.$$scope={dirty:$,ctx:l}),n.$set(w);const T={};$&4&&(T.$$scope={dirty:$,ctx:l}),s.$set(T);const B={};$&4&&(B.$$scope={dirty:$,ctx:l}),p.$set(B);const A={};$&4&&(A.$$scope={dirty:$,ctx:l}),o.$set(A);const P={};$&4&&(P.$$scope={dirty:$,ctx:l}),h.$set(P)},i(l){i||(D(n.$$.fragment,l),D(s.$$.fragment,l),D(p.$$.fragment,l),D(o.$$.fragment,l),D(h.$$.fragment,l),i=!0)},o(l){S(n.$$.fragment,l),S(s.$$.fragment,l),S(p.$$.fragment,l),S(o.$$.fragment,l),S(h.$$.fragment,l),i=!1},d(l){l&&c(t),E(n),E(s),E(p),E(o),E(h)}}}function St(r){return[()=>alert("edit"),()=>alert("something else")]}class Dt extends J{constructor(t){super(),K(this,t,St,Et,Q,{})}}const It=`<script>
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
`;function Ht(r){let t,n,e,s="default",a,p,m,o,d,h="change color",i,l,$,w,T,B="change position",A,P,L,y,U,W="add text",F,j,z;return p=new st({}),l=new st({props:{textCss:"text-primary-500"}}),P=new st({props:{textCss:"text-secondary-500",position:mt.center}}),j=new st({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=v("div"),n=v("div"),e=v("h4"),e.textContent=s,a=C(),N(p.$$.fragment),m=C(),o=v("div"),d=v("h4"),d.textContent=h,i=C(),N(l.$$.fragment),$=C(),w=v("div"),T=v("h4"),T.textContent=B,A=C(),N(P.$$.fragment),L=C(),y=v("div"),U=v("h4"),U.textContent=W,F=C(),N(j.$$.fragment),this.h()},l(f){t=g(f,"DIV",{class:!0});var k=O(t);n=g(k,"DIV",{});var q=O(n);e=g(q,"H4",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1minar4"&&(e.textContent=s),a=b(q),H(p.$$.fragment,q),q.forEach(c),m=b(k),o=g(k,"DIV",{});var tt=O(o);d=g(tt,"H4",{class:!0,"data-svelte-h":!0}),M(d)!=="svelte-1b3f6nw"&&(d.textContent=h),i=b(tt),H(l.$$.fragment,tt),tt.forEach(c),$=b(k),w=g(k,"DIV",{});var et=O(w);T=g(et,"H4",{class:!0,"data-svelte-h":!0}),M(T)!=="svelte-as01sa"&&(T.textContent=B),A=b(et),H(P.$$.fragment,et),et.forEach(c),L=b(k),y=g(k,"DIV",{});var nt=O(y);U=g(nt,"H4",{class:!0,"data-svelte-h":!0}),M(U)!=="svelte-p9005r"&&(U.textContent=W),F=b(nt),H(j.$$.fragment,nt),nt.forEach(c),k.forEach(c),this.h()},h(){u(e,"class","h4"),u(d,"class","h4"),u(T,"class","h4"),u(U,"class","h4"),u(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(f,k){x(f,t,k),_(t,n),_(n,e),_(n,a),I(p,n,null),_(t,m),_(t,o),_(o,d),_(o,i),I(l,o,null),_(t,$),_(t,w),_(w,T),_(w,A),I(P,w,null),_(t,L),_(t,y),_(y,U),_(y,F),I(j,y,null),z=!0},p:V,i(f){z||(D(p.$$.fragment,f),D(l.$$.fragment,f),D(P.$$.fragment,f),D(j.$$.fragment,f),z=!0)},o(f){S(p.$$.fragment,f),S(l.$$.fragment,f),S(P.$$.fragment,f),S(j.$$.fragment,f),z=!1},d(f){f&&c(t),E(p),E(l),E(P),E(j)}}}class Nt extends J{constructor(t){super(),K(this,t,null,Ht,Q,{})}}const Mt=`<script>
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
`,ct={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function At(r){let t,n="Basic Usage",e,s,a,p="Name",m,o,d="Description",h,i,l="Use with Inputs",$,w,T=`Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.`,B,A,P,L,y,U,W,F,j,z;return P=new dt({props:{id:"name",label:"Name of something important",help:at}}),y=new ht({props:{id:"description",label:"Description to understand what happen in the world",help:at}}),W=new ft({props:{active:at}}),{c(){t=v("h3"),t.textContent=n,e=C(),s=v("div"),a=v("p"),a.textContent=p,m=C(),o=v("p"),o.textContent=d,h=C(),i=v("h3"),i.textContent=l,$=C(),w=v("p"),w.textContent=T,B=C(),A=v("div"),N(P.$$.fragment),L=C(),N(y.$$.fragment),U=C(),N(W.$$.fragment),this.h()},l(f){t=g(f,"H3",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1qvz4ut"&&(t.textContent=n),e=b(f),s=g(f,"DIV",{class:!0});var k=O(s);a=g(k,"P",{class:!0,id:!0,"data-svelte-h":!0}),M(a)!=="svelte-1p17h9q"&&(a.textContent=p),m=b(k),o=g(k,"P",{class:!0,id:!0,"data-svelte-h":!0}),M(o)!=="svelte-602myc"&&(o.textContent=d),k.forEach(c),h=b(f),i=g(f,"H3",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-1gw5i7i"&&(i.textContent=l),$=b(f),w=g(f,"P",{"data-svelte-h":!0}),M(w)!=="svelte-1xm8pvb"&&(w.textContent=T),B=b(f),A=g(f,"DIV",{class:!0});var q=O(A);H(P.$$.fragment,q),L=b(q),H(y.$$.fragment,q),q.forEach(c),U=b(f),H(W.$$.fragment,f),this.h()},h(){u(t,"class","h3"),u(a,"class","p-5"),u(a,"id","name"),u(o,"class","p-5"),u(o,"id","description"),u(s,"class","p-5"),u(i,"class","h3"),u(A,"class","p-5")},m(f,k){x(f,t,k),x(f,e,k),x(f,s,k),_(s,a),_(s,m),_(s,o),x(f,h,k),x(f,i,k),x(f,$,k),x(f,w,k),x(f,B,k),x(f,A,k),I(P,A,null),_(A,L),I(y,A,null),x(f,U,k),I(W,f,k),F=!0,j||(z=[R(a,"mouseover",r[0]),R(a,"focus",r[1]),R(o,"mouseover",r[2]),R(o,"focus",r[3])],j=!0)},p:V,i(f){F||(D(P.$$.fragment,f),D(y.$$.fragment,f),D(W.$$.fragment,f),F=!0)},o(f){S(P.$$.fragment,f),S(y.$$.fragment,f),S(W.$$.fragment,f),F=!1},d(f){f&&(c(t),c(e),c(s),c(h),c(i),c($),c(w),c(B),c(A),c(U)),E(P),E(y),E(W,f),j=!1,lt(z)}}}let at=!0;function Pt(r){let t=ct.helpItems;return Y.setHelpItemList(t),[()=>{Y.show("name")},()=>{Y.show("name")},()=>{Y.show("description")},()=>{Y.show("description")}]}class Lt extends J{constructor(t){super(),K(this,t,Pt,At,Q,{})}}const Vt=`<script lang="ts">
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

<h3 class="h3">Basic Usage</h3>

<div class="p-5">
	<p
		class="p-5"
		id="name"
		on:mouseover={() => {
			helpStore.show('name');
		}}
		on:focus={() => {
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
		on:focus={() => {
			helpStore.show('description');
		}}
	>
		Description
	</p>
</div>

<h3 class="h3">Use with Inputs</h3>
<p>
	Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.
</p>

<div class="p-5">
	<TextInput id="name" label="Name of something important" {help} />

	<TextArea id="description" label="Description to understand what happen in the world" {help} />
</div>

<HelpPopUp active={help} />
`;function Bt(r){let t,n,e="Default",s,a,p="Success",m,o,d="Warning",h,i,l="Error",$,w,T,B="HTML Message",A,P;return{c(){t=v("div"),n=v("button"),n.textContent=e,s=C(),a=v("button"),a.textContent=p,m=C(),o=v("button"),o.textContent=d,h=C(),i=v("button"),i.textContent=l,$=C(),w=v("div"),T=v("button"),T.textContent=B,this.h()},l(L){t=g(L,"DIV",{class:!0});var y=O(t);n=g(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),M(n)!=="svelte-1o1q88x"&&(n.textContent=e),s=b(y),a=g(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),M(a)!=="svelte-gd4dhc"&&(a.textContent=p),m=b(y),o=g(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),M(o)!=="svelte-1bh85d6"&&(o.textContent=d),h=b(y),i=g(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),M(i)!=="svelte-3kcwfe"&&(i.textContent=l),y.forEach(c),$=b(L),w=g(L,"DIV",{class:!0});var U=O(w);T=g(U,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),M(T)!=="svelte-1ysk5eo"&&(T.textContent=B),U.forEach(c),this.h()},h(){u(n,"type","button"),u(n,"class","btn variant-filled-surface h-9 shadow-md"),u(n,"title","Default"),u(n,"id","default"),u(a,"type","button"),u(a,"class","btn variant-filled-success h-9 shadow-md"),u(a,"title","Success"),u(a,"id","success"),u(o,"type","button"),u(o,"class","btn variant-filled-warning h-9 shadow-md"),u(o,"title","Warning"),u(o,"id","warning"),u(i,"type","button"),u(i,"class","btn variant-filled-error h-9 shadow-md"),u(i,"title","Error"),u(i,"id","error"),u(t,"class","p-5"),u(T,"type","button"),u(T,"class","btn variant-filled-surface h-9 shadow-md"),u(T,"title","Default"),u(T,"id","default"),u(w,"class","p-5")},m(L,y){x(L,t,y),_(t,n),_(t,s),_(t,a),_(t,m),_(t,o),_(t,h),_(t,i),x(L,$,y),x(L,w,y),_(w,T),A||(P=[R(n,"click",r[0]),R(a,"click",r[1]),R(o,"click",r[2]),R(i,"click",r[3]),R(T,"click",r[4])],A=!0)},p:V,i:V,o:V,d(L){L&&(c(t),c($),c(w)),A=!1,lt(P)}}}let Ut='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Ot(r){return[()=>Z.showNotification({message:"This is the default style Notification"}),()=>Z.showNotification({notificationType:it.success,message:"This is the success style Notification"}),()=>Z.showNotification({notificationType:it.warning,message:"This is the warning style Notification"}),()=>Z.showNotification({notificationType:it.error,message:"This is the error style Notification"}),()=>Z.showNotification({message:Ut})]}class jt extends J{constructor(t){super(),K(this,t,Ot,Bt,Q,{})}}const Rt=`<script lang="ts">
	import { notificationType } from '$models/Enums';
	import { notificationStore } from '$store/pageStores';

	let HTMLMessage: string =
		'<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';
<\/script>

<div class="p-5">
	<!-- Default -->
	<button
		type="button"
		class="btn variant-filled-surface h-9 shadow-md"
		title="Default"
		id="default"
		on:click={() =>
			notificationStore.showNotification({
				message: 'This is the default style Notification'
			})}>Default</button
	>
	<!-- Success -->
	<button
		type="button"
		class="btn variant-filled-success h-9 shadow-md"
		title="Success"
		id="success"
		on:click={() =>
			notificationStore.showNotification({
				notificationType: notificationType.success,
				message: 'This is the success style Notification'
			})}>Success</button
	>
	<!-- Warning -->
	<button
		type="button"
		class="btn variant-filled-warning h-9 shadow-md"
		title="Warning"
		id="warning"
		on:click={() =>
			notificationStore.showNotification({
				notificationType: notificationType.warning,
				message: 'This is the warning style Notification'
			})}>Warning</button
	>
	<!-- Error -->
	<button
		type="button"
		class="btn variant-filled-error h-9 shadow-md"
		title="Error"
		id="error"
		on:click={() =>
			notificationStore.showNotification({
				notificationType: notificationType.error,
				message: 'This is the error style Notification'
			})}>Error</button
	>
</div>
<div class="p-5">
	<!-- notfication with HTML message -->
	<button
		type="button"
		class="btn variant-filled-surface h-9 shadow-md"
		title="Default"
		id="default"
		on:click={() => notificationStore.showNotification({ message: HTMLMessage })}
		>HTML Message</button
	>
</div>
`;function Wt(r){let t,n;return t=new xt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function qt(r){let t,n=`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`;return{c(){t=v("div"),t.textContent=n,this.h()},l(e){t=g(e,"DIV",{slot:!0,"data-svelte-h":!0}),M(t)!=="svelte-1m9j44s"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Ft(r){let t,n;return t=new Lt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function zt(r){let t,n="This example shows how to setup the help for your page";return{c(){t=v("div"),t.textContent=n,this.h()},l(e){t=g(e,"DIV",{slot:!0,"data-svelte-h":!0}),M(t)!=="svelte-slp85o"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Xt(r){let t,n;return t=new jt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Jt(r){let t,n="This example shows how to use notifcation toasts";return{c(){t=v("div"),t.textContent=n,this.h()},l(e){t=g(e,"DIV",{slot:!0,"data-svelte-h":!0}),M(t)!=="svelte-5uasf"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Kt(r){let t,n;return t=new Dt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Qt(r){let t,n="The alerts are used to pass on messages to the user.";return{c(){t=v("div"),t.textContent=n,this.h()},l(e){t=g(e,"DIV",{slot:!0,"data-svelte-h":!0}),M(t)!=="svelte-feuoik"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Gt(r){let t,n;return t=new Nt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Yt(r){let t,n,e=`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by <b>color, size and position.</b>`,s,a,p;return a=new X({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=v("div"),n=v("p"),n.innerHTML=e,s=C(),N(a.$$.fragment),this.h()},l(m){t=g(m,"DIV",{slot:!0});var o=O(t);n=g(o,"P",{"data-svelte-h":!0}),M(n)!=="svelte-kl5px9"&&(n.innerHTML=e),s=b(o),H(a.$$.fragment,o),o.forEach(c),this.h()},h(){u(t,"slot","info")},m(m,o){x(m,t,o),_(t,n),_(t,s),I(a,t,null),p=!0},p:V,i(m){p||(D(a.$$.fragment,m),p=!0)},o(m){S(a.$$.fragment,m),p=!1},d(m){m&&c(t),E(a)}}}function Zt(r){let t,n,e,s,a,p,m,o,d,h;return t=new G({props:{title:"Page",svelte:bt,codeOnly:!0,$$slots:{info:[qt],default:[Wt]},$$scope:{ctx:r}}}),e=new G({props:{title:"Help",svelte:Vt,json:JSON.stringify(ct,void 0,2),$$slots:{info:[zt],default:[Ft]},$$scope:{ctx:r}}}),a=new G({props:{title:"Notification",svelte:Rt,$$slots:{info:[Jt],default:[Xt]},$$scope:{ctx:r}}}),m=new G({props:{title:"Alert",svelte:It,$$slots:{info:[Qt],default:[Kt]},$$scope:{ctx:r}}}),d=new G({props:{title:"Spinner",svelte:Mt,$$slots:{info:[Yt],default:[Gt]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment),n=C(),N(e.$$.fragment),s=C(),N(a.$$.fragment),p=C(),N(m.$$.fragment),o=C(),N(d.$$.fragment)},l(i){H(t.$$.fragment,i),n=b(i),H(e.$$.fragment,i),s=b(i),H(a.$$.fragment,i),p=b(i),H(m.$$.fragment,i),o=b(i),H(d.$$.fragment,i)},m(i,l){I(t,i,l),x(i,n,l),I(e,i,l),x(i,s,l),I(a,i,l),x(i,p,l),I(m,i,l),x(i,o,l),I(d,i,l),h=!0},p(i,l){const $={};l&1&&($.$$scope={dirty:l,ctx:i}),t.$set($);const w={};l&1&&(w.$$scope={dirty:l,ctx:i}),e.$set(w);const T={};l&1&&(T.$$scope={dirty:l,ctx:i}),a.$set(T);const B={};l&1&&(B.$$scope={dirty:l,ctx:i}),m.$set(B);const A={};l&1&&(A.$$scope={dirty:l,ctx:i}),d.$set(A)},i(i){h||(D(t.$$.fragment,i),D(e.$$.fragment,i),D(a.$$.fragment,i),D(m.$$.fragment,i),D(d.$$.fragment,i),h=!0)},o(i){S(t.$$.fragment,i),S(e.$$.fragment,i),S(a.$$.fragment,i),S(m.$$.fragment,i),S(d.$$.fragment,i),h=!1},d(i){i&&(c(n),c(s),c(p),c(o)),E(t,i),E(e,i),E(a,i),E(m,i),E(d,i)}}}function te(r){let t,n,e;return n=new rt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){t=v("div"),N(n.$$.fragment),this.h()},l(s){t=g(s,"DIV",{id:!0});var a=O(t);H(n.$$.fragment,a),a.forEach(c),this.h()},h(){u(t,"id","toc-target")},m(s,a){x(s,t,a),I(n,t,null),e=!0},p(s,[a]){const p={};a&1&&(p.$$scope={dirty:a,ctx:s}),n.$set(p)},i(s){e||(D(n.$$.fragment,s),e=!0)},o(s){S(n.$$.fragment,s),e=!1},d(s){s&&c(t),E(n)}}}class me extends J{constructor(t){super(),K(this,t,null,te,Q,{})}}export{me as component};
