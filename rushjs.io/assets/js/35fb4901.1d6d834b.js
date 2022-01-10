"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2240],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(6393);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=s,f=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return t?i.createElement(f,r(r({ref:n},c),{},{components:t})):i.createElement(f,r({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,r=new Array(a);r[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2589:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>p,toc:()=>c,default:()=>h});var i=t(1731),s=t(396),a=(t(6393),t(158)),r=["components"],l={title:"rush publish"},o=void 0,p={unversionedId:"commands/rush_publish",id:"commands/rush_publish",title:"rush publish",description:"See also",source:"@site/docs/commands/rush_publish.md",sourceDirName:"commands",slug:"/commands/rush_publish",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_publish",editUrl:"https://github.com/microsoft/rushstack-websites/docs/commands/rush_publish.md",tags:[],version:"current",frontMatter:{title:"rush publish"},sidebar:"docsSidebar",previous:{title:"rush list",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_list"},next:{title:"rush purge",permalink:"/rushstack-websites/rushjs.io/pages/commands/rush_purge"}},c=[{value:"See also",id:"see-also",children:[],level:2}],u={toc:c};function h(e){var n=e.components,t=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/commands/rush_publish/"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: rush publish [-h] [-a] [-b BRANCH] [-p] [--add-commit-details]\n                    [--regenerate-changelogs] [-r REGISTRY] [-n TOKEN]\n                    [-t TAG] [--set-access-level {public,restricted}] [--pack]\n                    [--release-folder FOLDER] [--include-all]\n                    [--version-policy POLICY] [--prerelease-name NAME]\n                    [--partial-prerelease] [--suffix SUFFIX] [--force]\n                    [--apply-git-tags-on-pack] [-c COMMIT_ID]\n\n\nReads and processes package publishing change requests generated by "rush\nchange". This will perform a read-only operation by default, printing\noperations executed to the console. To commit changes and publish packages,\nyou must use the --commit flag and/or the --publish flag.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -a, --apply           If this flag is specified, the change requests will\n                        be applied to package.json files.\n  -b BRANCH, --target-branch BRANCH\n                        If this flag is specified, applied changes and\n                        deleted change requests will be committed and merged\n                        into the target branch.\n  -p, --publish         If this flag is specified, applied changes will be\n                        published to npm.\n  --add-commit-details  Adds commit author and hash to the changelog.json\n                        files for each change.\n  --regenerate-changelogs\n                        Regenerates all changelog files based on the current\n                        JSON content.\n  -r REGISTRY, --registry REGISTRY\n                        Publishes to a specified NPM registry. If this is\n                        specified, it will prevent the current commit will\n                        not be tagged.\n  -n TOKEN, --npm-auth-token TOKEN\n                        (DEPRECATED) Specifies the authentication token to\n                        use during publishing. This parameter is deprecated\n                        because command line parameters may be readable by\n                        unrelated processes on a lab machine. Instead, a\n                        safer practice is to pass the token via an\n                        environment variable and reference it from your\n                        common/config/rush/.npmrc-publish file.\n  -t TAG, --tag TAG     The tag option to pass to npm publish. By default NPM\n                        will publish using the \'latest\' tag, even if the\n                        package is older than the current latest, so in\n                        publishing workflows for older releases, providing a\n                        tag is important. When hotfix changes are made, this\n                        parameter defaults to \'hotfix\'.\n  --set-access-level {public,restricted}\n                        By default, when Rush invokes "npm publish" it will\n                        publish scoped packages with an access level of\n                        "restricted". Scoped packages can be published with\n                        an access level of "public" by specifying that value\n                        for this flag with the initial publication. NPM\n                        always publishes unscoped packages with an access\n                        level of "public". For more information, see the NPM\n                        documentation for the "--access" option of "npm\n                        publish".\n  --pack                Packs projects into tarballs instead of publishing to\n                        npm repository. It can only be used when\n                        --include-all is specified. If this flag is specified,\n                         NPM registry related parameters will be ignored.\n  --release-folder FOLDER\n                        This parameter is used with --pack parameter to\n                        provide customized location for the tarballs instead\n                        of the default value.\n  --include-all         If this flag is specified, all packages with\n                        shouldPublish=true in rush.json or with a specified\n                        version policy will be published if their version is\n                        newer than published version.\n  --version-policy POLICY\n                        Version policy name. Only projects with this version\n                        policy will be published if used with --include-all.\n  --prerelease-name NAME\n                        Bump up to a prerelease version with the provided\n                        prerelease name. Cannot be used with --suffix\n  --partial-prerelease  Used with --prerelease-name. Only bump packages to a\n                        prerelease version if they have changes.\n  --suffix SUFFIX       Append a suffix to all changed versions. Cannot be\n                        used with --prerelease-name.\n  --force               If this flag is specified with --publish, packages\n                        will be published with --force on npm\n  --apply-git-tags-on-pack\n                        If specified with --publish and --pack, git tags will\n                        be applied for packages as if a publish was being run\n                        without --pack.\n  -c COMMIT_ID, --commit COMMIT_ID\n                        Used in conjunction with git tagging -- apply git\n                        tags at the commit hash specified. If not provided,\n                        the current HEAD will be tagged.\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/publishing"},"Publishing packages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../commands/rush_version"},"rush version"))))}h.isMDXComponent=!0}}]);