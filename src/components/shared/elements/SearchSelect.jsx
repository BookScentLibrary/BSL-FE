import React from "react";
import styled from "styled-components";

export default function SearchSelect(props) {
  const { data, value, setValue, size } = props;
  const $dropDownList = React.useRef(null);
  const [isShow, setIsShow] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(data[value]);

  const handleSelect = (idx) => {
    // 선택된 option index 상위 컴포넌트로 전달
    setValue(idx);
    // dropdown 전환
    setIsShow((prev) => !prev);
    // 선택된 option value 노출
    setSelectedValue(data[idx]);
  };

  const handleFocusOut = React.useCallback(() => {
    // 커서 focus out시 dropdown close
    setIsShow((prev) => !prev);
  }, []);

  React.useEffect(() => {
    // 커서 event
    if ($dropDownList.current === null) return;
    $dropDownList.current?.addEventListener("mouseleave", handleFocusOut);
    return () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      $dropDownList.current?.removeEventListener("mouseleave", handleFocusOut);
  }, [handleFocusOut, isShow, $dropDownList]);

  return (
    <SelectBox
      onClick={() => setIsShow((prev) => !prev)}
      $show={isShow}
      size={size}
    >
      <Label>{selectedValue}</Label>
      <SelectOptions $show={isShow} ref={$dropDownList} size={size}>
        {data?.map((item, i) => {
          return (
            <Option
              key={item + i}
              onClick={() => {
                handleSelect(i);
                setIsShow(false);
              }}
            >
              {item}
            </Option>
          );
        })}
      </SelectOptions>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  position: relative;
  width: 134px;
  padding: ${({ size }) => (size == "small" ? "14.5px 0" : "21.5px 0")};
  border-radius: ${({ $show }) => ($show ? "4px 0 0 0 " : "4px 0 0 4px")};
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  border: 1px solid #000;
  border-right: none;
  text-align: center;

  &::before {
    ${({ $show }) => ($show ? "transform: rotate(180deg)" : null)};
    ${({ $show, size }) =>
      $show
        ? size === "small"
          ? "bottom: 8px"
          : "bottom: 12px"
        : size === "small"
        ? "top: 8px"
        : "top: 12px"};
    content: "⌵";
    position: absolute;
    right: 12px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkgray};
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: ${({ size }) => (size === "small" ? "32px" : "46px")};
  left: -1px;
  width: 100%;
  overflow: hidden;
  max-height: ${({ $show }) => ($show ? "none" : "0")};
  padding: ${({ $show }) => ($show ? "8px 0" : "0")};
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkgray};
  border: ${({ $show }) => ($show ? "1px solid #000" : "none")};
  border-top: none;
  text-align: center;
`;
const Option = styled.li`
  padding: 16px 0;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
