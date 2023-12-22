import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../Redux/cart/cartSelectors';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCart = ({ onToggleBasket, isBasketOpen }) => {
  const cartListRef = useRef(null);
  const [animationClose, setAnimationClose] = useState(false);
  const products = useSelector(getCart);

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
      if (event.target.id === "modal-basket") {
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

  const totalPrice = () => {
    let result = 0;
    products.map((el) => {
      result += el.product.price * el.count;
    });
    return result;
  };

  const total = totalPrice();

  totalPrice();

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
          className=" w-full bg-black absolute z-99 right-0 h-full overflow-x-hidden"
          id="checkout"
        >
          <div
            className={`flex items-end lg:flex-row flex-col justify-end ${
              isBasketOpen && 'open'
            }
            ${animationClose && 'closed'}
            `}
            id="modal-basket"
            ref={cartListRef}
          >
            <div
              className="lg:w-8/12 w-full lg:px-8 lg:py-14 lg:px-6 px-4 lg:py-8 py-4 bg-white  lg:overflow-y-scroll overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
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
              <h2 className="md:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">
                Корзина
              </h2>
              {products.length > 0 ? (
                <div className="mt-[24px]">
                  <ul className="flex flex-col gap-4">
                    {products.map((el) => (
                      <li key={el.id}>
                        <ShoppingCartCard product={el} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="h-40 flex justify-center items-center">
                  <p>У вас пока нет добавленных товаров.</p>
                </div>
              )}
            </div>
            <form className="lg:w-96 w-full bg-gray-100  h-full"
                      >
              <div className="flex flex-col lg:h-screen md:px-8 px-4 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <h3 className="mdOnly:items-center md:text-4xl text-3xl font-black leading-9 text-gray-800">
                    Заказ
                  </h3>
                  <div className="mt-8 md:mb-16">
                    <div className="flex items-center justify-between">
                      <p className="text-base leading-none text-gray-800">
                        Номер заказа
                      </p>
                      {products.length > 0 ? (
                        <p className="text-base leading-none text-gray-800">
                          1
                        </p>
                      ) : (
                        <p>-</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Количество товаров
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        {products.length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className='mb-8 md:text-2xl text-2xl font-black leading-9 text-gray-800'>Контактные данные</h3>
                   <div className="flex flex-col gap-4">
                   <div className="">
                      <label htmlFor="name">Имя</label>
                      <input type="text" value={123}/>
                    </div>
                    <div className="">
                      <label htmlFor="name">Фамилия</label>
                      <input type="text" value={123}/>
                    </div>
                    <div className="">
                      <label htmlFor="name">Номер</label>
                      <input type="number" value={123}/>
                    </div>
                    <div className="">
                      <label htmlFor="name">Имя</label>
                      <textarea    className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] resize-none : ''
            }`} value={123}/>
                    </div>
                   </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between md:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Общая стоимость
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      {total}
                    </p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white ">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;