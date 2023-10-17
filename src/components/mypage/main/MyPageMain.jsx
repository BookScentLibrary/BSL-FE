import React from "react";
import Flex from "../../shared/elements/Flex";
import RentStatus from "./RentStatus";
import RentNow from "./RentNow";
import RentHistory from "./RentHistory";
import MyReview from "./MyReview";
import styled from "styled-components";

const MyPageMain = () => {
  return (
    <React.Fragment>
      <Flex>
        <RentStatus />
        <RentNow />
      </Flex>
      <RentHistory />
      <Flex>
        <AdSection></AdSection>
        <MyReview />
      </Flex>
    </React.Fragment>
  );
};
const AdSection = styled.div`
  width: 396px;
  height: 540px;
  border-radius: 20px;
  background-color: #fff;

  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
`;
export default MyPageMain;
