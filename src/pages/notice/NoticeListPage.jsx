import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../review/Pagination";

const NoticeListPage = () => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formattedDate = new Date(dateString).toLocaleDateString(
          "ko-KR",
          options
        );
        return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
      };
      const [noticeList, setNoticeList] = useState([]);
      const [keyword, setKeyword] = useState("");
      const [searchType, setSearchType] = useState("all");
    
      const [limit, setLimit] = useState(20);
      const [page, setPage] = useState(1);
      const offset = (page - 1) * limit;
    
      const [order, setOrder] = useState("createdAt");
      const sortedNoticeList = noticeList.sort((a, b) => b[order] - a[order]);
    
      const getNoticeList = async () => {
        try {
          const response = await axios.get("http://localhost:8080/news/noticeList");
          //console.log(response.data);
          setNoticeList(response.data);
        } catch (error) {
          console.error("Error fetching notice list:", error);
        }
      };
    
      const handleSearch = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/news/noticeList?searchType=${searchType}&keyword=${keyword}`
          );
          //console.log(response.data);
          if (Array.isArray(response.data)) {
            setNoticeList(response.data);
          } else {
            setNoticeList([]);
          }
        } catch (error) {
          console.error("Error searching notices:", error);
        }
      };
    
      useEffect(() => {
        getNoticeList();
        setOrder("not_postId");
      }, []);
    
      return (
        <div>
          <h1>공지사항</h1>
          <hr />
          <p>책향기 도서관의 공지사항 게시판입니다.</p>
          <Link to="/news/noticeWrite">
            <button>공지작성</button>
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
            <option value="content">책 이름</option>
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
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {noticeList.slice(offset, offset + limit).map((notice, index) => (
                <tr key={index} noticeList={sortedNoticeList}>
                  <th>{notice.not_postId}</th>
                  <td>
                    <Link to={`/news/noticeDetail/${notice.not_postId}`}>
                      {notice.postTitle} 
                    </Link>
                  </td>
                  <td> {notice.nickname} </td>
                  <td> {formatDate(notice.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer>
            <Pagination
              total={noticeList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      );
    };

export default NoticeListPage;