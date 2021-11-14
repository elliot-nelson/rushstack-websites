"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[83042],{50158:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(46393);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=o(r),m=n,f=h["".concat(p,".").concat(m)]||h[m]||c[m]||s;return r?a.createElement(f,i(i({ref:e},u),{},{components:r})):a.createElement(f,i({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,i=new Array(s);i[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var o=2;o<s;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},11355:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return h}});var a=r(74834),n=r(28265),s=(r(46393),r(50158)),i=["components"],l={title:"Core plugins"},p=void 0,o={unversionedId:"heft/core_plugins",id:"heft/core_plugins",isDocsHomePage:!1,title:"Core plugins",description:"Built-in plugins",source:"@site/docs/heft/core_plugins.md",sourceDirName:"heft",slug:"/heft/core_plugins",permalink:"/rushstack-websites/rushstack.io/pages/heft/core_plugins",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft/core_plugins.md",tags:[],version:"current",frontMatter:{title:"Core plugins"},sidebar:"docsSidebar",previous:{title:"Heft architecture",permalink:"/rushstack-websites/rushstack.io/pages/heft/architecture"},next:{title:"Using rig packages",permalink:"/rushstack-websites/rushstack.io/pages/heft/rig_packages"}},u=[{value:"Built-in plugins",id:"built-in-plugins",children:[],level:2},{value:"Packaged plugins",id:"packaged-plugins",children:[],level:2}],c={toc:u};function h(t){var e=t.components,r=(0,n.Z)(t,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/heft/core_plugins/"})),(0,s.kt)("h2",{id:"built-in-plugins"},"Built-in plugins"),(0,s.kt)("p",null,"These plugins are bundled with the ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft")," package and are enabled by default:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/api-extractor"},"api-extractor")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyFilesPlugin.ts"},"CopyFilesPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/copy-files"},"copy-files")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts"},"CopyStaticAssetsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/copy-static-assets"},"copy-static-assets")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/DeleteGlobsPlugin.ts"},"DeleteGlobsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/delete-globs"},"delete-globs")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/node-service"},"node-service")," task for developing Node.js services")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ProjectValidatorPlugin.ts"},"ProjectValidatorPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"An internal Heft plugin that performs basic validation such as warning about obsolete files in the ",(0,s.kt)("inlineCode",{parentName:"td"},".heft")," folder")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/SassTypingsPlugin/SassTypingsPlugin.ts"},"SassTypingsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/sass-typings"},"sass-typings")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts"},"TypeScriptPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/heft_tasks/typescript"},"typescript"),", ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/eslint"},"eslint"),", and ",(0,s.kt)("a",{parentName:"td",href:"../heft_tasks/tslint"},"tslint")," tasks")))),(0,s.kt)("h2",{id:"packaged-plugins"},"Packaged plugins"),(0,s.kt)("p",null,"The following core plugins are published as separate NPM packages, and must be explicitly loaded using your\nproject's ",(0,s.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json")," config file:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-jest-plugin"},"@rushstack/heft-jest-plugin")," - Implements the ",(0,s.kt)("a",{parentName:"li",href:"../heft_tasks/jest"},"jest")," task for unit tests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin")," - Implements the ",(0,s.kt)("a",{parentName:"li",href:"../heft_tasks/webpack"},"webpack")," bundling and ",(0,s.kt)("inlineCode",{parentName:"li"},"webpack-dev-server")," functionality for Webpack 5"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin")," - Supports older projects using Webpack 4")))}h.isMDXComponent=!0}}]);