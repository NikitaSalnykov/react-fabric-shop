import { useEffect, useRef, useState } from 'react';

const ShoppingCart = ({ onToggleBasket, isBasketOpen }) => {
  const modalRef = useRef(null);
  const [animationClose, setAnimationClose] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setAnimationClose(true);
        setTimeout(() => {
          onToggleBasket();
        }, 250);
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAnimationClose(true);
        setTimeout(() => {
          onToggleBasket();
        }, 250);
      }
    };

    if (isBasketOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBasketOpen, onToggleBasket]);

  const handleClickClose = () => {
    setAnimationClose(true);
    setTimeout(() => {
      onToggleBasket();
    }, 250);
  };

  return (
    <div>
      <div
        className={`z-10 w-full h-full  bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 ${
          isBasketOpen && 'open'
        }
            ${animationClose && 'closed'}
            `}
        id="modal-basket-backdrop"
      >
        <div
          className="w-full bg-black absolute z-99 right-0 h-full overflow-x-hidden"
          id="checkout"
        >
          <div
            className={`flex items-end md:flex-row flex-col justify-end ${
              isBasketOpen && 'open'
            }
            ${animationClose && 'closed'}
            `}
            id="modal-basket"
          >
            <div
              className="md:w-1/2 md:w-8/12 w-full md:px-8 md:py-14 md:px-6 px-4 md:py-8 py-4 bg-white  overflow-y-hidden overflow-x-hidden md:h-screen h-auto"
              id="scroll"
              ref={modalRef}
            >
              <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <div
                  onClick={handleClickClose}
                  className="text-sm pl-2 leading-none "
                >
                  Назад
                </div>
              </div>
              <p className="md:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">
                Корзина
              </p>
              {/* <div className="p-4 md:flex gap-8 items-strech py-8 md:py-8 border-t border-gray-50 ">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <img
                    src="https://tkani-atlas.com.ua/assets/images/products/41273/f30e06fa9f63e4f5c0fa2147a9127e6cb252bcf4.webp"
                    alt="Black Leather Bag"
                    className="w-[400px] h-full object-center object-cover md:block hidden rounded-[20px]"
                  />
                  <img
                    src="https://tkani-atlas.com.ua/assets/images/products/41273/f30e06fa9f63e4f5c0fa2147a9127e6cb252bcf4.webp"
                    alt="Black Leather Bag"
                    className="w-full md:hidden lg:w-full h-full object-center object-cover rounded-[20px]"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    Код товара
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800 ">
                      Фатин
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Длина: Метр на метр
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Цвет: Розовый
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Состав: 100%
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Добавить в избранное
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Удалить из корзины
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      10$
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="mt-[24px]">
                <div className="w-full min-h-[250px] p-5 border-[1px] border-lightgray rounded-[20px]  flex flex-col md:flex-row ">
                  <div className="">
                    <img
                      src="https://tkani-atlas.com.ua/assets/images/products/41273/f30e06fa9f63e4f5c0fa2147a9127e6cb252bcf4.webp"
                      alt="Black Leather Bag"
                      className="w-[50px] h-[50px] md:p-5 md:w-[250px] md:min-w-[140px] md:h-full object-center object-cover md:block rounded-[50%] md:rounded-[20px]"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      Код товара
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800 ">
                        Фатин
                      </p>
                      <select
                        aria-label="Select quantity"
                        className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Длина: Метр на метр
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Цвет: Розовый
                    </p>
                    <p className="w-96 text-xs leading-3 text-gray-600">
                      Состав: 100%
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                          Добавить в избранное
                        </p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                          Удалить из корзины
                        </p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        10$
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-96 w-full bg-gray-100  h-full">
              <div className="flex flex-col md:h-screen h-auto md:px-8 px-4 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="md:text-4xl text-3xl font-black leading-9 text-gray-800">
                    Заказ
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Номер заказ
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      123151
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Количество товаров
                    </p>
                    <p className="text-base leading-none text-gray-800">1</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between md:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Общая стоимость
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      10%
                    </p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white ">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
