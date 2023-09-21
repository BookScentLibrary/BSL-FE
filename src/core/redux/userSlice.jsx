import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../api";

export const initialState = {
  user: {
    userEmail: "email@email.com",
    userNickname: "river",
    userPassword: "password!123",
    userPasswordCheck: "password!123",
    userImg:
      "https://pbs.twimg.com/profile_images/1116573617645424640/u5h2q3jv_400x400.png",
    userLocation: "bucheon-si",
    userPetBreed: "golden doodle",
    userPetName: "dang dang e",
  },
  emailCheck: false,
  is_login: false,
};

// 로그인
export const logInApi = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const userdata = {
        userEmail: user.userEmail,
        userPassword: user.userPassword,
      };
      const response = await userAPI.logIn(userdata);
      // console.log('logInApi : response', response);
      const token = response.headers.authorization?.split("BEARER ");
      if (token) {
        if (user.checked) {
        }
        localStorage.setItem("token", token[1]);
        thunkAPI.dispatch(userSlice.actions.setUser(response));
        window.location.replace("/");
        return;
      }
    } catch (error) {
      console.log("logInApi : error response", error.response.data);
    }
  }
);

export const testApi = createAsyncThunk("user/test", async (data, thunkAPI) => {
  try {
    const response = await userAPI.test(data);
    thunkAPI.dispatch(userSlice.actions.setTestMessage(response.data));
  } catch (error) {
    console.log("logInApi : error response", error.response.data);
  }
});

export const signupApi = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await userAPI.signup(data);
      thunkAPI.dispatch(userSlice.actions.setSignMessage(response.data));
    } catch (error) {
      console.log("logInApi : error response", error.response.data);
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
    emailDpCheck: (state, action) => {
      console.log(action.payload);
      state.emailCheck = action.payload;
      return;
    },
    setTestMessage: (state, action) => {
      state.message = action.payload;
      return;
    },
    setSignMessage: (state, action) => {
      state.signmessage = action.payload;
      return;
    },
  },
});
