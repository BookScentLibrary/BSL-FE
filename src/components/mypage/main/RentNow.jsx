import React from "react";
import MoreButton from "../../shared/elements/MoreButton";
import Flex from "../../shared/elements/Flex";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRentNowAPI } from "../../../core/redux/mypageSlice";
import { useNavigate } from "react-router-dom";

const RentNow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.mypage.rentnow);

  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);
  };

  const goToRentNow = () => {
    navigate('/user/mypage/rent');
  }

  React.useEffect(() => {
    dispatch(getRentNowAPI());
  }, []);

  return (
    <HarpSection>
      <Flex sb center>
        <p className="mypage_harp__title">대출 중인 도서</p>
        <MoreButton onClick={goToRentNow}/>
      </Flex>
      <div style={{ marginLeft: "32px" }}>
        <Books>
          {books.length > 0 ? (
            books.map((cur, i) => {
              return (
                <Book
                  key={cur.book.bookNo}
                  src={cur.book.bookImageURL}
                  onClick={() => {
                    goToDetail(cur.book.bookNo);
                  }}
                />
              );
            })
          ) : (
            <NotData>대출중인 도서가 없습니다.</NotData>
          )}
        </Books>
      </div>
    </HarpSection>
  );
};

const HarpSection = styled.div`
  box-sizing: border-box;
  padding: 28px 40px;
  width: 100%;
  height: 398px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > div > .mypage_harp__title {
    font-size: 24px;
  }
  & > .mypage_harp__title {
    font-size: 24px;
  }
`;

const Books = styled.div`
  display: flex;
  width: fit-content;
  margin: 56px auto;
`;

const Book = styled.div`
  cursor: pointer;
  margin: 0 0 0 -32px;
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 128px;
  height: 192px;
  border-radius: 8px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  transition: 0.2s;
  &:hover {
    margin: -8px 0 0 -20px;
    width: 140px;
    height: 200px;
    z-index: 100;
  }
  &:active {
    margin: 0;
  }
`;

const NotData = styled.div`
  margin: 80px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default RentNow;
