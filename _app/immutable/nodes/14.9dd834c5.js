import{S as ge,i as ve,s as fe,e as ct,b as P,M as pt,g as G,v as Kt,d as L,f as Xt,h as i,V as bs,$ as tr,I as us,J as Ts,W as le,k as u,l as d,m as f,n as c,D as l,a4 as ls,Z as vs,_ as es,O as fs,x as ys,y as J,z as K,A as q,N as Xs,ab as sr,B as Y,a as y,c as w,af as ws,q as D,r as E,L as Is,a2 as ts,u as ut,ag as rr,ah as lr,U as ss,a3 as Zs,C as nr,E as or,F as ar,G as ir,w as cr,a8 as ur,a9 as dr}from"../chunks/index.0dcca97d.js";/* empty css                             */import{p as ps}from"../chunks/floating-ui.dom.browser.min.609415b6.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.40c5fd1c.js";import{C as ns}from"../chunks/CodeBlock.8644bf71.js";import{a as ds,f as Us}from"../chunks/index.b846a0f7.js";import{w as Qt}from"../chunks/index.3556481d.js";import{F as fr,e as pr,g as mr,d as hr,c as gr}from"../chunks/index.2fcff92e.js";import{a as vr,b as br,T as Zt,c as _r,d as Dr,C as os}from"../chunks/CodeContainer.c437c2c2.js";function Er(){const{subscribe:o,set:e,update:t}=Qt([]);return{subscribe:o,set:e,update:t,trigger:s=>t(r=>(r.push(s),r)),close:()=>t(s=>(s.length>0&&s.shift(),s)),clear:()=>e([])}}const Lt=Er();function $r(o,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let s,r;function n(v){v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),r.focus())}function a(v){!v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),s.focus())}const m=v=>{if(e===!1)return;const _=Array.from(o.querySelectorAll(t));_.length&&(s=_[0],r=_[_.length-1],v||s.focus(),s.addEventListener("keydown",n),r.addEventListener("keydown",a))};m(!1);function p(){s&&s.removeEventListener("keydown",n),r&&r.removeEventListener("keydown",a)}const h=(v,_)=>(v.length&&(p(),m(!0)),_),b=new MutationObserver(h);return b.observe(o,{childList:!0,subtree:!0}),{update(v){e=v,v?m(!1):p()},destroy(){p(),b.disconnect()}}}function ks(o){let e=o[12],t,s,r=Fs(o);return{c(){r.c(),t=ct()},l(n){r.l(n),t=ct()},m(n,a){r.m(n,a),P(n,t,a),s=!0},p(n,a){a[0]&4096&&fe(e,e=n[12])?(Kt(),L(r,1,1,le),Xt(),r=Fs(n),r.c(),G(r,1),r.m(t.parentNode,t)):r.p(n,a)},i(n){s||(G(r),s=!0)},o(n){L(r),s=!1},d(n){n&&i(t),r.d(n)}}}function Cr(o){var h,b;let e,t,s,r,n;const a=[(h=o[14])==null?void 0:h.props,{parent:o[15]}];var m=(b=o[14])==null?void 0:b.ref;function p(v){let _={$$slots:{default:[yr]},$$scope:{ctx:v}};for(let $=0;$<a.length;$+=1)_=us(_,a[$]);return{props:_}}return m&&(t=ys(m,p(o))),{c(){e=u("div"),t&&J(t.$$.fragment),this.h()},l(v){e=d(v,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var _=f(e);t&&K(t.$$.fragment,_),_.forEach(i),this.h()},h(){var v;c(e,"class",s="modal contents "+(((v=o[12][0])==null?void 0:v.modalClasses)??"")),c(e,"data-testid","modal-component"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",r=o[12][0].title??"")},m(v,_){P(v,e,_),t&&q(t,e,null),n=!0},p(v,_){var I,V,k;const $=_[0]&49152?Xs(a,[_[0]&16384&&sr((I=v[14])==null?void 0:I.props),_[0]&32768&&{parent:v[15]}]):{};if(_[0]&16384|_[1]&512&&($.$$scope={dirty:_,ctx:v}),_[0]&16384&&m!==(m=(V=v[14])==null?void 0:V.ref)){if(t){Kt();const g=t;L(g.$$.fragment,1,0,()=>{Y(g,1)}),Xt()}m?(t=ys(m,p(v)),J(t.$$.fragment),G(t.$$.fragment,1),q(t,e,null)):t=null}else m&&t.$set($);(!n||_[0]&4096&&s!==(s="modal contents "+(((k=v[12][0])==null?void 0:k.modalClasses)??"")))&&c(e,"class",s),(!n||_[0]&4096&&r!==(r=v[12][0].title??""))&&c(e,"aria-label",r)},i(v){n||(t&&G(t.$$.fragment,v),n=!0)},o(v){t&&L(t.$$.fragment,v),n=!1},d(v){v&&i(e),t&&Y(t)}}}function Tr(o){var V,k,g,U;let e,t,s,r,n,a,m,p,h=((V=o[12][0])==null?void 0:V.title)&&Ss(o),b=((k=o[12][0])==null?void 0:k.body)&&As(o),v=((g=o[12][0])==null?void 0:g.image)&&typeof((U=o[12][0])==null?void 0:U.image)=="string"&&Rs(o);function _(T,C){if(T[12][0].type==="alert")return Ur;if(T[12][0].type==="confirm")return Ir;if(T[12][0].type==="prompt")return wr}let $=_(o),I=$&&$(o);return{c(){e=u("div"),h&&h.c(),t=y(),b&&b.c(),s=y(),v&&v.c(),r=y(),I&&I.c(),this.h()},l(T){e=d(T,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var C=f(e);h&&h.l(C),t=w(C),b&&b.l(C),s=w(C),v&&v.l(C),r=w(C),I&&I.l(C),C.forEach(i),this.h()},h(){c(e,"class",n="modal "+o[16]),c(e,"data-testid","modal"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",a=o[12][0].title??"")},m(T,C){P(T,e,C),h&&h.m(e,null),l(e,t),b&&b.m(e,null),l(e,s),v&&v.m(e,null),l(e,r),I&&I.m(e,null),p=!0},p(T,C){var S,N,F,B;o=T,(S=o[12][0])!=null&&S.title?h?h.p(o,C):(h=Ss(o),h.c(),h.m(e,t)):h&&(h.d(1),h=null),(N=o[12][0])!=null&&N.body?b?b.p(o,C):(b=As(o),b.c(),b.m(e,s)):b&&(b.d(1),b=null),(F=o[12][0])!=null&&F.image&&typeof((B=o[12][0])==null?void 0:B.image)=="string"?v?v.p(o,C):(v=Rs(o),v.c(),v.m(e,r)):v&&(v.d(1),v=null),$===($=_(o))&&I?I.p(o,C):(I&&I.d(1),I=$&&$(o),I&&(I.c(),I.m(e,null))),(!p||C[0]&65536&&n!==(n="modal "+o[16]))&&c(e,"class",n),(!p||C[0]&4096&&a!==(a=o[12][0].title??""))&&c(e,"aria-label",a)},i(T){p||(vs(()=>{p&&(m||(m=es(e,ds,{duration:o[3],opacity:0,y:100},!0)),m.run(1))}),p=!0)},o(T){m||(m=es(e,ds,{duration:o[3],opacity:0,y:100},!1)),m.run(0),p=!1},d(T){T&&i(e),h&&h.d(),b&&b.d(),v&&v.d(),I&&I.d(),T&&m&&m.end()}}}function Vs(o){var r;let e,t=((r=o[14])==null?void 0:r.slot)+"",s;return{c(){e=new rr(!1),s=ct(),this.h()},l(n){e=lr(n,!1),s=ct(),this.h()},h(){e.a=s},m(n,a){e.m(t,n,a),P(n,s,a)},p(n,a){var m;a[0]&16384&&t!==(t=((m=n[14])==null?void 0:m.slot)+"")&&e.p(t)},d(n){n&&i(s),n&&e.d()}}}function yr(o){var s;let e,t=((s=o[14])==null?void 0:s.slot)&&Vs(o);return{c(){t&&t.c(),e=ct()},l(r){t&&t.l(r),e=ct()},m(r,n){t&&t.m(r,n),P(r,e,n)},p(r,n){var a;(a=r[14])!=null&&a.slot?t?t.p(r,n):(t=Vs(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&i(e)}}}function Ss(o){let e,t=o[12][0].title+"",s;return{c(){e=u("header"),this.h()},l(r){e=d(r,"HEADER",{class:!0});var n=f(e);n.forEach(i),this.h()},h(){c(e,"class",s="modal-header "+o[9])},m(r,n){P(r,e,n),e.innerHTML=t},p(r,n){n[0]&4096&&t!==(t=r[12][0].title+"")&&(e.innerHTML=t),n[0]&512&&s!==(s="modal-header "+r[9])&&c(e,"class",s)},d(r){r&&i(e)}}}function As(o){let e,t=o[12][0].body+"",s;return{c(){e=u("article"),this.h()},l(r){e=d(r,"ARTICLE",{class:!0});var n=f(e);n.forEach(i),this.h()},h(){c(e,"class",s="modal-body "+o[10])},m(r,n){P(r,e,n),e.innerHTML=t},p(r,n){n[0]&4096&&t!==(t=r[12][0].body+"")&&(e.innerHTML=t),n[0]&1024&&s!==(s="modal-body "+r[10])&&c(e,"class",s)},d(r){r&&i(e)}}}function Rs(o){let e,t;return{c(){e=u("img"),this.h()},l(s){e=d(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var s;c(e,"class","modal-image "+Rr),ws(e.src,t=(s=o[12][0])==null?void 0:s.image)||c(e,"src",t),c(e,"alt","Modal")},m(s,r){P(s,e,r)},p(s,r){var n;r[0]&4096&&!ws(e.src,t=(n=s[12][0])==null?void 0:n.image)&&c(e,"src",t)},d(s){s&&i(e)}}}function wr(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},o[12][0].valueAttr],k={};for(let g=0;g<V.length;g+=1)k=us(k,V[g]);return{c(){e=u("form"),t=u("input"),s=y(),r=u("footer"),n=u("button"),a=D(o[0]),p=y(),h=u("button"),b=D(o[2]),this.h()},l(g){e=d(g,"FORM",{class:!0});var U=f(e);t=d(U,"INPUT",{class:!0,name:!0,type:!0}),s=w(U),r=d(U,"FOOTER",{class:!0});var T=f(r);n=d(T,"BUTTON",{type:!0,class:!0});var C=f(n);a=E(C,o[0]),C.forEach(i),p=w(T),h=d(T,"BUTTON",{type:!0,class:!0});var S=f(h);b=E(S,o[2]),S.forEach(i),T.forEach(i),U.forEach(i),this.h()},h(){Is(t,k),c(n,"type","button"),c(n,"class",m="btn "+o[7]),c(h,"type","submit"),c(h,"class",v="btn "+o[8]),c(r,"class",_="modal-footer "+o[11]),c(e,"class","space-y-4")},m(g,U){P(g,e,U),l(e,t),t.autofocus&&t.focus(),ts(t,o[13]),l(e,s),l(e,r),l(r,n),l(n,a),l(r,p),l(r,h),l(h,b),$||(I=[pt(t,"input",o[36]),pt(n,"click",o[20]),pt(e,"submit",o[22])],$=!0)},p(g,U){Is(t,k=Xs(V,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},U[0]&4096&&g[12][0].valueAttr])),U[0]&8192&&t.value!==g[13]&&ts(t,g[13]),U[0]&1&&ut(a,g[0]),U[0]&128&&m!==(m="btn "+g[7])&&c(n,"class",m),U[0]&4&&ut(b,g[2]),U[0]&256&&v!==(v="btn "+g[8])&&c(h,"class",v),U[0]&2048&&_!==(_="modal-footer "+g[11])&&c(r,"class",_)},d(g){g&&i(e),$=!1,fs(I)}}}function Ir(o){let e,t,s,r,n,a,m,p,h,b,v;return{c(){e=u("footer"),t=u("button"),s=D(o[0]),n=y(),a=u("button"),m=D(o[1]),this.h()},l(_){e=d(_,"FOOTER",{class:!0});var $=f(e);t=d($,"BUTTON",{type:!0,class:!0});var I=f(t);s=E(I,o[0]),I.forEach(i),n=w($),a=d($,"BUTTON",{type:!0,class:!0});var V=f(a);m=E(V,o[1]),V.forEach(i),$.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",r="btn "+o[7]),c(a,"type","button"),c(a,"class",p="btn "+o[8]),c(e,"class",h="modal-footer "+o[11])},m(_,$){P(_,e,$),l(e,t),l(t,s),l(e,n),l(e,a),l(a,m),b||(v=[pt(t,"click",o[20]),pt(a,"click",o[21])],b=!0)},p(_,$){$[0]&1&&ut(s,_[0]),$[0]&128&&r!==(r="btn "+_[7])&&c(t,"class",r),$[0]&2&&ut(m,_[1]),$[0]&256&&p!==(p="btn "+_[8])&&c(a,"class",p),$[0]&2048&&h!==(h="modal-footer "+_[11])&&c(e,"class",h)},d(_){_&&i(e),b=!1,fs(v)}}}function Ur(o){let e,t,s,r,n,a,m;return{c(){e=u("footer"),t=u("button"),s=D(o[0]),this.h()},l(p){e=d(p,"FOOTER",{class:!0});var h=f(e);t=d(h,"BUTTON",{type:!0,class:!0});var b=f(t);s=E(b,o[0]),b.forEach(i),h.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",r="btn "+o[7]),c(e,"class",n="modal-footer "+o[11])},m(p,h){P(p,e,h),l(e,t),l(t,s),a||(m=pt(t,"click",o[20]),a=!0)},p(p,h){h[0]&1&&ut(s,p[0]),h[0]&128&&r!==(r="btn "+p[7])&&c(t,"class",r),h[0]&2048&&n!==(n="modal-footer "+p[11])&&c(e,"class",n)},d(p){p&&i(e),a=!1,m()}}}function Fs(o){let e,t,s,r,n,a,m,p,h,b,v;const _=[Tr,Cr],$=[];function I(V,k){return V[12][0].type!=="component"?0:1}return s=I(o),r=$[s]=_[s](o),{c(){e=u("div"),t=u("div"),r.c(),this.h()},l(V){e=d(V,"DIV",{class:!0,"data-testid":!0});var k=f(e);t=d(k,"DIV",{class:!0});var g=f(t);r.l(g),g.forEach(i),k.forEach(i),this.h()},h(){c(t,"class",n="modal-transition "+o[17]),c(e,"class",m="modal-backdrop "+o[18]),c(e,"data-testid","modal-backdrop")},m(V,k){P(V,e,k),l(e,t),$[s].m(t,null),h=!0,b||(v=[pt(e,"mousedown",o[19]),pt(e,"touchstart",o[19]),ls($r.call(null,e,!0))],b=!0)},p(V,k){o=V;let g=s;s=I(o),s===g?$[s].p(o,k):(Kt(),L($[g],1,1,()=>{$[g]=null}),Xt(),r=$[s],r?r.p(o,k):(r=$[s]=_[s](o),r.c()),G(r,1),r.m(t,null)),(!h||k[0]&131072&&n!==(n="modal-transition "+o[17]))&&c(t,"class",n),(!h||k[0]&262144&&m!==(m="modal-backdrop "+o[18]))&&c(e,"class",m)},i(V){h||(G(r),vs(()=>{h&&(a||(a=es(t,ds,{duration:o[3],opacity:o[4],x:o[5],y:o[6]},!0)),a.run(1))}),vs(()=>{h&&(p||(p=es(e,Us,{duration:o[3]},!0)),p.run(1))}),h=!0)},o(V){L(r),a||(a=es(t,ds,{duration:o[3],opacity:o[4],x:o[5],y:o[6]},!1)),a.run(0),p||(p=es(e,Us,{duration:o[3]},!1)),p.run(0),h=!1},d(V){V&&i(e),$[s].d(),V&&a&&a.end(),V&&p&&p.end(),b=!1,fs(v)}}}function kr(o){let e,t,s,r,n=o[12].length>0&&ks(o);return{c(){n&&n.c(),e=ct()},l(a){n&&n.l(a),e=ct()},m(a,m){n&&n.m(a,m),P(a,e,m),t=!0,s||(r=pt(window,"keydown",o[23]),s=!0)},p(a,m){a[12].length>0?n?(n.p(a,m),m[0]&4096&&G(n,1)):(n=ks(a),n.c(),G(n,1),n.m(e.parentNode,e)):n&&(Kt(),L(n,1,1,()=>{n=null}),Xt())},i(a){t||(G(n),t=!0)},o(a){L(n),t=!1},d(a){n&&n.d(a),a&&i(e),s=!1,r()}}}const Vr="fixed top-0 left-0 right-0 bottom-0",Sr="w-full h-full p-4 overflow-y-auto flex justify-center",Ar="block",Rr="w-full h-auto";function Fr(o,e,t){let s,r,n,a,m,p;bs(o,Lt,A=>t(12,p=A));const h=tr();let{position:b="items-center"}=e,{components:v={}}=e,{duration:_=150}=e,{flyOpacity:$=0}=e,{flyX:I=0}=e,{flyY:V=100}=e,{background:k="bg-surface-100-800-token"}=e,{width:g="w-modal"}=e,{height:U="h-auto"}=e,{padding:T="p-4"}=e,{spacing:C="space-y-4"}=e,{rounded:S="rounded-container-token"}=e,{shadow:N="shadow-xl"}=e,{zIndex:F="z-[999]"}=e,{buttonNeutral:B="variant-ghost-surface"}=e,{buttonPositive:R="variant-filled"}=e,{buttonTextCancel:x="Cancel"}=e,{buttonTextConfirm:H="Confirm"}=e,{buttonTextSubmit:j="Submit"}=e,{regionBackdrop:X="bg-surface-backdrop-token"}=e,{regionHeader:Z="text-2xl font-bold"}=e,{regionBody:z="max-h-[200px] overflow-hidden"}=e,{regionFooter:se="flex justify-end space-x-2"}=e,O;const M={buttonTextCancel:x,buttonTextConfirm:H,buttonTextSubmit:j};let W;Lt.subscribe(A=>{A.length&&(A[0].type==="prompt"&&t(13,O=A[0].value),t(0,x=A[0].buttonTextCancel||M.buttonTextCancel),t(1,H=A[0].buttonTextConfirm||M.buttonTextConfirm),t(2,j=A[0].buttonTextSubmit||M.buttonTextSubmit),t(14,W=typeof A[0].component=="string"?v[A[0].component]:A[0].component))});function ee(A){if(!(A.target instanceof Element))return;const Ie=A.target.classList;(Ie.contains("modal-backdrop")||Ie.contains("modal-transition"))&&(p[0].response&&p[0].response(void 0),Lt.close(),h("backdrop",A))}function ce(){p[0].response&&p[0].response(!1),Lt.close()}function ne(){p[0].response&&p[0].response(!0),Lt.close()}function te(A){A.preventDefault(),p[0].response&&p[0].response(O),Lt.close()}function Se(A){p.length&&A.code==="Escape"&&ce()}function Be(){O=this.value,t(13,O)}return o.$$set=A=>{t(39,e=us(us({},e),Ts(A))),"position"in A&&t(24,b=A.position),"components"in A&&t(25,v=A.components),"duration"in A&&t(3,_=A.duration),"flyOpacity"in A&&t(4,$=A.flyOpacity),"flyX"in A&&t(5,I=A.flyX),"flyY"in A&&t(6,V=A.flyY),"background"in A&&t(26,k=A.background),"width"in A&&t(27,g=A.width),"height"in A&&t(28,U=A.height),"padding"in A&&t(29,T=A.padding),"spacing"in A&&t(30,C=A.spacing),"rounded"in A&&t(31,S=A.rounded),"shadow"in A&&t(32,N=A.shadow),"zIndex"in A&&t(33,F=A.zIndex),"buttonNeutral"in A&&t(7,B=A.buttonNeutral),"buttonPositive"in A&&t(8,R=A.buttonPositive),"buttonTextCancel"in A&&t(0,x=A.buttonTextCancel),"buttonTextConfirm"in A&&t(1,H=A.buttonTextConfirm),"buttonTextSubmit"in A&&t(2,j=A.buttonTextSubmit),"regionBackdrop"in A&&t(34,X=A.regionBackdrop),"regionHeader"in A&&t(9,Z=A.regionHeader),"regionBody"in A&&t(10,z=A.regionBody),"regionFooter"in A&&t(11,se=A.regionFooter)},o.$$.update=()=>{var A,Ie,pe;o.$$.dirty[0]&16781312&&t(35,s=((A=p[0])==null?void 0:A.position)??b),t(18,r=`${Vr} ${X} ${F} ${e.class??""} ${((Ie=p[0])==null?void 0:Ie.backdropClasses)??""}`),o.$$.dirty[1]&16&&t(17,n=`${Sr} ${s??""}`),o.$$.dirty[0]&2080378880|o.$$.dirty[1]&3&&t(16,a=`${Ar} ${k} ${g} ${U} ${T} ${C} ${S} ${N} ${((pe=p[0])==null?void 0:pe.modalClasses)??""}`),o.$$.dirty[0]&2097156095|o.$$.dirty[1]&11&&t(15,m={position:b,duration:_,flyOpacity:$,flyX:I,flyY:V,background:k,width:g,height:U,padding:T,spacing:C,rounded:S,shadow:N,buttonNeutral:B,buttonPositive:R,buttonTextCancel:x,buttonTextConfirm:H,buttonTextSubmit:j,regionBackdrop:X,regionHeader:Z,regionBody:z,regionFooter:se,onClose:ce})},e=Ts(e),[x,H,j,_,$,I,V,B,R,Z,z,se,p,O,W,m,a,n,r,ee,ce,ne,te,Se,b,v,k,g,U,T,C,S,N,F,X,s,Be]}class Br extends ge{constructor(e){super(),ve(this,e,Fr,kr,fe,{position:24,components:25,duration:3,flyOpacity:4,flyX:5,flyY:6,background:26,width:27,height:28,padding:29,spacing:30,rounded:31,shadow:32,zIndex:33,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:34,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}const Gr=`
<script lang="ts">
	import { usersStore } from './data';
<\/script>

<div class="table-container">
	<table class="table table-compact bg-tertiary-200">
		<thead>
			<tr class="bg-primary-300">
				<th class="!p-2">Group</th>
				<th class="!p-2">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each $usersStore as user}
				<tr>
					<td>{user.name}</td>
					<td>
						<div>{user.group}</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>`,xr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
<\/script>

<Table config={groupConfig} />`,Qs=`			
export type Group = {
	id: number;
	name: string;
	description: string
};

const userGroups: Group[] = [					
	{id: 1, name: 'Group 1', description: 'Testing 1'},					
	{id: 2, name: 'Group 2', description: 'Testing 2'},					
	{id: 3, name: 'Group 3', description: 'Testing 3'},					
	...
];					
				
export const groupsStore = writable<Group[]>(userGroups);`,Or=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';
	
	import { usersStore } from './data';
	import type { User } from './data';

	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
<\/script>

<Table config={usersConfig} />`,ms=`
export type User = { 
	id: number; 
	name: string; 
	group: string; 
	role: string 
};

const users: User[] = [
	{id: 1, name: 'User 1', group: 'Group 1', role: 'Role 1'},
	{id: 2, name: 'User 2', group: 'Group 2', role: 'Role 2'},
	{id: 3, name: 'User 3', group: 'Group 3', role: 'Role 3'},
	...
];				
				
export const usersStore = writable<User[]>(users);`,Lr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import TableFilter from './TableFilter.svelte';
	import TableOptions from './TableOptions.svelte';
	import { columnFilter } from './filters';
	import { usersStore } from './data';
	import type { User } from './data';

	const usersNoRolesConfig: TableConfig<User> = {
		id: 'usersNoRoles',
		data: usersStore,
		optionsComponent: TableOptions,
		columns: {
			id: {
				colFilterFn: columnFilter,
				colFilterComponent: TableFilter
			},
			role: {
				exclude: true
			},
			group: {
				header: 'Group name'
			}
		},
		pageSizes: [1, 3, 5],
		defaultPageSize: 5
	};
<\/script>

<Table 
	config={usersNoRolesConfig} 
	on:action={(obj) => alert(obj.detail.type)} 
/>`,Nr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { usersBDStore } from './data';
	import type { UserBD } from './data';

	const usersBDConfig: TableConfig<UserBD> = {
		id: 'usersBD',
		data: usersBDStore,
		columns: {
			dateOfBirth: {
				header: 'Date of birth',
				instructions: {
					toStringFn: 
						(date: Date) =>
							date.toLocaleString('en-US', { 
								month: 'short', 
								day: 'numeric', 
								year: 'numeric' 
							}
						),
					toSortableValueFn: 
						(date: Date) => date.getTime(),
					toFilterableValueFn: 
						(date: Date) => date
				}
			}
		}
	};
<\/script>

<Table config={usersBDConfig} />`,Mr=`
export type UserBD = { 
	id: number; 
	name: string; 
	dateOfBirth: Date 
};

const usersBD = [
	{
		id: 1,
		name: 'John Doe',
		dateOfBirth: new Date('1990-05-10')
	},
	{
		id: 2,
		name: 'Jane Smith',
		dateOfBirth: new Date('1985-12-15')
	},
	{
		id: 3,
		name: 'David Johnson',
		dateOfBirth: new Date('1992-07-22')
	},
	...
];

export const usersBDStore = writable<UserBD[]>(usersBD);`,Pr=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,Hr=`
export interface Columns {
	[key: string]: Column;
}`,jr=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,zr=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,Wr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { usersMissingIDsStore } from './data';
	import type { UserMissingID } from './data';

	const missingValues: { [key: number]: string } = {
		32655: 'NA',
		32654: 'NM',
		32653: 'ND'
	};

	const usersMissingIDsConfig: TableConfig<UserMissingID> = {
		id: 'usersMissingIDs',
		data: usersMissingIDsStore,
		columns: {
			id: {
				header: 'ID',
				instructions: {
					toStringFn: (key: number) => {
						if (key in missingValues) {
							return missingValues[key];
						}
						return key.toString();
					}
				}
			}
		}
	};
<\/script>

<Table config={usersMissingIDsConfig} />`,Jr=`
type UserMissingID = { 
	id: number;
	name: string; 
	group: string; 
	role: string 
};
	
const usersMissingIDs = [
	{
		id: 1,
		name: 'User 1',
		group: 'Group 1',
		role: 'Role 1'
	},
	{
		id: 32655,
		name: 'User 2',
		group: 'Group 2',
		role: 'Role 2'
	},
	{
		id: 3,
		name: 'User 3',
		group: 'Group 3',
		role: 'Role 3'
	},
	{
		id: 32653,
		name: 'User 4',
		group: 'Group 4',
		role: 'Role 4'
	},
	{
		id: 5,
		name: 'User 5',
		group: 'Group 5',
		role: 'Role 5'
	}
];

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,qr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import UrlCell from './URLCell.svelte';
	import { websitesStore } from './data';
	import type { Website } from './data';

	type Website = { label: string; URL: URL };
	const websitesStore = writable<Website[]>(websites);
	const websitesConfig: TableConfig<Website> = {
		id: 'websites',
		data: websitesStore,
		columns: {
			URL: {
				header: 'URL',
				instructions: {
					renderComponent: UrlCell,
					toFilterableValueFn: (url: URL) => url.toString()
				},
				disableSorting: true
			}
		}
	};
<\/script>

<Table config={websitesConfig} />
`,Yr=`
export type Website = { label: string; URL: URL };

const websites: Website[] = [
	{
		label: 'Google',
		URL: new URL('https://www.google.com')
	},
	{
		label: 'GitHub',
		URL: new URL('https://www.github.com')
	},
	{
		label: 'YouTube',
		URL: new URL('https://www.youtube.com')
	},
	{
		label: 'Yahoo',
		URL: new URL('https://www.yahoo.com')
	},
	{
		label: 'Bing',
		URL: new URL('https://www.bing.com')
	}
];

export const websitesStore = writable<Website[]>(websites);
`,Kr=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Xr=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import IsAdmin from './IsAdmin.svelte';
	import { usersAndAdminsStore } from './data';
	import type { UserOrAdmin } from './data';

	const usersAndAdminsConfig: TableConfig<data.UserOrAdmin> = {
		id: 'usersAndAdmins',
		data: usersAndAdminsStore,
		columns: {
			isAdmin: {
				header: 'Admin',
				instructions: {
					renderComponent: IsAdmin
				},
				disableFiltering: true
			}
		}
	};
<\/script>`,Zr=`
export type UserOrAdmin = {
	name: string;
	username: string;
	isAdmin: boolean;
};

const usersAndAdmins: UserOrAdmin[] = [
	{
		name: 'John Doe',
		username: 'johndoe',
		isAdmin: true
	},
	{
		name: 'Jane Smith',
		username: 'janesmith',
		isAdmin: false
	},
	{
		name: 'Robert Johnson',
		username: 'robertjohnson',
		isAdmin: false
	},
	{
		name: 'Emily Davis',
		username: 'emilydavis',
		isAdmin: true
	},
	{
		name: 'Michael Wilson',
		username: 'michaelwilson',
		isAdmin: false
	}
];

export const usersAndAdminsStore = writable<UserOrAdmin[]>(usersAndAdmins);
`,Qr=`
<script lang="ts">
	export let value;
	export let row;
<\/script>

<input 
	type="checkbox" 
	name="isAdmin" 
	id={row.id} 
	checked={value} 
	disabled 
/>
`,el=`
<script lang="ts">
	export let row;
	export let dispatchFn;

	const eventDispatchFn = () => {
		const type = row.id % 2 === 0 ? 'even' : 'odd';
		return dispatchFn({ type });
	};
<\/script>

<button 
	class="btn btn-sm variant-filled-secondary" 
	on:click|preventDefault={eventDispatchFn}>
	Odd or even
</button>
`,tl=`
<script lang="ts">
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	// Modals' contents
	import AddUser from './AddUser.svelte';
	import ShowUsers from './ShowUsers.svelte';
	import EditGroup from './EditGroup.svelte';
	// Table data
	import TableCrud from './TableCRUD.svelte';
	import { groupsStore, usersStore } from './data';
	import type { Group } from './data';

	export let row;
	export let dispatchFn;

	const tableCRUDConfig: TableConfig<Group> = {
		id: 'userGroupCRUD',
		data: groupsStore,
		optionsComponent: TableCrud
	};

	const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
		// See tableCRUDActions tab for more details
	};
<\/script>

<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
<Modal />`,sl=`
const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
	const { type, row } = action.detail;
	switch (type) {
		case 'CREATE':
			modalStore.trigger({
				type: 'component',
				title: \`Add user to Group \${row.id}\`,
				component: {
					ref: AddUser,
					props: { 
						users: $usersStore.filter((user) => user.group !== row.name), 
						group: row.name 
					}
				}
			});
			break;
		case 'READ':
			modalStore.trigger({
				type: 'component',
				title: \`Users in Group \${row.id}\`,
				component: {
					ref: ShowUsers,
					props: { 
						users: $usersStore.filter((user) => user.group === row.name), 
						group: row.name 
					}
				}
			});
			break;
		case 'UPDATE':
			modalStore.trigger({
				type: 'component',
				title: \`Edit Group \${row.id}\`,
				component: {
					ref: EditGroup,
					props: { group: row }
				}
			});
			break;
		case 'DELETE':
			modalStore.trigger({
				type: 'confirm',
				title: 'Group deletion',
				body: \`Are you sure you want to delete <strong>\${row.name}</strong>?\`,
				response: (r: boolean) => console.log('response:', r)
			});
			break;

		default:
			break;
	}
};
`,rl=`
<script lang="ts">
	export let users;
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Select the users you would like to add to the <strong>{group}</strong>.</label>
	<select multiple name="users" class="select" id="">
		{#each users as user}
			<option value={user.id}>{user.name}</option>
		{/each}
	</select>
	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,ll=`
<script lang="ts">
	export let users;
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="users">Users in <strong>{group}</strong>.</label>
	<ul>
		{#each users as user}
			<li class="font-semibold" value={user.id}>- {user.name}</li>
		{:else}
			<p class="italic">No users in this group</p>
		{/each}
	</ul>

	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,nl=`
<script lang="ts">
	export let group;
<\/script>

<div class="p-5 rounded-lg bg-white grid gap-2">
	<label for="groupName">Group name</label>
	<input type="text" id="groupName" class="input input-primary" bind:value={group.name} />
	<label for="groupDescription">Group description</label>
	<input
		type="text"
		id="groupDescription"
		class="input input-primary"
		bind:value={group.description}
	/>
	<div class="flex gap-2 justify-end">
		<button class="btn variant-filled-error">Cancel</button>
		<button class="btn variant-filled-success">Done</button>
	</div>
</div>
`,ol=`
<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

	export let row;
	export let dispatchFn;

	const eventDispatchFn = (type: string) => {
		return dispatchFn({ type, row });
	};

	const buttons = [
		{
			icon: faPlus,
			color: 'variant-filled-primary',
			type: 'CREATE'
		},
		{
			icon: faEye,
			color: 'variant-filled-secondary',
			type: 'READ'
		},
		{
			icon: faPen,
			color: 'variant-filled-warning',
			type: 'UPDATE'
		},
		{
			icon: faTrash,
			color: 'variant-filled-error',
			type: 'DELETE'
		}
	];
<\/script>

<div class="flex gap-2 w-min">
	{#each buttons as button}
		<button
			class={\`btn btn-sm btn-icon rounded-md \${button.color}\`}
			on:click|preventDefault={() => eventDispatchFn(button.type)}
		>
			<Fa icon={button.icon} />
		</button>
	{/each}
</div>
`;function al(o){let e,t,s,r="TableConfig <T>",n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H,j,X,Z,z,se,O,M,W,ee="Writable <T[]>",ce,ne,te,Se,Be,A,Ie,pe,oe,re,be,Ye,xe,_e,Ze="SvelteComponent",Me,ue,ae,Oe,Te,Ge,Ue,Qe,Ee,De,me,We,Le,Ae,dt="number[]",et,de,ie,Re,tt,$e,he,Pe,Dt,He,st,Tt="number",ke,Ve,Fe,Et,$t,ye,Je,rt,je,Ct,qe,yt="Columns",Nt,Ce,Q,ze,mt,Mt,Pt,lt,ft,Ht;return g=new ns({props:{language:"ts",code:Pr}}),{c(){e=u("div"),t=u("div"),s=u("h3"),n=D(r),a=y(),m=u("button"),p=D("Show type details"),h=y(),b=u("div"),v=D("Underlined attributes are "),_=u("strong"),$=D("required"),I=D("."),V=y(),k=u("div"),J(g.$$.fragment),U=y(),T=u("div"),C=u("div"),S=u("div"),N=D("id:"),F=y(),B=u("div"),R=D("string"),x=y(),H=u("p"),j=D("Unique identifier for the table to generate unique IDs for the filters."),X=y(),Z=u("div"),z=u("div"),se=u("div"),O=D("data:"),M=y(),W=u("div"),ce=D(ee),ne=y(),te=u("p"),Se=D("A writable store of the type "),Be=u("code"),A=D("T[]"),Ie=D(`. Any changes in the store will
			be reflected in the table.`),pe=y(),oe=u("div"),re=u("div"),be=u("div"),Ye=D("optionsComponent:"),xe=y(),_e=u("div"),Me=D(Ze),ue=y(),ae=u("p"),Oe=D(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Te=u("code"),Ge=D("optionsComponent"),Ue=D(" was provided."),Qe=y(),Ee=u("div"),De=u("div"),me=u("div"),We=D("pageSizes:"),Le=y(),Ae=u("div"),et=D(dt),de=y(),ie=u("p"),Re=D("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),tt=y(),$e=u("div"),he=u("div"),Pe=u("div"),Dt=D("defaultPageSize:"),He=y(),st=u("div"),ke=D(Tt),Ve=y(),Fe=u("p"),Et=D(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),$t=y(),ye=u("div"),Je=u("div"),rt=u("div"),je=D("columns:"),Ct=y(),qe=u("div"),Nt=D(yt),Ce=y(),Q=u("p"),ze=D("An object with configuration for specific columns. "),mt=u("code"),Mt=D("Columns"),Pt=D(`
			object is described below.`),this.h()},l(Ke){e=d(Ke,"DIV",{class:!0});var we=f(e);t=d(we,"DIV",{class:!0,id:!0});var Ne=f(t);s=d(Ne,"H3",{class:!0});var ht=f(s);n=E(ht,r),ht.forEach(i),a=w(Ne),m=d(Ne,"BUTTON",{class:!0});var jt=f(m);p=E(jt,"Show type details"),jt.forEach(i),h=w(Ne),b=d(Ne,"DIV",{class:!0});var wt=f(b);v=E(wt,"Underlined attributes are "),_=d(wt,"STRONG",{});var zt=f(_);$=E(zt,"required"),zt.forEach(i),I=E(wt,"."),wt.forEach(i),V=w(Ne),k=d(Ne,"DIV",{class:!0,"data-popup":!0});var gt=f(k);K(g.$$.fragment,gt),gt.forEach(i),Ne.forEach(i),U=w(we),T=d(we,"DIV",{class:!0});var nt=f(T);C=d(nt,"DIV",{class:!0});var It=f(C);S=d(It,"DIV",{class:!0});var Wt=f(S);N=E(Wt,"id:"),Wt.forEach(i),F=w(It),B=d(It,"DIV",{class:!0});var Jt=f(B);R=E(Jt,"string"),Jt.forEach(i),It.forEach(i),x=w(nt),H=d(nt,"P",{class:!0});var vt=f(H);j=E(vt,"Unique identifier for the table to generate unique IDs for the filters."),vt.forEach(i),nt.forEach(i),X=w(we),Z=d(we,"DIV",{class:!0});var ot=f(Z);z=d(ot,"DIV",{class:!0});var Ut=f(z);se=d(Ut,"DIV",{class:!0});var qt=f(se);O=E(qt,"data:"),qt.forEach(i),M=w(Ut),W=d(Ut,"DIV",{class:!0});var at=f(W);ce=E(at,ee),at.forEach(i),Ut.forEach(i),ne=w(ot),te=d(ot,"P",{class:!0});var Xe=f(te);Se=E(Xe,"A writable store of the type "),Be=d(Xe,"CODE",{class:!0});var kt=f(Be);A=E(kt,"T[]"),kt.forEach(i),Ie=E(Xe,`. Any changes in the store will
			be reflected in the table.`),Xe.forEach(i),ot.forEach(i),pe=w(we),oe=d(we,"DIV",{class:!0});var Vt=f(oe);re=d(Vt,"DIV",{class:!0});var bt=f(re);be=d(bt,"DIV",{class:!0});var Yt=f(be);Ye=E(Yt,"optionsComponent:"),Yt.forEach(i),xe=w(bt),_e=d(bt,"DIV",{class:!0});var St=f(_e);Me=E(St,Ze),St.forEach(i),bt.forEach(i),ue=w(Vt),ae=d(Vt,"P",{class:!0});var it=f(ae);Oe=E(it,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Te=d(it,"CODE",{class:!0});var At=f(Te);Ge=E(At,"optionsComponent"),At.forEach(i),Ue=E(it," was provided."),it.forEach(i),Vt.forEach(i),Qe=w(we),Ee=d(we,"DIV",{class:!0});var Rt=f(Ee);De=d(Rt,"DIV",{class:!0});var Ft=f(De);me=d(Ft,"DIV",{class:!0});var Bt=f(me);We=E(Bt,"pageSizes:"),Bt.forEach(i),Le=w(Ft),Ae=d(Ft,"DIV",{class:!0});var _t=f(Ae);et=E(_t,dt),_t.forEach(i),Ft.forEach(i),de=w(Rt),ie=d(Rt,"P",{class:!0});var Gt=f(ie);Re=E(Gt,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Gt.forEach(i),Rt.forEach(i),tt=w(we),$e=d(we,"DIV",{class:!0});var xt=f($e);he=d(xt,"DIV",{class:!0});var Ot=f(he);Pe=d(Ot,"DIV",{class:!0});var rs=f(Pe);Dt=E(rs,"defaultPageSize:"),rs.forEach(i),He=w(Ot),st=d(Ot,"DIV",{class:!0});var _s=f(st);ke=E(_s,Tt),_s.forEach(i),Ot.forEach(i),Ve=w(xt),Fe=d(xt,"P",{class:!0});var Ds=f(Fe);Et=E(Ds,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Ds.forEach(i),xt.forEach(i),$t=w(we),ye=d(we,"DIV",{class:!0});var as=f(ye);Je=d(as,"DIV",{class:!0});var is=f(Je);rt=d(is,"DIV",{class:!0});var Es=f(rt);je=E(Es,"columns:"),Es.forEach(i),Ct=w(is),qe=d(is,"DIV",{class:!0});var $s=f(qe);Nt=E($s,yt),$s.forEach(i),is.forEach(i),Ce=w(as),Q=d(as,"P",{class:!0});var cs=f(Q);ze=E(cs,"An object with configuration for specific columns. "),mt=d(cs,"CODE",{class:!0});var Cs=f(mt);Mt=E(Cs,"Columns"),Cs.forEach(i),Pt=E(cs,`
			object is described below.`),cs.forEach(i),as.forEach(i),we.forEach(i),this.h()},h(){c(s,"class","font-semibold relative w-max"),c(m,"class","btn variant-ghost-primary w-min"),c(b,"class","italic div"),c(k,"class","variant-filled-secondary"),c(k,"data-popup","popupClickTableConfig"),c(t,"class","grid gap-2"),c(t,"id","tableConfig"),c(S,"class","italic"),c(B,"class","font-bold"),c(C,"class","flex gap-2 underline"),c(H,"class","text-xl pl-10"),c(T,"class","items-center"),c(se,"class","italic"),c(W,"class","font-bold"),c(z,"class","flex gap-2 underline"),c(Be,"class","!text-xl"),c(te,"class","text-xl pl-10"),c(Z,"class","items-center"),c(be,"class","italic"),c(_e,"class","font-bold"),c(re,"class","flex gap-2"),c(Te,"class","!text-xl"),c(ae,"class","text-xl pl-10"),c(oe,"class","items-center"),c(me,"class","italic"),c(Ae,"class","font-bold"),c(De,"class","flex gap-2"),c(ie,"class","text-xl pl-10"),c(Ee,"class","items-center"),c(Pe,"class","italic"),c(st,"class","font-bold"),c(he,"class","flex gap-2"),c(Fe,"class","text-xl pl-10"),c($e,"class","items-center"),c(rt,"class","italic"),c(qe,"class","font-bold"),c(Je,"class","flex gap-2"),c(mt,"class","!text-xl"),c(Q,"class","text-xl pl-10"),c(ye,"class","items-center"),c(e,"class","grid gap-5")},m(Ke,we){P(Ke,e,we),l(e,t),l(t,s),l(s,n),l(t,a),l(t,m),l(m,p),l(t,h),l(t,b),l(b,v),l(b,_),l(_,$),l(b,I),l(t,V),l(t,k),q(g,k,null),l(e,U),l(e,T),l(T,C),l(C,S),l(S,N),l(C,F),l(C,B),l(B,R),l(T,x),l(T,H),l(H,j),l(e,X),l(e,Z),l(Z,z),l(z,se),l(se,O),l(z,M),l(z,W),l(W,ce),l(Z,ne),l(Z,te),l(te,Se),l(te,Be),l(Be,A),l(te,Ie),l(e,pe),l(e,oe),l(oe,re),l(re,be),l(be,Ye),l(re,xe),l(re,_e),l(_e,Me),l(oe,ue),l(oe,ae),l(ae,Oe),l(ae,Te),l(Te,Ge),l(ae,Ue),l(e,Qe),l(e,Ee),l(Ee,De),l(De,me),l(me,We),l(De,Le),l(De,Ae),l(Ae,et),l(Ee,de),l(Ee,ie),l(ie,Re),l(e,tt),l(e,$e),l($e,he),l(he,Pe),l(Pe,Dt),l(he,He),l(he,st),l(st,ke),l($e,Ve),l($e,Fe),l(Fe,Et),l(e,$t),l(e,ye),l(ye,Je),l(Je,rt),l(rt,je),l(Je,Ct),l(Je,qe),l(qe,Nt),l(ye,Ce),l(ye,Q),l(Q,ze),l(Q,mt),l(mt,Mt),l(Q,Pt),lt=!0,ft||(Ht=ls(ps.call(null,m,o[0])),ft=!0)},p:le,i(Ke){lt||(G(g.$$.fragment,Ke),lt=!0)},o(Ke){L(g.$$.fragment,Ke),lt=!1},d(Ke){Ke&&i(e),Y(g),ft=!1,Ht()}}}function il(o){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class cl extends ge{constructor(e){super(),ve(this,e,il,al,fe,{})}}function ul(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H;return b=new ns({props:{language:"ts",code:Hr}}),{c(){e=u("div"),t=u("div"),s=u("h3"),r=D("Columns"),n=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),V=D("[key: "),k=u("strong"),g=D("string"),U=D("]:"),T=y(),C=u("div"),S=D("Column"),N=y(),F=u("p"),B=D(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(j){e=d(j,"DIV",{class:!0});var X=f(e);t=d(X,"DIV",{class:!0,id:!0});var Z=f(t);s=d(Z,"H3",{class:!0});var z=f(s);r=E(z,"Columns"),z.forEach(i),n=w(Z),a=d(Z,"BUTTON",{class:!0});var se=f(a);m=E(se,"Show type details"),se.forEach(i),p=w(Z),h=d(Z,"DIV",{"data-popup":!0});var O=f(h);K(b.$$.fragment,O),O.forEach(i),Z.forEach(i),v=w(X),_=d(X,"DIV",{class:!0});var M=f(_);$=d(M,"DIV",{class:!0});var W=f($);I=d(W,"DIV",{class:!0});var ee=f(I);V=E(ee,"[key: "),k=d(ee,"STRONG",{});var ce=f(k);g=E(ce,"string"),ce.forEach(i),U=E(ee,"]:"),ee.forEach(i),T=w(W),C=d(W,"DIV",{class:!0});var ne=f(C);S=E(ne,"Column"),ne.forEach(i),W.forEach(i),N=w(M),F=d(M,"P",{class:!0});var te=f(F);B=E(te,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),te.forEach(i),M.forEach(i),X.forEach(i),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumns"),c(t,"class","grid gap-2"),c(t,"id","columns"),c(I,"class","italic"),c(C,"class","font-bold"),c($,"class","flex gap-2"),c(F,"class","text-xl pl-10"),c(_,"class","items-center"),c(e,"class","grid gap-5")},m(j,X){P(j,e,X),l(e,t),l(t,s),l(s,r),l(t,n),l(t,a),l(a,m),l(t,p),l(t,h),q(b,h,null),l(e,v),l(e,_),l(_,$),l($,I),l(I,V),l(I,k),l(k,g),l(I,U),l($,T),l($,C),l(C,S),l(_,N),l(_,F),l(F,B),R=!0,x||(H=ls(ps.call(null,a,o[0])),x=!0)},p:le,i(j){R||(G(b.$$.fragment,j),R=!0)},o(j){L(b.$$.fragment,j),R=!1},d(j){j&&i(e),Y(b),x=!1,H()}}}function dl(o){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class fl extends ge{constructor(e){super(),ve(this,e,dl,ul,fe,{})}}function pl(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H,j,X,Z,z,se,O,M,W,ee,ce,ne,te,Se,Be,A,Ie,pe,oe,re,be,Ye,xe,_e,Ze,Me,ue,ae,Oe,Te,Ge,Ue,Qe,Ee,De,me,We,Le,Ae,dt,et,de,ie,Re,tt,$e,he,Pe,Dt,He,st,Tt,ke,Ve,Fe,Et,$t,ye,Je,rt,je,Ct,qe,yt,Nt;return b=new ns({props:{language:"ts",code:jr}}),{c(){e=u("div"),t=u("div"),s=u("h3"),r=D("Column"),n=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),V=D("header:"),k=y(),g=u("div"),U=D("string"),T=y(),C=u("p"),S=D(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),N=y(),F=u("div"),B=u("div"),R=u("div"),x=D("exclude:"),H=y(),j=u("div"),X=D("boolean"),Z=y(),z=u("p"),se=D(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),O=y(),M=u("div"),W=u("div"),ee=u("div"),ce=D("disableFiltering:"),ne=y(),te=u("div"),Se=D("boolean"),Be=y(),A=u("p"),Ie=D("Whether to disable filtering for the column or not. By default, filtering is enabled."),pe=y(),oe=u("div"),re=u("div"),be=u("div"),Ye=D("disableSorting:"),xe=y(),_e=u("div"),Ze=D("boolean"),Me=y(),ue=u("p"),ae=D("Whether to disable sorting for the column or not. By default, sorting is enabled."),Oe=y(),Te=u("div"),Ge=u("div"),Ue=u("div"),Qe=D("colFitlerFn:"),Ee=y(),De=u("div"),me=u("a"),We=D("ColumnFilterFn"),Le=y(),Ae=u("p"),dt=D(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),et=y(),de=u("div"),ie=u("div"),Re=u("div"),tt=D("colFilterComponent:"),$e=y(),he=u("div"),Pe=D("SvelteComponent"),Dt=y(),He=u("p"),st=D(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Tt=y(),ke=u("div"),Ve=u("div"),Fe=u("div"),Et=D("instructions:"),$t=y(),ye=u("div"),Je=D("ColumnInstructions"),rt=y(),je=u("p"),Ct=D("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(Ce){e=d(Ce,"DIV",{class:!0});var Q=f(e);t=d(Q,"DIV",{class:!0,id:!0});var ze=f(t);s=d(ze,"H3",{class:!0});var mt=f(s);r=E(mt,"Column"),mt.forEach(i),n=w(ze),a=d(ze,"BUTTON",{class:!0});var Mt=f(a);m=E(Mt,"Show type details"),Mt.forEach(i),p=w(ze),h=d(ze,"DIV",{"data-popup":!0});var Pt=f(h);K(b.$$.fragment,Pt),Pt.forEach(i),ze.forEach(i),v=w(Q),_=d(Q,"DIV",{class:!0});var lt=f(_);$=d(lt,"DIV",{class:!0});var ft=f($);I=d(ft,"DIV",{class:!0});var Ht=f(I);V=E(Ht,"header:"),Ht.forEach(i),k=w(ft),g=d(ft,"DIV",{class:!0});var Ke=f(g);U=E(Ke,"string"),Ke.forEach(i),ft.forEach(i),T=w(lt),C=d(lt,"P",{class:!0});var we=f(C);S=E(we,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),we.forEach(i),lt.forEach(i),N=w(Q),F=d(Q,"DIV",{class:!0});var Ne=f(F);B=d(Ne,"DIV",{class:!0});var ht=f(B);R=d(ht,"DIV",{class:!0});var jt=f(R);x=E(jt,"exclude:"),jt.forEach(i),H=w(ht),j=d(ht,"DIV",{class:!0});var wt=f(j);X=E(wt,"boolean"),wt.forEach(i),ht.forEach(i),Z=w(Ne),z=d(Ne,"P",{class:!0});var zt=f(z);se=E(zt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),zt.forEach(i),Ne.forEach(i),O=w(Q),M=d(Q,"DIV",{class:!0});var gt=f(M);W=d(gt,"DIV",{class:!0});var nt=f(W);ee=d(nt,"DIV",{class:!0});var It=f(ee);ce=E(It,"disableFiltering:"),It.forEach(i),ne=w(nt),te=d(nt,"DIV",{class:!0});var Wt=f(te);Se=E(Wt,"boolean"),Wt.forEach(i),nt.forEach(i),Be=w(gt),A=d(gt,"P",{class:!0});var Jt=f(A);Ie=E(Jt,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Jt.forEach(i),gt.forEach(i),pe=w(Q),oe=d(Q,"DIV",{class:!0});var vt=f(oe);re=d(vt,"DIV",{class:!0});var ot=f(re);be=d(ot,"DIV",{class:!0});var Ut=f(be);Ye=E(Ut,"disableSorting:"),Ut.forEach(i),xe=w(ot),_e=d(ot,"DIV",{class:!0});var qt=f(_e);Ze=E(qt,"boolean"),qt.forEach(i),ot.forEach(i),Me=w(vt),ue=d(vt,"P",{class:!0});var at=f(ue);ae=E(at,"Whether to disable sorting for the column or not. By default, sorting is enabled."),at.forEach(i),vt.forEach(i),Oe=w(Q),Te=d(Q,"DIV",{class:!0});var Xe=f(Te);Ge=d(Xe,"DIV",{class:!0});var kt=f(Ge);Ue=d(kt,"DIV",{class:!0});var Vt=f(Ue);Qe=E(Vt,"colFitlerFn:"),Vt.forEach(i),Ee=w(kt),De=d(kt,"DIV",{class:!0});var bt=f(De);me=d(bt,"A",{href:!0});var Yt=f(me);We=E(Yt,"ColumnFilterFn"),Yt.forEach(i),bt.forEach(i),kt.forEach(i),Le=w(Xe),Ae=d(Xe,"P",{class:!0});var St=f(Ae);dt=E(St,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),St.forEach(i),Xe.forEach(i),et=w(Q),de=d(Q,"DIV",{class:!0});var it=f(de);ie=d(it,"DIV",{class:!0});var At=f(ie);Re=d(At,"DIV",{class:!0});var Rt=f(Re);tt=E(Rt,"colFilterComponent:"),Rt.forEach(i),$e=w(At),he=d(At,"DIV",{class:!0});var Ft=f(he);Pe=E(Ft,"SvelteComponent"),Ft.forEach(i),At.forEach(i),Dt=w(it),He=d(it,"P",{class:!0});var Bt=f(He);st=E(Bt,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Bt.forEach(i),it.forEach(i),Tt=w(Q),ke=d(Q,"DIV",{class:!0});var _t=f(ke);Ve=d(_t,"DIV",{class:!0});var Gt=f(Ve);Fe=d(Gt,"DIV",{class:!0});var xt=f(Fe);Et=E(xt,"instructions:"),xt.forEach(i),$t=w(Gt),ye=d(Gt,"DIV",{class:!0});var Ot=f(ye);Je=E(Ot,"ColumnInstructions"),Ot.forEach(i),Gt.forEach(i),rt=w(_t),je=d(_t,"P",{class:!0});var rs=f(je);Ct=E(rs,"Configuration for the column's appearance, sorting and filtering functionalities."),rs.forEach(i),_t.forEach(i),Q.forEach(i),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumn"),c(t,"class","grid gap-2"),c(t,"id","column"),c(I,"class","italic"),c(g,"class","font-bold"),c($,"class","flex gap-2"),c(C,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(ee,"class","italic"),c(te,"class","font-bold"),c(W,"class","flex gap-2"),c(A,"class","text-xl pl-10"),c(M,"class","items-center"),c(be,"class","italic"),c(_e,"class","font-bold"),c(re,"class","flex gap-2"),c(ue,"class","text-xl pl-10"),c(oe,"class","items-center"),c(Ue,"class","italic"),c(me,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),c(De,"class","font-bold"),c(Ge,"class","flex gap-2"),c(Ae,"class","text-xl pl-10"),c(Te,"class","items-center"),c(Re,"class","italic"),c(he,"class","font-bold"),c(ie,"class","flex gap-2"),c(He,"class","text-xl pl-10"),c(de,"class","items-center"),c(Fe,"class","italic"),c(ye,"class","font-bold"),c(Ve,"class","flex gap-2"),c(je,"class","text-xl pl-10"),c(ke,"class","items-center"),c(e,"class","grid gap-5")},m(Ce,Q){P(Ce,e,Q),l(e,t),l(t,s),l(s,r),l(t,n),l(t,a),l(a,m),l(t,p),l(t,h),q(b,h,null),l(e,v),l(e,_),l(_,$),l($,I),l(I,V),l($,k),l($,g),l(g,U),l(_,T),l(_,C),l(C,S),l(e,N),l(e,F),l(F,B),l(B,R),l(R,x),l(B,H),l(B,j),l(j,X),l(F,Z),l(F,z),l(z,se),l(e,O),l(e,M),l(M,W),l(W,ee),l(ee,ce),l(W,ne),l(W,te),l(te,Se),l(M,Be),l(M,A),l(A,Ie),l(e,pe),l(e,oe),l(oe,re),l(re,be),l(be,Ye),l(re,xe),l(re,_e),l(_e,Ze),l(oe,Me),l(oe,ue),l(ue,ae),l(e,Oe),l(e,Te),l(Te,Ge),l(Ge,Ue),l(Ue,Qe),l(Ge,Ee),l(Ge,De),l(De,me),l(me,We),l(Te,Le),l(Te,Ae),l(Ae,dt),l(e,et),l(e,de),l(de,ie),l(ie,Re),l(Re,tt),l(ie,$e),l(ie,he),l(he,Pe),l(de,Dt),l(de,He),l(He,st),l(e,Tt),l(e,ke),l(ke,Ve),l(Ve,Fe),l(Fe,Et),l(Ve,$t),l(Ve,ye),l(ye,Je),l(ke,rt),l(ke,je),l(je,Ct),qe=!0,yt||(Nt=ls(ps.call(null,a,o[0])),yt=!0)},p:le,i(Ce){qe||(G(b.$$.fragment,Ce),qe=!0)},o(Ce){L(b.$$.fragment,Ce),qe=!1},d(Ce){Ce&&i(e),Y(b),yt=!1,Nt()}}}function ml(o){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class hl extends ge{constructor(e){super(),ve(this,e,ml,pl,fe,{})}}function gl(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H,j,X,Z,z,se,O,M,W,ee,ce,ne,te,Se,Be,A,Ie,pe,oe,re,be,Ye,xe,_e,Ze,Me,ue,ae,Oe,Te,Ge,Ue,Qe,Ee,De,me,We,Le,Ae,dt,et,de,ie,Re,tt,$e,he,Pe,Dt,He,st,Tt,ke,Ve,Fe,Et,$t,ye,Je,rt,je,Ct,qe,yt,Nt;return b=new ns({props:{language:"ts",code:zr}}),{c(){e=u("div"),t=u("div"),s=u("h3"),r=D("ColumnInstructions"),n=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),V=D("toStringFn:"),k=y(),g=u("div"),U=D("(value: any) => string"),T=y(),C=u("p"),S=D("Custom toString function to be applied on the column."),N=y(),F=u("div"),B=u("div"),R=u("div"),x=D("toSortableValueFn:"),H=y(),j=u("div"),X=D("(value: any) => string | number"),Z=y(),z=u("p"),se=D("Custom function to return either a string or a number value to have a sortable column."),O=y(),M=u("div"),W=u("div"),ee=u("div"),ce=D("toFilterableValueFn:"),ne=y(),te=u("div"),Se=D("(value: any) => string | number | Date"),Be=y(),A=u("p"),Ie=D(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),pe=y(),oe=u("div"),re=u("div"),be=u("div"),Ye=D("renderComponent:"),xe=y(),_e=u("div"),Ze=D("SvelteComponent"),Me=y(),ue=u("div"),ae=u("p"),Oe=u("code"),Te=D("renderComponent"),Ge=D(" overrides "),Ue=u("code"),Qe=D("toStringFn"),Ee=D("."),De=y(),me=u("p"),We=D("Every "),Le=u("code"),Ae=D("renderComponent"),dt=D(" will get 2 props:"),et=y(),de=u("div"),ie=u("div"),Re=u("div"),tt=D("row:"),$e=y(),he=u("div"),Pe=D("Object"),Dt=y(),He=u("p"),st=D("The current row in the table. In other words, a single object from the data store."),Tt=y(),ke=u("div"),Ve=u("div"),Fe=u("div"),Et=D("value:"),$t=y(),ye=u("div"),Je=D("any"),rt=y(),je=u("p"),Ct=D("The value of the current cell."),this.h()},l(Ce){e=d(Ce,"DIV",{class:!0});var Q=f(e);t=d(Q,"DIV",{class:!0,id:!0});var ze=f(t);s=d(ze,"H3",{class:!0});var mt=f(s);r=E(mt,"ColumnInstructions"),mt.forEach(i),n=w(ze),a=d(ze,"BUTTON",{class:!0});var Mt=f(a);m=E(Mt,"Show type details"),Mt.forEach(i),p=w(ze),h=d(ze,"DIV",{"data-popup":!0});var Pt=f(h);K(b.$$.fragment,Pt),Pt.forEach(i),ze.forEach(i),v=w(Q),_=d(Q,"DIV",{class:!0});var lt=f(_);$=d(lt,"DIV",{class:!0});var ft=f($);I=d(ft,"DIV",{class:!0});var Ht=f(I);V=E(Ht,"toStringFn:"),Ht.forEach(i),k=w(ft),g=d(ft,"DIV",{class:!0});var Ke=f(g);U=E(Ke,"(value: any) => string"),Ke.forEach(i),ft.forEach(i),T=w(lt),C=d(lt,"P",{class:!0});var we=f(C);S=E(we,"Custom toString function to be applied on the column."),we.forEach(i),lt.forEach(i),N=w(Q),F=d(Q,"DIV",{class:!0});var Ne=f(F);B=d(Ne,"DIV",{class:!0});var ht=f(B);R=d(ht,"DIV",{class:!0});var jt=f(R);x=E(jt,"toSortableValueFn:"),jt.forEach(i),H=w(ht),j=d(ht,"DIV",{class:!0});var wt=f(j);X=E(wt,"(value: any) => string | number"),wt.forEach(i),ht.forEach(i),Z=w(Ne),z=d(Ne,"P",{class:!0});var zt=f(z);se=E(zt,"Custom function to return either a string or a number value to have a sortable column."),zt.forEach(i),Ne.forEach(i),O=w(Q),M=d(Q,"DIV",{class:!0});var gt=f(M);W=d(gt,"DIV",{class:!0});var nt=f(W);ee=d(nt,"DIV",{class:!0});var It=f(ee);ce=E(It,"toFilterableValueFn:"),It.forEach(i),ne=w(nt),te=d(nt,"DIV",{class:!0});var Wt=f(te);Se=E(Wt,"(value: any) => string | number | Date"),Wt.forEach(i),nt.forEach(i),Be=w(gt),A=d(gt,"P",{class:!0});var Jt=f(A);Ie=E(Jt,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Jt.forEach(i),gt.forEach(i),pe=w(Q),oe=d(Q,"DIV",{class:!0});var vt=f(oe);re=d(vt,"DIV",{class:!0});var ot=f(re);be=d(ot,"DIV",{class:!0});var Ut=f(be);Ye=E(Ut,"renderComponent:"),Ut.forEach(i),xe=w(ot),_e=d(ot,"DIV",{class:!0});var qt=f(_e);Ze=E(qt,"SvelteComponent"),qt.forEach(i),ot.forEach(i),Me=w(vt),ue=d(vt,"DIV",{class:!0});var at=f(ue);ae=d(at,"P",{class:!0});var Xe=f(ae);Oe=d(Xe,"CODE",{});var kt=f(Oe);Te=E(kt,"renderComponent"),kt.forEach(i),Ge=E(Xe," overrides "),Ue=d(Xe,"CODE",{});var Vt=f(Ue);Qe=E(Vt,"toStringFn"),Vt.forEach(i),Ee=E(Xe,"."),Xe.forEach(i),De=w(at),me=d(at,"P",{class:!0});var bt=f(me);We=E(bt,"Every "),Le=d(bt,"CODE",{});var Yt=f(Le);Ae=E(Yt,"renderComponent"),Yt.forEach(i),dt=E(bt," will get 2 props:"),bt.forEach(i),et=w(at),de=d(at,"DIV",{class:!0});var St=f(de);ie=d(St,"DIV",{class:!0});var it=f(ie);Re=d(it,"DIV",{class:!0});var At=f(Re);tt=E(At,"row:"),At.forEach(i),$e=w(it),he=d(it,"DIV",{class:!0});var Rt=f(he);Pe=E(Rt,"Object"),Rt.forEach(i),it.forEach(i),Dt=w(St),He=d(St,"P",{class:!0});var Ft=f(He);st=E(Ft,"The current row in the table. In other words, a single object from the data store."),Ft.forEach(i),St.forEach(i),Tt=w(at),ke=d(at,"DIV",{class:!0});var Bt=f(ke);Ve=d(Bt,"DIV",{class:!0});var _t=f(Ve);Fe=d(_t,"DIV",{class:!0});var Gt=f(Fe);Et=E(Gt,"value:"),Gt.forEach(i),$t=w(_t),ye=d(_t,"DIV",{class:!0});var xt=f(ye);Je=E(xt,"any"),xt.forEach(i),_t.forEach(i),rt=w(Bt),je=d(Bt,"P",{class:!0});var Ot=f(je);Ct=E(Ot,"The value of the current cell."),Ot.forEach(i),Bt.forEach(i),at.forEach(i),vt.forEach(i),Q.forEach(i),this.h()},h(){c(s,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumnInstructions"),c(t,"class","grid gap-2"),c(t,"id","columnInstructions"),c(I,"class","italic"),c(g,"class","font-bold"),c($,"class","flex gap-2"),c(C,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(ee,"class","italic"),c(te,"class","font-bold"),c(W,"class","flex gap-2"),c(A,"class","text-xl pl-10"),c(M,"class","items-center"),c(be,"class","italic"),c(_e,"class","font-bold"),c(re,"class","flex gap-2"),c(ae,"class","underline"),c(me,"class",""),c(Re,"class","italic"),c(he,"class","font-bold"),c(ie,"class","flex gap-2"),c(He,"class","text-xl pl-10"),c(de,"class","items-center mt-2"),c(Fe,"class","italic"),c(ye,"class","font-bold"),c(Ve,"class","flex gap-2"),c(je,"class","text-xl pl-10"),c(ke,"class","items-center mt-2"),c(ue,"class","ml-5"),c(oe,"class","items-center mt-5"),c(e,"class","grid gap-5")},m(Ce,Q){P(Ce,e,Q),l(e,t),l(t,s),l(s,r),l(t,n),l(t,a),l(a,m),l(t,p),l(t,h),q(b,h,null),l(e,v),l(e,_),l(_,$),l($,I),l(I,V),l($,k),l($,g),l(g,U),l(_,T),l(_,C),l(C,S),l(e,N),l(e,F),l(F,B),l(B,R),l(R,x),l(B,H),l(B,j),l(j,X),l(F,Z),l(F,z),l(z,se),l(e,O),l(e,M),l(M,W),l(W,ee),l(ee,ce),l(W,ne),l(W,te),l(te,Se),l(M,Be),l(M,A),l(A,Ie),l(e,pe),l(e,oe),l(oe,re),l(re,be),l(be,Ye),l(re,xe),l(re,_e),l(_e,Ze),l(oe,Me),l(oe,ue),l(ue,ae),l(ae,Oe),l(Oe,Te),l(ae,Ge),l(ae,Ue),l(Ue,Qe),l(ae,Ee),l(ue,De),l(ue,me),l(me,We),l(me,Le),l(Le,Ae),l(me,dt),l(ue,et),l(ue,de),l(de,ie),l(ie,Re),l(Re,tt),l(ie,$e),l(ie,he),l(he,Pe),l(de,Dt),l(de,He),l(He,st),l(ue,Tt),l(ue,ke),l(ke,Ve),l(Ve,Fe),l(Fe,Et),l(Ve,$t),l(Ve,ye),l(ye,Je),l(ke,rt),l(ke,je),l(je,Ct),qe=!0,yt||(Nt=ls(ps.call(null,a,o[0])),yt=!0)},p:le,i(Ce){qe||(G(b.$$.fragment,Ce),qe=!0)},o(Ce){L(b.$$.fragment,Ce),qe=!1},d(Ce){Ce&&i(e),Y(b),yt=!1,Nt()}}}function vl(o){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class bl extends ge{constructor(e){super(),ve(this,e,vl,gl,fe,{})}}function Bs(o,e,t){const s=o.slice();return s[5]=e[t],s}function Gs(o){let e,t,s,r,n,a;t=new fr({props:{icon:o[5].icon}});function m(){return o[4](o[5])}return{c(){e=u("button"),J(t.$$.fragment),s=y(),this.h()},l(p){e=d(p,"BUTTON",{class:!0});var h=f(e);K(t.$$.fragment,h),s=w(h),h.forEach(i),this.h()},h(){c(e,"class",`btn btn-sm btn-icon rounded-md ${o[5].color}`)},m(p,h){P(p,e,h),q(t,e,null),l(e,s),r=!0,n||(a=pt(e,"click",Zs(m)),n=!0)},p(p,h){o=p},i(p){r||(G(t.$$.fragment,p),r=!0)},o(p){L(t.$$.fragment,p),r=!1},d(p){p&&i(e),Y(t),n=!1,a()}}}function _l(o){let e,t,s=o[1],r=[];for(let a=0;a<s.length;a+=1)r[a]=Gs(Bs(o,s,a));const n=a=>L(r[a],1,1,()=>{r[a]=null});return{c(){e=u("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=d(a,"DIV",{class:!0});var m=f(e);for(let p=0;p<r.length;p+=1)r[p].l(m);m.forEach(i),this.h()},h(){c(e,"class","flex gap-2 w-min")},m(a,m){P(a,e,m);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(e,null);t=!0},p(a,[m]){if(m&3){s=a[1];let p;for(p=0;p<s.length;p+=1){const h=Bs(a,s,p);r[p]?(r[p].p(h,m),G(r[p],1)):(r[p]=Gs(h),r[p].c(),G(r[p],1),r[p].m(e,null))}for(Kt(),p=s.length;p<r.length;p+=1)n(p);Xt()}},i(a){if(!t){for(let m=0;m<s.length;m+=1)G(r[m]);t=!0}},o(a){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)L(r[m]);t=!1},d(a){a&&i(e),ss(r,a)}}}function Dl(o,e,t){let{row:s}=e,{dispatchFn:r}=e;const n=p=>r({type:p,row:s}),a=[{icon:pr,color:"variant-filled-primary",type:"CREATE"},{icon:mr,color:"variant-filled-secondary",type:"READ"},{icon:hr,color:"variant-filled-warning",type:"UPDATE"},{icon:gr,color:"variant-filled-error",type:"DELETE"}],m=p=>n(p.type);return o.$$set=p=>{"row"in p&&t(2,s=p.row),"dispatchFn"in p&&t(3,r=p.dispatchFn)},[n,a,s,r,m]}class El extends ge{constructor(e){super(),ve(this,e,Dl,_l,fe,{row:2,dispatchFn:3})}}function xs(o,e,t){const s=o.slice();return s[2]=e[t],s}function Os(o){let e,t=o[2].name+"",s,r;return{c(){e=u("option"),s=D(t),this.h()},l(n){e=d(n,"OPTION",{});var a=f(e);s=E(a,t),a.forEach(i),this.h()},h(){e.__value=r=o[2].id,e.value=e.__value},m(n,a){P(n,e,a),l(e,s)},p(n,a){a&1&&t!==(t=n[2].name+"")&&ut(s,t),a&1&&r!==(r=n[2].id)&&(e.__value=r,e.value=e.__value)},d(n){n&&i(e)}}}function $l(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k=o[0],g=[];for(let U=0;U<k.length;U+=1)g[U]=Os(xs(o,k,U));return{c(){e=u("div"),t=u("label"),s=D("Select the users you would like to add to the "),r=u("strong"),n=D(o[1]),a=D("."),m=y(),p=u("select");for(let U=0;U<g.length;U+=1)g[U].c();h=y(),b=u("div"),v=u("button"),_=D("Cancel"),$=y(),I=u("button"),V=D("Done"),this.h()},l(U){e=d(U,"DIV",{class:!0});var T=f(e);t=d(T,"LABEL",{for:!0});var C=f(t);s=E(C,"Select the users you would like to add to the "),r=d(C,"STRONG",{});var S=f(r);n=E(S,o[1]),S.forEach(i),a=E(C,"."),C.forEach(i),m=w(T),p=d(T,"SELECT",{name:!0,class:!0,id:!0});var N=f(p);for(let x=0;x<g.length;x+=1)g[x].l(N);N.forEach(i),h=w(T),b=d(T,"DIV",{class:!0});var F=f(b);v=d(F,"BUTTON",{class:!0});var B=f(v);_=E(B,"Cancel"),B.forEach(i),$=w(F),I=d(F,"BUTTON",{class:!0});var R=f(I);V=E(R,"Done"),R.forEach(i),F.forEach(i),T.forEach(i),this.h()},h(){c(t,"for","users"),p.multiple=!0,c(p,"name","users"),c(p,"class","select"),c(p,"id",""),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(U,T){P(U,e,T),l(e,t),l(t,s),l(t,r),l(r,n),l(t,a),l(e,m),l(e,p);for(let C=0;C<g.length;C+=1)g[C]&&g[C].m(p,null);l(e,h),l(e,b),l(b,v),l(v,_),l(b,$),l(b,I),l(I,V)},p(U,[T]){if(T&2&&ut(n,U[1]),T&1){k=U[0];let C;for(C=0;C<k.length;C+=1){const S=xs(U,k,C);g[C]?g[C].p(S,T):(g[C]=Os(S),g[C].c(),g[C].m(p,null))}for(;C<g.length;C+=1)g[C].d(1);g.length=k.length}},i:le,o:le,d(U){U&&i(e),ss(g,U)}}}function Cl(o,e,t){let{users:s}=e,{group:r}=e;return o.$$set=n=>{"users"in n&&t(0,s=n.users),"group"in n&&t(1,r=n.group)},[s,r]}class Tl extends ge{constructor(e){super(),ve(this,e,Cl,$l,fe,{users:0,group:1})}}function Ls(o,e,t){const s=o.slice();return s[2]=e[t],s}function Ns(o){let e,t;return{c(){e=u("p"),t=D("No users in this group"),this.h()},l(s){e=d(s,"P",{class:!0});var r=f(e);t=E(r,"No users in this group"),r.forEach(i),this.h()},h(){c(e,"class","italic")},m(s,r){P(s,e,r),l(e,t)},p:le,d(s){s&&i(e)}}}function Ms(o){let e,t,s=o[2].name+"",r,n;return{c(){e=u("li"),t=D("- "),r=D(s),this.h()},l(a){e=d(a,"LI",{class:!0});var m=f(e);t=E(m,"- "),r=E(m,s),m.forEach(i),this.h()},h(){c(e,"class","font-semibold"),e.value=n=o[2].id},m(a,m){P(a,e,m),l(e,t),l(e,r)},p(a,m){m&1&&s!==(s=a[2].name+"")&&ut(r,s),m&1&&n!==(n=a[2].id)&&(e.value=n)},d(a){a&&i(e)}}}function yl(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k=o[0],g=[];for(let T=0;T<k.length;T+=1)g[T]=Ms(Ls(o,k,T));let U=null;return k.length||(U=Ns()),{c(){e=u("div"),t=u("label"),s=D("Users in "),r=u("strong"),n=D(o[1]),a=D("."),m=y(),p=u("ul");for(let T=0;T<g.length;T+=1)g[T].c();U&&U.c(),h=y(),b=u("div"),v=u("button"),_=D("Cancel"),$=y(),I=u("button"),V=D("Done"),this.h()},l(T){e=d(T,"DIV",{class:!0});var C=f(e);t=d(C,"LABEL",{for:!0});var S=f(t);s=E(S,"Users in "),r=d(S,"STRONG",{});var N=f(r);n=E(N,o[1]),N.forEach(i),a=E(S,"."),S.forEach(i),m=w(C),p=d(C,"UL",{});var F=f(p);for(let H=0;H<g.length;H+=1)g[H].l(F);U&&U.l(F),F.forEach(i),h=w(C),b=d(C,"DIV",{class:!0});var B=f(b);v=d(B,"BUTTON",{class:!0});var R=f(v);_=E(R,"Cancel"),R.forEach(i),$=w(B),I=d(B,"BUTTON",{class:!0});var x=f(I);V=E(x,"Done"),x.forEach(i),B.forEach(i),C.forEach(i),this.h()},h(){c(t,"for","users"),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(T,C){P(T,e,C),l(e,t),l(t,s),l(t,r),l(r,n),l(t,a),l(e,m),l(e,p);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(p,null);U&&U.m(p,null),l(e,h),l(e,b),l(b,v),l(v,_),l(b,$),l(b,I),l(I,V)},p(T,[C]){if(C&2&&ut(n,T[1]),C&1){k=T[0];let S;for(S=0;S<k.length;S+=1){const N=Ls(T,k,S);g[S]?g[S].p(N,C):(g[S]=Ms(N),g[S].c(),g[S].m(p,null))}for(;S<g.length;S+=1)g[S].d(1);g.length=k.length,!k.length&&U?U.p(T,C):k.length?U&&(U.d(1),U=null):(U=Ns(),U.c(),U.m(p,null))}},i:le,o:le,d(T){T&&i(e),ss(g,T),U&&U.d()}}}function wl(o,e,t){let{users:s}=e,{group:r}=e;return o.$$set=n=>{"users"in n&&t(0,s=n.users),"group"in n&&t(1,r=n.group)},[s,r]}class Il extends ge{constructor(e){super(),ve(this,e,wl,yl,fe,{users:0,group:1})}}function Ul(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T;return{c(){e=u("div"),t=u("label"),s=D("Group name"),r=y(),n=u("input"),a=y(),m=u("label"),p=D("Group description"),h=y(),b=u("input"),v=y(),_=u("div"),$=u("button"),I=D("Cancel"),V=y(),k=u("button"),g=D("Done"),this.h()},l(C){e=d(C,"DIV",{class:!0});var S=f(e);t=d(S,"LABEL",{for:!0});var N=f(t);s=E(N,"Group name"),N.forEach(i),r=w(S),n=d(S,"INPUT",{type:!0,id:!0,class:!0}),a=w(S),m=d(S,"LABEL",{for:!0});var F=f(m);p=E(F,"Group description"),F.forEach(i),h=w(S),b=d(S,"INPUT",{type:!0,id:!0,class:!0}),v=w(S),_=d(S,"DIV",{class:!0});var B=f(_);$=d(B,"BUTTON",{class:!0});var R=f($);I=E(R,"Cancel"),R.forEach(i),V=w(B),k=d(B,"BUTTON",{class:!0});var x=f(k);g=E(x,"Done"),x.forEach(i),B.forEach(i),S.forEach(i),this.h()},h(){c(t,"for","groupName"),c(n,"type","text"),c(n,"id","groupName"),c(n,"class","input input-primary"),c(m,"for","groupDescription"),c(b,"type","text"),c(b,"id","groupDescription"),c(b,"class","input input-primary"),c($,"class","btn variant-filled-error"),c(k,"class","btn variant-filled-success"),c(_,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(C,S){P(C,e,S),l(e,t),l(t,s),l(e,r),l(e,n),ts(n,o[0].name),l(e,a),l(e,m),l(m,p),l(e,h),l(e,b),ts(b,o[0].description),l(e,v),l(e,_),l(_,$),l($,I),l(_,V),l(_,k),l(k,g),U||(T=[pt(n,"input",o[1]),pt(b,"input",o[2])],U=!0)},p(C,[S]){S&1&&n.value!==C[0].name&&ts(n,C[0].name),S&1&&b.value!==C[0].description&&ts(b,C[0].description)},i:le,o:le,d(C){C&&i(e),U=!1,fs(T)}}}function kl(o,e,t){let{group:s}=e;function r(){s.name=this.value,t(0,s)}function n(){s.description=this.value,t(0,s)}return o.$$set=a=>{"group"in a&&t(0,s=a.group)},[s,r,n]}class Vl extends ge{constructor(e){super(),ve(this,e,kl,Ul,fe,{group:0})}}const Sl=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3"},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Al=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Rl=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Fl=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Bl=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],Gl=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],er=Qt(Sl),hs=Qt(Al),xl=Qt(Rl),Ol=Qt(Gl),Ll=Qt(Bl),Ps={32655:"NA",32654:"NM",32653:"ND"},Nl=Qt(Fl);function Hs(o,e,t){const s=o.slice();return s[6]=e[t],s[8]=t,s}function js(o,e,t){const s=o.slice();return s[6]=e[t],s[8]=t,s}function zs(o){let e,t;return{c(){e=u("h3"),t=D(o[0]),this.h()},l(s){e=d(s,"H3",{class:!0});var r=f(e);t=E(r,o[0]),r.forEach(i),this.h()},h(){c(e,"class","h3")},m(s,r){P(s,e,r),l(e,t)},p(s,r){r&1&&ut(t,s[0])},d(s){s&&i(e)}}}function Ml(o){let e=o[6].name+"",t;return{c(){t=D(e)},l(s){t=E(s,e)},m(s,r){P(s,t,r)},p(s,r){r&2&&e!==(e=s[6].name+"")&&ut(t,e)},d(s){s&&i(t)}}}function Ws(o){let e,t,s;function r(a){o[4](a)}let n={name:`tab${o[8]}`,value:o[8],$$slots:{default:[Ml]},$$scope:{ctx:o}};return o[2]!==void 0&&(n.group=o[2]),e=new br({props:n}),cr.push(()=>ur(e,"group",r)),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,m){q(e,a,m),s=!0},p(a,m){const p={};m&34&&(p.$$scope={dirty:m,ctx:a}),!t&&m&4&&(t=!0,p.group=a[2],dr(()=>t=!1)),e.$set(p)},i(a){s||(G(e.$$.fragment,a),s=!0)},o(a){L(e.$$.fragment,a),s=!1},d(a){Y(e,a)}}}function Pl(o){let e,t,s=o[1],r=[];for(let a=0;a<s.length;a+=1)r[a]=Ws(Hs(o,s,a));const n=a=>L(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=ct()},l(a){for(let m=0;m<r.length;m+=1)r[m].l(a);e=ct()},m(a,m){for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){s=a[1];let p;for(p=0;p<s.length;p+=1){const h=Hs(a,s,p);r[p]?(r[p].p(h,m),G(r[p],1)):(r[p]=Ws(h),r[p].c(),G(r[p],1),r[p].m(e.parentNode,e))}for(Kt(),p=s.length;p<r.length;p+=1)n(p);Xt()}},i(a){if(!t){for(let m=0;m<s.length;m+=1)G(r[m]);t=!0}},o(a){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)L(r[m]);t=!1},d(a){ss(r,a),a&&i(e)}}}function Js(o){let e,t;return e=new ns({props:{language:o[6].language,code:o[6].code}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p(s,r){const n={};r&2&&(n.language=s[6].language),r&2&&(n.code=s[6].code),e.$set(n)},i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function qs(o){let e,t,s=o[2]===o[8]&&Js(o);return{c(){s&&s.c(),e=ct()},l(r){s&&s.l(r),e=ct()},m(r,n){s&&s.m(r,n),P(r,e,n),t=!0},p(r,n){r[2]===r[8]?s?(s.p(r,n),n&4&&G(s,1)):(s=Js(r),s.c(),G(s,1),s.m(e.parentNode,e)):s&&(Kt(),L(s,1,1,()=>{s=null}),Xt())},i(r){t||(G(s),t=!0)},o(r){L(s),t=!1},d(r){s&&s.d(r),r&&i(e)}}}function Hl(o){let e,t,s=o[1],r=[];for(let a=0;a<s.length;a+=1)r[a]=qs(js(o,s,a));const n=a=>L(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=ct()},l(a){for(let m=0;m<r.length;m+=1)r[m].l(a);e=ct()},m(a,m){for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){s=a[1];let p;for(p=0;p<s.length;p+=1){const h=js(a,s,p);r[p]?(r[p].p(h,m),G(r[p],1)):(r[p]=qs(h),r[p].c(),G(r[p],1),r[p].m(e.parentNode,e))}for(Kt(),p=s.length;p<r.length;p+=1)n(p);Xt()}},i(a){if(!t){for(let m=0;m<s.length;m+=1)G(r[m]);t=!0}},o(a){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)L(r[m]);t=!1},d(a){ss(r,a),a&&i(e)}}}function jl(o){let e,t,s,r,n,a,m,p,h,b=o[0]&&zs(o);const v=o[3].default,_=nr(v,o,o[5],null);return p=new vr({props:{$$slots:{panel:[Hl],default:[Pl]},$$scope:{ctx:o}}}),{c(){e=u("div"),t=u("div"),b&&b.c(),s=y(),r=u("div"),n=u("div"),_&&_.c(),a=y(),m=u("div"),J(p.$$.fragment),this.h()},l($){e=d($,"DIV",{});var I=f(e);t=d(I,"DIV",{class:!0});var V=f(t);b&&b.l(V),V.forEach(i),s=w(I),r=d(I,"DIV",{class:!0});var k=f(r);n=d(k,"DIV",{});var g=f(n);_&&_.l(g),g.forEach(i),a=w(k),m=d(k,"DIV",{});var U=f(m);K(p.$$.fragment,U),U.forEach(i),k.forEach(i),I.forEach(i),this.h()},h(){c(t,"class","py-5"),c(r,"class","grid grid-cols-2 card p-5 gap-10")},m($,I){P($,e,I),l(e,t),b&&b.m(t,null),l(e,s),l(e,r),l(r,n),_&&_.m(n,null),l(r,a),l(r,m),q(p,m,null),h=!0},p($,[I]){$[0]?b?b.p($,I):(b=zs($),b.c(),b.m(t,null)):b&&(b.d(1),b=null),_&&_.p&&(!h||I&32)&&or(_,v,$,$[5],h?ir(v,$[5],I,null):ar($[5]),null);const V={};I&38&&(V.$$scope={dirty:I,ctx:$}),p.$set(V)},i($){h||(G(_,$),G(p.$$.fragment,$),h=!0)},o($){L(_,$),L(p.$$.fragment,$),h=!1},d($){$&&i(e),b&&b.d(),_&&_.d($),Y(p)}}}function zl(o,e,t){let{$$slots:s={},$$scope:r}=e,{title:n}=e,{tabs:a=[]}=e,m=0;function p(h){m=h,t(2,m)}return o.$$set=h=>{"title"in h&&t(0,n=h.title),"tabs"in h&&t(1,a=h.tabs),"$$scope"in h&&t(5,r=h.$$scope)},[n,a,m,s,p,r]}class gs extends ge{constructor(e){super(),ve(this,e,zl,jl,fe,{title:0,tabs:1})}}function Wl(o){let e,t;return e=new Zt({props:{config:o[0]}}),e.$on("action",o[1]),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Jl(o){let e,t,s;return t=new gs({props:{title:"CRUD",tabs:o[2],$$slots:{default:[Wl]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0,id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","CRUD")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&16&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function ql(o,e,t){let s;bs(o,hs,m=>t(3,s=m));const r={id:"userGroupCRUD",data:er,optionsComponent:El},n=m=>{const{type:p,row:h}=m.detail;switch(p){case"CREATE":Lt.trigger({type:"component",title:`Add user to Group ${h.id}`,component:{ref:Tl,props:{users:s.filter(b=>b.group!==h.name),group:h.name}}});break;case"READ":Lt.trigger({type:"component",title:`Users in Group ${h.id}`,component:{ref:Il,props:{users:s.filter(b=>b.group===h.name),group:h.name}}});break;case"UPDATE":Lt.trigger({type:"component",title:`Edit Group ${h.id}`,component:{ref:Vl,props:{group:h}}});break;case"DELETE":Lt.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${h.name}</strong>?`,response:b=>console.log("response:",b)});break}},a=[{name:"Svelte",language:"html",code:tl},{name:"tableCRUDActions",language:"typescript",code:sl},{name:"optionsComponent",language:"html",code:ol},{name:"data",language:"typescript",code:ms+`
`+Qs},{name:"AddUser.svelte",language:"html",code:rl},{name:"ShowUsers.svelte",language:"html",code:ll},{name:"EditGroup.svelte",language:"html",code:nl}];return[r,n,a]}class Yl extends ge{constructor(e){super(),ve(this,e,ql,Jl,fe,{tableCRUDConfig:0,tableCRUDActions:1,tableCRUDtabs:2})}get tableCRUDConfig(){return this.$$.ctx[0]}get tableCRUDActions(){return this.$$.ctx[1]}get tableCRUDtabs(){return this.$$.ctx[2]}}function Kl(o){let e,t,s,r;return{c(){e=u("button"),t=D("Odd or even"),this.h()},l(n){e=d(n,"BUTTON",{class:!0});var a=f(e);t=E(a,"Odd or even"),a.forEach(i),this.h()},h(){c(e,"class","btn btn-sm variant-filled-secondary")},m(n,a){P(n,e,a),l(e,t),s||(r=pt(e,"click",Zs(o[0])),s=!0)},p:le,i:le,o:le,d(n){n&&i(e),s=!1,r()}}}function Xl(o,e,t){let{row:s}=e,{dispatchFn:r}=e;const n=()=>{const a=s.id%2===0?"even":"odd";return r({type:a})};return o.$$set=a=>{"row"in a&&t(1,s=a.row),"dispatchFn"in a&&t(2,r=a.dispatchFn)},[n,s,r]}class Zl extends ge{constructor(e){super(),ve(this,e,Xl,Kl,fe,{row:1,dispatchFn:2})}}function Ql(o){let e,t;return e=new Zt({props:{config:o[1]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function en(o){let e,t,s;return t=new gs({props:{title:"Odd or even",tabs:o[0],$$slots:{default:[Ql]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0,id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","usersNoRoles")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&4&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function tn(o){return[[{name:"Svelte",language:"html",code:Lr},{name:"Data",language:"typescript",code:ms},{name:"TableOptions.svelte",language:"html",code:el}],{id:"usersNoRoles",data:hs,optionsComponent:Zl,columns:{id:{colFilterFn:_r,colFilterComponent:Dr},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5}]}class sn extends ge{constructor(e){super(),ve(this,e,tn,en,fe,{})}}function rn(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function ln(o){let e,t,s;return t=new os({props:{title:"Minimal configuration",svelte:Or,data:ms,$$slots:{default:[rn]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0,id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","users")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function nn(o){return[{id:"users",data:hs}]}class on extends ge{constructor(e){super(),ve(this,e,nn,ln,fe,{})}}function an(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function cn(o){let e,t,s;return t=new os({props:{title:"Date",svelte:Nr,data:Mr,$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","usersBD")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function un(o){return[{id:"usersBD",data:xl,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:t=>t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:t=>t.getTime(),toFilterableValueFn:t=>t}}}}]}class dn extends ge{constructor(e){super(),ve(this,e,un,cn,fe,{})}}function fn(o){let e,t;return{c(){e=u("input"),this.h()},l(s){e=d(s,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){c(e,"type","checkbox"),c(e,"name","isAdmin"),c(e,"id",t=o[1].id),e.checked=o[0],e.disabled=!0},m(s,r){P(s,e,r)},p(s,[r]){r&2&&t!==(t=s[1].id)&&c(e,"id",t),r&1&&(e.checked=s[0])},i:le,o:le,d(s){s&&i(e)}}}function pn(o,e,t){let{value:s}=e,{row:r}=e;return o.$$set=n=>{"value"in n&&t(0,s=n.value),"row"in n&&t(1,r=n.row)},[s,r]}class mn extends ge{constructor(e){super(),ve(this,e,pn,fn,fe,{value:0,row:1})}}function hn(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function gn(o){let e,t,s;return t=new gs({props:{title:"Boolean",tabs:o[1],$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","boolean")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&4&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function vn(o){return[{id:"usersAndAdmins",data:Ol,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:mn},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Xr},{name:"Data",language:"typescript",code:Zr},{name:"IsAdmin.svelte",language:"html",code:Qr}]]}class bn extends ge{constructor(e){super(),ve(this,e,vn,gn,fe,{})}}function _n(o){let e,t;return{c(){e=u("a"),t=D(o[0]),this.h()},l(s){e=d(s,"A",{href:!0});var r=f(e);t=E(r,o[0]),r.forEach(i),this.h()},h(){c(e,"href",o[0])},m(s,r){P(s,e,r),l(e,t)},p(s,[r]){r&1&&ut(t,s[0]),r&1&&c(e,"href",s[0])},i:le,o:le,d(s){s&&i(e)}}}function Dn(o,e,t){let{value:s}=e;return o.$$set=r=>{"value"in r&&t(0,s=r.value)},[s]}class En extends ge{constructor(e){super(),ve(this,e,Dn,_n,fe,{value:0})}}function $n(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Cn(o){let e,t,s;return t=new gs({props:{title:"URLs",tabs:o[1],$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","URLs")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&4&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function Tn(o){return[{id:"websites",data:Ll,columns:{URL:{header:"URL",instructions:{renderComponent:En,toFilterableValueFn:s=>s.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:qr},{name:"Data",language:"typescript",code:Yr},{name:"URLCell.svelte",language:"html",code:Kr}]]}class yn extends ge{constructor(e){super(),ve(this,e,Tn,Cn,fe,{})}}function wn(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function In(o){let e,t,s;return t=new os({props:{title:"Missing values",svelte:Wr,data:Jr,$$slots:{default:[wn]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","combination")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function Un(o){return[{id:"usersMissingIDs",data:Nl,columns:{id:{header:"ID",instructions:{toStringFn:t=>t in Ps?Ps[t]:t.toString()}}}}]}class kn extends ge{constructor(e){super(),ve(this,e,Un,In,fe,{})}}function Vn(o){let e,t;return e=new Zt({props:{config:o[0]}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,r){q(e,s,r),t=!0},p:le,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Sn(o){let e,t,s;return t=new os({props:{title:"Table component",svelte:xr,data:Qs,$$slots:{default:[Vn]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","groups")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function An(o){return[{id:"userGroups",data:er,columns:{id:{header:"ID"}}}]}class Rn extends ge{constructor(e){super(),ve(this,e,An,Sn,fe,{})}}function Ys(o,e,t){const s=o.slice();return s[1]=e[t],s}function Ks(o){let e,t,s=o[1].name+"",r,n,a,m,p=o[1].group+"",h,b;return{c(){e=u("tr"),t=u("td"),r=D(s),n=y(),a=u("td"),m=u("div"),h=D(p),b=y()},l(v){e=d(v,"TR",{});var _=f(e);t=d(_,"TD",{});var $=f(t);r=E($,s),$.forEach(i),n=w(_),a=d(_,"TD",{});var I=f(a);m=d(I,"DIV",{});var V=f(m);h=E(V,p),V.forEach(i),I.forEach(i),b=w(_),_.forEach(i)},m(v,_){P(v,e,_),l(e,t),l(t,r),l(e,n),l(e,a),l(a,m),l(m,h),l(e,b)},p(v,_){_&1&&s!==(s=v[1].name+"")&&ut(r,s),_&1&&p!==(p=v[1].group+"")&&ut(h,p)},d(v){v&&i(e)}}}function Fn(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V=o[0],k=[];for(let g=0;g<V.length;g+=1)k[g]=Ks(Ys(o,V,g));return{c(){e=u("div"),t=D("Used classes are important to include for the table to have a uniform look."),s=y(),r=u("div"),n=u("table"),a=u("thead"),m=u("tr"),p=u("th"),h=D("Group"),b=y(),v=u("th"),_=D("Description"),$=y(),I=u("tbody");for(let g=0;g<k.length;g+=1)k[g].c();this.h()},l(g){e=d(g,"DIV",{class:!0});var U=f(e);t=E(U,"Used classes are important to include for the table to have a uniform look."),U.forEach(i),s=w(g),r=d(g,"DIV",{class:!0});var T=f(r);n=d(T,"TABLE",{class:!0});var C=f(n);a=d(C,"THEAD",{});var S=f(a);m=d(S,"TR",{class:!0});var N=f(m);p=d(N,"TH",{class:!0});var F=f(p);h=E(F,"Group"),F.forEach(i),b=w(N),v=d(N,"TH",{class:!0});var B=f(v);_=E(B,"Description"),B.forEach(i),N.forEach(i),S.forEach(i),$=w(C),I=d(C,"TBODY",{});var R=f(I);for(let x=0;x<k.length;x+=1)k[x].l(R);R.forEach(i),C.forEach(i),T.forEach(i),this.h()},h(){c(e,"class","pb-2"),c(p,"class","!p-2"),c(v,"class","!p-2"),c(m,"class","bg-primary-300"),c(n,"class","table table-compact bg-tertiary-200"),c(r,"class","table-container")},m(g,U){P(g,e,U),l(e,t),P(g,s,U),P(g,r,U),l(r,n),l(n,a),l(a,m),l(m,p),l(p,h),l(m,b),l(m,v),l(v,_),l(n,$),l(n,I);for(let T=0;T<k.length;T+=1)k[T]&&k[T].m(I,null)},p(g,U){if(U&1){V=g[0];let T;for(T=0;T<V.length;T+=1){const C=Ys(g,V,T);k[T]?k[T].p(C,U):(k[T]=Ks(C),k[T].c(),k[T].m(I,null))}for(;T<k.length;T+=1)k[T].d(1);k.length=V.length}},d(g){g&&i(e),g&&i(s),g&&i(r),ss(k,g)}}}function Bn(o){let e,t,s;return t=new os({props:{title:"Simple table without Table component",svelte:Gr,data:ms,$$slots:{default:[Fn]},$$scope:{ctx:o}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{id:!0});var n=f(e);K(t.$$.fragment,n),n.forEach(i),this.h()},h(){c(e,"id","simpleTable")},m(r,n){P(r,e,n),q(t,e,null),s=!0},p(r,[n]){const a={};n&17&&(a.$$scope={dirty:n,ctx:r}),t.$set(a)},i(r){s||(G(t.$$.fragment,r),s=!0)},o(r){L(t.$$.fragment,r),s=!1},d(r){r&&i(e),Y(t)}}}function Gn(o,e,t){let s;return bs(o,hs,r=>t(0,s=r)),[s]}class xn extends ge{constructor(e){super(),ve(this,e,Gn,Bn,fe,{})}}function On(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H,j,X,Z,z,se;return n=new xn({}),m=new Rn({}),h=new on({}),V=new sn({}),g=new Yl({}),F=new dn({}),R=new kn({}),H=new yn({}),X=new bn({}),z=new Br({}),{c(){e=u("div"),t=u("h2"),s=D("Examples"),r=y(),J(n.$$.fragment),a=y(),J(m.$$.fragment),p=y(),J(h.$$.fragment),b=y(),v=u("div"),_=u("h2"),$=D("Dispatching Actions"),I=y(),J(V.$$.fragment),k=y(),J(g.$$.fragment),U=y(),T=u("div"),C=u("h2"),S=D("Complex data types"),N=y(),J(F.$$.fragment),B=y(),J(R.$$.fragment),x=y(),J(H.$$.fragment),j=y(),J(X.$$.fragment),Z=y(),J(z.$$.fragment),this.h()},l(O){e=d(O,"DIV",{class:!0});var M=f(e);t=d(M,"H2",{});var W=f(t);s=E(W,"Examples"),W.forEach(i),r=w(M),K(n.$$.fragment,M),a=w(M),K(m.$$.fragment,M),p=w(M),K(h.$$.fragment,M),b=w(M),v=d(M,"DIV",{id:!0,class:!0});var ee=f(v);_=d(ee,"H2",{});var ce=f(_);$=E(ce,"Dispatching Actions"),ce.forEach(i),I=w(ee),K(V.$$.fragment,ee),k=w(ee),K(g.$$.fragment,ee),ee.forEach(i),U=w(M),T=d(M,"DIV",{id:!0});var ne=f(T);C=d(ne,"H2",{});var te=f(C);S=E(te,"Complex data types"),te.forEach(i),N=w(ne),K(F.$$.fragment,ne),B=w(ne),K(R.$$.fragment,ne),x=w(ne),K(H.$$.fragment,ne),j=w(ne),K(X.$$.fragment,ne),ne.forEach(i),M.forEach(i),Z=w(O),K(z.$$.fragment,O),this.h()},h(){c(v,"id","actionDispatchersExamples"),c(v,"class","my-20"),c(T,"id","complexTypes"),c(e,"class","grid gap-1")},m(O,M){P(O,e,M),l(e,t),l(t,s),l(e,r),q(n,e,null),l(e,a),q(m,e,null),l(e,p),q(h,e,null),l(e,b),l(e,v),l(v,_),l(_,$),l(v,I),q(V,v,null),l(v,k),q(g,v,null),l(e,U),l(e,T),l(T,C),l(C,S),l(T,N),q(F,T,null),l(T,B),q(R,T,null),l(T,x),q(H,T,null),l(T,j),q(X,T,null),P(O,Z,M),q(z,O,M),se=!0},p:le,i(O){se||(G(n.$$.fragment,O),G(m.$$.fragment,O),G(h.$$.fragment,O),G(V.$$.fragment,O),G(g.$$.fragment,O),G(F.$$.fragment,O),G(R.$$.fragment,O),G(H.$$.fragment,O),G(X.$$.fragment,O),G(z.$$.fragment,O),se=!0)},o(O){L(n.$$.fragment,O),L(m.$$.fragment,O),L(h.$$.fragment,O),L(V.$$.fragment,O),L(g.$$.fragment,O),L(F.$$.fragment,O),L(R.$$.fragment,O),L(H.$$.fragment,O),L(X.$$.fragment,O),L(z.$$.fragment,O),se=!1},d(O){O&&i(e),Y(n),Y(m),Y(h),Y(V),Y(g),Y(F),Y(R),Y(H),Y(X),O&&i(Z),Y(z,O)}}}class Ln extends ge{constructor(e){super(),ve(this,e,null,On,fe,{})}}function Nn(o){let e,t,s,r,n,a,m,p="(action: CustomEvent<any>) => {}",h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B,R,x,H,j,X,Z,z,se,O,M,W,ee,ce,ne,te,Se,Be="(obj: any) => dispatch('action', obj)",A,Ie,pe,oe,re,be,Ye,xe,_e,Ze;return{c(){e=u("div"),t=u("div"),s=u("div"),r=u("h3"),n=D("on:action"),a=y(),m=u("h3"),h=D(p),b=y(),v=u("p"),_=D("To dispatch actions and listen to dispatchers you need to create a table with your own "),$=u("code"),I=D("optionsComponent"),V=D(" component."),k=y(),g=u("div"),U=u("p"),T=D("Every "),C=u("code"),S=D("optionsComponent"),N=D(" will get 2 props:"),F=y(),B=u("div"),R=u("div"),x=u("div"),H=D("row:"),j=y(),X=u("div"),Z=D("Object"),z=y(),se=u("p"),O=D("The current row in the table. In other words, a single object from the data store."),M=y(),W=u("div"),ee=u("div"),ce=u("div"),ne=D("dispatchFn:"),te=y(),Se=u("div"),A=D(Be),Ie=y(),pe=u("p"),oe=D("A function that takes an object and dispatches an action with the name "),re=u("code"),be=D("action"),Ye=D(`. The passed object is accessible by the parent component through the
					`),xe=u("code"),_e=D("action.detail"),Ze=D(" property."),this.h()},l(Me){e=d(Me,"DIV",{class:!0});var ue=f(e);t=d(ue,"DIV",{class:!0,id:!0});var ae=f(t);s=d(ae,"DIV",{class:!0});var Oe=f(s);r=d(Oe,"H3",{class:!0});var Te=f(r);n=E(Te,"on:action"),Te.forEach(i),a=w(Oe),m=d(Oe,"H3",{class:!0});var Ge=f(m);h=E(Ge,p),Ge.forEach(i),Oe.forEach(i),b=w(ae),v=d(ae,"P",{class:!0});var Ue=f(v);_=E(Ue,"To dispatch actions and listen to dispatchers you need to create a table with your own "),$=d(Ue,"CODE",{class:!0});var Qe=f($);I=E(Qe,"optionsComponent"),Qe.forEach(i),V=E(Ue," component."),Ue.forEach(i),k=w(ae),g=d(ae,"DIV",{class:!0});var Ee=f(g);U=d(Ee,"P",{class:!0});var De=f(U);T=E(De,"Every "),C=d(De,"CODE",{class:!0});var me=f(C);S=E(me,"optionsComponent"),me.forEach(i),N=E(De," will get 2 props:"),De.forEach(i),F=w(Ee),B=d(Ee,"DIV",{class:!0});var We=f(B);R=d(We,"DIV",{class:!0});var Le=f(R);x=d(Le,"DIV",{class:!0});var Ae=f(x);H=E(Ae,"row:"),Ae.forEach(i),j=w(Le),X=d(Le,"DIV",{class:!0});var dt=f(X);Z=E(dt,"Object"),dt.forEach(i),Le.forEach(i),z=w(We),se=d(We,"P",{class:!0});var et=f(se);O=E(et,"The current row in the table. In other words, a single object from the data store."),et.forEach(i),We.forEach(i),M=w(Ee),W=d(Ee,"DIV",{class:!0});var de=f(W);ee=d(de,"DIV",{class:!0});var ie=f(ee);ce=d(ie,"DIV",{class:!0});var Re=f(ce);ne=E(Re,"dispatchFn:"),Re.forEach(i),te=w(ie),Se=d(ie,"DIV",{class:!0});var tt=f(Se);A=E(tt,Be),tt.forEach(i),ie.forEach(i),Ie=w(de),pe=d(de,"P",{class:!0});var $e=f(pe);oe=E($e,"A function that takes an object and dispatches an action with the name "),re=d($e,"CODE",{class:!0});var he=f(re);be=E(he,"action"),he.forEach(i),Ye=E($e,`. The passed object is accessible by the parent component through the
					`),xe=d($e,"CODE",{class:!0});var Pe=f(xe);_e=E(Pe,"action.detail"),Pe.forEach(i),Ze=E($e," property."),$e.forEach(i),de.forEach(i),Ee.forEach(i),ae.forEach(i),ue.forEach(i),this.h()},h(){c(r,"class","italic"),c(m,"class","font-semibold"),c(s,"class","flex gap-3"),c($,"class","!text-xl"),c(v,"class","text-xl underline"),c(C,"class","!text-xl"),c(U,"class","text-xl"),c(x,"class","italic"),c(X,"class","font-bold"),c(R,"class","flex gap-2"),c(se,"class","text-xl pl-10"),c(B,"class","items-center mt-2"),c(ce,"class","italic"),c(Se,"class","font-bold"),c(ee,"class","flex gap-2"),c(re,"class","!text-xl"),c(xe,"class","!text-xl"),c(pe,"class","text-xl pl-10"),c(W,"class","items-center mt-2"),c(g,"class","mt-5"),c(t,"class","grid gap-2"),c(t,"id","actionDispatchersDocs"),c(e,"class","grid gap-5")},m(Me,ue){P(Me,e,ue),l(e,t),l(t,s),l(s,r),l(r,n),l(s,a),l(s,m),l(m,h),l(t,b),l(t,v),l(v,_),l(v,$),l($,I),l(v,V),l(t,k),l(t,g),l(g,U),l(U,T),l(U,C),l(C,S),l(U,N),l(g,F),l(g,B),l(B,R),l(R,x),l(x,H),l(R,j),l(R,X),l(X,Z),l(B,z),l(B,se),l(se,O),l(g,M),l(g,W),l(W,ee),l(ee,ce),l(ce,ne),l(ee,te),l(ee,Se),l(Se,A),l(W,Ie),l(W,pe),l(pe,oe),l(pe,re),l(re,be),l(pe,Ye),l(pe,xe),l(xe,_e),l(pe,Ze)},p:le,i:le,o:le,d(Me){Me&&i(e)}}}class Mn extends ge{constructor(e){super(),ve(this,e,null,Nn,fe,{})}}function Pn(o){let e,t,s,r,n,a,m,p,h,b,v,_,$,I,V,k,g,U,T,C,S,N,F,B;return h=new cl({}),v=new fl({}),$=new hl({}),V=new bl({}),S=new Mn({}),F=new Ln({}),{c(){e=u("div"),t=u("div"),s=u("h1"),r=D("Table"),n=y(),a=u("h2"),m=D("Types"),p=y(),J(h.$$.fragment),b=y(),J(v.$$.fragment),_=y(),J($.$$.fragment),I=y(),J(V.$$.fragment),k=y(),g=u("div"),U=u("h2"),T=D("Action Dispatchers"),C=y(),J(S.$$.fragment),N=y(),J(F.$$.fragment),this.h()},l(R){e=d(R,"DIV",{class:!0,id:!0});var x=f(e);t=d(x,"DIV",{class:!0});var H=f(t);s=d(H,"H1",{class:!0});var j=f(s);r=E(j,"Table"),j.forEach(i),n=w(H),a=d(H,"H2",{});var X=f(a);m=E(X,"Types"),X.forEach(i),p=w(H),K(h.$$.fragment,H),H.forEach(i),b=w(x),K(v.$$.fragment,x),_=w(x),K($.$$.fragment,x),I=w(x),K(V.$$.fragment,x),k=w(x),g=d(x,"DIV",{class:!0});var Z=f(g);U=d(Z,"H2",{});var z=f(U);T=E(z,"Action Dispatchers"),z.forEach(i),C=w(Z),K(S.$$.fragment,Z),Z.forEach(i),N=w(x),K(F.$$.fragment,x),x.forEach(i),this.h()},h(){c(s,"class","font-bold !text-6xl"),c(t,"class","grid gap-5"),c(g,"class","grid gap-5"),c(e,"class","grid gap-20 p-10"),c(e,"id","toc-target-table")},m(R,x){P(R,e,x),l(e,t),l(t,s),l(s,r),l(t,n),l(t,a),l(a,m),l(t,p),q(h,t,null),l(e,b),q(v,e,null),l(e,_),q($,e,null),l(e,I),q(V,e,null),l(e,k),l(e,g),l(g,U),l(U,T),l(g,C),q(S,g,null),l(e,N),q(F,e,null),B=!0},p:le,i(R){B||(G(h.$$.fragment,R),G(v.$$.fragment,R),G($.$$.fragment,R),G(V.$$.fragment,R),G(S.$$.fragment,R),G(F.$$.fragment,R),B=!0)},o(R){L(h.$$.fragment,R),L(v.$$.fragment,R),L($.$$.fragment,R),L(V.$$.fragment,R),L(S.$$.fragment,R),L(F.$$.fragment,R),B=!1},d(R){R&&i(e),Y(h),Y(v),Y($),Y(V),Y(S),Y(F)}}}class Zn extends ge{constructor(e){super(),ve(this,e,null,Pn,fe,{})}}export{Zn as component};
