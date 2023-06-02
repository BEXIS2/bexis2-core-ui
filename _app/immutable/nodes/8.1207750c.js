import{S as H,i as S,s as U,y as b,z as E,A as w,g as C,d as A,B as k,k as d,q as x,l as g,m as h,r as D,h as l,b as v,D as f,W as B,n as I,a as y,c as L,M as X,O as J}from"../chunks/index.05f6e2c5.js";import{C as z}from"../chunks/CodeContainer.5f6520ac.js";import{P as G}from"../chunks/Page.01348b07.js";import{A as R}from"../chunks/Alert.99294793.js";import{F as j,f as K,a as Q}from"../chunks/index.d61edf24.js";function Y(o){let e,n;return{c(){e=d("div"),n=x("My Content HERE")},l(t){e=g(t,"DIV",{});var s=h(e);n=D(s,"My Content HERE"),s.forEach(l)},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function Z(o){let e,n,t;return{c(){e=d("div"),n=d("p"),t=x("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=g(s,"DIV",{slot:!0});var a=h(e);n=g(a,"P",{});var r=h(n);t=D(r,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),r.forEach(l),a.forEach(l),this.h()},h(){I(e,"slot","description")},m(s,a){v(s,e,a),f(e,n),f(n,t)},p:B,d(s){s&&l(e)}}}function ee(o){let e,n;return e=new G({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:o[0],$$slots:{description:[Z],default:[Y]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function te(o){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class se extends H{constructor(e){super(),S(this,e,te,ee,U,{})}}const ne=`<script lang="ts">
 import Page from "$lib/components/page/Page.svelte";
 import type { Link } from "$lib/models/Models";

let links:Link[] = [{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]


<\/script>

<Page 
title="Create a Dataset" 
note="On this page you can create a dataset based on a template. please select on template and fill out the form." 
{links}>

<div slot="description">

 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
 
</div>

<!-- your Page content -->
<div>My Content HERE</div>

</Page>`;function ae(o){let e,n;return{c(){e=d("b"),n=x("test")},l(t){e=g(t,"B",{});var s=h(e);n=D(s,"test"),s.forEach(l)},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function re(o){let e,n;return{c(){e=d("b"),n=x("test")},l(t){e=g(t,"B",{});var s=h(e);n=D(s,"test"),s.forEach(l)},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function le(o){let e,n;return{c(){e=d("b"),n=x("test")},l(t){e=g(t,"B",{});var s=h(e);n=D(s,"test"),s.forEach(l)},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function oe(o){let e,n,t,s,a,r,m,u,M,$,_,i,c,V,T;return{c(){e=d("h3"),n=x("Alert with a complex message"),t=y(),s=d("p"),a=x("inside the Alert messsage everthing goes to the slot in the message block"),r=y(),m=d("ul"),u=d("li"),M=x("note 1"),$=y(),_=d("li"),i=x("note 2"),c=y(),V=d("li"),T=x("note 3"),this.h()},l(p){e=g(p,"H3",{class:!0});var P=h(e);n=D(P,"Alert with a complex message"),P.forEach(l),t=L(p),s=g(p,"P",{});var O=h(s);a=D(O,"inside the Alert messsage everthing goes to the slot in the message block"),O.forEach(l),r=L(p),m=g(p,"UL",{class:!0});var F=h(m);u=g(F,"LI",{});var W=h(u);M=D(W,"note 1"),W.forEach(l),$=L(F),_=g(F,"LI",{});var q=h(_);i=D(q,"note 2"),q.forEach(l),c=L(F),V=g(F,"LI",{});var N=h(V);T=D(N,"note 3"),N.forEach(l),F.forEach(l),this.h()},h(){I(e,"class","h3"),I(m,"class","list-disc pl-5")},m(p,P){v(p,e,P),f(e,n),v(p,t,P),v(p,s,P),f(s,a),v(p,r,P),v(p,m,P),f(m,u),f(u,M),f(m,$),f(m,_),f(_,i),f(m,c),f(m,V),f(V,T)},p:B,d(p){p&&l(e),p&&l(t),p&&l(s),p&&l(r),p&&l(m)}}}function ie(o){let e,n,t,s,a,r,m,u,M;return t=new j({props:{icon:K}}),r=new j({props:{icon:Q}}),{c(){e=d("div"),n=d("button"),b(t.$$.fragment),s=y(),a=d("button"),b(r.$$.fragment),this.h()},l($){e=g($,"DIV",{class:!0,slot:!0});var _=h(e);n=g(_,"BUTTON",{class:!0});var i=h(n);E(t.$$.fragment,i),i.forEach(l),s=L(_),a=g(_,"BUTTON",{class:!0});var c=h(a);E(r.$$.fragment,c),c.forEach(l),_.forEach(l),this.h()},h(){I(n,"class","btn hover:text-primary-100"),I(a,"class","btn hover:text-primary-100"),I(e,"class","flex gap-2"),I(e,"slot","actions")},m($,_){v($,e,_),f(e,n),w(t,n,null),f(e,s),f(e,a),w(r,a,null),m=!0,u||(M=[X(n,"click",o[0]),X(a,"click",o[1])],u=!0)},p:B,i($){m||(C(t.$$.fragment,$),C(r.$$.fragment,$),m=!0)},o($){A(t.$$.fragment,$),A(r.$$.fragment,$),m=!1},d($){$&&l(e),k(t),k(r),u=!1,J(M)}}}function ce(o){let e,n,t,s,a,r,m,u,M,$,_;return n=new R({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[ae]},$$scope:{ctx:o}}}),s=new R({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[re]},$$scope:{ctx:o}}}),r=new R({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[le]},$$scope:{ctx:o}}}),u=new R({props:{cssClass:"variant-ringed-success",$$slots:{default:[oe]},$$scope:{ctx:o}}}),$=new R({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[ie]},$$scope:{ctx:o}}}),{c(){e=d("div"),b(n.$$.fragment),t=y(),b(s.$$.fragment),a=y(),b(r.$$.fragment),m=y(),b(u.$$.fragment),M=y(),b($.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var c=h(e);E(n.$$.fragment,c),t=L(c),E(s.$$.fragment,c),a=L(c),E(r.$$.fragment,c),m=L(c),E(u.$$.fragment,c),M=L(c),E($.$$.fragment,c),c.forEach(l),this.h()},h(){I(e,"class","grid grid-cols-1 gap-2")},m(i,c){v(i,e,c),w(n,e,null),f(e,t),w(s,e,null),f(e,a),w(r,e,null),f(e,m),w(u,e,null),f(e,M),w($,e,null),_=!0},p(i,[c]){const V={};c&4&&(V.$$scope={dirty:c,ctx:i}),n.$set(V);const T={};c&4&&(T.$$scope={dirty:c,ctx:i}),s.$set(T);const p={};c&4&&(p.$$scope={dirty:c,ctx:i}),r.$set(p);const P={};c&4&&(P.$$scope={dirty:c,ctx:i}),u.$set(P);const O={};c&4&&(O.$$scope={dirty:c,ctx:i}),$.$set(O)},i(i){_||(C(n.$$.fragment,i),C(s.$$.fragment,i),C(r.$$.fragment,i),C(u.$$.fragment,i),C($.$$.fragment,i),_=!0)},o(i){A(n.$$.fragment,i),A(s.$$.fragment,i),A(r.$$.fragment,i),A(u.$$.fragment,i),A($.$$.fragment,i),_=!1},d(i){i&&l(e),k(n),k(s),k(r),k(u),k($)}}}function fe(o){return[()=>alert("edit"),()=>alert("something else")]}class $e extends H{constructor(e){super(),S(this,e,fe,ce,U,{})}}const me=`<script>
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
`;function ue(o){let e,n;return e=new se({}),{c(){b(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function pe(o){let e,n;return{c(){e=d("div"),n=x("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=h(e);n=D(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(l),this.h()},h(){I(e,"slot","info")},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function de(o){let e,n;return e=new $e({}),{c(){b(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ge(o){let e,n;return{c(){e=d("div"),n=x("The alerts are used to pass on messages to the user."),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=h(e);n=D(s,"The alerts are used to pass on messages to the user."),s.forEach(l),this.h()},h(){I(e,"slot","info")},m(t,s){v(t,e,s),f(e,n)},p:B,d(t){t&&l(e)}}}function he(o){let e,n,t,s;return e=new z({props:{title:"Page",svelte:ne,$$slots:{info:[pe],default:[ue]},$$scope:{ctx:o}}}),t=new z({props:{title:"Alert",svelte:me,$$slots:{info:[ge],default:[de]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment),n=y(),b(t.$$.fragment)},l(a){E(e.$$.fragment,a),n=L(a),E(t.$$.fragment,a)},m(a,r){w(e,a,r),v(a,n,r),w(t,a,r),s=!0},p(a,r){const m={};r&1&&(m.$$scope={dirty:r,ctx:a}),e.$set(m);const u={};r&1&&(u.$$scope={dirty:r,ctx:a}),t.$set(u)},i(a){s||(C(e.$$.fragment,a),C(t.$$.fragment,a),s=!0)},o(a){A(e.$$.fragment,a),A(t.$$.fragment,a),s=!1},d(a){k(e,a),a&&l(n),k(t,a)}}}function _e(o){let e,n,t;return n=new G({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.  ",$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){e=d("div"),b(n.$$.fragment),this.h()},l(s){e=g(s,"DIV",{id:!0});var a=h(e);E(n.$$.fragment,a),a.forEach(l),this.h()},h(){I(e,"id","toc-target")},m(s,a){v(s,e,a),w(n,e,null),t=!0},p(s,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:s}),n.$set(r)},i(s){t||(C(n.$$.fragment,s),t=!0)},o(s){A(n.$$.fragment,s),t=!1},d(s){s&&l(e),k(n)}}}class Ae extends H{constructor(e){super(),S(this,e,null,_e,U,{})}}export{Ae as component};
