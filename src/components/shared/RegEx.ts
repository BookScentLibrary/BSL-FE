//username 아이디 정규식 검사
export const usernameCheck = (username: string) => {
  const usernameRegex = /^[a-z0-9]{8,20}$/;
  return usernameRegex.test(username);
};

//password 비밀번호 정규식 검사
export const passwordCheck = (password: string) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/;
  return passwordRegex.test(password);
};

//email 이메일 정규식 검사
export const emailCheck = (email: string) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

//nickname 닉네임 정규식 검사
export const nicknameCheck = (nickname: string) => {
  const nicknameRegex = /^[가-힣]{3,8}$/;
  return nicknameRegex.test(nickname);
};

//phone 연락처 정규식 검사
export const phoneCheck = (phone: string) => {
  const phoneRegex = /^[0-9]{11}$/;
  return phoneRegex.test(phone);
};

//userBirth 연락처 정규식 검사
export const userBirthCheck = (userBirth: string) => {
  const userBirthRegex = /^(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  return userBirthRegex.test(userBirth);
};
