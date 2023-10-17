import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newBookAPI } from "../apis/newBook";

export const initialState = {
    newBookNo: [],
    bookname: [],
    author: [],
    publisher: [],
    publicationYear: [],
    regDate: []
};

// 신간 책 정보 조회
export const getNewBookListAPI = createAsyncThunk(
    "newBook/getNewBookList",
    async (data, thunkAPI) => {
        try {
            const response = await newBookAPI.getNewBookList();
            thunkAPI.dispatch(newBookSlice.actions.setNewBook(response.data));
        } catch (error) {
        console.log("Program : error response", error.response.data);
        }
    }
);

export const newBookSlice = createSlice({
    name: "newBookReducer",
    initialState,
    reducers: {
        setNewBook: (state, action) => {
            state.BookNo = action.payload;
        }
    }
});

export default newBookSlice.reducer;