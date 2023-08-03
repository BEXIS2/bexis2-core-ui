import{s as W,P as X,b as F,h as G}from"../chunks/Page.2ae6afa7.js";import{S as N,i as R,s as U,k as b,q as C,a as y,l as v,m as E,r as L,h as p,c as T,n as w,b as M,D as u,u as q,W as z,y as S,z as O,A as H,g as k,d as P,B as j,M as J,v as K,f as Q}from"../chunks/index.2c64a3f2.js";import{T as Y}from"../chunks/TextInput.c9abffe5.js";function Z(){return console.log("load and set apiconfig"),console.log("PROD"),W("https://dev.bexis2.uni-jena.de/","admin","123456"),{}}const ue=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));function ee(l){let e,r,t,a=l[0].name+"",s,d,m,i=l[0].message+"",_;return{c(){e=b("div"),r=b("div"),t=b("h3"),s=C(a),d=y(),m=b("p"),_=C(i),this.h()},l(c){e=v(c,"DIV",{class:!0});var f=E(e);r=v(f,"DIV",{class:!0});var g=E(r);t=v(g,"H3",{class:!0});var D=E(t);s=L(D,a),D.forEach(p),d=T(g),m=v(g,"P",{});var I=E(m);_=L(I,i),I.forEach(p),g.forEach(p),f.forEach(p),this.h()},h(){w(t,"class","h3"),w(r,"class","p-5 space-y-4"),w(e,"class","card bg-error-300 border-solid border-2 border-error-500 shadow-md max-w-md")},m(c,f){M(c,e,f),u(e,r),u(r,t),u(t,s),u(r,d),u(r,m),u(m,_)},p(c,[f]){f&1&&a!==(a=c[0].name+"")&&q(s,a),f&1&&i!==(i=c[0].message+"")&&q(_,i)},i:z,o:z,d(c){c&&p(e)}}}function te(l,e,r){let{error:t}=e;return l.$$set=a=>{"error"in a&&r(0,t=a.error)},[t]}class ae extends N{constructor(e){super(),R(this,e,te,ee,U,{error:0})}}const re={helpItems:[{id:"name",name:"Name",description:"<p>Lorem ipsum dolor sit amet,</p>",link:"https://bexis2.github.io/bexis2-core-ui/"},{id:"description",name:"Description",description:"Lorem ipsum dolor sit ame."}]};function A(l){let e,r;return e=new ae({props:{error:l[0]}}),{c(){S(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&1&&(s.error=t[0]),e.$set(s)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function se(l){let e,r,t,a,s,d,m,i,_,c,f,g,D,I,x;i=new Y({props:{id:"name",label:"name",help:!0}});let n=l[0]&&A(l);return{c(){e=b("button"),r=C("change title"),t=y(),a=b("div"),s=b("h2"),d=C("Content"),m=y(),S(i.$$.fragment),_=y(),c=b("p"),f=C("Lorem ipsum dolor sit amet, con"),g=y(),n&&n.c(),this.h()},l(o){e=v(o,"BUTTON",{class:!0});var h=E(e);r=L(h,"change title"),h.forEach(p),t=T(o),a=v(o,"DIV",{class:!0});var $=E(a);s=v($,"H2",{class:!0});var B=E(s);d=L(B,"Content"),B.forEach(p),m=T($),O(i.$$.fragment,$),_=T($),c=v($,"P",{});var V=E(c);f=L(V,"Lorem ipsum dolor sit amet, con"),V.forEach(p),g=T($),n&&n.l($),$.forEach(p),this.h()},h(){w(e,"class","btn variant-filled-error"),w(s,"class","h2"),w(a,"class","w-screen")},m(o,h){M(o,e,h),u(e,r),M(o,t,h),M(o,a,h),u(a,s),u(s,d),u(a,m),H(i,a,null),u(a,_),u(a,c),u(c,f),u(a,g),n&&n.m(a,null),D=!0,I||(x=J(e,"click",l[3]),I=!0)},p(o,h){o[0]?n?(n.p(o,h),h&1&&k(n,1)):(n=A(o),n.c(),k(n,1),n.m(a,null)):n&&(K(),P(n,1,1,()=>{n=null}),Q())},i(o){D||(k(i.$$.fragment,o),k(n),D=!0)},o(o){P(i.$$.fragment,o),P(n),D=!1},d(o){o&&p(e),o&&p(t),o&&p(a),j(i),n&&n.d(),I=!1,x()}}}function ne(l){let e,r;return e=new X({props:{title:l[1],note:"On this page you can create a dataset based on a template. please select on template and fill out the form.",links:l[2],help:!0,contentLayoutType:F.center,$$slots:{default:[se]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,[a]){const s={};a&2&&(s.title=t[1]),a&65&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function oe(l,e,r){let t=[{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}],a=re.helpItems;G.setHelpItemList(a);let s;function d(){r(0,s=new Error("test"))}d();let m="Create a Dataset";function i(){r(1,m+=Date.now())}return[s,m,t,i]}class me extends N{constructor(e){super(),R(this,e,oe,ne,U,{})}}export{me as component,ue as universal};
