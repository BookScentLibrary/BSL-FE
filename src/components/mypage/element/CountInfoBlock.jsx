import React from "react";
import Flex from "../../shared/elements/Flex";
import MoreButton from "../../shared/elements/MoreButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCountAPI } from "../../../core/redux/mypageSlice";

const CountInfoBlock = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.mypage.count);

  React.useEffect(() => {
    dispatch(getCountAPI());
  }, []);

  return (
    <Flex gap="20px">
      <Container color="green">
        <p className="mypage_stat__title">내가 읽은 도서</p>
        <p className="mypage_stat__count">
          {count?.rentCnt}
          <span className="normal"> 권</span>
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <MoreButton />
        </div>
      </Container>
      <Container color="blue">
        <p className="mypage_stat__title">내가 작성한 리뷰</p>
        <p className="mypage_stat__count">
          {count?.reviewCnt}
          <span className="normal"> 건</span>
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <MoreButton />
        </div>
      </Container>
      <Container color="red">
        <p className="mypage_stat__title">내가 참여한 프로그램</p>
        <p className="mypage_stat__count">
          {count?.programCnt ? count.programCnt : 0}
          <span className="normal"> 회</span>
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <MoreButton />
        </div>
      </Container>
    </Flex>
  );
};
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  width: 212px;
  height: 200px;
  border-radius: 10px;

  border: ${({ theme, color }) =>
    color === "green"
      ? `2px solid ${theme.colors.darkgreen5}`
      : color === "blue"
      ? `2px solid ${theme.colors.darkblue5}`
      : color === "red"
      ? `2px solid ${theme.colors.darkred5}`
      : `2px solid ${theme.colors.primary}`};

  background-color: ${({ color }) =>
    color === "green"
      ? "#f0ffed"
      : color === "blue"
      ? "#f0f5ff"
      : color === "red"
      ? "#fff2f2"
      : "#f0ffed"};

  color: ${({ theme, color }) =>
    color === "green"
      ? theme.colors.darkgreen5
      : color === "blue"
      ? theme.colors.darkblue5
      : color === "red"
      ? theme.colors.darkred5
      : theme.colors.primary};
  & > .mypage_stat__count {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.darkgray};
    font-weight: 600;
    & > span {
      font-size: 16px;
    }
  }
`;

export default CountInfoBlock;
