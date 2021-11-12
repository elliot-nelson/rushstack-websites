"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[53012],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(o,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8817:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),p=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"api/tree-pattern.itreepatterncaptureset",id:"api/tree-pattern.itreepatterncaptureset",isDocsHomePage:!1,title:"tree-pattern.itreepatterncaptureset",description:"Home &gt; @rushstack/tree-pattern &gt; ITreePatternCaptureSet",source:"@site/docs/api/tree-pattern.itreepatterncaptureset.md",sourceDirName:"api",slug:"/api/tree-pattern.itreepatterncaptureset",permalink:"/rushstack-websites/undefined/pages/api/tree-pattern.itreepatterncaptureset",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ITreePatternCaptureSet type",id:"itreepatterncaptureset-type",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern"},"@rushstack/tree-pattern")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern.itreepatterncaptureset"},"ITreePatternCaptureSet")),(0,i.kt)("h2",{id:"itreepatterncaptureset-type"},"ITreePatternCaptureSet type"),(0,i.kt)("p",null,"Provides additional detail about the success or failure of ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern.treepattern.match"},"TreePattern.match()")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ITreePatternCaptureSet = {\n    [tagName: string]: TreeNode;\n} | {\n    failPath: string;\n};\n")),(0,i.kt)("b",null,"References:")," [TreeNode](/rushstack-websites/undefined/pages/api/tree-pattern.treenode)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"On success, the object will contain keys for any successfully matched tags, as defined using ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern.treepattern.tag"},"TreePattern.tag()")," ."),(0,i.kt)("p",null,"On failure, the ",(0,i.kt)("inlineCode",{parentName:"p"},"failPath")," member will indicate the JSON path of the node that failed to match."))}f.isMDXComponent=!0}}]);