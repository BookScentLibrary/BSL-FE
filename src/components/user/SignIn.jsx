import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
import { useDispatch } from "react-redux";
import { signInAPI } from "../../core/redux/userSlice";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    dispatch(signInAPI(data));
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
          <Input
            type="text"
            name="username"
            label="아이디"
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />
          <Input
            type="password"
            name="password"
            label="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />
        </div>
      </div>
      <div>
        <Button onClick={() => SignInHandler()}>로그인</Button>
      </div>
    </>
  );
};

export default SignIn;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;
