import React from "react";
import Flex from "../../shared/elements/Flex";
import MoreButton from "../../shared/elements/MoreButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRentHistoryAPI } from "../../../core/redux/mypageSlice";
import { useNavigate } from "react-router-dom";

const RentHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.mypage.renthistory);

  const goToRentHistory = () => {
    navigate("/user/mypage/history");
  }

  React.useEffect(() => {
    dispatch(getRentHistoryAPI());
  }, []);

  return (
    <Container>
      <Flex sb center>
        <p className="mypage_harp__title">대출 내역</p>
        <MoreButton onClick={goToRentHistory}/>
      </Flex>
      <Books>
        {books.length > 0 ? (
          books.map((cur, i) => {
            return (
              <Book key={i}>
                <Image src={cur.book.bookImageURL} />
                <p className="title">{cur.book.bookname}</p>
                <p className="author">{cur.book.author.split(";")[0]}</p>
              </Book>
            );
          })
        ) : (
          <NotData>대출 내역이 없습니다.</NotData>
        )}
      </Books>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  padding: 28px 40px;
  margin: 24px 0;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > div > .mypage_harp__title {
    font-size: 24px;
  }
`;

const Books = styled.div`
  display: flex;
  width: fit-content;
  gap: 24px;
  margin: 32px auto;
`;

const Book = styled.div`
  cursor: pointer;

  width: 184px;
  height: fit-content;
  & > .title {
    margin: 14px 0 0 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > .author {
    margin: 8px 0 0 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Image = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 184px;
  height: 276px;
  border-radius: 8px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;

const NotData = styled.div`
  margin-top: 140px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default RentHistory;
