"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[687],{5305:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,a,o,c,u,i=r(5861),s=r(885),p=r(7757),f=r.n(p),l=r(2791),d=r(168),x=r(2879),h=x.Z.form(e||(e=(0,d.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),b=x.Z.input(a||(a=(0,d.Z)(["\n    height: 30px;\n    font-size: 24px;\n    padding-left: 5px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    outline: none;\n    cursor: pointer;\n    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    :focus {\n        border: 1px solid #2f21f3;\n    }\n"]))),g=x.Z.button(o||(o=(0,d.Z)(["\n    height: 32px;\n    font-size: 16px;\n    cursor: pointer;\n    color: white;\n    background-color: #2f21f3;\n    border-radius: 4px;\n    border: 1px solid transparent;\n    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    margin-left: 10px;\n    :hover,\n    :focus {\n        background-color: #7068d8;\n    }\n"]))),v=x.Z.li(c||(c=(0,d.Z)(["\n    height: 471px;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 5px;\n    :hover,\n    :focus {\n        box-shadow: 0 1px 4px rgba(255, 107, 1, 1), -23px 0 20px -23px rgba(255, 107, 1, 0.8),\n        23px 0 20px -23px rgba(255, 107, 1, 0.8), 0 0 40px rgba(255, 107, 1, 0.1) inset;\n        transform: scale(1.05);\n    }\n"]))),m=x.Z.ul(u||(u=(0,d.Z)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 15px;\n    grid-row-gap: 15px;\n"]))),w=r(501),y=r(6871),k=r(8865),Z=r(4390),j=r(3014),_=r(5264),q=r(184);function z(){var n=(0,l.useState)(""),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,l.useState)(null),o=(0,s.Z)(a,2),c=o[0],u=o[1],p=(0,w.lr)(),d=(0,s.Z)(p,2),x=d[0],z=d[1],C=(0,y.TH)();(0,l.useEffect)((function(){if(x.get("query")){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.V0(x.get("query"));case 3:t=n.sent,u(t),0===t.length&&_.Notify.info("Movies is not found"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_.Notify.info("".concat(n.t0.code));case 11:case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}else u(null)}),[x]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(h,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),r||_.Notify.info("Please enter film name"),z({query:r}),e("")},children:[(0,q.jsx)(b,{type:"text",value:r,onChange:function(n){e(n.currentTarget.value)}}),(0,q.jsx)(g,{type:"submit",children:"Search"})]}),!c&&x.get("query")&&(0,q.jsx)(k.a,{}),c&&(0,q.jsx)(m,{children:c.map((function(n){var t;return(0,q.jsx)(v,{children:(0,q.jsxs)(w.rU,{to:"".concat(n.id),state:{from:C},children:[n.poster_path?(0,q.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),alt:n.title,width:300,height:450}):(0,q.jsx)("img",{src:j,alt:"Uknown",width:300,height:450}),null!==(t=n.title)&&void 0!==t?t:n.name]})},n.id)}))})]})}},4390:function(n,t,r){r.d(t,{Df:function(){return s},TP:function(){return f},V0:function(){return p},tx:function(){return d},zv:function(){return l}});var e=r(5861),a=r(7757),o=r.n(a),c=r(4569),u=r.n(c),i="07d8f6bb3fbc4adc66305e6fcf7baef2";u().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3014:function(n,t,r){n.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=movie-page.54096998.chunk.js.map