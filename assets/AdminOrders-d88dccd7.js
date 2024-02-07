import{d as h,j as e,am as O,u as b,an as M,ao as D,r as l,J as F,ap as C,aj as i,ak as B,f as L,a0 as A,B as P}from"./index-fc1a6089.js";import{F as S}from"./Filter-7d5a9a3b.js";const E=({onCloseModal:r,order:s})=>{const a=h(),n=()=>{a(O(s._id)),r()};return e.jsxs("div",{className:"md:max-w-2xl text-center p-6 md:p-12 rounded-3xl  ",children:[e.jsxs("h3",{className:"text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide",children:["Удалить Заказ №",s.order.orderNumber,"?"]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("button",{className:`"Frame36  hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`,onClick:n,children:"Подтвердить"}),e.jsx("button",{className:`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`,onClick:r,children:"Отмена"})]})]})},z=()=>{const r=h(),s=b(M),a=b(D),[n,f]=l.useState(!1),[p,g]=l.useState(null),j=b(F),[u,y]=l.useState(1),d=10;l.useEffect(()=>{r(C())},[r]);const o=t=>{g(t),f(!n)},c=t=>{if(!s)return t;const v=["name","info","tel"];return t.filter(x=>v.some(m=>x.order[m].toLowerCase().includes(j.toLowerCase()))).sort((x,m)=>{const k=new Date(x.createdAt);return new Date(m.createdAt)-k})},N=t=>{y(t.selected+1)},w=t=>c(t).slice((u-1)*d,u*d);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 grid grid-cols-1 gap-6",children:e.jsxs("div",{className:"relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2",children:[e.jsxs("div",{className:"relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex flex-col gap-y-4  md:items-center md:flex-row md:justify-between p-6",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1",children:"Заказы"}),a?e.jsx("p",{className:" animate-pulse",children:"Идёт загрузка"}):e.jsxs("p",{className:"antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"3",stroke:"currentColor","aria-hidden":"true",className:"h-4 w-4 text-blue-500",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),e.jsxs("strong",{children:[s.length," заказов"]})," принято"]})]}),e.jsx("div",{className:"",children:e.jsx(S,{nameFilter:!0})})]}),e.jsxs("div",{className:"p-6 overflow-x-scroll px-0 pt-0 pb-[100px]",children:[e.jsxs("table",{className:"w-full min-w-[640px] table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Номер Заказа"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Заказчик"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Телефон"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Сумма заказа"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Товары"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Дата"})})]})}),e.jsx("tbody",{children:s&&!a?w(s).map(t=>t&&e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs(i,{as:"div",className:"relative inline-block text-left",children:[e.jsx("div",{className:"p-2 rounded-xl border-[1px]",children:e.jsx(i.Button,{className:"block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold text-left",children:t.order.orderNumber?t.order.orderNumber:"-"})}),e.jsx(B,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(i.Items,{className:" left-0 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:e.jsx("div",{className:"py-1",children:e.jsx(i.Item,{children:()=>e.jsx("button",{className:"block px-4 py-2 text-sm",onClick:()=>o(t),href:"#",children:"Delete"})})})})})]})})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("p",{className:"block antialiased font-sans text-xs font-medium text-blue-gray-600",children:[t.order.name?t.order.name:"-"," ",t.order.surname?t.order.surname:""]})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsx("p",{className:"block antialiased font-sans text-xs font-medium text-blue-gray-600",children:t.order.tel?t.order.tel:"-"})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("div",{className:"w-10/12",children:[e.jsx("p",{className:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600",children:t.order.total?t.order.total:"-"}),e.jsx("div",{className:"flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1",children:e.jsx("div",{className:"flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white",style:{width:"60%"}})})]})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("div",{className:"w-[300px]",children:[e.jsx("p",{className:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600",children:t.order.info?t.order.info:"-"}),e.jsx("div",{className:"flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1",children:e.jsx("div",{className:"flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white",style:{width:"60%"}})})]})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("div",{className:"w-10/12",children:[e.jsx("p",{className:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600",children:L(t.updatedAt)}),e.jsx("div",{className:"flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1",children:e.jsx("div",{className:"flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white",style:{width:"60%"}})})]})})]},t._id?t._id:"-")):e.jsx("tr",{children:e.jsx("td",{children:e.jsx("div",{className:"p-4 animate-pulse",children:"Идёт загрузка"})})})})]}),s&&!a&&Math.ceil(c(s).length/d)>1&&e.jsx(A,{handleClickPage:N,totalPages:Math.ceil(c(s).length/d)})]})]})}),e.jsx(P,{isOpen:n,onCloseModal:o,children:e.jsx(E,{onCloseModal:o,order:p})})]})};export{z as default};
