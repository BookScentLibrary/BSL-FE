import { useLocation } from "react-router";
import styled from "styled-components";

const Wrapper = (props) => {
  const { children } = props;

  const location = useLocation().pathname.split("/")[2];

  return (
    <Wrap mypage={location === "mypage" && "mypage"}>
      <InnerWrapper mypage={location === "mypage" && "mypage"}>
        {location === "mypage" ? (
          <MyPageWrapper>{children}</MyPageWrapper>
        ) : (
          <>{children}</>
        )}
      </InnerWrapper>
    </Wrap>
  );
};


const Wrap = styled.div`
  width: 100%;
  min-width: 1232px;
  height: 100%;
  margin: ${({ mypage }) => (mypage === "mypage" ? "auto" : "60px auto")};
  padding-bottom: 280px;
  position: relative;
  @media ${({ theme }) => theme.device.web} {
    width: 100%;
  }
`;

const InnerWrapper = styled.div`
  background-color: ${({ mypage, theme }) =>
    mypage === "mypage" ? "#f4f4f4" : "#fff"};
  width: ${({ mypage }) => (mypage === "mypage" ? "100%" : "1232px")};
  min-width: 1200px;
  margin: auto;
  padding: ${({ mypage }) =>
    mypage === "mypage" ? "40px 0 120px 0" : "0 30px 120px 30px"};
  z-index: 100;
  height: 100%;
`;

const MyPageWrapper = styled.div`
  width: 1232px;
  margin: auto;
`;

export default Wrapper;
