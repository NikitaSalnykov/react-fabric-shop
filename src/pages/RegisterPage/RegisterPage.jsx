import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../Redux/auth/auth-operations';
import { registrationSchema } from '../../schemas/RegistrationSchma';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: registrationSchema,

    onSubmit: ({ name, surname, email, phone, password }) => {
      dispatch(register({ name, surname, email, phone, password }));
      navigate(`/verification?fromRegistration=true&email=${email}`);
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
    <div className="contayner flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-center w-full">
        <div className="max-w-2xl">
          <div className="md:w-[900px] bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
            <form
              className="space-y-6"
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <h3 className="text-xl font-medium text-gray-900 ">
                Регистрация
              </h3>
              <div className=" relative">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Введите имя
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors['name'] && 'border-red'
                  }`}
                  placeholder="Ваше имя"
                  value={formikValues['name']}
                  onChange={formik.handleChange}
                />
                {errors['name'] && (
                  <p className={errorTextStyle}>{errors['name']}</p>
                )}
              </div>
              <div className=" relative">
                <label
                  htmlFor="surname"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Введите фамилию
                </label>
                <input
                  type="surname"
                  name="surname"
                  id="surname"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  placeholder="Ваша фамилия"
                  value={formikValues['surname']}
                  onChange={formik.handleChange}
                />
                {errors['surname'] && (
                  <p className={errorTextStyle}>{errors['surname']}</p>
                )}
              </div>
              <div className=" relative">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-900 block mb-2 "
                >
                  Введите телефон
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${
                    errors['phone'] && 'border-red'
                  }`}
                  placeholder="+01234567890"
                  value={formikValues['phone']}
                  onChange={formik.handleChange}
                />
                {errors['phone'] && (
                  <p className={errorTextStyle}>{errors['phone']}</p>
                )}
              </div>
              <div className=" relative">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Введите email
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
                className="w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Зарегистрироваться
              </button>
              <div className="text-sm font-medium text-gray-500 ">
                Уже зарегистрированы?{' '}
                <Link to="/login" className="text-blue-700 hover:underline ">
                  Авторизация
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
