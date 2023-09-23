import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupApi } from "../../core/redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    password_again: "",
    email: "",
    nickname: "",
    gender: "",
    phone: "",
    userBirth: "",
    userAge: "",
  });

  const [errorMessage, setErrorMessage] = useState({}); // 오류 메시지를 저장하는 상태

  //입력 이벤트 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    // 입력 값이 변경될 때마다 해당 입력 필드의 오류 메시지 초기화
    setErrorMessage({
      ...errorMessage,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // 아이디 검증
    const usernameRegex = /^[a-zA-Z0-9]{8,20}$/;
    if (!usernameRegex.test(user.username)) {
      newErrors.username =
        "아이디는 영문(대소문자)과 숫자로 8자에서 20자 사이여야 합니다.";
    }

    // 비밀번호 검증
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/;
    if (!passwordRegex.test(user.password)) {
      newErrors.password =
        "비밀번호는 영문, 숫자, 특수문자(!, @, #, $, %, ^, &, *)로 8자에서 20자 사이여야 합니다.";
    }

    if (user.password !== user.password_again) {
      newErrors.password_again = "비밀번호가 일치하지 않습니다.";
    }

    // 이메일 검증
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    // 닉네임 검증
    const nicknameRegex = /^[가-힣]{3,8}$/;
    if (!nicknameRegex.test(user.nickname)) {
      newErrors.nickname = "닉네임은 한글 3자에서 8자 사이여야 합니다.";
    }

    // 연락처 검증
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(user.phone)) {
      newErrors.phone = "숫자('-'빼고 01011112222)만 입력 가능합니다.";
    }

    // 생년월일 검증
    const birthRegex = /^\d{8}$/;
    if (!birthRegex.test(user.userBirth)) {
      newErrors.userBirth = "생년월일은 19990101 형식으로 8자 입력해주세요.";
    }

    // 성별 검증
    if (
      user.gender !== "여" &&
      user.gender !== "남" &&
      user.gender !== "선택안함"
    ) {
      newErrors.gender = "성별을 선택해주세요.";
    }

    setErrorMessage(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("양식 데이터가 유효합니다:", user);
      dispatch(signupApi(user));
    } else {
      console.log("양식이 유효하지 않습니다.");
      alert("양식이 유효하지 않습니다.");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디를 입력해주세요."
          value={user.username}
          onChange={handleInputChange}
        />
        {errorMessage.username && <p>{errorMessage.username}</p>}
        <br />

        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          value={user.password}
          onChange={handleInputChange}
        />
        {errorMessage.password && <p>{errorMessage.password}</p>}
        <br />

        <input
          type="password"
          name="password_again"
          placeholder="비밀번호를 다시 입력해주세요."
          value={user.password_again}
          onChange={handleInputChange}
        />
        {errorMessage.password_again && <p>{errorMessage.password_again}</p>}
        <br />

        <input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          value={user.email}
          onChange={handleInputChange}
        />
        {errorMessage.email && <p>{errorMessage.email}</p>}
        <br />

        <input
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요."
          value={user.nickname}
          onChange={handleInputChange}
        />
        {errorMessage.nickname && <p>{errorMessage.nickname}</p>}
        <br />

        <select name="gender" value={user.gender} onChange={handleInputChange}>
          <option value="">성별 선택</option>
          <option value="여">여</option>
          <option value="남">남</option>
          <option value="선택안함">선택안함</option>
        </select>
        {errorMessage.gender && <p>{errorMessage.gender}</p>}
        <br />

        <input
          type="text"
          name="phone"
          placeholder="연락처('-'빼고 01011112222)를 입력해주세요."
          value={user.phone}
          onChange={handleInputChange}
        />
        {errorMessage.phone && <p>{errorMessage.phone}</p>}
        <br />

        <input
          type="text"
          name="userBirth"
          placeholder="생년월일(19990101)입력해주세요"
          value={user.userBirth}
          onChange={handleInputChange}
        />
        {errorMessage.userBirth && <p>{errorMessage.userBirth}</p>}
        <br />

        <input
          type="number"
          name="userAge"
          placeholder="나이를 입력해주세요."
          value={user.userAge}
          onChange={handleInputChange}
        />
        <br />

        <input type="submit" value="회원가입" />
        <input type="reset" value="취소" />
      </form>
    </div>
  );
};

export default Signup;
