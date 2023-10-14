import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "../../pages/review/Pagination";
import Button from "../shared/elements/Button";
import { useNavigate, Link } from "react-router-dom";

const RecommendList = () => {
  const navigate = useNavigate();

  //글 등록 페이지로 이동
  const goToRecommendWrite = () => {
    navigate("/admin/createRecommend");
  };

  //게시글 리스트
  const [recommendList, setRecommendList] = useState([]);

  /*const userHasPermission = (user) => {
    return user && (user.permission === 1 || user.permission === 2);
  };*/

  // 페이지당 표시할 항목 수
  const [limit, setLimit] = useState(6);
  //현재 페이지
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  //년도 선택
  const [year, setYear] = useState(2023);

  //작성일
  const [order, setOrder] = useState("createdAt");
  //최근 작성일 순으로 정렬
  const sortedRecommendList = recommendList.sort((a, b) => b[order] - a[order]);

  const getRecommendList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/recommendList"
      );
      console.log(response.data);
      setRecommendList(response.data.data);
    } catch (error) {
      console.error("Error fetching recommend list:", error);
    }
  };

  useEffect(() => {
    getRecommendList();
    setOrder("rev_postId");
  }, [page, year]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // 연도를 필터링하는 함수
  const filterByYear = (recommend) => {
    const recommendYear = new Date(recommend.createdAt).getFullYear();
    console.log("recommendYear : " + recommendYear);
    return recommendYear === parseInt(year); // 년도를 정수로 변환하여 비교
  };

  const filteredRecommendList = recommendList.filter(filterByYear);
  console.log("filteredRecommendList : " + filteredRecommendList);

  return (
    <div>
      <StyledWord>
        <h1>사서 추천 도서</h1>
        <hr />
        <br />
      </StyledWord>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>책향기 도서관 사서들이 추천하는 이 달의 도서를 만나보세요.</p>
        {/*{userHasPermission(user) && (
        <button onClick={handleProgramRegistration}>프로그램 등록</button>
      )}*/}

        <Button type="middle" onClick={goToRecommendWrite}>
          프로그램 등록
        </Button>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <select type="number" value={year} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <hr />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredRecommendList
          .slice(offset, offset + limit)
          .map((recommend, index) => (
            <li
              key={recommend.recPostId}
              style={{
                width: "33%",
                padding: "10px",
                boxSizing: "border-box",
                position: "relative",
                listStyleType: "none",
              }}
            >
              <Link
                to={`/user/recommendDetail/${recommend.recPostId}`}
                style={{ cursor: "pointer" }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "5px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1, // 다른 내용 위에 표시
                    }}
                  >
                    {new Date(recommend.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                    })}
                  </div>
                  <Image src={recommend.bookImageURL} />
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {recommend.postTitle
                      .replace(/,/g, "\n")
                      .replace(/\|/g, "\n")}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <hr />
      <footer>
        <Pagination
          total={filteredRecommendList.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default RecommendList;

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
