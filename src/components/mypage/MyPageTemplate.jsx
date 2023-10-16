import React from "react";
import styled from "styled-components";
import Button from "../shared/elements/Button";
import { ReactComponent as DefaultProfile } from "../../asset/images/default-profile.svg";
import MoreButton from "../shared/elements/MoreButton";
import Flex from "../shared/elements/Flex";
import RentNow from "./RentNow";
import CountInfoBlock from "./element/CountInfoBlock";
import RentStatus from "./RentStatus";
import RentHistory from "./RentHistory";
import MyReview from "./MyReview";

const user = {
  username: "river123",
  nickname: "유나룽야",
  rent: 128,
  review: 124,
  program: 123,
};

const MyPageTemplate = () => {
  const [pageIdx, setPageIdx] = React.useState(0);

  const goToMain = () => {
    setPageIdx(0);
  };

  const goToRentHistory = () => {
    setPageIdx(1);
  };

  const goToProgram = () => {
    setPageIdx(2);
  };

  const goToReview = () => {
    setPageIdx(3);
  };

  const goToLike = () => {
    setPageIdx(4);
  };

  const goToHope = () => {
    setPageIdx(5);
  };
  const funcArr = [
    goToMain,
    goToRentHistory,
    goToProgram,
    goToReview,
    goToLike,
    goToHope,
  ];
  const menuArr = [
    "홈",
    "대출 도서 조회",
    "프로그램 참여 내역",
    "리뷰 내역",
    "관심 도서",
    "희망 도서 내역",
  ];
  return (
    <Container>
      <UserSection>
        <Flex center gap="48px" margin="0 0 80px 0">
          <DefaultProfile width="100px" height="100px" />
          <TitleArea>
            <p className="mypage_user__username">@{user.username}</p>
            <p className="mypage_user__title">
              <span className="mypage_user__nickname">{user.nickname}</span>의
              마이페이지
            </p>
            <Flex gap="16px">
              <Button type="small">책바구니 확인하기</Button>
              <Button type="small" color="gray">
                대출내역 확인하기
              </Button>
            </Flex>
          </TitleArea>
        </Flex>
        <CountInfoBlock user={user} />
      </UserSection>
      <MenuSection idx={pageIdx}>
        {menuArr &&
          menuArr.map((cur, i) => {
            if (pageIdx === i) {
              return (
                <Option key={i} $on onClick={funcArr[i]}>
                  {menuArr[i]}
                </Option>
              );
            } else {
              return (
                <Option key={i} onClick={funcArr[i]}>
                  {menuArr[i]}
                </Option>
              );
            }
          })}
      </MenuSection>
      <Flex>
        <RentStatus />
        <RentNow />
      </Flex>
      <RentHistory />
      <Flex>
        <AdSection></AdSection>
        <MyReview />
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const UserSection = styled.div`
  box-sizing: border-box;
  padding: 73px 97px 39px 97px;
  width: 100%;
  height: 492px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
`;

const MenuSection = styled.div`
  box-sizing: border-box;
  padding: 0 100px;
  margin: 24px 0;

  display: flex;
  gap: 40px;
  align-items: center;

  width: 100%;
  height: 78px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
`;

const Option = styled.p`
  padding: 2px;
  cursor: pointer;
  color: ${({ $on, theme }) => ($on ? theme.colors.primary : "#000")};
  border-bottom: ${({ $on, theme }) =>
    $on ? `2px solid ${theme.colors.primary}` : ""};
`;

const AdSection = styled.div`
  width: 396px;
  height: 540px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
`;

const TitleArea = styled.div`
  & > .mypage_user__username {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  & > .mypage_user__title {
    margin: 4px 0 16px 0;
    font-size: 32px;
  }

  & > p > .mypage_user__nickname {
    font-weight: 800;
  }
`;

export default MyPageTemplate;
