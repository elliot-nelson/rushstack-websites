"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[45400],{50158:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41129:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/api-extractor-model.apiparameterlistmixin.overloadindex",id:"api/api-extractor-model.apiparameterlistmixin.overloadindex",isDocsHomePage:!1,title:"api-extractor-model.apiparameterlistmixin.overloadindex",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiParameterListMixin &gt; overloadIndex",source:"@site/docs/api/api-extractor-model.apiparameterlistmixin.overloadindex.md",sourceDirName:"api",slug:"/api/api-extractor-model.apiparameterlistmixin.overloadindex",permalink:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiparameterlistmixin.overloadindex",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},d=[{value:"ApiParameterListMixin.overloadIndex property",id:"apiparameterlistmixinoverloadindex-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiparameterlistmixin"},"ApiParameterListMixin")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiparameterlistmixin.overloadindex"},"overloadIndex")),(0,i.kt)("h2",{id:"apiparameterlistmixinoverloadindex-property"},"ApiParameterListMixin.overloadIndex property"),(0,i.kt)("p",null,"When a function has multiple overloaded declarations, this zero-based integer index can be used to unqiuely identify them."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly overloadIndex: number;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Consider this overloaded declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export namespace Versioning {\n  // TSDoc: Versioning.(addVersions:1)\n  export function addVersions(x: number, y: number): number;\n\n  // TSDoc: Versioning.(addVersions:2)\n  export function addVersions(x: string, y: string): string;\n\n  // (implementation)\n  export function addVersions(x: number|string, y: number|string): number|string {\n    // . . .\n  }\n}\n")),(0,i.kt)("p",null,"In the above example, there are two overloaded declarations. The overload using numbers will have ",(0,i.kt)("inlineCode",{parentName:"p"},"overloadIndex = 1")," . The overload using strings will have ",(0,i.kt)("inlineCode",{parentName:"p"},"overloadIndex = 2")," . The third declaration that accepts all possible inputs is considered part of the implementation, and is not processed by API Extractor."))}u.isMDXComponent=!0}}]);