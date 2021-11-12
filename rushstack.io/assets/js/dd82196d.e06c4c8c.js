"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[82050],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,d=c["".concat(l,".").concat(h)]||c[h]||f[h]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},20257:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,u={unversionedId:"api/rush-lib.repostatefile.refreshstate",id:"api/rush-lib.repostatefile.refreshstate",isDocsHomePage:!1,title:"rush-lib.repostatefile.refreshstate",description:"Home &gt; @microsoft/rush-lib &gt; RepoStateFile &gt; refreshState",source:"@site/docs/api/rush-lib.repostatefile.refreshstate.md",sourceDirName:"api",slug:"/api/rush-lib.repostatefile.refreshstate",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.refreshstate",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RepoStateFile.refreshState() method",id:"repostatefilerefreshstate-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],f={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile"},"RepoStateFile")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.repostatefile.refreshstate"},"refreshState")),(0,i.kt)("h2",{id:"repostatefilerefreshstate-method"},"RepoStateFile.refreshState() method"),(0,i.kt)("p",null,"Refresh the data contained in repo-state.json using the current state of the Rush repo, and save the file if changes were made."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"refreshState(rushConfiguration: RushConfiguration): boolean;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rushConfiguration"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},"The Rush configuration for the repo.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"boolean"),(0,i.kt)("p",null,"true if the file was modified, otherwise false."))}c.isMDXComponent=!0}}]);