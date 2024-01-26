// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import {ProductCard} from '../ProductCard/ProductCard'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperCards = ({ products }) => {

  const breakpoints = {
    1280: {
      slidesPerView: 4,
    },
    760: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <>
      {products && (
        <Swiper
          className="flex justify-center items-center w-full rounded-xl "
          modules={[Autoplay, Scrollbar, Navigation]}
          loop={true}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 0, // Указывает время между сменой слайдов в миллисекундах (в данном случае, 5 секунд)
            disableOnInteraction: false, // Отключает остановку автоплея при взаимодействии с пользователем
          }}
          speed={5000}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="w-full min-h-[450px]"
              style={{"display": "flex", "justifyContent": "center"}}
            >
             <ProductCard product={product}/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
