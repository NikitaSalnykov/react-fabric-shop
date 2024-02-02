import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, login } from '../../Redux/auth/auth-operations';
import { useEffect, useState } from 'react';
import { LoginSchma } from '../../schemas/LoginSchma';
import { getIsLoggedIn, getIsRequest } from '../../Redux/auth/auth-selectors';
import { authSlice } from '../../Redux/auth/auth-slice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';

const ForgotPage = () => {
  const dispatch = useDispatch();
  const isRequest = useSelector(getIsRequest);

  useEffect(() => {
    dispatch(authSlice.actions.resetHttpError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: LoginSchma,

    onSubmit: ({ email }) => {
      dispatch(forgotPassword({email}));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

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
                Забыли пароль?
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Введите Ваш email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors['email'] && 'border-red'
                  }`}
                  placeholder="name@mail.com"
                  value={formikValues['email']}
                  onChange={formik.handleChange}
                />
                {errors['email'] && (
                  <p className={errorTextStyle}>{errors['email']}</p>
                )}
              </div>
             
              <button
                type="submit"
                disabled={isRequest}
                className={`w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isRequest && 'animate-pulse bg-red'
                }`}
              >
                Отправить письмо
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

export default ForgotPage;
