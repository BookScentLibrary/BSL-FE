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

  React.useEffect(() => {
    dispatch(mainReviewAPI());
  }, []);

  return (
    <Container>
      <Title>
        최근 작성된 리뷰
        <MoreButton onClick={goToReview} />
      </Title>
      {reviews &&
        reviews.map((cur, idx) => {
          return (
            <Content key={idx}>
              <p>
                {cur.postTitle} [{cur.bookname}]
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
