"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[10895],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97612:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/node-core-library.filesystem.createsymboliclinkjunction",id:"pages/api/node-core-library.filesystem.createsymboliclinkjunction",title:"node-core-library.filesystem.createsymboliclinkjunction",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; createSymbolicLinkJunction",source:"@site/docs/pages/api/node-core-library.filesystem.createsymboliclinkjunction.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.filesystem.createsymboliclinkjunction",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem.createsymboliclinkjunction",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"FileSystem.createSymbolicLinkJunction() method",id:"filesystemcreatesymboliclinkjunction-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.filesystem.createsymboliclinkjunction/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.filesystem.createsymboliclinkjunction"},"createSymbolicLinkJunction")),(0,i.kt)("h2",{id:"filesystemcreatesymboliclinkjunction-method"},"FileSystem.createSymbolicLinkJunction() method"),(0,i.kt)("p",null,'Creates an NTFS "directory junction" on Windows operating systems; for other operating systems, it creates a regular symbolic link. The link target must be a folder, not a file. Behind the scenes it uses ',(0,i.kt)("inlineCode",{parentName:"p"},"fs.symlinkSync()")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static createSymbolicLinkJunction(options: IFileSystemCreateLinkOptions): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.ifilesystemcreatelinkoptions"},"IFileSystemCreateLinkOptions")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For security reasons, Windows operating systems by default require administrator elevation to create symbolic links. As a result, on Windows it's generally recommended for Node.js tools to use hard links (for files) or NTFS directory junctions (for folders), since regular users are allowed to create them. Hard links and junctions are less vulnerable to symlink attacks because they cannot reference a network share, and their target must exist at the time of link creation. Non-Windows operating systems generally don't restrict symlink creation, and as such are more vulnerable to symlink attacks. Note that Windows can be configured to permit regular users to create symlinks, for example by enabling Windows 10 \"developer mode.\""),(0,i.kt)("p",null,"A directory junction requires the link source and target to both be located on local disk volumes; if not, use a symbolic link instead."))}m.isMDXComponent=!0}}]);