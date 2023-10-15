import React, { useState, useEffect } from "react";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import SearchModal from "./SearchModal";

const RecommendUpdate = () => {
  const { recPostId } = useParams();
  const [recommend, setRecommend] = useState({});
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const userId = sessionStorage.getItem("userId");

  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    postTitle: "",
    content: "",
    bookNo: "",
    userId: "",
  });

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  useEffect(() => {
    getRecommend(); // Fetch the data

    if (recommend && Object.keys(recommend).length > 0) {
      setFormData({
        postTitle: recommend.postTitle,
        content: recommend.content,
        bookNo: recommend.bookNo,
        userId: recommend.userId,
      });

      setSelectedBook({
        bookNo: recommend.bookNo,
        bookImageURL: recommend.bookImageURL,
        bookname: recommend.bookname,
        author: recommend.author,
        publisher: recommend.publisher,
        callNum: recommend.callNum,
        shelfarea: recommend.shelfarea,
      });
    }
  }, []);

  // 추천 도서 게시물 데이터를 백엔드 API로부터 가져오는 함수
  const getRecommend = async () => {
    try {
      console.log("recPostId:", recPostId); // recPostId 값 확인
      const response = await axios.get(
        `http://localhost:8080/user/recommendDetail/?recPostId=${recPostId}`
      );

      const newRecommend = response.data.data;

      setRecommend(newRecommend);

      setFormData({
        postTitle: newRecommend.postTitle,
        content: newRecommend.content,
        bookNo: newRecommend.bookNo,
        userId: newRecommend.userId,
      });

      setSelectedBook({
        bookNo: newRecommend.bookNo,
        bookImageURL: newRecommend.bookImageURL,
        bookname: newRecommend.bookname,
        author: newRecommend.author,
        publisher: newRecommend.publisher,
        callNum: newRecommend.callNum,
        shelfarea: newRecommend.shelfarea,
      });
      console.log("response.data.data :", newRecommend);
    } catch (error) {
      console.error("Error fetching review detail:", error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 팝업 열기/닫기 상태

  const handleSearch = () => {
    setIsModalOpen(true); // 검색 버튼을 클릭하면 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 팝업 닫기
  };

  // 폼 입력값이 변경될 때마다 상태 업데이트
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 데이터를 사용하여 리뷰 수정
  const handleUpdate = async () => {
    try {
      // 리뷰 수정 로직 구현
      const updatedRecommend = {
        recPostId: recPostId,
        postTitle: formData.postTitle,
        content: formData.content,
        bookNo: selectedBook.bookNo,
        userId: userId,
      };
      console.log("updatedRecommend : ", updatedRecommend);

      const response = await axios.put(
        `http://localhost:8080/admin/recommendUpdate/${recPostId}`,
        updatedRecommend
      );

      if (response.status === 200) {
        // 수정이 성공하면 수정된 리뷰 상세 페이지로 이동
        navigate(`/user/recommendDetail/${recPostId}`);
      } else {
        console.error("Error updating recommend:", response.data);
      }
    } catch (error) {
      console.error("Error updating recommend:", error);
    }
  };

  return (
    <>
      <Input
        type="text"
        name="postTitle"
        value={formData.postTitle}
        label="제목"
        onChange={handleFormChange}
      />
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
              <p>자료실: {selectedBook.shelfarea}</p>
            </div>
            <Button onClick={handleSearch}>다시 검색하기</Button>
          </div>
        ) : null}
      </div>
      <div>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleFormChange}
        />
        <button onClick={handleUpdate}>수정</button>
        <Link to={`/user/recommendDetail/${recPostId}`}>
          <button>취소</button>
        </Link>
      </div>
    </>
  );
};

export default RecommendUpdate;

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
`;
