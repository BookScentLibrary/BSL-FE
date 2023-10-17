import React from "react";
import styled from "styled-components";

const RentStatus = () => {
  return (
    <HarpSection>
      <p className="mypage_harp__title">대출 도서 통계</p>
    </HarpSection>
  );
};
const HarpSection = styled.div`
  box-sizing: border-box;
  padding: 28px 40px;
  width: 100%;
  height: 398px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);

  & > div > .mypage_harp__title {
    font-size: 24px;
  }
  & > .mypage_harp__title {
    font-size: 24px;
  }
`;
export default RentStatus;
