import React, { useState } from "react";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { BookRecommendAPI } from "../../core/redux/bookSlice";
import styled from "styled-components";
import SearchModal from "./SearchModal";

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
    <>
      <StyledWord>
        <h1>사서 추천 도서 작성</h1>
      </StyledWord>
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
            <Image src={selectedBook.bookImageURL} />
            <div>
              <BookInfoContainer>
                <BookInfoHeader>{selectedBook.bookname}</BookInfoHeader>
                <BookInfoText>
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
                </BookInfoText>
                <BookInfoText>
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
                </BookInfoText>
                <BookInfoText>
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
                  {selectedBook.shelfArea}
                </BookInfoText>
              </BookInfoContainer>
              <ButtonWrapper>
                <Button onClick={handleSearch}>다시 검색하기</Button>
              </ButtonWrapper>
            </div>
          </div>
        ) : (
          <RoundedDashedBorder>
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
          </RoundedDashedBorder>
        )}
      </div>
      <div>
        <Textarea
          name="content"
          value={content}
          placeholder="내용 입력"
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={handleSubmit}>등록하기</Button>
        </div>
      </div>
    </>
  );
};

export default RecommendWrite;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const Image = styled.div`
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  margin: 20px;
`;

const RoundedDashedBorder = styled.div`
  border: 1px dashed gray;
  width: 1215px;
  height: 400px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  margin-top: 10px;
`;

const BookInfoHeader = styled.h2`
  margin: 5px;
  margin-bottom: 20px;
  font-weight: "800"
  font-size: 20px;
`;

const BookInfoText = styled.p`
  margin: 4px 0;
  font-size: 18px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 1000px;
`;

const ButtonWrapper = styled.div`
  margin: 10px;
`;
