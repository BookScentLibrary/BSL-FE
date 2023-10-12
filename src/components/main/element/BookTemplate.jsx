import React from "react";
import styled from "styled-components";

const BookTemplate = (props) => {
  const { img, title, content } = props;
  return (
    <Basic>
      <Image />
      <p className="book_title">{title}</p>
      <p className="book_content">{content}</p>
    </Basic>
  );
};

const Basic = styled.div`
  width: 204px;
  & > .book_title {
    font-weight: 700;
    margin-top: 24px;
  }

  & > .book_content {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 8px;
  }
`;

const Image = styled.div`
  width: 204px;
  height: 300px;
  border: ${({theme}) => `1px solid ${theme.colors.gray200}`};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.gray50};
`;

export default BookTemplate;
