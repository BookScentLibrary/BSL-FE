import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import { userSlice } from "./redux/userSlice";
import { bookSlice } from "./redux/bookSlice";
import { postSlice } from "./redux/postSlice";
import { mainSlice } from "./redux/mainSlice";
import { newBookSlice } from "./redux/newBookSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  book: bookSlice.reducer,
  post: postSlice.reducer,
  main: mainSlice.reducer,
  newBook: newBookSlice.reducer,
});

export const configStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export const useAppDispatch = () => useDispatch();

export default configStore;
