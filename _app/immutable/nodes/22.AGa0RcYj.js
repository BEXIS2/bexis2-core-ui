import{s as H,e as I,c as V,b as j,f as B,m,i as O,h as W,r as D,H as X,w as z,x as C,F as q,O as Y,a as Z,g as v,U as x}from"../chunks/BTIOtzD0.js";import{S as U,i as A,g as p,b,e as $,t as y,c as L,a as P,m as S,d as w,k as ee}from"../chunks/BPNg9miD.js";import{P as te}from"../chunks/BFppqCDD.js";import{F as G,c as ie,d as re}from"../chunks/D4Jc3Dep.js";import"../chunks/vD00CEsX.js";import{S as le}from"../chunks/C_smxboA.js";function ne(r){let e,i;return e=new G({props:{icon:ie}}),{c(){L(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){S(e,t,l),i=!0},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function ae(r){let e,i;return e=new G({props:{icon:re,color:"white"}}),{c(){L(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){S(e,t,l),i=!0},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function ce(r){let e,i,t,l,s,k,f,n,o;const g=[ae,ne],h=[];function T(c,u){return c[0]?0:1}return t=T(r),l=h[t]=g[t](r),{c(){e=I("div"),i=I("div"),l.c(),this.h()},l(c){e=V(c,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var u=j(e);i=V(u,"DIV",{class:!0});var d=j(i);l.l(d),d.forEach(B),u.forEach(B),this.h()},h(){m(i,"class",s="lightswitch-thumb "+r[1]),m(e,"class",k="lightswitch-track "+r[2]),m(e,"role","switch"),m(e,"aria-label","Light Switch"),m(e,"aria-checked",r[0]),m(e,"title","xyz"),m(e,"tabindex","0")},m(c,u){O(c,e,u),W(e,i),h[t].m(i,null),f=!0,n||(o=[D(e,"click",r[19]),D(e,"click",r[15]),D(e,"keydown",r[20]),D(e,"keydown",r[16]),D(e,"keyup",r[17]),D(e,"keypress",r[18])],n=!0)},p(c,[u]){let d=t;t=T(c),t!==d&&(p(),b(h[d],1,1,()=>{h[d]=null}),$(),l=h[t],l||(l=h[t]=g[t](c),l.c()),y(l,1),l.m(i,null)),(!f||u&2&&s!==(s="lightswitch-thumb "+c[1]))&&m(i,"class",s),(!f||u&4&&k!==(k="lightswitch-track "+c[2]))&&m(e,"class",k),(!f||u&1)&&m(e,"aria-checked",c[0])},i(c){f||(y(l),f=!0)},o(c){b(l),f=!1},d(c){c&&B(e),h[t].d(),n=!1,X(o)}}}const se="cursor-pointer",ue="aspect-square scale-[0.8] flex justify-center items-center";function fe(r,e,i){let t,l,s,k,f,{title:n="Toggle light or dark mode."}=e,{bgLight:o="bg-surface-50"}=e,{bgDark:g="bg-surface-900"}=e,{fillLight:h="fill-surface-50"}=e,{fillDark:T="fill-surface-900"}=e,{width:c="w-12"}=e,{height:u="h-6"}=e,{ring:d="ring-[1px] ring-surface-500/30"}=e,{rounded:F="rounded-token"}=e;const E="transition-all duration-[200ms]";let _=!0;function J(a){q.call(this,r,a)}function K(a){q.call(this,r,a)}function M(a){q.call(this,r,a)}function N(a){q.call(this,r,a)}const Q=()=>i(0,_=!_),R=()=>i(0,_=!_);return r.$$set=a=>{i(23,e=z(z({},e),C(a))),"title"in a&&i(3,n=a.title),"bgLight"in a&&i(4,o=a.bgLight),"bgDark"in a&&i(5,g=a.bgDark),"fillLight"in a&&i(6,h=a.fillLight),"fillDark"in a&&i(7,T=a.fillDark),"width"in a&&i(8,c=a.width),"height"in a&&i(9,u=a.height),"ring"in a&&i(10,d=a.ring),"rounded"in a&&i(11,F=a.rounded)},r.$$.update=()=>{r.$$.dirty&49&&i(14,t=_===!0?o:g),r.$$.dirty&49&&i(13,l=_===!0?g:o),r.$$.dirty&1&&i(12,s=_===!0?"translate-x-[100%]":""),r.$$.dirty&193,i(2,k=`${se} ${E} ${c} ${u} ${d} ${F} ${t} ${e.class??""}`),r.$$.dirty&14848&&i(1,f=`${ue} ${E} ${u} ${F} ${l} ${s}`),r.$$.dirty&1},e=C(e),[_,f,k,n,o,g,h,T,c,u,d,F,s,l,t,J,K,M,N,Q,R]}class oe extends U{constructor(e){super(),A(this,e,fe,ce,H,{title:3,bgLight:4,bgDark:5,fillLight:6,fillDark:7,width:8,height:9,ring:10,rounded:11})}}function ge(r){let e,i,t,l,s;e=new oe({});function k(n){r[1](n)}let f={name:"slide"};return r[0]!==void 0&&(f.checked=r[0]),t=new le({props:f}),Y.push(()=>ee(t,"checked",k)),{c(){L(e.$$.fragment),i=Z(),L(t.$$.fragment)},l(n){P(e.$$.fragment,n),i=v(n),P(t.$$.fragment,n)},m(n,o){S(e,n,o),O(n,i,o),S(t,n,o),s=!0},p(n,o){const g={};!l&&o&1&&(l=!0,g.checked=n[0],x(()=>l=!1)),t.$set(g)},i(n){s||(y(e.$$.fragment,n),y(t.$$.fragment,n),s=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),s=!1},d(n){n&&B(i),w(e,n),w(t,n)}}}function he(r){let e,i;return e=new te({props:{title:"Toggle",$$slots:{default:[ge]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){S(e,t,l),i=!0},p(t,[l]){const s={};l&9&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function de(r,e,i){let t=!1;function l(s){t=s,i(0,t)}return[t,l]}class Te extends U{constructor(e){super(),A(this,e,de,he,H,{})}}export{Te as component};
