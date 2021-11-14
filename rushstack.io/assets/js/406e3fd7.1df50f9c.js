"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29029],{50158:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var i=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(u,".").concat(f)]||s[f]||c[f]||a;return n?i.createElement(d,o(o({ref:t},m),{},{components:n})):i.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17478:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var i=n(74834),r=n(28265),a=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/module-minifier-plugin.noopminifier.minify",id:"api/module-minifier-plugin.noopminifier.minify",isDocsHomePage:!1,title:"module-minifier-plugin.noopminifier.minify",description:"Home &gt; @rushstack/module-minifier-plugin &gt; NoopMinifier &gt; minify",source:"@site/docs/api/module-minifier-plugin.noopminifier.minify.md",sourceDirName:"api",slug:"/api/module-minifier-plugin.noopminifier.minify",permalink:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.noopminifier.minify",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"NoopMinifier.minify() method",id:"noopminifierminify-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/module-minifier-plugin.noopminifier.minify/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.noopminifier"},"NoopMinifier")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.noopminifier.minify"},"minify")),(0,a.kt)("h2",{id:"noopminifierminify-method"},"NoopMinifier.minify() method"),(0,a.kt)("p",null,"No-op code transform."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"minify(request: IModuleMinificationRequest, callback: IModuleMinificationCallback): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.imoduleminificationrequest"},"IModuleMinificationRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"The request to process")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.imoduleminificationcallback"},"IModuleMinificationCallback")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback to invoke")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"))}s.isMDXComponent=!0}}]);