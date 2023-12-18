// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import Svg from '../Svg/Svg';

export const SwiperComponent = ({ images, id, name }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {images && (
        <Swiper
          className="flex justify-center items-center lg:w-[800px]"
          modules={[Navigation, Autoplay, Scrollbar, A11y]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={50}
          slidesPerView={1}
          speed={940}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {images.map((el) => (
            <SwiperSlide
              key={id}
              className="mb-5 w-full h-[450px] flex items-center justify-center"
            >
              <img className="w-full md:w-[450px]" src={el} alt={name} />
            </SwiperSlide>
          ))}
          <button
            className="flex justify-center items-center absolute z-10 top-[50%] w-[25px] h-[25px] bg-black rounded-[50%]  left-[10px] opacity-70"
            ref={prevRef}
          >
            <div className=" rotate-180">
              <Svg
                id={'icon-arrow'}
                size={24}
                stroke={'white'}
                fill={'white'}
              />
            </div>
          </button>
          <button
            className="flex justify-center items-center absolute z-10 top-[50%] w-[25px] h-[25px] bg-black  opacity-70 rounded-[50%] right-[10px]"
            ref={nextRef}
            onClick={() => console.log(1)}
          >
            <Svg id={'icon-arrow'} size={24} stroke={'white'} fill={'white'} />
          </button>
        </Swiper>
      )}
    </>
  );
};
