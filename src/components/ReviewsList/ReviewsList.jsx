import React, { useEffect, useState } from 'react'
import { ReviewCart } from '../ReviewCart/ReviewCart'
import { useDispatch, useSelector } from 'react-redux';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import { CreateReview } from '../Modals/Review/CreateReview';

export const ReviewsList = () => {
  const dispatch = useDispatch();

  const [isModalReviewCreateOpen, setModalReviewCreateOpen] = useState(false);

  const onToggleReviewCreateModal = () => {
    setModalReviewCreateOpen(!isModalReviewCreateOpen);
  };

  useEffect(() => {
    // dispatch(fetchPosts());
  }, [dispatch, isModalReviewCreateOpen]);


  return (
<>
<div className=''>
      <div className="my-12 flex items-center justify-between">
      <h3 className='text-xl  font-bold tracking-tight text-gray-900 sm:text-3xl '>Отзывы о товаре:</h3>
      <button onClick={onToggleReviewCreateModal} className='items-center shadow-sm max-w-[250px] rounded-md border border-transparent bg-lime-500 px-4 py-3 text-base font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2'>Оставить отзыв</button>
      </div>
      <ul className='flex flex-col gap-4'>
        <li className='border-b border-gray-300 pb-2'><ReviewCart/></li>
        <li><ReviewCart/></li>
        <li><ReviewCart/></li>
        <li><ReviewCart/></li>
      </ul>
    </div>
    <BasicModal
        isOpen={isModalReviewCreateOpen}
        onCloseModal={onToggleReviewCreateModal}
      >
        <CreateReview
          onCloseModal={onToggleReviewCreateModal}
        />
      </BasicModal>
    </>
  )
}


{/* <li key={index} className={index !== reviews.length - 1 ? 'border-b border-black pb-4' : 'pb-4'}>
<ReviewCart review={review} />
</li> */}