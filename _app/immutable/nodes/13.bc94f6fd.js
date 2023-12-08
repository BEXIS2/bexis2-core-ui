import{s as ht,p as $t,h as st,n as it,a as lt}from"../chunks/pageStores.d35f08c9.js";import{S as Q,i as Y,s as tt,y as N,z as H,A,g as M,d as P,B as L,k as g,q as k,l as v,m as _,r as C,h as a,b as E,F as r,Z as R,n as h,a as x,c as S,N as z,P as ft}from"../chunks/index.9a980381.js";import{C as at}from"../chunks/CodeContainer.480021dd.js";import{P as mt,H as gt}from"../chunks/Page.a59d3549.js";import{A as K}from"../chunks/Alert.bb536f75.js";import{F as ut,i as vt,j as _t}from"../chunks/index.7f473b84.js";import{S as ot}from"../chunks/Spinner.41c52a3c.js";import{T as bt}from"../chunks/TextInput.a06e897b.js";import{T as wt}from"../chunks/TextArea.613cede2.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.4034b135.js";import"../chunks/paths.46b73fba.js";function Et(){return console.log("load and set apiconfig"),console.log("PROD"),ht("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const _e=Object.freeze(Object.defineProperty({__proto__:null,load:Et},Symbol.toStringTag,{value:"Module"}));function Tt(f){let t,n;return{c(){t=g("div"),n=k("My Content HERE")},l(e){t=v(e,"DIV",{});var s=_(t);n=C(s,"My Content HERE"),s.forEach(a)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function yt(f){let t,n,e;return{c(){t=g("div"),n=g("p"),e=k("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){t=v(s,"DIV",{slot:!0});var o=_(t);n=v(o,"P",{});var u=_(n);e=C(u,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),u.forEach(a),o.forEach(a),this.h()},h(){h(t,"slot","description")},m(s,o){E(s,t,o),r(t,n),r(n,e)},p:R,d(s){s&&a(t)}}}function xt(f){let t,n;return t=new mt({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:f[0],menu:!1,help:!0,$$slots:{description:[yt],default:[Tt]},$$scope:{ctx:f}}}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function St(f){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class It extends Q{constructor(t){super(),Y(this,t,St,xt,tt,{})}}const Dt=`<script lang="ts">
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
`;function kt(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(a)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function Ct(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(a)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function Nt(f){let t,n;return{c(){t=g("b"),n=k("test")},l(e){t=v(e,"B",{});var s=_(t);n=C(s,"test"),s.forEach(a)},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function Ht(f){let t,n,e,s,o,u,m,p,b,d,i,l,$,T,I;return{c(){t=g("h3"),n=k("Alert with a complex message"),e=x(),s=g("p"),o=k("inside the Alert messsage everthing goes to the slot in the message block"),u=x(),m=g("ul"),p=g("li"),b=k("note 1"),d=x(),i=g("li"),l=k("note 2"),$=x(),T=g("li"),I=k("note 3"),this.h()},l(w){t=v(w,"H3",{class:!0});var y=_(t);n=C(y,"Alert with a complex message"),y.forEach(a),e=S(w),s=v(w,"P",{});var U=_(s);o=C(U,"inside the Alert messsage everthing goes to the slot in the message block"),U.forEach(a),u=S(w),m=v(w,"UL",{class:!0});var V=_(m);p=v(V,"LI",{});var D=_(p);b=C(D,"note 1"),D.forEach(a),d=S(V),i=v(V,"LI",{});var O=_(i);l=C(O,"note 2"),O.forEach(a),$=S(V),T=v(V,"LI",{});var j=_(T);I=C(j,"note 3"),j.forEach(a),V.forEach(a),this.h()},h(){h(t,"class","h3"),h(m,"class","list-disc pl-5")},m(w,y){E(w,t,y),r(t,n),E(w,e,y),E(w,s,y),r(s,o),E(w,u,y),E(w,m,y),r(m,p),r(p,b),r(m,d),r(m,i),r(i,l),r(m,$),r(m,T),r(T,I)},p:R,d(w){w&&a(t),w&&a(e),w&&a(s),w&&a(u),w&&a(m)}}}function At(f){let t,n,e,s,o,u,m,p,b;return e=new ut({props:{icon:vt}}),u=new ut({props:{icon:_t}}),{c(){t=g("div"),n=g("button"),N(e.$$.fragment),s=x(),o=g("button"),N(u.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0,slot:!0});var i=_(t);n=v(i,"BUTTON",{class:!0});var l=_(n);H(e.$$.fragment,l),l.forEach(a),s=S(i),o=v(i,"BUTTON",{class:!0});var $=_(o);H(u.$$.fragment,$),$.forEach(a),i.forEach(a),this.h()},h(){h(n,"class","btn hover:text-primary-100"),h(o,"class","btn hover:text-primary-100"),h(t,"class","flex gap-2"),h(t,"slot","actions")},m(d,i){E(d,t,i),r(t,n),A(e,n,null),r(t,s),r(t,o),A(u,o,null),m=!0,p||(b=[z(n,"click",f[0]),z(o,"click",f[1])],p=!0)},p:R,i(d){m||(M(e.$$.fragment,d),M(u.$$.fragment,d),m=!0)},o(d){P(e.$$.fragment,d),P(u.$$.fragment,d),m=!1},d(d){d&&a(t),L(e),L(u),p=!1,ft(b)}}}function Mt(f){let t,n,e,s,o,u,m,p,b,d,i;return n=new K({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[kt]},$$scope:{ctx:f}}}),s=new K({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ct]},$$scope:{ctx:f}}}),u=new K({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[Nt]},$$scope:{ctx:f}}}),p=new K({props:{cssClass:"variant-ringed-success",$$slots:{default:[Ht]},$$scope:{ctx:f}}}),d=new K({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[At]},$$scope:{ctx:f}}}),{c(){t=g("div"),N(n.$$.fragment),e=x(),N(s.$$.fragment),o=x(),N(u.$$.fragment),m=x(),N(p.$$.fragment),b=x(),N(d.$$.fragment),this.h()},l(l){t=v(l,"DIV",{class:!0});var $=_(t);H(n.$$.fragment,$),e=S($),H(s.$$.fragment,$),o=S($),H(u.$$.fragment,$),m=S($),H(p.$$.fragment,$),b=S($),H(d.$$.fragment,$),$.forEach(a),this.h()},h(){h(t,"class","grid grid-cols-1 gap-2")},m(l,$){E(l,t,$),A(n,t,null),r(t,e),A(s,t,null),r(t,o),A(u,t,null),r(t,m),A(p,t,null),r(t,b),A(d,t,null),i=!0},p(l,[$]){const T={};$&4&&(T.$$scope={dirty:$,ctx:l}),n.$set(T);const I={};$&4&&(I.$$scope={dirty:$,ctx:l}),s.$set(I);const w={};$&4&&(w.$$scope={dirty:$,ctx:l}),u.$set(w);const y={};$&4&&(y.$$scope={dirty:$,ctx:l}),p.$set(y);const U={};$&4&&(U.$$scope={dirty:$,ctx:l}),d.$set(U)},i(l){i||(M(n.$$.fragment,l),M(s.$$.fragment,l),M(u.$$.fragment,l),M(p.$$.fragment,l),M(d.$$.fragment,l),i=!0)},o(l){P(n.$$.fragment,l),P(s.$$.fragment,l),P(u.$$.fragment,l),P(p.$$.fragment,l),P(d.$$.fragment,l),i=!1},d(l){l&&a(t),L(n),L(s),L(u),L(p),L(d)}}}function Pt(f){return[()=>alert("edit"),()=>alert("something else")]}class Lt extends Q{constructor(t){super(),Y(this,t,Pt,Mt,tt,{})}}const Vt=`<script>
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
`;function Bt(f){let t,n,e,s,o,u,m,p,b,d,i,l,$,T,I,w,y,U,V,D,O,j,F,W,q;return u=new ot({}),l=new ot({props:{textCss:"text-primary-500"}}),U=new ot({props:{textCss:"text-secondary-500",position:$t.center}}),W=new ot({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){t=g("div"),n=g("div"),e=g("h4"),s=k("default"),o=x(),N(u.$$.fragment),m=x(),p=g("div"),b=g("h4"),d=k("change color"),i=x(),N(l.$$.fragment),$=x(),T=g("div"),I=g("h4"),w=k("change position"),y=x(),N(U.$$.fragment),V=x(),D=g("div"),O=g("h4"),j=k("add text"),F=x(),N(W.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var B=_(t);n=v(B,"DIV",{});var X=_(n);e=v(X,"H4",{class:!0});var et=_(e);s=C(et,"default"),et.forEach(a),o=S(X),H(u.$$.fragment,X),X.forEach(a),m=S(B),p=v(B,"DIV",{});var J=_(p);b=v(J,"H4",{class:!0});var nt=_(b);d=C(nt,"change color"),nt.forEach(a),i=S(J),H(l.$$.fragment,J),J.forEach(a),$=S(B),T=v(B,"DIV",{});var Z=_(T);I=v(Z,"H4",{class:!0});var G=_(I);w=C(G,"change position"),G.forEach(a),y=S(Z),H(U.$$.fragment,Z),Z.forEach(a),V=S(B),D=v(B,"DIV",{});var rt=_(D);O=v(rt,"H4",{class:!0});var pt=_(O);j=C(pt,"add text"),pt.forEach(a),F=S(rt),H(W.$$.fragment,rt),rt.forEach(a),B.forEach(a),this.h()},h(){h(e,"class","h4"),h(b,"class","h4"),h(I,"class","h4"),h(O,"class","h4"),h(t,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(c,B){E(c,t,B),r(t,n),r(n,e),r(e,s),r(n,o),A(u,n,null),r(t,m),r(t,p),r(p,b),r(b,d),r(p,i),A(l,p,null),r(t,$),r(t,T),r(T,I),r(I,w),r(T,y),A(U,T,null),r(t,V),r(t,D),r(D,O),r(O,j),r(D,F),A(W,D,null),q=!0},p:R,i(c){q||(M(u.$$.fragment,c),M(l.$$.fragment,c),M(U.$$.fragment,c),M(W.$$.fragment,c),q=!0)},o(c){P(u.$$.fragment,c),P(l.$$.fragment,c),P(U.$$.fragment,c),P(W.$$.fragment,c),q=!1},d(c){c&&a(t),L(u),L(l),L(U),L(W)}}}class Ut extends Q{constructor(t){super(),Y(this,t,null,Bt,tt,{})}}const Ot=`<script>
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
`,dt={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function jt(f){let t,n,e,s,o,u,m,p,b,d,i,l,$,T,I,w,y,U,V,D,O,j,F,W,q;return U=new bt({props:{id:"name",label:"Name of something important",help:ct}}),D=new wt({props:{id:"description",label:"Description to understand what happen in the world",help:ct}}),j=new gt({props:{active:ct}}),{c(){t=g("h3"),n=k("Basic Usage"),e=x(),s=g("div"),o=g("p"),u=k("Name"),m=x(),p=g("p"),b=k("Description"),d=x(),i=g("h3"),l=k("Use with Inputs"),$=x(),T=g("p"),I=k(`Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.`),w=x(),y=g("div"),N(U.$$.fragment),V=x(),N(D.$$.fragment),O=x(),N(j.$$.fragment),this.h()},l(c){t=v(c,"H3",{class:!0});var B=_(t);n=C(B,"Basic Usage"),B.forEach(a),e=S(c),s=v(c,"DIV",{class:!0});var X=_(s);o=v(X,"P",{class:!0,id:!0});var et=_(o);u=C(et,"Name"),et.forEach(a),m=S(X),p=v(X,"P",{class:!0,id:!0});var J=_(p);b=C(J,"Description"),J.forEach(a),X.forEach(a),d=S(c),i=v(c,"H3",{class:!0});var nt=_(i);l=C(nt,"Use with Inputs"),nt.forEach(a),$=S(c),T=v(c,"P",{});var Z=_(T);I=C(Z,`Some inputs have the mouseover and mouseout functions for the help build in you just have to
	enable them.`),Z.forEach(a),w=S(c),y=v(c,"DIV",{class:!0});var G=_(y);H(U.$$.fragment,G),V=S(G),H(D.$$.fragment,G),G.forEach(a),O=S(c),H(j.$$.fragment,c),this.h()},h(){h(t,"class","h3"),h(o,"class","p-5"),h(o,"id","name"),h(p,"class","p-5"),h(p,"id","description"),h(s,"class","p-5"),h(i,"class","h3"),h(y,"class","p-5")},m(c,B){E(c,t,B),r(t,n),E(c,e,B),E(c,s,B),r(s,o),r(o,u),r(s,m),r(s,p),r(p,b),E(c,d,B),E(c,i,B),r(i,l),E(c,$,B),E(c,T,B),r(T,I),E(c,w,B),E(c,y,B),A(U,y,null),r(y,V),A(D,y,null),E(c,O,B),A(j,c,B),F=!0,W||(q=[z(o,"mouseover",f[0]),z(o,"focus",f[1]),z(p,"mouseover",f[2]),z(p,"focus",f[3])],W=!0)},p:R,i(c){F||(M(U.$$.fragment,c),M(D.$$.fragment,c),M(j.$$.fragment,c),F=!0)},o(c){P(U.$$.fragment,c),P(D.$$.fragment,c),P(j.$$.fragment,c),F=!1},d(c){c&&a(t),c&&a(e),c&&a(s),c&&a(d),c&&a(i),c&&a($),c&&a(T),c&&a(w),c&&a(y),L(U),L(D),c&&a(O),L(j,c),W=!1,ft(q)}}}let ct=!0;function Rt(f){let t=dt.helpItems;return st.setHelpItemList(t),[()=>{st.show("name")},()=>{st.show("name")},()=>{st.show("description")},()=>{st.show("description")}]}class Wt extends Q{constructor(t){super(),Y(this,t,Rt,jt,tt,{})}}const Ft=`<script lang="ts">
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
`;function zt(f){let t,n,e,s,o,u,m,p,b,d,i,l,$,T,I,w,y,U;return{c(){t=g("div"),n=g("button"),e=k("Default"),s=x(),o=g("button"),u=k("Success"),m=x(),p=g("button"),b=k("Warning"),d=x(),i=g("button"),l=k("Error"),$=x(),T=g("div"),I=g("button"),w=k("HTML Message"),this.h()},l(V){t=v(V,"DIV",{class:!0});var D=_(t);n=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var O=_(n);e=C(O,"Default"),O.forEach(a),s=S(D),o=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var j=_(o);u=C(j,"Success"),j.forEach(a),m=S(D),p=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var F=_(p);b=C(F,"Warning"),F.forEach(a),d=S(D),i=v(D,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var W=_(i);l=C(W,"Error"),W.forEach(a),D.forEach(a),$=S(V),T=v(V,"DIV",{class:!0});var q=_(T);I=v(q,"BUTTON",{type:!0,class:!0,title:!0,id:!0});var c=_(I);w=C(c,"HTML Message"),c.forEach(a),q.forEach(a),this.h()},h(){h(n,"type","button"),h(n,"class","btn variant-filled-surface h-9 shadow-md"),h(n,"title","Default"),h(n,"id","default"),h(o,"type","button"),h(o,"class","btn variant-filled-success h-9 shadow-md"),h(o,"title","Success"),h(o,"id","success"),h(p,"type","button"),h(p,"class","btn variant-filled-warning h-9 shadow-md"),h(p,"title","Warning"),h(p,"id","warning"),h(i,"type","button"),h(i,"class","btn variant-filled-error h-9 shadow-md"),h(i,"title","Error"),h(i,"id","error"),h(t,"class","p-5"),h(I,"type","button"),h(I,"class","btn variant-filled-surface h-9 shadow-md"),h(I,"title","Default"),h(I,"id","default"),h(T,"class","p-5")},m(V,D){E(V,t,D),r(t,n),r(n,e),r(t,s),r(t,o),r(o,u),r(t,m),r(t,p),r(p,b),r(t,d),r(t,i),r(i,l),E(V,$,D),E(V,T,D),r(T,I),r(I,w),y||(U=[z(n,"click",f[0]),z(o,"click",f[1]),z(p,"click",f[2]),z(i,"click",f[3]),z(I,"click",f[4])],y=!0)},p:R,i:R,o:R,d(V){V&&a(t),V&&a($),V&&a(T),y=!1,ft(U)}}}let qt='<h3 class="h3">HTML Message<h3><li>message 1</li><li>message 2</li><li>message 3</li>';function Xt(f){return[()=>it.showNotification({message:"This is the default style Notification"}),()=>it.showNotification({notificationType:lt.success,message:"This is the success style Notification"}),()=>it.showNotification({notificationType:lt.warning,message:"This is the warning style Notification"}),()=>it.showNotification({notificationType:lt.error,message:"This is the error style Notification"}),()=>it.showNotification({message:qt})]}class Jt extends Q{constructor(t){super(),Y(this,t,Xt,zt,tt,{})}}const Zt=`<script lang="ts">
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
				props for title, notes and links, as well as a slot for description`),s.forEach(a),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function Qt(f){let t,n;return t=new Wt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Yt(f){let t,n;return{c(){t=g("div"),n=k("This example shows how to setup the help for your page"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to setup the help for your page"),s.forEach(a),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function te(f){let t,n;return t=new Jt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ee(f){let t,n;return{c(){t=g("div"),n=k("This example shows how to use notifcation toasts"),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"This example shows how to use notifcation toasts"),s.forEach(a),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function ne(f){let t,n;return t=new Lt({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function se(f){let t,n;return{c(){t=g("div"),n=k("The alerts are used to pass on messages to the user."),this.h()},l(e){t=v(e,"DIV",{slot:!0});var s=_(t);n=C(s,"The alerts are used to pass on messages to the user."),s.forEach(a),this.h()},h(){h(t,"slot","info")},m(e,s){E(e,t,s),r(t,n)},p:R,d(e){e&&a(t)}}}function ie(f){let t,n;return t=new Ut({}),{c(){N(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ae(f){let t,n,e,s,o,u,m,p;return m=new K({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){t=g("div"),n=g("p"),e=k(`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=g("b"),o=k("color, size and position."),u=x(),N(m.$$.fragment),this.h()},l(b){t=v(b,"DIV",{slot:!0});var d=_(t);n=v(d,"P",{});var i=_(n);e=C(i,`every time there is a change that a user has to wait for, a spinner should be used. this
					component can be customized by `),s=v(i,"B",{});var l=_(s);o=C(l,"color, size and position."),l.forEach(a),i.forEach(a),u=S(d),H(m.$$.fragment,d),d.forEach(a),this.h()},h(){h(t,"slot","info")},m(b,d){E(b,t,d),r(t,n),r(n,e),r(n,s),r(s,o),r(t,u),A(m,t,null),p=!0},p:R,i(b){p||(M(m.$$.fragment,b),p=!0)},o(b){P(m.$$.fragment,b),p=!1},d(b){b&&a(t),L(m)}}}function re(f){let t,n,e,s,o,u,m,p,b,d;return t=new at({props:{title:"Page",svelte:Dt,codeOnly:!0,$$slots:{info:[Kt],default:[Gt]},$$scope:{ctx:f}}}),e=new at({props:{title:"Help",svelte:Ft,json:JSON.stringify(dt,void 0,2),$$slots:{info:[Yt],default:[Qt]},$$scope:{ctx:f}}}),o=new at({props:{title:"Notification",svelte:Zt,$$slots:{info:[ee],default:[te]},$$scope:{ctx:f}}}),m=new at({props:{title:"Alert",svelte:Vt,$$slots:{info:[se],default:[ne]},$$scope:{ctx:f}}}),b=new at({props:{title:"Spinner",svelte:Ot,$$slots:{info:[ae],default:[ie]},$$scope:{ctx:f}}}),{c(){N(t.$$.fragment),n=x(),N(e.$$.fragment),s=x(),N(o.$$.fragment),u=x(),N(m.$$.fragment),p=x(),N(b.$$.fragment)},l(i){H(t.$$.fragment,i),n=S(i),H(e.$$.fragment,i),s=S(i),H(o.$$.fragment,i),u=S(i),H(m.$$.fragment,i),p=S(i),H(b.$$.fragment,i)},m(i,l){A(t,i,l),E(i,n,l),A(e,i,l),E(i,s,l),A(o,i,l),E(i,u,l),A(m,i,l),E(i,p,l),A(b,i,l),d=!0},p(i,l){const $={};l&1&&($.$$scope={dirty:l,ctx:i}),t.$set($);const T={};l&1&&(T.$$scope={dirty:l,ctx:i}),e.$set(T);const I={};l&1&&(I.$$scope={dirty:l,ctx:i}),o.$set(I);const w={};l&1&&(w.$$scope={dirty:l,ctx:i}),m.$set(w);const y={};l&1&&(y.$$scope={dirty:l,ctx:i}),b.$set(y)},i(i){d||(M(t.$$.fragment,i),M(e.$$.fragment,i),M(o.$$.fragment,i),M(m.$$.fragment,i),M(b.$$.fragment,i),d=!0)},o(i){P(t.$$.fragment,i),P(e.$$.fragment,i),P(o.$$.fragment,i),P(m.$$.fragment,i),P(b.$$.fragment,i),d=!1},d(i){L(t,i),i&&a(n),L(e,i),i&&a(s),L(o,i),i&&a(u),L(m,i),i&&a(p),L(b,i)}}}function oe(f){let t,n,e;return n=new mt({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){t=g("div"),N(n.$$.fragment),this.h()},l(s){t=v(s,"DIV",{id:!0});var o=_(t);H(n.$$.fragment,o),o.forEach(a),this.h()},h(){h(t,"id","toc-target")},m(s,o){E(s,t,o),A(n,t,null),e=!0},p(s,[o]){const u={};o&1&&(u.$$scope={dirty:o,ctx:s}),n.$set(u)},i(s){e||(M(n.$$.fragment,s),e=!0)},o(s){P(n.$$.fragment,s),e=!1},d(s){s&&a(t),L(n)}}}class be extends Q{constructor(t){super(),Y(this,t,null,oe,tt,{})}}export{be as component,_e as universal};
