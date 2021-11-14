"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[23146],{50158:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(46393);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(r),f=i,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(h,o(o({ref:e},s),{},{components:r})):n.createElement(h,o({ref:e},s))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66161:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(74834),i=r(28265),a=(r(46393),r(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/api-extractor-model.apientrypoint.importpath",id:"api/api-extractor-model.apientrypoint.importpath",isDocsHomePage:!1,title:"api-extractor-model.apientrypoint.importpath",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiEntryPoint &gt; importPath",source:"@site/docs/api/api-extractor-model.apientrypoint.importpath.md",sourceDirName:"api",slug:"/api/api-extractor-model.apientrypoint.importpath",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apientrypoint.importpath",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ApiEntryPoint.importPath property",id:"apientrypointimportpath-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/api-extractor-model.apientrypoint.importpath/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apientrypoint"},"ApiEntryPoint")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.apientrypoint.importpath"},"importPath")),(0,a.kt)("h2",{id:"apientrypointimportpath-property"},"ApiEntryPoint.importPath property"),(0,a.kt)("p",null,"The module path for this entry point, relative to the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiPackage")," . In the current implementation, this is always the empty string, indicating the default entry point."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get importPath(): string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"API Extractor does not currently support analysis of multiple entry points. If that feature is implemented in the future, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiEntryPoint.importPath")," will be used to distinguish different entry points, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"controls/Button")," in ",(0,a.kt)("inlineCode",{parentName:"p"},'import { Button } from "example-package/controls/Button";')," ."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiEntryPoint.name")," property stores the same value as ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiEntryPoint.importPath")," ."))}m.isMDXComponent=!0}}]);