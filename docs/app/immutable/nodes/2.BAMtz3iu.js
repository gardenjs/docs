import{s as O,e as b,a as N,c as $,m as ue,g as V,b as E,f as v,r as _,i as D,h as g,n as P,S as le,T as de,t as ae,d as ne,j as re,U as Q,V as H,o as oe,w as Y,u as ie,p as fe,q as ce,y as he,x as ve,D as me,k as _e}from"../chunks/scheduler.U_2hvb7C.js";import{S as X,i as J,c as C,a as L,m as R,t as M,b as z,d as U}from"../chunks/index.BoCreYX2.js";import{N as pe,V as ge,F as be}from"../chunks/Vegetables.WqaXl8MU.js";import{e as B}from"../chunks/each.D6YF6ztN.js";import{b as W}from"../chunks/paths.Ct6gvZTs.js";import{p as $e}from"../chunks/stores.Cngccify.js";function Z(r,e,a){const t=r.slice();return t[4]=e[a],t}function y(r,e,a){const t=r.slice();return t[7]=e[a],t}function x(r){let e,a,t=r[7].label+"",s,i,u,f,c;return{c(){e=b("li"),a=b("a"),s=ae(t),u=N(),this.h()},l(n){e=$(n,"LI",{class:!0});var l=E(e);a=$(l,"A",{href:!0,class:!0});var h=E(a);s=ne(h,t),h.forEach(v),u=V(l),l.forEach(v),this.h()},h(){_(a,"href",i=""+(W+r[7].href)),_(a,"class","svelte-1oucj0z"),Q(a,"active",r[0]===W+r[7].href),_(e,"class","svelte-1oucj0z")},m(n,l){D(n,e,l),g(e,a),g(a,s),g(e,u),f||(c=H(a,"click",r[2]),f=!0)},p(n,l){l&2&&t!==(t=n[7].label+"")&&re(s,t),l&2&&i!==(i=""+(W+n[7].href))&&_(a,"href",i),l&3&&Q(a,"active",n[0]===W+n[7].href)},d(n){n&&v(e),f=!1,c()}}}function ee(r){let e,a,t=r[4].title+"",s,i,u,f,c=B(r[4].items),n=[];for(let l=0;l<c.length;l+=1)n[l]=x(y(r,c,l));return{c(){e=b("li"),a=b("span"),s=ae(t),i=N(),u=b("ul");for(let l=0;l<n.length;l+=1)n[l].c();f=N(),this.h()},l(l){e=$(l,"LI",{class:!0});var h=E(e);a=$(h,"SPAN",{class:!0});var d=E(a);s=ne(d,t),d.forEach(v),i=V(h),u=$(h,"UL",{class:!0});var I=E(u);for(let k=0;k<n.length;k+=1)n[k].l(I);I.forEach(v),f=V(h),h.forEach(v),this.h()},h(){_(a,"class","sidenav_folder svelte-1oucj0z"),_(u,"class","svelte-1oucj0z"),_(e,"class","svelte-1oucj0z")},m(l,h){D(l,e,h),g(e,a),g(a,s),g(e,i),g(e,u);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(u,null);g(e,f)},p(l,h){if(h&2&&t!==(t=l[4].title+"")&&re(s,t),h&7){c=B(l[4].items);let d;for(d=0;d<c.length;d+=1){const I=y(l,c,d);n[d]?n[d].p(I,h):(n[d]=x(I),n[d].c(),n[d].m(u,null))}for(;d<n.length;d+=1)n[d].d(1);n.length=c.length}},d(l){l&&v(e),le(n,l)}}}function we(r){let e,a="Documentation",t,s,i,u=B(r[1]),f=[];for(let c=0;c<u.length;c+=1)f[c]=ee(Z(r,u,c));return{c(){e=b("div"),e.textContent=a,t=N(),s=b("nav"),i=b("ul");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){e=$(c,"DIV",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-vv0xr2"&&(e.textContent=a),t=V(c),s=$(c,"NAV",{class:!0});var n=E(s);i=$(n,"UL",{class:!0});var l=E(i);for(let h=0;h<f.length;h+=1)f[h].l(l);l.forEach(v),n.forEach(v),this.h()},h(){_(e,"class","sidenav_heading svelte-1oucj0z"),_(i,"class","svelte-1oucj0z"),_(s,"class","sidenav svelte-1oucj0z")},m(c,n){D(c,e,n),D(c,t,n),D(c,s,n),g(s,i);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(i,null)},p(c,[n]){if(n&7){u=B(c[1]);let l;for(l=0;l<u.length;l+=1){const h=Z(c,u,l);f[l]?f[l].p(h,n):(f[l]=ee(h),f[l].c(),f[l].m(i,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=u.length}},i:P,o:P,d(c){c&&(v(e),v(t),v(s)),le(f,c)}}}function Ee(r,e,a){let{url:t=""}=e;const s=de();let{folders:i=[]}=e;function u(){s("toggleMobilenav")}return r.$$set=f=>{"url"in f&&a(0,t=f.url),"folders"in f&&a(1,i=f.folders)},[t,i,u]}class ke extends X{constructor(e){super(),J(this,e,Ee,we,O,{url:0,folders:1})}}function te(r){let e,a,t;return{c(){e=b("div"),this.h()},l(s){e=$(s,"DIV",{class:!0,tabindex:!0,role:!0}),E(e).forEach(v),this.h()},h(){_(e,"class","backdrop svelte-18grnv0"),_(e,"tabindex","-1"),_(e,"role","button")},m(s,i){D(s,e,i),a||(t=[H(e,"click",r[3]),H(e,"keypress",r[3])],a=!0)},p:P,d(s){s&&v(e),a=!1,me(t)}}}function De(r){let e,a,t,s,i,u,f,c,n,l,h,d,I,k,q,S,j;e=new pe({props:{isFixed:!0,hasMobilenavicon:!0,showMobilenav:r[2]}}),e.$on("toggleMobilenav",r[3]),u=new ke({props:{folders:r[1],url:r[0]}}),u.$on("toggleMobilenav",r[3]);const G=r[5].default,w=oe(G,r,r[4],null);d=new ge({}),k=new be({props:{hasBordertop:!0}});let p=r[2]&&te(r);return{c(){C(e.$$.fragment),a=N(),t=b("div"),s=b("div"),i=b("div"),C(u.$$.fragment),c=N(),n=b("div"),l=b("div"),w&&w.c(),h=N(),C(d.$$.fragment),I=N(),C(k.$$.fragment),q=N(),p&&p.c(),S=Y(),this.h()},l(o){L(e.$$.fragment,o),a=V(o),t=$(o,"DIV",{class:!0});var m=E(t);s=$(m,"DIV",{class:!0});var F=E(s);i=$(F,"DIV",{class:!0});var A=E(i);L(u.$$.fragment,A),A.forEach(v),c=V(F),n=$(F,"DIV",{class:!0});var K=E(n);l=$(K,"DIV",{class:!0});var T=E(l);w&&w.l(T),h=V(T),L(d.$$.fragment,T),T.forEach(v),K.forEach(v),F.forEach(v),m.forEach(v),I=V(o),L(k.$$.fragment,o),q=V(o),p&&p.l(o),S=Y(),this.h()},h(){_(i,"class",f="sidebar "+(r[2]?"show":"")+" svelte-18grnv0"),_(l,"class","content svelte-18grnv0"),_(n,"class","content-wrapper svelte-18grnv0"),_(s,"class","mainaside_container svelte-18grnv0"),_(t,"class","mainaside svelte-18grnv0")},m(o,m){R(e,o,m),D(o,a,m),D(o,t,m),g(t,s),g(s,i),R(u,i,null),g(s,c),g(s,n),g(n,l),w&&w.m(l,null),g(l,h),R(d,l,null),D(o,I,m),R(k,o,m),D(o,q,m),p&&p.m(o,m),D(o,S,m),j=!0},p(o,[m]){const F={};m&4&&(F.showMobilenav=o[2]),e.$set(F);const A={};m&2&&(A.folders=o[1]),m&1&&(A.url=o[0]),u.$set(A),(!j||m&4&&f!==(f="sidebar "+(o[2]?"show":"")+" svelte-18grnv0"))&&_(i,"class",f),w&&w.p&&(!j||m&16)&&ie(w,G,o,o[4],j?ce(G,o[4],m,null):fe(o[4]),null),o[2]?p?p.p(o,m):(p=te(o),p.c(),p.m(S.parentNode,S)):p&&(p.d(1),p=null)},i(o){j||(M(e.$$.fragment,o),M(u.$$.fragment,o),M(w,o),M(d.$$.fragment,o),M(k.$$.fragment,o),j=!0)},o(o){z(e.$$.fragment,o),z(u.$$.fragment,o),z(w,o),z(d.$$.fragment,o),z(k.$$.fragment,o),j=!1},d(o){o&&(v(a),v(t),v(I),v(q),v(S)),U(e,o),U(u),w&&w.d(o),U(d),U(k,o),p&&p.d(o)}}}function se(){document.querySelectorAll(".content table").forEach(e=>{if(!e.parentNode.classList.contains("table-wrapper")){const a=document.createElement("div");a.className="table-wrapper",a.style.overflowX="scroll",e.parentNode.insertBefore(a,e),a.appendChild(e)}})}function Ie(r,e,a){let{$$slots:t={},$$scope:s}=e,{url:i=""}=e,{sidenavFolders:u=[]}=e,f=!1;function c(){a(2,f=!f)}return he(()=>{se()}),ve(()=>{se()}),r.$$set=n=>{"url"in n&&a(0,i=n.url),"sidenavFolders"in n&&a(1,u=n.sidenavFolders),"$$scope"in n&&a(4,s=n.$$scope)},[i,u,f,c,s,t]}class Ne extends X{constructor(e){super(),J(this,e,Ie,De,O,{url:0,sidenavFolders:1})}}function Ve(r){let e;const a=r[2].default,t=oe(a,r,r[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&8)&&ie(t,a,s,s[3],e?ce(a,s[3],i,null):fe(s[3]),null)},i(s){e||(M(t,s),e=!0)},o(s){z(t,s),e=!1},d(s){t&&t.d(s)}}}function je(r){let e,a;return e=new Ne({props:{sidenavFolders:r[1],url:r[0].url.pathname,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){R(e,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.url=t[0].url.pathname),s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){z(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function Fe(r,e,a){let t;_e(r,$e,d=>a(0,t=d));let{$$slots:s={},$$scope:i}=e;const h=[{title:"Overview",items:[{href:"/docs",label:"Why Gardenjs?"}]},{title:"Get Started",items:[{href:"/docs/get-started/install",label:"Install"},{href:"/docs/get-started/install-renderer",label:"Install Renderer Plugin"},{href:"/docs/get-started/settings",label:"Settings"},{href:"/docs/get-started/examples",label:"Examples"},{href:"/docs/get-started/hooks",label:"Hooks"},{href:"/docs/get-started/decorators",label:"Decorators"}]},{title:"Renderer",items:[{href:"/docs/renderer",label:"Write New Renderer"}]},{title:"Add Notes",items:[{href:"/docs/notes",label:"Add Notes"}]},{title:"What comes next?",items:[{href:"/docs/roadmap",label:"Roadmap"}]}];return r.$$set=d=>{"$$scope"in d&&a(3,i=d.$$scope)},[t,h,s,i]}class Re extends X{constructor(e){super(),J(this,e,Fe,je,O,{})}}export{Re as component};