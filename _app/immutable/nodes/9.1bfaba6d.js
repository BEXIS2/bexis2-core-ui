import{S as ro,i as no,s as lo,k as a,a as o,l as r,m as n,h as e,c as s,n as $,b as mt,F as t,Z as Va,a0 as oo,y as m,z as g,A as h,g as p,d as v,B as b,q as E,r as w}from"../chunks/index.db86b18d.js";import{P as so}from"../chunks/Page.276ebb8c.js";import{F as C,f as kn,a as Fn,b as In,c as Pn,d as Ve,e as xn,g as Rn}from"../chunks/index.857da8e9.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.0c06acbc.js";import{C as N}from"../chunks/store.59b12039.js";import{S as fo}from"../chunks/Spinner.25b06136.js";/* empty css                                                     */import"../chunks/eslint4b.es.5cc91896.js";function Wl(O,f,T){const c=O.slice();return c[2]=f[T],c}function to(O,f,T){const c=O.slice();return c[2]=f[T],c}function eo(O){let f,T;return{c(){f=a("td"),T=a("div"),this.h()},l(c){f=r(c,"TD",{class:!0});var i=n(f);T=r(i,"DIV",{class:!0}),n(T).forEach(e),i.forEach(e),this.h()},h(){$(T,"class","placeholder animate-pulse h-9 w-full"),$(f,"class","p-3")},m(c,i){mt(c,f,i),t(f,T)},p:Va,d(c){c&&e(f)}}}function ao(O){let f,T,c=Array(O[0]),i=[];for(let u=0;u<c.length;u+=1)i[u]=eo(to(O,c,u));return{c(){f=a("tr");for(let u=0;u<i.length;u+=1)i[u].c();T=o(),this.h()},l(u){f=r(u,"TR",{class:!0});var _=n(f);for(let d=0;d<i.length;d+=1)i[d].l(_);T=s(_),_.forEach(e),this.h()},h(){$(f,"class","w-full")},m(u,_){mt(u,f,_);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(f,null);t(f,T)},p(u,_){if(_&1){c=Array(u[0]);let d;for(d=0;d<c.length;d+=1){const U=to(u,c,d);i[d]?i[d].p(U,_):(i[d]=eo(),i[d].c(),i[d].m(f,T))}for(;d<i.length;d+=1)i[d].d(1);i.length=c.length}},d(u){u&&e(f),oo(i,u)}}}function co(O){let f,T,c,i,u=Array(O[1]),_=[];for(let d=0;d<u.length;d+=1)_[d]=ao(Wl(O,u,d));return{c(){f=a("div"),T=o(),c=a("div"),i=a("table");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){f=r(d,"DIV",{class:!0}),n(f).forEach(e),T=s(d),c=r(d,"DIV",{class:!0});var U=n(c);i=r(U,"TABLE",{class:!0});var y=n(i);for(let j=0;j<_.length;j+=1)_[j].l(y);y.forEach(e),U.forEach(e),this.h()},h(){$(f,"class","placeholder animate-pulse w-full h-10 sp"),$(i,"class","table table-compact w-full"),$(c,"class","table-container w-full")},m(d,U){mt(d,f,U),mt(d,T,U),mt(d,c,U),t(c,i);for(let y=0;y<_.length;y+=1)_[y]&&_[y].m(i,null)},p(d,[U]){if(U&3){u=Array(d[1]);let y;for(y=0;y<u.length;y+=1){const j=Wl(d,u,y);_[y]?_[y].p(j,U):(_[y]=ao(j),_[y].c(),_[y].m(i,null))}for(;y<_.length;y+=1)_[y].d(1);_.length=u.length}},i:Va,o:Va,d(d){d&&e(f),d&&e(T),d&&e(c),oo(_,d)}}}function io(O,f,T){let{cols:c=1}=f,{rows:i=10}=f;return O.$$set=u=>{"cols"in u&&T(0,c=u.cols),"rows"in u&&T(1,i=u.rows)},[c,i]}class $o extends ro{constructor(f){super(),no(this,f,io,co,lo,{cols:0,rows:1})}}function uo(O){let f,T,c,i,u,_,d,U,y,j,Ae,Aa,La,Le,Ha,ja,He,qa,za,D,k,je,Xa,Ya,qe,Za,Ga,z,ne,gt,Ja,le,ht,Ka,oe,pt,Ma,ze,vt,Qa,F,Xe,Wa,tr,Ye,er,ar,X,se,bt,rr,de,_t,nr,fe,Tt,lr,Ze,Et,or,I,Ge,sr,dr,Je,fr,cr,Y,ce,wt,ir,ie,Dt,$r,$e,Bt,ur,Ke,yt,mr,P,Me,gr,hr,Qe,pr,vr,Z,ue,Ct,br,me,Ot,_r,ge,Ut,Tr,We,Nt,Er,x,ta,wr,Dr,ea,Br,yr,G,he,kt,Cr,pe,Ft,Or,ve,It,Ur,aa,Pt,Nr,R,ra,kr,Fr,na,Ir,Pr,J,be,xt,xr,_e,Rt,Rr,Te,St,Sr,la,Vt,Vr,S,oa,Ar,Lr,sa,Hr,jr,K,Ee,At,qr,we,Lt,zr,De,Ht,Xr,da,jt,Yr,V,fa,Zr,Gr,ca,Jr,Kr,M,qt,zt,Mr,Xt,Yt,Qr,Zt,Gt,Wr,ia,Jt,tn,A,$a,en,an,ua,rn,nn,ma,ga,Kt,ln,Mt,Qt,on,Wt,sn,L,ha,dn,fn,pa,cn,$n,Na,un,Be,te,mn,va,ye,ba,Ce,W,_a,gn,q,Ta,hn,Ea,pn,wa,vn,H,Da,bn,_n,Ba,Tn,En,ka,wn,tt,ee,Dn,ae,Bn,ya,et,Q,yn,Ca,Cn,On,Oa,Un,Nn,re,Fa;return gt=new C({props:{icon:kn}}),ht=new C({props:{icon:kn}}),pt=new C({props:{icon:kn}}),vt=new N({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faCheck}></Fa></button>'}}),bt=new C({props:{icon:Fn}}),_t=new C({props:{icon:Fn}}),Tt=new C({props:{icon:Fn}}),Et=new N({props:{language:"html",code:'<button class="btn variant-filled-warning"><Fa icon={faXmark}></Fa></button>'}}),wt=new C({props:{icon:In}}),Dt=new C({props:{icon:In}}),Bt=new C({props:{icon:In}}),yt=new N({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faSave}></Fa></button>'}}),Ct=new C({props:{icon:Pn}}),Ot=new C({props:{icon:Pn}}),Ut=new C({props:{icon:Pn}}),Nt=new N({props:{language:"html",code:'<button class="btn variant-filled-error"><Fa icon={faTrash}></Fa></button>'}}),kt=new C({props:{icon:Ve}}),Ft=new C({props:{icon:Ve}}),It=new C({props:{icon:Ve}}),Pt=new N({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>'}}),xt=new C({props:{icon:xn}}),Rt=new C({props:{icon:xn}}),St=new C({props:{icon:xn}}),Vt=new N({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>'}}),At=new C({props:{icon:Rn}}),Lt=new C({props:{icon:Rn}}),Ht=new C({props:{icon:Rn}}),jt=new N({props:{language:"html",code:'<button class="btn variant-filled-secondary"><Fa icon={faEye}></Fa></button>'}}),zt=new C({props:{icon:Ve}}),Yt=new C({props:{icon:Ve}}),Gt=new C({props:{icon:Ve}}),Jt=new N({props:{language:"html",code:'<button class="btn variant-filled-secondary" disabled><Fa icon={faEdit}></Fa></button>'}}),Kt=new fo({props:{label:"...loading"}}),Qt=new N({props:{class:"my-2",language:"js",code:"import Spinner from '@bexis2/bexis2-core-ui';"}}),Wt=new N({props:{class:"my-2",language:"html",code:'<Spinner label="...loading"/>'}}),te=new N({props:{language:"html",code:`<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="placeholder" />
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</div>
</section>`}}),ee=new N({props:{class:"my-2",language:"js",code:"import TablePlaceholder from '@bexis2/bexis2-core-ui';"}}),ae=new N({props:{class:"my-2",language:"html",code:"<TablePlaceholder cols={2} rows={5}/>"}}),re=new $o({props:{cols:2,rows:5}}),{c(){f=a("h2"),T=E("How to handle Actions"),c=o(),i=a("div"),u=a("table"),_=a("thead"),d=a("tr"),U=a("th"),y=E("Function"),j=o(),Ae=a("th"),Aa=E("UI Component"),La=o(),Le=a("th"),Ha=E("Example"),ja=o(),He=a("th"),qa=E("Code"),za=o(),D=a("tbody"),k=a("tr"),je=a("td"),Xa=E("Confirm"),Ya=o(),qe=a("td"),Za=E("Button / Chip / Badge"),Ga=o(),z=a("td"),ne=a("button"),m(gt.$$.fragment),Ja=o(),le=a("button"),m(ht.$$.fragment),Ka=o(),oe=a("button"),m(pt.$$.fragment),Ma=o(),ze=a("td"),m(vt.$$.fragment),Qa=o(),F=a("tr"),Xe=a("td"),Wa=E("Cancel"),tr=o(),Ye=a("td"),er=E("Button / Chip / Badge"),ar=o(),X=a("td"),se=a("button"),m(bt.$$.fragment),rr=o(),de=a("button"),m(_t.$$.fragment),nr=o(),fe=a("button"),m(Tt.$$.fragment),lr=o(),Ze=a("td"),m(Et.$$.fragment),or=o(),I=a("tr"),Ge=a("td"),sr=E("Save"),dr=o(),Je=a("td"),fr=E("Button / Chip / Badge"),cr=o(),Y=a("td"),ce=a("button"),m(wt.$$.fragment),ir=o(),ie=a("button"),m(Dt.$$.fragment),$r=o(),$e=a("button"),m(Bt.$$.fragment),ur=o(),Ke=a("td"),m(yt.$$.fragment),mr=o(),P=a("tr"),Me=a("td"),gr=E("Delete"),hr=o(),Qe=a("td"),pr=E("Button / Chip / Badge"),vr=o(),Z=a("td"),ue=a("button"),m(Ct.$$.fragment),br=o(),me=a("button"),m(Ot.$$.fragment),_r=o(),ge=a("button"),m(Ut.$$.fragment),Tr=o(),We=a("td"),m(Nt.$$.fragment),Er=o(),x=a("tr"),ta=a("td"),wr=E("Edit"),Dr=o(),ea=a("td"),Br=E("Button / Chip / Badge"),yr=o(),G=a("td"),he=a("button"),m(kt.$$.fragment),Cr=o(),pe=a("button"),m(Ft.$$.fragment),Or=o(),ve=a("button"),m(It.$$.fragment),Ur=o(),aa=a("td"),m(Pt.$$.fragment),Nr=o(),R=a("tr"),ra=a("td"),kr=E("Create"),Fr=o(),na=a("td"),Ir=E("Button / Chip / Badge"),Pr=o(),J=a("td"),be=a("button"),m(xt.$$.fragment),xr=o(),_e=a("button"),m(Rt.$$.fragment),Rr=o(),Te=a("button"),m(St.$$.fragment),Sr=o(),la=a("td"),m(Vt.$$.fragment),Vr=o(),S=a("tr"),oa=a("td"),Ar=E("Show"),Lr=o(),sa=a("td"),Hr=E("Button / Chip / Badge"),jr=o(),K=a("td"),Ee=a("button"),m(At.$$.fragment),qr=o(),we=a("button"),m(Lt.$$.fragment),zr=o(),De=a("button"),m(Ht.$$.fragment),Xr=o(),da=a("td"),m(jt.$$.fragment),Yr=o(),V=a("tr"),fa=a("td"),Zr=E("Disabled"),Gr=o(),ca=a("td"),Jr=E("Button"),Kr=o(),M=a("td"),qt=a("button"),m(zt.$$.fragment),Mr=o(),Xt=a("button"),m(Yt.$$.fragment),Qr=o(),Zt=a("button"),m(Gt.$$.fragment),Wr=o(),ia=a("td"),m(Jt.$$.fragment),tn=o(),A=a("tr"),$a=a("td"),en=E("Loading - 1"),an=o(),ua=a("td"),rn=E("Spinner"),nn=o(),ma=a("td"),ga=a("div"),m(Kt.$$.fragment),ln=o(),Mt=a("td"),m(Qt.$$.fragment),on=o(),m(Wt.$$.fragment),sn=o(),L=a("tr"),ha=a("td"),dn=E("Loading - 1"),fn=o(),pa=a("td"),cn=E("Placeholder"),$n=o(),Na=a("td"),un=o(),Be=a("td"),m(te.$$.fragment),mn=o(),va=a("tr"),ye=a("td"),ba=a("div"),Ce=a("section"),W=a("div"),_a=a("div"),gn=o(),q=a("div"),Ta=a("div"),hn=o(),Ea=a("div"),pn=o(),wa=a("div"),vn=o(),H=a("tr"),Da=a("td"),bn=E("Loading - 1"),_n=o(),Ba=a("td"),Tn=E("Table Placeholder"),En=o(),ka=a("td"),wn=o(),tt=a("td"),m(ee.$$.fragment),Dn=o(),m(ae.$$.fragment),Bn=o(),ya=a("tr"),et=a("td"),Q=a("p"),yn=E(`Parameters
							`),Ca=a("li"),Cn=E("cols: number of columns default is 1"),On=o(),Oa=a("li"),Un=E("rows: number of rows default is 10"),Nn=o(),m(re.$$.fragment),this.h()},l(l){f=r(l,"H2",{class:!0});var Oe=n(f);T=w(Oe,"How to handle Actions"),Oe.forEach(e),c=s(l),i=r(l,"DIV",{class:!0});var Sn=n(i);u=r(Sn,"TABLE",{class:!0});var Ia=n(u);_=r(Ia,"THEAD",{});var Vn=n(_);d=r(Vn,"TR",{class:!0});var at=n(d);U=r(at,"TH",{});var An=n(U);y=w(An,"Function"),An.forEach(e),j=s(at),Ae=r(at,"TH",{});var Ln=n(Ae);Aa=w(Ln,"UI Component"),Ln.forEach(e),La=s(at),Le=r(at,"TH",{});var Hn=n(Le);Ha=w(Hn,"Example"),Hn.forEach(e),ja=s(at),He=r(at,"TH",{});var jn=n(He);qa=w(jn,"Code"),jn.forEach(e),at.forEach(e),Vn.forEach(e),za=s(Ia),D=r(Ia,"TBODY",{});var B=n(D);k=r(B,"TR",{});var rt=n(k);je=r(rt,"TD",{});var qn=n(je);Xa=w(qn,"Confirm"),qn.forEach(e),Ya=s(rt),qe=r(rt,"TD",{});var zn=n(qe);Za=w(zn,"Button / Chip / Badge"),zn.forEach(e),Ga=s(rt),z=r(rt,"TD",{});var Ue=n(z);ne=r(Ue,"BUTTON",{class:!0});var Xn=n(ne);g(gt.$$.fragment,Xn),Xn.forEach(e),Ja=s(Ue),le=r(Ue,"BUTTON",{class:!0});var Yn=n(le);g(ht.$$.fragment,Yn),Yn.forEach(e),Ka=s(Ue),oe=r(Ue,"BUTTON",{class:!0});var Zn=n(oe);g(pt.$$.fragment,Zn),Zn.forEach(e),Ue.forEach(e),Ma=s(rt),ze=r(rt,"TD",{});var Gn=n(ze);g(vt.$$.fragment,Gn),Gn.forEach(e),rt.forEach(e),Qa=s(B),F=r(B,"TR",{});var nt=n(F);Xe=r(nt,"TD",{});var Jn=n(Xe);Wa=w(Jn,"Cancel"),Jn.forEach(e),tr=s(nt),Ye=r(nt,"TD",{});var Kn=n(Ye);er=w(Kn,"Button / Chip / Badge"),Kn.forEach(e),ar=s(nt),X=r(nt,"TD",{});var Ne=n(X);se=r(Ne,"BUTTON",{class:!0});var Mn=n(se);g(bt.$$.fragment,Mn),Mn.forEach(e),rr=s(Ne),de=r(Ne,"BUTTON",{class:!0});var Qn=n(de);g(_t.$$.fragment,Qn),Qn.forEach(e),nr=s(Ne),fe=r(Ne,"BUTTON",{class:!0});var Wn=n(fe);g(Tt.$$.fragment,Wn),Wn.forEach(e),Ne.forEach(e),lr=s(nt),Ze=r(nt,"TD",{});var tl=n(Ze);g(Et.$$.fragment,tl),tl.forEach(e),nt.forEach(e),or=s(B),I=r(B,"TR",{});var lt=n(I);Ge=r(lt,"TD",{});var el=n(Ge);sr=w(el,"Save"),el.forEach(e),dr=s(lt),Je=r(lt,"TD",{});var al=n(Je);fr=w(al,"Button / Chip / Badge"),al.forEach(e),cr=s(lt),Y=r(lt,"TD",{});var ke=n(Y);ce=r(ke,"BUTTON",{class:!0});var rl=n(ce);g(wt.$$.fragment,rl),rl.forEach(e),ir=s(ke),ie=r(ke,"BUTTON",{class:!0});var nl=n(ie);g(Dt.$$.fragment,nl),nl.forEach(e),$r=s(ke),$e=r(ke,"BUTTON",{class:!0});var ll=n($e);g(Bt.$$.fragment,ll),ll.forEach(e),ke.forEach(e),ur=s(lt),Ke=r(lt,"TD",{});var ol=n(Ke);g(yt.$$.fragment,ol),ol.forEach(e),lt.forEach(e),mr=s(B),P=r(B,"TR",{});var ot=n(P);Me=r(ot,"TD",{});var sl=n(Me);gr=w(sl,"Delete"),sl.forEach(e),hr=s(ot),Qe=r(ot,"TD",{});var dl=n(Qe);pr=w(dl,"Button / Chip / Badge"),dl.forEach(e),vr=s(ot),Z=r(ot,"TD",{});var Fe=n(Z);ue=r(Fe,"BUTTON",{class:!0});var fl=n(ue);g(Ct.$$.fragment,fl),fl.forEach(e),br=s(Fe),me=r(Fe,"BUTTON",{class:!0});var cl=n(me);g(Ot.$$.fragment,cl),cl.forEach(e),_r=s(Fe),ge=r(Fe,"BUTTON",{class:!0});var il=n(ge);g(Ut.$$.fragment,il),il.forEach(e),Fe.forEach(e),Tr=s(ot),We=r(ot,"TD",{});var $l=n(We);g(Nt.$$.fragment,$l),$l.forEach(e),ot.forEach(e),Er=s(B),x=r(B,"TR",{});var st=n(x);ta=r(st,"TD",{});var ul=n(ta);wr=w(ul,"Edit"),ul.forEach(e),Dr=s(st),ea=r(st,"TD",{});var ml=n(ea);Br=w(ml,"Button / Chip / Badge"),ml.forEach(e),yr=s(st),G=r(st,"TD",{});var Ie=n(G);he=r(Ie,"BUTTON",{class:!0});var gl=n(he);g(kt.$$.fragment,gl),gl.forEach(e),Cr=s(Ie),pe=r(Ie,"BUTTON",{class:!0});var hl=n(pe);g(Ft.$$.fragment,hl),hl.forEach(e),Or=s(Ie),ve=r(Ie,"BUTTON",{class:!0});var pl=n(ve);g(It.$$.fragment,pl),pl.forEach(e),Ie.forEach(e),Ur=s(st),aa=r(st,"TD",{});var vl=n(aa);g(Pt.$$.fragment,vl),vl.forEach(e),st.forEach(e),Nr=s(B),R=r(B,"TR",{});var dt=n(R);ra=r(dt,"TD",{});var bl=n(ra);kr=w(bl,"Create"),bl.forEach(e),Fr=s(dt),na=r(dt,"TD",{});var _l=n(na);Ir=w(_l,"Button / Chip / Badge"),_l.forEach(e),Pr=s(dt),J=r(dt,"TD",{});var Pe=n(J);be=r(Pe,"BUTTON",{class:!0});var Tl=n(be);g(xt.$$.fragment,Tl),Tl.forEach(e),xr=s(Pe),_e=r(Pe,"BUTTON",{class:!0});var El=n(_e);g(Rt.$$.fragment,El),El.forEach(e),Rr=s(Pe),Te=r(Pe,"BUTTON",{class:!0});var wl=n(Te);g(St.$$.fragment,wl),wl.forEach(e),Pe.forEach(e),Sr=s(dt),la=r(dt,"TD",{});var Dl=n(la);g(Vt.$$.fragment,Dl),Dl.forEach(e),dt.forEach(e),Vr=s(B),S=r(B,"TR",{});var ft=n(S);oa=r(ft,"TD",{});var Bl=n(oa);Ar=w(Bl,"Show"),Bl.forEach(e),Lr=s(ft),sa=r(ft,"TD",{});var yl=n(sa);Hr=w(yl,"Button / Chip / Badge"),yl.forEach(e),jr=s(ft),K=r(ft,"TD",{});var xe=n(K);Ee=r(xe,"BUTTON",{class:!0});var Cl=n(Ee);g(At.$$.fragment,Cl),Cl.forEach(e),qr=s(xe),we=r(xe,"BUTTON",{class:!0});var Ol=n(we);g(Lt.$$.fragment,Ol),Ol.forEach(e),zr=s(xe),De=r(xe,"BUTTON",{class:!0});var Ul=n(De);g(Ht.$$.fragment,Ul),Ul.forEach(e),xe.forEach(e),Xr=s(ft),da=r(ft,"TD",{});var Nl=n(da);g(jt.$$.fragment,Nl),Nl.forEach(e),ft.forEach(e),Yr=s(B),V=r(B,"TR",{});var ct=n(V);fa=r(ct,"TD",{});var kl=n(fa);Zr=w(kl,"Disabled"),kl.forEach(e),Gr=s(ct),ca=r(ct,"TD",{});var Fl=n(ca);Jr=w(Fl,"Button"),Fl.forEach(e),Kr=s(ct),M=r(ct,"TD",{});var Re=n(M);qt=r(Re,"BUTTON",{class:!0});var Il=n(qt);g(zt.$$.fragment,Il),Il.forEach(e),Mr=s(Re),Xt=r(Re,"BUTTON",{class:!0});var Pl=n(Xt);g(Yt.$$.fragment,Pl),Pl.forEach(e),Qr=s(Re),Zt=r(Re,"BUTTON",{class:!0});var xl=n(Zt);g(Gt.$$.fragment,xl),xl.forEach(e),Re.forEach(e),Wr=s(ct),ia=r(ct,"TD",{});var Rl=n(ia);g(Jt.$$.fragment,Rl),Rl.forEach(e),ct.forEach(e),tn=s(B),A=r(B,"TR",{});var it=n(A);$a=r(it,"TD",{});var Sl=n($a);en=w(Sl,"Loading - 1"),Sl.forEach(e),an=s(it),ua=r(it,"TD",{});var Vl=n(ua);rn=w(Vl,"Spinner"),Vl.forEach(e),nn=s(it),ma=r(it,"TD",{});var Al=n(ma);ga=r(Al,"DIV",{});var Ll=n(ga);g(Kt.$$.fragment,Ll),Ll.forEach(e),Al.forEach(e),ln=s(it),Mt=r(it,"TD",{});var Pa=n(Mt);g(Qt.$$.fragment,Pa),on=s(Pa),g(Wt.$$.fragment,Pa),Pa.forEach(e),it.forEach(e),sn=s(B),L=r(B,"TR",{});var $t=n(L);ha=r($t,"TD",{});var Hl=n(ha);dn=w(Hl,"Loading - 1"),Hl.forEach(e),fn=s($t),pa=r($t,"TD",{});var jl=n(pa);cn=w(jl,"Placeholder"),jl.forEach(e),$n=s($t),Na=r($t,"TD",{}),n(Na).forEach(e),un=s($t),Be=r($t,"TD",{rowspan:!0});var ql=n(Be);g(te.$$.fragment,ql),ql.forEach(e),$t.forEach(e),mn=s(B),va=r(B,"TR",{});var zl=n(va);ye=r(zl,"TD",{colspan:!0});var Xl=n(ye);ba=r(Xl,"DIV",{});var Yl=n(ba);Ce=r(Yl,"SECTION",{class:!0});var Zl=n(Ce);W=r(Zl,"DIV",{class:!0});var xa=n(W);_a=r(xa,"DIV",{class:!0}),n(_a).forEach(e),gn=s(xa),q=r(xa,"DIV",{class:!0});var Se=n(q);Ta=r(Se,"DIV",{class:!0}),n(Ta).forEach(e),hn=s(Se),Ea=r(Se,"DIV",{class:!0}),n(Ea).forEach(e),pn=s(Se),wa=r(Se,"DIV",{class:!0}),n(wa).forEach(e),Se.forEach(e),xa.forEach(e),Zl.forEach(e),Yl.forEach(e),Xl.forEach(e),zl.forEach(e),vn=s(B),H=r(B,"TR",{});var ut=n(H);Da=r(ut,"TD",{});var Gl=n(Da);bn=w(Gl,"Loading - 1"),Gl.forEach(e),_n=s(ut),Ba=r(ut,"TD",{});var Jl=n(Ba);Tn=w(Jl,"Table Placeholder"),Jl.forEach(e),En=s(ut),ka=r(ut,"TD",{}),n(ka).forEach(e),wn=s(ut),tt=r(ut,"TD",{rowspan:!0});var Ra=n(tt);g(ee.$$.fragment,Ra),Dn=s(Ra),g(ae.$$.fragment,Ra),Ra.forEach(e),ut.forEach(e),Bn=s(B),ya=r(B,"TR",{});var Kl=n(ya);et=r(Kl,"TD",{colspan:!0});var Sa=n(et);Q=r(Sa,"P",{class:!0});var Ua=n(Q);yn=w(Ua,`Parameters
							`),Ca=r(Ua,"LI",{});var Ml=n(Ca);Cn=w(Ml,"cols: number of columns default is 1"),Ml.forEach(e),On=s(Ua),Oa=r(Ua,"LI",{});var Ql=n(Oa);Un=w(Ql,"rows: number of rows default is 10"),Ql.forEach(e),Ua.forEach(e),Nn=s(Sa),g(re.$$.fragment,Sa),Sa.forEach(e),Kl.forEach(e),B.forEach(e),Ia.forEach(e),Sn.forEach(e),this.h()},h(){$(f,"class","h2"),$(d,"class","bg-primary-300"),$(ne,"class","btn variant-filled-primary"),$(le,"class","chip variant-filled-primary"),$(oe,"class","badge variant-filled-primary"),$(se,"class","btn variant-filled-warning"),$(de,"class","chip variant-filled-warning"),$(fe,"class","badge variant-filled-warning"),$(ce,"class","btn variant-filled-primary"),$(ie,"class","chip variant-filled-primary"),$($e,"class","badge variant-filled-primary"),$(ue,"class","btn variant-filled-error"),$(me,"class","chip variant-filled-error"),$(ge,"class","badge variant-filled-error"),$(he,"class","btn variant-filled-primary"),$(pe,"class","chip variant-filled-primary"),$(ve,"class","badge variant-filled-primary"),$(be,"class","btn variant-filled-primary"),$(_e,"class","chip variant-filled-primary"),$(Te,"class","badge variant-filled-primary"),$(Ee,"class","btn variant-filled-secondary"),$(we,"class","chip variant-filled-secondary"),$(De,"class","badge variant-filled-secondary"),$(qt,"class","btn variant-filled-secondary"),qt.disabled=!0,$(Xt,"class","chip variant-filled-secondary"),Xt.disabled=!0,$(Zt,"class","badge variant-filled-secondary"),Zt.disabled=!0,$(Be,"rowspan","2"),$(_a,"class","placeholder animate-pulse"),$(Ta,"class","placeholder animate-pulse"),$(Ea,"class","placeholder animate-pulse"),$(wa,"class","placeholder animate-pulse"),$(q,"class","grid grid-cols-3 gap-2"),$(W,"class","p-4 space-y-4"),$(Ce,"class","card w-full"),$(ye,"colspan","3"),$(tt,"rowspan","2"),$(Q,"class","m-3"),$(et,"colspan","3"),$(u,"class","table table-compact bg-tertiary-200"),$(i,"class","table-container pt-5")},m(l,Oe){mt(l,f,Oe),t(f,T),mt(l,c,Oe),mt(l,i,Oe),t(i,u),t(u,_),t(_,d),t(d,U),t(U,y),t(d,j),t(d,Ae),t(Ae,Aa),t(d,La),t(d,Le),t(Le,Ha),t(d,ja),t(d,He),t(He,qa),t(u,za),t(u,D),t(D,k),t(k,je),t(je,Xa),t(k,Ya),t(k,qe),t(qe,Za),t(k,Ga),t(k,z),t(z,ne),h(gt,ne,null),t(z,Ja),t(z,le),h(ht,le,null),t(z,Ka),t(z,oe),h(pt,oe,null),t(k,Ma),t(k,ze),h(vt,ze,null),t(D,Qa),t(D,F),t(F,Xe),t(Xe,Wa),t(F,tr),t(F,Ye),t(Ye,er),t(F,ar),t(F,X),t(X,se),h(bt,se,null),t(X,rr),t(X,de),h(_t,de,null),t(X,nr),t(X,fe),h(Tt,fe,null),t(F,lr),t(F,Ze),h(Et,Ze,null),t(D,or),t(D,I),t(I,Ge),t(Ge,sr),t(I,dr),t(I,Je),t(Je,fr),t(I,cr),t(I,Y),t(Y,ce),h(wt,ce,null),t(Y,ir),t(Y,ie),h(Dt,ie,null),t(Y,$r),t(Y,$e),h(Bt,$e,null),t(I,ur),t(I,Ke),h(yt,Ke,null),t(D,mr),t(D,P),t(P,Me),t(Me,gr),t(P,hr),t(P,Qe),t(Qe,pr),t(P,vr),t(P,Z),t(Z,ue),h(Ct,ue,null),t(Z,br),t(Z,me),h(Ot,me,null),t(Z,_r),t(Z,ge),h(Ut,ge,null),t(P,Tr),t(P,We),h(Nt,We,null),t(D,Er),t(D,x),t(x,ta),t(ta,wr),t(x,Dr),t(x,ea),t(ea,Br),t(x,yr),t(x,G),t(G,he),h(kt,he,null),t(G,Cr),t(G,pe),h(Ft,pe,null),t(G,Or),t(G,ve),h(It,ve,null),t(x,Ur),t(x,aa),h(Pt,aa,null),t(D,Nr),t(D,R),t(R,ra),t(ra,kr),t(R,Fr),t(R,na),t(na,Ir),t(R,Pr),t(R,J),t(J,be),h(xt,be,null),t(J,xr),t(J,_e),h(Rt,_e,null),t(J,Rr),t(J,Te),h(St,Te,null),t(R,Sr),t(R,la),h(Vt,la,null),t(D,Vr),t(D,S),t(S,oa),t(oa,Ar),t(S,Lr),t(S,sa),t(sa,Hr),t(S,jr),t(S,K),t(K,Ee),h(At,Ee,null),t(K,qr),t(K,we),h(Lt,we,null),t(K,zr),t(K,De),h(Ht,De,null),t(S,Xr),t(S,da),h(jt,da,null),t(D,Yr),t(D,V),t(V,fa),t(fa,Zr),t(V,Gr),t(V,ca),t(ca,Jr),t(V,Kr),t(V,M),t(M,qt),h(zt,qt,null),t(M,Mr),t(M,Xt),h(Yt,Xt,null),t(M,Qr),t(M,Zt),h(Gt,Zt,null),t(V,Wr),t(V,ia),h(Jt,ia,null),t(D,tn),t(D,A),t(A,$a),t($a,en),t(A,an),t(A,ua),t(ua,rn),t(A,nn),t(A,ma),t(ma,ga),h(Kt,ga,null),t(A,ln),t(A,Mt),h(Qt,Mt,null),t(Mt,on),h(Wt,Mt,null),t(D,sn),t(D,L),t(L,ha),t(ha,dn),t(L,fn),t(L,pa),t(pa,cn),t(L,$n),t(L,Na),t(L,un),t(L,Be),h(te,Be,null),t(D,mn),t(D,va),t(va,ye),t(ye,ba),t(ba,Ce),t(Ce,W),t(W,_a),t(W,gn),t(W,q),t(q,Ta),t(q,hn),t(q,Ea),t(q,pn),t(q,wa),t(D,vn),t(D,H),t(H,Da),t(Da,bn),t(H,_n),t(H,Ba),t(Ba,Tn),t(H,En),t(H,ka),t(H,wn),t(H,tt),h(ee,tt,null),t(tt,Dn),h(ae,tt,null),t(D,Bn),t(D,ya),t(ya,et),t(et,Q),t(Q,yn),t(Q,Ca),t(Ca,Cn),t(Q,On),t(Q,Oa),t(Oa,Un),t(et,Nn),h(re,et,null),Fa=!0},p:Va,i(l){Fa||(p(gt.$$.fragment,l),p(ht.$$.fragment,l),p(pt.$$.fragment,l),p(vt.$$.fragment,l),p(bt.$$.fragment,l),p(_t.$$.fragment,l),p(Tt.$$.fragment,l),p(Et.$$.fragment,l),p(wt.$$.fragment,l),p(Dt.$$.fragment,l),p(Bt.$$.fragment,l),p(yt.$$.fragment,l),p(Ct.$$.fragment,l),p(Ot.$$.fragment,l),p(Ut.$$.fragment,l),p(Nt.$$.fragment,l),p(kt.$$.fragment,l),p(Ft.$$.fragment,l),p(It.$$.fragment,l),p(Pt.$$.fragment,l),p(xt.$$.fragment,l),p(Rt.$$.fragment,l),p(St.$$.fragment,l),p(Vt.$$.fragment,l),p(At.$$.fragment,l),p(Lt.$$.fragment,l),p(Ht.$$.fragment,l),p(jt.$$.fragment,l),p(zt.$$.fragment,l),p(Yt.$$.fragment,l),p(Gt.$$.fragment,l),p(Jt.$$.fragment,l),p(Kt.$$.fragment,l),p(Qt.$$.fragment,l),p(Wt.$$.fragment,l),p(te.$$.fragment,l),p(ee.$$.fragment,l),p(ae.$$.fragment,l),p(re.$$.fragment,l),Fa=!0)},o(l){v(gt.$$.fragment,l),v(ht.$$.fragment,l),v(pt.$$.fragment,l),v(vt.$$.fragment,l),v(bt.$$.fragment,l),v(_t.$$.fragment,l),v(Tt.$$.fragment,l),v(Et.$$.fragment,l),v(wt.$$.fragment,l),v(Dt.$$.fragment,l),v(Bt.$$.fragment,l),v(yt.$$.fragment,l),v(Ct.$$.fragment,l),v(Ot.$$.fragment,l),v(Ut.$$.fragment,l),v(Nt.$$.fragment,l),v(kt.$$.fragment,l),v(Ft.$$.fragment,l),v(It.$$.fragment,l),v(Pt.$$.fragment,l),v(xt.$$.fragment,l),v(Rt.$$.fragment,l),v(St.$$.fragment,l),v(Vt.$$.fragment,l),v(At.$$.fragment,l),v(Lt.$$.fragment,l),v(Ht.$$.fragment,l),v(jt.$$.fragment,l),v(zt.$$.fragment,l),v(Yt.$$.fragment,l),v(Gt.$$.fragment,l),v(Jt.$$.fragment,l),v(Kt.$$.fragment,l),v(Qt.$$.fragment,l),v(Wt.$$.fragment,l),v(te.$$.fragment,l),v(ee.$$.fragment,l),v(ae.$$.fragment,l),v(re.$$.fragment,l),Fa=!1},d(l){l&&e(f),l&&e(c),l&&e(i),b(gt),b(ht),b(pt),b(vt),b(bt),b(_t),b(Tt),b(Et),b(wt),b(Dt),b(Bt),b(yt),b(Ct),b(Ot),b(Ut),b(Nt),b(kt),b(Ft),b(It),b(Pt),b(xt),b(Rt),b(St),b(Vt),b(At),b(Lt),b(Ht),b(jt),b(zt),b(Yt),b(Gt),b(Jt),b(Kt),b(Qt),b(Wt),b(te),b(ee),b(ae),b(re)}}}function mo(O){let f,T;return f=new so({props:{title:"Design Convertions",$$slots:{default:[uo]},$$scope:{ctx:O}}}),{c(){m(f.$$.fragment)},l(c){g(f.$$.fragment,c)},m(c,i){h(f,c,i),T=!0},p(c,[i]){const u={};i&1&&(u.$$scope={dirty:i,ctx:c}),f.$set(u)},i(c){T||(p(f.$$.fragment,c),T=!0)},o(c){v(f.$$.fragment,c),T=!1},d(c){b(f,c)}}}class wo extends ro{constructor(f){super(),no(this,f,null,mo,lo,{})}}export{wo as component};