import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
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
        console.log("스프링부트에서 왔어요 token : " + responseData.data.token);
        console.log(
          "스프링부트에서 왔어요  exprTime : " + responseData.data.exprTime
        );
        console.log("스프링부트에서 왔어요  user : " + responseData.data.user);
        if (!responseData.result) {
          console.log(responseData.result);
          window.alert("나 리액트. 아이디 혹은 비밀번호가 일치하지 않습니다.");
          return;
        }
        const { token, exprTime, user } = responseData.data;
        const expires = new Date();
        expires.setTime(expires.getTime() + exprTime);

        setCookies("token", token, { expires });
        //dispatch(signInAPI(user));
        console.log(user);
        window.location.replace("/");
      })
      .catch((error) => {
        window.alert("나 리액트임. 로그인에 실패했습니다.");
        console.log(error);
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
