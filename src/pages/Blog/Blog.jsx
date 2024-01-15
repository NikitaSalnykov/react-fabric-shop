import { useEffect } from 'react';
import { fetchPosts } from '../../Redux/posts/postsOperation';
import { getPosts } from '../../Redux/posts/postsSelectors';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import BlogCard from './BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonProfileOrders from '../../components/Loader/SkeletonProfileOrders';
import { formattedDate } from '../../helpers/formattedDate';
import { Link } from 'react-router-dom';

const Blog = () => {
  const dispatch = useDispatch();

  const posts = useSelector(getPosts) || []
  const mainPost = posts.filter(el => el?.main === true)
  const otherPosts = posts.filter(el => el.main !== true)

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  return (
    <div className="container">
      <Breadcrumbs />
      {posts ? <div className="w-full" >
      { mainPost.length > 0 && <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <Link className="text-2xl font-bold leading-none lg:text-5xl">
              {mainPost[0].title}
              </Link>
              
              {mainPost[0].description && <p className="text-sm font-medium inline">{mainPost[0].description}</p>}
              <Link className='w-[200px] shadow-sm mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Подробнее</Link>

              <div className="pt-2 pr-0 pb-0 pl-0"> 
                <p className="text-sm font-medium inline">author:</p>
                <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                {mainPost[0].author}
                </a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                {formattedDate(mainPost[0].createdAt)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className=" overflow-hidden rounded-lg shadow-md  w-[100%] h-[300px]">
              <img
                src={mainPost[0].mainPhoto}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div> 
        }
        <div className="">
      { mainPost.length > 0  &&  <div className="w-full h-[1px] my-12 bg-[#dbdbdb]"></div>}
{otherPosts.length > 0  ?        <ul className="grid md:grid-cols-8 lg:grid-cols-12 sm:px-1 gap-x-8 gap-y-16">
           {otherPosts.map(el=> <BlogCard />)}
          </ul> : <div className='py-40 text-center'>Еще нет записей в блоге.</div>}
        </div>
      </div> : <SkeletonProfileOrders/>}
    </div>
  );
};

export default Blog;
