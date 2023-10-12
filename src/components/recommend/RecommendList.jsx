import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactPaginate from "react-paginate";

const RecommendList = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6; // 페이지당 표시할 항목 수

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    // API 요청을 통해 사서 추천 도서 데이터 가져오기
    axios
      .get("http://localhost:8080/user/recommendList")
      .then((response) => {
        const data = response.data;
        setRecommendations(data);
        setPageCount(Math.ceil(data.length / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching recommend:", error);
      });
  }, []);

  const displayRecommendations = recommendations
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((recommendation) => (
      <div key={recommendation.id}>
        <h2>{recommendation.title}</h2>
        <p>{recommendation.author}</p>
        <p>{recommendation.description}</p>
        <p>ISBN: {recommendation.isbn}</p>
      </div>
    ));

  return (
    <div>
      <StyledWord>
        <h1>사서 추천 도서</h1>
        <hr />
        <br />
      </StyledWord>
      <div>{displayRecommendations}</div>
      <ReactPaginate
        previousLabel={"이전"}
        nextLabel={"다음"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default RecommendList;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;
