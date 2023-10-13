import React from "react";
import MainNewBook from "./MainNewBook";
import MainNotice from "./MainNotice";
import MainBestseller from "./MainBestseller";
import MainRecommend from "./MainRecommend";
import MainReview from "./MainReview";
import styled from "styled-components";

const MainPageTemplate = () => {
  return (
    <React.Fragment>
      <MainNewBook />
      <Line />
      <MainNotice />
      <Line />
      <MainBestseller />
      <MainRecommend />
      <MainReview />
    </React.Fragment>
  );
};

const Line = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
`;

export default MainPageTemplate;
