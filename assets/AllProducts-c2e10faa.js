import{d as k,u as s,w as A,x as T,F as D,X as E,G as I,H as R,I as W,J as z,K as B,r as P,z as G,j as e,M as H,Y as J,O as K,T as O,A as U}from"./index-3e1d8941.js";import{F as X}from"./Filter-ee158683.js";const Y=({title:m})=>{const i=k(),c=s(A),L=s(T),x=s(D);s(E);const l=s(I),f=s(R),h=s(W),N=s(z),F=s(B),[p,b]=P.useState(1),n=12,v=t=>{b(t.selected+1)},j=t=>d(t).slice((p-1)*n,p*n),C=t=>{if(!c)return t;const w=f.replace(/\D/g,"");return t.filter(r=>{let o;const a=r.name.toLowerCase().includes(x.toLowerCase());l==="Основные ткани"?o=["Фатин","Атлас","Подкладочная ткань","Органза","Сетка","Глиттер","Гипюры и кружева"].some(g=>r.category.toLowerCase().includes(g.toLowerCase())):l==="Аксессуары"?o=["Фурнитура"].some(g=>r.category.toLowerCase().includes(g.toLowerCase())):o=l==="Все категории"||r.category.toLowerCase().includes(l.toLowerCase());const u=h==="Все цвета"||r.color.toLowerCase().includes(h.toLowerCase()),y=!N||r.discount>0,M=f===""||+r.price<w;return a&&o&&u&&y&&M})};P.useEffect(()=>{i(G())},[i]);const d=t=>{if(!F)return C(t);const o=t.map(a=>({timestamp:new Date(a.createdAt).getTime(),product:a})).sort((a,u)=>u.timestamp-a.timestamp).map(a=>a.product);return C(o)};return e.jsx("div",{className:"md:min-h-[400px]",children:e.jsxs("div",{className:"mx-auto",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ",children:m}),j(c)&&!L?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ",children:j(c).map(t=>e.jsx(H,{product:t}))}),Math.ceil(d(c).length/n)>1&&e.jsx(J,{handleClickPage:v,totalPages:Math.ceil(d(c).length/n)})]}):e.jsx("div",{children:e.jsx(K,{})}),d(c).length<=0&&e.jsx("div",{className:"w-full flex justify-center items-center mt-4",children:e.jsxs("p",{children:["По запросу ",e.jsx("span",{className:" font-bold",children:x})," ничего не найдено."]})})]})})},V=()=>{const m=O(),i=new URLSearchParams(m.search).get("value");return e.jsxs("div",{className:"container",children:[e.jsx(U,{}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4",children:"Весь ассортимент:"}),e.jsx(X,{nameFilter:!0,filterColor:!0,filterCategory:!0,filterPrice:!0,filterNew:!0,filterSale:!0,value:i})]}),e.jsx(Y,{})]})]})};export{V as default};