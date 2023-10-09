import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../apis";

export const initialState = {
  user: null,
  usernameDBCheck: false,
  nicknameDBCheck: false,
  is_login: false,
};
//회원가입용 API
export const signUpAPI = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {
    try {
      console.log("signUpAPI" + data);
      const response = await userAPI.signUp(data);
      if (response.status === 200) {
        console.log(response);
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
//아이디 중복확인용 API
// export const usernameAPI = createAsyncThunk(
//   "user/idCheck",
//   async (data, thunkAPI) => {
//     try {
//       console.log("아이디 중복확인 data:" + data);
//       const response = await userAPI.idCheck(data);
//       if (response.status === 200) {
//         console.log("아이디 중복확인 response:" + response);
//       } else {
//         window.alert("뭔가 문제가 있음");
//       }
//     } catch (error) {
//       console.log("usernameAPI : error response", error.response.data);
//     }
//   }
// );
// //닉네임 중복확인용 API
// export const nicknameAPI = createAsyncThunk(
//   "user/nickCheck",
//   async (data, thunkAPI) => {
//     try {
//       console.log("닉네임 중복확인 data:" + data);
//       const response = await userAPI.signUp(data);
//       if (response.status === 200) {
//         console.log("닉네임 중복확인 response:" + response);
//       } else {
//         window.alert("뭔가 문제가 있음");
//       }
//     } catch (error) {
//       console.log("nicknameAPI : error response", error.response.data);
//     }
//   }
// );

//로그인 API
export const signInAPI = createAsyncThunk(
  "user/signIn",
  async (data, thunkAPI) => {
    try {
      console.log("로그인 data : " + data);
      const response = await userAPI.signIn(data);
      if (response.status === 200) {
        if (response.data.result === false) {
          console.log(
            "스프링부트에서 왔어요  result : " + response.data.result
          );
          window.alert("나 리액트. 아이디 혹은 비밀번호가 일치하지 않습니다.");
          return;
        }
        console.log("로그인 response.status : " + response.status);
        // console.log(
        //   "스프링부트에서 왔어요 token : " + response.data.data.token
        // );
        // console.log(
        //   "스프링부트에서 왔어요  exprTime : " + response.data.data.exprTime
        // );
        // console.log("스프링부트에서 왔어요  user : " + response.data.data.user);
        const accessToken = response.data.data.token;
        console.log("스프링부트에서 왔어요  accessToken : " + accessToken);
        localStorage.clear();
        localStorage.setItem("token", accessToken);
        const storedToken = localStorage.getItem("token");
        console.log("스프링부트에서 왔어요  localStorage : " + storedToken);
        console.log("스프링부트에서 왔어요  response.data : " + response.data);
        console.log(
          "스프링부트에서 왔어요  response.data.data : " + response.data.data
        );
        const { token, exprTime, user } = response.data.data;
        const expires = new Date();
        expires.setTime(expires.getTime() + exprTime);
        console.log("리액트에 저장됐어요 token : " + token);
        console.log(
          "리액트에 저장됐어요  exprTime : " + response.data.data.exprTime
        );
        console.log("리액트에 저장됐어요  user : " + response.data.data.user);
        //setCookies("token", token, { expires });
        console.log(user);
        thunkAPI.dispatch(userSlice.actions.setUser(user));
        console.log(
          "setUser : " +
            userSlice.reducer(undefined, userSlice.actions.setUser).user
        );
        //로그인 성공하면 메인페이지로 이동
        window.location.replace("/");
        console.log(response.data.result);
        console.log(typeof response.data.result);
      } else {
        window.alert("뭔가 문제가 있음");
      }
    } catch (error) {
      console.log("signInAPI : error response", error.response.data);
      window.alert("나 리액트임. 로그인에 실패했습니다.");
      console.log(error);
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
    idCheck: (state, action) => {
      state.usernameDBCheck = action.payload.result;
      return;
    },
  },
});
