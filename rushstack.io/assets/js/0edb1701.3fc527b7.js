"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[71175],{50158:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5518:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/api/node-core-library.mapextensions.mergefrommap",id:"pages/api/node-core-library.mapextensions.mergefrommap",title:"node-core-library.mapextensions.mergefrommap",description:"Home &gt; @rushstack/node-core-library &gt; MapExtensions &gt; mergeFromMap",source:"@site/docs/pages/api/node-core-library.mapextensions.mergefrommap.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.mapextensions.mergefrommap",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.mapextensions.mergefrommap",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"MapExtensions.mergeFromMap() method",id:"mapextensionsmergefrommap-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.mapextensions.mergefrommap/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.mapextensions"},"MapExtensions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.mapextensions.mergefrommap"},"mergeFromMap")),(0,o.kt)("h2",{id:"mapextensionsmergefrommap-method"},"MapExtensions.mergeFromMap() method"),(0,o.kt)("p",null,"Adds all the (key, value) pairs from the source map into the target map."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static mergeFromMap<K, V>(targetMap: Map<K, V>, sourceMap: ReadonlyMap<K, V>): void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"targetMap"),(0,o.kt)("td",{parentName:"tr",align:null},"Map","<","K, V",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The map that entries will be added to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sourceMap"),(0,o.kt)("td",{parentName:"tr",align:null},"ReadonlyMap","<","K, V",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The map containing the entries to be added")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"void"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This function modifies targetMap. Any existing keys will be overwritten."))}u.isMDXComponent=!0}}]);