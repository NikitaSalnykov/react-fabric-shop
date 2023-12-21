import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../Redux/cart/cartSelectors';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCart = ({ onToggleBasket, isBasketOpen }) => {
  const modalRef = useRef(null);
  const [animationClose, setAnimationClose] = useState(false);
  const products =  useSelector(getCart)

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

  const [total, setTotal] = useState(0)

  const sumTotal = (price) => {
    setTotal(total + price)
    console.log(total);
  }

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
            className={`flex items-end lg:flex-row flex-col justify-end ${
              isBasketOpen && 'open'
            }
            ${animationClose && 'closed'}
            `}
            id="modal-basket"
          >
            <div
              className="lg:w-8/12 w-full lg:px-8 lg:py-14 lg:px-6 px-4 lg:py-8 py-4 bg-white  overflow-y-scroll overflow-x-hidden lg:h-screen h-auto"
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
              <div className="mt-[24px]">
                <ul className='flex flex-col gap-4'>
                 {products.map(el => (
                    <li key={el.id}> 
                      <ShoppingCartCard product={el} sumTotal={sumTotal}/>
                     </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-96 w-full bg-gray-100  h-full">
              <div className="flex flex-col lg:h-screen md:px-8 px-4 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="mdOnly:items-center md:text-4xl text-3xl font-black leading-9 text-gray-800">
                    Заказ
                  </p>
                 <div className=" pt-16 mdOnly:pb-16">
                 <div className="flex items-center justify-between">
                    <p className="text-base leading-none text-gray-800">
                      Номер заказа
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      1
                    </p>
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
