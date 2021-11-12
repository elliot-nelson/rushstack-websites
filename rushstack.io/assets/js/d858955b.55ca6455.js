"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[11106],{50158:function(e,r,a){a.d(r,{Zo:function(){return s},kt:function(){return d}});var t=a(46393);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?t.createElement(k,p(p({ref:r},s),{},{components:a})):t.createElement(k,p({ref:r},s))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82466:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var t=a(74834),n=a(28265),i=(a(46393),a(50158)),p=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/node-core-library.packagename.parse",id:"api/node-core-library.packagename.parse",isDocsHomePage:!1,title:"node-core-library.packagename.parse",description:"Home &gt; @rushstack/node-core-library &gt; PackageName &gt; parse",source:"@site/docs/api/node-core-library.packagename.parse.md",sourceDirName:"api",slug:"/api/node-core-library.packagename.parse",permalink:"/rushstack-websites/undefined/pages/api/node-core-library.packagename.parse",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageName.parse() method",id:"packagenameparse-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var r=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagename"},"PackageName")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagename.parse"},"parse")),(0,i.kt)("h2",{id:"packagenameparse-method"},"PackageName.parse() method"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagename.tryparse"},"PackageName.tryParse()")," , except this throws an exception if the input cannot be parsed."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static parse(packageName: string): IParsedPackageName;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"packageName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.iparsedpackagename"},"IParsedPackageName")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The packageName must not be an empty string."))}m.isMDXComponent=!0}}]);