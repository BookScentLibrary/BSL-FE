import React from "react";
import MoreButton from "../shared/elements/MoreButton";
import Flex from "../shared/elements/Flex";
import styled from "styled-components";

const RentNow = () => {

  return (
    <HarpSection>
      <Flex sb center>
        <p className="mypage_harp__title">대출 중인 도서</p>
        <MoreButton />
      </Flex>
      <div style={{ marginLeft: "32px"}}>
        <Books>
          <Book/>
          <Book/>
          <Book/>
        </Books>
      </div>
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

const Books = styled.div`
  display: flex;
  width: fit-content;
  margin: 56px auto;
`;

const Book = styled.div`
  margin: 0 0 0 -32px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 128px;
  height: 192px;
  border-radius: 8px;
`;

export default RentNow;
