"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[567],{3567:function(t,r,n){n.r(r),n.d(r,{default:function(){return o}});var e=n(8152),a=n(2791),c=n(6871),u=n(690),s={CardContainer:"Cast_CardContainer__1V1z5",Card:"Cast_Card__Zdzq+",img:"Cast_img__cgJwW",Text:"Cast_Text__R1+e3"},i=n(184),o=function(){var t=(0,c.UO)().movieId,r=(0,a.useState)(null),n=(0,e.Z)(r,2),o=n[0],p=n[1];return(0,a.useEffect)((function(){u.xc(t).then(p)}),[t]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:s.Container,children:o&&(0,i.jsx)("ul",{className:s.CardContainer,children:o.filter((function(t,r){return r<10&&t.profile_path})).map((function(t){var r=t.id,n=t.name,e=t.profile_path,a=t.character;return(0,i.jsxs)("li",{className:s.Card,children:[(0,i.jsx)("img",{className:s.img,src:"https://image.tmdb.org/t/p/original".concat(e),alt:n,width:200}),(0,i.jsx)("h3",{className:s.Title,children:n}),(0,i.jsxs)("p",{className:s.Text,children:[" Character : ",a," "]})]},r)}))})})})}},690:function(t,r,n){n.d(r,{Tg:function(){return o},Y5:function(){return f},kV:function(){return m},xc:function(){return l},z1:function(){return _}});var e=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="23b413dd3d69bdbc6c71f278d2b3d43a";function o(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("trending/movie/day?api_key=".concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("movie/".concat(r,"?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("/movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=567.bffa9440.chunk.js.map