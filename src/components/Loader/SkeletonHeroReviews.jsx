const SkeletonHeroReviews = () => {
  return (
    <div className="animate-pulse w-full flex justify-center items-center">
        <div className=" w-full lg:w-[65%] ">
            <div className="h-[200px]  md:h-[300px] aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8">
              <div className="h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]" />
            </div>
        </div>
    </div>
  );
};

export default SkeletonHeroReviews;
