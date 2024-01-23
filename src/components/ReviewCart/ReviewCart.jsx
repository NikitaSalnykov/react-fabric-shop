import { getUser } from '../../Redux/auth/auth-selectors';
import {
  deleteReview,
  deleteReviewComment,
} from '../../Redux/reviews/reviewsOperation';
import { formattedDate } from '../../helpers/formattedDate';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Svg from '../Svg/Svg';

export const ReviewCart = ({ review, openCommentModal, openImageModal }) => {
  const [readMore, setReadMore] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useDispatch();


  return (
    <article>
      <div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{review.author}</p>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 1 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 2 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 3 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 4 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={review.rating >= 5 ? 'gold' : '#dadada'}
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <div className="mb-5 text-sm ">
          <p className="text-gray-500">
            Отзыв оставлен: <span>{formattedDate(review.createdAt)}</span>
          </p>
        </div>
        <div className="flex items-center mb-2">
          <p>
            {review.text.split('').length >= 250 && !readMore
              ? review.text.split('').slice(0, 250)
              : review.text}
            {review.text.split('').length >= 250 && !readMore && (
              <span
                onClick={() => setReadMore(!readMore)}
                className=" cursor-pointer text-sm font-medium text-blue-600 hover:underline "
              >
                ...Ещё
              </span>
            )}
          </p>
        </div>
        {review.text.split('').length >= 250 && readMore && (
          <button
            onClick={() => setReadMore(!readMore)}
            className="block text-sm font-medium text-blue-600 hover:underline "
          >
            Свернуть
          </button>
        )}
        {review.extraPhotos && review.extraPhotos.length > 0 &&
        <div className="py-4">
           <div className="flex items-center gap-2 mb-4 opacity-70">
            <Svg id={'icon-clip'} size={16} />
            <p className=" font-semibold text-sm">Прикрепленные фотографии:</p>
          </div>
          <ul className="flex flex-wrap gap-4">
            {review.extraPhotos &&
              review.extraPhotos.map((el, index) => (
                <li
                  onClick={() => openImageModal(el)}
                  key={index}
                  className="w-[100px] h-[100px] overflow-hidden cursor-pointer hover:translate-y-[1px] hover:opacity-70"
                >
                  <img
                    className="h-full max-w-full rounded-lg object-cover"
                    src={el}
                    alt="attached photo"
                  />
                </li>
              ))}
          </ul>
        </div>
}
        <div className="flex flex-row-reverse gap-4">
          {user && (user._id === review.authorId || user.role === 'admin') && (
            <button
              onClick={() => dispatch(deleteReview(review._id))}
              className=" cursor-pointer text-sm font-medium text-rose-700 hover:underline "
            >
              Удалить
            </button>
          )}
          {user && user.role === 'admin' && (
            <button
              onClick={() => openCommentModal(review._id)}
              className=" cursor-pointer text-sm font-medium hover:underline "
            >
              Ответить
            </button>
          )}
        </div>
      </div>
      {review.comments &&
        review.comments.length > 0 &&
        review.comments.map(
          (el) =>
            el && (
              <div key={el._id} className="ml-8 pl-4 border-l-[3px] mt-4">
                <p className="font-bold text-xl ">Ответ Администратора</p>

                <div className="mb-5 text-sm ">
                  <p className="text-gray-500">
                    Ответ оставлен:{' '}
                    <span>{formattedDate(review.createdAt)}</span>
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p>
                    {el.comment.split('').length >= 250 && !readMore
                      ? el.comment.split('').slice(0, 250)
                      : el.comment}
                    {el.comment.split('').length >= 250 && !readMore && (
                      <span
                        onClick={() => setReadMore(!readMore)}
                        className=" cursor-pointer text-sm font-medium text-blue-600 hover:underline "
                      >
                        ...Ещё
                      </span>
                    )}
                  </p>
                </div>
                {el.comment.split('').length >= 250 && readMore && (
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className="block text-sm font-medium text-blue-600 hover:underline "
                  >
                    Свернуть
                  </button>
                )}
                {user && user.role === 'admin' && (
                  <div className="mt-1 text-right">
                    <button
                      onClick={() =>
                        dispatch(
                          deleteReviewComment({
                            reviewId: review._id,
                            commentId: el._id,
                          })
                        )
                      }
                      className=" cursor-pointer text-sm font-medium text-rose-700 hover:underline "
                    >
                      Удалить
                    </button>
                  </div>
                )}
              </div>
            )
        )}
    </article>
  );
};
