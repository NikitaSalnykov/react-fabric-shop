import{d as j,j as e,ao as C,u as h,g as M,x as F,a7 as O,r as p,a8 as D,o as S,ap as L,V as z,U as $,W as N,ac as f,ad as B,aq as V,f as _,B as v}from"./index-3e1d8941.js";/* empty css                         */const E=({onCloseModal:n,post:o})=>{const i=j();console.log(o);const c=()=>{i(C(o._id)),n()};return e.jsxs("div",{className:"md:max-w-2xl text-center p-6 md:p-12 rounded-3xl  ",children:[e.jsxs("h3",{className:"text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide w-[300px]",children:["Удалить пост ",`"${o.title}"`,"?"]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("button",{className:`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`,onClick:c,children:"Подтвердить"}),e.jsx("button",{className:`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`,onClick:n,children:"Отмена"})]})]})},x="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]",m="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ",I=({onCloseModal:n})=>{const o=h(M),i=j(),c=h(F),u=h(O);p.useEffect(()=>{u&&(n(),i(D()))},[u,n,i]);const r=S({initialValues:{title:"",text:"",description:"",main:!1,mainPhoto:null,extraPhotos:null},validateOnChange:!1,validateOnBlur:!0,onSubmit:({title:a,text:l,description:t,main:g,mainPhoto:w,extraPhotos:P})=>{const k={title:a,text:l,description:t,main:g,mainPhoto:w,extraPhotos:P,author:`${o.name} ${o.surname}`},y=b(k);i(L(y)),console.log(y)}}),s=r.errors,d=r.values,b=a=>{const l=new FormData;return l.append("title",a.title),l.append("text",a.text),l.append("description",a.description),l.append("main",a.main),l.append("author",a.author),l.append("mainPhoto",a.mainPhoto),a.extraPhotos&&[...a.extraPhotos].forEach(t=>{l.append("extraPhotos",t)}),l};return e.jsx("form",{noValidate:!0,autoComplete:"off",className:"flex flex-col flex-wrap-reverse",onSubmit:r.handleSubmit,children:e.jsxs("div",{className:"flex-row-reverse md:w-[500px]",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 justify-between relative",children:[e.jsx("label",{className:m,htmlFor:"title",children:"Название:"}),e.jsx("input",{className:`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[10px] resize-none ${s.title&&"border-rose-400"}`,type:"text",id:"title",name:"title",placeholder:"Название",value:d.title,onChange:r.handleChange}),s.title&&e.jsx("p",{className:x,children:s.title})]}),e.jsx("div",{className:"flex-col",children:e.jsxs("div",{className:"flex flex-col gap-2 justify-start w-full relative",children:[e.jsx("label",{className:m,htmlFor:"text",children:"Текст статьи:"}),e.jsx("textarea",{className:`flex w-[100%] h-[300px] px-[16px] py-[8px] border border-blue rounded-[10px] resize-none ${s.text&&"border-rose-400"}`,type:"text",id:"text",name:"text",placeholder:"Текст статьи",value:d.text,onChange:r.handleChange}),s.text&&e.jsx("p",{className:x,children:s.text})]})}),e.jsxs("div",{className:"flex flex-col gap-2 justify-between",children:[e.jsx("label",{className:m,htmlFor:"color",children:"Описание:"}),e.jsx("textarea",{className:`flex w-[100%] h-[100px] px-[16px] py-[8px] border border-blue rounded-[10px] resize-none ${s.description&&"border-rose-400"}`,type:"text",id:"description",name:"description",placeholder:"Для превью",value:d.description,onChange:r.handleChange}),s.description&&e.jsx("p",{className:x,children:s.description})]}),e.jsxs("div",{className:"flex relative flex-row gap-3 items-center",children:[e.jsx("label",{className:m,htmlFor:"main",children:"Поместить на главную"}),e.jsx("input",{className:`w-4 h-4 ${s.main&&"border-rose-400"}`,type:"checkbox",id:"main",name:"main",value:d.main,onChange:r.handleChange}),s.main&&e.jsx("p",{className:x,children:s.main})]}),e.jsxs("div",{className:"flex flex-col justify-between relative items-center gap-2",children:[e.jsx("label",{className:m,htmlFor:"mainPhoto",children:"Главная фотка:"}),e.jsx("input",{className:"w-full",type:"file",id:"mainPhoto",name:"mainPhoto",accept:"image/jpeg, image/png",onChange:a=>{const l=a.target.files[0];r.setFieldValue("mainPhoto",l)}}),s.mainPhoto&&e.jsx("p",{className:x,children:s.mainPhoto})]}),e.jsxs("div",{className:"flex flex-col justify-between relative items-center gap-2",children:[e.jsx("label",{className:m,htmlFor:"extraPhotos",children:"Дополнительные фото до 3х:"}),e.jsx("input",{className:"w-full",type:"file",id:"extraPhotos",name:"extraPhotos",accept:"image/jpeg, image/png",multiple:!0,onChange:a=>{const l=a.target.files;r.setFieldValue("extraPhotos",l)}}),s.extraPhotos&&e.jsx("p",{className:x,children:s.extraPhotos})]})]}),e.jsx("div",{className:" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ",children:c?e.jsx("div",{children:"Loading"}):e.jsxs("button",{type:"submit",disabled:!1,className:`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`,children:["Добавить"," "]})})]})})},T=({onCloseModal:n})=>e.jsxs("div",{className:" text-center smOnly:px-3 md:px-5 rounded-3xl",children:[e.jsx("h3",{className:"text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide ",children:"Добавить статью"}),e.jsx("div",{className:"",children:e.jsx(I,{onCloseModal:n})})]}),W=()=>{const n=j(),o=h(z),i=h($),[c,u]=p.useState(!1),[r,s]=p.useState(!1),[d,b]=p.useState(null);p.useEffect(()=>{n(N())},[n,r]);const a=t=>{b(t),u(!c)},l=t=>{b(t),s(!r)};return e.jsxs("div",{children:[e.jsx("div",{className:"flex mb-4 gap-2",children:e.jsx("button",{onClick:()=>{s(!0)},className:"w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2",children:"Добавить пост"})}),e.jsx("div",{className:"mb-4 grid grid-cols-1 gap-6",children:e.jsxs("div",{className:"relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2",children:[e.jsxs("div",{className:"relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1",children:"Посты в блоге"}),i?e.jsx("p",{className:" animate-pulse",children:"Идёт загрузка"}):e.jsxs("p",{className:"antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"3",stroke:"currentColor","aria-hidden":"true",className:"h-4 w-4 text-blue-500",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),e.jsxs("strong",{children:[o.length," постов"]})," загружено"]})]}),e.jsx("button",{"aria-expanded":"false","aria-haspopup":"menu",id:":r5:",className:"relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30",type:"button",children:e.jsx("span",{className:"absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currenColor",viewBox:"0 0 24 24",strokeWidth:"3",stroke:"currentColor","aria-hidden":"true",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"})})})})]}),e.jsx("div",{className:"p-6 overflow-x-scroll px-0 pt-0 pb-[100px]",children:e.jsxs("table",{className:"w-full min-w-[640px] table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Название"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Содержание"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Описание"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Главная"})}),e.jsx("th",{className:"border-b border-blue-gray-50 py-3 px-6 text-left",children:e.jsx("p",{className:"block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400",children:"Создано/Отред."})})]})}),e.jsx("tbody",{children:o&&!i?o.map(t=>t&&e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs(f,{as:"div",className:"relative inline-block text-left",children:[e.jsx("div",{className:"p-2 rounded-xl border-[1px]",children:e.jsx(f.Button,{className:"block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold text-left",children:t.title?t.title:"-"})}),e.jsx(B,{as:p.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(f.Items,{className:" left-0 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:e.jsx("div",{className:"py-1",children:e.jsx(f.Item,{children:()=>e.jsx("button",{className:"block px-4 py-2 text-sm",onClick:()=>a(t),href:"#",children:"Delete"})})})})})]})})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("p",{className:"block antialiased font-sans text-xs font-medium text-blue-gray-600",children:[t.text?t.text.split("").splice(0,20).join(" ")+"...":"-"," "]})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("p",{className:"block antialiased font-sans text-xs font-medium text-blue-gray-600",children:[t.text?t.description.split("").splice(0,20).join(" ")+"...":"-"," "]})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsx("input",{type:"checkbox",id:t._id,name:t._id,checked:t.main,onChange:g=>{n(V({id:t._id,arg:{main:g.target.checked}})),n(N())}})}),e.jsx("td",{className:"py-3 px-5 border-b border-blue-gray-50",children:e.jsxs("div",{className:"w-10/12",children:[e.jsx("p",{className:"antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600",children:_(t.updatedAt)}),e.jsx("div",{className:"flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1",children:e.jsx("div",{className:"flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white",style:{width:"60%"}})})]})})]},t._id?t._id:"-")):e.jsx("tr",{children:e.jsx("td",{children:e.jsx("div",{className:"p-4 animate-pulse",children:"Идёт загрузка"})})})})]})})]})}),e.jsx(v,{isOpen:c,onCloseModal:a,children:e.jsx(E,{onCloseModal:a,post:d})}),e.jsx(v,{isOpen:r,onCloseModal:l,children:e.jsx(T,{onCloseModal:l,post:d})})]})};export{W as default};