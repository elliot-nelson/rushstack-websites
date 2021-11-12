"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[44254],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3873:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"api/heft.icustomactionparameter",id:"api/heft.icustomactionparameter",isDocsHomePage:!1,title:"heft.icustomactionparameter",description:"Home &gt; @rushstack/heft &gt; ICustomActionParameter",source:"@site/docs/api/heft.icustomactionparameter.md",sourceDirName:"api",slug:"/api/heft.icustomactionparameter",permalink:"/rushstack-websites/undefined/pages/api/heft.icustomactionparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"ICustomActionParameter type",id:"icustomactionparameter-type",children:[],level:2}],m={toc:p};function l(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.icustomactionparameter"},"ICustomActionParameter")),(0,i.kt)("h2",{id:"icustomactionparameter-type"},"ICustomActionParameter type"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ICustomActionParameter<TParameter> = TParameter extends boolean ? ICustomActionParameterFlag : TParameter extends number ? ICustomActionParameterInteger : TParameter extends string ? ICustomActionParameterString : TParameter extends ReadonlyArray<string> ? ICustomActionParameterStringList : never;\n")),(0,i.kt)("b",null,"References:")," [ICustomActionParameterFlag](/rushstack-websites/undefined/pages/api/heft.icustomactionparameterflag) , [ICustomActionParameterInteger](/rushstack-websites/undefined/pages/api/heft.icustomactionparameterinteger) , [ICustomActionParameterString](/rushstack-websites/undefined/pages/api/heft.icustomactionparameterstring) , [ICustomActionParameterStringList](/rushstack-websites/undefined/pages/api/heft.icustomactionparameterstringlist)")}l.isMDXComponent=!0}}]);