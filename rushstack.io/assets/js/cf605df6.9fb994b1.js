"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[64951],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73641:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/node-core-library.import.resolvemodule",id:"pages/api/node-core-library.import.resolvemodule",title:"node-core-library.import.resolvemodule",description:"Home &gt; @rushstack/node-core-library &gt; Import &gt; resolveModule",source:"@site/docs/pages/api/node-core-library.import.resolvemodule.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.import.resolvemodule",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.import.resolvemodule",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"Import.resolveModule() method",id:"importresolvemodule-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.import.resolvemodule/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.import"},"Import")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.import.resolvemodule"},"resolveModule")),(0,o.kt)("h2",{id:"importresolvemodule-method"},"Import.resolveModule() method"),(0,o.kt)("p",null,"This resolves a module path using similar logic as the Node.js ",(0,o.kt)("inlineCode",{parentName:"p"},"require.resolve()")," API, but supporting extra features such as specifying the base folder."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static resolveModule(options: IImportResolveModuleOptions): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iimportresolvemoduleoptions"},"IImportResolveModuleOptions")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"the absolute path of the resolved module. If ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iimportresolveoptions.includesystemmodules"},"IImportResolveOptions.includeSystemModules")," is specified and a system module is found, then its name is returned without any file path."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"A module path is a text string that might appear in a statement such as ",(0,o.kt)("inlineCode",{parentName:"p"},'import { X } from "____";')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'const x = require("___");')," . The implementation is based on the popular ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," NPM package."),(0,o.kt)("p",null,"Suppose ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," is an NPM package whose entry point is ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/index.js")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns \"/path/to/project/node_modules/example/lib/index.js\"\nImport.resolveModule({ modulePath: 'example' });\n\n// Returns \"/path/to/project/node_modules/example/lib/other.js\"\nImport.resolveModule({ modulePath: 'example/lib/other' });\n")),(0,o.kt)("p",null,"If you need to determine the containing package folder (",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/project/node_modules/example")," ), use ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.import.resolvepackage"},"Import.resolvePackage()")," instead."))}m.isMDXComponent=!0}}]);