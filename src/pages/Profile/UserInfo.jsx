import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';
import { useFormik } from 'formik';
import { UpdateUserSchema } from '../../schemas/UpdateUserSchema';
import { update } from '../../Redux/auth/auth-operations';
import Svg from '../../components/Svg/Svg';
import { useState } from 'react';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal bottom-[-20px] left-[-10px] xl:left-[85px]';
const hoverStyle =
  'transition duration-200 ease-in-out cursor-pointer hover:opacity-80';

const UserInfo = () => {
  const user = useSelector(getUser) || {};
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      surname: user.surname || '',
      phone: user.phone || '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: UpdateUserSchema,

    onSubmit: ({ name, surname, phone }) => {
      dispatch(update({ name, surname, phone }));
    },
  });

  const resetFields = () => {
    setIsEdit(false);
    formik.setFieldValue('name', user.name);
    formik.setFieldValue('surname', user.surname);
    formik.setFieldValue('phone', user.phone);
  };

  const errors = formik.errors;
  const formikValues = formik.values;

  return (
    <div className="bg-#fdfdfdd6 shadow-sm p-4 relative border-[1px] rounded-lg border-gray-300 w-[320px] mdOnly:w-[300px] h-[380px]">
      <h3 className="mb-4 text-md font-medium text-gray-900 title-font">
        Данные:
      </h3>
      <div className=" pb-4">
        <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
          Email: <strong>{user.email}</strong>
        </p>
      </div>
      <form
        className="space-y-2 gap-3 flex justify-normal items-baseline flex-wrap mb-4"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className={`absolute top-[14px] right-[14px] ${hoverStyle}`}>
          {!isEdit ? (
            <div
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <Svg
                id={'icon-edit'}
                size={24}
                fill={'#54ADFF'}
                className={hoverStyle}
              />
            </div>
          ) : (
            <div className="flex flex-row-reverse gap-4">
              <div onClick={resetFields}>
                <Svg
                  id={'icon-cross'}
                  size={24}
                  stroke={'#54ADFF'}
                  fill={'transparent'}
                  className={hoverStyle}
                />
              </div>
              <button type="submit">
                <Svg
                  id={'icon-check'}
                  size={24}
                  stroke={'#54ADFF'}
                  fill={'transparent'}
                  className={hoverStyle}
                />
              </button>
            </div>
          )}
        </div>
        <div className=" relative">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 block mb-2 "
          >
            Имя
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className={` bg-gray-50 border mdOnly:w-[250px]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[275px] p-2.5  ${
              errors['name'] && 'border-red'
            } ${!isEdit && 'opacity-70 border-gray-200'}`}
            placeholder="Ваше имя"
            value={formikValues['name']}
            onChange={formik.handleChange}
            readOnly={!isEdit}
          />
          {errors['name'] && <p className={errorTextStyle}>{errors['name']}</p>}
        </div>
        <div className=" relative">
          <label
            htmlFor="surname"
            className="text-sm font-medium text-gray-900 block mb-2 "
          >
            Фамилия
          </label>
          <input
            type="surname"
            name="surname"
            id="surname"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[275px] mdOnly:w-[250px] p-2.5  ${
              !isEdit && 'opacity-70 border-gray-200'
            }`}
            placeholder="Ваша фамилия"
            value={formikValues['surname']}
            onChange={formik.handleChange}
            readOnly={!isEdit}
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
            Телефон
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm mdOnly:w-[250px]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[275px] p-2.5 ${
              errors['phone'] && 'border-red'
            } ${!isEdit && 'opacity-70 border-gray-200'}`}
            placeholder="+01234567890"
            value={formikValues['phone']}
            onChange={formik.handleChange}
            readOnly={!isEdit}
          />
          {errors['phone'] && (
            <p className={errorTextStyle}>{errors['phone']}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
