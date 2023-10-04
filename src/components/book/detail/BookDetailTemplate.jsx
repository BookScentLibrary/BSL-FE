import React from "react";
import Button from "../../shared/elements/Button";
import { useNavigate } from "react-router-dom";
import BookInfoData from "./BookInfoData";
import LibraryInfo from "./BookLibraryInfo";
import RentData from "./BookRentData";
import * as S from "./BookDetailTemplate.style";
import BookReviewList from "./BookReviewList";
import { useDispatch, useSelector } from "react-redux";
import { getBookAPI, getSelectedBookReviewAPI } from "../../../core/redux/bookSlice";

// const book = {
//   bookNo: "00000001",
//   bookImageURL:
//     "https://image.aladin.co.kr/product/19359/16/cover/s972635417_1.jpg",
//   bookname: "우리가 빛의 속도로 갈 수 없다면",
//   authors: "김초엽",
//   publisher: "허블",
//   publicationYear: "2019",
//   callNum: "813.6-김815ㅇ",
//   area: "",
//   format: "341p, 21cm",
//   className: "문학 > 한국문학 > 소설",
//   bookStatus: 0,
//   rentCnt: 10,
//   isbn: "9791190090018",
//   description:
//     "2017년 '관내분실'과 '우리가 빛의 속도로 갈 수 없다면'으로 제2회 한국과학문학상 중단편 대상과 가작을 수상하며 작품 활동을 시작한 김초엽 작품집. '순례자들은 왜 돌아오지 않는가', '스펙트럼', '공생가설', '우리가 빛의 속도로 갈 수 없다면', '감정의 물성', '관내분실', '나의 우주 영웅에 관하여'가 수록되었다.",
// };

const BookDetailTemplate = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(getBookAPI());
    dispatch(getSelectedBookReviewAPI(book.bookNo));
  }, [dispatch]);

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
        <BookInfoData book={book} />
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
