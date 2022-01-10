"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9383],{158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(6393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=i,f=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9629:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>p,default:()=>m});var n=r(1731),i=r(396),a=(r(6393),r(158)),o=["components"],s={title:"rush init"},l=void 0,u={unversionedId:"commands/rush_init",id:"commands/rush_init",title:"rush init",description:"See also",source:"@site/docs/commands/rush_init.md",sourceDirName:"commands",slug:"/commands/rush_init",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_init",editUrl:"https://github.com/microsoft/rushstack-websites/docs/commands/rush_init.md",tags:[],version:"current",frontMatter:{title:"rush init"},sidebar:"docsSidebar",previous:{title:"rush deploy",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_deploy"},next:{title:"rush init-autoinstaller",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_init-autoinstaller"}},p=[{value:"See also",id:"see-also",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/commands/rush_init/"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: rush init [-h] [--overwrite-existing] [--rush-example-repo]\n\nWhen invoked in an empty folder, this command provisions a standard set of\nconfig file templates to start managing projects using Rush.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  --overwrite-existing  By default "rush init" will not overwrite existing\n                        config files. Specify this switch to override that.\n                        This can be useful when upgrading your repo to a\n                        newer release of Rush. WARNING: USE WITH CARE!\n  --rush-example-repo   When copying the template config files, this\n                        uncomments fragments that are used by the\n                        "rush-example" GitHub repo, which is a sample\n                        monorepo that illustrates many Rush features. This\n                        option is primarily intended for maintaining that\n                        example.\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/setup_new_repo"},"Setting up a new repo")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rush-example"},"rush-example")," repo on GitHub"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../commands/rush_init-deploy"},"rush init-deploy"))))}m.isMDXComponent=!0}}]);