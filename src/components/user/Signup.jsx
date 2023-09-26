import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpAPI } from "../../core/redux/userSlice";
import axios from "axios";

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
    userAge: 0,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: null,
      username: user.username,
      password: user.password,
      email: user.email,
      nickname: user.nickname,
      gender: user.gender,
      phone: user.phone,
      userBirth: user.userBirth,
      userAge: user.userAge,
      permission: 0,
    };
    dispatch(signUpAPI(data));

    console.log(user.userAge);
    // try {
    //   // API 호출
    //   // const response = await axios.post(
    //   //   "http://localhost:8080/user/signup",
    //   //   data
    //   // );
    //   // API 요청이 성공하면 Redux의 signupApi 액션을 호출
    //   // 성공 처리
    //   // console.log("회원가입 성공:", response.data);
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     const errorData = error.response.data;
    //     setErrorMessage({
    //       ...errorMessage,
    //       ...errorData,
    //     });
    //   } else {
    //     console.error("알 수 없는 오류:", error);
    //   }
    // }
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
