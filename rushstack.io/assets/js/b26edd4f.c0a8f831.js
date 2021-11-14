"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43265],{50158:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return d}});var r=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=c(t),d=i,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||s;return t?r.createElement(f,a(a({ref:n},o),{},{components:t})):r.createElement(f,a({ref:n},o))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},34811:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return o},default:function(){return h}});var r=t(74834),i=t(28265),s=(t(46393),t(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild",id:"api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild",isDocsHomePage:!1,title:"rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild",description:"Home &gt; @microsoft/rush-lib &gt; IExperimentsJson &gt; buildCacheWithAllowWarningsInSuccessfulBuild",source:"@site/docs/api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild.md",sourceDirName:"api",slug:"/api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},o=[{value:"IExperimentsJson.buildCacheWithAllowWarningsInSuccessfulBuild property",id:"iexperimentsjsonbuildcachewithallowwarningsinsuccessfulbuild-property",children:[],level:2}],p={toc:o};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild/"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.iexperimentsjson"},"IExperimentsJson")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.iexperimentsjson.buildcachewithallowwarningsinsuccessfulbuild"},"buildCacheWithAllowWarningsInSuccessfulBuild")),(0,s.kt)("h2",{id:"iexperimentsjsonbuildcachewithallowwarningsinsuccessfulbuild-property"},"IExperimentsJson.buildCacheWithAllowWarningsInSuccessfulBuild property"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,s.kt)("p",null,"If true, build caching will respect the allowWarningsInSuccessfulBuild flag and cache builds with warnings. This will not replay warnings from the cached build."),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"buildCacheWithAllowWarningsInSuccessfulBuild?: boolean;\n")))}h.isMDXComponent=!0}}]);