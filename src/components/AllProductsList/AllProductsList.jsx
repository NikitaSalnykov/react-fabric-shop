import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';
import SkeletonList from '../Loader/SkeletonList';
import {
  getFilterCategory,
  getFilterColor,
  // getFilterColor,
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
  // getFilterPrice,
  // getFilterdCategory,
} from '../../Redux/filter/filterSlice';
import { categoryURL } from '../../helpers/categoryURL';
import { Pagination } from '../Pagination/Pagination';
import Svg from '../Svg/Svg';
import { deleteFavorite, getFavorite, setFavorite } from '../../Redux/favorites/favoriteSlice';
import { Price } from '../../pages/Price/Price';

const AllProductsList = ({ title }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);
  const [favoritesStyle, setFavoritesStyle] = useState(
    useSelector(getFavorite) || []
  );
  const favorites = useSelector(getFavorite);
  const filterCategory = useSelector(getFilterCategory);
  const filterPrice = useSelector(getFilterPrice);
  const filterColor = useSelector(getFilterColor);
  const filterSale = useSelector(getFilterSale);
  const filterNew = useSelector(getFilterNew);


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

  const paginatedProducts = (products) =>
    newProducts(products).slice((currentPage - 1) * limit, currentPage * limit);

    const filteredProducts = (sortedProductObjects) => {
      if (!products) return sortedProductObjects;
    
      return sortedProductObjects.filter((el) => {
        const nameMatch = el.name.toLowerCase().includes(filterName.toLowerCase());
        const categoryMatch = filterCategory === 'Все категории' || el.category.toLowerCase().includes(filterCategory.toLowerCase());
        const colorMatch = filterColor === 'Все цвета' || el.color.toLowerCase().includes(filterColor.toLowerCase());
        const discountMatch = !filterSale || el.discount > 0
        // const priceMatch = el.price < parseInt(filterPrice.replace(/\D/g, ''))

        return nameMatch && categoryMatch && colorMatch && discountMatch ;
      });
    };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const newProducts = (products) => {

    if (!filterNew) {
      return filteredProducts(products)
    }

    const productsWithTimestamps = products.map((el) => ({
      timestamp: new Date(el.createdAt).getTime(),
      product: el,
    }));

    console.log(productsWithTimestamps)
    const sortedProducts = productsWithTimestamps.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedProductObjects = sortedProducts.map((item) => item.product);
    return filteredProducts(sortedProductObjects);
  };

console.log(filteredProducts(products));
  return (
    <div className="md:min-h-[400px]">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ">
          {title}
        </h2>

        {paginatedProducts(products) && !isLoading ? (
          <>
            <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {paginatedProducts(products).map((product) => (
                <div className='relative'>
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
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.category}
                  </p>
                  <Price price={product.price} discount={product.discount} orientation='row' size='small'/>
                </Link>
                {product.discount > 0 && <div className={`absolute top-4 w-12 h-12 rounded-full bg-red flex justify-center items-center cursor-pointer  left-4 `}>
                             <p className='flex justify-center items-center gap-[1px] text-white font-semibold'><span className=' text-[10px]'>-</span>{product.discount}<span className=' text-[10px]'>%</span></p>
                              </div>}
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
            {Math.ceil(newProducts(products).length / limit) > 1 && (
              <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(newProducts(products).length / limit)}
              />
            )}
          </>
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

export default AllProductsList;
