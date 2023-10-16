import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Flower } from "../../asset/icons/flower.svg";
import Input from "../../components/shared/elements/Input";
import Button from "../../components/shared/elements/Button";
import { useDispatch } from "react-redux";
import SearchModal from "../../components/recommend/SearchModal";
import { BookReivewAPI } from "../../core/redux/bookSlice";

function ReviewWritePage() {
  const [postTitle, setPostTitle] = useState("");
  const [rate, setRate] = useState(1); // 초기 평점 설정
  const [content, setContent] = useState("");
 // const [isbn, setIsbn] = useState("");
  //const [userId, setUserId] = useState("");
  //const [nickname, setNickname] = useState("");
  // const [bookNo, setBookNo] = useState("");
  // const [bookImageURL, setBookImageURL] = useState("");
  // const [author, setAuthor] = useState("");
  // const [publisher, setPublisher] = useState("");
  // const [callNum, setCallNum] = useState("");
  // const [bookname, setBookname] = useState("");
  // const [shelfArea, setShelfArea] = useState("");
  

  const navigate = useNavigate(); // useNavigate 훅 사용

  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    console.log(book)
    setSelectedBook(book);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 팝업 열기/닫기 상태
  const handleSearch = () => {
    setIsModalOpen(true); // 검색 버튼을 클릭하면 모달 열기
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 팝업 닫기
  };

  //const [selectedStar, setSelectedStar] = useState(null);

  // const handleStarChange = (star) => {
  //   setSelectedStar(star);
  // };

  // const [rating, setRating] = useState(0);

  const handleStarClick = (newRate) => {
    setRate(newRate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

  
    const bookNo = selectedBook.bookNo;
    const isbn = selectedBook.isbn;
    console.log("이거슨북넘이다"+bookNo);
    console.log("isbn"+isbn);
    const data = {
      postTitle,
      rate,
      content,
      userId,
      bookNo, 
      isbn,   
    };
    console.log("userId"+userId);
    dispatch(BookReivewAPI(data));
    // try {
    //   // 리뷰 데이터를 서버에 전송
    //   const response = await axios.post(
    //     "http://localhost:8080/news/reviewWrite",
    //     {
    //       postTitle,
    //       rate,
    //       content,
    //       // author,
    //       // publisher,
    //       // callNum,
    //       // bookname,
    //       // shelfArea,
    //       userId,
    //       bookNo,
    //       // isbn,
    //       // bookImageURL,
    //     }
    //   );

    //   if (response.status === 201) {
    //     // 성공적으로 리뷰가 등록되면 리뷰 목록 페이지로 이동
    //     navigate("/news/reviewList");
    //   }
    // } catch (error) {
    //   console.error("Error submitting review:", error);
    // }
  };

  return (
    <div>
      <h2>리뷰 작성</h2>
      {/* <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label htmlFor="bookNo">책번호</label>
        <input
          id="bookNo"
          type="text"
          value={bookNo}
          onChange={(e) => setBookNo(e.target.value)}
        />
        <br /> */}
      {/* <label htmlFor="postTitle">제목</label>
        <input
          id="postTitle"
          type="text"
          placeholder="제목"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        /> */}
      <Input
        type="text"
        name="postTitle"
        value={postTitle}
        placeholder="제목을 여기에 작성"
        label="제목"
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <hr />
      <div>
        {!selectedBook && <Button onClick={handleSearch}>책 검색하기</Button>}
      </div>
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectBook={handleSelectBook}
      />

      <div>
        {selectedBook ? (
          <div>
            <Image src={selectedBook.bookImageURL} />
            <div>
              <h2>{selectedBook.bookname}</h2>
              <p>저자: {selectedBook.author}</p>
              <p>발행처: {selectedBook.publisher}</p>
              <p>청구기호: {selectedBook.callNum}</p>
              <p>자료실: {selectedBook.shelfArea}</p>
            </div>
            <Button onClick={handleSearch}>다시 검색하기</Button>
          </div>
        ) : null}
      </div>
      {/* <label htmlFor="bookImageURL">책이미지</label>
        <input
          name="bookImageURL"
          id="bookImageURL"
          type="text"
          value={bookImageURL}
          onChange={(e) => setBookImageURL(e.target.value)}
        />
        <br /> */}
      {/* <label htmlFor="bookname">책 이름</label>
        <input
          name="bookname"
          id="bookname"
          type="text"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
        />
        <br />
        <label htmlFor="author">저자</label>
        <input
          name="author"
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="publisher">발행처</label>
        <input
          name="publisher"
          id="publisher"
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <label htmlFor="callNum">청구기호</label>
        <input
          name="callNum"
          id="callNum"
          type="text"
          value={callNum}
          onChange={(e) => setCallNum(e.target.value)}
        />
        <br />
        <label htmlFor="shelfArea">자료실</label>
        <input
          name="shelfArea"
          id="shelfArea"
          type="text"
          value={shelfArea}
          onChange={(e) => setShelfArea(e.target.value)}
        /> */}

      <label htmlFor="rate">평점</label>
      <Container className="startRadio">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarBox
            key={star}
            className="startRadio__box"
            onClick={() => handleStarClick(star)}
          >
            <input
              type="radio"
              name="star"
              value={star}
              checked={rate === star}
            />
            <Flower
              className={`startRadio__img ${rate >= star ? "active" : ""}`}
            />
          </StarBox>
        ))}
        <span>{rate}점</span>
      </Container>
      <p> </p>
      <textarea
        placeholder="리뷰 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>리뷰 등록</button>
    </div>
  );
}

const Container = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 40px;
`;

const StarBox = styled.label`
  position: relative;
  z-index: 1;
  float: left;
  width: 16px; /* Reduce the width to make the icons smaller */
  height: 32px; /* Adjust the height accordingly */
  cursor: pointer;

  input {
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
  }

  .startRadio__img {
    display: block;
    position: absolute;
    right: 0;
    width: 15px; /* Adjust the width of the icons */
    height: 32px; /* Adjust the height of the icons */
    pointer-events: none;
  }

  .active {
    fill: #a1e092;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
`;

export default ReviewWritePage;
