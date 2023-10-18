import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BasicTemp } from "../main/element/BookTemplate";
import { ppBooksAPI } from "../../core/redux/bookSlice";
import axios from "axios";
import BestSellerTemplate from "./BestSellerTemplate";
import styled from "styled-components";


const BestSeller = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ppBookList, setPPBookList] = useState([]);

  const popularBooks = useSelector((state) => state.book.ppBooks);



  React.useEffect(() => {
    // getPPBookList();
    dispatch(ppBooksAPI());
  }, []); //p페이지가 랜더링 되는 순간 한번 실행


  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);

  };  



  return (
    <Myform>
      <h1>인기 도서</h1>
      <Booklist>
        {popularBooks &&
          popularBooks.map((book,index) => (
            <Bookitem key={book.book.bookNo}>
              <Ranking>{index + 1}</Ranking>
              <Image src={book.book.bookImageURL} />
              <Wrapper onClick={() => goToDetail(book.book.bookNo)}>
                <Booktitle>{book.book.bookname}</Booktitle>
                <BookInfos>
                  <Columns>
                    <p>저자</p>
                    <p>발행처</p>
                    <p>청구기호</p>
                    <p>자료실</p>
                  </Columns>
                  <Bookinfo>
                    <p>{book.book.author}</p>
                      <p>{book.book.publisher} | {book.book.publicationYear}</p>
                    <p>{book.book.callNum}</p>
                    <p>{book.book.shelfArea}</p>
                  </Bookinfo>
                </BookInfos>
              </Wrapper>
            </Bookitem>
          ))}
      </Booklist>


    </Myform>
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
const Columns = styled.div`
 display: grid;
 gap: 12px;
`;
const BookInfos = styled.div`
margin-top: 20px;
display: flex;
gap: 12px;
`
const Wrapper = styled.div`
width: fit-content;
`

const Booklist = styled.div`
height: fit-content;

`;

const Booktitle = styled.div`
  border-bottom: 1px solid #ddd;
  font-size: 24px;
  font-weight: 700;
  width: 750px;
  height: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Myform = styled.div`
height: fit-content;
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
`;

const Ranking = styled.div`
  margin-right: 16px; // 순위와 이미지 사이의 간격 조정
  font-size: 24px;
  font-weight: 700;
`;



export default BestSeller;
