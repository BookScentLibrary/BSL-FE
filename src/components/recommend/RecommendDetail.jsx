import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../shared/elements/Button";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const RecommendDetail = (props) => {
  // URL 매개변수로부터 리뷰 ID 가져오기
  const { recPostId } = useParams();
  const location = useLocation().pathname.split("/")[3];
  console.log(location);

  // 추천 도서 게시물 데이터를 저장할 상태 변수
  const [recommend, setRecommend] = useState({});
  const [recommendList, setRecommendList] = useState([]);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  // 서버에서 가져온 게시물 작성자의 userId
  const [authorUserId, setAuthorUserId] = useState(null);

  const [bookNo, setBookNo] = useState("");

  // 추천 도서 게시물 데이터를 백엔드 API로부터 가져오는 함수
  const getRecommend = async () => {
    try {
      console.log("recPostId:", recPostId); // recPostId 값 확인
      const response = await axios.get(
        `http://localhost:8080/user/recommendDetail/?recPostId=${recPostId}`
      );

      setRecommend(response.data.data); // 가져온 추천 도서 게시물 데이터 저장
      setAuthorUserId(response.data.data.userId);
      setBookNo(response.data.data.bookNo);
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
    props.setRecPostId(recPostId);
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

  const deleteRecommend = async (recPostId) => {
    try {
      // 서버에서 해당 게시물 삭제 요청을 보냅니다.
      const response = await axios.delete(
        `http://localhost:8080/admin/recommendDelete/${recPostId}`
      );
      if (response.status === 200) {
        window.alert("게시물이 삭제되었습니다.");
        // 삭제가 성공하면 recommendList 페이지로 이동합니다.
        navigate("/user/recommendList");
      }
    } catch (error) {
      console.error("Error deleting recommend:", error);
    }
  };

  return (
    <Container>
      <StyledWord>
        <h1>사서 추천 도서</h1>
        <BoldSolidHr />
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
          padding: "30px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Image src={recommend.bookImageURL} />
        </div>
        <div style={{ flex: 2 }}>
          <h2>{recommend.bookname}</h2>
          <p>
            <span
              style={{
                fontWeight: "800",
                marginLeft: "5px",
                marginRight: "62px",
              }}
            >
              저자
            </span>
            {recommend.author}
          </p>
          <p>
            <span
              style={{
                fontWeight: "800",
                marginLeft: "5px",
                marginRight: "48px",
              }}
            >
              발행사
            </span>
            {recommend.publisher}
          </p>
          <p>
            <span
              style={{
                fontWeight: "800",
                marginLeft: "5px",
                marginRight: "35px",
              }}
            >
              발행년도
            </span>
            {recommend.publicationYear}
          </p>
          <p>
            <span
              style={{
                fontWeight: "800",
                marginLeft: "5px",
                marginRight: "36px",
              }}
            >
              청구기호
            </span>
            {recommend.callNum}
          </p>
          <p>
            <span
              style={{
                fontWeight: "800",
                marginLeft: "5px",
                marginRight: "50px",
              }}
            >
              자료실
            </span>
            {recommend.shelfarea}
          </p>
          <br />
          <div style={{ borderBottom: "1px solid #ccc" }}></div>
          <br />
          <p
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {recommend.content}
          </p>
          <Button
            type="middle"
            onClick={() => {
              navigate(`/book/detail/${bookNo}`);
            }}
          >
            책 정보 확인하기
          </Button>
        </div>
      </div>
      <br />
      {authorUserId === userId && (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="small"
            onClick={() => {
              navigate(`/admin/recommendUpdate/${recommend.recPostId}`);
            }}
          >
            수정
          </Button>
          <Button
            type="small"
            color="gray"
            onClick={() => {
              if (window.confirm("삭제하시겠습니까?")) {
                deleteRecommend(recommend.recPostId);
              }
            }}
          >
            삭제
          </Button>
        </div>
      )}
      <div>
        <BoldSolidHr />
        {prevRecommendIndex >= 0 ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToRecommend(prevRecommendIndex)}
          >
            <span style={{ color: "gray", margin: "0 5px 0 0" }}>
              ∧　　이전 글
            </span>
            <CenteredText>
              {recommendList[prevRecommendIndex].postTitle}
            </CenteredText>
          </ButtonStyle>
        ) : (
          <NoneIndex>
            <span
              style={{ color: "gray", margin: "0 5px 0 0", fontSize: "13px" }}
            >
              ∧　　이전 글
            </span>
            <CenteredText>이전글이 없습니다</CenteredText>
          </NoneIndex>
        )}
        <hr />
        {nextRecommendIndex < recommendList.length ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToRecommend(nextRecommendIndex)}
          >
            <span style={{ color: "gray", margin: "0 5px 0 0" }}>
              ∨　　다음 글
            </span>
            <CenteredText>
              {recommendList[nextRecommendIndex].postTitle}
            </CenteredText>
          </ButtonStyle>
        ) : (
          <NoneIndex>
            <span
              style={{ color: "gray", margin: "0 5px 0 0", fontSize: "13px" }}
            >
              ∨　　다음 글
            </span>
            <CenteredText>다음글이 없습니다</CenteredText>
          </NoneIndex>
        )}
        <BoldSolidHr />
      </div>
    </Container>
  );
};

export default RecommendDetail;

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const Image = styled.div`
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
`;

const ButtonStyle = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const CenteredText = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
`;

const NoneIndex = styled.div`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: normal;
  font-size: 14px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 12px 0;
  vertical-align: middle;
`;

const BoldSolidHr = styled.hr`
  border: 1px solid black;
`;
