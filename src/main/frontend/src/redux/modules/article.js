import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";
// pending, fulfilled, rejected 세 가지 thunk action creator가
export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async (thunkAPI) => {
    return axios
      .create({ baseURL })
      .get(`/hot-articles`)
      .then((res) => {
        if (!res.data) {
          return thunkAPI.rejectWithValue("No Article Data");
        }
        return res.data;
      })
      .catch((error) => thunkAPI.rejectWithValue(error.res.data));
  }
  //* 추가 옵션
  // condition(arg, { getState, extra } ): boolean (비동기 로직 실행 전에 취소하거나, 실행 도중에 취소할 수 있다.)
  // dispatchConditionRejection: boolean (true면, condition()이 false를 반환할 때 액션 자체를 디스패치하지 않도록 한다.)
  // idGenerator(): string (requestId를 만들어준다. 같은 requestId일 경우 요청하지 않는 등의 기능을 사용할 수 있게 된다.)
);

export const fetchArticleById = createAsyncThunk(
  "article/fetchArticleById",
  async (articleId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/articles/${articleId}`)
      .then((res) => {
        if (!res.data.data) {
          return rejectWithValue("No Article Data");
        }
        return res.data.data;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

export const registArticle = createAsyncThunk(
  "article/registArticle",
  async (newArticleData, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .post(`/item`, newArticleData)
      .then((res) => {
        if (!res.data.itemId) {
          return rejectWithValue("Can't Regist Article");
        }
        return res.data.itemId;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

export const deleteArticleById = createAsyncThunk(
  "article/deleteArticleById",
  async (itemId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .delete(`/item?itemId=${itemId}`)
      .then((res) => {
        if (!res) {
          return rejectWithValue("Can't Delete Article");
        }
        return res;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);
const article = createSlice({
  name: "articleReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: "",
    articles: [],
    filter: {
      city: "",
      gu: "",
    },
    oneThing: {
      // 단건 처리
      itemId: "",
      currentRequestId: "",
      loading: "idle",
      error: "",
    },
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
      console.log(state.filter);
    },
    resetFilter: (state, action) => {
      state.filter = {
        city: "",
        gu: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.articles = action.payload.content;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchArticle.rejected, (state, action) => {
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

export const { setFilter, resetFilter } = article.actions;
// 전체 데이터 호출
export const articleSelector = (state) => state.article.articles;
export const filterSelector = (state) => state.article.filter;

// 이게 위치기반으로 filter걸어서 가져와야 하는데
// 매물이 위치 데이터를 들고있지 않고 유저가 위치 정보를 들고있음...
export const filteredArticleSelector = createSelector(
  [articleSelector, filterSelector],
  (articles, filters) => {
    let result = articles;
    Object.values(filters).forEach((filter) => {
      if (filter)
        result = result.filter((item) => item.content?.includes(filter));
    });
    return result;
  }
);

// 단건 데이터 호출
export const articleOneThingIdSelector = (state) =>
  state.article.oneThing.itemId;
export const articleByIdSelector = createSelector(
  articleSelector,
  articleOneThingIdSelector,
  (articles, itemId) => articles.find((item) => item.itemId === itemId)
);
export default article.reducer;
