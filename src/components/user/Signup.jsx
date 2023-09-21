import React, { useState } from "react";

const Signup = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "") {
      alert("INPUT USER ID.");
    } else if (user.password === "") {
      alert("INPUT USER PW.");
    } else if (user.password !== user.password_again) {
      alert("Please check your password again.");
    } else if (user.nickname === "") {
      alert("INPUT USER NICKNAME.");
    } else if (user.gender === "") {
      alert("SELECT USER GENDER.");
    } else if (user.phone === "") {
      alert("INPUT USER PHONE.");
    } else {
      // 폼 데이터가 유효한 경우, 여기에서 데이터를 서버로 전송하거나 다른 작업을 수행할 수 있습니다.
      console.log("Form data is valid:", user);
      // 실제 데이터 제출 또는 다른 동작 수행 코드 추가
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="INPUT USER ID."
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="INPUT USER PW."
          value={user.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password_again"
          placeholder="INPUT USER PW AGAIN."
          value={user.password_again}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="INPUT USER EMAIL."
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nickname"
          placeholder="INPUT USER NICKNAME."
          value={user.nickname}
          onChange={handleInputChange}
        />
        <select name="gender" value={user.gender} onChange={handleInputChange}>
          <option value="">SELECT USER GENDER.</option>
          <option value="여">Man</option>
          <option value="남">Woman</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="INPUT USER PHONE."
          value={user.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="userBirth"
          placeholder="INPUT USER BIRTH."
          value={user.userBirth}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="userAge"
          placeholder="INPUT USER AGE."
          value={user.userAge}
          onChange={handleInputChange}
        />
        <input type="submit" value="signup" />
        <input type="reset" value="reset" />
      </form>
    </div>
  );
};

export default Signup;
