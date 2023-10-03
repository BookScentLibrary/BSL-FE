import React from "react";
import BookDetailTemplate from "../../components/book/detail/BookDetailTemplate";

const BookDetail = (props) => {
  return (
    <BookDetailTemplate setPage={props.setPage} page={props.page} />
  );
};

export default BookDetail;
