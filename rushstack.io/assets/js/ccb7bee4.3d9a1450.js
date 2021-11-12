"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[993],{158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(6393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(4834),o=n(8265),r=(n(6393),n(158)),s=["components"],a={title:'"copy-files" task'},l=void 0,c={unversionedId:"heft_tasks/copy-files",id:"heft_tasks/copy-files",isDocsHomePage:!1,title:'"copy-files" task',description:'This task implements the "actionKind": "copyFiles" action kind that is used when specifying',source:"@site/docs/heft_tasks/copy-files.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/copy-files",permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/copy-files",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_tasks/copy-files.md",tags:[],version:"current",frontMatter:{title:'"copy-files" task'},sidebar:"docsSidebar",previous:{title:'"api-extractor" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/api-extractor"},next:{title:'"copy-static-assets" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/copy-static-assets"}},p=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This task implements the ",(0,r.kt)("inlineCode",{parentName:"p"},'"actionKind": "copyFiles"')," action kind that is used when specifying\n",(0,r.kt)("inlineCode",{parentName:"p"},'"eventActions"')," in the ",(0,r.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json")," config file."),(0,r.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,r.kt)("p",null,"This task is most commonly used to copy asset files such as fonts or images into the build output folder."),(0,r.kt)("p",null,"Some general notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid using this task to read/write files outside the project folder.  Doing so would violate Rush's\n",(0,r.kt)("a",{parentName:"li",href:"../heft_tutorials/heft_and_rush"},"principle of project isolation"),"."),(0,r.kt)("li",{parentName:"ul"},"Where possible, avoid using inefficient glob operators such as ",(0,r.kt)("inlineCode",{parentName:"li"},"**")," that recursively traverse a directory tree.\nThese disk-intensive operations will slow down the build."),(0,r.kt)("li",{parentName:"ul"},"Overly broad wildcards can sometimes include stray folders that are not tracked by Git.")),(0,r.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,r.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,r.kt)("h2",{id:"config-files"},"Config files"),(0,r.kt)("p",null,"Event actions are registered in the ",(0,r.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json")," config file.  For example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n\n  "eventActions": [\n    {\n      /**\n       * (Required) The kind of built-in operation that should be performed.\n       * The "copyFiles" action copies files that match the specified patterns.\n       */\n      "actionKind": "copyFiles",\n\n      /**\n       * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n       * are scheduled after any plugin tasks have processed the event.  For example, a "compile" event action\n       * will be performed after the TypeScript compiler has been invoked.\n       *\n       * Options: "pre-compile", "compile", "bundle", "post-build"\n       */\n      "heftEvent": "pre-compile",\n\n      /**\n       * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n       * were added by other configs.\n       */\n      "actionId": "my-example-action",\n\n      /**\n       * (Required) An array of copy operations to run perform during the specified Heft event.\n       */\n      "copyOperations": [\n        {\n          /**\n           * (Required) The base folder that files will be copied from, relative to the project root.\n           * Settings such as "includeGlobs" and "excludeGlobs" will be resolved relative\n           * to this folder.\n           * NOTE: Assigning "sourceFolder" does not by itself select any files to be copied.\n           */\n          "sourceFolder": "src",\n\n          /**\n           * (Required) One or more folders that files will be copied into, relative to the project root.\n           * If you specify more than one destination folder, Heft will read the input files only once, using\n           * streams to efficiently write multiple outputs.\n           */\n          "destinationFolders": ["dist"],\n\n          /**\n           * If specified, this option recursively scans all folders under "sourceFolder" and includes any files\n           * that match the specified extensions.  (If "fileExtensions" and "includeGlobs" are both\n           * specified, their selections are added together.)\n           */\n          // "fileExtensions": [".jpg", ".png"],\n\n          /**\n           * A list of glob patterns that select files to be copied.  The paths are resolved relative\n           * to "sourceFolder".\n           * Documentation for supported glob syntaxes: https:www.npmjs.com/package/fast-glob\n           */\n          "includeGlobs": ["assets/*.md"],\n\n          /**\n           * A list of glob patterns that exclude files/folders from being copied.  The paths are resolved relative\n           * to "sourceFolder".  These exclusions eliminate items that were selected by the "includeGlobs"\n           * or "fileExtensions" setting.\n           */\n          // "excludeGlobs": [],\n\n          /**\n           * Normally, when files are selected under a child folder, a corresponding folder will be created in\n           * the destination folder.  Specify flatten=true to discard the source path and copy all matching files\n           * to the same folder.  If two files have the same name an error will be reported.\n           * The default value is false.\n           */\n          // "flatten": false,\n\n          /**\n           * If true, filesystem hard links will be created instead of copying the file.  Depending on the\n           * operating system, this may be faster. (But note that it may cause unexpected behavior if a tool\n           * modifies the link.)  The default value is false.\n           */\n          // "hardlink": false\n        }\n      ]\n    }\n  ],\n\n  . . .\n}\n')))}d.isMDXComponent=!0}}]);