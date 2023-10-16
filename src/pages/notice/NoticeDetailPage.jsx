import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "./../../components/shared/elements/Button";

const NoticeDetailPage = () => {
  // URL 매개변수로부터 리뷰 ID 가져오기
  const { not_postId } = useParams();

  // 공지사항 데이터를 저장할 상태 변수
  const [notice, setNotice] = useState({});
  const [noticeList, setNoticeList] = useState([]);
  //const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 리뷰 데이터를 백엔드 API로부터 가져오는 함수
  const fetchNotice = async () => {
    try {
      console.log("not_postId:", not_postId); // not_postId 값 확인
      const response = await axios.get(
        `http://localhost:8080/news/noticeDetail/${not_postId}`
      );

      setNotice(response.data); // 가져온 리뷰 데이터 저장
      console.log(response.data);
      // setLoading(false); // 로딩 상태 해제
    } catch (error) {
      console.error("Error fetching notice detail:", error);
    }
  };

  const getNoticeList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/news/noticeList");
      setNoticeList(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };

  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };

  useEffect(() => {
    fetchNotice(); // 컴포넌트가 마운트될 때 공지사항 데이터를 가져옴
    getNoticeList();
  }, [not_postId]); // not_postId가 변경될 때마다 다시 가져옴

  //   if (loading) {
  //     return <p>Loading...</p>; // 데이터 로딩 중에는 로딩 메시지를 표시
  //   }

  const findCurrentNoticeIndex = () => {
    return noticeList.findIndex(
      (rec) => rec.not_postId === parseInt(not_postId)
    );
  };

  const currentNoticeIndex = findCurrentNoticeIndex();
  const prevNoticeIndex = currentNoticeIndex - 1;
  const nextNoticeIndex = currentNoticeIndex + 1;

  const goToNotice = (index) => {
    if (index >= 0 && index < noticeList.length) {
      const nextNot_postId = noticeList[index].not_postId;
      navigate(`/news/noticeDetail/${nextNot_postId}`);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/news/noticeDetail/${not_postId}`
      );

      if (response.status === 204) {
        window.alert("게시물이 삭제되었습니다.");
        // 삭제가 성공하면 리뷰 목록 페이지로 이동
        navigate("/news/noticeList");
      }
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div>
      <StyledWord>
        <h1>공지사항</h1>
        <hr />
        <br />
      </StyledWord>
      <h3>{notice.postTitle}</h3>
      <p>{formatDate(notice.createdAt)}</p>
      <p>
        <Link to={`/news/noticeEdit/${notice.not_postId}`}>
          <button>수정</button>
        </Link>
        <button onClick={handleDelete}>삭제</button>
      </p>
      <div>
        <Link to={`/news/noticeEdit/${notice.not_postId}`}>
          <Button type="middle">수정</Button>
        </Link>
        <Button
          type="middle"
          color="gray"
          onClick={() => {
            if (window.confirm("삭제하시겠습니까?")) {
              handleDelete(notice.not_postId);
            }
          }}
        >
          삭제
        </Button>
      </div>

      <p>{notice.content}</p>
      <div>
        <Image src={notice.postImgURL} />
      </div>
      <div>
        <hr />
        {prevNoticeIndex >= 0 ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToNotice(prevNoticeIndex)}
          >
            ∧ 　　이전 글 　　 {noticeList[prevNoticeIndex].postTitle}
          </ButtonStyle>
        ) : (
          <p>이전글이 없습니다</p>
        )}
        <hr />
        {nextNoticeIndex < noticeList.length ? (
          <ButtonStyle
            type="middle"
            onClick={() => goToNotice(nextNoticeIndex)}
          >
            ∨ 　　다음 글 　　 {noticeList[nextNoticeIndex].postTitle}
          </ButtonStyle>
        ) : (
          <p>다음글이 없습니다</p>
        )}
        <hr />
      </div>
    </div>
  );
};

const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
`;

const ButtonStyle = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export default NoticeDetailPage;
