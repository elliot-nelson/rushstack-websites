"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[23110],{50158:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52621:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(74834),r=a(28265),i=(a(46393),a(50158)),s=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/api-extractor-model.apireleasetagmixin.isbaseclassof",id:"api/api-extractor-model.apireleasetagmixin.isbaseclassof",isDocsHomePage:!1,title:"api-extractor-model.apireleasetagmixin.isbaseclassof",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiReleaseTagMixin &gt; isBaseClassOf",source:"@site/docs/api/api-extractor-model.apireleasetagmixin.isbaseclassof.md",sourceDirName:"api",slug:"/api/api-extractor-model.apireleasetagmixin.isbaseclassof",permalink:"/rushstack-websites/undefined/pages/api/api-extractor-model.apireleasetagmixin.isbaseclassof",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApiReleaseTagMixin.isBaseClassOf() function",id:"apireleasetagmixinisbaseclassof-function",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apireleasetagmixin"},"ApiReleaseTagMixin")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apireleasetagmixin.isbaseclassof"},"isBaseClassOf")),(0,i.kt)("h2",{id:"apireleasetagmixinisbaseclassof-function"},"ApiReleaseTagMixin.isBaseClassOf() function"),(0,i.kt)("p",null,"A type guard that tests whether the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItem")," subclass extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiReleaseTagMixin")," mixin."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function isBaseClassOf(apiItem: ApiItem): apiItem is ApiReleaseTagMixin;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"apiItem"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitem"},"ApiItem")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"apiItem is ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apireleasetagmixin"},"ApiReleaseTagMixin")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," operator cannot be used to test for mixin inheritance, because each invocation of the mixin function produces a different subclass. (This could be mitigated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol.hasInstance")," , however the TypeScript type system cannot invoke a runtime test.)"))}m.isMDXComponent=!0}}]);