// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, Pagination  } from 'swiper/modules';
import {ProductCard} from '../ProductCard/ProductCard'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export const SwiperReviews = ({ reviews }) => {
  const [readMore, setReadMore] = useState(false);

  const handleSlideChange = () => {
    setReadMore(false);
  };

  return (
    <>
      {reviews && (
        <Swiper
          className="flex justify-center items-center w-full rounded-xl "
          modules={[Autoplay, Scrollbar, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000, // Указывает время между сменой слайдов в миллисекундах (в данном случае, 5 секунд)
            disableOnInteraction: true, // Отключает остановку автоплея при взаимодействии с пользователем
          }}
          speed={500}
          onSlideChange={handleSlideChange} 
          pagination={{
            clickable: true,
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="py-12 md:py-20"
              style={{"display": "flex", "justifyContent": "center"}}
            >
             <div className='cursor-pointer w-[600px] border-slate-200 border-[1px] p-4 rounded-xl'>
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-xl">{review.author}</p>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 1 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 2 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 3 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 4 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 5 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-2 text-xl">
          <p>
            {review.text.split('').length >= 150 && !readMore
              ? review.text.split('').slice(0, 150)
              : review.text}
            {review.text.split('').length >= 150 && !readMore && (
              <span
                onClick={() => setReadMore(!readMore)}
                className=" cursor-pointer text-md font-medium text-blue-600 hover:underline "
              >
                ...Ещё
              </span>
            )}
          </p>
        </div>
        {review.text.split('').length >= 150 && readMore && (
          <button
            onClick={() => setReadMore(!readMore)}
            className="block text-sm font-medium text-blue-600 hover:underline "
          >
            Свернуть
          </button>
        )}
        {review.extraPhotos && review.extraPhotos.length > 0 &&
        <div className="py-4">
           <div className="flex items-center gap-2 mb-4 opacity-70">
            <Svg id={'icon-clip'} size={16} />
            <p className=" font-semibold text-sm">Прикрепленные фотографии:</p>
          </div>
          <ul className="flex flex-wrap gap-4">
            {review.extraPhotos &&
              review.extraPhotos.map((el, index) => (
                <li
                  onClick={() => openImageModal(el)}
                  key={index}
                  className="w-[100px] h-[100px] overflow-hidden cursor-pointer hover:translate-y-[1px] hover:opacity-70"
                >
                  <img
                    className="h-full max-w-full rounded-lg object-cover"
                    src={el}
                    alt="attached photo"
                  />
                </li>
              ))}
          </ul>
        </div>
}
      </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
