import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../apis";

export const initialState = {
  user: {
    nickname: "river",
    userEmail: "playamongthestars000@gmail.com",
  },
  emailCheck: false,
  is_login: false,
};

export const signUpAPI = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await userAPI.signUp(data);
      if (response.status === 200) {
        console.log(response);
        // window.location.replace('/login');
      } else {
        window.alert("뭔가 문제가 있음");
      }
    } catch (error) {
      console.log("signupAPI : error response", error.response.data);
    }
  }
);


export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
      return;
    },

  },
});
