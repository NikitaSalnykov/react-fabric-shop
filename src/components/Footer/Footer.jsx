import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';

const Footer = () => {
  return (
    <footer className="w-full text-gray-700 bg-gray-100 body-font mt-8 md:mt-16">
      <div className="container flex flex-col flex-wrap px-5 py-12 md:py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap md:gap-9">
        <div className="md:pl-20 flex-shrink-0 justify-center items-center w-64 mx-auto text-center md:mx-0 md:text-left">
        <Link to="/" className="-m-1.5 p-1.5 flex justify-center md:justify-start items-center gap-2">
              <Svg id={'logo'} size={42}></Svg>
              <div className="flex flex-col  leading-none ">
              <p className="text-[#cb1183] font-extrabold text-[20px] uppercase ">Dream</p>
              <p className="text-[white] bg-[#f96786] text-center font-extrabold text-[20px] uppercase ">Fatin</p>
              </div>
            </Link>
          <p className="mt-2 text-sm text-gray-500">
            Лучший выбор свадебных тканей{' '}
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link className="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              О нас
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Наша команда
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <div className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Блог
                  </div>
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Поддержка
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <Link
                  to="/about"
                  state={{ section: 'delivery' }}
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  state={{ section: 'pickup' }}
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Самовывоз со склада
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  state={{ section: 'returns' }}
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Возврат
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Ткани
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <Link
                  to="/categories/fatin"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Фатин
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/atlas"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Атлас
                </Link>
              </li>
              <li>
                <Link
                  to="/all?value=main"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Основные ткани
                </Link>
              </li>
              <li>
                <Link
                  to="/all?value=accessories"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Аксессуары
                </Link>
              </li>
              <li>
                <Link
                  to="/all?value=accessories"
                  target="_blank"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Скидки
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Все категории
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Связаться с нами
            </h2>
            <nav className="mb-10 list-none flex flex-col gap-3">
              <li>
                <a href="mailto:test@gmail.com" className="text-gray-500 cursor-pointer hover:text-gray-900">
                  test@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Адрес
                </p>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-500 cursor-pointer hover:text-gray-900">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 capitalize text-center">
            © 2024 All rights reserved{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
