(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"6uou":function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return f}));var r={top:"height",right:"width",bottom:"height",left:"width"},i={height:"top",width:"left"},a={top:"bottom",right:"left",bottom:"top",left:"right"},l={top:"left",right:"top",bottom:"left",left:"top"};function s(e){var t=e.anchor,o=e.popover,n=e.align,r=e.position,i=e.forcePosition,s=e.buffer,p=void 0===s?16:s,f=e.offset,d=void 0===f?0:f,b=e.allowCrossAxis,g=void 0===b||b,h=e.container,m=e.arrowConfig,y=e.returnBoundingBox,v=c(t),w=c(o),O=document.documentElement.clientWidth||window.innerWidth,A=document.documentElement.clientHeight||window.innerHeight,P={top:0,right:O,bottom:A,left:0,height:A,width:O},k=h?c(h):P,S=[r],T=[n];!0!==i?(S.push(a[r]),T.push(n),g&&(S.push(l[r],a[l[r]]),T.push(void 0,void 0))):(r===n||void 0!==n&&r===a[n])&&(T[0]=void 0);for(var E=void 0,B=null,j=0;j<S.length;j++){var R=S[j],C=u({position:R,align:T[j],anchorBoundingBox:v,popoverBoundingBox:w,windowBoundingBox:P,containerBoundingBox:k,offset:d,buffer:p,arrowConfig:m});if((void 0===E||C.fit>E)&&(E=C.fit,B={fit:C.fit,position:R,top:C.top+window.pageYOffset,left:C.left+window.pageXOffset,arrow:C.arrow},1===E))break}if(null==B)throw new Error("Failed to calculate bestPosition");return y&&(B.anchorBoundingBox=v),B}function u(e){var t,o,s=e.position,u=e.align,c=e.anchorBoundingBox,f=e.popoverBoundingBox,d=e.windowBoundingBox,b=e.containerBoundingBox,g=e.arrowConfig,h=e.offset,m=void 0===h?0:h,y=e.buffer,v=void 0===y?0:y,w=l[s],O=function(e){var t=e.crossAxisFirstSide,o=e.crossAxisSecondSide,n=e.crossAxisDimension,r=e.position,i=e.align,l=e.buffer,s=e.offset,u=e.windowBoundingBox,c=e.containerBoundingBox,f=e.popoverBoundingBox,d=e.anchorBoundingBox,b=e.arrowConfig,g=f[n],h=d[n],m=h/2,y=d[t]+m-g/2,v=p(u,c),w=function(e,t,o,n,r){return{top:e.top-t.top-o-("top"===r?n:0),right:t.right-e.right-o-("right"===r?n:0),bottom:t.bottom-e.bottom-o-("bottom"===r?n:0),left:e.left-t.left-o-("left"===r?n:0)}}(d,v,l,s,r),O=b?b.arrowBuffer:0,A=(g-h)/2,P=0,k=1,S=0,T=1;if(null!=i){k="top"===i||"left"===i?1:-1;var E=A+(P=A);S=E>w[a[i]]?E-w[a[i]]:0,T=-1*k}else{var B=w[t],j=w[o];T=B>j?-1:1;var R=Math.min(B,j);S=A>R?A-R:0}var C,x=y+S*T+P*k;if(b){var _=b.arrowWidth;if((C=d[t]+m-_/2)<x+O)x-=x+O-C;else if(C+O+_>x+g){x+=C-(x+g-O-_)}}return{crossAxisPosition:x,crossAxisArrowPosition:C}}({crossAxisFirstSide:w,crossAxisSecondSide:a[w],crossAxisDimension:r[w],position:s,align:u,buffer:v,offset:m,windowBoundingBox:d,containerBoundingBox:b,popoverBoundingBox:f,anchorBoundingBox:c,arrowConfig:g}),A=O.crossAxisPosition,P=O.crossAxisArrowPosition,k=i[r[s]],S=function(e){var t,o=e.position,n=e.offset,a=e.popoverBoundingBox,l=e.anchorBoundingBox,s=e.arrowConfig,u="top"===o||"left"===o,c=r[o],p=a[c],f=l[i[c]],d=l[c];s&&(t=u?p:0);return{primaryAxisPosition:f+(n+(u?p:d))*(u?-1:1),primaryAxisArrowPosition:t}}({position:s,offset:m,popoverBoundingBox:f,anchorBoundingBox:c,arrowConfig:g}),T=S.primaryAxisPosition,E=S.primaryAxisArrowPosition,B=(n(t={},w,A),n(t,k,T),t),j=p(d,b);j.top+=v,j.right-=v,j.bottom-=v,j.left+=v;var R=function(e,t){var o=p(e,t);if(o.left>o.right||o.top>o.top)return 0;var n=(o.right-o.left)*(o.bottom-o.top),r=(e.right-e.left)*(e.bottom-e.top);return n/r}({top:B.top,right:B.left+f.width,bottom:B.top+f.height,left:B.left,width:f.width,height:f.height},j),C=g?(n(o={},w,P-B[w]),n(o,k,E),o):void 0;return{fit:R,top:B.top,left:B.left,arrow:C?{left:C.left,top:C.top}:void 0}}function c(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,height:t.height,width:t.width}}function p(e,t){var o=Math.max(e.top,t.top),n=Math.min(e.right,t.right),r=Math.min(e.bottom,t.bottom),i=Math.max(e.left,t.left);return{top:o,right:n,bottom:r,left:i,height:Math.max(r-o,0),width:Math.max(n-i,0)}}function f(e,t){for(var o=[];o.push(e),null!=(e=e.offsetParent)&&!e.contains(t););o.reverse();for(var n=0,r=o;n<r.length;n++){var i=r[n],a=window.document.defaultView.getComputedStyle(i).getPropertyValue("z-index"),l=parseInt(a,10);if(!isNaN(l))return l}return 0}},"7qzp":function(e,t,o){"use strict";var n=o("J4gH");o.d(t,"a",(function(){return n}))},J4gH:function(e,t,o){"use strict";o.r(t),o.d(t,"ENTER",(function(){return r})),o.d(t,"SPACE",(function(){return i})),o.d(t,"ESCAPE",(function(){return a})),o.d(t,"TAB",(function(){return l})),o.d(t,"BACKSPACE",(function(){return s})),o.d(t,"F2",(function(){return u})),o.d(t,"ARROW_DOWN",(function(){return c})),o.d(t,"ARROW_UP",(function(){return p})),o.d(t,"ARROW_LEFT",(function(){return f})),o.d(t,"ARROW_RIGHT",(function(){return d})),o.d(t,"PAGE_UP",(function(){return b})),o.d(t,"PAGE_DOWN",(function(){return g})),o.d(t,"END",(function(){return h})),o.d(t,"HOME",(function(){return m})),o.d(t,"keys",(function(){return n}));var n,r="Enter",i=" ",a="Escape",l="Tab",s="Backspace",u="F2",c="ArrowDown",p="ArrowUp",f="ArrowLeft",d="ArrowRight",b="PageUp",g="PageDown",h="End",m="Home";!function(e){e.ENTER="Enter",e.SPACE=" ",e.ESCAPE="Escape",e.TAB="Tab",e.BACKSPACE="Backspace",e.F2="F2",e.ARROW_DOWN="ArrowDown",e.ARROW_UP="ArrowUp",e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight",e.PAGE_UP="PageUp",e.PAGE_DOWN="PageDown",e.END="End",e.HOME="Home"}(n||(n={}))},NL9Q:function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var n=o("q1tI");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?u(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var f=function(e){function t(){var e,o;i(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return p(u(o=l(this,(e=s(t)).call.apply(e,[this].concat(r)))),"name","EuiObserver"),p(u(o),"childNode",null),p(u(o),"observer",null),p(u(o),"updateChildNode",(function(e){o.childNode!==e&&(null!=o.observer&&(o.observer.disconnect(),o.observer=null),o.childNode=e,null!=o.childNode&&o.beginObserve())})),p(u(o),"beginObserve",(function(){throw new Error("EuiObserver has no default observation method")})),o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){if(null==this.childNode)throw new Error("".concat(this.name," did not receive a ref"))}},{key:"componentWillUnmount",value:function(){null!=this.observer&&this.observer.disconnect()}},{key:"render",value:function(){return this.props.children(this.updateChildNode)}}])&&a(o.prototype,n),r&&a(o,r),t}(n.Component)},PS0S:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o("q1tI"),r=o.n(n),i=o("17x9"),a=o.n(i),l=o("i8i4"),s=o("q1Cv");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b={after:"afterend",before:"beforebegin"},g=(Object(s.a)(b),function(e){function t(e){var o,n,r,i,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!==typeof r?f(n):r,i=f(o),l=void 0,(a="portalNode")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l;var s=o.props.insert;if(o.portalNode=document.createElement("div"),null==s)document.body.appendChild(o.portalNode);else{var c=s.sibling,d=s.position;c.insertAdjacentElement(b[d],o.portalNode)}return o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){this.updatePortalRef(this.portalNode)}},{key:"componentWillUnmount",value:function(){this.portalNode.parentNode&&this.portalNode.parentNode.removeChild(this.portalNode),this.updatePortalRef(null)}},{key:"updatePortalRef",value:function(e){this.props.portalRef&&this.props.portalRef(e)}},{key:"render",value:function(){return Object(l.createPortal)(this.props.children,this.portalNode)}}])&&c(o.prototype,n),r&&c(o,r),t}(r.a.Component));g.propTypes={children:a.a.node.isRequired,insert:a.a.shape({sibling:a.a.any.isRequired,position:a.a.oneOf(["after","before"]).isRequired}),portalRef:a.a.func}},ZUzz:function(e,t,o){"use strict";o.d(t,"a",(function(){return y}));var n=o("q1tI"),r=o.n(n),i=o("17x9"),a=o.n(i),l=o("TSYQ"),s=o.n(l),u=o("dtKv"),c=o("0ZAC");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var b=function(e){var t,o=e.className,n=e.label,i=e.tooltipContent,a=e.tooltipPosition,l=void 0===a?"top":a,b=e.title,g=e.iconType,h=d(e,["className","label","tooltipContent","tooltipPosition","title","iconType"]),m=s()("euiBetaBadge",{"euiBetaBadge--iconOnly":g},o);if(g&&(t=r.a.createElement(c.a,{className:"euiBetaBadge__icon",type:g,size:"m","aria-hidden":"true"})),i)return r.a.createElement(u.a,{position:l,content:i,title:b||n},r.a.createElement("span",f({tabIndex:0,className:m},h),t||n));var y=b||n;return y&&"string"!==typeof y&&console.warn("Only string titles are permitted on badges that do not use tooltips. Found: ".concat(p(y))),r.a.createElement("span",f({className:m,title:y},h),t||n)};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}b.propTypes={className:a.a.string,"aria-label":a.a.string,"data-test-subj":a.a.string,iconType:a.a.oneOfType([a.a.oneOf(["accessibility","addDataApp","advancedSettingsApp","aggregate","alert","analyzeEvent","annotation","apmApp","apmTrace","apps","appSearchApp","arrowDown","arrowLeft","arrowRight","arrowUp","asterisk","auditbeatApp","beaker","bell","bellSlash","bolt","boxesHorizontal","boxesVertical","branch","broom","brush","bug","bullseye","calendar","canvasApp","codeApp","check","checkInCircleFilled","cheer","classificationJob","clock","cloudDrizzle","cloudStormy","cloudSunny","compute","console","consoleApp","controlsHorizontal","controlsVertical","copy","copyClipboard","createAdvancedJob","createMultiMetricJob","createPopulationJob","createSingleMetricJob","cross","crossClusterReplicationApp","crosshairs","crossInACircleFilled","currency","cut","dashboardApp","database","dataVisualizer","devToolsApp","discoverApp","document","documentEdit","documents","dot","download","editorAlignCenter","editorAlignLeft","editorAlignRight","editorBold","editorCodeBlock","editorComment","editorDistributeHorizontal","editorDistributeVertical","editorHeading","editorItalic","editorItemAlignLeft","editorItemAlignBottom","editorItemAlignCenter","editorItemAlignMiddle","editorItemAlignRight","editorItemAlignTop","editorLink","editorOrderedList","editorPositionBottomLeft","editorPositionBottomRight","editorPositionTopLeft","editorPositionTopRight","editorRedo","editorStrike","editorTable","editorUnderline","editorUndo","editorUnorderedList","email","empty","emsApp","exit","expand","expandMini","exportAction","eye","eyeClosed","faceHappy","faceNeutral","faceSad","filebeatApp","filter","flag","folderCheck","folderClosed","folderExclamation","folderOpen","fullScreen","gear","gisApp","glasses","globe","grab","grabHorizontal","graphApp","grid","grokApp","heart","heartbeatApp","heatmap","help","home","iInCircle","image","importAction","indexClose","indexEdit","indexFlush","indexManagementApp","indexMapping","indexOpen","indexPatternApp","indexRollupApp","indexSettings","inputOutput","inspect","invert","ip","keyboardShortcut","kqlField","kqlFunction","kqlOperand","kqlSelector","kqlValue","lensApp","link","list","listAdd","lock","lockOpen","logsApp","logoAerospike","logoApache","logoAPM","logoAppSearch","logoAWS","logoAWSMono","logoAzure","logoAzureMono","logoBeats","logoBusinessAnalytics","logoCeph","logoCloud","logoCloudEnterprise","logoCode","logoCodesandbox","logoCouchbase","logoDocker","logoDropwizard","logoElastic","logoElasticsearch","logoElasticStack","logoEnterpriseSearch","logoEtcd","logoGCP","logoGCPMono","logoGithub","logoGmail","logoGolang","logoGoogleG","logoHAproxy","logoIBM","logoIBMMono","logoKafka","logoKibana","logoKubernetes","logoLogging","logoLogstash","logoMaps","logoMemcached","logoMetrics","logoMongodb","logoMySQL","logoNginx","logoObservability","logoOsquery","logoPhp","logoPostgres","logoPrometheus","logoRabbitmq","logoRedis","logoSecurity","logoSiteSearch","logoSketch","logoSlack","logoUptime","logoWebhook","logoWindows","logoWorkplaceSearch","logstashFilter","logstashIf","logstashInput","logstashOutput","logstashQueue","machineLearningApp","magnet","magnifyWithMinus","magnifyWithPlus","managementApp","mapMarker","memory","menu","menuLeft","menuRight","merge","metricbeatApp","metricsApp","minimize","minusInCircle","minusInCircleFilled","monitoringApp","moon","nested","node","notebookApp","number","offline","online","outlierDetectionJob","package","packetbeatApp","pageSelect","pagesSelect","partial","paperClip","pause","pencil","pin","pinFilled","pipelineApp","play","plusInCircle","plusInCircleFilled","popout","push","questionInCircle","quote","recentlyViewedApp","refresh","regressionJob","reporter","reportingApp","returnKey","save","savedObjectsApp","scale","search","searchProfilerApp","securityAnalyticsApp","securityApp","securitySignal","securitySignalDetected","securitySignalResolved","shard","share","snowflake","sortable","sortDown","sortLeft","sortRight","sortUp","spacesApp","sqlApp","starEmpty","starEmptySpace","starFilled","starFilledSpace","starMinusEmpty","starMinusFilled","starPlusEmpty","starPlusFilled","stats","stop","stopFilled","stopSlash","storage","string","submodule","swatchInput","symlink","tableOfContents","tableDensityExpanded","tableDensityCompact","tableDensityNormal","tag","tear","temperature","timeline","timelionApp","training","trash","upgradeAssistantApp","uptimeApp","unlink","user","users","usersRolesApp","vector","videoPlayer","visArea","visAreaStacked","visBarHorizontal","visBarHorizontalStacked","visBarVertical","visBarVerticalStacked","visGauge","visGoal","visLine","visMapCoordinate","visMapRegion","visMetric","visPie","visTable","visTagCloud","visText","visTimelion","visualizeApp","visVega","visVisualBuilder","watchesApp","workplaceSearchApp","wrench","tokenClass","tokenProperty","tokenEnum","tokenVariable","tokenMethod","tokenAnnotation","tokenException","tokenInterface","tokenParameter","tokenField","tokenElement","tokenFunction","tokenBoolean","tokenString","tokenArray","tokenNumber","tokenConstant","tokenObject","tokenEvent","tokenKey","tokenNull","tokenStruct","tokenPackage","tokenOperator","tokenEnumMember","tokenRepo","tokenSymbol","tokenFile","tokenModule","tokenNamespace","tokenDate","tokenIP","tokenNested","tokenAlias","tokenShape","tokenGeo","tokenRange","tokenBinary","tokenJoin","tokenPercolator","tokenFlattened","tokenRankFeature","tokenRankFeatures","tokenKeyword","tokenCompletionSuggester","tokenDenseVector","tokenText","tokenTokenCount","tokenSearchType","tokenHistogram"]).isRequired,a.a.string.isRequired,a.a.elementType.isRequired]),label:a.a.oneOfType([a.a.node.isRequired,a.a.oneOfType([a.a.node.isRequired,a.a.string.isRequired]).isRequired]).isRequired,tooltipContent:a.a.node,tooltipPosition:a.a.oneOf(["top","right","bottom","left"]),title:a.a.string};var m={none:null,s:"euiPanel--paddingSmall",m:"euiPanel--paddingMedium",l:"euiPanel--paddingLarge"},y=(Object.keys(m),function(e){var t,o=e.children,n=e.className,i=e.paddingSize,a=void 0===i?"m":i,l=e.hasShadow,u=void 0!==l&&l,c=e.grow,p=void 0===c||c,f=e.panelRef,d=e.onClick,y=e.betaBadgeLabel,v=e.betaBadgeTooltipContent,w=e.betaBadgeTitle,O=h(e,["children","className","paddingSize","hasShadow","grow","panelRef","onClick","betaBadgeLabel","betaBadgeTooltipContent","betaBadgeTitle"]),A=s()("euiPanel",a?m[a]:null,{"euiPanel--shadow":u,"euiPanel--flexGrowZero":!p,"euiPanel--isClickable":d,"euiPanel--hasBetaBadge":y},n);return y&&(t=r.a.createElement("span",{className:"euiPanel__betaBadgeWrapper"},r.a.createElement(b,{label:y,title:w,tooltipContent:v,className:"euiPanel__betaBadge"}))),d?r.a.createElement("button",g({ref:f,className:A,onClick:d},O),t,o):r.a.createElement("div",g({ref:f,className:A},O),t,o)});y.propTypes={hasShadow:a.a.bool,paddingSize:a.a.oneOf(["none","s","m","l"]),grow:a.a.bool,panelRef:a.a.any,betaBadgeLabel:a.a.string,betaBadgeTooltipContent:a.a.node,betaBadgeTitle:a.a.string,className:a.a.string,"aria-label":a.a.string,"data-test-subj":a.a.string}},dtKv:function(e,t,o){"use strict";o.d(t,"a",(function(){return z}));var n=o("q1tI"),r=o.n(n),i=o("17x9"),a=o.n(i),l=o("TSYQ"),s=o.n(l),u=o("q1Cv"),c=o("PS0S");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?y(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var O=function(e){function t(){var e,o;b(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return w(y(o=h(this,(e=m(t)).call.apply(e,[this].concat(r)))),"popover",void 0),w(y(o),"updateDimensions",(function(){requestAnimationFrame((function(){o.popover&&o.props.positionToolTip()}))})),w(y(o),"setPopoverRef",(function(e){o.popover=e,o.props.popoverRef&&o.props.popoverRef(e)})),o}var o,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("euiBody-hasPortalContent"),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("euiBody-hasPortalContent"),window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e,t=this.props,o=t.children,n=t.title,i=t.className,a=(t.positionToolTip,t.popoverRef,d(t,["children","title","className","positionToolTip","popoverRef"])),l=s()("euiToolTipPopover",i);return n&&(e=r.a.createElement("div",{className:"euiToolTip__title"},n)),r.a.createElement("div",f({className:l,ref:this.setPopoverRef},a),e,o)}}])&&g(o.prototype,n),i&&g(o,i),t}(n.Component);O.propTypes={className:a.a.string,"aria-label":a.a.string,"data-test-subj":a.a.string,positionToolTip:a.a.func.isRequired,children:a.a.node,title:a.a.node,popoverRef:a.a.func};var A=o("geKu"),P=o("6uou"),k=o("7qzp"),S=o("VOrJ"),T=o("tffo");function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?M(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var F={top:"euiToolTip--top",right:"euiToolTip--right",bottom:"euiToolTip--bottom",left:"euiToolTip--left"},L=(Object(u.a)(F),{regular:250,long:1250}),q={top:50,left:50,opacity:0},z=function(e){function t(){var e,o;C(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return D(M(o=_(this,(e=N(t)).call.apply(e,[this].concat(r)))),"_isMounted",!1),D(M(o),"anchor",null),D(M(o),"popover",null),D(M(o),"timeoutId",void 0),D(M(o),"state",{visible:!1,calculatedPosition:o.props.position,toolTipStyles:q,arrowStyles:void 0,id:o.props.id||Object(A.a)()()}),D(M(o),"clearAnimationTimeout",(function(){o.timeoutId&&(o.timeoutId=clearTimeout(o.timeoutId))})),D(M(o),"testAnchor",(function(){!1===document.body.contains(o.anchor)?o.hideToolTip():o.state.visible&&requestAnimationFrame(o.testAnchor)})),D(M(o),"setPopoverRef",(function(e){o.popover=e,null==e&&o.setState({toolTipStyles:q,arrowStyles:void 0})})),D(M(o),"showToolTip",(function(){o.timeoutId||(o.timeoutId=setTimeout((function(){Object(S.a)((function(){return o.setState({visible:!0})}))}),L[o.props.delay]))})),D(M(o),"positionToolTip",(function(){var e=o.props.position;if(o.anchor&&o.popover){var t=Object(P.a)({anchor:o.anchor,popover:o.popover,position:e,offset:16,arrowConfig:{arrowWidth:12,arrowBuffer:4}}),n=t.position,r=t.left,i=t.top,a=t.arrow,l=document.documentElement.clientWidth||window.innerWidth,s=l/2<r,u={top:i,left:s?"auto":r,right:s?l-r-o.popover.offsetWidth:"auto"};o.setState({visible:!0,calculatedPosition:n,toolTipStyles:u,arrowStyles:a})}})),D(M(o),"hideToolTip",(function(){o.clearAnimationTimeout(),Object(S.a)((function(){o._isMounted&&o.setState({visible:!1})}))})),D(M(o),"hasFocusMouseMoveListener",(function(){o.hideToolTip(),window.removeEventListener("mousemove",o.hasFocusMouseMoveListener)})),D(M(o),"onKeyUp",(function(e){e.key===k.a.TAB&&window.addEventListener("mousemove",o.hasFocusMouseMoveListener)})),D(M(o),"onMouseOut",(function(e){(o.anchor===e.relatedTarget||null!=o.anchor&&!o.anchor.contains(e.relatedTarget))&&o.hideToolTip(),o.props.onMouseOut&&o.props.onMouseOut(e)})),o}var o,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),o=t,(i=[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this.clearAnimationTimeout(),this._isMounted=!1,window.removeEventListener("mousemove",this.hasFocusMouseMoveListener)}},{key:"componentDidUpdate",value:function(e,t){!1===t.visible&&!0===this.state.visible&&requestAnimationFrame(this.testAnchor)}},{key:"render",value:function(){var e,t=this,o=this.props,i=o.children,a=o.className,l=o.anchorClassName,u=o.content,p=o.title,f=(o.delay,R(o,["children","className","anchorClassName","content","title","delay"])),d=this.state,b=d.arrowStyles,g=d.id,h=d.toolTipStyles,m=d.visible,y=s()("euiToolTip",F[this.state.calculatedPosition],a),v=s()("euiToolTipAnchor",l);m&&(u||p)&&(e=r.a.createElement(c.a,null,r.a.createElement(O,j({className:y,style:h,positionToolTip:this.positionToolTip,popoverRef:this.setPopoverRef,title:p,id:g,role:"tooltip"},f),r.a.createElement("div",{style:b,className:"euiToolTip__arrow"}),r.a.createElement(T.a,{onResize:this.positionToolTip},(function(e){return r.a.createElement("div",{ref:e},u)})))));var w=r.a.createElement("span",{ref:function(e){return t.anchor=e},className:v,onMouseOver:this.showToolTip,onMouseOut:this.onMouseOut,onKeyUp:function(e){t.onKeyUp(e)}},Object(n.cloneElement)(i,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){D(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({onFocus:this.showToolTip,onBlur:this.hideToolTip},m&&{"aria-describedby":this.state.id})));return r.a.createElement(n.Fragment,null,w,e)}}])&&x(o.prototype,i),a&&x(o,a),t}(n.Component);D(z,"defaultProps",{position:"top",delay:"regular"}),z.propTypes={anchorClassName:a.a.string,children:a.a.element.isRequired,className:a.a.string,content:a.a.node,delay:a.a.oneOf(["regular","long"]).isRequired,title:a.a.node,id:a.a.string,position:a.a.oneOf(["top","right","bottom","left"]).isRequired,onMouseOut:a.a.func}},tffo:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));o("q1tI");var n=o("NL9Q");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?s(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var p="undefined"!==typeof window&&"undefined"!==typeof window.ResizeObserver,f={attributes:!0,characterData:!0,childList:!0,subtree:!0},d=function(e){function t(){var e,o;i(this,t);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return c(s(o=a(this,(e=l(t)).call.apply(e,[this].concat(r)))),"name","EuiResizeObserver"),c(s(o),"state",{height:0,width:0}),c(s(o),"onResize",(function(){if(null!=o.childNode){var e=o.childNode.getBoundingClientRect(),t=e.height,n=e.width;if(o.state.height===t&&o.state.width===n)return;o.props.onResize({height:t,width:n}),o.setState({height:t,width:n})}})),c(s(o),"beginObserve",(function(){var e=o.childNode;o.observer=b(e,o.onResize)})),o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),t}(n.a),b=function(e,t){var o;return p?(o=new window.ResizeObserver(t)).observe(e):(o=function(e,t){var o=new MutationObserver(t);o.observe(e,f),window.addEventListener("resize",t);var n=o.disconnect.bind(o);return o.disconnect=function(){n(),window.removeEventListener("resize",t)},o}(e,t),requestAnimationFrame(t)),o}}}]);