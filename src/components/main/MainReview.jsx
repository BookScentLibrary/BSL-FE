import React from "react";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";

const REVIEW = [
  {
    title: "아! 너무 재밌다!",
    bookname: "센 강변의 작은 책방",
    nickname: "닉네임1",
    createdAt: "2023-08-25",
  },
  {
    title: "우와 정말 재미있어요",
    bookname: "메리골드 마음 세탁소",
    nickname: "닉네임2",
    createdAt: "2023-08-25",
  },
  {
    title: "리뷰 3",
    bookname: "책제목 3",
    nickname: "닉네임3",
    createdAt: "2023-08-25",
  },
  {
    title: "리뷰 4",
    bookname: "책제목 4",
    nickname: "닉네임4",
    createdAt: "2023-08-25",
  },
  {
    title: "리뷰 5",
    bookname: "책제목 5",
    nickname: "닉네임5",
    createdAt: "2023-08-25",
  },
  {
    title: "생각보다 꽤... 조금 더... 긴... 리뷰 제목... 좀 더 길어도 될까...",
    bookname: "생각보다 꽤... 조금 더... 긴... 책 제목...",
    nickname: "닉네임6",
    createdAt: "2023-08-25",
  },
  {
    title: "생각보다 꽤... 조금 더... 긴... 리뷰 제목... 좀 더 길어도 될까...",
    bookname: "생각보다 꽤... 조금 더... 긴... 책 제목...",
    nickname: "닉네임7",
    createdAt: "2023-08-25",
  },
  {
    title: "조금 긴 리뷰 제목",
    bookname: "조금 긴 책 제목",
    nickname: "조금긴닉네임",
    createdAt: "2023-08-25",
  },
];

const MainReview = () => {
  const navigate = useNavigate();

  const goToReview = () => {
    navigate("/news/reviewList")
  }

  return (
    <Container>
      <Title>
        최근 작성된 리뷰
        <MoreButton onClick={goToReview}/>
      </Title>
      {REVIEW.map((cur, idx) => {
        return (
          <Content key={idx}>
            <p>
              {cur.title} [{cur.bookname}]
            </p>
            <div>
              <p>{cur.nickname}</p>
              <p>{cur.createdAt}</p>
            </div>
          </Content>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 120px 0;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 40px;
    margin: 16px 0;
  }
`;

export default MainReview;
