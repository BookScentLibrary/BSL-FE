import React from "react";
import styled from "styled-components";

const BookInfoData = ({ book }) => {
  return (
    <BookInfoText>
      <p>{book.bookname}</p>
      <FlexContainer>
        <div className="columns">
          <p>저자사항</p>
          <p>발행정보</p>
          <p>형태사항</p>
          <p>주제분류</p>
          <p>isbn</p>
        </div>
        <div className="data">
          <p>{book.author}</p>
          <p>
            {book.publisher}, {book.publicationYear}
          </p>
          <p>{book.format}</p>
          <p>{book.className}</p>
          <p>{book.isbn}</p>
        </div>
        
      </FlexContainer>
    </BookInfoText>
  );
};

const BookInfoText = styled.div`
  & > p {
    font-size: 20px;
    font-weight: 600;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 32px;

  margin-top: 28px;

  & > div {
    display: grid;
    gap: 12px;
  }

  & > .columns {
    font-weight: 600;
  }

  & > .data {
    font-weight: 500;
  }
`;

export default BookInfoData;
