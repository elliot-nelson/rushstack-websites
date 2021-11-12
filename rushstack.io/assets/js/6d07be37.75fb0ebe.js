"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[51337],{50158:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(a),d=n,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},98905:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=a(74834),n=a(28265),i=(a(46393),a(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/heft.iheftbaseparameter.actionassociated",id:"api/heft.iheftbaseparameter.actionassociated",isDocsHomePage:!1,title:"heft.iheftbaseparameter.actionassociated",description:"Home &gt; @rushstack/heft &gt; IHeftBaseParameter &gt; actionAssociated",source:"@site/docs/api/heft.iheftbaseparameter.actionassociated.md",sourceDirName:"api",slug:"/api/heft.iheftbaseparameter.actionassociated",permalink:"/rushstack-websites/undefined/pages/api/heft.iheftbaseparameter.actionassociated",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IHeftBaseParameter.actionAssociated property",id:"iheftbaseparameteractionassociated-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:u};function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.iheftbaseparameter"},"IHeftBaseParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.iheftbaseparameter.actionassociated"},"actionAssociated")),(0,i.kt)("h2",{id:"iheftbaseparameteractionassociated-property"},"IHeftBaseParameter.actionAssociated property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"If true, then the user has invoked Heft with a command line action that supports this parameter (as defined by the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.iparameterassociatedactionnames.associatedactionnames"},"IParameterAssociatedActionNames.associatedActionNames")," option)."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly actionAssociated: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," is one of the associated action names for ",(0,i.kt)("inlineCode",{parentName:"p"},"--my-integer-parameter")," , then ",(0,i.kt)("inlineCode",{parentName:"p"},"actionAssociated")," will be true if the user invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build")," ."),(0,i.kt)("p",null,"To test whether the parameter was actually included (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --my-integer-parameter 123")," ), verify the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.iheftbaseparameter.value"},"IHeftBaseParameter.value")," property is not ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ."))}f.isMDXComponent=!0}}]);