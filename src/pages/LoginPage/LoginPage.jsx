import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="contayner py-20 md:py-24 lg:py-40">
      <div className="flex justify-center w-full">
        <div className="max-w-2xl">
          <div className=" md:w-[600px] bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Авторизация
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Ваш email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Ваш пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="text-sm ml-3">
                    <label
                      htmlFor="remember"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Запомнить меня
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
                >
                  Забыли пароль?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Войти
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Ещё не зарегистрированы?{' '}
                <Link
                  to="/registration"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Зарегистрироваться
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
