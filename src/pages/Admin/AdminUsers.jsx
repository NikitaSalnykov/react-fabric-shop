import { Fragment, useEffect, useState } from 'react';
import { getIsRequest, getUsers } from "../../Redux/auth/auth-selectors";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../../Redux/auth/auth-operations";
import { Menu, Transition } from '@headlessui/react';
import { formattedDate } from '../../helpers/formattedDate';
import { Filter } from '../../components/Filter/Filter';
import { getFilterName } from '../../Redux/filter/filterSlice';
import { Pagination } from '../../components/Pagination/Pagination';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const isLoading = useSelector(getIsRequest);
  const filterName = useSelector(getFilterName);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };  

  const filteredUsers = (items) => {
    if (!users) return items;

    const searchFields = ['email', 'name', 'surname', 'phone'];
  
    return items
    .filter((el) =>
      searchFields.some((field) =>
        el[field].toLowerCase().includes(filterName.toLowerCase())
      )
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      // Сортировка от новых к старым
      return dateB - dateA;
    });
  };

  
  const paginatedUsers = (users) =>
  filteredUsers(users).slice((currentPage - 1) * limit, currentPage * limit);


  return       <div className="mb-4 grid grid-cols-1 gap-6">
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
      <div>
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
          Посты в блоге
        </h6>
        {!isLoading ? (
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
            <strong>{users && users.length} участников</strong> зарегистрировано
          </p>
        ) : (
          <p className=" animate-pulse">Идёт загрузка</p>
        )}
      </div>
      <div>
              <Filter nameFilter={true}/>
            </div>
    </div>
    <div className="p-6 overflow-x-scroll px-0 pt-0 pb-[10px]">
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                Почта
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                Имя
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                Телефон
              </p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                Дата регистрации
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {users && !isLoading ? (
            paginatedUsers(users).map(
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
                              {el.email ? el.email : '-'}
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
                                        onToggleDeletePostModal(el)
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
                        {el.name && el.surname && `${el.name} ${el.surname}`}
                      </p>
                    </td>

                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        {el.phone}
                      </p>
                    </td>


                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          {formattedDate(el.createdAt)}
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
      {users && !isLoading && Math.ceil(filteredUsers(users).length / limit) > 1 && <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(filteredUsers(users).length / limit)}
              />}
    </div>
  </div>
</div>;
};

export default AdminUsers;
