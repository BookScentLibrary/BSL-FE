import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainAPI } from "../apis";

export const initialState = {
  newbook: [],
  notice: [],
  program: [],
  bestseller: [],
  recommend: [],
  review: [],
};

export const mainNewBookAPI = createAsyncThunk(
  "main/NEW_BOOK",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getNewBook();
      thunkAPI.dispatch(mainSlice.actions.setNewBook(response.data));
    } catch (error) {
      console.log("MAIN_NEWBOOK : error response", error.response.data);
    }
  }
);

export const mainReviewAPI = createAsyncThunk(
  "main/REVIEW",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getReview();
      thunkAPI.dispatch(mainSlice.actions.setReview(response.data));
    } catch (error) {
      console.log("MAIN_REVIEW : error response", error.response.data);
    }
  }
);

export const mainBestsellerAPI = createAsyncThunk(
  "main/BESTSELLER",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getBestseller();
      thunkAPI.dispatch(mainSlice.actions.setBestseller(response.data));
    } catch (error) {
      console.log("MAIN_BESTSELLER : error response", error.response.data);
    }
  }
);

export const mainNoticeAPI = createAsyncThunk(
  "main/NOTICE",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getNotice();
      thunkAPI.dispatch(mainSlice.actions.setNotice(response.data));
    } catch (error) {
      console.log("MAIN_NOTICE : error response", error.response.data);
    }
  }
);

export const mainProgramAPI = createAsyncThunk(
  "main/PROGRAM",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getProgram();
      thunkAPI.dispatch(mainSlice.actions.setProgram(response.data));
    } catch (error) {
      console.log("MAIN_PROGRAM : error response", error.response.data);
    }
  }
);

export const mainRecommendAPI = createAsyncThunk(
  "main/RECOMMEND",
  async (data, thunkAPI) => {
    try {
      const response = await mainAPI.getRecommendBook();
      thunkAPI.dispatch(mainSlice.actions.setRecommend(response.data));
    } catch (error) {
      console.log("MAIN_Recommend : error response", error.response.data);
    }
  }
);



export const mainSlice = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    setNewBook: (state, action) => {
      state.newbook = action.payload;
    },
    setReview: (state, action) => {
      state.review = action.payload;
    },
    setRecommend: (state, action) => {
      state.recommend = action.payload;
    },
    setNotice: (state, action) => {
      state.notice = action.payload;
    },
    setProgram: (state, action) => {
      state.program = action.payload;
    },
    setBestseller: (state, action) => {
      state.bestseller = action.payload;
    },
  },
});
