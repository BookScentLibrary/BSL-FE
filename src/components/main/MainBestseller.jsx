import React from "react";
import { BestTemp } from "./element/BookTemplate";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";

const BESTSELLER = [
  {
    rank: 1,
    bookNo: 1,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 2,
    bookNo: 2,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 3,
    bookNo: 3,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 4,
    bookNo: 4,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 5,
    bookNo: 5,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 6,
    bookNo: 6,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 7,
    bookNo: 7,
    title: "책제목제목제목",
    author: "작가작가",
  },
  {
    rank: 8,
    bookNo: 8,
    title: "책제목제목제목",
    author: "작가작가",
  },
];

const MainBestseller = () => {
  const navigate = useNavigate();

  const goToBestseller = () => {
    navigate("/book");
  }

  return (
    <Container>
      <Title>
        인기 대출 도서
        <MoreButton onClick={goToBestseller}/>
      </Title>
      <GridContainer>
        {BESTSELLER.map((cur, idx) => {
          return (
            <BestTemp
              key={idx}
              rank={cur.rank}
              title={cur.title}
              author={cur.author}
              bookNo={cur.bookNo}
            />
          );
        })}
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 120px 0;
`;
const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
`;
export default MainBestseller;
