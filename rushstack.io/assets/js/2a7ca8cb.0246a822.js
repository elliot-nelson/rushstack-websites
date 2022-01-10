"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43007],{50158:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(46393);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=r,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return t?i.createElement(d,o(o({ref:n},p),{},{components:t})):i.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33213:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=t(61731),r=t(70396),a=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"pages/api/module-minifier-plugin.synchronousminifier.minify",id:"pages/api/module-minifier-plugin.synchronousminifier.minify",title:"module-minifier-plugin.synchronousminifier.minify",description:"Home &gt; @rushstack/module-minifier-plugin &gt; SynchronousMinifier &gt; minify",source:"@site/docs/pages/api/module-minifier-plugin.synchronousminifier.minify.md",sourceDirName:"pages/api",slug:"/pages/api/module-minifier-plugin.synchronousminifier.minify",permalink:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.synchronousminifier.minify",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"SynchronousMinifier.minify() method",id:"synchronousminifierminify-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/module-minifier-plugin.synchronousminifier.minify/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.synchronousminifier"},"SynchronousMinifier")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.synchronousminifier.minify"},"minify")),(0,a.kt)("h2",{id:"synchronousminifierminify-method"},"SynchronousMinifier.minify() method"),(0,a.kt)("p",null,"Transform that synchronously invokes Terser"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"minify(request: IModuleMinificationRequest, callback: IModuleMinificationCallback): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.imoduleminificationrequest"},"IModuleMinificationRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"The request to process")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/module-minifier-plugin.imoduleminificationcallback"},"IModuleMinificationCallback")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback to invoke")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"))}m.isMDXComponent=!0}}]);