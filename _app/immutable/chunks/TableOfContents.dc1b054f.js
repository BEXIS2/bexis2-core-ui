import{S as ne,i as se,s as oe,e as R,b as D,g as E,v as re,d as Z,f as ce,h as H,o as fe,Y as ue,I as F,J,k as C,q as W,a as X,l as A,m as N,r as x,c as w,n as k,D as T,u as p,Z as de,_ as U,U as he,M as S,O as ge,T as Y}from"./index.0dcca97d.js";import{f as j}from"./index.b846a0f7.js";function G(l,t,e){const a=l.slice();return a[27]=t[e],a}function K(l){let t,e,a,f,h,b,g,_,u,r,c=l[2],o=[];for(let n=0;n<c.length;n+=1)o[n]=P(G(l,c,n));return{c(){t=C("div"),e=C("nav"),a=C("div"),f=W(l[0]),b=X();for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){t=A(n,"DIV",{class:!0});var d=N(t);e=A(d,"NAV",{class:!0});var s=N(e);a=A(s,"DIV",{class:!0});var v=N(a);f=x(v,l[0]),v.forEach(H),b=w(s);for(let L=0;L<o.length;L+=1)o[L].l(s);s.forEach(H),d.forEach(H),this.h()},h(){k(a,"class",h="toc-label "+l[6]),k(e,"class",g="toc-list "+l[5]),k(t,"class",_="toc "+l[7])},m(n,d){D(n,t,d),T(t,e),T(e,a),T(a,f),T(e,b);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(e,null);r=!0},p(n,d){if((!r||d&1)&&p(f,n[0]),(!r||d&64&&h!==(h="toc-label "+n[6]))&&k(a,"class",h),d&30){c=n[2];let s;for(s=0;s<c.length;s+=1){const v=G(n,c,s);o[s]?o[s].p(v,d):(o[s]=P(v),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=c.length}(!r||d&32&&g!==(g="toc-list "+n[5]))&&k(e,"class",g),(!r||d&128&&_!==(_="toc "+n[7]))&&k(t,"class",_)},i(n){r||(n&&de(()=>{r&&(u||(u=U(t,j,{duration:100},!0)),u.run(1))}),r=!0)},o(n){n&&(u||(u=U(t,j,{duration:100},!1)),u.run(0)),r=!1},d(n){n&&H(t),he(o,n),n&&u&&u.end()}}}function P(l){var u;let t,e=((u=l[27].firstChild)==null?void 0:u.nodeValue)+"",a,f,h,b,g;function _(){return l[20](l[27])}return{c(){t=C("li"),a=W(e),f=X(),this.h()},l(r){t=A(r,"LI",{class:!0});var c=N(t);a=x(c,e),f=w(c),c.forEach(H),this.h()},h(){k(t,"class",h="toc-list-item "+l[4]+" "+Q(l[27])+" "+(l[27].id===l[3]?l[1]:""))},m(r,c){D(r,t,c),T(t,a),T(t,f),b||(g=[S(t,"click",_),S(t,"click",l[18]),S(t,"keypress",l[19])],b=!0)},p(r,c){var o;l=r,c&4&&e!==(e=((o=l[27].firstChild)==null?void 0:o.nodeValue)+"")&&p(a,e),c&30&&h!==(h="toc-list-item "+l[4]+" "+Q(l[27])+" "+(l[27].id===l[3]?l[1]:""))&&k(t,"class",h)},d(r){r&&H(t),b=!1,ge(g)}}}function be(l){let t,e=l[2].length>0&&K(l);return{c(){e&&e.c(),t=R()},l(a){e&&e.l(a),t=R()},m(a,f){e&&e.m(a,f),D(a,t,f)},p(a,[f]){a[2].length>0?e?(e.p(a,f),f&4&&E(e,1)):(e=K(a),e.c(),E(e,1),e.m(t.parentNode,t)):e&&(re(),Z(e,1,1,()=>{e=null}),ce())},i(a){E(e)},o(a){Z(e)},d(a){e&&e.d(a),a&&H(t)}}}const _e="p-4 pt-0",me="list-none space-y-1",ve="px-4 py-2 cursor-pointer";function Q(l){return l.tagName==="H3"?"ml-3":l.tagName==="H4"?"ml-6":l.tagName==="H5"?"ml-9":l.tagName==="H6"?"ml-12":""}function ke(l){const t=document.querySelector(`#${l.id}`);t&&t.scrollIntoView({behavior:"smooth"})}function Le(l,t,e){let a,f,h,b,{scrollParent:g="#page"}=t,{target:_="#page"}=t,{allowedHeadings:u="h2, h3"}=t,{label:r="On This Page"}=t,{width:c="w-[240px]"}=t,{spacing:o="space-y-4"}=t,{text:n="text-surface-600-300-token"}=t,{hover:d="hover:bg-primary-hover-token"}=t,{active:s="bg-primary-active-token !text-on-primary-token"}=t,{rounded:v="rounded-token"}=t,{regionLabel:L="font-bold"}=t,{regionList:V=""}=t,m,y,I=[],z;function $(){const i=document.querySelector(_);y=i==null?void 0:i.querySelectorAll(u)}function ee(){y==null||y.forEach(i=>{if(!i.hasAttribute("data-toc-ignore")){if(!i.id){let q=i.innerText.replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase();i.id=`${q}`}i.querySelector(".permalink")||(i.innerHTML+=`<a href="#${i.id}" class="permalink">🔗</a>`),I.push(i)}}),e(2,I=[...I])}function B(){var M;let q=[];y==null||y.forEach(O=>{const ae=(m==null?void 0:m.getBoundingClientRect().top)||0;O.getBoundingClientRect().top-ae+40>=0&&q.push(O)}),e(3,z=(M=q[0])==null?void 0:M.id)}fe(()=>{$(),ee(),m=document.querySelector(g),m==null||m.addEventListener("scroll",B),B()}),ue(()=>{m==null||m.removeEventListener("scroll",B)});function te(i){Y.call(this,l,i)}function le(i){Y.call(this,l,i)}const ie=i=>{ke(i)};return l.$$set=i=>{e(26,t=F(F({},t),J(i))),"scrollParent"in i&&e(8,g=i.scrollParent),"target"in i&&e(9,_=i.target),"allowedHeadings"in i&&e(10,u=i.allowedHeadings),"label"in i&&e(0,r=i.label),"width"in i&&e(11,c=i.width),"spacing"in i&&e(12,o=i.spacing),"text"in i&&e(13,n=i.text),"hover"in i&&e(14,d=i.hover),"active"in i&&e(1,s=i.active),"rounded"in i&&e(15,v=i.rounded),"regionLabel"in i&&e(16,L=i.regionLabel),"regionList"in i&&e(17,V=i.regionList)},l.$$.update=()=>{e(7,a=`${c} ${o} ${t.class??""}`),l.$$.dirty&65536&&e(6,f=`${_e} ${L}`),l.$$.dirty&131072&&e(5,h=`${me} ${V}`),l.$$.dirty&57344&&e(4,b=`${ve} ${n} ${d} ${v}`)},t=J(t),[r,s,I,z,b,h,f,a,g,_,u,c,o,n,d,v,L,V,te,le,ie]}class qe extends ne{constructor(t){super(),se(this,t,Le,be,oe,{scrollParent:8,target:9,allowedHeadings:10,label:0,width:11,spacing:12,text:13,hover:14,active:1,rounded:15,regionLabel:16,regionList:17})}}export{qe as T};
