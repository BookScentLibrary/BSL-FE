import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewWritePage() {
  const [userId, setUserId] = useState("");
  const [bookNo, setBookNo] = useState("");
  const [bookImageURL, setBookImageURL] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [callNum, setCallNum] = useState("");
  const [bookname, setBookname] = useState("");
  const [shelfArea, setShelfArea] = useState("");
  const [rate, setRate] = useState(1); // 초기 평점 설정
  const [isbn, setIsbn] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용



  const handleReviewSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

    try {
      // 리뷰 데이터를 서버에 전송
      const response = await axios.post("http://localhost:8080/news/reviewWrite", {
        postTitle,
        rate,
        content,
        author,
        publisher,
        callNum,
        bookname,
        shelfArea,
        userId,
        bookNo,
        isbn,
        // bookImageURL,
      });

      if (response.status === 201) {
        // 성공적으로 리뷰가 등록되면 리뷰 목록 페이지로 이동
        navigate("/news/reviewList");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      <h2>리뷰 작성</h2>
      <form onSubmit={handleReviewSubmit}>     
      <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
         <br />
         <label htmlFor="bookNo">책번호</label>
        <input
          id="bookNo"
          type="text"
          value={bookNo}
          onChange={(e) => setBookNo(e.target.value)}
        />
         <br />
       <label htmlFor="postTitle">제목</label>
        <input
          id="postTitle"
          type="text"
          placeholder="제목"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
         <br />
         <hr />
         <button>책 검색하기</button>
         {/* <label htmlFor="bookImageURL">책이미지</label>
        <input
          name="bookImageURL"
          id="bookImageURL"
          type="text"
          value={bookImageURL}
          onChange={(e) => setBookImageURL(e.target.value)}
        />
        <br /> */}
         <label htmlFor="bookname">책 이름</label>
        <input
          name="bookname"
          id="bookname"
          type="text"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
        />
        <br />
         <label htmlFor="author">저자</label>
        <input
          name="author"
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
         <br />
         <label htmlFor="publisher">발행처</label>
        <input
          name="publisher"
          id="publisher"
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <label htmlFor="callNum">청구기호</label>
        <input
          name="callNum"
          id="callNum"
          type="text"
          value={callNum}
          onChange={(e) => setCallNum(e.target.value)}
        />
         <br />
        <label htmlFor="shelfArea">자료실</label>
        <input
          name="shelfArea"
          id="shelfArea"
          type="text"
          value={shelfArea}
          onChange={(e) => setShelfArea(e.target.value)}
        />
        <br />
        <label htmlFor="rate">평점</label>
        <select
          name="rate"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <textarea
          placeholder="리뷰 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">리뷰 등록</button>
      </form>
     
    </div>
  );
}

export default ReviewWritePage;
