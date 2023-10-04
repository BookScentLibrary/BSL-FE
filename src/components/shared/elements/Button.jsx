import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { type, onClick, disabled, color, children, width } = props;

  const styles = {
    color,
    width,
    type,
  };

  return (
    <Btn onClick={onClick} disabled={disabled} {...styles}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  box-sizing: border-box;
  background: ${({ color, theme }) =>
    color
      ? color === "red"
        ? theme.colors.secondary
        : color === "gray"
        ? theme.colors.gray
        : theme.colors.primary
      : theme.colors.primary};
  border-radius: 4px;
  width: ${({ width }) => (width ? width : "160px")};
  height: ${({ type }) =>
    type
      ? type === "small"
        ? "28px"
        : type === "middle"
        ? "48px"
        : "60px"
      : "60px"};
  font-size: ${({ type }) =>
    type ? (type === "small" ? "14px" : "20px") : "20px"};
  color: #fff;
  border: none;

  &:hover {
    background: ${({ color, theme }) =>
      color
        ? color === "red"
          ? theme.colors.darkred5
          : color === "gray"
          ? theme.colors.grayhover
          : theme.colors.darkgreen5
        : theme.colors.darkgreen5};
  }
`;

export default Button;
