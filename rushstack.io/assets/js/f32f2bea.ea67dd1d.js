"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[34520],{50158:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(46393);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||a;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17911:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(74834),i=t(28265),a=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"api/rush-lib.rushconfiguration.getimplicitlypreferredversions",id:"api/rush-lib.rushconfiguration.getimplicitlypreferredversions",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.getimplicitlypreferredversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; getImplicitlyPreferredVersions",source:"@site/docs/api/rush-lib.rushconfiguration.getimplicitlypreferredversions.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfiguration.getImplicitlyPreferredVersions() method",id:"rushconfigurationgetimplicitlypreferredversions-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:p};function f(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions"},"getImplicitlyPreferredVersions")),(0,a.kt)("h2",{id:"rushconfigurationgetimplicitlypreferredversions-method"},"RushConfiguration.getImplicitlyPreferredVersions() method"),(0,a.kt)("p",null,"Returns a map of all direct dependencies that only have a single semantic version specifier."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getImplicitlyPreferredVersions(variant?: string | undefined): Map<string, string>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the current variant in use by the active command.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Map","<","string, string",">"),(0,a.kt)("p",null,"A map of dependency name -- ",">"," version specifier for implicitly preferred versions."))}f.isMDXComponent=!0}}]);