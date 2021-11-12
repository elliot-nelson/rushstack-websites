"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[97895],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(46393);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(74834),s=n(28265),a=(n(46393),n(50158)),o=["components"],i={title:"sass.json"},l=void 0,c={unversionedId:"heft_configs/sass_json",id:"heft_configs/sass_json",isDocsHomePage:!1,title:"sass.json",description:"| | |",source:"@site/docs/heft_configs/sass_json.md",sourceDirName:"heft_configs",slug:"/heft_configs/sass_json",permalink:"/rushstack-websites/undefined/pages/heft_configs/sass_json",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_configs/sass_json.md",tags:[],version:"current",frontMatter:{title:"sass.json"},sidebar:"docsSidebar",previous:{title:"rig.json",permalink:"/rushstack-websites/undefined/pages/heft_configs/rig_json"},next:{title:"typescript.json",permalink:"/rushstack-websites/undefined/pages/heft_configs/typescript_json"}},p=[{value:"Template",id:"template",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"File path:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"<","project folder",">","/config/rig.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../heft/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/SassTypingsPlugin/SassTypingsPlugin.ts"},"SassTypingsPlugin"))))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the Sass Typings plugin for the Heft build system.\n *\n * This optional additional file customizes Sass parsing, module resolution, and emitting of\n * typings files for the Typescript compiler.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/sass.schema.json"\n\n  /**\n   * Source code root directory.\n   * This is where .css, .sass, and .scss files will be searched for to generate typings.\n   */\n  // "srcFolder": "src",\n\n  /**\n   * Output directory for generated Sass typings.\n   */\n  // "generatedTsFolder": "temp/sass-ts",\n\n  /**\n   * Determines if export values are wrapped in a default property, or not.\n   */\n  // "exportAsDefault": true,\n\n  /**\n   * Files with these extensions will pass through the Sass transpiler for typings generation.\n   */\n  // "fileExtensions": [\n  //   ".sass",\n  //   ".scss",\n  //   ".css\n  // ],\n\n  /**\n   * A list of paths used when resolving Sass imports.\n   */\n  // "importIncludePaths": [\n  //   "node_modules",\n  //   "src"\n  // ],\n\n  /**\n   * A list of file paths relative to the "src" folder that should be excluded from typings generation.\n   */\n  // "excludeFiles": []\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../heft_tasks/sass-typings"},"sass-typings")," task")))}f.isMDXComponent=!0}}]);