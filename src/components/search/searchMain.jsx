import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../shared/elements/Input.jsx";
import { searchBookAPI } from "../../core/redux/bookSlice.jsx";
import { incrementPage } from "./action.js";
import { ReactComponent as Spinner } from "../../asset/images/spinner.svg";
import Grid from "./Grid";




const SearchMain = () => {
  const [searchValue, setSearchValue] = useState("");
  const optionData = ["제목", "저자", "발행처"];
  const [optionValue, setOptionValue] = useState(1); // 초기값 설정 (예: 1)
 const books = useSelector((state) => state.book.search.content);
 

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageNumber = 1; // 페이지 번호 초기화

  const onClickSearch = () => {
    searchBookForm();
  };
  console.log(searchValue);
  const searchBookForm = () => {
    dispatch(
      searchBookAPI({
        searchValue: searchValue,
        searchType: 1,
        pageNumber: pageNumber,
        pageSize: 20, // 원하는 페이지당 항목 수로 수정
      })
    )

  };



  // InfiniteScroll 컴포넌트에 전달할 콜백 함수 정의
  // const handleInfiniteScroll = (entries) => {
  //   const intersection = entries[0];
  //   if (intersection.isIntersecting && currentPage < totalPages) {
  //     dispatch(incrementPage());
  //   }
  // };

  return (
    <div>
      <div className="search">
        <Input
          inputType="search"
          data={optionData}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
        ></Input>
      </div>
      <div className="book-list">
        {books&&books.map((book) => (
          <div key={book.bookNo} className="book-item">
            <Image src={book.bookImageURL} />
            <h3>{book.bookname}</h3>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.publicationYear}</p>
            <p>{book.callNum}</p>
            <p>{book.bookStatus}</p>
            <p>{book.rentCnt}</p>
            <p>{book.isbn}</p>
          </div>
        ))}
      </div>
    </div>
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
`


export default SearchMain;