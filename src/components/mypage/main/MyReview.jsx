import React from "react";
import Flex from "../../shared/elements/Flex";
import styled from "styled-components";
import MoreButton from "../../shared/elements/MoreButton";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getReviewAPI } from "../../../core/redux/mypageSlice";

const MyReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.mypage.myreview);

  const goToReview = () => {
    navigate("/news/reviewList");
  };

  const goToReviewDetail = (postId) => {
    navigate(`/news/reviewDetail/${postId}`);
  };

  React.useEffect(() => {
    dispatch(getReviewAPI());
  }, [])

  return (
    <ReviewSection>
      <Flex sb center>
        <p className="mypage_harp__title">최근 작성 리뷰</p>
        <MoreButton onClick={goToReview} />
      </Flex>
      <Line />
      {reviews &&
        reviews.map((cur, i) => {
          return (
            <Title
              key={cur.rev_postId}
              onClick={() => {
                goToReviewDetail(cur.rev_postId);
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
