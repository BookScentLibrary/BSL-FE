import React from "react";
import MyPageTemplate from "../../components/mypage/MyPageTemplate";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Container>
      <MyPageTemplate />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
export default MyPage;
