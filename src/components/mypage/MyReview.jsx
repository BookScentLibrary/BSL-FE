import React from "react";
import Flex from "../shared/elements/Flex";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router";

const reviews = [
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
  {
    title: "리뷰",
    createdAt: "2023.10.16",
    rev_postId: 1,
  },
];

const MyReview = () => {
  const navigate = useNavigate();

  const goToReview = (postId) => {
    navigate(`/news/reviewDetail/${postId}`);
  };

  return (
    <ReviewSection>
      <Flex sb center>
        <p className="mypage_harp__title">최근 작성 리뷰</p>
        <MoreButton />
      </Flex>
      <Line />
      {reviews &&
        reviews.map((cur, i) => {
          return (
            <Title
              onClick={() => {
                goToReview(cur.rev_postId);
              }}
            >
              <p className="title">리뷰제목[책제목]</p>
              <p>2023.09.10</p>
            </Title>
          );
        })}
    </ReviewSection>
  );
};
const ReviewSection = styled.div`
  box-sizing: border-box;
  padding: 28px 40px;
  width: 812px;
  height: 540px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > div > .mypage_harp__title {
    font-size: 24px;
    margin-bottom: 36px;
  }
`;

const Line = styled.hr`
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  border-top: 1px solid #000;
`;

const Title = styled.div`
  box-sizing: border-box;
  padding: 0 4px 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #000;
  & > .title {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.darkgray};
    }
  }
`;
export default MyReview;
