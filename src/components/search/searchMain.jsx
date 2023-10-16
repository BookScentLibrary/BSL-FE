import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState } from "react";
import { setSearchResults, incrementPage } from "./action.js";
import Grid from "./Grid";
import {ReactComponent as Spinner} from '../../asset/images/spinner.svg';
import Input from "../shared/elements/Input.jsx";
import { searchBookAPI } from "../../core/redux/bookSlice.jsx";
import SearchErrorPage from "./SearchErrorPage.jsx";




const SearchMain = () => {
  const[searchValue, setSearchValue] = useState("") //검색어의 값을 저장

  const dispatch = useDispatch(); 
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  //searchBooks 액션을 디스패치하여 검색 요청을 서버로 보내고, Redux 상태를 업데이트

  //검색 버튼 클릭 시 searchValue 값을 설정
    const onClickSearch = () => {
      dispatch(searchBookAPI(searchValue)); //searchTerm 값을 서치밸류로 지정 
    };


  const searchBookForm = () => {
    dispatch(searchBookAPI(searchTerm))
      };      //data
    //searchBooks액션을 사용하려면, Redux에서 사용할 액션과 액션생성자 함수가 필요,
    //이 액션은 서버로 요청을 보내고 응답처리해야함.
  };

  const optionData = ["제목","저자","발행처"];
  const [optionValue, setOptionValue] = React.useState(0)
  //초기값이라서 전체이 선택되어 있어서 0임. 이건 검색 옵션 
  const[searchValue, setSearchValue] = React.useState(null);
  //이건 값이 없어서 null임 검색창에 입력할 값
  const onClickSearch = () => {
    console.log("확정된 검색어:" + searchValue);
    dispatch(searchBookAPI(searchTerm));
  }

  // const data = {
  //   serachValue:searchValue,
  //   searchType: searchType,
  //   startYear : startdate,
  //   endYear : enddate
  // }


  const books = [];
  // InfiniteScroll 컴포넌트에 전달할 콜백 함수 정의
  const handleInfiniteScroll = (entries) => {
    const intersection = entries[0];
    if (intersection.isIntersecting && currentPage < totalPages) {
      dispatch(incrementPage());
      // entries 배열에 대한 처리를 수행하는 코드를 작성하세요.
      // 예를 들어, 스크롤이 끝에 도달하면 새로운 데이터를 불러올 수 있도록 액션을 디스패치할 수 있습니다.
    }
  };
    return (
      <div>
          <div className="search">
            <Input inputType="search"
            data={optionData}
            optionValue={optionValue}
            setOptionValue={setOptionValue}
            onChange={(e)=>{setSearchTerm(e.target.value);}}
            onClick={searchBookForm}></Input>
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




export default SearchMain;
