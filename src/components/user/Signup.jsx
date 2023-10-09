import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpAPI } from "../../core/redux/userSlice";
import axios from "axios";
import styled from "styled-components";
import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button";
import {
  usernameCheck,
  passwordCheck,
  emailCheck,
  nicknameCheck,
  phoneCheck,
  userBirthCheck,
} from "../shared/RegEx.ts";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""); //아이디
  const [password, setPassword] = useState(""); //비밀번호
  const [passwordAgain, setPasswordAgain] = useState(""); //비밀번호 확인
  const [email, setEmail] = useState(""); // 이메일
  const [gender, setGender] = useState(""); //성별
  const [nickname, setNickname] = useState(""); // 닉네임
  const [phone, setPhone] = useState(""); // 연락처
  const [userBirth, setUserBirth] = useState(""); // 생년월일

  const [usernameMsg, setUsernameMsg] = useState(""); //유효성 검사 아이디 메세지
  const [passwordMsg, setPasswordMsg] = useState(""); //유효성 검사 비밀번호 메세지
  const [passwordAgainMsg, setPasswordAgainMsg] = useState(""); //유효성 검사 비밀빈호 확인 메세지
  const [emailMsg, setEmailMsg] = useState(""); //유효성 검사 이메일 메세지
  const [nicknameMsg, setNicknameMsg] = useState(""); //유효성 검사 닉네임 메세지
  const [phoneMsg, setPhoneMsg] = useState(""); //유효성 검사 연락처 메세지
  const [userBirthMsg, setUserBirthMsg] = useState(""); //유효성 검사 생년월일 메세지

  const [usernameDBCheck, setUsernameDBCheck] = useState(false); // 아이디 중복 검사 결과
  const [nicknameDBCheck, setNicknameDBCheck] = useState(false); // 닉네임 중복 검사 결과

  //아이디 중복 검사
  const idDueCheck = async () => {
    if (username === "") {
      console.log(username);
      window.alert("아이디를 입력해주세요");
      return;
    }
    if (!usernameCheck(username)) {
      console.log(username);
      window.alert("아이디 형식이 올바르지 않습니다.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/idCheck", {
        username: username,
      });

      if (response.data.result === true) {
        // 아이디가 중복되지 않는 경우
        console.log(username);
        setUsernameDBCheck(true);
      } else {
        // 중복된 아이디가 있는 경우
        setUsernameDBCheck(false);
        console.log(username);
        window.alert("중복된 아이디입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //닉네임 중복 검사
  const nickDueCheck = async () => {
    if (nickname === "") {
      console.log(nickname);
      window.alert("닉네임을 입력해주세요");
      return;
    }
    if (!nicknameCheck(nickname)) {
      console.log(nickname);
      window.alert("3~8자 이내의 한글 닉네임을 입력해주세요");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/user/nickCheck",
        { nickname: nickname }
      );

      if (response.data.result === true) {
        // 닉네임이 중복되지 않는 경우
        console.log(nickname);
        setNicknameDBCheck(true);
      } else {
        // 중복된 닉네임이 있는 경우
        setNicknameDBCheck(false);
        console.log(nickname);
        window.alert("중복된 닉네임입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //아이디 입력시 유효성 검사
  const onChangeUsernameHandler = (value) => {
    if (!usernameCheck(username)) {
      setUsernameMsg("아이디 형식이 올바르지 않습니다.");
    } else {
      setUsernameMsg("올바른 형식의 아이디입니다.");
    }
    setUsername(value);
  };
  //비밀번호 입력시 유효성 검사
  const onChangePasswordHandler = (value) => {
    if (!passwordCheck(password)) {
      setPasswordMsg("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPasswordMsg("올바른 형식의 비밀번호입니다.");
    }
    setPassword(value);
  };

  //비밀번호 확인 유효성 검사
  const onChangePasswordAgainHandler = (value) => {
    if (password !== passwordAgain) {
      setPasswordAgainMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordAgainMsg("비밀번호가 일치합니다.");
    }
    setPasswordAgain(value);
  };

  //이메일 유효성 검사
  const onChangeEmailHandler = (value) => {
    if (!emailCheck(email)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailMsg("올바른 형식의 이메일입니다.");
    }
    setEmail(value);
  };

  //닉네임 유효성 검사
  const onChangeNicknameHandler = (value) => {
    if (!nicknameCheck(nickname)) {
      setNicknameMsg("3~8자 이내의 한글 닉네임을 입력해주세요");
    } else {
      setNicknameMsg("올바른 형식의 닉네임입니다.");
    }
    setNickname(value);
  };

  //연락처 유효성 검사
  const onChangePhoneHandler = (value) => {
    if (!phoneCheck(phone)) {
      setPhoneMsg("연락처 형식이 올바르지 않습니다.");
    } else {
      setPhoneMsg("올바른 형식의 연락처입니다.");
    }
    setPhone(value);
  };

  //생년월일 유효성 검사
  const onChangeuserBirthHandler = (value) => {
    if (!userBirthCheck(userBirth)) {
      setUserBirthMsg("생년월일 형식이 올바르지 않습니다.");
    } else {
      setUserBirthMsg("올바른 형식의 생년월일입니다.");
    }
    setUserBirth(value);
  };

  //회원가입 처리하기
  const SignUpHandler = () => {
    if (usernameDBCheck !== true || nicknameDBCheck !== true) {
      window.alert("중복 검사를 진행해주세요.");
      return;
    }
    // null값 체크
    if (
      username === "" ||
      password === "" ||
      passwordAgain === "" ||
      email === "" ||
      nickname === "" ||
      gender === "" ||
      phone === "" ||
      userBirth === ""
    ) {
      window.alert("모든 칸을 입력해주세요.");
      return;
    } else {
      const data = {
        username,
        password,
        passwordAgain,
        email,
        nickname,
        gender,
        phone,
        userBirth,
      };
      dispatch(signUpAPI(data));
    }
  };

  return (
    <>
      <div>
        <div>
          <StyledWord>
            <h1>회원 가입</h1>
            <hr />
            <br />
          </StyledWord>
          <Input
            type="text"
            name="username"
            label="아이디"
            placeholder="8~20자 이내의 영문(소문자)과 숫자로 된 아이디를 입력해주세요."
            onChange={(e) => onChangeUsernameHandler(e.target.value)}
          />
          <Button type="middle" onClick={idDueCheck}>
            중복확인
          </Button>
          <p>{usernameMsg}</p>
          {usernameDBCheck ? (
            <CheckMessage>중복된 아이디가 없습니다</CheckMessage>
          ) : null}
          <br />
          <Input
            type="password"
            name="password"
            label="비밀번호"
            placeholder="8~20자 이내로 특수문자(!, @, #, $, %, ^, &, *)를 반드시 1개 이상 포함하여 영문, 숫자로 된 비밀번호를 입력해주세요."
            onChange={(e) => onChangePasswordHandler(e.target.value)}
          />
          <p>{passwordMsg}</p>
          <br />
          <Input
            type="password"
            name="passwordAgain"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={(e) => onChangePasswordAgainHandler(e.target.value)}
          />
          <p>{passwordAgainMsg}</p>
          <br />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={(e) => onChangeEmailHandler(e.target.value)}
          />
          <p>{emailMsg}</p>
          <br />
          <Input
            type="text"
            name="nickname"
            label="닉네임"
            placeholder="3~8자 이내의 한글 닉네임을 입력해주세요"
            onChange={(e) => onChangeNicknameHandler(e.target.value)}
          />
          <Button type="middle" onClick={nickDueCheck}>
            중복확인
          </Button>
          <p>{nicknameMsg}</p>
          {nicknameDBCheck ? (
            <CheckMessage>중복된 닉네임이 없습니다</CheckMessage>
          ) : null}
          <br />
          <label htmlFor="gender">성별</label>
          <select
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            style={{ marginBottom: "20px" }}
          >
            <option value="">성별을 선택해주세요.</option>
            <option value="여">여</option>
            <option value="남">남</option>
            <option value="선택안함">선택안함</option>
          </select>
          <br />

          <Input
            type="text"
            name="userBirth"
            label="생년월일"
            placeholder="8자 숫자로(yyyyMMdd) 생년월일을 입력해주세요."
            onChange={(e) => onChangeuserBirthHandler(e.target.value)}
          />
          <p>{userBirthMsg}</p>
          <br />
          <Input
            type="text"
            name="phone"
            label="연락처"
            placeholder="11자 숫자로('-'빼고) 연락처를 입력해주세요."
            onChange={(e) => onChangePhoneHandler(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <p>{phoneMsg}</p>
          <br />
        </div>
      </div>
      <div>
        <Button type="reset" color="gray">
          취소하기
        </Button>
        <Button onClick={SignUpHandler}>가입하기</Button>
      </div>
    </>
  );
};

export default SignUp;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const CheckMessage = styled.p`
  text-align: left;
  margin-left: 260px;
  color: blue;
`;
