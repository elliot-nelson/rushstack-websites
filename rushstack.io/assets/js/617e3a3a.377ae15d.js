"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2275],{50158:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),g=n,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return t?a.createElement(d,p(p({ref:r},s),{},{components:t})):a.createElement(d,p({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61018:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=t(74834),n=t(28265),o=(t(46393),t(50158)),p=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"api/node-core-library.packagenameparser.getscope",id:"api/node-core-library.packagenameparser.getscope",isDocsHomePage:!1,title:"node-core-library.packagenameparser.getscope",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser &gt; getScope",source:"@site/docs/api/node-core-library.packagenameparser.getscope.md",sourceDirName:"api",slug:"/api/node-core-library.packagenameparser.getscope",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.getscope",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageNameParser.getScope() method",id:"packagenameparsergetscope-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.packagenameparser.getscope/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser"},"PackageNameParser")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.getscope"},"getScope")),(0,o.kt)("h2",{id:"packagenameparsergetscope-method"},"PackageNameParser.getScope() method"),(0,o.kt)("p",null,"The parsed NPM scope, or an empty string if there was no scope. The scope value will always include the at-sign."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getScope(packageName: string): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"packageName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'For example, if the parsed input was " @ scope/example", then scope would be " @ scope".'))}m.isMDXComponent=!0}}]);