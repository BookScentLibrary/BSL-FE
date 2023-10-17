import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getReviewAllAPI } from "../../core/redux/mypageSlice";

const MyPageReview = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.mypage.myreview);

  React.useEffect(() => {
    dispatch(getReviewAllAPI());
  }, []);

  return (
    <Container>
      <Title>리뷰 내역</Title>
      {reviews && reviews.length > 0 ? (
        reviews.map((cur, i) => {
          return (
            <Content>
              <p className="mypage_review__title">{cur.postTitle}</p>
              <p className="mypage_review__createdAt">{cur.createdAt}</p>
            </Content>
          );
        })
      ) : (
        <NotData>아직 작성된 리뷰가 없습니다.</NotData>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 73px 120px 120px 120px;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > .bookcart_buttons {
    position: absolute;
    right: 120px;
    display: flex;
    gap: 24px;
    margin: 24px 0;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #000;
`;

const NotData = styled.div`
  width: fit-content;
  margin: 120px auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default MyPageReview;
