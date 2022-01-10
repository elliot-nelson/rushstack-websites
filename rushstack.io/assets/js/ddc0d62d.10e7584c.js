"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[56599],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,k=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69268:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),i=["components"],s={title:"Getting started"},l=void 0,u={unversionedId:"pages/contributing/get_started",id:"pages/contributing/get_started",title:"Getting started",description:"The Rush Stack projects are all developed in the rushstack monorepo on GitHub:",source:"@site/docs/pages/contributing/get_started.md",sourceDirName:"pages/contributing",slug:"/pages/contributing/get_started",permalink:"/rushstack-websites/rushstack.io/pages/contributing/get_started",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/contributing/get_started.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"docsSidebar",previous:{title:"Other config files",permalink:"/rushstack-websites/rushstack.io/pages/heft_configs/other_files"},next:{title:"Getting support",permalink:"/rushstack-websites/rushstack.io/pages/help/support"}},p=[{value:"Setting up your machine",id:"setting-up-your-machine",children:[],level:2},{value:"Building the projects",id:"building-the-projects",children:[],level:2},{value:"Submitting a Pull Request",id:"submitting-a-pull-request",children:[],level:2}],c={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/contributing/get_started/"})),(0,o.kt)("p",null,"The Rush Stack projects are all developed in the ",(0,o.kt)("strong",{parentName:"p"},"rushstack")," monorepo on GitHub:"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack"},"https://github.com/microsoft/rushstack")),(0,o.kt)("p",null,"For documentation fixes, each website has its own GitHub repo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rush Stack website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack.io-website"},"https://github.com/microsoft/rushstack.io-website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rushstack-websites/rushjs.io/"},"Rush")," website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushjs.io-website"},"https://github.com/microsoft/rushjs.io-website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/api-extractor.com-website"},"https://github.com/microsoft/api-extractor.com-website"))),(0,o.kt)("h2",{id:"setting-up-your-machine"},"Setting up your machine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node.js 12"),": We recommend to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm")," (for Mac/Linux) or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows")," (for Windows) so that you can easily switch between different Node.js engine verisons. When installing Node.js, make sure to first uninstall any previous versions and clean up their files. See ",(0,o.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/help/faq/#after-installing-rush-why-am-i-still-seeing-the-old-version"},"FAQ: After installing Rush, why am I stilling see the old version?")," for more about this.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Visual Studio Code")," (recommended): You can use any editor, but we suggest ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VS Code"),". It's great!"))),(0,o.kt)("h2",{id:"building-the-projects"},"Building the projects"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"http://rushjs.io"},"Rush")," tool for building projects in the ",(0,o.kt)("strong",{parentName:"p"},"rushstack")," monorepo."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure you have the latest release of Rush:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\>npm install -g @microsoft/rush\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Clone the repo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Repos>git clone https://github.com/microsoft/rushstack\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use rush to install the package dependencies:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Repos>cd rushstack\nC:\\Repos\\rushstack>rush install\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Rebuild all the projects in the repo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Repos\\rushstack>rush rebuild\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"If you want to build just one project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Repos\\rushstack>cd libraries\\rush-core-library\nC:\\Repos\\rushstack\\libraries\\rush-core-library>rushx build\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important"),": You generally should ",(0,o.kt)("strong",{parentName:"p"},"not")," use commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in a Rush repo. See the\n",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushjs.io/pages/developer/new_developer/"},"Rush documentation")," for more information about this tool."),(0,o.kt)("h2",{id:"submitting-a-pull-request"},"Submitting a Pull Request"),(0,o.kt)("p",null,"We welcome contributions! To submit a feature for one of the ",(0,o.kt)("strong",{parentName:"p"},"rushstack")," projects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork the repo."),(0,o.kt)("li",{parentName:"ol"},"Create a Git branch and commit your changes."),(0,o.kt)("li",{parentName:"ol"},"If you modified any package.json files, run ",(0,o.kt)("inlineCode",{parentName:"li"},"rush update")," to make sure your ",(0,o.kt)("strong",{parentName:"li"},"package-lock.json")," file is up to date.\nCommit any changes made to that file."),(0,o.kt)("li",{parentName:"ol"},"Before creating your PR, run ",(0,o.kt)("inlineCode",{parentName:"li"},"rush change"),"; if prompted, ",(0,o.kt)("a",{parentName:"li",href:"/rushstack-websites/rushjs.io/pages/best_practices/change_logs/"},"enter a change log message"),", and commit the files that get created."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/articles/creating-a-pull-request/"},"pull request")),(0,o.kt)("li",{parentName:"ol"},'If your PR primarily affects a single project, add the project name as a prefix to your PR title. For example: "',(0,o.kt)("strong",{parentName:"li"},"[api-extractor]"," Added a new API feature"),'" or "',(0,o.kt)("strong",{parentName:"li"},"[node-core-libary]"," Fixed a bug in the library"),'".')),(0,o.kt)("p",null,"Someone should review your PR within a few days. Be aware that the Rush Stack maintainers manage large\ncorporate monorepos, which can be very distracting work. If nobody's responding to PR comments, try asking in the\n",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.zulipchat.com/#narrow/stream/279883-contributor-helpline"},"#contributor-helpline"),"\nchat room. We greatly appreciate community contributions and do want to get your PR reviewed!"))}h.isMDXComponent=!0}}]);