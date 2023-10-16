import React from "react";
import { RecommendTemp } from "./element/BookTemplate";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainRecommendAPI } from "../../core/redux/mainSlice";

const MainRecommend = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recommendList = useSelector((state) => state.main.recommend);

  const goToRecommend = () => {
    navigate("/user/recommendList");
  };

  React.useEffect(() => {
    dispatch(mainRecommendAPI());
  }, []);

  return (
    <Container>
      <Title>
        사서 추천 도서
        <MoreButton onClick={goToRecommend} />
      </Title>
      <FlexContainer>
        {recommendList.map((cur, idx) => {
          return (
            <RecommendTemp
              key={idx}
              title={cur.bookname}
              author={cur.author}
              content={cur.content}
              postId={cur.rec_postId}
              img={cur.bookImageUrl}
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
