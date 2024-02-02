import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, login, resetPassword } from '../../Redux/auth/auth-operations';
import { useEffect, useState } from 'react';
import { LoginSchma } from '../../schemas/LoginSchma';
import { getIsLoggedIn, getIsRequest } from '../../Redux/auth/auth-selectors';
import { authSlice } from '../../Redux/auth/auth-slice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';

const ResetPasswordPage = () => {

  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();
  const isRequest = useSelector(getIsRequest);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    dispatch(authSlice.actions.resetHttpError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: LoginSchma,

    onSubmit: ({ password }) => {
      dispatch(resetPassword({newPassword: password, resetToken: id}));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  
  const togglePasswordVisibility = (value) => {
    switch (value) {
      case 'password':
        setPasswordVisible(!passwordVisible);
        break;

      case 'confirmPassword':
        setConfirmPasswordVisible(!confirmPasswordVisible);
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
                Введите новый пароль:
              </h3>
              <div className=" relative">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Введите пароль
                </label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${
                    errors['password'] && 'border-red'
                  }`}
                  required=""
                />
                {errors['password'] && (
                  <p className={errorTextStyle}>{errors['password']}</p>
                )}
              </div>
              <div className=" relative">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Еще раз введите пароль
                </label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${
                    errors['confirmPassword'] && 'border-red'
                  }`}
                  required=""
                />
                {errors['confirmPassword'] && (
                  <p className={errorTextStyle}>{errors['confirmPassword']}</p>
                )}
                {formik.values.confirmPassword !== formik.values.password &&
                  !errors['confirmPassword'] && (
                    <p className={errorTextStyle}>Пароли должны совпадать</p>
                  )}
              </div>
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
             
              <button
                type="submit"
                disabled={isRequest}
                className={`w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isRequest && 'animate-pulse bg-red'
                }`}
              >
                Подтвердить
              </button>
              <div className="text-sm font-medium text-gray-500 flex justify-center">
                
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline"
                >
                  Вернуться на страницу авторизации
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
