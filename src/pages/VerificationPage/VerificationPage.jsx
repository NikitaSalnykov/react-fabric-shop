import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth } from '../../Redux/auth/auth-selectors';

const VerificationPage = () => {
  const navigate = useNavigate();

  const urlSearchParams = new URLSearchParams(window.location.search);
  const isFromRegistration = urlSearchParams.get('fromRegistration') === 'true';
  const isFromEmail = urlSearchParams.get('fromEmail') === 'true';

  const email = urlSearchParams.get('email');

  useEffect(() => {
    if ((!isFromRegistration && !email) || (!isFromEmail && !email)) {
      navigate('/home');
    } else {
      console.log(email);
    }
  }, [navigate, isFromRegistration, email, isFromEmail]);

  return (
    <div className="relative flex contayner py-20 md:py-24 lg:py-40 flex-col items-center justify-center overflow-hidden">
      {!isFromEmail ? (
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Проверьте Вашу почту
          </h2>
          <p className="mb-8 text-lg text-zinc-500">
            Спасибо за регистрацию, пожалуйста перейдите на Вашу эл.почту и
            завершите регистрацию{' '}
            <span className="font-medium text-indigo-500">
              {email ? email : ''}
            </span>
            .
          </p>

          <p className="mb-2 text-sm text-zinc-500">
            Если Вы подтвердили регистрацию с другого устройства,
            авторизируйтесь:{' '}
          </p>
          <Link
            to="/login"
            className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
          >
            Авторизироваться
          </Link>
        </div>
      ) : (
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Поздравляем!
          </h2>
          <p className="mb-2 text-lg text-zinc-500">
            Вы успешно завершили регистрацию! Авторизируйтесь используя Ваш
            логин и пароль:{' '}
          </p>
          <Link
            to="/home"
            className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
          >
            Авторизироваться
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
