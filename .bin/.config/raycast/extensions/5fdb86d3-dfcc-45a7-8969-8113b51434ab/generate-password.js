var Rn=Object.create;var F=Object.defineProperty,kn=Object.defineProperties,_n=Object.getOwnPropertyDescriptor,Ln=Object.getOwnPropertyDescriptors,qn=Object.getOwnPropertyNames,Ce=Object.getOwnPropertySymbols,Fn=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable;var Ne=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&Ne(e,n,t[n]);if(Ce)for(var n of Ce(t))Bn.call(t,n)&&Ne(e,n,t[n]);return e},b=(e,t)=>kn(e,Ln(t)),ke=e=>F(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),jn=(e,t)=>{for(var n in t)F(e,n,{get:t[n],enumerable:!0})},_e=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qn(t))!Re.call(e,s)&&(n||s!=="default")&&F(e,s,{get:()=>t[s],enumerable:!(r=_n(t,s))||r.enumerable});return e},Dn=(e,t)=>_e(ke(F(e!=null?Rn(Fn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),$n=(e=>(t,n)=>e&&e.get(t)||(n=_e(ke({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Ue=c((Ys,Me)=>{Me.exports=$e;$e.sync=Kn;var je=require("fs");function Wn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function De(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Wn(t,n)}function $e(e,t,n){je.stat(e,function(r,s){n(r,r?!1:De(s,e,t))})}function Kn(e,t){return De(je.statSync(e),e,t)}});var Xe=c((Js,Ve)=>{Ve.exports=Ke;Ke.sync=Hn;var We=require("fs");function Ke(e,t,n){We.stat(e,function(r,s){n(r,r?!1:He(s,t))})}function Hn(e,t){return He(We.statSync(e),t)}function He(e,t){return e.isFile()&&Vn(e,t)}function Vn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),u=parseInt("001",8),h=a|l,d=n&u||n&l&&s===i||n&a&&r===o||n&h&&o===0;return d}});var Ye=c((Zs,ze)=>{var Qs=require("fs"),K;process.platform==="win32"||global.TESTING_WINDOWS?K=Ue():K=Xe();ze.exports=se;se.sync=Xn;function se(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){se(e,t||{},function(o,i){o?s(o):r(i)})})}K(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Xn(e,t){try{return K.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var rt=c((eo,nt)=>{var A=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Je=require("path"),zn=A?";":":",Qe=Ye(),Ze=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),et=(e,t)=>{let n=t.colon||zn,r=e.match(/\//)||A&&e.match(/\\/)?[""]:[...A?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=A?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=A?s.split(n):[""];return A&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},tt=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=et(e,t),i=[],a=u=>new Promise((h,d)=>{if(u===r.length)return t.all&&i.length?h(i):d(Ze(e));let f=r[u],y=/^".*"$/.test(f)?f.slice(1,-1):f,S=Je.join(y,e),x=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;h(l(x,u,0))}),l=(u,h,d)=>new Promise((f,y)=>{if(d===s.length)return f(a(h+1));let S=s[d];Qe(u+S,{pathExt:o},(x,E)=>{if(!x&&E)if(t.all)i.push(u+S);else return f(u+S);return f(l(u,h,d+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Yn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=et(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,u=Je.join(l,e),h=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let d=0;d<r.length;d++){let f=h+r[d];try{if(Qe.sync(f,{pathExt:s}))if(t.all)o.push(f);else return f}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Ze(e)};nt.exports=tt;tt.sync=Yn});var ie=c((to,oe)=>{"use strict";var st=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};oe.exports=st;oe.exports.default=st});var ct=c((no,at)=>{"use strict";var ot=require("path"),Jn=rt(),Qn=ie();function it(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Jn.sync(e.command,{path:n[Qn({env:n})],pathExt:t?ot.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=ot.resolve(s?e.options.cwd:"",i)),i}function Zn(e){return it(e)||it(e,!0)}at.exports=Zn});var ut=c((ro,ce)=>{"use strict";var ae=/([()\][%!^"`<>&|;, *?])/g;function er(e){return e=e.replace(ae,"^$1"),e}function tr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ae,"^$1"),t&&(e=e.replace(ae,"^$1")),e}ce.exports.command=er;ce.exports.argument=tr});var dt=c((so,lt)=>{"use strict";lt.exports=/^#!(.*)/});var ft=c((oo,pt)=>{"use strict";var nr=dt();pt.exports=(e="")=>{let t=e.match(nr);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var ht=c((io,mt)=>{"use strict";var ue=require("fs"),rr=ft();function sr(e){let n=Buffer.alloc(150),r;try{r=ue.openSync(e,"r"),ue.readSync(r,n,0,150,0),ue.closeSync(r)}catch{}return rr(n.toString())}mt.exports=sr});var St=c((ao,yt)=>{"use strict";var or=require("path"),gt=ct(),wt=ut(),ir=ht(),ar=process.platform==="win32",cr=/\.(?:com|exe)$/i,ur=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function lr(e){e.file=gt(e);let t=e.file&&ir(e.file);return t?(e.args.unshift(e.file),e.command=t,gt(e)):e.file}function dr(e){if(!ar)return e;let t=lr(e),n=!cr.test(t);if(e.options.forceShell||n){let r=ur.test(t);e.command=or.normalize(e.command),e.command=wt.command(e.command),e.args=e.args.map(o=>wt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function pr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:dr(r)}yt.exports=pr});var Pt=c((co,bt)=>{"use strict";var le=process.platform==="win32";function de(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function fr(e,t){if(!le)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=xt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function xt(e,t){return le&&e===1&&!t.file?de(t.original,"spawn"):null}function mr(e,t){return le&&e===1&&!t.file?de(t.original,"spawnSync"):null}bt.exports={hookChildProcess:fr,verifyENOENT:xt,verifyENOENTSync:mr,notFoundError:de}});var vt=c((uo,C)=>{"use strict";var Ot=require("child_process"),pe=St(),fe=Pt();function Et(e,t,n){let r=pe(e,t,n),s=Ot.spawn(r.command,r.args,r.options);return fe.hookChildProcess(s,r),s}function hr(e,t,n){let r=pe(e,t,n),s=Ot.spawnSync(r.command,r.args,r.options);return s.error=s.error||fe.verifyENOENTSync(s.status,r),s}C.exports=Et;C.exports.spawn=Et;C.exports.sync=hr;C.exports._parse=pe;C.exports._enoent=fe});var Tt=c((lo,It)=>{"use strict";It.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Ct=c((po,j)=>{"use strict";var B=require("path"),Gt=ie(),At=e=>{e=m({cwd:process.cwd(),path:process.env[Gt()],execPath:process.execPath},e);let t,n=B.resolve(e.cwd),r=[];for(;t!==n;)r.push(B.join(n,"node_modules/.bin")),t=n,n=B.resolve(n,"..");let s=B.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(B.delimiter)};j.exports=At;j.exports.default=At;j.exports.env=e=>{e=m({env:process.env},e);let t=m({},e.env),n=Gt({env:t});return e.path=t[n],t[n]=j.exports(e),t}});var Rt=c((fo,me)=>{"use strict";var Nt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};me.exports=Nt;me.exports.default=Nt});var _t=c((mo,V)=>{"use strict";var gr=Rt(),H=new WeakMap,kt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(H.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return gr(o,e),H.set(o,r),o};V.exports=kt;V.exports.default=kt;V.exports.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)}});var Lt=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var wr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=wr});var he=c(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.SIGRTMAX=N.getRealtimeSignals=void 0;var yr=function(){let e=Ft-qt+1;return Array.from({length:e},Sr)};N.getRealtimeSignals=yr;var Sr=function(e,t){return{name:`SIGRT${t+1}`,number:qt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},qt=34,Ft=64;N.SIGRTMAX=Ft});var Bt=c(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.getSignals=void 0;var xr=require("os"),br=Lt(),Pr=he(),Or=function(){let e=(0,Pr.getRealtimeSignals)();return[...br.SIGNALS,...e].map(Er)};z.getSignals=Or;var Er=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=xr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Dt=c(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.signalsByNumber=R.signalsByName=void 0;var vr=require("os"),jt=Bt(),Ir=he(),Tr=function(){return(0,jt.getSignals)().reduce(Gr,{})},Gr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return b(m({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},Ar=Tr();R.signalsByName=Ar;var Cr=function(){let e=(0,jt.getSignals)(),t=Ir.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>Nr(s,e));return Object.assign({},...n)},Nr=function(e,t){let n=Rr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Rr=function(e,t){let n=t.find(({name:r})=>vr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},kr=Cr();R.signalsByNumber=kr});var Mt=c((So,$t)=>{"use strict";var{signalsByName:_r}=Dt(),Lr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",qr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:u,killed:h,parsed:{options:{timeout:d}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let f=s===void 0?void 0:_r[s].description,y=r&&r.code,x=`Command ${Lr({timedOut:l,timeout:d,errorCode:y,signal:s,signalDescription:f,exitCode:o,isCanceled:u})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",U=E?`${x}
${r.message}`:x,W=[U,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=W):r=new Error(W),r.shortMessage=U,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=f,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=u,r.killed=h&&!l,r};$t.exports=qr});var Wt=c((xo,ge)=>{"use strict";var Y=["stdin","stdout","stderr"],Fr=e=>Y.some(t=>e[t]!==void 0),Ut=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Y.map(r=>e[r]);if(Fr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Y.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Y.length);return Array.from({length:n},(r,s)=>t[s])};ge.exports=Ut;ge.exports.node=e=>{let t=Ut(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Kt=c((bo,J)=>{J.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&J.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&J.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Yt=c((Po,L)=>{var g=global.process,T=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};T(g)?(Ht=require("assert"),k=Kt(),Vt=/^win/i.test(g.platform),D=require("events"),typeof D!="function"&&(D=D.EventEmitter),g.__signal_exit_emitter__?w=g.__signal_exit_emitter__:(w=g.__signal_exit_emitter__=new D,w.count=0,w.emitted={}),w.infinite||(w.setMaxListeners(1/0),w.infinite=!0),L.exports=function(e,t){if(!!T(global.process)){Ht.equal(typeof e,"function","a callback must be provided for exit handler"),_===!1&&we();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){w.removeListener(n,e),w.listeners("exit").length===0&&w.listeners("afterexit").length===0&&Q()};return w.on(n,e),r}},Q=function(){!_||!T(global.process)||(_=!1,k.forEach(function(t){try{g.removeListener(t,Z[t])}catch{}}),g.emit=ee,g.reallyExit=ye,w.count-=1)},L.exports.unload=Q,G=function(t,n,r){w.emitted[t]||(w.emitted[t]=!0,w.emit(t,n,r))},Z={},k.forEach(function(e){Z[e]=function(){if(!!T(global.process)){var n=g.listeners(e);n.length===w.count&&(Q(),G("exit",null,e),G("afterexit",null,e),Vt&&e==="SIGHUP"&&(e="SIGINT"),g.kill(g.pid,e))}}}),L.exports.signals=function(){return k},_=!1,we=function(){_||!T(global.process)||(_=!0,w.count+=1,k=k.filter(function(t){try{return g.on(t,Z[t]),!0}catch{return!1}}),g.emit=zt,g.reallyExit=Xt)},L.exports.load=we,ye=g.reallyExit,Xt=function(t){!T(global.process)||(g.exitCode=t||0,G("exit",g.exitCode,null),G("afterexit",g.exitCode,null),ye.call(g,g.exitCode))},ee=g.emit,zt=function(t,n){if(t==="exit"&&T(global.process)){n!==void 0&&(g.exitCode=n);var r=ee.apply(this,arguments);return G("exit",g.exitCode,null),G("afterexit",g.exitCode,null),r}else return ee.apply(this,arguments)}):L.exports=function(){};var Ht,k,Vt,D,w,Q,G,Z,_,we,ye,Xt,ee,zt});var Qt=c((Oo,Jt)=>{"use strict";var Br=require("os"),jr=Yt(),Dr=1e3*5,$r=(e,t="SIGTERM",n={})=>{let r=e(t);return Mr(e,t,n,r),r},Mr=(e,t,n,r)=>{if(!Ur(t,n,r))return;let s=Kr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Ur=(e,{forceKillAfterTimeout:t},n)=>Wr(e)&&t!==!1&&n,Wr=e=>e===Br.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Kr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Dr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Hr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Vr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Xr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Vr(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},zr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Yr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=jr(()=>{e.kill()});return r.finally(()=>{s()})};Jt.exports={spawnedKill:$r,spawnedCancel:Hr,setupTimeout:Xr,validateTimeout:zr,setExitHandler:Yr}});var en=c((Eo,Zt)=>{"use strict";var O=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";O.writable=e=>O(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";O.readable=e=>O(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";O.duplex=e=>O.writable(e)&&O.readable(e);O.transform=e=>O.duplex(e)&&typeof e._transform=="function";Zt.exports=O});var nn=c((vo,tn)=>{"use strict";var{PassThrough:Jr}=require("stream");tn.exports=e=>{e=m({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Jr({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var rn=c((Io,$)=>{"use strict";var{constants:Qr}=require("buffer"),Zr=require("stream"),{promisify:es}=require("util"),ts=nn(),ns=es(Zr.pipeline),Se=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function xe(e,t){if(!e)throw new Error("Expected a stream");t=m({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=ts(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Qr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await ns(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Se)})}),r.getBufferedValue()}$.exports=xe;$.exports.buffer=(e,t)=>xe(e,b(m({},t),{encoding:"buffer"}));$.exports.array=(e,t)=>xe(e,b(m({},t),{array:!0}));$.exports.MaxBufferError=Se});var on=c((To,sn)=>{"use strict";var{PassThrough:rs}=require("stream");sn.exports=function(){var e=[],t=new rs({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var ln=c((Go,un)=>{"use strict";var cn=en(),an=rn(),ss=on(),os=(e,t)=>{t===void 0||e.stdin===void 0||(cn(t)?t.pipe(e.stdin):e.stdin.end(t))},is=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ss();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},be=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Pe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?an(e,{encoding:t,maxBuffer:r}):an.buffer(e,{maxBuffer:r})},as=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Pe(e,{encoding:r,buffer:s,maxBuffer:o}),l=Pe(t,{encoding:r,buffer:s,maxBuffer:o}),u=Pe(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,u])}catch(h){return Promise.all([{error:h,signal:h.signal,timedOut:h.timedOut},be(e,a),be(t,l),be(n,u)])}},cs=({input:e})=>{if(cn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};un.exports={handleInput:os,makeAllStream:is,getSpawnedResult:as,validateInputSync:cs}});var pn=c((Ao,dn)=>{"use strict";var us=(async()=>{})().constructor.prototype,ls=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(us,e)]),ds=(e,t)=>{for(let[n,r]of ls){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,b(m({},r),{value:s}))}return e},ps=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});dn.exports={mergePromise:ds,getSpawnedPromise:ps}});var hn=c((Co,mn)=>{"use strict";var fn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],fs=/^[\w.-]+$/,ms=/"/g,hs=e=>typeof e!="string"||fs.test(e)?e:`"${e.replace(ms,'\\"')}"`,gs=(e,t)=>fn(e,t).join(" "),ws=(e,t)=>fn(e,t).map(n=>hs(n)).join(" "),ys=/ +/g,Ss=e=>{let t=[];for(let n of e.trim().split(ys)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};mn.exports={joinCommand:gs,getEscapedCommand:ws,parseCommand:Ss}});var Pn=c((No,q)=>{"use strict";var xs=require("path"),Oe=require("child_process"),bs=vt(),Ps=Tt(),Os=Ct(),Es=_t(),te=Mt(),wn=Wt(),{spawnedKill:vs,spawnedCancel:Is,setupTimeout:Ts,validateTimeout:Gs,setExitHandler:As}=Qt(),{handleInput:Cs,getSpawnedResult:Ns,makeAllStream:Rs,validateInputSync:ks}=ln(),{mergePromise:gn,getSpawnedPromise:_s}=pn(),{joinCommand:yn,parseCommand:Sn,getEscapedCommand:xn}=hn(),Ls=1e3*1e3*100,qs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?m(m({},process.env),e):e;return n?Os.env({env:o,cwd:r,execPath:s}):o},bn=(e,t,n={})=>{let r=bs._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=m({maxBuffer:Ls,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=qs(n),n.stdio=wn(n),process.platform==="win32"&&xs.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},M=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Ps(t):t,ne=(e,t,n)=>{let r=bn(e,t,n),s=yn(e,t),o=xn(e,t);Gs(r.options);let i;try{i=Oe.spawn(r.file,r.args,r.options)}catch(y){let S=new Oe.ChildProcess,x=Promise.reject(te({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return gn(S,x)}let a=_s(i),l=Ts(i,r.options,a),u=As(i,r.options,l),h={isCanceled:!1};i.kill=vs.bind(null,i.kill.bind(i)),i.cancel=Is.bind(null,i,h);let f=Es(async()=>{let[{error:y,exitCode:S,signal:x,timedOut:E},U,W,Nn]=await Ns(i,r.options,u),Ie=M(r.options,U),Te=M(r.options,W),Ge=M(r.options,Nn);if(y||S!==0||x!==null){let Ae=te({error:y,exitCode:S,signal:x,stdout:Ie,stderr:Te,all:Ge,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:h.isCanceled,killed:i.killed});if(!r.options.reject)return Ae;throw Ae}return{command:s,escapedCommand:o,exitCode:0,stdout:Ie,stderr:Te,all:Ge,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Cs(i,r.options.input),i.all=Rs(i,r.options),gn(i,f)};q.exports=ne;q.exports.sync=(e,t,n)=>{let r=bn(e,t,n),s=yn(e,t),o=xn(e,t);ks(r.options);let i;try{i=Oe.spawnSync(r.file,r.args,r.options)}catch(u){throw te({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=M(r.options,i.stdout,i.error),l=M(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=te({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=Sn(e);return ne(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=Sn(e);return ne.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=wn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return ne(o,[...i,e,...Array.isArray(t)?t:[]],b(m({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Ws={};jn(Ws,{default:()=>Us});var p=require("@raycast/api");var P=require("@raycast/api"),v=require("react");var Le={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1},I={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted"},re={password:{length:{label:"Length of the password",hint:"5 - 128",type:"number",errorMessage:"Field must be a number between 5 and 128"},uppercase:{label:"Uppercase characters",hint:"ABCDEFGHIJLMNOPQRSTUVWXYZ",type:"boolean"},lowercase:{label:"Lowercase characters",hint:"abcdefghijklmnopqrstuvwxyz",type:"boolean"},number:{label:"Numeric characters",hint:"0123456789",type:"boolean"},special:{label:"Special characters",hint:"!@#$%^&*()_+-=[]{}|;:,./<>?",type:"boolean"}},passphrase:{words:{label:"Number of words",hint:"3 - 20",type:"number",errorMessage:"Field must be a number between 3 and 20"},separator:{label:"Word separator",hint:"this-is-a-passphrase",type:"string",errorMessage:"Field must be a single character"},capitalize:{label:"Capitalise",hint:"This-Is-A-Passphrase",type:"boolean"},includeNumber:{label:"Include number",hint:"This2-Is-A-Passphrase",type:"boolean"}}};var Mn={password:void 0,isGenerating:!1},Un=(e,t)=>{switch(t.type){case"generate":return b(m({},e),{isGenerating:!0});case"setPassword":return{password:t.password,isGenerating:!1};case"fail":return b(m({},e),{isGenerating:!1});case"clear":return{isGenerating:!1,password:void 0}}};function qe(e,t,n){let{regenerateOnOptionChange:r=!0}=n??{},[s,o]=(0,v.useReducer)(Un,Mn),i=async()=>{try{if(s.isGenerating)return;o({type:"generate"});let a=await e.generatePassword(t);o({type:"setPassword",password:a})}catch{o({type:"fail"})}};return(0,v.useEffect)(()=>{!r||!t||i()},[t]),b(m({},s),{regeneratePassword:i})}var Fe=()=>{let[e,t]=(0,v.useState)(),n=async(s,o)=>{if(!e||e[s]===o)return;let i=b(m({},e),{[s]:o});t(i),await P.LocalStorage.setItem(I.PASSWORD_OPTIONS,JSON.stringify(i))},r=async()=>{let s=await P.LocalStorage.getItem(I.PASSWORD_OPTIONS),o=m(m({},Le),s?JSON.parse(s):{});t(o)};return(0,v.useEffect)(()=>{r()},[]),{options:e,setOption:n}},Be=async()=>{let e=()=>(0,P.popToRoot)({clearSearchBar:!1}),t=()=>P.LocalStorage.setItem(I.PASSWORD_ONE_TIME_WARNING,!0),n=async()=>{await P.LocalStorage.getItem(I.PASSWORD_ONE_TIME_WARNING)||await(0,P.confirmAlert)({title:"Warning",message:"Password history is not available yet, so make sure to store the password after generating it!",icon:P.Icon.ExclamationMark,dismissAction:{title:"Go back",onAction:e},primaryAction:{title:"I understand",onAction:t}})};(0,v.useEffect)(()=>{n()},[])};var vn=require("@raycast/api"),In=Dn(Pn()),Tn=require("fs"),Gn=require("path/posix");var Fs=require("@raycast/api");var Ee=e=>Object.entries(e);function On(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}var En=e=>e.charAt(0).toUpperCase()+e.slice(1);var ve=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r}=(0,vn.getPreferenceValues)();if(t?this.cliPath=t:this.cliPath=process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw",!(0,Tn.existsSync)(this.cliPath))throw Error(`Invalid Cli Path: ${this.cliPath}`);this.env={BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,Gn.dirname)(process.execPath)}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async listItems(t,n){let{stdout:r}=await this.exec(["list",t,"--session",n]);return JSON.parse(r)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(t){let{stdout:n}=await this.exec(t?["status","--session",t]:["status"]);return JSON.parse(n).status}async generatePassword(t){let n=t?On(t):[],{stdout:r}=await this.exec(["generate",...n]);return r}async exec(t){return(0,In.default)(this.cliPath,t,{env:this.env})}};function An(e,t,n,r){var s,o=!1,i=0;function a(){s&&clearTimeout(s)}function l(){a(),o=!0}typeof t!="boolean"&&(r=n,n=t,t=void 0);function u(){for(var h=arguments.length,d=new Array(h),f=0;f<h;f++)d[f]=arguments[f];var y=this,S=Date.now()-i;if(o)return;function x(){i=Date.now(),n.apply(y,d)}function E(){s=void 0}r&&!s&&x(),a(),r===void 0&&S>e?x():t!==!0&&(s=setTimeout(r?E:x,r===void 0?e-S:e))}return u.cancel=l,u}function Cn(e,t,n){return n===void 0?An(e,t,!1):An(e,n,t!==!1)}var Bs=()=>_jsx(p.Form.Description,{text:""}),js=()=>{let e=new ve,{options:t,setOption:n}=Fe(),{password:r,regeneratePassword:s,isGenerating:o}=qe(e,t);if(Be(),!t)return _jsx(p.Detail,{isLoading:!0});let i=Cn(1e3,p.showToast),a=()=>s(),l=d=>{n("passphrase",d==="passphrase")},u=(d,f)=>async y=>{if($s(d,y)){i.cancel(),n(d,y);return}f&&i(p.Toast.Style.Failure,f)},h=t?.passphrase?"passphrase":"password";return _jsx(p.Form,{isLoading:o,actions:_jsx(p.ActionPanel,null,!!r&&_jsx(_jsxFragment,null,_jsx(p.Action.CopyToClipboard,{title:"Copy password",icon:p.Icon.Clipboard,content:r,shortcut:{key:"enter",modifiers:["cmd"]}}),_jsx(p.Action.Paste,{title:"Paste password to active app",icon:p.Icon.Text,content:r,shortcut:{key:"enter",modifiers:["cmd","shift"]}})),_jsx(p.Action,{title:"Regenerate password",icon:p.Icon.ArrowClockwise,onAction:a,shortcut:{key:"backspace",modifiers:["cmd"]}}),process.env.NODE_ENV==="development"&&_jsx(p.Action,{title:"Clear storage",icon:p.Icon.Trash,onAction:Ds}))},_jsx(p.Form.Description,{title:"\u{1F511}  Password",text:r??"Generating..."}),_jsx(Bs,null),_jsx(p.Form.Separator,null),_jsx(p.Form.Dropdown,{id:"type",title:"Type",value:h,onChange:l,defaultValue:"password"},Ee(re).map(([d])=>_jsx(p.Form.Dropdown.Item,{key:d,value:d,title:En(d)}))),Ee(re[h]).map(([d,f])=>_jsx(Ms,{key:d,option:d,field:f,currentOptions:t,handleFieldChange:u(d,f.errorMessage)})))};async function Ds(){for(let e of Object.values(I))await p.LocalStorage.removeItem(e)}function $s(e,t){return e==="length"?!isNaN(Number(t))&&Number(t)>=5&&Number(t)<=128:e==="separator"?t.length===1:e==="words"?!isNaN(Number(t))&&Number(t)>=3&&Number(t)<=20:!0}function Ms({option:e,currentOptions:t,handleFieldChange:n,field:r}){let{hint:s="",label:o,type:i}=r;return i==="boolean"?_jsx(p.Form.Checkbox,{key:e,id:e,title:o,label:s,value:Boolean(t?.[e]),onChange:n}):_jsx(p.Form.TextField,{key:e,id:e,title:o,placeholder:s,value:String(t?.[e]??""),onChange:n})}var Us=js;module.exports=$n(Ws);0&&(module.exports={});
