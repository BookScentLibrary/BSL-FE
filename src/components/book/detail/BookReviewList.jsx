import React from "react";
import styled from "styled-components";
import FlowerRate from "./BookFlowerRate";
import { useNavigate } from "react-router-dom";

const BookReviewList = ({ review }) => {
  const navigate = useNavigate();
  const goToReviewDetail = () => {
    navigate("/reviewList");
    // navigate(`/review/detail/${review.rev_postId}`);
  };

  return (
    <Container onClick={goToReviewDetail}>
      <TitleSection>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <FlowerRate count={review.rate} />
        </div>
        <p className="review__title">{review.postTitle}</p>
        <p className="review__nickname">{review.nickname}</p>
      </TitleSection>
      <ContentSection>{review.content}</ContentSection>
    </Container>
  );
};

const Container = styled.div`
  float: right;
  width: 100%;
  max-width: 910px;
  margin: 16px 0;
  cursor: pointer;
`;
const TitleSection = styled.div`
  display: grid;
  grid-template-columns: 80px 660px 108px;
  gap: 28px;
  padding: 8px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  & > .review__nickname {
    text-align: right;
  }
`;
const ContentSection = styled.div`
  padding: 8px 0;
  margin: 0 108px;

  width: 660px;
  height: 32px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.darkgray};
`;

export default BookReviewList;
