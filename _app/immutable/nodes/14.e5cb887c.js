import{S as me,i as he,s as pe,e as ut,b as P,M as et,g as x,v as Kt,d as L,f as Xt,h as i,V as ys,a4 as br,I as vs,J as Ns,W as le,k as u,l as d,m as f,n as c,D as n,a3 as ns,Z as Cs,_ as es,O as _s,T as Ms,x as Ps,y as J,z as K,A as q,N as mr,ab as _r,B as Y,a as C,c as y,ag as Hs,q as D,r as E,L as js,a1 as ts,u as dt,ah as Dr,ai as Er,U as ss,a2 as hr,C as Tr,E as $r,F as Cr,G as yr,w as wr,a8 as Ir,a9 as Vr}from"../chunks/index.0512b27e.js";/* empty css                             */import{p as Ds}from"../chunks/floating-ui.dom.browser.min.401454aa.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6821d3d2.js";import{C as ls}from"../chunks/CodeBlock.95d8ceee.js";import{a as bs,f as zs}from"../chunks/index.a3603836.js";import{w as Qt}from"../chunks/index.a6da017f.js";import{F as kr,e as Ur,g as Sr,d as Ar,c as Rr}from"../chunks/index.280381cc.js";import{a as Fr,b as Br,T as Zt,c as xr,d as Gr,C as os}from"../chunks/CodeContainer.17467ba3.js";function Or(){const{subscribe:l,set:e,update:t}=Qt([]);return{subscribe:l,set:e,update:t,trigger:r=>t(s=>(s.push(r),s)),close:()=>t(r=>(r.length>0&&r.shift(),r)),clear:()=>e([])}}const Ot=Or();function Lr(l,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let r,s;function o(v){v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),s.focus())}function a(v){!v.shiftKey&&v.code==="Tab"&&(v.preventDefault(),r.focus())}const m=v=>{if(e===!1)return;const _=Array.from(l.querySelectorAll(t));_.length&&(r=_[0],s=_[_.length-1],v||r.focus(),r.addEventListener("keydown",o),s.addEventListener("keydown",a))};m(!1);function p(){r&&r.removeEventListener("keydown",o),s&&s.removeEventListener("keydown",a)}const h=(v,_)=>(v.length&&(p(),m(!0)),_),b=new MutationObserver(h);return b.observe(l,{childList:!0,subtree:!0}),{update(v){e=v,v?m(!1):p()},destroy(){p(),b.disconnect()}}}function Ws(l){let e=l[12],t,r,s=Xs(l);return{c(){s.c(),t=ut()},l(o){s.l(o),t=ut()},m(o,a){s.m(o,a),P(o,t,a),r=!0},p(o,a){a[0]&4096&&pe(e,e=o[12])?(Kt(),L(s,1,1,le),Xt(),s=Xs(o),s.c(),x(s,1),s.m(t.parentNode,t)):s.p(o,a)},i(o){r||(x(s),r=!0)},o(o){L(s),r=!1},d(o){o&&i(t),s.d(o)}}}function Nr(l){var h,b;let e,t,r,s,o;const a=[(h=l[14])==null?void 0:h.props,{parent:l[15]}];var m=(b=l[14])==null?void 0:b.ref;function p(v){let _={$$slots:{default:[Pr]},$$scope:{ctx:v}};for(let T=0;T<a.length;T+=1)_=vs(_,a[T]);return{props:_}}return m&&(t=Ps(m,p(l))),{c(){e=u("div"),t&&J(t.$$.fragment),this.h()},l(v){e=d(v,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var _=f(e);t&&K(t.$$.fragment,_),_.forEach(i),this.h()},h(){var v;c(e,"class",r="modal contents "+(((v=l[12][0])==null?void 0:v.modalClasses)??"")),c(e,"data-testid","modal-component"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",s=l[12][0].title??"")},m(v,_){P(v,e,_),t&&q(t,e,null),o=!0},p(v,_){var I,S,U;const T=_[0]&49152?mr(a,[_[0]&16384&&_r((I=v[14])==null?void 0:I.props),_[0]&32768&&{parent:v[15]}]):{};if(_[0]&16384|_[1]&8192&&(T.$$scope={dirty:_,ctx:v}),_[0]&16384&&m!==(m=(S=v[14])==null?void 0:S.ref)){if(t){Kt();const g=t;L(g.$$.fragment,1,0,()=>{Y(g,1)}),Xt()}m?(t=Ps(m,p(v)),J(t.$$.fragment),x(t.$$.fragment,1),q(t,e,null)):t=null}else m&&t.$set(T);(!o||_[0]&4096&&r!==(r="modal contents "+(((U=v[12][0])==null?void 0:U.modalClasses)??"")))&&c(e,"class",r),(!o||_[0]&4096&&s!==(s=v[12][0].title??""))&&c(e,"aria-label",s)},i(v){o||(t&&x(t.$$.fragment,v),o=!0)},o(v){t&&L(t.$$.fragment,v),o=!1},d(v){v&&i(e),t&&Y(t)}}}function Mr(l){var S,U,g,V;let e,t,r,s,o,a,m,p,h=((S=l[12][0])==null?void 0:S.title)&&qs(l),b=((U=l[12][0])==null?void 0:U.body)&&Ys(l),v=((g=l[12][0])==null?void 0:g.image)&&typeof((V=l[12][0])==null?void 0:V.image)=="string"&&Ks(l);function _(w,$){if(w[12][0].type==="alert")return zr;if(w[12][0].type==="confirm")return jr;if(w[12][0].type==="prompt")return Hr}let T=_(l),I=T&&T(l);return{c(){e=u("div"),h&&h.c(),t=C(),b&&b.c(),r=C(),v&&v.c(),s=C(),I&&I.c(),this.h()},l(w){e=d(w,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var $=f(e);h&&h.l($),t=y($),b&&b.l($),r=y($),v&&v.l($),s=y($),I&&I.l($),$.forEach(i),this.h()},h(){c(e,"class",o="modal "+l[16]),c(e,"data-testid","modal"),c(e,"role","dialog"),c(e,"aria-modal","true"),c(e,"aria-label",a=l[12][0].title??"")},m(w,$){P(w,e,$),h&&h.m(e,null),n(e,t),b&&b.m(e,null),n(e,r),v&&v.m(e,null),n(e,s),I&&I.m(e,null),p=!0},p(w,$){var A,N,F,B;l=w,(A=l[12][0])!=null&&A.title?h?h.p(l,$):(h=qs(l),h.c(),h.m(e,t)):h&&(h.d(1),h=null),(N=l[12][0])!=null&&N.body?b?b.p(l,$):(b=Ys(l),b.c(),b.m(e,r)):b&&(b.d(1),b=null),(F=l[12][0])!=null&&F.image&&typeof((B=l[12][0])==null?void 0:B.image)=="string"?v?v.p(l,$):(v=Ks(l),v.c(),v.m(e,s)):v&&(v.d(1),v=null),T===(T=_(l))&&I?I.p(l,$):(I&&I.d(1),I=T&&T(l),I&&(I.c(),I.m(e,null))),(!p||$[0]&65536&&o!==(o="modal "+l[16]))&&c(e,"class",o),(!p||$[0]&4096&&a!==(a=l[12][0].title??""))&&c(e,"aria-label",a)},i(w){p||(Cs(()=>{p&&(m||(m=es(e,bs,{duration:l[3],opacity:0,y:100},!0)),m.run(1))}),p=!0)},o(w){m||(m=es(e,bs,{duration:l[3],opacity:0,y:100},!1)),m.run(0),p=!1},d(w){w&&i(e),h&&h.d(),b&&b.d(),v&&v.d(),I&&I.d(),w&&m&&m.end()}}}function Js(l){var s;let e,t=((s=l[14])==null?void 0:s.slot)+"",r;return{c(){e=new Dr(!1),r=ut(),this.h()},l(o){e=Er(o,!1),r=ut(),this.h()},h(){e.a=r},m(o,a){e.m(t,o,a),P(o,r,a)},p(o,a){var m;a[0]&16384&&t!==(t=((m=o[14])==null?void 0:m.slot)+"")&&e.p(t)},d(o){o&&i(r),o&&e.d()}}}function Pr(l){var r;let e,t=((r=l[14])==null?void 0:r.slot)&&Js(l);return{c(){t&&t.c(),e=ut()},l(s){t&&t.l(s),e=ut()},m(s,o){t&&t.m(s,o),P(s,e,o)},p(s,o){var a;(a=s[14])!=null&&a.slot?t?t.p(s,o):(t=Js(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&i(e)}}}function qs(l){let e,t=l[12][0].title+"",r;return{c(){e=u("header"),this.h()},l(s){e=d(s,"HEADER",{class:!0});var o=f(e);o.forEach(i),this.h()},h(){c(e,"class",r="modal-header "+l[9])},m(s,o){P(s,e,o),e.innerHTML=t},p(s,o){o[0]&4096&&t!==(t=s[12][0].title+"")&&(e.innerHTML=t),o[0]&512&&r!==(r="modal-header "+s[9])&&c(e,"class",r)},d(s){s&&i(e)}}}function Ys(l){let e,t=l[12][0].body+"",r;return{c(){e=u("article"),this.h()},l(s){e=d(s,"ARTICLE",{class:!0});var o=f(e);o.forEach(i),this.h()},h(){c(e,"class",r="modal-body "+l[10])},m(s,o){P(s,e,o),e.innerHTML=t},p(s,o){o[0]&4096&&t!==(t=s[12][0].body+"")&&(e.innerHTML=t),o[0]&1024&&r!==(r="modal-body "+s[10])&&c(e,"class",r)},d(s){s&&i(e)}}}function Ks(l){let e,t;return{c(){e=u("img"),this.h()},l(r){e=d(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var r;c(e,"class","modal-image "+Kr),Hs(e.src,t=(r=l[12][0])==null?void 0:r.image)||c(e,"src",t),c(e,"alt","Modal")},m(r,s){P(r,e,s)},p(r,s){var o;s[0]&4096&&!Hs(e.src,t=(o=r[12][0])==null?void 0:o.image)&&c(e,"src",t)},d(r){r&&i(e)}}}function Hr(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},l[12][0].valueAttr],U={};for(let g=0;g<S.length;g+=1)U=vs(U,S[g]);return{c(){e=u("form"),t=u("input"),r=C(),s=u("footer"),o=u("button"),a=D(l[0]),p=C(),h=u("button"),b=D(l[2]),this.h()},l(g){e=d(g,"FORM",{class:!0});var V=f(e);t=d(V,"INPUT",{class:!0,name:!0,type:!0}),r=y(V),s=d(V,"FOOTER",{class:!0});var w=f(s);o=d(w,"BUTTON",{type:!0,class:!0});var $=f(o);a=E($,l[0]),$.forEach(i),p=y(w),h=d(w,"BUTTON",{type:!0,class:!0});var A=f(h);b=E(A,l[2]),A.forEach(i),w.forEach(i),V.forEach(i),this.h()},h(){js(t,U),c(o,"type","button"),c(o,"class",m="btn "+l[7]),c(h,"type","submit"),c(h,"class",v="btn "+l[8]),c(s,"class",_="modal-footer "+l[11]),c(e,"class","space-y-4")},m(g,V){P(g,e,V),n(e,t),t.autofocus&&t.focus(),ts(t,l[13]),n(e,r),n(e,s),n(s,o),n(o,a),n(s,p),n(s,h),n(h,b),T||(I=[et(t,"input",l[39]),et(o,"click",l[21]),et(e,"submit",l[23])],T=!0)},p(g,V){js(t,U=mr(S,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},V[0]&4096&&g[12][0].valueAttr])),V[0]&8192&&t.value!==g[13]&&ts(t,g[13]),V[0]&1&&dt(a,g[0]),V[0]&128&&m!==(m="btn "+g[7])&&c(o,"class",m),V[0]&4&&dt(b,g[2]),V[0]&256&&v!==(v="btn "+g[8])&&c(h,"class",v),V[0]&2048&&_!==(_="modal-footer "+g[11])&&c(s,"class",_)},d(g){g&&i(e),T=!1,_s(I)}}}function jr(l){let e,t,r,s,o,a,m,p,h,b,v;return{c(){e=u("footer"),t=u("button"),r=D(l[0]),o=C(),a=u("button"),m=D(l[1]),this.h()},l(_){e=d(_,"FOOTER",{class:!0});var T=f(e);t=d(T,"BUTTON",{type:!0,class:!0});var I=f(t);r=E(I,l[0]),I.forEach(i),o=y(T),a=d(T,"BUTTON",{type:!0,class:!0});var S=f(a);m=E(S,l[1]),S.forEach(i),T.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",s="btn "+l[7]),c(a,"type","button"),c(a,"class",p="btn "+l[8]),c(e,"class",h="modal-footer "+l[11])},m(_,T){P(_,e,T),n(e,t),n(t,r),n(e,o),n(e,a),n(a,m),b||(v=[et(t,"click",l[21]),et(a,"click",l[22])],b=!0)},p(_,T){T[0]&1&&dt(r,_[0]),T[0]&128&&s!==(s="btn "+_[7])&&c(t,"class",s),T[0]&2&&dt(m,_[1]),T[0]&256&&p!==(p="btn "+_[8])&&c(a,"class",p),T[0]&2048&&h!==(h="modal-footer "+_[11])&&c(e,"class",h)},d(_){_&&i(e),b=!1,_s(v)}}}function zr(l){let e,t,r,s,o,a,m;return{c(){e=u("footer"),t=u("button"),r=D(l[0]),this.h()},l(p){e=d(p,"FOOTER",{class:!0});var h=f(e);t=d(h,"BUTTON",{type:!0,class:!0});var b=f(t);r=E(b,l[0]),b.forEach(i),h.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",s="btn "+l[7]),c(e,"class",o="modal-footer "+l[11])},m(p,h){P(p,e,h),n(e,t),n(t,r),a||(m=et(t,"click",l[21]),a=!0)},p(p,h){h[0]&1&&dt(r,p[0]),h[0]&128&&s!==(s="btn "+p[7])&&c(t,"class",s),h[0]&2048&&o!==(o="modal-footer "+p[11])&&c(e,"class",o)},d(p){p&&i(e),a=!1,m()}}}function Xs(l){let e,t,r,s,o,a,m,p,h,b,v;const _=[Mr,Nr],T=[];function I(S,U){return S[12][0].type!=="component"?0:1}return r=I(l),s=T[r]=_[r](l),{c(){e=u("div"),t=u("div"),s.c(),this.h()},l(S){e=d(S,"DIV",{class:!0,"data-testid":!0});var U=f(e);t=d(U,"DIV",{class:!0});var g=f(t);s.l(g),g.forEach(i),U.forEach(i),this.h()},h(){c(t,"class",o="modal-transition "+l[17]),c(e,"class",m="modal-backdrop "+l[18]),c(e,"data-testid","modal-backdrop")},m(S,U){P(S,e,U),n(e,t),T[r].m(t,null),h=!0,b||(v=[et(e,"mousedown",l[19]),et(e,"mouseup",l[20]),et(e,"touchstart",l[37]),et(e,"touchend",l[38]),ns(Lr.call(null,e,!0))],b=!0)},p(S,U){l=S;let g=r;r=I(l),r===g?T[r].p(l,U):(Kt(),L(T[g],1,1,()=>{T[g]=null}),Xt(),s=T[r],s?s.p(l,U):(s=T[r]=_[r](l),s.c()),x(s,1),s.m(t,null)),(!h||U[0]&131072&&o!==(o="modal-transition "+l[17]))&&c(t,"class",o),(!h||U[0]&262144&&m!==(m="modal-backdrop "+l[18]))&&c(e,"class",m)},i(S){h||(x(s),Cs(()=>{h&&(a||(a=es(t,bs,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!0)),a.run(1))}),Cs(()=>{h&&(p||(p=es(e,zs,{duration:l[3]},!0)),p.run(1))}),h=!0)},o(S){L(s),a||(a=es(t,bs,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!1)),a.run(0),p||(p=es(e,zs,{duration:l[3]},!1)),p.run(0),h=!1},d(S){S&&i(e),T[r].d(),S&&a&&a.end(),S&&p&&p.end(),b=!1,_s(v)}}}function Wr(l){let e,t,r,s,o=l[12].length>0&&Ws(l);return{c(){o&&o.c(),e=ut()},l(a){o&&o.l(a),e=ut()},m(a,m){o&&o.m(a,m),P(a,e,m),t=!0,r||(s=et(window,"keydown",l[24]),r=!0)},p(a,m){a[12].length>0?o?(o.p(a,m),m[0]&4096&&x(o,1)):(o=Ws(a),o.c(),x(o,1),o.m(e.parentNode,e)):o&&(Kt(),L(o,1,1,()=>{o=null}),Xt())},i(a){t||(x(o),t=!0)},o(a){L(o),t=!1},d(a){o&&o.d(a),a&&i(e),r=!1,s()}}}const Jr="fixed top-0 left-0 right-0 bottom-0",qr="w-full h-full p-4 overflow-y-auto flex justify-center",Yr="block",Kr="w-full h-auto";function Xr(l,e,t){let r,s,o,a,m,p;ys(l,Ot,k=>t(12,p=k));const h=br();let{position:b="items-center"}=e,{components:v={}}=e,{duration:_=150}=e,{flyOpacity:T=0}=e,{flyX:I=0}=e,{flyY:S=100}=e,{background:U="bg-surface-100-800-token"}=e,{width:g="w-modal"}=e,{height:V="h-auto"}=e,{padding:w="p-4"}=e,{spacing:$="space-y-4"}=e,{rounded:A="rounded-container-token"}=e,{shadow:N="shadow-xl"}=e,{zIndex:F="z-[999]"}=e,{buttonNeutral:B="variant-ghost-surface"}=e,{buttonPositive:R="variant-filled"}=e,{buttonTextCancel:G="Cancel"}=e,{buttonTextConfirm:H="Confirm"}=e,{buttonTextSubmit:j="Submit"}=e,{regionBackdrop:X="bg-surface-backdrop-token"}=e,{regionHeader:Z="text-2xl font-bold"}=e,{regionBody:z="max-h-[200px] overflow-hidden"}=e,{regionFooter:se="flex justify-end space-x-2"}=e,O;const M={buttonTextCancel:G,buttonTextConfirm:H,buttonTextSubmit:j};let W,Q=!1;Ot.subscribe(k=>{k.length&&(k[0].type==="prompt"&&t(13,O=k[0].value),t(0,G=k[0].buttonTextCancel||M.buttonTextCancel),t(1,H=k[0].buttonTextConfirm||M.buttonTextConfirm),t(2,j=k[0].buttonTextSubmit||M.buttonTextSubmit),t(14,W=typeof k[0].component=="string"?v[k[0].component]:k[0].component))});function ce(k){if(!(k.target instanceof Element))return;const re=k.target.classList;(re.contains("modal-backdrop")||re.contains("modal-transition"))&&(Q=!0)}function oe(k){if(!(k.target instanceof Element))return;const re=k.target.classList;(re.contains("modal-backdrop")||re.contains("modal-transition"))&&Q&&(p[0].response&&p[0].response(void 0),Ot.close(),h("backdrop",k)),Q=!1}function ee(){p[0].response&&p[0].response(!1),Ot.close()}function Se(){p[0].response&&p[0].response(!0),Ot.close()}function Fe(k){k.preventDefault(),p[0].response&&p[0].response(O),Ot.close()}function $e(k){p.length&&k.code==="Escape"&&ee()}function He(k){Ms.call(this,l,k)}function ge(k){Ms.call(this,l,k)}function ne(){O=this.value,t(13,O)}return l.$$set=k=>{t(43,e=vs(vs({},e),Ns(k))),"position"in k&&t(25,b=k.position),"components"in k&&t(26,v=k.components),"duration"in k&&t(3,_=k.duration),"flyOpacity"in k&&t(4,T=k.flyOpacity),"flyX"in k&&t(5,I=k.flyX),"flyY"in k&&t(6,S=k.flyY),"background"in k&&t(27,U=k.background),"width"in k&&t(28,g=k.width),"height"in k&&t(29,V=k.height),"padding"in k&&t(30,w=k.padding),"spacing"in k&&t(31,$=k.spacing),"rounded"in k&&t(32,A=k.rounded),"shadow"in k&&t(33,N=k.shadow),"zIndex"in k&&t(34,F=k.zIndex),"buttonNeutral"in k&&t(7,B=k.buttonNeutral),"buttonPositive"in k&&t(8,R=k.buttonPositive),"buttonTextCancel"in k&&t(0,G=k.buttonTextCancel),"buttonTextConfirm"in k&&t(1,H=k.buttonTextConfirm),"buttonTextSubmit"in k&&t(2,j=k.buttonTextSubmit),"regionBackdrop"in k&&t(35,X=k.regionBackdrop),"regionHeader"in k&&t(9,Z=k.regionHeader),"regionBody"in k&&t(10,z=k.regionBody),"regionFooter"in k&&t(11,se=k.regionFooter)},l.$$.update=()=>{var k,re,xe;l.$$.dirty[0]&33558528&&t(36,r=((k=p[0])==null?void 0:k.position)??b),t(18,s=`${Jr} ${X} ${F} ${e.class??""} ${((re=p[0])==null?void 0:re.backdropClasses)??""}`),l.$$.dirty[1]&32&&t(17,o=`${qr} ${r??""}`),l.$$.dirty[0]&2013270016|l.$$.dirty[1]&7&&t(16,a=`${Yr} ${U} ${g} ${V} ${w} ${$} ${A} ${N} ${((xe=p[0])==null?void 0:xe.modalClasses)??""}`),l.$$.dirty[0]&2046824447|l.$$.dirty[1]&23&&t(15,m={position:b,duration:_,flyOpacity:T,flyX:I,flyY:S,background:U,width:g,height:V,padding:w,spacing:$,rounded:A,shadow:N,buttonNeutral:B,buttonPositive:R,buttonTextCancel:G,buttonTextConfirm:H,buttonTextSubmit:j,regionBackdrop:X,regionHeader:Z,regionBody:z,regionFooter:se,onClose:ee})},e=Ns(e),[G,H,j,_,T,I,S,B,R,Z,z,se,p,O,W,m,a,o,s,ce,oe,ee,Se,Fe,$e,b,v,U,g,V,w,$,A,N,F,X,r,He,ge,ne]}class Zr extends me{constructor(e){super(),he(this,e,Xr,Wr,pe,{position:25,components:26,duration:3,flyOpacity:4,flyX:5,flyY:6,background:27,width:28,height:29,padding:30,spacing:31,rounded:32,shadow:33,zIndex:34,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:35,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}const Qr=`
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
</div>`,en=`
<script lang="ts">
	import { Table } from '@bexis2/bexis2-core-ui';
	import type { TableConfig } from '@bexis2/bexis2-core-ui';

	import { groupsStore } from './data';
	import type { Group } from './data';

	const groupConfig: TableConfig<Group> = {						
		id: 'userGroups',						
		data: groupsStore,
		height: 300,						
		columns: {							
			id: {								
				header: 'ID',						
			}						
		}					
	};
<\/script>

<Table config={groupConfig} />`,gr=`			
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
				
export const groupsStore = writable<Group[]>(userGroups);`,tn=`
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

<Table config={usersConfig} />`,Es=`
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
				
export const usersStore = writable<User[]>(users);`,sn=`
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
/>`,rn=`
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

<Table config={usersBDConfig} />`,nn=`
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

export const usersBDStore = writable<UserBD[]>(usersBD);`,ln=`
export interface TableConfig<T> {
	id: string;
	data: Writable<T[]>;
	height?: null | number;
	columns?: Columns;
	pageSizes?: number[];
	defaultPageSize?: number;
	optionsComponent?: typeof SvelteComponent;
}`,on=`
export interface Columns {
	[key: string]: Column;
}`,an=`
export interface Column {
	header?: string;
	exclude?: boolean; // false by default
	instructions?: ColumnInstructions;
	disableFiltering?: boolean; // false by default
	disableSorting?: boolean; // false by default
	colFilterFn?: ColumnFilterFn;
	colFilterComponent?: typeof SvelteComponent;
}`,cn=`
export interface ColumnInstructions {
	toStringFn?: (value: any) => string;
	toSortableValueFn?: (value: any) => string | number;
	toFilterableValueFn?: (value: any) => string | number | Date;
}`,un=`
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

<Table config={usersMissingIDsConfig} />`,dn=`
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

export const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);`,fn=`
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
`,pn=`
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
`,mn=`
<script lang="ts">
	export let value;
<\/script>

<a href={value}>{value}</a>
`,hn=`
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
<\/script>`,gn=`
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
`,vn=`
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
`,bn=`
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
`,_n=`
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
<Modal />`,Dn=`
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
`,En=`
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
`,Tn=`
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
`,$n=`
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
`,Cn=`
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
`;function yn(l){let e,t,r,s="TableConfig <T>",o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H,j,X,Z,z,se,O,M,W,Q="Writable <T[]>",ce,oe,ee,Se,Fe,$e,He,ge,ne,k,re,xe,Ge,ve,Ze,je,ae,be,Oe,_e,De,Ee,tt,Le,we,ke="SvelteComponent",Ye,Ne,Ie,st,ze,ue,de,Ae,Be,Ce,ye,rt,Ct,Re,kt="number[]",yt,Ue,Te,We,wt,Ke,Ve,nt,It,Je,lt,vt="number",Vt,Lt,fe,te,qe,ot,at,bt,ft,pt,_t,jt="Columns",Nt,mt,Me,Mt,Dt,Pt,ht,it,Ht,zt;return g=new ls({props:{language:"ts",code:ln}}),{c(){e=u("div"),t=u("div"),r=u("h3"),o=D(s),a=C(),m=u("button"),p=D("Show type details"),h=C(),b=u("div"),v=D("Underlined attributes are "),_=u("strong"),T=D("required"),I=D("."),S=C(),U=u("div"),J(g.$$.fragment),V=C(),w=u("div"),$=u("div"),A=u("div"),N=D("id:"),F=C(),B=u("div"),R=D("string"),G=C(),H=u("p"),j=D("Unique identifier for the table to generate unique IDs for the filters."),X=C(),Z=u("div"),z=u("div"),se=u("div"),O=D("data:"),M=C(),W=u("div"),ce=D(Q),oe=C(),ee=u("p"),Se=D("A writable store of the type "),Fe=u("code"),$e=D("T[]"),He=D(`. Any changes in the store will
			be reflected in the table.`),ge=C(),ne=u("div"),k=u("div"),re=u("div"),xe=D("height:"),Ge=C(),ve=u("div"),Ze=D("number"),je=C(),ae=u("p"),be=D("Custom height for the table in pixels."),Oe=C(),_e=u("div"),De=u("div"),Ee=u("div"),tt=D("optionsComponent:"),Le=C(),we=u("div"),Ye=D(ke),Ne=C(),Ie=u("p"),st=D(`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),ze=u("code"),ue=D("optionsComponent"),de=D(" was provided."),Ae=C(),Be=u("div"),Ce=u("div"),ye=u("div"),rt=D("pageSizes:"),Ct=C(),Re=u("div"),yt=D(kt),Ue=C(),Te=u("p"),We=D("An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),wt=C(),Ke=u("div"),Ve=u("div"),nt=u("div"),It=D("defaultPageSize:"),Je=C(),lt=u("div"),Vt=D(vt),Lt=C(),fe=u("p"),te=D(`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),qe=C(),ot=u("div"),at=u("div"),bt=u("div"),ft=D("columns:"),pt=C(),_t=u("div"),Nt=D(jt),mt=C(),Me=u("p"),Mt=D("An object with configuration for specific columns. "),Dt=u("code"),Pt=D("Columns"),ht=D(`
			object is described below.`),this.h()},l(Qe){e=d(Qe,"DIV",{class:!0});var ie=f(e);t=d(ie,"DIV",{class:!0,id:!0});var Pe=f(t);r=d(Pe,"H3",{class:!0});var Wt=f(r);o=E(Wt,s),Wt.forEach(i),a=y(Pe),m=d(Pe,"BUTTON",{class:!0});var Jt=f(m);p=E(Jt,"Show type details"),Jt.forEach(i),h=y(Pe),b=d(Pe,"DIV",{class:!0});var Xe=f(b);v=E(Xe,"Underlined attributes are "),_=d(Xe,"STRONG",{});var gt=f(_);T=E(gt,"required"),gt.forEach(i),I=E(Xe,"."),Xe.forEach(i),S=y(Pe),U=d(Pe,"DIV",{class:!0,"data-popup":!0});var Ut=f(U);K(g.$$.fragment,Ut),Ut.forEach(i),Pe.forEach(i),V=y(ie),w=d(ie,"DIV",{class:!0});var St=f(w);$=d(St,"DIV",{class:!0});var Et=f($);A=d(Et,"DIV",{class:!0});var qt=f(A);N=E(qt,"id:"),qt.forEach(i),F=y(Et),B=d(Et,"DIV",{class:!0});var At=f(B);R=E(At,"string"),At.forEach(i),Et.forEach(i),G=y(St),H=d(St,"P",{class:!0});var Tt=f(H);j=E(Tt,"Unique identifier for the table to generate unique IDs for the filters."),Tt.forEach(i),St.forEach(i),X=y(ie),Z=d(ie,"DIV",{class:!0});var $t=f(Z);z=d($t,"DIV",{class:!0});var Rt=f(z);se=d(Rt,"DIV",{class:!0});var Yt=f(se);O=E(Yt,"data:"),Yt.forEach(i),M=y(Rt),W=d(Rt,"DIV",{class:!0});var Ft=f(W);ce=E(Ft,Q),Ft.forEach(i),Rt.forEach(i),oe=y($t),ee=d($t,"P",{class:!0});var ct=f(ee);Se=E(ct,"A writable store of the type "),Fe=d(ct,"CODE",{class:!0});var Bt=f(Fe);$e=E(Bt,"T[]"),Bt.forEach(i),He=E(ct,`. Any changes in the store will
			be reflected in the table.`),ct.forEach(i),$t.forEach(i),ge=y(ie),ne=d(ie,"DIV",{class:!0});var xt=f(ne);k=d(xt,"DIV",{class:!0});var Gt=f(k);re=d(Gt,"DIV",{class:!0});var rs=f(re);xe=E(rs,"height:"),rs.forEach(i),Ge=y(Gt),ve=d(Gt,"DIV",{class:!0});var ws=f(ve);Ze=E(ws,"number"),ws.forEach(i),Gt.forEach(i),je=y(xt),ae=d(xt,"P",{class:!0});var Is=f(ae);be=E(Is,"Custom height for the table in pixels."),Is.forEach(i),xt.forEach(i),Oe=y(ie),_e=d(ie,"DIV",{class:!0});var as=f(_e);De=d(as,"DIV",{class:!0});var is=f(De);Ee=d(is,"DIV",{class:!0});var Vs=f(Ee);tt=E(Vs,"optionsComponent:"),Vs.forEach(i),Le=y(is),we=d(is,"DIV",{class:!0});var ks=f(we);Ye=E(ks,ke),ks.forEach(i),is.forEach(i),Ne=y(as),Ie=d(as,"P",{class:!0});var cs=f(Ie);st=E(cs,`Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no `),ze=d(cs,"CODE",{class:!0});var Us=f(ze);ue=E(Us,"optionsComponent"),Us.forEach(i),de=E(cs," was provided."),cs.forEach(i),as.forEach(i),Ae=y(ie),Be=d(ie,"DIV",{class:!0});var us=f(Be);Ce=d(us,"DIV",{class:!0});var ds=f(Ce);ye=d(ds,"DIV",{class:!0});var Ss=f(ye);rt=E(Ss,"pageSizes:"),Ss.forEach(i),Ct=y(ds),Re=d(ds,"DIV",{class:!0});var As=f(Re);yt=E(As,kt),As.forEach(i),ds.forEach(i),Ue=y(us),Te=d(us,"P",{class:!0});var Rs=f(Te);We=E(Rs,"An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20."),Rs.forEach(i),us.forEach(i),wt=y(ie),Ke=d(ie,"DIV",{class:!0});var fs=f(Ke);Ve=d(fs,"DIV",{class:!0});var ps=f(Ve);nt=d(ps,"DIV",{class:!0});var Fs=f(nt);It=E(Fs,"defaultPageSize:"),Fs.forEach(i),Je=y(ps),lt=d(ps,"DIV",{class:!0});var Bs=f(lt);Vt=E(Bs,vt),Bs.forEach(i),ps.forEach(i),Lt=y(fs),fe=d(fs,"P",{class:!0});var xs=f(fe);te=E(xs,`Default page size to be used for the table upon rendering. By default, default page size is
			10.`),xs.forEach(i),fs.forEach(i),qe=y(ie),ot=d(ie,"DIV",{class:!0});var ms=f(ot);at=d(ms,"DIV",{class:!0});var hs=f(at);bt=d(hs,"DIV",{class:!0});var Gs=f(bt);ft=E(Gs,"columns:"),Gs.forEach(i),pt=y(hs),_t=d(hs,"DIV",{class:!0});var Os=f(_t);Nt=E(Os,jt),Os.forEach(i),hs.forEach(i),mt=y(ms),Me=d(ms,"P",{class:!0});var gs=f(Me);Mt=E(gs,"An object with configuration for specific columns. "),Dt=d(gs,"CODE",{class:!0});var Ls=f(Dt);Pt=E(Ls,"Columns"),Ls.forEach(i),ht=E(gs,`
			object is described below.`),gs.forEach(i),ms.forEach(i),ie.forEach(i),this.h()},h(){c(r,"class","font-semibold relative w-max"),c(m,"class","btn variant-ghost-primary w-min"),c(b,"class","italic div"),c(U,"class","variant-filled-secondary"),c(U,"data-popup","popupClickTableConfig"),c(t,"class","grid gap-2"),c(t,"id","tableConfig"),c(A,"class","italic"),c(B,"class","font-bold"),c($,"class","flex gap-2 underline"),c(H,"class","text-xl pl-10"),c(w,"class","items-center"),c(se,"class","italic"),c(W,"class","font-bold"),c(z,"class","flex gap-2 underline"),c(Fe,"class","!text-xl"),c(ee,"class","text-xl pl-10"),c(Z,"class","items-center"),c(re,"class","italic"),c(ve,"class","font-bold"),c(k,"class","flex gap-2"),c(ae,"class","text-xl pl-10"),c(ne,"class","items-center"),c(Ee,"class","italic"),c(we,"class","font-bold"),c(De,"class","flex gap-2"),c(ze,"class","!text-xl"),c(Ie,"class","text-xl pl-10"),c(_e,"class","items-center"),c(ye,"class","italic"),c(Re,"class","font-bold"),c(Ce,"class","flex gap-2"),c(Te,"class","text-xl pl-10"),c(Be,"class","items-center"),c(nt,"class","italic"),c(lt,"class","font-bold"),c(Ve,"class","flex gap-2"),c(fe,"class","text-xl pl-10"),c(Ke,"class","items-center"),c(bt,"class","italic"),c(_t,"class","font-bold"),c(at,"class","flex gap-2"),c(Dt,"class","!text-xl"),c(Me,"class","text-xl pl-10"),c(ot,"class","items-center"),c(e,"class","grid gap-5")},m(Qe,ie){P(Qe,e,ie),n(e,t),n(t,r),n(r,o),n(t,a),n(t,m),n(m,p),n(t,h),n(t,b),n(b,v),n(b,_),n(_,T),n(b,I),n(t,S),n(t,U),q(g,U,null),n(e,V),n(e,w),n(w,$),n($,A),n(A,N),n($,F),n($,B),n(B,R),n(w,G),n(w,H),n(H,j),n(e,X),n(e,Z),n(Z,z),n(z,se),n(se,O),n(z,M),n(z,W),n(W,ce),n(Z,oe),n(Z,ee),n(ee,Se),n(ee,Fe),n(Fe,$e),n(ee,He),n(e,ge),n(e,ne),n(ne,k),n(k,re),n(re,xe),n(k,Ge),n(k,ve),n(ve,Ze),n(ne,je),n(ne,ae),n(ae,be),n(e,Oe),n(e,_e),n(_e,De),n(De,Ee),n(Ee,tt),n(De,Le),n(De,we),n(we,Ye),n(_e,Ne),n(_e,Ie),n(Ie,st),n(Ie,ze),n(ze,ue),n(Ie,de),n(e,Ae),n(e,Be),n(Be,Ce),n(Ce,ye),n(ye,rt),n(Ce,Ct),n(Ce,Re),n(Re,yt),n(Be,Ue),n(Be,Te),n(Te,We),n(e,wt),n(e,Ke),n(Ke,Ve),n(Ve,nt),n(nt,It),n(Ve,Je),n(Ve,lt),n(lt,Vt),n(Ke,Lt),n(Ke,fe),n(fe,te),n(e,qe),n(e,ot),n(ot,at),n(at,bt),n(bt,ft),n(at,pt),n(at,_t),n(_t,Nt),n(ot,mt),n(ot,Me),n(Me,Mt),n(Me,Dt),n(Dt,Pt),n(Me,ht),it=!0,Ht||(zt=ns(Ds.call(null,m,l[0])),Ht=!0)},p:le,i(Qe){it||(x(g.$$.fragment,Qe),it=!0)},o(Qe){L(g.$$.fragment,Qe),it=!1},d(Qe){Qe&&i(e),Y(g),Ht=!1,zt()}}}function wn(l){return[{event:"click",target:"popupClickTableConfig",placement:"right"}]}class In extends me{constructor(e){super(),he(this,e,wn,yn,pe,{})}}function Vn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H;return b=new ls({props:{language:"ts",code:on}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("Columns"),o=C(),a=u("button"),m=D("Show type details"),p=C(),h=u("div"),J(b.$$.fragment),v=C(),_=u("div"),T=u("div"),I=u("div"),S=D("[key: "),U=u("strong"),g=D("string"),V=D("]:"),w=C(),$=u("div"),A=D("Column"),N=C(),F=u("p"),B=D(`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),this.h()},l(j){e=d(j,"DIV",{class:!0});var X=f(e);t=d(X,"DIV",{class:!0,id:!0});var Z=f(t);r=d(Z,"H3",{class:!0});var z=f(r);s=E(z,"Columns"),z.forEach(i),o=y(Z),a=d(Z,"BUTTON",{class:!0});var se=f(a);m=E(se,"Show type details"),se.forEach(i),p=y(Z),h=d(Z,"DIV",{"data-popup":!0});var O=f(h);K(b.$$.fragment,O),O.forEach(i),Z.forEach(i),v=y(X),_=d(X,"DIV",{class:!0});var M=f(_);T=d(M,"DIV",{class:!0});var W=f(T);I=d(W,"DIV",{class:!0});var Q=f(I);S=E(Q,"[key: "),U=d(Q,"STRONG",{});var ce=f(U);g=E(ce,"string"),ce.forEach(i),V=E(Q,"]:"),Q.forEach(i),w=y(W),$=d(W,"DIV",{class:!0});var oe=f($);A=E(oe,"Column"),oe.forEach(i),W.forEach(i),N=y(M),F=d(M,"P",{class:!0});var ee=f(F);B=E(ee,`Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.`),ee.forEach(i),M.forEach(i),X.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumns"),c(t,"class","grid gap-2"),c(t,"id","columns"),c(I,"class","italic"),c($,"class","font-bold"),c(T,"class","flex gap-2"),c(F,"class","text-xl pl-10"),c(_,"class","items-center"),c(e,"class","grid gap-5")},m(j,X){P(j,e,X),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,T),n(T,I),n(I,S),n(I,U),n(U,g),n(I,V),n(T,w),n(T,$),n($,A),n(_,N),n(_,F),n(F,B),R=!0,G||(H=ns(Ds.call(null,a,l[0])),G=!0)},p:le,i(j){R||(x(b.$$.fragment,j),R=!0)},o(j){L(b.$$.fragment,j),R=!1},d(j){j&&i(e),Y(b),G=!1,H()}}}function kn(l){return[{event:"click",target:"popupClickColumns",placement:"right"}]}class Un extends me{constructor(e){super(),he(this,e,kn,Vn,pe,{})}}function Sn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H,j,X,Z,z,se,O,M,W,Q,ce,oe,ee,Se,Fe,$e,He,ge,ne,k,re,xe,Ge,ve,Ze,je,ae,be,Oe,_e,De,Ee,tt,Le,we,ke,Ye,Ne,Ie,st,ze,ue,de,Ae,Be,Ce,ye,rt,Ct,Re,kt,yt,Ue,Te,We,wt,Ke,Ve,nt,It,Je,lt,vt,Vt,Lt;return b=new ls({props:{language:"ts",code:an}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("Column"),o=C(),a=u("button"),m=D("Show type details"),p=C(),h=u("div"),J(b.$$.fragment),v=C(),_=u("div"),T=u("div"),I=u("div"),S=D("header:"),U=C(),g=u("div"),V=D("string"),w=C(),$=u("p"),A=D(`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),N=C(),F=u("div"),B=u("div"),R=u("div"),G=D("exclude:"),H=C(),j=u("div"),X=D("boolean"),Z=C(),z=u("p"),se=D(`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),O=C(),M=u("div"),W=u("div"),Q=u("div"),ce=D("disableFiltering:"),oe=C(),ee=u("div"),Se=D("boolean"),Fe=C(),$e=u("p"),He=D("Whether to disable filtering for the column or not. By default, filtering is enabled."),ge=C(),ne=u("div"),k=u("div"),re=u("div"),xe=D("disableSorting:"),Ge=C(),ve=u("div"),Ze=D("boolean"),je=C(),ae=u("p"),be=D("Whether to disable sorting for the column or not. By default, sorting is enabled."),Oe=C(),_e=u("div"),De=u("div"),Ee=u("div"),tt=D("colFitlerFn:"),Le=C(),we=u("div"),ke=u("a"),Ye=D("ColumnFilterFn"),Ne=C(),Ie=u("p"),st=D(`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),ze=C(),ue=u("div"),de=u("div"),Ae=u("div"),Be=D("colFilterComponent:"),Ce=C(),ye=u("div"),rt=D("SvelteComponent"),Ct=C(),Re=u("p"),kt=D(`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),yt=C(),Ue=u("div"),Te=u("div"),We=u("div"),wt=D("instructions:"),Ke=C(),Ve=u("div"),nt=D("ColumnInstructions"),It=C(),Je=u("p"),lt=D("Configuration for the column's appearance, sorting and filtering functionalities."),this.h()},l(fe){e=d(fe,"DIV",{class:!0});var te=f(e);t=d(te,"DIV",{class:!0,id:!0});var qe=f(t);r=d(qe,"H3",{class:!0});var ot=f(r);s=E(ot,"Column"),ot.forEach(i),o=y(qe),a=d(qe,"BUTTON",{class:!0});var at=f(a);m=E(at,"Show type details"),at.forEach(i),p=y(qe),h=d(qe,"DIV",{"data-popup":!0});var bt=f(h);K(b.$$.fragment,bt),bt.forEach(i),qe.forEach(i),v=y(te),_=d(te,"DIV",{class:!0});var ft=f(_);T=d(ft,"DIV",{class:!0});var pt=f(T);I=d(pt,"DIV",{class:!0});var _t=f(I);S=E(_t,"header:"),_t.forEach(i),U=y(pt),g=d(pt,"DIV",{class:!0});var jt=f(g);V=E(jt,"string"),jt.forEach(i),pt.forEach(i),w=y(ft),$=d(ft,"P",{class:!0});var Nt=f($);A=E(Nt,`Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.`),Nt.forEach(i),ft.forEach(i),N=y(te),F=d(te,"DIV",{class:!0});var mt=f(F);B=d(mt,"DIV",{class:!0});var Me=f(B);R=d(Me,"DIV",{class:!0});var Mt=f(R);G=E(Mt,"exclude:"),Mt.forEach(i),H=y(Me),j=d(Me,"DIV",{class:!0});var Dt=f(j);X=E(Dt,"boolean"),Dt.forEach(i),Me.forEach(i),Z=y(mt),z=d(mt,"P",{class:!0});var Pt=f(z);se=E(Pt,`Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.`),Pt.forEach(i),mt.forEach(i),O=y(te),M=d(te,"DIV",{class:!0});var ht=f(M);W=d(ht,"DIV",{class:!0});var it=f(W);Q=d(it,"DIV",{class:!0});var Ht=f(Q);ce=E(Ht,"disableFiltering:"),Ht.forEach(i),oe=y(it),ee=d(it,"DIV",{class:!0});var zt=f(ee);Se=E(zt,"boolean"),zt.forEach(i),it.forEach(i),Fe=y(ht),$e=d(ht,"P",{class:!0});var Qe=f($e);He=E(Qe,"Whether to disable filtering for the column or not. By default, filtering is enabled."),Qe.forEach(i),ht.forEach(i),ge=y(te),ne=d(te,"DIV",{class:!0});var ie=f(ne);k=d(ie,"DIV",{class:!0});var Pe=f(k);re=d(Pe,"DIV",{class:!0});var Wt=f(re);xe=E(Wt,"disableSorting:"),Wt.forEach(i),Ge=y(Pe),ve=d(Pe,"DIV",{class:!0});var Jt=f(ve);Ze=E(Jt,"boolean"),Jt.forEach(i),Pe.forEach(i),je=y(ie),ae=d(ie,"P",{class:!0});var Xe=f(ae);be=E(Xe,"Whether to disable sorting for the column or not. By default, sorting is enabled."),Xe.forEach(i),ie.forEach(i),Oe=y(te),_e=d(te,"DIV",{class:!0});var gt=f(_e);De=d(gt,"DIV",{class:!0});var Ut=f(De);Ee=d(Ut,"DIV",{class:!0});var St=f(Ee);tt=E(St,"colFitlerFn:"),St.forEach(i),Le=y(Ut),we=d(Ut,"DIV",{class:!0});var Et=f(we);ke=d(Et,"A",{href:!0});var qt=f(ke);Ye=E(qt,"ColumnFilterFn"),qt.forEach(i),Et.forEach(i),Ut.forEach(i),Ne=y(gt),Ie=d(gt,"P",{class:!0});var At=f(Ie);st=E(At,`Filtering function to be applied on the column. By default, basic number/string filter is
			applied.`),At.forEach(i),gt.forEach(i),ze=y(te),ue=d(te,"DIV",{class:!0});var Tt=f(ue);de=d(Tt,"DIV",{class:!0});var $t=f(de);Ae=d($t,"DIV",{class:!0});var Rt=f(Ae);Be=E(Rt,"colFilterComponent:"),Rt.forEach(i),Ce=y($t),ye=d($t,"DIV",{class:!0});var Yt=f(ye);rt=E(Yt,"SvelteComponent"),Yt.forEach(i),$t.forEach(i),Ct=y(Tt),Re=d(Tt,"P",{class:!0});var Ft=f(Re);kt=E(Ft,`Custom Svelte component to be used for filtering the column. By default, basic TableFilter
			component is rendered for the filters.`),Ft.forEach(i),Tt.forEach(i),yt=y(te),Ue=d(te,"DIV",{class:!0});var ct=f(Ue);Te=d(ct,"DIV",{class:!0});var Bt=f(Te);We=d(Bt,"DIV",{class:!0});var xt=f(We);wt=E(xt,"instructions:"),xt.forEach(i),Ke=y(Bt),Ve=d(Bt,"DIV",{class:!0});var Gt=f(Ve);nt=E(Gt,"ColumnInstructions"),Gt.forEach(i),Bt.forEach(i),It=y(ct),Je=d(ct,"P",{class:!0});var rs=f(Je);lt=E(rs,"Configuration for the column's appearance, sorting and filtering functionalities."),rs.forEach(i),ct.forEach(i),te.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumn"),c(t,"class","grid gap-2"),c(t,"id","column"),c(I,"class","italic"),c(g,"class","font-bold"),c(T,"class","flex gap-2"),c($,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(Q,"class","italic"),c(ee,"class","font-bold"),c(W,"class","flex gap-2"),c($e,"class","text-xl pl-10"),c(M,"class","items-center"),c(re,"class","italic"),c(ve,"class","font-bold"),c(k,"class","flex gap-2"),c(ae,"class","text-xl pl-10"),c(ne,"class","items-center"),c(Ee,"class","italic"),c(ke,"href","https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"),c(we,"class","font-bold"),c(De,"class","flex gap-2"),c(Ie,"class","text-xl pl-10"),c(_e,"class","items-center"),c(Ae,"class","italic"),c(ye,"class","font-bold"),c(de,"class","flex gap-2"),c(Re,"class","text-xl pl-10"),c(ue,"class","items-center"),c(We,"class","italic"),c(Ve,"class","font-bold"),c(Te,"class","flex gap-2"),c(Je,"class","text-xl pl-10"),c(Ue,"class","items-center"),c(e,"class","grid gap-5")},m(fe,te){P(fe,e,te),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,T),n(T,I),n(I,S),n(T,U),n(T,g),n(g,V),n(_,w),n(_,$),n($,A),n(e,N),n(e,F),n(F,B),n(B,R),n(R,G),n(B,H),n(B,j),n(j,X),n(F,Z),n(F,z),n(z,se),n(e,O),n(e,M),n(M,W),n(W,Q),n(Q,ce),n(W,oe),n(W,ee),n(ee,Se),n(M,Fe),n(M,$e),n($e,He),n(e,ge),n(e,ne),n(ne,k),n(k,re),n(re,xe),n(k,Ge),n(k,ve),n(ve,Ze),n(ne,je),n(ne,ae),n(ae,be),n(e,Oe),n(e,_e),n(_e,De),n(De,Ee),n(Ee,tt),n(De,Le),n(De,we),n(we,ke),n(ke,Ye),n(_e,Ne),n(_e,Ie),n(Ie,st),n(e,ze),n(e,ue),n(ue,de),n(de,Ae),n(Ae,Be),n(de,Ce),n(de,ye),n(ye,rt),n(ue,Ct),n(ue,Re),n(Re,kt),n(e,yt),n(e,Ue),n(Ue,Te),n(Te,We),n(We,wt),n(Te,Ke),n(Te,Ve),n(Ve,nt),n(Ue,It),n(Ue,Je),n(Je,lt),vt=!0,Vt||(Lt=ns(Ds.call(null,a,l[0])),Vt=!0)},p:le,i(fe){vt||(x(b.$$.fragment,fe),vt=!0)},o(fe){L(b.$$.fragment,fe),vt=!1},d(fe){fe&&i(e),Y(b),Vt=!1,Lt()}}}function An(l){return[{event:"click",target:"popupClickColumn",placement:"right"}]}class Rn extends me{constructor(e){super(),he(this,e,An,Sn,pe,{})}}function Fn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H,j,X,Z,z,se,O,M,W,Q,ce,oe,ee,Se,Fe,$e,He,ge,ne,k,re,xe,Ge,ve,Ze,je,ae,be,Oe,_e,De,Ee,tt,Le,we,ke,Ye,Ne,Ie,st,ze,ue,de,Ae,Be,Ce,ye,rt,Ct,Re,kt,yt,Ue,Te,We,wt,Ke,Ve,nt,It,Je,lt,vt,Vt,Lt;return b=new ls({props:{language:"ts",code:cn}}),{c(){e=u("div"),t=u("div"),r=u("h3"),s=D("ColumnInstructions"),o=C(),a=u("button"),m=D("Show type details"),p=C(),h=u("div"),J(b.$$.fragment),v=C(),_=u("div"),T=u("div"),I=u("div"),S=D("toStringFn:"),U=C(),g=u("div"),V=D("(value: any) => string"),w=C(),$=u("p"),A=D("Custom toString function to be applied on the column."),N=C(),F=u("div"),B=u("div"),R=u("div"),G=D("toSortableValueFn:"),H=C(),j=u("div"),X=D("(value: any) => string | number"),Z=C(),z=u("p"),se=D("Custom function to return either a string or a number value to have a sortable column."),O=C(),M=u("div"),W=u("div"),Q=u("div"),ce=D("toFilterableValueFn:"),oe=C(),ee=u("div"),Se=D("(value: any) => string | number | Date"),Fe=C(),$e=u("p"),He=D(`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),ge=C(),ne=u("div"),k=u("div"),re=u("div"),xe=D("renderComponent:"),Ge=C(),ve=u("div"),Ze=D("SvelteComponent"),je=C(),ae=u("div"),be=u("p"),Oe=u("code"),_e=D("renderComponent"),De=D(" overrides "),Ee=u("code"),tt=D("toStringFn"),Le=D("."),we=C(),ke=u("p"),Ye=D("Every "),Ne=u("code"),Ie=D("renderComponent"),st=D(" will get 2 props:"),ze=C(),ue=u("div"),de=u("div"),Ae=u("div"),Be=D("row:"),Ce=C(),ye=u("div"),rt=D("Object"),Ct=C(),Re=u("p"),kt=D("The current row in the table. In other words, a single object from the data store."),yt=C(),Ue=u("div"),Te=u("div"),We=u("div"),wt=D("value:"),Ke=C(),Ve=u("div"),nt=D("any"),It=C(),Je=u("p"),lt=D("The value of the current cell."),this.h()},l(fe){e=d(fe,"DIV",{class:!0});var te=f(e);t=d(te,"DIV",{class:!0,id:!0});var qe=f(t);r=d(qe,"H3",{class:!0});var ot=f(r);s=E(ot,"ColumnInstructions"),ot.forEach(i),o=y(qe),a=d(qe,"BUTTON",{class:!0});var at=f(a);m=E(at,"Show type details"),at.forEach(i),p=y(qe),h=d(qe,"DIV",{"data-popup":!0});var bt=f(h);K(b.$$.fragment,bt),bt.forEach(i),qe.forEach(i),v=y(te),_=d(te,"DIV",{class:!0});var ft=f(_);T=d(ft,"DIV",{class:!0});var pt=f(T);I=d(pt,"DIV",{class:!0});var _t=f(I);S=E(_t,"toStringFn:"),_t.forEach(i),U=y(pt),g=d(pt,"DIV",{class:!0});var jt=f(g);V=E(jt,"(value: any) => string"),jt.forEach(i),pt.forEach(i),w=y(ft),$=d(ft,"P",{class:!0});var Nt=f($);A=E(Nt,"Custom toString function to be applied on the column."),Nt.forEach(i),ft.forEach(i),N=y(te),F=d(te,"DIV",{class:!0});var mt=f(F);B=d(mt,"DIV",{class:!0});var Me=f(B);R=d(Me,"DIV",{class:!0});var Mt=f(R);G=E(Mt,"toSortableValueFn:"),Mt.forEach(i),H=y(Me),j=d(Me,"DIV",{class:!0});var Dt=f(j);X=E(Dt,"(value: any) => string | number"),Dt.forEach(i),Me.forEach(i),Z=y(mt),z=d(mt,"P",{class:!0});var Pt=f(z);se=E(Pt,"Custom function to return either a string or a number value to have a sortable column."),Pt.forEach(i),mt.forEach(i),O=y(te),M=d(te,"DIV",{class:!0});var ht=f(M);W=d(ht,"DIV",{class:!0});var it=f(W);Q=d(it,"DIV",{class:!0});var Ht=f(Q);ce=E(Ht,"toFilterableValueFn:"),Ht.forEach(i),oe=y(it),ee=d(it,"DIV",{class:!0});var zt=f(ee);Se=E(zt,"(value: any) => string | number | Date"),zt.forEach(i),it.forEach(i),Fe=y(ht),$e=d(ht,"P",{class:!0});var Qe=f($e);He=E(Qe,`Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.`),Qe.forEach(i),ht.forEach(i),ge=y(te),ne=d(te,"DIV",{class:!0});var ie=f(ne);k=d(ie,"DIV",{class:!0});var Pe=f(k);re=d(Pe,"DIV",{class:!0});var Wt=f(re);xe=E(Wt,"renderComponent:"),Wt.forEach(i),Ge=y(Pe),ve=d(Pe,"DIV",{class:!0});var Jt=f(ve);Ze=E(Jt,"SvelteComponent"),Jt.forEach(i),Pe.forEach(i),je=y(ie),ae=d(ie,"DIV",{class:!0});var Xe=f(ae);be=d(Xe,"P",{class:!0});var gt=f(be);Oe=d(gt,"CODE",{});var Ut=f(Oe);_e=E(Ut,"renderComponent"),Ut.forEach(i),De=E(gt," overrides "),Ee=d(gt,"CODE",{});var St=f(Ee);tt=E(St,"toStringFn"),St.forEach(i),Le=E(gt,"."),gt.forEach(i),we=y(Xe),ke=d(Xe,"P",{class:!0});var Et=f(ke);Ye=E(Et,"Every "),Ne=d(Et,"CODE",{});var qt=f(Ne);Ie=E(qt,"renderComponent"),qt.forEach(i),st=E(Et," will get 2 props:"),Et.forEach(i),ze=y(Xe),ue=d(Xe,"DIV",{class:!0});var At=f(ue);de=d(At,"DIV",{class:!0});var Tt=f(de);Ae=d(Tt,"DIV",{class:!0});var $t=f(Ae);Be=E($t,"row:"),$t.forEach(i),Ce=y(Tt),ye=d(Tt,"DIV",{class:!0});var Rt=f(ye);rt=E(Rt,"Object"),Rt.forEach(i),Tt.forEach(i),Ct=y(At),Re=d(At,"P",{class:!0});var Yt=f(Re);kt=E(Yt,"The current row in the table. In other words, a single object from the data store."),Yt.forEach(i),At.forEach(i),yt=y(Xe),Ue=d(Xe,"DIV",{class:!0});var Ft=f(Ue);Te=d(Ft,"DIV",{class:!0});var ct=f(Te);We=d(ct,"DIV",{class:!0});var Bt=f(We);wt=E(Bt,"value:"),Bt.forEach(i),Ke=y(ct),Ve=d(ct,"DIV",{class:!0});var xt=f(Ve);nt=E(xt,"any"),xt.forEach(i),ct.forEach(i),It=y(Ft),Je=d(Ft,"P",{class:!0});var Gt=f(Je);lt=E(Gt,"The value of the current cell."),Gt.forEach(i),Ft.forEach(i),Xe.forEach(i),ie.forEach(i),te.forEach(i),this.h()},h(){c(r,"class","font-semibold items-center w-max"),c(a,"class","btn variant-ghost-primary w-min"),c(h,"data-popup","popupClickColumnInstructions"),c(t,"class","grid gap-2"),c(t,"id","columnInstructions"),c(I,"class","italic"),c(g,"class","font-bold"),c(T,"class","flex gap-2"),c($,"class","text-xl pl-10"),c(_,"class","items-center"),c(R,"class","italic"),c(j,"class","font-bold"),c(B,"class","flex gap-2"),c(z,"class","text-xl pl-10"),c(F,"class","items-center"),c(Q,"class","italic"),c(ee,"class","font-bold"),c(W,"class","flex gap-2"),c($e,"class","text-xl pl-10"),c(M,"class","items-center"),c(re,"class","italic"),c(ve,"class","font-bold"),c(k,"class","flex gap-2"),c(be,"class","underline"),c(ke,"class",""),c(Ae,"class","italic"),c(ye,"class","font-bold"),c(de,"class","flex gap-2"),c(Re,"class","text-xl pl-10"),c(ue,"class","items-center mt-2"),c(We,"class","italic"),c(Ve,"class","font-bold"),c(Te,"class","flex gap-2"),c(Je,"class","text-xl pl-10"),c(Ue,"class","items-center mt-2"),c(ae,"class","ml-5"),c(ne,"class","items-center mt-5"),c(e,"class","grid gap-5")},m(fe,te){P(fe,e,te),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),n(t,h),q(b,h,null),n(e,v),n(e,_),n(_,T),n(T,I),n(I,S),n(T,U),n(T,g),n(g,V),n(_,w),n(_,$),n($,A),n(e,N),n(e,F),n(F,B),n(B,R),n(R,G),n(B,H),n(B,j),n(j,X),n(F,Z),n(F,z),n(z,se),n(e,O),n(e,M),n(M,W),n(W,Q),n(Q,ce),n(W,oe),n(W,ee),n(ee,Se),n(M,Fe),n(M,$e),n($e,He),n(e,ge),n(e,ne),n(ne,k),n(k,re),n(re,xe),n(k,Ge),n(k,ve),n(ve,Ze),n(ne,je),n(ne,ae),n(ae,be),n(be,Oe),n(Oe,_e),n(be,De),n(be,Ee),n(Ee,tt),n(be,Le),n(ae,we),n(ae,ke),n(ke,Ye),n(ke,Ne),n(Ne,Ie),n(ke,st),n(ae,ze),n(ae,ue),n(ue,de),n(de,Ae),n(Ae,Be),n(de,Ce),n(de,ye),n(ye,rt),n(ue,Ct),n(ue,Re),n(Re,kt),n(ae,yt),n(ae,Ue),n(Ue,Te),n(Te,We),n(We,wt),n(Te,Ke),n(Te,Ve),n(Ve,nt),n(Ue,It),n(Ue,Je),n(Je,lt),vt=!0,Vt||(Lt=ns(Ds.call(null,a,l[0])),Vt=!0)},p:le,i(fe){vt||(x(b.$$.fragment,fe),vt=!0)},o(fe){L(b.$$.fragment,fe),vt=!1},d(fe){fe&&i(e),Y(b),Vt=!1,Lt()}}}function Bn(l){return[{event:"click",target:"popupClickColumnInstructions",placement:"right"}]}class xn extends me{constructor(e){super(),he(this,e,Bn,Fn,pe,{})}}function Zs(l,e,t){const r=l.slice();return r[5]=e[t],r}function Qs(l){let e,t,r,s,o,a;t=new kr({props:{icon:l[5].icon}});function m(){return l[4](l[5])}return{c(){e=u("button"),J(t.$$.fragment),r=C(),this.h()},l(p){e=d(p,"BUTTON",{class:!0});var h=f(e);K(t.$$.fragment,h),r=y(h),h.forEach(i),this.h()},h(){c(e,"class",`btn btn-sm btn-icon rounded-md ${l[5].color}`)},m(p,h){P(p,e,h),q(t,e,null),n(e,r),s=!0,o||(a=et(e,"click",hr(m)),o=!0)},p(p,h){l=p},i(p){s||(x(t.$$.fragment,p),s=!0)},o(p){L(t.$$.fragment,p),s=!1},d(p){p&&i(e),Y(t),o=!1,a()}}}function Gn(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=Qs(Zs(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){e=u("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=d(a,"DIV",{class:!0});var m=f(e);for(let p=0;p<s.length;p+=1)s[p].l(m);m.forEach(i),this.h()},h(){c(e,"class","flex gap-2 w-min")},m(a,m){P(a,e,m);for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(e,null);t=!0},p(a,[m]){if(m&3){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=Zs(a,r,p);s[p]?(s[p].p(h,m),x(s[p],1)):(s[p]=Qs(h),s[p].c(),x(s[p],1),s[p].m(e,null))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)x(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){a&&i(e),ss(s,a)}}}function On(l,e,t){let{row:r}=e,{dispatchFn:s}=e;const o=p=>s({type:p,row:r}),a=[{icon:Ur,color:"variant-filled-primary",type:"CREATE"},{icon:Sr,color:"variant-filled-secondary",type:"READ"},{icon:Ar,color:"variant-filled-warning",type:"UPDATE"},{icon:Rr,color:"variant-filled-error",type:"DELETE"}],m=p=>o(p.type);return l.$$set=p=>{"row"in p&&t(2,r=p.row),"dispatchFn"in p&&t(3,s=p.dispatchFn)},[o,a,r,s,m]}class Ln extends me{constructor(e){super(),he(this,e,On,Gn,pe,{row:2,dispatchFn:3})}}function er(l,e,t){const r=l.slice();return r[2]=e[t],r}function tr(l){let e,t=l[2].name+"",r,s;return{c(){e=u("option"),r=D(t),this.h()},l(o){e=d(o,"OPTION",{});var a=f(e);r=E(a,t),a.forEach(i),this.h()},h(){e.__value=s=l[2].id,e.value=e.__value},m(o,a){P(o,e,a),n(e,r)},p(o,a){a&1&&t!==(t=o[2].name+"")&&dt(r,t),a&1&&s!==(s=o[2].id)&&(e.__value=s,e.value=e.__value)},d(o){o&&i(e)}}}function Nn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U=l[0],g=[];for(let V=0;V<U.length;V+=1)g[V]=tr(er(l,U,V));return{c(){e=u("div"),t=u("label"),r=D("Select the users you would like to add to the "),s=u("strong"),o=D(l[1]),a=D("."),m=C(),p=u("select");for(let V=0;V<g.length;V+=1)g[V].c();h=C(),b=u("div"),v=u("button"),_=D("Cancel"),T=C(),I=u("button"),S=D("Done"),this.h()},l(V){e=d(V,"DIV",{class:!0});var w=f(e);t=d(w,"LABEL",{for:!0});var $=f(t);r=E($,"Select the users you would like to add to the "),s=d($,"STRONG",{});var A=f(s);o=E(A,l[1]),A.forEach(i),a=E($,"."),$.forEach(i),m=y(w),p=d(w,"SELECT",{name:!0,class:!0,id:!0});var N=f(p);for(let G=0;G<g.length;G+=1)g[G].l(N);N.forEach(i),h=y(w),b=d(w,"DIV",{class:!0});var F=f(b);v=d(F,"BUTTON",{class:!0});var B=f(v);_=E(B,"Cancel"),B.forEach(i),T=y(F),I=d(F,"BUTTON",{class:!0});var R=f(I);S=E(R,"Done"),R.forEach(i),F.forEach(i),w.forEach(i),this.h()},h(){c(t,"for","users"),p.multiple=!0,c(p,"name","users"),c(p,"class","select"),c(p,"id",""),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(V,w){P(V,e,w),n(e,t),n(t,r),n(t,s),n(s,o),n(t,a),n(e,m),n(e,p);for(let $=0;$<g.length;$+=1)g[$]&&g[$].m(p,null);n(e,h),n(e,b),n(b,v),n(v,_),n(b,T),n(b,I),n(I,S)},p(V,[w]){if(w&2&&dt(o,V[1]),w&1){U=V[0];let $;for($=0;$<U.length;$+=1){const A=er(V,U,$);g[$]?g[$].p(A,w):(g[$]=tr(A),g[$].c(),g[$].m(p,null))}for(;$<g.length;$+=1)g[$].d(1);g.length=U.length}},i:le,o:le,d(V){V&&i(e),ss(g,V)}}}function Mn(l,e,t){let{users:r}=e,{group:s}=e;return l.$$set=o=>{"users"in o&&t(0,r=o.users),"group"in o&&t(1,s=o.group)},[r,s]}class Pn extends me{constructor(e){super(),he(this,e,Mn,Nn,pe,{users:0,group:1})}}function sr(l,e,t){const r=l.slice();return r[2]=e[t],r}function rr(l){let e,t;return{c(){e=u("p"),t=D("No users in this group"),this.h()},l(r){e=d(r,"P",{class:!0});var s=f(e);t=E(s,"No users in this group"),s.forEach(i),this.h()},h(){c(e,"class","italic")},m(r,s){P(r,e,s),n(e,t)},p:le,d(r){r&&i(e)}}}function nr(l){let e,t,r=l[2].name+"",s,o;return{c(){e=u("li"),t=D("- "),s=D(r),this.h()},l(a){e=d(a,"LI",{class:!0});var m=f(e);t=E(m,"- "),s=E(m,r),m.forEach(i),this.h()},h(){c(e,"class","font-semibold"),e.value=o=l[2].id},m(a,m){P(a,e,m),n(e,t),n(e,s)},p(a,m){m&1&&r!==(r=a[2].name+"")&&dt(s,r),m&1&&o!==(o=a[2].id)&&(e.value=o)},d(a){a&&i(e)}}}function Hn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U=l[0],g=[];for(let w=0;w<U.length;w+=1)g[w]=nr(sr(l,U,w));let V=null;return U.length||(V=rr()),{c(){e=u("div"),t=u("label"),r=D("Users in "),s=u("strong"),o=D(l[1]),a=D("."),m=C(),p=u("ul");for(let w=0;w<g.length;w+=1)g[w].c();V&&V.c(),h=C(),b=u("div"),v=u("button"),_=D("Cancel"),T=C(),I=u("button"),S=D("Done"),this.h()},l(w){e=d(w,"DIV",{class:!0});var $=f(e);t=d($,"LABEL",{for:!0});var A=f(t);r=E(A,"Users in "),s=d(A,"STRONG",{});var N=f(s);o=E(N,l[1]),N.forEach(i),a=E(A,"."),A.forEach(i),m=y($),p=d($,"UL",{});var F=f(p);for(let H=0;H<g.length;H+=1)g[H].l(F);V&&V.l(F),F.forEach(i),h=y($),b=d($,"DIV",{class:!0});var B=f(b);v=d(B,"BUTTON",{class:!0});var R=f(v);_=E(R,"Cancel"),R.forEach(i),T=y(B),I=d(B,"BUTTON",{class:!0});var G=f(I);S=E(G,"Done"),G.forEach(i),B.forEach(i),$.forEach(i),this.h()},h(){c(t,"for","users"),c(v,"class","btn variant-filled-error"),c(I,"class","btn variant-filled-success"),c(b,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m(w,$){P(w,e,$),n(e,t),n(t,r),n(t,s),n(s,o),n(t,a),n(e,m),n(e,p);for(let A=0;A<g.length;A+=1)g[A]&&g[A].m(p,null);V&&V.m(p,null),n(e,h),n(e,b),n(b,v),n(v,_),n(b,T),n(b,I),n(I,S)},p(w,[$]){if($&2&&dt(o,w[1]),$&1){U=w[0];let A;for(A=0;A<U.length;A+=1){const N=sr(w,U,A);g[A]?g[A].p(N,$):(g[A]=nr(N),g[A].c(),g[A].m(p,null))}for(;A<g.length;A+=1)g[A].d(1);g.length=U.length,!U.length&&V?V.p(w,$):U.length?V&&(V.d(1),V=null):(V=rr(),V.c(),V.m(p,null))}},i:le,o:le,d(w){w&&i(e),ss(g,w),V&&V.d()}}}function jn(l,e,t){let{users:r}=e,{group:s}=e;return l.$$set=o=>{"users"in o&&t(0,r=o.users),"group"in o&&t(1,s=o.group)},[r,s]}class zn extends me{constructor(e){super(),he(this,e,jn,Hn,pe,{users:0,group:1})}}function Wn(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w;return{c(){e=u("div"),t=u("label"),r=D("Group name"),s=C(),o=u("input"),a=C(),m=u("label"),p=D("Group description"),h=C(),b=u("input"),v=C(),_=u("div"),T=u("button"),I=D("Cancel"),S=C(),U=u("button"),g=D("Done"),this.h()},l($){e=d($,"DIV",{class:!0});var A=f(e);t=d(A,"LABEL",{for:!0});var N=f(t);r=E(N,"Group name"),N.forEach(i),s=y(A),o=d(A,"INPUT",{type:!0,id:!0,class:!0}),a=y(A),m=d(A,"LABEL",{for:!0});var F=f(m);p=E(F,"Group description"),F.forEach(i),h=y(A),b=d(A,"INPUT",{type:!0,id:!0,class:!0}),v=y(A),_=d(A,"DIV",{class:!0});var B=f(_);T=d(B,"BUTTON",{class:!0});var R=f(T);I=E(R,"Cancel"),R.forEach(i),S=y(B),U=d(B,"BUTTON",{class:!0});var G=f(U);g=E(G,"Done"),G.forEach(i),B.forEach(i),A.forEach(i),this.h()},h(){c(t,"for","groupName"),c(o,"type","text"),c(o,"id","groupName"),c(o,"class","input input-primary"),c(m,"for","groupDescription"),c(b,"type","text"),c(b,"id","groupDescription"),c(b,"class","input input-primary"),c(T,"class","btn variant-filled-error"),c(U,"class","btn variant-filled-success"),c(_,"class","flex gap-2 justify-end"),c(e,"class","p-5 rounded-lg bg-white grid gap-2")},m($,A){P($,e,A),n(e,t),n(t,r),n(e,s),n(e,o),ts(o,l[0].name),n(e,a),n(e,m),n(m,p),n(e,h),n(e,b),ts(b,l[0].description),n(e,v),n(e,_),n(_,T),n(T,I),n(_,S),n(_,U),n(U,g),V||(w=[et(o,"input",l[1]),et(b,"input",l[2])],V=!0)},p($,[A]){A&1&&o.value!==$[0].name&&ts(o,$[0].name),A&1&&b.value!==$[0].description&&ts(b,$[0].description)},i:le,o:le,d($){$&&i(e),V=!1,_s(w)}}}function Jn(l,e,t){let{group:r}=e;function s(){r.name=this.value,t(0,r)}function o(){r.description=this.value,t(0,r)}return l.$$set=a=>{"group"in a&&t(0,r=a.group)},[r,s,o]}class qn extends me{constructor(e){super(),he(this,e,Jn,Wn,pe,{group:0})}}const Yn=[{id:1,name:"Group 1",description:"Testing 1"},{id:2,name:"Group 2",description:"Testing 2"},{id:3,name:"Group 3",description:"Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 Testing 3 "},{id:4,name:"Group 4",description:"Testing 4"},{id:5,name:"Group 5",description:"Testing 5"},{id:6,name:"Group 6",description:"Testing 6"},{id:7,name:"Group 7",description:"Testing 7"},{id:8,name:"Group 8",description:"Testing 8"},{id:9,name:"Group 9",description:"Testing 9"},{id:10,name:"Group 10",description:"Testing 10"},{id:11,name:"Group 11",description:"Testing 11"},{id:12,name:"Group 12",description:"Testing 12"},{id:13,name:"Group 13",description:"Testing 13"},{id:14,name:"Group 14",description:"Testing 14"},{id:15,name:"Group 15",description:"Testing 15"},{id:16,name:"Group 16",description:"Testing 16"},{id:17,name:"Group 17",description:"Testing 17"},{id:18,name:"Group 18",description:"Testing 18"},{id:19,name:"Group 19",description:"Testing 19"},{id:20,name:"Group 20",description:"Testing 20"},{id:21,name:"Group 21",description:"Testing 21"},{id:22,name:"Group 22",description:"Testing 22"}],Kn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:2,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:4,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Xn=[{id:1,name:"John Doe",dateOfBirth:new Date("1990-05-10")},{id:2,name:"Jane Smith",dateOfBirth:new Date("1985-12-15")},{id:3,name:"David Johnson",dateOfBirth:new Date("1992-07-22")},{id:4,name:"Emily Brown",dateOfBirth:new Date("1998-03-05")},{id:5,name:"Michael Davis",dateOfBirth:new Date("1987-09-18")},{id:6,name:"Olivia Wilson",dateOfBirth:new Date("1994-11-30")},{id:7,name:"James Taylor",dateOfBirth:new Date("1996-01-25")},{id:8,name:"Sophia Martinez",dateOfBirth:new Date("1991-08-14")},{id:9,name:"Daniel Anderson",dateOfBirth:new Date("1993-06-07")},{id:10,name:"Ava Thomas",dateOfBirth:new Date("1989-04-01")},{id:11,name:"William Clark",dateOfBirth:new Date("1997-02-12")},{id:12,name:"Mia Rodriguez",dateOfBirth:new Date("1999-10-20")},{id:13,name:"Benjamin Lewis",dateOfBirth:new Date("1988-07-08")},{id:14,name:"Charlotte Lee",dateOfBirth:new Date("1995-09-28")},{id:15,name:"Henry Turner",dateOfBirth:new Date("1992-12-03")}],Zn=[{id:1,name:"User 1",group:"Group 1",role:"Role 1"},{id:32655,name:"User 2",group:"Group 2",role:"Role 2"},{id:3,name:"User 3",group:"Group 3",role:"Role 3"},{id:32653,name:"User 4",group:"Group 4",role:"Role 4"},{id:5,name:"User 5",group:"Group 5",role:"Role 5"}],Qn=[{label:"Google",URL:new URL("https://www.google.com")},{label:"GitHub",URL:new URL("https://www.github.com")},{label:"YouTube",URL:new URL("https://www.youtube.com")},{label:"Yahoo",URL:new URL("https://www.yahoo.com")},{label:"Bing",URL:new URL("https://www.bing.com")}],el=[{name:"John Doe",username:"johndoe",isAdmin:!0},{name:"Jane Smith",username:"janesmith",isAdmin:!1},{name:"Robert Johnson",username:"robertjohnson",isAdmin:!1},{name:"Emily Davis",username:"emilydavis",isAdmin:!0},{name:"Michael Wilson",username:"michaelwilson",isAdmin:!1}],vr=Qt(Yn),Ts=Qt(Kn),tl=Qt(Xn),sl=Qt(el),rl=Qt(Qn),lr={32655:"NA",32654:"NM",32653:"ND"},nl=Qt(Zn);function or(l,e,t){const r=l.slice();return r[6]=e[t],r[8]=t,r}function ar(l,e,t){const r=l.slice();return r[6]=e[t],r[8]=t,r}function ir(l){let e,t;return{c(){e=u("h3"),t=D(l[0]),this.h()},l(r){e=d(r,"H3",{class:!0});var s=f(e);t=E(s,l[0]),s.forEach(i),this.h()},h(){c(e,"class","h3")},m(r,s){P(r,e,s),n(e,t)},p(r,s){s&1&&dt(t,r[0])},d(r){r&&i(e)}}}function ll(l){let e=l[6].name+"",t;return{c(){t=D(e)},l(r){t=E(r,e)},m(r,s){P(r,t,s)},p(r,s){s&2&&e!==(e=r[6].name+"")&&dt(t,e)},d(r){r&&i(t)}}}function cr(l){let e,t,r;function s(a){l[4](a)}let o={name:`tab${l[8]}`,value:l[8],$$slots:{default:[ll]},$$scope:{ctx:l}};return l[2]!==void 0&&(o.group=l[2]),e=new Br({props:o}),wr.push(()=>Ir(e,"group",s)),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,m){q(e,a,m),r=!0},p(a,m){const p={};m&34&&(p.$$scope={dirty:m,ctx:a}),!t&&m&4&&(t=!0,p.group=a[2],Vr(()=>t=!1)),e.$set(p)},i(a){r||(x(e.$$.fragment,a),r=!0)},o(a){L(e.$$.fragment,a),r=!1},d(a){Y(e,a)}}}function ol(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=cr(or(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ut()},l(a){for(let m=0;m<s.length;m+=1)s[m].l(a);e=ut()},m(a,m){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=or(a,r,p);s[p]?(s[p].p(h,m),x(s[p],1)):(s[p]=cr(h),s[p].c(),x(s[p],1),s[p].m(e.parentNode,e))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)x(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){ss(s,a),a&&i(e)}}}function ur(l){let e,t;return e=new ls({props:{language:l[6].language,code:l[6].code}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p(r,s){const o={};s&2&&(o.language=r[6].language),s&2&&(o.code=r[6].code),e.$set(o)},i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function dr(l){let e,t,r=l[2]===l[8]&&ur(l);return{c(){r&&r.c(),e=ut()},l(s){r&&r.l(s),e=ut()},m(s,o){r&&r.m(s,o),P(s,e,o),t=!0},p(s,o){s[2]===s[8]?r?(r.p(s,o),o&4&&x(r,1)):(r=ur(s),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(Kt(),L(r,1,1,()=>{r=null}),Xt())},i(s){t||(x(r),t=!0)},o(s){L(r),t=!1},d(s){r&&r.d(s),s&&i(e)}}}function al(l){let e,t,r=l[1],s=[];for(let a=0;a<r.length;a+=1)s[a]=dr(ar(l,r,a));const o=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ut()},l(a){for(let m=0;m<s.length;m+=1)s[m].l(a);e=ut()},m(a,m){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(a,m);P(a,e,m),t=!0},p(a,m){if(m&6){r=a[1];let p;for(p=0;p<r.length;p+=1){const h=ar(a,r,p);s[p]?(s[p].p(h,m),x(s[p],1)):(s[p]=dr(h),s[p].c(),x(s[p],1),s[p].m(e.parentNode,e))}for(Kt(),p=r.length;p<s.length;p+=1)o(p);Xt()}},i(a){if(!t){for(let m=0;m<r.length;m+=1)x(s[m]);t=!0}},o(a){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);t=!1},d(a){ss(s,a),a&&i(e)}}}function il(l){let e,t,r,s,o,a,m,p,h,b=l[0]&&ir(l);const v=l[3].default,_=Tr(v,l,l[5],null);return p=new Fr({props:{$$slots:{panel:[al],default:[ol]},$$scope:{ctx:l}}}),{c(){e=u("div"),t=u("div"),b&&b.c(),r=C(),s=u("div"),o=u("div"),_&&_.c(),a=C(),m=u("div"),J(p.$$.fragment),this.h()},l(T){e=d(T,"DIV",{});var I=f(e);t=d(I,"DIV",{class:!0});var S=f(t);b&&b.l(S),S.forEach(i),r=y(I),s=d(I,"DIV",{class:!0});var U=f(s);o=d(U,"DIV",{});var g=f(o);_&&_.l(g),g.forEach(i),a=y(U),m=d(U,"DIV",{});var V=f(m);K(p.$$.fragment,V),V.forEach(i),U.forEach(i),I.forEach(i),this.h()},h(){c(t,"class","py-5"),c(s,"class","grid grid-cols-2 card p-5 gap-10")},m(T,I){P(T,e,I),n(e,t),b&&b.m(t,null),n(e,r),n(e,s),n(s,o),_&&_.m(o,null),n(s,a),n(s,m),q(p,m,null),h=!0},p(T,[I]){T[0]?b?b.p(T,I):(b=ir(T),b.c(),b.m(t,null)):b&&(b.d(1),b=null),_&&_.p&&(!h||I&32)&&$r(_,v,T,T[5],h?yr(v,T[5],I,null):Cr(T[5]),null);const S={};I&38&&(S.$$scope={dirty:I,ctx:T}),p.$set(S)},i(T){h||(x(_,T),x(p.$$.fragment,T),h=!0)},o(T){L(_,T),L(p.$$.fragment,T),h=!1},d(T){T&&i(e),b&&b.d(),_&&_.d(T),Y(p)}}}function cl(l,e,t){let{$$slots:r={},$$scope:s}=e,{title:o}=e,{tabs:a=[]}=e,m=0;function p(h){m=h,t(2,m)}return l.$$set=h=>{"title"in h&&t(0,o=h.title),"tabs"in h&&t(1,a=h.tabs),"$$scope"in h&&t(5,s=h.$$scope)},[o,a,m,r,p,s]}class $s extends me{constructor(e){super(),he(this,e,cl,il,pe,{title:0,tabs:1})}}function ul(l){let e,t;return e=new Zt({props:{config:l[0]}}),e.$on("action",l[1]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function dl(l){let e,t,r;return t=new $s({props:{title:"CRUD",tabs:l[2],$$slots:{default:[ul]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","CRUD")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&16&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function fl(l,e,t){let r;ys(l,Ts,m=>t(3,r=m));const s={id:"userGroupCRUD",data:vr,optionsComponent:Ln},o=m=>{const{type:p,row:h}=m.detail;switch(p){case"CREATE":Ot.trigger({type:"component",title:`Add user to Group ${h.id}`,component:{ref:Pn,props:{users:r.filter(b=>b.group!==h.name),group:h.name}}});break;case"READ":Ot.trigger({type:"component",title:`Users in Group ${h.id}`,component:{ref:zn,props:{users:r.filter(b=>b.group===h.name),group:h.name}}});break;case"UPDATE":Ot.trigger({type:"component",title:`Edit Group ${h.id}`,component:{ref:qn,props:{group:h}}});break;case"DELETE":Ot.trigger({type:"confirm",title:"Group deletion",body:`Are you sure you want to delete <strong>${h.name}</strong>?`,response:b=>console.log("response:",b)});break}},a=[{name:"Svelte",language:"html",code:_n},{name:"tableCRUDActions",language:"typescript",code:Dn},{name:"optionsComponent",language:"html",code:Cn},{name:"data",language:"typescript",code:Es+`
`+gr},{name:"AddUser.svelte",language:"html",code:En},{name:"ShowUsers.svelte",language:"html",code:Tn},{name:"EditGroup.svelte",language:"html",code:$n}];return[s,o,a]}class pl extends me{constructor(e){super(),he(this,e,fl,dl,pe,{tableCRUDConfig:0,tableCRUDActions:1,tableCRUDtabs:2})}get tableCRUDConfig(){return this.$$.ctx[0]}get tableCRUDActions(){return this.$$.ctx[1]}get tableCRUDtabs(){return this.$$.ctx[2]}}function ml(l){let e,t,r,s;return{c(){e=u("button"),t=D("Odd or even"),this.h()},l(o){e=d(o,"BUTTON",{class:!0});var a=f(e);t=E(a,"Odd or even"),a.forEach(i),this.h()},h(){c(e,"class","btn btn-sm variant-filled-secondary")},m(o,a){P(o,e,a),n(e,t),r||(s=et(e,"click",hr(l[0])),r=!0)},p:le,i:le,o:le,d(o){o&&i(e),r=!1,s()}}}function hl(l,e,t){let{row:r}=e,{dispatchFn:s}=e;const o=()=>{const a=r.id%2===0?"even":"odd";return s({type:a})};return l.$$set=a=>{"row"in a&&t(1,r=a.row),"dispatchFn"in a&&t(2,s=a.dispatchFn)},[o,r,s]}class gl extends me{constructor(e){super(),he(this,e,hl,ml,pe,{row:1,dispatchFn:2})}}function vl(l){let e,t;return e=new Zt({props:{config:l[1]}}),e.$on("action",l[2]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function bl(l){let e,t,r;return t=new $s({props:{title:"Odd or even",tabs:l[0],$$slots:{default:[vl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","usersNoRoles")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&8&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function _l(l){return[[{name:"Svelte",language:"html",code:sn},{name:"Data",language:"typescript",code:Es},{name:"TableOptions.svelte",language:"html",code:bn}],{id:"usersNoRoles",data:Ts,optionsComponent:gl,columns:{id:{colFilterFn:xr,colFilterComponent:Gr},role:{exclude:!0},group:{header:"Group name"}},pageSizes:[1,3,5],defaultPageSize:5},s=>{alert(s.detail.type)}]}class Dl extends me{constructor(e){super(),he(this,e,_l,bl,pe,{})}}function El(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Tl(l){let e,t,r;return t=new os({props:{title:"Minimal configuration",svelte:tn,data:Es,$$slots:{default:[El]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0,id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"class","grid gap-5"),c(e,"id","users")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function $l(l){return[{id:"users",data:Ts}]}class Cl extends me{constructor(e){super(),he(this,e,$l,Tl,pe,{})}}function yl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function wl(l){let e,t,r;return t=new os({props:{title:"Date",svelte:rn,data:nn,$$slots:{default:[yl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","usersBD")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Il(l){return[{id:"usersBD",data:tl,columns:{dateOfBirth:{header:"Date of birth",instructions:{toStringFn:t=>t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}),toSortableValueFn:t=>t.getTime(),toFilterableValueFn:t=>t}}}}]}class Vl extends me{constructor(e){super(),he(this,e,Il,wl,pe,{})}}function kl(l){let e,t;return{c(){e=u("input"),this.h()},l(r){e=d(r,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){c(e,"type","checkbox"),c(e,"name","isAdmin"),c(e,"id",t=l[1].id),e.checked=l[0],e.disabled=!0},m(r,s){P(r,e,s)},p(r,[s]){s&2&&t!==(t=r[1].id)&&c(e,"id",t),s&1&&(e.checked=r[0])},i:le,o:le,d(r){r&&i(e)}}}function Ul(l,e,t){let{value:r}=e,{row:s}=e;return l.$$set=o=>{"value"in o&&t(0,r=o.value),"row"in o&&t(1,s=o.row)},[r,s]}class Sl extends me{constructor(e){super(),he(this,e,Ul,kl,pe,{value:0,row:1})}}function Al(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Rl(l){let e,t,r;return t=new $s({props:{title:"Boolean",tabs:l[1],$$slots:{default:[Al]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","boolean")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Fl(l){return[{id:"usersAndAdmins",data:sl,columns:{isAdmin:{header:"Admin",instructions:{renderComponent:Sl},disableFiltering:!0}}},[{name:"Svelte",language:"html",code:hn},{name:"Data",language:"typescript",code:gn},{name:"IsAdmin.svelte",language:"html",code:vn}]]}class Bl extends me{constructor(e){super(),he(this,e,Fl,Rl,pe,{})}}function xl(l){let e,t;return{c(){e=u("a"),t=D(l[0]),this.h()},l(r){e=d(r,"A",{href:!0});var s=f(e);t=E(s,l[0]),s.forEach(i),this.h()},h(){c(e,"href",l[0])},m(r,s){P(r,e,s),n(e,t)},p(r,[s]){s&1&&dt(t,r[0]),s&1&&c(e,"href",r[0])},i:le,o:le,d(r){r&&i(e)}}}function Gl(l,e,t){let{value:r}=e;return l.$$set=s=>{"value"in s&&t(0,r=s.value)},[r]}class Ol extends me{constructor(e){super(),he(this,e,Gl,xl,pe,{value:0})}}function Ll(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Nl(l){let e,t,r;return t=new $s({props:{title:"URLs",tabs:l[1],$$slots:{default:[Ll]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","URLs")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Ml(l){return[{id:"websites",data:rl,columns:{URL:{header:"URL",instructions:{renderComponent:Ol,toFilterableValueFn:r=>r.toString()},disableSorting:!0}}},[{name:"Svelte",language:"html",code:fn},{name:"Data",language:"typescript",code:pn},{name:"URLCell.svelte",language:"html",code:mn}]]}class Pl extends me{constructor(e){super(),he(this,e,Ml,Nl,pe,{})}}function Hl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function jl(l){let e,t,r;return t=new os({props:{title:"Missing values",svelte:un,data:dn,$$slots:{default:[Hl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","combination")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function zl(l){return[{id:"usersMissingIDs",data:nl,columns:{id:{header:"ID",instructions:{toStringFn:t=>t in lr?lr[t]:t.toString()}}}}]}class Wl extends me{constructor(e){super(),he(this,e,zl,jl,pe,{})}}function Jl(l){let e,t;return e=new Zt({props:{config:l[0]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p:le,i(r){t||(x(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function ql(l){let e,t,r;return t=new os({props:{title:"Table component",svelte:en,data:gr,$$slots:{default:[Jl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","groups")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Yl(l){return[{id:"userGroups",data:vr,height:300,columns:{id:{header:"ID"}}}]}class Kl extends me{constructor(e){super(),he(this,e,Yl,ql,pe,{})}}function fr(l,e,t){const r=l.slice();return r[1]=e[t],r}function pr(l){let e,t,r=l[1].name+"",s,o,a,m,p=l[1].group+"",h,b;return{c(){e=u("tr"),t=u("td"),s=D(r),o=C(),a=u("td"),m=u("div"),h=D(p),b=C()},l(v){e=d(v,"TR",{});var _=f(e);t=d(_,"TD",{});var T=f(t);s=E(T,r),T.forEach(i),o=y(_),a=d(_,"TD",{});var I=f(a);m=d(I,"DIV",{});var S=f(m);h=E(S,p),S.forEach(i),I.forEach(i),b=y(_),_.forEach(i)},m(v,_){P(v,e,_),n(e,t),n(t,s),n(e,o),n(e,a),n(a,m),n(m,h),n(e,b)},p(v,_){_&1&&r!==(r=v[1].name+"")&&dt(s,r),_&1&&p!==(p=v[1].group+"")&&dt(h,p)},d(v){v&&i(e)}}}function Xl(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S=l[0],U=[];for(let g=0;g<S.length;g+=1)U[g]=pr(fr(l,S,g));return{c(){e=u("div"),t=D("Used classes are important to include for the table to have a uniform look."),r=C(),s=u("div"),o=u("table"),a=u("thead"),m=u("tr"),p=u("th"),h=D("Group"),b=C(),v=u("th"),_=D("Description"),T=C(),I=u("tbody");for(let g=0;g<U.length;g+=1)U[g].c();this.h()},l(g){e=d(g,"DIV",{class:!0});var V=f(e);t=E(V,"Used classes are important to include for the table to have a uniform look."),V.forEach(i),r=y(g),s=d(g,"DIV",{class:!0});var w=f(s);o=d(w,"TABLE",{class:!0});var $=f(o);a=d($,"THEAD",{});var A=f(a);m=d(A,"TR",{class:!0});var N=f(m);p=d(N,"TH",{class:!0});var F=f(p);h=E(F,"Group"),F.forEach(i),b=y(N),v=d(N,"TH",{class:!0});var B=f(v);_=E(B,"Description"),B.forEach(i),N.forEach(i),A.forEach(i),T=y($),I=d($,"TBODY",{});var R=f(I);for(let G=0;G<U.length;G+=1)U[G].l(R);R.forEach(i),$.forEach(i),w.forEach(i),this.h()},h(){c(e,"class","pb-2"),c(p,"class","!p-2"),c(v,"class","!p-2"),c(m,"class","bg-primary-300"),c(o,"class","table table-compact bg-tertiary-200"),c(s,"class","table-container")},m(g,V){P(g,e,V),n(e,t),P(g,r,V),P(g,s,V),n(s,o),n(o,a),n(a,m),n(m,p),n(p,h),n(m,b),n(m,v),n(v,_),n(o,T),n(o,I);for(let w=0;w<U.length;w+=1)U[w]&&U[w].m(I,null)},p(g,V){if(V&1){S=g[0];let w;for(w=0;w<S.length;w+=1){const $=fr(g,S,w);U[w]?U[w].p($,V):(U[w]=pr($),U[w].c(),U[w].m(I,null))}for(;w<U.length;w+=1)U[w].d(1);U.length=S.length}},d(g){g&&i(e),g&&i(r),g&&i(s),ss(U,g)}}}function Zl(l){let e,t,r;return t=new os({props:{title:"Simple table without Table component",svelte:Qr,data:Es,$$slots:{default:[Xl]},$$scope:{ctx:l}}}),{c(){e=u("div"),J(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{id:!0});var o=f(e);K(t.$$.fragment,o),o.forEach(i),this.h()},h(){c(e,"id","simpleTable")},m(s,o){P(s,e,o),q(t,e,null),r=!0},p(s,[o]){const a={};o&17&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){L(t.$$.fragment,s),r=!1},d(s){s&&i(e),Y(t)}}}function Ql(l,e,t){let r;return ys(l,Ts,s=>t(0,r=s)),[r]}class eo extends me{constructor(e){super(),he(this,e,Ql,Zl,pe,{})}}function to(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H,j,X,Z,z,se;return o=new eo({}),m=new Kl({}),h=new Cl({}),S=new Dl({}),g=new pl({}),F=new Vl({}),R=new Wl({}),H=new Pl({}),X=new Bl({}),z=new Zr({}),{c(){e=u("div"),t=u("h2"),r=D("Examples"),s=C(),J(o.$$.fragment),a=C(),J(m.$$.fragment),p=C(),J(h.$$.fragment),b=C(),v=u("div"),_=u("h2"),T=D("Dispatching Actions"),I=C(),J(S.$$.fragment),U=C(),J(g.$$.fragment),V=C(),w=u("div"),$=u("h2"),A=D("Complex data types"),N=C(),J(F.$$.fragment),B=C(),J(R.$$.fragment),G=C(),J(H.$$.fragment),j=C(),J(X.$$.fragment),Z=C(),J(z.$$.fragment),this.h()},l(O){e=d(O,"DIV",{class:!0});var M=f(e);t=d(M,"H2",{});var W=f(t);r=E(W,"Examples"),W.forEach(i),s=y(M),K(o.$$.fragment,M),a=y(M),K(m.$$.fragment,M),p=y(M),K(h.$$.fragment,M),b=y(M),v=d(M,"DIV",{id:!0,class:!0});var Q=f(v);_=d(Q,"H2",{});var ce=f(_);T=E(ce,"Dispatching Actions"),ce.forEach(i),I=y(Q),K(S.$$.fragment,Q),U=y(Q),K(g.$$.fragment,Q),Q.forEach(i),V=y(M),w=d(M,"DIV",{id:!0});var oe=f(w);$=d(oe,"H2",{});var ee=f($);A=E(ee,"Complex data types"),ee.forEach(i),N=y(oe),K(F.$$.fragment,oe),B=y(oe),K(R.$$.fragment,oe),G=y(oe),K(H.$$.fragment,oe),j=y(oe),K(X.$$.fragment,oe),oe.forEach(i),M.forEach(i),Z=y(O),K(z.$$.fragment,O),this.h()},h(){c(v,"id","actionDispatchersExamples"),c(v,"class","my-20"),c(w,"id","complexTypes"),c(e,"class","grid gap-1")},m(O,M){P(O,e,M),n(e,t),n(t,r),n(e,s),q(o,e,null),n(e,a),q(m,e,null),n(e,p),q(h,e,null),n(e,b),n(e,v),n(v,_),n(_,T),n(v,I),q(S,v,null),n(v,U),q(g,v,null),n(e,V),n(e,w),n(w,$),n($,A),n(w,N),q(F,w,null),n(w,B),q(R,w,null),n(w,G),q(H,w,null),n(w,j),q(X,w,null),P(O,Z,M),q(z,O,M),se=!0},p:le,i(O){se||(x(o.$$.fragment,O),x(m.$$.fragment,O),x(h.$$.fragment,O),x(S.$$.fragment,O),x(g.$$.fragment,O),x(F.$$.fragment,O),x(R.$$.fragment,O),x(H.$$.fragment,O),x(X.$$.fragment,O),x(z.$$.fragment,O),se=!0)},o(O){L(o.$$.fragment,O),L(m.$$.fragment,O),L(h.$$.fragment,O),L(S.$$.fragment,O),L(g.$$.fragment,O),L(F.$$.fragment,O),L(R.$$.fragment,O),L(H.$$.fragment,O),L(X.$$.fragment,O),L(z.$$.fragment,O),se=!1},d(O){O&&i(e),Y(o),Y(m),Y(h),Y(S),Y(g),Y(F),Y(R),Y(H),Y(X),O&&i(Z),Y(z,O)}}}class so extends me{constructor(e){super(),he(this,e,null,to,pe,{})}}function ro(l){let e,t,r,s,o,a,m,p="(action: CustomEvent<any>) => {}",h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B,R,G,H,j,X,Z,z,se,O,M,W,Q,ce,oe,ee,Se,Fe="(obj: any) => dispatch('action', obj)",$e,He,ge,ne,k,re,xe,Ge,ve,Ze;return{c(){e=u("div"),t=u("div"),r=u("div"),s=u("h3"),o=D("on:action"),a=C(),m=u("h3"),h=D(p),b=C(),v=u("p"),_=D("To dispatch actions and listen to dispatchers you need to create a table with your own "),T=u("code"),I=D("optionsComponent"),S=D(" component."),U=C(),g=u("div"),V=u("p"),w=D("Every "),$=u("code"),A=D("optionsComponent"),N=D(" will get 2 props:"),F=C(),B=u("div"),R=u("div"),G=u("div"),H=D("row:"),j=C(),X=u("div"),Z=D("Object"),z=C(),se=u("p"),O=D("The current row in the table. In other words, a single object from the data store."),M=C(),W=u("div"),Q=u("div"),ce=u("div"),oe=D("dispatchFn:"),ee=C(),Se=u("div"),$e=D(Fe),He=C(),ge=u("p"),ne=D("A function that takes an object and dispatches an action with the name "),k=u("code"),re=D("action"),xe=D(`. The passed object is accessible by the parent component through the
					`),Ge=u("code"),ve=D("action.detail"),Ze=D(" property."),this.h()},l(je){e=d(je,"DIV",{class:!0});var ae=f(e);t=d(ae,"DIV",{class:!0,id:!0});var be=f(t);r=d(be,"DIV",{class:!0});var Oe=f(r);s=d(Oe,"H3",{class:!0});var _e=f(s);o=E(_e,"on:action"),_e.forEach(i),a=y(Oe),m=d(Oe,"H3",{class:!0});var De=f(m);h=E(De,p),De.forEach(i),Oe.forEach(i),b=y(be),v=d(be,"P",{class:!0});var Ee=f(v);_=E(Ee,"To dispatch actions and listen to dispatchers you need to create a table with your own "),T=d(Ee,"CODE",{class:!0});var tt=f(T);I=E(tt,"optionsComponent"),tt.forEach(i),S=E(Ee," component."),Ee.forEach(i),U=y(be),g=d(be,"DIV",{class:!0});var Le=f(g);V=d(Le,"P",{class:!0});var we=f(V);w=E(we,"Every "),$=d(we,"CODE",{class:!0});var ke=f($);A=E(ke,"optionsComponent"),ke.forEach(i),N=E(we," will get 2 props:"),we.forEach(i),F=y(Le),B=d(Le,"DIV",{class:!0});var Ye=f(B);R=d(Ye,"DIV",{class:!0});var Ne=f(R);G=d(Ne,"DIV",{class:!0});var Ie=f(G);H=E(Ie,"row:"),Ie.forEach(i),j=y(Ne),X=d(Ne,"DIV",{class:!0});var st=f(X);Z=E(st,"Object"),st.forEach(i),Ne.forEach(i),z=y(Ye),se=d(Ye,"P",{class:!0});var ze=f(se);O=E(ze,"The current row in the table. In other words, a single object from the data store."),ze.forEach(i),Ye.forEach(i),M=y(Le),W=d(Le,"DIV",{class:!0});var ue=f(W);Q=d(ue,"DIV",{class:!0});var de=f(Q);ce=d(de,"DIV",{class:!0});var Ae=f(ce);oe=E(Ae,"dispatchFn:"),Ae.forEach(i),ee=y(de),Se=d(de,"DIV",{class:!0});var Be=f(Se);$e=E(Be,Fe),Be.forEach(i),de.forEach(i),He=y(ue),ge=d(ue,"P",{class:!0});var Ce=f(ge);ne=E(Ce,"A function that takes an object and dispatches an action with the name "),k=d(Ce,"CODE",{class:!0});var ye=f(k);re=E(ye,"action"),ye.forEach(i),xe=E(Ce,`. The passed object is accessible by the parent component through the
					`),Ge=d(Ce,"CODE",{class:!0});var rt=f(Ge);ve=E(rt,"action.detail"),rt.forEach(i),Ze=E(Ce," property."),Ce.forEach(i),ue.forEach(i),Le.forEach(i),be.forEach(i),ae.forEach(i),this.h()},h(){c(s,"class","italic"),c(m,"class","font-semibold"),c(r,"class","flex gap-3"),c(T,"class","!text-xl"),c(v,"class","text-xl underline"),c($,"class","!text-xl"),c(V,"class","text-xl"),c(G,"class","italic"),c(X,"class","font-bold"),c(R,"class","flex gap-2"),c(se,"class","text-xl pl-10"),c(B,"class","items-center mt-2"),c(ce,"class","italic"),c(Se,"class","font-bold"),c(Q,"class","flex gap-2"),c(k,"class","!text-xl"),c(Ge,"class","!text-xl"),c(ge,"class","text-xl pl-10"),c(W,"class","items-center mt-2"),c(g,"class","mt-5"),c(t,"class","grid gap-2"),c(t,"id","actionDispatchersDocs"),c(e,"class","grid gap-5")},m(je,ae){P(je,e,ae),n(e,t),n(t,r),n(r,s),n(s,o),n(r,a),n(r,m),n(m,h),n(t,b),n(t,v),n(v,_),n(v,T),n(T,I),n(v,S),n(t,U),n(t,g),n(g,V),n(V,w),n(V,$),n($,A),n(V,N),n(g,F),n(g,B),n(B,R),n(R,G),n(G,H),n(R,j),n(R,X),n(X,Z),n(B,z),n(B,se),n(se,O),n(g,M),n(g,W),n(W,Q),n(Q,ce),n(ce,oe),n(Q,ee),n(Q,Se),n(Se,$e),n(W,He),n(W,ge),n(ge,ne),n(ge,k),n(k,re),n(ge,xe),n(ge,Ge),n(Ge,ve),n(ge,Ze)},p:le,i:le,o:le,d(je){je&&i(e)}}}class no extends me{constructor(e){super(),he(this,e,null,ro,pe,{})}}function lo(l){let e,t,r,s,o,a,m,p,h,b,v,_,T,I,S,U,g,V,w,$,A,N,F,B;return h=new In({}),v=new Un({}),T=new Rn({}),S=new xn({}),A=new no({}),F=new so({}),{c(){e=u("div"),t=u("div"),r=u("h1"),s=D("Table"),o=C(),a=u("h2"),m=D("Types"),p=C(),J(h.$$.fragment),b=C(),J(v.$$.fragment),_=C(),J(T.$$.fragment),I=C(),J(S.$$.fragment),U=C(),g=u("div"),V=u("h2"),w=D("Action Dispatchers"),$=C(),J(A.$$.fragment),N=C(),J(F.$$.fragment),this.h()},l(R){e=d(R,"DIV",{class:!0,id:!0});var G=f(e);t=d(G,"DIV",{class:!0});var H=f(t);r=d(H,"H1",{class:!0});var j=f(r);s=E(j,"Table"),j.forEach(i),o=y(H),a=d(H,"H2",{});var X=f(a);m=E(X,"Types"),X.forEach(i),p=y(H),K(h.$$.fragment,H),H.forEach(i),b=y(G),K(v.$$.fragment,G),_=y(G),K(T.$$.fragment,G),I=y(G),K(S.$$.fragment,G),U=y(G),g=d(G,"DIV",{class:!0});var Z=f(g);V=d(Z,"H2",{});var z=f(V);w=E(z,"Action Dispatchers"),z.forEach(i),$=y(Z),K(A.$$.fragment,Z),Z.forEach(i),N=y(G),K(F.$$.fragment,G),G.forEach(i),this.h()},h(){c(r,"class","font-bold !text-6xl"),c(t,"class","grid gap-5"),c(g,"class","grid gap-5"),c(e,"class","grid gap-20 p-10"),c(e,"id","toc-target-table")},m(R,G){P(R,e,G),n(e,t),n(t,r),n(r,s),n(t,o),n(t,a),n(a,m),n(t,p),q(h,t,null),n(e,b),q(v,e,null),n(e,_),q(T,e,null),n(e,I),q(S,e,null),n(e,U),n(e,g),n(g,V),n(V,w),n(g,$),q(A,g,null),n(e,N),q(F,e,null),B=!0},p:le,i(R){B||(x(h.$$.fragment,R),x(v.$$.fragment,R),x(T.$$.fragment,R),x(S.$$.fragment,R),x(A.$$.fragment,R),x(F.$$.fragment,R),B=!0)},o(R){L(h.$$.fragment,R),L(v.$$.fragment,R),L(T.$$.fragment,R),L(S.$$.fragment,R),L(A.$$.fragment,R),L(F.$$.fragment,R),B=!1},d(R){R&&i(e),Y(h),Y(v),Y(T),Y(S),Y(A),Y(F)}}}class go extends me{constructor(e){super(),he(this,e,null,lo,pe,{})}}export{go as component};
