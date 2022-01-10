"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[48684],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30343:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=r(61731),n=r(70396),o=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/api-extractor.extractorconfig.bundledpackages",id:"pages/api/api-extractor.extractorconfig.bundledpackages",title:"api-extractor.extractorconfig.bundledpackages",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; bundledPackages",source:"@site/docs/pages/api/api-extractor.extractorconfig.bundledpackages.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractorconfig.bundledpackages",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.bundledpackages",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ExtractorConfig.bundledPackages property",id:"extractorconfigbundledpackages-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-extractor.extractorconfig.bundledpackages/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.bundledpackages"},"bundledPackages")),(0,o.kt)("h2",{id:"extractorconfigbundledpackages-property"},"ExtractorConfig.bundledPackages property"),(0,o.kt)("p",null,"A list of NPM package names whose exports should be treated as part of this package."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly bundledPackages: string[];\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For example, suppose that Webpack is used to generate a distributed bundle for the project ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," , and another NPM package ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," is embedded in this bundle. Some types from ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," may become part of the exported API for ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," , but by default API Extractor would generate a .d.ts rollup that explicitly imports ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," . To avoid this, we can specify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  "bundledPackages": [ "library2" ],\n')),(0,o.kt)("p",null,"This would direct API Extractor to embed those types directly in the .d.ts rollup, as if they had been local files for ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," ."))}d.isMDXComponent=!0}}]);