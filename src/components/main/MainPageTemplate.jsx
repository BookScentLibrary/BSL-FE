import React from "react";
import MainNewBook from "./MainNewBook";
import MainNotice from "./MainNotice";
import MainBestseller from "./MainBestseller";
import MainRecommend from "./MainRecommend";
import MainReview from "./MainReview";

const MainPageTemplate = () => {

  return (
    <React.Fragment>
      <MainNewBook/>
      <MainNotice/>
      <MainBestseller/>
      <MainRecommend/>
      <MainReview/>
    </React.Fragment>
  );
};



export default MainPageTemplate;
