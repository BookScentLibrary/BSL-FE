import React, { useState } from 'react';

const reviewlist = () => {
  const [boardList, setBoardList] = useState([]); // Assuming you have an array of board data
  const [pageList, setPageList] = useState([]); // Assuming you have an array of page numbers
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    // Update boardList based on the search results
  };

  return (
    <div>
      {/* HEADER */}
      <div id="header"> {/* You can replace this with your React Header component */}</div>

      <a href="/post">글쓰기</a>

      <table>
        <thead>
          <tr>
            <th className="one wide">번호</th>
            <th className="ten wide">글제목</th>
            <th className="two wide">작성자</th>
            <th className="three wide">작성일</th>
          </tr>
        </thead>

        <tbody>
          {/* CONTENTS */}
          {boardList.map((board) => (
            <tr key={board.id}>
              <td>
                <span>{board.id}</span>
              </td>
              <td>
                <a href={`/post/${board.id}`}>
                  <span>{board.title}</span>
                </a>
              </td>
              <td>
                <span>{board.writer}</span>
              </td>
              <td>
                <span>
                  {new Date(board.createdDate).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {/* Page links */}
        {pageList.map((pageNum) => (
          <span key={pageNum}>
            <a href={`/?page=${pageNum}`}>{pageNum}</a>
          </span>
        ))}
      </div>

      <hr />

      {/* 검색 form */}
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <button type="submit">검색하기</button>
      </form>

      {/* FOOTER */}
      <div id="footer"> {/* You can replace this with your React Footer component */}</div>
    </div>
  );
}

export default reviewlist;
