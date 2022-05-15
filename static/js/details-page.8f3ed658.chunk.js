"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[187],{6972:function(t,n,e){e.r(n),e.d(n,{default:function(){return N}});var r,a,c,o,s,i=e(5861),u=e(885),p=e(7757),l=e.n(p),f=e(2791),d=e(501),h=e(6871),v=e(8865),x=e(168),m=e(2879),b=m.Z.div(r||(r=(0,x.Z)(["\n    display: flex;\n    margin-top: 10px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid #2a363b;\n"]))),g=m.Z.div(a||(a=(0,x.Z)(["\n    margin-left: 20px;\n"]))),w=m.Z.ul(c||(c=(0,x.Z)(["\n    padding-bottom: 20px;\n    border-bottom: 1px solid #2a363b;\n"]))),j=m.Z.li(o||(o=(0,x.Z)(["\n    margin-bottom: 20px;\n"]))),k=m.Z.button(s||(s=(0,x.Z)(["\n    height: 32px;\n    font-size: 16px;\n    cursor: pointer;\n    color: white;\n    background-color: #2f21f3;\n    border-radius: 4px;\n    border: 1px solid transparent;\n    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    margin-left: 10px;\n    :hover,\n    :focus {\n        background-color: #7068d8;\n    }\n"]))),y=e(3014),Z=e(4390),_=e(184);function N(){var t,n=(0,f.useState)(null),e=(0,u.Z)(n,2),r=e[0],a=e[1],c=(0,h.UO)().movieId,o=(0,h.TH)(),s=(0,h.s0)();(0,f.useEffect)((function(){var t=function(){var t=(0,i.Z)(l().mark((function t(){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.TP(c);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c]);return(0,_.jsxs)(_.Fragment,{children:[!r&&(0,_.jsx)(v.a,{}),(0,_.jsx)(k,{type:"button",onClick:function(){return function(){var t,n;if(o.pathname.includes("cast")||o.pathname.includes("reviews")||null!==o&&void 0!==o&&null!==(t=o.state)&&void 0!==t&&null!==(n=t.from)&&void 0!==n&&n.search)return console.log(o.state.from.pathname),console.log(o.state.from.search),s(o.state.from.pathname+o.state.from.search);s("/")}()},children:"go back"}),r&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(b,{children:[r.poster_path?(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.original_title}):(0,_.jsx)("img",{src:y,alt:"Uknown"}),(0,_.jsxs)(g,{children:[(0,_.jsxs)("h1",{children:[r.title,"(",null===r||void 0===r||null===(t=r.release_date)||void 0===t?void 0:t.split("-")[0],")"]}),(0,_.jsxs)("p",{children:["User Score: ",10*r.vote_average,"%"]}),(0,_.jsx)("h2",{children:"Overview"}),(0,_.jsx)("p",{children:r.overview}),(0,_.jsx)("h2",{children:"Genres"}),(0,_.jsx)("p",{children:r.genres.map((function(t){return(0,_.jsxs)("span",{children:[t.name," "]},t.id)}))})]})]}),(0,_.jsx)("p",{children:"Additional information"}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:(0,_.jsx)(d.OL,{to:"cast",state:o.state,children:"Cast"})}),(0,_.jsx)(j,{children:(0,_.jsx)(d.OL,{to:"reviews",state:o.state,children:"Reviews"})})]}),(0,_.jsx)(h.j3,{})]})]})}},4390:function(t,n,e){e.d(n,{Df:function(){return l},TP:function(){return d},V0:function(){return f},tx:function(){return v},zv:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),o=e(501),s=e(5264),i=e(4569),u=e.n(i),p=(e(184),"07d8f6bb3fbc4adc66305e6fcf7baef2");u().defaults.baseURL="https://api.themoviedb.org/3";var l=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("/trending/all/day?api_key=".concat(p));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("/movie/".concat(n,"?api_key=").concat(p));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("/movie/".concat(n,"/credits?api_key=").concat(p));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.info("".concat(t.t0.code));case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.info("".concat(t.t0.code)),o.rU;case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},3014:function(t,n,e){t.exports=e.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=details-page.8f3ed658.chunk.js.map