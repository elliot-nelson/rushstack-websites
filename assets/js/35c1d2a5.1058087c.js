"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[9153],{158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(4834),i=n(8265),a=(n(6393),n(158)),s=["components"],o={title:'"tslint" task'},c=void 0,l={unversionedId:"heft_tasks/tslint",id:"heft_tasks/tslint",isDocsHomePage:!1,title:'"tslint" task',description:"This task invokes the TSLint tool for linting TypeScript code.",source:"@site/docs/heft_tasks/tslint.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/tslint",permalink:"/rushstack.io/pages/heft_tasks/tslint",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_tasks/tslint.md",tags:[],version:"current",frontMatter:{title:'"tslint" task'},sidebar:"docsSidebar",previous:{title:'"sass-typings" task',permalink:"/rushstack.io/pages/heft_tasks/sass-typings"},next:{title:'"typescript" task',permalink:"/rushstack.io/pages/heft_tasks/typescript"}},p=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This task invokes the ",(0,a.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/"},"TSLint")," tool for linting TypeScript code."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TSLint is deprecated and should only be used for legacy projects."),"  In 2019, the groups that maintain the TypeScript compiler, ESLint, and TSLint got together and agreed ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"},"to deprecate TSLint"),".  Instead, a TypeScript parser has been integrated into ESLint, which provides a single unified solution for linting JavaScript and TypeScript source files."),(0,a.kt)("p",null,"New projects should use the ",(0,a.kt)("a",{parentName:"p",href:"../heft_tasks/eslint"},"eslint")," task instead."),(0,a.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,a.kt)("p",null,"You will need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"tslint")," package to your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package tslint --dev\n")),(0,a.kt)("p",null,'Alternatively, you can avoid this dependency by loading it from a "rig package", as described in the ',(0,a.kt)("a",{parentName:"p",href:"../heft/rig_packages"},"Using rig packages")," article."),(0,a.kt)("h2",{id:"config-files"},"Config files"),(0,a.kt)("p",null,"There isn't a Heft-specific file for this task.  Heft looks for TSLint's config file ",(0,a.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/usage/configuration/"},"tslint.json"),"."))}f.isMDXComponent=!0}}]);