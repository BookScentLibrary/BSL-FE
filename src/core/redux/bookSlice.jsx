import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../instance';
import { testAPI } from '../apis';


export const initialState = {
  
}


export const searchBookAPI = createAsyncThunk(
  'book/search',
  async (data, thunkAPI) => {
    try {
      const response = await instance.get(`/search?${data.data1}&${data.data2}&${data.data3}`);
      console.log("searchAPI response : ", response.data);
      
    } catch (error) {
      console.log('searchAPI : error response', error.response.data);
    }
  },
);

export const getBookTestAPI = createAsyncThunk(
  "user/test",
  async (data, thunkAPI) => {
    try {
      const response = await testAPI.getBook();
      console.log(response.data);
      thunkAPI.dispatch(bookSlice.actions.setTestMessage(response.data));
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

export const bookSlice = createSlice({
  name: 'bookReducer',
  initialState,
  reducers: {
    setTestMessage: (state, action) => {
      state.book = action.payload;
      return;
    },
  },
});