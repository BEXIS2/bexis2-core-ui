import{s as ht,P as mt,p as $t,H as gt,h as ot,n as st,a as lt}from"../chunks/Page.2ae6afa7.js";import{S as Y,i as Z,s as tt,y as N,z as H,A,g as M,d as P,B as L,k as g,q as S,l as v,m as _,r as C,h as i,b as E,D as r,W as R,n as h,a as y,c as D,M as X,O as ft}from"../chunks/index.2c64a3f2.js";import{C as at}from"../chunks/CodeContainer.4f69f5d6.js";import{A as Q}from"../chunks/Alert.9c906775.js";import{F as ut,i as vt,j as _t}from"../chunks/index.422f451d.js";import{S as rt}from"../chunks/Spinner.64c588cb.js";import{T as bt}from"../chunks/TextInput.0bab0391.js";import{T as wt}from"../chunks/TextArea.63cd06de.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.2223e758.js";function Et(){return console.log("load and set apiconfig"),console.log("PROD"),ht("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ge=Object.freeze(Object.defineProperty({__proto__:null,load:Et},Symbol.toStringTag,{value:"Module"}));function Tt(p){let t,n;return{c(){t=g("div"),n=S("My Content HERE")},l(e){t=v(e,"DIV",{});var s=_(t);n=C(s,"My Content HERE"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function xt(p){let t,n,e;return{c(){t=g("div"),n=g("p"),e=S("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){t=v(s,"DIV",{slot:!0});var l=_(t);n=v(l,"P",{});var u=_(n);e=C(u,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),u.forEach(i),l.forEach(i),this.h()},h(){h(t,"slot","description")},m(s,l){E(s,t,l),r(t,n),r(n,e)},p:R,d(s){s&&i(t)}}}function yt(p){let t,n;return t=new mt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:p[0],menu:!1,help:!0,$$slots:{description:[xt],default:[Tt]},$$scope:{ctx:p}}}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,[s]){const l={};s&2&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Dt(p){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class It extends Y{constructor(t){super(),Z(this,t,Dt,yt,tt,{})}}const kt=`<script lang="ts">
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
`;function St(p){let t,n;return{c(){t=g("b"),n=S("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ct(p){let t,n;return{c(){t=g("b"),n=S("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Nt(p){let t,n;return{c(){t=g("b"),n=S("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ht(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,I;return{c(){t=g("h3"),n=S("Alert with a complex message"),e=y(),s=g("p"),l=S("inside the Alert messsage everthing goes to the slot in the message block"),u=y(),m=g("ul"),f=g("li"),b=S("note 1"),d=y(),a=g("li"),o=S("note 2"),$=y(),T=g("li"),I=S("note 3"),this.h()},l(w){t=v(w,"H3",{class:!0});var x=_(t);n=C(x,"Alert with a complex message"),x.forEach(i),e=D(w),s=v(w,"P",{});var U=_(s);l=C(U,"inside the Alert messsage everthing goes to the slot in the message block"),U.forEach(i),u=D(w),m=v(w,"UL",{class:!0});var V=_(m);f=v(V,"LI",{});var k=_(f);b=C(k,"note 1"),k.forEach(i),d=D(V),a=v(V,"LI",{});var O=_(a);o=C(O,"note 2"),O.forEach(i),$=D(V),T=v(V,"LI",{});var j=_(T);I=C(j,"note 3"),j.forEach(i),V.forEach(i),this.h()},h(){h(t,"class","h3"),h(m,"class","list-disc pl-5")},m(w,x){E(w,t,x),r(t,n),E(w,e,x),E(w,s,x),r(s,l),E(w,u,x),E(w,m,x),r(m,f),r(f,b),r(m,d),r(m,a),r(a,o),r(m,$),r(m,T),r(T,I)},p:R,d(w){w&&i(t),w&&i(e),w&&i(s),w&&i(u),w&&i(m)}}}function At(p){let t,n,e,s,l,u,m,f,b;return e=new ut({props:{icon:vt}}),u=new ut({props:{icon:_t}}),{c(){t=g("div"),n=g("button"),N(e.$$.fragment),s=y(),l=g("button"),N(u.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0,slot:!0});var a=_(t);n=v(a,"BUTTON",{class:!0});var o=_(n);H(e.$$.fragment,o),o.forEach(i),s=D(a),l=v(a,"BUTTON",{class:!0});var $=_(l);H(u.$$.fragment,$),$.forEach(i),a.forEach(i),this.h()},h(){h(n,"class","btn hover:text-primary-100"),h(l,"class","btn hover:text-primary-100"),h(t,"class","flex gap-2"),h(t,"slot","actions")},m(d,a){E(d,t,a),r(t,n),A(e,n,null),r(t,s),r(t,l),A(u,l,null),m=!0,f||(b=[X(n,"click",p[0]),X(l,"click",p[1])],f=!0)},p:R,i(d){m||(M(e.$$.fragment,d),M(u.$$.fragment,d),m=!0)},o(d){P(e.$$.fragment,d),P(u.$$.fragment,d),m=!1},d(d){d&&i(t),L(e),L(u),f=!1,ft(b)}}}function Mt(p){let t,n,e,s,l,u,m,f,b,d,a;return n=new Q({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[St]},$$scope:{ctx:p}}}),s=new Q({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ct]},$$scope:{ctx:p}}}),u=new Q({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Nt]},$$scope:{ctx:p}}}),f=new Q({props:{cssClass:"variant-ringed-success",$$slots:{default:[Ht]},$$scope:{ctx:p}}}),d=new Q({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[At]},$$scope:{ctx:p}}}),{c(){t=g("div"),N(n.$$.fragment),e=y(),N(s.$$.fragment),l=y(),N(u.$$.fragment),m=y(),N(f.$$.fragment),b=y(),N(d.$$.fragment),this.h()},l(o){t=v(o,"DIV",{class:!0});var $=_(t);H(n.$$.fragment,$),e=D($),H(s.$$.fragment,$),l=D($),H(u.$$.fragment,$),m=D($),H(f.$$.fragment,$),b=D($),H(d.$$.fragment,$),$.forEach(i),this.h()},h(){h(t,"class","grid grid-cols-1 gap-2")},m(o,$){E(o,t,$),A(n,t,null),r(t,e),A(s,t,null),r(t,l),A(u,t,null),r(t,m),A(f,t,null),r(t,b),A(d,t,null),a=!0},p(o,[$]){const T={};$&4&&(T.$$scope={dirty:$,ctx:o}),n.$set(T);const I={};$&4&&(I.$$scope={dirty:$,ctx:o}),s.$set(I);const w={};$&4&&(w.$$scope={dirty:$,ctx:o}),u.$set(w);const x={};$&4&&(x.$$scope={dirty:$,ctx:o}),f.$set(x);const U={};$&4&&(U.$$scope={dirty:$,ctx:o}),d.$set(U)},i(o){a||(M(n.$$.fragment,o),M(s.$$.fragment,o),M(u.$$.fragment,o),M(f.$$.fragment,o),M(d.$$.fragment,o),a=!0)},o(o){P(n.$$.fragment,o),P(s.$$.fragment,o),P(u.$$.fragment,o),P(f.$$.fragment,o),P(d.$$.fragment,o),a=!1},d(o){o&&i(t),L(n),L(s),L(u),L(f),L(d)}}}function Pt(p){return[()=>alert("edit"),()=>alert("something else")]}class Lt extends Y{constructor(t){super(),Z(this,t,Pt,Mt,tt,{})}}const Vt=`<script>
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
`;function Bt(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,I,w,x,U,V,k,O,j,z,W,F;return u=new rt({}),o=new rt({props:{textCss:"text-primary-500"}}),U=new rt({props:{textCss:"text-secondary-500",position:$t.center}}),W=new rt({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=g("div"),n=g("div"),e=g("h4"),s=S("default"),l=y(),N(u.$$.fragment),m=y(),f=g("div"),b=g("h4"),d=S("change color"),a=y(),N(o.$$.fragment),$=y(),T=g("div"),I=g("h4"),w=S("change position"),x=y(),N(U.$$.fragment),V=y(),k=g("div"),O=g("h4"),j=S("add text"),z=y(),N(W.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var B=_(t);n=v(B,"DIV",{});var q=_(n);e=v(q,"H4",{class:!0});var et=_(e);s=C(et,"default"),et.forEach(i),l=D(q),H(u.$$.fragment,q),q.forEach(i),m=D(B),f=v(B,"DIV",{});var J=_(f);b=v(J,"H4",{class:!0});var nt=_(b);d=C(nt,"change color"),nt.forEach(i),a=D(J),H(o.$$.fragment,J),J.forEach(i),$=D(B),T=v(B,"DIV",{});var G=_(T);I=v(G,"H4",{class:!0});var K=_(I);w=C(K,"change position"),K.forEach(i),x=D(G),H(U.$$.fragment,G),G.forEach(i),V=D(B),k=v(B,"DIV",{});var it=_(k);O=v(it,"H4",{class:!0});var pt=_(O);j=C(pt,"add text"),pt.forEach(i),z=D(it),H(W.$$.fragment,it),it.forEach(i),B.forEach(i),this.h()},h(){h(e,"class","h4"),h(b,"class","h4"),h(I,"class","h4"),h(O,"class","h4"),h(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(c,B){E(c,t,B),r(t,n),r(n,e),r(e,s),r(n,l),A(u,n,null),r(t,m),r(t,f),r(f,b),r(b,d),r(f,a),A(o,f,null),r(t,$),r(t,T),r(T,I),r(I,w),r(T,x),A(U,T,null),r(t,V),r(t,k),r(k,O),r(O,j),r(k,z),A(W,k,null),F=!0},p:R,i(c){F||(M(u.$$.fragment,c),M(o.$$.fragment,c),M(U.$$.fragment,c),M(W.$$.fragment,c),F=!0)},o(c){P(u.$$.fragment,c),P(o.$$.fragment,c),P(U.$$.fragment,c),P(W.$$.fragment,c),F=!1},d(c){c&&i(t),L(u),L(o),L(U),L(W)}}}class Ut extends Y{constructor(t){super(),Z(this,t,null,Bt,tt,{})}}const Ot=`<script>
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
`,dt={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function jt(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,I,w,x,U,V,k,O,j,z,W,F;return U=new bt({props:{id:"name",label:"Name of something important",help:ct}}),k=new wt({props:{id:"description",label:"Description to understand what happen in the world",help:ct}}),j=new gt({props:{active:ct}}),{c(){t=g("h3"),n=S("Basic Useage"),e=y(),s=g("div"),l=g("p"),u=S("Name"),m=y(),f=g("p"),b=S("Description"),d=y(),a=g("h3"),o=S("Use with Inputs"),$=y(),T=g("p"),I=S(`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),w=y(),x=g("div"),N(U.$$.fragment),V=y(),N(k.$$.fragment),O=y(),N(j.$$.fragment),this.h()},l(c){t=v(c,"H3",{class:!0});var B=_(t);n=C(B,"Basic Useage"),B.forEach(i),e=D(c),s=v(c,"DIV",{class:!0});var q=_(s);l=v(q,"P",{class:!0,id:!0});var et=_(l);u=C(et,"Name"),et.forEach(i),m=D(q),f=v(q,"P",{class:!0,id:!0});var J=_(f);b=C(J,"Description"),J.forEach(i),q.forEach(i),d=D(c),a=v(c,"H3",{class:!0});var nt=_(a);o=C(nt,"Use with Inputs"),nt.forEach(i),$=D(c),T=v(c,"P",{});var G=_(T);I=C(G,`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),G.forEach(i),w=D(c),x=v(c,"DIV",{class:!0});var K=_(x);H(U.$$.fragment,K),V=D(K),H(k.$$.fragment,K),K.forEach(i),O=D(c),H(j.$$.fragment,c),this.h()},h(){h(t,"class","h3"),h(l,"class","p-5"),h(l,"id","name"),h(f,"class","p-5"),h(f,"id","description"),h(s,"class","p-5"),h(a,"class","h3"),h(x,"class","p-5")},m(c,B){E(c,t,B),r(t,n),E(c,e,B),E(c,s,B),r(s,l),r(l,u),r(s,m),r(s,f),r(f,b),E(c,d,B),E(c,a,B),r(a,o),E(c,$,B),E(c,T,B),r(T,I),E(c,w,B),E(c,x,B),A(U,x,null),r(x,V),A(k,x,null),E(c,O,B),A(j,c,B),z=!0,W||(F=[X(l,"mouseover",p[0]),X(f,"mouseover",p[1])],W=!0)},p:R,i(c){z||(M(U.$$.fragment,c),M(k.$$.fragment,c),M(j.$$.fragment,c),z=!0)},o(c){P(U.$$.fragment,c),P(k.$$.fragment,c),P(j.$$.fragment,c),z=!1},d(c){c&&i(t),c&&i(e),c&&i(s),c&&i(d),c&&i(a),c&&i($),c&&i(T),c&&i(w),c&&i(x),L(U),L(k),c&&i(O),L(j,c),W=!1,ft(F)}}}let ct=!0;function Rt(p){let t=dt.helpItems;return ot.setHelpItemList(t),[()=>{ot.show("name")},()=>{ot.show("description")}]}class Wt extends Y{constructor(t){super(),Z(this,t,Rt,jt,tt,{})}}const zt=`<script lang="ts">
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
`;new TextEncoder;function Ft(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,I,w,x,U;return{c(){t=g("div"),n=g("button"),e=S("Default"),s=y(),l=g("button"),u=S("Success"),m=y(),f=g("button"),b=S("Warning"),d=y(),a=g("button"),o=S("Error"),$=y(),T=g("div"),I=g("button"),w=S("HTML Message"),this.h()},l(V){t=v(V,"DIV",{class:!0});var k=_(t);n=v(k,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var O=_(n);e=C(O,"Default"),O.forEach(i),s=D(k),l=v(k,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var j=_(l);u=C(j,"Success"),j.forEach(i),m=D(k),f=v(k,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var z=_(f);b=C(z,"Warning"),z.forEach(i),d=D(k),a=v(k,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var W=_(a);o=C(W,"Error"),W.forEach(i),k.forEach(i),$=D(V),T=v(V,"DIV",{class:!0});var F=_(T);I=v(F,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var c=_(I);w=C(c,"HTML Message"),c.forEach(i),F.forEach(i),this.h()},h(){h(n,"type","button"),h(n,"class","btn variant-filled-surface h-9 shadow-md"),h(n,"title","Default"),h(n,"id","default"),h(l,"type","button"),h(l,"class","btn variant-filled-success h-9 shadow-md"),h(l,"title","Success"),h(l,"id","success"),h(f,"type","button"),h(f,"class","btn variant-filled-warning h-9 shadow-md"),h(f,"title","Warning"),h(f,"id","warning"),h(a,"type","button"),h(a,"class","btn variant-filled-error h-9 shadow-md"),h(a,"title","Error"),h(a,"id","error"),h(t,"class","p-5"),h(I,"type","button"),h(I,"class","btn variant-filled-surface h-9 shadow-md"),h(I,"title","Default"),h(I,"id","default"),h(T,"class","p-5")},m(V,k){E(V,t,k),r(t,n),r(n,e),r(t,s),r(t,l),r(l,u),r(t,m),r(t,f),r(f,b),r(t,d),r(t,a),r(a,o),E(V,$,k),E(V,T,k),r(T,I),r(I,w),x||(U=[X(n,"click",p[0]),X(l,"click",p[1]),X(f,"click",p[2]),X(a,"click",p[3]),X(I,"click",p[4])],x=!0)},p:R,i:R,o:R,d(V){V&&i(t),V&&i($),V&&i(T),x=!1,ft(U)}}}let qt='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Xt(p){return[()=>st.showNotification({message:"This is the default style Notification"}),()=>st.showNotification({notificationType:lt.success,message:"This is the success style Notification"}),()=>st.showNotification({notificationType:lt.warning,message:"This is the warning style Notification"}),()=>st.showNotification({notificationType:lt.error,message:"This is the error style Notification"}),()=>st.showNotification({message:qt})]}class Jt extends Y{constructor(t){super(),Z(this,t,Xt,Ft,tt,{})}}const Gt=`<script lang="ts">
	import { notificationType } from '$models/Enums';
	import { notificationStore } from '$store/pageStores.js';
	import { error } from '@sveltejs/kit';

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
`;function Kt(p){let t,n;return t=new It({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Qt(p){let t,n;return{c(){t=g("div"),n=S(`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Yt(p){let t,n;return t=new Wt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Zt(p){let t,n;return{c(){t=g("div"),n=S("This example shows how to setup the help for your page"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to setup the help for your page"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function te(p){let t,n;return t=new Jt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ee(p){let t,n;return{c(){t=g("div"),n=S("This example shows how to use notifcation toasts"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to use notifcation toasts"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ne(p){let t,n;return t=new Lt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function se(p){let t,n;return{c(){t=g("div"),n=S("The alerts are used to pass on messages to the user."),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"The alerts are used to pass on messages to the user."),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ae(p){let t,n;return t=new Ut({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ie(p){let t,n,e,s,l,u,m,f;return m=new Q({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=g("div"),n=g("p"),e=S(`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=g("b"),l=S("color, size and position."),u=y(),N(m.$$.fragment),this.h()},l(b){t=v(b,"DIV",{slot:!0});var d=_(t);n=v(d,"P",{});var a=_(n);e=C(a,`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=v(a,"B",{});var o=_(s);l=C(o,"color, size and position."),o.forEach(i),a.forEach(i),u=D(d),H(m.$$.fragment,d),d.forEach(i),this.h()},h(){h(t,"slot","info")},m(b,d){E(b,t,d),r(t,n),r(n,e),r(n,s),r(s,l),r(t,u),A(m,t,null),f=!0},p:R,i(b){f||(M(m.$$.fragment,b),f=!0)},o(b){P(m.$$.fragment,b),f=!1},d(b){b&&i(t),L(m)}}}function re(p){let t,n,e,s,l,u,m,f,b,d;return t=new at({props:{title:"Page",svelte:kt,codeOnly:!0,$$slots:{info:[Qt],default:[Kt]},$$scope:{ctx:p}}}),e=new at({props:{title:"Help",svelte:zt,json:JSON.stringify(dt,void 0,2),$$slots:{info:[Zt],default:[Yt]},$$scope:{ctx:p}}}),l=new at({props:{title:"Notification",svelte:Gt,$$slots:{info:[ee],default:[te]},$$scope:{ctx:p}}}),m=new at({props:{title:"Alert",svelte:Vt,$$slots:{info:[se],default:[ne]},$$scope:{ctx:p}}}),b=new at({props:{title:"Spinner",svelte:Ot,$$slots:{info:[ie],default:[ae]},$$scope:{ctx:p}}}),{c(){N(t.$$.fragment),n=y(),N(e.$$.fragment),s=y(),N(l.$$.fragment),u=y(),N(m.$$.fragment),f=y(),N(b.$$.fragment)},l(a){H(t.$$.fragment,a),n=D(a),H(e.$$.fragment,a),s=D(a),H(l.$$.fragment,a),u=D(a),H(m.$$.fragment,a),f=D(a),H(b.$$.fragment,a)},m(a,o){A(t,a,o),E(a,n,o),A(e,a,o),E(a,s,o),A(l,a,o),E(a,u,o),A(m,a,o),E(a,f,o),A(b,a,o),d=!0},p(a,o){const $={};o&1&&($.$$scope={dirty:o,ctx:a}),t.$set($);const T={};o&1&&(T.$$scope={dirty:o,ctx:a}),e.$set(T);const I={};o&1&&(I.$$scope={dirty:o,ctx:a}),l.$set(I);const w={};o&1&&(w.$$scope={dirty:o,ctx:a}),m.$set(w);const x={};o&1&&(x.$$scope={dirty:o,ctx:a}),b.$set(x)},i(a){d||(M(t.$$.fragment,a),M(e.$$.fragment,a),M(l.$$.fragment,a),M(m.$$.fragment,a),M(b.$$.fragment,a),d=!0)},o(a){P(t.$$.fragment,a),P(e.$$.fragment,a),P(l.$$.fragment,a),P(m.$$.fragment,a),P(b.$$.fragment,a),d=!1},d(a){L(t,a),a&&i(n),L(e,a),a&&i(s),L(l,a),a&&i(u),L(m,a),a&&i(f),L(b,a)}}}function oe(p){let t,n,e;return n=new mt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[re]},$$scope:{ctx:p}}}),{c(){t=g("div"),N(n.$$.fragment),this.h()},l(s){t=v(s,"DIV",{id:!0});var l=_(t);H(n.$$.fragment,l),l.forEach(i),this.h()},h(){h(t,"id","toc-target")},m(s,l){E(s,t,l),A(n,t,null),e=!0},p(s,[l]){const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),n.$set(u)},i(s){e||(M(n.$$.fragment,s),e=!0)},o(s){P(n.$$.fragment,s),e=!1},d(s){s&&i(t),L(n)}}}class ve extends Y{constructor(t){super(),Z(this,t,null,oe,tt,{})}}export{ve as component,ge as universal};
