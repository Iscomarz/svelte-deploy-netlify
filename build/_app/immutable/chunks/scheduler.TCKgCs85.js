function N(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function Q(){return Object.create(null)}function B(t){t.forEach(P)}function D(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function V(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function X(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return N}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Y(t,n,e){t.$$.on_destroy.push(L(n,e))}function Z(t,n,e,i){if(t){const r=A(t,n,e,i);return t[0](r)}}function A(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function $(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function tt(t,n,e,i,r,u){if(r){const c=A(n,e,i,u);t.p(c,r)}}function nt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function et(t){return t&&D(t.destroy)?t.destroy:N}let p=!1;function it(){p=!0}function rt(){p=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:M(1,r,q=>n[e[q]].claim_order,o))-1;i[l]=e[a]+1;const E=a+1;e[E]=l,r=Math.max(E,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[l],a)}}function T(t,n){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ct(t,n,e){p&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function H(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function ut(){return v(" ")}function ot(){return v("")}function at(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _t(t){return t.dataset.svelteH}function dt(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,r=!1){I(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return j(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function ht(t,n,e){return z(t,n,e,H)}function F(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function mt(t){return F(t," ")}function pt(t,n){n=""+n,t.data!==n&&(t.data=n)}function bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function yt(t,n,e){t.classList.toggle(n,!!e)}function U(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function gt(t,n){return new t(n)}let m;function y(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function xt(t){b().$$.on_mount.push(t)}function vt(t){b().$$.after_update.push(t)}function Et(t){b().$$.on_destroy.push(t)}function kt(){const t=b();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=U(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function wt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],k=[];let _=[];const w=[],S=Promise.resolve();let x=!1;function W(){x||(x=!0,S.then(J))}function Nt(){return W(),S}function G(t){_.push(t)}const g=new Set;let f=0;function J(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,y(n),K(n.$$)}}catch(n){throw d.length=0,f=0,n}for(y(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];g.has(e)||(g.add(e),e())}_.length=0}while(d.length);for(;w.length;)w.pop()();x=!1,g.clear(),y(t)}function K(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}function At(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{B as A,Q as B,J as C,D,X as E,G as F,At as G,m as H,y as I,P as J,d as K,W as L,it as M,rt as N,yt as O,at as P,wt as Q,kt as R,et as S,Et as T,_t as U,st as V,V as W,$ as a,ut as b,Z as c,ht as d,H as e,dt as f,nt as g,F as h,lt as i,mt as j,ct as k,T as l,pt as m,N as n,Y as o,ot as p,vt as q,xt as r,R as s,v as t,tt as u,ft as v,bt as w,k as x,gt as y,Nt as z};
