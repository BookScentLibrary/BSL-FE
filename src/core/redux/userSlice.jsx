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
//회원가입용 API
export const signUpAPI = createAsyncThunk(
  "user/signUp",
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
      console.log("signUpAPI : error response", error.response.data);
    }
  }
);
//아이디 중복확인용 API
export const usernameAPI = createAsyncThunk(
  "user/idCheck",
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
      console.log("usernameAPI : error response", error.response.data);
    }
  }
);
//닉네임 중복확인용 API
export const nicknameAPI = createAsyncThunk(
  "user/nickCheck",
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
      console.log("nicknameAPI : error response", error.response.data);
    }
  }
);

//로그인 API
export const signInAPI = createAsyncThunk(
  "user/signIn",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await userAPI.signIn(data);
      if (response.status === 200) {
        console.log(response);
        // window.location.replace('/login');
      } else {
        window.alert("뭔가 문제가 있음");
      }
    } catch (error) {
      console.log("signInAPI : error response", error.response.data);
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
