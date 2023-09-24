import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 } from "uuid";
import routeList from "./rootRouters";
import Header from "./components/shared/header/Header";
import Banner from "./components/shared/banner/Banner";
import Footer from "./components/shared/footer/Footer";
import Wrapper from "./components/shared/Wrapper";
import ReviewListPage from "./pages/ReviewListPage";


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

            <Route path="/reviewList" component={ReviewListPage} />
            {/* 상태는 ReviewListPage가 들고있고 */}
           

            
            {/* ReviewWritePage는  ReviewListPage의 상태에 접근할수있는 방법이 없음
          ReviewListPage와 ReviewWritePage는 관련이 없기 때문
          데이터를 전송할때는 파라미터를 통해 넘기는 방법밖에없음
          ReviewListPage는 서버한테 api를 요청해서 db에서 다운받아아서 뿌리고
          ReviewWritePage는 데이터를 db에 인서트
          */}
          </Routes>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Root;
