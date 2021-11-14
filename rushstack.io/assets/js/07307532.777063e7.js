"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[7458],{50158:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(46393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return n?t.createElement(d,a(a({ref:r},p),{},{components:n})):t.createElement(d,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67030:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var t=n(74834),o=n(28265),i=(n(46393),n(50158)),a=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"api/rush-lib.commonversionsconfiguration.preferredversions",id:"api/rush-lib.commonversionsconfiguration.preferredversions",isDocsHomePage:!1,title:"rush-lib.commonversionsconfiguration.preferredversions",description:"Home &gt; @microsoft/rush-lib &gt; CommonVersionsConfiguration &gt; preferredVersions",source:"@site/docs/api/rush-lib.commonversionsconfiguration.preferredversions.md",sourceDirName:"api",slug:"/api/rush-lib.commonversionsconfiguration.preferredversions",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.commonversionsconfiguration.preferredversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommonVersionsConfiguration.preferredVersions property",id:"commonversionsconfigurationpreferredversions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/rush-lib.commonversionsconfiguration.preferredversions/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.commonversionsconfiguration.preferredversions"},"preferredVersions")),(0,i.kt)("h2",{id:"commonversionsconfigurationpreferredversions-property"},"CommonVersionsConfiguration.preferredVersions property"),(0,i.kt)("p",null,'A table that specifies a "preferred version" for a given NPM package. This feature is typically used to hold back an indirect dependency to a specific older version, or to reduce duplication of indirect dependencies.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get preferredVersions(): Map<string, string>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,'The "preferredVersions" value can be any SemVer range specifier (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"~1.2.3"),' ). Rush injects these values into the "dependencies" field of the top-level common/temp/package.json, which influences how the package manager will calculate versions. The specific effect depends on your package manager. Generally it will have no effect on an incompatible or already constrained SemVer range. If you are using PNPM, similar effects can be achieved using the pnpmfile.js hook. See the Rush documentation for more details.'),(0,i.kt)("p",null,"After modifying this field, it's recommended to run ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update --full")," so that the package manager will recalculate all version selections."))}f.isMDXComponent=!0}}]);