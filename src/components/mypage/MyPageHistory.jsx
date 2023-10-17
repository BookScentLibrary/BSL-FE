import React from "react";
import styled from "styled-components";
import Book from "./element/Book";
import { useDispatch, useSelector } from "react-redux";
import { getRentHistoryAllAPI } from "../../core/redux/mypageSlice";
import Button from "../shared/elements/Button";

const MyPageHistory = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.mypage.renthistory);

  React.useEffect(() => {
    dispatch(getRentHistoryAllAPI());
  }, []);

  return (
    <Container>
      <Title>대출 내역 조회</Title>
      {booklist && booklist.length > 0 ? (
        booklist.map((cur, i) => {
          return <Book key={i} book={cur.book} />;
        })
      ) : (
        <NotData>바구니에 담긴 책이 없습니다.</NotData>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 73px 120px 180px 120px;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > .bookcart_buttons {
    position: absolute;
    right: 120px;
    display: flex;
    gap: 24px;
    margin: 24px 0;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  margin-bottom: 16px;
`;

const NotData = styled.div`
  width: fit-content;
  margin: 120px auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default MyPageHistory;
