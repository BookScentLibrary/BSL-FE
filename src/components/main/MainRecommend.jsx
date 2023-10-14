import React from "react";
import { RecommendTemp } from "./element/BookTemplate";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
const BESTSELLER = [
  {
    title: "책제목제목제목",
    author: "작가작가",
    content: "책을 추천하는 내용 책을 추천하는 내용",
  },
  {
    title: "책제목제목제목",
    author: "작가작가",
    content: "책을 추천하는 내용 책을 추천하는 내용",
  },
  {
    title: "책제목제목제목",
    author: "작가작가",
    content: "책을 추천하는 내용 책을 추천하는 내용",
  },
];
const MainRecommend = () => {
  const navigate = useNavigate();

  const goToRecommend = () => {
    navigate("/book/recommendList");
  }

  return (
    <Container>
      <Title>
        사서 추천 도서
        <MoreButton onClick={goToRecommend}/>
      </Title>
      <FlexContainer>
        {BESTSELLER.map((cur, idx) => {
          return (
            <RecommendTemp
              key={idx}
              title={cur.title}
              author={cur.author}
              content={cur.content}
            />
          );
        })}
      </FlexContainer>
    </Container>
  );
};
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;

`;

const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const Container = styled.div`
  width: 100%;
`;

export default MainRecommend;
