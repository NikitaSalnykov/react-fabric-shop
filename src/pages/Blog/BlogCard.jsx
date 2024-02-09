import { Link } from "react-router-dom";
import { formattedDate } from "../../helpers/formattedDate";
import ImagePlaceholder from "../../images/placeholders/product-placeholder.webp"

const BlogCard = ({post}) => {
  return (
    <li className="flex flex-col items-start col-span-6 space-y-3 sm:col-span-4 md:col-span-4 xl:col-span-4 w-full">
      <div className="overflow-hidden rounded-lg shadow-sm  w-[100%] h-full max-h-[300px] mb-4">
        <img
          src={post.mainPhoto ? post.mainPhoto : ImagePlaceholder}
          className="object-cover w-[100%] h-auto"
        />
      </div>
      <h3 className="text-lg font-bold md:text-2xl ">
        {post.title}
      </h3>
      <p className="text-sm text-black">
      {post.description.split("").splice(0,150).join("") + "..."}
      <span><Link to={post._id} className=" font-bold">Читать</Link></span>
      </p>
      
      <div className="pt-2 pr-0 pb-0 pl-0">
        <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
          {post.author}
        </a>
        <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
          {formattedDate(post.createdAt)}
        </p>
      </div>
    </li>
  );
};

export default BlogCard;
