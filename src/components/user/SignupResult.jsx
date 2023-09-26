import React from "react";
import { useSelector } from "react-redux";
import Signup from "./Signup";

const SignupResult = () => {
  const { signupFail, signupSuccess } = useSelector((state) => state.user);

  return (
    <div>
      {signupSuccess && <p>회원가입에 성공하였습니다. 로그인하세요. {Login}</p>}
      {signupFail && (
        <p>회원가입에 실패하였습니다. 다시 시도해주세요. {Signup}</p>
      )}
    </div>
  );
};

export default SignupResult;
