import{s as Y,n as P,d as L,i as w,v as X,p as t,q as h,b as O,$ as v,e as d,a0 as C,N as j,a as G,f as Q,t as H}from"./DAJl5hrC.js";import{S as I,i as J}from"./CKbxDKv7.js";function K(a,l){l&&l!=="lg"&&l!=="sm"&&l!=="xs"?a.style.fontSize=l.replace("x","em"):a.style.fontSize=""}function V(a,l,e,c,n,m=1,o="",z=""){let r=1,g=1;n&&(n=="horizontal"?r=-1:n=="vertical"?g=-1:r=g=-1),typeof a=="string"&&(a=parseFloat(a)),typeof l=="string"&&(l=parseFloat(l)),typeof e=="string"&&(e=parseFloat(e));const _=`${l*m}${o}`,i=`${e*m}${o}`;let f=`translate(${_},${i}) scale(${r*a},${g*a})`;return c&&(f+=` rotate(${c}${z})`),f}function R(a){let l,e,c,n,m,o,z,r=a[3]&&T(a);function g(f,u){return typeof f[17][4]=="string"?Z:W}let _=g(a),i=_(a);return{c(){l=C("svg"),r&&r.c(),e=C("g"),c=C("g"),i.c(),this.h()},l(f){l=v(f,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var u=d(l);r&&r.l(u),e=v(u,"g",{transform:!0,"transform-origin":!0});var M=d(e);c=v(M,"g",{transform:!0});var y=d(c);i.l(y),y.forEach(L),M.forEach(L),u.forEach(L),this.h()},h(){t(c,"transform",a[16]),t(e,"transform",n="translate("+a[17][0]/2+" "+a[17][1]/2+")"),t(e,"transform-origin",m=a[17][0]/4+" 0"),t(l,"id",a[1]),t(l,"class",o="svelte-fa svelte-fa-base "+a[0]+" svelte-bvo74f"),t(l,"style",a[2]),t(l,"viewBox",z="0 0 "+a[17][0]+" "+a[17][1]),t(l,"aria-hidden","true"),t(l,"role","img"),t(l,"xmlns","http://www.w3.org/2000/svg"),h(l,"pulse",a[9]),h(l,"svelte-fa-size-lg",a[4]==="lg"),h(l,"svelte-fa-size-sm",a[4]==="sm"),h(l,"svelte-fa-size-xs",a[4]==="xs"),h(l,"svelte-fa-fw",a[6]),h(l,"svelte-fa-pull-left",a[7]==="left"),h(l,"svelte-fa-pull-right",a[7]==="right"),h(l,"spin",a[8])},m(f,u){w(f,l,u),r&&r.m(l,null),O(l,e),O(e,c),i.m(c,null),a[24](l)},p(f,u){f[3]?r?r.p(f,u):(r=T(f),r.c(),r.m(l,e)):r&&(r.d(1),r=null),_===(_=g(f))&&i?i.p(f,u):(i.d(1),i=_(f),i&&(i.c(),i.m(c,null))),u&65536&&t(c,"transform",f[16]),u&131072&&n!==(n="translate("+f[17][0]/2+" "+f[17][1]/2+")")&&t(e,"transform",n),u&131072&&m!==(m=f[17][0]/4+" 0")&&t(e,"transform-origin",m),u&2&&t(l,"id",f[1]),u&1&&o!==(o="svelte-fa svelte-fa-base "+f[0]+" svelte-bvo74f")&&t(l,"class",o),u&4&&t(l,"style",f[2]),u&131072&&z!==(z="0 0 "+f[17][0]+" "+f[17][1])&&t(l,"viewBox",z),u&513&&h(l,"pulse",f[9]),u&17&&h(l,"svelte-fa-size-lg",f[4]==="lg"),u&17&&h(l,"svelte-fa-size-sm",f[4]==="sm"),u&17&&h(l,"svelte-fa-size-xs",f[4]==="xs"),u&65&&h(l,"svelte-fa-fw",f[6]),u&129&&h(l,"svelte-fa-pull-left",f[7]==="left"),u&129&&h(l,"svelte-fa-pull-right",f[7]==="right"),u&257&&h(l,"spin",f[8])},d(f){f&&L(l),r&&r.d(),i.d(),a[24](null)}}}function T(a){let l,e;return{c(){l=C("title"),e=H(a[3])},l(c){l=v(c,"title",{});var n=d(l);e=Q(n,a[3]),n.forEach(L)},m(c,n){w(c,l,n),O(l,e)},p(c,n){n&8&&G(e,c[3])},d(c){c&&L(l)}}}function W(a){let l,e,c,n,m,o,z,r,g,_;return{c(){l=C("path"),o=C("path"),this.h()},l(i){l=v(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),d(l).forEach(L),o=v(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),d(o).forEach(L),this.h()},h(){t(l,"d",e=a[17][4][0]),t(l,"fill",c=a[11]||a[5]||"currentColor"),t(l,"fill-opacity",n=a[14]!=!1?a[12]:a[13]),t(l,"transform",m="translate("+a[17][0]/-2+" "+a[17][1]/-2+")"),t(o,"d",z=a[17][4][1]),t(o,"fill",r=a[10]||a[5]||"currentColor"),t(o,"fill-opacity",g=a[14]!=!1?a[13]:a[12]),t(o,"transform",_="translate("+a[17][0]/-2+" "+a[17][1]/-2+")")},m(i,f){w(i,l,f),w(i,o,f)},p(i,f){f&131072&&e!==(e=i[17][4][0])&&t(l,"d",e),f&2080&&c!==(c=i[11]||i[5]||"currentColor")&&t(l,"fill",c),f&28672&&n!==(n=i[14]!=!1?i[12]:i[13])&&t(l,"fill-opacity",n),f&131072&&m!==(m="translate("+i[17][0]/-2+" "+i[17][1]/-2+")")&&t(l,"transform",m),f&131072&&z!==(z=i[17][4][1])&&t(o,"d",z),f&1056&&r!==(r=i[10]||i[5]||"currentColor")&&t(o,"fill",r),f&28672&&g!==(g=i[14]!=!1?i[13]:i[12])&&t(o,"fill-opacity",g),f&131072&&_!==(_="translate("+i[17][0]/-2+" "+i[17][1]/-2+")")&&t(o,"transform",_)},d(i){i&&(L(l),L(o))}}}function Z(a){let l,e,c,n;return{c(){l=C("path"),this.h()},l(m){l=v(m,"path",{d:!0,fill:!0,transform:!0}),d(l).forEach(L),this.h()},h(){t(l,"d",e=a[17][4]),t(l,"fill",c=a[5]||a[10]||"currentColor"),t(l,"transform",n="translate("+a[17][0]/-2+" "+a[17][1]/-2+")")},m(m,o){w(m,l,o)},p(m,o){o&131072&&e!==(e=m[17][4])&&t(l,"d",e),o&1056&&c!==(c=m[5]||m[10]||"currentColor")&&t(l,"fill",c),o&131072&&n!==(n="translate("+m[17][0]/-2+" "+m[17][1]/-2+")")&&t(l,"transform",n)},d(m){m&&L(l)}}}function x(a){let l,e=a[17][4]&&R(a);return{c(){e&&e.c(),l=X()},l(c){e&&e.l(c),l=X()},m(c,n){e&&e.m(c,n),w(c,l,n)},p(c,[n]){c[17][4]?e?e.p(c,n):(e=R(c),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:P,o:P,d(c){c&&L(l),e&&e.d(c)}}}function $(a,l,e){let c,n,{class:m=void 0}=l,{id:o=void 0}=l,{style:z=void 0}=l,{icon:r}=l,{title:g=void 0}=l,{size:_=void 0}=l,{color:i=void 0}=l,{fw:f=!1}=l,{pull:u=void 0}=l,{scale:M=1}=l,{translateX:y=0}=l,{translateY:p=0}=l,{rotate:N=void 0}=l,{flip:k=void 0}=l,{spin:E=!1}=l,{pulse:F=!1}=l,{primaryColor:S=""}=l,{secondaryColor:q=""}=l,{primaryOpacity:A=1}=l,{secondaryOpacity:B=.4}=l,{swapOpacity:D=!1}=l,b;function U(s){j[s?"unshift":"push"](()=>{b=s,e(15,b)})}return a.$$set=s=>{"class"in s&&e(0,m=s.class),"id"in s&&e(1,o=s.id),"style"in s&&e(2,z=s.style),"icon"in s&&e(18,r=s.icon),"title"in s&&e(3,g=s.title),"size"in s&&e(4,_=s.size),"color"in s&&e(5,i=s.color),"fw"in s&&e(6,f=s.fw),"pull"in s&&e(7,u=s.pull),"scale"in s&&e(19,M=s.scale),"translateX"in s&&e(20,y=s.translateX),"translateY"in s&&e(21,p=s.translateY),"rotate"in s&&e(22,N=s.rotate),"flip"in s&&e(23,k=s.flip),"spin"in s&&e(8,E=s.spin),"pulse"in s&&e(9,F=s.pulse),"primaryColor"in s&&e(10,S=s.primaryColor),"secondaryColor"in s&&e(11,q=s.secondaryColor),"primaryOpacity"in s&&e(12,A=s.primaryOpacity),"secondaryOpacity"in s&&e(13,B=s.secondaryOpacity),"swapOpacity"in s&&e(14,D=s.swapOpacity)},a.$$.update=()=>{a.$$.dirty&32784&&b&&_&&K(b,_),a.$$.dirty&262144&&e(17,c=r&&r.icon||[0,0,"",[],""]),a.$$.dirty&16252928&&e(16,n=V(M,y,p,N,k,512))},[m,o,z,g,_,i,f,u,E,F,S,q,A,B,D,b,n,c,r,M,y,p,N,k,U]}class i2 extends I{constructor(l){super(),J(this,l,$,x,Y,{class:0,id:1,style:2,icon:18,title:3,size:4,color:5,fw:6,pull:7,scale:19,translateX:20,translateY:21,rotate:22,flip:23,spin:8,pulse:9,primaryColor:10,secondaryColor:11,primaryOpacity:12,secondaryOpacity:13,swapOpacity:14})}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const t2={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"]},n2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},o2={prefix:"fas",iconName:"compress",icon:[448,512,[],"f066","M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"]},l2={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},r2=l2,m2={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},e2={prefix:"fas",iconName:"file-arrow-up",icon:[384,512,["file-upload"],"f574","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"]},u2=e2,_2={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},h2={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},z2={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},g2={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},a2={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},L2=a2,v2={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},d2={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},f2={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},C2=f2,M2={prefix:"fas",iconName:"cable-car",icon:[512,512,[128673,57551,"tram"],"f7da","M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 56a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 288c0-35.3 28.7-64 64-64l136 0 0-66.5-203.1 42c-13 2.7-25.7-5.7-28.4-18.6s5.7-25.7 18.6-28.4l232-48 232-48c13-2.7 25.7 5.7 28.4 18.6s-5.7 25.7-18.6 28.4L280 147.5l0 76.5 136 0c35.3 0 64 28.7 64 64l0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160zm64 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0zm112 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0z"]},y2={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},w2={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},b2={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},p2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},N2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},k2={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},O2={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};export{i2 as F,O2 as a,L2 as b,v2 as c,g2 as d,p2 as e,N2 as f,z2 as g,m2 as h,w2 as i,t2 as j,u2 as k,r2 as l,M2 as m,C2 as n,n2 as o,h2 as p,k2 as q,d2 as r,_2 as s,b2 as t,o2 as u,y2 as v};
