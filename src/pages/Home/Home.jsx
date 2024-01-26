import Hero from '../../components/Hero/Hero';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { useEffect } from 'react';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/products/productsSelectors';
import { SwiperCards } from '../../components/Swiper/SwiperCards';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { getOrders } from '../../Redux/orders/ordersSelectors';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const orders = useSelector(getOrders);
  
  const discountProducts = () => {
    let productsArr = [];
    products.map((product) => {

      if (product.discount && product.discount > 0) {
          productsArr.push(product);
        }})

    return productsArr;
  }


  const topProducts = () => {
    let productsArr = [];
    orders.forEach((el) =>
      el.order.products
        .map((el) => el.product)
        .forEach((el) => productsArr.push(el.name))
    );
  
    const productCount = productsArr.reduce((acc, productName) => {
      acc[productName] = (acc[productName] || 0) + 1;
      return acc;
    }, {});
  
    const productCountArray = Object.entries(productCount);
  
    const sortedProductCount = productCountArray.sort((a, b) => b[1] - a[1]);
  
    if (!products || (products && products.length <= 0)) return [];
  
    const arr = [];
  
    products.forEach((product) => {
      sortedProductCount.forEach((el) => {
        if (el[0] === product.name) {
          arr.push({ ...product, count: el[1] });
        }
      });
    });
  
    return arr.slice(0, 8);
  };

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return (
    <div className="container ">
      <Hero />
      {products && products.length >= 5 && orders && orders.length >= 5 && 
      <div>
        <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Популярные товары</h2>
        <SwiperCards products={topProducts(products)}/>
      </div>
      }
      {products && products.length > 0 && discountProducts(products).length > 0 && 
      <div>
        <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Товары со скидкой</h2>
        <SwiperCards products={discountProducts(products)}/>
      </div>
      }
      <CategoriesList title="Категории" />
    </div>
  );
};

export default Home;
