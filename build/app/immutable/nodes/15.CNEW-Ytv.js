import{s as U,e as y,a as b,c as j,b as v,g as k,f as h,r as f,i as p,h as d,n as A,t as D,d as T,j as L,o as pe,u as ge,p as ve,q as we,w as oe,S as me,m as _e,W as Q,X,H as be,v as ke,U as ae,V as $e,l as ye}from"../chunks/scheduler.U_2hvb7C.js";import{S as N,i as J,t as _,b as $,c as E,a as M,m as C,d as x,g as je,e as Ge}from"../chunks/index.BoCreYX2.js";import{M as Ee}from"../chunks/Main.UqK-dP87.js";import{e as ne}from"../chunks/each.D6YF6ztN.js";import{D as ee}from"../chunks/Dashedlines.CT2eSUbp.js";import{b as le}from"../chunks/paths.lQQCy2Pc.js";function Me(a){let e,n;return{c(){e=y("h2"),n=D(a[1]),this.h()},l(t){e=j(t,"H2",{class:!0});var r=v(e);n=T(r,a[1]),r.forEach(h),this.h()},h(){f(e,"class","svelte-2wmb30")},m(t,r){p(t,e,r),d(e,n)},p(t,r){r&2&&L(n,t[1])},d(t){t&&h(e)}}}function Ce(a){let e,n,t;return{c(){e=y("h1"),n=y("span"),t=D(a[0]),this.h()},l(r){e=j(r,"H1",{class:!0});var o=v(e);n=j(o,"SPAN",{class:!0});var s=v(n);t=T(s,a[0]),s.forEach(h),o.forEach(h),this.h()},h(){f(n,"class","svelte-2wmb30"),f(e,"class","svelte-2wmb30")},m(r,o){p(r,e,o),d(e,n),d(n,t)},p(r,o){o&1&&L(t,r[0])},d(r){r&&h(e)}}}function ie(a){let e,n;return{c(){e=y("p"),n=D(a[2]),this.h()},l(t){e=j(t,"P",{class:!0});var r=v(e);n=T(r,a[2]),r.forEach(h),this.h()},h(){f(e,"class","svelte-2wmb30")},m(t,r){p(t,e,r),d(e,n)},p(t,r){r&4&&L(n,t[2])},d(t){t&&h(e)}}}function xe(a){let e,n,t;function r(c,u){return c[0]?Ce:Me}let o=r(a),s=o(a),l=a[2]&&ie(a);return{c(){e=y("div"),s.c(),n=b(),l&&l.c(),this.h()},l(c){e=j(c,"DIV",{class:!0});var u=v(e);s.l(u),n=k(u),l&&l.l(u),u.forEach(h),this.h()},h(){f(e,"class",t="chapter "+(a[3]?ce:"")+" svelte-2wmb30")},m(c,u){p(c,e,u),s.m(e,null),d(e,n),l&&l.m(e,null)},p(c,[u]){o===(o=r(c))&&s?s.p(c,u):(s.d(1),s=o(c),s&&(s.c(),s.m(e,n))),c[2]?l?l.p(c,u):(l=ie(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null),u&8&&t!==(t="chapter "+(c[3]?ce:"")+" svelte-2wmb30")&&f(e,"class",t)},i:A,o:A,d(c){c&&h(e),s.d(),l&&l.d()}}}let ce="has-h1";function ze(a,e,n){let{pagetitle:t=""}=e,{title:r=""}=e,{chaptertext:o=""}=e,{isPagetitle:s=!1}=e;return a.$$set=l=>{"pagetitle"in l&&n(0,t=l.pagetitle),"title"in l&&n(1,r=l.title),"chaptertext"in l&&n(2,o=l.chaptertext),"isPagetitle"in l&&n(3,s=l.isPagetitle)},[t,r,o,s]}class se extends N{constructor(e){super(),J(this,e,ze,xe,U,{pagetitle:0,title:1,chaptertext:2,isPagetitle:3})}}function Ie(a){let e,n,t;const r=a[3].default,o=pe(r,a,a[2],null);return{c(){e=y("div"),o&&o.c(),this.h()},l(s){e=j(s,"DIV",{class:!0});var l=v(e);o&&o.l(l),l.forEach(h),this.h()},h(){f(e,"class",n="cards "+(a[1][a[0]+""]??"")+" svelte-1d5rmet")},m(s,l){p(s,e,l),o&&o.m(e,null),t=!0},p(s,[l]){o&&o.p&&(!t||l&4)&&ge(o,r,s,s[2],t?we(r,s[2],l,null):ve(s[2]),null),(!t||l&1&&n!==(n="cards "+(s[1][s[0]+""]??"")+" svelte-1d5rmet"))&&f(e,"class",n)},i(s){t||(_(o,s),t=!0)},o(s){$(o,s),t=!1},d(s){s&&h(e),o&&o.d(s)}}}function qe(a,e,n){let{$$slots:t={},$$scope:r}=e,{columns:o=1}=e;const s={2:"grid-2cols",3:"grid-3cols"};return a.$$set=l=>{"columns"in l&&n(0,o=l.columns),"$$scope"in l&&n(2,r=l.$$scope)},[o,s,r,t]}class Se extends N{constructor(e){super(),J(this,e,qe,Ie,U,{columns:0})}}function We(a){let e,n,t,r,o,s,l;return{c(){e=y("div"),n=y("h3"),t=D(a[0]),r=b(),o=y("p"),s=D(a[1]),this.h()},l(c){e=j(c,"DIV",{class:!0});var u=v(e);n=j(u,"H3",{class:!0});var w=v(n);t=T(w,a[0]),w.forEach(h),r=k(u),o=j(u,"P",{class:!0});var m=v(o);s=T(m,a[1]),m.forEach(h),u.forEach(h),this.h()},h(){f(n,"class","svelte-3cp7tz"),f(o,"class","svelte-3cp7tz"),f(e,"class",l="card "+a[2]+" "+a[3]+" svelte-3cp7tz")},m(c,u){p(c,e,u),d(e,n),d(n,t),d(e,r),d(e,o),d(o,s)},p(c,[u]){u&1&&L(t,c[0]),u&2&&L(s,c[1]),u&12&&l!==(l="card "+c[2]+" "+c[3]+" svelte-3cp7tz")&&f(e,"class",l)},i:A,o:A,d(c){c&&h(e)}}}function Ae(a,e,n){let t,{title:r}=e,{text:o}=e,{rotation:s=""}=e,{columns:l=1}=e,{bgColor:c=""}=e;return a.$$set=u=>{"title"in u&&n(0,r=u.title),"text"in u&&n(1,o=u.text),"rotation"in u&&n(4,s=u.rotation),"columns"in u&&n(5,l=u.columns),"bgColor"in u&&n(2,c=u.bgColor)},a.$$.update=()=>{a.$$.dirty&48&&n(3,t=s?`rotate_${s}-${l}col`:"")},[r,o,c,t,s,l]}class Be extends N{constructor(e){super(),J(this,e,Ae,We,U,{title:0,text:1,rotation:4,columns:5,bgColor:2})}}function ue(a,e,n){const t=a.slice();return t[6]=e[n],t[8]=n,t}function fe(a){let e,n;return e=new Be({props:{bgColor:a[5],rotation:a[6].rotation,columns:a[4],title:a[6].title,text:a[6].text}}),{c(){E(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){C(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.bgColor=t[5]),r&1&&(o.rotation=t[6].rotation),r&16&&(o.columns=t[4]),r&1&&(o.title=t[6].title),r&1&&(o.text=t[6].text),e.$set(o)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function Oe(a){let e,n,t=ne(a[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=fe(ue(a,t,s));const o=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=oe()},l(s){for(let l=0;l<r.length;l+=1)r[l].l(s);e=oe()},m(s,l){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(s,l);p(s,e,l),n=!0},p(s,l){if(l&49){t=ne(s[0]);let c;for(c=0;c<t.length;c+=1){const u=ue(s,t,c);r[c]?(r[c].p(u,l),_(r[c],1)):(r[c]=fe(u),r[c].c(),_(r[c],1),r[c].m(e.parentNode,e))}for(je(),c=t.length;c<r.length;c+=1)o(c);Ge()}},i(s){if(!n){for(let l=0;l<t.length;l+=1)_(r[l]);n=!0}},o(s){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)$(r[l]);n=!1},d(s){s&&h(e),me(r,s)}}}function Pe(a){let e,n,t,r;return e=new se({props:{title:a[2],pagetitle:a[1],chaptertext:a[3]}}),t=new Se({props:{columns:a[4],$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment),n=b(),E(t.$$.fragment)},l(o){M(e.$$.fragment,o),n=k(o),M(t.$$.fragment,o)},m(o,s){C(e,o,s),p(o,n,s),C(t,o,s),r=!0},p(o,[s]){const l={};s&4&&(l.title=o[2]),s&2&&(l.pagetitle=o[1]),s&8&&(l.chaptertext=o[3]),e.$set(l);const c={};s&16&&(c.columns=o[4]),s&561&&(c.$$scope={dirty:s,ctx:o}),t.$set(c)},i(o){r||(_(e.$$.fragment,o),_(t.$$.fragment,o),r=!0)},o(o){$(e.$$.fragment,o),$(t.$$.fragment,o),r=!1},d(o){o&&h(n),x(e,o),x(t,o)}}}function Ve(a,e,n){let{cards:t=[]}=e,{pagetitle:r=""}=e,{title:o=""}=e,{chaptertext:s=""}=e,{columns:l=1}=e,{bgColor:c}=e;return a.$$set=u=>{"cards"in u&&n(0,t=u.cards),"pagetitle"in u&&n(1,r=u.pagetitle),"title"in u&&n(2,o=u.title),"chaptertext"in u&&n(3,s=u.chaptertext),"columns"in u&&n(4,l=u.columns),"bgColor"in u&&n(5,c=u.bgColor)},[t,r,o,s,l,c]}class re extends N{constructor(e){super(),J(this,e,Ve,Pe,U,{cards:0,pagetitle:1,title:2,chaptertext:3,columns:4,bgColor:5})}}function He(a){let e,n='<ul class="logos svelte-15669nt"><li class="svelte-15669nt"><svg class="icon svelte-15669nt" role="img" viewBox="0 0 107 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill-rule="nonzero"><path d="M99.965 16.936C88.08-.075 64.605-5.118 47.632 5.696L17.823 24.695A34.21 34.21 0 002.373 47.6a36.024 36.024 0 003.551 23.121A34.317 34.317 0 00.809 83.503a36.46 36.46 0 006.226 27.561c11.888 17.014 35.362 22.054 52.333 11.24l29.809-18.999A34.207 34.207 0 00104.626 80.4a36.035 36.035 0 00-3.549-23.122 34.288 34.288 0 005.114-12.78 36.444 36.444 0 00-6.226-27.56" fill="#ff3e00" class="svelte-15669nt"></path><path d="M44.72 112.665c-9.587 2.492-19.769-1.282-25.414-9.42A21.926 21.926 0 0115.56 86.67a20.83 20.83 0 01.713-2.783l.56-1.712 1.528 1.121a38.438 38.438 0 0011.66 5.827l1.109.336-.103 1.106a6.691 6.691 0 001.202 4.432 7.144 7.144 0 007.653 2.84 6.6 6.6 0 001.83-.805l29.81-18.996a6.21 6.21 0 002.801-4.15 6.624 6.624 0 00-1.129-4.996 7.149 7.149 0 00-7.655-2.842 6.585 6.585 0 00-1.828.805l-11.375 7.251a21.755 21.755 0 01-6.053 2.658c-9.586 2.493-19.768-1.282-25.414-9.42a21.923 21.923 0 01-3.745-16.574 20.569 20.569 0 019.292-13.774l29.807-18.997a21.776 21.776 0 016.057-2.662c9.586-2.492 19.768 1.282 25.413 9.42A21.926 21.926 0 0191.44 41.33a21.006 21.006 0 01-.714 2.783l-.56 1.712-1.526-1.12a38.411 38.411 0 00-11.662-5.828l-1.109-.336.103-1.107a6.704 6.704 0 00-1.202-4.432 7.146 7.146 0 00-7.653-2.84 6.6 6.6 0 00-1.83.805l-29.81 18.998a6.2 6.2 0 00-2.799 4.148 6.616 6.616 0 001.127 4.997 7.15 7.15 0 007.655 2.841 6.6 6.6 0 001.83-.805l11.375-7.248a21.679 21.679 0 016.051-2.66c9.586-2.493 19.77 1.281 25.414 9.42a21.92 21.92 0 013.745 16.574 20.578 20.578 0 01-9.291 13.775l-29.807 18.997a21.776 21.776 0 01-6.058 2.661" fill="#fff" class="svelte-15669nt"></path></g></svg></li> <li class="svelte-15669nt"><svg class="icon svelte-15669nt" role="img" viewBox="0 0 148 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M91.09 0L74 29.557 56.91 0H0l74 128L148 0H91.09z" fill="#42b883" fill-rule="nonzero" class="svelte-15669nt"></path><path d="M91.09 0L74 29.557 56.91 0H29.597L74 76.798 118.403 0H91.09z" fill="#35495e" fill-rule="nonzero" class="svelte-15669nt"></path></svg></li> <li class="svelte-15669nt"><svg class="icon svelte-15669nt" role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><circle r="2.05" fill="#61dafb" transform="translate(64.053 64) scale(5.50477)"></circle><g transform="matrix(5.5 0 0 5.50477 64 64)" fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg></li> <li class="svelte-15669nt"><svg class="icon placeholder svelte-15669nt" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3a2 2 0 0 0-2 2" class="svelte-15669nt"></path><path d="M19 3a2 2 0 0 1 2 2" class="svelte-15669nt"></path><path d="M21 19a2 2 0 0 1-2 2" class="svelte-15669nt"></path><path d="M5 21a2 2 0 0 1-2-2" class="svelte-15669nt"></path><path d="M9 3h1" class="svelte-15669nt"></path><path d="M9 21h1" class="svelte-15669nt"></path><path d="M14 3h1" class="svelte-15669nt"></path><path d="M14 21h1" class="svelte-15669nt"></path><path d="M3 9v1" class="svelte-15669nt"></path><path d="M21 9v1" class="svelte-15669nt"></path><path d="M3 14v1" class="svelte-15669nt"></path><path d="M21 14v1" class="svelte-15669nt"></path></svg></li></ul>';return{c(){e=y("div"),e.innerHTML=n,this.h()},l(t){e=j(t,"DIV",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-1lmn0q"&&(e.innerHTML=n),this.h()},h(){f(e,"class","logo_gallery svelte-15669nt")},m(t,r){p(t,e,r)},p:A,i:A,o:A,d(t){t&&h(e)}}}class De extends N{constructor(e){super(),J(this,e,null,He,U,{})}}function Te(a){let e,n,t,r,o,s,l,c,u;return{c(){e=y("blockquote"),n=Q("svg"),t=Q("path"),r=b(),o=y("p"),s=D(a[0]),l=b(),c=y("span"),u=D(a[1]),this.h()},l(w){e=j(w,"BLOCKQUOTE",{class:!0});var m=v(e);n=X(m,"svg",{class:!0,role:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var S=v(n);t=X(S,"path",{d:!0}),v(t).forEach(h),S.forEach(h),r=k(m),o=j(m,"P",{class:!0});var q=v(o);s=T(q,a[0]),q.forEach(h),l=k(m),c=j(m,"SPAN",{class:!0});var B=v(c);u=T(B,a[1]),B.forEach(h),m.forEach(h),this.h()},h(){f(t,"d","M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"),f(n,"class","icon svelte-1bzlkgj"),f(n,"role","img"),f(n,"xmlns","http://www.w3.org/2000/svg"),f(n,"width","24"),f(n,"height","24"),f(n,"viewBox","0 0 24 24"),f(n,"fill","none"),f(n,"stroke","currentColor"),f(n,"stroke-width","2"),f(n,"stroke-linecap","round"),f(n,"stroke-linejoin","round"),f(o,"class","quote svelte-1bzlkgj"),f(c,"class","author svelte-1bzlkgj"),f(e,"class","blockquote svelte-1bzlkgj")},m(w,m){p(w,e,m),d(e,n),d(n,t),d(e,r),d(e,o),d(o,s),d(e,l),d(e,c),d(c,u)},p(w,[m]){m&1&&L(s,w[0]),m&2&&L(u,w[1])},i:A,o:A,d(w){w&&h(e)}}}function Le(a,e,n){let{quote:t}=e,{author:r}=e;return a.$$set=o=>{"quote"in o&&n(0,t=o.quote),"author"in o&&n(1,r=o.author)},[t,r]}class Ue extends N{constructor(e){super(),J(this,e,Le,Te,U,{quote:0,author:1})}}function he(a,e,n){const t=a.slice();return t[3]=e[n],t[5]=n,t}function Ne(a){let e,n,t;return{c(){e=Q("svg"),n=Q("path"),t=Q("path"),this.h()},l(r){e=X(r,"svg",{class:!0,role:!0,xmlns:!0,width:!0,viewBox:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=v(e);n=X(o,"path",{d:!0}),v(n).forEach(h),t=X(o,"path",{d:!0}),v(t).forEach(h),o.forEach(h),this.h()},h(){f(n,"d","M5 12h14"),f(t,"d","M12 5v14"),f(e,"class","accordion_icon svelte-12oo3hi"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"viewBox","0 0 24 24"),f(e,"height","24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","3"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(r,o){p(r,e,o),d(e,n),d(e,t)},d(r){r&&h(e)}}}function Je(a){let e,n;return{c(){e=Q("svg"),n=Q("path"),this.h()},l(t){e=X(t,"svg",{class:!0,role:!0,xmlns:!0,width:!0,viewBox:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=v(e);n=X(r,"path",{d:!0}),v(n).forEach(h),r.forEach(h),this.h()},h(){f(n,"d","M5 12h14"),f(e,"class","accordion_icon svelte-12oo3hi"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"viewBox","0 0 24 24"),f(e,"height","24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","3"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(t,r){p(t,e,r),d(e,n)},d(t){t&&h(e)}}}function de(a){let e,n,t,r=a[3].label+"",o,s,l,c,u,w,m,S=a[3].content+"",q,B,O,Y;function P(I,G){return I[3].isOpen?Je:Ne}let H=P(a),z=H(a);function Z(){return a[2](a[5])}return{c(){e=y("div"),n=y("button"),t=y("span"),o=D(r),s=b(),z.c(),c=b(),u=y("div"),w=y("div"),m=new be(!1),B=b(),this.h()},l(I){e=j(I,"DIV",{class:!0});var G=v(e);n=j(G,"BUTTON",{class:!0});var W=v(n);t=j(W,"SPAN",{class:!0});var F=v(t);o=T(F,r),F.forEach(h),s=k(W),z.l(W),W.forEach(h),c=k(G),u=j(G,"DIV",{class:!0,"aria-hidden":!0});var V=v(u);w=j(V,"DIV",{class:!0});var R=v(w);m=ke(R,!1),R.forEach(h),V.forEach(h),B=k(G),G.forEach(h),this.h()},h(){f(t,"class","accordion_label svelte-12oo3hi"),f(n,"class",l="accordion_btn "+(a[3].isOpen?"active":"")+" svelte-12oo3hi"),m.a=null,f(w,"class","accordion_content svelte-12oo3hi"),f(u,"class","panel svelte-12oo3hi"),f(u,"aria-hidden",q=a[3].isOpen?"false":"true"),ae(u,"show",a[3].isOpen),f(e,"class","accordion_item svelte-12oo3hi")},m(I,G){p(I,e,G),d(e,n),d(n,t),d(t,o),d(n,s),z.m(n,null),d(e,c),d(e,u),d(u,w),m.m(S,w),d(e,B),O||(Y=$e(n,"click",Z),O=!0)},p(I,G){a=I,G&1&&r!==(r=a[3].label+"")&&L(o,r),H!==(H=P(a))&&(z.d(1),z=H(a),z&&(z.c(),z.m(n,null))),G&1&&l!==(l="accordion_btn "+(a[3].isOpen?"active":"")+" svelte-12oo3hi")&&f(n,"class",l),G&1&&S!==(S=a[3].content+"")&&m.p(S),G&1&&q!==(q=a[3].isOpen?"false":"true")&&f(u,"aria-hidden",q),G&1&&ae(u,"show",a[3].isOpen)},d(I){I&&h(e),z.d(),O=!1,Y()}}}function Ye(a){let e,n=ne(a[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=de(he(a,n,r));return{c(){e=y("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=j(r,"DIV",{class:!0});var o=v(e);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(h),this.h()},h(){f(e,"class","accordion svelte-12oo3hi")},m(r,o){p(r,e,o);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(r,[o]){if(o&3){n=ne(r[0]);let s;for(s=0;s<n.length;s+=1){const l=he(r,n,s);t[s]?t[s].p(l,o):(t[s]=de(l),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(r){r&&h(e),me(t,r)}}}function Fe(a,e,n){let{items:t=[]}=e;function r(s){n(0,t=t.map((l,c)=>c===s?{...l,isOpen:!l.isOpen}:{...l,isOpen:!1}))}const o=s=>r(s);return a.$$set=s=>{"items"in s&&n(0,t=s.items)},[t,r,o]}class Re extends N{constructor(e){super(),J(this,e,Fe,Ye,U,{items:0})}}function Ke(a){let e,n,t,r,o,s,l,c,u,w,m,S,q,B,O,Y,P,H,z,Z,I,G,W,F,V,R,K,te;return e=new se({props:{isPagetitle:!0,pagetitle:"UI component library explorer for JS frameworks",chaptertext:"Gardenjs promotes modular and reusable code, streamlines collaboration between team members and increases overall productivity. Gardenjs is MIT licensed and free."}}),t=new De({}),o=new ee({props:{dashedlines2:!0}}),l=new Ue({props:{quote:"«Building a frontend is like gardening. Grow your components and layouts, maintain them and control their growth. Build great products and reap the rewards of your work!»",author:"John Doe, coder & gardener"}}),u=new ee({props:{dashedlines3:!0}}),m=new re({props:{title:"Why Gardenjs?",chaptertext:"Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution.",columns:"2",bgColor:"yellow",cards:a[0]}}),q=new ee({props:{dashedlines4:!0}}),O=new re({props:{title:"Your benefits",chaptertext:"Gardenjs supports efficient frontend development with its intuitive user interface, easy integration into projects and super-fast execution.",columns:"3",bgColor:"turquoise",cards:a[1]}}),P=new ee({props:{dashedlines5:!0}}),z=new re({props:{title:"Would you like to get involved?",chaptertext:"Gardenjs is published under the MIT license and free to use. We are therefore particularly pleased about your support.",columns:"2",cards:a[2]}}),I=new ee({props:{dashedlines6:!0}}),W=new se({props:{title:"FAQ"}}),V=new Re({props:{items:a[3]}}),K=new ee({props:{dashedlines7:!0}}),{c(){E(e.$$.fragment),n=b(),E(t.$$.fragment),r=b(),E(o.$$.fragment),s=b(),E(l.$$.fragment),c=b(),E(u.$$.fragment),w=b(),E(m.$$.fragment),S=b(),E(q.$$.fragment),B=b(),E(O.$$.fragment),Y=b(),E(P.$$.fragment),H=b(),E(z.$$.fragment),Z=b(),E(I.$$.fragment),G=b(),E(W.$$.fragment),F=b(),E(V.$$.fragment),R=b(),E(K.$$.fragment)},l(i){M(e.$$.fragment,i),n=k(i),M(t.$$.fragment,i),r=k(i),M(o.$$.fragment,i),s=k(i),M(l.$$.fragment,i),c=k(i),M(u.$$.fragment,i),w=k(i),M(m.$$.fragment,i),S=k(i),M(q.$$.fragment,i),B=k(i),M(O.$$.fragment,i),Y=k(i),M(P.$$.fragment,i),H=k(i),M(z.$$.fragment,i),Z=k(i),M(I.$$.fragment,i),G=k(i),M(W.$$.fragment,i),F=k(i),M(V.$$.fragment,i),R=k(i),M(K.$$.fragment,i)},m(i,g){C(e,i,g),p(i,n,g),C(t,i,g),p(i,r,g),C(o,i,g),p(i,s,g),C(l,i,g),p(i,c,g),C(u,i,g),p(i,w,g),C(m,i,g),p(i,S,g),C(q,i,g),p(i,B,g),C(O,i,g),p(i,Y,g),C(P,i,g),p(i,H,g),C(z,i,g),p(i,Z,g),C(I,i,g),p(i,G,g),C(W,i,g),p(i,F,g),C(V,i,g),p(i,R,g),C(K,i,g),te=!0},p:A,i(i){te||(_(e.$$.fragment,i),_(t.$$.fragment,i),_(o.$$.fragment,i),_(l.$$.fragment,i),_(u.$$.fragment,i),_(m.$$.fragment,i),_(q.$$.fragment,i),_(O.$$.fragment,i),_(P.$$.fragment,i),_(z.$$.fragment,i),_(I.$$.fragment,i),_(W.$$.fragment,i),_(V.$$.fragment,i),_(K.$$.fragment,i),te=!0)},o(i){$(e.$$.fragment,i),$(t.$$.fragment,i),$(o.$$.fragment,i),$(l.$$.fragment,i),$(u.$$.fragment,i),$(m.$$.fragment,i),$(q.$$.fragment,i),$(O.$$.fragment,i),$(P.$$.fragment,i),$(z.$$.fragment,i),$(I.$$.fragment,i),$(W.$$.fragment,i),$(V.$$.fragment,i),$(K.$$.fragment,i),te=!1},d(i){i&&(h(n),h(r),h(s),h(c),h(w),h(S),h(B),h(Y),h(H),h(Z),h(G),h(F),h(R)),x(e,i),x(t,i),x(o,i),x(l,i),x(u,i),x(m,i),x(q,i),x(O,i),x(P,i),x(z,i),x(I,i),x(W,i),x(V,i),x(K,i)}}}function Qe(a){let e,n,t,r;return t=new Ee({props:{hasHeaderhead:!0,isWide:!0,$$slots:{default:[Ke]},$$scope:{ctx:a}}}),{c(){e=y("meta"),n=b(),E(t.$$.fragment),this.h()},l(o){const s=ye("svelte-1pzanbv",document.head);e=j(s,"META",{name:!0,content:!0}),s.forEach(h),n=k(o),M(t.$$.fragment,o),this.h()},h(){document.title="Gardenjs UI Component Explorer",f(e,"name","description"),f(e,"content","Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React.")},m(o,s){d(document.head,e),p(o,n,s),C(t,o,s),r=!0},p(o,[s]){const l={};s&16&&(l.$$scope={dirty:s,ctx:o}),t.$set(l)},i(o){r||(_(t.$$.fragment,o),r=!0)},o(o){$(t.$$.fragment,o),r=!1},d(o){o&&h(n),h(e),x(t,o)}}}function Xe(a){const e=[{title:"Speed of light",text:"Gardenjs starts almost instantly within 2s. In action, code changes in Gardenjs are reflected by the Vite build tool at the speed of light — significantly faster than Storybook or comparable tools.",rotation:"left"},{title:"Fast and efficient handling",text:"Gardenjs offers simple configuration and ensures the uncomplicated, fast and efficient integration of components in Gardenjs.",rotation:"right"},{title:"Use your favorite JS framework",text:"Use Gardenjs out of the box with Svelte, Vue and React. If you want to use a previously unsupported framework, you can write a plugin with little effort, so that your components are rendered in Gardenjs as well. Please support us to integrate more frameworks.",rotation:"right"},{title:"Multi-framework compatible",text:"You can also use Gardenjs in a multiframework project by adding another renderer plugin - Storybook and others cannot.",rotation:"left"},{title:"Hooks",text:"With Gardenjs, you can integrate hooks into your components as a versatile and effective way of creating state and effect logic.",rotation:"left"},{title:"Decorators",text:"Components can be extended and customized with Decorators to add additional features and behaviors in Gardenjs - without changing the actual code of the component.",rotation:"right"},{title:"The sleek good-looking alternative",text:"The efficient integration into your framework, numerous features and a clearly organized, beautiful interface make working with Gardenjs a real experience.",rotation:"right"},{title:"Open source and free",text:"Gardenjs is open source and can be used free of charge. We are of course still happy to receive support.",rotation:"left"}],n=[{title:"Organisation",text:"Keep track of the countless components left in large projects and ensure the quality of your work. You can also output an external local library within a project.",rotation:"left"},{title:"Usability",text:"A well thought-out concept, simple operation and numerous small features help to make everyday development work easier.",rotation:"right"},{title:"Representation",text:"Preview components in different viewport sizes and rotations or in a separate browser window. The size of the stage is shown in pixel size.",rotation:"left"},{title:"Collaboration",text:"Publish your component libraries inside your team or to public to simplify collaboration between designers and developers.",rotation:"right"},{title:"Examples",text:"Write examples to showcase and document your components. Output all versions and states of your components.",rotation:"left"},{title:"Documentation",text:"Add any additional information to your components and examples and keep track of all components and for the whole team.",rotation:"right"}],t=[{title:"Support us",text:"You can support us by using Gardenjs, writing a plugin for a new framework (which we will then gladly point out), reporting bugs, giving feedback, making a contribution or writing documentation. We look forward to your support.",rotation:"left"},{title:"Make a donation",text:"A donation and sponsoring model is planned if Gardenjs is well received. A list of possible future features can be found in the documentation. Please contact us if you would like to sponsor one of the features.",rotation:"right"}],r=[{label:"Why have we developed another storybook?",content:"<p>We developed Gardenjs for two reasons: Firstly, Storybook was clearly too slow and a bit too cluttered for us, and secondly, we were enthusiastic about Svelte and wanted to get to know the framework better with an example project. We initially used Gardenjs for our own projects, but since it does some things better than alternative tools, we have now released it. As enthusiastic users of open source software, this gives us the opportunity to give something back.</p>"},{label:"Why is Gardenjs better than the alternatives around Storybook?",content:'<p>The question is provocative and of course each tool has its own advantages and disadvantages. Certainly, the top dog also covers many features that are not or not yet integrated in Gardenjs. But Gardenjs is definitely much faster and leaner. In our opinion, "stories" can be created more efficiently with Gardenjs, the handling is smoother and the option to work with decorators is more flexible. In addition, Gardenjs is multiframework-compatible, unlike Strorybook. And of course Gardenjs looks much better ;) Much is a matter of taste, form your own opinion - we look forward to your feedback.</p>'},{label:"What is the business model of Gardenjs?",content:"<p>We have developed Gardenjs for our own development work. We do not see a market for a paid version or paid functions. Of course, we would appreciate help with the further maintenance and integration of new functions. If Gardenjs is accepted, we will also consider a sponsoring and donation program.</p>"},{label:"Is Gardenjs being actively developed?",content:`<p>We will actively maintain Gardenjs, as we use Gardenjs in many of our projects. Gardenjs is relatively easy to maintain. Whether and how actively we will work through the <a href="${le}/docs/roadmap">roadmap</a> depends on our own needs for Gardenjs and to a large extent on how well Gardenjs is accepted and how much support we receive.</p>`},{label:"Do you have further questions or is there something on your mind?",content:`<p>If you have any problems, please first look in the <a href="${le}/docs">documentation</a> or check whether there is an issue for your problem on <a href="https://github.com/gardenjs/gardenjs" target="_blank">GitHub</a> and otherwise open a new issue. We look forward to your feedback and support. Please feel free to contact us.</p>`}];return[e,n,t,r]}class ot extends N{constructor(e){super(),J(this,e,Xe,Qe,U,{})}}export{ot as component};
