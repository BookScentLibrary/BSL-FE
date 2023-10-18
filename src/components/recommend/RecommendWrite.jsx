import React, { useState } from "react";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
import { useDispatch } from "react-redux";
import { BookRecommendAPI } from "../../core/redux/bookSlice";
import * as S from "./RecommendWrite.style";
import SearchModal from "./SearchModal";
import Permit from "../shared/comp/Permit";

const RecommendWrite = () => {
  const [postTitle, setPostTitle] = useState(""); //게시글 제목
  const [content, setContent] = useState(""); //게시글 내용
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 팝업 열기/닫기 상태

  const handleSearch = () => {
    setIsModalOpen(true); // 검색 버튼을 클릭하면 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 팝업 닫기
  };

  const handleSubmit = () => {
    if (postTitle === "" || content === "" || !selectedBook) {
      window.alert("모든 칸을 입력해주세요.");
      return;
    }
    const bookNo = selectedBook.bookNo;
    const data = {
      postTitle,
      content,
      bookNo,
      userId,
    };
    dispatch(BookRecommendAPI(data));
  };
  return (
    <Permit>
      <S.StyledWord>
        <h1>사서 추천 도서 작성</h1>
      </S.StyledWord>
      <hr />
      <br />
      <Input
        label="제목"
        inputType="post"
        width="1100px"
        name="postTitle"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="제목을 여기에 작성"
      />
      <br />
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectBook={handleSelectBook}
      />

      <div>
        {selectedBook ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <S.Image src={selectedBook.bookImageURL} />
            <div>
              <S.BookInfoContainer>
                <S.BookInfoHeader>{selectedBook.bookname}</S.BookInfoHeader>
                <S.BookInfoText>
                  <span
                    style={{
                      fontWeight: "800",
                      margin: "5px",
                      marginRight: "50px",
                    }}
                  >
                    저자
                  </span>
                  {selectedBook.author}
                </S.BookInfoText>
                <S.BookInfoText>
                  <span
                    style={{
                      fontWeight: "800",
                      margin: "5px",
                      marginRight: "34px",
                    }}
                  >
                    발행처
                  </span>
                  {selectedBook.publisher}
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
                  {selectedBook.callNum}
                </S.BookInfoText>
                <S.BookInfoText>
                  <span
                    style={{
                      fontWeight: "800",
                      margin: "5px",
                      marginRight: "35px",
                    }}
                  >
                    자료실
                  </span>
                  {selectedBook.shelfArea}
                </S.BookInfoText>
              </S.BookInfoContainer>
              <S.ButtonWrapper>
                <Button onClick={handleSearch}>다시 검색하기</Button>
              </S.ButtonWrapper>
            </div>
          </div>
        ) : (
          <S.RoundedDashedBorder>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {!selectedBook && (
                <Button onClick={handleSearch} style={{ alignSelf: "center" }}>
                  책 검색하기
                </Button>
              )}
            </div>
          </S.RoundedDashedBorder>
        )}
      </div>
      <div>
        <S.Textarea
          name="content"
          value={content}
          placeholder="내용 입력"
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={handleSubmit}>등록하기</Button>
        </div>
      </div>
    </Permit>
  );
};

export default RecommendWrite;
