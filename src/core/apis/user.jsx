import { instance } from "../instance";

export const userAPI = {
  // 회원가입
  signUp: (data) => instance.post('/user/signup', data),
};
