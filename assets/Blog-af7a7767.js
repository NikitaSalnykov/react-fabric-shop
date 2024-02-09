import{j as s,I as m,L as n,f as d,d as x,u as c,Z as o,_ as h,r as f,$ as j,E as u}from"./index-b5287b8f.js";const p=({post:e})=>s.jsxs("li",{className:"flex flex-col items-start col-span-6 space-y-3 sm:col-span-4 md:col-span-4 xl:col-span-4 w-full",children:[s.jsx("div",{className:"overflow-hidden rounded-lg shadow-sm  w-[100%] h-full max-h-[300px] mb-4",children:s.jsx("img",{src:e.mainPhoto?e.mainPhoto:m,className:"object-cover w-[100%] h-auto"})}),s.jsx("h3",{className:"text-lg font-bold md:text-2xl ",children:e.title}),s.jsxs("p",{className:"text-sm text-black",children:[e.description.split("").splice(0,150).join("")+"...",s.jsx("span",{children:s.jsx(n,{to:e._id,className:" font-bold",children:"Читать"})})]}),s.jsxs("div",{className:"pt-2 pr-0 pb-0 pl-0",children:[s.jsx("a",{className:"inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline",children:e.author}),s.jsx("p",{className:"inline text-xs font-medium mt-0 mr-1 mb-0 ml-1",children:d(e.createdAt)})]})]}),g=()=>s.jsxs("div",{className:"container animate-pulse py-12",children:[s.jsx("div",{className:"w-1/2 h-8  bg-slate-200 mb-8"}),s.jsxs("div",{className:"mb-6 flex flex-col gap-14 justify-center items-center lg:flex-row",children:[s.jsxs("div",{className:"w-full lg:w-[800px] ",children:[s.jsx("div",{className:"w-[80%] h-12  bg-slate-200 mb-6"}),s.jsx("div",{className:"w-full  h-[200px]  bg-slate-200 mb-4"}),s.jsx("div",{className:"w-1/3  h-6  bg-slate-200 mb-4"})]}),s.jsx("div",{className:"w-full  h-[400px]  bg-slate-200 mb-4"})]}),s.jsxs("div",{className:"flex gap-8",children:[s.jsx("div",{className:"w-1/3  h-[400px]  bg-slate-200 mb-4"}),s.jsx("div",{className:"w-1/3  h-[400px]  bg-slate-200 mb-4"}),s.jsx("div",{className:"w-1/3   h-[400px]  bg-slate-200 mb-4"})]})]}),N=()=>{const e=x(),r=c(o),t=c(h)||[],l=t.filter(a=>(a==null?void 0:a.main)===!0),i=t.filter(a=>a.main!==!0);return f.useEffect(()=>{e(j())},[e]),s.jsx(s.Fragment,{children:r?s.jsx(g,{}):s.jsxs("div",{className:"container",children:[s.jsx(u,{}),t.length>0?s.jsxs("div",{className:"w-full",children:[l.length>0&&s.jsxs("div",{className:"flex flex-col items-center md:flex-row",children:[s.jsx("div",{className:"flex flex-col items-start justify-center w-full h-full mb-6 md:mb-0 md:w-1/2",children:s.jsxs("div",{className:`flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
          md:space-y-5`,children:[s.jsx("h2",{className:"text-2xl font-bold leading-none lg:text-5xl",children:l[0].title}),l[0].description&&s.jsx("p",{className:"text-sm font-medium inline",children:l[0].description}),s.jsx(n,{to:l[0]._id,className:"w-[200px] shadow-sm mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Подробнее"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium inline",children:"author:"}),s.jsx("a",{className:"inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline",children:l[0].author}),s.jsx("p",{className:"inline text-sm font-medium mt-0 mr-1 mb-0 ml-1",children:d(l[0].createdAt)})]})]})}),s.jsx("div",{className:"w-full md:w-1/2",children:s.jsx("div",{className:" overflow-hidden rounded-lg shadow-md  w-[100%] h-[300px]",children:s.jsx("img",{src:l[0].mainPhoto?l[0].mainPhoto:m,className:"object-cover w-[100%] h-[100%]"})})})]}),s.jsxs("div",{className:"",children:[l.length>0&&s.jsx("div",{className:"w-full h-[1px] my-12 bg-[#dbdbdb]"}),i.length>0?s.jsx("ul",{className:"grid md:grid-cols-8 lg:grid-cols-12 sm:px-1 gap-x-8 gap-y-16",children:i.map(a=>s.jsx(p,{post:a}))}):s.jsx("div",{className:"py-40 text-center",children:"Еще нет записей в блоге."})]})]}):s.jsx("div",{className:"py-40 text-center",children:"Еще нет записей в блоге."})]})})};export{N as default};
