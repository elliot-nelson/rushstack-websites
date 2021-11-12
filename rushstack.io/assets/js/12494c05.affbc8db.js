"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[77243],{50158:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(46393);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,h=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return r?t.createElement(h,a(a({ref:n},l),{},{components:r})):t.createElement(h,a({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87590:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var t=r(74834),o=r(28265),i=(r(46393),r(50158)),a=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"api/rush-lib.rushconfiguration.commonversions",id:"api/rush-lib.rushconfiguration.commonversions",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.commonversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; commonVersions",source:"@site/docs/api/rush-lib.rushconfiguration.commonversions.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.commonversions",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.commonversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.commonVersions property",id:"rushconfigurationcommonversions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.commonversions"},"commonVersions")),(0,i.kt)("h2",{id:"rushconfigurationcommonversions-property"},"RushConfiguration.commonVersions property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,i.kt)("p",{parentName:"blockquote"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"getCommonVersions")," instead, which gets the correct common version data for a given active variant.")),(0,i.kt)("p",null,"Settings from the common-versions.json config file."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get commonVersions(): CommonVersionsConfiguration;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If the common-versions.json file is missing, this property will not be undefined. Instead it will be initialized in an empty state, and calling CommonVersionsConfiguration.save() will create the file."))}m.isMDXComponent=!0}}]);