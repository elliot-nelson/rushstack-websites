"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[49301],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=o(r),c=n,h=f["".concat(p,".").concat(c)]||f[c]||d[c]||i;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37046:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return f}});var a=r(74834),n=r(28265),i=(r(46393),r(50158)),l=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,o={unversionedId:"api/rush-lib.repostatefile",id:"api/rush-lib.repostatefile",isDocsHomePage:!1,title:"rush-lib.repostatefile",description:"Home &gt; @microsoft/rush-lib &gt; RepoStateFile",source:"@site/docs/api/rush-lib.repostatefile.md",sourceDirName:"api",slug:"/api/rush-lib.repostatefile",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"RepoStateFile class",id:"repostatefile-class",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],d={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile"},"RepoStateFile")),(0,i.kt)("h2",{id:"repostatefile-class"},"RepoStateFile class"),(0,i.kt)("p",null,"This file is used to track the state of various Rush-related features. It is generated and updated by Rush."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class RepoStateFile \n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.filepath"},"filePath")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Get the absolute file path of the repo-state.json file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.isvalid"},"isValid")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If false, the repo-state.json file is not valid and its values cannot be relied upon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.pnpmshrinkwraphash"},"pnpmShrinkwrapHash")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"The hash of the pnpm shrinkwrap file at the end of the last update.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.preferredversionshash"},"preferredVersionsHash")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"The hash of all preferred versions at the end of the last update.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.loadfromfile"},"loadFromFile(jsonFilename, variant)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null},"Loads the repo-state.json data from the specified file path. If the file has not been created yet, then an empty object is returned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.refreshstate"},"refreshState(rushConfiguration)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Refresh the data contained in repo-state.json using the current state of the Rush repo, and save the file if changes were made.")))))}f.isMDXComponent=!0}}]);