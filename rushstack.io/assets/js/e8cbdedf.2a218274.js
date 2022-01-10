"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29118],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=o(r),m=a,f=y["".concat(c,".").concat(m)]||y[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91530:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return y}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),s=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,o={unversionedId:"pages/api/node-core-library.filesystem.getlinkstatisticsasync",id:"pages/api/node-core-library.filesystem.getlinkstatisticsasync",title:"node-core-library.filesystem.getlinkstatisticsasync",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; getLinkStatisticsAsync",source:"@site/docs/pages/api/node-core-library.filesystem.getlinkstatisticsasync.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.filesystem.getlinkstatisticsasync",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem.getlinkstatisticsasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"FileSystem.getLinkStatisticsAsync() method",id:"filesystemgetlinkstatisticsasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.filesystem.getlinkstatisticsasync/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem.getlinkstatisticsasync"},"getLinkStatisticsAsync")),(0,i.kt)("h2",{id:"filesystemgetlinkstatisticsasync-method"},"FileSystem.getLinkStatisticsAsync() method"),(0,i.kt)("p",null,"An async version of ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem.getlinkstatistics"},"FileSystem.getLinkStatistics()")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static getLinkStatisticsAsync(path: string): Promise<FileSystemStats>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystemstats"},"FileSystemStats")," ",">"))}y.isMDXComponent=!0}}]);