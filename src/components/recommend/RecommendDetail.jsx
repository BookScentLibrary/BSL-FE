import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../shared/elements/Button";
import { useParams, Link, useNavigate } from "react-router-dom";

const RecommendDetail = () => {
  // URL 매개변수로부터 리뷰 ID 가져오기
  const { recPostId } = useParams();

  // 추천 도서 게시물 데이터를 저장할 상태 변수
  const [recommend, setRecommend] = useState({});
  const [recommendList, setRecommendList] = useState([]);
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  // 추천 도서 게시물 데이터를 백엔드 API로부터 가져오는 함수
  const getRecommend = async () => {
    try {
      console.log("rev_postId:", recPostId); // rev_postId 값 확인
      const response = await axios.get(
        `http://localhost:8080/user/recommendDetail/?recPostId=${recPostId}`
      );

      setRecommend(response.data.data); // 가져온 추천 도서 게시물 데이터 저장
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching review detail:", error);
    }
  };

  const getRecommendList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/recommendList"
      );
      setRecommendList(response.data.data);
    } catch (error) {
      console.error("Error fetching recommend list:", error);
    }
  };

  // 날짜 포맷 함수
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 오전/오후 표시를 사용하지 않도록 설정
    };
    return new Date(date).toLocaleDateString("ko-KR", options);
  };

  useEffect(() => {
    getRecommend(); // 컴포넌트가 마운트될 때 추천 도서 게시물 데이터를 가져옴
    getRecommendList();
  }, [recPostId]); // rev_postId가 변경될 때마다 다시 가져옴

  const findCurrentRecommendIndex = () => {
    return recommendList.findIndex(
      (rec) => rec.recPostId === parseInt(recPostId)
    );
  };

  const currentRecommendIndex = findCurrentRecommendIndex();
  const prevRecommendIndex = currentRecommendIndex - 1;
  const nextRecommendIndex = currentRecommendIndex + 1;

  const goToRecommend = (index) => {
    if (index >= 0 && index < recommendList.length) {
      const nextRecPostId = recommendList[index].recPostId;
      navigate(`/user/recommendDetail/${nextRecPostId}`);
    }
  };

  return (
    <>
      <StyledWord>
        <h1>사서 추천 도서</h1>
        <hr />
        <br />
      </StyledWord>
      <div style={{ background: "#f0f0f0", padding: "10px" }}>
        <h3>{recommend.postTitle}</h3>
        <p style={{ color: "gray" }}>{formatDate(recommend.createdAt)}</p>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Image src={recommend.bookImageURL} />
        </div>
        <div style={{ flex: 2 }}>
          <h2>{recommend.bookname}</h2>
          <p>저자 　{recommend.author}</p>
          <p>발행사 　{recommend.publisher}</p>
          <p>발행년도 　{recommend.publicationYear}</p>
          <br />
          <div style={{ borderBottom: "1px solid #ccc" }}></div>
          <br />
          <p>{recommend.content}</p>
        </div>
      </div>
      <br />
      <div>
        <hr />
        {prevRecommendIndex >= 0 ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToRecommend(prevRecommendIndex)}
          >
            ∧ 　　이전 글 　　 {recommendList[prevRecommendIndex].postTitle}
          </ButtonStyle>
        ) : (
          <p>이전글이 없습니다</p>
        )}
        <hr />
        {nextRecommendIndex < recommendList.length ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToRecommend(nextRecommendIndex)}
          >
            ∨ 　　다음 글 　　 {recommendList[nextRecommendIndex].postTitle}
          </ButtonStyle>
        ) : (
          <p>다음글이 없습니다</p>
        )}
        <hr />
      </div>
    </>
  );
};

export default RecommendDetail;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
`;

const ButtonStyle = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  text-align: center;
`;
