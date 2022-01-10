"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[97787],{50158:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(t),d=n,m=g["".concat(i,".").concat(d)]||g[d]||u[d]||l;return t?a.createElement(m,o(o({ref:r},s),{},{components:t})):a.createElement(m,o({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65941:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var a=t(61731),n=t(70396),l=(t(46393),t(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4",id:"pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4",title:"node-core-library.legacyadapters.convertcallbacktopromise_4",description:"Home &gt; @rushstack/node-core-library &gt; LegacyAdapters &gt; convertCallbackToPromise",source:"@site/docs/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"LegacyAdapters.convertCallbackToPromise() method",id:"legacyadaptersconvertcallbacktopromise-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:s};function g(e){var r=e.components,t=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4/"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.legacyadapters"},"LegacyAdapters")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_4"},"convertCallbackToPromise")),(0,l.kt)("h2",{id:"legacyadaptersconvertcallbacktopromise-method"},"LegacyAdapters.convertCallbackToPromise() method"),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static convertCallbackToPromise<TResult, TError, TArg1, TArg2, TArg3, TArg4>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, cb: LegacyCallback<TResult, TError>) => void, arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4): Promise<TResult>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fn"),(0,l.kt)("td",{parentName:"tr",align:null},"(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, cb: ",(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.legacycallback"},"LegacyCallback")," ","<","TResult, TError",">",") =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg1"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg2"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg3"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg4"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg4"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"Promise","<","TResult",">"))}g.isMDXComponent=!0}}]);