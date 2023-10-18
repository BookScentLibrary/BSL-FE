import React from "react";
import styled from "styled-components";
import { BasicTemp } from "./element/BookTemplate";
import MoreButton from "../shared/elements/MoreButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainNewBookAPI } from "../../core/redux/mainSlice";

const MainNewBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const books = useSelector((state) => state.main.newbook);

  const goToNewBook = () => {
    navigate("/book/newbook");
  };

  React.useEffect(() => {
    dispatch(mainNewBookAPI());
  }, []);

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
        {books &&
          books.map((cur, idx) => {
            return (
              <BasicTemp
                key={cur.bookNo}
                img={cur.bookImageURL}
                title={cur.bookname}
                author={cur.author}
                bookNo={cur.bookNo}
              />
            );
          })}
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
