var F=Object.create;var x=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var d=t=>x(t,"__esModule",{value:!0});var I=(t,e)=>{for(var o in e)x(t,o,{get:e[o],enumerable:!0})},g=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of $(e))!B.call(t,n)&&(o||n!=="default")&&x(t,n,{get:()=>e[n],enumerable:!(s=S(e,n))||s.enumerable});return t},L=(t,e)=>g(d(x(t!=null?F(T(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),v=(t=>(e,o)=>t&&t.get(e)||(o=g(d({}),e,1),t&&t.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var G={};I(G,{default:()=>D});var r=require("@raycast/api");var a=require("@raycast/api"),i=require("react");var P=require("child_process"),k=L(require("util"));var p=t=>t.split(`
`).filter(Boolean);var w=require("@raycast/api"),m=require("fs"),b=t=>{let e=(0,w.getPreferenceValues)();if(e.kubectxPath)return e.kubectxPath;let o=[`/usr/local/bin/${t}`,`/opt/homebrew/bin/${t}`],s=t;return o.some(n=>{try{return(0,m.accessSync)(n,m.constants.X_OK),s=n,!0}catch{return!1}}),s};var f=k.default.promisify(P.execFile),h=b("kubectx"),E=async()=>{let{stdout:t}=await f(`${h}`,["-c"]);return p(t)[0]},K=async()=>{let{stdout:t}=await f(`${h}`);return p(t)},O=async t=>{await f(`${h}`,[t])},C={getAllContextes:K,getCurrentContext:E,switchContext:O};var R=()=>{let[t,e]=(0,i.useState)(!0),[o,s]=(0,i.useState)([]),[n,u]=(0,i.useState)(),c=async()=>{try{let l=await C.getAllContextes(),y=await C.getCurrentContext();s(l),u(y)}catch{(0,a.showToast)(a.ToastStyle.Failure,"An error occurred","Please make sure you have installed kubectx correctly")}finally{e(!1)}};return(0,i.useEffect)(()=>{c()},[]),{loading:t,contextes:o,currentContext:n,switchContext:async l=>{try{await C.switchContext(l),u(l),await(0,a.closeMainWindow)()}catch{(0,a.showToast)(a.ToastStyle.Failure,"An error occurred")}}}},A=R;var _=()=>{let{contextes:t,switchContext:e,currentContext:o,loading:s}=A(),n=c=>c!==o?{source:r.Icon.Checkmark}:{source:r.Icon.Checkmark,tintColor:r.Color.Green},u=async c=>{await e(c)};return _jsx(r.List,{isLoading:s,searchBarPlaceholder:"Filter by title..."},t.map(c=>_jsx(r.List.Item,{key:c,title:c,icon:n(c),actions:_jsx(r.ActionPanel,null,_jsx(r.ActionPanel.Item,{title:`Switch to ${c}`,icon:r.Icon.Checkmark,onAction:()=>u(c)}),_jsx(r.CopyToClipboardAction,{content:c}))})))},D=_;module.exports=v(G);0&&(module.exports={});
