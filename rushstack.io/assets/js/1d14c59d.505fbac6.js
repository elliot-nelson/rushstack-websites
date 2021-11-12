"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[52331],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(46393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),c=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,f=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=i,d=s["".concat(f,".").concat(g)]||s[g]||p[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return f},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(74834),i=n(28265),a=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},f=void 0,c={unversionedId:"api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync",id:"api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync",isDocsHomePage:!1,title:"heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync",description:"Home &gt; @rushstack/heft-config-file &gt; ConfigurationFile &gt; tryLoadConfigurationFileForProjectAsync",source:"@site/docs/api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync.md",sourceDirName:"api",slug:"/api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync",permalink:"/rushstack-websites/undefined/pages/api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ConfigurationFile.tryLoadConfigurationFileForProjectAsync() method",id:"configurationfiletryloadconfigurationfileforprojectasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft-config-file"},"@rushstack/heft-config-file")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft-config-file.configurationfile"},"ConfigurationFile")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft-config-file.configurationfile.tryloadconfigurationfileforprojectasync"},"tryLoadConfigurationFileForProjectAsync")),(0,a.kt)("h2",{id:"configurationfiletryloadconfigurationfileforprojectasync-method"},"ConfigurationFile.tryLoadConfigurationFileForProjectAsync() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"This function is identical to ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync"},"ConfigurationFile.loadConfigurationFileForProjectAsync()")," , except that it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," instead of throwing an error if the configuration file cannot be found."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"tryLoadConfigurationFileForProjectAsync(terminal: ITerminal, projectPath: string, rigConfig?: RigConfig): Promise<TConfigurationFile | undefined>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"terminal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/node-core-library.iterminal"},"ITerminal")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectPath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rigConfig"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/rig-package.rigconfig"},"RigConfig")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","TConfigurationFile ","|"," undefined",">"))}s.isMDXComponent=!0}}]);