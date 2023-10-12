import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios를 사용하여 데이터 요청
import BookDetailTemplate from "../../components/book/detail/BookDetailTemplate";

const BookDetail = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/newbooks/new'); // API 경로에 맞게 수정
        setData(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData(); // 데이터 요청 함수 호출
  }, []); // 빈 배열을 두 번째 매개변수로 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return <BookDetailTemplate setPage={props.setPage} page={props.page} data={data} />;
};

export default BookDetail;
