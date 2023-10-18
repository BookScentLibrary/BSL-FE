import { useDispatch, useSelector } from "react-redux";
import * as S from "./SearchModal.style";
import React, { useEffect, useState } from "react";
import { setSearchResults } from "../search/action";
import Input from "../shared/elements/Input.jsx";
import Button from "../shared/elements/Button";
import { SelectBookRecommendAPI } from "../../core/redux/bookSlice";

const SearchModal = (props) => {
  const { isOpen, onClose, onSelectBook } = props;
  const [selectedBook, setSelectedBook] = useState(null); // isOpen을 props로 받아옴
  const [searchTerm, setSearchTerm] = useState(""); //검색어의 상태
  const optionData = ["전체검색", "제목", "저자", "발행처"];
  const [optionValue, setOptionValue] = React.useState(0);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.book.searchResults);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // 시작 페이지
  const limit = 20; // 페이지당 표시할 항목 수 (원하는 숫자로 설정)

  // 검색 결과 불러오는 함수
  const searchBookForm = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    dispatch(
      SelectBookRecommendAPI({
        searchValue: searchTerm,
        searchType: optionValue,
        pageNumber: page,
        pageSize: limit,
      })
    )
      .then((action) => {
        if (action.payload && action.payload.length === 0) {
          setHasMore(false);
        } else if (action.payload) {
          dispatch(setSearchResults([...searchResults, ...action.payload]));
          setPage(page + 1);
        }
      })
      .catch((error) => {
        console.error("검색 결과를 가져오는 중 오류가 발생했습니다:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  useEffect(() => {
    searchBookForm();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      hasMore
    ) {
      searchBookForm();
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    onSelectBook(book);
    onClose();
  };

  return (
    <div>
      <S.ModalWrapper className={isOpen ? "open" : ""} onClick={onClose}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
          <h2>도서 검색</h2>
          <br />
          <div className="search">
            <Input
              width="300px"
              inputType="search"
              data={optionData}
              optionValue={optionValue}
              setOptionValue={setOptionValue}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onClick={searchBookForm}
            />
          </div>
          <S.ScrollContainer>
            {searchResults.length > 0 ? (
              searchResults.map((book) => (
                <S.BookItem key={book.bookNo}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <S.Image src={book.bookImageURL} />
                  </div>
                  <S.BookInfoContainer>
                    <S.BookInfoHeader>{book.bookname}</S.BookInfoHeader>
                    <S.BookInfoText>
                      <span
                        style={{
                          fontWeight: "800",
                          margin: "5px",
                          marginRight: "43px",
                        }}
                      >
                        저자
                      </span>
                      {book.author}
                    </S.BookInfoText>
                    <S.BookInfoText>
                      <span
                        style={{
                          fontWeight: "800",
                          margin: "5px",
                          marginRight: "30px",
                        }}
                      >
                        발행처
                      </span>
                      <span>{book.publisher}</span>
                      <span>
                        <span
                          style={{
                            fontWeight: "800",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                        >
                          |
                        </span>
                        {book.publicationYear}년
                      </span>
                    </S.BookInfoText>
                    <S.BookInfoText>
                      <span
                        style={{
                          fontWeight: "800",
                          margin: "5px",
                          marginRight: "18px",
                        }}
                      >
                        청구기호
                      </span>
                      {book.callNum}
                    </S.BookInfoText>
                    <S.BookInfoText>
                      <span
                        style={{
                          fontWeight: "800",
                          margin: "5px",
                          marginRight: "30px",
                        }}
                      >
                        자료실
                      </span>
                      {book.shelfArea}
                    </S.BookInfoText>
                  </S.BookInfoContainer>
                  <S.ButtonWrapper>
                    <Button
                      type="middle"
                      onClick={() => handleSelectBook(book)}
                    >
                      도서 선택
                    </Button>
                  </S.ButtonWrapper>
                </S.BookItem>
              ))
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </S.ScrollContainer>
        </S.ModalContent>
      </S.ModalWrapper>
    </div>
  );
};
export default SearchModal;
