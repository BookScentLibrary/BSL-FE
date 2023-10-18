import React from "react";
import Flex from "../../shared/elements/Flex";
import MoreButton from "../../shared/elements/MoreButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCountAPI, getRentNowAPI } from "../../../core/redux/mypageSlice";
import { useNavigate } from "react-router-dom";

const CountInfoBlock = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state) => state.mypage.count);
  const rentnow = useSelector((state) => state.mypage.rentnow);

  const goToRentHistory = () => {
    props.setPageIdx(2);
    navigate("/user/mypage/history");
  };

  const goToReview = () => {
    props.setPageIdx(3);
    navigate("/user/mypage/review");
  };

  const goToRentNow = () => {
    props.setPageIdx(2);
    navigate("/user/mypage/rent");
  };

  React.useEffect(() => {
    dispatch(getCountAPI());
    dispatch(getRentNowAPI());
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
          <MoreButton onClick={goToRentHistory} />
        </div>
      </Container>
      <Container color="blue">
        <p className="mypage_stat__title">내가 작성한 리뷰</p>
        <p className="mypage_stat__count">
          {count?.reviewCnt}
          <span className="normal"> 건</span>
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <MoreButton onClick={goToReview} />
        </div>
      </Container>
      <Container color="red">
        <p className="mypage_stat__title">내가 대출중인 도서</p>
        <p className="mypage_stat__count">
          {rentnow ? rentnow.length : 0}
          <span className="normal"> 회</span>
        </p>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <MoreButton onClick={goToRentNow} />
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

  color: ${({ theme, color }) =>
    color === "green"
      ? theme.colors.darkgreen5
      : color === "blue"
      ? theme.colors.darkblue5
      : color === "red"
      ? theme.colors.darkred5
      : theme.colors.primary};

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

  transition: 0.2s;
  &:hover {
    border: ${({ theme, color }) =>
      color === "green"
        ? `2px solid ${theme.colors.darkgreen20}`
        : color === "blue"
        ? `2px solid ${theme.colors.darkblue20}`
        : color === "red"
        ? `2px solid ${theme.colors.darkred20}`
        : `2px solid ${theme.colors.primary}`};
  }

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
