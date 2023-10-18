import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpAPI } from "../../core/redux/userSlice";
import axios from "axios";
import * as S from "./Signup.style";
import Input from "../shared/elements/Input";
import Button from "../shared/elements/Button";
import {
  usernameCheck,
  passwordCheck,
  emailCheck,
  nicknameCheck,
  phoneCheck,
  userBirthCheck,
} from "../shared/RegEx";

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

  const [usernameMsg, setUsernameMsg] = useState("　"); //유효성 검사 아이디 메세지
  const [passwordMsg, setPasswordMsg] = useState("　"); //유효성 검사 비밀번호 메세지
  const [passwordAgainMsg, setPasswordAgainMsg] = useState("　"); //유효성 검사 비밀빈호 확인 메세지
  const [emailMsg, setEmailMsg] = useState("　"); //유효성 검사 이메일 메세지
  const [nicknameMsg, setNicknameMsg] = useState("　"); //유효성 검사 닉네임 메세지
  const [phoneMsg, setPhoneMsg] = useState("　"); //유효성 검사 연락처 메세지
  const [userBirthMsg, setUserBirthMsg] = useState("　"); //유효성 검사 생년월일 메세지

  const [usernameDBCheck, setUsernameDBCheck] = useState(false); // 아이디 중복 검사 결과
  const [nicknameDBCheck, setNicknameDBCheck] = useState(false); // 닉네임 중복 검사 결과

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "340px",
    }),
    option: (provided) => ({
      ...provided,
      textAlign: "right", // 옵션 텍스트를 오른쪽 정렬
    }),
  };

  const genderOptions = [
    { value: "", label: "선택: 성별" },
    { value: "여", label: "여" },
    { value: "남", label: "남" },
    { value: "선택안함", label: "선택안함" },
  ];

  //아이디 중복 검사
  const idDueCheck = async () => {
    if (username === "") {
      window.alert("아이디를 입력해주세요");
      return;
    }
    if (!usernameCheck(username)) {
      window.alert("아이디 형식이 올바르지 않습니다.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/idCheck", {
        username: username,
      });

      if (response.data.result === true) {
        // 아이디가 중복되지 않는 경우
        setUsernameDBCheck(true);
        window.alert("중복된 아이디가 없습니다.");
      } else {
        // 중복된 아이디가 있는 경우
        setUsernameDBCheck(false);
        window.alert("중복된 아이디입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //닉네임 중복 검사
  const nickDueCheck = async () => {
    if (nickname === "") {
      window.alert("닉네임을 입력해주세요");
      return;
    }
    if (!nicknameCheck(nickname)) {
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
        setNicknameDBCheck(true);
        window.alert("중복된 닉네임이 없습니다.");
      } else {
        // 중복된 닉네임이 있는 경우
        setNicknameDBCheck(false);
        window.alert("중복된 닉네임입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //아이디 입력시 유효성 검사
  const onChangeUsernameHandler = (value) => {
    if (!usernameCheck(value)) {
      setUsernameMsg("아이디 형식이 올바르지 않습니다.");
    } else {
      setUsernameMsg("　　");
    }
    setUsername(value);
  };
  //비밀번호 입력시 유효성 검사
  const onChangePasswordHandler = (value) => {
    setPassword(value);
    if (!passwordCheck(value)) {
      setPasswordMsg("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPasswordMsg("　　");
    }
    if (passwordAgain) {
      // passwordAgain이 존재할 때에만 실행
      if (value !== passwordAgain) {
        setPasswordAgainMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordAgainMsg("　　");
      }
    }
  };

  //비밀번호 확인 유효성 검사
  const onChangePasswordAgainHandler = (value) => {
    setPasswordAgain(value);
    if (value !== password) {
      setPasswordAgainMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordAgainMsg("　　");
    }
    if (password) {
      if (!passwordCheck(value)) {
        setPasswordMsg("비밀번호 형식이 올바르지 않습니다.");
      } else {
        setPasswordMsg("　　");
      }
    }
  };

  //이메일 유효성 검사
  const onChangeEmailHandler = (value) => {
    if (!emailCheck(value)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailMsg("　　");
    }
    setEmail(value);
  };

  //닉네임 유효성 검사
  const onChangeNicknameHandler = (value) => {
    if (!nicknameCheck(value)) {
      setNicknameMsg("3~8자 이내의 한글 닉네임을 입력해주세요");
    } else {
      setNicknameMsg("　　");
    }
    setNickname(value);
  };

  //연락처 유효성 검사
  const onChangePhoneHandler = (value) => {
    if (!phoneCheck(value)) {
      setPhoneMsg("연락처 형식이 올바르지 않습니다.");
    } else {
      setPhoneMsg("　　");
    }
    setPhone(value);
  };

  //생년월일 유효성 검사
  const onChangeuserBirthHandler = (value) => {
    if (!userBirthCheck(value)) {
      setUserBirthMsg("생년월일 형식이 올바르지 않습니다.");
    } else {
      setUserBirthMsg("　　");
    }
    setUserBirth(value);
  };

  //회원가입 처리하기
  const SignUpHandler = () => {
    if (usernameDBCheck !== true && nicknameDBCheck !== true) {
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
    } else if (
      usernameMsg === "　　" &&
      passwordMsg === "　　" &&
      passwordAgainMsg === "　　" &&
      emailMsg === "　　" &&
      nicknameMsg === "　　" &&
      phoneMsg === "　　" &&
      userBirthMsg === "　　"
    ) {
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
    } else {
      window.alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
      return;
    }
  };

  return (
    <>
      <div>
        <div>
          <S.StyledWord>
            <h1>회원 가입</h1>
            <hr />
            <br />
          </S.StyledWord>
          <S.Container>
            <Input
              type="text"
              name="username"
              width="500px"
              style={{ marginRight: "10px" }}
              label="아이디"
              placeholder="8~20자 이내의 영문(소문자)과 숫자로 된 아이디를 입력해주세요."
              onChange={(e) => onChangeUsernameHandler(e.target.value)}
            />
            <S.ButtonWrapper>
              <Button type="middle" onClick={idDueCheck}>
                중복확인
              </Button>
            </S.ButtonWrapper>
          </S.Container>
          <p
            style={{
              marginTop: "10px",
              marginLeft: "220px",
            }}
          >
            {usernameMsg}
          </p>
          <br />
          <S.Container>
            <Input
              password
              name="password"
              width="670px"
              label="비밀번호"
              placeholder="8~20자 이내로 특수문자(!, @, #, $, %, ^, &, *)를 반드시 1개 이상 포함하여 영문, 숫자로 된 비밀번호를 입력해주세요."
              onChange={(e) => onChangePasswordHandler(e.target.value)}
            />
          </S.Container>
          <p
            style={{
              marginTop: "10px",
              marginLeft: "220px",
            }}
          >
            {passwordMsg}
          </p>
          <br />
          <S.Container>
            <Input
              password
              name="passwordAgain"
              width="670px"
              label="비밀번호확인"
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={(e) => onChangePasswordAgainHandler(e.target.value)}
            />
          </S.Container>
          <p
            style={{
              marginTop: "10px",
              marginLeft: "220px",
            }}
          >
            {passwordAgainMsg}
          </p>
          <br />
        </div>
        <S.Container>
          <Input
            type="email"
            name="email"
            width="670px"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={(e) => onChangeEmailHandler(e.target.value)}
          />
        </S.Container>
        <p
          style={{
            marginTop: "10px",
            marginLeft: "220px",
          }}
        >
          {emailMsg}
        </p>
        <br />
        <S.Container>
          <Input
            type="text"
            name="nickname"
            width="500px"
            label="닉네임"
            placeholder="3~8자 이내의 한글 닉네임을 입력해주세요"
            onChange={(e) => onChangeNicknameHandler(e.target.value)}
          />
          <S.ButtonWrapper>
            <Button type="middle" onClick={nickDueCheck}>
              중복확인
            </Button>
          </S.ButtonWrapper>
        </S.Container>
        <p
          style={{
            marginTop: "10px",
            marginLeft: "220px",
          }}
        >
          {nicknameMsg}
        </p>
        <br />
        <S.Container>
          <S.SelectWrapper>
            <S.SelectLabel htmlFor="gender">성별</S.SelectLabel>
            <S.SelectInput
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">성별을 선택해주세요.</option>
              <option value="여">여</option>
              <option value="남">남</option>
              <option value="선택안함">선택안함</option>
            </S.SelectInput>
            <S.SelectArrow>∨</S.SelectArrow>
          </S.SelectWrapper>
          <p>　　</p>
          <br />

          <Input
            type="text"
            name="userBirth"
            width="300px"
            label="생년월일"
            placeholder="8자 숫자로(yyyyMMdd) 생년월일을 입력해주세요."
            onChange={(e) => onChangeuserBirthHandler(e.target.value)}
          />
        </S.Container>
        <p
          style={{
            marginTop: "10px",
            marginLeft: "590px",
          }}
        >
          {userBirthMsg}
        </p>
        <br />
        <S.Container>
          <Input
            type="text"
            name="phone"
            width="670px"
            label="연락처"
            placeholder="11자 숫자로('-'빼고) 연락처를 입력해주세요."
            onChange={(e) => onChangePhoneHandler(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
        </S.Container>
        <p
          style={{
            marginTop: "10px",
            marginLeft: "220px",
          }}
        >
          {phoneMsg}
        </p>
        <br />
      </div>
      <S.Container>
        <Button type="reset" color="gray">
          취소하기
        </Button>
        <S.ButtonWrapper>
          <Button onClick={SignUpHandler}>가입하기</Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default SignUp;
