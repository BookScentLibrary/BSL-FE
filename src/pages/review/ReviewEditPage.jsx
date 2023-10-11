import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ReviewEditPage = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };
  const { rev_postId } = useParams();
  const navigate = useNavigate();

  // 리뷰 정보를 가져오기 위한 상태
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    postTitle: "",
    createdAt: "",
    rate: "",
    nickname: "",
    content: "",
    bookNo: "",
    bookname: "",
    author: "",
    publisher: "",
    callNum: "",
    shelfArea: "",
  });

  // useEffect를 사용하여 리뷰 정보 가져오기
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/news/reviewDetail/${rev_postId}`
        );
        setReview(response.data);
        setLoading(false);

        // 리뷰 정보를 가져온 후, 폼 데이터 초기값 설정
        setFormData({
          postTitle: response.data.postTitle,
          createdAt: response.data.createdAt,
          rate: response.data.rate,
          nickname: response.data.nickname,
          content: response.data.content,
          bookNo: response.data.bookNo,
          bookname: response.data.bookname,
          author: response.data.author,
          publisher: response.data.publisher,
          callNum: response.data.callNum,
          shelfArea: response.data.shelfArea,
        });
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, [rev_postId]);

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
      const updatedReview = {
        rev_postId: rev_postId,
        postTitle: formData.postTitle,
        createdAt: formData.createdAt,
        rate: formData.rate,
        nickname: formData.nickname,
        content: formData.content,
        bookNo: formData.bookNo,
        bookname: formData.bookname,
        author: formData.author,
        publisher: formData.publisher,
        callNum: formData.callNum,
        shelfArea: formData.shelfArea,
      };

      const response = await axios.put(
        `http://localhost:8080/news/reviewEdit/${rev_postId}`,
        updatedReview
      );

      if (response.status === 200) {
        // 수정이 성공하면 수정된 리뷰 상세 페이지로 이동
        navigate(`/news/reviewDetail/${rev_postId}`);
      } else {
        console.error("Error updating review:", response.data);
      }
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  // 리뷰 정보가 로딩 중일 때 보여줄 내용
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>리뷰 수정</h2>
      <hr />
      <h3>{review.postTitle}</h3>
      <p>{formatDate(review.createdAt)}</p>
      <form>
        <div>
          <label htmlFor="postTitle">제목:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={formData.postTitle}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <input
            type="number"
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleFormChange}
          />
        </div>
      </form>

      {/* 수정 버튼을 누르면 handleUpdate 함수 호출 */}
      <button onClick={handleUpdate}>수정</button>
      <Link to={`/news/reviewDetail/${rev_postId}`}>
        <button>취소</button>
      </Link>
    </div>
  );
};

export default ReviewEditPage;
