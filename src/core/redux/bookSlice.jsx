import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../api'




export const initialState = {

}



export const testApi = createAsyncThunk(
  'book/search',
  async (data, thunkAPI) => {
    try {
      const response = await userAPI.test(data);
      console.log(response.data);
      thunkAPI.dispatch(userSlice.actions.setTestMessage(response.data));
    } catch (error) {
      console.log('logInApi : error response', error.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
      return;
    },
 
  },
});