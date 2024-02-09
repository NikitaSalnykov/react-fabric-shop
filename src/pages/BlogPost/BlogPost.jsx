import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ImagePlaceholder from "../../images/placeholders/product-placeholder.webp"
import { getPostById } from "../../Redux/posts/postsOperation";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoadingPosts, getSelectedPost } from "../../Redux/posts/postsSelectors";
import { formattedDate } from "../../helpers/formattedDate";
import SkeletonPost from "../../components/Loader/SkeletonPost";

export const BlogPost = () => {
const post = useSelector(getSelectedPost)
const isLoading = useSelector(getIsLoadingPosts)

const dispatch = useDispatch();
const { postId } = useParams();

useEffect(() => {
  dispatch(getPostById(postId));
}, [dispatch]);

  return <div className="container">
      {!isLoading && post ?
       <> 
       <Breadcrumbs name={post.title} />
       <div className="mb-6 flex flex-col gap-14 justify-center items-center lg:flex-row">
   <div className="w-full lg:w-[800px]">
   <h2 className="text-4xl font-bold leading-none lg:text-5xl mb-6">{post.title}</h2>
       <p className="mb-4 text-md">{post.description}</p>
       <p className="text-sm font-medium underline">{post.author}</p>
   </div>
       <div className="flex justify-center items-center overflow-hidden rounded-lg shadow-md  w-full h-[400px]">
       <img
                   src={post.mainPhoto  || ImagePlaceholder}
                   className="object-cover w-[100%] h-[100%]"
                 />
       </div>
       </div>
       <div className="w-full h-[1px] my-8 lg:my-12 bg-[#dbdbdb]"></div>
       <p className="mb-4 text-xl leading-7 md:text-xl md:leading-9">{post.text}</p>
   
       <p className="mt-8 font-semibold opacity-50 text-xs">{formattedDate(post.createdAt)}</p></> : 
       <SkeletonPost/>} 
  </div>;
};
