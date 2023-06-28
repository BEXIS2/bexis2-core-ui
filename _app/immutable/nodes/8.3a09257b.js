import{s as je,P as Be,H as Me,a as ne}from"../chunks/Page.a68dac81.js";import{S as oe,i as ie,s as ce,y as k,z as A,A as S,g as T,d as P,B as V,k as h,q as I,l as $,m as g,r as y,h as a,b,D as r,W as U,n as w,a as E,c as x,M as Z,O as Le,u as Ne}from"../chunks/index.0dcca97d.js";import{C as $e}from"../chunks/CodeContainer.6c1d2ac6.js";import{A as re}from"../chunks/Alert.826e3f19.js";import{F as Pe,f as Ue,a as Re}from"../chunks/index.e8b7319d.js";import{T as ze,a as Fe}from"../chunks/TextArea.0eb5f4aa.js";function We(){return console.log("load and set apiconfig"),console.log("PROD"),je("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"}));function qe(f){let e,n;return{c(){e=h("div"),n=I("My Content HERE")},l(t){e=$(t,"DIV",{});var s=g(e);n=y(s,"My Content HERE"),s.forEach(a)},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function Xe(f){let e,n,t;return{c(){e=h("div"),n=h("p"),t=I("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=$(s,"DIV",{slot:!0});var c=g(e);n=$(c,"P",{});var p=g(n);t=y(p,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),p.forEach(a),c.forEach(a),this.h()},h(){w(e,"slot","description")},m(s,c){b(s,e,c),r(e,n),r(n,t)},p:U,d(s){s&&a(e)}}}function Je(f){let e,n;return e=new Be({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:f[0],menu:!1,help:!1,$$slots:{description:[Xe],default:[qe]},$$scope:{ctx:f}}}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},p(t,[s]){const c={};s&2&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ge(f){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class Ke extends oe{constructor(e){super(),ie(this,e,Ge,Je,ce,{})}}const Qe=`<script lang="ts">
 import Page from "$lib/components/page/Page.svelte";
 import type { Link } from "$lib/models/Models";

let links:Link[] = [{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]


<\/script>

<Page 
title="Create a Dataset" 
note="On this page you can create a dataset based on a template. please select on template and fill out the form." 
{links}
menu={false}
help={false}>

<div slot="description">

 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
 
</div>

<!-- your Page content -->
<div>My Content HERE</div>

</Page>`;function Ye(f){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function Ze(f){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function et(f){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=$(t,"B",{});var s=g(e);n=y(s,"test"),s.forEach(a)},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function tt(f){let e,n,t,s,c,p,u,m,l,i,v,d,_,C,M;return{c(){e=h("h3"),n=I("Alert with a complex message"),t=E(),s=h("p"),c=I("inside the Alert messsage everthing goes to the slot in the message block"),p=E(),u=h("ul"),m=h("li"),l=I("note 1"),i=E(),v=h("li"),d=I("note 2"),_=E(),C=h("li"),M=I("note 3"),this.h()},l(H){e=$(H,"H3",{class:!0});var D=g(e);n=y(D,"Alert with a complex message"),D.forEach(a),t=x(H),s=$(H,"P",{});var L=g(s);c=y(L,"inside the Alert messsage everthing goes to the slot in the message block"),L.forEach(a),p=x(H),u=$(H,"UL",{class:!0});var R=g(u);m=$(R,"LI",{});var j=g(m);l=y(j,"note 1"),j.forEach(a),i=x(R),v=$(R,"LI",{});var z=g(v);d=y(z,"note 2"),z.forEach(a),_=x(R),C=$(R,"LI",{});var F=g(C);M=y(F,"note 3"),F.forEach(a),R.forEach(a),this.h()},h(){w(e,"class","h3"),w(u,"class","list-disc pl-5")},m(H,D){b(H,e,D),r(e,n),b(H,t,D),b(H,s,D),r(s,c),b(H,p,D),b(H,u,D),r(u,m),r(m,l),r(u,i),r(u,v),r(v,d),r(u,_),r(u,C),r(C,M)},p:U,d(H){H&&a(e),H&&a(t),H&&a(s),H&&a(p),H&&a(u)}}}function nt(f){let e,n,t,s,c,p,u,m,l;return t=new Pe({props:{icon:Ue}}),p=new Pe({props:{icon:Re}}),{c(){e=h("div"),n=h("button"),k(t.$$.fragment),s=E(),c=h("button"),k(p.$$.fragment),this.h()},l(i){e=$(i,"DIV",{class:!0,slot:!0});var v=g(e);n=$(v,"BUTTON",{class:!0});var d=g(n);A(t.$$.fragment,d),d.forEach(a),s=x(v),c=$(v,"BUTTON",{class:!0});var _=g(c);A(p.$$.fragment,_),_.forEach(a),v.forEach(a),this.h()},h(){w(n,"class","btn hover:text-primary-100"),w(c,"class","btn hover:text-primary-100"),w(e,"class","flex gap-2"),w(e,"slot","actions")},m(i,v){b(i,e,v),r(e,n),S(t,n,null),r(e,s),r(e,c),S(p,c,null),u=!0,m||(l=[Z(n,"click",f[0]),Z(c,"click",f[1])],m=!0)},p:U,i(i){u||(T(t.$$.fragment,i),T(p.$$.fragment,i),u=!0)},o(i){P(t.$$.fragment,i),P(p.$$.fragment,i),u=!1},d(i){i&&a(e),V(t),V(p),m=!1,Le(l)}}}function st(f){let e,n,t,s,c,p,u,m,l,i,v;return n=new re({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[Ye]},$$scope:{ctx:f}}}),s=new re({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ze]},$$scope:{ctx:f}}}),p=new re({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[et]},$$scope:{ctx:f}}}),m=new re({props:{cssClass:"variant-ringed-success",$$slots:{default:[tt]},$$scope:{ctx:f}}}),i=new re({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[nt]},$$scope:{ctx:f}}}),{c(){e=h("div"),k(n.$$.fragment),t=E(),k(s.$$.fragment),c=E(),k(p.$$.fragment),u=E(),k(m.$$.fragment),l=E(),k(i.$$.fragment),this.h()},l(d){e=$(d,"DIV",{class:!0});var _=g(e);A(n.$$.fragment,_),t=x(_),A(s.$$.fragment,_),c=x(_),A(p.$$.fragment,_),u=x(_),A(m.$$.fragment,_),l=x(_),A(i.$$.fragment,_),_.forEach(a),this.h()},h(){w(e,"class","grid grid-cols-1 gap-2")},m(d,_){b(d,e,_),S(n,e,null),r(e,t),S(s,e,null),r(e,c),S(p,e,null),r(e,u),S(m,e,null),r(e,l),S(i,e,null),v=!0},p(d,[_]){const C={};_&4&&(C.$$scope={dirty:_,ctx:d}),n.$set(C);const M={};_&4&&(M.$$scope={dirty:_,ctx:d}),s.$set(M);const H={};_&4&&(H.$$scope={dirty:_,ctx:d}),p.$set(H);const D={};_&4&&(D.$$scope={dirty:_,ctx:d}),m.$set(D);const L={};_&4&&(L.$$scope={dirty:_,ctx:d}),i.$set(L)},i(d){v||(T(n.$$.fragment,d),T(s.$$.fragment,d),T(p.$$.fragment,d),T(m.$$.fragment,d),T(i.$$.fragment,d),v=!0)},o(d){P(n.$$.fragment,d),P(s.$$.fragment,d),P(p.$$.fragment,d),P(m.$$.fragment,d),P(i.$$.fragment,d),v=!1},d(d){d&&a(e),V(n),V(s),V(p),V(m),V(i)}}}function at(f){return[()=>alert("edit"),()=>alert("something else")]}class lt extends oe{constructor(e){super(),ie(this,e,at,st,ce,{})}}const rt=`<script>
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
`;var we=(f=>(f.start="start",f.end="end",f.center="center",f))(we||{});function ot(f){let e,n,t,s,c,p,u,m,l;return{c(){e=h("div"),n=h("div"),t=h("span"),s=I("Loading..."),p=E(),u=h("span"),m=I(f[1]),this.h()},l(i){e=$(i,"DIV",{class:!0});var v=g(e);n=$(v,"DIV",{class:!0,role:!0});var d=g(n);t=$(d,"SPAN",{class:!0});var _=g(t);s=y(_,"Loading..."),_.forEach(a),d.forEach(a),p=x(v),u=$(v,"SPAN",{});var C=g(u);m=y(C,f[1]),C.forEach(a),v.forEach(a),this.h()},h(){w(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),w(n,"class",c="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+f[0]),w(n,"role","status"),w(e,"class",l="flex justify-"+f[2]+" items-"+f[2]+" h-full w-full gap-5 pt-2")},m(i,v){b(i,e,v),r(e,n),r(n,t),r(t,s),r(e,p),r(e,u),r(u,m)},p(i,[v]){v&1&&c!==(c="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+i[0])&&w(n,"class",c),v&2&&Ne(m,i[1]),v&4&&l!==(l="flex justify-"+i[2]+" items-"+i[2]+" h-full w-full gap-5 pt-2")&&w(e,"class",l)},i:U,o:U,d(i){i&&a(e)}}}function it(f,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:c=we.start}=e;return f.$$set=p=>{"textCss"in p&&n(0,t=p.textCss),"label"in p&&n(1,s=p.label),"position"in p&&n(2,c=p.position)},[t,s,c]}class ge extends oe{constructor(e){super(),ie(this,e,it,ot,ce,{textCss:0,label:1,position:2})}}function ct(f){let e,n,t,s,c,p,u,m,l,i,v,d,_,C,M,H,D,L,R,j,z,F,ee,X,J;return p=new ge({}),d=new ge({props:{textCss:"text-primary-500"}}),L=new ge({props:{textCss:"text-secondary-500",position:we.center}}),X=new ge({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=h("div"),n=h("div"),t=h("h4"),s=I("default"),c=E(),k(p.$$.fragment),u=E(),m=h("div"),l=h("h4"),i=I("change color"),v=E(),k(d.$$.fragment),_=E(),C=h("div"),M=h("h4"),H=I("change position"),D=E(),k(L.$$.fragment),R=E(),j=h("div"),z=h("h4"),F=I("add text"),ee=E(),k(X.$$.fragment),this.h()},l(O){e=$(O,"DIV",{class:!0});var N=g(e);n=$(N,"DIV",{});var W=g(n);t=$(W,"H4",{class:!0});var G=g(t);s=y(G,"default"),G.forEach(a),c=x(W),A(p.$$.fragment,W),W.forEach(a),u=x(N),m=$(N,"DIV",{});var Y=g(m);l=$(Y,"H4",{class:!0});var se=g(l);i=y(se,"change color"),se.forEach(a),v=x(Y),A(d.$$.fragment,Y),Y.forEach(a),_=x(N),C=$(N,"DIV",{});var q=g(C);M=$(q,"H4",{class:!0});var ae=g(M);H=y(ae,"change position"),ae.forEach(a),D=x(q),A(L.$$.fragment,q),q.forEach(a),R=x(N),j=$(N,"DIV",{});var Q=g(j);z=$(Q,"H4",{class:!0});var K=g(z);F=y(K,"add text"),K.forEach(a),ee=x(Q),A(X.$$.fragment,Q),Q.forEach(a),N.forEach(a),this.h()},h(){w(t,"class","h4"),w(l,"class","h4"),w(M,"class","h4"),w(z,"class","h4"),w(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(O,N){b(O,e,N),r(e,n),r(n,t),r(t,s),r(n,c),S(p,n,null),r(e,u),r(e,m),r(m,l),r(l,i),r(m,v),S(d,m,null),r(e,_),r(e,C),r(C,M),r(M,H),r(C,D),S(L,C,null),r(e,R),r(e,j),r(j,z),r(z,F),r(j,ee),S(X,j,null),J=!0},p:U,i(O){J||(T(p.$$.fragment,O),T(d.$$.fragment,O),T(L.$$.fragment,O),T(X.$$.fragment,O),J=!0)},o(O){P(p.$$.fragment,O),P(d.$$.fragment,O),P(L.$$.fragment,O),P(X.$$.fragment,O),J=!1},d(O){O&&a(e),V(p),V(d),V(L),V(X)}}}class ft extends oe{constructor(e){super(),ie(this,e,null,ct,ce,{})}}const pt=`<script>
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

</div>`,Oe={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function ut(f){let e,n,t,s,c,p,u,m,l,i,v,d,_,C,M,H,D,L,R,j,z,F,ee,X,J,O,N,W,G,Y,se,q,ae,Q,K,ve,fe,le,_e,pe,te,ue,be,Ee;return L=new ze({props:{id:"name",label:"Name of something important",help:Ve}}),j=new Fe({props:{id:"description",label:"Description to understand what happen in the world",help:Ve}}),te=new Me({}),{c(){e=h("h3"),n=I("Basic Useage"),t=E(),s=h("div"),c=h("p"),p=I("Name"),u=E(),m=h("p"),l=I("Description"),i=E(),v=h("h3"),d=I("Use with Inputs"),_=E(),C=h("p"),M=I("Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),H=E(),D=h("div"),k(L.$$.fragment),R=E(),k(j.$$.fragment),z=E(),F=h("h3"),ee=I("Toggle"),X=E(),J=h("p"),O=I("If you need the help to show on a click event, you can toggle it"),N=E(),W=h("div"),G=h("button"),Y=I("name"),se=E(),q=h("button"),ae=I("description"),Q=E(),K=h("h3"),ve=I("Output"),fe=E(),le=h("p"),_e=I("this is just for demo the output is part of the page component"),pe=E(),k(te.$$.fragment),this.h()},l(o){e=$(o,"H3",{class:!0});var B=g(e);n=y(B,"Basic Useage"),B.forEach(a),t=x(o),s=$(o,"DIV",{class:!0});var me=g(s);c=$(me,"P",{class:!0,id:!0});var xe=g(c);p=y(xe,"Name"),xe.forEach(a),u=x(me),m=$(me,"P",{class:!0,id:!0});var Ie=g(m);l=y(Ie,"Description"),Ie.forEach(a),me.forEach(a),i=x(o),v=$(o,"H3",{class:!0});var ye=g(v);d=y(ye,"Use with Inputs"),ye.forEach(a),_=x(o),C=$(o,"P",{});var Ce=g(C);M=y(Ce,"Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them."),Ce.forEach(a),H=x(o),D=$(o,"DIV",{class:!0});var de=g(D);A(L.$$.fragment,de),R=x(de),A(j.$$.fragment,de),de.forEach(a),z=x(o),F=$(o,"H3",{class:!0});var He=g(F);ee=y(He,"Toggle"),He.forEach(a),X=x(o),J=$(o,"P",{});var De=g(J);O=y(De,"If you need the help to show on a click event, you can toggle it"),De.forEach(a),N=x(o),W=$(o,"DIV",{class:!0});var he=g(W);G=$(he,"BUTTON",{type:!0,class:!0});var ke=g(G);Y=y(ke,"name"),ke.forEach(a),se=x(he),q=$(he,"BUTTON",{type:!0,class:!0});var Ae=g(q);ae=y(Ae,"description"),Ae.forEach(a),he.forEach(a),Q=x(o),K=$(o,"H3",{class:!0});var Se=g(K);ve=y(Se,"Output"),Se.forEach(a),fe=x(o),le=$(o,"P",{});var Te=g(le);_e=y(Te,"this is just for demo the output is part of the page component"),Te.forEach(a),pe=x(o),A(te.$$.fragment,o),this.h()},h(){w(e,"class","h3"),w(c,"class","p-5"),w(c,"id","name"),w(m,"class","p-5"),w(m,"id","description"),w(s,"class","p-5"),w(v,"class","h3"),w(D,"class","p-5"),w(F,"class","h3"),w(G,"type","button"),w(G,"class","btn variant-filled-warning"),w(q,"type","button"),w(q,"class","btn variant-filled-warning"),w(W,"class","p-5"),w(K,"class","h3")},m(o,B){b(o,e,B),r(e,n),b(o,t,B),b(o,s,B),r(s,c),r(c,p),r(s,u),r(s,m),r(m,l),b(o,i,B),b(o,v,B),r(v,d),b(o,_,B),b(o,C,B),r(C,M),b(o,H,B),b(o,D,B),S(L,D,null),r(D,R),S(j,D,null),b(o,z,B),b(o,F,B),r(F,ee),b(o,X,B),b(o,J,B),r(J,O),b(o,N,B),b(o,W,B),r(W,G),r(G,Y),r(W,se),r(W,q),r(q,ae),b(o,Q,B),b(o,K,B),r(K,ve),b(o,fe,B),b(o,le,B),r(le,_e),b(o,pe,B),S(te,o,B),ue=!0,be||(Ee=[Z(c,"mouseover",f[0]),Z(c,"mouseout",f[1]),Z(m,"mouseover",f[2]),Z(m,"mouseout",f[3]),Z(G,"click",f[4]),Z(q,"click",f[5])],be=!0)},p:U,i(o){ue||(T(L.$$.fragment,o),T(j.$$.fragment,o),T(te.$$.fragment,o),ue=!0)},o(o){P(L.$$.fragment,o),P(j.$$.fragment,o),P(te.$$.fragment,o),ue=!1},d(o){o&&a(e),o&&a(t),o&&a(s),o&&a(i),o&&a(v),o&&a(_),o&&a(C),o&&a(H),o&&a(D),V(L),V(j),o&&a(z),o&&a(F),o&&a(X),o&&a(J),o&&a(N),o&&a(W),o&&a(Q),o&&a(K),o&&a(fe),o&&a(le),o&&a(pe),V(te,o),be=!1,Le(Ee)}}}let Ve=!0;function mt(f){let e=Oe.helpItems;return ne.setHelpItemList(e),[()=>{ne.show("name")},()=>{ne.hide()},()=>{ne.show("description")},()=>{ne.hide()},()=>{ne.toggle("name")},()=>{ne.toggle("description")}]}class dt extends oe{constructor(e){super(),ie(this,e,mt,ut,ce,{})}}const ht=`<script lang=ts>
import { HelpStore } from '$store/pagestore'
import type { HelpItem, HelpStoreType } from "$models/Models";

import Help from "$lib/components/page/Help.svelte";
import TextInput from '$lib/components/form/TextInput.svelte';
import TextArea from '$lib/components/form/TextArea.svelte'; 

//Import the list of help items from a file 
import { HelpExampleData } from './data/help.js'
let helpItems:HelpItem[] = HelpExampleData.helpItems;

//Set list of help items and clear selection
HelpStore.setHelpItemList(helpItems);

let help=true;

<\/script>
<h3 class="h3">Basic Useage</h3>

    <div class="p-5">     
        <p class="p-5" id="name" on:mouseover={() => {HelpStore.show('name')}} on:mouseout={() => {HelpStore.hide()}}>Name</p>

        <p class="p-5" id="description" on:mouseover={() => {HelpStore.show('description')}} on:mouseout={() => {HelpStore.hide()}}>Description</p>
    </div>

<h3 class="h3">Use with Inputs</h3>
<p>Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them.</p>

    <div class="p-5">     
        <TextInput  id="name" label="Name of something important" {help}/>

        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
    </div>

<h3 class="h3">Toggle</h3>
<p>If you need the help to show on a click event, you can toggle it</p>

    <div class="p-5">
        <button  type="button" class="btn variant-filled-warning" on:click={() => {HelpStore.toggle('name')}}>name</button>

        <button  type="button" class="btn variant-filled-warning" on:click={() => {HelpStore.toggle('description')}}>description</button>
    </div>
    
<h3 class="h3">Output</h3>
<p>this is just for demo the output is part of the page component</p>

    <Help/>`;function $t(f){let e,n;return e=new Ke({}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function gt(f){let e,n;return{c(){e=h("div"),n=I("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function vt(f){let e,n;return e=new dt({}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function _t(f){let e,n;return{c(){e=h("div"),n=I("This example shows how to setup the help for your page"),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"This example shows how to setup the help for your page"),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function bt(f){let e,n;return e=new lt({}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function wt(f){let e,n;return{c(){e=h("div"),n=I("The alerts are used to pass on messages to the user."),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=g(e);n=y(s,"The alerts are used to pass on messages to the user."),s.forEach(a),this.h()},h(){w(e,"slot","info")},m(t,s){b(t,e,s),r(e,n)},p:U,d(t){t&&a(e)}}}function Et(f){let e,n;return e=new ft({}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function xt(f){let e,n,t,s,c,p,u,m;return u=new re({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=h("div"),n=h("p"),t=I("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=h("b"),c=I("color, size and position."),p=E(),k(u.$$.fragment),this.h()},l(l){e=$(l,"DIV",{slot:!0});var i=g(e);n=$(i,"P",{});var v=g(n);t=y(v,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=$(v,"B",{});var d=g(s);c=y(d,"color, size and position."),d.forEach(a),v.forEach(a),p=x(i),A(u.$$.fragment,i),i.forEach(a),this.h()},h(){w(e,"slot","info")},m(l,i){b(l,e,i),r(e,n),r(n,t),r(n,s),r(s,c),r(e,p),S(u,e,null),m=!0},p:U,i(l){m||(T(u.$$.fragment,l),m=!0)},o(l){P(u.$$.fragment,l),m=!1},d(l){l&&a(e),V(u)}}}function It(f){let e,n,t,s,c,p,u,m;return e=new $e({props:{title:"Page",svelte:Qe,$$slots:{info:[gt],default:[$t]},$$scope:{ctx:f}}}),t=new $e({props:{title:"Help",svelte:ht,json:JSON.stringify(Oe,void 0,2),$$slots:{info:[_t],default:[vt]},$$scope:{ctx:f}}}),c=new $e({props:{title:"Alert",svelte:rt,$$slots:{info:[wt],default:[bt]},$$scope:{ctx:f}}}),u=new $e({props:{title:"Spinner",svelte:pt,$$slots:{info:[xt],default:[Et]},$$scope:{ctx:f}}}),{c(){k(e.$$.fragment),n=E(),k(t.$$.fragment),s=E(),k(c.$$.fragment),p=E(),k(u.$$.fragment)},l(l){A(e.$$.fragment,l),n=x(l),A(t.$$.fragment,l),s=x(l),A(c.$$.fragment,l),p=x(l),A(u.$$.fragment,l)},m(l,i){S(e,l,i),b(l,n,i),S(t,l,i),b(l,s,i),S(c,l,i),b(l,p,i),S(u,l,i),m=!0},p(l,i){const v={};i&1&&(v.$$scope={dirty:i,ctx:l}),e.$set(v);const d={};i&1&&(d.$$scope={dirty:i,ctx:l}),t.$set(d);const _={};i&1&&(_.$$scope={dirty:i,ctx:l}),c.$set(_);const C={};i&1&&(C.$$scope={dirty:i,ctx:l}),u.$set(C)},i(l){m||(T(e.$$.fragment,l),T(t.$$.fragment,l),T(c.$$.fragment,l),T(u.$$.fragment,l),m=!0)},o(l){P(e.$$.fragment,l),P(t.$$.fragment,l),P(c.$$.fragment,l),P(u.$$.fragment,l),m=!1},d(l){V(e,l),l&&a(n),V(t,l),l&&a(s),V(c,l),l&&a(p),V(u,l)}}}function yt(f){let e,n,t;return n=new Be({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.",menu:!1,$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){e=h("div"),k(n.$$.fragment),this.h()},l(s){e=$(s,"DIV",{id:!0});var c=g(e);A(n.$$.fragment,c),c.forEach(a),this.h()},h(){w(e,"id","toc-target")},m(s,c){b(s,e,c),S(n,e,null),t=!0},p(s,[c]){const p={};c&1&&(p.$$scope={dirty:c,ctx:s}),n.$set(p)},i(s){t||(T(n.$$.fragment,s),t=!0)},o(s){P(n.$$.fragment,s),t=!1},d(s){s&&a(e),V(n)}}}class Pt extends oe{constructor(e){super(),ie(this,e,null,yt,ce,{})}}export{Pt as component,Tt as universal};
