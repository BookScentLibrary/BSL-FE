import React, { useState } from "react";
import * as S from "./SignIn.style";
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
      <S.StyledWord>
        <h1>로그인</h1>
        <hr />
        <br />
      </S.StyledWord>
      <S.Container>
        <Input
          type="text"
          name="username"
          width="400px"
          label="아이디"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
      </S.Container>
      <S.Container>
        <Input
          password
          name="password"
          width="400px"
          label="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </S.Container>
      <S.Container>
        <Button onClick={() => SignInHandler()}>로그인</Button>
      </S.Container>
    </>
  );
};

export default SignIn;
