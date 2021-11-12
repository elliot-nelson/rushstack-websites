"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[846],{158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8438:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(4834),r=n(8265),s=(n(6393),n(158)),i=["components"],o={title:"Adding more tasks"},p=void 0,l={unversionedId:"heft_tutorials/adding_tasks",id:"heft_tutorials/adding_tasks",isDocsHomePage:!1,title:"Adding more tasks",description:"This section continues the tutorial project from the Getting started with Heft article.",source:"@site/docs/heft_tutorials/adding_tasks.md",sourceDirName:"heft_tutorials",slug:"/heft_tutorials/adding_tasks",permalink:"/rushstack.io/pages/heft_tutorials/adding_tasks",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_tutorials/adding_tasks.md",tags:[],version:"current",frontMatter:{title:"Adding more tasks"},sidebar:"docsSidebar",previous:{title:"Getting started with Heft",permalink:"/rushstack.io/pages/heft_tutorials/getting_started"},next:{title:"Everyday Heft commands",permalink:"/rushstack.io/pages/heft_tutorials/everyday_commands"}},c=[{value:"Adding unit tests to your project",id:"adding-unit-tests-to-your-project",children:[],level:2},{value:"Enabling linting",id:"enabling-linting",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"This section continues the tutorial project from the ",(0,s.kt)("a",{parentName:"em",href:"../heft_tutorials/getting_started"},"Getting started with Heft")," article.")),(0,s.kt)("p",null,"Heft comes with a number of built-in tasks that become enabled automatically based on config files that you create.\nAll the tasks are documented in the ",(0,s.kt)("a",{parentName:"p",href:"../heft_tasks/api-extractor"},"Heft tasks")," section."),(0,s.kt)("p",null,"Continuing our tutorial, let's enable the two most common tasks: ",(0,s.kt)("a",{parentName:"p",href:"../heft_tasks/jest"},"Jest"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"../heft_tasks/eslint"},"ESlint"),"."),(0,s.kt)("h2",{id:"adding-unit-tests-to-your-project"},"Adding unit tests to your project"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"First, we need to install the TypeScript typings for Jest.  These steps continue the ",(0,s.kt)("strong",{parentName:"p"},"my-app")," project from the ",(0,s.kt)("a",{parentName:"p",href:"../heft_tutorials/getting_started"},"Getting started with Heft")," article.  Recall that this project is not using Rush yet, so we will invoke PNPM directly to add the dependency to our ",(0,s.kt)("strong",{parentName:"p"},"package.json")," file (instead of using ",(0,s.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/commands/rush_add/"},"rush add"),"):"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ cd my-app\n\n# Typings should always use "--save-exact" version specifiers.\n$ pnpm install --save-dev --save-exact @types/heft-jest\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Since ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api"},"Jest's API")," consists of global variables, we need to load them globally (whereas most other ",(0,s.kt)("inlineCode",{parentName:"p"},"@types")," packages are loaded via ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," statements in your source code).  Update your ",(0,s.kt)("strong",{parentName:"p"},"tsconfig.json")," file to say ",(0,s.kt)("inlineCode",{parentName:"p"},'"types": ["heft-jest", "node"]')," instead of just ",(0,s.kt)("inlineCode",{parentName:"p"},'"types": ["node"]'),".  The result should look like this:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/tsconfig.json")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "http://json.schemastore.org/tsconfig",\n\n  "compilerOptions": {\n    "outDir": "lib",\n    "rootDirs": ["src/"],\n\n    "forceConsistentCasingInFileNames": true,\n    "declaration": true,\n    "sourceMap": true,\n    "declarationMap": true,\n    "inlineSources": true,\n    "experimentalDecorators": true,\n    "strict": true,\n    "esModuleInterop": true,\n    "types": ["heft-jest", "node"],\n\n    "module": "commonjs",\n    "target": "es2017",\n    "lib": ["es2017"]\n  },\n  "include": ["src/**/*.ts"],\n  "exclude": ["node_modules", "lib"]\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Next, we need to add the ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration"},"jest.config.json")," config file.  The presence of this file causes Heft to invoke the Jest test runner.  Heft expects a specific file path ",(0,s.kt)("strong",{parentName:"p"},"config/jest.config.json"),".  For most cases, your Jest configuration should simply extend Heft's standard preset as shown below:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/config/jest.config.json")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "preset": "./node_modules/@rushstack/heft/includes/jest-shared.config.json"\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Now we need to add a unit test.  Jest supports quite a lot of features, but for this tutorial we'll create a trivial test file.  The ",(0,s.kt)("inlineCode",{parentName:"p"},".test.ts")," file extension causes Heft to look for unit tests in this file:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/src/example.test.ts")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"describe('Example Test', () => {\n  it('correctly runs a test', () => {\n    expect(true).toBeTruthy();\n  });\n});\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To run the test, we need to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"heft test")," action, because ",(0,s.kt)("inlineCode",{parentName:"p"},"heft build")," normally skips testing to speed up development."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# For Windows, use backslashes for all these commands\n\n# View the command line help\n$ heft test --help\n\n# Build the project and run tests\n$ heft test\n")),(0,s.kt)("p",{parentName:"li"},"We should update our ",(0,s.kt)("strong",{parentName:"p"},"package.json")," script to invoke ",(0,s.kt)("inlineCode",{parentName:"p"},"heft test")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"heft build")," as well.  That way ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm run build")," will also run the Jest tests:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/package.json")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'{\n  . . .\n  "scripts": {\n    "build": "heft test --clean",\n    "start": "node lib/start.js"\n  },\n  . . .\n}\n')))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Do not invoke the ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," command line directly, since it only runs tests and will not perform Heft's other build steps.")),(0,s.kt)("p",null,"That's it for setting up Jest!  Further information, including instructions for debugging tests, can be found in the ",(0,s.kt)("a",{parentName:"p",href:"../heft_tasks/jest"},'"jest" task')," reference and the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-jest-tutorial"},"heft-node-jest-tutorial")," sample project."),(0,s.kt)("h2",{id:"enabling-linting"},"Enabling linting"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To ensure best practices and catch common mistakes, let's also enable the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config")," standard ruleset.  First we need to add a few more NPM dependencies to our ",(0,s.kt)("strong",{parentName:"p"},"package.json")," file."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd my-app\n\n# Add the ESLint engine.\n$ pnpm install --save-dev eslint\n\n# Add Rush Stack's all-in-one ruleset\n$ pnpm install --save-dev @rushstack/eslint-config\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Next, create the ",(0,s.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring"},".eslintrc.js")," config file.  The presence of this file causes Heft to invoke the ESLint task.:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/.eslintrc.js")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// This is a workaround for https://github.com/eslint/eslint/issues/3458\nrequire("@rushstack/eslint-config/patch/modern-module-resolution");\n\nmodule.exports = {\n  extends: ["@rushstack/eslint-config/profile/node"],\n  parserOptions: { tsconfigRootDir: __dirname },\n};\n')),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Note: If your project uses the ",(0,s.kt)("a",{parentName:"em",href:"https://reactjs.org/"},"React")," framework, you should also extend from the ",(0,s.kt)("inlineCode",{parentName:"em"},'"@rushstack/eslint-config/mixins/react"')," mixin.  See ",(0,s.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"the documentation")," for details about ",(0,s.kt)("inlineCode",{parentName:"em"},"@rushstack/eslint-config"),' "profiles" and "mixins".'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To test it out, try updating your ",(0,s.kt)("strong",{parentName:"p"},"start.ts")," source file to introduce a lint issue:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/src/start.ts")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'console.log("Hello, world!");\n\nexport function f() {   // <--- oops\n}\n')),(0,s.kt)("p",{parentName:"li"},"When you run ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm run build"),", you should see a log message like this:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},". . .\n---- Compile started ----\n[copy-static-assets] Copied 0 static assets in 0ms\n[typescript] Using TypeScript version 3.9.7\n[eslint] Using ESLint version 7.5.0\n[eslint] Encountered 1 ESLint error:\n[eslint]   ERROR: src\\start.ts:3:8 - (@typescript-eslint/explicit-function-return-type) Missing return type on function.\n. . .\n")),(0,s.kt)("p",{parentName:"li"},"To fix the problem, fix the code to add the missing return type, and it should now build successfully:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-app/src/start.ts")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'console.log("Hello, world!");\n\nexport function f(): void {   // <--- okay\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-config")," ruleset is designed to work together with the Prettier code formatter.\nTo set that up, see the ",(0,s.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/enabling_prettier/"},"Enabling Prettier")," article\non the Rush website."))),(0,s.kt)("p",null,"That's it for ESLint!  More detail can be found in the ",(0,s.kt)("a",{parentName:"p",href:"../heft_tasks/eslint"},"eslint task")," reference."))}m.isMDXComponent=!0}}]);