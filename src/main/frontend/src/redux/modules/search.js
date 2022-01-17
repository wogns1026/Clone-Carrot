import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const searchArticleByKeyword = createAsyncThunk(
  "search/articleByKeyword",
  async (keyword, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/search/${keyword}`)
      .then((res) => {
        if (!res.data.content) {
          return rejectWithValue("No Board Data");
        }
        return res.data.content;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);
const search = createSlice({
  name: "searchReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: "",
    articles: [],
    page: 1,
    pageSize: 6,
  },
  reducers: {
    resetPage: (state, action) => {
      state.page = 1;
    },
    nextPage: (state, action) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArticleByKeyword.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(searchArticleByKeyword.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.articles = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(searchArticleByKeyword.rejected, (state, action) => {
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

export const { resetPage, nextPage } = search.actions;
// 전체 데이터 호출
export const searchArticleSelector = (state) => state.search.articles;
export const pageSelector = (state) => state.search.page;
export const pageSizeSelector = (state) => state.search.pageSize;
export const searchArticlePageSelector = createSelector(
  [searchArticleSelector, pageSelector, pageSizeSelector],
  (articles, page, pageSize) => articles.slice(0, page * pageSize)
);

export default search.reducer;
