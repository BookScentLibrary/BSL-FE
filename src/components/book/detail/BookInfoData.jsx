import React from "react";
import styled from "styled-components";

const BookInfoData = ({ book }) => {
  return (
    <BookInfoText>
      <p className="title">{book.bookname}</p>
      <FlexContainer>
        <div className="columns">
          <p>저자사항</p>
          <p>발행정보</p>
          <p>형태사항</p>
          <p>주제분류</p>
          <p>isbn</p>
        </div>
        <div className="data">
          <p className="author">
            {book.author &&
              book.author.map((cur, idx) => {
                if (book.author.length - 1 === idx) {
                  return <span key={idx}>{cur}</span>;
                }
                return <span key={idx}>{cur} | </span>;
              })}
          </p>
          <p>
            {book.publisher}, {book.publicationYear}
          </p>
          <p>{book.format ? book.format : "-"}</p>
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
    font-size: 15px;
  }

  & > .columns {
    font-weight: 600;
  }

  & > .data {
    font-weight: 500;
  }

  & > div > .author {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default BookInfoData;
