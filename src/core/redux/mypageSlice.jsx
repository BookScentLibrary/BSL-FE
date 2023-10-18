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

export const getBookCartAPI = createAsyncThunk(
  "book/GET_BOOK_CART",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.getBookCart(userId);
      thunkAPI.dispatch(mypageSlice.actions.setBookCart(response.data));
    } catch (error) {
      console.log("BOOK_GET_BOOK_CART : error response", error.response.data);
    }
  }
);

export const deleteAllBookCartAPI = createAsyncThunk(
  "book/DELETE_ALL_BOOK_CART",
  async (data, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await mypageAPI.deleteAllBookCart(userId);
      response.status === 200 &&
        thunkAPI.dispatch(mypageSlice.actions.setBookCart([]));
    } catch (error) {
      console.log(
        "BOOK_DELETE_ALL_BOOK_CART : error response",
        error.response.data
      );
    }
  }
);

export const rentBookAPI = createAsyncThunk(
  "book/RENT_BOOK",
  async (bookNos, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");

      for (let i = 0; i < bookNos.length; i++) {
        const data = {
          userId: userId,
          bookNo: bookNos[i],
        };
        const response = await mypageAPI.rentBook(data);
        if (response.status === 200) {
          thunkAPI.dispatch(getBookCartAPI(userId));
        }
      }
    } catch (error) {
      console.log(
        "BOOK_DELETE_ALL_BOOK_CART : error response",
        error.response.data
      );
    }
  }
);

export const returnBookAPI = createAsyncThunk(
  "book/RETURN_BOOK",
  async (bookNo, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const data = {
        bookNo: bookNo,
        userId: userId,
      };
      const response = await mypageAPI.returnBook(data);

      if (response.status === 200) {
        window.alert("도서 반납처리가 완료되었습니다.");
        thunkAPI.dispatch(getRentNowAPI(userId));
      }
    } catch (error) {
      console.log("BOOK_RETURN_BOOK : error response", error.response.data);
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
