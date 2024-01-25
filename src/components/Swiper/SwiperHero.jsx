// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperHero = ({ images, id, name }) => {
  return (
    <>
      {images && (
        <Swiper
          className="flex justify-center items-center lg:w-[800px] w-full rounded-xl"
          modules={[Autoplay, Scrollbar, Navigation]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 0, // Указывает время между сменой слайдов в миллисекундах (в данном случае, 5 секунд)
            disableOnInteraction: false, // Отключает остановку автоплея при взаимодействии с пользователем
          }}
          speed={3400}
        >
          {images.map((el, index) => (
            <SwiperSlide
              key={index}
              className="w-full"
              style={{"display": "flex"}}
            >
              <div className='flex w-full md:justify-center items-center '>
              <div 
                            className="h-[250px] w-full md:h-[350px] lg:h-[450px]  md:w-[650px] flex md:items-center md:justify-center "
                            >
              <img className="shadow-md w-full h-full overflow-hidden object-cover" src={el} alt={name} />
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
