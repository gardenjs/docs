var E=Object.defineProperty;var b=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>b(t,typeof e!="symbol"?e+"":e,n);import{D as $,n as c,E as p,b as I,f as O,F as C,G as v,I as L,J as x,K as M,L as N,M as w,N as P,O as R,P as j,Q as B,R as D}from"./scheduler.U_2hvb7C.js";const u=new Set;let f;function z(){f={r:0,c:[],p:f}}function A(){f.r||$(f.c),f=f.p}function F(t,e){t&&t.i&&(u.delete(t),t.i(e))}function H(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),f.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function T(t){t&&t.c()}function W(t,e){t&&t.l(e)}function G(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const d=t.$$.on_mount.map(P).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(x)}function J(t,e){const n=t.$$;n.fragment!==null&&(M(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){t.$$.dirty[0]===-1&&(R.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,a,i,d,l=null,S=[-1]){const o=N;w(t);const s=t.$$={fragment:null,ctx:[],props:d,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&K(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){B();const r=I(e.target);s.fragment&&s.fragment.l(r),r.forEach(O)}else s.fragment&&s.fragment.c();e.intro&&F(t.$$.fragment),G(t,e.target,e.anchor),D(),C()}w(o)}class Y{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){J(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!L(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Q="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{Y as S,W as a,H as b,T as c,J as d,A as e,z as g,X as i,G as m,F as t};
