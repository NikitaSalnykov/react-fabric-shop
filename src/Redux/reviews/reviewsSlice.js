import { createSlice } from '@reduxjs/toolkit';
import {
  createReview,
  createReviewComment,
  deleteReview,
  deleteReviewComment,
  fetchReviews,
  getReviewById,
} from './reviewsOperation';

const initialProducts = {
  reviews: [],
  isLoading: false,
  error: null,
  isReviewCreated: false,
  selectedReview: null,
};

const rejectFunc = (state, action) => {
  return {
    reviews: state.reviews,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    reviews: state.reviews,
    isLoading: true,
    error: null,
  };
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialProducts,
  reducers: {
    resetReviewCreated: (state) => {
      state.isReviewCreated = false;
    },
  },
  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchReviews.pending, pendingFunc);
    builder.addCase(fetchReviews.fulfilled, (_, action) => {
      return {
        reviews: action.payload,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchReviews.rejected, rejectFunc);

    //getById

    builder.addCase(getReviewById.pending, pendingFunc);
    builder.addCase(getReviewById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedReview: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getReviewById.rejected, rejectFunc);

    // create

    builder.addCase(createReview.pending, pendingFunc);
    builder.addCase(createReview.fulfilled, (state, action) => {
      return {
        reviews: [action.payload.data, ...state.reviews],
        isLoading: false,
        error: null,
        isReviewCreated: true,
      };
    });
    builder.addCase(createReview.rejected, rejectFunc);

    // delete

    builder.addCase(deleteReview.pending, pendingFunc);
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        reviews: [...state.reviews.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deleteReview.rejected, rejectFunc);

        // create comment

        builder.addCase(createReviewComment.pending, pendingFunc);
        builder.addCase(createReviewComment.fulfilled, (state, action) => {
          const updatedReview = action.payload;

          const updatedReviews = state.reviews.map((review) =>
          review._id === updatedReview._id ? updatedReview : review
          );

    
          return {
            ...state,
            reviews: updatedReviews,
            isLoading: false,
            error: null,
            isReviewCreated: true,
          };
        });
        builder.addCase(createReviewComment.rejected, rejectFunc);
    
        // delete comment
    
        builder.addCase(deleteReviewComment.fulfilled, (state, action) => {
          const { reviewId, commentId } = action.meta.arg;
        
          // Find the review in the state
          const updatedReviews = state.reviews.map((review) => {
            if (review._id === reviewId) {
              // Update the comments array by removing the comment with the specified ID
              const updatedComments = review.comments.filter((comment) => comment._id !== commentId);
              return { ...review, comments: updatedComments };
            }
            return review;
          });
        
          return {
            reviews: updatedReviews,
            isLoading: false,
            error: null,
          };
        });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
export const { resetReviewCreated } = reviewsSlice.actions;
