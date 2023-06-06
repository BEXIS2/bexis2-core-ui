import{S as X,i as Y,s as Z,k as h,y as C,a as w,l as g,m as v,z as A,c as x,h as i,n as b,b as S,A as k,D as l,g as I,d as y,B as D,q as V,r as P,W as z,M as ie,O as ce,u as fe}from"../chunks/index.bfb1ec04.js";import{C as te}from"../chunks/CodeContainer.b6387f9b.js";import{P as de}from"../chunks/Page.f3dc7065.js";import{A as j}from"../chunks/Alert.29d5e22d.js";import{F as oe,f as ue,a as $e}from"../chunks/index.5801dd70.js";function me(u){let e,n;return{c(){e=h("b"),n=V("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(i)},m(t,s){S(t,e,s),l(e,n)},p:z,d(t){t&&i(e)}}}function pe(u){let e,n;return{c(){e=h("b"),n=V("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(i)},m(t,s){S(t,e,s),l(e,n)},p:z,d(t){t&&i(e)}}}function he(u){let e,n;return{c(){e=h("b"),n=V("test")},l(t){e=g(t,"B",{});var s=v(e);n=P(s,"test"),s.forEach(i)},m(t,s){S(t,e,s),l(e,n)},p:z,d(t){t&&i(e)}}}function ge(u){let e,n,t,s,f,r,a,o,p,c,$,d,m,E,L;return{c(){e=h("h3"),n=V("Alert with a complex message"),t=w(),s=h("p"),f=V("inside the Alert messsage everthing goes to the slot in the message block"),r=w(),a=h("ul"),o=h("li"),p=V("note 1"),c=w(),$=h("li"),d=V("note 2"),m=w(),E=h("li"),L=V("note 3"),this.h()},l(_){e=g(_,"H3",{class:!0});var B=v(e);n=P(B,"Alert with a complex message"),B.forEach(i),t=x(_),s=g(_,"P",{});var T=v(s);f=P(T,"inside the Alert messsage everthing goes to the slot in the message block"),T.forEach(i),r=x(_),a=g(_,"UL",{class:!0});var H=v(a);o=g(H,"LI",{});var N=v(o);p=P(N,"note 1"),N.forEach(i),c=x(H),$=g(H,"LI",{});var R=v($);d=P(R,"note 2"),R.forEach(i),m=x(H),E=g(H,"LI",{});var W=v(E);L=P(W,"note 3"),W.forEach(i),H.forEach(i),this.h()},h(){b(e,"class","h3"),b(a,"class","list-disc pl-5")},m(_,B){S(_,e,B),l(e,n),S(_,t,B),S(_,s,B),l(s,f),S(_,r,B),S(_,a,B),l(a,o),l(o,p),l(a,c),l(a,$),l($,d),l(a,m),l(a,E),l(E,L)},p:z,d(_){_&&i(e),_&&i(t),_&&i(s),_&&i(r),_&&i(a)}}}function ve(u){let e,n,t,s,f,r,a,o,p;return t=new oe({props:{icon:ue}}),r=new oe({props:{icon:$e}}),{c(){e=h("div"),n=h("button"),C(t.$$.fragment),s=w(),f=h("button"),C(r.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0,slot:!0});var $=v(e);n=g($,"BUTTON",{class:!0});var d=v(n);A(t.$$.fragment,d),d.forEach(i),s=x($),f=g($,"BUTTON",{class:!0});var m=v(f);A(r.$$.fragment,m),m.forEach(i),$.forEach(i),this.h()},h(){b(n,"class","btn hover:text-primary-100"),b(f,"class","btn hover:text-primary-100"),b(e,"class","flex gap-2"),b(e,"slot","actions")},m(c,$){S(c,e,$),l(e,n),k(t,n,null),l(e,s),l(e,f),k(r,f,null),a=!0,o||(p=[ie(n,"click",u[0]),ie(f,"click",u[1])],o=!0)},p:z,i(c){a||(I(t.$$.fragment,c),I(r.$$.fragment,c),a=!0)},o(c){y(t.$$.fragment,c),y(r.$$.fragment,c),a=!1},d(c){c&&i(e),D(t),D(r),o=!1,ce(p)}}}function _e(u){let e,n,t,s,f,r,a,o,p,c,$;return n=new j({props:{title:"Errors",message:"validation faild",cssClass:"variant-filled-error",$$slots:{default:[me]},$$scope:{ctx:u}}}),s=new j({props:{title:"Warning",message:"validation faild",cssClass:"variant-filled-warning",$$slots:{default:[pe]},$$scope:{ctx:u}}}),r=new j({props:{message:"validation success",cssClass:"variant-filled-success",$$slots:{default:[he]},$$scope:{ctx:u}}}),o=new j({props:{cssClass:"variant-ringed-success",$$slots:{default:[ge]},$$scope:{ctx:u}}}),c=new j({props:{title:"Alert with extra button",message:"in the slot actions you can create your own container with different acions",cssClass:"variant-ringed-success",$$slots:{actions:[ve]},$$scope:{ctx:u}}}),{c(){e=h("div"),C(n.$$.fragment),t=w(),C(s.$$.fragment),f=w(),C(r.$$.fragment),a=w(),C(o.$$.fragment),p=w(),C(c.$$.fragment),this.h()},l(d){e=g(d,"DIV",{class:!0});var m=v(e);A(n.$$.fragment,m),t=x(m),A(s.$$.fragment,m),f=x(m),A(r.$$.fragment,m),a=x(m),A(o.$$.fragment,m),p=x(m),A(c.$$.fragment,m),m.forEach(i),this.h()},h(){b(e,"class","grid grid-cols-1 gap-2")},m(d,m){S(d,e,m),k(n,e,null),l(e,t),k(s,e,null),l(e,f),k(r,e,null),l(e,a),k(o,e,null),l(e,p),k(c,e,null),$=!0},p(d,[m]){const E={};m&4&&(E.$$scope={dirty:m,ctx:d}),n.$set(E);const L={};m&4&&(L.$$scope={dirty:m,ctx:d}),s.$set(L);const _={};m&4&&(_.$$scope={dirty:m,ctx:d}),r.$set(_);const B={};m&4&&(B.$$scope={dirty:m,ctx:d}),o.$set(B);const T={};m&4&&(T.$$scope={dirty:m,ctx:d}),c.$set(T)},i(d){$||(I(n.$$.fragment,d),I(s.$$.fragment,d),I(r.$$.fragment,d),I(o.$$.fragment,d),I(c.$$.fragment,d),$=!0)},o(d){y(n.$$.fragment,d),y(s.$$.fragment,d),y(r.$$.fragment,d),y(o.$$.fragment,d),y(c.$$.fragment,d),$=!1},d(d){d&&i(e),D(n),D(s),D(r),D(o),D(c)}}}function be(u){return[()=>alert("edit"),()=>alert("something else")]}class we extends X{constructor(e){super(),Y(this,e,be,_e,Z,{})}}const xe=`<script>
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
`;var ne=(u=>(u.start="start",u.end="end",u.center="center",u))(ne||{});function Ee(u){let e,n,t,s,f,r,a,o,p;return{c(){e=h("div"),n=h("div"),t=h("span"),s=V("Loading..."),r=w(),a=h("span"),o=V(u[1]),this.h()},l(c){e=g(c,"DIV",{class:!0});var $=v(e);n=g($,"DIV",{class:!0,role:!0});var d=v(n);t=g(d,"SPAN",{class:!0});var m=v(t);s=P(m,"Loading..."),m.forEach(i),d.forEach(i),r=x($),a=g($,"SPAN",{});var E=v(a);o=P(E,u[1]),E.forEach(i),$.forEach(i),this.h()},h(){b(t,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),b(n,"class",f="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+u[0]),b(n,"role","status"),b(e,"class",p="flex justify-"+u[2]+" items-"+u[2]+" h-full w-full gap-5 pt-2")},m(c,$){S(c,e,$),l(e,n),l(n,t),l(t,s),l(e,r),l(e,a),l(a,o)},p(c,[$]){$&1&&f!==(f="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "+c[0])&&b(n,"class",f),$&2&&fe(o,c[1]),$&4&&p!==(p="flex justify-"+c[2]+" items-"+c[2]+" h-full w-full gap-5 pt-2")&&b(e,"class",p)},i:z,o:z,d(c){c&&i(e)}}}function Ce(u,e,n){let{textCss:t="text-secundary-500"}=e,{label:s=""}=e,{position:f=ne.start}=e;return u.$$set=r=>{"textCss"in r&&n(0,t=r.textCss),"label"in r&&n(1,s=r.label),"position"in r&&n(2,f=r.position)},[t,s,f]}class Q extends X{constructor(e){super(),Y(this,e,Ce,Ee,Z,{textCss:0,label:1,position:2})}}function Ae(u){let e,n,t,s,f,r,a,o,p,c,$,d,m,E,L,_,B,T,H,N,R,W,ee,U,q;return r=new Q({}),d=new Q({props:{textCss:"text-primary-500"}}),T=new Q({props:{textCss:"text-secondary-500",position:ne.center}}),U=new Q({props:{textCss:"text-surface-500",label:"validation is running, please waiting until dead"}}),{c(){e=h("div"),n=h("div"),t=h("h4"),s=V("default"),f=w(),C(r.$$.fragment),a=w(),o=h("div"),p=h("h4"),c=V("change color"),$=w(),C(d.$$.fragment),m=w(),E=h("div"),L=h("h4"),_=V("change position"),B=w(),C(T.$$.fragment),H=w(),N=h("div"),R=h("h4"),W=V("add text"),ee=w(),C(U.$$.fragment),this.h()},l(F){e=g(F,"DIV",{class:!0});var O=v(e);n=g(O,"DIV",{});var M=v(n);t=g(M,"H4",{class:!0});var se=v(t);s=P(se,"default"),se.forEach(i),f=x(M),A(r.$$.fragment,M),M.forEach(i),a=x(O),o=g(O,"DIV",{});var G=v(o);p=g(G,"H4",{class:!0});var ae=v(p);c=P(ae,"change color"),ae.forEach(i),$=x(G),A(d.$$.fragment,G),G.forEach(i),m=x(O),E=g(O,"DIV",{});var J=v(E);L=g(J,"H4",{class:!0});var re=v(L);_=P(re,"change position"),re.forEach(i),B=x(J),A(T.$$.fragment,J),J.forEach(i),H=x(O),N=g(O,"DIV",{});var K=v(N);R=g(K,"H4",{class:!0});var le=v(R);W=P(le,"add text"),le.forEach(i),ee=x(K),A(U.$$.fragment,K),K.forEach(i),O.forEach(i),this.h()},h(){b(t,"class","h4"),b(p,"class","h4"),b(L,"class","h4"),b(R,"class","h4"),b(e,"class","grid grid-cols-1 space-y-10 divide-y-2")},m(F,O){S(F,e,O),l(e,n),l(n,t),l(t,s),l(n,f),k(r,n,null),l(e,a),l(e,o),l(o,p),l(p,c),l(o,$),k(d,o,null),l(e,m),l(e,E),l(E,L),l(L,_),l(E,B),k(T,E,null),l(e,H),l(e,N),l(N,R),l(R,W),l(N,ee),k(U,N,null),q=!0},p:z,i(F){q||(I(r.$$.fragment,F),I(d.$$.fragment,F),I(T.$$.fragment,F),I(U.$$.fragment,F),q=!0)},o(F){y(r.$$.fragment,F),y(d.$$.fragment,F),y(T.$$.fragment,F),y(U.$$.fragment,F),q=!1},d(F){F&&i(e),D(r),D(d),D(T),D(U)}}}class ke extends X{constructor(e){super(),Y(this,e,null,Ae,Z,{})}}const Ie=`<script>
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

</div>`;function ye(u){let e,n;return e=new PageExample({}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function De(u){let e,n;return{c(){e=h("div"),n=V("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),s.forEach(i),this.h()},h(){b(e,"slot","info")},m(t,s){S(t,e,s),l(e,n)},p:z,d(t){t&&i(e)}}}function Se(u){let e,n;return e=new we({}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ve(u){let e,n;return{c(){e=h("div"),n=V("The alerts are used to pass on messages to the user."),this.h()},l(t){e=g(t,"DIV",{slot:!0});var s=v(e);n=P(s,"The alerts are used to pass on messages to the user."),s.forEach(i),this.h()},h(){b(e,"slot","info")},m(t,s){S(t,e,s),l(e,n)},p:z,d(t){t&&i(e)}}}function Pe(u){let e,n;return e=new ke({}),{c(){C(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Be(u){let e,n,t,s,f,r,a,o;return a=new j({props:{cssClass:"variant-filled-warning",message:"For coloring the spinner you can use all tailwind text color",deleteBtn:!1}}),{c(){e=h("div"),n=h("p"),t=V("every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=h("b"),f=V("color, size and position."),r=w(),C(a.$$.fragment),this.h()},l(p){e=g(p,"DIV",{slot:!0});var c=v(e);n=g(c,"P",{});var $=v(n);t=P($,"every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by "),s=g($,"B",{});var d=v(s);f=P(d,"color, size and position."),d.forEach(i),$.forEach(i),r=x(c),A(a.$$.fragment,c),c.forEach(i),this.h()},h(){b(e,"slot","info")},m(p,c){S(p,e,c),l(e,n),l(n,t),l(n,s),l(s,f),l(e,r),k(a,e,null),o=!0},p:z,i(p){o||(I(a.$$.fragment,p),o=!0)},o(p){y(a.$$.fragment,p),o=!1},d(p){p&&i(e),D(a)}}}function Fe(u){let e,n,t,s,f,r;return e=new te({props:{title:"Page",svelte:PageExampleRaw,$$slots:{info:[De],default:[ye]},$$scope:{ctx:u}}}),t=new te({props:{title:"Alert",svelte:xe,$$slots:{info:[Ve],default:[Se]},$$scope:{ctx:u}}}),f=new te({props:{title:"Spinner",svelte:Ie,$$slots:{info:[Be],default:[Pe]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),n=w(),C(t.$$.fragment),s=w(),C(f.$$.fragment)},l(a){A(e.$$.fragment,a),n=x(a),A(t.$$.fragment,a),s=x(a),A(f.$$.fragment,a)},m(a,o){k(e,a,o),S(a,n,o),k(t,a,o),S(a,s,o),k(f,a,o),r=!0},p(a,o){const p={};o&1&&(p.$$scope={dirty:o,ctx:a}),e.$set(p);const c={};o&1&&(c.$$scope={dirty:o,ctx:a}),t.$set(c);const $={};o&1&&($.$$scope={dirty:o,ctx:a}),f.$set($)},i(a){r||(I(e.$$.fragment,a),I(t.$$.fragment,a),I(f.$$.fragment,a),r=!0)},o(a){y(e.$$.fragment,a),y(t.$$.fragment,a),y(f.$$.fragment,a),r=!1},d(a){D(e,a),a&&i(n),D(t,a),a&&i(s),D(f,a)}}}function Le(u){let e,n,t;return n=new de({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.  ",menu:!1,$$slots:{default:[Fe]},$$scope:{ctx:u}}}),{c(){e=h("div"),C(n.$$.fragment),this.h()},l(s){e=g(s,"DIV",{id:!0});var f=v(e);A(n.$$.fragment,f),f.forEach(i),this.h()},h(){b(e,"id","toc-target")},m(s,f){S(s,e,f),k(n,e,null),t=!0},p(s,[f]){const r={};f&1&&(r.$$scope={dirty:f,ctx:s}),n.$set(r)},i(s){t||(I(n.$$.fragment,s),t=!0)},o(s){y(n.$$.fragment,s),t=!1},d(s){s&&i(e),D(n)}}}class Re extends X{constructor(e){super(),Y(this,e,null,Le,Z,{})}}export{Re as component};
