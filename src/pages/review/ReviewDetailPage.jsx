// ReviewDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ReviewDetailPage = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };

  // URL 매개변수로부터 리뷰 ID 가져오기
  const { rev_postId } = useParams();

  // 리뷰 데이터를 저장할 상태 변수
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 리뷰 데이터를 백엔드 API로부터 가져오는 함수
  const fetchReview = async () => {
    try {
      console.log("rev_postId:", rev_postId); // rev_postId 값 확인
      const response = await axios.get(
        `http://localhost:8080/news/reviewDetail/${rev_postId}`
      );

      setReview(response.data); // 가져온 리뷰 데이터 저장
      console.log(response.data);
      setLoading(false); // 로딩 상태 해제
    } catch (error) {
      console.error("Error fetching review detail:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/news/reviewDetail/${rev_postId}`
      );

      if (response.status === 204) {
        // 삭제가 성공하면 리뷰 목록 페이지로 이동
        navigate("/news/reviewList");
      } else {
        console.error("Error deleting review:", response.data);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  useEffect(() => {
    fetchReview(); // 컴포넌트가 마운트될 때 리뷰 데이터를 가져옴
  }, [rev_postId]); // rev_postId가 변경될 때마다 다시 가져옴

  if (loading) {
    return <p>Loading...</p>; // 데이터 로딩 중에는 로딩 메시지를 표시
  }

  return (
    <div>
      <h2>리뷰 게시판</h2>
      <hr />
      <h3>{review.postTitle}</h3>
      <p>{formatDate(review.createdAt)}</p>
      <p>{review.rate}</p>
      <p>
        {review.nickname}

        <Link to={`/news/reviewEdit/${review.rev_postId}`}>
          <button>수정</button>
        </Link>
        <button onClick={handleDelete}>삭제</button>
      </p>
      <p>{review.content}</p>
      <p>{review.bookImageURL}</p>
      <p>{review.bookNo}</p>
      <p>{review.bookname}</p>
      <p>{review.author}</p>
      <p>{review.publisher}</p>
      <p>{review.callNum}</p>
      <p>{review.shelfArea}</p>
      <p>
        <button>책정보확인하기</button>
      </p>
      <hr />
      <div>
        <h4>댓글</h4>
        <div>
          <span>닉네임</span>
          <div>
            댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
          </div>
          <div>2023.09.09</div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>댓글등록</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailPage;
