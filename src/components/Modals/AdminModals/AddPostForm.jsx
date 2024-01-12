import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../../Redux/products/productsOperation';
import { useEffect, useState } from 'react';
import { categories } from '../../../assets/categories';
import {
  getIsLoadingProducts,
  getIsProductCreated,
} from '../../../Redux/products/productsSelectors';
import { resetProductCreated } from '../../../Redux/products/productsSlice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]';
// const hoverStyle =
//   'transition duration-200 ease-in-out cursor-pointer hover:opaarticle-80';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";
const inputStyle =
  " outline-offset-0 outline-0  border border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]";

export const AddPostForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProducts);
  const [isMyCategory, setMyCategory] = useState(false);
  const isProductCreated = useSelector(getIsProductCreated);

  useEffect(() => {
    if (isProductCreated) {
      onCloseModal();
      dispatch(resetProductCreated());
    }
  }, [isProductCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      description: '',
      main: false,
      mainPhoto: null,
      extraPhotos: null,
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: ProductSchema,

    onSubmit: ({
      title,
      text,
      description,
      main,
      mainPhoto,
      extraPhotos,
    }) => {
      const updateUser = {
        title,
        text,
        description,
        main,
        mainPhoto,
        extraPhotos,
      };

      const formData = createUserFormData(updateUser);

      dispatch(createProduct(formData));
      console.log(formData);
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('description', data.description);
    formData.append('main', data.main);
    formData.append('mainPhoto', data.mainPhoto);
    if (data.extraPhotos) {
      [...data.extraPhotos].forEach((file) => {
        formData.append('extraPhotos', file);
      });
    }
    return formData;
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className="flex flex-col flex-wrap-reverse"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-row-reverse gap-[71px]">
        {/* All text-fields */}
        <div className="flex flex-col gap-[20px]">
          {/* title */}

          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="title">
              Название:
            </label>
            <input
              className={`${inputStyle} ${errors['title'] && 'border-rose-400'}`}
              type="text"
              id="title"
              name="title"
              value={formikValues['title']}
              onChange={formik.handleChange}
            />
            {errors['title'] && (
              <p className={errorTextStyle}>{errors['title']}</p>
            )}
          </div>

          {/* text */}
          <div className="flex-col">
            {isMyCategory ? (
              <div className="flex justify-between w-full relative">
                <label className={labelStyle} htmlFor="text">
                  Категория:
                </label>
                <input
                  className={`${inputStyle} ${
                    errors['text'] && 'border-rose-400'
                  }`}
                  type="text"
                  id="text"
                  name="text"
                  value={formikValues['text']}
                  onChange={formik.handleChange}
                />
                {errors['text'] && (
                  <p className={errorTextStyle}>{errors['text']}</p>
                )}
              </div>
            ) : (
              <div className="flex justify-between w-full relative">
                <label className={labelStyle} htmlFor="category">
                  Категория:
                </label>
                <select
                  className={`${inputStyle} ${
                    errors['category'] && 'border-rose-400'
                  }`}
                  type="text"
                  id="category"
                  name="category"
                  value={formikValues['category']}
                  onChange={formik.handleChange}
                >
                  {categories.map((el, index) => (
                    <option key={index} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
                {errors['category'] && (
                  <p className={errorTextStyle}>{errors['category']}</p>
                )}
              </div>
            )}
            <div>
              {!isMyCategory ? (
                <button
                  className="text-xs text-left"
                  onClick={() => {
                    setMyCategory(true);
                  }}
                >
                  Добавить свою категорию
                </button>
              ) : (
                <button
                  className="text-xs"
                  onClick={() => {
                    setMyCategory(false);
                  }}
                >
                  Выбрать категорию
                </button>
              )}
            </div>
          </div>

          {/* description */}
          <div className="flex justify-between w-full relative">
            <label className={labelStyle} htmlFor="color">
              Цвет:
            </label>
            <input
              className={`${inputStyle} ${
                errors['description'] && 'border-rose-400'
              }`}
              type="text"
              id="description"
              name="description"
              placeholder={'+380123456789'}
              value={formikValues['description']}
              onChange={formik.handleChange}
            />
            {errors['description'] && (
              <p className={errorTextStyle}>{errors['description']}</p>
            )}
          </div>

          {/* main */}
          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="main">
              Поместить на главную:
            </label>
            <input
              className={`${inputStyle} ${
                errors['price'] && 'border-rose-400'
              }`}
              type="text"
              id="main"
              name="main"
              value={formikValues['main']}
              onChange={formik.handleChange}
            />
            {errors['main'] && (
              <p className={errorTextStyle}>{errors['main']}</p>
            )}
          </div>

          {/* article */}
          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="main">
              Артикль:
            </label>
            <input
              className={`${inputStyle} ${
                errors['main'] && 'border-rose-400'
              }`}
              type="checkbox"
              id="main"
              name="main"
              value={formikValues['main']}
              onChange={formik.handleChange}
            />
            {errors['main'] && (
              <p className={errorTextStyle}>{errors['main']}</p>
            )}
          </div>

          {/* mainPhoto */}
          <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="mainPhoto">
              Главная фотка:
            </label>
            <input
              className={``}
              type="file"
              id="mainPhoto"
              name="mainPhoto"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('mainPhoto', file);
              }}
            />
            {errors['mainPhoto'] && (
              <p className={errorTextStyle}>{errors['mainPhoto']}</p>
            )}
          </div>

          {/* extraPhotos */}
          <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="extraPhotos">
              Дополнительные фото до 3х:
            </label>
            <input
              className=""
              type="file"
              id="extraPhotos"
              name="extraPhotos"
              accept="image/jpeg, image/png"
              multiple // Добавьте этот атрибут
              onChange={(e) => {
                const files = e.target.files;
                formik.setFieldValue('extraPhotos', files);
              }}
            />
            {errors['extraPhotos'] && (
              <p className={errorTextStyle}>{errors['extraPhotos']}</p>
            )}
          </div>
        </div>
        <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
          {!isLoading ? (
            <button
              type="submit"
              // onClick={onCloseModal}
              disabled={false}
              className={`"Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"`}
            >
              Добавить{' '}
            </button>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </form>
  );
};
