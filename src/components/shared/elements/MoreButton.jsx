import React from "react";
import { ReactComponent as Arrow } from "../../../asset/icons/smallarrow.svg";
import styled from "styled-components";

const MoreButton = (props) => {
  return (
    <More onClick={props.onClick}>
      더보기
      <Arrow fill="#B8B8BD" />
    </More>
  );
};

const More = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
`;

export default MoreButton;
