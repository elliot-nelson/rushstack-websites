"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[89],{158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var s=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||r;return n?s.createElement(m,o(o({ref:t},u),{},{components:n})):s.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var s=n(4834),a=n(8265),r=(n(6393),n(158)),o=["components"],i={title:'"jest" task'},l=void 0,p={unversionedId:"heft_tasks/jest",id:"heft_tasks/jest",isDocsHomePage:!1,title:'"jest" task',description:"This task invokes the Jest test framework for unit testing.",source:"@site/docs/heft_tasks/jest.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/jest",permalink:"/rushstack.io/pages/heft_tasks/jest",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_tasks/jest.md",tags:[],version:"current",frontMatter:{title:'"jest" task'},sidebar:"docsSidebar",previous:{title:'"eslint" task',permalink:"/rushstack.io/pages/heft_tasks/eslint"},next:{title:'"node-service" task (experimental)',permalink:"/rushstack.io/pages/heft_tasks/node-service"}},u=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2},{value:"The &quot;extends&quot; field",id:"the-extends-field",children:[],level:2},{value:"Differences from ts-jest",id:"differences-from-ts-jest",children:[],level:2},{value:"Debugging Jest tests",id:"debugging-jest-tests",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],c={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This task invokes the ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/en/"},"Jest")," test framework for unit testing."),(0,r.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,r.kt)("p",null,"We recommend Jest for several reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"All-in-one"),": Unlike frameworks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," that require many components to be hooked together, Jest provides a single integrated solution for your: test runner, assertion library, mock/spy API, instrumentation, code coverage, and reporting.  Jest also has first class support for React.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interactive"),': Jest supports a "watch mode" for automatically re-running tests whenever a file is saved, plus a ',(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"snapshot testing")," that can automatically update assertions when a contract changes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Isolated runtime"),": Jest runs web tests in a Node.js environment rather than launching a web browser, and leverages the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/vm.html"},"Node.js VM")," feature to prevent tests from leaking state."))),(0,r.kt)("p",null,"That said, if for some reason you need to run tests in some other runtime such as an Android client or real web browser, Jest may not be the best bet."),(0,r.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,r.kt)("p",null,"Heft has direct dependencies on the Jest packages that it needs, so you don't need to add Jest to your project's ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file.  Instead, you will need to install the Heft plugin package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush add --package @rushstack/heft-jest-plugin --dev\n")),(0,r.kt)("p",null,"Your project should get its typings from ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/heft-jest")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/jest"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package @types/heft-jest --exact --dev\n")),(0,r.kt)("p",null,"...and then reference ",(0,r.kt)("inlineCode",{parentName:"p"},"heft-jest")," in your ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")," file, like this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "./node_modules/@rushstack/heft-node-rig/profiles/default/tsconfig-base.json",\n  "compilerOptions": {\n    "types": [\n      "heft-jest", // <---- ADD THIS\n      "node"\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"config-files"},"Config files"),(0,r.kt)("p",null,"The Heft plugin that you installed above needs to be loaded using the ",(0,r.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json config file"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  . . .\n\n  "heftPlugins": [\n    { "plugin": "@rushstack/heft-jest-plugin" }  // <---- ADD THIS\n  ]\n}\n')),(0,r.kt)("p",null,"Heft looks for ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration"},"Jest's config file")," in the standard path ",(0,r.kt)("strong",{parentName:"p"},"config/jest.config.json"),".  Although Jest itself supports other config file names and even embedding settings in your ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file, Heft requires the name ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.json"),".  Using one standard filename makes it easy to search for these files, perform bulk edits, and copy configuration recipes between projects."),(0,r.kt)("p",null,"For a simple setup, your Jest configuration should extend Heft's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/master/heft-plugins/heft-jest-plugin/includes/jest-shared.config.json"},"jest-shared.config.json")," like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/config/jest.config.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "@rushstack/heft-jest-plugin/includes/jest-shared.config.json"\n}\n')),(0,r.kt)("p",null,"Alternatively, if you are using a rig package such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig"),", specify the rig like in this example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/config/jest.config.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "@rushstack/heft-web-rig/profiles/library/config/jest.config.json"\n}\n')),(0,r.kt)("p",null,"(If you maintain your own rig, it should extend from ",(0,r.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," to ensure that Jest uses\nHeft's transforms and resolver.)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:")," If you find yourself frequently adding lots of custom settings to ",(0,r.kt)("strong",{parentName:"em"},"jest.config.json"),", please create a GitHub issue and tell us about it.  Our aim is to provide a configuration that minimizes the need for project-specific customizations.")),(0,r.kt)("h2",{id:"the-extends-field"},'The "extends" field'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"extends"')," field in ",(0,r.kt)("strong",{parentName:"p"},"jest.config.json")," is a Heft-specific enhancement that will not work if the Jest command line\nis invoked without Heft.  It replaces Jest's ",(0,r.kt)("inlineCode",{parentName:"p"},'"preset"')," field which has limited module resolution capabilities and does not support rigs."),(0,r.kt)("p",null,"If for some reason your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.json")," needs to be directly readable by Jest, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"disableConfigurationModuleResolution")," plugin setting can be used to restore the old behavior."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  . . .\n\n  "heftPlugins": [\n    {\n      "plugin": "@rushstack/heft-jest-plugin",\n      "options": {\n        // (Not recommended) Disable Heft\'s support for rigs and the "extends" field\n        "disableConfigurationModuleResolution": true\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"differences-from-ts-jest"},"Differences from ts-jest"),(0,r.kt)("p",null,"Internally, Jest supports TypeScript compilation via plugins called ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/tutorial-react#custom-transformers"},"transforms"),", which are modeled as a synchronous function that receives a single ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," file as input, and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},".map")," file as its output. The official ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," transform actually does compile one file at a time, but that approach cannot support language features such as ",(0,r.kt)("inlineCode",{parentName:"p"},"const enum")," that require analyzing imported types.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," transform solves this problem by performing a full compiler analysis and reusing it each time the transform is invoked, but this won't support other build steps such as preprocessors.  Both ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," also impose a significant performance cost, by invoking the compiler a second time when running tests."),(0,r.kt)("p",null,"Heft takes a different approach of performing a conventional build and then invoking Jest on the output.  If your build targets a browser runtime, you'll need to use the ",(0,r.kt)("a",{parentName:"p",href:"../heft_tasks/webpack"},"emitFolderNameForTests")," setting to emit CommonJS outputs in a secondary folder. (Emitting extra files is still significantly faster than invoking the compiler twice.)  Heft's ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-build-transform.js")," does not compile anything itself, but rather returns the output of the full pipeline."),(0,r.kt)("p",null,"Some helpful examples of mocking and other Jest techniques can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-jest-tutorial"},"heft-node-jest-tutorial")," project folder."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important differences when using Jest with Heft:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Invoke Jest using the ",(0,r.kt)("inlineCode",{parentName:"p"},"heft")," command line.  Invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," command line directly will not invoke TypeScript and is incompatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"extends"')," field from ",(0,r.kt)("strong",{parentName:"p"},"jest.config.json"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not add ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," as a dependency for your project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'import { mocked } from "ts-jest/utils";'),", use the global ",(0,r.kt)("inlineCode",{parentName:"p"},"mocked()")," function that is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/heft-jest"),".  Besides this difference, the ",(0,r.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/user/test-helpers"},"API documentation")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," is still applicable to Heft's implementation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest"),' transform will magically "hoist" calls to ',(0,r.kt)("inlineCode",{parentName:"p"},"jest.mock();"),".  Heft does not consider this a best practice. Instead, use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-plugin#rushstackhoist-jest-mock"},"@rushstack/hoist-jest-mock")," lint rule to remind developers to manually hoist their calls.  It is enabled by default with ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config"),".")))),(0,r.kt)("h2",{id:"debugging-jest-tests"},"Debugging Jest tests"),(0,r.kt)("p",null,"To debug your Jest tests, it's recommended create a VS Code ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch.json file")," like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"<","project folder",">","/.vscode/launch.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug Jest tests",\n      "program": "${workspaceFolder}/node_modules/@rushstack/heft/lib/start.js",\n      "cwd": "${workspaceFolder}",\n      "args": ["--debug", "test", "--clean"],\n      "console": "integratedTerminal",\n      "sourceMaps": true\n    },\n  ]\n}\n')),(0,r.kt)("p",null,"This launches the full Heft toolchain in your debugger.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," switch prevents Jest from being spawned as a separate process.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"--clean"),' flag is optional, but fixes an issue where in rare situations Jest\'s "haste-map" may become corrupted by an aborted run.'),(0,r.kt)("p",null,"To restrict the debugger to run one specific test, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--test-name-pattern")," parameter. (See ",(0,r.kt)("a",{parentName:"p",href:"../heft/cli"},"here")," for command-line documentation.)  Another option is to use Jest's ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api#testonlyname-fn-timeout"},"test.only()")," API."),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-jest-tutorial"},"heft-node-jest-tutorial")," sample project"),(0,r.kt)("li",{parentName:"ul"},"Jest's ",(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/api"},"API reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration"},"jest.config.json")," documentation")))}f.isMDXComponent=!0}}]);