import{S as y,i as C,s as P,y as m,z as u,A as f,g as d,d as $,B as g,k as i,q as h,l,m as c,r as _,h as r,b as v,D as p,W as b,n as x}from"../chunks/index.cff9c354.js";import{C as D}from"../chunks/CodeContainer.b7046c61.js";import{P as k}from"../chunks/Page.8b62bb2d.js";function M(s){let e,n;return{c(){e=i("div"),n=h("My Content HERE")},l(t){e=l(t,"DIV",{});var a=c(e);n=_(a,"My Content HERE"),a.forEach(r)},m(t,a){v(t,e,a),p(e,n)},p:b,d(t){t&&r(e)}}}function w(s){let e,n,t;return{c(){e=i("div"),n=i("p"),t=h("Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),this.h()},l(a){e=l(a,"DIV",{slot:!0});var o=c(e);n=l(o,"P",{});var E=c(n);t=_(E,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."),E.forEach(r),o.forEach(r),this.h()},h(){x(e,"slot","description")},m(a,o){v(a,e,o),p(e,n),p(n,t)},p:b,d(a){a&&r(e)}}}function I(s){let e,n;return e=new k({props:{title:"Create a Dataset",note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:s[0],$$slots:{description:[w],default:[M]},$$scope:{ctx:s}}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p(t,[a]){const o={};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function L(s){return[[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]]}class R extends y{constructor(e){super(),C(this,e,L,I,P,{})}}const S=`<script lang="ts">
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

</Page>`;function B(s){let e,n;return e=new R({}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function H(s){let e,n;return{c(){e=i("div"),n=h("by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),this.h()},l(t){e=l(t,"DIV",{slot:!0});var a=c(e);n=_(a,"by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description"),a.forEach(r),this.h()},h(){x(e,"slot","info")},m(t,a){v(t,e,a),p(e,n)},p:b,d(t){t&&r(e)}}}function V(s){let e,n;return e=new D({props:{title:"Page",svelte:S,$$slots:{info:[H],default:[B]},$$scope:{ctx:s}}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p(t,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function q(s){let e,n;return e=new k({props:{title:"Core",note:"here are listed all basic components for a unified design of the pages.  ",$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){f(e,t,a),n=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class A extends y{constructor(e){super(),C(this,e,null,q,P,{})}}export{A as component};
