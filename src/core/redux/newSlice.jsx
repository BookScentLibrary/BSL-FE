// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { newAPI } from "../apis";

// export const initialState = {
//   newbook: [],
// };

// export const newBookAPI = createAsyncThunk(
//   "book/newbook",
//   async (data, thunkAPI) => {
//     try {
//       const response = await newAPI.getNewBook();
//       thunkAPI.dispatch(newSlice.actions.setNewBook(response.data));
//     } catch (error) {
//       console.log("NEWBOOK : error response", error.response.data);
//     }
//   }
// );

// export const getBookAPI = createAsyncThunk(
//     "book/getBook",
//     async (bookNo, thunkAPI) => {
//       try {
//         const response = await bookAPI.getBook(bookNo);
//         console.log(response.data);
//         const book = {
//           ...response.data,
//           author: response.data.author.split(";"),
//         };
//         thunkAPI.dispatch(bookSlice.actions.setBook(book));
//       } catch (error) {
//         console.log("testAPI : error response", error.response.data);
//       }
//     }
//   );

// export const newSlice = createSlice({
//   name: "newReducer",
//   initialState,
//   reducers: {
//     setNewBook: (state, action) => {
//       state.newbook = action.payload;
//     },
//     setBook: (state, action) => {
//       state.book = action.payload;
//     },
//   },
// });

// export const { setNewBook, setBook } = newSlice.actions;

// export default newSlice.reducer;
