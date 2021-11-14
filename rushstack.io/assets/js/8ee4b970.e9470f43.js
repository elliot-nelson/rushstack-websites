"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[14478],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69105:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/node-core-library.stringbufferterminalprovider.getdebugoutput",id:"api/node-core-library.stringbufferterminalprovider.getdebugoutput",isDocsHomePage:!1,title:"node-core-library.stringbufferterminalprovider.getdebugoutput",description:"Home &gt; @rushstack/node-core-library &gt; StringBufferTerminalProvider &gt; getDebugOutput",source:"@site/docs/api/node-core-library.stringbufferterminalprovider.getdebugoutput.md",sourceDirName:"api",slug:"/api/node-core-library.stringbufferterminalprovider.getdebugoutput",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.stringbufferterminalprovider.getdebugoutput",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"StringBufferTerminalProvider.getDebugOutput() method",id:"stringbufferterminalprovidergetdebugoutput-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.stringbufferterminalprovider.getdebugoutput/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.stringbufferterminalprovider"},"StringBufferTerminalProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.stringbufferterminalprovider.getdebugoutput"},"getDebugOutput")),(0,i.kt)("h2",{id:"stringbufferterminalprovidergetdebugoutput-method"},"StringBufferTerminalProvider.getDebugOutput() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Get everything that has been written at debug-level severity."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getDebugOutput(options?: IStringBufferOutputOptions): string;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.istringbufferoutputoptions"},"IStringBufferOutputOptions")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"string"))}d.isMDXComponent=!0}}]);