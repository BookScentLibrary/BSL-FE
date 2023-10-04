import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../api'



//책 목록의 상태 정의 
export const initialState = {

books : [], //책 목록을 저장할 배열
testMessage : "테스트 메시지",

};


//책과 관련된 액션 정의 
export const fetchBooks = createAsyncThunk(
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

export const bookSlice = createSlice({
  name: 'bookReducer',
  initialState,
  reducers: {
    setTestMessage: (state, action) => {
      state.testMessage = action.payload;
    }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchBooks.pending, (state) => {
          //요청이 보내지기 전에 상태 업데이트 
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
          //요청이 성공했을 때 책 목록 업데이트 
          state.books = action.payload;
        })
        .addCase(fetchBooks.rejected, (state,action) => {
          //요청이 실패했을 때 처리할 내용을 여기에 추가 가능함.
        })

        
 
  },
});