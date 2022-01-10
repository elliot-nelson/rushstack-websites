"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[20818],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(46393);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=s,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(61731),s=n(70396),o=(n(46393),n(50158)),a=["components"],i={title:'"delete-globs" task'},l=void 0,c={unversionedId:"pages/heft_tasks/delete-globs",id:"pages/heft_tasks/delete-globs",title:'"delete-globs" task',description:'This task implements the "actionKind": "deleteGlobs" action kind that is used when specifying',source:"@site/docs/pages/heft_tasks/delete-globs.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/delete-globs",permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/delete-globs",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tasks/delete-globs.md",tags:[],version:"current",frontMatter:{title:'"delete-globs" task'},sidebar:"docsSidebar",previous:{title:'"copy-static-assets" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/copy-static-assets"},next:{title:'"eslint" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/eslint"}},p=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/heft_tasks/delete-globs/"})),(0,o.kt)("p",null,"This task implements the ",(0,o.kt)("inlineCode",{parentName:"p"},'"actionKind": "deleteGlobs"')," action kind that is used when specifying\n",(0,o.kt)("inlineCode",{parentName:"p"},'"eventActions"')," in the ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/heft_configs/heft_json"},"heft.json")," config file."),(0,o.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,o.kt)("p",null,"The most common usage is to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"heft clean")," action that deletes build output folders\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"temp"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,o.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,o.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,o.kt)("h2",{id:"config-files"},"Config files"),(0,o.kt)("p",null,"Event actions are registered in the ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/heft_configs/heft_json"},"heft.json")," config file. For example:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n\n  "eventActions": [\n    {\n      /**\n       * (Required) The kind of built-in operation that should be performed.\n       * The "deleteGlobs" action deletes files or folders that match the specified glob patterns.\n       */\n      "actionKind": "deleteGlobs",\n\n      /**\n       * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n       * are scheduled after any plugin tasks have processed the event.  For example, a "compile" event action\n       * will be performed after the TypeScript compiler has been invoked.\n       *\n       * Options: "clean", "pre-compile", "compile", "bundle", "post-build"\n       */\n      "heftEvent": "clean",\n\n      /**\n       * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n       * were added by other configs.\n       */\n      "actionId": "my-example-action",\n\n      /**\n       * (Required) Glob patterns to be deleted. The paths are resolved relative to the project folder.\n       * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n       */\n      "globsToDelete": [\n        "dist",\n        "lib",\n        "lib-esnext",\n        "temp"\n      ]\n    }\n  ],\n\n  . . .\n}\n')))}d.isMDXComponent=!0}}]);