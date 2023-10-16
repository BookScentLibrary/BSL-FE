// ReviewDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Flower } from "../../asset/icons/flower.svg";
import Comment from "../../components/review/Comment";

const ReviewDetailPage = () => {
  
  // URL 매개변수로부터 리뷰 ID 가져오기
  const { rev_postId } = useParams();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const rate = queryParams.get("rate");

  // 리뷰 데이터를 저장할 상태 변수
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [commentList, setCommentList] = useState([]);
  const [content, setContent] = useState("");

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };


  // 리뷰 데이터를 백엔드 API로부터 가져오는 함수
  const fetchReview = async () => {
    try {
      console.log("rev_postId:", rev_postId); // rev_postId 값 확인
      const response = await axios.get(
        `http://localhost:8080/news/reviewDetail/${rev_postId}`
      );

      setReview(response.data); // 가져온 리뷰 데이터 저장
      setCommentList(response.data);
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



  // const handleChange = (e) => {
  //   setContent(e.target.value);
  // };

  // const addComment = () => {
  //     // Send a POST request to your backend to add a comment
  //     axios.post(`http://localhost:8080/news/reviewDetail/${rev_postId}`, {
  //         content: content,
  //     }).then((response) => {
  //         // Handle the response or update the comment list
  //     });
  // };

  const addComment = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

    try {
      // 리뷰 데이터를 서버에 전송
      const response = await axios.post(
        "http://localhost:8080/news/reviewDetail/${rev_postId}",
        {
          content,
        }
      );

      if (response.status === 201) {
        // 성공적으로 리뷰가 등록되면 리뷰 목록 페이지로 이동
        navigate("/news/reviewDetail/${rev_postId}");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

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
      <p> {review.bookNo} </p>
      <Container className="startRadio">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarBox key={star} className="startRadio__box">
            <input
              type="radio"
              name="star"
              value={star}
              checked={review.rate === star}
            />
            <Flower
              className={`startRadio__img ${
                review.rate >= star ? "active" : ""
              }`}
            />
          </StarBox>
        ))}
      </Container>
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
        {/* {commentList.map((comment) => (
          <Comment
            key={comment.commentId}
            comment={comment}
            onCommentUpdate={updateComment}
            onCommentDelete={deleteComment}
          />
        ))} */}
        {commentList.map((comment) => (
          <div key={comment.commentId}>
            <span>{comment.user.nickname}</span>
            <div>{comment.content}</div>
            <div>{comment.createdAt}</div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
         {reviewList.slice(offset, offset + limit).map((review, index) => (
            <tr key={index} reviewList={sortedReviewList}>
              <th>{review.rev_postId}</th>
              <td>
                <Link to={`/news/reviewDetail/${review.rev_postId}`}>
                  {review.postTitle} [{review.bookname}]
                </Link>
              </td>
              <td> {review.nickname} </td>
              <td> {formatDate(review.createdAt)}</td>
            </tr>
          ))}
        <div>
          <textarea value={content}  onChange={(e) => setContent(e.target.value)}/>
          <button onClick={addComment}>댓글등록</button>          
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 40px;
`;

const StarBox = styled.label`
  position: relative;
  z-index: 1;
  float: left;
  width: 16px; /* Reduce the width to make the icons smaller */
  height: 32px; /* Adjust the height accordingly */

  input {
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
  }

  .startRadio__img {
    display: block;
    position: absolute;
    right: 0;
    width: 15px; /* Adjust the width of the icons */
    height: 32px; /* Adjust the height of the icons */
    pointer-events: none;
  }

  .active {
    fill: #a1e092;
  }
`;

export default ReviewDetailPage;
