import{d as k,u as s,z as A,A as D,J as E,$ as T,K as R,M as U,O as W,Q as z,R as B,r as w,D as I,j as e,T as J,a0 as K,U as O,X as Q,E as X}from"./index-49424c8d.js";import{F as $}from"./Filter-1a2dd6a9.js";const q=({title:m})=>{const i=k(),c=s(A),L=s(D),x=s(E);s(T);const l=s(R),f=s(U),h=s(W),N=s(z),b=s(B),[p,v]=w.useState(1),n=12,y=t=>{v(t.selected+1)},j=t=>d(t).slice((p-1)*n,p*n),C=t=>{if(!c)return t;const P=f.replace(/\D/g,"");return t.filter(r=>{let o;const a=r.name.toLowerCase().includes(x.toLowerCase());l==="Основные ткани"?o=["Фатин","Атлас","Подкладочная ткань","Органза","Сетка","Глиттер","Гипюры и кружева"].some(g=>r.category.toLowerCase().includes(g.toLowerCase())):l==="Аксессуары"?o=["Фурнитура"].some(g=>r.category.toLowerCase().includes(g.toLowerCase())):o=l==="Все категории"||r.category.toLowerCase().includes(l.toLowerCase());const u=h==="Все цвета"||r.color.toLowerCase().includes(h.toLowerCase()),F=!N||r.discount>0,M=f===""||+r.price<P;return a&&o&&u&&F&&M})};w.useEffect(()=>{i(I())},[i]);const d=t=>{if(!b)return C(t);const o=t.map(a=>({timestamp:new Date(a.createdAt).getTime(),product:a})).sort((a,u)=>u.timestamp-a.timestamp).map(a=>a.product);return C(o)};return e.jsx("div",{className:"md:min-h-[400px]",children:e.jsxs("div",{className:"mx-auto",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ",children:m}),j(c)&&!L?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ",children:j(c).map(t=>e.jsx(J,{product:t}))}),Math.ceil(d(c).length/n)>1&&e.jsx(K,{handleClickPage:y,totalPages:Math.ceil(d(c).length/n)})]}):e.jsx("div",{children:e.jsx(O,{})}),d(c).length<=0&&e.jsx("div",{className:"w-full flex justify-center items-center mt-4",children:e.jsxs("p",{children:["По запросу ",e.jsx("span",{className:" font-bold",children:x})," ничего не найдено."]})})]})})},V=()=>{const m=Q(),i=new URLSearchParams(m.search).get("value");return e.jsxs("div",{className:"container",children:[e.jsx(X,{}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4",children:"Весь ассортимент:"}),e.jsx($,{nameFilter:!0,filterColor:!0,filterCategory:!0,filterPrice:!0,filterNew:!0,filterSale:!0,value:i})]}),e.jsx(q,{})]})]})};export{V as default};