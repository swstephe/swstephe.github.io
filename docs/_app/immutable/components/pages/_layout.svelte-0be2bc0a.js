import{S as C,i as H,s as U,k as v,q as V,a as E,l as _,m as $,r as w,h as u,c as I,n as h,b as y,C as o,B as x,D as O,E as le,w as z,x as P,F as Ee,y as G,f as S,t as L,z as K,u as Ie,g as xe,d as ye,G as De,H as Ve,I as ge,J as pe,K as ke,L as be,M as we,N as Se}from"../../chunks/index-fa74893e.js";import{p as Ae}from"../../chunks/stores-1000be57.js";function Le(i){let e,l,t,s,a,n,r,c,p,d,g=i[0].location+"",f,m,k,b,T,B,M,A=i[0].experience+"",q,N,D,j,F,ee,J,se=i[0].availability+"",te;return{c(){e=v("div"),l=v("h2"),t=V("Information"),s=E(),a=v("div"),n=v("div"),r=v("div"),c=V("Location"),p=E(),d=v("div"),f=V(g),m=E(),k=v("div"),b=v("div"),T=V("Experience"),B=E(),M=v("div"),q=V(A),N=E(),D=v("div"),j=v("div"),F=V("Availability"),ee=E(),J=v("div"),te=V(se),this.h()},l(Q){e=_(Q,"DIV",{class:!0});var R=$(e);l=_(R,"H2",{class:!0});var ae=$(l);t=w(ae,"Information"),ae.forEach(u),s=I(R),a=_(R,"DIV",{class:!0});var W=$(a);n=_(W,"DIV",{class:!0});var X=$(n);r=_(X,"DIV",{class:!0});var ne=$(r);c=w(ne,"Location"),ne.forEach(u),p=I(X),d=_(X,"DIV",{class:!0});var re=$(d);f=w(re,g),re.forEach(u),X.forEach(u),m=I(W),k=_(W,"DIV",{class:!0});var Y=$(k);b=_(Y,"DIV",{class:!0});var ce=$(b);T=w(ce,"Experience"),ce.forEach(u),B=I(Y),M=_(Y,"DIV",{class:!0});var ie=$(M);q=w(ie,A),ie.forEach(u),Y.forEach(u),N=I(W),D=_(W,"DIV",{class:!0});var Z=$(D);j=_(Z,"DIV",{class:!0});var oe=$(j);F=w(oe,"Availability"),oe.forEach(u),ee=I(Z),J=_(Z,"DIV",{class:!0});var fe=$(J);te=w(fe,se),fe.forEach(u),Z.forEach(u),W.forEach(u),R.forEach(u),this.h()},h(){h(l,"class","block-title"),h(r,"class","text-gray-400"),h(d,"class","font-medium text-right text-gray-500"),h(n,"class","flex justify-between"),h(b,"class","text-gray-400"),h(M,"class","font-medium text-right text-gray-500"),h(k,"class","flex justify-between"),h(j,"class","text-gray-400"),h(J,"class","font-medium text-right text-gray-500"),h(D,"class","flex justify-between"),h(a,"class","space-y-4"),h(e,"class","p-7 block-section")},m(Q,R){y(Q,e,R),o(e,l),o(l,t),o(e,s),o(e,a),o(a,n),o(n,r),o(r,c),o(n,p),o(n,d),o(d,f),o(a,m),o(a,k),o(k,b),o(b,T),o(k,B),o(k,M),o(M,q),o(a,N),o(a,D),o(D,j),o(j,F),o(D,ee),o(D,J),o(J,te)},p:x,i:x,o:x,d(Q){Q&&u(e)}}}function Be(i){return[O("cms").info]}class Me extends C{constructor(e){super(),H(this,e,Be,Le,U,{})}}function ue(i,e,l){const t=i.slice();return t[2]=e[l],t}function qe(i){let e;return{c(){e=v("i"),this.h()},l(l){e=_(l,"I",{class:!0}),$(e).forEach(u),this.h()},h(){h(e,"class",`bx ${i[2].icon} text-xl`)},m(l,t){y(l,e,t)},p:x,d(l){l&&u(e)}}}function Ne(i){let e,l;return{c(){e=v("span"),l=V("scott@nuruq.com")},l(t){e=_(t,"SPAN",{});var s=$(e);l=w(s,"scott@nuruq.com"),s.forEach(u)},m(t,s){y(t,e,s),o(e,l)},p:x,d(t){t&&u(e)}}}function he(i){let e,l,t;function s(r,c){return r[2].name==="email"?Ne:qe}let n=s(i)(i);return{c(){e=v("li"),l=v("a"),n.c(),t=E(),this.h()},l(r){e=_(r,"LI",{});var c=$(e);l=_(c,"A",{href:!0,class:!0});var p=$(l);n.l(p),p.forEach(u),t=I(c),c.forEach(u),this.h()},h(){h(l,"href",i[2].link),h(l,"class","social-link social-link-hover")},m(r,c){y(r,e,c),o(e,l),n.m(l,null),o(e,t)},p(r,c){n.p(r,c)},d(r){r&&u(e),n.d()}}}function Te(i){let e,l,t=i[0],s=[];for(let a=0;a<t.length;a+=1)s[a]=he(ue(i,t,a));return{c(){e=v("div"),l=v("ul");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var n=$(e);l=_(n,"UL",{class:!0});var r=$(l);for(let c=0;c<s.length;c+=1)s[c].l(r);r.forEach(u),n.forEach(u),this.h()},h(){h(l,"class","flex space-x-5"),h(e,"class","flex flex-col space-y-4")},m(a,n){y(a,e,n),o(e,l);for(let r=0;r<s.length;r+=1)s[r].m(l,null)},p(a,[n]){if(n&1){t=a[0];let r;for(r=0;r<t.length;r+=1){const c=ue(a,t,r);s[r]?s[r].p(c,n):(s[r]=he(c),s[r].c(),s[r].m(l,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},i:x,o:x,d(a){a&&u(e),le(s,a)}}}function je(i){return[O("cms").social]}class Ce extends C{constructor(e){super(),H(this,e,je,Te,U,{})}}function He(i){let e,l,t,s,a,n,r,c,p,d=i[0].name+"",g,f,m,k=i[0].title+"",b,T,B,M;return B=new Ce({}),{c(){e=v("div"),l=v("div"),t=E(),s=v("div"),a=v("a"),n=v("img"),c=E(),p=v("div"),g=V(d),f=E(),m=v("div"),b=V(k),T=E(),z(B.$$.fragment),this.h()},l(A){e=_(A,"DIV",{class:!0});var q=$(e);l=_(q,"DIV",{class:!0}),$(l).forEach(u),t=I(q),s=_(q,"DIV",{class:!0});var N=$(s);a=_(N,"A",{href:!0});var D=$(a);n=_(D,"IMG",{src:!0,alt:!0,class:!0}),c=I(D),p=_(D,"DIV",{class:!0});var j=$(p);g=w(j,d),j.forEach(u),D.forEach(u),f=I(N),m=_(N,"DIV",{class:!0});var F=$(m);b=w(F,k),F.forEach(u),T=I(N),P(B.$$.fragment,N),N.forEach(u),q.forEach(u),this.h()},h(){h(l,"class","h-32 bg-cover cover svelte-zrpxmo"),Ee(n.src,r="/images/avatar.jpg")||h(n,"src",r),h(n,"alt","Avatar"),h(n,"class","user-photo"),h(p,"class","text-lg font-semibold mb-1.5"),h(a,"href","/"),h(m,"class","prose-sm prose-slate mb-1.5"),h(s,"class","pt-14 p-7 bg-white relative"),h(e,"class","shadow rounded-xl overflow-hidden")},m(A,q){y(A,e,q),o(e,l),o(e,t),o(e,s),o(s,a),o(a,n),o(a,c),o(a,p),o(p,g),o(s,f),o(s,m),o(m,b),o(s,T),G(B,s,null),M=!0},p:x,i(A){M||(S(B.$$.fragment,A),M=!0)},o(A){L(B.$$.fragment,A),M=!1},d(A){A&&u(e),K(B)}}}function Ue(i){return[O("cms").info]}class ze extends C{constructor(e){super(),H(this,e,Ue,He,U,{})}}function de(i){let e,l;return{c(){e=v("i"),this.h()},l(t){e=_(t,"I",{class:!0}),$(e).forEach(u),this.h()},h(){h(e,"class",l=`bx ${i[0].icon}`)},m(t,s){y(t,e,s)},p(t,s){s&1&&l!==(l=`bx ${t[0].icon}`)&&h(e,"class",l)},d(t){t&&u(e)}}}function Pe(i){let e,l,t=i[0].skill+"",s,a=i[0].icon&&de(i);return{c(){e=v("span"),a&&a.c(),l=E(),s=V(t),this.h()},l(n){e=_(n,"SPAN",{class:!0});var r=$(e);a&&a.l(r),l=I(r),s=w(r,t),r.forEach(u),this.h()},h(){h(e,"class","skill-tag")},m(n,r){y(n,e,r),a&&a.m(e,null),o(e,l),o(e,s)},p(n,[r]){n[0].icon?a?a.p(n,r):(a=de(n),a.c(),a.m(e,l)):a&&(a.d(1),a=null),r&1&&t!==(t=n[0].skill+"")&&Ie(s,t)},i:x,o:x,d(n){n&&u(e),a&&a.d()}}}function Ge(i,e,l){let{skill:t}=e;return i.$$set=s=>{"skill"in s&&l(0,t=s.skill)},[t]}class Ke extends C{constructor(e){super(),H(this,e,Ge,Pe,U,{skill:0})}}function me(i,e,l){const t=i.slice();return t[2]=e[l],t}function ve(i){let e,l;return e=new Ke({props:{skill:i[2]}}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){G(e,t,s),l=!0},p:x,i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function Fe(i){let e,l,t,s,a,n,r=i[0],c=[];for(let d=0;d<r.length;d+=1)c[d]=ve(me(i,r,d));const p=d=>L(c[d],1,1,()=>{c[d]=null});return{c(){e=v("div"),l=v("h2"),t=V("Skills"),s=E(),a=v("div");for(let d=0;d<c.length;d+=1)c[d].c();this.h()},l(d){e=_(d,"DIV",{class:!0});var g=$(e);l=_(g,"H2",{class:!0});var f=$(l);t=w(f,"Skills"),f.forEach(u),s=I(g),a=_(g,"DIV",{class:!0});var m=$(a);for(let k=0;k<c.length;k+=1)c[k].l(m);m.forEach(u),g.forEach(u),this.h()},h(){h(l,"class","block-title"),h(a,"class","-m-2 flex flex-wrap"),h(e,"class","p-7 bg-white shadow rounded-xl flow-root")},m(d,g){y(d,e,g),o(e,l),o(l,t),o(e,s),o(e,a);for(let f=0;f<c.length;f+=1)c[f].m(a,null);n=!0},p(d,[g]){if(g&1){r=d[0];let f;for(f=0;f<r.length;f+=1){const m=me(d,r,f);c[f]?(c[f].p(m,g),S(c[f],1)):(c[f]=ve(m),c[f].c(),S(c[f],1),c[f].m(a,null))}for(xe(),f=r.length;f<c.length;f+=1)p(f);ye()}},i(d){if(!n){for(let g=0;g<r.length;g+=1)S(c[g]);n=!0}},o(d){c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)L(c[g]);n=!1},d(d){d&&u(e),le(c,d)}}}function Je(i){return[O("cms").skills]}class Re extends C{constructor(e){super(),H(this,e,Je,Fe,U,{})}}function We(i){let e,l,t,s,a,n,r;return l=new ze({}),s=new Me({}),n=new Re({}),{c(){e=v("div"),z(l.$$.fragment),t=E(),z(s.$$.fragment),a=E(),z(n.$$.fragment),this.h()},l(c){e=_(c,"DIV",{class:!0});var p=$(e);P(l.$$.fragment,p),t=I(p),P(s.$$.fragment,p),a=I(p),P(n.$$.fragment,p),p.forEach(u),this.h()},h(){h(e,"class","space-y-5")},m(c,p){y(c,e,p),G(l,e,null),o(e,t),G(s,e,null),o(e,a),G(n,e,null),r=!0},p:x,i(c){r||(S(l.$$.fragment,c),S(s.$$.fragment,c),S(n.$$.fragment,c),r=!0)},o(c){L(l.$$.fragment,c),L(s.$$.fragment,c),L(n.$$.fragment,c),r=!1},d(c){c&&u(e),K(l),K(s),K(n)}}}class Oe extends C{constructor(e){super(),H(this,e,null,We,U,{})}}function _e(i,e,l){const t=i.slice();return t[4]=e[l].url,t[5]=e[l].title,t}function $e(i){let e,l,t=i[5]+"",s,a;return{c(){e=v("li"),l=v("a"),s=V(t),a=E(),this.h()},l(n){e=_(n,"LI",{});var r=$(e);l=_(r,"A",{href:!0,class:!0});var c=$(l);s=w(c,t),c.forEach(u),a=I(r),r.forEach(u),this.h()},h(){h(l,"href",i[4]),h(l,"class","menu-link-hover"),Ve(l,"menu-link-active",i[1](i[4]))},m(n,r){y(n,e,r),o(e,l),o(l,s),o(e,a)},p:x,d(n){n&&u(e)}}}function Qe(i){let e,l=i[0].pages,t=[];for(let s=0;s<l.length;s+=1)t[s]=$e(_e(i,l,s));return{c(){e=v("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=_(s,"UL",{class:!0});var a=$(e);for(let n=0;n<t.length;n+=1)t[n].l(a);a.forEach(u),this.h()},h(){h(e,"class","flex space-x-8 font-medium")},m(s,a){y(s,e,a);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(s,[a]){if(a&3){l=s[0].pages;let n;for(n=0;n<l.length;n+=1){const r=_e(s,l,n);t[n]?t[n].p(r,a):(t[n]=$e(r),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:x,o:x,d(s){s&&u(e),le(t,s)}}}function Xe(i,e,l){let t;De(i,Ae,r=>l(2,t=r));const s=O("cms");let a;const n=r=>r==="/"?a==="/":a===r||a.startsWith(r);return i.$$.update=()=>{i.$$.dirty&4&&(a=t.url.pathname)},[s,n,t]}class Ye extends C{constructor(e){super(),H(this,e,Xe,Qe,U,{})}}function Ze(i){let e,l,t,s=i[0].content+"",a,n,r,c,p,d;c=new Ye({});const g=i[2].default,f=ge(g,i,i[1],null);return{c(){e=v("div"),l=v("div"),t=v("div"),a=E(),n=v("div"),r=E(),z(c.$$.fragment),p=E(),f&&f.c(),this.h()},l(m){e=_(m,"DIV",{class:!0});var k=$(e);l=_(k,"DIV",{class:!0});var b=$(l);t=_(b,"DIV",{class:!0});var T=$(t);T.forEach(u),a=I(b),n=_(b,"DIV",{class:!0}),$(n).forEach(u),r=I(b),P(c.$$.fragment,b),b.forEach(u),p=I(k),f&&f.l(k),k.forEach(u),this.h()},h(){h(t,"class","mb-5 prose prose-slate dark:prose-invert"),h(n,"class","border-t border-gray-200 my-5"),h(l,"class","p-7 pb-0 block-section"),h(e,"class","space-y-5 lg:col-span-2")},m(m,k){y(m,e,k),o(e,l),o(l,t),t.innerHTML=s,o(l,a),o(l,n),o(l,r),G(c,l,null),o(e,p),f&&f.m(e,null),d=!0},p(m,[k]){f&&f.p&&(!d||k&2)&&pe(f,g,m,m[1],d?be(g,m[1],k,null):ke(m[1]),null)},i(m){d||(S(c.$$.fragment,m),S(f,m),d=!0)},o(m){L(c.$$.fragment,m),L(f,m),d=!1},d(m){m&&u(e),K(c),f&&f.d(m)}}}function et(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=O("cms").blurbs.about;return i.$$set=r=>{"$$scope"in r&&l(1,s=r.$$scope)},[n,s,t]}class tt extends C{constructor(e){super(),H(this,e,et,Ze,U,{})}}function lt(i){let e;const l=i[1].default,t=ge(l,i,i[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&4)&&pe(t,l,s,s[2],e?be(l,s[2],a,null):ke(s[2]),null)},i(s){e||(S(t,s),e=!0)},o(s){L(t,s),e=!1},d(s){t&&t.d(s)}}}function st(i){let e,l,t,s,a,n,r,c,p,d,g;return c=new Oe({}),d=new tt({props:{$$slots:{default:[lt]},$$scope:{ctx:i}}}),{c(){e=v("meta"),l=v("meta"),t=v("meta"),s=v("link"),a=E(),n=v("main"),r=v("div"),z(c.$$.fragment),p=E(),z(d.$$.fragment),this.h()},l(f){const m=we("svelte-1otzmpk",document.head);e=_(m,"META",{name:!0,content:!0}),l=_(m,"META",{name:!0,content:!0}),t=_(m,"META",{name:!0,content:!0}),s=_(m,"LINK",{rel:!0,href:!0}),m.forEach(u),a=I(f),n=_(f,"MAIN",{class:!0});var k=$(n);r=_(k,"DIV",{class:!0});var b=$(r);P(c.$$.fragment,b),p=I(b),P(d.$$.fragment,b),b.forEach(u),k.forEach(u),this.h()},h(){h(e,"name","description"),h(e,"content",""),h(l,"name","author"),h(l,"content","Scott Stephens <scott@nuruq.com>"),h(t,"name","viewport"),h(t,"content","width=device-width, initial-scale=1"),h(s,"rel","stylesheet"),h(s,"href","https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"),h(r,"class","grid gap-5 lg:grid-cols-3"),h(n,"class","main-container")},m(f,m){o(document.head,e),o(document.head,l),o(document.head,t),o(document.head,s),y(f,a,m),y(f,n,m),o(n,r),G(c,r,null),o(r,p),G(d,r,null),g=!0},p(f,[m]){const k={};m&4&&(k.$$scope={dirty:m,ctx:f}),d.$set(k)},i(f){g||(S(c.$$.fragment,f),S(d.$$.fragment,f),g=!0)},o(f){L(c.$$.fragment,f),L(d.$$.fragment,f),g=!1},d(f){u(e),u(l),u(t),u(s),f&&u(a),f&&u(n),K(c),K(d)}}}function at(i,e,l){let{$$slots:t={},$$scope:s}=e,{data:a}=e;const n=a.cms;return Se("cms",n),i.$$set=r=>{"data"in r&&l(0,a=r.data),"$$scope"in r&&l(2,s=r.$$scope)},[a,t,s]}class ct extends C{constructor(e){super(),H(this,e,at,st,U,{data:0})}}export{ct as default};
