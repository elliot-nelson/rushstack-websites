"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[8462],{158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(4834),a=n(8265),o=(n(6393),n(158)),i=["components"],s={title:'"node-service" task (experimental)'},c=void 0,l={unversionedId:"heft_tasks/node-service",id:"heft_tasks/node-service",isDocsHomePage:!1,title:'"node-service" task (experimental)',description:"This task supports development of Node.js services using Heft.  It enables heft start to launch your service on a localhost port.  The service will automatically restart whenever you save a change to your source code.",source:"@site/docs/heft_tasks/node-service.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/node-service",permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/node-service",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_tasks/node-service.md",tags:[],version:"current",frontMatter:{title:'"node-service" task (experimental)'},sidebar:"docsSidebar",previous:{title:'"jest" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/jest"},next:{title:'"sass-typings" task',permalink:"/rushstack-websites/rushstack.io/pages/heft_tasks/sass-typings"}},p=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Starting the service",id:"starting-the-service",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This task supports development of Node.js services using Heft.  It enables ",(0,o.kt)("inlineCode",{parentName:"p"},"heft start")," to launch your service on a ",(0,o.kt)("strong",{parentName:"p"},"localhost")," port.  The service will automatically restart whenever you save a change to your source code."),(0,o.kt)("p",null,"This functionality is similar to standalone launchers such as ",(0,o.kt)("a",{parentName:"p",href:"https://nodemon.io/"},"nodemon")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-dev"},"node-dev"),".  They can also be used with Heft, however the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-service")," task has the benefit of being ",(0,o.kt)("a",{parentName:"p",href:"../heft/rig_packages"},"riggable")," and better integrated with Heft's workflow."),(0,o.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,o.kt)("p",null,"Use this plugin if your project is a Node.js service.  It has been tested with the following popular frameworks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://expressjs.com/"},"Express"),' - the classic "unopinionated" Node.js framework with minimal structure and a very large ecosystem of community plugins'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.fastify.io/"},"Fastify")," - similar in character to Express, but with improved validation and a larger set of core components"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hapi.dev/"},"HapiJS"),' - a good "batteries included" framework built on a comprehensive foundation of officially maintained components'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"NestJS")," - a popular framework offering paid enterprise support and a heavyweight system of abstractions using ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata"},"emitDecoratorMetadata"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Security Note:"),'  Unlike a web browser application, a Node.js service typically runs in a trusted data center\nwith access to production databases and internal company services.  And unlike a developer tool, a Node.js service\nwill accept inputs from potentially malicious clients on the public internet.  It\'s a good idea to carefully review\neach library that your service will load.  Who maintains the NPM package?  Is it being actively developed?  Does\nthe code follow engineering best practices?  These questions may be more important than "How many times was\nit downloaded?"')),(0,o.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,o.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"node-service")," plugin is enabled by adding a\n",(0,o.kt)("a",{parentName:"p",href:"../heft_configs/node-service_json"},"node-service.json")," config file\nto your project or rig.  The defaults work for most cases, so the file may be mostly empty.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a script to your ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file containing the command to launch the service.  The default name\nfor this command is ",(0,o.kt)("inlineCode",{parentName:"p"},'"serve"'),".  For example:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"<","project folder",">","/package.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "start": "heft start --clean",\n    "serve": "node ./lib/start.js"\n  },\n')))),(0,o.kt)("p",null,"If your framework uses a wrapper such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-cli"},"fastify-cli"),", then\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},'"serve"')," command might be ",(0,o.kt)("inlineCode",{parentName:"p"},'"fastify start ./lib/start.js"')," instead."),(0,o.kt)("h2",{id:"starting-the-service"},"Starting the service"),(0,o.kt)("p",null,"To start the localhost dev server, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"heft start")," command.  Whenever you save a change to a source file, Heft's watch mode will recompile your project, then automatically stop the service process and restart it."),(0,o.kt)("p",null,"When debugging, you may prefer to use the VS Code debugger to launch your service:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"<","project folder",">","/.vscode/launch.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug the service",\n      "program": "${workspaceFolder}/lib/start.js",\n      "args": [],\n      "console": "integratedTerminal"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The process created by VS Code would conflict with the process that is launched by ",(0,o.kt)("inlineCode",{parentName:"p"},"heft start"),".  To use watch mode in this situation, invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"heft build --watch")," instead.  It will recompile your project whenever the code is changed, but without launching the service."))}d.isMDXComponent=!0}}]);