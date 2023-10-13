import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/shared/elements/Input";
import Button from "../shared/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { searchBookAPI, BookRecommendAPI } from "../../core/redux/bookSlice";

const RecommendWrite = () => {
  const [postTitle, setPostTitle] = useState(""); //게시글 제목
  const [content, setContent] = useState(""); //게시글 내용
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book.book);
  const [searchTerm, setSearchTerm] = useState(""); // 도서 검색어를 입력할 상태
  const userId = "062f3d57e7ca46139f91af97409eea2c";
  const bookNo = "3";

  const handleSearch = () => {
    dispatch(searchBookAPI({ searchTerm: searchTerm })); // searchTerm을 통해 도서 검색 API 호출
  };

  // const handleSearch = async () => {
  //   const { title } = bookInfo;
  //   if (title) {
  //     try {
  //       // Book 정보를 가져오는 API 요청
  //       const response = await axios.get(`API_ENDPOINT_HERE/${title}`);
  //       const bookData = response.data; // API에서 반환된 데이터를 사용

  //       setBookInfo({
  //         ...bookInfo,
  //         title: bookData.title,
  //         author: bookData.author,
  //         publisher: bookData.publisher,
  //         callNumber: bookData.callNumber,
  //         library: bookData.library,
  //         image: bookData.image, // 이미지 업데이트
  //       });
  //     } catch (error) {
  //       console.error("Error fetching book data:", error);
  //     }
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "title") {
  //     setBookInfo({ ...bookInfo, [name]: value });
  //   } else {
  //     setContent(value);
  //   }
  // };

  const handleSubmit = () => {
    // if (postTitle === "" || content === "" || bookNo === "" || userId === "") {
    //   window.alert("모든 칸을 입력해주세요.");
    //   return;
    // } else {
    const data = {
      postTitle,
      content,
      bookNo,
      userId,
    };
    console.log(book.bookImageURL);
    console.log(book.bookname);
    console.log(book.author);
    console.log(book.callNum);
    dispatch(BookRecommendAPI(data));
  };
  // try {
  //   // POST 요청을 사용하여 서버에 데이터 전송
  //   await axios.post("http://localhost:8080/admin/createRecommend", {
  //     postTitle,
  //     content,
  //     userId,
  //     bookNo,
  //   });
  //   if (response.status === 200) {
  //     // 성공적으로 리뷰가 등록되면 리뷰 목록 페이지로 이동
  //     window.location.replace("/user/recommendList");
  //   }
  // } catch (error) {
  //   console.error("Error submitting book recommendation:", error);
  // }
  //};

  return (
    <>
      <Input
        type="text"
        name="postTitle"
        value={postTitle}
        placeholder="제목을 여기에 작성"
        label="제목"
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="도서 검색어"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색하기</button>
      </div>

      <div>
        {book && (
          <div>
            <img src={book.bookImageURL} alt="Book Cover" />
            <h2>{book.bookname}</h2>
            <p>저자: {book.author}</p>
            <p>발행처: {book.publisher}</p>
            <p>청구기호: {book.callNum}</p>
            <p>자료실: {book.shelfArea}</p>
            <button
              onClick={() => dispatch(searchBookAPI({ bookNo: book.bookNo }))}
            >
              다시 검색하기
            </button>
          </div>
        )}
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          placeholder="내용 입력"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>등록하기</button>
      </div>
    </>
  );
};

export default RecommendWrite;
