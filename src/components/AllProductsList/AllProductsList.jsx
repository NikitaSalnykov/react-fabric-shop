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
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
} from '../../Redux/filter/filterSlice';
import { Pagination } from '../Pagination/Pagination';
import { getFavorite } from '../../Redux/favorites/favoriteSlice';
import { ProductCard } from '../ProductCard/ProductCard';

const AllProductsList = ({ title }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);

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

  

  const paginatedProducts = (products) =>
    newProducts(products).slice((currentPage - 1) * limit, currentPage * limit);

    const filteredProducts = (sortedProductObjects) => {
      if (!products) return sortedProductObjects;
      const price = filterPrice.replace(/\D/g, '')
      return sortedProductObjects.filter((el) => {
        let categoryMatch
        const nameMatch = el.name.toLowerCase().includes(filterName.toLowerCase());
       
        if(filterCategory === "Основные ткани") {
        const fabricsCategories  = ["Фатин", 'Атлас', "Подкладочная ткань", "Органза", "Сетка", "Глиттер", "Гипюры и кружева"]
          categoryMatch = fabricsCategories.some(category => el.category.toLowerCase().includes(category.toLowerCase()));
      } else if (filterCategory === "Аксессуары") {
          const fabricsCategories  = ["Фурнитура"]
          categoryMatch = fabricsCategories.some(category => el.category.toLowerCase().includes(category.toLowerCase()));
        } else {
           categoryMatch = filterCategory === 'Все категории' || el.category.toLowerCase().includes(filterCategory.toLowerCase());
        }

        const colorMatch = filterColor === 'Все цвета' || el.color.toLowerCase().includes(filterColor.toLowerCase());
        const discountMatch = !filterSale || el.discount > 0
        const priceMatch = filterPrice === '' || +el.price < price

        return nameMatch && categoryMatch && colorMatch && discountMatch && priceMatch ;
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

    const sortedProducts = productsWithTimestamps.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedProductObjects = sortedProducts.map((item) => item.product);
    return filteredProducts(sortedProductObjects);
  };

  return (
    <div className="md:min-h-[400px]">
      <div className="mx-auto">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-red-900 sm:text-2xl ">
          {title}
        </h2>

        {paginatedProducts(products) && !isLoading ? (
          <>
            <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {paginatedProducts(products).map((product) => (
                <ProductCard product={product} />
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
