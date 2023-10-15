import React from "react";
import styled from "styled-components";
import { BasicTemp } from "./element/BookTemplate";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";

const MainNewBook = () => {
  const navigate = useNavigate();

  const goToNewBook = () => {
    navigate("/book");
  };

  return (
    <Container>
      <TitleSection>
        <Line />
        <Title>
          따끈따끈 방금 들어온
          <br />
          책향기 신간 도서
        </Title>
        <MoreButton onClick={goToNewBook} />
      </TitleSection>
      <BookSection>
        <BasicTemp img="" title="title1" author="author1" bookNo="1" />
        <BasicTemp img="" title="title2" author="author2" bookNo="2" />
        <BasicTemp img="" title="title3" author="author3" bookNo="3" />
      </BookSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 152px;
`;

const TitleSection = styled.div`
  width: fit-content;
`;

const Title = styled.div`
  margin: 40px 0;
  font-size: 40px;
  font-weight: 800;
`;

const BookSection = styled.div`
  width: fit-content;
  display: flex;
  gap: 48px;
`;

const Line = styled.div`
  width: 100px;
  height: 3px;
  background: #000;
`;

export default MainNewBook;
