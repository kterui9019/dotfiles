var Ie=Object.create;var x=Object.defineProperty,ke=Object.defineProperties,Le=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,X=Object.getOwnPropertySymbols,Me=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var U=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&U(e,r,t[r]);if(X)for(var r of X(t))We.call(t,r)&&U(e,r,t[r]);return e},A=(e,t)=>ke(e,$e(t)),Y=e=>x(e,"__esModule",{value:!0});var g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Re=(e,t)=>{for(var r in t)x(e,r,{get:t[r],enumerable:!0})},H=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of De(t))!Q.call(e,o)&&(r||o!=="default")&&x(e,o,{get:()=>t[o],enumerable:!(n=Le(t,o))||n.enumerable});return e},C=(e,t)=>H(Y(x(e!=null?Ie(Me(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Ge=(e=>(t,r)=>e&&e.get(t)||(r=H(Y({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var k=g((dt,ee)=>{"use strict";var Z=require("fs"),I;function Ne(){try{return Z.statSync("/.dockerenv"),!0}catch{return!1}}function Be(){try{return Z.readFileSync("/proc/self/cgroup","utf8").includes("docker")}catch{return!1}}ee.exports=()=>(I===void 0&&(I=Ne()||Be()),I)});var ne=g((mt,L)=>{"use strict";var ze=require("os"),Ke=require("fs"),te=k(),re=()=>{if(process.platform!=="linux")return!1;if(ze.release().toLowerCase().includes("microsoft"))return!te();try{return Ke.readFileSync("/proc/version","utf8").toLowerCase().includes("microsoft")?!te():!1}catch{return!1}};process.env.__IS_WSL_TEST__?L.exports=re:L.exports=re()});var ie=g((gt,oe)=>{"use strict";oe.exports=(e,t,r)=>{let n=o=>Object.defineProperty(e,t,{value:o,enumerable:!0,writable:!0});return Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get(){let o=r();return n(o),o},set(o){n(o)}}),e}});var pe=g((yt,fe)=>{var Je=require("path"),Ve=require("child_process"),{promises:$,constants:le}=require("fs"),v=ne(),Xe=k(),D=ie(),se=Je.join(__dirname,"xdg-open"),{platform:P,arch:ce}=process,Ue=(()=>{let e="/mnt/",t;return async function(){if(t)return t;let r="/etc/wsl.conf",n=!1;try{await $.access(r,le.F_OK),n=!0}catch{}if(!n)return e;let o=await $.readFile(r,{encoding:"utf8"}),i=/(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(o);return i?(t=i.groups.mountPoint.trim(),t=t.endsWith("/")?t:`${t}/`,t):e}})(),ae=async(e,t)=>{let r;for(let n of e)try{return await t(n)}catch(o){r=o}throw r},O=async e=>{if(e=d({wait:!1,background:!1,newInstance:!1,allowNonzeroExitCode:!1},e),Array.isArray(e.app))return ae(e.app,l=>O(A(d({},e),{app:l})));let{name:t,arguments:r=[]}=e.app||{};if(r=[...r],Array.isArray(t))return ae(t,l=>O(A(d({},e),{app:{name:l,arguments:r}})));let n,o=[],i={};if(P==="darwin")n="open",e.wait&&o.push("--wait-apps"),e.background&&o.push("--background"),e.newInstance&&o.push("--new"),t&&o.push("-a",t);else if(P==="win32"||v&&!Xe()){let l=await Ue();n=v?`${l}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`:`${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`,o.push("-NoProfile","-NonInteractive","\u2013ExecutionPolicy","Bypass","-EncodedCommand"),v||(i.windowsVerbatimArguments=!0);let u=["Start"];e.wait&&u.push("-Wait"),t?(u.push(`"\`"${t}\`""`,"-ArgumentList"),e.target&&r.unshift(e.target)):e.target&&u.push(`"${e.target}"`),r.length>0&&(r=r.map(f=>`"\`"${f}\`""`),u.push(r.join(","))),e.target=Buffer.from(u.join(" "),"utf16le").toString("base64")}else{if(t)n=t;else{let l=!__dirname||__dirname==="/",u=!1;try{await $.access(se,le.X_OK),u=!0}catch{}n=process.versions.electron||P==="android"||l||!u?"xdg-open":se}r.length>0&&o.push(...r),e.wait||(i.stdio="ignore",i.detached=!0)}e.target&&o.push(e.target),P==="darwin"&&r.length>0&&o.push("--args",...r);let s=Ve.spawn(n,o,i);return e.wait?new Promise((l,u)=>{s.once("error",u),s.once("close",f=>{if(e.allowNonzeroExitCode&&f>0){u(new Error(`Exited with code ${f}`));return}l(s)})}):(s.unref(),s)},M=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a `target`");return O(A(d({},t),{target:e}))},Qe=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a `name`");let{arguments:r=[]}=t||{};if(r!=null&&!Array.isArray(r))throw new TypeError("Expected `appArguments` as Array type");return O(A(d({},t),{app:{name:e,arguments:r}}))};function ue(e){if(typeof e=="string"||Array.isArray(e))return e;let{[ce]:t}=e;if(!t)throw new Error(`${ce} is not supported`);return t}function W({[P]:e},{wsl:t}){if(t&&v)return ue(t);if(!e)throw new Error(`${P} is not supported`);return ue(e)}var F={};D(F,"chrome",()=>W({darwin:"google chrome",win32:"chrome",linux:["google-chrome","google-chrome-stable","chromium"]},{wsl:{ia32:"/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",x64:["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe","/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]}}));D(F,"firefox",()=>W({darwin:"firefox",win32:"C:\\Program Files\\Mozilla Firefox\\firefox.exe",linux:"firefox"},{wsl:"/mnt/c/Program Files/Mozilla Firefox/firefox.exe"}));D(F,"edge",()=>W({darwin:"microsoft edge",win32:"msedge",linux:["microsoft-edge","microsoft-edge-dev"]},{wsl:"/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"}));M.apps=F;M.openApp=Qe;fe.exports=M});var ge=g(y=>{y.parse=y.decode=Ye;y.stringify=y.encode=he;y.safe=w;y.unsafe=b;var R=typeof process<"u"&&process.platform==="win32"?`\r
`:`
`;function he(e,t){var r=[],n="";typeof t=="string"?t={section:t,whitespace:!1}:(t=t||{},t.whitespace=t.whitespace===!0);var o=t.whitespace?" = ":"=";return Object.keys(e).forEach(function(i,s,l){var u=e[i];u&&Array.isArray(u)?u.forEach(function(f){n+=w(i+"[]")+o+w(f)+`
`}):u&&typeof u=="object"?r.push(i):n+=w(i)+o+w(u)+R}),t.section&&n.length&&(n="["+w(t.section)+"]"+R+n),r.forEach(function(i,s,l){var u=de(i).join("\\."),f=(t.section?t.section+".":"")+u,a=he(e[i],{section:f,whitespace:t.whitespace});n.length&&a.length&&(n+=R),n+=a}),n}function de(e){return e.replace(/\1/g,"LITERAL\\1LITERAL").replace(/\\\./g,"").split(/\./).map(function(t){return t.replace(/\1/g,"\\.").replace(/\2LITERAL\\1LITERAL\2/g,"")})}function Ye(e){var t={},r=t,n=null,o=/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i,i=e.split(/[\r\n]+/g);return i.forEach(function(s,l,u){if(!(!s||s.match(/^\s*[;#]/))){var f=s.match(o);if(!!f){if(f[1]!==void 0){if(n=b(f[1]),n==="__proto__"){r={};return}r=t[n]=t[n]||{};return}var a=b(f[2]);if(a!=="__proto__"){var m=f[3]?b(f[4]):!0;switch(m){case"true":case"false":case"null":m=JSON.parse(m)}if(a.length>2&&a.slice(-2)==="[]"){if(a=a.substring(0,a.length-2),a==="__proto__")return;r[a]?Array.isArray(r[a])||(r[a]=[r[a]]):r[a]=[]}Array.isArray(r[a])?r[a].push(m):r[a]=m}}}}),Object.keys(t).filter(function(s,l,u){if(!t[s]||typeof t[s]!="object"||Array.isArray(t[s]))return!1;var f=de(s),a=t,m=f.pop(),V=m.replace(/\\\./g,".");return f.forEach(function(j,ft,pt){j!=="__proto__"&&((!a[j]||typeof a[j]!="object")&&(a[j]={}),a=a[j])}),a===t&&V===m?!1:(a[V]=t[s],!0)}).forEach(function(s,l,u){delete t[s]}),t}function me(e){return e.charAt(0)==='"'&&e.slice(-1)==='"'||e.charAt(0)==="'"&&e.slice(-1)==="'"}function w(e){return typeof e!="string"||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&me(e)||e!==e.trim()?JSON.stringify(e):e.replace(/;/g,"\\;").replace(/#/g,"\\#")}function b(e,t){if(e=(e||"").trim(),me(e)){e.charAt(0)==="'"&&(e=e.substr(1,e.length-2));try{e=JSON.parse(e)}catch{}}else{for(var r=!1,n="",o=0,i=e.length;o<i;o++){var s=e.charAt(o);if(r)"\\;#".indexOf(s)!==-1?n+=s:n+="\\"+s,r=!1;else{if(";#".indexOf(s)!==-1)break;s==="\\"?r=!0:n+=s}}return r&&(n+="\\"),n.trim()}return e}});var Ee=g((wt,we)=>{"use strict";var ye=require("fs"),Pe=require("os"),G=require("path");we.exports=function(e,t){typeof e!="string"&&(t=e,e=null);let r=Object.assign({cwd:process.cwd(),type:e},t),n;if(r.type==="global"?n=G.join(Pe.homedir(),".gitconfig"):n=G.resolve(r.cwd,".git/config"),!ye.existsSync(n)){if(typeof r.type=="string")return null;n=G.join(Pe.homedir(),".config/git/config")}return ye.existsSync(n)?n:null}});var Ce=g((Et,_e)=>{"use strict";var S=require("fs"),He=require("os"),E=require("path"),je=require("util"),Ze=ge(),et=Ee(),xe=e=>e?e.replace(/^~/,He.homedir()):"",p=(e,t)=>(typeof e=="function"&&(t=e,e=null),typeof t!="function"?p.promise(e):p.promise(e).then(r=>t(null,r)).catch(t));p.promise=e=>{let t=p.resolveConfigPath(e),r=je.promisify(S.readFile),n=je.promisify(S.stat);return t?n(t).then(()=>r(t,"utf8")).then(o=>(e&&e.include===!0&&(o=Se(o,E.resolve(E.dirname(t)))),Ae(o,e))):Promise.resolve(null)};p.sync=e=>{let t=p.resolveConfigPath(e);if(t&&S.existsSync(t)){let r=S.readFileSync(t,"utf8");if(e&&e.include===!0){let n=E.resolve(E.dirname(t));r=Se(r,n)}return Ae(r,e)}return{}};p.resolveConfigPath=e=>{typeof e=="string"&&(e={type:e});let t=Object.assign({cwd:process.cwd()},e),r=t.path?xe(t.path):et(t.type);return r?E.resolve(t.cwd,r):null};p.resolve=e=>p.resolveConfigPath(e);p.expandKeys=e=>{for(let t of Object.keys(e)){let r=/(\S+) "(.*)"/.exec(t);if(!r)continue;let n=r[1];e[n]=e[n]||{},e[n][r[2]]=e[t],delete e[t]}return e};function Ae(e,t){let r=Object.assign({},t);e=e.replace(/\[(\S+) "(.*)"\]/g,(o,i,s)=>i&&s?`[${i} "${s.split(".").join("\\.")}"]`:o);let n=Ze.parse(e);return r.expandKeys===!0?p.expandKeys(n):n}function Se(e,t){let r=e.split(`
`).filter(i=>i.trim()!==""),n=r.length,o=[];for(let i=0;i<n;i++){let s=r[i];if(s.indexOf("[include]")===0){let l=r[i+1].replace(/^\s*path\s*=\s*/,""),u=E.resolve(t,xe(l));o.push(S.readFileSync(u))}else o.push(s)}return o.join(`
`)}_e.exports=p});var lt={};Re(lt,{default:()=>Te});var c=require("@raycast/api"),h=require("fs"),B=C(pe()),Fe=require("os"),be=C(Ce()),J=require("path");var _=C(require("node:path"),1),Oe=C(require("node:os"),1),ve=Oe.default.homedir();function N(e){let t=_.default.normalize(e)+_.default.sep;return(t.startsWith(ve)?t.replace(ve+_.default.sep,`~${_.default.sep}`):t).slice(0,-1)}var T=`${(0,Fe.homedir)()}/Library/Application Support/Code/User/globalStorage/alefragnani.project-manager`,q=(0,c.getPreferenceValues)(),z=q.gitClientAppPath||"",tt=(0,h.existsSync)(z),K=q.terminalAppPath||"",rt=(0,h.existsSync)(K);function nt(){let e=ot()||T,t=`${e}/projects.json`,r=[`${e}/projects_cache_git.json`,`${e}/projects_cache_any.json`],n=[];if((0,h.existsSync)(t)){let o=JSON.parse((0,h.readFileSync)(t).toString());n.push(...o)}return r.forEach(o=>{(0,h.existsSync)(o)&&JSON.parse((0,h.readFileSync)(o).toString()).forEach(({name:s,fullPath:l})=>{n.push({name:s,rootPath:l,tags:[],enabled:!0})})}),n}function ot(){let e=q.projectManagerDataPath;if(e&&(0,h.existsSync)(e)){let t=(0,h.lstatSync)(e);if(t.isDirectory())return e;if(t.isFile())return(0,J.dirname)(e)}}function it(e){return[...e].sort((r,n)=>r.name.localeCompare(n.name))}function st(e){let t=new Map;return e.forEach(r=>{(r.tags?.length>0?r.tags:["[no tags]"]).forEach(o=>{let i=[];t.has(o)&&i.push(...t.get(o)||[]),i.push(r),t.set(o,i)})}),new Map([...t.entries()].sort())}function ct(e){let t=st(e),r=[];return t.forEach((n,o)=>{r.push(_jsx(c.List.Section,{key:o,title:o},n?.map((i,s)=>_jsx(qe,d({key:i.rootPath+s},i)))))}),r}function Te(){let e=[],t=nt();if(!t||t.length===0)return _jsx(c.Detail,{markdown:`To use this extension, the Visual Studio Extension 
      [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
       is required.`});let r=it(t);if(q.groupProjectsByTag){let n=ct(r);e.push(...n)}else r.forEach((n,o)=>{e.push(_jsx(qe,d({key:n.rootPath+o},n)))});return _jsx(c.List,{searchBarPlaceholder:"Search projects ..."},e)}function qe({name:e,rootPath:t,tags:r}){let n=t,o=N(n),i=(0,J.dirname)(o);return _jsx(c.List.Item,{title:e,subtitle:i,icon:{fileIcon:n},keywords:r,accessoryTitle:r?.join(", "),actions:_jsx(c.ActionPanel,null,_jsx(c.ActionPanel.Section,null,_jsx(c.OpenAction,{title:"Open in Code",icon:"command-icon.png",target:n,application:"Visual Studio Code"}),rt&&_jsx(c.ActionPanel.Item,{title:"Open in Terminal",key:"terminal",onAction:()=>{(0,B.default)(n,{app:{name:K,arguments:[n]}}),(0,c.closeMainWindow)()},icon:{fileIcon:K},shortcut:{modifiers:["cmd"],key:"t"}}),tt&&ut(n)&&_jsx(c.ActionPanel.Item,{title:"Open in Git client",key:"git-client",onAction:()=>{(0,B.default)(n,{app:{name:z,arguments:[n]}}),(0,c.closeMainWindow)()},icon:{fileIcon:z},shortcut:{modifiers:["cmd"],key:"g"}}),_jsx(c.ShowInFinderAction,{path:n}),_jsx(c.OpenWithAction,{path:n,shortcut:{modifiers:["cmd"],key:"o"}})),_jsx(c.ActionPanel.Section,null,_jsx(c.CopyToClipboardAction,{title:"Copy Name",content:e,shortcut:{modifiers:["cmd"],key:"."}}),_jsx(c.CopyToClipboardAction,{title:"Copy Path",content:o,shortcut:{modifiers:["cmd","shift"],key:"."}})),_jsx(c.ActionPanel.Section,null,_jsx(c.TrashAction,{paths:[n],shortcut:{modifiers:["ctrl"],key:"x"}})),_jsx(at,null))})}function at(){return c.environment.isDevelopment?_jsx(c.ActionPanel.Section,{title:"Development"},_jsx(c.OpenAction,{title:"Open projects.json File in Code",icon:"command-icon.png",target:T,application:"Visual Studio Code"}),_jsx(c.ShowInFinderAction,{title:"Show projects.json File in Finder",path:T}),_jsx(c.CopyToClipboardAction,{title:"Copy projects.json File Path",content:T})):null}function ut(e){return!!be.default.sync({cwd:e,path:".git/config",expandKeys:!0}).core}module.exports=Ge(lt);0&&(module.exports={});
/*!
 * git-config-path <https://github.com/jonschlinkert/git-config-path>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * parse-git-config <https://github.com/jonschlinkert/parse-git-config>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
