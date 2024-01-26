import{d as P,u as S,w as R,r as x,z as E,aj as n,ak as a,j as e,c as q,E as z,a5 as D,al as O,am as T,an as A}from"./index-3e1d8941.js";const G=({nameFilter:u=!1,filterColor:h=!1,filterCategory:m=!1,filterPrice:f=!1,filterNew:g=!1,filterSale:j=!1,value:r})=>{const l=P(),o=S(R),[t,i]=x.useState(r==="sale");x.useEffect(()=>{l(E()),l(n(t)),r==="main"&&(i(!1),l(n(t)),l(a("Основные ткани"))),r==="accessories"&&(l(a("Основные ткани")),i(!1),l(a("Аксессуары")))},[l,r]);const p=({currentTarget:s})=>{l(D(s.value))},b=({currentTarget:s})=>{l(O(s.value))},y=({currentTarget:s})=>{l(a(s.value))},N=({currentTarget:s})=>{console.log(s.value),l(T(s.value))},v=s=>{const d=s.currentTarget.checked;l(A(d))},C=s=>{s.currentTarget.checked,i(!t),l(n(!t))},F=()=>{const s=[];return o.map(c=>s.push(c.color)),s.filter((c,k,w)=>w.indexOf(c)===k)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[u&&e.jsxs("div",{className:"flex gap-1",children:[e.jsx("label",{className:"flex justify-center items-center",style:{marginRight:"14px"},htmlFor:"filter",children:e.jsx(q,{id:"icon-search",size:22})}),e.jsx("input",{id:"filter",type:"text",name:"input",required:!0,onChange:p,variant:"standard",className:"bg-transparent border-b-2 px-2 text-gray-800 border-gray-600 hover:outline-none focus:outline-none w-full"})]}),e.jsxs("div",{className:"flex gap-4",children:[h&&e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterColor",children:"Цвет"}),e.jsxs("select",{id:"filterColor",onChange:b,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",children:[e.jsx("option",{selected:!0,children:"Все цвета"}),o&&F().map(s=>e.jsx("option",{children:s}))]})]}),m&&e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterCategory",children:"Категория"}),e.jsxs("select",{id:"filterCategory",onChange:y,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",children:[e.jsx("option",{selected:!0,children:"Все категории"}),e.jsx("option",{selected:r==="main",children:"Основные ткани"}),e.jsx("option",{selected:r==="accessories",children:"Аксессуары"}),z.map(s=>e.jsx("option",{children:s.name}))]})]}),f&&e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterPrice",children:"Цена"}),e.jsxs("select",{id:"filterPrice",onChange:N,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",children:[e.jsx("option",{value:"10000000",selected:!0,children:"Все цены"}),e.jsx("option",{value:"100",children:"До 100"}),e.jsx("option",{value:"200",children:"До 200"}),e.jsx("option",{value:"300",children:"До 300"}),e.jsx("option",{value:"1000",children:"До 1000"}),e.jsx("option",{value:"2500",children:"До 2500"}),e.jsx("option",{value:"100000",children:"более 2500"})]})]})]})]}),e.jsxs("div",{className:"flex items-start ml-auto gap-6",children:[j&&e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex items-center h-5",children:e.jsx("input",{id:"salesProducts",type:"checkbox",checked:t,className:"bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded ",onChange:C})}),e.jsx("div",{className:"text-sm ml-1",children:e.jsx("label",{htmlFor:"salesProducts",className:"font-medium text-gray-900 ",children:"Со скидкой"})})]}),g&&e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex items-center h-5",children:e.jsx("input",{id:"newProducts",type:"checkbox",className:"bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded ",onChange:v})}),e.jsx("div",{className:"text-sm ml-1",children:e.jsx("label",{htmlFor:"newProducts",className:"font-medium text-gray-900 ",children:"Новые поступления"})})]})]})]})};export{G as F};