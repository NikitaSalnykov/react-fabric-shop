import{c as f,u as w,a as b,b as c,e as h,r as d,f as S,j as s,L as k,S as C,h as L,i as $,k as F,B}from"./index-11d41311.js";import{g as E,a as M}from"./productsSelectors-962bcfd5.js";const R=r=>{const i=f.find(a=>a.category===r);if(i)return i.name;console.log(`Category name not found for ${r}`)},z=({title:r})=>{const{category:i}=w(),a=b(),u=c(E),y=c(M),j=c(h),[o,g]=d.useState(c(h)||[]),[m,v]=d.useState(1),l=12,p=e=>{v(e.selected+1)},N=e=>{j.some(t=>t._id===e._id)?(a($(e._id)),g(o.filter(t=>t._id!==e._id))):(a(F(e)),g([...o,e]))};d.useEffect(()=>{a(S())},[a]);const _=e=>{const t=f.find(P=>P.name===e);if(t)return t.category;console.log(`Category not found for ${e}`)},n=u.filter(e=>e.category===R(i)),x=e=>n.slice((m-1)*l,m*l);return s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"mx-auto max-w-2xl lg:max-w-7xl",children:[s.jsx("h2",{className:"mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ",children:r}),x()&&!y?s.jsx("div",{className:" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:x().map(e=>s.jsxs("div",{className:"relative",children:[s.jsxs(k,{to:`/categories/${i||_(e.category)}/${e._id}`,className:"group",children:[s.jsx("div",{className:"shadow-md h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",children:s.jsx("img",{src:e.mainPhoto,alt:e.name,className:"h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"})}),s.jsx("h3",{className:"mt-4 text-sm text-gray-700",children:e.name}),s.jsx("p",{className:"mt-1 text-lg font-medium text-gray-900",children:e.price})]},e._id),s.jsx("div",{onClick:()=>N(e),className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${o.some(t=>t._id===e._id)?" opacity-80":"opacity-40"} hover:opacity-80 cursor-pointer `,children:s.jsx(C,{id:"icon-favorite-product",size:22,fill:`${o.some(t=>t._id===e._id)?"red":"gray"}`,stroke:`${o.some(t=>t._id===e._id)?"red":"gray"}`})})]}))}):s.jsx("div",{children:s.jsx(L,{})})]}),Math.ceil(n.length/l)>1&&s.jsx(Pagination,{handleClickPage:p,totalPages:Math.ceil(n.length/l)})]})},U=()=>s.jsxs("div",{className:"container",children:[s.jsx(B,{}),s.jsx(z,{title:"Весь католог:"})]});export{U as default};
