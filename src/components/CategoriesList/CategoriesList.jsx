import { Link } from 'react-router-dom';
import { categories } from '../../assets/categories';

const CategoriesList = ({ title }) => {
  return (
    <div className="">
      <div className="mx-auto">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ">
          {title}
        </h2>

        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories.map((category, index) => (
            <Link
              to={`/categories/${category.category}`}
              key={index}
              className="group shad"
            >
              <div className="shadow-md h-[250px] aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={category.img}
                  alt={category.category}
                  className=" h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{category.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {category.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
