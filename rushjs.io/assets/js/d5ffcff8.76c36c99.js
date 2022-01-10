"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4907],{158:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(6393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(t),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3301:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>u,toc:()=>l,default:()=>h});var n=t(1731),a=t(396),o=(t(6393),t(158)),i=["components"],c={title:"rush write-build-cache (experimental)"},s=void 0,u={unversionedId:"commands/rush_write-build-cache",id:"commands/rush_write-build-cache",title:"rush write-build-cache (experimental)",description:"See also",source:"@site/docs/commands/rush_write-build-cache.md",sourceDirName:"commands",slug:"/commands/rush_write-build-cache",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_write-build-cache",editUrl:"https://github.com/microsoft/rushstack-websites/docs/commands/rush_write-build-cache.md",tags:[],version:"current",frontMatter:{title:"rush write-build-cache (experimental)"},sidebar:"docsSidebar",previous:{title:"rush version",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_version"},next:{title:"Environment variables",permalink:"/rushstack-websites/rushjs.io/pages/configs/environment_vars"}},l=[{value:"See also",id:"see-also",children:[],level:2}],p={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/commands/rush_write-build-cache/"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rush write-build-cache [-h] -c COMMAND [-v]\n\n(EXPERIMENTAL) If the build cache is configured, when this command is run in\nthe folder of a project, write the current state of the project to the cache.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -c COMMAND, --command COMMAND\n                        (Required) The command run in the current project\n                        that produced the current project state.\n  -v, --verbose         Display verbose log information.\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"Enabling the build cache"))))}h.isMDXComponent=!0}}]);