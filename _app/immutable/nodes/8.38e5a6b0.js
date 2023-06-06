import{S as j,i as q,s as X,y as x,z as C,A,g as k,d as D,B as y,k as h,q as I,l as g,m as v,r as P,h as o,b as S,D as i,W as F,n as b,a as E,c as w,M as ie,O as fe,u as de}from"../chunks/index.bfb1ec04.js";import{C as te}from"../chunks/CodeContainer.b6387f9b.js";import{P as ce}from"../chunks/Page.f3dc7065.js";import{A as W}from"../chunks/Alert.29d5e22d.js";import{F as oe,f as ue,a as me}from"../chunks/index.5801dd70.js";function $e(c){let e,n;return{c(){e=h("div"),n=I("My Content HERE")},l(t){e=g(t,"DIV",{});var s=v(e);n=P(s,"My Content HERE"),s.forEach(o)},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function pe(c){let e,n,t;return{c(){e=h("div"),n=h("p"),t=I("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(s){e=g(s,"DIV",{slot:!0});var r=v(e);n=g(r,"P",{});var l=v(n);t=P(l,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),l.forEach(o),r.forEach(o),this.h()},h(){b(e,"slot","description")},m(s,r){S(s,e,r),i(e,n),i(n,t)},p:F,d(s){s&&o(e)}}}function he(c){let e,n;return e=new ce({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:c[0],$$slots:{description:[pe],default:[$e]},$$scope:{ctx:c}}}),{c(){x(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},p(t,[s]){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ge(c){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class ve extends j{constructor(e){super(),q(this,e,ge,he,X,{})}}const _e=`<script lang="ts">
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

</Page>`;function be(c){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(o)},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function Ee(c){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(o)},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function we(c){let e,n;return{c(){e=h("b"),n=I("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(o)},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function xe(c){let e,n,t,s,r,l,a,f,p,d,m,u,$,V,B;return{c(){e=h("h3"),n=I("Alert with a complex message"),t=E(),s=h("p"),r=I("inside the Alert messsage everthing goes to the slot in the message block"),l=E(),a=h("ul"),f=h("li"),p=I("note 1"),d=E(),m=h("li"),u=I("note 2"),$=E(),V=h("li"),B=I("note 3"),this.h()},l(_){e=g(_,"H3",{class:!0});var L=v(e);n=P(L,"Alert with a complex message"),L.forEach(o),t=w(_),s=g(_,"P",{});var H=v(s);r=P(H,"inside the Alert messsage everthing goes to the slot in the message block"),H.forEach(o),l=w(_),a=g(_,"UL",{class:!0});var R=v(a);f=g(R,"LI",{});var T=v(f);p=P(T,"note 1"),T.forEach(o),d=w(R),m=g(R,"LI",{});var O=v(m);u=P(O,"note 2"),O.forEach(o),$=w(R),V=g(R,"LI",{});var U=v(V);B=P(U,"note 3"),U.forEach(o),R.forEach(o),this.h()},h(){b(e,"class","h3"),b(a,"class","list-disc pl-5")},m(_,L){S(_,e,L),i(e,n),S(_,t,L),S(_,s,L),i(s,r),S(_,l,L),S(_,a,L),i(a,f),i(f,p),i(a,d),i(a,m),i(m,u),i(a,$),i(a,V),i(V,B)},p:F,d(_){_&&o(e),_&&o(t),_&&o(s),_&&o(l),_&&o(a)}}}function Ce(c){let e,n,t,s,r,l,a,f,p;return t=new oe({props:{icon:ue}}),l=new oe({props:{icon:me}}),{c(){e=h("div"),n=h("button"),x(t.$$.fragment),s=E(),r=h("button"),x(l.$$.fragment),this.h()},l(d){e=g(d,"DIV",{class:!0,slot:!0});var m=v(e);n=g(m,"BUTTON",{class:!0});var u=v(n);C(t.$$.fragment,u),u.forEach(o),s=w(m),r=g(m,"BUTTON",{class:!0});var $=v(r);C(l.$$.fragment,$),$.forEach(o),m.forEach(o),this.h()},h(){b(n,"class","btn hover:text-primary-100"),b(r,"class","btn hover:text-primary-100"),b(e,"class","flex gap-2"),b(e,"slot","actions")},m(d,m){S(d,e,m),i(e,n),A(t,n,null),i(e,s),i(e,r),A(l,r,null),a=!0,f||(p=[ie(n,"click",c[0]),ie(r,"click",c[1])],f=!0)},p:F,i(d){a||(k(t.$$.fragment,d),k(l.$$.fragment,d),a=!0)},o(d){D(t.$$.fragment,d),D(l.$$.fragment,d),a=!1},d(d){d&&o(e),y(t),y(l),f=!1,fe(p)}}}function Ae(c){let e,n,t,s,r,l,a,f,p,d,m;return n=new W({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[be]},$$scope:{ctx:c}}}),s=new W({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[Ee]},$$scope:{ctx:c}}}),l=new W({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[we]},$$scope:{ctx:c}}}),f=new W({props:{cssClass:"variant-ringed-success",$$slots:{default:[xe]},$$scope:{ctx:c}}}),d=new W({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[Ce]},$$scope:{ctx:c}}}),{c(){e=h("div"),x(n.$$.fragment),t=E(),x(s.$$.fragment),r=E(),x(l.$$.fragment),a=E(),x(f.$$.fragment),p=E(),x(d.$$.fragment),this.h()},l(u){e=g(u,"DIV",{class:!0});var $=v(e);C(n.$$.fragment,$),t=w($),C(s.$$.fragment,$),r=w($),C(l.$$.fragment,$),a=w($),C(f.$$.fragment,$),p=w($),C(d.$$.fragment,$),$.forEach(o),this.h()},h(){b(e,"class","grid grid-cols-1 gap-2")},m(u,$){S(u,e,$),A(n,e,null),i(e,t),A(s,e,null),i(e,r),A(l,e,null),i(e,a),A(f,e,null),i(e,p),A(d,e,null),m=!0},p(u,[$]){const V={};$&4&&(V.$$scope={dirty:$,ctx:u}),n.$set(V);const B={};$&4&&(B.$$scope={dirty:$,ctx:u}),s.$set(B);const _={};$&4&&(_.$$scope={dirty:$,ctx:u}),l.$set(_);const L={};$&4&&(L.$$scope={dirty:$,ctx:u}),f.$set(L);const H={};$&4&&(H.$$scope={dirty:$,ctx:u}),d.$set(H)},i(u){m||(k(n.$$.fragment,u),k(s.$$.fragment,u),k(l.$$.fragment,u),k(f.$$.fragment,u),k(d.$$.fragment,u),m=!0)},o(u){D(n.$$.fragment,u),D(s.$$.fragment,u),D(l.$$.fragment,u),D(f.$$.fragment,u),D(d.$$.fragment,u),m=!1},d(u){u&&o(e),y(n),y(s),y(l),y(f),y(d)}}}function ke(c){return[()=>alert("edit"),()=>alert("something else")]}class De extends j{constructor(e){super(),q(this,e,ke,Ae,X,{})}}const ye=`<script>
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
`;var ne=(c=>(c.start="start",c.end="end",c.center="center",c))(ne||{});function Ie(c){let e,n,t,s,r,l,a,f,p;return{c(){e=h("div"),n=h("div"),t=h("span"),s=I("Loading..."),l=E(),a=h("span"),f=I(c[1]),this.h()},l(d){e=g(d,"DIV",{class:!0});var m=v(e);n=g(m,"DIV",{class:!0,role:!0});var u=v(n);t=g(u,"SPAN",{class:!0});var $=v(t);s=P($,"Loading..."),$.forEach(o),u.forEach(o),l=w(m),a=g(m,"SPAN",{});var V=v(a);f=P(V,c[1]),V.forEach(o),m.forEach(o),this.h()},h(){b(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),b(n,"class",r="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+c[0]),b(n,"role","status"),b(e,"class",p="flex justify-"+c[2]+" items-"+c[2]+" h-full w-full gap-5 pt-2")},m(d,m){S(d,e,m),i(e,n),i(n,t),i(t,s),i(e,l),i(e,a),i(a,f)},p(d,[m]){m&1&&r!==(r="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+d[0])&&b(n,"class",r),m&2&&de(f,d[1]),m&4&&p!==(p="flex justify-"+d[2]+" items-"+d[2]+" h-full w-full gap-5 pt-2")&&b(e,"class",p)},i:F,o:F,d(d){d&&o(e)}}}function Pe(c,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:r=ne.start}=e;return c.$$set=l=>{"textCss"in l&&n(0,t=l.textCss),"label"in l&&n(1,s=l.label),"position"in l&&n(2,r=l.position)},[t,s,r]}class Z extends j{constructor(e){super(),q(this,e,Pe,Ie,X,{textCss:0,label:1,position:2})}}function Se(c){let e,n,t,s,r,l,a,f,p,d,m,u,$,V,B,_,L,H,R,T,O,U,ee,N,G;return l=new Z({}),u=new Z({props:{textCss:"text-primary-500"}}),H=new Z({props:{textCss:"text-secondary-500",position:ne.center}}),N=new Z({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=h("div"),n=h("div"),t=h("h4"),s=I("default"),r=E(),x(l.$$.fragment),a=E(),f=h("div"),p=h("h4"),d=I("change color"),m=E(),x(u.$$.fragment),$=E(),V=h("div"),B=h("h4"),_=I("change position"),L=E(),x(H.$$.fragment),R=E(),T=h("div"),O=h("h4"),U=I("add text"),ee=E(),x(N.$$.fragment),this.h()},l(M){e=g(M,"DIV",{class:!0});var z=v(e);n=g(z,"DIV",{});var J=v(n);t=g(J,"H4",{class:!0});var se=v(t);s=P(se,"default"),se.forEach(o),r=w(J),C(l.$$.fragment,J),J.forEach(o),a=w(z),f=g(z,"DIV",{});var K=v(f);p=g(K,"H4",{class:!0});var ae=v(p);d=P(ae,"change color"),ae.forEach(o),m=w(K),C(u.$$.fragment,K),K.forEach(o),$=w(z),V=g(z,"DIV",{});var Q=v(V);B=g(Q,"H4",{class:!0});var re=v(B);_=P(re,"change position"),re.forEach(o),L=w(Q),C(H.$$.fragment,Q),Q.forEach(o),R=w(z),T=g(z,"DIV",{});var Y=v(T);O=g(Y,"H4",{class:!0});var le=v(O);U=P(le,"add text"),le.forEach(o),ee=w(Y),C(N.$$.fragment,Y),Y.forEach(o),z.forEach(o),this.h()},h(){b(t,"class","h4"),b(p,"class","h4"),b(B,"class","h4"),b(O,"class","h4"),b(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(M,z){S(M,e,z),i(e,n),i(n,t),i(t,s),i(n,r),A(l,n,null),i(e,a),i(e,f),i(f,p),i(p,d),i(f,m),A(u,f,null),i(e,$),i(e,V),i(V,B),i(B,_),i(V,L),A(H,V,null),i(e,R),i(e,T),i(T,O),i(O,U),i(T,ee),A(N,T,null),G=!0},p:F,i(M){G||(k(l.$$.fragment,M),k(u.$$.fragment,M),k(H.$$.fragment,M),k(N.$$.fragment,M),G=!0)},o(M){D(l.$$.fragment,M),D(u.$$.fragment,M),D(H.$$.fragment,M),D(N.$$.fragment,M),G=!1},d(M){M&&o(e),y(l),y(u),y(H),y(N)}}}class Ve extends j{constructor(e){super(),q(this,e,null,Se,X,{})}}const Le=`<script>
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

</div>`;function Me(c){let e,n;return e=new ve({}),{c(){x(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Be(c){let e,n;return{c(){e=h("div"),n=I("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(o),this.h()},h(){b(e,"slot","info")},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function He(c){let e,n;return e=new De({}),{c(){x(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Fe(c){let e,n;return{c(){e=h("div"),n=I("The alerts are used to pass on messages to the user."),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"The alerts are used to pass on messages to the user."),s.forEach(o),this.h()},h(){b(e,"slot","info")},m(t,s){S(t,e,s),i(e,n)},p:F,d(t){t&&o(e)}}}function Re(c){let e,n;return e=new Ve({}),{c(){x(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){A(e,t,s),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Te(c){let e,n,t,s,r,l,a,f;return a=new W({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=h("div"),n=h("p"),t=I("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=h("b"),r=I("color, size and position."),l=E(),x(a.$$.fragment),this.h()},l(p){e=g(p,"DIV",{slot:!0});var d=v(e);n=g(d,"P",{});var m=v(n);t=P(m,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=g(m,"B",{});var u=v(s);r=P(u,"color, size and position."),u.forEach(o),m.forEach(o),l=w(d),C(a.$$.fragment,d),d.forEach(o),this.h()},h(){b(e,"slot","info")},m(p,d){S(p,e,d),i(e,n),i(n,t),i(n,s),i(s,r),i(e,l),A(a,e,null),f=!0},p:F,i(p){f||(k(a.$$.fragment,p),f=!0)},o(p){D(a.$$.fragment,p),f=!1},d(p){p&&o(e),y(a)}}}function ze(c){let e,n,t,s,r,l;return e=new te({props:{title:"Page",svelte:_e,$$slots:{info:[Be],default:[Me]},$$scope:{ctx:c}}}),t=new te({props:{title:"Alert",svelte:ye,$$slots:{info:[Fe],default:[He]},$$scope:{ctx:c}}}),r=new te({props:{title:"Spinner",svelte:Le,$$slots:{info:[Te],default:[Re]},$$scope:{ctx:c}}}),{c(){x(e.$$.fragment),n=E(),x(t.$$.fragment),s=E(),x(r.$$.fragment)},l(a){C(e.$$.fragment,a),n=w(a),C(t.$$.fragment,a),s=w(a),C(r.$$.fragment,a)},m(a,f){A(e,a,f),S(a,n,f),A(t,a,f),S(a,s,f),A(r,a,f),l=!0},p(a,f){const p={};f&1&&(p.$$scope={dirty:f,ctx:a}),e.$set(p);const d={};f&1&&(d.$$scope={dirty:f,ctx:a}),t.$set(d);const m={};f&1&&(m.$$scope={dirty:f,ctx:a}),r.$set(m)},i(a){l||(k(e.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),l=!0)},o(a){D(e.$$.fragment,a),D(t.$$.fragment,a),D(r.$$.fragment,a),l=!1},d(a){y(e,a),a&&o(n),y(t,a),a&&o(s),y(r,a)}}}function Oe(c){let e,n,t;return n=new ce({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.  ",menu:!1,$$slots:{default:[ze]},$$scope:{ctx:c}}}),{c(){e=h("div"),x(n.$$.fragment),this.h()},l(s){e=g(s,"DIV",{id:!0});var r=v(e);C(n.$$.fragment,r),r.forEach(o),this.h()},h(){b(e,"id","toc-target")},m(s,r){S(s,e,r),A(n,e,null),t=!0},p(s,[r]){const l={};r&1&&(l.$$scope={dirty:r,ctx:s}),n.$set(l)},i(s){t||(k(n.$$.fragment,s),t=!0)},o(s){D(n.$$.fragment,s),t=!1},d(s){s&&o(e),y(n)}}}class Xe extends j{constructor(e){super(),q(this,e,null,Oe,X,{})}}export{Xe as component};
