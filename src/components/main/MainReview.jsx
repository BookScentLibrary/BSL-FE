import React from "react";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainReviewAPI } from "../../core/redux/mainSlice";

const MainReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.main.review);

  const goToReview = () => {
    navigate("/news/reviewList");
  };

  const goToReviewDetail = (postId) => {
    navigate(`/news/reviewDetail/${postId}`);
  };

  React.useEffect(() => {
    dispatch(mainReviewAPI());
  }, []);

  return (
    <Container>
      <Title>
        최근 작성된 리뷰
        <MoreButton onClick={goToReview} />
      </Title>
      {reviews ? (
        reviews.map((cur, idx) => {
          return (
            <Content key={idx}>
              <p
                className="review_title"
                onClick={() => {
                  goToReviewDetail(cur.rev_postId);
                }}
              >
                {cur.postTitle} [{cur.bookname}]
              </p>
              <div>
                <p>{cur.nickname}</p>
                <p>{cur.createdAt}</p>
              </div>
            </Content>
          );
        })
      ) : (
        <NotData>조회된 리뷰가 없습니다.</NotData>
      )}
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

  & > .review_title {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.darkgray};
    }
  }
`;

const NotData = styled.div`
  margin: 120px auto;
  width: fit-content;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default MainReview;
