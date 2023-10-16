import React from "react";
import { BestTemp } from "./element/BookTemplate";
import styled from "styled-components";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainBestsellerAPI } from "../../core/redux/mainSlice";

const MainBestseller = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bestsellers = useSelector((state) => state.main.bestseller);

  const goToBestseller = () => {
    navigate("/book");
  };

  React.useEffect(() => {
    dispatch(mainBestsellerAPI());
  }, []);

  return (
    <Container>
      <Title>
        인기 대출 도서
        <MoreButton onClick={goToBestseller} />
      </Title>
      <GridContainer>
        {bestsellers &&
          bestsellers.map((cur, idx) => {
            return (
              <BestTemp
                key={idx}
                rank={idx+1}
                title={cur.bookname}
                author={cur.author}
                bookNo={cur.bookNo}
                img={cur.bookImageURL}
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
