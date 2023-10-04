import React from "react";
import styled from "styled-components";

const StyledItemBoxDiv1 = styled.div`
  display:flex;
  border:1px solid #eee;
  background:#eee;
  height:20px;
  padding:10px;
  maring:20px;
`;

const StyledItemBoxDiv2 = styled.div`
  display:flex;
  justify-content:space-between;
`;

const ReviewDetailPage = () => {
  return (
    <>
      <h1>리뷰게시판</h1>
      <hr />
      <StyledItemBoxDiv1>
        <h2>리뷰제목</h2>
        <p>리뷰작성날짜</p>
        <p>별점</p>
      </StyledItemBoxDiv1>
      <p>
        작성자 이름
        <StyledItemBoxDiv2>
          <button>수정</button>
          <button>삭제</button>
        </StyledItemBoxDiv2>
      </p>
    </>
  );
};

export default ReviewDetailPage;
