import React from "react";
import styled from "styled-components";
import Radio from "../../shared/elements/Radio";
import Button from "../../shared/elements/Button";
import Flex from "../../shared/elements/Flex";
import { useNavigate } from "react-router-dom";

const Book = (props) => {
  const { book } = props;
  const navigate = useNavigate();

  // const [check, setCheck] = React.useState(0);
  // const checkHandler = (checked) => {
  //   setCheck(checked);
  // };

  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);
  };

  return (
    <Container>
      {/* <Radio check={check} checkhandler={checkHandler} /> */}
      <BookData>
        <Image src={book.bookImageURL} />
        <BookInfoText>
          <Flex center>
            <p>{book.bookname}</p>
          </Flex>
          <FlexContainer>
            <div className="columns">
              <p>저자사항</p>
              <p>발행처</p>
              <p>청구기호</p>
              <p>자료실</p>
            </div>
            <div className="data">
              <p>
                {book.author &&
                  book.author.split(";").map((cur, idx) => {
                    if (book.author.split(";").length - 1 === idx) {
                      return <span key={idx}>{cur}</span>;
                    }
                    return <span key={idx}>{cur} · </span>;
                  })}
              </p>
              <p>
                {book.publisher} | {book.publicationYear}
              </p>
              <p>{book.classNo ? book.classNo : "-"}</p>
              <p>{book.shelfArea}</p>
            </div>
            <div className="buttons">
              <Button type="middle" onClick={() => goToDetail(book.bookNo)}>
                책 정보 확인하기
              </Button>
            </div>
          </FlexContainer>
        </BookInfoText>
      </BookData>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 0;
  margin: auto;
  display: flex;
  width: 990px;
  gap: 24px;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
`;

const BookData = styled.div`
  display: flex;
  gap: 40px;
`;

const BookInfoText = styled.div`
  flex-shrink: 0;
  width: 100%;

  & > div > p {
    font-size: 20px;
    font-weight: 700;
    width: 828px;
    height: 48px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray100}`};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  margin-top: 28px;
  width: 830px;

  & > div {
    display: grid;
    gap: 8px;
    font-size: 15px;
  }

  & > .columns {
    font-weight: 600;
  }

  & > .data {
    font-weight: 500;
  }

  & > .buttons {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Image = styled.div`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.gray200};
  width: 120px;
  height: 176px;
  border-radius: 8px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;
export default Book;
