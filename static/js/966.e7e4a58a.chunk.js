"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[966],{4137:function(n,e,t){t.d(e,{a:function(){return s}});var r,i=t(201),c=t(168),o=t(3081).Z.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100000;\n"]))),a=t(184);function s(){return(0,a.jsx)(o,{children:(0,a.jsx)(i.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},9969:function(n,e,t){t.d(e,{E$:function(){return f},_r:function(){return p},bu:function(){return d},ju:function(){return h},kU:function(){return x},t$:function(){return v}});var r=t(7762),i=t(5861),c=t(3144),o=t(5671),a=t(4687),s=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l="3c17396434cbeb8bf43dc0291bcf9df1",p=(0,c.Z)((function n(){(0,o.Z)(this,n),this.searchTrendingMovies=function(){var n=(0,i.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/week?api_key=".concat(l,"&page=").concat(e),n.prev=1,n.next=4,u.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovies=function(){var n=(0,i.Z)(s().mark((function n(e,t){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(l,"&query=").concat(t,"&page=").concat(e),n.prev=1,n.next=4,u.Z.get(r);case 4:return i=n.sent,n.abrupt("return",i);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),this.searchMovieDetails=function(){var n=(0,i.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(l),n.prev=1,n.next=4,u.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieCredits=function(){var n=(0,i.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(l),n.prev=1,n.next=4,u.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchMovieReviews=function(){var n=(0,i.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(l),n.prev=1,n.next=4,u.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),this.searchGenres=(0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="genre/movie/list?api_key=".concat(l),n.prev=1,n.next=4,u.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))}));function h(n,e){return n||(e||"The best film in your life! :)")}function f(n,e){return n?n.slice(0,4):e?e.slice(0,4):"Coming soon! :)"}function d(n){return null==n?"https://via.placeholder.com/500x600.svg/000000/ffffff?text=Sorry+,+image+loading+is+failed":"https://image.tmdb.org/t/p/w500".concat(n)}function v(n,e){var t=[];if(!e)return"Other";var i,c=(0,r.Z)(e);try{var o=function(){var e=i.value,r=n.find((function(n){return n.id===e}));if(void 0===r)return"continue";t.push(r.name)};for(c.s();!(i=c.n()).done;)o()}catch(a){c.e(a)}finally{c.f()}return 0===t.length&&t.push("Other"),t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}function x(n){var e,t=[],i=(0,r.Z)(n);try{for(i.s();!(e=i.n()).done;){var c=e.value;t.push(c.name)}}catch(o){i.e(o)}finally{i.f()}return 0===t.length?"Other":t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", ")}},3966:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,c,o,a,s,u,l,p,h,f,d,v=t(9439),x=t(2791),g=t(7689),m=t(1087),Z=t(9969),j=t(4137),b=t(8617),w=t(168),k=t(3081),y=(0,k.Z)(m.rU)(r||(r=(0,w.Z)(["\n  position: sticky;\n  z-index: 10000;\n  top: 100px;\n  left: 48px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  background-color: #fff;\n\n  :hover {\n    color: orangered;\n  }\n"]))),_=t(184),z=function(n){var e=n.to,t=n.children;return(0,_.jsxs)(y,{to:e,children:[(0,_.jsx)(b.jTe,{size:"24"}),t]})},M=k.Z.div(i||(i=(0,w.Z)(["\n  margin-top: 14px;\n  margin-left: auto;\n  margin-right: auto;\n\n  max-width: calc(100% - 96px);\n"]))),O=k.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  margin-bottom: 32px;\n"]))),U=k.Z.div(o||(o=(0,w.Z)(["\n  height: 600px;\n"]))),C=k.Z.div(a||(a=(0,w.Z)(["\n  width: 60%;\n  max-width: 800px;\n"]))),S=k.Z.div(s||(s=(0,w.Z)([""]))),T=k.Z.h2(u||(u=(0,w.Z)(["\n  font-size: 32px;\n  margin-bottom: 18px;\n"]))),R=k.Z.h3(l||(l=(0,w.Z)(["\n  margin-top: 26px;\n  margin-bottom: 16px;\n  font-size: 24px;\n"]))),B=k.Z.p(p||(p=(0,w.Z)(["\n  font-size: 18px;\n  margin-bottom: 12px;\n  line-height: 1.5;\n"]))),D=k.Z.span(h||(h=(0,w.Z)(["\n  color: orangered;\n  font-weight: 600;\n"]))),E=k.Z.ul(f||(f=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 18px;\n"]))),F=k.Z.li(d||(d=(0,w.Z)(["\n  font-size: 28px;\n  text-decoration: underline;\n  font-weight: 500;\n  line-height: 1.5;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: orangered;\n  }\n"]))),G=new Z._r,L=function(){var n,e,t=(0,x.useState)(null),r=(0,v.Z)(t,2),i=r[0],c=r[1],o=(0,g.UO)().movieId,a=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,x.useEffect)((function(){G.searchMovieDetails(o).then((function(n){return c(n.data)}))}),[o]),(0,_.jsx)(_.Fragment,{children:i&&(0,_.jsxs)("div",{children:[(0,_.jsx)(z,{to:a,children:"Back"}),(0,_.jsxs)(M,{children:[(0,_.jsxs)(O,{children:[(0,_.jsx)(U,{children:(0,_.jsx)("img",{src:(0,Z.bu)(i.poster_path),alt:i.title})}),(0,_.jsxs)(C,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)(T,{children:i.title}),(0,_.jsxs)(B,{children:["Movie rating:"," ",(0,_.jsx)(D,{children:i.vote_average.toFixed(1)})]}),(0,_.jsxs)(B,{children:["Votes:"," ",(0,_.jsx)(D,{children:i.vote_count})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(R,{children:"Overview"}),(0,_.jsx)(B,{children:i.overview})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(R,{children:"Genres"}),(0,_.jsx)(B,{children:(0,Z.kU)(i.genres)})]})]}),(0,_.jsxs)(E,{children:[(0,_.jsx)(F,{children:(0,_.jsx)(m.rU,{to:"cast",state:{from:a},children:"Cast"})}),(0,_.jsx)(F,{children:(0,_.jsx)(m.rU,{to:"reviews",state:{from:a},children:"Reviews"})})]})]})]}),(0,_.jsx)(x.Suspense,{fallback:(0,_.jsx)(j.a,{}),children:(0,_.jsx)(g.j3,{})})]})]})})}}}]);
//# sourceMappingURL=966.e7e4a58a.chunk.js.map