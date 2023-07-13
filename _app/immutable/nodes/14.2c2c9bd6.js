import{S as he,i as ge,s as fe,e as ut,b as P,M as Ze,g as G,v as Kt,d as L,f as Xt,h as i,V as bs,$ as sr,I as us,J as Ts,W as le,k as u,l as d,m as f,n as c,D as n,a4 as ns,Z as vs,_ as es,O as fs,T as ys,x as ws,y as J,z as K,A as q,N as Zs,ab as rr,B as Y,a as y,c as w,ag as Is,q as D,r as E,L as ks,a2 as ts,u as dt,ah as nr,ai as lr,U as ss,a3 as Qs,C as or,E as ar,F as ir,G as cr,w as ur,a8 as dr,a9 as fr}from"../chunks/index.049e93f8.js";/* empty css                             */import{p as ps}from"../chunks/floating-ui.dom.browser.min.2b75fb05.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.8eb44e16.js";import{C as ls}from"../chunks/CodeBlock.73e574ca.js";import{a as ds,f as Us}from"../chunks/index.8f73ad9e.js";import{w as Qt}from"../chunks/index.e06e82d5.js";import{F as pr,e as mr,g as hr,d as gr,c as vr}from"../chunks/index.80da7392.js";import{a as br,b as _r,T as Zt,c as Dr,d as Er,C as os}from"../chunks/CodeContainer.cef4136b.js";function $r(){const{subscribe:l,set:e,update:t}=Qt([]);return{subscribe:l,set:e,update:t,trigger:r=>t(s=>(s.push(r),s)),close:()=>t(r=>(r.length>0&&r.shift(),r)),clear:()=>e([])}}const Lt=$r();function Cr(l,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let r,s;function o(v){v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),s.focus())}function a(v){!v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),r.focus())}const m=v=>{if(e===!1)return;const _=Array.from(l.querySelectorAll(t));_.length&&(r=_[0],s=_[_.length-1],v||r.focus(),r.addEventListener("keydown",o),s.addEventListener("keydown",a))};m(!1);function p(){r&&r.removeEventListener("keydown",o),s&&s.removeEventListener("keydown",a)}const h=(v,_)=>(v.length&&(p(),m(!0)),_),b=new MutationObserver(h);return b.observe(l,{childList:!0,subtree:!0}),{update(v){e=v,v?m(!1):p()},destroy(){p(),b.disconnect()}}}function Vs(l){let e=l[12],t,r,s=Bs(l);return{c(){s.c(),t=ut()},l(o){s.l(o),t=ut()},m(o,a){s.m(o,a),P(o,t,a),r=!0},p(o,a){a[0]&4096&&fe(e,e=o[12])?(Kt(),L(s,1,1,le),Xt(),s=Bs(o),s.c(),G(s,1),s.m(t.parentNode,t)):s.p(o,a)},i(o){r||(G(s),r=!0)},o(o){L(s),r=!1},d(o){o&&i(t),s.d(o)}}}function Tr(l){var h,b;let e,t,r,s,o;const a=[(h=l[14])==null?void 0:h.props,{parent:l[15]}];var m=(b=l[14])==null?void 0:b.ref;function p(v){let _={$$slots:{default:[wr]},$$scope:{ctx:v}};for(let $=0;$<a.length;$+=1)_=us(_,a[$]);return{props:_}}return m&&(t=ws(m,p(l))),{c(){e=u("div"),t&&J(t.$$.fragment),this.h()},l(v){e=d(v,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var _=f(e);t&&K(t.$$.fragment,_),_.forEach(i),this.h()},h(){var v;c(e,"class",r="modal contents "+(((v=l[12][0])==null?void 0:v.modalClasses)??"")),c(e,"data-testid","modal-component"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",s=l[12][0].title??"")},m(v,_){P(v,e,_),t&&q(t,e,null),o=!0},p(v,_){var I,S,V;const $=_[0]&49152?Zs(a,[_[0]&16384&&rr((I=v[14])==null?void 0:I.props),_[0]&32768&&{parent:v[15]}]):{};if(_[0]&16384|_[1]&8192&&($.$$scope={dirty:_,ctx:v}),_[0]&16384&&m!==(m=(S=v[14])==null?void 0:S.ref)){if(t){Kt();const g=t;L(g.$$.fragment,1,0,()=>{Y(g,1)}),Xt()}m?(t=ws(m,p(v)),J(t.$$.fragment),G(t.$$.fragment,1),q(t,e,null)):t=null}else m&&t.$set($);(!o||_[0]&4096&&r!==(r="modal contents "+(((V=v[12][0])==null?void 0:V.modalClasses)??"")))&&c(e,"class",r),(!o||_[0]&4096&&s!==(s=v[12][0].title??""))&&c(e,"aria-label",s)},i(v){o||(t&&G(t.$$.fragment,v),o=!0)},o(v){t&&L(t.$$.fragment,v),o=!1},d(v){v&&i(e),t&&Y(t)}}}function yr(l){var S,V,g,k;let e,t,r,s,o,a,m,p,h=((S=l[12][0])==null?void 0:S.title)&&As(l),b=((V=l[12][0])==null?void 0:V.body)&&Rs(l),v=((g=l[12][0])==null?void 0:g.image)&&typeof((k=l[12][0])==null?void 0:k.image)=="string"&&Fs(l);function _(T,C){if(T[12][0].type==="alert")return Ur;if(T[12][0].type==="confirm")return kr;if(T[12][0].type==="prompt")return Ir}let $=_(l),I=$&&$(l);return{c(){e=u("div"),h&&h.c(),t=y(),b&&b.c(),r=y(),v&&v.c(),s=y(),I&&I.c(),this.h()},l(T){e=d(T,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var C=f(e);h&&h.l(C),t=w(C),b&&b.l(C),r=w(C),v&&v.l(C),s=w(C),I&&I.l(C),C.forEach(i),this.h()},h(){c(e,"class",o="modal "+l[16]),c(e,"data-testid","modal"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",a=l[12][0].title??"")},m(T,C){P(T,e,C),h&&h.m(e,null),n(e,t),b&&b.m(e,null),n(e,r),v&&v.m(e,null),n(e,s),I&&I.m(e,null),p=!0},p(T,C){var A,N,F,B;l=T,(A=l[12][0])!=null&&A.title?h?h.p(l,C):(h=As(l),h.c(),h.m(e,t)):h&&(h.d(1),h=null),(N=l[12][0])!=null&&N.body?b?b.p(l,C):(b=Rs(l),b.c(),b.m(e,r)):b&&(b.d(1),b=null),(F=l[12][0])!=null&&F.image&&typeof((B=l[12][0])==null?void 0:B.image)=="string"?v?v.p(l,C):(v=Fs(l),v.c(),v.m(e,s)):v&&(v.d(1),v=null),$===($=_(l))&&I?I.p(l,C):(I&&I.d(1),I=$&&$(l),I&&(I.c(),I.m(e,null))),(!p||C[0]&65536&&o!==(o="modal "+l[16]))&&c(e,"class",o),(!p||C[0]&4096&&a!==(a=l[12][0].title??""))&&c(e,"aria-label",a)},i(T){p||(vs(()=>{p&&(m||(m=es(e,ds,{duration:l[3],opacity:0,y:100},!0)),m.run(1))}),p=!0)},o(T){m||(m=es(e,ds,{duration:l[3],opacity:0,y:100},!1)),m.run(0),p=!1},d(T){T&&i(e),h&&h.d(),b&&b.d(),v&&v.d(),I&&I.d(),T&&m&&m.end()}}}function Ss(l){var s;let e,t=((s=l[14])==null?void 0:s.slot)+"",r;return{c(){e=new nr(!1),r=ut(),this.h()},l(o){e=lr(o,!1),r=ut(),this.h()},h(){e.a=r},m(o,a){e.m(t,o,a),P(o,r,a)},p(o,a){var m;a[0]&16384&&t!==(t=((m=o[14])==null?void 0:m.slot)+"")&&e.p(t)},d(o){o&&i(r),o&&e.d()}}}function wr(l){var r;let e,t=((r=l[14])==null?void 0:r.slot)&&Ss(l);return{c(){t&&t.c(),e=ut()},l(s){t&&t.l(s),e=ut()},m(s,o){t&&t.m(s,o),P(s,e,o)},p(s,o){var a;(a=s[14])!=null&&a.slot?t?t.p(s,o):(t=Ss(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&i(e)}}}function As(l){let e,t=l[12][0].title+"",r;return{c(){e=u("header"),this.h()},l(s){e=d(s,"HEADER",{class:!0});var o=f(e);o.forEach(i),this.h()},h(){c(e,"class",r="modal-header "+l[9])},m(s,o){P(s,e,o),e.innerHTML=t},p(s,o){o[0]&4096&&t!==(t=s[12][0].title+"")&&(e.innerHTML=t),o[0]&512&&r!==(r="modal-header "+s[9])&&c(e,"class",r)},d(s){s&&i(e)}}}function Rs(l){let e,t=l[12][0].body+"",r;return{c(){e=u("article"),this.h()},l(s){e=d(s,"ARTICLE",{class:!0});var o=f(e);o.forEach(i),this.h()},h(){c(e,"class",r="modal-body "+l[10])},m(s,o){P(s,e,o),e.innerHTML=t},p(s,o){o[0]&4096&&t!==(t=s[12][0].body+"")&&(e.innerHTML=t),o[0]&1024&&r!==(r="modal-body "+s[10])&&c(e,"class",r)},d(s){s&&i(e)}}}function Fs(l){let e,t;return{c(){e=u("img"),this.h()},l(r){e=d(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var r;c(e,"class","modal-image "+Fr),Is(e.src,t=(r=l[12][0])==null?void 0:r.image)||c(e,"src",t),c(e,"alt","Modal")},m(r,s){P(r,e,s)},p(r,s){var o;s[0]&4096&&!Is(e.src,t=(o=r[12][0])==null?void 0:o.image)&&c(e,"src",t)},d(r){r&&i(e)}}}function Ir(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},l[12][0].valueAttr],V={};for(let g=0;g<S.length;g+=1)V=us(V,S[g]);return{c(){e=u("form"),t=u("input"),r=y(),s=u("footer"),o=u("button"),a=D(l[0]),p=y(),h=u("button"),b=D(l[2]),this.h()},l(g){e=d(g,"FORM",{class:!0});var k=f(e);t=d(k,"INPUT",{class:!0,name:!0,type:!0}),r=w(k),s=d(k,"FOOTER",{class:!0});var T=f(s);o=d(T,"BUTTON",{type:!0,class:!0});var C=f(o);a=E(C,l[0]),C.forEach(i),p=w(T),h=d(T,"BUTTON",{type:!0,class:!0});var A=f(h);b=E(A,l[2]),A.forEach(i),T.forEach(i),k.forEach(i),this.h()},h(){ks(t,V),c(o,"type","button"),c(o,"class",m="btn "+l[7]),c(h,"type","submit"),c(h,"class",v="btn "+l[8]),c(s,"class",_="modal-footer "+l[11]),c(e,"class","space-y-4")},m(g,k){P(g,e,k),n(e,t),t.autofocus&&t.focus(),ts(t,l[13]),n(e,r),n(e,s),n(s,o),n(o,a),n(s,p),n(s,h),n(h,b),$||(I=[Ze(t,"input",l[39]),Ze(o,"click",l[21]),Ze(e,"submit",l[23])],$=!0)},p(g,k){ks(t,V=Zs(S,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},k[0]&4096&&g[12][0].valueAttr])),k[0]&8192&&t.value!==g[13]&&ts(t,g[13]),k[0]&1&&dt(a,g[0]),k[0]&128&&m!==(m="btn "+g[7])&&c(o,"class",m),k[0]&4&&dt(b,g[2]),k[0]&256&&v!==(v="btn "+g[8])&&c(h,"class",v),k[0]&2048&&_!==(_="modal-footer "+g[11])&&c(s,"class",_)},d(g){g&&i(e),$=!1,fs(I)}}}function kr(l){let e,t,r,s,o,a,m,p,h,b,v;return{c(){e=u("footer"),t=u("button"),r=D(l[0]),o=y(),a=u("button"),m=D(l[1]),this.h()},l(_){e=d(_,"FOOTER",{class:!0});var $=f(e);t=d($,"BUTTON",{type:!0,class:!0});var I=f(t);r=E(I,l[0]),I.forEach(i),o=w($),a=d($,"BUTTON",{type:!0,class:!0});var S=f(a);m=E(S,l[1]),S.forEach(i),$.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",s="btn "+l[7]),c(a,"type","button"),c(a,"class",p="btn "+l[8]),c(e,"class",h="modal-footer "+l[11])},m(_,$){P(_,e,$),n(e,t),n(t,r),n(e,o),n(e,a),n(a,m),b||(v=[Ze(t,"click",l[21]),Ze(a,"click",l[22])],b=!0)},p(_,$){$[0]&1&&dt(r,_[0]),$[0]&128&&s!==(s="btn "+_[7])&&c(t,"class",s),$[0]&2&&dt(m,_[1]),$[0]&256&&p!==(p="btn "+_[8])&&c(a,"class",p),$[0]&2048&&h!==(h="modal-footer "+_[11])&&c(e,"class",h)},d(_){_&&i(e),b=!1,fs(v)}}}function Ur(l){let e,t,r,s,o,a,m;return{c(){e=u("footer"),t=u("button"),r=D(l[0]),this.h()},l(p){e=d(p,"FOOTER",{class:!0});var h=f(e);t=d(h,"BUTTON",{type:!0,class:!0});var b=f(t);r=E(b,l[0]),b.forEach(i),h.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",s="btn "+l[7]),c(e,"class",o="modal-footer "+l[11])},m(p,h){P(p,e,h),n(e,t),n(t,r),a||(m=Ze(t,"click",l[21]),a=!0)},p(p,h){h[0]&1&&dt(r,p[0]),h[0]&128&&s!==(s="btn "+p[7])&&c(t,"class",s),h[0]&2048&&o!==(o="modal-footer "+p[11])&&c(e,"class",o)},d(p){p&&i(e),a=!1,m()}}}function Bs(l){let e,t,r,s,o,a,m,p,h,b,v;const _=[yr,Tr],$=[];function I(S,V){return S[12][0].type!=="component"?0:1}return r=I(l),s=$[r]=_[r](l),{c(){e=u("div"),t=u("div"),s.c(),this.h()},l(S){e=d(S,"DIV",{class:!0,"data-testid":!0});var V=f(e);t=d(V,"DIV",{class:!0});var g=f(t);s.l(g),g.forEach(i),V.forEach(i),this.h()},h(){c(t,"class",o="modal-transition "+l[17]),c(e,"class",m="modal-backdrop "+l[18]),c(e,"data-testid","modal-backdrop")},m(S,V){P(S,e,V),n(e,t),$[r].m(t,null),h=!0,b||(v=[Ze(e,"mousedown",l[19]),Ze(e,"mouseup",l[20]),Ze(e,"touchstart",l[37]),Ze(e,"touchend",l[38]),ns(Cr.call(null,e,!0))],b=!0)},p(S,V){l=S;let g=r;r=I(l),r===g?$[r].p(l,V):(Kt(),L($[g],1,1,()=>{$[g]=null}),Xt(),s=$[r],s?s.p(l,V):(s=$[r]=_[r](l),s.c()),G(s,1),s.m(t,null)),(!h||V[0]&131072&&o!==(o="modal-transition "+l[17]))&&c(t,"class",o),(!h||V[0]&262144&&m!==(m="modal-backdrop "+l[18]))&&c(e,"class",m)},i(S){h||(G(s),vs(()=>{h&&(a||(a=es(t,ds,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!0)),a.run(1))}),vs(()=>{h&&(p||(p=es(e,Us,{duration:l[3]},!0)),p.run(1))}),h=!0)},o(S){L(s),a||(a=es(t,ds,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!1)),a.run(0),p||(p=es(e,Us,{duration:l[3]},!1)),p.run(0),h=!1},d(S){S&&i(e),$[r].d(),S&&a&&a.end(),S&&p&&p.end(),b=!1,fs(v)}}}function Vr(l){let e,t,r,s,o=l[12].length>0&&Vs(l);return{c(){o&&o.c(),e=ut()},l(a){o&&o.l(a),e=ut()},m(a,m){o&&o.m(a,m),P(a,e,m),t=!0,r||(s=Ze(window,"keydown",l[24]),r=!0)},p(a,m){a[12].length>0?o?(o.p(a,m),m[0]&4096&&G(o,1)):(o=Vs(a),o.c(),G(o,1),o.m(e.parentNode,e)):o&&(Kt(),L(o,1,1,()=>{o=null}),Xt())},i(a){t||(G(o),t=!0)},o(a){L(o),t=!1},d(a){o&&o.d(a),a&&i(e),r=!1,s()}}}const Sr="fixed top-0 left-0 right-0 bottom-0",Ar="w-full h-full p-4 overflow-y-auto flex justify-center",Rr="block",Fr="w-full h-auto";function Br(l,e,t){let r,s,o,a,m,p;bs(l,Lt,U=>t(12,p=U));const h=sr();let{position:b="items-center"}=e,{components:v={}}=e,{duration:_=150}=e,{flyOpacity:$=0}=e,{flyX:I=0}=e,{flyY:S=100}=e,{background:V="bg-surface-100-800-token"}=e,{width:g="w-modal"}=e,{height:k="h-auto"}=e,{padding:T="p-4"}=e,{spacing:C="space-y-4"}=e,{rounded:A="rounded-container-token"}=e,{shadow:N="shadow-xl"}=e,{zIndex:F="z-[999]"}=e,{buttonNeutral:B="variant-ghost-surface"}=e,{buttonPositive:R="variant-filled"}=e,{buttonTextCancel:O="Cancel"}=e,{buttonTextConfirm:H="Confirm"}=e,{buttonTextSubmit:j="Submit"}=e,{regionBackdrop:X="bg-surface-backdrop-token"}=e,{regionHeader:Z="text-2xl font-bold"}=e,{regionBody:z="max-h-[200px] overflow-hidden"}=e,{regionFooter:se="flex justify-end space-x-2"}=e,x;const M={buttonTextCancel:O,buttonTextConfirm:H,buttonTextSubmit:j};let W,Q=!1;Lt.subscribe(U=>{U.length&&(U[0].type==="prompt"&&t(13,x=U[0].value),t(0,O=U[0].buttonTextCancel||M.buttonTextCancel),t(1,H=U[0].buttonTextConfirm||M.buttonTextConfirm),t(2,j=U[0].buttonTextSubmit||M.buttonTextSubmit),t(14,W=typeof U[0].component=="string"?v[U[0].component]:U[0].component))});function ue(U){if(!(U.target instanceof Element))return;const re=U.target.classList;(re.contains("modal-backdrop")||re.contains("modal-transition"))&&(Q=!0)}function oe(U){if(!(U.target instanceof Element))return;const re=U.target.classList;(re.contains("modal-backdrop")||re.contains("modal-transition"))&&Q&&(p[0].response&&p[0].response(void 0),Lt.close(),h("backdrop",U)),Q=!1}function te(){p[0].response&&p[0].response(!1),Lt.close()}function Ve(){p[0].response&&p[0].response(!0),Lt.close()}function Fe(U){U.preventDefault(),p[0].response&&p[0].response(x),Lt.close()}function De(U){p.length&&U.code==="Escape"&&te()}function Me(U){ys.call(this,l,U)}function ve(U){ys.call(this,l,U)}function ne(){x=this.value,t(13,x)}return l.$$set=U=>{t(43,e=us(us({},e),Ts(U))),"position"in U&&t(25,b=U.position),"components"in U&&t(26,v=U.components),"duration"in U&&t(3,_=U.duration),"flyOpacity"in U&&t(4,$=U.flyOpacity),"flyX"in U&&t(5,I=U.flyX),"flyY"in U&&t(6,S=U.flyY),"background"in U&&t(27,V=U.background),"width"in U&&t(28,g=U.width),"height"in U&&t(29,k=U.height),"padding"in U&&t(30,T=U.padding),"spacing"in U&&t(31,C=U.spacing),"rounded"in U&&t(32,A=U.rounded),"shadow"in U&&t(33,N=U.shadow),"zIndex"in U&&t(34,F=U.zIndex),"buttonNeutral"in U&&t(7,B=U.buttonNeutral),"buttonPositive"in U&&t(8,R=U.buttonPositive),"buttonTextCancel"in U&&t(0,O=U.buttonTextCancel),"buttonTextConfirm"in U&&t(1,H=U.buttonTextConfirm),"buttonTextSubmit"in U&&t(2,j=U.buttonTextSubmit),"regionBackdrop"in U&&t(35,X=U.regionBackdrop),"regionHeader"in U&&t(9,Z=U.regionHeader),"regionBody"in U&&t(10,z=U.regionBody),"regionFooter"in U&&t(11,se=U.regionFooter)},l.$$.update=()=>{var U,re,Ge;l.$$.dirty[0]&33558528&&t(36,r=((U=p[0])==null?void 0:U.position)??b),t(18,s=`${Sr} ${X} ${F} ${e.class??""} ${((re=p[0])==null?void 0:re.backdropClasses)??""}`),l.$$.dirty[1]&32&&t(17,o=`${Ar} ${r??""}`),l.$$.dirty[0]&2013270016|l.$$.dirty[1]&7&&t(16,a=`${Rr} ${V} ${g} ${k} ${T} ${C} ${A} ${N} ${((Ge=p[0])==null?void 0:Ge.modalClasses)??""}`),l.$$.dirty[0]&2046824447|l.$$.dirty[1]&23&&t(15,m={position:b,duration:_,flyOpacity:$,flyX:I,flyY:S,background:V,width:g,height:k,padding:T,spacing:C,rounded:A,shadow:N,buttonNeutral:B,buttonPositive:R,buttonTextCancel:O,buttonTextConfirm:H,buttonTextSubmit:j,regionBackdrop:X,regionHeader:Z,regionBody:z,regionFooter:se,onClose:te})},e=Ts(e),[O,H,j,_,$,I,S,B,R,Z,z,se,p,x,W,m,a,o,s,ue,oe,te,Ve,Fe,De,b,v,V,g,k,T,C,A,N,F,X,r,Me,ve,ne]}class Gr extends he{constructor(e){super(),ge(this,e,Br,Vr,fe,{position:25,components:26,duration:3,flyOpacity:4,flyX:5,flyY:6,background:27,width:28,height:29,padding:30,spacing:31,rounded:32,shadow:33,zIndex:34,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:35,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}const Or=`
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

<Table config={groupConfig} />`,er=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,Lr=`
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
				
export const usersStore = writable<User[]>(users);`,Nr=`
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
/>`,Mr=`
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

<Table config={usersBDConfig} />`,Pr=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,Hr=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,jr=`
export interface Columns {
	[key: string]: Column;
}`,zr=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,Wr=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,Jr=`
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

<Table config={usersMissingIDsConfig} />`,qr=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,Yr=`
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
`,Kr=`
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
`,Xr=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,Zr=`
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
<\/script>`,Qr=`
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
`,en=`
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
`,tn=`
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
`,sn=`
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
<Modal />`,rn=`
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
`,nn=`
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
`,ln=`
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
`,on=`
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
`,an=`
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
`;function cn(l){let e,t,r,s="TableConfig <T>",o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H,j,X,Z,z,se,x,M,W,Q="Writable <T[]>",ue,oe,te,Ve,Fe,De,Me,ve,ne,U,re,Ge,Oe,be,Qe="SvelteComponent",Pe,ce,ae,xe,Te,Be,Ie,et,Ee,_e,pe,Je,Le,Se,ft="number[]",tt,de,ie,Ae,st,$e,me,He,Dt,je,rt,Tt="number",ke,Ue,Re,Et,$t,ye,qe,nt,ze,Ct,Ye,yt="Columns",Nt,Ce,ee,We,mt,Mt,Pt,lt,pt,Ht;return g=new ls({props:{language:"ts",code:Hr}}),{c(){e=u("div"),t=u("div"),r=u("h3"),o=D(s),a=y(),m=u("button"),p=D("Show type details"),h=y(),b=u("div"),v=D("Underlined attributes are "),_=u("strong"),$=D("required"),I=D("."),S=y(),V=u("div"),J(g.$$.fragment),k=y(),T=u("div"),C=u("div"),A=u("div"),N=D("id:"),F=y(),B=u("div"),R=D("string"),O=y(),H=u("p"),j=D("Unique identifier for the table to generate unique IDs for the filters."),X=y(),Z=u("div"),z=u("div"),se=u("div"),x=D("data:"),M=y(),W=u("div"),ue=D(Q),oe=y(),te=u("p"),Ve=D("A writable store of the type "),Fe=u("code"),De=D("T[]"),Me=D(`. Any changes in the store will
			be reflected in the table.`),ve=y(),ne=u("div"),U=u("div"),re=u("div"),Ge=D("optionsComponent:"),Oe=y(),be=u("div"),Pe=D(Qe),ce=y(),ae=u("p"),xe=D(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Te=u("code"),Be=D("optionsComponent"),Ie=D(" was provided."),et=y(),Ee=u("div"),_e=u("div"),pe=u("div"),Je=D("pageSizes:"),Le=y(),Se=u("div"),tt=D(ft),de=y(),ie=u("p"),Ae=D("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),st=y(),$e=u("div"),me=u("div"),He=u("div"),Dt=D("defaultPageSize:"),je=y(),rt=u("div"),ke=D(Tt),Ue=y(),Re=u("p"),Et=D(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),$t=y(),ye=u("div"),qe=u("div"),nt=u("div"),ze=D("columns:"),Ct=y(),Ye=u("div"),Nt=D(yt),Ce=y(),ee=u("p"),We=D("An object with configuration for specific columns. "),mt=u("code"),Mt=D("Columns"),Pt=D(`
			object is described below.`),this.h()},l(Ke){e=d(Ke,"DIV",{class:!0});var we=f(e);t=d(we,"DIV",{class:!0,id:!0});var Ne=f(t);r=d(Ne,"H3",{class:!0});var ht=f(r);o=E(ht,s),ht.forEach(i),a=w(Ne),m=d(Ne,"BUTTON",{class:!0});var jt=f(m);p=E(jt,"Show type details"),jt.forEach(i),h=w(Ne),b=d(Ne,"DIV",{class:!0});var wt=f(b);v=E(wt,"Underlined attributes are "),_=d(wt,"STRONG",{});var zt=f(_);$=E(zt,"required"),zt.forEach(i),I=E(wt,"."),wt.forEach(i),S=w(Ne),V=d(Ne,"DIV",{class:!0,"data-popup":!0});var gt=f(V);K(g.$$.fragment,gt),gt.forEach(i),Ne.forEach(i),k=w(we),T=d(we,"DIV",{class:!0});var ot=f(T);C=d(ot,"DIV",{class:!0});var It=f(C);A=d(It,"DIV",{class:!0});var Wt=f(A);N=E(Wt,"id:"),Wt.forEach(i),F=w(It),B=d(It,"DIV",{class:!0});var Jt=f(B);R=E(Jt,"string"),Jt.forEach(i),It.forEach(i),O=w(ot),H=d(ot,"P",{class:!0});var vt=f(H);j=E(vt,"Unique identifier for the table to generate unique IDs for the filters."),vt.forEach(i),ot.forEach(i),X=w(we),Z=d(we,"DIV",{class:!0});var at=f(Z);z=d(at,"DIV",{class:!0});var kt=f(z);se=d(kt,"DIV",{class:!0});var qt=f(se);x=E(qt,"data:"),qt.forEach(i),M=w(kt),W=d(kt,"DIV",{class:!0});var it=f(W);ue=E(it,Q),it.forEach(i),kt.forEach(i),oe=w(at),te=d(at,"P",{class:!0});var Xe=f(te);Ve=E(Xe,"A writable store of the type "),Fe=d(Xe,"CODE",{class:!0});var Ut=f(Fe);De=E(Ut,"T[]"),Ut.forEach(i),Me=E(Xe,`. Any changes in the store will
			be reflected in the table.`),Xe.forEach(i),at.forEach(i),ve=w(we),ne=d(we,"DIV",{class:!0});var Vt=f(ne);U=d(Vt,"DIV",{class:!0});var bt=f(U);re=d(bt,"DIV",{class:!0});var Yt=f(re);Ge=E(Yt,"optionsComponent:"),Yt.forEach(i),Oe=w(bt),be=d(bt,"DIV",{class:!0});var St=f(be);Pe=E(St,Qe),St.forEach(i),bt.forEach(i),ce=w(Vt),ae=d(Vt,"P",{class:!0});var ct=f(ae);xe=E(ct,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),Te=d(ct,"CODE",{class:!0});var At=f(Te);Be=E(At,"optionsComponent"),At.forEach(i),Ie=E(ct," was provided."),ct.forEach(i),Vt.forEach(i),et=w(we),Ee=d(we,"DIV",{class:!0});var Rt=f(Ee);_e=d(Rt,"DIV",{class:!0});var Ft=f(_e);pe=d(Ft,"DIV",{class:!0});var Bt=f(pe);Je=E(Bt,"pageSizes:"),Bt.forEach(i),Le=w(Ft),Se=d(Ft,"DIV",{class:!0});var _t=f(Se);tt=E(_t,ft),_t.forEach(i),Ft.forEach(i),de=w(Rt),ie=d(Rt,"P",{class:!0});var Gt=f(ie);Ae=E(Gt,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Gt.forEach(i),Rt.forEach(i),st=w(we),$e=d(we,"DIV",{class:!0});var Ot=f($e);me=d(Ot,"DIV",{class:!0});var xt=f(me);He=d(xt,"DIV",{class:!0});var rs=f(He);Dt=E(rs,"defaultPageSize:"),rs.forEach(i),je=w(xt),rt=d(xt,"DIV",{class:!0});var _s=f(rt);ke=E(_s,Tt),_s.forEach(i),xt.forEach(i),Ue=w(Ot),Re=d(Ot,"P",{class:!0});var Ds=f(Re);Et=E(Ds,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),Ds.forEach(i),Ot.forEach(i),$t=w(we),ye=d(we,"DIV",{class:!0});var as=f(ye);qe=d(as,"DIV",{class:!0});var is=f(qe);nt=d(is,"DIV",{class:!0});var Es=f(nt);ze=E(Es,"columns:"),Es.forEach(i),Ct=w(is),Ye=d(is,"DIV",{class:!0});var $s=f(Ye);Nt=E($s,yt),$s.forEach(i),is.forEach(i),Ce=w(as),ee=d(as,"P",{class:!0});var cs=f(ee);We=E(cs,"An object with configuration for specific columns. "),mt=d(cs,"CODE",{class:!0});var Cs=f(mt);Mt=E(Cs,"Columns"),Cs.forEach(i),Pt=E(cs,`
			object is described below.`),cs.forEach(i),as.forEach(i),we.forEach(i),this.h()},h(){c(r,"class","font-semibold relative w-max"),c(m,"class","btn variant-ghost-primary w-min"),c(b,"class","italic div"),c(V,"class","variant-filled-secondary"),c(V,"data-popup","popupClickTableConfig"),c(t,"class","grid gap-2"),c(t,"id","tableConfig"),c(A,"class","italic"),c(B,"class","font-bold"),c(C,"class","flex gap-2 underline"),c(H,"class","text-xl pl-10"),c(T,"class","items-center"),c(se,"class","italic"),c(W,"class","font-bold"),c(z,"class","flex gap-2 underline"),c(Fe,"class","!text-xl"),c(te,"class","text-xl pl-10"),c(Z,"class","items-center"),c(re,"class","italic"),c(be,"class","font-bold"),c(U,"class","flex gap-2"),c(Te,"class","!text-xl"),c(ae,"class","text-xl pl-10"),c(ne,"class","items-center"),c(pe,"class","italic"),c(Se,"class","font-bold"),c(_e,"class","flex gap-2"),c(ie,"class","text-xl pl-10"),c(Ee,"class","items-center"),c(He,"class","italic"),c(rt,"class","font-bold"),c(me,"class","flex gap-2"),c(Re,"class","text-xl pl-10"),c($e,"class","items-center"),c(nt,"class","italic"),c(Ye,"class","font-bold"),c(qe,"class","flex gap-2"),c(mt,"class","!text-xl"),c(ee,"class","text-xl pl-10"),c(ye,"class","items-center"),c(e,"class","grid gap-5")},m(Ke,we){P(Ke,e,we),n(e,t),n(t,r),n(r,o),n(t,a),n(t,m),n(m,p),n(t,h),n(t,b),n(b,v),n(b,_),n(_,$),n(b,I),n(t,S),n(t,V),q(g,V,null),n(e,k),n(e,T),n(T,C),n(C,A),n(A,N),n(C,F),n(C,B),n(B,R),n(T,O),n(T,H),n(H,j),n(e,X),n(e,Z),n(Z,z),n(z,se),n(se,x),n(z,M),n(z,W),n(W,ue),n(Z,oe),n(Z,te),n(te,Ve),n(te,Fe),n(Fe,De),n(te,Me),n(e,ve),n(e,ne),n(ne,U),n(U,re),n(re,Ge),n(U,Oe),n(U,be),n(be,Pe),n(ne,ce),n(ne,ae),n(ae,xe),n(ae,Te),n(Te,Be),n(ae,Ie),n(e,et),n(e,Ee),n(Ee,_e),n(_e,pe),n(pe,Je),n(_e,Le),n(_e,Se),n(Se,tt),n(Ee,de),n(Ee,ie),n(ie,Ae),n(e,st),n(e,$e),n($e,me),n(me,He),n(He,Dt),n(me,je),n(me,rt),n(rt,ke),n($e,Ue),n($e,Re),n(Re,Et),n(e,$t),n(e,ye),n(ye,qe),n(qe,nt),n(nt,ze),n(qe,Ct),n(qe,Ye),n(Ye,Nt),n(ye,Ce),n(ye,ee),n(ee,We),n(ee,mt),n(mt,Mt),n(ee,Pt),lt=!0,pt||(Ht=ns(ps.call(null,m,l[0])),pt=!0)},p:le,i(Ke){lt||(G(g.$$.fragment,Ke),lt=!0)},o(Ke){L(g.$$.fragment,Ke),lt=!1},d(Ke){Ke&&i(e),Y(g),pt=!1,Ht()}}}function un(l){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class dn extends he{constructor(e){super(),ge(this,e,un,cn,fe,{})}}function fn(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H;return b=new ls({props:{language:"ts",code:jr}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("Columns"),o=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),S=D("[key: "),V=u("strong"),g=D("string"),k=D("]:"),T=y(),C=u("div"),A=D("Column"),N=y(),F=u("p"),B=D(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(j){e=d(j,"DIV",{class:!0});var X=f(e);t=d(X,"DIV",{class:!0,id:!0});var Z=f(t);r=d(Z,"H3",{class:!0});var z=f(r);s=E(z,"Columns"),z.forEach(i),o=w(Z),a=d(Z,"BUTTON",{class:!0});var se=f(a);m=E(se,"Show type details"),se.forEach(i),p=w(Z),h=d(Z,"DIV",{"data-popup":!0});var x=f(h);K(b.$$.fragment,x),x.forEach(i),Z.forEach(i),v=w(X),_=d(X,"DIV",{class:!0});var M=f(_);$=d(M,"DIV",{class:!0});var W=f($);I=d(W,"DIV",{class:!0});var Q=f(I);S=E(Q,"[key: "),V=d(Q,"STRONG",{});var ue=f(V);g=E(ue,"string"),ue.forEach(i),k=E(Q,"]:"),Q.forEach(i),T=w(W),C=d(W,"DIV",{class:!0});var oe=f(C);A=E(oe,"Column"),oe.forEach(i),W.forEach(i),N=w(M),F=d(M,"P",{class:!0});var te=f(F);B=E(te,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),te.forEach(i),M.forEach(i),X.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumns"),c(t,"class","grid gap-2"),c(t,"id","columns"),c(I,"class","italic"),c(C,"class","font-bold"),c($,"class","flex gap-2"),c(F,"class","text-xl pl-10"),c(_,"class","items-center"),c(e,"class","grid gap-5")},m(j,X){P(j,e,X),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,$),n($,I),n(I,S),n(I,V),n(V,g),n(I,k),n($,T),n($,C),n(C,A),n(_,N),n(_,F),n(F,B),R=!0,O||(H=ns(ps.call(null,a,l[0])),O=!0)},p:le,i(j){R||(G(b.$$.fragment,j),R=!0)},o(j){L(b.$$.fragment,j),R=!1},d(j){j&&i(e),Y(b),O=!1,H()}}}function pn(l){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class mn extends he{constructor(e){super(),ge(this,e,pn,fn,fe,{})}}function hn(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H,j,X,Z,z,se,x,M,W,Q,ue,oe,te,Ve,Fe,De,Me,ve,ne,U,re,Ge,Oe,be,Qe,Pe,ce,ae,xe,Te,Be,Ie,et,Ee,_e,pe,Je,Le,Se,ft,tt,de,ie,Ae,st,$e,me,He,Dt,je,rt,Tt,ke,Ue,Re,Et,$t,ye,qe,nt,ze,Ct,Ye,yt,Nt;return b=new ls({props:{language:"ts",code:zr}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("Column"),o=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),S=D("header:"),V=y(),g=u("div"),k=D("string"),T=y(),C=u("p"),A=D(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),N=y(),F=u("div"),B=u("div"),R=u("div"),O=D("exclude:"),H=y(),j=u("div"),X=D("boolean"),Z=y(),z=u("p"),se=D(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),x=y(),M=u("div"),W=u("div"),Q=u("div"),ue=D("disableFiltering:"),oe=y(),te=u("div"),Ve=D("boolean"),Fe=y(),De=u("p"),Me=D("Whether to disable filtering for the column or not. By default, filtering is enabled."),ve=y(),ne=u("div"),U=u("div"),re=u("div"),Ge=D("disableSorting:"),Oe=y(),be=u("div"),Qe=D("boolean"),Pe=y(),ce=u("p"),ae=D("Whether to disable sorting for the column or not. By default, sorting is enabled."),xe=y(),Te=u("div"),Be=u("div"),Ie=u("div"),et=D("colFitlerFn:"),Ee=y(),_e=u("div"),pe=u("a"),Je=D("ColumnFilterFn"),Le=y(),Se=u("p"),ft=D(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),tt=y(),de=u("div"),ie=u("div"),Ae=u("div"),st=D("colFilterComponent:"),$e=y(),me=u("div"),He=D("SvelteComponent"),Dt=y(),je=u("p"),rt=D(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Tt=y(),ke=u("div"),Ue=u("div"),Re=u("div"),Et=D("instructions:"),$t=y(),ye=u("div"),qe=D("ColumnInstructions"),nt=y(),ze=u("p"),Ct=D("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(Ce){e=d(Ce,"DIV",{class:!0});var ee=f(e);t=d(ee,"DIV",{class:!0,id:!0});var We=f(t);r=d(We,"H3",{class:!0});var mt=f(r);s=E(mt,"Column"),mt.forEach(i),o=w(We),a=d(We,"BUTTON",{class:!0});var Mt=f(a);m=E(Mt,"Show type details"),Mt.forEach(i),p=w(We),h=d(We,"DIV",{"data-popup":!0});var Pt=f(h);K(b.$$.fragment,Pt),Pt.forEach(i),We.forEach(i),v=w(ee),_=d(ee,"DIV",{class:!0});var lt=f(_);$=d(lt,"DIV",{class:!0});var pt=f($);I=d(pt,"DIV",{class:!0});var Ht=f(I);S=E(Ht,"header:"),Ht.forEach(i),V=w(pt),g=d(pt,"DIV",{class:!0});var Ke=f(g);k=E(Ke,"string"),Ke.forEach(i),pt.forEach(i),T=w(lt),C=d(lt,"P",{class:!0});var we=f(C);A=E(we,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),we.forEach(i),lt.forEach(i),N=w(ee),F=d(ee,"DIV",{class:!0});var Ne=f(F);B=d(Ne,"DIV",{class:!0});var ht=f(B);R=d(ht,"DIV",{class:!0});var jt=f(R);O=E(jt,"exclude:"),jt.forEach(i),H=w(ht),j=d(ht,"DIV",{class:!0});var wt=f(j);X=E(wt,"boolean"),wt.forEach(i),ht.forEach(i),Z=w(Ne),z=d(Ne,"P",{class:!0});var zt=f(z);se=E(zt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),zt.forEach(i),Ne.forEach(i),x=w(ee),M=d(ee,"DIV",{class:!0});var gt=f(M);W=d(gt,"DIV",{class:!0});var ot=f(W);Q=d(ot,"DIV",{class:!0});var It=f(Q);ue=E(It,"disableFiltering:"),It.forEach(i),oe=w(ot),te=d(ot,"DIV",{class:!0});var Wt=f(te);Ve=E(Wt,"boolean"),Wt.forEach(i),ot.forEach(i),Fe=w(gt),De=d(gt,"P",{class:!0});var Jt=f(De);Me=E(Jt,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Jt.forEach(i),gt.forEach(i),ve=w(ee),ne=d(ee,"DIV",{class:!0});var vt=f(ne);U=d(vt,"DIV",{class:!0});var at=f(U);re=d(at,"DIV",{class:!0});var kt=f(re);Ge=E(kt,"disableSorting:"),kt.forEach(i),Oe=w(at),be=d(at,"DIV",{class:!0});var qt=f(be);Qe=E(qt,"boolean"),qt.forEach(i),at.forEach(i),Pe=w(vt),ce=d(vt,"P",{class:!0});var it=f(ce);ae=E(it,"Whether to disable sorting for the column or not. By default, sorting is enabled."),it.forEach(i),vt.forEach(i),xe=w(ee),Te=d(ee,"DIV",{class:!0});var Xe=f(Te);Be=d(Xe,"DIV",{class:!0});var Ut=f(Be);Ie=d(Ut,"DIV",{class:!0});var Vt=f(Ie);et=E(Vt,"colFitlerFn:"),Vt.forEach(i),Ee=w(Ut),_e=d(Ut,"DIV",{class:!0});var bt=f(_e);pe=d(bt,"A",{href:!0});var Yt=f(pe);Je=E(Yt,"ColumnFilterFn"),Yt.forEach(i),bt.forEach(i),Ut.forEach(i),Le=w(Xe),Se=d(Xe,"P",{class:!0});var St=f(Se);ft=E(St,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),St.forEach(i),Xe.forEach(i),tt=w(ee),de=d(ee,"DIV",{class:!0});var ct=f(de);ie=d(ct,"DIV",{class:!0});var At=f(ie);Ae=d(At,"DIV",{class:!0});var Rt=f(Ae);st=E(Rt,"colFilterComponent:"),Rt.forEach(i),$e=w(At),me=d(At,"DIV",{class:!0});var Ft=f(me);He=E(Ft,"SvelteComponent"),Ft.forEach(i),At.forEach(i),Dt=w(ct),je=d(ct,"P",{class:!0});var Bt=f(je);rt=E(Bt,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Bt.forEach(i),ct.forEach(i),Tt=w(ee),ke=d(ee,"DIV",{class:!0});var _t=f(ke);Ue=d(_t,"DIV",{class:!0});var Gt=f(Ue);Re=d(Gt,"DIV",{class:!0});var Ot=f(Re);Et=E(Ot,"instructions:"),Ot.forEach(i),$t=w(Gt),ye=d(Gt,"DIV",{class:!0});var xt=f(ye);qe=E(xt,"ColumnInstructions"),xt.forEach(i),Gt.forEach(i),nt=w(_t),ze=d(_t,"P",{class:!0});var rs=f(ze);Ct=E(rs,"Configuration for the column's appearance, sorting and filtering functionalities."),rs.forEach(i),_t.forEach(i),ee.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumn"),c(t,"class","grid gap-2"),c(t,"id","column"),c(I,"class","italic"),c(g,"class","font-bold"),c($,"class","flex gap-2"),c(C,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(Q,"class","italic"),c(te,"class","font-bold"),c(W,"class","flex gap-2"),c(De,"class","text-xl pl-10"),c(M,"class","items-center"),c(re,"class","italic"),c(be,"class","font-bold"),c(U,"class","flex gap-2"),c(ce,"class","text-xl pl-10"),c(ne,"class","items-center"),c(Ie,"class","italic"),c(pe,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),c(_e,"class","font-bold"),c(Be,"class","flex gap-2"),c(Se,"class","text-xl pl-10"),c(Te,"class","items-center"),c(Ae,"class","italic"),c(me,"class","font-bold"),c(ie,"class","flex gap-2"),c(je,"class","text-xl pl-10"),c(de,"class","items-center"),c(Re,"class","italic"),c(ye,"class","font-bold"),c(Ue,"class","flex gap-2"),c(ze,"class","text-xl pl-10"),c(ke,"class","items-center"),c(e,"class","grid gap-5")},m(Ce,ee){P(Ce,e,ee),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,$),n($,I),n(I,S),n($,V),n($,g),n(g,k),n(_,T),n(_,C),n(C,A),n(e,N),n(e,F),n(F,B),n(B,R),n(R,O),n(B,H),n(B,j),n(j,X),n(F,Z),n(F,z),n(z,se),n(e,x),n(e,M),n(M,W),n(W,Q),n(Q,ue),n(W,oe),n(W,te),n(te,Ve),n(M,Fe),n(M,De),n(De,Me),n(e,ve),n(e,ne),n(ne,U),n(U,re),n(re,Ge),n(U,Oe),n(U,be),n(be,Qe),n(ne,Pe),n(ne,ce),n(ce,ae),n(e,xe),n(e,Te),n(Te,Be),n(Be,Ie),n(Ie,et),n(Be,Ee),n(Be,_e),n(_e,pe),n(pe,Je),n(Te,Le),n(Te,Se),n(Se,ft),n(e,tt),n(e,de),n(de,ie),n(ie,Ae),n(Ae,st),n(ie,$e),n(ie,me),n(me,He),n(de,Dt),n(de,je),n(je,rt),n(e,Tt),n(e,ke),n(ke,Ue),n(Ue,Re),n(Re,Et),n(Ue,$t),n(Ue,ye),n(ye,qe),n(ke,nt),n(ke,ze),n(ze,Ct),Ye=!0,yt||(Nt=ns(ps.call(null,a,l[0])),yt=!0)},p:le,i(Ce){Ye||(G(b.$$.fragment,Ce),Ye=!0)},o(Ce){L(b.$$.fragment,Ce),Ye=!1},d(Ce){Ce&&i(e),Y(b),yt=!1,Nt()}}}function gn(l){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class vn extends he{constructor(e){super(),ge(this,e,gn,hn,fe,{})}}function bn(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H,j,X,Z,z,se,x,M,W,Q,ue,oe,te,Ve,Fe,De,Me,ve,ne,U,re,Ge,Oe,be,Qe,Pe,ce,ae,xe,Te,Be,Ie,et,Ee,_e,pe,Je,Le,Se,ft,tt,de,ie,Ae,st,$e,me,He,Dt,je,rt,Tt,ke,Ue,Re,Et,$t,ye,qe,nt,ze,Ct,Ye,yt,Nt;return b=new ls({props:{language:"ts",code:Wr}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("ColumnInstructions"),o=y(),a=u("button"),m=D("Show type details"),p=y(),h=u("div"),J(b.$$.fragment),v=y(),_=u("div"),$=u("div"),I=u("div"),S=D("toStringFn:"),V=y(),g=u("div"),k=D("(value: any) => string"),T=y(),C=u("p"),A=D("Custom toString function to be applied on the column."),N=y(),F=u("div"),B=u("div"),R=u("div"),O=D("toSortableValueFn:"),H=y(),j=u("div"),X=D("(value: any) => string | number"),Z=y(),z=u("p"),se=D("Custom function to return either a string or a number value to have a sortable column."),x=y(),M=u("div"),W=u("div"),Q=u("div"),ue=D("toFilterableValueFn:"),oe=y(),te=u("div"),Ve=D("(value: any) => string | number | Date"),Fe=y(),De=u("p"),Me=D(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),ve=y(),ne=u("div"),U=u("div"),re=u("div"),Ge=D("renderComponent:"),Oe=y(),be=u("div"),Qe=D("SvelteComponent"),Pe=y(),ce=u("div"),ae=u("p"),xe=u("code"),Te=D("renderComponent"),Be=D(" overrides "),Ie=u("code"),et=D("toStringFn"),Ee=D("."),_e=y(),pe=u("p"),Je=D("Every "),Le=u("code"),Se=D("renderComponent"),ft=D(" will get 2 props:"),tt=y(),de=u("div"),ie=u("div"),Ae=u("div"),st=D("row:"),$e=y(),me=u("div"),He=D("Object"),Dt=y(),je=u("p"),rt=D("The current row in the table. In other words, a single object from the data store."),Tt=y(),ke=u("div"),Ue=u("div"),Re=u("div"),Et=D("value:"),$t=y(),ye=u("div"),qe=D("any"),nt=y(),ze=u("p"),Ct=D("The value of the current cell."),this.h()},l(Ce){e=d(Ce,"DIV",{class:!0});var ee=f(e);t=d(ee,"DIV",{class:!0,id:!0});var We=f(t);r=d(We,"H3",{class:!0});var mt=f(r);s=E(mt,"ColumnInstructions"),mt.forEach(i),o=w(We),a=d(We,"BUTTON",{class:!0});var Mt=f(a);m=E(Mt,"Show type details"),Mt.forEach(i),p=w(We),h=d(We,"DIV",{"data-popup":!0});var Pt=f(h);K(b.$$.fragment,Pt),Pt.forEach(i),We.forEach(i),v=w(ee),_=d(ee,"DIV",{class:!0});var lt=f(_);$=d(lt,"DIV",{class:!0});var pt=f($);I=d(pt,"DIV",{class:!0});var Ht=f(I);S=E(Ht,"toStringFn:"),Ht.forEach(i),V=w(pt),g=d(pt,"DIV",{class:!0});var Ke=f(g);k=E(Ke,"(value: any) => string"),Ke.forEach(i),pt.forEach(i),T=w(lt),C=d(lt,"P",{class:!0});var we=f(C);A=E(we,"Custom toString function to be applied on the column."),we.forEach(i),lt.forEach(i),N=w(ee),F=d(ee,"DIV",{class:!0});var Ne=f(F);B=d(Ne,"DIV",{class:!0});var ht=f(B);R=d(ht,"DIV",{class:!0});var jt=f(R);O=E(jt,"toSortableValueFn:"),jt.forEach(i),H=w(ht),j=d(ht,"DIV",{class:!0});var wt=f(j);X=E(wt,"(value: any) => string | number"),wt.forEach(i),ht.forEach(i),Z=w(Ne),z=d(Ne,"P",{class:!0});var zt=f(z);se=E(zt,"Custom function to return either a string or a number value to have a sortable column."),zt.forEach(i),Ne.forEach(i),x=w(ee),M=d(ee,"DIV",{class:!0});var gt=f(M);W=d(gt,"DIV",{class:!0});var ot=f(W);Q=d(ot,"DIV",{class:!0});var It=f(Q);ue=E(It,"toFilterableValueFn:"),It.forEach(i),oe=w(ot),te=d(ot,"DIV",{class:!0});var Wt=f(te);Ve=E(Wt,"(value: any) => string | number | Date"),Wt.forEach(i),ot.forEach(i),Fe=w(gt),De=d(gt,"P",{class:!0});var Jt=f(De);Me=E(Jt,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Jt.forEach(i),gt.forEach(i),ve=w(ee),ne=d(ee,"DIV",{class:!0});var vt=f(ne);U=d(vt,"DIV",{class:!0});var at=f(U);re=d(at,"DIV",{class:!0});var kt=f(re);Ge=E(kt,"renderComponent:"),kt.forEach(i),Oe=w(at),be=d(at,"DIV",{class:!0});var qt=f(be);Qe=E(qt,"SvelteComponent"),qt.forEach(i),at.forEach(i),Pe=w(vt),ce=d(vt,"DIV",{class:!0});var it=f(ce);ae=d(it,"P",{class:!0});var Xe=f(ae);xe=d(Xe,"CODE",{});var Ut=f(xe);Te=E(Ut,"renderComponent"),Ut.forEach(i),Be=E(Xe," overrides "),Ie=d(Xe,"CODE",{});var Vt=f(Ie);et=E(Vt,"toStringFn"),Vt.forEach(i),Ee=E(Xe,"."),Xe.forEach(i),_e=w(it),pe=d(it,"P",{class:!0});var bt=f(pe);Je=E(bt,"Every "),Le=d(bt,"CODE",{});var Yt=f(Le);Se=E(Yt,"renderComponent"),Yt.forEach(i),ft=E(bt," will get 2 props:"),bt.forEach(i),tt=w(it),de=d(it,"DIV",{class:!0});var St=f(de);ie=d(St,"DIV",{class:!0});var ct=f(ie);Ae=d(ct,"DIV",{class:!0});var At=f(Ae);st=E(At,"row:"),At.forEach(i),$e=w(ct),me=d(ct,"DIV",{class:!0});var Rt=f(me);He=E(Rt,"Object"),Rt.forEach(i),ct.forEach(i),Dt=w(St),je=d(St,"P",{class:!0});var Ft=f(je);rt=E(Ft,"The current row in the table. In other words, a single object from the data store."),Ft.forEach(i),St.forEach(i),Tt=w(it),ke=d(it,"DIV",{class:!0});var Bt=f(ke);Ue=d(Bt,"DIV",{class:!0});var _t=f(Ue);Re=d(_t,"DIV",{class:!0});var Gt=f(Re);Et=E(Gt,"value:"),Gt.forEach(i),$t=w(_t),ye=d(_t,"DIV",{class:!0});var Ot=f(ye);qe=E(Ot,"any"),Ot.forEach(i),_t.forEach(i),nt=w(Bt),ze=d(Bt,"P",{class:!0});var xt=f(ze);Ct=E(xt,"The value of the current cell."),xt.forEach(i),Bt.forEach(i),it.forEach(i),vt.forEach(i),ee.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumnInstructions"),c(t,"class","grid gap-2"),c(t,"id","columnInstructions"),c(I,"class","italic"),c(g,"class","font-bold"),c($,"class","flex gap-2"),c(C,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(Q,"class","italic"),c(te,"class","font-bold"),c(W,"class","flex gap-2"),c(De,"class","text-xl pl-10"),c(M,"class","items-center"),c(re,"class","italic"),c(be,"class","font-bold"),c(U,"class","flex gap-2"),c(ae,"class","underline"),c(pe,"class",""),c(Ae,"class","italic"),c(me,"class","font-bold"),c(ie,"class","flex gap-2"),c(je,"class","text-xl pl-10"),c(de,"class","items-center mt-2"),c(Re,"class","italic"),c(ye,"class","font-bold"),c(Ue,"class","flex gap-2"),c(ze,"class","text-xl pl-10"),c(ke,"class","items-center mt-2"),c(ce,"class","ml-5"),c(ne,"class","items-center mt-5"),c(e,"class","grid gap-5")},m(Ce,ee){P(Ce,e,ee),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,$),n($,I),n(I,S),n($,V),n($,g),n(g,k),n(_,T),n(_,C),n(C,A),n(e,N),n(e,F),n(F,B),n(B,R),n(R,O),n(B,H),n(B,j),n(j,X),n(F,Z),n(F,z),n(z,se),n(e,x),n(e,M),n(M,W),n(W,Q),n(Q,ue),n(W,oe),n(W,te),n(te,Ve),n(M,Fe),n(M,De),n(De,Me),n(e,ve),n(e,ne),n(ne,U),n(U,re),n(re,Ge),n(U,Oe),n(U,be),n(be,Qe),n(ne,Pe),n(ne,ce),n(ce,ae),n(ae,xe),n(xe,Te),n(ae,Be),n(ae,Ie),n(Ie,et),n(ae,Ee),n(ce,_e),n(ce,pe),n(pe,Je),n(pe,Le),n(Le,Se),n(pe,ft),n(ce,tt),n(ce,de),n(de,ie),n(ie,Ae),n(Ae,st),n(ie,$e),n(ie,me),n(me,He),n(de,Dt),n(de,je),n(je,rt),n(ce,Tt),n(ce,ke),n(ke,Ue),n(Ue,Re),n(Re,Et),n(Ue,$t),n(Ue,ye),n(ye,qe),n(ke,nt),n(ke,ze),n(ze,Ct),Ye=!0,yt||(Nt=ns(ps.call(null,a,l[0])),yt=!0)},p:le,i(Ce){Ye||(G(b.$$.fragment,Ce),Ye=!0)},o(Ce){L(b.$$.fragment,Ce),Ye=!1},d(Ce){Ce&&i(e),Y(b),yt=!1,Nt()}}}function _n(l){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class Dn extends he{constructor(e){super(),ge(this,e,_n,bn,fe,{})}}function Gs(l,e,t){const r=l.slice();return r[5]=e[t],r}function Os(l){let e,t,r,s,o,a;t=new pr({props:{icon:l[5].icon}});function m(){return l[4](l[5])}return{c(){e=u("button"),J(t.$$.fragment),r=y(),this.h()},l(p){e=d(p,"BUTTON",{class:!0});var h=f(e);K(t.$$.fragment,h),r=w(h),h.forEach(i),this.h()},h(){c(e,"class",`btn btn-sm btn-icon rounded-md ${l[5].color}`)},m(p,h){P(p,e,h),q(t,e,null),n(e,r),s=!0,o||(a=Ze(e,"click",Qs(m)),o=!0)},p(p,h){l=p},i(p){s||(G(t.$$.fragment,p),s=!0)},o(p){L(t.$$.fragment,p),s=!1},d(p){p&&i(e),Y(t),o=!1,a()}}}function En(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=Os(Gs(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){e=u("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=d(a,"DIV",{class:!0});var m=f(e);for(let p=0;p<s.length;p+=1)s[p].l(m);m.forEach(i),this.h()},h(){c(e,"class","flex gap-2 w-min")},m(a,m){P(a,e,m);for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(e,null);t=!0},p(a,[m]){if(m&3){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=Gs(a,r,p);s[p]?(s[p].p(h,m),G(s[p],1)):(s[p]=Os(h),s[p].c(),G(s[p],1),s[p].m(e,null))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)G(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){a&&i(e),ss(s,a)}}}function $n(l,e,t){let{row:r}=e,{dispatchFn:s}=e;const o=p=>s({type:p,row:r}),a=[{icon:mr,color:"variant-filled-primary",type:"CREATE"},{icon:hr,color:"variant-filled-secondary",type:"READ"},{icon:gr,color:"variant-filled-warning",type:"UPDATE"},{icon:vr,color:"variant-filled-error",type:"DELETE"}],m=p=>o(p.type);return l.$$set=p=>{"row"in p&&t(2,r=p.row),"dispatchFn"in p&&t(3,s=p.dispatchFn)},[o,a,r,s,m]}class Cn extends he{constructor(e){super(),ge(this,e,$n,En,fe,{row:2,dispatchFn:3})}}function xs(l,e,t){const r=l.slice();return r[2]=e[t],r}function Ls(l){let e,t=l[2].name+"",r,s;return{c(){e=u("option"),r=D(t),this.h()},l(o){e=d(o,"OPTION",{});var a=f(e);r=E(a,t),a.forEach(i),this.h()},h(){e.__value=s=l[2].id,e.value=e.__value},m(o,a){P(o,e,a),n(e,r)},p(o,a){a&1&&t!==(t=o[2].name+"")&&dt(r,t),a&1&&s!==(s=o[2].id)&&(e.__value=s,e.value=e.__value)},d(o){o&&i(e)}}}function Tn(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V=l[0],g=[];for(let k=0;k<V.length;k+=1)g[k]=Ls(xs(l,V,k));return{c(){e=u("div"),t=u("label"),r=D("Select the users you would like to add to the "),s=u("strong"),o=D(l[1]),a=D("."),m=y(),p=u("select");for(let k=0;k<g.length;k+=1)g[k].c();h=y(),b=u("div"),v=u("button"),_=D("Cancel"),$=y(),I=u("button"),S=D("Done"),this.h()},l(k){e=d(k,"DIV",{class:!0});var T=f(e);t=d(T,"LABEL",{for:!0});var C=f(t);r=E(C,"Select the users you would like to add to the "),s=d(C,"STRONG",{});var A=f(s);o=E(A,l[1]),A.forEach(i),a=E(C,"."),C.forEach(i),m=w(T),p=d(T,"SELECT",{name:!0,class:!0,id:!0});var N=f(p);for(let O=0;O<g.length;O+=1)g[O].l(N);N.forEach(i),h=w(T),b=d(T,"DIV",{class:!0});var F=f(b);v=d(F,"BUTTON",{class:!0});var B=f(v);_=E(B,"Cancel"),B.forEach(i),$=w(F),I=d(F,"BUTTON",{class:!0});var R=f(I);S=E(R,"Done"),R.forEach(i),F.forEach(i),T.forEach(i),this.h()},h(){c(t,"for","users"),p.multiple=!0,c(p,"name","users"),c(p,"class","select"),c(p,"id",""),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(k,T){P(k,e,T),n(e,t),n(t,r),n(t,s),n(s,o),n(t,a),n(e,m),n(e,p);for(let C=0;C<g.length;C+=1)g[C]&&g[C].m(p,null);n(e,h),n(e,b),n(b,v),n(v,_),n(b,$),n(b,I),n(I,S)},p(k,[T]){if(T&2&&dt(o,k[1]),T&1){V=k[0];let C;for(C=0;C<V.length;C+=1){const A=xs(k,V,C);g[C]?g[C].p(A,T):(g[C]=Ls(A),g[C].c(),g[C].m(p,null))}for(;C<g.length;C+=1)g[C].d(1);g.length=V.length}},i:le,o:le,d(k){k&&i(e),ss(g,k)}}}function yn(l,e,t){let{users:r}=e,{group:s}=e;return l.$$set=o=>{"users"in o&&t(0,r=o.users),"group"in o&&t(1,s=o.group)},[r,s]}class wn extends he{constructor(e){super(),ge(this,e,yn,Tn,fe,{users:0,group:1})}}function Ns(l,e,t){const r=l.slice();return r[2]=e[t],r}function Ms(l){let e,t;return{c(){e=u("p"),t=D("No users in this group"),this.h()},l(r){e=d(r,"P",{class:!0});var s=f(e);t=E(s,"No users in this group"),s.forEach(i),this.h()},h(){c(e,"class","italic")},m(r,s){P(r,e,s),n(e,t)},p:le,d(r){r&&i(e)}}}function Ps(l){let e,t,r=l[2].name+"",s,o;return{c(){e=u("li"),t=D("- "),s=D(r),this.h()},l(a){e=d(a,"LI",{class:!0});var m=f(e);t=E(m,"- "),s=E(m,r),m.forEach(i),this.h()},h(){c(e,"class","font-semibold"),e.value=o=l[2].id},m(a,m){P(a,e,m),n(e,t),n(e,s)},p(a,m){m&1&&r!==(r=a[2].name+"")&&dt(s,r),m&1&&o!==(o=a[2].id)&&(e.value=o)},d(a){a&&i(e)}}}function In(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V=l[0],g=[];for(let T=0;T<V.length;T+=1)g[T]=Ps(Ns(l,V,T));let k=null;return V.length||(k=Ms()),{c(){e=u("div"),t=u("label"),r=D("Users in "),s=u("strong"),o=D(l[1]),a=D("."),m=y(),p=u("ul");for(let T=0;T<g.length;T+=1)g[T].c();k&&k.c(),h=y(),b=u("div"),v=u("button"),_=D("Cancel"),$=y(),I=u("button"),S=D("Done"),this.h()},l(T){e=d(T,"DIV",{class:!0});var C=f(e);t=d(C,"LABEL",{for:!0});var A=f(t);r=E(A,"Users in "),s=d(A,"STRONG",{});var N=f(s);o=E(N,l[1]),N.forEach(i),a=E(A,"."),A.forEach(i),m=w(C),p=d(C,"UL",{});var F=f(p);for(let H=0;H<g.length;H+=1)g[H].l(F);k&&k.l(F),F.forEach(i),h=w(C),b=d(C,"DIV",{class:!0});var B=f(b);v=d(B,"BUTTON",{class:!0});var R=f(v);_=E(R,"Cancel"),R.forEach(i),$=w(B),I=d(B,"BUTTON",{class:!0});var O=f(I);S=E(O,"Done"),O.forEach(i),B.forEach(i),C.forEach(i),this.h()},h(){c(t,"for","users"),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(T,C){P(T,e,C),n(e,t),n(t,r),n(t,s),n(s,o),n(t,a),n(e,m),n(e,p);for(let A=0;A<g.length;A+=1)g[A]&&g[A].m(p,null);k&&k.m(p,null),n(e,h),n(e,b),n(b,v),n(v,_),n(b,$),n(b,I),n(I,S)},p(T,[C]){if(C&2&&dt(o,T[1]),C&1){V=T[0];let A;for(A=0;A<V.length;A+=1){const N=Ns(T,V,A);g[A]?g[A].p(N,C):(g[A]=Ps(N),g[A].c(),g[A].m(p,null))}for(;A<g.length;A+=1)g[A].d(1);g.length=V.length,!V.length&&k?k.p(T,C):V.length?k&&(k.d(1),k=null):(k=Ms(),k.c(),k.m(p,null))}},i:le,o:le,d(T){T&&i(e),ss(g,T),k&&k.d()}}}function kn(l,e,t){let{users:r}=e,{group:s}=e;return l.$$set=o=>{"users"in o&&t(0,r=o.users),"group"in o&&t(1,s=o.group)},[r,s]}class Un extends he{constructor(e){super(),ge(this,e,kn,In,fe,{users:0,group:1})}}function Vn(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T;return{c(){e=u("div"),t=u("label"),r=D("Group name"),s=y(),o=u("input"),a=y(),m=u("label"),p=D("Group description"),h=y(),b=u("input"),v=y(),_=u("div"),$=u("button"),I=D("Cancel"),S=y(),V=u("button"),g=D("Done"),this.h()},l(C){e=d(C,"DIV",{class:!0});var A=f(e);t=d(A,"LABEL",{for:!0});var N=f(t);r=E(N,"Group name"),N.forEach(i),s=w(A),o=d(A,"INPUT",{type:!0,id:!0,class:!0}),a=w(A),m=d(A,"LABEL",{for:!0});var F=f(m);p=E(F,"Group description"),F.forEach(i),h=w(A),b=d(A,"INPUT",{type:!0,id:!0,class:!0}),v=w(A),_=d(A,"DIV",{class:!0});var B=f(_);$=d(B,"BUTTON",{class:!0});var R=f($);I=E(R,"Cancel"),R.forEach(i),S=w(B),V=d(B,"BUTTON",{class:!0});var O=f(V);g=E(O,"Done"),O.forEach(i),B.forEach(i),A.forEach(i),this.h()},h(){c(t,"for","groupName"),c(o,"type","text"),c(o,"id","groupName"),c(o,"class","input input-primary"),c(m,"for","groupDescription"),c(b,"type","text"),c(b,"id","groupDescription"),c(b,"class","input input-primary"),c($,"class","btn variant-filled-error"),c(V,"class","btn variant-filled-success"),c(_,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(C,A){P(C,e,A),n(e,t),n(t,r),n(e,s),n(e,o),ts(o,l[0].name),n(e,a),n(e,m),n(m,p),n(e,h),n(e,b),ts(b,l[0].description),n(e,v),n(e,_),n(_,$),n($,I),n(_,S),n(_,V),n(V,g),k||(T=[Ze(o,"input",l[1]),Ze(b,"input",l[2])],k=!0)},p(C,[A]){A&1&&o.value!==C[0].name&&ts(o,C[0].name),A&1&&b.value!==C[0].description&&ts(b,C[0].description)},i:le,o:le,d(C){C&&i(e),k=!1,fs(T)}}}function Sn(l,e,t){let{group:r}=e;function s(){r.name=this.value,t(0,r)}function o(){r.description=this.value,t(0,r)}return l.$$set=a=>{"group"in a&&t(0,r=a.group)},[r,s,o]}class An extends he{constructor(e){super(),ge(this,e,Sn,Vn,fe,{group:0})}}const Rn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3"},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Fn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Bn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Gn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],On=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],xn=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],tr=Qt(Rn),hs=Qt(Fn),Ln=Qt(Bn),Nn=Qt(xn),Mn=Qt(On),Hs={32655:"NA",32654:"NM",32653:"ND"},Pn=Qt(Gn);function js(l,e,t){const r=l.slice();return r[6]=e[t],r[8]=t,r}function zs(l,e,t){const r=l.slice();return r[6]=e[t],r[8]=t,r}function Ws(l){let e,t;return{c(){e=u("h3"),t=D(l[0]),this.h()},l(r){e=d(r,"H3",{class:!0});var s=f(e);t=E(s,l[0]),s.forEach(i),this.h()},h(){c(e,"class","h3")},m(r,s){P(r,e,s),n(e,t)},p(r,s){s&1&&dt(t,r[0])},d(r){r&&i(e)}}}function Hn(l){let e=l[6].name+"",t;return{c(){t=D(e)},l(r){t=E(r,e)},m(r,s){P(r,t,s)},p(r,s){s&2&&e!==(e=r[6].name+"")&&dt(t,e)},d(r){r&&i(t)}}}function Js(l){let e,t,r;function s(a){l[4](a)}let o={name:`tab${l[8]}`,value:l[8],$$slots:{default:[Hn]},$$scope:{ctx:l}};return l[2]!==void 0&&(o.group=l[2]),e=new _r({props:o}),ur.push(()=>dr(e,"group",s)),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,m){q(e,a,m),r=!0},p(a,m){const p={};m&34&&(p.$$scope={dirty:m,ctx:a}),!t&&m&4&&(t=!0,p.group=a[2],fr(()=>t=!1)),e.$set(p)},i(a){r||(G(e.$$.fragment,a),r=!0)},o(a){L(e.$$.fragment,a),r=!1},d(a){Y(e,a)}}}function jn(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=Js(js(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ut()},l(a){for(let m=0;m<s.length;m+=1)s[m].l(a);e=ut()},m(a,m){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=js(a,r,p);s[p]?(s[p].p(h,m),G(s[p],1)):(s[p]=Js(h),s[p].c(),G(s[p],1),s[p].m(e.parentNode,e))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)G(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){ss(s,a),a&&i(e)}}}function qs(l){let e,t;return e=new ls({props:{language:l[6].language,code:l[6].code}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p(r,s){const o={};s&2&&(o.language=r[6].language),s&2&&(o.code=r[6].code),e.$set(o)},i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ys(l){let e,t,r=l[2]===l[8]&&qs(l);return{c(){r&&r.c(),e=ut()},l(s){r&&r.l(s),e=ut()},m(s,o){r&&r.m(s,o),P(s,e,o),t=!0},p(s,o){s[2]===s[8]?r?(r.p(s,o),o&4&&G(r,1)):(r=qs(s),r.c(),G(r,1),r.m(e.parentNode,e)):r&&(Kt(),L(r,1,1,()=>{r=null}),Xt())},i(s){t||(G(r),t=!0)},o(s){L(r),t=!1},d(s){r&&r.d(s),s&&i(e)}}}function zn(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=Ys(zs(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ut()},l(a){for(let m=0;m<s.length;m+=1)s[m].l(a);e=ut()},m(a,m){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=zs(a,r,p);s[p]?(s[p].p(h,m),G(s[p],1)):(s[p]=Ys(h),s[p].c(),G(s[p],1),s[p].m(e.parentNode,e))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)G(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){ss(s,a),a&&i(e)}}}function Wn(l){let e,t,r,s,o,a,m,p,h,b=l[0]&&Ws(l);const v=l[3].default,_=or(v,l,l[5],null);return p=new br({props:{$$slots:{panel:[zn],default:[jn]},$$scope:{ctx:l}}}),{c(){e=u("div"),t=u("div"),b&&b.c(),r=y(),s=u("div"),o=u("div"),_&&_.c(),a=y(),m=u("div"),J(p.$$.fragment),this.h()},l($){e=d($,"DIV",{});var I=f(e);t=d(I,"DIV",{class:!0});var S=f(t);b&&b.l(S),S.forEach(i),r=w(I),s=d(I,"DIV",{class:!0});var V=f(s);o=d(V,"DIV",{});var g=f(o);_&&_.l(g),g.forEach(i),a=w(V),m=d(V,"DIV",{});var k=f(m);K(p.$$.fragment,k),k.forEach(i),V.forEach(i),I.forEach(i),this.h()},h(){c(t,"class","py-5"),c(s,"class","grid grid-cols-2 card p-5 gap-10")},m($,I){P($,e,I),n(e,t),b&&b.m(t,null),n(e,r),n(e,s),n(s,o),_&&_.m(o,null),n(s,a),n(s,m),q(p,m,null),h=!0},p($,[I]){$[0]?b?b.p($,I):(b=Ws($),b.c(),b.m(t,null)):b&&(b.d(1),b=null),_&&_.p&&(!h||I&32)&&ar(_,v,$,$[5],h?cr(v,$[5],I,null):ir($[5]),null);const S={};I&38&&(S.$$scope={dirty:I,ctx:$}),p.$set(S)},i($){h||(G(_,$),G(p.$$.fragment,$),h=!0)},o($){L(_,$),L(p.$$.fragment,$),h=!1},d($){$&&i(e),b&&b.d(),_&&_.d($),Y(p)}}}function Jn(l,e,t){let{$$slots:r={},$$scope:s}=e,{title:o}=e,{tabs:a=[]}=e,m=0;function p(h){m=h,t(2,m)}return l.$$set=h=>{"title"in h&&t(0,o=h.title),"tabs"in h&&t(1,a=h.tabs),"$$scope"in h&&t(5,s=h.$$scope)},[o,a,m,r,p,s]}class gs extends he{constructor(e){super(),ge(this,e,Jn,Wn,fe,{title:0,tabs:1})}}function qn(l){let e,t;return e=new Zt({props:{config:l[0]}}),e.$on("action",l[1]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Yn(l){let e,t,r;return t=new gs({props:{title:"CRUD",tabs:l[2],$$slots:{default:[qn]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","CRUD")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&16&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Kn(l,e,t){let r;bs(l,hs,m=>t(3,r=m));const s={id:"userGroupCRUD",data:tr,optionsComponent:Cn},o=m=>{const{type:p,row:h}=m.detail;switch(p){case"CREATE":Lt.trigger({type:"component",title:`Add user to Group ${h.id}`,component:{ref:wn,props:{users:r.filter(b=>b.group!==h.name),group:h.name}}});break;case"READ":Lt.trigger({type:"component",title:`Users in Group ${h.id}`,component:{ref:Un,props:{users:r.filter(b=>b.group===h.name),group:h.name}}});break;case"UPDATE":Lt.trigger({type:"component",title:`Edit Group ${h.id}`,component:{ref:An,props:{group:h}}});break;case"DELETE":Lt.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${h.name}</strong>?`,response:b=>console.log("response:",b)});break}},a=[{name:"Svelte",language:"html",code:sn},{name:"tableCRUDActions",language:"typescript",code:rn},{name:"optionsComponent",language:"html",code:an},{name:"data",language:"typescript",code:ms+`
`+er},{name:"AddUser.svelte",language:"html",code:nn},{name:"ShowUsers.svelte",language:"html",code:ln},{name:"EditGroup.svelte",language:"html",code:on}];return[s,o,a]}class Xn extends he{constructor(e){super(),ge(this,e,Kn,Yn,fe,{tableCRUDConfig:0,tableCRUDActions:1,tableCRUDtabs:2})}get tableCRUDConfig(){return this.$$.ctx[0]}get tableCRUDActions(){return this.$$.ctx[1]}get tableCRUDtabs(){return this.$$.ctx[2]}}function Zn(l){let e,t,r,s;return{c(){e=u("button"),t=D("Odd or even"),this.h()},l(o){e=d(o,"BUTTON",{class:!0});var a=f(e);t=E(a,"Odd or even"),a.forEach(i),this.h()},h(){c(e,"class","btn btn-sm variant-filled-secondary")},m(o,a){P(o,e,a),n(e,t),r||(s=Ze(e,"click",Qs(l[0])),r=!0)},p:le,i:le,o:le,d(o){o&&i(e),r=!1,s()}}}function Qn(l,e,t){let{row:r}=e,{dispatchFn:s}=e;const o=()=>{const a=r.id%2===0?"even":"odd";return s({type:a})};return l.$$set=a=>{"row"in a&&t(1,r=a.row),"dispatchFn"in a&&t(2,s=a.dispatchFn)},[o,r,s]}class el extends he{constructor(e){super(),ge(this,e,Qn,Zn,fe,{row:1,dispatchFn:2})}}function tl(l){let e,t;return e=new Zt({props:{config:l[1]}}),e.$on("action",l[2]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function sl(l){let e,t,r;return t=new gs({props:{title:"Odd or even",tabs:l[0],$$slots:{default:[tl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","usersNoRoles")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&8&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function rl(l){return[[{name:"Svelte",language:"html",code:Nr},{name:"Data",language:"typescript",code:ms},{name:"TableOptions.svelte",language:"html",code:tn}],{id:"usersNoRoles",data:hs,optionsComponent:el,columns:{id:{colFilterFn:Dr,colFilterComponent:Er},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},s=>{alert(s.detail.type)}]}class nl extends he{constructor(e){super(),ge(this,e,rl,sl,fe,{})}}function ll(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function ol(l){let e,t,r;return t=new os({props:{title:"Minimal configuration",svelte:Lr,data:ms,$$slots:{default:[ll]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","users")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function al(l){return[{id:"users",data:hs}]}class il extends he{constructor(e){super(),ge(this,e,al,ol,fe,{})}}function cl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function ul(l){let e,t,r;return t=new os({props:{title:"Date",svelte:Mr,data:Pr,$$slots:{default:[cl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","usersBD")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function dl(l){return[{id:"usersBD",data:Ln,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:t=>t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:t=>t.getTime(),toFilterableValueFn:t=>t}}}}]}class fl extends he{constructor(e){super(),ge(this,e,dl,ul,fe,{})}}function pl(l){let e,t;return{c(){e=u("input"),this.h()},l(r){e=d(r,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){c(e,"type","checkbox"),c(e,"name","isAdmin"),c(e,"id",t=l[1].id),e.checked=l[0],e.disabled=!0},m(r,s){P(r,e,s)},p(r,[s]){s&2&&t!==(t=r[1].id)&&c(e,"id",t),s&1&&(e.checked=r[0])},i:le,o:le,d(r){r&&i(e)}}}function ml(l,e,t){let{value:r}=e,{row:s}=e;return l.$$set=o=>{"value"in o&&t(0,r=o.value),"row"in o&&t(1,s=o.row)},[r,s]}class hl extends he{constructor(e){super(),ge(this,e,ml,pl,fe,{value:0,row:1})}}function gl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function vl(l){let e,t,r;return t=new gs({props:{title:"Boolean",tabs:l[1],$$slots:{default:[gl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","boolean")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function bl(l){return[{id:"usersAndAdmins",data:Nn,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:hl},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:Zr},{name:"Data",language:"typescript",code:Qr},{name:"IsAdmin.svelte",language:"html",code:en}]]}class _l extends he{constructor(e){super(),ge(this,e,bl,vl,fe,{})}}function Dl(l){let e,t;return{c(){e=u("a"),t=D(l[0]),this.h()},l(r){e=d(r,"A",{href:!0});var s=f(e);t=E(s,l[0]),s.forEach(i),this.h()},h(){c(e,"href",l[0])},m(r,s){P(r,e,s),n(e,t)},p(r,[s]){s&1&&dt(t,r[0]),s&1&&c(e,"href",r[0])},i:le,o:le,d(r){r&&i(e)}}}function El(l,e,t){let{value:r}=e;return l.$$set=s=>{"value"in s&&t(0,r=s.value)},[r]}class $l extends he{constructor(e){super(),ge(this,e,El,Dl,fe,{value:0})}}function Cl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Tl(l){let e,t,r;return t=new gs({props:{title:"URLs",tabs:l[1],$$slots:{default:[Cl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","URLs")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function yl(l){return[{id:"websites",data:Mn,columns:{URL:{header:"URL",instructions:{renderComponent:$l,toFilterableValueFn:r=>r.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:Yr},{name:"Data",language:"typescript",code:Kr},{name:"URLCell.svelte",language:"html",code:Xr}]]}class wl extends he{constructor(e){super(),ge(this,e,yl,Tl,fe,{})}}function Il(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function kl(l){let e,t,r;return t=new os({props:{title:"Missing values",svelte:Jr,data:qr,$$slots:{default:[Il]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","combination")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Ul(l){return[{id:"usersMissingIDs",data:Pn,columns:{id:{header:"ID",instructions:{toStringFn:t=>t in Hs?Hs[t]:t.toString()}}}}]}class Vl extends he{constructor(e){super(),ge(this,e,Ul,kl,fe,{})}}function Sl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Al(l){let e,t,r;return t=new os({props:{title:"Table component",svelte:xr,data:er,$$slots:{default:[Sl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","groups")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Rl(l){return[{id:"userGroups",data:tr,columns:{id:{header:"ID"}}}]}class Fl extends he{constructor(e){super(),ge(this,e,Rl,Al,fe,{})}}function Ks(l,e,t){const r=l.slice();return r[1]=e[t],r}function Xs(l){let e,t,r=l[1].name+"",s,o,a,m,p=l[1].group+"",h,b;return{c(){e=u("tr"),t=u("td"),s=D(r),o=y(),a=u("td"),m=u("div"),h=D(p),b=y()},l(v){e=d(v,"TR",{});var _=f(e);t=d(_,"TD",{});var $=f(t);s=E($,r),$.forEach(i),o=w(_),a=d(_,"TD",{});var I=f(a);m=d(I,"DIV",{});var S=f(m);h=E(S,p),S.forEach(i),I.forEach(i),b=w(_),_.forEach(i)},m(v,_){P(v,e,_),n(e,t),n(t,s),n(e,o),n(e,a),n(a,m),n(m,h),n(e,b)},p(v,_){_&1&&r!==(r=v[1].name+"")&&dt(s,r),_&1&&p!==(p=v[1].group+"")&&dt(h,p)},d(v){v&&i(e)}}}function Bl(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S=l[0],V=[];for(let g=0;g<S.length;g+=1)V[g]=Xs(Ks(l,S,g));return{c(){e=u("div"),t=D("Used classes are important to include for the table to have a uniform look."),r=y(),s=u("div"),o=u("table"),a=u("thead"),m=u("tr"),p=u("th"),h=D("Group"),b=y(),v=u("th"),_=D("Description"),$=y(),I=u("tbody");for(let g=0;g<V.length;g+=1)V[g].c();this.h()},l(g){e=d(g,"DIV",{class:!0});var k=f(e);t=E(k,"Used classes are important to include for the table to have a uniform look."),k.forEach(i),r=w(g),s=d(g,"DIV",{class:!0});var T=f(s);o=d(T,"TABLE",{class:!0});var C=f(o);a=d(C,"THEAD",{});var A=f(a);m=d(A,"TR",{class:!0});var N=f(m);p=d(N,"TH",{class:!0});var F=f(p);h=E(F,"Group"),F.forEach(i),b=w(N),v=d(N,"TH",{class:!0});var B=f(v);_=E(B,"Description"),B.forEach(i),N.forEach(i),A.forEach(i),$=w(C),I=d(C,"TBODY",{});var R=f(I);for(let O=0;O<V.length;O+=1)V[O].l(R);R.forEach(i),C.forEach(i),T.forEach(i),this.h()},h(){c(e,"class","pb-2"),c(p,"class","!p-2"),c(v,"class","!p-2"),c(m,"class","bg-primary-300"),c(o,"class","table table-compact bg-tertiary-200"),c(s,"class","table-container")},m(g,k){P(g,e,k),n(e,t),P(g,r,k),P(g,s,k),n(s,o),n(o,a),n(a,m),n(m,p),n(p,h),n(m,b),n(m,v),n(v,_),n(o,$),n(o,I);for(let T=0;T<V.length;T+=1)V[T]&&V[T].m(I,null)},p(g,k){if(k&1){S=g[0];let T;for(T=0;T<S.length;T+=1){const C=Ks(g,S,T);V[T]?V[T].p(C,k):(V[T]=Xs(C),V[T].c(),V[T].m(I,null))}for(;T<V.length;T+=1)V[T].d(1);V.length=S.length}},d(g){g&&i(e),g&&i(r),g&&i(s),ss(V,g)}}}function Gl(l){let e,t,r;return t=new os({props:{title:"Simple table without Table component",svelte:Or,data:ms,$$slots:{default:[Bl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","simpleTable")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&17&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(G(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Ol(l,e,t){let r;return bs(l,hs,s=>t(0,r=s)),[r]}class xl extends he{constructor(e){super(),ge(this,e,Ol,Gl,fe,{})}}function Ll(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H,j,X,Z,z,se;return o=new xl({}),m=new Fl({}),h=new il({}),S=new nl({}),g=new Xn({}),F=new fl({}),R=new Vl({}),H=new wl({}),X=new _l({}),z=new Gr({}),{c(){e=u("div"),t=u("h2"),r=D("Examples"),s=y(),J(o.$$.fragment),a=y(),J(m.$$.fragment),p=y(),J(h.$$.fragment),b=y(),v=u("div"),_=u("h2"),$=D("Dispatching Actions"),I=y(),J(S.$$.fragment),V=y(),J(g.$$.fragment),k=y(),T=u("div"),C=u("h2"),A=D("Complex data types"),N=y(),J(F.$$.fragment),B=y(),J(R.$$.fragment),O=y(),J(H.$$.fragment),j=y(),J(X.$$.fragment),Z=y(),J(z.$$.fragment),this.h()},l(x){e=d(x,"DIV",{class:!0});var M=f(e);t=d(M,"H2",{});var W=f(t);r=E(W,"Examples"),W.forEach(i),s=w(M),K(o.$$.fragment,M),a=w(M),K(m.$$.fragment,M),p=w(M),K(h.$$.fragment,M),b=w(M),v=d(M,"DIV",{id:!0,class:!0});var Q=f(v);_=d(Q,"H2",{});var ue=f(_);$=E(ue,"Dispatching Actions"),ue.forEach(i),I=w(Q),K(S.$$.fragment,Q),V=w(Q),K(g.$$.fragment,Q),Q.forEach(i),k=w(M),T=d(M,"DIV",{id:!0});var oe=f(T);C=d(oe,"H2",{});var te=f(C);A=E(te,"Complex data types"),te.forEach(i),N=w(oe),K(F.$$.fragment,oe),B=w(oe),K(R.$$.fragment,oe),O=w(oe),K(H.$$.fragment,oe),j=w(oe),K(X.$$.fragment,oe),oe.forEach(i),M.forEach(i),Z=w(x),K(z.$$.fragment,x),this.h()},h(){c(v,"id","actionDispatchersExamples"),c(v,"class","my-20"),c(T,"id","complexTypes"),c(e,"class","grid gap-1")},m(x,M){P(x,e,M),n(e,t),n(t,r),n(e,s),q(o,e,null),n(e,a),q(m,e,null),n(e,p),q(h,e,null),n(e,b),n(e,v),n(v,_),n(_,$),n(v,I),q(S,v,null),n(v,V),q(g,v,null),n(e,k),n(e,T),n(T,C),n(C,A),n(T,N),q(F,T,null),n(T,B),q(R,T,null),n(T,O),q(H,T,null),n(T,j),q(X,T,null),P(x,Z,M),q(z,x,M),se=!0},p:le,i(x){se||(G(o.$$.fragment,x),G(m.$$.fragment,x),G(h.$$.fragment,x),G(S.$$.fragment,x),G(g.$$.fragment,x),G(F.$$.fragment,x),G(R.$$.fragment,x),G(H.$$.fragment,x),G(X.$$.fragment,x),G(z.$$.fragment,x),se=!0)},o(x){L(o.$$.fragment,x),L(m.$$.fragment,x),L(h.$$.fragment,x),L(S.$$.fragment,x),L(g.$$.fragment,x),L(F.$$.fragment,x),L(R.$$.fragment,x),L(H.$$.fragment,x),L(X.$$.fragment,x),L(z.$$.fragment,x),se=!1},d(x){x&&i(e),Y(o),Y(m),Y(h),Y(S),Y(g),Y(F),Y(R),Y(H),Y(X),x&&i(Z),Y(z,x)}}}class Nl extends he{constructor(e){super(),ge(this,e,null,Ll,fe,{})}}function Ml(l){let e,t,r,s,o,a,m,p="(action: CustomEvent<any>) => {}",h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B,R,O,H,j,X,Z,z,se,x,M,W,Q,ue,oe,te,Ve,Fe="(obj: any) => dispatch('action', obj)",De,Me,ve,ne,U,re,Ge,Oe,be,Qe;return{c(){e=u("div"),t=u("div"),r=u("div"),s=u("h3"),o=D("on:action"),a=y(),m=u("h3"),h=D(p),b=y(),v=u("p"),_=D("To dispatch actions and listen to dispatchers you need to create a table with your own "),$=u("code"),I=D("optionsComponent"),S=D(" component."),V=y(),g=u("div"),k=u("p"),T=D("Every "),C=u("code"),A=D("optionsComponent"),N=D(" will get 2 props:"),F=y(),B=u("div"),R=u("div"),O=u("div"),H=D("row:"),j=y(),X=u("div"),Z=D("Object"),z=y(),se=u("p"),x=D("The current row in the table. In other words, a single object from the data store."),M=y(),W=u("div"),Q=u("div"),ue=u("div"),oe=D("dispatchFn:"),te=y(),Ve=u("div"),De=D(Fe),Me=y(),ve=u("p"),ne=D("A function that takes an object and dispatches an action with the name "),U=u("code"),re=D("action"),Ge=D(`. The passed object is accessible by the parent component through the
					`),Oe=u("code"),be=D("action.detail"),Qe=D(" property."),this.h()},l(Pe){e=d(Pe,"DIV",{class:!0});var ce=f(e);t=d(ce,"DIV",{class:!0,id:!0});var ae=f(t);r=d(ae,"DIV",{class:!0});var xe=f(r);s=d(xe,"H3",{class:!0});var Te=f(s);o=E(Te,"on:action"),Te.forEach(i),a=w(xe),m=d(xe,"H3",{class:!0});var Be=f(m);h=E(Be,p),Be.forEach(i),xe.forEach(i),b=w(ae),v=d(ae,"P",{class:!0});var Ie=f(v);_=E(Ie,"To dispatch actions and listen to dispatchers you need to create a table with your own "),$=d(Ie,"CODE",{class:!0});var et=f($);I=E(et,"optionsComponent"),et.forEach(i),S=E(Ie," component."),Ie.forEach(i),V=w(ae),g=d(ae,"DIV",{class:!0});var Ee=f(g);k=d(Ee,"P",{class:!0});var _e=f(k);T=E(_e,"Every "),C=d(_e,"CODE",{class:!0});var pe=f(C);A=E(pe,"optionsComponent"),pe.forEach(i),N=E(_e," will get 2 props:"),_e.forEach(i),F=w(Ee),B=d(Ee,"DIV",{class:!0});var Je=f(B);R=d(Je,"DIV",{class:!0});var Le=f(R);O=d(Le,"DIV",{class:!0});var Se=f(O);H=E(Se,"row:"),Se.forEach(i),j=w(Le),X=d(Le,"DIV",{class:!0});var ft=f(X);Z=E(ft,"Object"),ft.forEach(i),Le.forEach(i),z=w(Je),se=d(Je,"P",{class:!0});var tt=f(se);x=E(tt,"The current row in the table. In other words, a single object from the data store."),tt.forEach(i),Je.forEach(i),M=w(Ee),W=d(Ee,"DIV",{class:!0});var de=f(W);Q=d(de,"DIV",{class:!0});var ie=f(Q);ue=d(ie,"DIV",{class:!0});var Ae=f(ue);oe=E(Ae,"dispatchFn:"),Ae.forEach(i),te=w(ie),Ve=d(ie,"DIV",{class:!0});var st=f(Ve);De=E(st,Fe),st.forEach(i),ie.forEach(i),Me=w(de),ve=d(de,"P",{class:!0});var $e=f(ve);ne=E($e,"A function that takes an object and dispatches an action with the name "),U=d($e,"CODE",{class:!0});var me=f(U);re=E(me,"action"),me.forEach(i),Ge=E($e,`. The passed object is accessible by the parent component through the
					`),Oe=d($e,"CODE",{class:!0});var He=f(Oe);be=E(He,"action.detail"),He.forEach(i),Qe=E($e," property."),$e.forEach(i),de.forEach(i),Ee.forEach(i),ae.forEach(i),ce.forEach(i),this.h()},h(){c(s,"class","italic"),c(m,"class","font-semibold"),c(r,"class","flex gap-3"),c($,"class","!text-xl"),c(v,"class","text-xl underline"),c(C,"class","!text-xl"),c(k,"class","text-xl"),c(O,"class","italic"),c(X,"class","font-bold"),c(R,"class","flex gap-2"),c(se,"class","text-xl pl-10"),c(B,"class","items-center mt-2"),c(ue,"class","italic"),c(Ve,"class","font-bold"),c(Q,"class","flex gap-2"),c(U,"class","!text-xl"),c(Oe,"class","!text-xl"),c(ve,"class","text-xl pl-10"),c(W,"class","items-center mt-2"),c(g,"class","mt-5"),c(t,"class","grid gap-2"),c(t,"id","actionDispatchersDocs"),c(e,"class","grid gap-5")},m(Pe,ce){P(Pe,e,ce),n(e,t),n(t,r),n(r,s),n(s,o),n(r,a),n(r,m),n(m,h),n(t,b),n(t,v),n(v,_),n(v,$),n($,I),n(v,S),n(t,V),n(t,g),n(g,k),n(k,T),n(k,C),n(C,A),n(k,N),n(g,F),n(g,B),n(B,R),n(R,O),n(O,H),n(R,j),n(R,X),n(X,Z),n(B,z),n(B,se),n(se,x),n(g,M),n(g,W),n(W,Q),n(Q,ue),n(ue,oe),n(Q,te),n(Q,Ve),n(Ve,De),n(W,Me),n(W,ve),n(ve,ne),n(ve,U),n(U,re),n(ve,Ge),n(ve,Oe),n(Oe,be),n(ve,Qe)},p:le,i:le,o:le,d(Pe){Pe&&i(e)}}}class Pl extends he{constructor(e){super(),ge(this,e,null,Ml,fe,{})}}function Hl(l){let e,t,r,s,o,a,m,p,h,b,v,_,$,I,S,V,g,k,T,C,A,N,F,B;return h=new dn({}),v=new mn({}),$=new vn({}),S=new Dn({}),A=new Pl({}),F=new Nl({}),{c(){e=u("div"),t=u("div"),r=u("h1"),s=D("Table"),o=y(),a=u("h2"),m=D("Types"),p=y(),J(h.$$.fragment),b=y(),J(v.$$.fragment),_=y(),J($.$$.fragment),I=y(),J(S.$$.fragment),V=y(),g=u("div"),k=u("h2"),T=D("Action Dispatchers"),C=y(),J(A.$$.fragment),N=y(),J(F.$$.fragment),this.h()},l(R){e=d(R,"DIV",{class:!0,id:!0});var O=f(e);t=d(O,"DIV",{class:!0});var H=f(t);r=d(H,"H1",{class:!0});var j=f(r);s=E(j,"Table"),j.forEach(i),o=w(H),a=d(H,"H2",{});var X=f(a);m=E(X,"Types"),X.forEach(i),p=w(H),K(h.$$.fragment,H),H.forEach(i),b=w(O),K(v.$$.fragment,O),_=w(O),K($.$$.fragment,O),I=w(O),K(S.$$.fragment,O),V=w(O),g=d(O,"DIV",{class:!0});var Z=f(g);k=d(Z,"H2",{});var z=f(k);T=E(z,"Action Dispatchers"),z.forEach(i),C=w(Z),K(A.$$.fragment,Z),Z.forEach(i),N=w(O),K(F.$$.fragment,O),O.forEach(i),this.h()},h(){c(r,"class","font-bold !text-6xl"),c(t,"class","grid gap-5"),c(g,"class","grid gap-5"),c(e,"class","grid gap-20 p-10"),c(e,"id","toc-target-table")},m(R,O){P(R,e,O),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),q(h,t,null),n(e,b),q(v,e,null),n(e,_),q($,e,null),n(e,I),q(S,e,null),n(e,V),n(e,g),n(g,k),n(k,T),n(g,C),q(A,g,null),n(e,N),q(F,e,null),B=!0},p:le,i(R){B||(G(h.$$.fragment,R),G(v.$$.fragment,R),G($.$$.fragment,R),G(S.$$.fragment,R),G(A.$$.fragment,R),G(F.$$.fragment,R),B=!0)},o(R){L(h.$$.fragment,R),L(v.$$.fragment,R),L($.$$.fragment,R),L(S.$$.fragment,R),L(A.$$.fragment,R),L(F.$$.fragment,R),B=!1},d(R){R&&i(e),Y(h),Y(v),Y($),Y(S),Y(A),Y(F)}}}class Ql extends he{constructor(e){super(),ge(this,e,null,Hl,fe,{})}}export{Ql as component};
