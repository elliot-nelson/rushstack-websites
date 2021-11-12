"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[46982],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,h=f["".concat(s,".").concat(g)]||f[g]||c[g]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2912:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"api/rush-lib.rushconfiguration.getrepostate",id:"api/rush-lib.rushconfiguration.getrepostate",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.getrepostate",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; getRepoState",source:"@site/docs/api/rush-lib.rushconfiguration.getrepostate.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.getrepostate",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.getrepostate",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfiguration.getRepoState() method",id:"rushconfigurationgetrepostate-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.getrepostate"},"getRepoState")),(0,i.kt)("h2",{id:"rushconfigurationgetrepostate-method"},"RushConfiguration.getRepoState() method"),(0,i.kt)("p",null,"Gets the contents from the repo-state.json file for a specific variant."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getRepoState(variant?: string | undefined): RepoStateFile;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"variant"),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the current variant in use by the active command.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile"},"RepoStateFile")))}f.isMDXComponent=!0}}]);