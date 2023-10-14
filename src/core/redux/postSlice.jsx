import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAPI, userAPI } from "../apis";

export const initialState = {
  notice: [],
  program: [],
  bestseller: [],
  newbook: [],
  recommend: [],
  review: [],
};

// 프로그램 안내 목록 조회
export const getProgramListAPI = createAsyncThunk(
  "post/getProgramList",
  async (data, thunkAPI) => {
    try {
      const response = await postAPI.getProgramList();
      thunkAPI.dispatch(postSlice.actions.setProgram(response.data));
    } catch (error) {
      console.log("signUpAPI : error response", error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setProgram: (state, action) => {
      state.program = action.payload;
    },
  },
});
