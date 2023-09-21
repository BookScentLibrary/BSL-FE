import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 } from "uuid";
import routeList from "./rootRouters";
import Header from "./components/shared/header/Header";
import Banner from "./components/shared/banner/Banner";
import Footer from "./components/shared/footer/Footer";
import Wrapper from "./components/shared/Wrapper";

const Root = () => {
  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        <Routes>
          {routeList.map((item, idx) => {
            return (
              <Route key={v4()} path={item.path} element={<item.element />} />
            );
          })}
        </Routes>
      <Footer />
      </Wrapper>
    </>
  );
};

export default Root;
