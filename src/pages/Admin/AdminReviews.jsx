import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getReviews, getIsLoadingReview } from '../../Redux/reviews/reviewsSelectors';
import { deleteReview, fetchReviews } from '../../Redux/reviews/reviewsOperation';
import { Menu, Transition } from '@headlessui/react';
import { formattedDate } from '../../helpers/formattedDate';

const AdminReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);
  const isLoadingReviews = useSelector(getIsLoadingReview);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);


  return (
      <div className="mb-4 grid grid-cols-1 gap-6">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                Отзывы про товары
              </h6>
              {!isLoadingReviews ? (
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
                  <strong>{reviews.length} отзывов</strong> на сайте
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
                      Отзыв к продукту
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Имя пользователя
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Звёзд
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Содержание
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Дата создания
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews && !isLoadingReviews ? (
                  reviews.map(
                    (el) =>
                      el && (
                        <tr key={el._id ? el._id : '-'}>

<td className="py-3 px-5 border-b border-blue-gray-50">
                            <button onClick={() => dispatch(deleteReview(el._id))} className="block  antialiased font-sans text-xs font-medium text-blue-gray-600 text-center">
                              Удалить
                            </button>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block  antialiased font-sans text-xs font-medium text-blue-gray-600 text-center">
                              {el.author}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block  antialiased font-sans text-xs font-medium text-blue-gray-600 text-center">
                              {el.rating}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el.text
                                ? el.text
                                    .split('')
                                    .splice(0, 120)
                                    .join('') + '...'
                                : '-'}
                            </p>
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
  );
};

export default AdminReviews;
