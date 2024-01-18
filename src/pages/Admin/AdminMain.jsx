import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingOrders,
  getOrders,
} from '../../Redux/orders/ordersSelectors';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import SkeletonProfileOrders from '../../components/Loader/SkeletonProfileOrders';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { useEffect } from 'react';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { formattedYearMonth } from '../../helpers/formattedDate';
import { Link } from 'react-router-dom';

export const AdminMain = () => {
  const dispatch = useDispatch();
  

  const orders = useSelector(getOrders) || [];
  const isLoadingOrders = useSelector(getIsLoadingOrders);
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);

  const countQuantityProducts = () => {
    let counter = 0;
    const productsArr = orders.map((el) => el.order.products);
    productsArr.map((el) => el.map((el) => (counter += el.count)));
    return counter;
  };

  const sumAllProducts = () => {
    let counter = 0;
    orders.map((el) => (counter += el.order.total));
    return counter;
  };

  const topProducts = () => {
    let productsArr = [];
    orders.map((el) =>
      el.order.products
        .map((el) => el.product)
        .map((el) => productsArr.push(el.name))
    );

    // Подсчет количества повторений каждого товара
    const productCount = productsArr.reduce((acc, productName) => {
      acc[productName] = (acc[productName] || 0) + 1;
      return acc;
    }, {});

    // Преобразование объекта в массив пар [productName, count]
    const productCountArray = Object.entries(productCount);

    // Сортировка массива по убыванию количества
    const sortedProductCount = productCountArray.sort((a, b) => b[1] - a[1]);

    // Получение топ-5 товаров

    return sortedProductCount;
  };

  const topCategory = () => {
    let categoriesArr = [];
    orders.map((el) =>
      el.order.products
        .map((el) => el.product)
        .map((el) => categoriesArr.push(el.category))
    );

    // Подсчет количества повторений каждого товара
    const categoryCount = categoriesArr.reduce((acc, categoryName) => {
      acc[categoryName] = (acc[categoryName] || 0) + 1;
      return acc;
    }, {});

    const categoryCountArray = Object.entries(categoryCount);

    const sortedCategoryCount = categoryCountArray.sort((a, b) => b[1] - a[1]);


    return sortedCategoryCount[0][0];
  };

  const topUsers = () => {
    let usersArr = [];

    orders
      .filter((el) => el?.order.user)
      .forEach((el) => {
        const user = el.order.user.email;
        const total = el.order.total;

        const existingUser = usersArr.find((u) => u[0] === user);

        if (existingUser) {
          existingUser[1] += total;
        } else {
          usersArr.push([user, total]);
        }
      });

    // Сортировка массива по убыванию суммы заказов
    const sortedUsers = usersArr.sort((a, b) => b[1] - a[1]);

    // Получение топ-5 пользователей
    const top5Users = sortedUsers.slice(0, 5);

    return top5Users;
  };

  const getMonthlySales = () => {
    let monthlySales = [];
    let productsArr = []

    orders.forEach((el) => {
      const createdAt = el.createdAt;
      const total = el.order.total;
      el.order.products.map(el => productsArr.push(el.product.name))


      


      const productCount = productsArr.reduce((acc, productName) => {
        acc[productName] = (acc[productName] || 0) + 1;
        return acc;
      }, {});

      const productCountArray = Object.entries(productCount);
      
      const sortedUsers = productCountArray.sort((a, b) => b[1] - a[1]);

      const topProduct = sortedUsers[0];
  
      const formattedDate = formattedYearMonth(createdAt);

      const existingMonth = monthlySales.find(
        (entry) => entry[0] === formattedDate
      );

      if (existingMonth) {
        existingMonth[1] += total;
      } else {
        monthlySales.push([formattedDate, total, topProduct[0]]);
      }
    });

    return monthlySales;
  };

  const top = topProducts();
  const usersTop = topUsers();
  const monthlySales = getMonthlySales();


  return (
    <>
      {!isLoadingOrders && !isLoadingProducts ? (
        <div>
          <div className="flex p-2 gap-2 flex-wrap">
        <Link
        to='/admin/products'
          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Список товаров
        </Link>
        <Link
                to='/admin/orders'

          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Все заказы
        </Link>
        <Link
                        to='/admin/users'

          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Все пользователи
        </Link>
        <Link
                                to='/admin/posts'

          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Список постов
        </Link>
      </div>
          <div className="flex flex-col pt-4 mb-12">
            <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
              <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-3 ">
                    <span className="flex items-center text-brand-500 d">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="font-dm text-sm font-medium text-gray-600">
                    Заказов
                  </h4>
                  <p className="text-xl font-bold text-navy-700 d">
                    {orders.length}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-3 ">
                    <span className="flex items-center text-brand-500 d">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="h-6 w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                        <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                        <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="font-dm text-sm font-medium text-gray-600">
                    Количество товаров заказанно
                  </h4>
                  <p className="text-xl font-bold text-navy-700 d">
                    {orders && orders.length > 0 ? countQuantityProducts() : "0"}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-3 ">
                    <span className="flex items-center text-brand-500 d">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="font-dm text-sm font-medium text-gray-600">
                    Общая сумма заказов
                  </h4>
                  <p className="text-xl font-bold text-navy-700 d">
                    {products && products.length > 0 ? sumAllProducts() : "0"}

                  </p>
                </div>
              </div>
              <div className="p-4 relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="font-dm text-sm font-medium text-gray-600">
                    Топ 5 товаров
                  </h4>
                  <ul>
                  {products && products.length > 0 ? top.splice(0, 5).map((el, index) => (
                      <li
                        key={index}
                        className="text-[14px] font-bold text-navy-700 d"
                      >
                        {`${index + 1}) ${el.join(': ')}`}
                      </li>
                    )) : "-"}
                  </ul>
                </div>
              </div>
              <div className="p-4 relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <h4 className="font-dm text-sm font-medium text-gray-600">
                    Топ 5 покупателей
                  </h4>
                  <ul>
                  {products && products.length > 0 ? usersTop.splice(0, 5).map((el, index) => (
                      <li
                        key={index}
                        className="text-[14px] font-bold text-navy-700 d"
                      >
                        {`${index + 1}) ${el.join(': ')}`}
                      </li>
                    )) : "-"}
                  </ul>
                </div>
              </div>
              <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                  <div className="rounded-full bg-lightPrimary p-3 ">
                    <span className="flex items-center text-brand-500 d">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="h-6 w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                  <p className="font-dm text-sm font-medium text-gray-600">
                    Топ категория
                  </p>
                  <h4 className="text-xl font-bold text-navy-700 d">
                  {orders && orders.length > 0 ? topCategory() : "-"}

                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-6">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                <div>
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                    Отчет по месяцам
                  </h6>

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
                    <strong>{orders.length} заказов</strong> всего принято 
                  </p>
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
              <div className="overflow-x-scroll px-0 pt-0">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Дата
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Сумма заказа
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Товар месяца
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlySales.map((el) => (
                      <>
                        <tr>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="flex items-center gap-4">
                              {el[0]}
                            </div>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el[1]}
                            </p>
                          </td>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el[2]}
                            </p>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonProfileOrders />
      )}
    </>
  );
};
