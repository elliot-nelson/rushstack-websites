"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[19278],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50638:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/api-extractor-model.apiitem.getmergedsiblings",id:"pages/api/api-extractor-model.apiitem.getmergedsiblings",title:"api-extractor-model.apiitem.getmergedsiblings",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItem &gt; getMergedSiblings",source:"@site/docs/pages/api/api-extractor-model.apiitem.getmergedsiblings.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apiitem.getmergedsiblings",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apiitem.getmergedsiblings",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApiItem.getMergedSiblings() method",id:"apiitemgetmergedsiblings-method",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-extractor-model.apiitem.getmergedsiblings/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apiitem"},"ApiItem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apiitem.getmergedsiblings"},"getMergedSiblings")),(0,i.kt)("h2",{id:"apiitemgetmergedsiblings-method"},"ApiItem.getMergedSiblings() method"),(0,i.kt)("p",null,"If this item has a name (i.e. extends ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiNameMixin")," ), then return all items that have the same parent and the same name. Otherwise, return all items that have the same parent and the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItemKind")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getMergedSiblings(): ReadonlyArray<ApiItem>;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"ReadonlyArray","<",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apiitem"},"ApiItem")," ",">"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Examples: For a function, this would return all overloads for the function. For a constructor, this would return all overloads for the constructor. For a merged declaration (e.g. a ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," with the same name), this would return both declarations. If this item does not have a parent, or if it is the only item of its name/kind, then the result is an array containing only this item."))}m.isMDXComponent=!0}}]);