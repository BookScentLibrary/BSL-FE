import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Flower } from "../../asset/icons/flower.svg";

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

  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarChange = (star) => {
    setSelectedStar(star);
  };

 // const [rating, setRating] = useState(0);

  const handleStarClick = (newRate) => {
    setRate(newRate);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

    try {
      // 리뷰 데이터를 서버에 전송
      const response = await axios.post(
        "http://localhost:8080/news/reviewWrite",
        {
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
        }
      );

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
        <Container className="startRadio">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarBox
            key={star}
            className="startRadio__box"
            onClick={() => handleStarClick(star)}
          >
            <input
              type="radio"
              name="star"
              value={star}
              checked={rate === star}
            />
            <Flower className={`startRadio__img ${rate >= star ? 'active' : ''}`} />
            
          </StarBox>
        ))}<span>{rate}점</span>
      </Container>
      <p> </p>
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
  cursor: pointer;

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
    fill: #A1E092;
  }
`;


export default ReviewWritePage;
