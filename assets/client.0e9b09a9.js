webpackJsonp([9],{149:function(e,n,t){"use strict";t.d(n,"d",function(){return r}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return i});var r="SET_RUNTIME_VARIABLE",o="SET_LOCALE_START",a="SET_LOCALE_SUCCESS",i="SET_LOCALE_ERROR"},229:function(e,n,t){"use strict";var r=t(580),o=t.n(r);n.a=o()()},230:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,a){try{var i=n[o](a),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function o(e){var n=e&&e.intl||{},t=n.initialNow,r=n.locale,o=n.messages,a=o&&o[r]||{};return new u.c({initialNow:t,locale:r,messages:a,defaultLocale:"en-US"}).getChildContext().intl}function a(){return function(e,n){return o(n())}}function i(e){var n=this,t=e.locale;return function(){var e=r(regeneratorRuntime.mark(function e(r,a,i){var u,c,f,d,p=i.client,v=i.history;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:l.b,payload:{locale:t}}),e.prev=1,e.next=4,p.networkInterface.query({query:s.a,variables:{locale:t}});case 4:return u=e.sent,c=u.data,f=c.intl.reduce(function(e,n){return e[n.id]=n.message,e},{}),r({type:l.c,payload:{locale:t,messages:f}}),d=31536e4,document.cookie="lang="+t+";path=/;max-age="+d,v.push("?lang="+t),e.abrupt("return",o(a()));case 12:return e.prev=12,e.t0=e.catch(1),r({type:l.a,payload:{locale:t,error:e.t0}}),e.abrupt("return",null);case 16:case"end":return e.stop()}},e,n,[[1,12]])}));return function(n,t,r){return e.apply(this,arguments)}}()}n.a=a,n.b=i;var u=t(98),l=t(149),c=t(589),s=t.n(c)},236:function(e,n,t){t(237),e.exports=t(439)},439:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){function n(){["complete","loaded","interactive"].includes(document.readyState)&&document.body?Object(r.a)():document.addEventListener("DOMContentLoaded",r.a,!1)}var r=t(440);e.Intl?n():t.e(8).then(function(e){t(232),t(233),t(234),t(235),n()}.bind(null,t)).catch(t.oe)}.call(n,t(42))},440:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){var t=n.baseUrl,r=n.cookie,o={method:"POST",mode:t?"cors":"same-origin",credentials:t?"include":"same-origin",headers:X({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return function(n,r){return n.startsWith("/graphql")||n.startsWith("/api")?e(""+t+n,X({},o,r,{headers:X({},o.headers,r&&r.headers)})):e(n,r)}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments[1].type,e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];switch(n.type){case K.d:return Q({},e,l({},n.payload.name,n.payload.value));default:return e}}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments[1];if(null===e)return{initialNow:Date.now()};switch(n.type){case K.b:var t=e[n.payload.locale]?n.payload.locale:e.locale;return z({},e,{locale:t,newLocale:n.payload.locale});case K.c:return z({},e,{locale:n.payload.locale,newLocale:null,messages:z({},e.messages,s({},n.payload.locale,n.payload.messages))});case K.a:return z({},e,{newLocale:null});default:return e}}function d(e){var n=e.apolloClient;return Object(G.combineReducers)({apollo:n.reducer(),user:u,runtime:c,intl:f})}function p(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,a){try{var i=n[o](a),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function v(e){return function(){function n(e,n){return r.apply(this,arguments)}var r=p(regeneratorRuntime.mark(function n(r,o){var a,i,u,l,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=c.skipCache,i=r,"string"!=typeof r){n.next=8;break}return n.next=6,new Promise(function(e){e()}).then(function(e){return t(223)}.bind(null,t)).catch(t.oe);case 6:u=n.sent,i=u([r]);case 8:if(!a){n.next=10;break}return n.abrupt("return",e.networkInterface.query({query:i,variables:o}));case 10:if(l=!1,i.definitions&&(l=i.definitions.some(function(e){return e&&"mutation"===e.operation})),!l){n.next=14;break}return n.abrupt("return",e.mutate({mutation:i,variables:o}));case 14:return n.abrupt("return",e.query({query:i,variables:o}));case 15:case"end":return n.stop()}},n,this)}));return n}()}function h(e){var n=e.apolloClient,t=e.fetch;return{client:n,history:e.history,fetch:t,apolloClient:n,graphqlRequest:v(t)}}function y(e,n,t,r,o){var a=document.head.querySelector(e+"["+n+'="'+t+'"]');if((!a||a.getAttribute(r)!==o)&&(a&&a.parentNode.removeChild(a),"string"==typeof o)){var i=document.createElement(e);i.setAttribute(n,t),i.setAttribute(r,o),document.head.appendChild(i)}}function m(e,n){y("meta","name",e,"content",n)}function b(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,a){try{var i=n[o](a),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function w(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,a){try{var i=n[o](a),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function g(){we=Z.a.location,ge||(ge=!0,Z.a.listen(se)),se(we)}var k=(t(126),t(56)),O=t.n(k),x=t(455),S=t.n(x),j=(t(532),t(533)),C=t.n(j),P=t(145),R=t(98),E=t(556),_=t.n(E),q=t(557),N=t.n(q),A=t(558),T=t.n(A),L=t(67),I=t.n(L),U=t(228),D=t(231),$=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var a=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),B=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Y=V({insertCss:I.a.func.isRequired,fetch:I.a.func.isRequired},U.a.childContextTypes,{client:I.a.object.isRequired,intl:R.c.childContextTypes.intl}),M=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),B(n,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){var e=this.props.context.client;return $(D.ApolloProvider,{client:e},void 0,this.props.children)}}]),n}(O.a.PureComponent);M.childContextTypes=Y;var F=M,X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W=i,G=t(76),H=t(578),J=t.n(H),K=t(149),Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z=(t(579),t(229)),ee=t(218),ne=new ee.default({networkInterface:Object(ee.createNetworkInterface)({uri:"/graphql",opts:{credentials:"include"}}),queryDeduplication:!0,reduxRootSelector:function(e){return e.apollo}}),te=t(586),re=t.n(te),oe={path:"/",children:[{path:"/",load:function(){return t.e(2).then(t.bind(null,728))}},{path:"/contact",load:function(){return t.e(6).then(t.bind(null,729))}},{path:"/login",load:function(){return t.e(5).then(t.bind(null,730))}},{path:"/register",load:function(){return t.e(3).then(t.bind(null,731))}},{path:"/about",load:function(){return t.e(0).then(t.bind(null,732))}},{path:"/privacy",load:function(){return t.e(1).then(t.bind(null,733))}},{path:"/admin",load:function(){return t.e(7).then(t.bind(null,734))}},{path:"*",load:function(){return t.e(4).then(t.bind(null,735))}}],action:function(e){var n=this,t=e.next;return b(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return r=e.sent,r.title=(r.title||"Untitled Page")+" - www.reactstarterkit.com",r.description=r.description||"",e.abrupt("return",r);case 6:case"end":return e.stop()}},e,n)}))()}},ae=oe,ie=new re.a(ae,{resolveRoute:function(e,n){return"function"==typeof e.route.load?e.route.load().then(function(t){return t.default(e,n)}):"function"==typeof e.route.action?e.route.action(e,n):null}}),ue=t(230);n.a=g;var le=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var a=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},se=function(){var e=w(regeneratorRuntime.mark(function e(n,t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he[we.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===t&&delete he[n.key],we=n,ve.intl=pe.dispatch(Object(ue.a)()),e.prev=4,e.next=7,ie.resolve(ce({},ve,{path:n.pathname,query:C.a.parse(n.search),locale:pe.getState().intl.locale}));case 7:if(r=e.sent,we.key===n.key){e.next=10;break}return e.abrupt("return");case 10:if(!r.redirect){e.next=13;break}return Z.a.replace(r.redirect),e.abrupt("return");case 13:be=S.a.render(le(F,{context:ve},void 0,r.component),me,function(){return ye(r,n)}),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(4),e.next=20;break;case 20:console.error(e.t0),t&&we.key===n.key&&window.location.reload();case 22:case"end":return e.stop()}},e,this,[[4,16]])}));return function(n,t){return e.apply(this,arguments)}}(),fe=function(){return ne}();Object(R.d)(_.a),Object(R.d)(N.a),Object(R.d)(T.a);var de=W(self.fetch,{baseUrl:window.App.apiUrl}),pe=function(e,n){var t=h(n),r=n.apolloClient,o=[J.a.withExtraArgument(t),r.middleware()],a=void 0;a=G.applyMiddleware.apply(void 0,o);var i=d({apolloClient:r}),u=Object(G.createStore)(i,e,a);return u}(window.App.state,{apolloClient:fe,fetch:de,history:Z.a}),ve={insertCss:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},client:fe,store:pe,storeSubscription:null,fetch:de,intl:pe.dispatch(Object(ue.a)())},he={};window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var ye=function(){var e=document.getElementById("css");e&&e.parentNode.removeChild(e),ye=function(e,n){document.title=e.title,m("description",e.description);var t=0,r=0,o=he[n.key];if(o)t=o.scrollX,r=o.scrollY;else{var a=n.hash.substr(1);if(a){var i=document.getElementById(a);i&&(r=window.pageYOffset+i.getBoundingClientRect().top)}}window.scrollTo(t,r),window.ga&&window.ga("send","pageview",Object(P.createPath)(n))}},me=document.getElementById("app"),be=void 0,we=Z.a.location,ge=!1;window.RSK_ENTRY=g},536:function(e,n){},544:function(e,n){},551:function(e,n){},589:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"intl"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:null}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"intl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:null},{kind:"Field",alias:null,name:{kind:"Name",value:"message"},arguments:[],directives:[],selectionSet:null}]}}]}}],loc:{start:0,end:82}};t.loc.source={body:"query intl ($locale:String!) {\n  intl (locale:$locale) {\n    id\n    message\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t}},[236]);
//# sourceMappingURL=client.0e9b09a9.js.map