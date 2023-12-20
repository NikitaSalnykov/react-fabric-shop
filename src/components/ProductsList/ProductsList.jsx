import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { categories } from '../../assets/categories';

const ProductList = ({ title }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categoryURL = (category) => {
    const result = categories.find((el) => el.name === category);

    if (result) {
      return result.category;
    } else {
      console.log(`Category not found for ${category}`);
    }
  };

  const categoryName = (category) => {
    const result = categories.find((el) => el.category === category);
    if (result) {
      return result.name;
    } else {
      console.log(`Category name not found for ${category}`);
    }
  };

  const productsByCategory = products.filter(
    (el) => el.category === categoryName(category)
  );

  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ">
          {title}
        </h2>

        {productsByCategory && !isLoading ? (
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productsByCategory.map((product) => (
              <Link
                to={`/categories/${category || categoryURL(product.category)}/${
                  product._id
                }`}
                key={product._id}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.mainPhoto}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div>is loading</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
