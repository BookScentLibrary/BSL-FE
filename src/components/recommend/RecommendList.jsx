import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RecommendList = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API 요청을 통해 사서추천도서 데이터 가져오기
    axios
      .get("http://localhost:8080/user/recommendList")
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recommend:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StyledWord>
        <h1>사서 추천 도서</h1>
        <hr />
        <br />
      </StyledWord>
      <ul>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <h2>{recommendation.title}</h2>
            <p>{recommendation.author}</p>
            <p>{recommendation.description}</p>
            <p>ISBN: {recommendation.isbn}</p>
            {/* 추가 필드가 있다면 여기에서 표시 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendList;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;
