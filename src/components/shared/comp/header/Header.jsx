import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../../asset/images/logo.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.style"

const Header = () => {
  const navigate = useNavigate();
  const is_login = useSelector((state) => state.user.is_login);
  const nickname = sessionStorage.getItem("nickname");
  const token = sessionStorage.getItem("token");

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
  const goToMyPage = () => {
    // navigate("/user/mypage");
  };

  const logoutHandler = () => {
    // 스토리지에서 토큰 및 사용자 정보 제거
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("loginedUser");
    sessionStorage.clear();
    window.alert("로그아웃 되었습니다.");
    // 로그아웃 후 '/'로 리다이렉트
    navigate("/", { replace: true });
  };

  return (
    <React.Fragment>
      <S.Container>
        <S.LogoWrapper onClick={goToHome}>
          <Logo style={{ width: "76px", height: "76px" }} />
          <p>
            책향기
            <br />
            도서관
          </p>
        </S.LogoWrapper>

        <S.MenuWrapper $isLogin={is_login}>
          <p className="header_menu__search" onClick={goToSearch}>자료 검색</p>
          <p className="header_menu__news" onClick={goToNews}>소식 · 참여</p>
          <p className="header_menu__mypage" onClick={goToMyPage}>마이페이지</p>
        </S.MenuWrapper>

        {token ? (
          <S.UserWrapper>
            <p className="header_user__nickname"><span>{nickname}</span> 님</p>
            <p className="header_user__logout">
              | <span onClick={logoutHandler}>로그아웃</span>
            </p>
          </S.UserWrapper>
        ) : (
          <S.UserWrapper>
            <p onClick={goToSignIn}>로그인</p>
            <p style={{ margin: "0 4px" }}>|</p>
            <p onClick={goToSignUp}>회원가입</p>
          </S.UserWrapper>
        )}
      </S.Container>
    </React.Fragment>
  );
};


export default Header;
