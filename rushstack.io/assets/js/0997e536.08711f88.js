"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[14924],{50158:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=l(t),f=o,d=h["".concat(s,".").concat(f)]||h[f]||c[f]||i;return t?n.createElement(d,u(u({ref:r},p),{},{components:t})):n.createElement(d,u({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=h;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},99091:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=t(74834),o=t(28265),i=(t(46393),t(50158)),u=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"api/rush-lib.rushconfigurationproject.shouldpublish",id:"api/rush-lib.rushconfigurationproject.shouldpublish",isDocsHomePage:!1,title:"rush-lib.rushconfigurationproject.shouldpublish",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; shouldPublish",source:"@site/docs/api/rush-lib.rushconfigurationproject.shouldpublish.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfigurationproject.shouldpublish",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfigurationproject.shouldpublish",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfigurationProject.shouldPublish property",id:"rushconfigurationprojectshouldpublish-property",children:[],level:2}],c={toc:p};function h(e){var r=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.rushconfigurationproject.shouldpublish"},"shouldPublish")),(0,i.kt)("h2",{id:"rushconfigurationprojectshouldpublish-property"},"RushConfigurationProject.shouldPublish property"),(0,i.kt)("p",null,"A flag which indicates whether changes to this project should be published. This controls whether or not the project would show up when running ",(0,i.kt)("inlineCode",{parentName:"p"},"rush change")," , and whether or not it should be published during ",(0,i.kt)("inlineCode",{parentName:"p"},"rush publish")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get shouldPublish(): boolean;\n")))}h.isMDXComponent=!0}}]);