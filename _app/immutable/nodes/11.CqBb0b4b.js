import{s as Xr,e,a as l,c as n,b as s,f as r,g as o,m as _,i as st,h as t,n as pn,z as Yr,A as x}from"../chunks/scheduler.sMk536BX.js";import{S as Gr,i as Jr,c as m,a as g,m as h,t as v,b as p,d as b}from"../chunks/index.DVMqOFlj.js";import{P as Kr}from"../chunks/Page.DM9CNPx0.js";import{F as w,a as Oa,f as Ua,b as Na,c as Fa,d as We,e as Pa,g as Ra}from"../chunks/index.0wZ_3tUm.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.D1WdMqql.js";import{C as k}from"../chunks/CodeBlock.DFq04sMv.js";import{S as Qr}from"../chunks/Spinner.PF8MazJW.js";/* empty css                                                       */import"../chunks/pageStores.D5X99AVs.js";import"../chunks/apiStores.CuS3miPC.js";/* empty css                                                     */import"../chunks/store.BnHOtdKy.js";import"../chunks/eslint4b.es.DLCfYLl9.js";import{e as bn}from"../chunks/each.BRKTvA7D.js";function Ir(D,d,C){const $=D.slice();return $[2]=d[C],$}function jr(D,d,C){const $=D.slice();return $[2]=d[C],$}function zr(D){let d,C='<div class="placeholder animate-pulse h-9 w-full"></div>';return{c(){d=e("td"),d.innerHTML=C,this.h()},l($){d=n($,"TD",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-12owdqv"&&(d.innerHTML=C),this.h()},h(){_(d,"class","p-3")},m($,c){st($,d,c)},p:pn,d($){$&&r(d)}}}function Vr(D){let d,C,$=bn(Array(D[0])),c=[];for(let u=0;u<$.length;u+=1)c[u]=zr(jr(D,$,u));return{c(){d=e("tr");for(let u=0;u<c.length;u+=1)c[u].c();C=l(),this.h()},l(u){d=n(u,"TR",{class:!0});var T=s(d);for(let i=0;i<c.length;i+=1)c[i].l(T);C=o(T),T.forEach(r),this.h()},h(){_(d,"class","w-full")},m(u,T){st(u,d,T);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(d,null);t(d,C)},p(u,T){if(T&1){$=bn(Array(u[0]));let i;for(i=0;i<$.length;i+=1){const B=jr(u,$,i);c[i]?c[i].p(B,T):(c[i]=zr(),c[i].c(),c[i].m(d,C))}for(;i<c.length;i+=1)c[i].d(1);c.length=$.length}},d(u){u&&r(d),Yr(c,u)}}}function Wr(D){let d,C,$,c,u=bn(Array(D[1])),T=[];for(let i=0;i<u.length;i+=1)T[i]=Vr(Ir(D,u,i));return{c(){d=e("div"),C=l(),$=e("div"),c=e("table");for(let i=0;i<T.length;i+=1)T[i].c();this.h()},l(i){d=n(i,"DIV",{class:!0}),s(d).forEach(r),C=o(i),$=n(i,"DIV",{class:!0});var B=s($);c=n(B,"TABLE",{class:!0});var f=s(c);for(let y=0;y<T.length;y+=1)T[y].l(f);f.forEach(r),B.forEach(r),this.h()},h(){_(d,"class","placeholder animate-pulse w-full h-10 sp"),_(c,"class","table table-compact w-full"),_($,"class","table-container w-full")},m(i,B){st(i,d,B),st(i,C,B),st(i,$,B),t($,c);for(let f=0;f<T.length;f+=1)T[f]&&T[f].m(c,null)},p(i,[B]){if(B&3){u=bn(Array(i[1]));let f;for(f=0;f<u.length;f+=1){const y=Ir(i,u,f);T[f]?T[f].p(y,B):(T[f]=Vr(y),T[f].c(),T[f].m(c,null))}for(;f<T.length;f+=1)T[f].d(1);T.length=u.length}},i:pn,o:pn,d(i){i&&(r(d),r(C),r($)),Yr(T,i)}}}function Zr(D,d,C){let{cols:$=1}=d,{rows:c=10}=d;return D.$$set=u=>{"cols"in u&&C(0,$=u.cols),"rows"in u&&C(1,c=u.rows)},[$,c]}class tl extends Gr{constructor(d){super(),Jr(this,d,Zr,Wr,Xr,{cols:0,rows:1})}}function el(D){let d,C="How to handle Actions",$,c,u,T,i='<tr class="bg-primary-300"><th>Function</th> <th>UI Component</th> <th>Example</th> <th>Code</th></tr>',B,f,y,Wt,La="Confirm",_n,Zt,Ha="Button / Chip / Badge",Tn,M,te,dt,Cn,ee,ft,xn,ne,it,En,Ze,$t,wn,O,ae,Sa="Cancel",yn,re,Aa="Button / Chip / Badge",Dn,q,le,ct,Bn,oe,ut,kn,se,mt,On,tn,gt,Un,U,de,Ma="Save",Nn,fe,qa="Button / Chip / Badge",Fn,I,ie,ht,Pn,$e,vt,Rn,ce,pt,Ln,en,bt,Hn,N,ue,Ia="Delete",Sn,me,ja="Button / Chip / Badge",An,j,ge,_t,Mn,he,Tt,qn,ve,Ct,In,nn,xt,jn,F,pe,za="Edit",zn,be,Va="Button / Chip / Badge",Vn,z,_e,Et,Xn,Te,wt,Yn,Ce,yt,Gn,an,Dt,Jn,P,xe,Xa="Create",Kn,Ee,Ya="Button / Chip / Badge",Qn,V,we,Bt,Wn,ye,kt,Zn,De,Ot,ta,rn,Ut,ea,R,Be,Ga="Show",na,ke,Ja="Button / Chip / Badge",aa,X,Oe,Nt,ra,Ue,Ft,la,Ne,Pt,oa,ln,Rt,sa,L,Fe,Ka="Disabled",da,Pe,Qa="Button",fa,Y,Lt,Ht,ia,St,At,$a,Mt,qt,ca,on,It,ua,H,Re,Wa="Loading - 1",ma,Le,Za="Spinner",ga,sn,dn,jt,ha,zt,Vt,va,Xt,pa,S,He,tr="Loading - 1",ba,Se,er="Placeholder",_a,$n,Ta,Ae,Yt,Ca,Me,nr='<td colspan="3"><div><section class="card w-full"><div class="p-4 space-y-4"><div class="placeholder animate-pulse"></div> <div class="grid grid-cols-3 gap-2"><div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div> <div class="placeholder animate-pulse"></div></div></div></section></div></td>',xa,A,qe,ar="Loading - 1",Ea,Ie,rr="Table Placeholder",wa,cn,ya,G,Gt,Da,Jt,Ba,fn,J,Kt,lr=`Parameters
							<li>cols: number of columns default is 1</li> <li>rows: number of rows default is 10</li>`,ka,Qt,un;return dt=new w({props:{icon:Oa}}),ft=new w({props:{icon:Oa}}),it=new w({props:{icon:Oa}}),$t=new k({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faCheck}></Fa></button>'}}),ct=new w({props:{icon:Ua}}),ut=new w({props:{icon:Ua}}),mt=new w({props:{icon:Ua}}),gt=new k({props:{language:"html",code:'<button class="btn variant-filled-warning"><Fa icon={faXmark}></Fa></button>'}}),ht=new w({props:{icon:Na}}),vt=new w({props:{icon:Na}}),pt=new w({props:{icon:Na}}),bt=new k({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faSave}></Fa></button>'}}),_t=new w({props:{icon:Fa}}),Tt=new w({props:{icon:Fa}}),Ct=new w({props:{icon:Fa}}),xt=new k({props:{language:"html",code:'<button class="btn variant-filled-error"><Fa icon={faTrash}></Fa></button>'}}),Et=new w({props:{icon:We}}),wt=new w({props:{icon:We}}),yt=new w({props:{icon:We}}),Dt=new k({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>'}}),Bt=new w({props:{icon:Pa}}),kt=new w({props:{icon:Pa}}),Ot=new w({props:{icon:Pa}}),Ut=new k({props:{language:"html",code:'<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>'}}),Nt=new w({props:{icon:Ra}}),Ft=new w({props:{icon:Ra}}),Pt=new w({props:{icon:Ra}}),Rt=new k({props:{language:"html",code:'<button class="btn variant-filled-secondary"><Fa icon={faEye}></Fa></button>'}}),Ht=new w({props:{icon:We}}),At=new w({props:{icon:We}}),qt=new w({props:{icon:We}}),It=new k({props:{language:"html",code:'<button class="btn variant-filled-secondary" disabled><Fa icon={faEdit}></Fa></button>'}}),jt=new Qr({props:{label:"...loading"}}),Vt=new k({props:{class:"my-2",language:"js",code:"import Spinner from '@bexis2/bexis2-core-ui';"}}),Xt=new k({props:{class:"my-2",language:"html",code:'<Spinner label="...loading"/>'}}),Yt=new k({props:{language:"html",code:`<section class="card w-full">
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
</section>`}}),Gt=new k({props:{class:"my-2",language:"js",code:"import TablePlaceholder from '@bexis2/bexis2-core-ui';"}}),Jt=new k({props:{class:"my-2",language:"html",code:"<TablePlaceholder cols={2} rows={5}/>"}}),Qt=new tl({props:{cols:2,rows:5}}),{c(){d=e("h2"),d.textContent=C,$=l(),c=e("div"),u=e("table"),T=e("thead"),T.innerHTML=i,B=l(),f=e("tbody"),y=e("tr"),Wt=e("td"),Wt.textContent=La,_n=l(),Zt=e("td"),Zt.textContent=Ha,Tn=l(),M=e("td"),te=e("button"),m(dt.$$.fragment),Cn=l(),ee=e("button"),m(ft.$$.fragment),xn=l(),ne=e("button"),m(it.$$.fragment),En=l(),Ze=e("td"),m($t.$$.fragment),wn=l(),O=e("tr"),ae=e("td"),ae.textContent=Sa,yn=l(),re=e("td"),re.textContent=Aa,Dn=l(),q=e("td"),le=e("button"),m(ct.$$.fragment),Bn=l(),oe=e("button"),m(ut.$$.fragment),kn=l(),se=e("button"),m(mt.$$.fragment),On=l(),tn=e("td"),m(gt.$$.fragment),Un=l(),U=e("tr"),de=e("td"),de.textContent=Ma,Nn=l(),fe=e("td"),fe.textContent=qa,Fn=l(),I=e("td"),ie=e("button"),m(ht.$$.fragment),Pn=l(),$e=e("button"),m(vt.$$.fragment),Rn=l(),ce=e("button"),m(pt.$$.fragment),Ln=l(),en=e("td"),m(bt.$$.fragment),Hn=l(),N=e("tr"),ue=e("td"),ue.textContent=Ia,Sn=l(),me=e("td"),me.textContent=ja,An=l(),j=e("td"),ge=e("button"),m(_t.$$.fragment),Mn=l(),he=e("button"),m(Tt.$$.fragment),qn=l(),ve=e("button"),m(Ct.$$.fragment),In=l(),nn=e("td"),m(xt.$$.fragment),jn=l(),F=e("tr"),pe=e("td"),pe.textContent=za,zn=l(),be=e("td"),be.textContent=Va,Vn=l(),z=e("td"),_e=e("button"),m(Et.$$.fragment),Xn=l(),Te=e("button"),m(wt.$$.fragment),Yn=l(),Ce=e("button"),m(yt.$$.fragment),Gn=l(),an=e("td"),m(Dt.$$.fragment),Jn=l(),P=e("tr"),xe=e("td"),xe.textContent=Xa,Kn=l(),Ee=e("td"),Ee.textContent=Ya,Qn=l(),V=e("td"),we=e("button"),m(Bt.$$.fragment),Wn=l(),ye=e("button"),m(kt.$$.fragment),Zn=l(),De=e("button"),m(Ot.$$.fragment),ta=l(),rn=e("td"),m(Ut.$$.fragment),ea=l(),R=e("tr"),Be=e("td"),Be.textContent=Ga,na=l(),ke=e("td"),ke.textContent=Ja,aa=l(),X=e("td"),Oe=e("button"),m(Nt.$$.fragment),ra=l(),Ue=e("button"),m(Ft.$$.fragment),la=l(),Ne=e("button"),m(Pt.$$.fragment),oa=l(),ln=e("td"),m(Rt.$$.fragment),sa=l(),L=e("tr"),Fe=e("td"),Fe.textContent=Ka,da=l(),Pe=e("td"),Pe.textContent=Qa,fa=l(),Y=e("td"),Lt=e("button"),m(Ht.$$.fragment),ia=l(),St=e("button"),m(At.$$.fragment),$a=l(),Mt=e("button"),m(qt.$$.fragment),ca=l(),on=e("td"),m(It.$$.fragment),ua=l(),H=e("tr"),Re=e("td"),Re.textContent=Wa,ma=l(),Le=e("td"),Le.textContent=Za,ga=l(),sn=e("td"),dn=e("div"),m(jt.$$.fragment),ha=l(),zt=e("td"),m(Vt.$$.fragment),va=l(),m(Xt.$$.fragment),pa=l(),S=e("tr"),He=e("td"),He.textContent=tr,ba=l(),Se=e("td"),Se.textContent=er,_a=l(),$n=e("td"),Ta=l(),Ae=e("td"),m(Yt.$$.fragment),Ca=l(),Me=e("tr"),Me.innerHTML=nr,xa=l(),A=e("tr"),qe=e("td"),qe.textContent=ar,Ea=l(),Ie=e("td"),Ie.textContent=rr,wa=l(),cn=e("td"),ya=l(),G=e("td"),m(Gt.$$.fragment),Da=l(),m(Jt.$$.fragment),Ba=l(),fn=e("tr"),J=e("td"),Kt=e("p"),Kt.innerHTML=lr,ka=l(),m(Qt.$$.fragment),this.h()},l(a){d=n(a,"H2",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-1tsv68j"&&(d.textContent=C),$=o(a),c=n(a,"DIV",{class:!0});var je=s(c);u=n(je,"TABLE",{class:!0});var mn=s(u);T=n(mn,"THEAD",{"data-svelte-h":!0}),x(T)!=="svelte-fpg69d"&&(T.innerHTML=i),B=o(mn),f=n(mn,"TBODY",{});var E=s(f);y=n(E,"TR",{});var K=s(y);Wt=n(K,"TD",{"data-svelte-h":!0}),x(Wt)!=="svelte-1vbmu02"&&(Wt.textContent=La),_n=o(K),Zt=n(K,"TD",{"data-svelte-h":!0}),x(Zt)!=="svelte-4myec7"&&(Zt.textContent=Ha),Tn=o(K),M=n(K,"TD",{});var ze=s(M);te=n(ze,"BUTTON",{class:!0});var or=s(te);g(dt.$$.fragment,or),or.forEach(r),Cn=o(ze),ee=n(ze,"BUTTON",{class:!0});var sr=s(ee);g(ft.$$.fragment,sr),sr.forEach(r),xn=o(ze),ne=n(ze,"BUTTON",{class:!0});var dr=s(ne);g(it.$$.fragment,dr),dr.forEach(r),ze.forEach(r),En=o(K),Ze=n(K,"TD",{});var fr=s(Ze);g($t.$$.fragment,fr),fr.forEach(r),K.forEach(r),wn=o(E),O=n(E,"TR",{});var Q=s(O);ae=n(Q,"TD",{"data-svelte-h":!0}),x(ae)!=="svelte-p98ri4"&&(ae.textContent=Sa),yn=o(Q),re=n(Q,"TD",{"data-svelte-h":!0}),x(re)!=="svelte-4myec7"&&(re.textContent=Aa),Dn=o(Q),q=n(Q,"TD",{});var Ve=s(q);le=n(Ve,"BUTTON",{class:!0});var ir=s(le);g(ct.$$.fragment,ir),ir.forEach(r),Bn=o(Ve),oe=n(Ve,"BUTTON",{class:!0});var $r=s(oe);g(ut.$$.fragment,$r),$r.forEach(r),kn=o(Ve),se=n(Ve,"BUTTON",{class:!0});var cr=s(se);g(mt.$$.fragment,cr),cr.forEach(r),Ve.forEach(r),On=o(Q),tn=n(Q,"TD",{});var ur=s(tn);g(gt.$$.fragment,ur),ur.forEach(r),Q.forEach(r),Un=o(E),U=n(E,"TR",{});var W=s(U);de=n(W,"TD",{"data-svelte-h":!0}),x(de)!=="svelte-1elmkjz"&&(de.textContent=Ma),Nn=o(W),fe=n(W,"TD",{"data-svelte-h":!0}),x(fe)!=="svelte-4myec7"&&(fe.textContent=qa),Fn=o(W),I=n(W,"TD",{});var Xe=s(I);ie=n(Xe,"BUTTON",{class:!0});var mr=s(ie);g(ht.$$.fragment,mr),mr.forEach(r),Pn=o(Xe),$e=n(Xe,"BUTTON",{class:!0});var gr=s($e);g(vt.$$.fragment,gr),gr.forEach(r),Rn=o(Xe),ce=n(Xe,"BUTTON",{class:!0});var hr=s(ce);g(pt.$$.fragment,hr),hr.forEach(r),Xe.forEach(r),Ln=o(W),en=n(W,"TD",{});var vr=s(en);g(bt.$$.fragment,vr),vr.forEach(r),W.forEach(r),Hn=o(E),N=n(E,"TR",{});var Z=s(N);ue=n(Z,"TD",{"data-svelte-h":!0}),x(ue)!=="svelte-dbeogd"&&(ue.textContent=Ia),Sn=o(Z),me=n(Z,"TD",{"data-svelte-h":!0}),x(me)!=="svelte-4myec7"&&(me.textContent=ja),An=o(Z),j=n(Z,"TD",{});var Ye=s(j);ge=n(Ye,"BUTTON",{class:!0});var pr=s(ge);g(_t.$$.fragment,pr),pr.forEach(r),Mn=o(Ye),he=n(Ye,"BUTTON",{class:!0});var br=s(he);g(Tt.$$.fragment,br),br.forEach(r),qn=o(Ye),ve=n(Ye,"BUTTON",{class:!0});var _r=s(ve);g(Ct.$$.fragment,_r),_r.forEach(r),Ye.forEach(r),In=o(Z),nn=n(Z,"TD",{});var Tr=s(nn);g(xt.$$.fragment,Tr),Tr.forEach(r),Z.forEach(r),jn=o(E),F=n(E,"TR",{});var tt=s(F);pe=n(tt,"TD",{"data-svelte-h":!0}),x(pe)!=="svelte-1tu8qhe"&&(pe.textContent=za),zn=o(tt),be=n(tt,"TD",{"data-svelte-h":!0}),x(be)!=="svelte-4myec7"&&(be.textContent=Va),Vn=o(tt),z=n(tt,"TD",{});var Ge=s(z);_e=n(Ge,"BUTTON",{class:!0});var Cr=s(_e);g(Et.$$.fragment,Cr),Cr.forEach(r),Xn=o(Ge),Te=n(Ge,"BUTTON",{class:!0});var xr=s(Te);g(wt.$$.fragment,xr),xr.forEach(r),Yn=o(Ge),Ce=n(Ge,"BUTTON",{class:!0});var Er=s(Ce);g(yt.$$.fragment,Er),Er.forEach(r),Ge.forEach(r),Gn=o(tt),an=n(tt,"TD",{});var wr=s(an);g(Dt.$$.fragment,wr),wr.forEach(r),tt.forEach(r),Jn=o(E),P=n(E,"TR",{});var et=s(P);xe=n(et,"TD",{"data-svelte-h":!0}),x(xe)!=="svelte-9kuq4y"&&(xe.textContent=Xa),Kn=o(et),Ee=n(et,"TD",{"data-svelte-h":!0}),x(Ee)!=="svelte-4myec7"&&(Ee.textContent=Ya),Qn=o(et),V=n(et,"TD",{});var Je=s(V);we=n(Je,"BUTTON",{class:!0});var yr=s(we);g(Bt.$$.fragment,yr),yr.forEach(r),Wn=o(Je),ye=n(Je,"BUTTON",{class:!0});var Dr=s(ye);g(kt.$$.fragment,Dr),Dr.forEach(r),Zn=o(Je),De=n(Je,"BUTTON",{class:!0});var Br=s(De);g(Ot.$$.fragment,Br),Br.forEach(r),Je.forEach(r),ta=o(et),rn=n(et,"TD",{});var kr=s(rn);g(Ut.$$.fragment,kr),kr.forEach(r),et.forEach(r),ea=o(E),R=n(E,"TR",{});var nt=s(R);Be=n(nt,"TD",{"data-svelte-h":!0}),x(Be)!=="svelte-dm9blb"&&(Be.textContent=Ga),na=o(nt),ke=n(nt,"TD",{"data-svelte-h":!0}),x(ke)!=="svelte-4myec7"&&(ke.textContent=Ja),aa=o(nt),X=n(nt,"TD",{});var Ke=s(X);Oe=n(Ke,"BUTTON",{class:!0});var Or=s(Oe);g(Nt.$$.fragment,Or),Or.forEach(r),ra=o(Ke),Ue=n(Ke,"BUTTON",{class:!0});var Ur=s(Ue);g(Ft.$$.fragment,Ur),Ur.forEach(r),la=o(Ke),Ne=n(Ke,"BUTTON",{class:!0});var Nr=s(Ne);g(Pt.$$.fragment,Nr),Nr.forEach(r),Ke.forEach(r),oa=o(nt),ln=n(nt,"TD",{});var Fr=s(ln);g(Rt.$$.fragment,Fr),Fr.forEach(r),nt.forEach(r),sa=o(E),L=n(E,"TR",{});var at=s(L);Fe=n(at,"TD",{"data-svelte-h":!0}),x(Fe)!=="svelte-10egi0e"&&(Fe.textContent=Ka),da=o(at),Pe=n(at,"TD",{"data-svelte-h":!0}),x(Pe)!=="svelte-vrb0za"&&(Pe.textContent=Qa),fa=o(at),Y=n(at,"TD",{});var Qe=s(Y);Lt=n(Qe,"BUTTON",{class:!0});var Pr=s(Lt);g(Ht.$$.fragment,Pr),Pr.forEach(r),ia=o(Qe),St=n(Qe,"BUTTON",{class:!0});var Rr=s(St);g(At.$$.fragment,Rr),Rr.forEach(r),$a=o(Qe),Mt=n(Qe,"BUTTON",{class:!0});var Lr=s(Mt);g(qt.$$.fragment,Lr),Lr.forEach(r),Qe.forEach(r),ca=o(at),on=n(at,"TD",{});var Hr=s(on);g(It.$$.fragment,Hr),Hr.forEach(r),at.forEach(r),ua=o(E),H=n(E,"TR",{});var rt=s(H);Re=n(rt,"TD",{"data-svelte-h":!0}),x(Re)!=="svelte-1hybymi"&&(Re.textContent=Wa),ma=o(rt),Le=n(rt,"TD",{"data-svelte-h":!0}),x(Le)!=="svelte-1bq9qlp"&&(Le.textContent=Za),ga=o(rt),sn=n(rt,"TD",{});var Sr=s(sn);dn=n(Sr,"DIV",{});var Ar=s(dn);g(jt.$$.fragment,Ar),Ar.forEach(r),Sr.forEach(r),ha=o(rt),zt=n(rt,"TD",{});var gn=s(zt);g(Vt.$$.fragment,gn),va=o(gn),g(Xt.$$.fragment,gn),gn.forEach(r),rt.forEach(r),pa=o(E),S=n(E,"TR",{});var lt=s(S);He=n(lt,"TD",{"data-svelte-h":!0}),x(He)!=="svelte-1hybymi"&&(He.textContent=tr),ba=o(lt),Se=n(lt,"TD",{"data-svelte-h":!0}),x(Se)!=="svelte-6i405t"&&(Se.textContent=er),_a=o(lt),$n=n(lt,"TD",{}),s($n).forEach(r),Ta=o(lt),Ae=n(lt,"TD",{rowspan:!0});var Mr=s(Ae);g(Yt.$$.fragment,Mr),Mr.forEach(r),lt.forEach(r),Ca=o(E),Me=n(E,"TR",{"data-svelte-h":!0}),x(Me)!=="svelte-cegs2l"&&(Me.innerHTML=nr),xa=o(E),A=n(E,"TR",{});var ot=s(A);qe=n(ot,"TD",{"data-svelte-h":!0}),x(qe)!=="svelte-1hybymi"&&(qe.textContent=ar),Ea=o(ot),Ie=n(ot,"TD",{"data-svelte-h":!0}),x(Ie)!=="svelte-v6bxa9"&&(Ie.textContent=rr),wa=o(ot),cn=n(ot,"TD",{}),s(cn).forEach(r),ya=o(ot),G=n(ot,"TD",{rowspan:!0});var hn=s(G);g(Gt.$$.fragment,hn),Da=o(hn),g(Jt.$$.fragment,hn),hn.forEach(r),ot.forEach(r),Ba=o(E),fn=n(E,"TR",{});var qr=s(fn);J=n(qr,"TD",{colspan:!0});var vn=s(J);Kt=n(vn,"P",{class:!0,"data-svelte-h":!0}),x(Kt)!=="svelte-191zk5r"&&(Kt.innerHTML=lr),ka=o(vn),g(Qt.$$.fragment,vn),vn.forEach(r),qr.forEach(r),E.forEach(r),mn.forEach(r),je.forEach(r),this.h()},h(){_(d,"class","h2"),_(te,"class","btn variant-filled-primary"),_(ee,"class","chip variant-filled-primary"),_(ne,"class","badge variant-filled-primary"),_(le,"class","btn variant-filled-warning"),_(oe,"class","chip variant-filled-warning"),_(se,"class","badge variant-filled-warning"),_(ie,"class","btn variant-filled-primary"),_($e,"class","chip variant-filled-primary"),_(ce,"class","badge variant-filled-primary"),_(ge,"class","btn variant-filled-error"),_(he,"class","chip variant-filled-error"),_(ve,"class","badge variant-filled-error"),_(_e,"class","btn variant-filled-primary"),_(Te,"class","chip variant-filled-primary"),_(Ce,"class","badge variant-filled-primary"),_(we,"class","btn variant-filled-primary"),_(ye,"class","chip variant-filled-primary"),_(De,"class","badge variant-filled-primary"),_(Oe,"class","btn variant-filled-secondary"),_(Ue,"class","chip variant-filled-secondary"),_(Ne,"class","badge variant-filled-secondary"),_(Lt,"class","btn variant-filled-secondary"),Lt.disabled=!0,_(St,"class","chip variant-filled-secondary"),St.disabled=!0,_(Mt,"class","badge variant-filled-secondary"),Mt.disabled=!0,_(Ae,"rowspan","2"),_(G,"rowspan","2"),_(Kt,"class","m-3"),_(J,"colspan","3"),_(u,"class","table table-compact bg-tertiary-200"),_(c,"class","table-container pt-5")},m(a,je){st(a,d,je),st(a,$,je),st(a,c,je),t(c,u),t(u,T),t(u,B),t(u,f),t(f,y),t(y,Wt),t(y,_n),t(y,Zt),t(y,Tn),t(y,M),t(M,te),h(dt,te,null),t(M,Cn),t(M,ee),h(ft,ee,null),t(M,xn),t(M,ne),h(it,ne,null),t(y,En),t(y,Ze),h($t,Ze,null),t(f,wn),t(f,O),t(O,ae),t(O,yn),t(O,re),t(O,Dn),t(O,q),t(q,le),h(ct,le,null),t(q,Bn),t(q,oe),h(ut,oe,null),t(q,kn),t(q,se),h(mt,se,null),t(O,On),t(O,tn),h(gt,tn,null),t(f,Un),t(f,U),t(U,de),t(U,Nn),t(U,fe),t(U,Fn),t(U,I),t(I,ie),h(ht,ie,null),t(I,Pn),t(I,$e),h(vt,$e,null),t(I,Rn),t(I,ce),h(pt,ce,null),t(U,Ln),t(U,en),h(bt,en,null),t(f,Hn),t(f,N),t(N,ue),t(N,Sn),t(N,me),t(N,An),t(N,j),t(j,ge),h(_t,ge,null),t(j,Mn),t(j,he),h(Tt,he,null),t(j,qn),t(j,ve),h(Ct,ve,null),t(N,In),t(N,nn),h(xt,nn,null),t(f,jn),t(f,F),t(F,pe),t(F,zn),t(F,be),t(F,Vn),t(F,z),t(z,_e),h(Et,_e,null),t(z,Xn),t(z,Te),h(wt,Te,null),t(z,Yn),t(z,Ce),h(yt,Ce,null),t(F,Gn),t(F,an),h(Dt,an,null),t(f,Jn),t(f,P),t(P,xe),t(P,Kn),t(P,Ee),t(P,Qn),t(P,V),t(V,we),h(Bt,we,null),t(V,Wn),t(V,ye),h(kt,ye,null),t(V,Zn),t(V,De),h(Ot,De,null),t(P,ta),t(P,rn),h(Ut,rn,null),t(f,ea),t(f,R),t(R,Be),t(R,na),t(R,ke),t(R,aa),t(R,X),t(X,Oe),h(Nt,Oe,null),t(X,ra),t(X,Ue),h(Ft,Ue,null),t(X,la),t(X,Ne),h(Pt,Ne,null),t(R,oa),t(R,ln),h(Rt,ln,null),t(f,sa),t(f,L),t(L,Fe),t(L,da),t(L,Pe),t(L,fa),t(L,Y),t(Y,Lt),h(Ht,Lt,null),t(Y,ia),t(Y,St),h(At,St,null),t(Y,$a),t(Y,Mt),h(qt,Mt,null),t(L,ca),t(L,on),h(It,on,null),t(f,ua),t(f,H),t(H,Re),t(H,ma),t(H,Le),t(H,ga),t(H,sn),t(sn,dn),h(jt,dn,null),t(H,ha),t(H,zt),h(Vt,zt,null),t(zt,va),h(Xt,zt,null),t(f,pa),t(f,S),t(S,He),t(S,ba),t(S,Se),t(S,_a),t(S,$n),t(S,Ta),t(S,Ae),h(Yt,Ae,null),t(f,Ca),t(f,Me),t(f,xa),t(f,A),t(A,qe),t(A,Ea),t(A,Ie),t(A,wa),t(A,cn),t(A,ya),t(A,G),h(Gt,G,null),t(G,Da),h(Jt,G,null),t(f,Ba),t(f,fn),t(fn,J),t(J,Kt),t(J,ka),h(Qt,J,null),un=!0},p:pn,i(a){un||(v(dt.$$.fragment,a),v(ft.$$.fragment,a),v(it.$$.fragment,a),v($t.$$.fragment,a),v(ct.$$.fragment,a),v(ut.$$.fragment,a),v(mt.$$.fragment,a),v(gt.$$.fragment,a),v(ht.$$.fragment,a),v(vt.$$.fragment,a),v(pt.$$.fragment,a),v(bt.$$.fragment,a),v(_t.$$.fragment,a),v(Tt.$$.fragment,a),v(Ct.$$.fragment,a),v(xt.$$.fragment,a),v(Et.$$.fragment,a),v(wt.$$.fragment,a),v(yt.$$.fragment,a),v(Dt.$$.fragment,a),v(Bt.$$.fragment,a),v(kt.$$.fragment,a),v(Ot.$$.fragment,a),v(Ut.$$.fragment,a),v(Nt.$$.fragment,a),v(Ft.$$.fragment,a),v(Pt.$$.fragment,a),v(Rt.$$.fragment,a),v(Ht.$$.fragment,a),v(At.$$.fragment,a),v(qt.$$.fragment,a),v(It.$$.fragment,a),v(jt.$$.fragment,a),v(Vt.$$.fragment,a),v(Xt.$$.fragment,a),v(Yt.$$.fragment,a),v(Gt.$$.fragment,a),v(Jt.$$.fragment,a),v(Qt.$$.fragment,a),un=!0)},o(a){p(dt.$$.fragment,a),p(ft.$$.fragment,a),p(it.$$.fragment,a),p($t.$$.fragment,a),p(ct.$$.fragment,a),p(ut.$$.fragment,a),p(mt.$$.fragment,a),p(gt.$$.fragment,a),p(ht.$$.fragment,a),p(vt.$$.fragment,a),p(pt.$$.fragment,a),p(bt.$$.fragment,a),p(_t.$$.fragment,a),p(Tt.$$.fragment,a),p(Ct.$$.fragment,a),p(xt.$$.fragment,a),p(Et.$$.fragment,a),p(wt.$$.fragment,a),p(yt.$$.fragment,a),p(Dt.$$.fragment,a),p(Bt.$$.fragment,a),p(kt.$$.fragment,a),p(Ot.$$.fragment,a),p(Ut.$$.fragment,a),p(Nt.$$.fragment,a),p(Ft.$$.fragment,a),p(Pt.$$.fragment,a),p(Rt.$$.fragment,a),p(Ht.$$.fragment,a),p(At.$$.fragment,a),p(qt.$$.fragment,a),p(It.$$.fragment,a),p(jt.$$.fragment,a),p(Vt.$$.fragment,a),p(Xt.$$.fragment,a),p(Yt.$$.fragment,a),p(Gt.$$.fragment,a),p(Jt.$$.fragment,a),p(Qt.$$.fragment,a),un=!1},d(a){a&&(r(d),r($),r(c)),b(dt),b(ft),b(it),b($t),b(ct),b(ut),b(mt),b(gt),b(ht),b(vt),b(pt),b(bt),b(_t),b(Tt),b(Ct),b(xt),b(Et),b(wt),b(yt),b(Dt),b(Bt),b(kt),b(Ot),b(Ut),b(Nt),b(Ft),b(Pt),b(Rt),b(Ht),b(At),b(qt),b(It),b(jt),b(Vt),b(Xt),b(Yt),b(Gt),b(Jt),b(Qt)}}}function nl(D){let d,C;return d=new Kr({props:{title:"Design Convertions",$$slots:{default:[el]},$$scope:{ctx:D}}}),{c(){m(d.$$.fragment)},l($){g(d.$$.fragment,$)},m($,c){h(d,$,c),C=!0},p($,[c]){const u={};c&1&&(u.$$scope={dirty:c,ctx:$}),d.$set(u)},i($){C||(v(d.$$.fragment,$),C=!0)},o($){p(d.$$.fragment,$),C=!1},d($){b(d,$)}}}class vl extends Gr{constructor(d){super(),Jr(this,d,null,nl,Xr,{})}}export{vl as component};