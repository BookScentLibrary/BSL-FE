import React from "react";
import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import SearchMain from "../../components/search/searchMain";
import Button from "../../components/shared/elements/Button";
import BookDetail from "./BookDetail";

const BookMenuMain = () => {
  const title = "자료 검색";
  const menuArr = ["소장자료", "신간 도서", "인기 대출 도서", "사서 추천 도서"];
  const [pageIdx, setPageIdx] = React.useState(0);
  const page = {
    0: <SearchMain />,
    1: "",
    2: "",
    3: "",
    4: <BookDetail page={pageIdx} setPage={setPageIdx}/>,
  };

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
        <Button onClick={() => setPageIdx(4)}>임시 상세페이지</Button>
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
