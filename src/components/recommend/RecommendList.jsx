import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "./RecommendList.style";
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

  const goToRecommendWrite = () => {
    if (canUserCreateRecommend) {
      navigate("/admin/recommendCreate");
    }
  };

  const [recommendList, setRecommendList] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [year, setYear] = useState(2023);

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
  }, [page, year]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const filterByYear = (recommend) => {
    const recommendYear = new Date(recommend.createdAt).getFullYear();
    return recommendYear === parseInt(year);
  };

  const filteredRecommendList = recommendList
    .filter(filterByYear)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <S.StyledWord>
        <h1>사서 추천 도서</h1>
      </S.StyledWord>
      <hr />
      <br />
      <S.ParentContainer>
        <S.InfoText>
          책향기 도서관 사서들이 추천하는 이 달의 도서를 만나보세요.
        </S.InfoText>
        {canUserCreateRecommend && (
          <StyledButton type="middle" onClick={goToRecommendWrite}>
            프로그램 등록
          </StyledButton>
        )}
      </S.ParentContainer>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <S.YearSelectContainer>
          <S.YearSelect type="number" value={year} onChange={handleYearChange}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </S.YearSelect>
          <S.YearSelectArrow>∨</S.YearSelectArrow>
        </S.YearSelectContainer>
      </div>
      <hr />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {recommendList &&
          filteredRecommendList
            .slice(offset, offset + limit)
            .map((recommend, index) => (
              <S.StyledList key={recommend.recPostId}>
                <StyledLink to={`/user/recommendDetail/${recommend.recPostId}`}>
                  <S.DateBadge>
                    {new Date(recommend.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                    })}
                  </S.DateBadge>
                  <S.Image src={recommend.bookImageURL} />
                  <S.PostTitle>
                    {recommend.postTitle
                      .replace(/,/g, ",\n")
                      .replace(/\|/g, "\n")}
                  </S.PostTitle>
                </StyledLink>
              </S.StyledList>
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

const StyledButton = styled(Button)`
  height: 100%;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
