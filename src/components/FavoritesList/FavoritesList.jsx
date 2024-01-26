import { useState } from 'react';
import { useSelector } from 'react-redux';
import SkeletonList from '../Loader/SkeletonList';
import { Pagination } from '../Pagination/Pagination';
import {
  getFavorite,
} from '../../Redux/favorites/favoriteSlice';
import { ProductCard } from '../ProductCard/ProductCard';

const FavoritesList = ({ title }) => {
  const favorites = useSelector(getFavorite);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

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
                  <ProductCard product={product} />
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
