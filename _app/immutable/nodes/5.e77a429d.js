import{S as A,i as C,s as D,y as k,z as E,A as S,g as v,d as w,B as T,C as q,E as z,F as B,G as I,k as $,q as L,a as O,l as h,m as g,r as R,h as m,c as V,n as b,X as p,b as F,D as _,M as G,u as M}from"../chunks/index.0512b27e.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6821d3d2.js";import{A as N}from"../chunks/AppShell.1df3a1d3.js";import{T as U}from"../chunks/TableOfContents.3bf66cd3.js";function X(n){let e;const s=n[1].default,t=q(s,n,n[3],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&8)&&z(t,s,a,a[3],e?I(s,a[3],l,null):B(a[3]),null)},i(a){e||(v(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function j(n){let e,s,t,a=n[0]?"<":">",l,c,o,f,d,y;return o=new U({props:{target:"#toc-target-table",text:"text-primary-500"}}),{c(){e=$("div"),s=$("div"),t=$("button"),l=L(a),c=O(),k(o.$$.fragment),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=g(e);s=h(i,"DIV",{class:!0});var u=g(s);t=h(u,"BUTTON",{class:!0});var x=g(t);l=R(x,a),x.forEach(m),c=V(u),E(o.$$.fragment,u),u.forEach(m),i.forEach(m),this.h()},h(){b(t,"class","fixed z-30 top-0 right-0 btn btn-sm variant-filled-primary m-1"),b(s,"class","px-10 pt-10 text-primary-500 h-max overflow-x-hidden bg-white/95"),b(e,"class","fixed right-0 top-0 overflow-y-auto h-full"),p(e,"w-10",n[0]),p(e,"w-max",!n[0])},m(r,i){F(r,e,i),_(e,s),_(s,t),_(t,l),_(s,c),S(o,s,null),f=!0,d||(y=G(t,"click",n[2]),d=!0)},p(r,i){(!f||i&1)&&a!==(a=r[0]?"<":">")&&M(l,a),(!f||i&1)&&p(e,"w-10",r[0]),(!f||i&1)&&p(e,"w-max",!r[0])},i(r){f||(v(o.$$.fragment,r),f=!0)},o(r){w(o.$$.fragment,r),f=!1},d(r){r&&m(e),T(o),d=!1,y()}}}function H(n){let e,s;return e=new N({props:{slotSidebarLeft:"flex-none bg-surface-50-900-token lg:w-auto relative",$$slots:{sidebarRight:[j],default:[X]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const l={};a&9&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function J(n,e,s){let{$$slots:t={},$$scope:a}=e,l=!0;const c=()=>s(0,l=!l);return n.$$set=o=>{"$$scope"in o&&s(3,a=o.$$scope)},[l,t,c,a]}class Y extends A{constructor(e){super(),C(this,e,J,H,D,{})}}export{Y as component};
