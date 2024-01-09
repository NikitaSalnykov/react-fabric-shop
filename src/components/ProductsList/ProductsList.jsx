import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { categories } from '../../assets/categories';
import SkeletonList from '../Loader/SkeletonList';
import categoryName from '../../helpers/categoryName';
import { deleteFavorite, getFavorite, setFavorite } from '../../Redux/favorites/favoriteSlice';
import Svg from '../Svg/Svg';

const ProductList = ({ title }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const favorites = useSelector(getFavorite);
    const [favoritesStyle, setFavoritesStyle] = useState(
    useSelector(getFavorite) || []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };
 
  const handleFavorite = (product) => {
    if (favorites.some((item) => item._id === product._id)) {
      dispatch(deleteFavorite(product._id));
      setFavoritesStyle(favoritesStyle.filter((el) => el._id !== product._id));
    } else {
      dispatch(setFavorite(product));
      setFavoritesStyle([...favoritesStyle, product]);
    }
  };


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

  const productsByCategory = products.filter(
    (el) => el.category === categoryName(category)
  );

  const paginatedProducts = (products) =>
  productsByCategory.slice((currentPage - 1) * limit, currentPage * limit);


  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ">
          {title}
        </h2>

        {paginatedProducts(productsByCategory) && !isLoading ? (
          <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {paginatedProducts(productsByCategory).map((product) => (
<div className="relative">
<Link
                to={`/categories/${category || categoryURL(product.category)}/${
                  product._id
                }`}
                key={product._id}
                className="group"
              >
                <div className="shadow-md h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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
                              <div onClick={() => handleFavorite(product)} className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${favoritesStyle.some((item) => item._id === product._id) ? " opacity-80" : "opacity-40"} hover:opacity-80 cursor-pointer `}>
                              <Svg id={'icon-favorite-product'} size={22} 
                               fill={`${
                                favoritesStyle.some((item) => item._id === product._id)
                                  ? 'red'
                                  : 'gray'
                              }`}
                              stroke={`${
                                favoritesStyle.some((item) => item._id === product._id)
                                  ? 'red'
                                  : 'gray'
                              }`}/>
                              </div>
</div>
            ))}
          </div>
        ) : (
          <div>
            <SkeletonList />
          </div>
        )}
      </div>
      {Math.ceil(productsByCategory.length / limit) > 1 && (
              <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(productsByCategory.length / limit)}
              />
            )}
    </div>
  );
};

export default ProductList;
