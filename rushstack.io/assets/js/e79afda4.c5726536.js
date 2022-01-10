"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[65104],{50158:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),k=i,h=f["".concat(p,".").concat(k)]||f[k]||u[k]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62800:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(61731),i=r(70396),a=(r(46393),r(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/api-extractor.extractorconfig.skiplibcheck",id:"pages/api/api-extractor.extractorconfig.skiplibcheck",title:"api-extractor.extractorconfig.skiplibcheck",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; skipLibCheck",source:"@site/docs/pages/api/api-extractor.extractorconfig.skiplibcheck.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractorconfig.skiplibcheck",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.skiplibcheck",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"ExtractorConfig.skipLibCheck property",id:"extractorconfigskiplibcheck-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-extractor.extractorconfig.skiplibcheck/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.skiplibcheck"},"skipLibCheck")),(0,a.kt)("h2",{id:"extractorconfigskiplibcheck-property"},"ExtractorConfig.skipLibCheck property"),(0,a.kt)("p",null,"This option causes the compiler to be invoked with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--skipLibCheck")," option."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly skipLibCheck: boolean;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This option is not recommended and may cause API Extractor to produce incomplete or incorrect declarations, but it may be required when dependencies contain declarations that are incompatible with the TypeScript engine that API Extractor uses for its analysis. Where possible, the underlying issue should be fixed rather than relying on skipLibCheck."))}f.isMDXComponent=!0}}]);