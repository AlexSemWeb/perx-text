(this["webpackJsonpperx-test"]=this["webpackJsonpperx-test"]||[]).push([[0],{18:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(6),i=c.n(r),a=c(13),s=(c(18),c(3));var u=c(4),o=c(2),d={products:[],isFetching:!0,isFiltered:!1,isFailure:!1},j="LOAD_PRODUCTS",l="LOAD_PRODUCTS_FAILURE",O="ADD_TO_CART_PRODUCT",m="MINUS_PRODUCT",b="REMOVE_PRODUCT",p="REMOVE_ALL_PRODUCT",v="FILTER_PRODUCTS";function f(){return JSON.parse(localStorage.getItem("cart"))||{}}function h(e){var t=f();t[e.name]=e.inCart,localStorage.setItem("cart",JSON.stringify(t))}var x=function(e){return{type:j,payload:e}},C=function(){return{type:l}},g=c(1),N=function(e){var t=e.makeActive;return Object(g.jsx)("div",{className:"cart--container",onClick:t,children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 122.9 107.5",style:{enableBackground:"new 0 0 122.9 107.5"},className:"cart",children:Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"})})})})},_=function(e){var t=e.count,c=e.minus,n=e.plus;return Object(g.jsxs)("div",{className:"count--container",children:[Object(g.jsx)("div",{className:"count count__minus",onClick:c,children:"-"}),Object(g.jsx)("div",{className:"count",children:t}),Object(g.jsx)("div",{className:"count count__plus",onClick:n,children:"+"})]})},F=function(e){var t=e.removeItem;return Object(g.jsx)("div",{className:"remove--container",onClick:t,children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"remove",children:Object(g.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z",fill:"red"})})})},R=function(e){var t=e.img,c=e.title,n=e.id,r=e.price,i=e.inCart,a=void 0===i?0:i,u=e.isFiltered,o=Object(s.b)();function d(){o(function(e){return{type:O,id:e}}(n))}return Object(g.jsxs)("div",{className:"product",children:[Object(g.jsx)("div",{className:"product__img--container",children:Object(g.jsx)("img",{className:"product__img",src:"https://murmuring-tor-81614.herokuapp.com/"+t,alt:""})}),u&&Object(g.jsx)(F,{removeItem:function(){o(function(e){return{type:b,id:e}}(n))}}),Object(g.jsxs)("div",{className:"product--description",children:[Object(g.jsxs)("div",{className:"product--left",children:[Object(g.jsx)("span",{className:"title",children:c}),Object(g.jsx)("span",{className:"price",children:r+" $"})]}),a?Object(g.jsx)(_,{count:a,minus:function(){o(function(e){return{type:m,id:e}}(n))},plus:d}):Object(g.jsx)(N,{active:a,makeActive:d})]})]})},w=function(e){var t=e.productsCount,c=Object(s.b)(),n=Object(s.c)((function(e){return e.productsReducer.isFiltered}));return Object(g.jsx)("div",{className:"filter ".concat(t?"active":""," "),"data-product-count":t,children:Object(g.jsx)(N,{active:n,makeActive:function(){c({type:v})}})})},y=function(e){var t=e.price,c=Object(s.b)();return Object(g.jsxs)("div",{className:"cart__info",children:[Object(g.jsx)("span",{className:"cart__info-sum",children:"\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ".concat(t," $")}),Object(g.jsxs)("div",{className:"cart__info-remove",children:["\u0423\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b ",Object(g.jsx)(F,{removeItem:function(){c({type:p})}})]})]})},k=function(e){var t=e.dealers,c=Object(s.c)((function(e){return e.productsReducer.products})),r=Object(s.c)((function(e){return e.productsReducer.isFetching})),i=Object(s.c)((function(e){return e.productsReducer.isFiltered})),u=Object(s.c)((function(e){return e.productsReducer.isFailure})),o=function(e,t){return[t?e.filter((function(e){return e.inCart})):e.map((function(e){return e})),Object(n.useMemo)((function(){return e.reduce((function(e,t){return t.inCart?e+=t.inCart:e+=0}),0)}),[e]),Object(n.useMemo)((function(){return e.reduce((function(e,t){return t.inCart?e+=t.inCart*t.price:e+=0}),0).toFixed(2)}),[e])]}(c,i),d=Object(a.a)(o,3),j=d[0],l=d[1],O=d[2],m=Object(s.b)();return Object(n.useEffect)((function(){m(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length?"?dealers=".concat(e.join(",")):"";return function(e){fetch("https://murmuring-tor-81614.herokuapp.com/api/goods/"+t).then((function(e){return e.json()})).then((function(t){return e(x(t))})).catch((function(t){e(C())}))}}(t))}),[]),r?Object(g.jsx)("div",{className:"loading",children:"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):u?Object(g.jsx)("div",{className:"loading",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"}):c.length?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{productsCount:l}),Object(g.jsxs)("div",{className:"product--container",children:[i&&Object(g.jsx)(y,{price:O}),j.length?j.map((function(e){return function(e){return Object(g.jsx)(R,{img:e.image,title:e.name,id:e.name,price:e.price,inCart:e.inCart,isFiltered:i},e.name)}(e)})):"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0435\u0442"]})]}):Object(g.jsx)("div",{className:"loading",children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0435\u0442"})},L=c(8),D=c(12),I=Object(L.b)({productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:var c=f(),n=t.payload.map((function(e){return c[e.name]&&(e.inCart=c[e.name]),e}));return Object(o.a)(Object(o.a)({},e),{},{products:[].concat(Object(u.a)(e.products),Object(u.a)(n)),isFetching:!1});case l:return Object(o.a)(Object(o.a)({},e),{},{isFetching:!1,isFailure:!0});case b:var r=e.products.map((function(e){return e.name===t.id&&(e.inCart=0,h({name:e.name,inCart:e.inCart})),e}));return Object(o.a)(Object(o.a)({},e),{},{products:Object(u.a)(r)});case O:var i=e.products.map((function(e){return e.name===t.id&&(e.inCart=e.inCart>=0?e.inCart+1:1,h({name:e.name,inCart:e.inCart})),e}));return Object(o.a)(Object(o.a)({},e),{},{products:Object(u.a)(i)});case m:var a=e.products.map((function(e){return e.name===t.id&&(e.inCart=e.inCart>0?e.inCart-1:0,h({name:e.name,inCart:e.inCart})),e}));return Object(o.a)(Object(o.a)({},e),{},{products:Object(u.a)(a)});case p:var s=e.products.map((function(e){return delete e.inCart,localStorage.removeItem("cart"),e}));return Object(o.a)(Object(o.a)({},e),{},{products:Object(u.a)(s)});case v:return Object(o.a)(Object(o.a)({},e),{},{isFiltered:!e.isFiltered});default:return e}}}),M=Object(L.c)(I,Object(L.a)(D.a));window.app={start:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=document.getElementById("root"),c=e.dealers?e.dealers:[];i.a.render(Object(g.jsx)(s.a,{store:M,children:Object(g.jsx)(k,{dealers:c})}),t)}}}},[[23,1,2]]]);
//# sourceMappingURL=main.12fe7436.chunk.js.map