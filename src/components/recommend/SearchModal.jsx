import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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
      <ModalWrapper className={isOpen ? "open" : ""} onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
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
          <ScrollContainer>
            {searchResults.length > 0 ? (
              searchResults.map((book) => (
                <BookItem key={book.bookNo}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Image src={book.bookImageURL} />
                  </div>
                  <BookInfoContainer>
                    <BookInfoHeader>{book.bookname}</BookInfoHeader>
                    <BookInfoText>
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
                    </BookInfoText>
                    <BookInfoText>
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
                    </BookInfoText>
                    <BookInfoText>
                      <span
                        style={{
                          fontWeight: "800",
                          margin: "5px",
                          marginRight: "20px",
                        }}
                      >
                        청구기호
                      </span>
                      {book.callNum}
                    </BookInfoText>
                    <BookInfoText>
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
                    </BookInfoText>
                  </BookInfoContainer>
                  <ButtonWrapper>
                    <Button
                      type="middle"
                      onClick={() => handleSelectBook(book)}
                    >
                      도서 선택
                    </Button>
                  </ButtonWrapper>
                </BookItem>
              ))
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </ScrollContainer>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
};
export default SearchModal;

const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  &.open {
    display: block;
  }
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 80%;
  padding: 30px;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const BookInfoHeader = styled.h3`
  margin: 5px;
  margin-bottom: 20px;
  font-weight: "800"
  font-size: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const BookItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #ccc;
    position: absolute;
    bottom: -10px;
    left: 0;
    border-top: 1px solid;
  }
`;

const BookInfoText = styled.p`
  margin: 4px 10px;
  font-size: 14px;
`;
const Image = styled.div`
  width: 180px;
  height: 280px;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
