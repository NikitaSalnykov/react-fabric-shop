import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/auth/auth-operations';
import { useEffect, useState } from 'react';
import { LoginSchma } from '../../schemas/LoginSchma';
import { getAuthError, getIsLoggedIn, getIsRequest } from '../../Redux/auth/auth-selectors';
import { authSlice } from '../../Redux/auth/auth-slice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isRequest = useSelector(getIsRequest);
  const isAuthError = useSelector(getAuthError);

  
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    dispatch(authSlice.actions.resetHttpError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: LoginSchma,

    onSubmit: ({ email, password }) => {
      dispatch(login({ email, password }));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const togglePasswordVisibility = (value) => {
    switch (value) {
      case 'password':
        setPasswordVisible(!passwordVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contayner py-20 md:py-24 lg:py-40">
      <div className="flex justify-center w-full">
        <div className="max-w-2xl">
          <div className=" md:w-[600px] bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
            <form
              className="space-y-6"
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <h3 className="text-xl font-medium text-gray-900 ">
                Авторизация
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Ваш email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors['email'] || isAuthError && 'border-red'
                  }`}
                  placeholder="name@mail.com"
                  value={formikValues['email']}
                  onChange={formik.handleChange}
                />
                {errors['email'] && (
                  <p className={errorTextStyle}>{errors['email']}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Ваш пароль
                </label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${
                    errors['password'] || isAuthError && 'border-red'
                  }`}
                  required=""
                />
                {errors['password'] && (
                  <p className={errorTextStyle}>{errors['password']}</p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="showPassword"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                        onChange={() => togglePasswordVisibility('password')}
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label
                        htmlFor="showPassword"
                        className="font-medium text-gray-900 "
                      >
                        Показать пароль
                      </label>
                    </div>
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-700 hover:underline ml-auto"
                >
                  Забыли пароль?
                </Link>
              </div>
                <div className="relative">
                <button
                type="submit"
                disabled={isRequest}
                className={`w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isRequest && 'animate-pulse bg-red'
                }`}
              >
                Войти
              </button>
              {isAuthError && <p className={`${errorTextStyle}`}>Данные для пароля или эл.почты неверны</p>}
            </div>
              <div className="text-sm font-medium text-gray-500">
                Ещё не зарегистрированы?{' '}
                <Link
                  to="/registration"
                  className="text-blue-700 hover:underline"
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
