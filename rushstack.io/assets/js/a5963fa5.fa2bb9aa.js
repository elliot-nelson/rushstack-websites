"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[56568],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,g=d["".concat(c,".").concat(u)]||d[u]||f[u]||n;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60074:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=r(61731),o=r(70396),n=(r(46393),r(50158)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/api/api-extractor.extractorconfig.tryloadforfolder",id:"pages/api/api-extractor.extractorconfig.tryloadforfolder",title:"api-extractor.extractorconfig.tryloadforfolder",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; tryLoadForFolder",source:"@site/docs/pages/api/api-extractor.extractorconfig.tryloadforfolder.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractorconfig.tryloadforfolder",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.tryloadforfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ExtractorConfig.tryLoadForFolder() method",id:"extractorconfigtryloadforfolder-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-extractor.extractorconfig.tryloadforfolder/"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.tryloadforfolder"},"tryLoadForFolder")),(0,n.kt)("h2",{id:"extractorconfigtryloadforfolder-method"},"ExtractorConfig.tryLoadForFolder() method"),(0,n.kt)("p",null,"Searches for the api-extractor.json config file associated with the specified starting folder, and loads the file if found. This lookup supports ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"rig packages")," ."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryLoadForFolder(options: IExtractorConfigLoadForFolderOptions): IExtractorConfigPrepareOptions | undefined;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.iextractorconfigloadforfolderoptions"},"IExtractorConfigLoadForFolderOptions")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.iextractorconfigprepareoptions"},"IExtractorConfigPrepareOptions")," ","|"," undefined"),(0,n.kt)("p",null,"An options object that can be passed to ",(0,n.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor.extractorconfig.prepare"},"ExtractorConfig.prepare()")," , or ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if not api-extractor.json file was found."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The search will first look for a package.json file in a parent folder of the starting folder; if found, that will be used as the base folder instead of the starting folder. If the config file is not found in ",(0,n.kt)("inlineCode",{parentName:"p"},"<baseFolder>/api-extractor.json")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"<baseFolder>/config/api-extractor.json")," , then ",(0,n.kt)("inlineCode",{parentName:"p"},"<baseFolder/config/rig.json")," will be checked to see whether a ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"rig package")," is referenced; if so then the rig's api-extractor.json file will be used instead. If a config file is found, it will be loaded and returned with the ",(0,n.kt)("inlineCode",{parentName:"p"},"IExtractorConfigPrepareOptions")," object. Otherwise, ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," is returned to indicate that API Extractor does not appear to be configured for the specified folder."))}d.isMDXComponent=!0}}]);