import{r as x,w as A}from"./index.CJqQti0J.js";import{s as j,e as h,a as C,t as y,c as _,b as v,A as R,g as E,d as F,f as g,m,i as L,h as p,j as O,n as w}from"./scheduler.D2ilrXRr.js";import{S,i as T}from"./index.DzxGtcDL.js";import{p as D}from"./Enums.2CYK9ZqT.js";const N=t=>(t==null?void 0:t.subscribe)instanceof Function,P=x(void 0),z=t=>(t==null?void 0:t.subscribe)instanceof Function;x(void 0);const B=(t={})=>{const e=n=>Object.fromEntries(Object.entries(n).filter(([,s])=>s)),{subscribe:a,update:i,set:d}=A(e(t)),o=n=>{i(s=>{const u=n(s);return e(u)})};return{subscribe:a,update:o,set:n=>o(()=>n),toggle:n=>{i(s=>s[n]===!0?(delete s[n],s):{...s,[n]:!0})},add:n=>{i(s=>({...s,[n]:!0}))},addAll:n=>{i(s=>({...s,...Object.fromEntries(n.map(u=>[u,!0]))}))},remove:n=>{i(s=>(delete s[n],s))},removeAll:n=>{i(s=>{for(const u of n)delete s[u];return s})},clear:()=>{d({})}}};function H(t){let e,a,i='<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>',d,o,r,f;return{c(){e=h("div"),a=h("div"),a.innerHTML=i,d=C(),o=h("span"),r=y(t[1]),this.h()},l(l){e=_(l,"DIV",{class:!0});var c=v(e);a=_(c,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),R(a)!=="svelte-1i55yv2"&&(a.innerHTML=i),d=E(c),o=_(c,"SPAN",{});var b=v(o);r=F(b,t[1]),b.forEach(g),c.forEach(g),this.h()},h(){m(a,"class","inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),m(a,"role","status"),m(e,"class",f="flex justify-"+t[2]+" items-"+t[2]+" h-full w-full gap-5 pt-2 "+t[0])},m(l,c){L(l,e,c),p(e,a),p(e,d),p(e,o),p(o,r)},p(l,[c]){c&2&&O(r,l[1]),c&5&&f!==(f="flex justify-"+l[2]+" items-"+l[2]+" h-full w-full gap-5 pt-2 "+l[0])&&m(e,"class",f)},i:w,o:w,d(l){l&&g(e)}}}function I(t,e,a){let{textCss:i="text-surface-600"}=e,{label:d=""}=e,{position:o=D.center}=e;return t.$$set=r=>{"textCss"in r&&a(0,i=r.textCss),"label"in r&&a(1,d=r.label),"position"in r&&a(2,o=r.position)},[i,d,o]}class G extends S{constructor(e){super(),T(this,e,I,H,j,{textCss:0,label:1,position:2})}}export{G as S,P as U,z as a,N as i,B as r};