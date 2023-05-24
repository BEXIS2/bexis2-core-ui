import{S as x,i as b,s as y,y as h,z as m,A as d,g as p,d as f,B as k,k as $,q as g,a as I,l as _,m as H,r as S,h as c,c as v,b as l,D as E,n as w,W as C}from"../chunks/index.cff9c354.js";import{P as A,C as M}from"../chunks/CodeContainer.2fbc6041.js";const B=`using BExIS.Security.Entities.Authorization;
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
}`,U=`  <!-- fill out alle the hook aatributes otherwise there will not be loaded -->
  <Hooks>
	  <!-- VIEW-->
	  <Hook
		    name="metadata"
		    mode="view"
		    entity="dataset"
		    place="details"
		    module="dcm"
		    type="BExIS.Modules.Dcm.UI.Hooks.MetadataViewHook, BExIS.Modules.DCM.UI, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />
	
 </Hooks>`;function D(r){let t,o;return{c(){t=$("span"),o=g("How hooks look like."),this.h()},l(e){t=_(e,"SPAN",{slot:!0});var n=H(t);o=S(n,"How hooks look like."),n.forEach(c),this.h()},h(){w(t,"slot","info")},m(e,n){l(e,t,n),E(t,o)},p:C,d(e){e&&c(t)}}}function P(r){let t,o,e,n,i;return n=new M({props:{title:"How To",csharp:B,xml:U,codeOnly:!0,activetab:T,$$slots:{info:[D]},$$scope:{ctx:r}}}),{c(){t=$("h2"),o=g("Hooks"),e=I(),h(n.$$.fragment)},l(s){t=_(s,"H2",{});var a=H(t);o=S(a,"Hooks"),a.forEach(c),e=v(s),m(n.$$.fragment,s)},m(s,a){l(s,t,a),E(t,o),l(s,e,a),d(n,s,a),i=!0},p(s,a){const u={};a&1&&(u.$$scope={dirty:a,ctx:s}),n.$set(u)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){f(n.$$.fragment,s),i=!1},d(s){s&&c(t),s&&c(e),k(n,s)}}}function R(r){let t,o;return t=new A({props:{$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){h(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,n){d(t,e,n),o=!0},p(e,[n]){const i={};n&1&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){o||(p(t.$$.fragment,e),o=!0)},o(e){f(t.$$.fragment,e),o=!1},d(e){k(t,e)}}}let T=2;class q extends x{constructor(t){super(),b(this,t,null,R,y,{})}}export{q as component};
