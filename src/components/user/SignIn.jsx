import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { signInAPI } from "../../core/redux/userSlice";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies();
  const dispatch = useDispatch();

  const SignInHandler = () => {
    if (username.length === 0 || password.length === 0) {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    const data = {
      username,
      password,
    };
    axios
      .post("http://localhost:8080/user/signIn", data)
      .then((response) => {
        const responseData = response.data;
        if (!responseData.result) {
          window.alert("로그인에 실패했습니다.");
          return;
        }
        const { token, exprTime, user } = responseData.data;
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds + exprTime);

        setCookies("token", token, { expires });
        dispatch(signInAPI(user));
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다.");
      });
  };
  return (
    <>
      <div>
        <div>
          <StyledWord>
            <h1>로그인</h1>
            <hr />
            <br />
          </StyledWord>
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            name="username"
            label="아이디"
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />
        </div>
      </div>
      <div>
        <SubmitButton
          onClick={() => SignInHandler()}
          style={{ width: "1025px" }}
        >
          로그인
        </SubmitButton>
      </div>
    </>
  );
};

export default SignIn;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const SubmitButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #a1e092;
  color: #fff;
  padding: 8px;
  margin: 3px;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
`;
