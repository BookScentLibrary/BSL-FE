import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../asset/icons/smallarrow.svg";
import BookTemplate from "./element/BookTemplate";

const MainNewBook = () => {
  return (
    <Container>
      <TitleSection>
        <Line />
        <Title>
          따끈따끈 방금 들어온
          <br />
          책향기 신간 도서
        </Title>
        <More>
          더보기
          <Arrow fill="#B8B8BD" />
        </More>
      </TitleSection>
      <BookSection>
        <BookTemplate img="" title="title1" content="content1"/>
        <BookTemplate img="" title="title2" content="content2"/>
        <BookTemplate img="" title="title3" content="content3"/>
      </BookSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
`

const More = styled.div`
  margin: 40px 0;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100px;
  height: 3px;
  background: #000;
`;

export default MainNewBook;
