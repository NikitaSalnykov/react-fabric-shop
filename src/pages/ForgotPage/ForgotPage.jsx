import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Redux/auth/auth-operations';
import { useEffect, useState } from 'react';
import { getAuthError, getIsRequest } from '../../Redux/auth/auth-selectors';
import { authSlice } from '../../Redux/auth/auth-slice';
import { ForgotSchma } from '../../schemas/ForgotSchma';
import Svg from '../../components/Svg/Svg';
import { LoaderSpin } from '../../components/Loader/LoaderSpin/LoaderSpin';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';

const ForgotPage = () => {
  const dispatch = useDispatch();
  const isRequest = useSelector(getIsRequest);
  const isAuthError = useSelector(getAuthError);
  const [isMassageSent, setIsMassageSent] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState(false)
  const [timer, setTimer] = useState(30);
  const [stopTimer, setStopTimer] = useState(true)

  useEffect(() => {
    dispatch(authSlice.actions.resetHttpError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: ForgotSchma,

    onSubmit: ({ email }) => {
      try {
        dispatch(forgotPassword({ email }));
        setConfirmEmail(true) 
      } catch (error) {
        console.error('Ошибка при отправке запроса на восстановление:', error);
      }
    }
  });

  useEffect(() => {
    if(confirmEmail && !isRequest) {
      setIsMassageSent(true) 
    }
  }, [isRequest])
  

  useEffect(() => {
    let interval;

    if (stopTimer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [stopTimer]);

  useEffect(() => {
    if (timer === 0) {
      setStopTimer(false);
    }
  }, [timer]);

    useEffect(() => {
    if (timer === 0) {
      setStopTimer(false);
    }
  }, [timer]);

  const handleResendClick = () => {
    console.log(formikValues['email']);
    dispatch(forgotPassword(formikValues['email']));
    setStopTimer(true);
    setTimer(30);
  };

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
              {!isMassageSent  && <div>
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
                {errors['email']  && (
                  <p className={errorTextStyle}>{errors['email']}</p>
                )}
              </div>}
             
              <div className="w-full ">
              {!isMassageSent  ? (
                <button
                  type="submit"
                  disabled={isRequest}
                  className={` flex justify-center gap-2 w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                    isRequest && 'animate-pulse bg-red'
                  }`}
                >
                  Отправить письмо  {isRequest && <LoaderSpin size={"5"}/>}
                </button>
              ) : (
                <div className="w-full ">
                  <div className="pb-4">
                  <div className="relative w-full flex justify-center mb-4">
                  <Svg id={"icon-massage"} fill={"#007aff"} stroke={"white"} size={68}/>
                  <div className="absolute top-0 right-[35%] bg-[#21df0f] rounded-full w-6 h-6">
                  <Svg id={'icon-check'} size={24} stroke={'white'} fill={'transparent'}/>
                  </div>
                  </div>

                    <div className="flex justify-center items-center gap-2">
                      <p className="text-lg font-medium text-center">
                        Письмо отправлено!
                      </p>
                    </div>
                    <p className="text-xl font-medium text-center">
                      {formikValues['email']}
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <p className="text-[12px] font-medium mt-2 text-gray-500">
                      Не пришло письмо?
                    </p>
                    {stopTimer ? <p
                      className="text-[12px]  font-medium mt-2 underline"
                    >
                      {`Подождите ${timer} сек.`}
                    </p> :
                    <button
                      type="button"
                      className="text-[12px]  font-medium mt-2 underline"
                      onClick={handleResendClick}
                      disabled={stopTimer}
                    >
                      {'Отправить повторно'}
                    </button>}
                  </div>
                </div>
              )}
            </div>
              <div className="text-sm font-medium text-gray-500 flex justify-center">
                
{ !isMassageSent  ?               <Link
                  to="/login"
                  className="text-blue-700 hover:underline"
                >
                  Вернуться на страницу авторизации
                </Link> : 
                              <Link
                              to={"/login"}
                              className={` w-full text-white bg-blue hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                            >
                              Авторизоваться
                            </Link>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
