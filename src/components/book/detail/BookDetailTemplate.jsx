import React from "react";
import Button from "../../shared/elements/Button";
import { useLocation, useNavigate } from "react-router-dom";
import BookInfoData from "./BookInfoData";
import LibraryInfo from "./BookLibraryInfo";
import RentData from "./BookRentData";
import * as S from "./BookDetailTemplate.style";
import BookReviewList from "./BookReviewList";
import { useDispatch, useSelector } from "react-redux";
import { getBookAPI, getRatingDataAPI, getReaderDataAPI, getSelectedBookReviewAPI } from "../../../core/redux/bookSlice";

const BookDetailTemplate = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const bookNo = location.pathname.split("/")[3];

  const goToSearch = () => {
    navigate("/book");
    props.setPage(0);
  };

  const goToReview = () => {
    navigate("/reviewList");
  };
  const book = useSelector((state) => state.book.book);
  const reviewList = useSelector((state) => state.book.review);

  React.useEffect(() => {
    dispatch(getBookAPI(bookNo));
    dispatch(getReaderDataAPI(bookNo));
    dispatch(getRatingDataAPI(bookNo));
    dispatch(getSelectedBookReviewAPI(bookNo));
  }, []);

  return (
    <S.Container>
      <S.Title>소장자료 검색</S.Title>
      <S.Route>
        <p>자료 검색 {">"} 소장 자료 검색</p>
        <Button type="small" width="48px" onClick={goToSearch}>
          목록
        </Button>
      </S.Route>
      <S.BookInfo>
        <S.BookImg src={book.bookImageURL} />
        <BookInfoData book={book}/>
        <S.Buttons>
          <div>
            <Button type="middle" color="gray">
              관심 도서 담기
            </Button>
          </div>
          <div>
            <Button type="middle" color="green">
              책 바구니 담기
            </Button>
          </div>
        </S.Buttons>
      </S.BookInfo>
      <S.LibraryInfoContainer>
        <S.SubTitle>소장정보</S.SubTitle>
        <LibraryInfo book={book} />
      </S.LibraryInfoContainer>
      <S.Description>
        <S.SubTitle>상세정보</S.SubTitle>
        <p>
          {book.description}
        </p>
      </S.Description>
      <RentData bookNo={book.bookNo} />
      <div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            height: "28px",
            margin: "36px 0 8px 0",
          }}
        >
          <S.SubTitle margin="none">독자 리뷰</S.SubTitle>
          <Button type="small" width="50px" onClick={goToReview}>
            더보기
          </Button>
        </div>
        {reviewList &&
          reviewList.map((review, i) => {
            return <BookReviewList key={i} review={review}/>;
          })}
      </div>
    </S.Container>
  );
};

export default BookDetailTemplate;
