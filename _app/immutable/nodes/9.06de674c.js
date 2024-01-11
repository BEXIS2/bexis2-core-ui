import{S as T,i as U,s as R,y,z as I,A as C,g as A,d as B,B as P,k as g,q as S,a as _,l as H,m as w,r as E,h as i,c as b,b as r,F as v,n as D,Z as V}from"../chunks/index.9a980381.js";import{P as X}from"../chunks/Page.a681baca.js";import{T as q,C as z}from"../chunks/CodeContainer.76ea85c0.js";import{w as O}from"../chunks/index.5c326a8b.js";const W=`using BExIS.Security.Entities.Authorization;
using BExIS.UI.Hooks;

namespace BExIS.Modules.Dcm.UI.Hooks
{
    public class MetadataEditHook : Hook
    {
        public MetadataEditHook()
        {
            Start = "dcm/metadata/start";
        }

        public override void Check(long id, string username)
        {
            // check status
            checkStatus(id, username);

        }

        private void checkStatus(long id, string username)
        {
            // check if the user has access rights to the entrypoint - set in Start
            bool hasAccess = hasUserAccessRights(username);

            // user rights to the dataset
            bool hasRights = hasUserEntityRights(id, username,RightType.Write);

            // if one fail then access is denied
            if (hasAccess == false || hasRights == false)
            {
                Status = HookStatus.AccessDenied; return;
            }
            else
            {
                Status = HookStatus.Open;
            }

        }

    }
}`,F=`  <!-- fill out alle the hook aatributes otherwise there will not be loaded -->
  <Hooks>
	  <!-- VIEW-->
	  <Hook
		    name="metadata"
		    mode="view"
		    entity="dataset"
		    place="details"
		    module="dcm"
		    type="BExIS.Modules.Dcm.UI.Hooks.MetadataViewHook, BExIS.Modules.DCM.UI, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />
	
 </Hooks>`,K=[{place:"details",entity:"dataset",mode:"view",description:"hook in where dataset can be viewed"},{place:"details",entity:"dataset",mode:"edit",description:"hook in where dataset can be viewed"}];function N(c){let t,a;return{c(){t=g("span"),a=S("How hooks look like."),this.h()},l(s){t=H(s,"SPAN",{slot:!0});var o=w(t);a=E(o,"How hooks look like."),o.forEach(i),this.h()},h(){D(t,"slot","info")},m(s,o){r(s,t,o),v(t,a)},p:V,d(s){s&&i(t)}}}function Z(c){let t,a,s,o,p,f,h,x,d,u,k,l,$;return u=new q({props:{config:c[0]}}),l=new z({props:{title:"How To",csharp:W,xml:F,codeOnly:!0,activetab:G,$$slots:{info:[N]},$$scope:{ctx:c}}}),{c(){t=g("h2"),a=S("All about hooks in BEXIS2"),s=_(),o=g("p"),p=S("this page describes how to use hooks in bexis 2."),f=_(),h=g("h3"),x=S("Hook Places"),d=_(),y(u.$$.fragment),k=_(),y(l.$$.fragment)},l(e){t=H(e,"H2",{});var n=w(t);a=E(n,"All about hooks in BEXIS2"),n.forEach(i),s=b(e),o=H(e,"P",{});var m=w(o);p=E(m,"this page describes how to use hooks in bexis 2."),m.forEach(i),f=b(e),h=H(e,"H3",{});var M=w(h);x=E(M,"Hook Places"),M.forEach(i),d=b(e),I(u.$$.fragment,e),k=b(e),I(l.$$.fragment,e)},m(e,n){r(e,t,n),v(t,a),r(e,s,n),r(e,o,n),v(o,p),r(e,f,n),r(e,h,n),v(h,x),r(e,d,n),C(u,e,n),r(e,k,n),C(l,e,n),$=!0},p(e,n){const m={};n&4&&(m.$$scope={dirty:n,ctx:e}),l.$set(m)},i(e){$||(A(u.$$.fragment,e),A(l.$$.fragment,e),$=!0)},o(e){B(u.$$.fragment,e),B(l.$$.fragment,e),$=!1},d(e){e&&i(t),e&&i(s),e&&i(o),e&&i(f),e&&i(h),e&&i(d),P(u,e),e&&i(k),P(l,e)}}}function j(c){let t,a;return t=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:c}}}),{c(){y(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,o){C(t,s,o),a=!0},p(s,[o]){const p={};o&4&&(p.$$scope={dirty:o,ctx:s}),t.$set(p)},i(s){a||(A(t.$$.fragment,s),a=!0)},o(s){B(t.$$.fragment,s),a=!1},d(s){P(t,s)}}}let G=2;function J(c){return[{id:"hookplaces",data:O(K)}]}class te extends T{constructor(t){super(),U(this,t,J,j,R,{})}}export{te as component};
