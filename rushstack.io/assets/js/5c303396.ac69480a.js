"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[69881],{50158:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/api-extractor-model.apiitem.getscopednamewithinpackage",id:"api/api-extractor-model.apiitem.getscopednamewithinpackage",isDocsHomePage:!1,title:"api-extractor-model.apiitem.getscopednamewithinpackage",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItem &gt; getScopedNameWithinPackage",source:"@site/docs/api/api-extractor-model.apiitem.getscopednamewithinpackage.md",sourceDirName:"api",slug:"/api/api-extractor-model.apiitem.getscopednamewithinpackage",permalink:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitem.getscopednamewithinpackage",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ApiItem.getScopedNameWithinPackage() method",id:"apiitemgetscopednamewithinpackage-method",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitem"},"ApiItem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/api-extractor-model.apiitem.getscopednamewithinpackage"},"getScopedNameWithinPackage")),(0,i.kt)("h2",{id:"apiitemgetscopednamewithinpackage-method"},"ApiItem.getScopedNameWithinPackage() method"),(0,i.kt)("p",null,"This returns a scoped name such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"Namespace1.Namespace2.MyClass.myMember()"')," . It does not include the package name or entry point."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getScopedNameWithinPackage(): string;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"string"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If called on an ApiEntrypoint, ApiPackage, or ApiModel item, the result is an empty string."))}m.isMDXComponent=!0}}]);