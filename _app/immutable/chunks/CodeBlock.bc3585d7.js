import{S as Q,i as X,s as Y,e as D,b as M,W as R,h as f,V as Z,$ as x,I as V,J as U,k as T,q,a as W,l as S,m as w,r as I,c as z,n as d,D as m,M as $,a4 as ee,u as P,a7 as te,O as le,ag as ae,ah as ne}from"./index.0dcca97d.js";import{s as oe}from"./stores.fb110a99.js";function ie(n,t){const e=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},a=()=>{if(typeof t=="object"){if("element"in t){const o=document.querySelector(`[data-clipboard="${t.element}"]`);if(!o)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${t.element}"]`);j(o.innerHTML,"text/html").then(e);return}if("input"in t){const o=document.querySelector(`[data-clipboard="${t.input}"]`);if(!o)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${t.input}"]`);j(o.value).then(e);return}}j(t).then(e)};return n.addEventListener("click",a),{update(o){t=o},destroy(){n.removeEventListener("click",a)}}}async function j(n,t="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[t]:new Blob([n],{type:t}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(e=>{e(navigator.clipboard.writeText(String(n)))})}function G(n){let t,e,a,o=K(n[0])+"",H,y,c,b=(n[7]?n[4]:n[3])+"",h,_,k,E,r,u,C,v,L,N;function p(l,i){return l[6]?se:ce}let g=p(n),s=g(n);return{c(){t=T("div"),e=T("header"),a=T("span"),H=q(o),y=W(),c=T("button"),h=q(b),E=W(),r=T("pre"),u=T("code"),s.c(),this.h()},l(l){t=S(l,"DIV",{class:!0,"data-testid":!0});var i=w(t);e=S(i,"HEADER",{class:!0});var B=w(e);a=S(B,"SPAN",{class:!0});var J=w(a);H=I(J,o),J.forEach(f),y=z(B),c=S(B,"BUTTON",{class:!0});var O=w(c);h=I(O,b),O.forEach(f),B.forEach(f),E=z(i),r=S(i,"PRE",{class:!0});var A=w(r);u=S(A,"CODE",{class:!0});var F=w(u);s.l(F),F.forEach(f),A.forEach(f),i.forEach(f),this.h()},h(){d(a,"class","codeblock-language"),d(c,"class",_="codeblock-btn "+n[2]),d(e,"class","codeblock-header "+de),d(u,"class",C="codeblock-code language-"+n[0]+" lineNumbers"),d(r,"class","codeblock-pre "+fe),d(t,"class",v="codeblock "+n[8]),d(t,"data-testid","codeblock")},m(l,i){M(l,t,i),m(t,e),m(e,a),m(a,H),m(e,y),m(e,c),m(c,h),m(t,E),m(t,r),m(r,u),s.m(u,null),L||(N=[$(c,"click",n[9]),ee(k=ie.call(null,c,n[1]))],L=!0)},p(l,i){i&1&&o!==(o=K(l[0])+"")&&P(H,o),i&152&&b!==(b=(l[7]?l[4]:l[3])+"")&&P(h,b),i&4&&_!==(_="codeblock-btn "+l[2])&&d(c,"class",_),k&&te(k.update)&&i&2&&k.update.call(null,l[1]),g===(g=p(l))&&s?s.p(l,i):(s.d(1),s=g(l),s&&(s.c(),s.m(u,null))),i&1&&C!==(C="codeblock-code language-"+l[0]+" lineNumbers")&&d(u,"class",C),i&256&&v!==(v="codeblock "+l[8])&&d(t,"class",v)},d(l){l&&f(t),s.d(),L=!1,le(N)}}}function ce(n){let t=n[1].trim()+"",e;return{c(){e=q(t)},l(a){e=I(a,t)},m(a,o){M(a,e,o)},p(a,o){o&2&&t!==(t=a[1].trim()+"")&&P(e,t)},d(a){a&&f(e)}}}function se(n){let t,e;return{c(){t=new ae(!1),e=D(),this.h()},l(a){t=ne(a,!1),e=D(),this.h()},h(){t.a=e},m(a,o){t.m(n[5],a,o),M(a,e,o)},p(a,o){o&32&&t.p(a[5])},d(a){a&&f(e),a&&t.d()}}}function ue(n){let t,e=n[0]&&n[1]&&G(n);return{c(){e&&e.c(),t=D()},l(a){e&&e.l(a),t=D()},m(a,o){e&&e.m(a,o),M(a,t,o)},p(a,[o]){a[0]&&a[1]?e?e.p(a,o):(e=G(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:R,o:R,d(a){e&&e.d(a),a&&f(t)}}}const re="overflow-hidden shadow",de="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",fe="whitespace-pre-wrap break-all p-4 pt-1";function K(n){return n==="js"?"javascript":n==="ts"?"typescript":n}function be(n,t,e){let a,o;Z(n,oe,l=>e(17,o=l));const H=x();let{language:y="plaintext"}=t,{code:c=""}=t,{lineNumbers:b=!1}=t,{background:h="bg-neutral-900/90"}=t,{blur:_=""}=t,{text:k="text-sm"}=t,{color:E="text-white"}=t,{rounded:r="rounded-container-token"}=t,{shadow:u="shadow"}=t,{button:C="btn btn-sm variant-soft !text-white"}=t,{buttonLabel:v="Copy"}=t,{buttonCopied:L="👍"}=t,N=!1,p=c,g=!1;function s(){e(7,g=!0),setTimeout(()=>{e(7,g=!1)},2e3),H("copy")}return n.$$set=l=>{e(19,t=V(V({},t),U(l))),"language"in l&&e(0,y=l.language),"code"in l&&e(1,c=l.code),"lineNumbers"in l&&e(10,b=l.lineNumbers),"background"in l&&e(11,h=l.background),"blur"in l&&e(12,_=l.blur),"text"in l&&e(13,k=l.text),"color"in l&&e(14,E=l.color),"rounded"in l&&e(15,r=l.rounded),"shadow"in l&&e(16,u=l.shadow),"button"in l&&e(2,C=l.button),"buttonLabel"in l&&e(3,v=l.buttonLabel),"buttonCopied"in l&&e(4,L=l.buttonCopied)},n.$$.update=()=>{n.$$.dirty&131075&&o!==void 0&&(e(5,p=o.highlight(c,{language:y}).value.trim()),e(6,N=!0)),n.$$.dirty&1056&&b&&(e(5,p=p.replace(/^/gm,()=>'<span class="line"></span>	')),e(6,N=!0)),e(8,a=`${re} ${h} ${_} ${k} ${E} ${r} ${u} ${t.class??""}`)},t=U(t),[y,c,C,v,L,p,N,g,a,s,b,h,_,k,E,r,u,o]}class _e extends Q{constructor(t){super(),X(this,t,be,ue,Y,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}export{_e as C};
