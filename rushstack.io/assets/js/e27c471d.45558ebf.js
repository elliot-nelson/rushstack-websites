"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60329],{50158:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=a,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},48323:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname",id:"pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname",title:"rush-lib.rushconfiguration.findprojectbyshorthandname",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; findProjectByShorthandName",source:"@site/docs/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.findProjectByShorthandName() method",id:"rushconfigurationfindprojectbyshorthandname-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname"},"findProjectByShorthandName")),(0,i.kt)("h2",{id:"rushconfigurationfindprojectbyshorthandname-method"},"RushConfiguration.findProjectByShorthandName() method"),(0,i.kt)("p",null,'This is used e.g. by command-line interfaces such as "rush build --to example". If "example" is not a project name, then it also looks for a scoped name like ',(0,i.kt)("inlineCode",{parentName:"p"},"@something/example")," . If exactly one project matches this heuristic, it is returned. Otherwise, undefined is returned."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"findProjectByShorthandName(shorthandProjectName: string): RushConfigurationProject | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shorthandProjectName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ","|"," undefined"))}h.isMDXComponent=!0}}]);