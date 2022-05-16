"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{4902:function(t,n,r){r.r(n),r.d(n,{default:function(){return k}});var e,a,c,o=r(5861),u=r(885),s=r(7757),i=r.n(s),p=r(2791),f=r(501),l=r(6871),v=r(168),d=r(2879),x=d.Z.h1(e||(e=(0,v.Z)(["\n    color: #377bbb;\n    height: 20px;\n"]))),h=r(184),m=function(t){var n=t.text;return(0,h.jsx)(x,{children:n})},g=d.Z.li(a||(a=(0,v.Z)(["\npadding-bottom: 20px;\n    height: 471px;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 5px;\n    :hover,\n    :focus {\n        box-shadow: 0 1px 4px rgba(255, 107, 1, 1), -23px 0 20px -23px rgba(255, 107, 1, 0.8),\n        23px 0 20px -23px rgba(255, 107, 1, 0.8), 0 0 40px rgba(255, 107, 1, 0.1) inset;\n        transform: scale(1.05);\n    }\n"]))),b=d.Z.ul(c||(c=(0,v.Z)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 15px;\n    grid-row-gap: 15px;\n"]))),w=r(3014),y=r(4390);function k(){var t=(0,p.useState)(null),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,l.TH)();return(0,p.useEffect)((function(){if(!r){var t=function(){var t=(0,o.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.Df();case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[r]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{text:"Trending Movies"}),r&&(0,h.jsx)(b,{children:r.map((function(t){var n=t.title,r=t.name,e=t.id,c=t.poster_path;return(0,h.jsx)(g,{children:(0,h.jsxs)(f.rU,{to:"movies/".concat(e),state:{from:a},children:[c?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(c),alt:n}):(0,h.jsx)("img",{src:w,alt:"Uknown"}),null!==n&&void 0!==n?n:r]})},e)}))}),(0,h.jsx)(l.j3,{})]})}},4390:function(t,n,r){r.d(n,{Df:function(){return f},TP:function(){return v},V0:function(){return l},tx:function(){return x},zv:function(){return d}});var e=r(5861),a=r(7757),c=r.n(a),o=r(501),u=r(5264),s=r(4569),i=r.n(s),p=(r(184),"07d8f6bb3fbc4adc66305e6fcf7baef2");i().defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/trending/all/day?api_key=".concat(p));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),u.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),u.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"?api_key=").concat(p));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),u.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"/credits?api_key=").concat(p));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),u.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),u.Notify.info("".concat(t.t0.code)),o.rU;case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},3014:function(t,n,r){t.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=home-page.dd59a71c.chunk.js.map