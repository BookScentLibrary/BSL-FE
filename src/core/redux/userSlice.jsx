import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../apis";

export const initialState = {
  user: null,
  is_login: false,
};
//회원가입용 API
export const signUpAPI = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {
    try {
      const response = await userAPI.signUp(data);
      if (response.status === 200) {
        //회원가입 성공시 로그인창으로 이동;
        window.location.replace("/signIn");
      } else {
        window.alert("회원가입 실패");
      }
    } catch (error) {
      console.log("signUpAPI : error response", error.response.data);
    }
  }
);

//로그인 API
export const signInAPI = createAsyncThunk(
  "user/signIn",
  async (data, thunkAPI) => {
    try {
      const response = await userAPI.signIn(data);
      if (response.status === 200) {
        if (response.data.result === false) {
          window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
          return;
        }
        const accessToken = response.data.data.token;
        sessionStorage.clear();
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("nickname", response.data.data.user.nickname);
        sessionStorage.setItem("username", response.data.data.user.username);
        sessionStorage.setItem("userId", response.data.data.user.userId);
        sessionStorage.setItem(
          "permission",
          response.data.data.user.permission
        );
        const { token, exprTime, user } = response.data.data;
        const expires = new Date();
        expires.setTime(expires.getTime() + exprTime);
        thunkAPI.dispatch(userSlice.actions.setUser({ token, exprTime, user }));
        //로그인 성공하면 메인페이지로 이동
        window.location.replace("/");
      } else {
        window.alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      window.alert("로그인에 실패했습니다.");
      console.log("signInAPI : error response", error);
    }
  }
);

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.is_login = true;
    },
    getUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
      return;
    },
    deleteUser: (state, action) => {
      state.user = null;
      state.is_login = false;
      return;
    },
  },
});
