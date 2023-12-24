const SkeletonProduct = () => {
  return (
    <div className="container pt-6 animate-pulse">
      <div className="w-full lg:w-1/3 h-12 lg:h-6 bg-slate-200 mb-8"></div>
      <div className="mx-auto bg-slate-200 h-[450px] w-[450px] md:h-[550px]  md:w-[650px] flex items-center justify-center"></div>
      <div className="mx-auto max-w-2xl pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="h-6 w-1/2 bg-slate-200"></div>
          <div className="mt-8 h-20 w-1/2 bg-slate-200"></div>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="h-6 w-1/3 bg-slate-200"></div>
          <div className="mt-4 h-6 w-1/2 bg-slate-200"></div>
          <div className="mt-6">
            <div>
              <div className="h-5 w-[60%] bg-slate-200"></div>
              <div className="flex flex-wrap gap-4 ">
                <div className="mt-8 w-full h-14 flex overflow-hidden gap-4">
                  <div className="w-[50px] h-[50px]  rounded-[90px] bg-slate-200 object-cover" />
                  <div className="w-[50px] h-[50px]  rounded-[90px] bg-slate-200 object-cover" />
                  <div className="w-[50px] h-[50px]  rounded-[90px] bg-slate-200 object-cover" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <div className="h-4 w-1/3 bg-slate-200"></div>
              </div>
              <div className=" mt-4 custom-number-input h-10 w-32 pt-2 bg-slate-200"></div>
            </div>
            <div className="bg-slate-200 mt-10 w-[70%] h-12 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
