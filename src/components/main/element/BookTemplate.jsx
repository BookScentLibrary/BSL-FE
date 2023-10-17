import React from "react";
import * as S from "./BookTemplate.style";
import { useNavigate } from "react-router-dom";

const BasicTemp = (props) => {
  const { img, title, author, bookNo } = props;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/book/detail/${bookNo}`);
  };

  return (
    <S.Basic onClick={goToDetail}>
      <S.Image src={img} />
      <p className="book_temp__title">{title}</p>
      <p className="book_temp__author">{author}</p>
    </S.Basic>
  );
};

const BestTemp = (props) => {
  const { img, rank, title, author, bookNo } = props;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/book/detail/${bookNo}`);
  };
  return (
    <S.Best onClick={goToDetail}>
      <S.Image width="108px" height="160px" src={img} />
      <S.Info rank={rank}>
        <p className="rank">{rank}</p>
        <div>
          <p className="book_temp__title">{title}</p>
          <p className="book_temp__author">{author}</p>
        </div>
      </S.Info>
    </S.Best>
  );
};

const RecommendTemp = (props) => {
  const { img, title, author, content, postId } = props;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/user/recommendDetail/${postId}`);
  };
  return (
    <S.Recommend onClick={goToDetail}>
      <div className="book_temp__contentWrapper">
        <S.Image width="148px" height="220px" src={img} />
        <div className="content">
          <p className="book_temp__content">{content}</p>
        </div>
      </div>
      <div>
        <p className="book_temp__title">{title}</p>
        <p className="book_temp__author">{author}</p>
      </div>
    </S.Recommend>
  );
};

export { BasicTemp, BestTemp, RecommendTemp };
