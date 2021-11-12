"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[48975],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72221:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"api/tree-pattern.treenode",id:"api/tree-pattern.treenode",isDocsHomePage:!1,title:"tree-pattern.treenode",description:"Home &gt; @rushstack/tree-pattern &gt; TreeNode",source:"@site/docs/api/tree-pattern.treenode.md",sourceDirName:"api",slug:"/api/tree-pattern.treenode",permalink:"/rushstack-websites/undefined/pages/api/tree-pattern.treenode",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"TreeNode type",id:"treenode-type",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern"},"@rushstack/tree-pattern")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern.treenode"},"TreeNode")),(0,i.kt)("h2",{id:"treenode-type"},"TreeNode type"),(0,i.kt)("p",null,"Indicates the tree-like data structure that ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/tree-pattern.treepattern"},"TreePattern")," will traverse."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type TreeNode = any;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"TreePattern")," makes relatively few assumptions object the object structure, this is just an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," . At least as far as the portions to be matched, the tree nodes are expected to be JSON-like structures made from JavaScript arrays, JavaScript objects, and primitive values that can be compared using ",(0,i.kt)("inlineCode",{parentName:"p"},"===")," ."))}d.isMDXComponent=!0}}]);