"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[90070],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39337:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"api/stream-collator.streamcollator.writers",id:"api/stream-collator.streamcollator.writers",isDocsHomePage:!1,title:"stream-collator.streamcollator.writers",description:"Home &gt; @rushstack/stream-collator &gt; StreamCollator &gt; writers",source:"@site/docs/api/stream-collator.streamcollator.writers.md",sourceDirName:"api",slug:"/api/stream-collator.streamcollator.writers",permalink:"/rushstack-websites/undefined/pages/api/stream-collator.streamcollator.writers",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"StreamCollator.writers property",id:"streamcollatorwriters-property",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/stream-collator"},"@rushstack/stream-collator")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/stream-collator.streamcollator"},"StreamCollator")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/stream-collator.streamcollator.writers"},"writers")),(0,o.kt)("h2",{id:"streamcollatorwriters-property"},"StreamCollator.writers property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"The list of writers that have been registered by calling ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/stream-collator.streamcollator.registertask"},"StreamCollator.registerTask()")," , in the order that they were registered."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get writers(): ReadonlySet<CollatedWriter>;\n")))}m.isMDXComponent=!0}}]);