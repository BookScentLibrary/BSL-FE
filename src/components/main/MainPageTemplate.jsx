import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainPageTemplate = () => {
  const book = useSelector((state) => state.book.book);

  return (
    <React.Fragment>
      <h1>메인페이지</h1>
      {book ? (
        <div style={{ display: "flex" }}>
          <Image src={book.bookImageURL} />
          <div>
            <b>{book.bookname}</b>
            <p>{book.author}</p>
            <p>
              {book.publicationYear} | {book.publisher}
            </p>
            <p>{book.classname}</p>
            <p>{book.isbn}</p>
            <p>{book.description}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
`;

export default MainPageTemplate;
