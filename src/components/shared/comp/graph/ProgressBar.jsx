import React from "react";
import styled from "styled-components";

const ProgressBar = ({ width, height, percent, f }) => {

  return (
    <Container width={width} height={height} $f={f ? "true" : "false"}>
      <Background />
      <Progress width={percent} $f={f ? "true" : "false"} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin: ${({ $f }) => ($f === "true" ? "0 16px 0 0" : "0 0 0 16px")};
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "16px")};
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  ${({ $f }) => ($f === "true" ? "left: 0;" : "right: 0;")}
  width: ${({ width }) => width};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default ProgressBar;
