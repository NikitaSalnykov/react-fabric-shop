import { Fragment, useEffect, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Svg from '../Svg/Svg';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { Link, NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import { getCart } from '../../Redux/cart/cartSelectors';
import { getUser, selectAuth, getRefresh } from '../../Redux/auth/auth-selectors';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import Leaving from '../Modals/Leaving/Leaving';
import { getFavorite } from '../../Redux/favorites/favoriteSlice';
import { LoaderSpin } from '../Loader/LoaderSpin/LoaderSpin';
import { Logo } from '../Logo/Logo';

const links = [
  {
    name: 'Основные ткани',
    description: 'Огромный выбор основных тканей',
    href: '/all?value=main',
    icon: 'icon-main-fabric',

  },
  {
    name: 'Аксессуары',
    description: 'Создавайте незабываемые образы',
    href: '/all?value=accessories',
    icon: 'icon-accessories',

  },
  {
    name: 'Все категории',
    description: 'Просмотреть все категории товаров',
    href: '/categories',
    icon: 'icon-search',
  },
  {
    name: 'Акционные предложения',
    description: 'Покупайте по выгодным ценам',
    href: '/all?value=sale',
    icon: 'icon-sale',
    target: "_blank"

  },
  {
    name: 'Условия доставки',
    description: 'Доставим товар удобным Вам способом',
    href: '/about',
    icon: 'icon-delivery',
  },
];

const callsToAction = [
  { name: 'Группа facebook', href: '#', icon: UserGroupIcon },
  { name: 'Связаться с нами', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const basketRoot = document.querySelector('#basket');

const Header = () => {
  const { token } = useSelector(selectAuth);
  const user = useSelector(getUser) || '';
  const isRefreshUser = useSelector(getRefresh)
  const cartProducts = useSelector(getCart);
  const favoriteProducts = useSelector(getFavorite);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  const onToogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  const onToggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <>
      <header className=" bg-[white] border-b-[1px] border-gray">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <Logo size={42} textSize={20}/>
          </div>
          <div className="flex lg:hidden gap-6 items-center">
            <div className=" relative flex gap-3">
            <Link to="/favorites">
              <Svg id={'icon-favorite'} size={22} />
              {favoriteProducts.length > 0 && (
                <div className=" text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4 absolute bg-slate-400 top-[-6px] left-[12px]">
                  {favoriteProducts.length}
                </div>
              )}
            </Link>
              <div onClick={onToggleBasket} className="relative cursor-pointer">
                <Svg id={'icon-basket'} size={22} />
                {cartProducts.length > 0 && (
                  <div className="text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4 absolute bg-red top-[-6px] right-[-8px]">
                    {cartProducts.length}
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6 text-gray-900">
                Продукция
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {links.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50"
                      >
                        <div
                          onClick={onToggleBasket}
                          className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                        >
                          <Svg id={item.icon} size={24}></Svg>
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-gray-900"
                            target={item.target}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <NavLink to="/all" 
 className="font-semibold leading-6 text-gray-900">
              Поиск
            </NavLink>
            <NavLink to="/blog"                             activeClassName="active-a" 
 className="font-semibold leading-6 text-gray-900">
              Блог
            </NavLink>
            <NavLink to="/about"                             activeClassName="active-a" 
 className="font-semibold leading-6 text-gray-900">
              О нас
            </NavLink>
          </Popover.Group>
          <div className=" hidden lg:flex lg:flex-1 lg:justify-end gap-3 justify-center items-center">
            <div className="relative">
            <Link to="/favorites">
              <Svg id={'icon-favorite'} size={22} />
              {favoriteProducts.length > 0 && (
                <div className=" text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4 absolute bg-slate-400 top-[-6px] right-[-8px]">
                  {favoriteProducts.length}
                </div>
              )}
            </Link>
            </div>
            <div onClick={onToggleBasket} className="relative cursor-pointer">
              <Svg id={'icon-basket'} size={22} />
              {cartProducts.length > 0 && (
                <div className=" text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4 absolute bg-red top-[-6px] right-[-8px]">
                  {cartProducts.length}
                </div>
              )}
            </div>
            {!token ? (
              <Link
                to="/login"
                className="font-semibold leading-6 text-gray-900"
              >
                Авторизация <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              <div>
                <div className="flex items-center gap-4">
                  <Menu as="div" className="relative inline-block text-left">
                    {!isRefreshUser ? <div className="p-2 rounded-xl border-[1px]">
                      <Menu.Button className="block antialiased font-sans text-sm text-left font-bold leading-6 text-indigo-600">
                        {user.name ? user.name : <LoaderSpin/>}{' '}
                        {user.surname ? user.surname : ''}
                      </Menu.Button>
                    </div> : <div className="p-2 rounded-xl border-[1px]">
                      <div className="gap-2 flex justify-center items-center antialiased font-sans text-sm text-left font-bold leading-6 text-indigo-600">
                      Аккаунт <LoaderSpin size={"5"}/>
                      </div>
                    </div>}

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" left-0 absolute top-[30px] z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {user.role === 'admin' && (
                          <div className="py-1">
                            <Menu.Item>
                              {() => (
                                <Link
                                  className="block px-4 py-2 text-sm"
                                  onClick={() => {
                                  }}
                                  to="/admin"
                                >
                                  Админ
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        )}
                        <div className="py-1">
                          <Menu.Item>
                            {() => (
                              <button
                                className="block px-4 py-2 text-sm"
        
                                to="/profile"
                              >
                                Заказы
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {() => (
                              <Link
                                className="block px-4 py-2 text-sm"
                  
                                to="/profile"
                              >
                                Профиль
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {() => (
                              <button
                                className="block px-4 py-2 text-sm"
                                onClick={onToogleLeavingModal}
                                href="#"
                              >
                                Выйти
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Svg id={'logo'} size={32}></Svg>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Продукция
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...links, ...callsToAction].map((item) => (
                            <Link
                              onClick={() => {
                                setMobileMenuOpen(false);
                              }}
                              key={item.name}
                              to={item.href}
                              target={item.target}
                              className="block rounded-lg py-2 pl-6 pr-3 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    to="/all"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Поиск
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    to="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Блог
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    О нас
                  </NavLink>
                </div>
                <div
                  className="py-6"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  {!token ? (
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Авторизация
                    </Link>
                  ) : (
                    <div>
                      <Link
                        to="/profile"
                        className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
                      >
                        {user.name ? user.name : 'Аккаунт'}{' '}
                        {user.surname ? user.surname : ''}
                      </Link>
                      <Link
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        to="/admin"
                      >
                        Админ-панель
                      </Link>
                      <Link
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"

                        to="/profile"
                      >
                        Ваши заказы
                      </Link>
                      <Link
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
     
                        to="/profile"
                      >
                        Профиль
                      </Link>
                      <button
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={onToogleLeavingModal}
                        href="#"
                      >
                        Выйти
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {isBasketOpen &&
          createPortal(
            <ShoppingCart
              onToggleBasket={onToggleBasket}
              isBasketOpen={isBasketOpen}
            />,
            basketRoot
          )}
      </header>
      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={onToogleLeavingModal}
      >
        <Leaving onCloseModal={onToogleLeavingModal} />
      </BasicModal>
    </>
  );
};

export default Header;
