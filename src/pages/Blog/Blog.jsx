import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="w-full ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <a className="text-4xl font-bold leading-none lg:text-5xl">
                Победа в конкурсе!
              </a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="text-sm font-medium inline">author:</p>
                <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                  Ксения Сальникова
                </a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                  · 23rd, April 2021 ·
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className=" overflow-hidden rounded-lg shadow-md  w-[100%] h-[300px]">
              <img
                src="https://www.texhibitionist.com/frontend/img/media-march-2023/3.jpg"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[1px] my-12 bg-[#dbdbdb]"></div>
          <ul className="grid md:grid-cols-8 lg:grid-cols-12 sm:px-1 gap-x-8 gap-y-16">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
