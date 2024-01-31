import Hero from '../../components/Hero/Hero';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { useEffect, useState } from 'react';
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
import { BasicImageModal } from '../../components/Modals/BasicModal/BasicImageModal';
import { FullSizeImage } from '../../components/Modals/FullSizeImage/FullSizeImage';

const Home = () => {
  const dispatch = useDispatch();
  const [isModalFullSizeOpen, setModalFullSizeOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const products = useSelector(getProducts);
  const reviews = useSelector(getReviews);
  const reviewsIsLoading = useSelector(getIsLoadingReview)
  const productIsLoading = useSelector(getIsLoadingProducts)
  const ordersIsLoading = useSelector(getIsLoadingOrders)
  const orders = useSelector(getOrders);

  
  const onToggleFullSizeImageModal = (image) => {
    setSelectedImage(image);
    setModalFullSizeOpen(!isModalFullSizeOpen);
  };
  
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
    orders.forEach((el) => el &&
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
      <div className="my-6 lg:my-12 text-center flex flex-col justify-center items-center">
      <h1 class="mb-4 text-2xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl"><span class=" text-6xl text-transparent bg-clip-text bg-gradient-to-r to-[#c367f9] from-[#ff4f75]">Dream Fatin</span> мир тканей</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl  md:w-[75%]">Ткани, вдохновляющие воображение и превращающие идеи в шедевры. От ярких и смелых решений до невероятной мягкости и роскоши</p>
      </div>
      <Hero />
     <div>
     <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Популярные товары:</h2>
      {!ordersIsLoading ? 
      <div>
        {products && products.length >= 5 && orders && orders.length >= 5  ? <SwiperCards products={topProducts(products)}/> : 
       <div className='mb-6'>Информация временно отсутвует</div>}
      </div>
      :
      <div className='mb-6'><SkeletonItems/></div>}
     </div>
        <div>
        <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Отзывы:</h2>
      {!reviewsIsLoading && !productIsLoading ? 
      <div>
        {reviews && reviews.length > 0 && topRatedReviews(reviews).length > 0 ? <SwiperReviews reviews={topRatedReviews(reviews)} products={products}/> : 
        <div className='mb-6'>Информация временно отсутвует</div>}
      </div> 
      :
      <div className='mb-6'><SkeletonItems/></div>
      }
        </div>

      <div>
      <h2 className='mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl '>Товары со скидкой:</h2>
      { !productIsLoading ? 
      <div>
        {products && products.length > 0 && discountProducts(products).length > 0 ? <SwiperCards products={discountProducts(products)}/> : 
        <div className='mb-6'>Информация временно отсутвует</div>}
      </div>
      : 
      <div className='mb-6'><SkeletonItems/></div>
      }
      </div>
      <CategoriesList title="Категории" />
      <BasicImageModal
        isOpen={isModalFullSizeOpen}
        onCloseModal={onToggleFullSizeImageModal}
      >
        <FullSizeImage image={selectedImage} />
      </BasicImageModal>
    </div>
  );
};

export default Home;
