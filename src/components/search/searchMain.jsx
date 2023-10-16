import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../shared/elements/Input.jsx";
import { searchBookAPI } from "../../core/redux/bookSlice.jsx";
import { incrementPage } from "./action.js";
import { ReactComponent as Spinner } from "../../asset/images/spinner.svg";
import Grid from "./Grid";

const InfiniteScroll = (props) => {
  const { children, page, callback, isLoading, totalPage } = props;

  const [target, setTarget] = React.useState(null);

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.7 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <React.Fragment>
      {children}
      {totalPage - 1 > page ? <Box ref={setTarget}></Box> : null}
      {isLoading ? (
        <Grid margin="auto">
          <Spinner />
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

const Box = styled.div`
  width: 100%;
  height: 20px;
`;

const SearchMain = () => {
  const [searchValue, setSearchValue] = useState("");
  const optionData = ["제목", "저자", "발행처"];
  const [optionValue, setOptionValue] = useState(1); // 초기값 설정 (예: 1)

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageNumber = 1; // 페이지 번호 초기화

  const onClickSearch = () => {
    searchBookForm();
  };

  const searchBookForm = () => {
    dispatch(
      searchBookAPI({
        SearchValue: searchValue,
        searchType: optionValue,
        PageNumber: pageNumber,
        pageSize: 20, // 원하는 페이지당 항목 수로 수정
      })
    ).then((action) => {
      if (action.payload && action.payload.length === 0) {
        setHasMore(false);
      } else if (action.payload) {
        dispatch(setSearchResults([...searchResults, ...action.payload]))
        dispatch(incrementPage());
      }
    }).catch((error) => {
      console.error("검색 결과를 가져오는 중 오류가 발생했습니다:", error);
    }).finally(() => {
      setLoading(false);
    });
  };

  const books = [];

  // InfiniteScroll 컴포넌트에 전달할 콜백 함수 정의
  const handleInfiniteScroll = (entries) => {
    const intersection = entries[0];
    if (intersection.isIntersecting && currentPage < totalPages) {
      dispatch(incrementPage());
    }
  };

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
        {books.map((book) => (
          <div key={book.bookNo} className="book-item">
            <img src={book.bookImageUrl} alt={book.bookname} />
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

export default SearchMain;