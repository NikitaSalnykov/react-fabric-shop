import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsOperation';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { useEffect, useState } from 'react';
import AddProduct from '../../components/Modals/AdminModals/AddProduct';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';

import AddCategories from '../../components/Modals/BasicModal/AddCategories';
import { formattedDate } from '../../helpers/formattedDate';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import EditProduct from '../../components/Modals/AdminModals/EditProduct';
import DeleteProduct from '../../components/Modals/AdminModals/DeleteProduct';
import { Link } from 'react-router-dom';
import { categoryURL } from '../../helpers/categoryURL';
import { Filter } from '../../components/Filter/Filter';
import { getFilterName } from '../../Redux/filter/filterSlice';
import { Pagination } from '../../components/Pagination/Pagination';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const filterName = useSelector(getFilterName);

  const [isModalProductOpen, setModalProductOpen] = useState(false);
  const [isModalCategoryOpen, setModalCategoryOpen] = useState(false);
  const [isModalEditProductOpen, setModalEditProductOpen] = useState(false);
  const [isModalDeleteProductOpen, setModalDeleteProductOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, isModalProductOpen]);

  const onTogleProductModal = () => {
    setModalProductOpen(!isModalProductOpen);
  };

  const onTogleCategoryModal = () => {
    setModalCategoryOpen(!isModalCategoryOpen);
  };

  const onTogleEditProductModal = (product) => {
    setSelectedProduct(product);
    setModalEditProductOpen(!isModalEditProductOpen);
  };

  const onTogleDeleteProductModal = (product) => {
    setSelectedProduct(product);
    setModalDeleteProductOpen(!isModalDeleteProductOpen);
  };

  const filteredProducts = (items) => {
    if (!products) return items;
    return items.filter((el) => el && el.name.toLowerCase().includes(filterName.toLowerCase())).sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return dateB - dateA;
    });
  };

  
  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };  

    
  const paginatedProducts = (product) =>
  filteredProducts(product).slice((currentPage - 1) * limit, currentPage * limit);


  return (
    <div className="">
      <div className="flex mb-4 gap-2">
        <button
          onClick={() => {
            setModalProductOpen(true);
          }}
          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Добавить товар
        </button>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex flex-col gap-y-4  md:items-center md:flex-row md:justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                Товары
              </h6>
              {!isLoadingProducts ? (
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
                  <strong>{products.length} товаров</strong> активны
                </p>
              ) : (
                <p className=" animate-pulse">Идёт загрузка</p>
              )}
            </div>
            <div>
              <Filter nameFilter={true}/>
            </div>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-[100px]">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Название
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Категория
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Цвет
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Цена
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Создан/Изменен
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products && !isLoadingProducts ? (
                  paginatedProducts(products).map(
                    (el) =>
                      el && (
                        <tr key={el._id ? el._id : '-'}>
                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="flex items-center gap-4">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold text-left">
                                    {el.name ? el.name : '-'}
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
                                        {({ active }) => (
                                          <Link
                                            onClick={() =>
                                              onTogleEditProductModal(el)
                                            }
                                            to={`/categories/${categoryURL(
                                              el.category
                                            )}/${el._id}`}
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'block px-4 py-2 text-sm'
                                            )}
                                          >
                                            Перейти
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={() =>
                                              onTogleEditProductModal(el)
                                            }
                                            href="#"
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'block px-4 py-2 text-sm'
                                            )}
                                          >
                                            Редактировать
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={() =>
                                              onTogleDeleteProductModal(el)
                                            }
                                            href="#"
                                            className={classNames(
                                              active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                              'block px-4 py-2 text-sm'
                                            )}
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
                              {el.category ? el.category : '-'}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el.color ? el.color : '-'}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <div className="w-10/12">
                              <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                                {el.price ? el.price : '-'}
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
            {products && !isLoadingProducts  && Math.ceil(filteredProducts(products).length / limit) > 1 && <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(filteredProducts(products).length / limit)}
              />}
          </div>
        </div>
      </div>
      <BasicModal
        isOpen={isModalProductOpen}
        onCloseModal={onTogleProductModal}
      >
        <AddProduct onCloseModal={onTogleProductModal} />
      </BasicModal>
      <BasicModal
        isOpen={isModalCategoryOpen}
        onCloseModal={onTogleCategoryModal}
      >
        <AddCategories onCloseModal={onTogleCategoryModal} />
      </BasicModal>
      <BasicModal
        isOpen={isModalEditProductOpen}
        onCloseModal={onTogleEditProductModal}
      >
        <EditProduct
          onCloseModal={onTogleEditProductModal}
          product={selectedProduct}
        />
      </BasicModal>
      <BasicModal
        isOpen={isModalDeleteProductOpen}
        onCloseModal={onTogleDeleteProductModal}
      >
        <DeleteProduct
          onCloseModal={onTogleDeleteProductModal}
          product={selectedProduct}
        />
      </BasicModal>
    </div>
  );
};

export default AdminProducts;
