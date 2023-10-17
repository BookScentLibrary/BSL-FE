import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mypageAPI } from "../apis";

export const initialState = {
  bookcart: [],
  renthistory: [],
  rentnow: [],
  myreview: [],
  count: {},
};

export const getRentHistoryAPI = createAsyncThunk(
  "main/RENT_HISTORY",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getRentHistory(userId);
      thunkAPI.dispatch(mypageSlice.actions.setRentHistory(response.data));
    } catch (error) {
      console.log("MYPAGE_RENT_HISTORY : error response", error.response.data);
    }
  }
);

export const getRentHistoryAllAPI = createAsyncThunk(
  "main/RENT_HISTORY_ALL",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getRentHistoryAll(userId);
      thunkAPI.dispatch(mypageSlice.actions.setRentHistoryAll(response.data));
    } catch (error) {
      console.log(
        "MYPAGE_RENT_HISTORY_ALL : error response",
        error.response.data
      );
    }
  }
);

export const getRentNowAPI = createAsyncThunk(
  "mypage/RENT_NOW",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getRentNow(userId);
      thunkAPI.dispatch(mypageSlice.actions.setRentNow(response.data));
    } catch (error) {
      console.log("MYPAGE_RENT_NOW : error response", error.response.data);
    }
  }
);

export const getCountAPI = createAsyncThunk(
  "mypage/COUNT",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getCount(userId);
      thunkAPI.dispatch(mypageSlice.actions.setCount(response.data));
    } catch (error) {
      console.log("MYPAGE_RENT_HISTORY : error response", error.response.data);
    }
  }
);

export const getReviewAPI = createAsyncThunk(
  "mypage/REVIEW",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getReview(userId);
      thunkAPI.dispatch(mypageSlice.actions.setReview(response.data));
    } catch (error) {
      console.log("MYPAGE_REVIEW : error response", error.response.data);
    }
  }
);

export const getReviewAllAPI = createAsyncThunk(
  "mypage/REVIEW_ALL",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getReviewAll(userId);
      thunkAPI.dispatch(mypageSlice.actions.setReviewAll(response.data));
    } catch (error) {
      console.log("MYPAGE_REVIEW_ALL : error response", error.response.data);
    }
  }
);

export const getBookListAPI = createAsyncThunk(
  "mypage/GETBOOKLIST",
  async (data, thunkAPI) => {
    try {
      const response = await mypageAPI.getBookList(data);
      thunkAPI.dispatch(mypageSlice.actions.setBookCart(response.data));
    } catch (error) {
      console.log("MYPAGE_ : error response", error.response.data);
    }
  }
);

export const mypageSlice = createSlice({
  name: "mypageReducer",
  initialState,
  reducers: {
    setRentHistory: (state, action) => {
      state.renthistory = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setRentNow: (state, action) => {
      state.rentnow = action.payload;
    },
    setReview: (state, action) => {
      state.myreview = action.payload;
    },
    setBookCart: (state, action) => {
      state.bookcart = action.payload;
    },
    setRentHistoryAll: (state, action) => {
      state.renthistory = action.payload;
    },
    setReviewAll: (state, action) => {
      state.myreview = action.payload;
    },
  },
});
