import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../../asset/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const isAuthenticated = !!token; // 토큰이 있으면 로그인 상태

  //로그아웃일때
  const outLog = () => {
    return (
      <>
        <span>마이페이지 | </span>
        <span onClick={logoutHandler}>로그아웃</span>
      </>
    );
  };
  //로그인일때
  const onLog = () => {
    return (
      <>
        <span onClick={goToSignIn}>로그인 | </span>
        <span onClick={goToSignUp}>회원가입</span>
      </>
    );
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToNews = () => {
    navigate("/news");
  };
  const goToSignUp = () => {
    navigate("/signUp");
  };
  const goToSignIn = () => {
    navigate("/signIn");
  };
  const goToSearch = () => {
    // navigate("/book/search");
    navigate("/book");
  };

  const logoutHandler = () => {
    // 스토리지에서 토큰 및 사용자 정보 제거
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("loginedUser");
    sessionStorage.clear();
    window.alert("로그아웃 되었습니다.");
    // 로그아웃 후 '/'로 리다이렉트
    navigate("/");
  };

  return (
    <React.Fragment>
      <Container>
        <LogoWrapper onClick={goToHome}>
          <Logo style={{ width: "76px", height: "76px" }} />
          <p>
            책향기
            <br />
            도서관
          </p>
        </LogoWrapper>

        <MenuWrapper>
          <p onClick={goToSearch}>자료 검색</p>
          <p onClick={goToNews}>소식 · 참여</p>
          {/* <p>마이페이지</p> */}
        </MenuWrapper>

        <UserWrapper>{isAuthenticated ? outLog() : onLog()}</UserWrapper>
      </Container>
    </React.Fragment>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1232px;
  height: 98px;
  font-size: 16px;
  font-weight: 600;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  cursor: pointer;

  & > p {
    letter-spacing: 4px;
    font-weight: 800;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  width: 544px;
  justify-content: center;
  & > p {
    cursor: pointer;
    width: fit-content;
    margin: 0 56px;
  }
`;

const UserWrapper = styled.div`
  cursor: pointer;
  width: 200px;
  text-align: right;
`;

export default Header;
