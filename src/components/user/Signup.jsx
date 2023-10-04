import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { signUpAPI } from "../../core/redux/userSlice";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const nicknameRef = useRef();
  const phoneRef = useRef();
  const userBirthRef = useRef();

  const [isSuccess, setIsSuccess] = useState(false); // 회원가입 성공 여부 상태

  const [requestResult, setRequestResult] = useState("");

  const [usernameDBCheck, setUsernameDBCheck] = useState(false);
  const [nicknameDBCheck, setNicknameDBCheck] = useState(false);

  const genderList = [
    {
      value: "여",
      label: "여",
    },
    {
      value: "남",
      label: "남",
    },
    {
      value: "선택안함",
      label: "선택안함",
    },
  ];

  const usernameCheck = async () => {
    const username = usernameRef.current.value;
    const usernameRegex = /^[a-zA-Z0-9]{8,20}$/;
    if (username === "") {
      window.alert("아이디를 입력해주세요");
      return;
    }
    if (!usernameRegex.test(username)) {
      window.alert(
        "아이디는 영문(대소문자)과 숫자로 8자에서 20자 사이여야 합니다."
      );
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/idCheck", {
        username: username,
      });

      if (response.data.result === true) {
        // 아이디가 중복되지 않는 경우
        setUsernameDBCheck(true);
      } else {
        // 중복된 아이디가 있는 경우
        setUsernameDBCheck(false);
        window.alert("중복된 아이디가 있습니다. 수정해주세요");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const nicknameCheck = async () => {
    const nickname = nicknameRef.current.value;
    const nicknameRegex = /^[가-힣]{3,8}$/;
    if (nickname === "") {
      window.alert("닉네임을 입력해주세요");
      return;
    }
    if (!nicknameRegex.test(nickname)) {
      window.alert("닉네임은 한글 3자에서 8자 사이여야 합니다.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/user/nickCheck",
        {
          nickname: nickname,
        }
      );

      if (response.data.result === true) {
        // 아이디가 중복되지 않는 경우
        setNicknameDBCheck(true);
      } else {
        // 중복된 아이디가 있는 경우
        setNicknameDBCheck(false);
        window.alert("중복된 닉네임이 있습니다. 수정해주세요");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SignUpHandler = () => {
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
    axios
      .post("http://localhost:8080/user/signUp", data)
      .then((response) => {
        dispatch(signUpAPI(data));
        setIsSuccess(true);
        setRequestResult("Success!!");
      })
      .catch((error) => {
        setIsSuccess(false);
        setRequestResult("Failed!");
      });
  };
  // const SignUpHandler = async (e) => {
  //   //정규식
  //   const usernameRegex = /^[a-zA-Z0-9]{8,20}$/;
  //   const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/;
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   const nicknameRegex = /^[가-힣]{3,8}$/;
  //   const phoneRegex = /^[0-9]{11}$/;

  //   const username = usernameRef.current.value;
  //   const password = passwordRef.current.value;
  //   const passwordAgain = passwordAgainRef.current.value;
  //   const email = emailRef.current.value;
  //   const gender = genderRef.current.value;
  //   const nickname = nicknameRef.current.value;
  //   const phone = phoneRef.current.value;
  //   const userBirth = userBirthRef.current.value;

  //   // 유효성 검사
  //   if (
  //     username === "" ||
  //     password === "" ||
  //     passwordAgain === "" ||
  //     email === "" ||
  //     nickname === "" ||
  //     gender === "" ||
  //     phone === "" ||
  //     userBirth === ""
  //   ) {
  //     window.alert("모든 칸을 입력해주세요.");
  //     return;
  //   }
  //   if (!usernameRegex.test(username)) {
  //     window.alert(
  //       "아이디는 영문(대소문자)과 숫자로 8자에서 20자 사이여야 합니다."
  //     );
  //     return;
  //   }
  //   if (password !== passwordAgain) {
  //     window.alert("비밀번호 확인이 다릅니다.");
  //     return;
  //   }
  //   if (!passwordRegex.test(password)) {
  //     window.alert(
  //       "비밀번호는 영문, 숫자, 특수문자(!, @, #, $, %, ^, &, *)로 8자에서 20자 사이여야 합니다."
  //     );
  //     return;
  //   }
  //   if (!emailRegex.test(email)) {
  //     window.alert("이메일 형식이 올바르지 않습니다.");
  //     return;
  //   }
  //   if (!nicknameRegex.test(nickname)) {
  //     window.alert("닉네임은 한글 3자에서 8자 사이여야 합니다.");
  //     return;
  //   }
  //   if (!phoneRegex.test(phone)) {
  //     window.alert("연락처는 숫자('-'빼고 01011112222)만 입력 가능합니다.");
  //     return;
  //   }

  //   e.preventDefault();
  //   const data = {
  //     username: username,
  //     password: password,
  //     email: email,
  //     nickname: nickname,
  //     gender: gender,
  //     phone: phone,
  //     userBirth: userBirth,
  //   };
  //   console.log(data);

  //   dispatch(signUpAPI(data));
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/user/signUp",
  //       data
  //     );
  //     console.log(response.message);
  //     if (response.message) {
  //       // 회원가입 성공한 경우
  //       console.log("회원가입 성공:", response.data);
  //       setIsSuccess(true);
  //     } else {
  //       // 회원가입 실패한 경우
  //       const errorData = response.data;
  //       console.log("회원가입 실패:", errorData);
  //       setIsSuccess(false);
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       const errorData = error.response.data;
  //       console.log("API 오류:", errorData);
  //       alert(errorData.errormessage); // 오류 메시지를 알림창에 표시
  //     } else {
  //       console.error("알 수 없는 오류:", error);
  //     }
  //   }
  // };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
      <CardContent>
        <Box>
          <StyledWord>
            <h1>회원 가입</h1>
            <hr />
            <br />
          </StyledWord>
          <TextField
            type="text"
            name="username"
            label="아이디"
            helperText="아이디는 영문(대소문자)과 숫자로 8자에서 20자 사이여야 합니다."
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "610px", marginBottom: "20px" }}
          />
          <SubmitButton onClick={usernameCheck} style={{ width: "100px" }}>
            중복확인
          </SubmitButton>
          {usernameDBCheck ? (
            <CheckMessage>중복된 아이디가 없습니다</CheckMessage>
          ) : null}
          <br />

          <TextField
            fullWidth
            type="password"
            name="password"
            label="비밀번호"
            helperText="비밀번호는 영문, 숫자, 특수문자(!, @, #, $, %, ^, &, *)로 8자에서 20자 사이여야 합니다."
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />

          <TextField
            fullWidth
            type="password"
            name="passwordAgain"
            label="비밀번호 확인"
            helperText="비밀번호를 다시 입력해주세요."
            onChange={(e) => setPasswordAgain(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />

          <TextField
            fullWidth
            type="email"
            name="email"
            label="이메일"
            helperText="이메일을 입력해주세요."
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />

          <TextField
            type="text"
            name="nickname"
            label="닉네임"
            helperText="닉네임은 한글 3자에서 8자 사이여야 합니다."
            onChange={(e) => setNickname(e.target.value)}
            style={{ width: "610px", marginBottom: "20px" }}
          />
          <SubmitButton onClick={nicknameCheck} style={{ width: "100px" }}>
            중복확인
          </SubmitButton>
          {nicknameDBCheck ? (
            <CheckMessage>중복된 닉네임이 없습니다</CheckMessage>
          ) : null}
          <br />
          <TextField
            fullWidth
            name="gender"
            ref={genderRef}
            select
            label="성별"
            defaultValue="선택안함"
            helperText="성별을 선택해주세요."
            onChange={(e) => setGender(e.target.value)}
            style={{ marginBottom: "20px" }}
          >
            {genderList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />

          <TextField
            fullWidth
            type="date"
            name="userBirth"
            label="생년월일"
            helperText="생년월일을 입력해주세요"
            onChange={(e) => setUserBirth(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />

          <TextField
            fullWidth
            type="text"
            name="phone"
            label="연락처"
            helperText="연락처('-'빼고 01011112222)를 입력해주세요."
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <br />
        </Box>
      </CardContent>
      <CardActions>
        <ResetButton type="reset">취소하기</ResetButton>
        <SubmitButton
          onClick={() => SignUpHandler()}
          style={{ width: "250px" }}
        >
          가입하기
        </SubmitButton>
      </CardActions>
    </Card>
  );
};

export default SignUp;

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
  margin: 10px;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
`;

const CheckMessage = styled.p`
  text-align: left;
  margin-left: 260px;
  color: blue;
`;

const ResetButton = styled.button`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ccc;
  color: #fff;
  padding: 8px;
  margin: 3px;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
`;
