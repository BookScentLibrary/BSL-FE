import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Permit from "../../components/shared/comp/Permit";

const NoticeEditPage = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };
  const { not_postId } = useParams();
  const navigate = useNavigate();

  // 리뷰 정보를 가져오기 위한 상태
  const [notice, setNotice] = useState({});
  const [loading, setLoading] = useState(true);

  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    postTitle: "",
    //createdAt: "",
    content: "",
    userId: "",
  });

  // useEffect를 사용하여 리뷰 정보 가져오기
  useEffect(() => {
    const fetchnotice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/news/noticeDetail/${not_postId}`
        );
        setNotice(response.data);
        setLoading(false);

        // 리뷰 정보를 가져온 후, 폼 데이터 초기값 설정
        setFormData({
          userId: response.data.userId,
          not_postId: response.data.not_postId,
          postTitle: response.data.postTitle,
          content: response.data.content,
        });
      } catch (error) {
        console.error("Error fetching notice:", error);
      }
    };

    fetchnotice();
  }, [not_postId]);

  // 폼 입력값이 변경될 때마다 상태 업데이트
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 데이터를 사용하여 리뷰 수정
  const handleUpdate = async () => {
    try {
      // 리뷰 수정 로직 구현
      const updatednotice = {
        userId: formData.userId,
        not_postId: formData.not_postId,
        postTitle: formData.postTitle,
        content: formData.content,
      };

      const response = await axios.put(
        `http://localhost:8080/news/noticeEdit/${not_postId}`,
        updatednotice
      );

      if (response.status === 200) {
        console.log(response.data);
        // 수정이 성공하면 수정된 리뷰 상세 페이지로 이동
        window.alert("공지사항이 수정되었습니다.");
        navigate(`/news/noticeDetail/${not_postId}`);
      } else {
        console.error("Error updating notice:", response.data);
      }
    } catch (error) {
      console.error("Error updating notice:", error);
    }
  };

  // 리뷰 정보가 로딩 중일 때 보여줄 내용
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Permit>
      <div>
        <h2>리뷰 수정</h2>
        <hr />

        <form>
          <div>
            <label htmlFor="postTitle">제목:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={formData.postTitle}
              onChange={handleFormChange}
            />
            {/* <p>{formatDate(notice.createdAt)}</p> */}
          </div>
          <div>
            <label htmlFor="content">내용:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleFormChange}
            />
          </div>
        </form>

        {/* 수정 버튼을 누르면 handleUpdate 함수 호출 */}
        <button onClick={handleUpdate}>리뷰 등록</button>
        <Link to={`/news/noticeDetail/${not_postId}`}>
          <button>취소</button>
        </Link>
      </div>
    </Permit>
  );
};

export default NoticeEditPage;
