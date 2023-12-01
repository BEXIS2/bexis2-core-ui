import{s as ht,P as mt,p as $t,H as gt,h as st,n as at,a as lt}from"../chunks/Page.c6aed1e5.js";import{S as Q,i as Y,s as tt,y as N,z as H,A,g as M,d as P,B as L,k as g,q as k,l as v,m as _,r as C,h as i,b as E,F as r,Z as R,n as h,a as x,c as S,N as z,P as ft}from"../chunks/index.9a980381.js";import{C as it}from"../chunks/CodeContainer.411f136a.js";import{A as K}from"../chunks/Alert.bb827470.js";import{F as ut,i as vt,j as _t}from"../chunks/index.e0bf5bcd.js";import{S as ot}from"../chunks/Spinner.77961b36.js";import{T as bt}from"../chunks/TextInput.85cc6f42.js";import{T as wt}from"../chunks/TextArea.a08d5d54.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.4034b135.js";import"../chunks/paths.d4d4929f.js";function Et(){return console.log("load and set apiconfig"),console.log("PROD"),ht("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ve=Object.freeze(Object.defineProperty({__proto__:null,load:Et},Symbol.toStringTag,{value:"Module"}));function Tt(f){let t,n;return{c(){t=g("div"),n=k("My Content HERE")},l(e){t=v(e,"DIV",{});var s=_(t);n=C(s,"My Content HERE"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function yt(f){let t,n,e;return{c(){t=g("div"),n=g("p"),e=k("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){t=v(s,"DIV",{slot:!0});var o=_(t);n=v(o,"P",{});var u=_(n);e=C(u,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),u.forEach(i),o.forEach(i),this.h()},h(){h(t,"slot","description")},m(s,o){E(s,t,o),r(t,n),r(n,e)},p:R,d(s){s&&i(t)}}}function xt(f){let t,n;return t=new mt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:f[0],menu:!1,help:!0,$$slots:{description:[yt],default:[Tt]},$$scope:{ctx:f}}}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function St(f){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class It extends Q{constructor(t){super(),Y(this,t,St,xt,tt,{})}}const Dt=`<script lang="ts">
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
`;function kt(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ct(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Nt(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(i)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Ht(f){let t,n,e,s,o,u,m,p,b,d,a,l,$,T,I;return{c(){t=g("h3"),n=k("Alert with a complex message"),e=x(),s=g("p"),o=k("inside the Alert messsage everthing goes to the slot in the message block"),u=x(),m=g("ul"),p=g("li"),b=k("note 1"),d=x(),a=g("li"),l=k("note 2"),$=x(),T=g("li"),I=k("note 3"),this.h()},l(w){t=v(w,"H3",{class:!0});var y=_(t);n=C(y,"Alert with a complex message"),y.forEach(i),e=S(w),s=v(w,"P",{});var U=_(s);o=C(U,"inside the Alert messsage everthing goes to the slot in the message block"),U.forEach(i),u=S(w),m=v(w,"UL",{class:!0});var V=_(m);p=v(V,"LI",{});var D=_(p);b=C(D,"note 1"),D.forEach(i),d=S(V),a=v(V,"LI",{});var O=_(a);l=C(O,"note 2"),O.forEach(i),$=S(V),T=v(V,"LI",{});var j=_(T);I=C(j,"note 3"),j.forEach(i),V.forEach(i),this.h()},h(){h(t,"class","h3"),h(m,"class","list-disc pl-5")},m(w,y){E(w,t,y),r(t,n),E(w,e,y),E(w,s,y),r(s,o),E(w,u,y),E(w,m,y),r(m,p),r(p,b),r(m,d),r(m,a),r(a,l),r(m,$),r(m,T),r(T,I)},p:R,d(w){w&&i(t),w&&i(e),w&&i(s),w&&i(u),w&&i(m)}}}function At(f){let t,n,e,s,o,u,m,p,b;return e=new ut({props:{icon:vt}}),u=new ut({props:{icon:_t}}),{c(){t=g("div"),n=g("button"),N(e.$$.fragment),s=x(),o=g("button"),N(u.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0,slot:!0});var a=_(t);n=v(a,"BUTTON",{class:!0});var l=_(n);H(e.$$.fragment,l),l.forEach(i),s=S(a),o=v(a,"BUTTON",{class:!0});var $=_(o);H(u.$$.fragment,$),$.forEach(i),a.forEach(i),this.h()},h(){h(n,"class","btn hover:text-primary-100"),h(o,"class","btn hover:text-primary-100"),h(t,"class","flex gap-2"),h(t,"slot","actions")},m(d,a){E(d,t,a),r(t,n),A(e,n,null),r(t,s),r(t,o),A(u,o,null),m=!0,p||(b=[z(n,"click",f[0]),z(o,"click",f[1])],p=!0)},p:R,i(d){m||(M(e.$$.fragment,d),M(u.$$.fragment,d),m=!0)},o(d){P(e.$$.fragment,d),P(u.$$.fragment,d),m=!1},d(d){d&&i(t),L(e),L(u),p=!1,ft(b)}}}function Mt(f){let t,n,e,s,o,u,m,p,b,d,a;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[kt]},$$scope:{ctx:f}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ct]},$$scope:{ctx:f}}}),u=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Nt]},$$scope:{ctx:f}}}),p=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[Ht]},$$scope:{ctx:f}}}),d=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[At]},$$scope:{ctx:f}}}),{c(){t=g("div"),N(n.$$.fragment),e=x(),N(s.$$.fragment),o=x(),N(u.$$.fragment),m=x(),N(p.$$.fragment),b=x(),N(d.$$.fragment),this.h()},l(l){t=v(l,"DIV",{class:!0});var $=_(t);H(n.$$.fragment,$),e=S($),H(s.$$.fragment,$),o=S($),H(u.$$.fragment,$),m=S($),H(p.$$.fragment,$),b=S($),H(d.$$.fragment,$),$.forEach(i),this.h()},h(){h(t,"class","grid grid-cols-1 gap-2")},m(l,$){E(l,t,$),A(n,t,null),r(t,e),A(s,t,null),r(t,o),A(u,t,null),r(t,m),A(p,t,null),r(t,b),A(d,t,null),a=!0},p(l,[$]){const T={};$&4&&(T.$$scope={dirty:$,ctx:l}),n.$set(T);const I={};$&4&&(I.$$scope={dirty:$,ctx:l}),s.$set(I);const w={};$&4&&(w.$$scope={dirty:$,ctx:l}),u.$set(w);const y={};$&4&&(y.$$scope={dirty:$,ctx:l}),p.$set(y);const U={};$&4&&(U.$$scope={dirty:$,ctx:l}),d.$set(U)},i(l){a||(M(n.$$.fragment,l),M(s.$$.fragment,l),M(u.$$.fragment,l),M(p.$$.fragment,l),M(d.$$.fragment,l),a=!0)},o(l){P(n.$$.fragment,l),P(s.$$.fragment,l),P(u.$$.fragment,l),P(p.$$.fragment,l),P(d.$$.fragment,l),a=!1},d(l){l&&i(t),L(n),L(s),L(u),L(p),L(d)}}}function Pt(f){return[()=>alert("edit"),()=>alert("something else")]}class Lt extends Q{constructor(t){super(),Y(this,t,Pt,Mt,tt,{})}}const Vt=`<script>
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
`;function Bt(f){let t,n,e,s,o,u,m,p,b,d,a,l,$,T,I,w,y,U,V,D,O,j,F,W,q;return u=new ot({}),l=new ot({props:{textCss:"text-primary-500"}}),U=new ot({props:{textCss:"text-secondary-500",position:$t.center}}),W=new ot({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=g("div"),n=g("div"),e=g("h4"),s=k("default"),o=x(),N(u.$$.fragment),m=x(),p=g("div"),b=g("h4"),d=k("change color"),a=x(),N(l.$$.fragment),$=x(),T=g("div"),I=g("h4"),w=k("change position"),y=x(),N(U.$$.fragment),V=x(),D=g("div"),O=g("h4"),j=k("add text"),F=x(),N(W.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var B=_(t);n=v(B,"DIV",{});var X=_(n);e=v(X,"H4",{class:!0});var et=_(e);s=C(et,"default"),et.forEach(i),o=S(X),H(u.$$.fragment,X),X.forEach(i),m=S(B),p=v(B,"DIV",{});var J=_(p);b=v(J,"H4",{class:!0});var nt=_(b);d=C(nt,"change color"),nt.forEach(i),a=S(J),H(l.$$.fragment,J),J.forEach(i),$=S(B),T=v(B,"DIV",{});var Z=_(T);I=v(Z,"H4",{class:!0});var G=_(I);w=C(G,"change position"),G.forEach(i),y=S(Z),H(U.$$.fragment,Z),Z.forEach(i),V=S(B),D=v(B,"DIV",{});var rt=_(D);O=v(rt,"H4",{class:!0});var pt=_(O);j=C(pt,"add text"),pt.forEach(i),F=S(rt),H(W.$$.fragment,rt),rt.forEach(i),B.forEach(i),this.h()},h(){h(e,"class","h4"),h(b,"class","h4"),h(I,"class","h4"),h(O,"class","h4"),h(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(c,B){E(c,t,B),r(t,n),r(n,e),r(e,s),r(n,o),A(u,n,null),r(t,m),r(t,p),r(p,b),r(b,d),r(p,a),A(l,p,null),r(t,$),r(t,T),r(T,I),r(I,w),r(T,y),A(U,T,null),r(t,V),r(t,D),r(D,O),r(O,j),r(D,F),A(W,D,null),q=!0},p:R,i(c){q||(M(u.$$.fragment,c),M(l.$$.fragment,c),M(U.$$.fragment,c),M(W.$$.fragment,c),q=!0)},o(c){P(u.$$.fragment,c),P(l.$$.fragment,c),P(U.$$.fragment,c),P(W.$$.fragment,c),q=!1},d(c){c&&i(t),L(u),L(l),L(U),L(W)}}}class Ut extends Q{constructor(t){super(),Y(this,t,null,Bt,tt,{})}}const Ot=`<script>
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
`,dt={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function jt(f){let t,n,e,s,o,u,m,p,b,d,a,l,$,T,I,w,y,U,V,D,O,j,F,W,q;return U=new bt({props:{id:"name",label:"Name of something important",help:ct}}),D=new wt({props:{id:"description",label:"Description to understand what happen in the world",help:ct}}),j=new gt({props:{active:ct}}),{c(){t=g("h3"),n=k("Basic Usage"),e=x(),s=g("div"),o=g("p"),u=k("Name"),m=x(),p=g("p"),b=k("Description"),d=x(),a=g("h3"),l=k("Use with Inputs"),$=x(),T=g("p"),I=k(`Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.`),w=x(),y=g("div"),N(U.$$.fragment),V=x(),N(D.$$.fragment),O=x(),N(j.$$.fragment),this.h()},l(c){t=v(c,"H3",{class:!0});var B=_(t);n=C(B,"Basic Usage"),B.forEach(i),e=S(c),s=v(c,"DIV",{class:!0});var X=_(s);o=v(X,"P",{class:!0,id:!0});var et=_(o);u=C(et,"Name"),et.forEach(i),m=S(X),p=v(X,"P",{class:!0,id:!0});var J=_(p);b=C(J,"Description"),J.forEach(i),X.forEach(i),d=S(c),a=v(c,"H3",{class:!0});var nt=_(a);l=C(nt,"Use with Inputs"),nt.forEach(i),$=S(c),T=v(c,"P",{});var Z=_(T);I=C(Z,`Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.`),Z.forEach(i),w=S(c),y=v(c,"DIV",{class:!0});var G=_(y);H(U.$$.fragment,G),V=S(G),H(D.$$.fragment,G),G.forEach(i),O=S(c),H(j.$$.fragment,c),this.h()},h(){h(t,"class","h3"),h(o,"class","p-5"),h(o,"id","name"),h(p,"class","p-5"),h(p,"id","description"),h(s,"class","p-5"),h(a,"class","h3"),h(y,"class","p-5")},m(c,B){E(c,t,B),r(t,n),E(c,e,B),E(c,s,B),r(s,o),r(o,u),r(s,m),r(s,p),r(p,b),E(c,d,B),E(c,a,B),r(a,l),E(c,$,B),E(c,T,B),r(T,I),E(c,w,B),E(c,y,B),A(U,y,null),r(y,V),A(D,y,null),E(c,O,B),A(j,c,B),F=!0,W||(q=[z(o,"mouseover",f[0]),z(o,"focus",f[1]),z(p,"mouseover",f[2]),z(p,"focus",f[3])],W=!0)},p:R,i(c){F||(M(U.$$.fragment,c),M(D.$$.fragment,c),M(j.$$.fragment,c),F=!0)},o(c){P(U.$$.fragment,c),P(D.$$.fragment,c),P(j.$$.fragment,c),F=!1},d(c){c&&i(t),c&&i(e),c&&i(s),c&&i(d),c&&i(a),c&&i($),c&&i(T),c&&i(w),c&&i(y),L(U),L(D),c&&i(O),L(j,c),W=!1,ft(q)}}}let ct=!0;function Rt(f){let t=dt.helpItems;return st.setHelpItemList(t),[()=>{st.show("name")},()=>{st.show("name")},()=>{st.show("description")},()=>{st.show("description")}]}class Wt extends Q{constructor(t){super(),Y(this,t,Rt,jt,tt,{})}}const Ft=`<script lang="ts">
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
`;function zt(f){let t,n,e,s,o,u,m,p,b,d,a,l,$,T,I,w,y,U;return{c(){t=g("div"),n=g("button"),e=k("Default"),s=x(),o=g("button"),u=k("Success"),m=x(),p=g("button"),b=k("Warning"),d=x(),a=g("button"),l=k("Error"),$=x(),T=g("div"),I=g("button"),w=k("HTML Message"),this.h()},l(V){t=v(V,"DIV",{class:!0});var D=_(t);n=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var O=_(n);e=C(O,"Default"),O.forEach(i),s=S(D),o=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var j=_(o);u=C(j,"Success"),j.forEach(i),m=S(D),p=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var F=_(p);b=C(F,"Warning"),F.forEach(i),d=S(D),a=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var W=_(a);l=C(W,"Error"),W.forEach(i),D.forEach(i),$=S(V),T=v(V,"DIV",{class:!0});var q=_(T);I=v(q,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var c=_(I);w=C(c,"HTML Message"),c.forEach(i),q.forEach(i),this.h()},h(){h(n,"type","button"),h(n,"class","btn variant-filled-surface h-9 shadow-md"),h(n,"title","Default"),h(n,"id","default"),h(o,"type","button"),h(o,"class","btn variant-filled-success h-9 shadow-md"),h(o,"title","Success"),h(o,"id","success"),h(p,"type","button"),h(p,"class","btn variant-filled-warning h-9 shadow-md"),h(p,"title","Warning"),h(p,"id","warning"),h(a,"type","button"),h(a,"class","btn variant-filled-error h-9 shadow-md"),h(a,"title","Error"),h(a,"id","error"),h(t,"class","p-5"),h(I,"type","button"),h(I,"class","btn variant-filled-surface h-9 shadow-md"),h(I,"title","Default"),h(I,"id","default"),h(T,"class","p-5")},m(V,D){E(V,t,D),r(t,n),r(n,e),r(t,s),r(t,o),r(o,u),r(t,m),r(t,p),r(p,b),r(t,d),r(t,a),r(a,l),E(V,$,D),E(V,T,D),r(T,I),r(I,w),y||(U=[z(n,"click",f[0]),z(o,"click",f[1]),z(p,"click",f[2]),z(a,"click",f[3]),z(I,"click",f[4])],y=!0)},p:R,i:R,o:R,d(V){V&&i(t),V&&i($),V&&i(T),y=!1,ft(U)}}}let qt='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Xt(f){return[()=>at.showNotification({message:"This is the default style Notification"}),()=>at.showNotification({notificationType:lt.success,message:"This is the success style Notification"}),()=>at.showNotification({notificationType:lt.warning,message:"This is the warning style Notification"}),()=>at.showNotification({notificationType:lt.error,message:"This is the error style Notification"}),()=>at.showNotification({message:qt})]}class Jt extends Q{constructor(t){super(),Y(this,t,Xt,zt,tt,{})}}const Zt=`<script lang="ts">
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
`;function Gt(f){let t,n;return t=new It({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Kt(f){let t,n;return{c(){t=g("div"),n=k(`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,`by using these components a unified border is displayed on the page, furthermore, there are
				props for title, notes and links, as well as a slot for description`),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function Qt(f){let t,n;return t=new Wt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Yt(f){let t,n;return{c(){t=g("div"),n=k("This example shows how to setup the help for your page"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to setup the help for your page"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function te(f){let t,n;return t=new Jt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ee(f){let t,n;return{c(){t=g("div"),n=k("This example shows how to use notifcation toasts"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to use notifcation toasts"),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ne(f){let t,n;return t=new Lt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function se(f){let t,n;return{c(){t=g("div"),n=k("The alerts are used to pass on messages to the user."),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"The alerts are used to pass on messages to the user."),s.forEach(i),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&i(t)}}}function ae(f){let t,n;return t=new Ut({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ie(f){let t,n,e,s,o,u,m,p;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=g("div"),n=g("p"),e=k(`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=g("b"),o=k("color, size and position."),u=x(),N(m.$$.fragment),this.h()},l(b){t=v(b,"DIV",{slot:!0});var d=_(t);n=v(d,"P",{});var a=_(n);e=C(a,`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=v(a,"B",{});var l=_(s);o=C(l,"color, size and position."),l.forEach(i),a.forEach(i),u=S(d),H(m.$$.fragment,d),d.forEach(i),this.h()},h(){h(t,"slot","info")},m(b,d){E(b,t,d),r(t,n),r(n,e),r(n,s),r(s,o),r(t,u),A(m,t,null),p=!0},p:R,i(b){p||(M(m.$$.fragment,b),p=!0)},o(b){P(m.$$.fragment,b),p=!1},d(b){b&&i(t),L(m)}}}function re(f){let t,n,e,s,o,u,m,p,b,d;return t=new it({props:{title:"Page",svelte:Dt,codeOnly:!0,$$slots:{info:[Kt],default:[Gt]},$$scope:{ctx:f}}}),e=new it({props:{title:"Help",svelte:Ft,json:JSON.stringify(dt,void 0,2),$$slots:{info:[Yt],default:[Qt]},$$scope:{ctx:f}}}),o=new it({props:{title:"Notification",svelte:Zt,$$slots:{info:[ee],default:[te]},$$scope:{ctx:f}}}),m=new it({props:{title:"Alert",svelte:Vt,$$slots:{info:[se],default:[ne]},$$scope:{ctx:f}}}),b=new it({props:{title:"Spinner",svelte:Ot,$$slots:{info:[ie],default:[ae]},$$scope:{ctx:f}}}),{c(){N(t.$$.fragment),n=x(),N(e.$$.fragment),s=x(),N(o.$$.fragment),u=x(),N(m.$$.fragment),p=x(),N(b.$$.fragment)},l(a){H(t.$$.fragment,a),n=S(a),H(e.$$.fragment,a),s=S(a),H(o.$$.fragment,a),u=S(a),H(m.$$.fragment,a),p=S(a),H(b.$$.fragment,a)},m(a,l){A(t,a,l),E(a,n,l),A(e,a,l),E(a,s,l),A(o,a,l),E(a,u,l),A(m,a,l),E(a,p,l),A(b,a,l),d=!0},p(a,l){const $={};l&1&&($.$$scope={dirty:l,ctx:a}),t.$set($);const T={};l&1&&(T.$$scope={dirty:l,ctx:a}),e.$set(T);const I={};l&1&&(I.$$scope={dirty:l,ctx:a}),o.$set(I);const w={};l&1&&(w.$$scope={dirty:l,ctx:a}),m.$set(w);const y={};l&1&&(y.$$scope={dirty:l,ctx:a}),b.$set(y)},i(a){d||(M(t.$$.fragment,a),M(e.$$.fragment,a),M(o.$$.fragment,a),M(m.$$.fragment,a),M(b.$$.fragment,a),d=!0)},o(a){P(t.$$.fragment,a),P(e.$$.fragment,a),P(o.$$.fragment,a),P(m.$$.fragment,a),P(b.$$.fragment,a),d=!1},d(a){L(t,a),a&&i(n),L(e,a),a&&i(s),L(o,a),a&&i(u),L(m,a),a&&i(p),L(b,a)}}}function oe(f){let t,n,e;return n=new mt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){t=g("div"),N(n.$$.fragment),this.h()},l(s){t=v(s,"DIV",{id:!0});var o=_(t);H(n.$$.fragment,o),o.forEach(i),this.h()},h(){h(t,"id","toc-target")},m(s,o){E(s,t,o),A(n,t,null),e=!0},p(s,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:s}),n.$set(u)},i(s){e||(M(n.$$.fragment,s),e=!0)},o(s){P(n.$$.fragment,s),e=!1},d(s){s&&i(t),L(n)}}}class _e extends Q{constructor(t){super(),Y(this,t,null,oe,tt,{})}}export{_e as component,ve as universal};
