import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../../asset/icons/searchglass.svg";
import SearchSelect from "./SearchSelect";

const Input = (props) => {
  const {
    size,
    width,
    placeholder,
    value,
    padding,
    id,
    name,
    label,
    onChange,
    ref,
    onKeyUp,
    onClick,
    maxLength,
    defaultValue,
    data,
    optionValue,
    setOptionValue,
    inputType,
  } = props;

  const styles = {
    $inputType: inputType,
    size,
    width,
    $padding: padding,
  };

  const SelectData = data ? data : ["전체검색", "제목", "저자", "발행처"];

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      {inputType !== "search" ? (
        <Label $inputType={inputType}>{label}</Label>
      ) : (
        <div style={{ position: "absolute" }}>
          <SearchSelect
            data={SelectData}
            value={optionValue}
            setValue={setOptionValue}
          ></SearchSelect>
        </div>
      )}
      <Inp
        id={id}
        name={name}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onKeyUp={onKeyUp}
        defaultValue={defaultValue}
        {...styles}
      />
      {inputType === "search" ? (
        <Search
          onClick={onClick}
          style={{
            position: "absolute",
            right: "0",
            padding: "12px 16px",
          }}
        />
      ) : null}
    </div>
  );
};

const Label = styled.label`
  position: absolute;
  top: 16px;
  padding: 0 18px;
  width: 84px;
  text-align: ${({ $inputType }) =>
    $inputType === "post" ? "center" : "left"};
  font-size: 16px;
  font-weight: 600;
`;

const Inp = styled.input`
  width: ${({ width, $inputType, size }) =>
    width
      ? width
      : $inputType === "search"
      ? size === "small"
        ? "174px"
        : "522px"
      : "1004px"};

  height: ${({ $inputType, size }) =>
    $inputType === "search" ? "60px" : "46px"};
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
  padding-left: ${({ $inputType }) =>
    $inputType === "search" ? "152px" : "118px"};
  padding-right: ${({ $inputType }) =>
    $inputType === "search" ? "72px" : "16px"};
  ${({ $padding }) => ($padding ? `padding:${$padding};` : "")}
`;

export default Input;
