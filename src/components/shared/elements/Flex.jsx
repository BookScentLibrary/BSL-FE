import React from "react";
import styled from "styled-components";

const Flex = (props) => {
  const { children, gap, center, margin, sb } = props;

  return (
    <FlexContainer gap={gap} $center={center} margin={margin} $sb={sb}>
      {children}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "24px")};
  ${({ $center }) => ($center ? "align-items:center" : "")};
  ${({ margin }) => (margin ? `margin: ${margin}` : "")};
  ${({ $sb }) => ($sb ? "justify-content: space-between" : "")};
`;



export default Flex;
