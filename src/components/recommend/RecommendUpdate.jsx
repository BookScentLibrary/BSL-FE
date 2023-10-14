import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/shared/elements/Input";

const RecommendUpdate = () => {
  const { recPostId } = useParams();
  const [recommend, setRecommend] = useState({});
  const navigate = useNavigate();

  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    postTitle: "",
    content: "",
    bookNo: "",
    userId: "",
  });

  // 추천 도서 게시물 데이터를 백엔드 API로부터 가져오는 함수
  const getRecommend = async () => {
    try {
      console.log("recPostId:", recPostId); // rev_postId 값 확인
      const response = await axios.get(
        `http://localhost:8080/user/recommendDetail/?recPostId=${recPostId}`
      );

      setRecommend(response.data.data); // 가져온 추천 도서 게시물 데이터 저장
      console.log(response.data.data);
      setFormData({
        postTitle: response.data.postTitle,
        content: response.data.content,
        bookNo: response.data.bookNo,
        userId: response.data.userId,
      });
    } catch (error) {
      console.error("Error fetching review detail:", error);
    }
  };

  useEffect(() => {
    getRecommend(); // 컴포넌트가 마운트될 때 추천 도서 게시물 데이터를 가져옴
  }, [recPostId]); // rev_postId가 변경될 때마다 다시 가져옴

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
        content: response.data.content,
        bookNo: response.data.bookNo,
        userId: response.data.userId,
      };

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
      {/*<div>
        <input
          type="text"
          placeholder="도서 검색어"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색하기</button>
      </div>

      <div>
        {book && (
          <div>
            <Image src={book.bookImageURL} />
            <div>
              <h2>{book.bookname}</h2>
              <p>저자: {book.author}</p>
              <p>발행처: {book.publisher}</p>
              <p>청구기호: {book.callNum}</p>
              <p>자료실: {book.shelfArea}</p>
            </div>
            <button
              onClick={() => dispatch(searchBookAPI({ bookNo: book.bookNo }))}
            >
              다시 검색하기
            </button>
          </div>
        )}
      </div>*/}
      <div>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleFormChange}
        />
        {/* 수정 버튼을 누르면 handleUpdate 함수 호출 */}
        <Link to={`/user/recommendDetail/${recPostId}`}>
          <button onClick={handleUpdate}>수정</button>
        </Link>
        <Link to={`/user/recommendDetail/${recPostId}`}>
          <button>취소</button>
        </Link>
      </div>
    </>
  );
};

export default RecommendUpdate;
