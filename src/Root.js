import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 } from "uuid";
import routeList from "./rootRouters";
import Header from "./components/shared/comp/header/Header";
import Banner from "./components/shared/comp/banner/Banner";
import Footer from "./components/shared/comp/footer/Footer";
import Wrapper from "./components/shared/Wrapper";
import styled from "styled-components";

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
