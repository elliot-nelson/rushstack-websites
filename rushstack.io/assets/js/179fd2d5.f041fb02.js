"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[53048],{50158:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return h}});var t=r(46393);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(r),h=i,d=f["".concat(a,".").concat(h)]||f[h]||l[h]||s;return r?t.createElement(d,o(o({ref:n},p),{},{components:r})):t.createElement(d,o({ref:n},p))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14197:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var t=r(74834),i=r(28265),s=(r(46393),r(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},a=void 0,c={unversionedId:"api/rush-lib.rushconfiguration.ensureconsistentversions",id:"api/rush-lib.rushconfiguration.ensureconsistentversions",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.ensureconsistentversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; ensureConsistentVersions",source:"@site/docs/api/rush-lib.rushconfiguration.ensureconsistentversions.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.ensureconsistentversions",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.ensureconsistentversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfiguration.ensureConsistentVersions property",id:"rushconfigurationensureconsistentversions-property",children:[],level:2}],l={toc:p};function f(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfiguration.ensureconsistentversions"},"ensureConsistentVersions")),(0,s.kt)("h2",{id:"rushconfigurationensureconsistentversions-property"},"RushConfiguration.ensureConsistentVersions property"),(0,s.kt)("p",null,'If true, then consistent version specifiers for dependencies will be enforced. I.e. "rush check" is run before some commands.'),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"get ensureConsistentVersions(): boolean;\n")))}f.isMDXComponent=!0}}]);