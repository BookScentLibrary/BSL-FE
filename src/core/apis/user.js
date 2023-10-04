
import instance from '../instance';

const addPrefix = (path) => {
  return 'api/v1/user' + path;
};

// 회원가입
export const signUp = (options) =>
  instance({
    method: 'POST',
    url: addPrefix(`/signup`),
    ...options,
  });

  // 로그인
export const logIn = (options) =>
  instance({
    method: 'POST',
    url: addPrefix(`/login`),
    ...options,
  });


export const test = (options) =>
  instance({
    method: 'GET',
    url: 'http://localhost:8080/book/',
    ...options,
  })