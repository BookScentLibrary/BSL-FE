import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";
import Button from "../../components/shared/elements/Button";
import SearchModal from "../../components/recommend/SearchModal";
import { ReactComponent as Flower } from "../../asset/icons/flower.svg";

const ReviewEditPage = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate.replace(/\.$/, ""); // 마지막 "." 제거
  };

  
  

  const { rev_postId } = useParams();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const userId = sessionStorage.getItem("userId");

  // 리뷰 정보를 가져오기 위한 상태
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    postTitle: "",
    createdAt: "",
    rate: "",
    nickname: "",
    content: "",
    bookNo: "",
    bookname: "",
    author: "",
    publisher: "",
    callNum: "",
    shelfArea: "",
    isbn: "",
    modifiedAt: "",
    userId: "",
  });

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 팝업 열기/닫기 상태

  const handleSearch = () => {
    setIsModalOpen(true); // 검색 버튼을 클릭하면 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 팝업 닫기
  };

  const handleStarClick = (newRate) => {
    setFormData({
      ...formData,
      rate: newRate,
    });
  };
  


  // useEffect를 사용하여 리뷰 정보 가져오기
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/news/reviewDetail/${rev_postId}`
        );
        console.log(response.data);
        setReview(response.data);
        setLoading(false);

        // 리뷰 정보를 가져온 후, 폼 데이터 초기값 설정
        setFormData({
          rev_postId: response.data.rev_postId,
          postTitle: response.data.postTitle,
          createdAt: response.data.createdAt,
          modifiedAt: response.data.modifiedAt,
          rate: response.data.rate,
          nickname: response.data.nickname,
          content: response.data.content,
          bookNo: response.data.bookNo,
          bookname: response.data.bookname,
          author: response.data.author,
          publisher: response.data.publisher,
          callNum: response.data.callNum,
          shelfArea: response.data.shelfArea,
          isbn: response.data.isbn,
          userId: response.data.userId,
        });

        setSelectedBook({
          bookNo: response.data.bookNo,
          bookImageURL: response.data.bookImageURL,
          bookname: response.data.bookname,
          author: response.data.author,
          publisher: response.data.publisher,
          callNum: response.data.callNum,
          shelfarea: response.data.shelfarea,
        });
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, [rev_postId]);



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
      const updatedReview = {
        rev_postId: formData.rev_postId,
        postTitle: formData.postTitle,
        createdAt: formData.createdAt,
        modifiedAt: formData.modifiedAt,
        rate: formData.rate,
        nickname: formData.nickname,
        content: formData.content,
        bookNo: formData.bookNo,
        bookname: formData.bookname,
        author: formData.author,
        publisher: formData.publisher,
        callNum: formData.callNum,
        shelfArea: formData.shelfArea,
        isbn: formData.isbn,
        userId: formData.userId,
      };
      console.log("updatedReview : ", updatedReview);

      const response = await axios.put(
        `http://localhost:8080/news/reviewEdit/${rev_postId}`,
        updatedReview
      );

      if (response.status === 200) {
        console.log(response.data);
        // 수정이 성공하면 수정된 리뷰 상세 페이지로 이동
        navigate(`/news/reviewDetail/${rev_postId}`);
      } else {
        console.error("Error updating review:", response.data);
      }
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  // 리뷰 정보가 로딩 중일 때 보여줄 내용
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>리뷰 수정</h2>
      <hr />
      <Input
        type="text"
        name="postTitle"
        value={formData.postTitle}
        label="제목"
        onChange={handleFormChange}
      />
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
              <p>자료실: {selectedBook.shelfarea}</p>
            </div>
            <Button onClick={handleSearch}>다시 검색하기</Button>
          </div>
        ) : null}
      </div>

      {/* <div>
          <label htmlFor="postTitle">제목:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={formData.postTitle}
            onChange={handleFormChange}
          />
          <p>{formatDate(review.createdAt)}</p>
        </div> */}
      <div>
        <label htmlFor="rate">평점</label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={formData.rate}
          onChange={handleFormChange}
        />
      </div>
      <Container className="startRadio">
  {[1, 2, 3, 4, 5].map((star) => (
    <StarBox key={star} className="startRadio__box" onClick={() => handleStarClick(star)}>
      <input
        type="radio"
        name="star"
        value={star}
        checked={formData.rate === star} // Use formData.rate for checked state
      />
      <Flower
        className={`startRadio__img ${formData.rate >= star ? "active" : ""}`} // Use formData.rate for styling
      />
    </StarBox>
  ))}
</Container>
      <div>
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleFormChange}
        />
      </div>

      {/* 수정 버튼을 누르면 handleUpdate 함수 호출 */}
      <button onClick={handleUpdate}>리뷰 등록</button>
      <Link to={`/news/reviewDetail/${rev_postId}`}>
        <button>취소</button>
      </Link>
    </div>
  );
};

const Image = styled.div`
  width: 200px;
  height: 320px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
`;

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

export default ReviewEditPage;
