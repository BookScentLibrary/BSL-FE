import styled from "styled-components";

export const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin-left: 10px;
`;

export const SelectArrow = styled.div`
  position: absolute;
  top: 50%;
  font-size: 20px;
  color: gray;
  right: 5px;
  transform: translateY(-50%);
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 340px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 5px;
`;

export const SelectInput = styled.select`
  width: 300px;
  height: 100%;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  margin-left: 45px;
  margin-bottom: 20px;
`;
