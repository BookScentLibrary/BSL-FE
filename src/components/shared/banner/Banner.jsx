import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <React.Fragment>
      <Container>
        <Image />
      </Container>
    </React.Fragment>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 520px;
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://imgbuckett.s3.ap-northeast-2.amazonaws.com/banner-1.png")
    no-repeat;
  background-position: 60% 50%;
  background-size: 100%;
  border-radius: 30px 30px 0 0;
`;

export default Banner;
