import React, { useEffect, useState } from 'react'
import { ReviewCart } from '../ReviewCart/ReviewCart'
import { useDispatch, useSelector } from 'react-redux';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import { CreateReview } from '../Modals/Review/CreateReview';
import { fetchReviews } from '../../Redux/reviews/reviewsOperation';
import { getIsLoadingReview, getIsReviewCreated, getReviews } from '../../Redux/reviews/reviewsSelectors';
import { CreateReviewComment } from '../Modals/Review/CreateReviewComment';

export const ReviewsList = ({productId}) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews)
  const reviewsIsLoading = useSelector(getIsLoadingReview)
  const [isModalReviewCreateOpen, setModalReviewCreateOpen] = useState(false);
  const [isModalReviewCreateCommentOpen, setModalReviewCreateCommentOpen] = useState(false);
  const [reviewId, setReviewId] = useState('')

  const onToggleReviewCreateModal = () => {
    setModalReviewCreateOpen(!isModalReviewCreateOpen);
  };

  const onToggleReviewCreateCommentModal = (id) => {
    setReviewId(id)
    setModalReviewCreateCommentOpen(!isModalReviewCreateCommentOpen);
  };

  useEffect(() => {
    if (!isModalReviewCreateOpen || !isModalReviewCreateCommentOpen) {
      dispatch(fetchReviews());
    }
  }, [dispatch, isModalReviewCreateOpen, isModalReviewCreateCommentOpen]);

  const filteredReviews = (reviews) => {
    return reviews.filter(el => el && el.productId === productId)}
  const productReviews = filteredReviews(reviews)
  return (
<>
<div className=''>
      <div className="my-12 flex items-center justify-between">
      <h3 className='text-xl  font-bold tracking-tight text-gray-900 sm:text-3xl '>Отзывы о товаре:</h3>
      <button onClick={onToggleReviewCreateModal} className='items-center shadow-sm max-w-[250px] rounded-md border border-transparent bg-lime-500 px-4 py-3 text-base font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2'>Оставить отзыв</button>
      </div>
      {!reviewsIsLoading ? <div>
      {reviews && productReviews.length > 0 ? <ul className='flex flex-col gap-4'>
        {productReviews.map((el,index) => el && (<li key={el._id || index} className={index !== productReviews.length - 1 ? 'border-b border-gray-300 pb-8 pt-8' : 'pb-4 pt-8'}>
<ReviewCart review={el} openCommentModal={onToggleReviewCreateCommentModal}/>
</li> ))}
      </ul> : <div className=' text-center p-10 text-gray-500'>Пока нет отзывов к этом товару</div>}
      </div> : 
      <div className='flex flex-col gap-5 animate-pulse'>
        <div className="w-full h-[200px] bg-slate-100"></div>
        <div className="w-full h-[200px] bg-slate-100"></div>
      </div>}
    </div>
    <BasicModal
        isOpen={isModalReviewCreateOpen}
        onCloseModal={onToggleReviewCreateModal}
      >
        <CreateReview
          onCloseModal={onToggleReviewCreateModal}
          productId={productId}
        />
      </BasicModal>
      <BasicModal
        isOpen={isModalReviewCreateCommentOpen}
        onCloseModal={onToggleReviewCreateCommentModal}
      >
        <CreateReviewComment
          onCloseModal={onToggleReviewCreateCommentModal}
          reviewId={reviewId}
        />
      </BasicModal>
    </>
  )
}

