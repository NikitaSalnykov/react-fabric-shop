const BlogCard = () => {
  return (
    <li className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-16 md:col-span-4 xl:col-span-4">
      <img
        src="https://elenanovias.com/images/stories/virtuemart/product/221%20%20%20%20(1)%20copy.jpg"
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
      />
      <p
        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
      >
        Entertainment
      </p>
      <a className="text-lg font-bold md:text-2xl">
        Тренд свадебных платей в 2023 году!
      </a>
      <p className="text-sm text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <div className="pt-2 pr-0 pb-0 pl-0">
        <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
          Jack Sparrow
        </a>
        <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
          · 23rd, March 2021 ·
        </p>
        <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
          1hr 20min. read
        </p>
      </div>
    </li>
  );
};

export default BlogCard;
