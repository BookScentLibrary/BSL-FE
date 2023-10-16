import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BasicTemp } from "../main/element/BookTemplate";
import { ppBooksAPI } from "../../core/redux/bookSlice";
import styled from "styled-components";

const BestSeller = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const popularBooks = useSelector((state) => state.book.ppBooks);

  const goToppBook = () => {
    navigate("/book/bestseller");
  };

  React.useEffect(() => {
    dispatch(ppBooksAPI({ pageNumber: 1, pageSize: 20 }));
  }, []); //p페이지가 랜더링 되는 순간 한번 실행

  return (
    <form>
      <html>
        <head>
          <title>인기 도서 페이지입니다</title>
        </head>
        <body>
          <h1>인기 도서</h1>
          <div className="book-list">
            {popularBooks &&
              popularBooks.map((book) => (
                <div key={book.bookNo} className="book-item">
                  <Image src={book.bookImageURL} />
                  <BasicTemp
                    bookname={book.bookname}
                    author={book.author}
                    publisher={book.publisher}
                    publicationYear={book.publicationYear}
                    callNum={book.callNum}
                    bookStatus={book.bookStatus}
                    rentCnt={book.rentCnt}
                    isbn={book.isbn}
                  />
                </div>
              ))}
          </div>
        </body>
      </html>
    </form>
  );
};

const Image = styled.div`
  width: 120px;
  height: 176px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray50};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;

export default BestSeller;
