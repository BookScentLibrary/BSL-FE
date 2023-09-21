import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../asset/images/logo-stroke.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <Wrapper>
          <InfoBox>
            <Logo />
            <div>
              <TextBox>
                <p className="title">책향기 도서관</p>
                <p className="content">
                  서울 특별시 강남구 테헤란로 14길 6 남도빌딩
                </p>
                <p className="title">전화번호</p>
                <p className="content">010-9519-1315</p>
                <p className="title">이용시간</p>
                <p className="content">
                  월~금 09:00 ~ 17:50 / 주말 및 공휴일 휴관
                </p>
              </TextBox>
            </div>
          </InfoBox>
          <TeamBox>
            <Button color="blue">Notion</Button>
            <Button color="red">Docs</Button>
            <p>
              <span class="roboto">※</span>
              <span className="title"> 팀명 </span>삼부삼조
            </p>
            <p>　(👑서유나 | 김민경 | 김윤주 | 박정원 | 서지수 | 송정은 )</p>
          </TeamBox>
        </Wrapper>
      </FooterContainer>
    </React.Fragment>
  );
};

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 1200px;
  background-color: #a1e092;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 68px 64px;
  height: 144px;
`;

export const InfoBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const TeamBox = styled.div`
  width: 562px;
  height: 88px;
  padding: 28px;
  border-radius: 30px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;

  color: #585858;
  & > p > .roboto {
    font-family: "Roboto";
    font-weight: 700;
  }

  & > p > .title {
    font-weight: 800;
  }
`;

export const TextBox = styled.div`
  margin: 0 24px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 8px;
  width: 388px;
  color: #ffffff;

  & > .title {
    font-weight: 700;
    font-size: 16px;
  }

  & > .content {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  margin-right: 16px;
  padding: 10px 18px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) =>
    props.color === "blue"
      ? "#86A8FE"
      : props.color === "red"
      ? "#FF9393"
      : "#A1E092"};
`;

export default Footer;
