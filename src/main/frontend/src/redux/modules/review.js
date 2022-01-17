import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const fetchReviewByBoardId = createAsyncThunk(
  "review/fetchReviewByBoardId",
  async (boardId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/board/dtl/${boardId}`)
      .then((res) => {
        const reviews = res.data.reviewList;
        reviews.forEach((review) => (review.regTime = `${review.regTime}`));

        const rootReviews = reviews.filter((d) => d.parentReviewId === null);
        const result = rootReviews.map((review) => {
          const childReviews = reviews.filter(
            (d) => d.parentReviewId === review.reviewId
          );
          return { ...review, childReviews };
        });
        return result;
      })
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const registReview = createAsyncThunk(
  "review/registReview",
  async (newReviewData, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .post(`/review`, newReviewData)
      .then((res) => newReviewData)
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const modifyReview = createAsyncThunk(
  "review/modifyReview",
  async (newReviewData, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .post(`/review`, newReviewData)
      .then((res) => newReviewData)
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const deleteReviewById = createAsyncThunk(
  "review/deleteReview",
  async ({ reviewId, parentReviewId }, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .delete(`/review?reviewId=${reviewId}`)
      .then((res) => {
        return {
          reviewId,
          parentReviewId,
        };
      })
      .catch((err) => rejectWithValue(err.res.data));
  }
);

const review = createSlice({
  name: "reviewReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: "",
    reviews: [],
    // reviewId: 1,
    // boardId: "",
    // content: "",
    // userId: "",
    // regTime: "",
    // parentReviewId: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewByBoardId.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchReviewByBoardId.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.reviews = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchReviewByBoardId.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

// 전체 데이터 호출
export const reviewSelector = (state) => state.review.reviews;

export default review.reducer;
