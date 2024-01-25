import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SkeletonList from '../Loader/SkeletonList';
import { categoryURL } from '../../helpers/categoryURL';
import { Pagination } from '../Pagination/Pagination';
import Svg from '../Svg/Svg';
import {
  deleteFavorite,
  getFavorite,
  setFavorite,
} from '../../Redux/favorites/favoriteSlice';
import { Price } from '../../pages/Price/Price';
import { TypeProductSwitcher } from '../TypeProductSwitcher/TypeProductSwitcher';

const FavoritesList = ({ title }) => {
  const dispatch = useDispatch();
  const [favoritesStyle, setFavoritesStyle] = useState(
    useSelector(getFavorite) || []
  );
  const favorites = useSelector(getFavorite);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const handleFavorite = (product) => {
    if (favorites.some((item) => item._id === product._id)) {
      dispatch(deleteFavorite(product._id));
      setFavoritesStyle(favoritesStyle.filter((el) => el._id !== product._id));
    } else {
      dispatch(setFavorite(product));
      setFavoritesStyle([...favoritesStyle, product]);
    }
  };

  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };

  const paginatedProducts = (products) =>
    products.slice((currentPage - 1) * limit, currentPage * limit);

  return (
    <div className="md:min-h-[400px]">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ">
          {title}
        </h2>

        {paginatedProducts(favorites) ? (
          <>
            <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {paginatedProducts(favorites).map((product) => (
                <div key={product._id} className="relative flex flex-col justify-between">
                  <Link
                    to={`/categories/${categoryURL(product.category)}/${
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
                    <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                    <p className=" capitalize text-sm text-gray-700">Цвет: {product.color}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {product.category}
                    </p>
                  </Link>
                  <div className="mt-2">
                <TypeProductSwitcher product={product}/>
                </div>
                  <div
                    onClick={() => handleFavorite(product)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${
                      favoritesStyle.some((item) => item._id === product._id)
                        ? ' opacity-80'
                        : 'opacity-40'
                    } hover:opacity-80 cursor-pointer `}
                  >
                    <Svg
                      id={'icon-favorite-product'}
                      size={22}
                      fill={`${
                        favoritesStyle.some((item) => item._id === product._id)
                          ? 'red'
                          : 'gray'
                      }`}
                      stroke={`${
                        favoritesStyle.some((item) => item._id === product._id)
                          ? 'red'
                          : 'gray'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {Math.ceil(favorites.length / limit) > 1 && (
              <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(favorites.length / limit)}
              />
            )}
          </>
        ) : (
          <div>
            <SkeletonList />
          </div>
        )}
        {favorites.length <= 0 && (
          <div className="min-h-screen w-full flex justify-center items-start mt-4">
            <p>Вы ещё не добавили в избранное ни один из товаров.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
