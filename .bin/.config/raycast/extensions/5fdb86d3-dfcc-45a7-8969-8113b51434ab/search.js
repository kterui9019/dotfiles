var Mn=Object.create;var j=Object.defineProperty,$n=Object.defineProperties,Dn=Object.getOwnPropertyDescriptor,Un=Object.getOwnPropertyDescriptors,Wn=Object.getOwnPropertyNames,Le=Object.getOwnPropertySymbols,Kn=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty,Hn=Object.prototype.propertyIsEnumerable;var Be=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))qe.call(t,n)&&Be(e,n,t[n]);if(Le)for(var n of Le(t))Hn.call(t,n)&&Be(e,n,t[n]);return e},E=(e,t)=>$n(e,Un(t)),Fe=e=>j(e,"__esModule",{value:!0});var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xn=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})},je=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Wn(t))!qe.call(e,s)&&(n||s!=="default")&&j(e,s,{get:()=>t[s],enumerable:!(r=Dn(t,s))||r.enumerable});return e},ae=(e,t)=>je(Fe(j(e!=null?Mn(Kn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Vn=(e=>(t,n)=>e&&e.get(t)||(n=je(Fe({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var $e=d((ce,Me)=>{(function(e,t){typeof ce=="object"?Me.exports=t():typeof define=="function"&&define.amd?define(t):e.treeify=t()})(ce,function(){function e(s,o){var i=o?"\u2514":"\u251C";return s?i+="\u2500 ":i+="\u2500\u2500\u2510",i}function t(s,o){var i=[];for(var a in s)!s.hasOwnProperty(a)||o&&typeof s[a]=="function"||i.push(a);return i}function n(s,o,i,a,l,u,f){var m="",y=0,x,g,P=a.slice(0);if(P.push([o,i])&&a.length>0&&(a.forEach(function(w,T){T>0&&(m+=(w[1]?" ":"\u2502")+"  "),!g&&w[0]===o&&(g=!0)}),m+=e(s,i)+s,l&&(typeof o!="object"||o instanceof Date)&&(m+=": "+o),g&&(m+=" (circular ref.)"),f(m)),!g&&typeof o=="object"){var v=t(o,u);v.forEach(function(w){x=++y===v.length,n(w,o[w],x,P,l,u,f)})}}var r={};return r.asLines=function(s,o,i,a){var l=typeof i!="function"?i:!1;n(".",s,!1,[],o,l,a||i)},r.asTree=function(s,o,i){var a="";return n(".",s,!1,[],o,i,function(l){a+=l+`
`}),a},r})});var et=d((so,Ze)=>{Ze.exports=Qe;Qe.sync=Jn;var Ye=require("fs");function Yn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Je(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Yn(t,n)}function Qe(e,t,n){Ye.stat(e,function(r,s){n(r,r?!1:Je(s,e,t))})}function Jn(e,t){return Je(Ye.statSync(e),e,t)}});var ot=d((oo,st)=>{st.exports=nt;nt.sync=Qn;var tt=require("fs");function nt(e,t,n){tt.stat(e,function(r,s){n(r,r?!1:rt(s,t))})}function Qn(e,t){return rt(tt.statSync(e),t)}function rt(e,t){return e.isFile()&&Zn(e,t)}function Zn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),u=parseInt("001",8),f=a|l,m=n&u||n&l&&s===i||n&a&&r===o||n&f&&o===0;return m}});var at=d((ao,it)=>{var io=require("fs"),V;process.platform==="win32"||global.TESTING_WINDOWS?V=et():V=ot();it.exports=le;le.sync=er;function le(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){le(e,t||{},function(o,i){o?s(o):r(i)})})}V(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function er(e,t){try{return V.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var mt=d((co,pt)=>{var k=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",ct=require("path"),tr=k?";":":",ut=at(),lt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),dt=(e,t)=>{let n=t.colon||tr,r=e.match(/\//)||k&&e.match(/\\/)?[""]:[...k?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=k?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=k?s.split(n):[""];return k&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},ft=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=dt(e,t),i=[],a=u=>new Promise((f,m)=>{if(u===r.length)return t.all&&i.length?f(i):m(lt(e));let y=r[u],x=/^".*"$/.test(y)?y.slice(1,-1):y,g=ct.join(x,e),P=!x&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(l(P,u,0))}),l=(u,f,m)=>new Promise((y,x)=>{if(m===s.length)return y(a(f+1));let g=s[m];ut(u+g,{pathExt:o},(P,v)=>{if(!P&&v)if(t.all)i.push(u+g);else return y(u+g);return y(l(u,f,m+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},nr=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=dt(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,u=ct.join(l,e),f=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let m=0;m<r.length;m++){let y=f+r[m];try{if(ut.sync(y,{pathExt:s}))if(t.all)o.push(y);else return y}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw lt(e)};pt.exports=ft;ft.sync=nr});var fe=d((uo,de)=>{"use strict";var ht=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};de.exports=ht;de.exports.default=ht});var St=d((lo,wt)=>{"use strict";var yt=require("path"),rr=mt(),sr=fe();function gt(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=rr.sync(e.command,{path:n[sr({env:n})],pathExt:t?yt.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=yt.resolve(s?e.options.cwd:"",i)),i}function or(e){return gt(e)||gt(e,!0)}wt.exports=or});var bt=d((fo,me)=>{"use strict";var pe=/([()\][%!^"`<>&|;, *?])/g;function ir(e){return e=e.replace(pe,"^$1"),e}function ar(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(pe,"^$1"),t&&(e=e.replace(pe,"^$1")),e}me.exports.command=ir;me.exports.argument=ar});var Pt=d((po,xt)=>{"use strict";xt.exports=/^#!(.*)/});var vt=d((mo,It)=>{"use strict";var cr=Pt();It.exports=(e="")=>{let t=e.match(cr);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var Et=d((ho,Tt)=>{"use strict";var he=require("fs"),ur=vt();function lr(e){let n=Buffer.alloc(150),r;try{r=he.openSync(e,"r"),he.readSync(r,n,0,150,0),he.closeSync(r)}catch{}return ur(n.toString())}Tt.exports=lr});var kt=d((yo,Ct)=>{"use strict";var dr=require("path"),Ot=St(),At=bt(),fr=Et(),pr=process.platform==="win32",mr=/\.(?:com|exe)$/i,hr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function yr(e){e.file=Ot(e);let t=e.file&&fr(e.file);return t?(e.args.unshift(e.file),e.command=t,Ot(e)):e.file}function gr(e){if(!pr)return e;let t=yr(e),n=!mr.test(t);if(e.options.forceShell||n){let r=hr.test(t);e.command=dr.normalize(e.command),e.command=At.command(e.command),e.args=e.args.map(o=>At.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function wr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:gr(r)}Ct.exports=wr});var Nt=d((go,Rt)=>{"use strict";var ye=process.platform==="win32";function ge(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Sr(e,t){if(!ye)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=Gt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function Gt(e,t){return ye&&e===1&&!t.file?ge(t.original,"spawn"):null}function br(e,t){return ye&&e===1&&!t.file?ge(t.original,"spawnSync"):null}Rt.exports={hookChildProcess:Sr,verifyENOENT:Gt,verifyENOENTSync:br,notFoundError:ge}});var Bt=d((wo,G)=>{"use strict";var _t=require("child_process"),we=kt(),Se=Nt();function Lt(e,t,n){let r=we(e,t,n),s=_t.spawn(r.command,r.args,r.options);return Se.hookChildProcess(s,r),s}function xr(e,t,n){let r=we(e,t,n),s=_t.spawnSync(r.command,r.args,r.options);return s.error=s.error||Se.verifyENOENTSync(s.status,r),s}G.exports=Lt;G.exports.spawn=Lt;G.exports.sync=xr;G.exports._parse=we;G.exports._enoent=Se});var Ft=d((So,qt)=>{"use strict";qt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var $t=d((bo,U)=>{"use strict";var D=require("path"),jt=fe(),Mt=e=>{e=p({cwd:process.cwd(),path:process.env[jt()],execPath:process.execPath},e);let t,n=D.resolve(e.cwd),r=[];for(;t!==n;)r.push(D.join(n,"node_modules/.bin")),t=n,n=D.resolve(n,"..");let s=D.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(D.delimiter)};U.exports=Mt;U.exports.default=Mt;U.exports.env=e=>{e=p({env:process.env},e);let t=p({},e.env),n=jt({env:t});return e.path=t[n],t[n]=U.exports(e),t}});var Ut=d((xo,be)=>{"use strict";var Dt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};be.exports=Dt;be.exports.default=Dt});var Kt=d((Po,Y)=>{"use strict";var Pr=Ut(),z=new WeakMap,Wt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(z.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Pr(o,e),z.set(o,r),o};Y.exports=Wt;Y.exports.default=Wt;Y.exports.callCount=e=>{if(!z.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return z.get(e)}});var Ht=d(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.SIGNALS=void 0;var Ir=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];J.SIGNALS=Ir});var xe=d(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.SIGRTMAX=R.getRealtimeSignals=void 0;var vr=function(){let e=Vt-Xt+1;return Array.from({length:e},Tr)};R.getRealtimeSignals=vr;var Tr=function(e,t){return{name:`SIGRT${t+1}`,number:Xt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Xt=34,Vt=64;R.SIGRTMAX=Vt});var zt=d(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.getSignals=void 0;var Er=require("os"),Or=Ht(),Ar=xe(),Cr=function(){let e=(0,Ar.getRealtimeSignals)();return[...Or.SIGNALS,...e].map(kr)};Q.getSignals=Cr;var kr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Er.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Jt=d(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.signalsByNumber=N.signalsByName=void 0;var Gr=require("os"),Yt=zt(),Rr=xe(),Nr=function(){return(0,Yt.getSignals)().reduce(_r,{})},_r=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return E(p({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},Lr=Nr();N.signalsByName=Lr;var Br=function(){let e=(0,Yt.getSignals)(),t=Rr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>qr(s,e));return Object.assign({},...n)},qr=function(e,t){let n=Fr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Fr=function(e,t){let n=t.find(({name:r})=>Gr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},jr=Br();N.signalsByNumber=jr});var Zt=d((Oo,Qt)=>{"use strict";var{signalsByName:Mr}=Jt(),$r=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",Dr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:u,killed:f,parsed:{options:{timeout:m}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let y=s===void 0?void 0:Mr[s].description,x=r&&r.code,P=`Command ${$r({timedOut:l,timeout:m,errorCode:x,signal:s,signalDescription:y,exitCode:o,isCanceled:u})}: ${i}`,v=Object.prototype.toString.call(r)==="[object Error]",w=v?`${P}
${r.message}`:P,T=[w,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=T):r=new Error(T),r.shortMessage=w,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=y,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=u,r.killed=f&&!l,r};Qt.exports=Dr});var tn=d((Ao,Pe)=>{"use strict";var Z=["stdin","stdout","stderr"],Ur=e=>Z.some(t=>e[t]!==void 0),en=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Z.map(r=>e[r]);if(Ur(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Z.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Z.length);return Array.from({length:n},(r,s)=>t[s])};Pe.exports=en;Pe.exports.node=e=>{let t=en(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var nn=d((Co,ee)=>{ee.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&ee.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&ee.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var cn=d((ko,B)=>{var h=global.process,A=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};A(h)?(rn=require("assert"),_=nn(),sn=/^win/i.test(h.platform),W=require("events"),typeof W!="function"&&(W=W.EventEmitter),h.__signal_exit_emitter__?b=h.__signal_exit_emitter__:(b=h.__signal_exit_emitter__=new W,b.count=0,b.emitted={}),b.infinite||(b.setMaxListeners(1/0),b.infinite=!0),B.exports=function(e,t){if(!!A(global.process)){rn.equal(typeof e,"function","a callback must be provided for exit handler"),L===!1&&Ie();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){b.removeListener(n,e),b.listeners("exit").length===0&&b.listeners("afterexit").length===0&&te()};return b.on(n,e),r}},te=function(){!L||!A(global.process)||(L=!1,_.forEach(function(t){try{h.removeListener(t,ne[t])}catch{}}),h.emit=re,h.reallyExit=ve,b.count-=1)},B.exports.unload=te,C=function(t,n,r){b.emitted[t]||(b.emitted[t]=!0,b.emit(t,n,r))},ne={},_.forEach(function(e){ne[e]=function(){if(!!A(global.process)){var n=h.listeners(e);n.length===b.count&&(te(),C("exit",null,e),C("afterexit",null,e),sn&&e==="SIGHUP"&&(e="SIGINT"),h.kill(h.pid,e))}}}),B.exports.signals=function(){return _},L=!1,Ie=function(){L||!A(global.process)||(L=!0,b.count+=1,_=_.filter(function(t){try{return h.on(t,ne[t]),!0}catch{return!1}}),h.emit=an,h.reallyExit=on)},B.exports.load=Ie,ve=h.reallyExit,on=function(t){!A(global.process)||(h.exitCode=t||0,C("exit",h.exitCode,null),C("afterexit",h.exitCode,null),ve.call(h,h.exitCode))},re=h.emit,an=function(t,n){if(t==="exit"&&A(global.process)){n!==void 0&&(h.exitCode=n);var r=re.apply(this,arguments);return C("exit",h.exitCode,null),C("afterexit",h.exitCode,null),r}else return re.apply(this,arguments)}):B.exports=function(){};var rn,_,sn,W,b,te,C,ne,L,Ie,ve,on,re,an});var ln=d((Go,un)=>{"use strict";var Wr=require("os"),Kr=cn(),Hr=1e3*5,Xr=(e,t="SIGTERM",n={})=>{let r=e(t);return Vr(e,t,n,r),r},Vr=(e,t,n,r)=>{if(!zr(t,n,r))return;let s=Jr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},zr=(e,{forceKillAfterTimeout:t},n)=>Yr(e)&&t!==!1&&n,Yr=e=>e===Wr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Jr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Hr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Qr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Zr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},es=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Zr(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},ts=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},ns=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Kr(()=>{e.kill()});return r.finally(()=>{s()})};un.exports={spawnedKill:Xr,spawnedCancel:Qr,setupTimeout:es,validateTimeout:ts,setExitHandler:ns}});var fn=d((Ro,dn)=>{"use strict";var O=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";O.writable=e=>O(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";O.readable=e=>O(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";O.duplex=e=>O.writable(e)&&O.readable(e);O.transform=e=>O.duplex(e)&&typeof e._transform=="function";dn.exports=O});var mn=d((No,pn)=>{"use strict";var{PassThrough:rs}=require("stream");pn.exports=e=>{e=p({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new rs({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var hn=d((_o,K)=>{"use strict";var{constants:ss}=require("buffer"),os=require("stream"),{promisify:is}=require("util"),as=mn(),cs=is(os.pipeline),Te=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Ee(e,t){if(!e)throw new Error("Expected a stream");t=p({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=as(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=ss.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await cs(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Te)})}),r.getBufferedValue()}K.exports=Ee;K.exports.buffer=(e,t)=>Ee(e,E(p({},t),{encoding:"buffer"}));K.exports.array=(e,t)=>Ee(e,E(p({},t),{array:!0}));K.exports.MaxBufferError=Te});var gn=d((Lo,yn)=>{"use strict";var{PassThrough:us}=require("stream");yn.exports=function(){var e=[],t=new us({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var xn=d((Bo,bn)=>{"use strict";var Sn=fn(),wn=hn(),ls=gn(),ds=(e,t)=>{t===void 0||e.stdin===void 0||(Sn(t)?t.pipe(e.stdin):e.stdin.end(t))},fs=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ls();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Oe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Ae=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?wn(e,{encoding:t,maxBuffer:r}):wn.buffer(e,{maxBuffer:r})},ps=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Ae(e,{encoding:r,buffer:s,maxBuffer:o}),l=Ae(t,{encoding:r,buffer:s,maxBuffer:o}),u=Ae(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,u])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},Oe(e,a),Oe(t,l),Oe(n,u)])}},ms=({input:e})=>{if(Sn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};bn.exports={handleInput:ds,makeAllStream:fs,getSpawnedResult:ps,validateInputSync:ms}});var In=d((qo,Pn)=>{"use strict";var hs=(async()=>{})().constructor.prototype,ys=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(hs,e)]),gs=(e,t)=>{for(let[n,r]of ys){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,E(p({},r),{value:s}))}return e},ws=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});Pn.exports={mergePromise:gs,getSpawnedPromise:ws}});var En=d((Fo,Tn)=>{"use strict";var vn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Ss=/^[\w.-]+$/,bs=/"/g,xs=e=>typeof e!="string"||Ss.test(e)?e:`"${e.replace(bs,'\\"')}"`,Ps=(e,t)=>vn(e,t).join(" "),Is=(e,t)=>vn(e,t).map(n=>xs(n)).join(" "),vs=/ +/g,Ts=e=>{let t=[];for(let n of e.trim().split(vs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};Tn.exports={joinCommand:Ps,getEscapedCommand:Is,parseCommand:Ts}});var Nn=d((jo,q)=>{"use strict";var Es=require("path"),Ce=require("child_process"),Os=Bt(),As=Ft(),Cs=$t(),ks=Kt(),se=Zt(),An=tn(),{spawnedKill:Gs,spawnedCancel:Rs,setupTimeout:Ns,validateTimeout:_s,setExitHandler:Ls}=ln(),{handleInput:Bs,getSpawnedResult:qs,makeAllStream:Fs,validateInputSync:js}=xn(),{mergePromise:On,getSpawnedPromise:Ms}=In(),{joinCommand:Cn,parseCommand:kn,getEscapedCommand:Gn}=En(),$s=1e3*1e3*100,Ds=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?p(p({},process.env),e):e;return n?Cs.env({env:o,cwd:r,execPath:s}):o},Rn=(e,t,n={})=>{let r=Os._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=p({maxBuffer:$s,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=Ds(n),n.stdio=An(n),process.platform==="win32"&&Es.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},H=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?As(t):t,oe=(e,t,n)=>{let r=Rn(e,t,n),s=Cn(e,t),o=Gn(e,t);_s(r.options);let i;try{i=Ce.spawn(r.file,r.args,r.options)}catch(x){let g=new Ce.ChildProcess,P=Promise.reject(se({error:x,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return On(g,P)}let a=Ms(i),l=Ns(i,r.options,a),u=Ls(i,r.options,l),f={isCanceled:!1};i.kill=Gs.bind(null,i.kill.bind(i)),i.cancel=Rs.bind(null,i,f);let y=ks(async()=>{let[{error:x,exitCode:g,signal:P,timedOut:v},w,T,ie]=await qs(i,r.options,u),Ge=H(r.options,w),Re=H(r.options,T),Ne=H(r.options,ie);if(x||g!==0||P!==null){let _e=se({error:x,exitCode:g,signal:P,stdout:Ge,stderr:Re,all:Ne,command:s,escapedCommand:o,parsed:r,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!r.options.reject)return _e;throw _e}return{command:s,escapedCommand:o,exitCode:0,stdout:Ge,stderr:Re,all:Ne,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Bs(i,r.options.input),i.all=Fs(i,r.options),On(i,y)};q.exports=oe;q.exports.sync=(e,t,n)=>{let r=Rn(e,t,n),s=Cn(e,t),o=Gn(e,t);js(r.options);let i;try{i=Ce.spawnSync(r.file,r.args,r.options)}catch(u){throw se({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=H(r.options,i.stdout,i.error),l=H(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=se({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=kn(e);return oe(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=kn(e);return oe.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=An.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return oe(o,[...i,e,...Array.isArray(t)?t:[]],E(p({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var zs={};Xn(zs,{default:()=>jn});var c=require("@raycast/api"),F=ae(require("react")),Fn=ae($e());var De=require("@raycast/api"),Ue=require("url");function ue(e){return"```\n"+e+"\n```"}function M(e){if(!e)return e;let t={};for(let n in e)Object.hasOwnProperty.call(e,n)&&(e[n]??!1)&&(t[n]=e[n]);return t}function We(e){try{return`https://icons.bitwarden.net/${new Ue.URL(e).hostname}/icon.png`}catch{return De.Icon.Globe}}function Ke(e){return e.charAt(0).toUpperCase()+e.slice(1)}function He(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}var I=require("@raycast/api"),$=require("react");var X="sessionToken";async function zn(e){try{let t=await(0,I.showToast)(I.Toast.Style.Animated,"Logging in...","It may take some time");await e.login(),t.hide()}catch{(0,I.showToast)(I.Toast.Style.Failure,"An error occurred during login!","Please check your credentials")}}function Xe(e){let[t,n]=(0,$.useState)({});return(0,$.useEffect)(()=>{async function r(){let s=await I.LocalStorage.getItem(X);switch(await e.status(s)){case"unlocked":n({sessionToken:s,vaultStatus:"unlocked"});break;case"locked":n({vaultStatus:"locked"});break;case"unauthenticated":await zn(e),n({vaultStatus:"locked"})}}r()},[]),[t,async r=>{r?(await I.LocalStorage.setItem(X,r),n({sessionToken:r,vaultStatus:"unlocked"})):(await I.LocalStorage.removeItem(X),n({vaultStatus:"locked"}))}]}var S=require("@raycast/api");function Ve(){return(0,S.showToast)(S.Toast.Style.Failure,"Bitwarden CLI not found"),_jsx(S.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:_jsx(S.ActionPanel,null,_jsx(S.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}))})}function ze(e){async function t(n){try{let r=await(0,S.showToast)(S.Toast.Style.Animated,"Unlocking Vault...","Please wait"),s=await e.bitwardenApi.unlock(n.password);r.hide(),e.setSessionToken(s)}catch{(0,S.showToast)(S.Toast.Style.Failure,"Failed to unlock vault","Invalid credentials")}}return _jsx(S.Form,{actions:_jsx(S.ActionPanel,null,_jsx(S.Action.SubmitForm,{title:"Unlock",onSubmit:t,shortcut:{key:"enter",modifiers:[]}}))},_jsx(S.Form.PasswordField,{id:"password",title:"Master Password"}))}var _n=require("@raycast/api"),Ln=ae(Nn()),Bn=require("fs"),qn=require("path/posix");var ke=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r}=(0,_n.getPreferenceValues)();if(t?this.cliPath=t:this.cliPath=process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw",!(0,Bn.existsSync)(this.cliPath))throw Error(`Invalid Cli Path: ${this.cliPath}`);this.env={BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,qn.dirname)(process.execPath)}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async listItems(t,n){let{stdout:r}=await this.exec(["list",t,"--session",n]);return JSON.parse(r)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(t){let{stdout:n}=await this.exec(t?["status","--session",t]:["status"]);return JSON.parse(n).status}async generatePassword(t){let n=t?He(t):[],{stdout:r}=await this.exec(["generate",...n]);return r}async exec(t){return(0,Ln.default)(this.cliPath,t,{env:this.env})}};var{fetchFavicons:Us,primaryAction:Ws}=(0,c.getPreferenceValues)();function jn(){try{let e=new ke,[t,n]=Xe(e);return t.vaultStatus==="locked"?_jsx(ze,{setSessionToken:n,bitwardenApi:e}):_jsx(Ks,{bitwardenApi:e,sessionToken:t.sessionToken,vaultStatus:t.vaultStatus})}catch{return _jsx(Ve,null)}}function Ks(e){let{bitwardenApi:t,sessionToken:n,vaultStatus:r}=e,[s,o]=(0,F.useState)();async function i(u){try{let f=await t.listItems("items",u);o(f)}catch{(0,c.showToast)(c.Toast.Style.Failure,"Failed to search vault")}}async function a(u,f){if(u){let m=await t.getTotp(f,u);c.Clipboard.copy(m),(0,c.closeMainWindow)({clearRootSearch:!0})}else(0,c.showToast)(c.Toast.Style.Failure,"Failed to fetch TOTP.")}(0,F.useEffect)(()=>{r==="unlocked"&&n&&i(n)},[n]);async function l(){if(n){let u=await(0,c.showToast)(c.Toast.Style.Animated,"Syncing Items...");await t.sync(n),await i(n),await u.hide()}}return _jsx(c.List,{isLoading:typeof s>"u"},s?s.sort((u,f)=>u.favorite&&f.favorite?0:u.favorite?-1:1).map(u=>_jsx(Xs,{key:u.id,item:u,refreshItems:l,sessionToken:n,copyTotp:a})):null)}function Hs(e){let t=e.login?.uris?.[0]?.uri;return Us&&t?We(t):{1:c.Icon.Globe,2:c.Icon.TextDocument,3:c.Icon.List,4:c.Icon.Person}[e.type]}function Xs(e){let{item:t,refreshItems:n,sessionToken:r,copyTotp:s}=e,{name:o,notes:i,identity:a,login:l,secureNote:u,fields:f,passwordHistory:m,card:y}=t,x=Object.fromEntries(f?.map(w=>[w.name,w.value])||[]),g=Object.fromEntries(l?.uris?.filter(w=>w.uri).map((w,T)=>[`uri${T+1}`,w.uri])||[]),P=M({name:o,notes:i,identity:M(a),login:M(l),card:M(y),secureNote:u,fields:f,passwordHistory:m}),v=Fn.default.asTree(P,!0,!1);return _jsx(c.List.Item,{id:t.id,title:t.name,keywords:t.name.split(/\W/),accessoryIcon:t.favorite?{source:c.Icon.Star,tintColor:c.Color.Yellow}:void 0,icon:Hs(t),subtitle:t.login?.username||void 0,actions:_jsx(c.ActionPanel,null,t.login?.password?_jsx(Vs,{password:t.login.password}):null,t.login?.totp?_jsx(c.ActionPanel.Item,{shortcut:{modifiers:["cmd"],key:"t"},title:"Copy TOTP",icon:c.Icon.Clipboard,onAction:()=>s(r,t.id)}):null,t.notes?_jsx(c.Action.Push,{title:"Show Secure Note",icon:c.Icon.TextDocument,target:_jsx(c.Detail,{markdown:ue(t.notes),actions:_jsx(c.ActionPanel,null,_jsx(c.Action.CopyToClipboard,{title:"Copy Secure Notes",content:t.notes}))})}):null,_jsx(c.ActionPanel.Submenu,{shortcut:{modifiers:["cmd","shift"],key:"c"},icon:c.Icon.Clipboard,title:"Copy Property"},Object.entries(p(p(p(p({username:l?.username,notes:i},y),a),x),g)).map(([w,T],ie)=>T?_jsx(c.Action.CopyToClipboard,{key:ie,title:Ke(w),content:T}):null)),_jsx(c.Action.Push,{title:"Show Details",icon:c.Icon.Text,shortcut:{modifiers:["cmd"],key:"i"},target:_jsx(c.Detail,{markdown:ue(v),actions:_jsx(c.ActionPanel,null,_jsx(c.Action.CopyToClipboard,{content:v}))})}),_jsx(c.Action,{title:"Refresh Items",shortcut:{modifiers:["cmd"],key:"r"},icon:c.Icon.ArrowClockwise,onAction:n}))})}function Vs(e){let t=_jsx(c.Action.CopyToClipboard,{key:"copy",title:"Copy Password",content:e.password}),n=_jsx(c.Action.Paste,{key:"paste",title:"Paste Password",content:e.password});return _jsx(F.default.Fragment,null,Ws=="copy"?[t,n]:[n,t])}module.exports=Vn(zs);0&&(module.exports={});
