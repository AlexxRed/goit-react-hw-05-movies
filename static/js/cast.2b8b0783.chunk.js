"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{854:function(t,n,e){e.d(n,{a:function(){return a}});var r=e(4039),c=e(184),a=function(){return(0,c.jsx)(r.RL,{color:"#0c595c",height:80,width:80,wrapperStyle:{margin:"0 auto"}})}},3583:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(5861),c=e(885),a=e(7757),u=e.n(a),o=e(2791),i=e(6871),s=e(854),f=e(4390),p=e(184);function l(){var t=(0,o.useState)(null),n=(0,c.Z)(t,2),e=n[0],a=n[1],l=(0,i.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.zv(l);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[l]),(0,p.jsxs)(p.Fragment,{children:[!e&&(0,p.jsx)(s.a,{}),0===(null===e||void 0===e?void 0:e.length)&&(0,p.jsx)("p",{children:"We don't have any casters info"}),(null===e||void 0===e?void 0:e.length)>0&&(0,p.jsx)("ul",{children:e.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:""}),(0,p.jsx)("p",{children:t.name}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Character:"})," ",t.character]})]},t.id)}))})]})}},4390:function(t,n,e){e.d(n,{Df:function(){return p},TP:function(){return v},V0:function(){return l},tx:function(){return h},zv:function(){return d}});var r=e(5861),c=e(7757),a=e.n(c),u=e(501),o=e(5264),i=e(4569),s=e.n(i),f=(e(184),"07d8f6bb3fbc4adc66305e6fcf7baef2");s().defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/trending/all/day?api_key=".concat(f));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code)),u.rU;case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/search/movie?api_key=".concat(f,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(n,"?api_key=").concat(f));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(n,"/credits?api_key=").concat(f));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(n,"/reviews?api_key=").concat(f));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),o.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=cast.2b8b0783.chunk.js.map