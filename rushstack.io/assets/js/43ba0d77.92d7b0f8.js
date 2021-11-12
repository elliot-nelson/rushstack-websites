"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[99472],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83479:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/node-core-library.iterminalprovider",id:"api/node-core-library.iterminalprovider",isDocsHomePage:!1,title:"node-core-library.iterminalprovider",description:"Home &gt; @rushstack/node-core-library &gt; ITerminalProvider",source:"@site/docs/api/node-core-library.iterminalprovider.md",sourceDirName:"api",slug:"/api/node-core-library.iterminalprovider",permalink:"/rushstack-websites/undefined/pages/api/node-core-library.iterminalprovider",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ITerminalProvider interface",id:"iterminalprovider-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],s={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.iterminalprovider"},"ITerminalProvider")),(0,i.kt)("h2",{id:"iterminalprovider-interface"},"ITerminalProvider interface"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Implement the interface to create a terminal provider. Terminal providers can be registered to a ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.terminal"},"Terminal")," instance to receive messages."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ITerminalProvider \n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/node-core-library.iterminalprovider.eolcharacter"},"eolCharacter")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This property should return the newline character the terminal provider expects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/node-core-library.iterminalprovider.supportscolor"},"supportsColor")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This property should return true only if the terminal provider supports rendering console colors.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/node-core-library.iterminalprovider.write"},"write(data, severity)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This function gets called on every terminal provider upon every message function call on the terminal instance.")))))}d.isMDXComponent=!0}}]);