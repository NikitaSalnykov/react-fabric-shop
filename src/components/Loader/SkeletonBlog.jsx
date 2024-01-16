const SkeletonBlog = () => {
  return (
<div className="container animate-pulse py-12">
       <div className="w-1/2 h-8  bg-slate-200 mb-8"></div>
       <div className="mb-6 flex flex-col gap-14 justify-center items-center lg:flex-row">
   <div className="w-full lg:w-[800px] ">
   <div className="w-[80%] h-12  bg-slate-200 mb-6"></div>
       <div className="w-full  h-[200px]  bg-slate-200 mb-4"></div>
       <div className="w-1/3  h-6  bg-slate-200 mb-4"></div>

       </div>

       <div className="w-full  h-[400px]  bg-slate-200 mb-4"></div>
  </div>
  
  <div className="flex gap-8">
  <div className="w-1/3  h-[400px]  bg-slate-200 mb-4"></div>
  <div className="w-1/3  h-[400px]  bg-slate-200 mb-4"></div>
  <div className="w-1/3   h-[400px]  bg-slate-200 mb-4"></div>
  </div>
  </div>
);
  }
export default SkeletonBlog;
