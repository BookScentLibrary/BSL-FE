import { instance } from "../instance";

export const userAPI = {
  //아이디 중복
  idCheck: (data) => instance.post("/user/idCheck", data),
  //닉네임 중복
  nickCheck: (data) => instance.post("/user/nickCheck", data),
  // 회원가입
  signUp: (data) => instance.post("/user/signUp", data),
  //로그인
  signIn: (data) => instance.post("/user/signIn", data),
};
