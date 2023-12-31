import React from "react";
import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import SearchMain from "../../components/search/searchMain";
import NewBookMain from "../../components/newBook/NewBookDetail";
import Button from "../../components/shared/elements/Button";
import BookDetail from "./BookDetail";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/shared/elements/Input";
import RecommendList from "../../components/recommend/RecommendList";
import RecommendDetail from "../../components/recommend/RecommendDetail";
import BestSeller from "../../components/bestBookPage/BestSeller";

const BookMenuMain = (props) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [pageIdx, setPageIdx] = React.useState(0);
  const [recPostId, setRecPostId] = React.useState(0);

  const page = {
    0: <SearchMain />,
    1: <NewBookMain />,
    2: <BestSeller />,
    3: <RecommendList />,
    4: <BookDetail page={pageIdx} setPage={setPageIdx} />,
    5: <RecommendDetail recPostId={recPostId} setRecPostId={setRecPostId} />,
  };

  const goToSearch = () => {
    setPageIdx(0);
    navigate("/book");
  };

  const goToNewBook = () => {
    setPageIdx(1);
  };

  const goToBestseller = () => {
    setPageIdx(2);
    navigate("/book/bestseller");
  };

  const goToRecommend = () => {
    setPageIdx(3);
    navigate("/user/recommendList");
  };

  const goToDetail = () => {
    setPageIdx(4);
    navigate(`/book/detail/${value}`);
  };

  React.useEffect(() => {
    if (pathname === "/book") {
      setPageIdx(0);
    } else if (pathname.split("/")[1] === "newbook") {
      setPageIdx(1);
    } else if (pathname.split("/")[1] === "bestseller") {
      setPageIdx(2);
    } else if (pathname.split("/")[2] === "recommendList") {
      setPageIdx(3);
    } else if (pathname.split("/")[2] === "detail") {
      setPageIdx(4);
    } else if (pathname.split("/")[2] === "recommendDetail") {
      setPageIdx(5);
    }
  }, [pathname]);

  const [value, setValue] = React.useState(1);

  return (
    <React.Fragment>
      <Container>
        <Menu title={"자료 검색"} selected={pageIdx}>
          <p className="menu_first" onClick={goToSearch}>
            소장자료
          </p>
          <p className="menu_second" onClick={goToNewBook}>
            신간 도서
          </p>
          <p className="menu_third" onClick={goToBestseller}>
            인기 대출 도서
          </p>
          <p className="menu_fourth" onClick={goToRecommend}>
            사서 추천 도서
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
  gap: 12px 0;
`;
export default BookMenuMain;
