import{c as t,N as s,j as l}from"./index-DcNg7pXR.js";import{B as g}from"./badge-check-BMPIXmta.js";import{C as c}from"./clock-DolKfwWz.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],o=t("circle-check",y);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],E=t("circle-dot",D);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],a=t("circle-x",R);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]],m=t("map-pin-check",x),_={PENDING:{label:"Waiting for provider",tone:"amber",icon:c},CONFIRMED:{label:"Provider confirmed",tone:"green",icon:o},ON_THE_WAY:{label:"Provider on the way",tone:"indigo",icon:s},ARRIVED:{label:"Provider arrived",tone:"green",icon:m},COMPLETED:{label:"Completed",tone:"indigo",icon:g},CANCELLED:{label:"Cancelled",tone:"red",icon:a}},P={PENDING:{label:"New request",tone:"amber",icon:c},CONFIRMED:{label:"Accepted",tone:"green",icon:o},ON_THE_WAY:{label:"On the way",tone:"indigo",icon:s},ARRIVED:{label:"At location",tone:"green",icon:m},COMPLETED:{label:"Completed",tone:"indigo",icon:g},CANCELLED:{label:"Cancelled",tone:"red",icon:a}},O={OPEN:{label:"Open",tone:"red",icon:E},IN_PROGRESS:{label:"In progress",tone:"amber",icon:c},RESOLVED:{label:"Resolved",tone:"green",icon:o},REJECTED:{label:"Closed",tone:"gray",icon:a}},h={green:"bg-green-50 text-green-700 ring-green-600/20",amber:"bg-amber-50 text-amber-800 ring-amber-600/20",red:"bg-red-50 text-red-700 ring-red-600/20",indigo:"bg-indigo-50 text-indigo-700 ring-indigo-600/20",gray:"bg-gray-100 text-gray-700 ring-gray-500/20"},S=e=>{const n=d(e==null?void 0:e.status);return n==="CONFIRMED"&&((e==null?void 0:e.trip_status)==="ON_THE_WAY"||(e==null?void 0:e.trip_status)==="ARRIVED")?e.trip_status:n},d=e=>{const n=String(e||"PENDING").toUpperCase();return n==="ACCEPTED"?"CONFIRMED":n==="REJECTED"||n==="DECLINED"?"CANCELLED":n==="FULFILLED"?"COMPLETED":n};function T({status:e,map:n=_,size:r="sm",className:C=""}){const b=n===O?String(e||"OPEN").toUpperCase():d(e),i=n[b]||{label:String(e||"Unknown"),tone:"gray",icon:E},p=i.icon,N=r==="lg"?"text-sm px-3 py-1.5 gap-1.5":"text-xs px-2 py-1 gap-1";return l.jsxs("span",{className:`inline-flex items-center rounded-sm font-semibold ring-1 ring-inset whitespace-nowrap ${h[i.tone]} ${N} ${C}`,children:[l.jsx(p,{className:r==="lg"?"h-4 w-4":"h-3.5 w-3.5","aria-hidden":"true"}),i.label]})}export{a as C,m as M,P,T as S,o as a,O as b,d as n,S as o};
