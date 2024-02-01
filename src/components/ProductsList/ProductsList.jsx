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
import {
  getFilterCategory,
  getFilterColor,
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
} from '../../Redux/filter/filterSlice';
import SkeletonList from '../Loader/SkeletonList';
import categoryName from '../../helpers/categoryName';
import { deleteFavorite, getFavorite, setFavorite } from '../../Redux/favorites/favoriteSlice';
import Svg from '../Svg/Svg';
import { Price } from '../../pages/Price/Price';
import { TypeProductSwitcher } from '../TypeProductSwitcher/TypeProductSwitcher';
import { ProductCard } from '../ProductCard/ProductCard';

const ProductList = ({ title }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);
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
 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
;

  const productsByCategory = products.filter(
    (el) => el.category === categoryName(category)
  );

  const filteredProducts = (sortedProductObjects) => {
    if (!products) return sortedProductObjects;
    const price = filterPrice.replace(/\D/g, '')
    return sortedProductObjects.filter((el) => {
      const nameMatch = el.name.toLowerCase().includes(filterName.toLowerCase());
      const categoryMatch = filterCategory === 'Все категории' || el.category.toLowerCase().includes(filterCategory.toLowerCase());
      const colorMatch = filterColor === 'Все цвета' || el.color.toLowerCase().includes(filterColor.toLowerCase());
      const discountMatch = !filterSale || el.discount > 0
      const priceMatch = filterPrice === '' || +el.price < price

      return nameMatch && categoryMatch && colorMatch && discountMatch && priceMatch ;
    });
  };

  const newProducts = (productsByCategory) => {

    if (!filterNew) {
      return filteredProducts(productsByCategory)
    }

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

  const paginatedProducts = (products) =>
  newProducts(products).slice((currentPage - 1) * limit, currentPage * limit);

  return (
<>
<div className="">
      <div className="mx-auto">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ">
          {title}
        </h2>

        {paginatedProducts(productsByCategory) && !isLoading ? (
          <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {paginatedProducts(productsByCategory).map((product) => (
<ProductCard product={product}/>
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
    {newProducts(productsByCategory).length <= 0 && (
      <div className="w-full flex justify-center items-center py-28">
        <p>
          По запросу <span className=" font-bold">{filterName}</span> ничего
          не найдено.
        </p>
      </div>
    )}</>
  );
};

export default ProductList;
