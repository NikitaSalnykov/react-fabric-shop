import{a as $,u as a,s as D,t as E,D as A,r as g,C as P,E as R,F as z,G as I,H as U,I as W,w as B,j as e,L as G,X as H,T as J,S as K,Y as Q,J as X,K as Y,M as q,Q as O,x as V}from"./index-93ef489e.js";import{F as Z}from"./Filter-f9c062e2.js";const ee=({title:m})=>{const i=$(),c=a(D),C=a(E),u=a(A),[o,f]=g.useState(a(P)||[]),F=a(P),p=a(R),j=a(z),v=a(I),b=a(U),L=a(W),[w,S]=g.useState(1),n=12,_=t=>{S(t.selected+1)},M=t=>{F.some(s=>s._id===t._id)?(i(Y(t._id)),f(o.filter(s=>s._id!==t._id))):(i(q(t)),f([...o,t]))},y=t=>d(t).slice((w-1)*n,w*n),N=t=>{if(!c)return t;const s=j.replace(/\D/g,"");return t.filter(l=>{const x=l.name.toLowerCase().includes(u.toLowerCase()),r=p==="Все категории"||l.category.toLowerCase().includes(p.toLowerCase()),h=v==="Все цвета"||l.color.toLowerCase().includes(v.toLowerCase()),k=!b||l.discount>0,T=j===""||+l.price<s;return x&&r&&h&&k&&T})};g.useEffect(()=>{i(B())},[i]);const d=t=>{if(!L)return N(t);const x=t.map(r=>({timestamp:new Date(r.createdAt).getTime(),product:r})).sort((r,h)=>h.timestamp-r.timestamp).map(r=>r.product);return N(x)};return e.jsx("div",{className:"md:min-h-[400px]",children:e.jsxs("div",{className:"mx-auto max-w-2xl lg:max-w-7xl",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ",children:m}),y(c)&&!C?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ",children:y(c).map(t=>e.jsxs("div",{className:"relative",children:[e.jsxs(G,{to:`/categories/${H(t.category)}/${t._id}`,className:"group",children:[e.jsx("div",{className:"shadow-md h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",children:e.jsx("img",{src:t.mainPhoto,alt:t.name,className:"h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"})}),e.jsx("h3",{className:"mt-4 text-lg text-gray-700",children:t.name}),e.jsxs("p",{className:" capitalize text-sm text-gray-700",children:["Цвет: ",t.color]}),e.jsx("p",{className:"mt-1 text-sm font-medium text-gray-900",children:t.category})]},t._id),e.jsx("div",{className:"mt-2",children:e.jsx(J,{product:t})}),t.discount>0&&e.jsx("div",{className:"absolute top-4 w-12 h-12 rounded-full bg-red flex justify-center items-center cursor-pointer  left-4 ",children:e.jsxs("p",{className:"flex justify-center items-center gap-[1px] text-white font-semibold",children:[e.jsx("span",{className:" text-[10px]",children:"-"}),t.discount,e.jsx("span",{className:" text-[10px]",children:"%"})]})}),e.jsx("div",{onClick:()=>M(t),className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${o.some(s=>s._id===t._id)?" opacity-80":"opacity-40"} hover:opacity-80 cursor-pointer `,children:e.jsx(K,{id:"icon-favorite-product",size:22,fill:`${o.some(s=>s._id===t._id)?"red":"gray"}`,stroke:`${o.some(s=>s._id===t._id)?"red":"gray"}`})})]}))}),Math.ceil(d(c).length/n)>1&&e.jsx(Q,{handleClickPage:_,totalPages:Math.ceil(d(c).length/n)})]}):e.jsx("div",{children:e.jsx(X,{})}),d(c).length<=0&&e.jsx("div",{className:"w-full flex justify-center items-center mt-4",children:e.jsxs("p",{children:["По запросу ",e.jsx("span",{className:" font-bold",children:u})," ничего не найдено."]})})]})})},ae=()=>{const m=O(),i=new URLSearchParams(m.search).get("value");return e.jsxs("div",{className:"container",children:[e.jsx(V,{}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4",children:"Весь ассортимент:"}),e.jsx(Z,{nameFilter:!0,filterColor:!0,filterCategory:!0,filterPrice:!0,filterNew:!0,filterSale:!0,value:i})]}),e.jsx(ee,{})]})]})};export{ae as default};