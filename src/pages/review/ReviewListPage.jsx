import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";

const ReviewListPage = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };
  const [reviewList, setReviewList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("all");

  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [order, setOrder] = useState("createdAt");
  const sortedReviewList = reviewList.sort((a, b) => b[order] - a[order]);

  const getReviewList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/news/reviewList");
      //console.log(response.data);
      setReviewList(response.data);
    } catch (error) {
      console.error("Error fetching review list:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/news/reviewList?searchType=${searchType}&keyword=${keyword}`
      );
      //console.log(response.data);
      if (Array.isArray(response.data)) {
        setReviewList(response.data);
      } else {
        setReviewList([]);
      }
    } catch (error) {
      console.error("Error searching reviews:", error);
    }
  };

  useEffect(() => {
    getReviewList();
    setOrder("rev_postId");
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
      <select
        type="number"
        value={limit}
        onChange={({ target: { value } }) => setLimit(Number(value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <select
        defaultValue="all"
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="all">전체 검색</option>
        <option value="postTitle">리뷰제목</option>
        <option value="bookname">책 이름</option>
        <option value="author">저자</option>
        <option value="publisher">출판사</option>
        <option value="callNum">청구기호</option>
        <option value="publicationYear">발행년도</option>
      </select>
        <input
          type="text"
          name="keyword"
          placeholder="검색어를 입력하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
              e.preventDefault();
            }
          }}
        />
 <button type="button" onClick={handleSearch}>
          검색
        </button>
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
        </tbody>
      </table>
      <footer>
        <Pagination
          total={reviewList.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default ReviewListPage;
