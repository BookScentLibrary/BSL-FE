import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "../../pages/review/Pagination";
import Button from "../shared/elements/Button";
import { useNavigate, Link } from "react-router-dom";

const RecommendList = () => {
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("userId");
  const permission = sessionStorage.getItem("permission");

  const canUserCreateRecommend =
    userId && (permission === "1" || permission === "2");

  //글 등록 페이지로 이동
  const goToRecommendWrite = () => {
    if (canUserCreateRecommend) {
      navigate("/admin/recommendCreate");
    }
  };

  //게시글 리스트
  const [recommendList, setRecommendList] = useState([]);

  // 페이지당 표시할 항목 수
  const [limit, setLimit] = useState(6);
  //현재 페이지
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  //년도 선택
  const [year, setYear] = useState(2023);

  //작성일
  const [order, setOrder] = useState("createdAt");

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

  // 정렬된 리스트 대신에 필터된 리스트를 사용합니다.
  const filteredRecommendList = recommendList
    .filter(filterByYear)
    .sort((a, b) => b[order] - a[order]);

  return (
    <div>
      <StyledWord>
        <h1>사서 추천 도서</h1>
      </StyledWord>
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>책향기 도서관 사서들이 추천하는 이 달의 도서를 만나보세요.</p>
        <div style={{ display: canUserCreateRecommend ? "block" : "none" }}>
          <Button type="middle" onClick={goToRecommendWrite}>
            프로그램 등록
          </Button>
        </div>
      </div>

      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            border: "1px solid #000",
            borderRadius: "5px",
          }}
        >
          <select
            type="number"
            value={year}
            onChange={handleYearChange}
            style={{
              width: "70px",
              padding: "5px",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              appearance: "none",
              cursor: "pointer",
            }}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <div
            style={{
              position: "absolute",
              top: "50%",
              color: "gray",
              right: "5px", // 화살표 위치 조정
              transform: "translateY(-50%)",
            }}
          >
            ∨
          </div>
        </div>
      </div>
      <hr />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {recommendList &&
          filteredRecommendList
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
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        backgroundColor: "limegreen",
                        color: "#fff",
                        padding: "5px",
                        position: "absolute",
                        top: "10px",
                        left: "20px",
                        zIndex: 1,
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                    >
                      {new Date(recommend.createdAt).toLocaleDateString(
                        "ko-KR",
                        {
                          year: "numeric",
                          month: "2-digit",
                        }
                      )}
                    </div>
                    <Image src={recommend.bookImageURL} />
                    <div
                      style={{
                        whiteSpace: "pre-wrap",
                        fontSize: "25px",
                        padding: "10px",
                      }}
                    >
                      {recommend.postTitle
                        .replace(/,/g, ",\n")
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
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #000;
  border-radius: 5px;
`;
