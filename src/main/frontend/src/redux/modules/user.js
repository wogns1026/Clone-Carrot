import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

export const fetchUserByPhoneNumber = createAsyncThunk(
  "user/fetchUserByPhoneNumber",
  async (phoneNumber, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .get(`/user/${phoneNumber}`)
      .then((res) => {
        if (!res.data.userInfo) {
          return rejectWithValue("No User Data");
        }
        return res.data.userInfo;
      })
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (newUserData, { rejectWithValue }) => {
    console.log(newUserData);
    return axios
      .create({ baseURL })
      .post(`/user`, { user: newUserData })
      .then((res) => newUserData)
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const modifyUser = createAsyncThunk(
  "user/modifyUser",
  async (newUserData, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .post(`/user`, newUserData)
      .then((res) => newUserData)
      .catch((err) => rejectWithValue(err.res.data));
  }
);

export const deleteUserById = createAsyncThunk(
  "user/deleteUser",
  async ({ userId }, { rejectWithValue }) => {
    return axios
      .create({ baseURL })
      .delete(`/user?userId=${userId}`)
      .then()
      .catch((err) => rejectWithValue(err.res.data));
  }
);

const user = createSlice({
  name: "userReducer",
  initialState: {
    currentRequestId: "",
    loading: "idle",
    error: "",
    info: {},
    // address: ""
    // image: ""
    // mannerTemper: 0
    // phoneNumber: ""
    // retradeRate: 0
    // userId: 0
    // userName: ""
    accessToken: "",
    refreshToken: "",
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByPhoneNumber.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.info = { ...state.info, ...action.payload };
      });
  },
});

// 전체 데이터 호출
export const userInfoSelector = (state) => state.user.info;

export default user.reducer;
