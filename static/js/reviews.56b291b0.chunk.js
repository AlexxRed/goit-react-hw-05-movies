"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{7748:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(5861),c=n(885),a=n(7757),u=n.n(a),o=n(2791),s=n(6871),i=n(8865),f=n(4390),p=n(184);function v(){var t=(0,o.useState)(null),e=(0,c.Z)(t,2),n=e[0],a=e[1],v=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.tx(v);case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,p.jsxs)(p.Fragment,{children:[!n&&(0,p.jsx)(i.a,{}),0===(null===n||void 0===n?void 0:n.length)&&(0,p.jsx)("p",{children:"We don't have any reviews info"}),n&&(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("b",{children:[(0,p.jsx)("b",{children:"Author: "}),t.author]}),(0,p.jsxs)("p",{children:[" ",t.content]})]},t.id)}))})]})}},4390:function(t,e,n){n.d(e,{Df:function(){return p},TP:function(){return l},V0:function(){return v},tx:function(){return h},zv:function(){return d}});var r=n(5861),c=n(7757),a=n.n(c),u=n(501),o=n(5264),s=n(4569),i=n.n(s),f=(n(184),"07d8f6bb3fbc4adc66305e6fcf7baef2");i().defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/trending/all/day?api_key=".concat(f));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code)),u.rU;case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/search/movie?api_key=".concat(f,"&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(e,"?api_key=").concat(f));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(e,"/credits?api_key=").concat(f));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("/movie/".concat(e,"/reviews?api_key=").concat(f));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=reviews.56b291b0.chunk.js.map