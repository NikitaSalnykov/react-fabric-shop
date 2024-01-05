import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';
import SkeletonList from '../Loader/SkeletonList';
import {
  // getFilterColor,
  getFilterName,
  // getFilterPrice,
  // getFilterdCategory,
} from '../../Redux/filter/filterSlice';
import { categoryURL } from '../../helpers/categoryURL';

const NewProductList = ({ title }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);
  // const filterCategory = useSelector(getFilterdCategory);
  // const filterPrice = useSelector(getFilterPrice);
  // const filterColor = useSelector(getFilterColor);

  const filteredProducts = (sortedProductObjects) => {
    let filtered;
    if (!products) return;

    filtered = products.filter((el) =>
      el.name.toLowerCase().includes(filterName.toLowerCase())
    );

    if (filterName.trim() === '') {
      return sortedProductObjects;
    }
    return filtered;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const newProducts = (products) => {
    const productsWithTimestamps = products.map((el) => ({
      timestamp: new Date(el.createdAt).getTime(),
      product: el,
    }));
    const sortedProducts = productsWithTimestamps.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedProductObjects = sortedProducts.map((item) => item.product);
    return filteredProducts(sortedProductObjects);
  };

  return (
    <div className="md:min-h-[400px]">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ">
          {title}
        </h2>

        {products && !isLoading ? (
          <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {newProducts(products).map((product) => (
              <Link
                to={`/categories/${categoryURL(product.category)}/${
                  product._id
                }`}
                key={product._id}
                className="group"
              >
                <div className="h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.mainPhoto}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {product.category}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <SkeletonList />
          </div>
        )}
        {newProducts(products).length <= 0 && (
          <div className="w-full flex justify-center items-center mt-4">
            <p>
              По запросу <span className=" font-bold">{filterName}</span> ничего
              не найдено.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProductList;
