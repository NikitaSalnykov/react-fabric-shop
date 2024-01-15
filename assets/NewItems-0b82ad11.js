import{a as j,j as e,S as v,o as k,b as c,g as S,c as C,p as $,r as x,i as p,f as z,L as E,q as R,P as T,t as q,k as B,l as D,m as I,B as M}from"./index-f7863717.js";const W=()=>{const d=j(),i=({currentTarget:a})=>{d(k(a.value))};return e.jsxs("div",{className:"flex gap-1",children:[e.jsx("label",{style:{marginRight:"14px"},htmlFor:"filter",children:e.jsx(v,{id:"icon-search",size:22})}),e.jsx("input",{id:"filter",type:"text",name:"input",required:!0,onChange:i,variant:"standard",className:"border-b-2 px-2 text-gray-800 border-gray-600 hover:outline-none focus:outline-none"})]})},A=({title:d})=>{const i=j(),a=c(S),N=c(C),m=c($),[l,h]=x.useState(c(p)||[]),y=c(p),[g,w]=x.useState(1),n=12,b=s=>{w(s.selected+1)},P=s=>{y.some(t=>t._id===s._id)?(i(D(s._id)),h(l.filter(t=>t._id!==s._id))):(i(I(s)),h([...l,s]))},u=s=>o(s).slice((g-1)*n,g*n),_=s=>{let t;if(a)return t=a.filter(f=>f.name.toLowerCase().includes(m.toLowerCase())),m.trim()===""?s:t};x.useEffect(()=>{i(z())},[i]);const o=s=>{const F=s.map(r=>({timestamp:new Date(r.createdAt).getTime(),product:r})).sort((r,L)=>L.timestamp-r.timestamp).map(r=>r.product);return _(F)};return e.jsx("div",{className:"md:min-h-[400px]",children:e.jsxs("div",{className:"mx-auto max-w-2xl lg:max-w-7xl",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ",children:d}),u(a)&&!N?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ",children:u(a).map(s=>e.jsxs("div",{className:"relative",children:[e.jsxs(E,{to:`/categories/${R(s.category)}/${s._id}`,className:"group",children:[e.jsx("div",{className:"shadow-md h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",children:e.jsx("img",{src:s.mainPhoto,alt:s.name,className:"h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"})}),e.jsx("h3",{className:"mt-4 text-sm text-gray-700",children:s.name}),e.jsx("p",{className:"mt-1 text-sm font-medium text-gray-900",children:s.category}),e.jsx(T,{price:s.price,discount:s.discount,orientation:"row",size:"small"})]},s._id),s.discount>0&&e.jsx("div",{className:"absolute top-4 w-12 h-12 rounded-full bg-red flex justify-center items-center cursor-pointer  left-4 ",children:e.jsxs("p",{className:"flex justify-center items-center gap-[1px] text-white font-semibold",children:[e.jsx("span",{className:" text-[10px]",children:"-"}),s.discount,e.jsx("span",{className:" text-[10px]",children:"%"})]})}),e.jsx("div",{onClick:()=>P(s),className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${l.some(t=>t._id===s._id)?" opacity-80":"opacity-40"} hover:opacity-80 cursor-pointer `,children:e.jsx(v,{id:"icon-favorite-product",size:22,fill:`${l.some(t=>t._id===s._id)?"red":"gray"}`,stroke:`${l.some(t=>t._id===s._id)?"red":"gray"}`})})]}))}),Math.ceil(o(a).length/n)>1&&e.jsx(q,{handleClickPage:b,totalPages:Math.ceil(o(a).length/n)})]}):e.jsx("div",{children:e.jsx(B,{})}),o(a).length<=0&&e.jsx("div",{className:"w-full flex justify-center items-center mt-4",children:e.jsxs("p",{children:["По запросу ",e.jsx("span",{className:" font-bold",children:m})," ничего не найдено."]})})]})})},U=()=>e.jsxs("div",{className:"container",children:[e.jsx(M,{}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4",children:"Новые поступления:"}),e.jsx(W,{})]}),e.jsx(A,{})]})]});export{U as default};
