import{S as J,i as K,s as O,e as ae,b as M,B as G,h,q as E,r as z,u as oe,k as v,l as b,m as k,n as d,C as f,a as V,w as Q,c as x,x as R,y as U,f as D,g as ne,t as w,d as ie,z as W,M as fe,E as ue,D as me}from"../../../chunks/index-fa74893e.js";import{d as he}from"../../../chunks/dayjs.min-8a28323c.js";function de(s){let e;return{c(){e=E(s[1])},l(t){e=z(t,s[1])},m(t,l){M(t,e,l)},p(t,l){l&2&&oe(e,t[1])},d(t){t&&h(e)}}}function _e(s){let e,t,l,a;return{c(){e=v("a"),t=v("i"),l=E("\xA0"),a=E(s[1]),this.h()},l(r){e=b(r,"A",{href:!0,target:!0});var n=k(e);t=b(n,"I",{class:!0}),k(t).forEach(h),l=z(n,"\xA0"),a=z(n,s[1]),n.forEach(h),this.h()},h(){d(t,"class","bx bxl-amazon"),d(e,"href",s[0]),d(e,"target","_blank")},m(r,n){M(r,e,n),f(e,t),f(e,l),f(e,a)},p(r,n){n&2&&oe(a,r[1]),n&1&&d(e,"href",r[0])},d(r){r&&h(e)}}}function pe(s){let e;function t(r,n){return r[0]?_e:de}let l=t(s),a=l(s);return{c(){a.c(),e=ae()},l(r){a.l(r),e=ae()},m(r,n){a.m(r,n),M(r,e,n)},p(r,[n]){l===(l=t(r))&&a?a.p(r,n):(a.d(1),a=l(r),a&&(a.c(),a.m(e.parentNode,e)))},i:G,o:G,d(r){a.d(r),r&&h(e)}}}function ve(s,e,t){let{amazon:l=null}=e,{text:a}=e;return s.$$set=r=>{"amazon"in r&&t(0,l=r.amazon),"text"in r&&t(1,a=r.text)},[l,a]}class ce extends J{constructor(e){super(),K(this,e,ve,pe,O,{amazon:0,text:1})}}function le(s){let e,t,l;return t=new ce({props:{amazon:s[0].author.amazon,text:s[0].author.name}}),{c(){e=E(`by
      `),Q(t.$$.fragment)},l(a){e=z(a,`by
      `),R(t.$$.fragment,a)},m(a,r){M(a,e,r),U(t,a,r),l=!0},p(a,r){const n={};r&1&&(n.amazon=a[0].author.amazon),r&1&&(n.text=a[0].author.name),t.$set(n)},i(a){l||(D(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){a&&h(e),W(t,a)}}}function be(s){let e,t,l,a,r,n,g;r=new ce({props:{amazon:s[0].amazon,text:s[0].title}});let u=s[0].author&&le(s);return{c(){e=v("div"),t=v("i"),l=V(),a=v("span"),Q(r.$$.fragment),n=V(),u&&u.c(),this.h()},l(m){e=b(m,"DIV",{title:!0,class:!0});var o=k(e);t=b(o,"I",{class:!0}),k(t).forEach(h),l=x(o),a=b(o,"SPAN",{class:!0});var _=k(a);R(r.$$.fragment,_),n=x(_),u&&u.l(_),_.forEach(h),o.forEach(h),this.h()},h(){d(t,"class","bx bx-book text-xl"),d(a,"class","text-sm text-gray-500"),d(e,"title","source"),d(e,"class","item-header-info")},m(m,o){M(m,e,o),f(e,t),f(e,l),f(e,a),U(r,a,null),f(a,n),u&&u.m(a,null),g=!0},p(m,[o]){const _={};o&1&&(_.amazon=m[0].amazon),o&1&&(_.text=m[0].title),r.$set(_),m[0].author?u?(u.p(m,o),o&1&&D(u,1)):(u=le(m),u.c(),D(u,1),u.m(a,null)):u&&(ne(),w(u,1,1,()=>{u=null}),ie())},i(m){g||(D(r.$$.fragment,m),D(u),g=!0)},o(m){w(r.$$.fragment,m),w(u),g=!1},d(m){m&&h(e),W(r),u&&u.d()}}}function ke(s,e,t){let{book:l}=e;return s.$$set=a=>{"book"in a&&t(0,l=a.book)},[l]}class ge extends J{constructor(e){super(),K(this,e,ke,be,O,{book:0})}}function re(s,e,t){const l=s.slice();return l[2]=e[t],l}function $e(s){let e,t;return e=new ge({props:{book:s[2].book}}),{c(){Q(e.$$.fragment)},l(l){R(e.$$.fragment,l)},m(l,a){U(e,l,a),t=!0},p:G,i(l){t||(D(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function se(s){let e,t,l,a,r=s[2].name+"",n,g,u=s[2].title+"",m,o,_,i,p,c,j=he(s[2].date).format("MMMM D, YYYY")+"",B,Y,P,A,X=s[2].summary+"",L,T,C,F,q,$=s[2].book&&$e(s);return{c(){e=v("div"),t=v("div"),l=v("a"),a=v("div"),n=E(r),g=E(" \u2014 "),m=E(u),o=V(),_=v("div"),i=v("i"),p=E(`
              \xA0
              `),c=v("time"),B=E(j),Y=V(),$&&$.c(),P=V(),A=v("p"),L=E(X),T=V(),C=v("div"),F=V(),this.h()},l(I){e=b(I,"DIV",{class:!0});var S=k(e);t=b(S,"DIV",{class:!0});var y=k(t);l=b(y,"A",{href:!0,target:!0,rel:!0});var Z=k(l);a=b(Z,"DIV",{class:!0});var N=k(a);n=z(N,r),g=z(N," \u2014 "),m=z(N,u),N.forEach(h),Z.forEach(h),o=x(y),_=b(y,"DIV",{title:!0,class:!0});var H=k(_);i=b(H,"I",{class:!0}),k(i).forEach(h),p=z(H,`
              \xA0
              `),c=b(H,"TIME",{datetime:!0,class:!0});var ee=k(c);B=z(ee,j),ee.forEach(h),H.forEach(h),Y=x(y),$&&$.l(y),P=x(y),A=b(y,"P",{class:!0});var te=k(A);L=z(te,X),te.forEach(h),T=x(y),C=b(y,"DIV",{class:!0}),k(C).forEach(h),y.forEach(h),F=x(S),S.forEach(h),this.h()},h(){d(a,"class","font-medium"),d(l,"href",`https://github.com/swstephe/${s[2].name}`),d(l,"target","_blank"),d(l,"rel","noreferrer"),d(i,"class","bx bx-calendar text-xl"),d(c,"datetime",s[2].date),d(c,"class","text-sm text-gray-500"),d(_,"title","date started"),d(_,"class","item-header-info"),d(A,"class","prose prose-slate dark:prose-invert"),d(C,"class","border-b border-gray-200"),d(t,"class","space-y-1 5"),d(e,"class","item-header")},m(I,S){M(I,e,S),f(e,t),f(t,l),f(l,a),f(a,n),f(a,g),f(a,m),f(t,o),f(t,_),f(_,i),f(_,p),f(_,c),f(c,B),f(t,Y),$&&$.m(t,null),f(t,P),f(t,A),f(A,L),f(t,T),f(t,C),f(e,F),q=!0},p(I,S){I[2].book&&$.p(I,S)},i(I){q||(D($),q=!0)},o(I){w($),q=!1},d(I){I&&h(e),$&&$.d()}}}function Ee(s){let e,t,l,a,r,n,g,u,m=s[0],o=[];for(let i=0;i<m.length;i+=1)o[i]=se(re(s,m,i));const _=i=>w(o[i],1,1,()=>{o[i]=null});return{c(){e=V(),t=v("div"),l=v("h2"),a=E("Projects"),r=V(),n=v("div"),g=v("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){fe("svelte-uxuefe",document.head).forEach(h),e=x(i),t=b(i,"DIV",{class:!0});var c=k(t);l=b(c,"H2",{class:!0});var j=k(l);a=z(j,"Projects"),j.forEach(h),r=x(c),n=b(c,"DIV",{class:!0});var B=k(n);g=b(B,"DIV",{class:!0});var Y=k(g);for(let P=0;P<o.length;P+=1)o[P].l(Y);Y.forEach(h),B.forEach(h),c.forEach(h),this.h()},h(){document.title="Scott Stephens | Projects",d(l,"class","block-title"),d(g,"class","w-full space-y-5"),d(n,"class","mb-5 item-section"),d(t,"class","p-7 block-section")},m(i,p){M(i,e,p),M(i,t,p),f(t,l),f(l,a),f(t,r),f(t,n),f(n,g);for(let c=0;c<o.length;c+=1)o[c].m(g,null);u=!0},p(i,[p]){if(p&1){m=i[0];let c;for(c=0;c<m.length;c+=1){const j=re(i,m,c);o[c]?(o[c].p(j,p),D(o[c],1)):(o[c]=se(j),o[c].c(),D(o[c],1),o[c].m(g,null))}for(ne(),c=m.length;c<o.length;c+=1)_(c);ie()}},i(i){if(!u){for(let p=0;p<m.length;p+=1)D(o[p]);u=!0}},o(i){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)w(o[p]);u=!1},d(i){i&&h(e),i&&h(t),ue(o,i)}}}function ze(s){return[me("cms").projects]}class De extends J{constructor(e){super(),K(this,e,ze,Ee,O,{})}}export{De as default};
