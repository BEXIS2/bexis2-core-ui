import{S as A,i as C,s as D,y as k,z as E,A as S,g as b,d as w,B as T,C as q,E as z,F as B,G as I,k as $,q as L,a as O,l as h,m as g,r as R,h as m,c as V,n as v,X as p,b as F,D as _,M as G,u as M}from"../chunks/index.049e93f8.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.8eb44e16.js";import{A as N}from"../chunks/AppShell.8ccebe7e.js";import{T as U}from"../chunks/TableOfContents.2fb2fca4.js";function X(o){let e;const s=o[1].default,t=q(s,o,o[3],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&8)&&z(t,s,a,a[3],e?I(s,a[3],l,null):B(a[3]),null)},i(a){e||(b(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function j(o){let e,s,t,a=o[0]?"<":">",l,c,r,f,d,y;return r=new U({props:{target:"#toc-target-table",text:"text-primary-500"}}),{c(){e=$("div"),s=$("div"),t=$("button"),l=L(a),c=O(),k(r.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0});var i=g(e);s=h(i,"DIV",{class:!0});var u=g(s);t=h(u,"BUTTON",{class:!0});var x=g(t);l=R(x,a),x.forEach(m),c=V(u),E(r.$$.fragment,u),u.forEach(m),i.forEach(m),this.h()},h(){v(t,"class","fixed z-30 top-0 right-0 btn btn-sm variant-filled-primary m-1"),v(s,"class","px-10 pt-10 text-primary-500 overflow-auto h-max bg-white/95"),v(e,"class","fixed right-0 top-0 overflow-auto h-full"),p(e,"w-10",o[0]),p(e,"w-max",!o[0])},m(n,i){F(n,e,i),_(e,s),_(s,t),_(t,l),_(s,c),S(r,s,null),f=!0,d||(y=G(t,"click",o[2]),d=!0)},p(n,i){(!f||i&1)&&a!==(a=n[0]?"<":">")&&M(l,a),(!f||i&1)&&p(e,"w-10",n[0]),(!f||i&1)&&p(e,"w-max",!n[0])},i(n){f||(b(r.$$.fragment,n),f=!0)},o(n){w(r.$$.fragment,n),f=!1},d(n){n&&m(e),T(r),d=!1,y()}}}function H(o){let e,s;return e=new N({props:{slotSidebarLeft:"flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto relative",$$slots:{sidebarRight:[j],default:[X]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const l={};a&9&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function J(o,e,s){let{$$slots:t={},$$scope:a}=e,l=!0;const c=()=>s(0,l=!l);return o.$$set=r=>{"$$scope"in r&&s(3,a=r.$$scope)},[l,t,c,a]}class Y extends A{constructor(e){super(),C(this,e,J,H,D,{})}}export{Y as component};
