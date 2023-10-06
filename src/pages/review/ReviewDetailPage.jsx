import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewDetailPage({ reviews }) {
  const { id } = useParams();
  const review = reviews.find((r) => r.id === parseInt(id, 10));

  if (!review) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>리뷰 게시판</h2>
      <h3>{review.postTitle}</h3>
      <p>{review.createdAt}</p>
      <p>{review.bookScore}</p>
      <p>{review.nickname}<button>수정</button>삭제<button></button></p>
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewDetailPage;
