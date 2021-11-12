"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[48360],{50158:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36669:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem",id:"api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem",isDocsHomePage:!1,title:"api-documenter.markdowndocumenteraccessor.getlinkforapiitem",description:"Home &gt; @microsoft/api-documenter &gt; MarkdownDocumenterAccessor &gt; getLinkForApiItem",source:"@site/docs/api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem.md",sourceDirName:"api",slug:"/api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem",permalink:"/rushstack-websites/undefined/pages/api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"MarkdownDocumenterAccessor.getLinkForApiItem() method",id:"markdowndocumenteraccessorgetlinkforapiitem-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],m={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-documenter"},"@microsoft/api-documenter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-documenter.markdowndocumenteraccessor"},"MarkdownDocumenterAccessor")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-documenter.markdowndocumenteraccessor.getlinkforapiitem"},"getLinkForApiItem")),(0,i.kt)("h2",{id:"markdowndocumenteraccessorgetlinkforapiitem-method"},"MarkdownDocumenterAccessor.getLinkForApiItem() method"),(0,i.kt)("p",null,"For a given ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItem")," , return its markdown hyperlink."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getLinkForApiItem(apiItem: ApiItem): string | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"apiItem"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitem"},"ApiItem")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"string ","|"," undefined"),(0,i.kt)("p",null,"The hyperlink, or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItem")," object does not have a hyperlink."))}s.isMDXComponent=!0}}]);