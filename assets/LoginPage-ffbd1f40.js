import{d as h,u as b,a1 as p,r as i,a2 as g,q as f,j as e,L as d,a3 as w,a4 as j}from"./index-49424c8d.js";const m="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]",N=()=>{const r=h(),l=b(p),[o,n]=i.useState(!1);i.useEffect(()=>{r(g.actions.resetHttpError())},[r]);const s=f({initialValues:{email:"",password:""},validateOnChange:!1,validateOnBlur:!0,validationSchema:w,onSubmit:({email:t,password:u})=>{r(j({email:t,password:u}))}}),a=s.errors,c=s.values,x=t=>{switch(t){case"password":n(!o);break}};return e.jsx("div",{className:"contayner py-20 md:py-24 lg:py-40",children:e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("div",{className:"max-w-2xl",children:e.jsx("div",{className:" md:w-[600px] bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ",children:e.jsxs("form",{className:"space-y-6",noValidate:!0,autoComplete:"off",onSubmit:s.handleSubmit,children:[e.jsx("h3",{className:"text-xl font-medium text-gray-900 ",children:"Авторизация"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium text-gray-900 block mb-2 ",children:"Ваш email"}),e.jsx("input",{type:"email",name:"email",id:"email",className:`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${a.email&&"border-red"}`,placeholder:"name@mail.com",value:c.email,onChange:s.handleChange}),a.email&&e.jsx("p",{className:m,children:a.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium text-gray-900 block mb-2 ",children:"Ваш пароль"}),e.jsx("input",{type:o?"text":"password",name:"password",id:"password",placeholder:"••••••••",value:s.values.password,onChange:s.handleChange,className:`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${a.password&&"border-red"}`,required:""}),a.password&&e.jsx("p",{className:m,children:a.password})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex items-start",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex items-center h-5",children:e.jsx("input",{id:"showPassword",type:"checkbox",className:"bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded ",onChange:()=>x("password")})}),e.jsx("div",{className:"text-sm ml-3",children:e.jsx("label",{htmlFor:"showPassword",className:"font-medium text-gray-900 ",children:"Показать пароль"})})]})}),e.jsx(d,{to:"/forgot-password",className:"text-sm text-blue-700 hover:underline ml-auto",children:"Забыли пароль?"})]}),e.jsx("button",{type:"submit",disabled:l,className:`w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${l&&"animate-pulse bg-red"}`,children:"Войти"}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Ещё не зарегистрированы?"," ",e.jsx(d,{to:"/registration",className:"text-blue-700 hover:underline",children:"Зарегистрироваться"})]})]})})})})})};export{N as default};