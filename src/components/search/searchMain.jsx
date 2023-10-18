import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../shared/elements/Input.jsx";
import { bookSlice, searchBookAPI } from "../../core/redux/bookSlice.jsx";
import style from "styled-components";
import Button from "../shared/elements/Button";
import Pagination from "../../pages/review/Pagination.jsx";
import { useNavigate } from "react-router-dom";
import SearchErrorPage from "./SearchErrorPage.jsx";




const SearchMain = () => {
  const [searchValue, setSearchValue] = useState("");
  const optionData = ["제목", "저자", "발행처"];
  const [optionValue, setOptionValue] = useState(0); 



  const books = useSelector((state) => state.book.search);
  const navigate = useNavigate();




  const dispatch = useDispatch();




  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);



  
  const [pageNumber, setPageNumber] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setlimit] = useState(2);
  const offset = (pageNumber - 1) * limit; 





  const onClickSearch = () => {
    dispatch(bookSlice.actions.cleanSearchList());
    dispatch(
      searchBookAPI({
        searchType: optionValue,
        searchValue: searchValue,
        pageNumber: pageNumber,
        pageSize: 20, 
      })
    )
  };





  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);

  };  


  return (

    <SearchStyle>
      <SearchDesign>
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
      </SearchDesign>

      <ButtonDesign>
        <Button onChange={(e) => {
          setSearchValue(e.target.value);
        }}
          onClick={onClickSearch}>검색</Button>
      </ButtonDesign>

      {books && ( books.length >  0 || searchValue !== "")
      ?(
       books.map((book, i) => (
        book && book.content.map((book, i) => {
          return (
            <Booklist>
              <Bookitem key={book.bookNo}>
                <Detail onClick={() => goToDetail(book.bookNo)} >
                  <Image src={book.bookImageURL} />
                  <Wrapper>
                    <Booktitle>{book.bookname}</Booktitle>
                    <BookInfos>
                      <Columns>
                        <p>저자</p>
                        <p>발행처</p>
                        <p>청구기호</p>
                        <p>자료실</p>
                      </Columns>
                      <Bookinfo>
                        <p>{book.author}</p>
                        <p>{book.publisher}  | {book.publicationYear}</p>
                        <p>{book.callNum}</p>
                        <p>{book.shelfArea}</p>
                      </Bookinfo>
                    </BookInfos>
                  </Wrapper>
                </Detail>
              </Bookitem>
            </Booklist>
          )
        })
       )
       )
      )  : <SearchErrorPage />
     }
    


      <footer>
        {books &&
          <Pagination
            total={Object.keys(books).length}
            limit={limit}
            page={pageNumber}
            setPage={setPageNumber}
          />}
      </footer>
    </SearchStyle>
  );

};




const SearchDesign = styled.div`
margin: auto;
width: fit-content;
`

const Detail = styled.div`
 display: flex;
 gap: 24px;
`;



const Image = styled.div`
width: 120px;
height: 176px;
border-radius: 8px;
background-color: ${({ theme }) => theme.colors.gray50};
background-image: ${({ src }) => `url(${src})`};
background-size: cover;
background-position: center;

`;

const Columns = style.div`

display: grid;
gap: 12px;


`;

const BookInfos = styled.div`

margin-top: 20px;
display: flex;
gap: 12px;
`;





const Wrapper = styled.div`
width: fit-content;
`;


const Booklist = style.div`
height: fit-content;
`;



const Booktitle = style.div`

border-bottom: 1px solid #ddd;
font-size: 24px;
font-weight: 700;
width: 750px;
height: 46px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;


`;


const Bookinfo = styled.div`

display: grid;
gap: 12px;



`;

const Bookitem = styled.div`

display:flex;
padding: 24px 0;

gap: 40px;

border-bottom: 1px solid #ddd;


// clear: both; 
// padding: 8px;
// border-bottom: 1px solid #ddd;

`;




const SearchStyle = styled.div`

`;

const MyForm = styled.div`
height: fit-content;
`;

const ButtonDesign = styled.div`
display: flex;
margin: 20px;
justify-content: center;
`

export default SearchMain;