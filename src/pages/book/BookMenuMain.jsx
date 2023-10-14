import React from "react";
import Menu from "../../components/shared/comp/menu/Menu";
import styled from "styled-components";
import SearchMain from "../../components/search/searchMain";
import NewBookMain from "../../components/newBook/NewBookList";
import Button from "../../components/shared/elements/Button";
import BookDetail from "./BookDetail";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/shared/elements/Input";
import RecommendList from "../../components/recommend/RecommendList";

const BookMenuMain = (props) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [pageIdx, setPageIdx] = React.useState(0);

  const page = {
    0: <SearchMain />,
    1: <NewBookMain />,
    2: "",
    3: <RecommendList />,
    4: <BookDetail page={pageIdx} setPage={setPageIdx} />,
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
  };

  const goToRecommend = () => {
    setPageIdx(3);
    navigate("/book/recommendList");
  };

  const goToDetail = () => {
    setPageIdx(4);
    navigate(`/book/detail/${value}`);
  };


  React.useEffect(() => {
    if (pathname === "/book") {
      setPageIdx(0);
    } else if (pathname.split("/")[2] === "detail") {
      setPageIdx(4);
    } else if (pathname.split("/")[2] === "recommendList") {
      setPageIdx(3);
    }
  }, [pathname]);

  const [value, setValue] = React.useState(1);

  return (
    <React.Fragment>
      <Container>
        <Menu title={"자료 검색"} selected={pageIdx}>
          <p className="menu_first" onClick={goToSearch}>소장자료</p>
          <p className="menu_second" onClick={goToNewBook}>신간 도서</p>
          <p className="menu_third" onClick={goToBestseller}>인기 대출 도서</p>
          <p className="menu_fourth" onClick={goToRecommend}>사서 추천 도서</p>
        </Menu>

        {page[pageIdx]}

        <div style={{ display: "grid", gap: "12px" }}>
          <Input
            label="책번호"
            width="100px"
            padding="0 20px 0 100px"
            defaultValue="1"
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={() => goToDetail()}>임시 상세페이지</Button>
        </div>
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
