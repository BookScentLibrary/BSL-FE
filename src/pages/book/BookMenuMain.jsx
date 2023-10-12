import React from "react";
import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import SearchMain from "../../components/search/searchMain";
import Button from "../../components/shared/elements/Button";
import BookDetail from "./BookDetail";
import { useLocation, useNavigate } from "react-router-dom";
import RecommendList from "../../components/recommend/RecommendList";

const BookMenuMain = (props) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const title = "자료 검색";
  const menuArr = ["소장자료", "신간 도서", "인기 대출 도서", "사서 추천 도서"];
  const [pageIdx, setPageIdx] = React.useState(0);
  const page = {
    0: <SearchMain />,
    1: "",
    2: "",
    3: <BookDetail page={pageIdx} setPage={setPageIdx} />,
    4: <RecommendList />,
  };

  const goToDetail = () => {
    setPageIdx(4);
    navigate(`/book/detail/`);
  };

  React.useEffect(() => {
    if (pathname === "/book") {
      setPageIdx(0);
    } else if (pathname === "/book/detail/") {
      setPageIdx(4);
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <Container>
        <Menu
          title={title}
          menuArr={menuArr}
          pageIdx={pageIdx}
          setPageIdx={setPageIdx}
        />
        {page[pageIdx]}
        <Button onClick={() => goToDetail()}>임시 상세페이지</Button>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 12px 0;
`;
export default BookMenuMain;
