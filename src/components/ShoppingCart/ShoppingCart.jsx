import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../Redux/cart/cartSelectors';
import ShoppingCartCard from './ShoppingCartCard';
import { useFormik } from 'formik';
import { orderShoppingCart } from '../../schemas/OrderShoppingCart';
import {
  createOrder,
  fetchOrdersCount,
} from '../../Redux/orders/ordersOperation';
import {
  getIsLoadingOrders,
  getIsOrderCreated,
  getOrdersCount,
} from '../../Redux/orders/ordersSelectors';
import { resetOrderCreated } from '../../Redux/orders/ordersSlice';
import { resetCart } from '../../Redux/cart/cartSlice';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import OrderModal from '../Modals/BasicModal/OrderModal';
import { getUser } from '../../Redux/auth/auth-selectors';
import { resultPrice } from '../../helpers/resultPrice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-[65px] left-0 xl:left-[85px]';

const ShoppingCart = ({ onToggleBasket, isBasketOpen }) => {
  const cartListRef = useRef(null);
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const user = useSelector(getUser) ?? {};

  const [animationClose, setAnimationClose] = useState(false);
  const [isModalOrderOpen, setModalOrderOpen] = useState(false);
  const products = useSelector(getCart);
  const dispatch = useDispatch();
  const isOrderCreated = useSelector(getIsOrderCreated);
  const isLoadingOrder = useSelector(getIsLoadingOrders);
  const ordersCount = useSelector(getOrdersCount);
  const orderNumber = `${dayOfMonth}${ordersCount ? ordersCount : "00"}`;

  useEffect(() => {
    dispatch(fetchOrdersCount());
  }, [dispatch]);


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
      if (event.target.id === 'modal-basket') {
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

  const onTogleOrderModal = () => {
    setModalOrderOpen(!isModalOrderOpen);
  };

  const handleClickClose = () => {
    setAnimationClose(true);
    setTimeout(() => {
      onToggleBasket();
    }, 250);
  };

  const totalPrice = () => {
    let result = 0;
    products.map((el) => {
      result += +resultPrice(el.type === "roll" ? Number(el.product.price) * el.count : Number(el.product.pricePerMeter) * el.count, el.product.discount ) ;
    });
    return result;
  };

  const total = totalPrice();

  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      surname: user.surname || '',
      tel: user.phone || '',
      delivery: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: orderShoppingCart,

    onSubmit: ({ name, surname, tel, delivery }) => {
      const info = products
        .map((el, index) => {
          return `${index + 1}) Название: ${el.product.name}, цвет: ${
            el.product.color
          }, категория: ${el.product.category}, Тип: ${el.product.category !== "Фурнитура" ? (el.type === "roll" ? "рулон" : "метраж") : "шт."}, количество: ${
            el.count
          }, цена: ${el.product.discount && el.product.discount > 0 
            ? 
            resultPrice(el.type && el.type === "roll" ? el.product.price : el.product.pricePerMeter, el.product.discount) 
            :
            resultPrice(el.type && el.type === "roll" ? el.product.price : el.product.pricePerMeter)} ${el.product.discount && el.product.discount > 0 ? `Включая скидку ${el.product.discount}%` : ``}.`;
        })
        .join(' ');
      const newOrder = {
        orderNumber,
        name,
        type: "roll",
        surname,
        tel,
        delivery,
        info,
        total,
        products,
        user,
        
      };

      console.log(newOrder);
      // dispatch(createOrder({ order: newOrder }));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const resetFields = () => {
    formik.setFieldValue('name', '');
    formik.setFieldValue('surname', '');
    formik.setFieldValue('tel', '');
    formik.setFieldValue('delivery', '');
  };

  useEffect(() => {
    if (isOrderCreated) {
      setModalOrderOpen(true);
    }
  }, [isOrderCreated, dispatch]);

  const handleConfirmOrder = () => {
    dispatch(resetOrderCreated());
    resetFields();
    dispatch(resetCart());
    handleClickClose();
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
                        <ShoppingCartCard
                          product={el}
                          closeModal={handleClickClose}
                        />
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
            <form
              noValidate
              autoComplete="off"
              className="lg:w-96 w-full bg-gray-100  h-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col lg:h-screen md:px-8 px-4 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <h3 className="mdOnly:items-center md:text-4xl text-3xl font-black leading-9 text-gray-800 text-center lg:text-start">
                    Заказ
                  </h3>
                  <div className="mt-8  sm:w-[400px] mx-auto lg:w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-base leading-none text-gray-800">
                        Номер заказа
                      </p>
                      {products.length > 0 && ordersCount ? (
                        <p className="text-base leading-none text-gray-800">
                          {orderNumber}
                        </p>
                      ) : (
                        <p>-</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Количество позиций
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        {products.length}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Количество товаров
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        {products
                          .map((el) => {
                            let result = 0;
                            result += el.count;
                            return result;
                          })
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue,
                            0
                          )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <h3 className="mb-8 md:text-2xl text-2xl font-black leading-9 text-gray-800 text-center">
                    Контактные данные
                  </h3>
                  <div className=" flex flex-col gap-4 sm:w-[400px] mx-auto lg:w-full">
                    <div className="relative flex-col gap-[2px] flex">
                      <label
                        className={`${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        htmlFor="name"
                      >
                        Имя
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        className={` flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] ${
                          errors['name'] && 'border-rose-400'
                        } ${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        value={formikValues['name']}
                        onChange={formik.handleChange}
                      />
                      {errors['name'] && (
                        <p className={errorTextStyle}>{errors['name']}</p>
                      )}
                    </div>
                    <div className="relative flex-col gap-[2px] flex">
                      <label
                        className={`${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        htmlFor="surname"
                      >
                        Фамилия
                      </label>
                      <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Фамилия"
                        className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] ${
                          errors['surname'] && 'border-rose-400'
                        } ${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        value={formikValues['surname']}
                        onChange={formik.handleChange}
                      />
                      {errors['surname'] && (
                        <p className={errorTextStyle}>{errors['surname']}</p>
                      )}
                    </div>
                    <div className="relative flex-col gap-[2px] flex">
                      <label
                        className={`${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        htmlFor="number"
                      >
                        Номер
                      </label>
                      <input
                        id="tel"
                        name="tel"
                        type="tel"
                        placeholder="Номер телефона"
                        className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] ${
                          errors['tel'] && 'border-rose-400'
                        } ${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        value={formikValues['tel']}
                        onChange={formik.handleChange}
                      />
                      {errors['tel'] && (
                        <p className={errorTextStyle}>{errors['tel']}</p>
                      )}
                    </div>
                    <div className="relative flex-col gap-[2px] flex">
                      <label
                        className={`${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        htmlFor="delivery"
                      >
                        Укажите адрес и способ доставки
                      </label>
                      <textarea
                        id="delivery"
                        name="delivery"
                        type="text"
                        placeholder="Город, почтовая служба, отделение"
                        className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] resize-none ${
                          errors['delivery'] && 'border-rose-400'
                        } ${
                          products.length <= 0 &&
                          'opacity-50 pointer-events-none'
                        }`}
                        value={formikValues['delivery']}
                        onChange={formik.handleChange}
                      />
                      {errors['delivery'] && (
                        <p className={errorTextStyle}>{errors['delivery']}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="sm:w-[400px] mx-auto lg:w-full">
                  <div className="flex items-center pb-6 justify-between md:pt-5 pt-10 ">
                    <p className="text-2xl leading-normal text-gray-800">
                      Общая стоимость
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      {total}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className={`"text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white " ${
                      products.length <= 0 && 'opacity-50 pointer-events-none'
                    } ${isLoadingOrder && 'opacity-50 pointer-events-none'}
                    `}
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BasicModal isOpen={isModalOrderOpen} onCloseModal={handleConfirmOrder}>
        <OrderModal
          onCloseModal={onTogleOrderModal}
          onConfirm={handleConfirmOrder}
        />
      </BasicModal>
    </div>
  );
};

export default ShoppingCart;
