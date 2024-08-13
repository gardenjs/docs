import{s as J,e as j,a as k,c as G,b as w,g as y,f as h,r as f,i as p,h as d,n as W,t as U,d as F,j as N,o as pe,u as ge,p as ve,q as we,w as ae,S as me,m as _e,W as Z,X as ee,H as be,v as ke,U as oe,V as ye,l as $e}from"../chunks/scheduler.U_2hvb7C.js";import{S as R,i as Y,t as b,b as $,c as E,a as x,m as C,d as q,g as je,e as Ge}from"../chunks/index.BoCreYX2.js";import{M as Ee}from"../chunks/Main.UqK-dP87.js";import{e as re}from"../chunks/each.D6YF6ztN.js";import{D as te}from"../chunks/Dashedlines.C8INLocy.js";import{b as se}from"../chunks/paths.BP_h8vOO.js";function xe(o){let e,r;return{c(){e=j("h2"),r=U(o[1]),this.h()},l(t){e=G(t,"H2",{class:!0});var n=w(e);r=F(n,o[1]),n.forEach(h),this.h()},h(){f(e,"class","svelte-2wmb30")},m(t,n){p(t,e,n),d(e,r)},p(t,n){n&2&&N(r,t[1])},d(t){t&&h(e)}}}function Ce(o){let e,r,t;return{c(){e=j("h1"),r=j("span"),t=U(o[0]),this.h()},l(n){e=G(n,"H1",{class:!0});var a=w(e);r=G(a,"SPAN",{class:!0});var l=w(r);t=F(l,o[0]),l.forEach(h),a.forEach(h),this.h()},h(){f(r,"class","svelte-2wmb30"),f(e,"class","svelte-2wmb30")},m(n,a){p(n,e,a),d(e,r),d(r,t)},p(n,a){a&1&&N(t,n[0])},d(n){n&&h(e)}}}function ie(o){let e,r;return{c(){e=j("p"),r=U(o[2]),this.h()},l(t){e=G(t,"P",{class:!0});var n=w(e);r=F(n,o[2]),n.forEach(h),this.h()},h(){f(e,"class","svelte-2wmb30")},m(t,n){p(t,e,n),d(e,r)},p(t,n){n&4&&N(r,t[2])},d(t){t&&h(e)}}}function qe(o){let e,r,t;function n(c,u){return c[0]?Ce:xe}let a=n(o),l=a(o),s=o[2]&&ie(o);return{c(){e=j("div"),l.c(),r=k(),s&&s.c(),this.h()},l(c){e=G(c,"DIV",{class:!0});var u=w(e);l.l(u),r=y(u),s&&s.l(u),u.forEach(h),this.h()},h(){f(e,"class",t="chapter "+(o[3]?ce:"")+" svelte-2wmb30")},m(c,u){p(c,e,u),l.m(e,null),d(e,r),s&&s.m(e,null)},p(c,[u]){a===(a=n(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(e,r))),c[2]?s?s.p(c,u):(s=ie(c),s.c(),s.m(e,null)):s&&(s.d(1),s=null),u&8&&t!==(t="chapter "+(c[3]?ce:"")+" svelte-2wmb30")&&f(e,"class",t)},i:W,o:W,d(c){c&&h(e),l.d(),s&&s.d()}}}let ce="has-h1";function ze(o,e,r){let{pagetitle:t=""}=e,{title:n=""}=e,{chaptertext:a=""}=e,{isPagetitle:l=!1}=e;return o.$$set=s=>{"pagetitle"in s&&r(0,t=s.pagetitle),"title"in s&&r(1,n=s.title),"chaptertext"in s&&r(2,a=s.chaptertext),"isPagetitle"in s&&r(3,l=s.isPagetitle)},[t,n,a,l]}class le extends R{constructor(e){super(),Y(this,e,ze,qe,J,{pagetitle:0,title:1,chaptertext:2,isPagetitle:3})}}function Me(o){let e,r,t;const n=o[3].default,a=pe(n,o,o[2],null);return{c(){e=j("div"),a&&a.c(),this.h()},l(l){e=G(l,"DIV",{class:!0});var s=w(e);a&&a.l(s),s.forEach(h),this.h()},h(){f(e,"class",r="cards "+(o[1][o[0]+""]??"")+" svelte-1d5rmet")},m(l,s){p(l,e,s),a&&a.m(e,null),t=!0},p(l,[s]){a&&a.p&&(!t||s&4)&&ge(a,n,l,l[2],t?we(n,l[2],s,null):ve(l[2]),null),(!t||s&1&&r!==(r="cards "+(l[1][l[0]+""]??"")+" svelte-1d5rmet"))&&f(e,"class",r)},i(l){t||(b(a,l),t=!0)},o(l){$(a,l),t=!1},d(l){l&&h(e),a&&a.d(l)}}}function Se(o,e,r){let{$$slots:t={},$$scope:n}=e,{columns:a=1}=e;const l={2:"grid-2cols",3:"grid-3cols"};return o.$$set=s=>{"columns"in s&&r(0,a=s.columns),"$$scope"in s&&r(2,n=s.$$scope)},[a,l,n,t]}class Be extends R{constructor(e){super(),Y(this,e,Se,Me,J,{columns:0})}}function Ie(o){let e,r,t,n,a,l,s;return{c(){e=j("div"),r=j("h3"),t=U(o[0]),n=k(),a=j("p"),l=U(o[1]),this.h()},l(c){e=G(c,"DIV",{class:!0});var u=w(e);r=G(u,"H3",{class:!0});var g=w(r);t=F(g,o[0]),g.forEach(h),n=y(u),a=G(u,"P",{class:!0});var m=w(a);l=F(m,o[1]),m.forEach(h),u.forEach(h),this.h()},h(){f(r,"class","svelte-3cp7tz"),f(a,"class","svelte-3cp7tz"),f(e,"class",s="card "+o[2]+" "+o[3]+" svelte-3cp7tz")},m(c,u){p(c,e,u),d(e,r),d(r,t),d(e,n),d(e,a),d(a,l)},p(c,[u]){u&1&&N(t,c[0]),u&2&&N(l,c[1]),u&12&&s!==(s="card "+c[2]+" "+c[3]+" svelte-3cp7tz")&&f(e,"class",s)},i:W,o:W,d(c){c&&h(e)}}}function Ae(o,e,r){let t,{title:n}=e,{text:a}=e,{rotation:l=""}=e,{columns:s=1}=e,{bgColor:c=""}=e;return o.$$set=u=>{"title"in u&&r(0,n=u.title),"text"in u&&r(1,a=u.text),"rotation"in u&&r(4,l=u.rotation),"columns"in u&&r(5,s=u.columns),"bgColor"in u&&r(2,c=u.bgColor)},o.$$.update=()=>{o.$$.dirty&48&&r(3,t=l?`rotate_${l}-${s}col`:"")},[n,a,c,t,l,s]}class We extends R{constructor(e){super(),Y(this,e,Ae,Ie,J,{title:0,text:1,rotation:4,columns:5,bgColor:2})}}function ue(o,e,r){const t=o.slice();return t[6]=e[r],t[8]=r,t}function fe(o){let e,r;return e=new We({props:{bgColor:o[5],rotation:o[6].rotation,columns:o[4],title:o[6].title,text:o[6].text}}),{c(){E(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){C(e,t,n),r=!0},p(t,n){const a={};n&32&&(a.bgColor=t[5]),n&1&&(a.rotation=t[6].rotation),n&16&&(a.columns=t[4]),n&1&&(a.title=t[6].title),n&1&&(a.text=t[6].text),e.$set(a)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function He(o){let e,r,t=re(o[0]),n=[];for(let l=0;l<t.length;l+=1)n[l]=fe(ue(o,t,l));const a=l=>$(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=ae()},l(l){for(let s=0;s<n.length;s+=1)n[s].l(l);e=ae()},m(l,s){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,s);p(l,e,s),r=!0},p(l,s){if(s&49){t=re(l[0]);let c;for(c=0;c<t.length;c+=1){const u=ue(l,t,c);n[c]?(n[c].p(u,s),b(n[c],1)):(n[c]=fe(u),n[c].c(),b(n[c],1),n[c].m(e.parentNode,e))}for(je(),c=t.length;c<n.length;c+=1)a(c);Ge()}},i(l){if(!r){for(let s=0;s<t.length;s+=1)b(n[s]);r=!0}},o(l){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)$(n[s]);r=!1},d(l){l&&h(e),me(n,l)}}}function Ve(o){let e,r,t,n;return e=new le({props:{title:o[2],pagetitle:o[1],chaptertext:o[3]}}),t=new Be({props:{columns:o[4],$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),r=k(),E(t.$$.fragment)},l(a){x(e.$$.fragment,a),r=y(a),x(t.$$.fragment,a)},m(a,l){C(e,a,l),p(a,r,l),C(t,a,l),n=!0},p(a,[l]){const s={};l&4&&(s.title=a[2]),l&2&&(s.pagetitle=a[1]),l&8&&(s.chaptertext=a[3]),e.$set(s);const c={};l&16&&(c.columns=a[4]),l&561&&(c.$$scope={dirty:l,ctx:a}),t.$set(c)},i(a){n||(b(e.$$.fragment,a),b(t.$$.fragment,a),n=!0)},o(a){$(e.$$.fragment,a),$(t.$$.fragment,a),n=!1},d(a){a&&h(r),q(e,a),q(t,a)}}}function Pe(o,e,r){let{cards:t=[]}=e,{pagetitle:n=""}=e,{title:a=""}=e,{chaptertext:l=""}=e,{columns:s=1}=e,{bgColor:c}=e;return o.$$set=u=>{"cards"in u&&r(0,t=u.cards),"pagetitle"in u&&r(1,n=u.pagetitle),"title"in u&&r(2,a=u.title),"chaptertext"in u&&r(3,l=u.chaptertext),"columns"in u&&r(4,s=u.columns),"bgColor"in u&&r(5,c=u.bgColor)},[t,n,a,l,s,c]}class ne extends R{constructor(e){super(),Y(this,e,Pe,Ve,J,{cards:0,pagetitle:1,title:2,chaptertext:3,columns:4,bgColor:5})}}function Oe(o){let e,r='<ul class="logos svelte-1p11ab2"><li class="svelte-1p11ab2"><svg class="icon svelte-1p11ab2" role="img" viewBox="0 0 107 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><title>Svelte</title><g fill-rule="nonzero"><path d="M99.965 16.936C88.08-.075 64.605-5.118 47.632 5.696L17.823 24.695A34.21 34.21 0 002.373 47.6a36.024 36.024 0 003.551 23.121A34.317 34.317 0 00.809 83.503a36.46 36.46 0 006.226 27.561c11.888 17.014 35.362 22.054 52.333 11.24l29.809-18.999A34.207 34.207 0 00104.626 80.4a36.035 36.035 0 00-3.549-23.122 34.288 34.288 0 005.114-12.78 36.444 36.444 0 00-6.226-27.56" fill="#ff3e00"></path><path d="M44.72 112.665c-9.587 2.492-19.769-1.282-25.414-9.42A21.926 21.926 0 0115.56 86.67a20.83 20.83 0 01.713-2.783l.56-1.712 1.528 1.121a38.438 38.438 0 0011.66 5.827l1.109.336-.103 1.106a6.691 6.691 0 001.202 4.432 7.144 7.144 0 007.653 2.84 6.6 6.6 0 001.83-.805l29.81-18.996a6.21 6.21 0 002.801-4.15 6.624 6.624 0 00-1.129-4.996 7.149 7.149 0 00-7.655-2.842 6.585 6.585 0 00-1.828.805l-11.375 7.251a21.755 21.755 0 01-6.053 2.658c-9.586 2.493-19.768-1.282-25.414-9.42a21.923 21.923 0 01-3.745-16.574 20.569 20.569 0 019.292-13.774l29.807-18.997a21.776 21.776 0 016.057-2.662c9.586-2.492 19.768 1.282 25.413 9.42A21.926 21.926 0 0191.44 41.33a21.006 21.006 0 01-.714 2.783l-.56 1.712-1.526-1.12a38.411 38.411 0 00-11.662-5.828l-1.109-.336.103-1.107a6.704 6.704 0 00-1.202-4.432 7.146 7.146 0 00-7.653-2.84 6.6 6.6 0 00-1.83.805l-29.81 18.998a6.2 6.2 0 00-2.799 4.148 6.616 6.616 0 001.127 4.997 7.15 7.15 0 007.655 2.841 6.6 6.6 0 001.83-.805l11.375-7.248a21.679 21.679 0 016.051-2.66c9.586-2.493 19.77 1.281 25.414 9.42a21.92 21.92 0 013.745 16.574 20.578 20.578 0 01-9.291 13.775l-29.807 18.997a21.776 21.776 0 01-6.058 2.661" fill="#fff"></path></g></svg></li> <li class="svelte-1p11ab2"><svg class="icon svelte-1p11ab2" role="img" viewBox="0 0 148 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><title>Vue</title><path d="M91.09 0L74 29.557 56.91 0H0l74 128L148 0H91.09z" fill="#42b883" fill-rule="nonzero"></path><path d="M91.09 0L74 29.557 56.91 0H29.597L74 76.798 118.403 0H91.09z" fill="#35495e" fill-rule="nonzero"></path></svg></li> <li class="svelte-1p11ab2"><svg class="icon svelte-1p11ab2" role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><title>React</title><circle r="2.05" fill="#61dafb" transform="translate(64.053 64) scale(5.50477)" class="svelte-1p11ab2"></circle><g transform="matrix(5.5 0 0 5.50477 64 64)" fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg></li> <li class="svelte-1p11ab2"><svg class="icon svelte-1p11ab2" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>HTML</title><path fill="#E34F26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#EF652A" d="M256 472l149-41 35-394H256"></path><path fill="#EBEBEB" d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm0 147h-1l-63-17-4-45h-56l7 89 116 32h1z"></path><path fill="#FFF" d="M255 208v57h70l-7 73-63 17v59l116-32 1-10 13-149 2-15h-16zm0-114v56h137l1-12 3-29 1-15z"></path></svg></li> <li class="svelte-1p11ab2"><svg class="icon placeholder svelte-1p11ab2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Write your own Gardenjs renderer plugin to support more JS framework.</title><circle cx="12" cy="12" r="1" class="svelte-1p11ab2"></circle><circle cx="19" cy="12" r="1" class="svelte-1p11ab2"></circle><circle cx="5" cy="12" r="1" class="svelte-1p11ab2"></circle></svg></li></ul>';return{c(){e=j("div"),e.innerHTML=r,this.h()},l(t){e=G(t,"DIV",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-vzbeo2"&&(e.innerHTML=r),this.h()},h(){f(e,"class","logo_gallery svelte-1p11ab2")},m(t,n){p(t,e,n)},p:W,i:W,o:W,d(t){t&&h(e)}}}class De extends R{constructor(e){super(),Y(this,e,null,Oe,J,{})}}function Te(o){let e,r,t,n,a,l,s,c,u;return{c(){e=j("blockquote"),r=Z("svg"),t=Z("path"),n=k(),a=j("p"),l=U(o[0]),s=k(),c=j("span"),u=U(o[1]),this.h()},l(g){e=G(g,"BLOCKQUOTE",{class:!0});var m=w(e);r=ee(m,"svg",{class:!0,role:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var B=w(r);t=ee(B,"path",{d:!0}),w(t).forEach(h),B.forEach(h),n=y(m),a=G(m,"P",{class:!0});var z=w(a);l=F(z,o[0]),z.forEach(h),s=y(m),c=G(m,"SPAN",{class:!0});var I=w(c);u=F(I,o[1]),I.forEach(h),m.forEach(h),this.h()},h(){f(t,"d","M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"),f(r,"class","icon svelte-1bzlkgj"),f(r,"role","img"),f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"width","24"),f(r,"height","24"),f(r,"viewBox","0 0 24 24"),f(r,"fill","none"),f(r,"stroke","currentColor"),f(r,"stroke-width","2"),f(r,"stroke-linecap","round"),f(r,"stroke-linejoin","round"),f(a,"class","quote svelte-1bzlkgj"),f(c,"class","author svelte-1bzlkgj"),f(e,"class","blockquote svelte-1bzlkgj")},m(g,m){p(g,e,m),d(e,r),d(r,t),d(e,n),d(e,a),d(a,l),d(e,s),d(e,c),d(c,u)},p(g,[m]){m&1&&N(l,g[0]),m&2&&N(u,g[1])},i:W,o:W,d(g){g&&h(e)}}}function Le(o,e,r){let{quote:t}=e,{author:n}=e;return o.$$set=a=>{"quote"in a&&r(0,t=a.quote),"author"in a&&r(1,n=a.author)},[t,n]}class Ue extends R{constructor(e){super(),Y(this,e,Le,Te,J,{quote:0,author:1})}}function he(o,e,r){const t=o.slice();return t[3]=e[r],t[5]=r,t}function Fe(o){let e,r,t;return{c(){e=Z("svg"),r=Z("path"),t=Z("path"),this.h()},l(n){e=ee(n,"svg",{class:!0,role:!0,xmlns:!0,width:!0,viewBox:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var a=w(e);r=ee(a,"path",{d:!0}),w(r).forEach(h),t=ee(a,"path",{d:!0}),w(t).forEach(h),a.forEach(h),this.h()},h(){f(r,"d","M5 12h14"),f(t,"d","M12 5v14"),f(e,"class","icon svelte-lm0qaw"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"viewBox","0 0 24 24"),f(e,"height","24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","3"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(n,a){p(n,e,a),d(e,r),d(e,t)},d(n){n&&h(e)}}}function Ne(o){let e,r;return{c(){e=Z("svg"),r=Z("path"),this.h()},l(t){e=ee(t,"svg",{class:!0,role:!0,xmlns:!0,width:!0,viewBox:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var n=w(e);r=ee(n,"path",{d:!0}),w(r).forEach(h),n.forEach(h),this.h()},h(){f(r,"d","M5 12h14"),f(e,"class","icon svelte-lm0qaw"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"viewBox","0 0 24 24"),f(e,"height","24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","3"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(t,n){p(t,e,n),d(e,r)},d(t){t&&h(e)}}}function de(o){let e,r,t,n=o[3].label+"",a,l,s,c,u,g,m,B,z=o[3].content+"",I,H,L,V;function K(S,_){return S[3].isOpen?Ne:Fe}let A=K(o),M=A(o);function D(){return o[2](o[5])}return{c(){e=j("div"),r=j("button"),t=j("span"),a=U(n),l=k(),s=j("span"),M.c(),u=k(),g=j("div"),m=j("div"),B=new be(!1),H=k(),this.h()},l(S){e=G(S,"DIV",{class:!0});var _=w(e);r=G(_,"BUTTON",{class:!0});var T=w(r);t=G(T,"SPAN",{class:!0});var P=w(t);a=F(P,n),P.forEach(h),l=y(T),s=G(T,"SPAN",{class:!0});var Q=w(s);M.l(Q),Q.forEach(h),T.forEach(h),u=y(_),g=G(_,"DIV",{class:!0,"aria-hidden":!0});var O=w(g);m=G(O,"DIV",{class:!0});var X=w(m);B=ke(X,!1),X.forEach(h),O.forEach(h),H=y(_),_.forEach(h),this.h()},h(){f(t,"class","accordion_label svelte-lm0qaw"),f(s,"class","accordion_icon"),f(r,"class",c="accordion_btn "+(o[3].isOpen?"active":"")+" svelte-lm0qaw"),B.a=null,f(m,"class","accordion_content svelte-lm0qaw"),f(g,"class","panel svelte-lm0qaw"),f(g,"aria-hidden",I=o[3].isOpen?"false":"true"),oe(g,"show",o[3].isOpen),f(e,"class","accordion_item svelte-lm0qaw")},m(S,_){p(S,e,_),d(e,r),d(r,t),d(t,a),d(r,l),d(r,s),M.m(s,null),d(e,u),d(e,g),d(g,m),B.m(z,m),d(e,H),L||(V=ye(r,"click",D),L=!0)},p(S,_){o=S,_&1&&n!==(n=o[3].label+"")&&N(a,n),A!==(A=K(o))&&(M.d(1),M=A(o),M&&(M.c(),M.m(s,null))),_&1&&c!==(c="accordion_btn "+(o[3].isOpen?"active":"")+" svelte-lm0qaw")&&f(r,"class",c),_&1&&z!==(z=o[3].content+"")&&B.p(z),_&1&&I!==(I=o[3].isOpen?"false":"true")&&f(g,"aria-hidden",I),_&1&&oe(g,"show",o[3].isOpen)},d(S){S&&h(e),M.d(),L=!1,V()}}}function Je(o){let e,r=re(o[0]),t=[];for(let n=0;n<r.length;n+=1)t[n]=de(he(o,r,n));return{c(){e=j("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=G(n,"DIV",{class:!0});var a=w(e);for(let l=0;l<t.length;l+=1)t[l].l(a);a.forEach(h),this.h()},h(){f(e,"class","accordion svelte-lm0qaw")},m(n,a){p(n,e,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,[a]){if(a&3){r=re(n[0]);let l;for(l=0;l<r.length;l+=1){const s=he(n,r,l);t[l]?t[l].p(s,a):(t[l]=de(s),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},i:W,o:W,d(n){n&&h(e),me(t,n)}}}function Re(o,e,r){let{items:t=[]}=e;function n(l){r(0,t=t.map((s,c)=>c===l?{...s,isOpen:!s.isOpen}:{...s,isOpen:!1}))}const a=l=>n(l);return o.$$set=l=>{"items"in l&&r(0,t=l.items)},[t,n,a]}class Ye extends R{constructor(e){super(),Y(this,e,Re,Je,J,{items:0})}}function Ke(o){let e,r,t,n,a,l,s,c,u,g,m,B,z,I,H,L,V,K,A,M,D,S,_,T,P,Q,O,X;return e=new le({props:{isPagetitle:!0,pagetitle:"UI component library explorer for JS frameworks",chaptertext:"Gardenjs promotes modular and reusable code, streamlines collaboration between team members and increases overall productivity. Gardenjs is MIT licensed and free."}}),t=new De({}),a=new te({props:{dashedlines2:!0}}),s=new Ue({props:{quote:"«Building a frontend is like gardening. Grow your components and layouts, maintain them and control their growth. Build great products and reap the rewards of your work!»",author:"John Doe, coder & gardener"}}),u=new te({props:{dashedlines3:!0}}),m=new ne({props:{title:"Why Gardenjs?",chaptertext:"Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution.",columns:"2",bgColor:"yellow",cards:o[0]}}),z=new te({props:{dashedlines4:!0}}),H=new ne({props:{title:"Your benefits",chaptertext:"Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution.",columns:"3",bgColor:"turquoise",cards:o[1]}}),V=new te({props:{dashedlines5:!0}}),A=new ne({props:{title:"Would you like to get involved?",chaptertext:"Gardenjs is published under the MIT license and free to use. We are therefore particularly pleased about your support.",columns:"2",cards:o[2]}}),D=new te({props:{dashedlines6:!0}}),_=new le({props:{title:"FAQ"}}),P=new Ye({props:{items:o[3]}}),O=new te({props:{dashedlines7:!0}}),{c(){E(e.$$.fragment),r=k(),E(t.$$.fragment),n=k(),E(a.$$.fragment),l=k(),E(s.$$.fragment),c=k(),E(u.$$.fragment),g=k(),E(m.$$.fragment),B=k(),E(z.$$.fragment),I=k(),E(H.$$.fragment),L=k(),E(V.$$.fragment),K=k(),E(A.$$.fragment),M=k(),E(D.$$.fragment),S=k(),E(_.$$.fragment),T=k(),E(P.$$.fragment),Q=k(),E(O.$$.fragment)},l(i){x(e.$$.fragment,i),r=y(i),x(t.$$.fragment,i),n=y(i),x(a.$$.fragment,i),l=y(i),x(s.$$.fragment,i),c=y(i),x(u.$$.fragment,i),g=y(i),x(m.$$.fragment,i),B=y(i),x(z.$$.fragment,i),I=y(i),x(H.$$.fragment,i),L=y(i),x(V.$$.fragment,i),K=y(i),x(A.$$.fragment,i),M=y(i),x(D.$$.fragment,i),S=y(i),x(_.$$.fragment,i),T=y(i),x(P.$$.fragment,i),Q=y(i),x(O.$$.fragment,i)},m(i,v){C(e,i,v),p(i,r,v),C(t,i,v),p(i,n,v),C(a,i,v),p(i,l,v),C(s,i,v),p(i,c,v),C(u,i,v),p(i,g,v),C(m,i,v),p(i,B,v),C(z,i,v),p(i,I,v),C(H,i,v),p(i,L,v),C(V,i,v),p(i,K,v),C(A,i,v),p(i,M,v),C(D,i,v),p(i,S,v),C(_,i,v),p(i,T,v),C(P,i,v),p(i,Q,v),C(O,i,v),X=!0},p:W,i(i){X||(b(e.$$.fragment,i),b(t.$$.fragment,i),b(a.$$.fragment,i),b(s.$$.fragment,i),b(u.$$.fragment,i),b(m.$$.fragment,i),b(z.$$.fragment,i),b(H.$$.fragment,i),b(V.$$.fragment,i),b(A.$$.fragment,i),b(D.$$.fragment,i),b(_.$$.fragment,i),b(P.$$.fragment,i),b(O.$$.fragment,i),X=!0)},o(i){$(e.$$.fragment,i),$(t.$$.fragment,i),$(a.$$.fragment,i),$(s.$$.fragment,i),$(u.$$.fragment,i),$(m.$$.fragment,i),$(z.$$.fragment,i),$(H.$$.fragment,i),$(V.$$.fragment,i),$(A.$$.fragment,i),$(D.$$.fragment,i),$(_.$$.fragment,i),$(P.$$.fragment,i),$(O.$$.fragment,i),X=!1},d(i){i&&(h(r),h(n),h(l),h(c),h(g),h(B),h(I),h(L),h(K),h(M),h(S),h(T),h(Q)),q(e,i),q(t,i),q(a,i),q(s,i),q(u,i),q(m,i),q(z,i),q(H,i),q(V,i),q(A,i),q(D,i),q(_,i),q(P,i),q(O,i)}}}function Qe(o){let e,r,t,n;return t=new Ee({props:{hasHeaderhead:!0,isWide:!0,$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){e=j("meta"),r=k(),E(t.$$.fragment),this.h()},l(a){const l=$e("svelte-1pzanbv",document.head);e=G(l,"META",{name:!0,content:!0}),l.forEach(h),r=y(a),x(t.$$.fragment,a),this.h()},h(){document.title="Gardenjs UI Component Explorer",f(e,"name","description"),f(e,"content","Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React.")},m(a,l){d(document.head,e),p(a,r,l),C(t,a,l),n=!0},p(a,[l]){const s={};l&16&&(s.$$scope={dirty:l,ctx:a}),t.$set(s)},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&h(r),h(e),q(t,a)}}}function Xe(o){const e=[{title:"Speed of light",text:"Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools.",rotation:"left"},{title:"Fast and efficient handling",text:"Gardenjs offers simple configuration and ensures the uncomplicated, fast and efficient integration of components in Gardenjs.",rotation:"right"},{title:"Use your favorite JS framework",text:"Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Please support us to integrate more frameworks.",rotation:"right"},{title:"Multi-framework compatible",text:"You can also use Gardenjs in a multiframework project by adding another renderer plugin - Storybook and others cannot.",rotation:"left"},{title:"Hooks",text:"With Gardenjs, you can integrate hooks into your components as a versatile and effective way of creating state and effect logic.",rotation:"left"},{title:"Decorators",text:"Components can be extended and customized with Decorators to add additional features and behaviors in Gardenjs - without changing the actual code of the component.",rotation:"right"},{title:"The sleek good-looking alternative",text:"The efficient integration into your framework, numerous features and a clearly organized, beautiful interface make working with Gardenjs a real experience.",rotation:"right"},{title:"Open source and free",text:"Gardenjs is open source and can be used free of charge. We are of course still happy to receive support.",rotation:"left"}],r=[{title:"Organisation",text:"Keep track of the countless components left in large projects and ensure the quality of your work. You can also output an external local library within a project.",rotation:"left"},{title:"Usability",text:"A well thought-out concept, simple operation and numerous small features help to make everyday development work easier.",rotation:"right"},{title:"Representation",text:"Preview components in different viewport sizes and rotations or in a separate browser window. The size of the stage is shown in pixel size.",rotation:"left"},{title:"Collaboration",text:"Publish your component libraries inside your team or to public to simplify collaboration between designers and developers.",rotation:"right"},{title:"Examples",text:"Write examples to showcase and document your components. Output all versions and states of your components.",rotation:"left"},{title:"Documentation",text:"Add any additional information to your components and examples and keep track of all components and for the whole team.",rotation:"right"}],t=[{title:"Support us",text:"You can support us by using Gardenjs, writing a plugin for a new framework (which we will then gladly point out), reporting bugs, giving feedback, making a contribution or writing documentation. We look forward to your support.",rotation:"left"},{title:"Make a donation",text:"A donation and sponsoring model is planned if Gardenjs is well received. A list of possible future features can be found in the documentation. Please contact us if you would like to sponsor one of the features.",rotation:"right"}],n=[{label:"Why have we developed another storybook?",content:"<p>We developed Gardenjs for two reasons: Firstly, Storybook was clearly too slow and a bit too cluttered for us, and secondly, we were enthusiastic about Svelte and wanted to get to know the framework better with an example project. We initially used Gardenjs for our own projects, but since it does some things better than alternative tools, we have now released it. As enthusiastic users of open source software, this gives us the opportunity to give something back.</p>"},{label:"Why is Gardenjs better than the alternatives around Storybook?",content:'<p>The question is provocative and of course each tool has its own advantages and disadvantages. Certainly, the top dog also covers many features that are not or not yet integrated in Gardenjs. But Gardenjs is definitely much faster and leaner. In our opinion, "stories" can be created more efficiently with Gardenjs, the handling is smoother and the option to work with decorators is more flexible. In addition, Gardenjs is multiframework-compatible, unlike Strorybook. And of course Gardenjs looks much better ;) Much is a matter of taste, form your own opinion - we look forward to your feedback.</p>'},{label:"What is the business model of Gardenjs?",content:"<p>We have developed Gardenjs for our own development work. We do not see a market for a paid version or paid functions. Of course, we would appreciate help with the further maintenance and integration of new functions. If Gardenjs is accepted, we will also consider a sponsoring and donation program.</p>"},{label:"Is Gardenjs being actively developed?",content:`<p>We will actively maintain Gardenjs, as we use Gardenjs in many of our projects. Gardenjs is relatively easy to maintain. Whether and how actively we will work through the <a href="${se}/docs/roadmap">roadmap</a> depends on our own needs for Gardenjs and to a large extent on how well Gardenjs is accepted and how much support we receive.</p>`},{label:"Do you have further questions or is there something on your mind?",content:`<p>If you have any problems, please first look in the <a href="${se}/docs">documentation</a> or check whether there is an issue for your problem on <a href="https://github.com/gardenjs/gardenjs" target="_blank">GitHub</a> and otherwise open a new issue. We look forward to your feedback and support. Please feel free to contact us.</p>`}];return[e,r,t,n]}class at extends R{constructor(e){super(),Y(this,e,Xe,Qe,J,{})}}export{at as component};
