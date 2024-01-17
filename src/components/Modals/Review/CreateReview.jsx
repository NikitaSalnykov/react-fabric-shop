import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getIsLoadingProducts,
  getIsProductCreated,
} from '../../../Redux/products/productsSelectors';
import { resetProductCreated } from '../../../Redux/products/productsSlice';
import { createPost } from '../../../Redux/posts/postsOperation';
import { getUser } from '../../../Redux/auth/auth-selectors';
import { ReviewSchma } from '../../../schemas/ReviewSchma';


const errorTextStyle =
  'pl-4 absolute  text-rose-500 text-xs font-normal top-18 left-[0px] xl:left-[85px]';
// const hoverStyle =
//   'transition duration-200 ease-in-out cursor-pointer hover:opaarticle-80';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";

export const CreateReview = ({onCloseModal}) => {
  const author = useSelector(getUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProducts);
  const isProductCreated = useSelector(getIsProductCreated);

  useEffect(() => {
    if (isProductCreated) {
      onCloseModal();
      dispatch(resetProductCreated());
    }
  }, [isProductCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
      extraPhotos: null,
      rating: 0
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: ReviewSchma,

    onSubmit: ({ rating, text, author, extraPhotos }) => {
      const newReview = {
        text,
        author,
        extraPhotos,
        rating,
      };

      const formData = createReviewFormData(newReview);

      dispatch(createPost(formData));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createReviewFormData = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('rating', data.title);
    formData.append('author', data.description);
    if (data.extraPhotos) {
      [...data.extraPhotos].forEach((file) => {
        formData.append('extraPhotos', file);
      });
    }
    return formData;
  };


  return (
    <div className=" text-center smOnly:px-3 md:px-5 rounded-3xl">
    <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide ">
      Оставить отзыв
    </h3>
    <div className="">
    <form
      noValidate
      autoComplete="off"
      className="flex flex-col flex-wrap-reverse"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-row-reverse w-[275px] md:w-[500px]">
        {/* All text-fields */}
        <div className="flex flex-col gap-4">
          
          {/* author */}
          <div className="relative flex flex-col gap-2 justify-between">
            <label className={labelStyle} htmlFor="color">
              Ваше имя:
            </label>
            <input
              className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[10px] ${
                errors['author'] && 'border-rose-400'
              }`}
              type="text"
              id="author"
              name="author"
              placeholder={'Введите имя'}
              value={formikValues['author']}
              onChange={formik.handleChange}
            />
            {errors['author'] && (
              <p className={errorTextStyle}>{errors['author']}</p>
            )}
          </div>

          {/* text */}
          <div className="flex-col">
            <div className="flex flex-col gap-2 justify-start w-full relative">
              <label className={labelStyle} htmlFor="text">
                Отзыв:
              </label>
              <textarea
                className={`flex w-[100%] h-[200px] px-[16px] py-[8px] border border-blue rounded-[10px] resize-none ${
                  errors['text'] && 'border-rose-400'
                }`}
                type="text"
                id="text"
                name="text"
                placeholder="Введите отзыв"
                value={formikValues['text']}
                onChange={formik.handleChange}
              />
              {errors['text'] && (
                <p className={errorTextStyle}>{errors['text']}</p>
              )}
            </div>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2 relative">
          <p className={labelStyle} htmlFor="text">
                Оценка:
              </p>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <div className=" cursor-pointer">
        <svg onClick={() => formik.setFieldValue('rating', 1)} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={formik.values.rating >= 1 ? "gold" : "#dadada"} viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        </div>
        <div className="cursor-pointer">
        <svg onClick={() => formik.setFieldValue('rating', 2)} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={formik.values.rating >= 2 ? "gold" : "#dadada"} viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        </div>
        <div className="cursor-pointer">
        <svg onClick={() => formik.setFieldValue('rating', 3)} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={formik.values.rating >= 3 ? "gold" : "#dadada"} viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        </div>
        <div className="cursor-pointer">
        <svg onClick={() => formik.setFieldValue('rating', 4)} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={formik.values.rating >= 4 ? "gold" : "#dadada"} viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        </div>
        <div className="cursor-pointer">
        <svg onClick={() => formik.setFieldValue('rating', 5)} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={formik.values.rating >= 5 ? "gold" : "#dadada"} viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        </div>
        {errors['rating'] && (
              <p className={`${errorTextStyle} left-0 bottom-[-18px]`}>{errors['rating']}</p>
            )}
    </div>
          </div>

          {/* extraPhotos */}
          <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="extraPhotos">
              Прикрепить фото:
            </label>
            <input
              className="w-full"
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
              className={`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"`}
            >
              Добавить{' '}
            </button>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </form>
    </div>
  </div>
  )
}
