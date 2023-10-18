import React from "react";
import styled from "styled-components";
import Book from "./element/Book";
import { useDispatch, useSelector } from "react-redux";
import Button from "../shared/elements/Button";
import {
  deleteAllBookCartAPI,
  getBookCartAPI,
  getRentNowAPI,
  rentBookAPI,
} from "../../core/redux/mypageSlice";

const MyPageBookCart = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.mypage.bookcart);
  const rentNow = useSelector((state) => state.mypage.rentnow);

  const [checkedList, setCheckedList] = React.useState([]);

  const messages = {
    0: "도서 대출은 3권까지 가능합니다.",
    1:
      "도서 대출은 3권까지 가능합니다.\n 현재 " +
      rentNow.length +
      "권의 도서를 대출중입니다.",
    2: "대출할 도서를 선택해주세요!",
    3: "대출이 완료되었습니다.",
  };

  const cleanCart = () => {
    dispatch(deleteAllBookCartAPI());
  };
  const bookRent = () => {
    if (checkedList.length > 3) {
      window.alert(messages[0]);
      return;
    } else if (3 - rentNow.length < checkedList.length) {
      window.alert(messages[1]);
    } else if (checkedList.length === 0) {
      window.alert(messages[2]);
      return;
    } else {
      dispatch(rentBookAPI(checkedList)).then(window.alert(messages[3]));
    }
  };

  const addRentBookList = (bookNo, cancel) => {
    setCheckedList((prev) => {
      if (cancel === "cancel") {
        return prev.filter((item) => item !== bookNo);
      } else if (!prev.includes(bookNo)) {
        return [...prev, bookNo];
      } else {
        return [...prev];
      }
    });
    return;
  };

  React.useEffect(() => {
    dispatch(getBookCartAPI());
    dispatch(getRentNowAPI());
  }, []);

  return (
    <Container>
      <Title>책바구니</Title>
      {booklist && booklist.length > 0 ? (
        booklist.map((cur, i) => {
          return (
            <Book
              key={i}
              book={cur.book}
              bookStatus={cur.book.bookStatus}
              rentedDate={cur.rentedDate}
              returnedDate={cur.returnedDate}
              addRentBookList={addRentBookList}
            />
          );
        })
      ) : (
        <NotData>바구니에 담긴 책이 없습니다.</NotData>
      )}
      <div className="bookcart_buttons">
        <Button color="gray" width="180px" onClick={cleanCart}>
          책바구니 비우기
        </Button>
        <Button onClick={bookRent}>도서 대출하기</Button>
      </div>
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
  margin-bottom: 60px;
`;

const NotData = styled.div`
  width: fit-content;
  margin: 120px auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default MyPageBookCart;
