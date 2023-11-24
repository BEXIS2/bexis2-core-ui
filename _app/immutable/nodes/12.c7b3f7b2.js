import{s as ht,P as mt,p as $t,H as gt,h as ot,n as st,a as lt}from"../chunks/Page.fb432c59.js";import{S as Q,i as Y,s as tt,y as N,z as H,A,g as M,d as P,B as L,k as g,q as k,l as v,m as _,r as C,h as i,b as E,F as r,Z as R,n as h,a as x,c as I,N as X,P as ft}from"../chunks/index.9a980381.js";import{C as at}from"../chunks/CodeContainer.eb64204f.js";import{A as K}from"../chunks/Alert.bb827470.js";import{F as ut,i as vt,j as _t}from"../chunks/index.e0bf5bcd.js";import{S as rt}from"../chunks/Spinner.3807acf9.js";import{T as bt}from"../chunks/TextInput.09b469b0.js";import{T as wt}from"../chunks/TextArea.0b36f4db.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.4034b135.js";import"../chunks/paths.a1d33dcb.js";function Et(){return console.log("load and set apiconfig"),console.log("PROD"),ht("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ve=Object.freeze(Object.defineProperty({__proto__:null,load:Et},Symbol.toStringTag,{value:"Module"}));function Tt(p){let t,n;return{c(){t=g("div"),n=k("My Content HERE")},l(e){t=v(e,"DIV",{});var s=_(t);n=C(s,"My Content HERE"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function yt(p){let t,n,e;return{c(){t=g("div"),n=g("p"),e=k("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){t=v(s,"DIV",{slot:!0});var l=_(t);n=v(l,"P",{});var u=_(n);e=C(u,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),u.forEach(i),l.forEach(i),this.h()},h(){h(t,"slot","description")},m(s,l){E(s,t,l),r(t,n),r(n,e)},p:R,d(s){s&&i(t)}}}function xt(p){let t,n;return t=new mt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:p[0],menu:!1,help:!0,$$slots:{description:[yt],default:[Tt]},$$scope:{ctx:p}}}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,[s]){const l={};s&2&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function It(p){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class Dt extends Q{constructor(t){super(),Y(this,t,It,xt,tt,{})}}const St=`<script lang="ts">
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
`;function kt(p){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ct(p){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Nt(p){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ht(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,D;return{c(){t=g("h3"),n=k("Alert with a complex message"),e=x(),s=g("p"),l=k("inside the Alert messsage everthing goes to the slot in the message block"),u=x(),m=g("ul"),f=g("li"),b=k("note 1"),d=x(),a=g("li"),o=k("note 2"),$=x(),T=g("li"),D=k("note 3"),this.h()},l(w){t=v(w,"H3",{class:!0});var y=_(t);n=C(y,"Alert with a complex message"),y.forEach(i),e=I(w),s=v(w,"P",{});var U=_(s);l=C(U,"inside the Alert messsage everthing goes to the slot in the message block"),U.forEach(i),u=I(w),m=v(w,"UL",{class:!0});var V=_(m);f=v(V,"LI",{});var S=_(f);b=C(S,"note 1"),S.forEach(i),d=I(V),a=v(V,"LI",{});var O=_(a);o=C(O,"note 2"),O.forEach(i),$=I(V),T=v(V,"LI",{});var j=_(T);D=C(j,"note 3"),j.forEach(i),V.forEach(i),this.h()},h(){h(t,"class","h3"),h(m,"class","list-disc pl-5")},m(w,y){E(w,t,y),r(t,n),E(w,e,y),E(w,s,y),r(s,l),E(w,u,y),E(w,m,y),r(m,f),r(f,b),r(m,d),r(m,a),r(a,o),r(m,$),r(m,T),r(T,D)},p:R,d(w){w&&i(t),w&&i(e),w&&i(s),w&&i(u),w&&i(m)}}}function At(p){let t,n,e,s,l,u,m,f,b;return e=new ut({props:{icon:vt}}),u=new ut({props:{icon:_t}}),{c(){t=g("div"),n=g("button"),N(e.$$.fragment),s=x(),l=g("button"),N(u.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0,slot:!0});var a=_(t);n=v(a,"BUTTON",{class:!0});var o=_(n);H(e.$$.fragment,o),o.forEach(i),s=I(a),l=v(a,"BUTTON",{class:!0});var $=_(l);H(u.$$.fragment,$),$.forEach(i),a.forEach(i),this.h()},h(){h(n,"class","btn hover:text-primary-100"),h(l,"class","btn hover:text-primary-100"),h(t,"class","flex gap-2"),h(t,"slot","actions")},m(d,a){E(d,t,a),r(t,n),A(e,n,null),r(t,s),r(t,l),A(u,l,null),m=!0,f||(b=[X(n,"click",p[0]),X(l,"click",p[1])],f=!0)},p:R,i(d){m||(M(e.$$.fragment,d),M(u.$$.fragment,d),m=!0)},o(d){P(e.$$.fragment,d),P(u.$$.fragment,d),m=!1},d(d){d&&i(t),L(e),L(u),f=!1,ft(b)}}}function Mt(p){let t,n,e,s,l,u,m,f,b,d,a;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[kt]},$$scope:{ctx:p}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ct]},$$scope:{ctx:p}}}),u=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Nt]},$$scope:{ctx:p}}}),f=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[Ht]},$$scope:{ctx:p}}}),d=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[At]},$$scope:{ctx:p}}}),{c(){t=g("div"),N(n.$$.fragment),e=x(),N(s.$$.fragment),l=x(),N(u.$$.fragment),m=x(),N(f.$$.fragment),b=x(),N(d.$$.fragment),this.h()},l(o){t=v(o,"DIV",{class:!0});var $=_(t);H(n.$$.fragment,$),e=I($),H(s.$$.fragment,$),l=I($),H(u.$$.fragment,$),m=I($),H(f.$$.fragment,$),b=I($),H(d.$$.fragment,$),$.forEach(i),this.h()},h(){h(t,"class","grid grid-cols-1 gap-2")},m(o,$){E(o,t,$),A(n,t,null),r(t,e),A(s,t,null),r(t,l),A(u,t,null),r(t,m),A(f,t,null),r(t,b),A(d,t,null),a=!0},p(o,[$]){const T={};$&4&&(T.$$scope={dirty:$,ctx:o}),n.$set(T);const D={};$&4&&(D.$$scope={dirty:$,ctx:o}),s.$set(D);const w={};$&4&&(w.$$scope={dirty:$,ctx:o}),u.$set(w);const y={};$&4&&(y.$$scope={dirty:$,ctx:o}),f.$set(y);const U={};$&4&&(U.$$scope={dirty:$,ctx:o}),d.$set(U)},i(o){a||(M(n.$$.fragment,o),M(s.$$.fragment,o),M(u.$$.fragment,o),M(f.$$.fragment,o),M(d.$$.fragment,o),a=!0)},o(o){P(n.$$.fragment,o),P(s.$$.fragment,o),P(u.$$.fragment,o),P(f.$$.fragment,o),P(d.$$.fragment,o),a=!1},d(o){o&&i(t),L(n),L(s),L(u),L(f),L(d)}}}function Pt(p){return[()=>alert("edit"),()=>alert("something else")]}class Lt extends Q{constructor(t){super(),Y(this,t,Pt,Mt,tt,{})}}const Vt=`<script>
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
`;function Bt(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,D,w,y,U,V,S,O,j,F,W,z;return u=new rt({}),o=new rt({props:{textCss:"text-primary-500"}}),U=new rt({props:{textCss:"text-secondary-500",position:$t.center}}),W=new rt({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=g("div"),n=g("div"),e=g("h4"),s=k("default"),l=x(),N(u.$$.fragment),m=x(),f=g("div"),b=g("h4"),d=k("change color"),a=x(),N(o.$$.fragment),$=x(),T=g("div"),D=g("h4"),w=k("change position"),y=x(),N(U.$$.fragment),V=x(),S=g("div"),O=g("h4"),j=k("add text"),F=x(),N(W.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var B=_(t);n=v(B,"DIV",{});var q=_(n);e=v(q,"H4",{class:!0});var et=_(e);s=C(et,"default"),et.forEach(i),l=I(q),H(u.$$.fragment,q),q.forEach(i),m=I(B),f=v(B,"DIV",{});var J=_(f);b=v(J,"H4",{class:!0});var nt=_(b);d=C(nt,"change color"),nt.forEach(i),a=I(J),H(o.$$.fragment,J),J.forEach(i),$=I(B),T=v(B,"DIV",{});var Z=_(T);D=v(Z,"H4",{class:!0});var G=_(D);w=C(G,"change position"),G.forEach(i),y=I(Z),H(U.$$.fragment,Z),Z.forEach(i),V=I(B),S=v(B,"DIV",{});var it=_(S);O=v(it,"H4",{class:!0});var pt=_(O);j=C(pt,"add text"),pt.forEach(i),F=I(it),H(W.$$.fragment,it),it.forEach(i),B.forEach(i),this.h()},h(){h(e,"class","h4"),h(b,"class","h4"),h(D,"class","h4"),h(O,"class","h4"),h(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(c,B){E(c,t,B),r(t,n),r(n,e),r(e,s),r(n,l),A(u,n,null),r(t,m),r(t,f),r(f,b),r(b,d),r(f,a),A(o,f,null),r(t,$),r(t,T),r(T,D),r(D,w),r(T,y),A(U,T,null),r(t,V),r(t,S),r(S,O),r(O,j),r(S,F),A(W,S,null),z=!0},p:R,i(c){z||(M(u.$$.fragment,c),M(o.$$.fragment,c),M(U.$$.fragment,c),M(W.$$.fragment,c),z=!0)},o(c){P(u.$$.fragment,c),P(o.$$.fragment,c),P(U.$$.fragment,c),P(W.$$.fragment,c),z=!1},d(c){c&&i(t),L(u),L(o),L(U),L(W)}}}class Ut extends Q{constructor(t){super(),Y(this,t,null,Bt,tt,{})}}const Ot=`<script>
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
`,dt={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function jt(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,D,w,y,U,V,S,O,j,F,W,z;return U=new bt({props:{id:"name",label:"Name of something important",help:ct}}),S=new wt({props:{id:"description",label:"Description to understand what happen in the world",help:ct}}),j=new gt({props:{active:ct}}),{c(){t=g("h3"),n=k("Basic Useage"),e=x(),s=g("div"),l=g("p"),u=k("Name"),m=x(),f=g("p"),b=k("Description"),d=x(),a=g("h3"),o=k("Use with Inputs"),$=x(),T=g("p"),D=k(`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),w=x(),y=g("div"),N(U.$$.fragment),V=x(),N(S.$$.fragment),O=x(),N(j.$$.fragment),this.h()},l(c){t=v(c,"H3",{class:!0});var B=_(t);n=C(B,"Basic Useage"),B.forEach(i),e=I(c),s=v(c,"DIV",{class:!0});var q=_(s);l=v(q,"P",{class:!0,id:!0});var et=_(l);u=C(et,"Name"),et.forEach(i),m=I(q),f=v(q,"P",{class:!0,id:!0});var J=_(f);b=C(J,"Description"),J.forEach(i),q.forEach(i),d=I(c),a=v(c,"H3",{class:!0});var nt=_(a);o=C(nt,"Use with Inputs"),nt.forEach(i),$=I(c),T=v(c,"P",{});var Z=_(T);D=C(Z,`Some inputs have the mouseover and mouseout functions for the help bulid in you just have to
	anable them.`),Z.forEach(i),w=I(c),y=v(c,"DIV",{class:!0});var G=_(y);H(U.$$.fragment,G),V=I(G),H(S.$$.fragment,G),G.forEach(i),O=I(c),H(j.$$.fragment,c),this.h()},h(){h(t,"class","h3"),h(l,"class","p-5"),h(l,"id","name"),h(f,"class","p-5"),h(f,"id","description"),h(s,"class","p-5"),h(a,"class","h3"),h(y,"class","p-5")},m(c,B){E(c,t,B),r(t,n),E(c,e,B),E(c,s,B),r(s,l),r(l,u),r(s,m),r(s,f),r(f,b),E(c,d,B),E(c,a,B),r(a,o),E(c,$,B),E(c,T,B),r(T,D),E(c,w,B),E(c,y,B),A(U,y,null),r(y,V),A(S,y,null),E(c,O,B),A(j,c,B),F=!0,W||(z=[X(l,"mouseover",p[0]),X(f,"mouseover",p[1])],W=!0)},p:R,i(c){F||(M(U.$$.fragment,c),M(S.$$.fragment,c),M(j.$$.fragment,c),F=!0)},o(c){P(U.$$.fragment,c),P(S.$$.fragment,c),P(j.$$.fragment,c),F=!1},d(c){c&&i(t),c&&i(e),c&&i(s),c&&i(d),c&&i(a),c&&i($),c&&i(T),c&&i(w),c&&i(y),L(U),L(S),c&&i(O),L(j,c),W=!1,ft(z)}}}let ct=!0;function Rt(p){let t=dt.helpItems;return ot.setHelpItemList(t),[()=>{ot.show("name")},()=>{ot.show("description")}]}class Wt extends Q{constructor(t){super(),Y(this,t,Rt,jt,tt,{})}}const Ft=`<script lang="ts">
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
`;function zt(p){let t,n,e,s,l,u,m,f,b,d,a,o,$,T,D,w,y,U;return{c(){t=g("div"),n=g("button"),e=k("Default"),s=x(),l=g("button"),u=k("Success"),m=x(),f=g("button"),b=k("Warning"),d=x(),a=g("button"),o=k("Error"),$=x(),T=g("div"),D=g("button"),w=k("HTML Message"),this.h()},l(V){t=v(V,"DIV",{class:!0});var S=_(t);n=v(S,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var O=_(n);e=C(O,"Default"),O.forEach(i),s=I(S),l=v(S,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var j=_(l);u=C(j,"Success"),j.forEach(i),m=I(S),f=v(S,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var F=_(f);b=C(F,"Warning"),F.forEach(i),d=I(S),a=v(S,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var W=_(a);o=C(W,"Error"),W.forEach(i),S.forEach(i),$=I(V),T=v(V,"DIV",{class:!0});var z=_(T);D=v(z,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var c=_(D);w=C(c,"HTML Message"),c.forEach(i),z.forEach(i),this.h()},h(){h(n,"type","button"),h(n,"class","btn variant-filled-surface h-9 shadow-md"),h(n,"title","Default"),h(n,"id","default"),h(l,"type","button"),h(l,"class","btn variant-filled-success h-9 shadow-md"),h(l,"title","Success"),h(l,"id","success"),h(f,"type","button"),h(f,"class","btn variant-filled-warning h-9 shadow-md"),h(f,"title","Warning"),h(f,"id","warning"),h(a,"type","button"),h(a,"class","btn variant-filled-error h-9 shadow-md"),h(a,"title","Error"),h(a,"id","error"),h(t,"class","p-5"),h(D,"type","button"),h(D,"class","btn variant-filled-surface h-9 shadow-md"),h(D,"title","Default"),h(D,"id","default"),h(T,"class","p-5")},m(V,S){E(V,t,S),r(t,n),r(n,e),r(t,s),r(t,l),r(l,u),r(t,m),r(t,f),r(f,b),r(t,d),r(t,a),r(a,o),E(V,$,S),E(V,T,S),r(T,D),r(D,w),y||(U=[X(n,"click",p[0]),X(l,"click",p[1]),X(f,"click",p[2]),X(a,"click",p[3]),X(D,"click",p[4])],y=!0)},p:R,i:R,o:R,d(V){V&&i(t),V&&i($),V&&i(T),y=!1,ft(U)}}}let qt='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Xt(p){return[()=>st.showNotification({message:"This is the default style Notification"}),()=>st.showNotification({notificationType:lt.success,message:"This is the success style Notification"}),()=>st.showNotification({notificationType:lt.warning,message:"This is the warning style Notification"}),()=>st.showNotification({notificationType:lt.error,message:"This is the error style Notification"}),()=>st.showNotification({message:qt})]}class Jt extends Q{constructor(t){super(),Y(this,t,Xt,zt,tt,{})}}const Zt=`<script lang="ts">
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
`;function Gt(p){let t,n;return t=new Dt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Kt(p){let t,n;return{c(){t=g("div"),n=k(`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Qt(p){let t,n;return t=new Wt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Yt(p){let t,n;return{c(){t=g("div"),n=k("This example shows how to setup the help for your page"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to setup the help for your page"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function te(p){let t,n;return t=new Jt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ee(p){let t,n;return{c(){t=g("div"),n=k("This example shows how to use notifcation toasts"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to use notifcation toasts"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ne(p){let t,n;return t=new Lt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function se(p){let t,n;return{c(){t=g("div"),n=k("The alerts are used to pass on messages to the user."),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"The alerts are used to pass on messages to the user."),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ae(p){let t,n;return t=new Ut({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ie(p){let t,n,e,s,l,u,m,f;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=g("div"),n=g("p"),e=k(`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=g("b"),l=k("color, size and position."),u=x(),N(m.$$.fragment),this.h()},l(b){t=v(b,"DIV",{slot:!0});var d=_(t);n=v(d,"P",{});var a=_(n);e=C(a,`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=v(a,"B",{});var o=_(s);l=C(o,"color, size and position."),o.forEach(i),a.forEach(i),u=I(d),H(m.$$.fragment,d),d.forEach(i),this.h()},h(){h(t,"slot","info")},m(b,d){E(b,t,d),r(t,n),r(n,e),r(n,s),r(s,l),r(t,u),A(m,t,null),f=!0},p:R,i(b){f||(M(m.$$.fragment,b),f=!0)},o(b){P(m.$$.fragment,b),f=!1},d(b){b&&i(t),L(m)}}}function re(p){let t,n,e,s,l,u,m,f,b,d;return t=new at({props:{title:"Page",svelte:St,codeOnly:!0,$$slots:{info:[Kt],default:[Gt]},$$scope:{ctx:p}}}),e=new at({props:{title:"Help",svelte:Ft,json:JSON.stringify(dt,void 0,2),$$slots:{info:[Yt],default:[Qt]},$$scope:{ctx:p}}}),l=new at({props:{title:"Notification",svelte:Zt,$$slots:{info:[ee],default:[te]},$$scope:{ctx:p}}}),m=new at({props:{title:"Alert",svelte:Vt,$$slots:{info:[se],default:[ne]},$$scope:{ctx:p}}}),b=new at({props:{title:"Spinner",svelte:Ot,$$slots:{info:[ie],default:[ae]},$$scope:{ctx:p}}}),{c(){N(t.$$.fragment),n=x(),N(e.$$.fragment),s=x(),N(l.$$.fragment),u=x(),N(m.$$.fragment),f=x(),N(b.$$.fragment)},l(a){H(t.$$.fragment,a),n=I(a),H(e.$$.fragment,a),s=I(a),H(l.$$.fragment,a),u=I(a),H(m.$$.fragment,a),f=I(a),H(b.$$.fragment,a)},m(a,o){A(t,a,o),E(a,n,o),A(e,a,o),E(a,s,o),A(l,a,o),E(a,u,o),A(m,a,o),E(a,f,o),A(b,a,o),d=!0},p(a,o){const $={};o&1&&($.$$scope={dirty:o,ctx:a}),t.$set($);const T={};o&1&&(T.$$scope={dirty:o,ctx:a}),e.$set(T);const D={};o&1&&(D.$$scope={dirty:o,ctx:a}),l.$set(D);const w={};o&1&&(w.$$scope={dirty:o,ctx:a}),m.$set(w);const y={};o&1&&(y.$$scope={dirty:o,ctx:a}),b.$set(y)},i(a){d||(M(t.$$.fragment,a),M(e.$$.fragment,a),M(l.$$.fragment,a),M(m.$$.fragment,a),M(b.$$.fragment,a),d=!0)},o(a){P(t.$$.fragment,a),P(e.$$.fragment,a),P(l.$$.fragment,a),P(m.$$.fragment,a),P(b.$$.fragment,a),d=!1},d(a){L(t,a),a&&i(n),L(e,a),a&&i(s),L(l,a),a&&i(u),L(m,a),a&&i(f),L(b,a)}}}function oe(p){let t,n,e;return n=new mt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[re]},$$scope:{ctx:p}}}),{c(){t=g("div"),N(n.$$.fragment),this.h()},l(s){t=v(s,"DIV",{id:!0});var l=_(t);H(n.$$.fragment,l),l.forEach(i),this.h()},h(){h(t,"id","toc-target")},m(s,l){E(s,t,l),A(n,t,null),e=!0},p(s,[l]){const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),n.$set(u)},i(s){e||(M(n.$$.fragment,s),e=!0)},o(s){P(n.$$.fragment,s),e=!1},d(s){s&&i(t),L(n)}}}class _e extends Q{constructor(t){super(),Y(this,t,null,oe,tt,{})}}export{_e as component,ve as universal};
