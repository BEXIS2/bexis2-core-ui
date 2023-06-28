import{s as ue,P as ae,H as fe}from"../chunks/Page.cbb15627.js";import{S as W,i as q,s as X,y as w,z as E,A as I,g as C,d as A,B as D,k as h,q as S,l as g,m as v,r as P,h as l,b as k,D as c,W as M,n as x,a as y,c as H,M as ne,O as de,u as $e}from"../chunks/index.0dcca97d.js";import{C as Z}from"../chunks/CodeContainer.6c1d2ac6.js";import{A as U}from"../chunks/Alert.826e3f19.js";import{F as pe,f as he,a as ge}from"../chunks/index.e8b7319d.js";import{T as ve,a as _e}from"../chunks/TextArea.34f2c88e.js";function be(){return console.log("load and set apiconfig"),console.log("PROD"),ue("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ot=Object.freeze(Object.defineProperty({__proto__:null,load:be},Symbol.toStringTag,{value:"Module"}));function xe(f){let e,n;return{c(){e=h("div"),n=S("My Content HERE")},l(t){e=g(t,"DIV",{});var s=v(e);n=P(s,"My Content HERE"),s.forEach(l)},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function we(f){let e,n,t;return{c(){e=h("div"),n=h("p"),t=S("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=g(s,"DIV",{slot:!0});var i=v(e);n=g(i,"P",{});var o=v(n);t=P(o,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),o.forEach(l),i.forEach(l),this.h()},h(){x(e,"slot","description")},m(s,i){k(s,e,i),c(e,n),c(n,t)},p:M,d(s){s&&l(e)}}}function Ee(f){let e,n;return e=new ae({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:f[0],menu:!1,$$slots:{description:[we],default:[xe]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ie(f){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class Ce extends W{constructor(e){super(),q(this,e,Ie,Ee,X,{})}}const Ae=`<script lang="ts">
 import Page from "$lib/components/page/Page.svelte";
 import type { Link } from "$lib/models/Models";

let links:Link[] = [{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]


<\/script>

<Page 
title="Create a Dataset" 
note="On this page you can create a dataset based on a template. please select on template and fill out the form." 
{links}
menu={false}>

<div slot="description">

 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
 
</div>

<!-- your Page content -->
<div>My Content HERE</div>

</Page>`;function De(f){let e,n;return{c(){e=h("b"),n=S("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(l)},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function ke(f){let e,n;return{c(){e=h("b"),n=S("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(l)},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function ye(f){let e,n;return{c(){e=h("b"),n=S("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(l)},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function He(f){let e,n,t,s,i,o,m,u,a,r,$,d,p,_,V;return{c(){e=h("h3"),n=S("Alert with a complex message"),t=y(),s=h("p"),i=S("inside the Alert messsage everthing goes to the slot in the message block"),o=y(),m=h("ul"),u=h("li"),a=S("note 1"),r=y(),$=h("li"),d=S("note 2"),p=y(),_=h("li"),V=S("note 3"),this.h()},l(b){e=g(b,"H3",{class:!0});var T=v(e);n=P(T,"Alert with a complex message"),T.forEach(l),t=H(b),s=g(b,"P",{});var B=v(s);i=P(B,"inside the Alert messsage everthing goes to the slot in the message block"),B.forEach(l),o=H(b),m=g(b,"UL",{class:!0});var O=v(m);u=g(O,"LI",{});var N=v(u);a=P(N,"note 1"),N.forEach(l),r=H(O),$=g(O,"LI",{});var j=v($);d=P(j,"note 2"),j.forEach(l),p=H(O),_=g(O,"LI",{});var F=v(_);V=P(F,"note 3"),F.forEach(l),O.forEach(l),this.h()},h(){x(e,"class","h3"),x(m,"class","list-disc pl-5")},m(b,T){k(b,e,T),c(e,n),k(b,t,T),k(b,s,T),c(s,i),k(b,o,T),k(b,m,T),c(m,u),c(u,a),c(m,r),c(m,$),c($,d),c(m,p),c(m,_),c(_,V)},p:M,d(b){b&&l(e),b&&l(t),b&&l(s),b&&l(o),b&&l(m)}}}function Se(f){let e,n,t,s,i,o,m,u,a;return t=new pe({props:{icon:he}}),o=new pe({props:{icon:ge}}),{c(){e=h("div"),n=h("button"),w(t.$$.fragment),s=y(),i=h("button"),w(o.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0,slot:!0});var $=v(e);n=g($,"BUTTON",{class:!0});var d=v(n);E(t.$$.fragment,d),d.forEach(l),s=H($),i=g($,"BUTTON",{class:!0});var p=v(i);E(o.$$.fragment,p),p.forEach(l),$.forEach(l),this.h()},h(){x(n,"class","btn hover:text-primary-100"),x(i,"class","btn hover:text-primary-100"),x(e,"class","flex gap-2"),x(e,"slot","actions")},m(r,$){k(r,e,$),c(e,n),I(t,n,null),c(e,s),c(e,i),I(o,i,null),m=!0,u||(a=[ne(n,"click",f[0]),ne(i,"click",f[1])],u=!0)},p:M,i(r){m||(C(t.$$.fragment,r),C(o.$$.fragment,r),m=!0)},o(r){A(t.$$.fragment,r),A(o.$$.fragment,r),m=!1},d(r){r&&l(e),D(t),D(o),u=!1,de(a)}}}function Pe(f){let e,n,t,s,i,o,m,u,a,r,$;return n=new U({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[De]},$$scope:{ctx:f}}}),s=new U({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[ke]},$$scope:{ctx:f}}}),o=new U({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[ye]},$$scope:{ctx:f}}}),u=new U({props:{cssClass:"variant-ringed-success",$$slots:{default:[He]},$$scope:{ctx:f}}}),r=new U({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[Se]},$$scope:{ctx:f}}}),{c(){e=h("div"),w(n.$$.fragment),t=y(),w(s.$$.fragment),i=y(),w(o.$$.fragment),m=y(),w(u.$$.fragment),a=y(),w(r.$$.fragment),this.h()},l(d){e=g(d,"DIV",{class:!0});var p=v(e);E(n.$$.fragment,p),t=H(p),E(s.$$.fragment,p),i=H(p),E(o.$$.fragment,p),m=H(p),E(u.$$.fragment,p),a=H(p),E(r.$$.fragment,p),p.forEach(l),this.h()},h(){x(e,"class","grid grid-cols-1 gap-2")},m(d,p){k(d,e,p),I(n,e,null),c(e,t),I(s,e,null),c(e,i),I(o,e,null),c(e,m),I(u,e,null),c(e,a),I(r,e,null),$=!0},p(d,[p]){const _={};p&4&&(_.$$scope={dirty:p,ctx:d}),n.$set(_);const V={};p&4&&(V.$$scope={dirty:p,ctx:d}),s.$set(V);const b={};p&4&&(b.$$scope={dirty:p,ctx:d}),o.$set(b);const T={};p&4&&(T.$$scope={dirty:p,ctx:d}),u.$set(T);const B={};p&4&&(B.$$scope={dirty:p,ctx:d}),r.$set(B)},i(d){$||(C(n.$$.fragment,d),C(s.$$.fragment,d),C(o.$$.fragment,d),C(u.$$.fragment,d),C(r.$$.fragment,d),$=!0)},o(d){A(n.$$.fragment,d),A(s.$$.fragment,d),A(o.$$.fragment,d),A(u.$$.fragment,d),A(r.$$.fragment,d),$=!1},d(d){d&&l(e),D(n),D(s),D(o),D(u),D(r)}}}function Te(f){return[()=>alert("edit"),()=>alert("something else")]}class Ve extends W{constructor(e){super(),q(this,e,Te,Pe,X,{})}}const Le=`<script>
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
`;var re=(f=>(f.start="start",f.end="end",f.center="center",f))(re||{});function Me(f){let e,n,t,s,i,o,m,u,a;return{c(){e=h("div"),n=h("div"),t=h("span"),s=S("Loading..."),o=y(),m=h("span"),u=S(f[1]),this.h()},l(r){e=g(r,"DIV",{class:!0});var $=v(e);n=g($,"DIV",{class:!0,role:!0});var d=v(n);t=g(d,"SPAN",{class:!0});var p=v(t);s=P(p,"Loading..."),p.forEach(l),d.forEach(l),o=H($),m=g($,"SPAN",{});var _=v(m);u=P(_,f[1]),_.forEach(l),$.forEach(l),this.h()},h(){x(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),x(n,"class",i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+f[0]),x(n,"role","status"),x(e,"class",a="flex justify-"+f[2]+" items-"+f[2]+" h-full w-full gap-5 pt-2")},m(r,$){k(r,e,$),c(e,n),c(n,t),c(t,s),c(e,o),c(e,m),c(m,u)},p(r,[$]){$&1&&i!==(i="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+r[0])&&x(n,"class",i),$&2&&$e(u,r[1]),$&4&&a!==(a="flex justify-"+r[2]+" items-"+r[2]+" h-full w-full gap-5 pt-2")&&x(e,"class",a)},i:M,o:M,d(r){r&&l(e)}}}function Be(f,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:i=re.start}=e;return f.$$set=o=>{"textCss"in o&&n(0,t=o.textCss),"label"in o&&n(1,s=o.label),"position"in o&&n(2,i=o.position)},[t,s,i]}class ee extends W{constructor(e){super(),q(this,e,Be,Me,X,{textCss:0,label:1,position:2})}}function Oe(f){let e,n,t,s,i,o,m,u,a,r,$,d,p,_,V,b,T,B,O,N,j,F,te,z,J;return o=new ee({}),d=new ee({props:{textCss:"text-primary-500"}}),B=new ee({props:{textCss:"text-secondary-500",position:re.center}}),z=new ee({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=h("div"),n=h("div"),t=h("h4"),s=S("default"),i=y(),w(o.$$.fragment),m=y(),u=h("div"),a=h("h4"),r=S("change color"),$=y(),w(d.$$.fragment),p=y(),_=h("div"),V=h("h4"),b=S("change position"),T=y(),w(B.$$.fragment),O=y(),N=h("div"),j=h("h4"),F=S("add text"),te=y(),w(z.$$.fragment),this.h()},l(L){e=g(L,"DIV",{class:!0});var R=v(e);n=g(R,"DIV",{});var G=v(n);t=g(G,"H4",{class:!0});var le=v(t);s=P(le,"default"),le.forEach(l),i=H(G),E(o.$$.fragment,G),G.forEach(l),m=H(R),u=g(R,"DIV",{});var K=v(u);a=g(K,"H4",{class:!0});var ie=v(a);r=P(ie,"change color"),ie.forEach(l),$=H(K),E(d.$$.fragment,K),K.forEach(l),p=H(R),_=g(R,"DIV",{});var Q=v(_);V=g(Q,"H4",{class:!0});var oe=v(V);b=P(oe,"change position"),oe.forEach(l),T=H(Q),E(B.$$.fragment,Q),Q.forEach(l),O=H(R),N=g(R,"DIV",{});var Y=v(N);j=g(Y,"H4",{class:!0});var ce=v(j);F=P(ce,"add text"),ce.forEach(l),te=H(Y),E(z.$$.fragment,Y),Y.forEach(l),R.forEach(l),this.h()},h(){x(t,"class","h4"),x(a,"class","h4"),x(V,"class","h4"),x(j,"class","h4"),x(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(L,R){k(L,e,R),c(e,n),c(n,t),c(t,s),c(n,i),I(o,n,null),c(e,m),c(e,u),c(u,a),c(a,r),c(u,$),I(d,u,null),c(e,p),c(e,_),c(_,V),c(V,b),c(_,T),I(B,_,null),c(e,O),c(e,N),c(N,j),c(j,F),c(N,te),I(z,N,null),J=!0},p:M,i(L){J||(C(o.$$.fragment,L),C(d.$$.fragment,L),C(B.$$.fragment,L),C(z.$$.fragment,L),J=!0)},o(L){A(o.$$.fragment,L),A(d.$$.fragment,L),A(B.$$.fragment,L),A(z.$$.fragment,L),J=!1},d(L){L&&l(e),D(o),D(d),D(B),D(z)}}}class Ne extends W{constructor(e){super(),q(this,e,null,Oe,X,{})}}const Re=`<script>
 import Spinner from "$lib/components/page/Spinner.svelte";
 import { Position } from "$lib/models/Enums";

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
 <Spinner textCss="text-secondary-500" position={Position.center} />
</div>


<div>
 <h4 class="h4">add text</h4>
 <Spinner textCss="text-surface-500" label="validation is running, please waiting until dead"/>
</div>

</div>`,me={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function je(f){let e,n,t,s,i,o,m,u,a,r,$,d;return n=new ve({props:{id:"description",label:"Description to understand what happen in the world",help:se}}),s=new _e({props:{id:"name",label:"Name of something important",help:se}}),{c(){e=h("div"),w(n.$$.fragment),t=y(),w(s.$$.fragment),i=y(),o=h("div"),m=h("div"),u=h("button"),a=S("help"),this.h()},l(p){e=g(p,"DIV",{class:!0});var _=v(e);E(n.$$.fragment,_),t=H(_),E(s.$$.fragment,_),_.forEach(l),i=H(p),o=g(p,"DIV",{});var V=v(o);m=g(V,"DIV",{});var b=v(m);u=g(b,"BUTTON",{type:!0,class:!0});var T=v(u);a=P(T,"help"),T.forEach(l),b.forEach(l),V.forEach(l),this.h()},h(){x(e,"class","p-5"),x(u,"type","button"),x(u,"class","btn variant-filled-warning")},m(p,_){k(p,e,_),I(n,e,null),c(e,t),I(s,e,null),k(p,i,_),k(p,o,_),c(o,m),c(m,u),c(u,a),r=!0,$||(d=ne(u,"click",f[0]),$=!0)},p:M,i(p){r||(C(n.$$.fragment,p),C(s.$$.fragment,p),r=!0)},o(p){A(n.$$.fragment,p),A(s.$$.fragment,p),r=!1},d(p){p&&l(e),D(n),D(s),p&&l(i),p&&l(o),$=!1,d()}}}function ze(f){let e,n;return e=new ae({props:{title:"Help Example",menu:!1,help:se,$$slots:{default:[je]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},p(t,[s]){const i={};s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}let se=!0;function Fe(f){let e=me.helpItems;return fe.setHelpItemList(e),[()=>{fe.toggle("name")}]}class Ue extends W{constructor(e){super(),q(this,e,Fe,ze,X,{})}}const We=`<script lang=ts>
import { HelpStore } from '$store/pagestore'
import type { HelpItem, HelpStoreType } from "$models/Models";

import Page from "$lib/components/page/Page.svelte";
import TextInput from '$lib/components/form/TextInput.svelte';
import TextArea from '$lib/components/form/TextArea.svelte'; 

import {HelpExampleData } from './data/help.js'
let helpItems:HelpItem[] = HelpExampleData.helpItems;
HelpStore.setHelpItemList(helpItems);

let helpItem:HelpItem = {name:'ShowHelpItem', description:'Lorem ipsum dolor sit ame'}

let help=true;

<\/script>

<Page title="Help Example" menu={false} {help}>
    <div class="p-5">
     
        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
 
        <TextInput  id="name" label="Name of something important" {help}/>

        
    </div>
    <div>
        <div>
            <button  type="button" class="btn variant-filled-warning" on:click={() => {HelpStore.toggle('name')}}>help</button>
        </div>

    </div>


</Page>`;function qe(f){let e,n;return e=new Ce({}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Xe(f){let e,n;return{c(){e=h("div"),n=S("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(l),this.h()},h(){x(e,"slot","info")},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function Je(f){let e,n;return e=new Ue({}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ge(f){let e,n;return{c(){e=h("div"),n=S("This example shows how to setup the help for your page"),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"This example shows how to setup the help for your page"),s.forEach(l),this.h()},h(){x(e,"slot","info")},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function Ke(f){let e,n;return e=new Ve({}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Qe(f){let e,n;return{c(){e=h("div"),n=S("The alerts are used to pass on messages to the user."),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"The alerts are used to pass on messages to the user."),s.forEach(l),this.h()},h(){x(e,"slot","info")},m(t,s){k(t,e,s),c(e,n)},p:M,d(t){t&&l(e)}}}function Ye(f){let e,n;return e=new Ne({}),{c(){w(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){I(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ze(f){let e,n,t,s,i,o,m,u;return m=new U({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=h("div"),n=h("p"),t=S("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=h("b"),i=S("color, size and position."),o=y(),w(m.$$.fragment),this.h()},l(a){e=g(a,"DIV",{slot:!0});var r=v(e);n=g(r,"P",{});var $=v(n);t=P($,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=g($,"B",{});var d=v(s);i=P(d,"color, size and position."),d.forEach(l),$.forEach(l),o=H(r),E(m.$$.fragment,r),r.forEach(l),this.h()},h(){x(e,"slot","info")},m(a,r){k(a,e,r),c(e,n),c(n,t),c(n,s),c(s,i),c(e,o),I(m,e,null),u=!0},p:M,i(a){u||(C(m.$$.fragment,a),u=!0)},o(a){A(m.$$.fragment,a),u=!1},d(a){a&&l(e),D(m)}}}function et(f){let e,n,t,s,i,o,m,u;return e=new Z({props:{title:"Page",svelte:Ae,$$slots:{info:[Xe],default:[qe]},$$scope:{ctx:f}}}),t=new Z({props:{title:"Help",svelte:We,json:JSON.stringify(me,void 0,2),$$slots:{info:[Ge],default:[Je]},$$scope:{ctx:f}}}),i=new Z({props:{title:"Alert",svelte:Le,$$slots:{info:[Qe],default:[Ke]},$$scope:{ctx:f}}}),m=new Z({props:{title:"Spinner",svelte:Re,$$slots:{info:[Ze],default:[Ye]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment),n=y(),w(t.$$.fragment),s=y(),w(i.$$.fragment),o=y(),w(m.$$.fragment)},l(a){E(e.$$.fragment,a),n=H(a),E(t.$$.fragment,a),s=H(a),E(i.$$.fragment,a),o=H(a),E(m.$$.fragment,a)},m(a,r){I(e,a,r),k(a,n,r),I(t,a,r),k(a,s,r),I(i,a,r),k(a,o,r),I(m,a,r),u=!0},p(a,r){const $={};r&1&&($.$$scope={dirty:r,ctx:a}),e.$set($);const d={};r&1&&(d.$$scope={dirty:r,ctx:a}),t.$set(d);const p={};r&1&&(p.$$scope={dirty:r,ctx:a}),i.$set(p);const _={};r&1&&(_.$$scope={dirty:r,ctx:a}),m.$set(_)},i(a){u||(C(e.$$.fragment,a),C(t.$$.fragment,a),C(i.$$.fragment,a),C(m.$$.fragment,a),u=!0)},o(a){A(e.$$.fragment,a),A(t.$$.fragment,a),A(i.$$.fragment,a),A(m.$$.fragment,a),u=!1},d(a){D(e,a),a&&l(n),D(t,a),a&&l(s),D(i,a),a&&l(o),D(m,a)}}}function tt(f){let e,n,t;return n=new ae({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[et]},$$scope:{ctx:f}}}),{c(){e=h("div"),w(n.$$.fragment),this.h()},l(s){e=g(s,"DIV",{id:!0});var i=v(e);E(n.$$.fragment,i),i.forEach(l),this.h()},h(){x(e,"id","toc-target")},m(s,i){k(s,e,i),I(n,e,null),t=!0},p(s,[i]){const o={};i&1&&(o.$$scope={dirty:i,ctx:s}),n.$set(o)},i(s){t||(C(n.$$.fragment,s),t=!0)},o(s){A(n.$$.fragment,s),t=!1},d(s){s&&l(e),D(n)}}}class ct extends W{constructor(e){super(),q(this,e,null,tt,X,{})}}export{ct as component,ot as universal};
