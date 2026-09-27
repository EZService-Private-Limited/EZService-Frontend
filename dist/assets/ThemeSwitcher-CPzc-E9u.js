import{c as i,j as e,l as c,r as d,aq as l,ar as m,as as g,a5 as h}from"./index-DcNg7pXR.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],p=i("monitor",x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],b=i("moon",f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],y=i("sun",u),N=({title:r,description:n,buttonText:a,status:s,onClose:o,cancel:t})=>(console.log(s),e.jsx("div",{className:`w-full h-full left-0 fixed top-0 z-100 bg-white/30 flex items-center ${s?"block":"hidden"}`,children:e.jsxs("div",{className:"mx-auto bg-gray-100 p-5 sm:px-10 sm:py-7 shadow-md",children:[e.jsx("h2",{className:"text-xl font-semibold",children:r}),e.jsx("p",{className:"text-gray-800",children:n}),e.jsx("button",{onClick:o,className:"px-5 border py-1 text-lg mt-5 rounded-sm bg-indigo-500 text-white cursor-pointer",children:a}),e.jsx("button",{onClick:t,className:"px-5 border border-indigo-500 py-1 text-lg mt-5 rounded-sm bg-transperent text-indigo-500 cursor-pointer ml-2",children:"Cancel"})]})})),w=()=>e.jsxs("div",{className:"bg-gray-100 min-h-screen flex flex-col items-center justify-center",children:[e.jsx("style",{children:`
        @keyframes pulseAndSpin {
          10% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          40% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }
        .loading-animation {
          animation: pulseAndSpin 1.5s infinite ease-in-out;
        }
      `}),e.jsx("img",{src:c.Logo.src,alt:"Loading logo",className:"w-12 h-12 loading-animation"}),e.jsx("p",{className:"mt-1 text-gray-700 tracking-wide font-medium text-sm font-sans",children:"Loading..."})]}),k=[{id:"light",label:"Light",icon:y},{id:"dark",label:"Dark",icon:b},{id:"system",label:"System",icon:p}];function v(){const[r,n]=d.useState(l());return d.useEffect(()=>m(n),[]),e.jsx("div",{className:"grid grid-cols-3 gap-3",role:"radiogroup","aria-label":"Theme",children:k.map(({id:a,label:s,icon:o})=>{const t=r===a;return e.jsxs("button",{type:"button",role:"radio","aria-checked":t,onClick:()=>g(a),className:`relative flex flex-col items-center gap-2 rounded-sm border px-3 py-4 text-sm font-medium transition-colors ${t?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:[e.jsxs("span",{"aria-hidden":"true",className:`flex h-10 w-16 items-end gap-1 rounded-sm border p-1.5 ${a==="dark"?"border-[#3d404d] bg-[#1a1b20]":a==="light"?"border-[#e5e7eb] bg-[#ffffff]":"border-[#9ca3af] bg-[linear-gradient(135deg,#ffffff_50%,#1a1b20_50%)]"}`,children:[e.jsx("span",{className:"h-2 w-6 rounded-sm bg-[var(--brand)]"}),e.jsx("span",{className:`h-1.5 w-4 rounded-sm ${a==="dark"?"bg-[#3d404d]":"bg-[#e5e7eb]"}`})]}),e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx(o,{className:"h-4 w-4","aria-hidden":"true"}),s]}),t&&e.jsx(h,{className:"absolute right-2 top-2 h-4 w-4 text-indigo-500","aria-hidden":"true"})]},a)})})}export{N as A,w as L,v as T};
