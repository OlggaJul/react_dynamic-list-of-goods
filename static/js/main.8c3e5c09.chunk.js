(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(5),c=e.n(r),o=e(3),a=e(6),u=e(1),i=e.n(u),s=e(2),f=(e(12),e(13),e(0)),d=function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{"data-cy":"good",className:t.color,children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var p=function(){var t=Object(s.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],c=function(){var t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().then((function(t){return t})).then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().then((function(t){return t})).then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c()},children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return u()},children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return p()},children:"Load red goods"}),Object(f.jsx)(d,{goods:e})]})};c.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8c3e5c09.chunk.js.map