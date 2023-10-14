import React from "react";

import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import ProgramForm from "../program/ProgramForm";
import ReviewListPage from "../review/ReviewListPage";
import NoticeListPage from "../notice/NoticeListPage";
import ProgramDetail from "../program/ProgramDetail";
import ProgramListPage from "../program/ProgramListPage";
import { useLocation, useNavigate } from "react-router-dom";

const NewsPartMain = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const title = "소식·참여";
  const [pageIdx, setPageIdx] = React.useState(0);
  const page = {
    0: <NoticeListPage />,
    1: <ProgramListPage />,
    2: <ReviewListPage />,
  };

  const goToNotice = () => {};

  const goToProgram = () => {
    setPageIdx(1);
    navigate("/news/programList");
  };

  const goToReview = () => {
    setPageIdx(2);
    navigate("/news/reviewList");
  };

  React.useEffect(() => {
    if (pathname === "/news") {
      setPageIdx(0);
    } else if (pathname.split("/")[1] === "programList") {
      setPageIdx(1);
    } else if (pathname.split("/")[2] === "reviewList") {
      setPageIdx(2);
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <Container>
        <Menu title={title} selected={pageIdx}>
          <p className="menu_first" onClick={goToNotice}>
            공지사항
          </p>
          <p className="menu_second" onClick={goToProgram}>
            프로그램 안내
          </p>
          <p className="menu_third" onClick={goToReview}>
            리뷰게시판
          </p>
        </Menu>
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
