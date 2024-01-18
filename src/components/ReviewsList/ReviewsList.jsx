import React, { useEffect, useState } from 'react'
import { ReviewCart } from '../ReviewCart/ReviewCart'
import { useDispatch, useSelector } from 'react-redux';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import { CreateReview } from '../Modals/Review/CreateReview';
import { fetchReviews } from '../../Redux/reviews/reviewsOperation';
import { getIsLoadingReview, getReviews } from '../../Redux/reviews/reviewsSelectors';
import { fetchPosts } from '../../Redux/posts/postsOperation';

export const ReviewsList = ({postId}) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews)
  const reviewsIsLoading = useSelector(getIsLoadingReview)
  const [isModalReviewCreateOpen, setModalReviewCreateOpen] = useState(false);

  const onToggleReviewCreateModal = () => {
    setModalReviewCreateOpen(!isModalReviewCreateOpen);
  };

  useEffect(() => {
    dispatch(fetchReviews());

  }, [dispatch, isModalReviewCreateOpen]);

  return (
<>
<div className=''>
      <div className="my-12 flex items-center justify-between">
      <h3 className='text-xl  font-bold tracking-tight text-gray-900 sm:text-3xl '>Отзывы о товаре:</h3>
      <button onClick={onToggleReviewCreateModal} className='items-center shadow-sm max-w-[250px] rounded-md border border-transparent bg-lime-500 px-4 py-3 text-base font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2'>Оставить отзыв</button>
      </div>
      {!reviewsIsLoading && reviews && reviews.length > 0 ? <ul className='flex flex-col gap-4'>
        {reviews.map((el,index) => el && (<li key={el._id || index} className={index !== reviews.length - 1 ? 'border-b border-gray-300 pb-12 pt-8' : 'pb-4 pt-8'}>
<ReviewCart review={el} />
</li> ))}
      </ul> : <div className=' text-center p-10 text-gray-500'>Пока нет отзывов к этом товару</div>}
    </div>
    <BasicModal
        isOpen={isModalReviewCreateOpen}
        onCloseModal={onToggleReviewCreateModal}
      >
        <CreateReview
          onCloseModal={onToggleReviewCreateModal}
          postId={postId}
        />
      </BasicModal>
    </>
  )
}


{/* <li key={index} className={index !== reviews.length - 1 ? 'border-b border-black pb-4' : 'pb-4'}>
<ReviewCart review={review} />
</li> */}