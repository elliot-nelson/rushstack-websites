"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[35968],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var i=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(f,o(o({ref:t},s),{},{components:r})):i.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80624:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=r(74834),n=r(28265),a=(r(46393),r(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/api-extractor-model.apideclareditem.getexcerptwithmodifiers",id:"api/api-extractor-model.apideclareditem.getexcerptwithmodifiers",isDocsHomePage:!1,title:"api-extractor-model.apideclareditem.getexcerptwithmodifiers",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiDeclaredItem &gt; getExcerptWithModifiers",source:"@site/docs/api/api-extractor-model.apideclareditem.getexcerptwithmodifiers.md",sourceDirName:"api",slug:"/api/api-extractor-model.apideclareditem.getexcerptwithmodifiers",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apideclareditem.getexcerptwithmodifiers",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ApiDeclaredItem.getExcerptWithModifiers() method",id:"apideclareditemgetexcerptwithmodifiers-method",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/api-extractor-model.apideclareditem.getexcerptwithmodifiers/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apideclareditem"},"ApiDeclaredItem")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apideclareditem.getexcerptwithmodifiers"},"getExcerptWithModifiers")),(0,a.kt)("h2",{id:"apideclareditemgetexcerptwithmodifiers-method"},"ApiDeclaredItem.getExcerptWithModifiers() method"),(0,a.kt)("p",null,"If the API item has certain important modifier tags such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@sealed")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"@virtual")," , or ",(0,a.kt)("inlineCode",{parentName:"p"},"@override")," , this prepends them as a doc comment above the excerpt."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getExcerptWithModifiers(): string;\n")),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"string"))}d.isMDXComponent=!0}}]);