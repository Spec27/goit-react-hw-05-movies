"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[641],{9641:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(8152),a=n(2791),c=n(6871),s=n(690),u="ReviewsMovies_Container__DuZ8k",i="ReviewsMovies_List__FHWBq",o="ReviewsMovies_Elem__UQNYg",p="ReviewsMovies_Title__YMl1u",f="ReviewsMovies_Text__apeJ+",l=n(184),h=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(null),n=(0,r.Z)(t,2),h=n[0],v=n[1];return(0,a.useEffect)((function(){s.kV(e).then(v)}),[e]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:u,children:h&&h.length>0?(0,l.jsx)("ul",{className:i,children:h.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,l.jsxs)("li",{className:o,children:[(0,l.jsxs)("h3",{className:p,children:["Autor : ",t]}),(0,l.jsx)("p",{className:f,children:n})]},r)}))}):(0,l.jsx)("p",{children:"We don't have any reviews for this movie."})})})}},690:function(e,t,n){n.d(t,{Tg:function(){return o},Y5:function(){return f},kV:function(){return d},xc:function(){return h},z1:function(){return _}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),u=n.n(s),i="23b413dd3d69bdbc6c71f278d2b3d43a";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=641.0e0bea29.chunk.js.map