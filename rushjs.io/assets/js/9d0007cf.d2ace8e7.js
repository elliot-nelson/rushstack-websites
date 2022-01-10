"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9806],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2575:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>d});var n=r(1731),o=r(396),a=(r(6393),r(158)),s=["components"],l={title:"Other helpful commands"},i=void 0,p={unversionedId:"developer/other_commands",id:"developer/other_commands",title:"Other helpful commands",description:"Installing the latest SemVer-compatible version of everything",source:"@site/docs/developer/other_commands.md",sourceDirName:"developer",slug:"/developer/other_commands",permalink:"/rushstack-websites/rushjs.io/pages/developer/other_commands",editUrl:"https://github.com/microsoft/rushstack-websites/docs/developer/other_commands.md",tags:[],version:"current",frontMatter:{title:"Other helpful commands"},sidebar:"docsSidebar",previous:{title:"Modifying package.json",permalink:"/rushstack-websites/rushjs.io/pages/developer/modifying_package_json"},next:{title:"Configuring tab completion",permalink:"/rushstack-websites/rushjs.io/pages/developer/tab_completion"}},c=[{value:"Installing the latest SemVer-compatible version of everything",id:"installing-the-latest-semver-compatible-version-of-everything",children:[],level:2},{value:"Faster ways to build",id:"faster-ways-to-build",children:[],level:2},{value:"A faster way to install",id:"a-faster-way-to-install",children:[],level:2},{value:"Getting back to a clean state",id:"getting-back-to-a-clean-state",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/developer/other_commands/"})),(0,a.kt)("h2",{id:"installing-the-latest-semver-compatible-version-of-everything"},"Installing the latest SemVer-compatible version of everything"),(0,a.kt)("p",null,"Normally ",(0,a.kt)("inlineCode",{parentName:"p"},"rush update")," only makes the minimal incremental changes necessary to satisfy the the project ",(0,a.kt)("strong",{parentName:"p"},"package.json")," files. If you want to update everything to the latest version, you would do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# This effectively deletes the old shrinkwrap file and re-solves everything\n# using the latest compatible versions as specified in package.json files.\n# Note that the package.json files themselves are not modified.\n$ rush update --full\n")),(0,a.kt)("p",null,"For everyday work, ",(0,a.kt)("inlineCode",{parentName:"p"},"--full")," can introduce unrelated breaks in your PR branch, for example if one of the dependencies didn't perfectly follow the SemVer rules. This isn't too much of a concern for small repos. For a large monorepo, we recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"rush update")," for everyday work, and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"rush update --full")," periodically as a separate workflow by a CI job or designated person."),(0,a.kt)("h2",{id:"faster-ways-to-build"},"Faster ways to build"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"If you're only working on a few projects"),": Let's say your Git repo contains 50 projects, but you really only work on the ",(0,a.kt)("strong",{parentName:"p"},"widget")," and ",(0,a.kt)("strong",{parentName:"p"},"widget-demo")," projects. You can ask Rush to build only those two projects, plus the libraries that they depend on: ",(0,a.kt)("inlineCode",{parentName:"p"},"rush rebuild --to widget --to widget-demo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"If you changed a library"),": Let's say your Git repo contains 50 projects, and you just fixed some bugs in the ",(0,a.kt)("strong",{parentName:"p"},"widget")," library. You need to run unit tests for all the projects that use this library, and anything that depends on them, but it would be wasteful to rebuild everything else. To rebuild just the downstream projects: ",(0,a.kt)("inlineCode",{parentName:"p"},"rush rebuild --from widget")))),(0,a.kt)("p",null,"The full set of project selection parameters are described in the article ",(0,a.kt)("a",{parentName:"p",href:"../../developer/selecting_subsets"},"Selecting subsets of projects"),"."),(0,a.kt)("h2",{id:"a-faster-way-to-install"},"A faster way to install"),(0,a.kt)("p",null,"If your repo is using PNPM with the new ",(0,a.kt)("inlineCode",{parentName:"p"},"useWorkspaces=true")," mode enabled in your ",(0,a.kt)("a",{parentName:"p",href:"../../configs/rush_json"},"rush.json"),' file, you can use a feature called "filtered installs". This feature reduces installation times by only installing the subset of NPM packages required to build a specific project.'),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Only install the NPM packages needed to build "my-project" and the other\n# Rush projects that it depends on:\n$ rush install --to my-project\n\n# Like with "rush build", you can use "." to refer to the project from your\n# shell\'s current working directory:\n$ cd my-project\n$ rush install --to .\n\n# Here\'s how to install dependencies required to do "rush build --from my-project"\n$ rush install --from my-project\n')),(0,a.kt)("h2",{id:"getting-back-to-a-clean-state"},"Getting back to a clean state"),(0,a.kt)("p",null,"After working with Rush, maybe you want to get back to a clean state, e.g. so you can zip up a folder. Here's a couple commands to do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Remove all the symlinks created by Rush:\n$ rush unlink\n\n# Remove all the temporary files created by Rush, including deleting all\n# the NPM packages that were installed in your common folder:\n$ rush purge\n")))}d.isMDXComponent=!0}}]);