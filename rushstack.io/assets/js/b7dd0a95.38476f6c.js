"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[95014],{50158:function(e,t,s){s.d(t,{Zo:function(){return l},kt:function(){return d}});var n=s(46393);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(s),d=r,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return s?n.createElement(h,i(i({ref:t},l),{},{components:s})):n.createElement(h,i({ref:t},l))}));function d(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,i=new Array(a);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=s[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}f.displayName="MDXCreateElement"},46760:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=s(61731),r=s(70396),a=(s(46393),s(50158)),i=["components"],o={title:'"copy-static-assets" task'},p=void 0,c={unversionedId:"pages/heft_tasks/copy-static-assets",id:"pages/heft_tasks/copy-static-assets",title:'"copy-static-assets" task',description:"This task supplements the TypeScript transpiler by copying asset files into the output folder, so that they can be imported by .js files.",source:"@site/docs/pages/heft_tasks/copy-static-assets.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/copy-static-assets",permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/copy-static-assets",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tasks/copy-static-assets.md",tags:[],version:"current",frontMatter:{title:'"copy-static-assets" task'},sidebar:"docsSidebar",previous:{title:'"copy-files" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/copy-files"},next:{title:'"delete-globs" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/delete-globs"}},l=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],u={toc:l};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/heft_tasks/copy-static-assets/"})),(0,a.kt)("p",null,"This task supplements the TypeScript transpiler by copying asset files into the output folder, so that they can be imported by .js files."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"copy-static-assets")," task is used when source files need to reference asset files using ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"require()"),". For example, a React project may have a file that loads an ",(0,a.kt)("strong",{parentName:"p"},"src/styles.css")," asset like this:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import './styles.css';\n\n. . .\n")),(0,a.kt)("p",null,"In Heft's standard configuration, the TypeScript compiler reads ",(0,a.kt)("strong",{parentName:"p"},"src/","*","*","/.ts")," inputs and writes ",(0,a.kt)("strong",{parentName:"p"},"lib/","*","*","/.js")," outputs. When Webpack is invoked on ",(0,a.kt)("strong",{parentName:"p"},"lib/index.js"),", it will process the resulting ",(0,a.kt)("inlineCode",{parentName:"p"},'require("./styles.css");')," and expect to bundle the file path ",(0,a.kt)("strong",{parentName:"p"},"lib/styles.css")," (instead of ",(0,a.kt)("strong",{parentName:"p"},"src/styles.css")," as in the TypeScript code)."),(0,a.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,a.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,a.kt)("h2",{id:"config-files"},"Config files"),(0,a.kt)("p",null,"Continuing the above example, we can copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")," file using the ",(0,a.kt)("inlineCode",{parentName:"p"},'"staticAssetsToCopy"'),"setting in ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/heft_configs/typescript_json"},"typescript.json"),". For example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/config/typescript.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n\n  /**\n   * Configures additional file types that should be copied into the TypeScript compiler\'s emit folders, for example\n   * so that these files can be resolved by import statements.\n   */\n  "staticAssetsToCopy": {\n    /**\n     * File extensions that should be copied from the src folder to the destination folder(s).\n     */\n    // "fileExtensions": [\n    //   ".json", ".css"\n    // ],\n\n    "fileExtensions": [\n      ".css"\n    ],\n\n    /**\n     * Glob patterns that should be explicitly included.\n     */\n    // "includeGlobs": [\n    //   "some/path/*.js"\n    // ],\n\n    /**\n     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed\n     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".\n     */\n    // "excludeGlobs": [\n    //   "some/path/*.css"\n    // ]\n  }\n\n. . .\n')))}f.isMDXComponent=!0}}]);