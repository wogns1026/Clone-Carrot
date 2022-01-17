import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const fetchBoard = createAsyncThunk(
  "board/fetchBoard",
  async ({ rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/board`)
      .then((res) => {
        if (!res.data.content) {
          return rejectWithValue("No Board Data");
        }
        return res.data.content;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
  //* 추가 옵션
  // condition(arg, { getState, extra } ): boolean (비동기 로직 실행 전에 취소하거나, 실행 도중에 취소할 수 있다.)
  // dispatchConditionRejection: boolean (true면, condition()이 false를 반환할 때 액션 자체를 디스패치하지 않도록 한다.)
  // idGenerator(): string (requestId를 만들어준다. 같은 requestId일 경우 요청하지 않는 등의 기능을 사용할 수 있게 된다.)
);

export const fetchBoardById = createAsyncThunk(
  "board/fetchBoardById",
  async (boardId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/board/dtl/${boardId}`)
      .then((res) => {
        if (!res.data.content) {
          return rejectWithValue("No Board Data");
        }
        return res.data.content;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

export const registBoard = createAsyncThunk(
  "board/registBoard",
  async (newBoardData, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .post(`/board`, newBoardData)
      .then((res) => {
        if (!res.data.success) {
          return rejectWithValue("No Board Data");
        }
        return res.data.success;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

export const deleteBoardById = createAsyncThunk(
  "board/deleteBoardById",
  async (boardId, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .delete(`/board?boardId=${boardId}`)
      .then((res) => {
        if (!res.data.deleteCount) {
          return rejectWithValue("게시물 삭제 실패");
        }
        return res.data.deleteCount;
      })
      .catch((error) => rejectWithValue(error.res.data));
  }
);

const board = createSlice({
  name: "boardReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: "",
    boards: [],
    //   boardId:""
    //   userId:""
    //   content:""
    //   image:[]
    //   regTime: new Date(),
    oneThing: {
      // 단건 처리
      boardId: "",
    },
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
      .addCase(fetchBoard.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.boards = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchBoard.rejected, (state, action) => {
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
      .addCase(fetchBoardById.fulfilled, (state, action) => {
        state.oneThing.boardId = action.payload.boardId;
        state.boards.push(action.payload);
      });
  },
});
export const { resetPage, nextPage } = board.actions;

// 전체 데이터 호출
export const boardSelector = (state) => state.board.boards;
export const pageSelector = (state) => state.board.page;
export const pageSizeSelector = (state) => state.board.pageSize;
export const boardArticlePageSelector = createSelector(
  [boardSelector, pageSelector, pageSizeSelector],
  (boards, page, pageSize) => boards.slice(0, page * pageSize)
);

// 단건 데이터 호출
export const boardOneThingIdSelector = (state) => state.board.oneThing.boardId;
export const boardByIdSelector = createSelector(
  [boardSelector, boardOneThingIdSelector],
  (boards, boardId) => boards?.find((item) => item.boardId === boardId)
);

export default board.reducer;
