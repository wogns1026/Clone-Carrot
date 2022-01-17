import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const fetchSellerInfoById = createAsyncThunk(
  "sellerInfo/fetchSellerInfoById",
  async (userId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/seller-info/${userId}`)
      .then((res) => {
        if (!res.data) {
          return rejectWithValue("No Board Data");
        }
        return res.data;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

export const fetchSellerInfoOfReview = createAsyncThunk(
  "sellerInfo/fetchSellerInfoOfReview",
  async (userId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/seller-info/${userId}`)
      .then((res) => {
        if (!res.data.sellerInfo) {
          return rejectWithValue("No Board Data");
        }
        return res.data.sellerInfo;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

const sellerInfo = createSlice({
  name: "sellerInfoReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: null,
    sellers: [],
    buyReviewsWithSellerInfo: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerInfoById.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchSellerInfoById.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.sellers.push(action.payload);
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchSellerInfoById.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchSellerInfoOfReview.fulfilled, (state, action) => {
        const { userName, address } = action.payload; // sellerInfo
        state.buyReviewsWithSellerInfo = state.buyReviews.map((review) => {
          return { ...review, userName, address };
        });
      });
  },
});
export const sellersSelector = (state) => state.sellerInfo.sellers;
// export const sellerInfoByIdSelector = createSelector(
//   sellersSelector,
//   (sellers) => sellers.find((item) => item.itemId === itemId)
// );

export const sellItemSelector = createSelector(sellersSelector, (sellers) =>
  sellers.map((item) => item.sellItem)
);
export const sellerInfoSelector = createSelector(sellersSelector, (sellers) =>
  sellers.map((item) => item.sellerInfo)
);
export const buyReviewsSelector = createSelector(sellersSelector, (sellers) =>
  sellers.map((item) => item.buyReviews)
);

export const buyReviewsWithSellerInfoSelector = (state) =>
  state.sellerInfo.buyReviewsWithSellerInfo;

export default sellerInfo.reducer;
