_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[418],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"6wUG":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-app/[slug]",function(){return r("kcXG")}])},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),u=r("FYa8"),c=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(a.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?o=!1:r.add(s);else{var l=a.props[s],f=n[s]||new Set;f.has(l)?o=!1:(f.add(l),n[s]=f)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},JumW:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("q1tI"),a=r.n(n),o=r("17x9"),i=r.n(o),u=r("TSYQ"),c=r.n(u),s=r("q1Cv");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d={xxxs:"euiTitle--xxxsmall",xxs:"euiTitle--xxsmall",xs:"euiTitle--xsmall",s:"euiTitle--small",m:"euiTitle--medium",l:"euiTitle--large"},h=(Object(s.a)(d),{uppercase:"euiTitle--uppercase"}),m=(Object(s.a)(h),function(e){var t=e.size,r=void 0===t?"m":t,n=e.children,o=e.className,i=e.textTransform,u=p(e,["size","children","className","textTransform"]),s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:c()("euiTitle",d[r],i?h[i]:void 0,o,n.props.className)},u);return a.a.cloneElement(n,s)});m.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,children:i.a.element.isRequired,size:i.a.oneOf(["xxxs","xxs","xs","s","m","l"]),textTransform:i.a.oneOf(["uppercase"]),id:i.a.string}},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),a=r("/GRZ"),o=r("i2R6"),i=(r("qXWd"),r("48fX")),u=r("tCBg"),c=r("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),f=function(e){i(r,e);var t=s(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},a5Ba:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),a=r.n(n),o=r("17x9"),i=r.n(o),u=r("TSYQ"),c=r.n(u);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f={xs:"euiSpacer--xs",s:"euiSpacer--s",m:"euiSpacer--m",l:"euiSpacer--l",xl:"euiSpacer--xl",xxl:"euiSpacer--xxl"},p=(Object.keys(f),function(e){var t=e.className,r=e.size,n=void 0===r?"l":r,o=l(e,["className","size"]),i=c()("euiSpacer",f[n],t);return a.a.createElement("div",s({className:i},o))});p.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,size:i.a.oneOf(["xs","s","m","l","xl","xxl"])}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kcXG:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=(r("q1tI"),r("JumW")),o=r("a5Ba"),i=r("yk6V"),u=r("YFqc"),c=r.n(u),s=r("nOHt"),l=r("8Kt/"),f=r.n(l);t.default=function(){var e,t=null!==(e=Object(s.useRouter)().asPath.split("/").pop())&&void 0!==e?e:"",r="".concat(t," - Next.js EUI Starter");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{children:Object(n.jsx)("title",{children:r})}),Object(n.jsx)(a.a,{size:"l",children:Object(n.jsxs)("h1",{children:["Placeholder page for ",t]})}),Object(n.jsx)(o.a,{}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"This is the catch-all component for routes without their own dedicated page."})}),Object(n.jsx)(o.a,{}),Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{children:"Go to Home"})})]})}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,r){var n=r("5fIB"),a=r("rlHP"),o=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,r){var n=r("C+bE"),a=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}}},[["6wUG",0,1,2,3]]]);