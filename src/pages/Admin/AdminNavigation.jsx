import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Svg from '../../components/Svg/Svg';

const AdminNavigation = ({ onToggleDashboard }) => {
  return (
    <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className=" text-black">
          <Breadcrumbs />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onToggleDashboard()}
            className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid lg:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                strokeWidth="3"
                className="h-6 w-6 text-blue-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <Link to="/" className=" hidden -m-1.5 p-1.5 lg:flex justify-center items-center gap-2">
              <Svg id={'logo'} size={42}></Svg>
              <div className="flex flex-col  leading-none ">
              <p className="text-[#cb1183] font-extrabold text-[20px] uppercase ">Dream</p>
              <p className="text-[white] bg-[#f96786] text-center font-extrabold text-[20px] uppercase ">Fatin</p>
              </div>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavigation;
