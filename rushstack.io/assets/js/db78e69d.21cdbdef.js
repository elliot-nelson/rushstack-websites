"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[30312],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,g=m["".concat(o,".").concat(y)]||m[y]||c[y]||u;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<u;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47206:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(61731),a=r(70396),u=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/api/node-core-library.enum.getvaluebykey",id:"pages/api/node-core-library.enum.getvaluebykey",title:"node-core-library.enum.getvaluebykey",description:"Home &gt; @rushstack/node-core-library &gt; Enum &gt; getValueByKey",source:"@site/docs/pages/api/node-core-library.enum.getvaluebykey.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.enum.getvaluebykey",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.enum.getvaluebykey",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"Enum.getValueByKey() method",id:"enumgetvaluebykey-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("head",null,(0,u.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.enum.getvaluebykey/"})),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.enum"},"Enum")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.enum.getvaluebykey"},"getValueByKey")),(0,u.kt)("h2",{id:"enumgetvaluebykey-method"},"Enum.getValueByKey() method"),(0,u.kt)("p",null,"This API is similar to ",(0,u.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.enum.trygetvaluebykey"},"Enum.tryGetValueByKey()")," , except that it throws an exception if the key is undefined."),(0,u.kt)("b",null,"Signature:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"static getValueByKey<TEnumValue>(enumObject: {\n        [key: string]: TEnumValue | string;\n        [key: number]: TEnumValue | string;\n    }, key: string): TEnumValue;\n")),(0,u.kt)("h2",{id:"parameters"},"Parameters"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"enumObject"),(0,u.kt)("td",{parentName:"tr",align:null},"{ ","[","key: string","]",": TEnumValue ","|"," string; ","[","key: number","]",": TEnumValue ","|"," string; }"),(0,u.kt)("td",{parentName:"tr",align:null})),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"key"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null})))),(0,u.kt)("b",null,"Returns:"),(0,u.kt)("p",null,"TEnumValue"))}m.isMDXComponent=!0}}]);