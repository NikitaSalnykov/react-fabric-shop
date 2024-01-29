import Hero from '../../components/Hero/Hero';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { useEffect } from 'react';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoadingProducts, getProducts } from '../../Redux/products/productsSelectors';
import { SwiperCards } from '../../components/Swiper/SwiperCards';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { getIsLoadingOrders, getOrders } from '../../Redux/orders/ordersSelectors';
import { LoaderSpin } from '../../components/Loader/LoaderSpin/LoaderSpin';
import SkeletonItems from '../../components/Loader/SkeletonItems';
import { getIsLoadingReview, getReviews } from '../../Redux/reviews/reviewsSelectors';
import { SwiperReviews } from '../../components/Swiper/SwiperReviews';
import { fetchReviews } from '../../Redux/reviews/reviewsOperation';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const reviews = useSelector(getReviews);
  const reviewsIsLoading = useSelector(getIsLoadingReview)
  const productIsLoading = useSelector(getIsLoadingProducts)
  const ordersIsLoading = useSelector(getIsLoadingOrders)
  const orders = useSelector(getOrders);
  
  const discountProducts = () => {
    let productsArr = [];
    products.map((product) => {

      if (product.discount && product.discount > 0) {
          productsArr.push(product);
        }})

    return productsArr;
  }


  const topRatedReviews = () => {
    let reviewsArr = [];
    reviews.map((review) => {

      if (review.rating && review.rating === 5) {
        reviewsArr.push(review);
        }})

    return reviewsArr;
  }
  console.log(reviews);
  console.log(topRatedReviews());

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
    dispatch(fetchReviews());
  }, [dispatch]);
  
  return (
    <div className="container ">
      <Hero />
      {products && products.length >= 5 && orders && orders.length >= 5 && 
      <div>
        <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Популярные товары:</h2>
        {!ordersIsLoading ? <SwiperCards products={topProducts(products)}/> : 
       <div className='mb-6'><SkeletonItems/></div>}
      </div>
      }
      {reviews && reviews.length > 0 && topRatedReviews(reviews).length > 0 && 
      <div>
        <h2 className='text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Отзывы:</h2>
        {!reviewsIsLoading ? <SwiperReviews reviews={topRatedReviews(reviews)}/> : 
        <div className='mb-6'><SkeletonItems/></div>}
      </div>
      }
      {products && products.length > 0 && discountProducts(products).length > 0 && 
      <div>
        <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Товары со скидкой:</h2>
        {!productIsLoading ? <SwiperCards products={discountProducts(products)}/> : 
        <div className='mb-6'><SkeletonItems/></div>}
      </div>
      }
      <CategoriesList title="Категории" />
    </div>
  );
};

export default Home;
