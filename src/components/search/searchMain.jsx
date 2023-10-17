import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../shared/elements/Input.jsx";
import { searchBookAPI } from "../../core/redux/bookSlice.jsx";
import { incrementPage } from "./action.js";
import { ReactComponent as Spinner } from "../../asset/images/spinner.svg";
import Grid from "./Grid";
import style from "styled-components";




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
        searchType: 1,
        searchValue: searchValue,
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
      <Booklist>
        {books&&books.map((book) => (
          <Bookitem>
          <div key={book.bookNo} >
            <Image src={book.bookImageURL} />
            <Booktitle><h3>{book.bookname}</h3></Booktitle>
            <Columns>
            <p>저자</p>
            <p>발행처</p>
            <p>청구기호</p>
            <p>자료실</p>
            </Columns>
            <Bookinfo>
            <p>{book.author}</p>
            <AuthorandPubli>
            <p>{book.publisher}  <span>|</span></p>
            <p>{book.publicationYear}</p>
            </AuthorandPubli>
            <p>{book.callNum}</p>
            <p>{book.shelfArea}</p>
            </Bookinfo>
          </div>
          </Bookitem>
     
        ))}
          {/* <div className="book-actions">
            <button className="button1">도서대출</button>
            <button className="button2">관심도서 담기</button>
            <button className="button3">예약하기</button> */}
          {/* </div> */}
          </Booklist>
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
  float:left;
  margin-right: 8px;
`

const Booktitle = style.div`
  font-size: 1.2em;
  margin-left: 8px;
  border-bottom: 1px solid #ddd;

  h3{
  width: 750px;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 0 auto;
 
  }

`;

const Bookinfo = styled.div`
 p{
  padding: 10px;
  margin-left: 10px;
 }
 padding: 2px;
 display: flex;
 flex-direction: column;
 margin-bottom: 20px;

`;

const Bookitem = styled.div`
clear: both; 
padding: 8px;
border-bottom: 1px solid #ddd;

`;

const AuthorandPubli = style.div`
display: flex;
align-items: center;
margin-left: 16px;


  p {
    padding: 2px;
    margin: 0;
  }


`;

const Booklist = style.div`

`;                 

const Columns = style.div`
float:left;
padding: 10px;
display: flex;
flex-direction: column;
padding-bottom: 20px;
letter-spacing: 2px;

p {

  margin: 6px;
}
`;


export default SearchMain;