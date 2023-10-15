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
    if (!userId) {
      window.alert("로그인을 진행해주세요.");
    }
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
      <Input
        type="text"
        name="postTitle"
        value={postTitle}
        placeholder="제목을 여기에 작성"
        label="제목"
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <div>
        {!selectedBook && <Button onClick={handleSearch}>검색하기</Button>}
      </div>
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectBook={handleSelectBook}
      />

      <div>
        {selectedBook ? (
          <div>
            <Image src={selectedBook.bookImageURL} />
            <div>
              <h2>{selectedBook.bookname}</h2>
              <p>저자: {selectedBook.author}</p>
              <p>발행처: {selectedBook.publisher}</p>
              <p>청구기호: {selectedBook.callNum}</p>
              <p>자료실: {selectedBook.shelfArea}</p>
            </div>
            <Button onClick={handleSearch}>다시 검색하기</Button>
          </div>
        ) : null}
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          placeholder="내용 입력"
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleSubmit}>등록하기</Button>
      </div>
    </>
  );
};

export default RecommendWrite;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
`;
