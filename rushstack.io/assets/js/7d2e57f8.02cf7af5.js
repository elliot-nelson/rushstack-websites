"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[46341],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||p;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96581:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(61731),a=r(70396),p=(r(46393),r(50158)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/api/api-extractor-model.heritagetype.excerpt",id:"pages/api/api-extractor-model.heritagetype.excerpt",title:"api-extractor-model.heritagetype.excerpt",description:"Home &gt; @microsoft/api-extractor-model &gt; HeritageType &gt; excerpt",source:"@site/docs/pages/api/api-extractor-model.heritagetype.excerpt.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.heritagetype.excerpt",permalink:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.heritagetype.excerpt",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"HeritageType.excerpt property",id:"heritagetypeexcerpt-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("head",null,(0,p.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-extractor-model.heritagetype.excerpt/"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.heritagetype"},"HeritageType")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-extractor-model.heritagetype.excerpt"},"excerpt")),(0,p.kt)("h2",{id:"heritagetypeexcerpt-property"},"HeritageType.excerpt property"),(0,p.kt)("p",null,"An excerpt corresponding to the referenced type."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly excerpt: Excerpt;\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"For example, consider this declaration:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export class Widget extends Controls.WidgetBase implements Controls.IWidget, IDisposable {\n  // . . .\n}\n")),(0,p.kt)("p",null,"The excerpt might be ",(0,p.kt)("inlineCode",{parentName:"p"},"Controls.WidgetBase")," , ",(0,p.kt)("inlineCode",{parentName:"p"},"Controls.IWidget")," , or ",(0,p.kt)("inlineCode",{parentName:"p"},"IDisposable")," ."))}m.isMDXComponent=!0}}]);