// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SwiperComponent = ({images}) => {
  return (
<>
{images &&    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map(el => (
        <SwiperSlide>
          <img src={el} alt="slide" />
        </SwiperSlide>
      ))}
    </Swiper>}</>
  );
};