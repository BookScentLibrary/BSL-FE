import React from "react";
import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import ReviewListPage from "../review/ReviewListPage";

const NewsPartMain = () => {
  const menuArr = ["공지사항", "프로그램 안내", "리뷰게시판"];
  const [pageIdx, setPageIdx] = React.useState(0);
  console.log(pageIdx);
  const page = {
    // 0: <Notice/>,
    // 1: <Program/>,
    0: "",
    1: "",
    2: <ReviewListPage />,
  };

  return (
    <React.Fragment>
      <Container>
        <Menu
          title="소식·참여"
          menuArr={menuArr}
          pageIdx={pageIdx}
          setPageIdx={setPageIdx}
        />
        {page[pageIdx]}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;
export default NewsPartMain;
