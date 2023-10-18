import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../shared/elements/Input.jsx";
import { bookSlice, searchBookAPI } from "../../core/redux/bookSlice.jsx";
import Button from "../shared/elements/Button";
import Pagination from "../../pages/review/Pagination.jsx";
import { useNavigate } from "react-router-dom";
import Flex from "../shared/elements/Flex.jsx";

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
    );
  };

  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);
  };

  return (
    <SearchStyle>
      <Title>소장자료 검색</Title>
      <SearchDesign>
        <Input
          placeholder="검색어를 입력해주세요."
          inputType="search"
          data={optionData}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
        />
        <DataType>
          <p>자료유형</p>
          <div>
            <div>
              <input type="radio" checked />
              <label>전체</label>
            </div>
            <div>
              <input type="radio" />
              <label>도서</label>
            </div>
            <div>
              <input type="radio" />
              <label>DVD</label>
            </div>
            <div>
              <input type="radio" />
              <label>전자책</label>
            </div>
          </div>
        </DataType>
        <PublishedYear>
          <p>발행년도</p>
          <div>
            <input />
            <p>~</p>
            <input />
          </div>
        </PublishedYear>
      </SearchDesign>

      <ButtonDesign>
        <Button
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
        >
          검색
        </Button>
      </ButtonDesign>
      <Line margin="48px 0 0 0" />

      {books && (books.length > 0 || searchValue !== "") ? (
        books.map(
          (book, i) =>
            book &&
            book.content.map((book, i) => {
              return (
                <Booklist>
                  <Bookitem key={book.bookNo}>
                    <Detail onClick={() => goToDetail(book.bookNo)}>
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
                            <p>{book.author.split(";")[0]}</p>
                            <p>
                              {book.publisher} | {book.publicationYear}
                            </p>
                            <p>{book.callNum ? book.callNum : "-"}</p>
                            <p>{book.shelfArea ? book.shelfArea : "-"}</p>
                          </Bookinfo>
                        </BookInfos>
                      </Wrapper>
                    </Detail>
                  </Bookitem>
                </Booklist>
              );
            })
        )
      ) : (
        <NotData>검색된 도서가 없습니다.</NotData>
      )}

      <footer>
        {books && (
          <Pagination
            total={Object.keys(books).length}
            limit={limit}
            page={pageNumber}
            setPage={setPageNumber}
          />
        )}
      </footer>
    </SearchStyle>
  );
};

const NotData = styled.div`
  width: fit-content;
  margin: 120px auto;
  color: ${({ theme }) => theme.colors.gray};
`;

const SearchDesign = styled.div`
  margin: auto;
  width: fit-content;
`;

const Title = styled.div`
  width: 100%;
  height: 52px;
  border-bottom: 2px solid #000;
  font-size: 32px;
  margin-bottom: 68px;
`;

const DataType = styled.div`
  display: flex;
  margin: 16px auto;
  width: 420px;
  gap: 36px;
  color: ${({ theme }) => theme.colors.darkgray};
  & > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  & > div > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const PublishedYear = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  margin: 0 auto 24px auto;
  width: 420px;
  color: ${({ theme }) => theme.colors.darkgray};

  & > div {
    display: flex;
    align-items: center;
  }
  & > div > p {
    margin: 0 16px;
  }
  & > div > input {
    width: 68px;
    height: 32px;
    outline: none;
    border: 1px solid #000;
    border-radius: 4px;
  }
`;

const Line = styled.hr`
  width: 100%;
  background-color: #000;
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

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

const Columns = styled.div`
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

const Bookinfo = styled.div`
  display: grid;
  gap: 12px;
`;

const Bookitem = styled.div`
  display: flex;
  padding: 24px 0;

  gap: 40px;

  border-bottom: 1px solid #ddd;
`;

const SearchStyle = styled.div``;

const ButtonDesign = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;

export default SearchMain;
