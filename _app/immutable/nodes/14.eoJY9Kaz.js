import{s as J,e as g,c as v,A as k,i as x,n as V,f as c,m as u,a as b,b as O,g as C,h as _,r as R,H as lt}from"../chunks/BTIOtzD0.js";import{S as G,i as K,c as S,a as D,m as I,t as H,b as N,d as M}from"../chunks/BPNg9miD.js";import{C as Q}from"../chunks/yI8FtRm4.js";import{P as rt,H as ft}from"../chunks/7QQNXwOo.js";import{A as X}from"../chunks/Bt6yzpmw.js";import{h as Y,n as Z}from"../chunks/B6cYaIRn.js";import{F as ot,l as ut,m as pt}from"../chunks/D4Jc3Dep.js";import{S as st}from"../chunks/iRDcx-bo.js";import{p as mt,n as it}from"../chunks/2CYK9ZqT.js";import{T as dt,a as ht}from"../chunks/CjrSJhRd.js";import"../chunks/vD00CEsX.js";import"../chunks/B0-lfgLd.js";function $t(r){let t,n="My Content HERE";return{c(){t=g("div"),t.textContent=n},l(e){t=v(e,"DIV",{"data-svelte-h":!0}),k(t)!=="svelte-1gk5f1x"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function gt(r){let t,n="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>";return{c(){t=g("div"),t.innerHTML=n,this.h()},l(e){t=v(e,"DIV",{slot:!0,"data-svelte-h":!0}),k(t)!=="svelte-wpqpf6"&&(t.innerHTML=n),this.h()},h(){u(t,"slot","description")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function vt(r){let t,n;return t=new rt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:r[0],menu:!1,help:!0,$$slots:{description:[gt],default:[$t]},$$scope:{ctx:r}}}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},p(e,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function _t(r){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class xt extends G{constructor(t){super(),K(this,t,_t,vt,J,{})}}const bt=`<script lang="ts">
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
`;function Ct(r){let t,n="test";return{c(){t=g("b"),t.textContent=n},l(e){t=v(e,"B",{"data-svelte-h":!0}),k(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function wt(r){let t,n="test";return{c(){t=g("b"),t.textContent=n},l(e){t=v(e,"B",{"data-svelte-h":!0}),k(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Tt(r){let t,n="test";return{c(){t=g("b"),t.textContent=n},l(e){t=v(e,"B",{"data-svelte-h":!0}),k(t)!=="svelte-h1wiu0"&&(t.textContent=n)},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function yt(r){let t,n="Alert with a complex message",e,s,a="inside the Alert messsage everthing goes to the slot in the message block",p,m,o="<li>note 1</li> <li>note 2</li> <li>note 3</li>";return{c(){t=g("h3"),t.textContent=n,e=b(),s=g("p"),s.textContent=a,p=b(),m=g("ul"),m.innerHTML=o,this.h()},l(d){t=v(d,"H3",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-pocvfg"&&(t.textContent=n),e=C(d),s=v(d,"P",{"data-svelte-h":!0}),k(s)!=="svelte-koj35t"&&(s.textContent=a),p=C(d),m=v(d,"UL",{class:!0,"data-svelte-h":!0}),k(m)!=="svelte-10ocnod"&&(m.innerHTML=o),this.h()},h(){u(t,"class","h3"),u(m,"class","list-disc pl-5")},m(d,h){x(d,t,h),x(d,e,h),x(d,s,h),x(d,p,h),x(d,m,h)},p:V,d(d){d&&(c(t),c(e),c(s),c(p),c(m))}}}function Et(r){let t,n,e,s,a,p,m,o,d;return e=new ot({props:{icon:ut}}),p=new ot({props:{icon:pt}}),{c(){t=g("div"),n=g("button"),S(e.$$.fragment),s=b(),a=g("button"),S(p.$$.fragment),this.h()},l(h){t=v(h,"DIV",{class:!0,slot:!0});var i=O(t);n=v(i,"BUTTON",{class:!0});var l=O(n);D(e.$$.fragment,l),l.forEach(c),s=C(i),a=v(i,"BUTTON",{class:!0});var $=O(a);D(p.$$.fragment,$),$.forEach(c),i.forEach(c),this.h()},h(){u(n,"class","btn hover:text-primary-100"),u(a,"class","btn hover:text-primary-100"),u(t,"class","flex gap-2"),u(t,"slot","actions")},m(h,i){x(h,t,i),_(t,n),I(e,n,null),_(t,s),_(t,a),I(p,a,null),m=!0,o||(d=[R(n,"click",r[0]),R(a,"click",r[1])],o=!0)},p:V,i(h){m||(H(e.$$.fragment,h),H(p.$$.fragment,h),m=!0)},o(h){N(e.$$.fragment,h),N(p.$$.fragment,h),m=!1},d(h){h&&c(t),M(e),M(p),o=!1,lt(d)}}}function kt(r){let t,n,e,s,a,p,m,o,d,h,i;return n=new X({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),s=new X({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[wt]},$$scope:{ctx:r}}}),p=new X({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),o=new X({props:{cssClass:"variant-ringed-success",$$slots:{default:[yt]},$$scope:{ctx:r}}}),h=new X({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[Et]},$$scope:{ctx:r}}}),{c(){t=g("div"),S(n.$$.fragment),e=b(),S(s.$$.fragment),a=b(),S(p.$$.fragment),m=b(),S(o.$$.fragment),d=b(),S(h.$$.fragment),this.h()},l(l){t=v(l,"DIV",{class:!0});var $=O(t);D(n.$$.fragment,$),e=C($),D(s.$$.fragment,$),a=C($),D(p.$$.fragment,$),m=C($),D(o.$$.fragment,$),d=C($),D(h.$$.fragment,$),$.forEach(c),this.h()},h(){u(t,"class","grid grid-cols-1 gap-2")},m(l,$){x(l,t,$),I(n,t,null),_(t,e),I(s,t,null),_(t,a),I(p,t,null),_(t,m),I(o,t,null),_(t,d),I(h,t,null),i=!0},p(l,[$]){const w={};$&4&&(w.$$scope={dirty:$,ctx:l}),n.$set(w);const T={};$&4&&(T.$$scope={dirty:$,ctx:l}),s.$set(T);const U={};$&4&&(U.$$scope={dirty:$,ctx:l}),p.$set(U);const A={};$&4&&(A.$$scope={dirty:$,ctx:l}),o.$set(A);const P={};$&4&&(P.$$scope={dirty:$,ctx:l}),h.$set(P)},i(l){i||(H(n.$$.fragment,l),H(s.$$.fragment,l),H(p.$$.fragment,l),H(o.$$.fragment,l),H(h.$$.fragment,l),i=!0)},o(l){N(n.$$.fragment,l),N(s.$$.fragment,l),N(p.$$.fragment,l),N(o.$$.fragment,l),N(h.$$.fragment,l),i=!1},d(l){l&&c(t),M(n),M(s),M(p),M(o),M(h)}}}function St(r){return[()=>alert("edit"),()=>alert("something else")]}class Dt extends G{constructor(t){super(),K(this,t,St,kt,J,{})}}const It=`<script>
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
`;function Ht(r){let t,n,e,s="default",a,p,m,o,d,h="change color",i,l,$,w,T,U="change position",A,P,L,y,B,W="add text",q,j,z;return p=new st({}),l=new st({props:{textCss:"text-primary-500"}}),P=new st({props:{textCss:"text-secondary-500",position:mt.center}}),j=new st({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=g("div"),n=g("div"),e=g("h4"),e.textContent=s,a=b(),S(p.$$.fragment),m=b(),o=g("div"),d=g("h4"),d.textContent=h,i=b(),S(l.$$.fragment),$=b(),w=g("div"),T=g("h4"),T.textContent=U,A=b(),S(P.$$.fragment),L=b(),y=g("div"),B=g("h4"),B.textContent=W,q=b(),S(j.$$.fragment),this.h()},l(f){t=v(f,"DIV",{class:!0});var E=O(t);n=v(E,"DIV",{});var F=O(n);e=v(F,"H4",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1minar4"&&(e.textContent=s),a=C(F),D(p.$$.fragment,F),F.forEach(c),m=C(E),o=v(E,"DIV",{});var tt=O(o);d=v(tt,"H4",{class:!0,"data-svelte-h":!0}),k(d)!=="svelte-1b3f6nw"&&(d.textContent=h),i=C(tt),D(l.$$.fragment,tt),tt.forEach(c),$=C(E),w=v(E,"DIV",{});var et=O(w);T=v(et,"H4",{class:!0,"data-svelte-h":!0}),k(T)!=="svelte-as01sa"&&(T.textContent=U),A=C(et),D(P.$$.fragment,et),et.forEach(c),L=C(E),y=v(E,"DIV",{});var nt=O(y);B=v(nt,"H4",{class:!0,"data-svelte-h":!0}),k(B)!=="svelte-p9005r"&&(B.textContent=W),q=C(nt),D(j.$$.fragment,nt),nt.forEach(c),E.forEach(c),this.h()},h(){u(e,"class","h4"),u(d,"class","h4"),u(T,"class","h4"),u(B,"class","h4"),u(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(f,E){x(f,t,E),_(t,n),_(n,e),_(n,a),I(p,n,null),_(t,m),_(t,o),_(o,d),_(o,i),I(l,o,null),_(t,$),_(t,w),_(w,T),_(w,A),I(P,w,null),_(t,L),_(t,y),_(y,B),_(y,q),I(j,y,null),z=!0},p:V,i(f){z||(H(p.$$.fragment,f),H(l.$$.fragment,f),H(P.$$.fragment,f),H(j.$$.fragment,f),z=!0)},o(f){N(p.$$.fragment,f),N(l.$$.fragment,f),N(P.$$.fragment,f),N(j.$$.fragment,f),z=!1},d(f){f&&c(t),M(p),M(l),M(P),M(j)}}}class Nt extends G{constructor(t){super(),K(this,t,null,Ht,J,{})}}const Mt=`<script>
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
	enable them.`,U,A,P,L,y,B,W,q,j,z;return P=new dt({props:{id:"name",label:"Name of something important",help:at}}),y=new ht({props:{id:"description",label:"Description to understand what happen in the world",help:at}}),W=new ft({props:{active:at}}),{c(){t=g("h3"),t.textContent=n,e=b(),s=g("div"),a=g("p"),a.textContent=p,m=b(),o=g("p"),o.textContent=d,h=b(),i=g("h3"),i.textContent=l,$=b(),w=g("p"),w.textContent=T,U=b(),A=g("div"),S(P.$$.fragment),L=b(),S(y.$$.fragment),B=b(),S(W.$$.fragment),this.h()},l(f){t=v(f,"H3",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-1qvz4ut"&&(t.textContent=n),e=C(f),s=v(f,"DIV",{class:!0});var E=O(s);a=v(E,"P",{class:!0,id:!0,"data-svelte-h":!0}),k(a)!=="svelte-1p17h9q"&&(a.textContent=p),m=C(E),o=v(E,"P",{class:!0,id:!0,"data-svelte-h":!0}),k(o)!=="svelte-602myc"&&(o.textContent=d),E.forEach(c),h=C(f),i=v(f,"H3",{class:!0,"data-svelte-h":!0}),k(i)!=="svelte-1gw5i7i"&&(i.textContent=l),$=C(f),w=v(f,"P",{"data-svelte-h":!0}),k(w)!=="svelte-1xm8pvb"&&(w.textContent=T),U=C(f),A=v(f,"DIV",{class:!0});var F=O(A);D(P.$$.fragment,F),L=C(F),D(y.$$.fragment,F),F.forEach(c),B=C(f),D(W.$$.fragment,f),this.h()},h(){u(t,"class","h3"),u(a,"class","p-5"),u(a,"id","name"),u(o,"class","p-5"),u(o,"id","description"),u(s,"class","p-5"),u(i,"class","h3"),u(A,"class","p-5")},m(f,E){x(f,t,E),x(f,e,E),x(f,s,E),_(s,a),_(s,m),_(s,o),x(f,h,E),x(f,i,E),x(f,$,E),x(f,w,E),x(f,U,E),x(f,A,E),I(P,A,null),_(A,L),I(y,A,null),x(f,B,E),I(W,f,E),q=!0,j||(z=[R(a,"mouseover",r[0]),R(a,"focus",r[1]),R(o,"mouseover",r[2]),R(o,"focus",r[3])],j=!0)},p:V,i(f){q||(H(P.$$.fragment,f),H(y.$$.fragment,f),H(W.$$.fragment,f),q=!0)},o(f){N(P.$$.fragment,f),N(y.$$.fragment,f),N(W.$$.fragment,f),q=!1},d(f){f&&(c(t),c(e),c(s),c(h),c(i),c($),c(w),c(U),c(A),c(B)),M(P),M(y),M(W,f),j=!1,lt(z)}}}let at=!0;function Pt(r){let t=ct.helpItems;return Y.setHelpItemList(t),[()=>{Y.show("name")},()=>{Y.show("name")},()=>{Y.show("description")},()=>{Y.show("description")}]}class Lt extends G{constructor(t){super(),K(this,t,Pt,At,J,{})}}const Vt=`<script lang="ts">
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
`;function Ut(r){let t,n,e="Default",s,a,p="Success",m,o,d="Warning",h,i,l="Error",$,w,T,U="HTML Message",A,P;return{c(){t=g("div"),n=g("button"),n.textContent=e,s=b(),a=g("button"),a.textContent=p,m=b(),o=g("button"),o.textContent=d,h=b(),i=g("button"),i.textContent=l,$=b(),w=g("div"),T=g("button"),T.textContent=U,this.h()},l(L){t=v(L,"DIV",{class:!0});var y=O(t);n=v(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),k(n)!=="svelte-1o1q88x"&&(n.textContent=e),s=C(y),a=v(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),k(a)!=="svelte-gd4dhc"&&(a.textContent=p),m=C(y),o=v(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),k(o)!=="svelte-1bh85d6"&&(o.textContent=d),h=C(y),i=v(y,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),k(i)!=="svelte-3kcwfe"&&(i.textContent=l),y.forEach(c),$=C(L),w=v(L,"DIV",{class:!0});var B=O(w);T=v(B,"BUTTON",{type:!0,class:!0,title:!0,id:!0,"data-svelte-h":!0}),k(T)!=="svelte-1ysk5eo"&&(T.textContent=U),B.forEach(c),this.h()},h(){u(n,"type","button"),u(n,"class","btn variant-filled-surface h-9 shadow-md"),u(n,"title","Default"),u(n,"id","default"),u(a,"type","button"),u(a,"class","btn variant-filled-success h-9 shadow-md"),u(a,"title","Success"),u(a,"id","success"),u(o,"type","button"),u(o,"class","btn variant-filled-warning h-9 shadow-md"),u(o,"title","Warning"),u(o,"id","warning"),u(i,"type","button"),u(i,"class","btn variant-filled-error h-9 shadow-md"),u(i,"title","Error"),u(i,"id","error"),u(t,"class","p-5"),u(T,"type","button"),u(T,"class","btn variant-filled-surface h-9 shadow-md"),u(T,"title","Default"),u(T,"id","default"),u(w,"class","p-5")},m(L,y){x(L,t,y),_(t,n),_(t,s),_(t,a),_(t,m),_(t,o),_(t,h),_(t,i),x(L,$,y),x(L,w,y),_(w,T),A||(P=[R(n,"click",r[0]),R(a,"click",r[1]),R(o,"click",r[2]),R(i,"click",r[3]),R(T,"click",r[4])],A=!0)},p:V,i:V,o:V,d(L){L&&(c(t),c($),c(w)),A=!1,lt(P)}}}let Bt='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Ot(r){return[()=>Z.showNotification({message:"This is the default style Notification"}),()=>Z.showNotification({notificationType:it.success,message:"This is the success style Notification"}),()=>Z.showNotification({notificationType:it.warning,message:"This is the warning style Notification"}),()=>Z.showNotification({notificationType:it.error,message:"This is the error style Notification"}),()=>Z.showNotification({message:Bt})]}class jt extends G{constructor(t){super(),K(this,t,Ot,Ut,J,{})}}const Rt=`<script lang="ts">
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
`;function Wt(r){let t,n;return t=new xt({}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function Ft(r){let t,n=`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`;return{c(){t=g("div"),t.textContent=n,this.h()},l(e){t=v(e,"DIV",{slot:!0,"data-svelte-h":!0}),k(t)!=="svelte-1m9j44s"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function qt(r){let t,n;return t=new Lt({}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function zt(r){let t,n="This example shows how to setup the help for your page";return{c(){t=g("div"),t.textContent=n,this.h()},l(e){t=v(e,"DIV",{slot:!0,"data-svelte-h":!0}),k(t)!=="svelte-slp85o"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Xt(r){let t,n;return t=new jt({}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function Jt(r){let t,n="This example shows how to use notifcation toasts";return{c(){t=g("div"),t.textContent=n,this.h()},l(e){t=v(e,"DIV",{slot:!0,"data-svelte-h":!0}),k(t)!=="svelte-5uasf"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Gt(r){let t,n;return t=new Dt({}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function Kt(r){let t,n="The alerts are used to pass on messages to the user.";return{c(){t=g("div"),t.textContent=n,this.h()},l(e){t=v(e,"DIV",{slot:!0,"data-svelte-h":!0}),k(t)!=="svelte-feuoik"&&(t.textContent=n),this.h()},h(){u(t,"slot","info")},m(e,s){x(e,t,s)},p:V,d(e){e&&c(t)}}}function Qt(r){let t,n;return t=new Nt({}),{c(){S(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function Yt(r){let t,n,e=`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by <b>color, size and position.</b>`,s,a,p;return a=new X({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=g("div"),n=g("p"),n.innerHTML=e,s=b(),S(a.$$.fragment),this.h()},l(m){t=v(m,"DIV",{slot:!0});var o=O(t);n=v(o,"P",{"data-svelte-h":!0}),k(n)!=="svelte-kl5px9"&&(n.innerHTML=e),s=C(o),D(a.$$.fragment,o),o.forEach(c),this.h()},h(){u(t,"slot","info")},m(m,o){x(m,t,o),_(t,n),_(t,s),I(a,t,null),p=!0},p:V,i(m){p||(H(a.$$.fragment,m),p=!0)},o(m){N(a.$$.fragment,m),p=!1},d(m){m&&c(t),M(a)}}}function Zt(r){let t,n,e,s,a,p,m,o,d,h;return t=new Q({props:{title:"Page",svelte:bt,codeOnly:!0,$$slots:{info:[Ft],default:[Wt]},$$scope:{ctx:r}}}),e=new Q({props:{title:"Help",svelte:Vt,json:JSON.stringify(ct,void 0,2),$$slots:{info:[zt],default:[qt]},$$scope:{ctx:r}}}),a=new Q({props:{title:"Notification",svelte:Rt,$$slots:{info:[Jt],default:[Xt]},$$scope:{ctx:r}}}),m=new Q({props:{title:"Alert",svelte:It,$$slots:{info:[Kt],default:[Gt]},$$scope:{ctx:r}}}),d=new Q({props:{title:"Spinner",svelte:Mt,$$slots:{info:[Yt],default:[Qt]},$$scope:{ctx:r}}}),{c(){S(t.$$.fragment),n=b(),S(e.$$.fragment),s=b(),S(a.$$.fragment),p=b(),S(m.$$.fragment),o=b(),S(d.$$.fragment)},l(i){D(t.$$.fragment,i),n=C(i),D(e.$$.fragment,i),s=C(i),D(a.$$.fragment,i),p=C(i),D(m.$$.fragment,i),o=C(i),D(d.$$.fragment,i)},m(i,l){I(t,i,l),x(i,n,l),I(e,i,l),x(i,s,l),I(a,i,l),x(i,p,l),I(m,i,l),x(i,o,l),I(d,i,l),h=!0},p(i,l){const $={};l&1&&($.$$scope={dirty:l,ctx:i}),t.$set($);const w={};l&1&&(w.$$scope={dirty:l,ctx:i}),e.$set(w);const T={};l&1&&(T.$$scope={dirty:l,ctx:i}),a.$set(T);const U={};l&1&&(U.$$scope={dirty:l,ctx:i}),m.$set(U);const A={};l&1&&(A.$$scope={dirty:l,ctx:i}),d.$set(A)},i(i){h||(H(t.$$.fragment,i),H(e.$$.fragment,i),H(a.$$.fragment,i),H(m.$$.fragment,i),H(d.$$.fragment,i),h=!0)},o(i){N(t.$$.fragment,i),N(e.$$.fragment,i),N(a.$$.fragment,i),N(m.$$.fragment,i),N(d.$$.fragment,i),h=!1},d(i){i&&(c(n),c(s),c(p),c(o)),M(t,i),M(e,i),M(a,i),M(m,i),M(d,i)}}}function te(r){let t,n,e;return n=new rt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){t=g("div"),S(n.$$.fragment),this.h()},l(s){t=v(s,"DIV",{id:!0});var a=O(t);D(n.$$.fragment,a),a.forEach(c),this.h()},h(){u(t,"id","toc-target")},m(s,a){x(s,t,a),I(n,t,null),e=!0},p(s,[a]){const p={};a&1&&(p.$$scope={dirty:a,ctx:s}),n.$set(p)},i(s){e||(H(n.$$.fragment,s),e=!0)},o(s){N(n.$$.fragment,s),e=!1},d(s){s&&c(t),M(n)}}}class me extends G{constructor(t){super(),K(this,t,null,te,J,{})}}export{me as component};
