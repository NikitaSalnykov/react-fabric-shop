import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { formattedDate } from '../../helpers/formattedDate';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import DeletePost from '../../components/Modals/AdminModals/DeletePost';
import { getIsLoadingPosts, getPosts } from '../../Redux/posts/postsSelectors';
import { fetchPosts, updateMain } from '../../Redux/posts/postsOperation';
import AddPost from '../../components/Modals/AdminModals/AddPost';

const AdminOrders = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const isLoadingPosts = useSelector(getIsLoadingPosts);
  const [isModalDeletePostOpen, setModalDeletePostOpen] = useState(false);
  const [isModalPostCreateOpen, setModalPostCreateOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, isModalPostCreateOpen]);

  const onToggleDeletePostModal = (post) => {
    setSelectedPost(post);
    setModalDeletePostOpen(!isModalDeletePostOpen);
  };

  const onTogglePostCreateModal = (post) => {
    setSelectedPost(post);
    setModalPostCreateOpen(!isModalPostCreateOpen);
  };

  return (
    <div>
      <div className="flex mb-4 gap-2">
        <button
          onClick={() => {
            setModalPostCreateOpen(true);
          }}
          className="w-29 h-14 bg-red rounded-[10px] flex justify-center items-center text-white p-2"
        >
          Добавить пост
        </button>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden lg:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                Посты в блоге
              </h6>
              {!isLoadingPosts ? (
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
                  <strong>{posts.length} постов</strong> загружено
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
                      Название
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Содержание
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Описание
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Главная
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                      Создано/Отред.
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts && !isLoadingPosts ? (
                  posts.map(
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
                                    {el.title ? el.title : '-'}
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
                              {el.text
                                ? el.text.split('').splice(0, 20).join(' ') +
                                  '...'
                                : '-'}{' '}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                              {el.text
                                ? el.description
                                    .split('')
                                    .splice(0, 20)
                                    .join(' ') + '...'
                                : '-'}{' '}
                            </p>
                          </td>

                          <td className="py-3 px-5 border-b border-blue-gray-50">
                            <input
                              type="checkbox"
                              id={el._id}
                              name={el._id}
                              checked={el.main}
                              onChange={(e) => {
                                dispatch(
                                  updateMain({
                                    id: el._id,
                                    arg: { main: e.target.checked },
                                  })
                                );
                                dispatch(fetchPosts());
                              }}
                            />
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
        isOpen={isModalDeletePostOpen}
        onCloseModal={onToggleDeletePostModal}
      >
        <DeletePost
          onCloseModal={onToggleDeletePostModal}
          post={selectedPost}
        />
      </BasicModal>
      <BasicModal
        isOpen={isModalPostCreateOpen}
        onCloseModal={onTogglePostCreateModal}
      >
        <AddPost onCloseModal={onTogglePostCreateModal} post={selectedPost} />
      </BasicModal>
    </div>
  );
};

export default AdminOrders;
