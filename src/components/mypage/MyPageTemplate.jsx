import React from "react";
import styled from "styled-components";
import Button from "../shared/elements/Button";
import { ReactComponent as DefaultProfile } from "../../asset/images/default-profile.svg";
import Flex from "../shared/elements/Flex";
import CountInfoBlock from "./element/CountInfoBlock";
import MyPageMain from "./main/MyPageMain";
import MyPageBookCart from "./MyPageBookCart";
import { useLocation, useNavigate } from "react-router-dom";
import MyPageHistory from "./MyPageHistory";
import NotFunc from "./NotFunc";
import MyPageReview from "./MyPageReview";
import MyPageRentNow from "./MyPageRentNow";
import Permit from "../shared/comp/Permit";

const MyPageTemplate = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [pageIdx, setPageIdx] = React.useState(0);

  const username = sessionStorage.getItem("username");
  const nickname = sessionStorage.getItem("nickname");

  const pages = {
    0: <MyPageMain />,
    1: <MyPageBookCart />,
    2: <MyPageRentNow />,
    3: <MyPageHistory />,
    4: <MyPageReview />,
    5: (
      <NotFunc
        title="희망 도서 내역"
        content="아직 작성한 희망도서가 없습니다."
      />
    ),
  };

  const goToMain = () => {
    setPageIdx(0);
    navigate("/user/mypage");
  };

  const goToBookCart = () => {
    setPageIdx(1);
    navigate("/user/mypage/cart");
  };

  const goToRentNow = () => {
    setPageIdx(2);
    navigate("/user/mypage/rent");
  };

  const goToRentHistory = () => {
    setPageIdx(3);
    navigate("/user/mypage/history");
  };

  const goToReview = () => {
    setPageIdx(4);
    navigate("/user/mypage/review");
  };

  const goToHope = () => {
    setPageIdx(5);
    navigate("/user/mypage/hope");
  };

  const funcArr = [
    goToMain,
    goToBookCart,
    goToRentNow,
    goToRentHistory,
    goToReview,
    goToHope,
  ];
  const menuArr = [
    "홈",
    "책바구니",
    "대출중인 도서",
    "대출 내역 조회",
    "리뷰 내역",
    "희망 도서 내역",
  ];

  React.useEffect(() => {
    if (pathname === "/user/mypage") {
      setPageIdx(0);
    } else if (pathname.split("/")[3] === "cart") {
      setPageIdx(1);
    } else if (pathname.split("/")[3] === "rent") {
      setPageIdx(2);
    } else if (pathname.split("/")[3] === "history") {
      setPageIdx(3);
    } else if (pathname.split("/")[3] === "review") {
      setPageIdx(4);
    } else if (pathname.split("/")[3] === "hope") {
      setPageIdx(5);
    }
  }, [pathname]);

  return (
    <Permit>
      <UserSection>
        <Flex center gap="48px" margin="0 0 80px 0">
          <DefaultProfile width="100px" height="100px" />
          <TitleArea>
            <p className="mypage_user__username">@{username}</p>
            <p className="mypage_user__title" onClick={goToMain}>
              <span className="mypage_user__nickname">{nickname}</span>의
              마이페이지
            </p>
            <Flex gap="16px">
              <Button type="small" onClick={goToBookCart}>
                책바구니 확인하기
              </Button>
              <Button type="small" color="gray" onClick={goToRentHistory}>
                대출내역 확인하기
              </Button>
            </Flex>
          </TitleArea>
        </Flex>
        <CountInfoBlock setPageIdx={setPageIdx} />
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
      {pages[pageIdx]}
    </Permit>
  );
};

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

  transition: 0.2s;
  &:hover {
    color: ${({ $on, theme }) =>
      $on ? theme.colors.darkgreen10 : theme.colors.darkgray};
  }
`;

const TitleArea = styled.div`
  & > .mypage_user__username {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  & > .mypage_user__title {
    display: flex;
    align-items: center;
    margin: 4px 0 16px 0;
    font-size: 32px;
    cursor: pointer;
  }

  & > p > .mypage_user__nickname {
    font-weight: 800;
  }
`;

export default MyPageTemplate;
