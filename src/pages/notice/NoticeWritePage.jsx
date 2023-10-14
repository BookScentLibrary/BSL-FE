import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NoticeWritePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    postTitle: "",
    content: "",
    selectedFile: null,
  });
  const handleFileChange = (e) => {
    setFormData({ ...formData, selectedFile: e.target.files[0] });
  };

  const handleNoticeSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("file", formData.selectedFile);
    formDataToSend.append("userId", formData.userId);
    formDataToSend.append("postTitle", formData.postTitle);
    formDataToSend.append("content", formData.content);

    try {
      const response = await axios.post(
        "http://localhost:8080/news/noticeWrite",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        // 성공한 경우의 처리
        console.log("글쓰기가 완료되었습니다.");
        navigate("/news/noticeList");
      } else {
        // 실패한 경우의 처리
        console.error("글쓰기 실패");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  // const handleNoticeSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", postImgURL); // 이미지 파일을 FormData에 추가

  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data", // Content-Type을 multipart/form-data로 설정
  //       },
  //     };
  //     formData.append("image", postImgURL);
  //     formData.append("postTitle", postTitle);
  //     formData.append("content", content);
  //     formData.append("userId", userId);

  //     const response = await axios.post(
  //       "http://localhost:8080/news/noticeWrite",
  //       formData,
  //       config
  //     );
  //     if (response.status === 201) {
  //       navigate("/news/noticeList");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting notice:", error);
  //   }
  // };

  return (
    <div>
      <h2>공지사항 작성</h2>
      <form onSubmit={handleNoticeSubmit}>
        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={formData.userId}
          onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
        />
        <br />
        <label htmlFor="postTitle">제목</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={formData.postTitle}
          onChange={(e) =>
            setFormData({ ...formData, postTitle: e.target.value })
          }
        />
        <div>
          <label htmlFor="inputFile">
            <strong>첨부 파일</strong>
          </label>
          <div>
            <div id="inputFile">
              <input
                name="file"
                type="file"
                id="customFile"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <textarea
          name="content"
          id="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <button type="submit">공지사항 등록</button>
      </form>
    </div>
  );
};

export default NoticeWritePage;
