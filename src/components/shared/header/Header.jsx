import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../asset/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
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
          <p>자료 검색</p>
          <p>소식 · 참여</p>
          <p>마이페이지</p>
        </MenuWrapper>

        <UserWrapper>
          <p>로그인 | 회원가입</p>
        </UserWrapper>
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
export const UserWrapper = styled.div`
  cursor: pointer;
  width: 200px;
  text-align: right;
`;

export default Header;
