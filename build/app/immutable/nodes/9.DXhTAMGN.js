import{s as We,e as s,a as o,H as N,c as a,m as i,g as r,b as V,v as U,f as t,r as v,i as l,n as ye,l as nt,h as lt}from"../chunks/scheduler.U_2hvb7C.js";import{S as Be,i as Ke,c as st,a as at,m as ot,t as rt,b as it,d as ut}from"../chunks/index.BoCreYX2.js";function pt(we){let u,m="Getting started",c,d,g="Requirements",p,f,F='Make sure <a href="https://vitejs.dev/" target="_blank">Vite</a> is installed! Also make sure you have a current version of Node.js installed.',J,h,He="Step 1: Install Gardenjs",O,x,Te="In the command line, go to the root directory of your project and enter the following command:",W,_,B,Qe='<code class="language-console">npm install --save-dev gardenjs</code>',K,C,ke="Step 2: Add script",Q,j,Me="Add Gardenjs to your <strong>package.json</strong> as follows:",X,y,Z,Xe=`<code class="language-json">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"garden"</span><span class="token operator">:</span> <span class="token string">"garden"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`,ee,w,Pe="Step 3: Setup Gardenjs",te,H,be="Now start Gardenjs for the first time:",ne,T,le,Ze='<code class="language-console">&#96;npm run garden&#96;</code>',se,k,Le="This will set up Gardenjs and generate the <strong>garden.config.js</strong> file. You will be prompted to select various options:",ae,M,oe,et=`<code class="language-console">Welcome to the garden setup process

===================================

? Enter your project title: 
? UI Library: 
? Enter your component source folder: 
? Should garden create an example component? 
===================================

For rendering the components for the selected libraries, you have to install the appropriate plugins.
? Shall gardenjs install the necessary plugins?
? Package manager: 

===================================
? You need a vite configuration file for gardenjs. Shall we create the file? 
===================================

Creating garden.vite.config.js ...:

===================================

Creating garden.config.js ...:


Done. Edit garden.config.js file according to your needs.
Run npm run garden again, to start gardenjs.
===================================
Happy gardening!
===================================</code>`,re,P,Ee="The gardenjs configuration files",ie,b,Ie="In the root directory you will now find the Gardenjs configuration file <strong>garden.config.js</strong>.",ue,L,Se="If you have made a mistake or would like to change something now, you can also delete the file and run <code>npm run garden</code> again. Alternatively, and for future adjustments, edit the <strong>garden.config.js</strong> file manually, see step 5.",pe,E,Ge="Optionally the <strong>garden.vite.config.js</strong> has been generated. If you haven’t selected the option to generate the file you need to create it now.",de,I,Re="This config file sets up vite to run gardenjs. If you are using vite as your default bundler you already have a vite.config.js. You might adapt the garden.vite.config.js to your own needs. However there are some garden specific settings, that’s why your vite.config.js can’t be used for gardenjs.",fe,S,$e="! Renderer Plugin",ce,G,qe="In order for Gardenjs to be able to display components later, the corresponding renderer plugin is required. If no renderer was selected during the installation routine, you will need to install one (or more) of our renderer plugins or install your own renderer.",ve,R,ze='You can find more information on creating a custom renderer plugin <a href="/docs/renderer">here</a>.',me,$,Ae="Step 4: Run Gardenjs",ge,q,he,tt='<code class="language-console">npm run garden</code>',xe,z,Ye="The default browser address is <strong>http://localhost:3010/garden</strong>. The server port is defined in <strong>garden.config.js</strong> and can be adjusted there.",_e,A,De='Gardenjs will be empty now. First of all, the components must be registered as described <a href="/docs/get-started/examples">here</a>.',Ce,Y,Ve="Step 5: Refine configuration",je,D,Fe='Project-specific settings are made in the file <strong>garden.config.js</strong>. Some of the possible settings are essential for the execution of Gardenjs. More infos <a href="/docs/get-started/settings">here</a>.';return{c(){u=s("h1"),u.textContent=m,c=o(),d=s("h2"),d.textContent=g,p=o(),f=s("p"),f.innerHTML=F,J=o(),h=s("h2"),h.textContent=He,O=o(),x=s("p"),x.textContent=Te,W=o(),_=s("pre"),B=new N(!1),K=o(),C=s("h2"),C.textContent=ke,Q=o(),j=s("p"),j.innerHTML=Me,X=o(),y=s("pre"),Z=new N(!1),ee=o(),w=s("h2"),w.textContent=Pe,te=o(),H=s("p"),H.textContent=be,ne=o(),T=s("pre"),le=new N(!1),se=o(),k=s("p"),k.innerHTML=Le,ae=o(),M=s("pre"),oe=new N(!1),re=o(),P=s("h3"),P.textContent=Ee,ie=o(),b=s("p"),b.innerHTML=Ie,ue=o(),L=s("p"),L.innerHTML=Se,pe=o(),E=s("p"),E.innerHTML=Ge,de=o(),I=s("p"),I.textContent=Re,fe=o(),S=s("h3"),S.textContent=$e,ce=o(),G=s("p"),G.textContent=qe,ve=o(),R=s("p"),R.innerHTML=ze,me=o(),$=s("h2"),$.textContent=Ae,ge=o(),q=s("pre"),he=new N(!1),xe=o(),z=s("p"),z.innerHTML=Ye,_e=o(),A=s("p"),A.innerHTML=De,Ce=o(),Y=s("h2"),Y.textContent=Ve,je=o(),D=s("p"),D.innerHTML=Fe,this.h()},l(e){u=a(e,"H1",{"data-svelte-h":!0}),i(u)!=="svelte-vtmsdd"&&(u.textContent=m),c=r(e),d=a(e,"H2",{"data-svelte-h":!0}),i(d)!=="svelte-gina16"&&(d.textContent=g),p=r(e),f=a(e,"P",{"data-svelte-h":!0}),i(f)!=="svelte-14pokv"&&(f.innerHTML=F),J=r(e),h=a(e,"H2",{"data-svelte-h":!0}),i(h)!=="svelte-1d7t9fy"&&(h.textContent=He),O=r(e),x=a(e,"P",{"data-svelte-h":!0}),i(x)!=="svelte-18ox5tv"&&(x.textContent=Te),W=r(e),_=a(e,"PRE",{class:!0});var n=V(_);B=U(n,!1),n.forEach(t),K=r(e),C=a(e,"H2",{"data-svelte-h":!0}),i(C)!=="svelte-axjb7m"&&(C.textContent=ke),Q=r(e),j=a(e,"P",{"data-svelte-h":!0}),i(j)!=="svelte-14fms82"&&(j.innerHTML=Me),X=r(e),y=a(e,"PRE",{class:!0});var Ne=V(y);Z=U(Ne,!1),Ne.forEach(t),ee=r(e),w=a(e,"H2",{"data-svelte-h":!0}),i(w)!=="svelte-13gw1lq"&&(w.textContent=Pe),te=r(e),H=a(e,"P",{"data-svelte-h":!0}),i(H)!=="svelte-jx1zqb"&&(H.textContent=be),ne=r(e),T=a(e,"PRE",{class:!0});var Ue=V(T);le=U(Ue,!1),Ue.forEach(t),se=r(e),k=a(e,"P",{"data-svelte-h":!0}),i(k)!=="svelte-gbh2gk"&&(k.innerHTML=Le),ae=r(e),M=a(e,"PRE",{class:!0});var Je=V(M);oe=U(Je,!1),Je.forEach(t),re=r(e),P=a(e,"H3",{"data-svelte-h":!0}),i(P)!=="svelte-1xol01u"&&(P.textContent=Ee),ie=r(e),b=a(e,"P",{"data-svelte-h":!0}),i(b)!=="svelte-oeszql"&&(b.innerHTML=Ie),ue=r(e),L=a(e,"P",{"data-svelte-h":!0}),i(L)!=="svelte-1nwbv0s"&&(L.innerHTML=Se),pe=r(e),E=a(e,"P",{"data-svelte-h":!0}),i(E)!=="svelte-1d8abuu"&&(E.innerHTML=Ge),de=r(e),I=a(e,"P",{"data-svelte-h":!0}),i(I)!=="svelte-158gkiu"&&(I.textContent=Re),fe=r(e),S=a(e,"H3",{"data-svelte-h":!0}),i(S)!=="svelte-1t2zlyh"&&(S.textContent=$e),ce=r(e),G=a(e,"P",{"data-svelte-h":!0}),i(G)!=="svelte-1238fvj"&&(G.textContent=qe),ve=r(e),R=a(e,"P",{"data-svelte-h":!0}),i(R)!=="svelte-7ykzmw"&&(R.innerHTML=ze),me=r(e),$=a(e,"H2",{"data-svelte-h":!0}),i($)!=="svelte-1ljryl3"&&($.textContent=Ae),ge=r(e),q=a(e,"PRE",{class:!0});var Oe=V(q);he=U(Oe,!1),Oe.forEach(t),xe=r(e),z=a(e,"P",{"data-svelte-h":!0}),i(z)!=="svelte-aezkac"&&(z.innerHTML=Ye),_e=r(e),A=a(e,"P",{"data-svelte-h":!0}),i(A)!=="svelte-10a4i5g"&&(A.innerHTML=De),Ce=r(e),Y=a(e,"H2",{"data-svelte-h":!0}),i(Y)!=="svelte-1j7fvt2"&&(Y.textContent=Ve),je=r(e),D=a(e,"P",{"data-svelte-h":!0}),i(D)!=="svelte-1vrm95o"&&(D.innerHTML=Fe),this.h()},h(){B.a=null,v(_,"class","language-console"),Z.a=null,v(y,"class","language-json"),le.a=null,v(T,"class","language-console"),oe.a=null,v(M,"class","language-console"),he.a=null,v(q,"class","language-console")},m(e,n){l(e,u,n),l(e,c,n),l(e,d,n),l(e,p,n),l(e,f,n),l(e,J,n),l(e,h,n),l(e,O,n),l(e,x,n),l(e,W,n),l(e,_,n),B.m(Qe,_),l(e,K,n),l(e,C,n),l(e,Q,n),l(e,j,n),l(e,X,n),l(e,y,n),Z.m(Xe,y),l(e,ee,n),l(e,w,n),l(e,te,n),l(e,H,n),l(e,ne,n),l(e,T,n),le.m(Ze,T),l(e,se,n),l(e,k,n),l(e,ae,n),l(e,M,n),oe.m(et,M),l(e,re,n),l(e,P,n),l(e,ie,n),l(e,b,n),l(e,ue,n),l(e,L,n),l(e,pe,n),l(e,E,n),l(e,de,n),l(e,I,n),l(e,fe,n),l(e,S,n),l(e,ce,n),l(e,G,n),l(e,ve,n),l(e,R,n),l(e,me,n),l(e,$,n),l(e,ge,n),l(e,q,n),he.m(tt,q),l(e,xe,n),l(e,z,n),l(e,_e,n),l(e,A,n),l(e,Ce,n),l(e,Y,n),l(e,je,n),l(e,D,n)},p:ye,i:ye,o:ye,d(e){e&&(t(u),t(c),t(d),t(p),t(f),t(J),t(h),t(O),t(x),t(W),t(_),t(K),t(C),t(Q),t(j),t(X),t(y),t(ee),t(w),t(te),t(H),t(ne),t(T),t(se),t(k),t(ae),t(M),t(re),t(P),t(ie),t(b),t(ue),t(L),t(pe),t(E),t(de),t(I),t(fe),t(S),t(ce),t(G),t(ve),t(R),t(me),t($),t(ge),t(q),t(xe),t(z),t(_e),t(A),t(Ce),t(Y),t(je),t(D))}}}class dt extends Be{constructor(u){super(),Ke(this,u,null,pt,We,{})}}function ft(we){let u,m,c,d,g;return d=new dt({}),{c(){u=s("meta"),m=o(),c=s("div"),st(d.$$.fragment),this.h()},l(p){const f=nt("svelte-1o6gkxx",document.head);u=a(f,"META",{name:!0,content:!0}),f.forEach(t),m=r(p),c=a(p,"DIV",{class:!0});var F=V(c);at(d.$$.fragment,F),F.forEach(t),this.h()},h(){document.title="Installation guide :: Gardenjs Docs",v(u,"name","description"),v(u,"content","Installation guide. Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React."),v(c,"class","md_file")},m(p,f){lt(document.head,u),l(p,m,f),l(p,c,f),ot(d,c,null),g=!0},p:ye,i(p){g||(rt(d.$$.fragment,p),g=!0)},o(p){it(d.$$.fragment,p),g=!1},d(p){p&&(t(m),t(c)),t(u),ut(d)}}}class mt extends Be{constructor(u){super(),Ke(this,u,null,ft,We,{})}}export{mt as component};