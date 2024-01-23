import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from '../../../Redux/auth/auth-selectors';
import { createReviewComment } from '../../../Redux/reviews/reviewsOperation';
import { resetReviewCreated } from '../../../Redux/reviews/reviewsSlice';
import { getIsLoadingReview, getIsReviewCreated } from '../../../Redux/reviews/reviewsSelectors';
import { comment } from 'postcss';


const errorTextStyle =
  'pl-4 absolute  text-rose-500 text-xs font-normal top-18 left-[0px] xl:left-[85px]';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";

export const CreateReviewComment = ({onCloseModal, reviewId}) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingReview);
  const isReviewCreated = useSelector(getIsReviewCreated);

  useEffect(() => {
    if (isReviewCreated) {
      onCloseModal();
      dispatch(resetReviewCreated());
    }
  }, [isReviewCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      author: `${user.name} ${user.surname}` || '',
      comment: '',
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: ReviewSchma,

    onSubmit: ({ author, comment  }) => {
      const newReviewComment = {
        comment,
        author,
      };

      dispatch(createReviewComment({reviewId: reviewId, post: newReviewComment}));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  return (
    <div className=" text-center smOnly:px-3 md:px-5 rounded-3xl">
    <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide ">
      Ответить
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

          {/* comment */}
          <div className="flex-col">
            <div className="flex flex-col gap-2 justify-start w-full relative">
              <label className={labelStyle} htmlFor="comment">
                Комментарий:
              </label>
              <textarea
                className={`flex w-[100%] h-[200px] px-[16px] py-[8px] border border-blue rounded-[10px] resize-none ${
                  errors['comment'] && 'border-rose-400'
                }`}
                type="comment"
                id="comment"
                name="comment"
                placeholder="Введите отзыв"
                value={formikValues['comment']}
                onChange={formik.handleChange}
              />
              {errors['comment'] && (
                <p className={errorTextStyle}>{errors['comment']}</p>
              )}
            </div>
          </div>


        </div>
        <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
          {!isLoading ? (
            <button
              type="submit"
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
