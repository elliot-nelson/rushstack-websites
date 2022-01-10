"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[10192],{50158:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(46393);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,h=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return t?n.createElement(h,o(o({ref:r},l),{},{components:t})):n.createElement(h,o({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},382:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=t(61731),i=t(70396),a=(t(46393),t(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename",id:"pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename",title:"rush-lib.rushconfiguration.tempshrinkwrapfilename",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; tempShrinkwrapFilename",source:"@site/docs/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.tempShrinkwrapFilename property",id:"rushconfigurationtempshrinkwrapfilename-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:l};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename"},"tempShrinkwrapFilename")),(0,a.kt)("h2",{id:"rushconfigurationtempshrinkwrapfilename-property"},"RushConfiguration.tempShrinkwrapFilename property"),(0,a.kt)("p",null,'The full path of the temporary shrinkwrap file that is used during "rush install". This file may get rewritten by the package manager during installation.'),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get tempShrinkwrapFilename(): string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This property merely reports the filename; the file itself may not actually exist. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\npm-shrinkwrap.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\pnpm-lock.yaml")))}m.isMDXComponent=!0}}]);