"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8943],{158:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(6393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(t),m=a,f=h["".concat(i,".").concat(m)]||h[m]||p[m]||o;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},920:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>u,toc:()=>l,default:()=>h});var n=t(1731),a=t(396),o=(t(6393),t(158)),s=["components"],c={title:"rush check"},i=void 0,u={unversionedId:"commands/rush_check",id:"commands/rush_check",title:"rush check",description:"",source:"@site/docs/commands/rush_check.md",sourceDirName:"commands",slug:"/commands/rush_check",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_check",editUrl:"https://github.com/microsoft/rushstack-websites/docs/commands/rush_check.md",tags:[],version:"current",frontMatter:{title:"rush check"},sidebar:"docsSidebar",previous:{title:"rush change",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_change"},next:{title:"rush deploy",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_deploy"}},l=[],p={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/commands/rush_check/"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rush check [-h] [--variant VARIANT] [--json]\n\nChecks each project's package.json files and ensures that all dependencies\nare of the same version throughout the repository.\n\nOptional arguments:\n  -h, --help         Show this help message and exit.\n  --variant VARIANT  Run command using a variant installation configuration.\n                     This parameter may alternatively be specified via the\n                     RUSH_VARIANT environment variable.\n  --json             If this flag is specified, output will be in JSON format.\n")))}h.isMDXComponent=!0}}]);