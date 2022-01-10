"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9301],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6347:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>c});var r=n(1731),a=n(396),o=(n(6393),n(158)),i=["components"],s={title:"Setting up a new repo"},p=void 0,l={unversionedId:"maintainer/setup_new_repo",id:"maintainer/setup_new_repo",title:"Setting up a new repo",description:"This tutorial walks through the process of consolidating several projects into a new Rush monorepo. (If you'd like to see a fully worked out sample based on these steps, take a look at the rush-example repo on GitHub.)",source:"@site/docs/maintainer/setup_new_repo.md",sourceDirName:"maintainer",slug:"/maintainer/setup_new_repo",permalink:"/rushstack-websites/rushjs.io/pages/maintainer/setup_new_repo",editUrl:"https://github.com/microsoft/rushstack-websites/docs/maintainer/setup_new_repo.md",tags:[],version:"current",frontMatter:{title:"Setting up a new repo"},sidebar:"docsSidebar",previous:{title:"Selecting subsets of projects",permalink:"/rushstack-websites/rushjs.io/pages/developer/selecting_subsets"},next:{title:"Adding projects to a repo",permalink:"/rushstack-websites/rushjs.io/pages/maintainer/add_to_repo"}},u=[{value:"Step 1: Check your Rush version",id:"step-1-check-your-rush-version",children:[],level:2},{value:"Step 2: Use &quot;rush init&quot; to initialize your repo",id:"step-2-use-rush-init-to-initialize-your-repo",children:[],level:2},{value:"Step 3: Customize your configuration",id:"step-3-customize-your-configuration",children:[],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/maintainer/setup_new_repo/"})),(0,o.kt)("p",null,"This tutorial walks through the process of consolidating several projects into a new Rush monorepo. (If you'd like to see a fully worked out sample based on these steps, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rush-example"},"rush-example")," repo on GitHub.)"),(0,o.kt)("p",null,"For this example, suppose we have 3 project folders, like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"my-app"),": a web application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"my-controls"),": a control library used by the application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"my-toolchain"),": a NodeJS build tool used to compile the other projects")),(0,o.kt)("p",null,"Initially each of these projects is in its own folder. They are built using a cumbersome procedure like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~$ cd my-toolchain\n~/my-toolchain$ npm run build\n~/my-toolchain$ npm link\n~/my-toolchain$ cd ../my-controls\n~/my-controls$ npm link my-toolchain\n~/my-controls$ npm run build\n~/my-controls$ npm link\n~/my-app$ cd ../my-app\n~/my-app$ npm link my-toolchain\n~/my-app$ npm link my-controls\n~/my-app$ npm run build\n")),(0,o.kt)("p",null,"Let's Rushify these projects!"),(0,o.kt)("h2",{id:"step-1-check-your-rush-version"},"Step 1: Check your Rush version"),(0,o.kt)("p",null,"Before we get started, make sure you have the latest Rush release installed globally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~$ npm install -g @microsoft/rush\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: If this command fails because your user account does not have permissions to access NPM's global folder, you may need to ",(0,o.kt)("a",{parentName:"em",href:"https://docs.npmjs.com/getting-started/fixing-npm-permissions"},"fix your NPM configuration"),".")),(0,o.kt)("h2",{id:"step-2-use-rush-init-to-initialize-your-repo"},'Step 2: Use "rush init" to initialize your repo'),(0,o.kt)("p",null,"Let's assume you already created an empty GitHub repo that we will copy these projects into. Clone your repo somewhere and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush init")," to generate Rush's config files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~$ git clone https://github.com/my-team/my-repo\n~$ cd my-repo\n~/my-repo$ rush init\n")),(0,o.kt)("p",null,"It will generate these files (see ",(0,o.kt)("a",{parentName:"p",href:"../../advanced/config_files"},"Config file reference")," for more info):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"File"),(0,o.kt)("th",{parentName:"tr",align:"left"},"What it does"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"rush.json")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The main configuration file for Rush")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},".gitattributes")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"(Delete this file if you're not using Git.)")," ",(0,o.kt)("br",null),"Tells Git not to perform merging operations for shrinkwrap files, because it is unsafe.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},".gitignore")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"(Delete this file if you're not using Git.)")," ",(0,o.kt)("br",null),"Tells Git not to track temporary files created by Rush.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},".travis.yml")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"(Delete this file if you're not using Travis.)")," ",(0,o.kt)("br",null),"Configures the ",(0,o.kt)("a",{parentName:"td",href:"https://travis-ci.com/"},"Travis CI")," service to perform PR builds using Rush.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"common/config/rush/.npmrc")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Rush uses this file to configure the package registry, regardless of whether the package manager is PNPM, NPM, or Yarn.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"common/config/rush/command-line.json")),(0,o.kt)("td",{parentName:"tr",align:"left"},"You can use this to define custom commands/parameters that will become part of the Rush command-line.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"common/config/rush/common-versions.json")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Used to specify NPM dependency version selections that affect all projects in a Rush repo.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"common/config/rush/pnpmfile.js")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"(Delete this file if you've chosen to use NPM or Yarn instead of PNPM.)")," ",(0,o.kt)("br",null),"Used to workaround problems with dependencies that have mistakes in their package.json file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"common/config/rush/version-policies.json")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Used to define advanced publishing configurations.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: If any of these files already exists in your branch, ",(0,o.kt)("inlineCode",{parentName:"strong"},"rush init")," will issue a warning and will NOT overwrite the existing files.")),(0,o.kt)("p",null,"Next, add the generated files to Git and commit them to your branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'~/my-repo$ git add .\n~/my-repo$ git commit -m "Initialize Rush repo"\n')),(0,o.kt)("h2",{id:"step-3-customize-your-configuration"},"Step 3: Customize your configuration"),(0,o.kt)("p",null,"The template files have lots of documentation and commented example snippets. We suggest you look over them to familiarize yourself with the basic options and features."),(0,o.kt)("p",null,"You can change your options at any time, but there are a few settings in ",(0,o.kt)("strong",{parentName:"p"},"rush.json")," that you should think about in advance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Choose a package manager"),": The template defaults to using PNPM, but you can also use NPM or Yarn. See ",(0,o.kt)("a",{parentName:"p",href:"../../maintainer/package_managers"},"NPM vs PNPM vs Yarn")," for guidance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Check your Rush version"),": Make sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"rushVersion")," setting is the latest version, which is shown in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/rush"},"NPM registry"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Check other version fields"),": Also check that you're using recent stable releases for any other applicable fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"npmVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yarnVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSupportedVersionRange"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'Decide whether to use the "category folders" model'),": See the comments in ",(0,o.kt)("strong",{parentName:"p"},"rush.json")," regarding ",(0,o.kt)("inlineCode",{parentName:"p"},"projectFolderMinDepth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"projectFolderMaxDepth"),", and make a plan for how project folders will be organized in the monorepo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure your registry access"),": The initial ",(0,o.kt)("strong",{parentName:"p"},".npmrc")," file is configured to use the public NPM registry. If you will be using a ",(0,o.kt)("a",{parentName:"p",href:"../../maintainer/npm_registry_auth"},"private registry"),", you should update the ",(0,o.kt)("strong",{parentName:"p"},"common/config/rush/.npmrc")," file."))))}c.isMDXComponent=!0}}]);