import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewListPage = () => {
  const [reviewList, setReviewList] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("all");

  const getReviewList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/news/reviewList'); 
      console.log(response.data);
      setReviewList(response.data); 
    } catch (error) {
      console.error('Error fetching review list:', error);
    }
  }

 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/news/reviewList?searchType=${searchType}&keyword=${keyword}`);
      console.log(response.data); // API 응답 데이터를 콘솔에 출력
      if (Array.isArray(response.data)) {
        setReviewList(response.data);
      } else {
        setReviewList([]);
      }
    } catch (error) {
      console.error('Error searching reviews:', error);
    }
  }

  useEffect(() => {
    getReviewList();
  }, []);

  

  return (
    <div>
      <h1>리뷰 게시판</h1>
      <hr />
      <p>책향기 도서관의 책을 읽고 리뷰를 남기는 게시판입니다.</p>
      <Link to="/news/reviewWrite">
        <button>책 리뷰 작성하기</button>
      </Link>
      <hr />
      <select defaultValue="20">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <select defaultValue="all" onChange={(e) => setSearchType(e.target.value)}>
        <option value="all">전체 검색</option>
        <option value="postTitle">리뷰제목</option>
        <option value="bookname">책 이름</option>
        <option value="author">저자</option>
        <option value="publisher">출판사</option>
        <option value="callNum">청구기호</option>
        <option value="publicationYear">발행년도</option>
      </select>
      <form>
      <input
        type="text" 
        name="keyword"
        placeholder="검색어를 입력하세요."
        value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>검색</button>
      </form>      
      <hr />
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>리뷰제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
        {reviewList.map((review, index) => (
          <tr key={index}>
            <th>{review.rev_postId}</th>
            <td>{review.postTitle} [{review.bookname}]</td>
            <td> {review.nickname} </td>
            <td> {review.createdAt}</td>
          </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewListPage;