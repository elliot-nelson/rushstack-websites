"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5457],{50158:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22107:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=t(74834),o=t(28265),a=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/node-core-library.iimportresolveoptions.allowselfreference",id:"api/node-core-library.iimportresolveoptions.allowselfreference",isDocsHomePage:!1,title:"node-core-library.iimportresolveoptions.allowselfreference",description:"Home &gt; @rushstack/node-core-library &gt; IImportResolveOptions &gt; allowSelfReference",source:"@site/docs/api/node-core-library.iimportresolveoptions.allowselfreference.md",sourceDirName:"api",slug:"/api/node-core-library.iimportresolveoptions.allowselfreference",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iimportresolveoptions.allowselfreference",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"IImportResolveOptions.allowSelfReference property",id:"iimportresolveoptionsallowselfreference-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.iimportresolveoptions.allowselfreference/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iimportresolveoptions"},"IImportResolveOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iimportresolveoptions.allowselfreference"},"allowSelfReference")),(0,a.kt)("h2",{id:"iimportresolveoptionsallowselfreference-property"},"IImportResolveOptions.allowSelfReference property"),(0,a.kt)("p",null,"If true, then resolvePath is allowed to refer to the package.json of the active project."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"allowSelfReference?: boolean;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This will take precedence over any installed dependency with the same name. Note that this requires an additional PackageJsonLookup calculation."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Returns an absolute path to the current package\nImport.resolveModulePath({\n  resolvePath: "current-project",\n  basePath: process.cwd(),\n  allowSelfReference: true\n})\n')))}f.isMDXComponent=!0}}]);