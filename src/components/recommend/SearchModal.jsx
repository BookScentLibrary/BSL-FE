import React, { useState, useEffect } from "react";
import SearchDataList from "./SearchDataList";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchModal = (props) => {
  const [keyWord, setKeyWord] = useState("");
  const [bookList, setBookList] = useState([]);

  const keyWordInput = (e) => {
    setKeyWord(e.target.value);
    filterKeyword(e);
  };

  const filterKeyword = (e) => {
    let keyword = e.target.value;
    if (keyword === "") {
      keyword = "";
    }
    fetch(`http://localhost:8080/book/search?searchValue=${value}`)
      .then((res) => res.json())
      .then((res) => setKeyWordList(res.result));
  };

  return (
    <div>
      <div>
        <FaSearch size="30" color="lightgray" />
        <input
          type="text"
          placeholder="도서 제목"
          onChange={keyWordInput}
          value={keyWord}
        />
        {props.modalOn ? (
          <button onClick={props.handleSearchModal}>취소</button>
        ) : null}
      </div>
      {keyWord ? (
        <SearchDataList keyWordList={keyWordList} />
      ) : (
        <div>
          <div>
            {bookList.map((book) => (
              <div id={book.isbn} key={book.isbn}>
                <img src={book.bookImageURL} alt="Book Cover" />
                <p>{book.bookname}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;

/*const WrapSearchModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: auto;
  background-color: rgba(34, 34, 34, 0.5);
  overflow-y: auto;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 32px 0 40px;
  min-width: 320px;
  width: 100%;
  height: 90px;
  align-items: center;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 40px;
  cursor: text;
  border-radius: 8px;
  background-color: rgb(244, 244, 244);
  &::placeholder {
    font-size: 13px;
    color: gray;
    padding-left: 10px;
  }
`;

const CancleBtn = styled.button`
  background-color: white;
  font-size: 11px;
`;

const ImgArea = styled.div`
  background-color: white;
`;

const BrandList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 140px;
  text-align: center;
  cursor: pointer;
`;

const Brand = styled.div`
  width: 100px;
  height: 100px;
  align-items: center;
  margin-left: 15px;
  border-radius: 8px;
  background-color: rgb(246, 238, 237);
  &:hover {
    cursor: pointer;
    border: 3px solid white;
  }
`;

const BrandImg = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 10px;
  border-radius: 8px;
`;

const BrandName = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;*/
