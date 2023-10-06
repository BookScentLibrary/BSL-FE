import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewWritePage() {
  const [postTitle, setPostTitle] = useState("");
  const [rate, setRate] = useState(1); // 초기 평점 설정
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 라디오 버튼의 선택 상태를 관리할 상태 변수
  const [selectedOption, setSelectedOption] = useState("option1");

  // 라디오 버튼의 선택이 변경될 때 호출되는 함수
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

    try {
      // 리뷰 데이터를 서버에 전송
      const response = await axios.post("http://localhost:8080/news/reviewWrite", {
        postTitle,
        rate,
        content,
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
        <label htmlFor="postTitle">제목</label>
        <input
          id="postTitle"
          type="text"
          placeholder="제목"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
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
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          옵션 1
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          옵션 2
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          옵션 3
        </label>
        <br />
        <textarea
          placeholder="리뷰 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">리뷰 등록</button>
      </form>
      <p>선택한 옵션: {selectedOption}</p>
    </div>
  );
}

export default ReviewWritePage;
