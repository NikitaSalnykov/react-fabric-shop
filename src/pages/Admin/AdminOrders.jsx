import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingOrders,
  getOrders,
} from '../../Redux/orders/ordersSelectors';
import { Fragment, useEffect, useState } from 'react';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { Menu, Transition } from '@headlessui/react';
import { formattedDate } from '../../helpers/formattedDate';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import DeleteOrder from '../../components/Modals/AdminModals/DeleteOrder';

const AdminOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);
  const isLoadingOrders = useSelector(getIsLoadingOrders);
  const [isModalDeleteOrderOpen, setModalDeleteOrderOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const onTogleDeleteOrderModal = (order) => {
    setSelectedOrder(order);
    setModalDeleteOrderOpen(!isModalDeleteOrderOpen);
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-6">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                Заказы
              </h6>
              {!isLoadingOrders ? (
                <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <strong>{orders.length} заказов</strong> принято
                </p>
              ) : (
                <p className=" animate-pulse">Идёт загрузка</p>
              )}
            </div>
            <button
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r5:"
              className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currenColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-[100px]">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Номер Заказа
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Заказчик
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Телефон
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Сумма заказа
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Товары
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Дата
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders && !isLoadingOrders ? (
                  orders.map(
                    (el) =>
                      el && (
                        <tr key={el._id ? el._id : '-'}>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="flex items-center gap-4">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div className="p-2 rounded-xl border-[1px]">
                                  <Menu.Button className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold text-left">
                                    {el.order.orderNumber
                                      ? el.order.orderNumber
                                      : '-'}
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className=" left-0 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {() => (
                                          <button
                                            className="block px-4 py-2 text-sm"
                                            onClick={() =>
                                              onTogleDeleteOrderModal(el)
                                            }
                                            href="#"
                                          >
                                            Delete
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el.order.name ? el.order.name : '-'}{' '}
                              {el.order.surname ? el.order.surname : ''}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el.order.tel ? el.order.tel : '-'}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="w-10/12">
                              <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                                {el.order.total ? el.order.total : '-'}
                              </p>
                              <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                <div
                                  className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                  style={{ width: '60%' }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="w-[300px]">
                              <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                                {el.order.info ? el.order.info : '-'}
                              </p>
                              <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                <div
                                  className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                  style={{ width: '60%' }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="w-10/12">
                              <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                                {formattedDate(el.updatedAt)}
                              </p>
                              <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                <div
                                  className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                  style={{ width: '60%' }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                  )
                ) : (
                  <tr>
                    <td>
                      <div className="p-4 animate-pulse">Идёт загрузка</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <BasicModal
        isOpen={isModalDeleteOrderOpen}
        onCloseModal={onTogleDeleteOrderModal}
      >
        <DeleteOrder
          onCloseModal={onTogleDeleteOrderModal}
          order={selectedOrder}
        />
      </BasicModal>
    </div>
  );
};

export default AdminOrders;
