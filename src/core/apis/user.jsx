import { instance } from "../instance";

export const userAPI = {
  // 회원가입
  signUp: (data) => instance.post("/user/signUp", data),
  //로그인
  signIn: (data) => instance.post("/user/signIn", data),
};
