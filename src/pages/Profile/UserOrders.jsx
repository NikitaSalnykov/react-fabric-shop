import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingOrders,
  getOrders,
} from '../../Redux/orders/ordersSelectors';
import { getUser } from '../../Redux/auth/auth-selectors';
import { useEffect, useState } from 'react';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { formattedDate } from '../../helpers/formattedDate';
import { Link } from 'react-router-dom';
import { categoryURL } from '../../helpers/categoryURL';
import { Pagination } from '../../components/Pagination/Pagination';
import SkeletonProfileOrders from '../../components/Loader/SkeletonProfileOrders';

export const UserOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector(getOrders) || [];
  const isLoading = useSelector(getIsLoadingOrders);

  const user = useSelector(getUser) || {};

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };

  const userOrders = (orders) => {
    return orders.filter((el) => el.order.user?._id === user._id);
  };

  const paginatedOrders = (orders) =>
    userOrders(orders).slice((currentPage - 1) * limit, currentPage * limit);

  return (
    <>
      {!isLoading ? (
        <div className="py-4">
          <h3 className="mb-4 text-md font-medium text-gray-900 title-font">
            Мои заказы:
          </h3>

          {userOrders(orders).length > 0 && (
            <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600 mb-4">
              Количество заказов: <strong>{userOrders(orders).length}</strong>
            </p>
          )}
          <div className=" flex flex-col gap-4">
            {paginatedOrders(orders) && paginatedOrders(orders).length > 0 ? (
              paginatedOrders(orders).map((el, index) => (
                <div
                  key={el._id}
                  className="mdOnly:w-[450px] relative border-[1px] border-gray-300 rounded-md flex flex-col justify-center p-4 items-center gap-4"
                >
                  <div className="  flex justify-center items-center gap-4">
                    <div className="absolute top-[2px] right-2 flex justify-center item-center p-2 border-gray-300 font-bold">
                      <p>#{index + 1}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="border-[1px] border-gray-300 rounded-md flex justify-center item-center p-2">
                        <p>
                          Номер заказа: <strong>{el.order.orderNumber}</strong>
                        </p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-md flex justify-center item-center p-2">
                        <p>
                          Дата заказа:{' '}
                          <strong>{formattedDate(el.updatedAt)}</strong>
                        </p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-md flex justify-center item-center p-2">
                        <p>
                          Указанная доставка:{' '}
                          <strong>
                            {el.order.delivery
                              ? el.order.delivery
                              : 'Не указано'}
                          </strong>
                        </p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-md flex justify-center item-center p-2">
                        <p>
                          Общая стоимость:{' '}
                          <strong>
                            {el.order.total ? el.order.total : '-'}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p>Список товаров:</p>
                    <div className="w-full flex flex-row">
                      {el.order.products && (
                        <div className="flex flex-wrap justify-between">
                          {el.order.products.map((el, index) => (
                            <div
                              key={index}
                              className=" flex p-4 items-center gap-4 md:gap-2 w-[250px] md:w-[300px] lg:w-[400px]"
                            >
                              <div className="w-[50px] h-[50px] overflow-hidden rounded-xl">
                                <img
                                  className="w-[100%] h-[100%] object-cover"
                                  src={el.product.mainPhoto}
                                  alt={el.product.name}
                                />
                              </div>
                              <div className="gap-[2px] md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-around">
                                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                                  Код товара:{' '}
                                  <span className=" font-bold">
                                    {el.product.article}
                                  </span>
                                </p>
                                <div className="flex items-center justify-between w-full pt-1">
                                  <Link
                                    to={`/categories/${categoryURL(
                                      el.product.category
                                    )}/${el.product._id}`}
                                    className="text-base font-black leading-none text-gray-800 "
                                  >
                                    {el.product.name}
                                  </Link>
                                </div>
                                <p className="text-base text-gray-900 text-xs">
                                  Цвет: <strong>{el.product.color}</strong>
                                </p>
                                <p className="text-base text-gray-900 text-xs">
                                  Количество: <strong>{el.count}</strong>
                                </p>
                                <p className="text-base text-gray-900 text-xs">
                                  Цена: <strong>{el.product.price}</strong>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>У Вас нет заказов.</div>
            )}
          </div>
          {Math.ceil(userOrders(orders).length / limit) > 1 && (
            <Pagination
              handleClickPage={handleClickPage}
              totalPages={Math.ceil(userOrders(orders).length / limit)}
            />
          )}
        </div>
      ) : (
        <SkeletonProfileOrders />
      )}
    </>
  );
};
